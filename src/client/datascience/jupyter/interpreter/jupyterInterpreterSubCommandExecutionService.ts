// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

'use strict';

import { inject, injectable, named } from 'inversify';
import * as path from 'path';
import { CancellationToken } from 'vscode';
import { traceWarning } from '../../../common/logger';

import {
    IPythonDaemonExecutionService,
    IPythonExecutionFactory,
    ObservableExecutionResult,
    SpawnOptions
} from '../../../common/process/types';
import { IOutputChannel, IPathUtils, Product } from '../../../common/types';
import { DataScience } from '../../../common/utils/localize';
import { noop } from '../../../common/utils/misc';
import { EXTENSION_ROOT_DIR } from '../../../constants';
import { IInterpreterService } from '../../../interpreter/contracts';
import { PythonEnvironment } from '../../../pythonEnvironments/info';
import { sendTelemetryEvent } from '../../../telemetry';
import { JUPYTER_OUTPUT_CHANNEL, JupyterDaemonModule, Telemetry } from '../../constants';
import { IJupyterInterpreterDependencyManager, IJupyterSubCommandExecutionService } from '../../types';
import { JupyterServerInfo } from '../jupyterConnection';
import { JupyterInstallError } from '../../errors/jupyterInstallError';
import {
    getMessageForLibrariesNotInstalled,
    JupyterInterpreterDependencyResponse,
    JupyterInterpreterDependencyService
} from './jupyterInterpreterDependencyService';
import { JupyterInterpreterService } from './jupyterInterpreterService';

/**
 * Responsible for execution of jupyter sub commands using a single/global interpreter set aside for launching jupyter server.
 *
 * @export
 * @class JupyterCommandFinderInterpreterExecutionService
 * @implements {IJupyterSubCommandExecutionService}
 */
@injectable()
export class JupyterInterpreterSubCommandExecutionService
    implements IJupyterSubCommandExecutionService, IJupyterInterpreterDependencyManager {
    constructor(
        @inject(JupyterInterpreterService) private readonly jupyterInterpreter: JupyterInterpreterService,
        @inject(IInterpreterService) private readonly interpreterService: IInterpreterService,
        @inject(JupyterInterpreterDependencyService)
        private readonly jupyterDependencyService: JupyterInterpreterDependencyService,
        @inject(IPythonExecutionFactory) private readonly pythonExecutionFactory: IPythonExecutionFactory,
        @inject(IOutputChannel) @named(JUPYTER_OUTPUT_CHANNEL) private readonly jupyterOutputChannel: IOutputChannel,
        @inject(IPathUtils) private readonly pathUtils: IPathUtils
    ) {}

    /**
     * This is a noop, implemented for backwards compatibility.
     *
     * @returns {Promise<void>}
     * @memberof JupyterInterpreterSubCommandExecutionService
     */
    public async refreshCommands(): Promise<void> {
        noop();
    }
    public async isNotebookSupported(token?: CancellationToken): Promise<boolean> {
        const interpreter = await this.jupyterInterpreter.getSelectedInterpreter(token);
        if (!interpreter) {
            return false;
        }
        return this.jupyterDependencyService.areDependenciesInstalled(interpreter, token);
    }
    public async getReasonForJupyterNotebookNotBeingSupported(token?: CancellationToken): Promise<string> {
        let interpreter = await this.jupyterInterpreter.getSelectedInterpreter(token);
        if (!interpreter) {
            // Use current interpreter.
            interpreter = await this.interpreterService.getActiveInterpreter(undefined);
            if (!interpreter) {
                // Unlikely scenario, user hasn't selected python, python extension will fall over.
                // Get user to select something.
                sendTelemetryEvent(Telemetry.SelectJupyterInterpreterMessageDisplayed);
                return DataScience.selectJupyterInterpreter();
            }
        }
        const productsNotInstalled = await this.jupyterDependencyService.getDependenciesNotInstalled(
            interpreter,
            token
        );
        if (productsNotInstalled.length === 0) {
            return '';
        }

        if (productsNotInstalled.length === 1 && productsNotInstalled[0] === Product.kernelspec) {
            return DataScience.jupyterKernelSpecModuleNotFound().format(interpreter.path);
        }

        return getMessageForLibrariesNotInstalled(productsNotInstalled, interpreter.displayName);
    }
    public async getSelectedInterpreter(token?: CancellationToken): Promise<PythonEnvironment | undefined> {
        return this.jupyterInterpreter.getSelectedInterpreter(token);
    }
    public async startNotebook(
        notebookArgs: string[],
        options: SpawnOptions
    ): Promise<ObservableExecutionResult<string>> {
        const interpreter = await this.getSelectedInterpreterAndThrowIfNotAvailable(options.token);
        this.jupyterOutputChannel.appendLine(
            DataScience.startingJupyterLogMessage().format(
                this.pathUtils.getDisplayName(interpreter.path),
                notebookArgs.join(' ')
            )
        );
        const executionService = await this.pythonExecutionFactory.createDaemon<IPythonDaemonExecutionService>({
            daemonModule: JupyterDaemonModule,
            interpreter: interpreter
        });
        // We should never set token for long running processes.
        // We don't want the process to die when the token is cancelled.
        const spawnOptions = { ...options };
        spawnOptions.token = undefined;
        return executionService.execModuleObservable('jupyter', ['notebook'].concat(notebookArgs), spawnOptions);
    }

    public async getRunningJupyterServers(token?: CancellationToken): Promise<JupyterServerInfo[] | undefined> {
        const interpreter = await this.getSelectedInterpreterAndThrowIfNotAvailable(token);
        const daemon = await this.pythonExecutionFactory.createDaemon<IPythonDaemonExecutionService>({
            daemonModule: JupyterDaemonModule,
            interpreter: interpreter
        });

        // We have a small python file here that we will execute to get the server info from all running Jupyter instances
        const newOptions: SpawnOptions = { mergeStdOutErr: true, token: token };
        const file = path.join(EXTENSION_ROOT_DIR, 'pythonFiles', 'vscode_datascience_helpers', 'getServerInfo.py');
        const serverInfoString = await daemon.exec([file], newOptions);

        let serverInfos: JupyterServerInfo[];
        try {
            // Parse out our results, return undefined if we can't suss it out
            serverInfos = JSON.parse(serverInfoString.stdout.trim()) as JupyterServerInfo[];
        } catch (err) {
            traceWarning('Failed to parse JSON when getting server info out from getServerInfo.py', err);
            return;
        }
        return serverInfos;
    }

    public async installMissingDependencies(err?: JupyterInstallError): Promise<JupyterInterpreterDependencyResponse> {
        return this.jupyterInterpreter.installMissingDependencies(err);
    }

    private async getSelectedInterpreterAndThrowIfNotAvailable(token?: CancellationToken): Promise<PythonEnvironment> {
        const interpreter = await this.jupyterInterpreter.getSelectedInterpreter(token);
        if (!interpreter) {
            const reason = await this.getReasonForJupyterNotebookNotBeingSupported();
            throw new JupyterInstallError(reason, DataScience.pythonInteractiveHelpLink());
        }
        return interpreter;
    }
}
