'use strict';
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              Object.defineProperty(o, k2, {
                  enumerable: true,
                  get: function () {
                      return m[k];
                  }
              });
          }
        : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
          });
var __setModuleDefault =
    (this && this.__setModuleDefault) ||
    (Object.create
        ? function (o, v) {
              Object.defineProperty(o, 'default', { enumerable: true, value: v });
          }
        : function (o, v) {
              o['default'] = v;
          });
var __importStar =
    (this && this.__importStar) ||
    function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.KernelConnection = void 0;
const coreutils_1 = require('@jupyterlab/coreutils');
const coreutils_2 = require('@lumino/coreutils');
const signaling_1 = require('@lumino/signaling');
const __1 = require('..');
const comm_1 = require('./comm');
const KernelMessage = __importStar(require('./messages'));
const future_1 = require('./future');
const serialize = __importStar(require('./serialize'));
const validate = __importStar(require('./validate'));
const kernelspec_1 = require('../kernelspec');
const restapi = __importStar(require('./restapi'));
const KERNEL_INFO_TIMEOUT = 3000;
const RESTARTING_KERNEL_SESSION = '_RESTARTING_';
const STARTING_KERNEL_SESSION = '';
/**
 * Implementation of the Kernel object.
 *
 * #### Notes
 * Messages from the server are handled in the order they were received and
 * asynchronously. Any message handler can return a promise, and message
 * handling will pause until the promise is fulfilled.
 */
