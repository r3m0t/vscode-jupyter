// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

'use strict';

import * as cp from 'child_process';
import * as url from 'url';
import { inject, injectable, named } from 'inversify';
import * as os from 'os';
import * as path from 'path';
import * as uuid from 'uuid/v4';
import { CancellationToken, Disposable } from 'vscode';
import { CancellationError, createPromiseFromCancellation } from '../../common/cancellation';
import { WrappedError } from '../../common/errors/types';
import { traceError, traceInfo } from '../../common/logger';
import { IFileSystem, TemporaryDirectory } from '../../common/platform/types';
import { IDisposable, IOutputChannel, Resource } from '../../common/types';
import * as localize from '../../common/utils/localize';
import { StopWatch } from '../../common/utils/stopWatch';
import { IServiceContainer } from '../../ioc/types';
import { sendTelemetryEvent } from '../../telemetry';
import { JUPYTER_OUTPUT_CHANNEL, Telemetry } from '../constants';
import { ReportableAction } from '../progress/types';
import { IJupyterConnection, IJupyterSubCommandExecutionService } from '../types';
import { JupyterConnectionWaiter } from './jupyterConnection';
import { JupyterInstallError } from '../errors/jupyterInstallError';
import { disposeAllDisposables } from '../../common/helpers';
import { JupyterConnectError } from '../errors/jupyterConnectError';
import { KernelProgressReporter } from '../progress/kernelProgressReporter';

/**
 * Responsible for starting a notebook.
 * Separate class as theres quite a lot of work involved in starting a notebook.
 *
 * @export
 * @class NotebookStarter
 * @implements {Disposable}
 */
