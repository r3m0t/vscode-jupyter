// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

'use strict';

import { inject, injectable } from 'inversify';
import { IPythonExtensionChecker } from '../../api/types';
import { IConfigurationService } from '../../common/types';
import { traceDecorators } from '../../logging';
import { TraceOptions } from '../../logging/trace';
import { Settings, Telemetry } from '../constants';
import { DisplayOptions } from '../displayOptions';
import { isLocalConnection } from '../jupyter/kernels/types';
import { sendKernelTelemetryWhenDone, trackKernelResourceInformation } from '../telemetry/telemetry';
import {
    ConnectNotebookProviderOptions,
    NotebookCreationOptions,
    IJupyterNotebookProvider,
    INotebook,
    INotebookProvider,
    INotebookProviderConnection,
    IRawNotebookProvider
} from '../types';

@injectable()
export class NotebookProvider implements INotebookProvider {
    private readonly startupUi = new DisplayOptions(true);
    constructor(
        @inject(IRawNotebookProvider) private readonly rawNotebookProvider: IRawNotebookProvider,
        @inject(IJupyterNotebookProvider) private readonly jupyterNotebookProvider: IJupyterNotebookProvider,
        @inject(IPythonExtensionChecker) private readonly extensionChecker: IPythonExtensionChecker,
        @inject(IConfigurationService) private readonly configService: IConfigurationService
    ) {}

    // Attempt to connect to our server provider, and if we do, return the connection info
    @traceDecorators.verbose(
        'NotebookProvider.connect',
        TraceOptions.Arguments | TraceOptions.BeforeCall | TraceOptions.ReturnValue
    )
    public async connect(options: ConnectNotebookProviderOptions): Promise<INotebookProviderConnection | undefined> {
        const settings = this.configService.getSettings(undefined);
        const serverType: string | undefined = settings.jupyterServerType;
        if (!options.ui.disableUI) {
            this.startupUi.disableUI = false;
        }
        const handler = options.ui.onDidChangeDisableUI(() => {
            if (!options.ui.disableUI) {
                this.startupUi.disableUI = false;
                handler.dispose();
            }
        });
        if (this.rawNotebookProvider.isSupported && options.kind === 'localJupyter') {
            throw new Error('Connect method should not be invoked for local Connections when Raw is supported');
        } else if (
            this.extensionChecker.isPythonExtensionInstalled ||
            serverType === Settings.JupyterServerRemoteLaunch
        ) {
            return this.jupyterNotebookProvider.connect(options).finally(() => handler.dispose());
        } else {
            handler.dispose();
            await this.extensionChecker.showPythonExtensionInstallRequiredPrompt();
        }
    }
    @traceDecorators.verbose(
        'NotebookProvider.createNotebook',
        TraceOptions.Arguments | TraceOptions.BeforeCall | TraceOptions.ReturnValue
    )
    public async createNotebook(options: NotebookCreationOptions): Promise<INotebook | undefined> {
        const isLocal = isLocalConnection(options.kernelConnection);
        const rawLocalKernel = this.rawNotebookProvider.isSupported && isLocal;

        // We want to cache a Promise<INotebook> from the create functions
        // but jupyterNotebookProvider.createNotebook can be undefined if the server is not available
        // so check for our connection here first
        if (!rawLocalKernel) {
            if (
                !(await this.jupyterNotebookProvider.connect({
                    resource: options.resource,
                    token: options.token,
                    ui: options.ui,
                    kind: isLocal ? 'localJupyter' : 'remoteJupyter'
                }))
            ) {
                return undefined;
            }
        }

        trackKernelResourceInformation(options.resource, { kernelConnection: options.kernelConnection });
        const promise = rawLocalKernel
            ? this.rawNotebookProvider.createNotebook(
                  options.document,
                  options.resource,
                  options.kernelConnection,
                  options.ui,
                  options.token
              )
            : this.jupyterNotebookProvider.createNotebook(options);

        sendKernelTelemetryWhenDone(options.resource, Telemetry.NotebookStart, promise, undefined, {
            disableUI: options.ui.disableUI === true
        });

        return promise;
    }
}