class KernelConnection {
    /**
     * Construct a kernel object.
     */
    constructor(options) {
        var _a, _b, _c, _d;
        /**
         * Create the kernel websocket connection and add socket status handlers.
         */
        this._createSocket = () => {
            this._errorIfDisposed();
            // Make sure the socket is clear
            this._clearSocket();
            // Update the connection status to reflect opening a new connection.
            this._updateConnectionStatus('connecting');
            const settings = this.serverSettings;
            const partialUrl = coreutils_1.URLExt.join(
                settings.wsUrl,
                restapi.KERNEL_SERVICE_URL,
                encodeURIComponent(this._id)
            );
            // Strip any authentication from the display string.
            const display = partialUrl.replace(/^((?:\w+:)?\/\/)(?:[^@\/]+@)/, '$1');
            console.debug(`Starting WebSocket: ${display}`);
            let url = coreutils_1.URLExt.join(partialUrl, 'channels?session_id=' + encodeURIComponent(this._clientId));
            // If token authentication is in use.
            const token = settings.token;
            if (settings.appendToken && token !== '') {
                url = url + `&token=${encodeURIComponent(token)}`;
            }
            this._ws = new settings.WebSocket(url);
            // Ensure incoming binary messages are not Blobs
            this._ws.binaryType = 'arraybuffer';
            this._ws.onmessage = this._onWSMessage;
            this._ws.onopen = this._onWSOpen;
            this._ws.onclose = this._onWSClose;
            this._ws.onerror = this._onWSClose;
        };
        // Make websocket callbacks arrow functions so they bind `this`.
        /**
         * Handle a websocket open event.
         */
        this._onWSOpen = (evt) => {
            console.log('_onWSOpen: Connected');
            this._updateConnectionStatus('connected');
        };
        /**
         * Handle a websocket message, validating and routing appropriately.
         */
        this._onWSMessage = (evt) => {
            // Notify immediately if there is an error with the message.
            let msg;
            try {
                console.log('_onWSMessage: Got message');
                msg = serialize.deserialize(evt.data);
                validate.validateMessage(msg);
            } catch (error) {
                error.message = `Kernel message validation error: ${error.message}`;
                // We throw the error so that it bubbles up to the top, and displays the right stack.
                throw error;
            }
            // Update the current kernel session id
            this._kernelSession = msg.header.session;
            console.log(`_onWSMessage: Got message, this._kernelSession = ${this._kernelSession}`);
            // Handle the message asynchronously, in the order received.
            this._msgChain = this._msgChain
                .then(() => {
                    // Return so that any promises from handling a message are fulfilled
                    // before proceeding to the next message.
                    return this._handleMessage(msg);
                })
                .catch((error) => {
                    // Log any errors in handling the message, thus resetting the _msgChain
                    // promise so we can process more messages.
                    // Ignore the "Canceled" errors that are thrown during kernel dispose.
                    if (error.message.startsWith('Canceled future for ')) {
                        console.error(error);
                    }
                });
            // Emit the message receive signal
            this._anyMessage.emit({ msg, direction: 'recv' });
        };
        /**
         * Handle a websocket close event.
         */
        this._onWSClose = (evt) => {
            if (!this.isDisposed) {
                this._reconnect();
            }
        };
        this._id = '';
        this._name = '';
        this._status = 'unknown';
        this._connectionStatus = 'connecting';
        this._kernelSession = '';
        this._isDisposed = false;
        /**
         * Websocket to communicate with kernel.
         */
        this._ws = null;
        this._username = '';
        this._reconnectLimit = 7;
        this._reconnectAttempt = 0;
        this._reconnectTimeout = null;
        this._futures = new Map();
        this._comms = new Map();
        this._targetRegistry = Object.create(null);
        this._info = new coreutils_2.PromiseDelegate();
        this._pendingMessages = [];
        this._statusChanged = new signaling_1.Signal(this);
        this._connectionStatusChanged = new signaling_1.Signal(this);
        this._disposed = new signaling_1.Signal(this);
        this._iopubMessage = new signaling_1.Signal(this);
        this._anyMessage = new signaling_1.Signal(this);
        this._unhandledMessage = new signaling_1.Signal(this);
        this._displayIdToParentIds = new Map();
        this._msgIdToDisplayIds = new Map();
        this._msgChain = Promise.resolve();
        this._noOp = () => {
            /* no-op */
        };
        this._name = options.model.name;
        this._id = options.model.id;
        this.serverSettings =
            (_a = options.serverSettings) !== null && _a !== void 0 ? _a : __1.ServerConnection.makeSettings();
        this._clientId = (_b = options.clientId) !== null && _b !== void 0 ? _b : coreutils_2.UUID.uuid4();
        this._username = (_c = options.username) !== null && _c !== void 0 ? _c : '';
        this.handleComms = (_d = options.handleComms) !== null && _d !== void 0 ? _d : true;
        this._createSocket();
    }
    get disposed() {
        return this._disposed;
    }
    /**
     * A signal emitted when the kernel status changes.
     */
    get statusChanged() {
        return this._statusChanged;
    }
    /**
     * A signal emitted when the kernel status changes.
     */
    get connectionStatusChanged() {
        return this._connectionStatusChanged;
    }
    /**
     * A signal emitted for iopub kernel messages.
     *
     * #### Notes
     * This signal is emitted after the iopub message is handled asynchronously.
     */
    get iopubMessage() {
        return this._iopubMessage;
    }
    /**
     * A signal emitted for unhandled kernel message.
     *
     * #### Notes
     * This signal is emitted for a message that was not handled. It is emitted
     * during the asynchronous message handling code.
     */
    get unhandledMessage() {
        return this._unhandledMessage;
    }
    /**
     * The kernel model
     */
    get model() {
        return {
            id: this.id,
            name: this.name
        };
    }
    /**
     * A signal emitted for any kernel message.
     *
     * #### Notes
     * This signal is emitted when a message is received, before it is handled
     * asynchronously.
     *
     * This message is emitted when a message is queued for sending (either in
     * the websocket buffer, or our own pending message buffer). The message may
     * actually be sent across the wire at a later time.
     *
     * The message emitted in this signal should not be modified in any way.
     */
    get anyMessage() {
        return this._anyMessage;
    }
    /**
     * The id of the server-side kernel.
     */
    get id() {
        return this._id;
    }
    /**
     * The name of the server-side kernel.
     */
    get name() {
        return this._name;
    }
    /**
     * The client username.
     */
    get username() {
        return this._username;
    }
    /**
     * The client unique id.
     */
    get clientId() {
        return this._clientId;
    }
    /**
     * The current status of the kernel.
     */
    get status() {
        return this._status;
    }
    /**
     * The current connection status of the kernel connection.
     */
    get connectionStatus() {
        return this._connectionStatus;
    }
    /**
     * Test whether the kernel has been disposed.
     */
    get isDisposed() {
        return this._isDisposed;
    }
    /**
     * The cached kernel info.
     *
     * @returns A promise that resolves to the kernel info.
     */
    get info() {
        return this._info.promise;
    }
    /**
     * The kernel spec.
     *
     * @returns A promise that resolves to the kernel spec.
     */
    get spec() {
        if (this._specPromise) {
            return this._specPromise;
        }
        this._specPromise = kernelspec_1.KernelSpecAPI.getSpecs(this.serverSettings).then((specs) => {
            return specs.kernelspecs[this._name];
        });
        return this._specPromise;
    }
    /**
     * Clone the current kernel with a new clientId.
     */
    clone(options = {}) {
        return new KernelConnection(
            Object.assign(
                {
                    model: this.model,
                    username: this.username,
                    serverSettings: this.serverSettings,
                    // handleComms defaults to false since that is safer
                    handleComms: false
                },
                options
            )
        );
    }
    /**
     * Dispose of the resources held by the kernel.
     */
    dispose() {
        if (this.isDisposed) {
            return;
        }
        this._isDisposed = true;
        this._disposed.emit();
        this._updateConnectionStatus('disconnected');
        this._clearKernelState();
        this._pendingMessages = [];
        this._clearSocket();
        // Clear Lumino signals
        signaling_1.Signal.clearData(this);
    }
    /**
     * Send a shell message to the kernel.
     *
     * #### Notes
     * Send a message to the kernel's shell channel, yielding a future object
     * for accepting replies.
     *
     * If `expectReply` is given and `true`, the future is disposed when both a
     * shell reply and an idle status message are received. If `expectReply`
     * is not given or is `false`, the future is resolved when an idle status
     * message is received.
     * If `disposeOnDone` is not given or is `true`, the Future is disposed at this point.
     * If `disposeOnDone` is given and `false`, it is up to the caller to dispose of the Future.
     *
     * All replies are validated as valid kernel messages.
     *
     * If the kernel status is `dead`, this will throw an error.
     */
    sendShellMessage(msg, expectReply = false, disposeOnDone = true) {
        return this._sendKernelShellControl(future_1.KernelShellFutureHandler, msg, expectReply, disposeOnDone);
    }
    /**
     * Send a control message to the kernel.
     *
     * #### Notes
     * Send a message to the kernel's control channel, yielding a future object
     * for accepting replies.
     *
     * If `expectReply` is given and `true`, the future is disposed when both a
     * control reply and an idle status message are received. If `expectReply`
     * is not given or is `false`, the future is resolved when an idle status
     * message is received.
     * If `disposeOnDone` is not given or is `true`, the Future is disposed at this point.
     * If `disposeOnDone` is given and `false`, it is up to the caller to dispose of the Future.
     *
     * All replies are validated as valid kernel messages.
     *
     * If the kernel status is `dead`, this will throw an error.
     */
    sendControlMessage(msg, expectReply = false, disposeOnDone = true) {
        return this._sendKernelShellControl(future_1.KernelControlFutureHandler, msg, expectReply, disposeOnDone);
    }
    _sendKernelShellControl(ctor, msg, expectReply = false, disposeOnDone = true) {
        this._sendMessage(msg);
        this._anyMessage.emit({ msg, direction: 'send' });
        const future = new ctor(
            () => {
                const msgId = msg.header.msg_id;
                this._futures.delete(msgId);
                // Remove stored display id information.
                const displayIds = this._msgIdToDisplayIds.get(msgId);
                if (!displayIds) {
                    return;
                }
                displayIds.forEach((displayId) => {
                    const msgIds = this._displayIdToParentIds.get(displayId);
                    if (msgIds) {
                        const idx = msgIds.indexOf(msgId);
                        if (idx === -1) {
                            return;
                        }
                        if (msgIds.length === 1) {
                            this._displayIdToParentIds.delete(displayId);
                        } else {
                            msgIds.splice(idx, 1);
                            this._displayIdToParentIds.set(displayId, msgIds);
                        }
                    }
                });
                this._msgIdToDisplayIds.delete(msgId);
            },
            msg,
            expectReply,
            disposeOnDone,
            this
        );
        this._futures.set(msg.header.msg_id, future);
        return future;
    }
    /**
     * Send a message on the websocket.
     *
     * If queue is true, queue the message for later sending if we cannot send
     * now. Otherwise throw an error.
     *
     * #### Notes
     * As an exception to the queueing, if we are sending a kernel_info_request
     * message while we think the kernel is restarting, we send the message
     * immediately without queueing. This is so that we can trigger a message
     * back, which will then clear the kernel restarting state.
     */
    _sendMessage(msg, queue = true) {
        if (this.status === 'dead') {
            throw new Error('Kernel is dead');
        }
        // If we have a kernel_info_request and we are starting or restarting, send the
        // kernel_info_request immediately if we can, and if not throw an error so
        // we can retry later. On restarting we do this because we must get at least one message
        // from the kernel to reset the kernel session (thus clearing the restart
        // status sentinel).
        if (
            (this._kernelSession === STARTING_KERNEL_SESSION || this._kernelSession === RESTARTING_KERNEL_SESSION) &&
            KernelMessage.isInfoRequestMsg(msg)
        ) {
            if (this.connectionStatus === 'connected') {
                console.log('_sendMessage: Raw message serialized and sent (connected)');
                this._ws.send(serialize.serialize(msg));
                return;
            } else {
                throw new Error('Could not send message: status is not connected');
            }
        }
        // If there are pending messages, add to the queue so we keep messages in order
        if (queue && this._pendingMessages.length > 0) {
            console.log('_sendMessage: Raw message queued');
            this._pendingMessages.push(msg);
            return;
        }
        // Send if the ws allows it, otherwise queue the message.
        if (this.connectionStatus === 'connected' && this._kernelSession !== RESTARTING_KERNEL_SESSION) {
            console.log('_sendMessage: Raw message serialized and sent (not restarting)');
            this._ws.send(serialize.serialize(msg));
        } else if (queue) {
            console.log('_sendMessage: Raw message queued');
            this._pendingMessages.push(msg);
        } else {
            console.log('_sendMessage: Raw message not queued');
            throw new Error('Could not send message');
        }
    }
    /**
     * Interrupt a kernel.
     *
     * #### Notes
     * Uses the [Jupyter Notebook API](http://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter/notebook/master/notebook/services/api/api.yaml#!/kernels).
     *
     * The promise is fulfilled on a valid response and rejected otherwise.
     *
     * It is assumed that the API call does not mutate the kernel id or name.
     *
     * The promise will be rejected if the kernel status is `Dead` or if the
     * request fails or the response is invalid.
     */
    async interrupt() {
        if (this.status === 'dead') {
            throw new Error('Kernel is dead');
        }
        return restapi.interruptKernel(this.id, this.serverSettings);
    }
    /**
     * Request a kernel restart.
     *
     * #### Notes
     * Uses the [Jupyter Notebook API](http://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter/notebook/master/notebook/services/api/api.yaml#!/kernels)
     * and validates the response model.
     *
     * Any existing Future or Comm objects are cleared once the kernel has
     * actually be restarted.
     *
     * The promise is fulfilled on a valid server response (after the kernel restarts)
     * and rejected otherwise.
     *
     * It is assumed that the API call does not mutate the kernel id or name.
     *
     * The promise will be rejected if the request fails or the response is
     * invalid.
     */
    async restart() {
        if (this.status === 'dead') {
            throw new Error('Kernel is dead');
        }
        this._updateStatus('restarting');
        this._clearKernelState();
        this._kernelSession = RESTARTING_KERNEL_SESSION;
        await restapi.restartKernel(this.id, this.serverSettings);
        // Reconnect to the kernel to address cases where kernel ports
        // have changed during the restart.
        await this.reconnect();
    }
    /**
     * Reconnect to a kernel.
     *
     * #### Notes
     * This may try multiple times to reconnect to a kernel, and will sever any
     * existing connection.
     */
    reconnect() {
        console.log(`reconnect`);
        this._errorIfDisposed();
        const result = new coreutils_2.PromiseDelegate();
        // Set up a listener for the connection status changing, which accepts or
        // rejects after the retries are done.
        const fulfill = (sender, status) => {
            if (status === 'connected') {
                result.resolve();
                this.connectionStatusChanged.disconnect(fulfill, this);
            } else if (status === 'disconnected') {
                result.reject(new Error('Kernel connection disconnected'));
                this.connectionStatusChanged.disconnect(fulfill, this);
            }
        };
        this.connectionStatusChanged.connect(fulfill, this);
        // Reset the reconnect limit so we start the connection attempts fresh
        this._reconnectAttempt = 0;
        // Start the reconnection process, which will also clear any existing
        // connection.
        this._reconnect();
        // Return the promise that should resolve on connection or reject if the
        // retries don't work.
        return result.promise;
    }
    /**
     * Shutdown a kernel.
     *
     * #### Notes
     * Uses the [Jupyter Notebook API](http://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter/notebook/master/notebook/services/api/api.yaml#!/kernels).
     *
     * The promise is fulfilled on a valid response and rejected otherwise.
     *
     * On a valid response, disposes this kernel connection.
     *
     * If the kernel is already `dead`, disposes this kernel connection without
     * a server request.
     */
    async shutdown() {
        console.log(`shutdown`);
        if (this.status !== 'dead') {
            await restapi.shutdownKernel(this.id, this.serverSettings);
        }
        this.handleShutdown();
    }
    /**
     * Handles a kernel shutdown.
     *
     * #### Notes
     * This method should be called if we know from outside information that a
     * kernel is dead (for example, we cannot find the kernel model on the
     * server).
     */
    handleShutdown() {
        this._updateStatus('dead');
        this.dispose();
    }
    /**
     * Send a `kernel_info_request` message.
     *
     * #### Notes
     * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#kernel-info).
     *
     * Fulfills with the `kernel_info_response` content when the shell reply is
     * received and validated.
     */
    async requestKernelInfo() {
        console.log('requestKernelInfo: Requesting kernel info');
        const msg = KernelMessage.createMessage({
            msgType: 'kernel_info_request',
            channel: 'shell',
            username: this._username,
            session: this._clientId,
            content: {}
        });
        let reply;
        try {
            console.log('requestKernelInfo: Requesting kernel info 2');
            reply = await Private.handleShellMessage(this, msg);
            console.log('requestKernelInfo: Requesting kernel info 3');
        } catch (e) {
            console.error('requestKernelInfo: Requesting kernel info failed', ex);
            // If we rejected because the future was disposed, ignore and return.
            if (this.isDisposed) {
                return;
            } else {
                throw e;
            }
        }
        console.log('requestKernelInfo: Requesting kernel info 4');
        this._errorIfDisposed();
        if (!reply) {
            console.log('requestKernelInfo: Requesting kernel info (return)');
            return;
        }
        // Kernels sometimes do not include a status field on kernel_info_reply
        // messages, so set a default for now.
        // See https://github.com/jupyterlab/jupyterlab/issues/6760
        if (reply.content.status === undefined) {
            reply.content.status = 'ok';
        }
        if (reply.content.status !== 'ok') {
            console.log('requestKernelInfo: Requesting kernel info (failed)');
            this._info.reject('Kernel info reply errored');
            return reply;
        }
        console.log('requestKernelInfo: Requesting kernel info (ok)');
        this._info.resolve(reply.content);
        this._kernelSession = reply.header.session;
        console.log(`requestKernelInfo: Requesting kernel info (ok), this._kernelSession = ${this._kernelSession}`);
        return reply;
    }
    /**
     * Send a `complete_request` message.
     *
     * #### Notes
     * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#completion).
     *
     * Fulfills with the `complete_reply` content when the shell reply is
     * received and validated.
     */
    requestComplete(content) {
        const msg = KernelMessage.createMessage({
            msgType: 'complete_request',
            channel: 'shell',
            username: this._username,
            session: this._clientId,
            content
        });
        return Private.handleShellMessage(this, msg);
    }
    /**
     * Send an `inspect_request` message.
     *
     * #### Notes
     * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#introspection).
     *
     * Fulfills with the `inspect_reply` content when the shell reply is
     * received and validated.
     */
    requestInspect(content) {
        const msg = KernelMessage.createMessage({
            msgType: 'inspect_request',
            channel: 'shell',
            username: this._username,
            session: this._clientId,
            content: content
        });
        return Private.handleShellMessage(this, msg);
    }
    /**
     * Send a `history_request` message.
     *
     * #### Notes
     * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#history).
     *
     * Fulfills with the `history_reply` content when the shell reply is
     * received and validated.
     */
    requestHistory(content) {
        const msg = KernelMessage.createMessage({
            msgType: 'history_request',
            channel: 'shell',
            username: this._username,
            session: this._clientId,
            content
        });
        return Private.handleShellMessage(this, msg);
    }
    /**
     * Send an `execute_request` message.
     *
     * #### Notes
     * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#execute).
     *
     * Future `onReply` is called with the `execute_reply` content when the
     * shell reply is received and validated. The future will resolve when
     * this message is received and the `idle` iopub status is received.
     * The future will also be disposed at this point unless `disposeOnDone`
     * is specified and `false`, in which case it is up to the caller to dispose
     * of the future.
     *
     * **See also:** [[IExecuteReply]]
     */
    requestExecute(content, disposeOnDone = true, metadata) {
        const defaults = {
            silent: false,
            store_history: true,
            user_expressions: {},
            allow_stdin: true,
            stop_on_error: false
        };
        const msg = KernelMessage.createMessage({
            msgType: 'execute_request',
            channel: 'shell',
            username: this._username,
            session: this._clientId,
            content: Object.assign(Object.assign({}, defaults), content),
            metadata
        });
        return this.sendShellMessage(msg, true, disposeOnDone);
    }
    /**
     * Send an experimental `debug_request` message.
     *
     * @hidden
     *
     * #### Notes
     * Debug messages are experimental messages that are not in the official
     * kernel message specification. As such, this function is *NOT* considered
     * part of the public API, and may change without notice.
     */
    requestDebug(content, disposeOnDone = true) {
        const msg = KernelMessage.createMessage({
            msgType: 'debug_request',
            channel: 'control',
            username: this._username,
            session: this._clientId,
            content
        });
        return this.sendControlMessage(msg, true, disposeOnDone);
    }
    /**
     * Send an `is_complete_request` message.
     *
     * #### Notes
     * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#code-completeness).
     *
     * Fulfills with the `is_complete_response` content when the shell reply is
     * received and validated.
     */
    requestIsComplete(content) {
        const msg = KernelMessage.createMessage({
            msgType: 'is_complete_request',
            channel: 'shell',
            username: this._username,
            session: this._clientId,
            content
        });
        return Private.handleShellMessage(this, msg);
    }
    /**
     * Send a `comm_info_request` message.
     *
     * #### Notes
     * Fulfills with the `comm_info_reply` content when the shell reply is
     * received and validated.
     */
    requestCommInfo(content) {
        const msg = KernelMessage.createMessage({
            msgType: 'comm_info_request',
            channel: 'shell',
            username: this._username,
            session: this._clientId,
            content
        });
        return Private.handleShellMessage(this, msg);
    }
    /**
     * Send an `input_reply` message.
     *
     * #### Notes
     * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#messages-on-the-stdin-router-dealer-sockets).
     */
    sendInputReply(content) {
        const msg = KernelMessage.createMessage({
            msgType: 'input_reply',
            channel: 'stdin',
            username: this._username,
            session: this._clientId,
            content
        });
        this._sendMessage(msg);
        this._anyMessage.emit({ msg, direction: 'send' });
    }
    /**
     * Create a new comm.
     *
     * #### Notes
     * If a client-side comm already exists with the given commId, an error is thrown.
     * If the kernel does not handle comms, an error is thrown.
     */
    createComm(targetName, commId = coreutils_2.UUID.uuid4()) {
        if (!this.handleComms) {
            throw new Error('Comms are disabled on this kernel connection');
        }
        if (this._comms.has(commId)) {
            throw new Error('Comm is already created');
        }
        const comm = new comm_1.CommHandler(targetName, commId, this, () => {
            this._unregisterComm(commId);
        });
        this._comms.set(commId, comm);
        return comm;
    }
    /**
     * Check if a comm exists.
     */
    hasComm(commId) {
        return this._comms.has(commId);
    }
    /**
     * Register a comm target handler.
     *
     * @param targetName - The name of the comm target.
     *
     * @param callback - The callback invoked for a comm open message.
     *
     * @returns A disposable used to unregister the comm target.
     *
     * #### Notes
     * Only one comm target can be registered to a target name at a time, an
     * existing callback for the same target name will be overridden.  A registered
     * comm target handler will take precedence over a comm which specifies a
     * `target_module`.
     *
     * If the callback returns a promise, kernel message processing will pause
     * until the returned promise is fulfilled.
     */
    registerCommTarget(targetName, callback) {
        if (!this.handleComms) {
            return;
        }
        this._targetRegistry[targetName] = callback;
    }
    /**
     * Remove a comm target handler.
     *
     * @param targetName - The name of the comm target to remove.
     *
     * @param callback - The callback to remove.
     *
     * #### Notes
     * The comm target is only removed if the callback argument matches.
     */
    removeCommTarget(targetName, callback) {
        if (!this.handleComms) {
            return;
        }
        if (!this.isDisposed && this._targetRegistry[targetName] === callback) {
            delete this._targetRegistry[targetName];
        }
    }
    /**
     * Register an IOPub message hook.
     *
     * @param msg_id - The parent_header message id the hook will intercept.
     *
     * @param hook - The callback invoked for the message.
     *
     * #### Notes
     * The IOPub hook system allows you to preempt the handlers for IOPub
     * messages that are responses to a given message id.
     *
     * The most recently registered hook is run first. A hook can return a
     * boolean or a promise to a boolean, in which case all kernel message
     * processing pauses until the promise is fulfilled. If a hook return value
     * resolves to false, any later hooks will not run and the function will
     * return a promise resolving to false. If a hook throws an error, the error
     * is logged to the console and the next hook is run. If a hook is
     * registered during the hook processing, it will not run until the next
     * message. If a hook is removed during the hook processing, it will be
     * deactivated immediately.
     *
     * See also [[IFuture.registerMessageHook]].
     */
    registerMessageHook(msgId, hook) {
        var _a;
        const future = (_a = this._futures) === null || _a === void 0 ? void 0 : _a.get(msgId);
        if (future) {
            future.registerMessageHook(hook);
        }
    }
    /**
     * Remove an IOPub message hook.
     *
     * @param msg_id - The parent_header message id the hook intercepted.
     *
     * @param hook - The callback invoked for the message.
     *
     */
    removeMessageHook(msgId, hook) {
        var _a;
        const future = (_a = this._futures) === null || _a === void 0 ? void 0 : _a.get(msgId);
        if (future) {
            future.removeMessageHook(hook);
        }
    }
    /**
     * Handle a message with a display id.
     *
     * @returns Whether the message was handled.
     */
    async _handleDisplayId(displayId, msg) {
        var _a, _b;
        const msgId = msg.parent_header.msg_id;
        let parentIds = this._displayIdToParentIds.get(displayId);
        if (parentIds) {
            // We've seen it before, update existing outputs with same display_id
            // by handling display_data as update_display_data.
            const updateMsg = {
                header: coreutils_2.JSONExt.deepCopy(msg.header),
                parent_header: coreutils_2.JSONExt.deepCopy(msg.parent_header),
                metadata: coreutils_2.JSONExt.deepCopy(msg.metadata),
                content: coreutils_2.JSONExt.deepCopy(msg.content),
                channel: msg.channel,
                buffers: msg.buffers ? msg.buffers.slice() : []
            };
            updateMsg.header.msg_type = 'update_display_data';
            await Promise.all(
                parentIds.map(async (parentId) => {
                    const future = this._futures && this._futures.get(parentId);
                    if (future) {
                        await future.handleMsg(updateMsg);
                    }
                })
            );
        }
        // We're done here if it's update_display.
        if (msg.header.msg_type === 'update_display_data') {
            // It's an update, don't proceed to the normal display.
            return true;
        }
        // Regular display_data with id, record it for future updating
        // in _displayIdToParentIds for future lookup.
        parentIds = (_a = this._displayIdToParentIds.get(displayId)) !== null && _a !== void 0 ? _a : [];
        if (parentIds.indexOf(msgId) === -1) {
            parentIds.push(msgId);
        }
        this._displayIdToParentIds.set(displayId, parentIds);
        // Add to our map of display ids for this message.
        const displayIds = (_b = this._msgIdToDisplayIds.get(msgId)) !== null && _b !== void 0 ? _b : [];
        if (displayIds.indexOf(msgId) === -1) {
            displayIds.push(msgId);
        }
        this._msgIdToDisplayIds.set(msgId, displayIds);
        // Let the message propagate to the intended recipient.
        return false;
    }
    /**
     * Forcefully clear the socket state.
     *
     * #### Notes
     * This will clear all socket state without calling any handlers and will
     * not update the connection status. If you call this method, you are
     * responsible for updating the connection status as needed and recreating
     * the socket if you plan to reconnect.
     */
    _clearSocket() {
        console.log(`_clearSocket`);
        if (this._ws !== null) {
            // Clear the websocket event handlers and the socket itself.
            this._ws.onopen = this._noOp;
            this._ws.onclose = this._noOp;
            this._ws.onerror = this._noOp;
            this._ws.onmessage = this._noOp;
            this._ws.close();
            this._ws = null;
        }
    }
    /**
     * Handle status iopub messages from the kernel.
     */
    _updateStatus(status) {
        console.log(`_updateStatus ${status}`);
        if (this._status === status || this._status === 'dead') {
            return;
        }
        this._status = status;
        Private.logKernelStatus(this);
        this._statusChanged.emit(status);
        if (status === 'dead') {
            this.dispose();
        }
    }
    /**
     * Send pending messages to the kernel.
     */
    _sendPending() {
        // We check to make sure we are still connected each time. For
        // example, if a websocket buffer overflows, it may close, so we should
        // stop sending messages.
        while (
            this.connectionStatus === 'connected' &&
            this._kernelSession !== RESTARTING_KERNEL_SESSION &&
            this._pendingMessages.length > 0
        ) {
            console.log(`_sendPending: Sending pending messages ${this._pendingMessages.length}`);
            this._sendMessage(this._pendingMessages[0], false);
            // We shift the message off the queue after the message is sent so that
            // if there is an exception, the message is still pending.
            this._pendingMessages.shift();
        }
    }
    /**
     * Clear the internal state.
     */
    _clearKernelState() {
        console.log(`_clearKernelState`);
        this._kernelSession = '';
        this._pendingMessages = [];
        this._futures.forEach((future) => {
            future.dispose();
        });
        this._comms.forEach((comm) => {
            comm.dispose();
        });
        this._msgChain = Promise.resolve();
        this._futures = new Map();
        this._comms = new Map();
        this._displayIdToParentIds.clear();
        this._msgIdToDisplayIds.clear();
    }
    /**
     * Check to make sure it is okay to proceed to handle a message.
     *
     * #### Notes
     * Because we handle messages asynchronously, before a message is handled the
     * kernel might be disposed or restarted (and have a different session id).
     * This function throws an error in each of these cases. This is meant to be
     * called at the start of an asynchronous message handler to cancel message
     * processing if the message no longer is valid.
     */
    _assertCurrentMessage(msg) {
        this._errorIfDisposed();
        if (msg.header.session !== this._kernelSession) {
            throw new Error(`Canceling handling of old message: ${msg.header.msg_type}`);
        }
    }
    /**
     * Handle a `comm_open` kernel message.
     */
    async _handleCommOpen(msg) {
        this._assertCurrentMessage(msg);
        const content = msg.content;
        const comm = new comm_1.CommHandler(content.target_name, content.comm_id, this, () => {
            this._unregisterComm(content.comm_id);
        });
        this._comms.set(content.comm_id, comm);
        try {
            const target = await Private.loadObject(content.target_name, content.target_module, this._targetRegistry);
            await target(comm, msg);
        } catch (e) {
            // Close the comm asynchronously. We cannot block message processing on
            // kernel messages to wait for another kernel message.
            comm.close();
            console.error('Exception opening new comm');
            throw e;
        }
    }
    /**
     * Handle 'comm_close' kernel message.
     */
    async _handleCommClose(msg) {
        this._assertCurrentMessage(msg);
        const content = msg.content;
        const comm = this._comms.get(content.comm_id);
        if (!comm) {
            console.error('Comm not found for comm id ' + content.comm_id);
            return;
        }
        this._unregisterComm(comm.commId);
        const onClose = comm.onClose;
        if (onClose) {
            // tslint:disable-next-line:await-promise
            await onClose(msg);
        }
        comm.dispose();
    }
    /**
     * Handle a 'comm_msg' kernel message.
     */
    async _handleCommMsg(msg) {
        this._assertCurrentMessage(msg);
        const content = msg.content;
        const comm = this._comms.get(content.comm_id);
        if (!comm) {
            return;
        }
        const onMsg = comm.onMsg;
        if (onMsg) {
            // tslint:disable-next-line:await-promise
            await onMsg(msg);
        }
    }
    /**
     * Unregister a comm instance.
     */
    _unregisterComm(commId) {
        this._comms.delete(commId);
    }
    /**
     * Handle connection status changes.
     */
    _updateConnectionStatus(connectionStatus) {
        console.log(
            `_updateConnectionStatus: Enter: ${connectionStatus}, this._kernelSession = ${this._kernelSession}`
        );
        if (this._connectionStatus === connectionStatus) {
            console.log(`_updateConnectionStatus: Enter: ${connectionStatus}, return`);
            return;
        }
        this._connectionStatus = connectionStatus;
        // If we are not 'connecting', reset any reconnection attempts.
        if (connectionStatus !== 'connecting') {
            this._reconnectAttempt = 0;
            clearTimeout(this._reconnectTimeout);
        }
        if (this.status !== 'dead') {
            console.log(
                `_updateConnectionStatus: Enter: ${connectionStatus}, not dead, this._kernelSession = ${this._kernelSession}`
            );
            if (connectionStatus === 'connected') {
                console.log(
                    `_updateConnectionStatus: Enter: ${connectionStatus}, connected, this._kernelSession = ${this._kernelSession}`
                );
                let restarting = this._kernelSession === RESTARTING_KERNEL_SESSION;
                // Send a kernel info request to make sure we send at least one
                // message to get kernel status back. Always request kernel info
                // first, to get kernel status back and ensure iopub is fully
                // established. If we are restarting, this message will skip the queue
                // and be sent immediately.
                console.log(`_updateConnectionStatus: Enter: ${connectionStatus}, request kernel infor`);
                let p = this.requestKernelInfo();
                // Send any pending messages after the kernelInfo resolves, or after a
                // timeout as a failsafe.
                let sendPendingCalled = false;
                let sendPendingOnce = () => {
                    console.log(
                        `_updateConnectionStatus: Enter: ${connectionStatus}, connected, this._kernelSession = ${this._kernelSession}, send pending`
                    );
                    if (sendPendingCalled) {
                        console.log(
                            `_updateConnectionStatus: Enter: ${connectionStatus}, connected, this._kernelSession = ${this._kernelSession}, return`
                        );
                        return;
                    }
                    sendPendingCalled = true;
                    if (restarting && this._kernelSession === RESTARTING_KERNEL_SESSION) {
                        // We were restarting and a message didn't arrive to set the
                        // session, but we just assume the restart succeeded and send any
                        // pending messages.
                        // FIXME: it would be better to retry the kernel_info_request here
                        this._kernelSession = '';
                        console.log(
                            `_updateConnectionStatus: Enter: ${connectionStatus}, connected, cleared this._kernelSession = ${this._kernelSession}, cleared`
                        );
                    }
                    clearTimeout(timeoutHandle);
                    console.log(`_updateConnectionStatus: start sending pending messages`);
                    if (this._pendingMessages.length > 0) {
                        console.log(`_updateConnectionStatus: start sending pending messages2`);
                        this._sendPending();
                    }
                };
                console.log(`_updateConnectionStatus: Step 2`);
                void p.then(sendPendingOnce);
                // FIXME: if sent while zmq subscriptions are not established,
                // kernelInfo may not resolve, so use a timeout to ensure we don't hang forever.
                // It may be preferable to retry kernelInfo rather than give up after one timeout.
                let timeoutHandle = setTimeout(sendPendingOnce, KERNEL_INFO_TIMEOUT);
            } else {
                // If the connection is down, then we do not know what is happening
                // with the kernel, so set the status to unknown.
                this._updateStatus('unknown');
            }
        }
        // Notify others that the connection status changed.
        this._connectionStatusChanged.emit(connectionStatus);
    }
    async _handleMessage(msg) {
        var _a, _b;
        let handled = false;
        // Check to see if we have a display_id we need to reroute.
        if (
            msg.parent_header &&
            msg.channel === 'iopub' &&
            (KernelMessage.isDisplayDataMsg(msg) ||
                KernelMessage.isUpdateDisplayDataMsg(msg) ||
                KernelMessage.isExecuteResultMsg(msg))
        ) {
            // display_data messages may re-route based on their display_id.
            const transient = (_a = msg.content.transient) !== null && _a !== void 0 ? _a : {};
            const displayId = transient['display_id'];
            if (displayId) {
                handled = await this._handleDisplayId(displayId, msg);
                // The await above may make this message out of date, so check again.
                this._assertCurrentMessage(msg);
            }
        }
        if (!handled && msg.parent_header) {
            const parentHeader = msg.parent_header;
            const future = (_b = this._futures) === null || _b === void 0 ? void 0 : _b.get(parentHeader.msg_id);
            if (future) {
                await future.handleMsg(msg);
                this._assertCurrentMessage(msg);
            } else {
                // If the message was sent by us and was not iopub, it is orphaned.
                const owned = parentHeader.session === this.clientId;
                if (msg.channel !== 'iopub' && owned) {
                    this._unhandledMessage.emit(msg);
                }
            }
        }
        if (msg.channel === 'iopub') {
            switch (msg.header.msg_type) {
                case 'status': {
                    // Updating the status is synchronous, and we call no async user code
                    const executionState = msg.content.execution_state;
                    if (executionState === 'restarting') {
                        // The kernel has been auto-restarted by the server. After
                        // processing for this message is completely done, we want to
                        // handle this restart, so we don't await, but instead schedule
                        // the work as a microtask (i.e., in a promise resolution). We
                        // schedule this here so that it comes before any microtasks that
                        // might be scheduled in the status signal emission below.
                        void Promise.resolve().then(async () => {
                            this._updateStatus('autorestarting');
                            this._clearKernelState();
                            // We must reconnect since the kernel connection information may have
                            // changed, and the server only refreshes its zmq connection when a new
                            // websocket is opened.
                            await this.reconnect();
                        });
                    }
                    this._updateStatus(executionState);
                    break;
                }
                case 'comm_open':
                    if (this.handleComms) {
                        await this._handleCommOpen(msg);
                    }
                    break;
                case 'comm_msg':
                    if (this.handleComms) {
                        await this._handleCommMsg(msg);
                    }
                    break;
                case 'comm_close':
                    if (this.handleComms) {
                        await this._handleCommClose(msg);
                    }
                    break;
                default:
                    break;
            }
            // If the message was a status dead message, we might have disposed ourselves.
            if (!this.isDisposed) {
                this._assertCurrentMessage(msg);
                // the message wouldn't be emitted if we were disposed anyway.
                this._iopubMessage.emit(msg);
            }
        }
    }
    /**
     * Attempt a connection if we have not exhausted connection attempts.
     */
    _reconnect() {
        console.log(`_reconnect`);
        this._errorIfDisposed();
        // Clear any existing reconnection attempt
        clearTimeout(this._reconnectTimeout);
        // Update the connection status and schedule a possible reconnection.
        if (this._reconnectAttempt < this._reconnectLimit) {
            this._updateConnectionStatus('connecting');
            // The first reconnect attempt should happen immediately, and subsequent
            // attempts should pick a random number in a growing range so that we
            // don't overload the server with synchronized reconnection attempts
            // across multiple kernels.
            const timeout = Private.getRandomIntInclusive(0, 1e3 * (Math.pow(2, this._reconnectAttempt) - 1));
            console.warn(`Connection lost, reconnecting in ${Math.floor(timeout / 1000)} seconds.`);
            this._reconnectTimeout = setTimeout(this._createSocket, timeout);
            this._reconnectAttempt += 1;
        } else {
            this._updateConnectionStatus('disconnected');
        }
        // Clear the websocket event handlers and the socket itself.
        this._clearSocket();
    }
    /**
     * Utility function to throw an error if this instance is disposed.
     */
    _errorIfDisposed() {
        if (this.isDisposed) {
            throw new Error('Kernel connection is disposed');
        }
    }
}
exports.KernelConnection = KernelConnection;
/**
 * A private namespace for the Kernel.
 */