@injectable()
export class NotebookStarter implements Disposable {
    private readonly disposables: IDisposable[] = [];
    private static _usedPorts = new Set<number>();
    public static get usedPorts() {
        return Array.from(NotebookStarter._usedPorts);
    }
    constructor(
        @inject(IJupyterSubCommandExecutionService)
        private readonly jupyterInterpreterService: IJupyterSubCommandExecutionService,
        @inject(IFileSystem) private readonly fs: IFileSystem,
        @inject(IServiceContainer) private readonly serviceContainer: IServiceContainer,
        @inject(IOutputChannel) @named(JUPYTER_OUTPUT_CHANNEL) private readonly jupyterOutputChannel: IOutputChannel
    ) {}
    public dispose() {
        while (this.disposables.length > 0) {
            const disposable = this.disposables.shift();
            try {
                if (disposable) {
                    disposable.dispose();
                }
            } catch {
                // Nohting
            }
        }
    }
    public async start(
        resource: Resource,
        useDefaultConfig: boolean,
        customCommandLine: string[],
        workingDirectory: string,
        cancelToken: CancellationToken
    ): Promise<IJupyterConnection> {
        traceInfo('Starting Notebook');
        // Now actually launch it
        let exitCode: number | null = 0;
        let starter: JupyterConnectionWaiter | undefined;
        const disposables: IDisposable[] = [];
        const progress = KernelProgressReporter.reportProgress(resource, ReportableAction.NotebookStart);
        try {
            // Generate a temp dir with a unique GUID, both to match up our started server and to easily clean up after
            const tempDirPromise = this.generateTempDir();
            tempDirPromise.then((dir) => this.disposables.push(dir)).ignoreErrors();
            // Before starting the notebook process, make sure we generate a kernel spec
            const args = await this.generateArguments(
                useDefaultConfig,
                customCommandLine,
                tempDirPromise,
                workingDirectory
            );

            // Make sure we haven't canceled already.
            if (cancelToken.isCancellationRequested) {
                throw new CancellationError();
            }

            // Then use this to launch our notebook process.
            traceInfo('Starting Jupyter Notebook');
            const stopWatch = new StopWatch();
            const [launchResult, tempDir] = await Promise.all([
                this.jupyterInterpreterService.startNotebook(args || [], {
                    throwOnStdErr: false,
                    encoding: 'utf8',
                    token: cancelToken
                }),
                tempDirPromise
            ]);

            // Watch for premature exits
            if (launchResult.proc) {
                launchResult.proc.on('exit', (c: number | null) => (exitCode = c));
                launchResult.out.subscribe((out) => this.jupyterOutputChannel.append(out.out));
            }

            // Make sure this process gets cleaned up. We might be canceled before the connection finishes.
            if (launchResult) {
                cancelToken.onCancellationRequested(
                    () => {
                        launchResult.dispose();
                    },
                    this,
                    disposables
                );
            }

            // Wait for the connection information on this result
            traceInfo('Waiting for Jupyter Notebook');
            starter = new JupyterConnectionWaiter(
                launchResult,
                tempDir.path,
                workingDirectory,
                this.jupyterInterpreterService.getRunningJupyterServers.bind(this.jupyterInterpreterService),
                this.serviceContainer,
                cancelToken
            );
            // Make sure we haven't canceled already.
            if (cancelToken && cancelToken.isCancellationRequested) {
                throw new CancellationError();
            }
            const connection = await Promise.race([
                starter.waitForConnection(),
                createPromiseFromCancellation<void>({
                    cancelAction: 'reject',
                    token: cancelToken
                })
            ]);

            if (!connection) {
                throw new CancellationError();
            }

            // Fire off telemetry for the process being talkable
            sendTelemetryEvent(Telemetry.StartJupyterProcess, stopWatch.elapsedTime);

            try {
                const port = parseInt(url.parse(connection.baseUrl).port || '0', 10);
                if (port && !isNaN(port)) {
                    if (launchResult.proc) {
                        launchResult.proc.on('exit', () => NotebookStarter._usedPorts.delete(port));
                    }
                    NotebookStarter._usedPorts.add(port);
                }
            } catch (ex) {
                traceError(`Parsing failed ${connection.baseUrl}`, ex);
            }
            disposeAllDisposables(disposables);
            return connection;
        } catch (err) {
            disposeAllDisposables(disposables);
            if (err instanceof CancellationError || err instanceof JupyterConnectError) {
                throw err;
            }

            // Its possible jupyter isn't installed. Check the errors.
            if (!(await this.jupyterInterpreterService.isNotebookSupported())) {
                throw new JupyterInstallError(
                    await this.jupyterInterpreterService.getReasonForJupyterNotebookNotBeingSupported(),
                    localize.DataScience.pythonInteractiveHelpLink()
                );
            }

            // Something else went wrong. See if the local proc died or not.
            if (exitCode !== 0) {
                throw new Error(localize.DataScience.jupyterServerCrashed().format(exitCode?.toString()));
            } else {
                throw WrappedError.from(localize.DataScience.jupyterNotebookFailure().format(err), err);
            }
        } finally {
            progress.dispose();
            starter?.dispose();
        }
    }

    private async generateDefaultArguments(
        useDefaultConfig: boolean,
        tempDirPromise: Promise<TemporaryDirectory>,
        workingDirectory: string
    ): Promise<string[]> {
        // Parallelize as much as possible.
        const promisedArgs: Promise<string>[] = [];
        promisedArgs.push(Promise.resolve('--no-browser'));
        promisedArgs.push(Promise.resolve(this.getNotebookDirArgument(workingDirectory)));
        if (useDefaultConfig) {
            promisedArgs.push(this.getConfigArgument(tempDirPromise));
        }
        // Modify the data rate limit if starting locally. The default prevents large dataframes from being returned.
        promisedArgs.push(Promise.resolve('--NotebookApp.iopub_data_rate_limit=10000000000.0'));

        const [args, dockerArgs] = await Promise.all([Promise.all(promisedArgs), this.getDockerArguments()]);

        // Check for the debug environment variable being set. Setting this
        // causes Jupyter to output a lot more information about what it's doing
        // under the covers and can be used to investigate problems with Jupyter.
        const debugArgs = process.env && process.env.VSCODE_JUPYTER_DEBUG_JUPYTER ? ['--debug'] : [];

        // Use this temp file and config file to generate a list of args for our command
        return [...args, ...dockerArgs, ...debugArgs];
    }