var Private;
(function (Private) {
    /**
     * Log the current kernel status.
     */
    function logKernelStatus(kernel) {
        switch (kernel.status) {
            case 'idle':
            case 'busy':
            case 'unknown':
                return;
            default:
                console.debug(`Kernel: ${kernel.status} (${kernel.id})`);
                break;
        }
    }
    Private.logKernelStatus = logKernelStatus;
    /**
     * Send a kernel message to the kernel and resolve the reply message.
     */
    async function handleShellMessage(kernel, msg) {
        const future = kernel.sendShellMessage(msg, true);
        return future.done;
    }
    Private.handleShellMessage = handleShellMessage;
    /**
     * Try to load an object from a module or a registry.
     *
     * Try to load an object from a module asynchronously if a module
     * is specified, otherwise tries to load an object from the global
     * registry, if the global registry is provided.
     *
     * #### Notes
     * Loading a module uses requirejs.
     */
    function loadObject(name, moduleName, registry) {
        return new Promise((resolve, reject) => {
            // Try loading the module using require.js
            if (moduleName) {
                if (typeof requirejs === 'undefined') {
                    throw new Error('requirejs not found');
                }
                requirejs(
                    [moduleName],
                    (mod) => {
                        if (mod[name] === void 0) {
                            const msg = `Object '${name}' not found in module '${moduleName}'`;
                            reject(new Error(msg));
                        } else {
                            resolve(mod[name]);
                        }
                    },
                    reject
                );
            } else {
                if (registry === null || registry === void 0 ? void 0 : registry[name]) {
                    resolve(registry[name]);
                } else {
                    reject(new Error(`Object '${name}' not found in registry`));
                }
            }
        });
    }
    Private.loadObject = loadObject;
    /**
     * Get a random integer between min and max, inclusive of both.
     *
     * #### Notes
     * From
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
     *
     * From the MDN page: It might be tempting to use Math.round() to accomplish
     * that, but doing so would cause your random numbers to follow a non-uniform
     * distribution, which may not be acceptable for your needs.
     */
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    Private.getRandomIntInclusive = getRandomIntInclusive;
})(Private || (Private = {}));
//# sourceMappingURL=default.js.map