    private async generateCustomArguments(customCommandLine: string[]): Promise<string[]> {
        // We still have a bunch of args we have to pass
        const requiredArgs = ['--no-browser', '--NotebookApp.iopub_data_rate_limit=10000000000.0'];

        return [...requiredArgs, ...customCommandLine];
    }

    private async generateArguments(
        useDefaultConfig: boolean,
        customCommandLine: string[],
        tempDirPromise: Promise<TemporaryDirectory>,
        workingDirectory: string
    ): Promise<string[]> {
        if (!customCommandLine || customCommandLine.length === 0) {
            return this.generateDefaultArguments(useDefaultConfig, tempDirPromise, workingDirectory);
        }
        return this.generateCustomArguments(customCommandLine);
    }

    /**
     * Gets the `--notebook-dir` argument.
     *
     * @private
     * @param {Promise<TemporaryDirectory>} tempDirectory
     * @returns {Promise<void>}
     * @memberof NotebookStarter
     */
    private getNotebookDirArgument(workingDirectory: string): string {
        // Escape the result so Jupyter can actually read it.
        return `--notebook-dir="${workingDirectory.replace(/\\/g, '\\\\')}"`;
    }

    /**
     * Gets the `--config` argument.
     *
     * @private
     * @param {Promise<TemporaryDirectory>} tempDirectory
     * @returns {Promise<void>}
     * @memberof NotebookStarter
     */
    private async getConfigArgument(tempDirectory: Promise<TemporaryDirectory>): Promise<string> {
        const tempDir = await tempDirectory;
        // In the temp dir, create an empty config python file. This is the same
        // as starting jupyter with all of the defaults.
        const configFile = path.join(tempDir.path, 'jupyter_notebook_config.py');
        await this.fs.writeLocalFile(configFile, '');
        traceInfo(`Generating custom default config at ${configFile}`);

        // Create extra args based on if we have a config or not
        return `--config=${configFile}`;
    }

    /**
     * Adds the `--ip` and `--allow-root` arguments when in docker.
     *
     * @private
     * @param {Promise<TemporaryDirectory>} tempDirectory
     * @returns {Promise<string[]>}
     * @memberof NotebookStarter
     */
    private async getDockerArguments(): Promise<string[]> {
        const args: string[] = [];
        // Check for a docker situation.
        try {
            const cgroup = await this.fs.readLocalFile('/proc/self/cgroup').catch(() => '');
            if (!cgroup.includes('docker') && !cgroup.includes('kubepods')) {
                return args;
            }
            // We definitely need an ip address.
            args.push('--ip');
            args.push('127.0.0.1');

            // Now see if we need --allow-root.
            return new Promise((resolve) => {
                cp.exec('id', { encoding: 'utf-8' }, (_, stdout: string | Buffer) => {
                    if (stdout && stdout.toString().includes('(root)')) {
                        args.push('--allow-root');
                    }
                    resolve(args);
                });
            });
        } catch {
            return args;
        }
    }
    private async generateTempDir(): Promise<TemporaryDirectory> {
        const resultDir = path.join(os.tmpdir(), uuid());
        await this.fs.createLocalDirectory(resultDir);

        return {
            path: resultDir,
            dispose: async () => {
                // Try ten times. Process may still be up and running.
                // We don't want to do async as async dispose means it may never finish and then we don't
                // delete
                let count = 0;
                while (count < 10) {
                    try {
                        await this.fs.deleteLocalDirectory(resultDir);
                        count = 10;
                    } catch {
                        count += 1;
                    }
                }
            }
        };
    }
}
