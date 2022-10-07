# Telemetry created by Jupyter Extension

Expand each section to see more information about that event.

* DATASCIENCE.ADD_CELL_BELOW  (Telemetry.AddCellBelow)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    User adds a cell below the current cell for IW.  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DATASCIENCE.CLICKED_EXPORT_NOTEBOOK_AS_QUICK_PICK  (Telemetry.ClickedExportNotebookAsQuickPick)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    User exports the IW or Notebook to a specific format.  
    ```

    - Properties:  
        - `format`: `<see below>`  
        What format to export to was selected in the quick pick.  
        Possible values include:  
            - `pdf`  
            - `html`  
            - `python`  
            - `ipynb`  


* DATASCIENCE.CREATE_NEW_INTERACTIVE  (Telemetry.CreateNewInteractive)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Command to create a new Interactive Window.  
    ```



* DATASCIENCE.DATA_VIEWER_DATA_DIMENSIONALITY  (Telemetry.DataViewerDataDimensionality)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Telemetry event sent when a slice is first applied in a  
    data viewer instance to a sliceable Python variable.  
    ```

    - Measures:  
        - `numberOfDimensions`: `number`  
        This property represents the number of dimensions  
        on the target variable being sliced. This should  
        always be 2 at minimum.  


* DATASCIENCE.DATA_VIEWER_SLICE_ENABLEMENT_STATE_CHANGED  (Telemetry.DataViewerSliceEnablementStateChanged)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Telemetry event sent whenever the user toggles the checkbox  
    controlling whether a slice is currently being applied to an  
    n-dimensional variable.  
    ```

    - Properties:  
        - `newState`: `<see below>`  
        This property is either 'checked' when the result of toggling  
        the checkbox is for slicing to be enabled, or 'unchecked'  
        when the result of toggling the checkbox is for slicing  
        to be disabled.  
        Possible values include:  
            - `checked`  
            - `unchecked`  


* DATASCIENCE.DATA_VIEWER_SLICE_OPERATION  (Telemetry.DataViewerSliceOperation)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Telemetry event sent whenever the user applies a valid slice  
    to a sliceable Python variable in the data viewer.  
    ```

    - Properties:  
        - `source`: `<see below>`  
        This property indicates whether the slice operation  
        was triggered using the dropdown or the textbox in  
        the slice control panel. `source` is one of `dropdown`,  
        `textbox`, or `checkbox`.  
        Possible values include:  
            - `dropdown`  
            - `textbox`  
            - `checkbox`  


* DATASCIENCE.DEBUG_CONTINUE  (Telemetry.DebugContinue)  
      Owner: [@roblourens](https://github.com/roblourens)  
    ```
    Telemetry event sent when user hits the `continue` button while debugging IW  
    ```



* DATASCIENCE.DEBUG_CURRENT_CELL  (Telemetry.DebugCurrentCell)  
      Owner: [@roblourens](https://github.com/roblourens)  
    ```
    Telemetry event sent when user debugs the cell in the IW  
    ```



* DATASCIENCE.DEBUG_FILE_INTERACTIVE  (Telemetry.DebugFileInteractive)  
      Owner: [@roblourens](https://github.com/roblourens)  
    ```
    Telemetry event sent when user debugs the file in the IW  
    ```



* DATASCIENCE.DEBUG_STEP_OVER  (Telemetry.DebugStepOver)  
      Owner: [@roblourens](https://github.com/roblourens)  
    ```
    Telemetry event sent when user hits the `step over` button while debugging IW  
    ```



* DATASCIENCE.DEBUG_STOP  (Telemetry.DebugStop)  
      Owner: [@roblourens](https://github.com/roblourens)  
    ```
    Telemetry event sent when user hits the `stop` button while debugging IW  
    ```



* DATASCIENCE.DEBUGGING.CLICKED_ON_SETUP  (DebuggingTelemetry.clickedOnSetup)  
      Owner: [@roblourens](https://github.com/roblourens)  
    ```
    Sent when the user accepts the prompt to install ipykernel 6 automatically.  
    ```



* DATASCIENCE.DEBUGGING.CLICKED_RUN_AND_DEBUG_CELL  (DebuggingTelemetry.clickedRunAndDebugCell)  
      Owner: [@roblourens](https://github.com/roblourens)  
    ```
    Sent when the user attempts to start debugging a notebook cell.  
    ```



* DATASCIENCE.DEBUGGING.CLICKED_RUNBYLINE  (DebuggingTelemetry.clickedRunByLine)  
      Owner: [@roblourens](https://github.com/roblourens)  
    ```
    Sent when the user attempts to start run by line.  
    ```



* DATASCIENCE.DEBUGGING.CLOSED_MODAL  (DebuggingTelemetry.closedModal)  
      Owner: [@roblourens](https://github.com/roblourens)  
    ```
    Sent when the user dismisses the prompt to install ipykernel 6 automatically.  
    ```



* DATASCIENCE.DEBUGGING.ENDED_SESSION  (DebuggingTelemetry.endedSession)  
      Owner: [@roblourens](https://github.com/roblourens)  
    ```
    Sent when a notebook debugging session ends.  
    ```

    - Properties:  
        - `reason`: `<see below>`  
        The reason the session ended.  
        Possible values include:  
            - `'normally'`  
            - `'onKernelDisposed'`  
            - `'onAnInterrupt'`  
            - `'onARestart'`  
            - `'withKeybinding'`  


* DATASCIENCE.DEBUGGING.IPYKERNEL6_STATUS  (DebuggingTelemetry.ipykernel6Status)  
      Owner: [@roblourens](https://github.com/roblourens)  
    ```
    An event describing whether the environment has ipykernel 6 installed.  
    ```

    - Properties:  
        - `status`: `<see below>`  
        Whether ipykernel 6 is installed.  
        Possible values include:  
            - `'installed'`  
            - `'notInstalled'`  


* DATASCIENCE.DEBUGGING.SUCCESSFULLY_STARTED_IW_JUPYTER  (DebuggingTelemetry.successfullyStartedIWJupyterDebugger)  
      Owner: [@roblourens](https://github.com/roblourens)  
    ```
    Telemetry sent when we have managed to successfully start the Interactive Window debugger using the Jupyter protocol.  
    ```



* DATASCIENCE.DEBUGGING.SUCCESSFULLY_STARTED_RUN_AND_DEBUG_CELL  (DebuggingTelemetry.successfullyStartedRunAndDebugCell)  
      Owner: [@roblourens](https://github.com/roblourens)  
    ```
    Sent when the user successfully starts debugging a notebook cell.  
    ```



* DATASCIENCE.DEBUGGING.SUCCESSFULLY_STARTED_RUNBYLINE  (DebuggingTelemetry.successfullyStartedRunByLine)  
      Owner: [@roblourens](https://github.com/roblourens)  
    ```
    Sent when the run by line session starts successfully.  
    ```



* DATASCIENCE.DISABLE_INTERACTIVE_SHIFT_ENTER  (Telemetry.DisableInteractiveShiftEnter)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Disables using Shift+Enter to run code in IW (this is in response to the prompt recommending users to enable this to use the IW)  
    ```



* DATASCIENCE.ENABLE_INTERACTIVE_SHIFT_ENTER  (Telemetry.EnableInteractiveShiftEnter)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Enable using Shift+Enter to run code in IW (this is in response to the prompt recommending users to enable this to use the IW)  
    ```



* DATASCIENCE.ENTER_JUPYTER_URI  (Telemetry.EnterJupyterURI)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    A URI has been selected and is being checked for validity.  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DATASCIENCE.EXECUTE_CELL  (Telemetry.ExecuteCell)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Sent when a user executes a cell.  
    ```

    - Properties:  
        - `actionSource`: `<see below>`  
        Whether this was started by Jupyter extension or a 3rd party.  
        Common to most of the events.  
        Possible values include:  
            - `jupyterExtension`  
            - `3rdPartyExtension`  
        - `capturedEnvVars`?: `boolean`  
        Whether we managed to capture the environment variables or not.  
        In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
        Common to most of the events.  
        - `disableUI`?: `boolean`  
        Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
        If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
        Common to most of the events.  
        - `isUsingActiveInterpreter`?: `boolean`  
        Whether this resource is using the active Python interpreter or not.  
        Common to most of the events.  
        - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
        Whether kernel was started using kernel spec, interpreter, etc.  
        Common to most of the events.  
        - `kernelId`: `string`  
        Hash of the Kernel Connection id.  
        Common to most of the events.  
        - `kernelLanguage`: `string`  
        Language of the kernel connection.  
        Common to most of the events.  
        - `kernelSessionId`: `string`  
        Unique identifier for an instance of a notebook session.  
        If we restart or run this notebook tomorrow, this id will be different.  
        Id could be something as simple as a hash of the current Epoch time.  
        Common to most of the events.  
        - `pythonEnvironmentPackages`?: `string`  
        Comma delimited list of hashed packages & their versions.  
        Common to most of the events.  
        - `pythonEnvironmentPath`?: `string`  
        A key, so that rest of the information is tied to this. (hash)  
        Common to most of the events.  
        - `pythonEnvironmentType`?: `<see below>`  
        Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
        Common to most of the events.  
        Possible values include:  
            - `Unknown`  
            - `Conda`  
            - `VirtualEnv`  
            - `PipEnv`  
            - `Pyenv`  
            - `Venv`  
            - `WindowsStore`  
            - `Poetry`  
            - `VirtualEnvWrapper`  
            - `Global`  
            - `System`  
        - `pythonEnvironmentVersion`?: `string`  
        Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
        Common to most of the events.  
        - `resourceHash`?: `string`  
        Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
        If we run the same notebook tomorrow, the hash will be the same.  
        Used to check whether a particular notebook fails across time or not.  
        This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
        and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
        we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
        and have a better understanding of what is going on, e.g. why something failed.  
        Common to most of the events.  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  
        - `userExecutedCell`?: `boolean`  
        Whether the user executed a cell.  
        Common to most of the events.  
    - Measures:  
        - `interruptCount`?: `number`  
        This number gets reset after we attempt a restart or change kernel.  
        Common to most of the events.  
        - `kernelInterpreterCount`: `number`  
        Total number of interpreters in the kernel spec list.  
        Common to most of the events.  
        - `kernelLiveCount`: `number`  
        Total number of live kernels in the kernel spec list.  
        Common to most of the events.  
        - `kernelSpecCount`: `number`  
        Total number of kernel specs in the kernel spec list.  
        Common to most of the events.  
        - `pythonEnvironmentCount`?: `number`  
        Total number of python environments.  
        Common to most of the events.  
        - `restartCount`?: `number`  
        This number gets reset after change the kernel.  
        Common to most of the events.  
        - `startFailureCount`?: `number`  
        Number of times starting the kernel failed.  
        Common to most of the events.  
        - `switchKernelCount`?: `number`  
        Number of times the kernel was changed.  
        Common to most of the events.  


* DATASCIENCE.EXPORT_NOTEBOOK_AS  (Telemetry.ExportNotebookAs)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Called on the completion of exporting a Jupyter notebook into a new format  
    This is the result of the operation, so it's not tagged as a user action as that  
    comes from ExportNotebookAsCommand or ExportNotebookAsQuickPick  
    ```

    - Properties:  
        - `cancelled`?: `boolean`  
        Was the export operation cancelled.  
        - `format`: `<see below>`  
        What format was the export performed to.  
        Possible values include:  
            - `pdf`  
            - `html`  
            - `python`  
            - `ipynb`  
        - `opened`?: `boolean`  
        Did the user end with opening the file in VS Code.  
        - `successful`?: `boolean`  
        Was the export operation successful.  


* DATASCIENCE.EXPORT_NOTEBOOK_AS_COMMAND  (Telemetry.ExportNotebookAsCommand)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Called when user exports a Jupyter Notebook or IW into a Python file, HTML, PDF, etc.  
    Command is `Jupyter: Export to Python Script` or `Jupyter: Export to HTML`  
    Basically user is exporting some jupyter notebook or IW into a Python file or other.  
    ```

    - Properties:  
        - `format`: `<see below>`  
        What format was the export performed to.  
        Possible values include:  
            - `pdf`  
            - `html`  
            - `python`  
            - `ipynb`  


* DATASCIENCE.EXPORT_NOTEBOOK_AS_FAILED  (Telemetry.ExportNotebookAsFailed)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    The Export Notebook operation failed.  
    ```

    - Properties:  
        - `format`: `<see below>`  
        What format was the export performed to.  
        Possible values include:  
            - `pdf`  
            - `html`  
            - `python`  
            - `ipynb`  


* DATASCIENCE.EXPORT_PYTHON_FILE  (Telemetry.ExportPythonFileInteractive)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    User exports a .py file with cells as a Jupyter Notebook.  
    ```



* DATASCIENCE.EXPORT_PYTHON_FILE_AND_OUTPUT  (Telemetry.ExportPythonFileAndOutputInteractive)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    User exports a .py file with cells along with the outputs which that file would generate in the Interactive Windows as a Jupyter Notebook.  
    ```



* DATASCIENCE.FAILED_SHOW_DATA_EXPLORER  (Telemetry.FailedShowDataViewer)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Failed to show the data viewer via the variable view.  
    ```



* DATASCIENCE.FAILED_TO_CREATE_CONTROLLER  (Telemetry.FailedToCreateNotebookController)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Telemetry sent when we fail to create a Notebook Controller (an entry for the UI kernel list in Native Notebooks).  
    ```

    - Properties:  
        - `failed`: `true`  
        Whether there was a failure.  
        Common to most of the events.  
        - `failureCategory`?: `string`  
        A reason that we generate (e.g. kerneldied, noipykernel, etc), more like a category of the error.  
        Common to most of the events.  
        - `failureSubCategory`?: `string`  
        Further sub classification of the error. E.g. kernel died due to the fact that zmq is not installed properly.  
        Common to most of the events.  
        - `kind`: `<see below>`  
        What kind of kernel spec did we fail to create.  
        Possible values include:  
            - `'startUsingPythonInterpreter'`  
            - `'startUsingDefaultKernel'`  
            - `'startUsingLocalKernelSpec'`  
            - `'startUsingRemoteKernelSpec'`  
            - `'connectToLiveRemoteKernel'`  
        - `pythonErrorFile`?: `string`  
        Hash of the file name that contains the file in the last frame (from Python stack trace).  
        Common to most of the events.  
        - `pythonErrorFolder`?: `string`  
        Hash of the folder that contains the file in the last frame (from Python stack trace).  
        Common to most of the events.  
        - `pythonErrorPackage`?: `string`  
        Hash of the module that contains the file in the last frame (from Python stack trace).  
        Common to most of the events.  
        - `stackTrace`: `string`  
        Node stacktrace without PII.  
        Common to most of the events.  


* DATASCIENCE.GOTO_NEXT_CELL_IN_FILE  (Telemetry.GotoNextCellInFile)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Cell Navigation Command in Interactive Window  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DATASCIENCE.GOTO_PREV_CELL_IN_FILE  (Telemetry.GotoPrevCellInFile)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Cell Navigation Command in Interactive Window  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DATASCIENCE.IMPORT_NOTEBOOK  (Telemetry.ImportNotebook)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Called when user imports a Jupyter Notebook into a Python file.  
    Command is `Jupyter: Import Jupyter Notebook`  
    Basically user is exporting some jupyter notebook into a Python file.  
    ```

    - Properties:  
        - `scope`: `<see below>`  
        The command can be called as a command, in which a file then needs to be selected, or with a file  
        as the context already, in which case the import command doesn't ask for selection.  
        Possible values include:  
            - `'command'`  
            - `'file'`  


* DATASCIENCE.INTERACTIVE_WINDOW_DEBUG_SETUP_CODE_FAILURE  (Telemetry.InteractiveWindowDebugSetupCodeFailure)  
      Owner: [@roblourens](https://github.com/roblourens)  
    ```
    Error information from the debugger output channel while running initialization code.  
    ```

    - Properties:  
        - `ename`: `string`  
        The error name of the failure.  
        - `evalue`: `string`  
        The error value of the failure.  


* DATASCIENCE.INTERRUPT  (Telemetry.Interrupt)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    User interrupts a cell  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DATASCIENCE.JUPYTER_KERNEL_API_ACCESS  (Telemetry.JupyterKernelApiAccess)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry sent when an extension attempts to use our 3rd party API.  
    ```

    - Properties:  
        - `allowed`: `<see below>`  
        Whether or not the extension was able to use the API.  
        Possible values include:  
            - `'yes'`  
            - `'no'`  
        - `extensionId`: `string`  
        Extension Id that's attempting to use the API.  


* DATASCIENCE.JUPYTER_KERNEL_API_USAGE  (Telemetry.JupyterKernelApiUsage)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry sent when an extension uses our 3rd party API.  
    ```

    - Properties:  
        - `extensionId`: `string`  
        Extension Id that's attempting to use the API.  
        - `pemUsed`: `keyof IExportedKernelService`  
        Name of the API member used.  


* DATASCIENCE.JUPYTER_KERNEL_FILTER_USED  (Telemetry.JupyterKernelFilterUsed)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Called when the user clicks accept on the kernel filter UI.  
    ```



* DATASCIENCE.JUPYTER_KERNEL_HIDDEN_VIA_FILTER  (Telemetry.JupyterKernelHiddenViaFilter)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Called when a controller that would have been shown is hidden by a filter.  
    ```



* DATASCIENCE.JUPYTER_NOT_INSTALLED_ERROR_SHOWN  (Telemetry.JupyterNotInstalledErrorShown)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Sent when we display a message informing the user about Jupyter not being installed (or not detected).  
    ```



* DATASCIENCE.KERNEL_CRASH  (Telemetry.KernelCrash)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Sent when Kernel crashes.  
    ```

    - Properties:  
        - `actionSource`: `<see below>`  
        Whether this was started by Jupyter extension or a 3rd party.  
        Common to most of the events.  
        Possible values include:  
            - `jupyterExtension`  
            - `3rdPartyExtension`  
        - `capturedEnvVars`?: `boolean`  
        Whether we managed to capture the environment variables or not.  
        In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
        Common to most of the events.  
        - `disableUI`?: `boolean`  
        Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
        If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
        Common to most of the events.  
        - `isUsingActiveInterpreter`?: `boolean`  
        Whether this resource is using the active Python interpreter or not.  
        Common to most of the events.  
        - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
        Whether kernel was started using kernel spec, interpreter, etc.  
        Common to most of the events.  
        - `kernelId`: `string`  
        Hash of the Kernel Connection id.  
        Common to most of the events.  
        - `kernelLanguage`: `string`  
        Language of the kernel connection.  
        Common to most of the events.  
        - `kernelSessionId`: `string`  
        Unique identifier for an instance of a notebook session.  
        If we restart or run this notebook tomorrow, this id will be different.  
        Id could be something as simple as a hash of the current Epoch time.  
        Common to most of the events.  
        - `pythonEnvironmentPackages`?: `string`  
        Comma delimited list of hashed packages & their versions.  
        Common to most of the events.  
        - `pythonEnvironmentPath`?: `string`  
        A key, so that rest of the information is tied to this. (hash)  
        Common to most of the events.  
        - `pythonEnvironmentType`?: `<see below>`  
        Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
        Common to most of the events.  
        Possible values include:  
            - `Unknown`  
            - `Conda`  
            - `VirtualEnv`  
            - `PipEnv`  
            - `Pyenv`  
            - `Venv`  
            - `WindowsStore`  
            - `Poetry`  
            - `VirtualEnvWrapper`  
            - `Global`  
            - `System`  
        - `pythonEnvironmentVersion`?: `string`  
        Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
        Common to most of the events.  
        - `resourceHash`?: `string`  
        Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
        If we run the same notebook tomorrow, the hash will be the same.  
        Used to check whether a particular notebook fails across time or not.  
        This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
        and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
        we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
        and have a better understanding of what is going on, e.g. why something failed.  
        Common to most of the events.  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  
        - `userExecutedCell`?: `boolean`  
        Whether the user executed a cell.  
        Common to most of the events.  
    - Measures:  
        - `interruptCount`?: `number`  
        This number gets reset after we attempt a restart or change kernel.  
        Common to most of the events.  
        - `kernelInterpreterCount`: `number`  
        Total number of interpreters in the kernel spec list.  
        Common to most of the events.  
        - `kernelLiveCount`: `number`  
        Total number of live kernels in the kernel spec list.  
        Common to most of the events.  
        - `kernelSpecCount`: `number`  
        Total number of kernel specs in the kernel spec list.  
        Common to most of the events.  
        - `pythonEnvironmentCount`?: `number`  
        Total number of python environments.  
        Common to most of the events.  
        - `restartCount`?: `number`  
        This number gets reset after change the kernel.  
        Common to most of the events.  
        - `startFailureCount`?: `number`  
        Number of times starting the kernel failed.  
        Common to most of the events.  
        - `switchKernelCount`?: `number`  
        Number of times the kernel was changed.  
        Common to most of the events.  


* DATASCIENCE.KERNEL_SPEC_LANGUAGE  (Telemetry.KernelSpecLanguage)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Sent to detect the different languages of kernel specs used.  
    ```

    - Properties:  
        - `kind`: `<see below>`  
        Whether this is a local or remote kernel.  
        Possible values include:  
            - `'local'`  
            - `'remote'`  
        - `language`: `string`  
        Language of the kernelSpec.  
        - `usesShell`?: `boolean`  
        Whether shell is used to start the kernel. E.g. `"/bin/sh"` is used in the argv of the kernelSpec.  
        OCaml is one such kernel.  


* DATASCIENCE.KERNEL_STARTUP_CODE_FAILURE  (Telemetry.KernelStartupCodeFailure)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Code we run post starting a kernel seems to have failed.  
    ```

    - Properties:  
        - `ename`: `string`  
        The error name of the failure.  
        - `evalue`: `string`  
        The error value of the failure  


* DATASCIENCE.NATIVE.OPEN_NOTEBOOK_ALL  (Telemetry.OpenNotebookAll)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Sent when we have opened any Jupyter notebook in a VS Code session.  
    Not tagging as a user action as this could be something like auto opening a file  
    from a previous session and not a direct user action.  
    ```



* DATASCIENCE.NO_ACTIVE_KERNEL_SESSION  (Telemetry.NoActiveKernelSession)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Send when we want to install data viewer dependendies, but don't have an active kernel session.  
    Used by the dataViewerDependencyService.  
    ```



* DATASCIENCE.NOTEBOOK_INTERRUPT  (Telemetry.NotebookInterrupt)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry sent when user interrupts the kernel.  
    Check the `resourceType` to determine whether its a Jupyter Notebook or IW.  
    ```

    - `When interrupt is a success`:  
        - Properties:  
            - `actionSource`: `<see below>`  
            Whether this was started by Jupyter extension or a 3rd party.  
            Common to most of the events.  
            Possible values include:  
                - `jupyterExtension`  
                - `3rdPartyExtension`  
            - `capturedEnvVars`?: `boolean`  
            Whether we managed to capture the environment variables or not.  
            In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
            Common to most of the events.  
            - `disableUI`?: `boolean`  
            Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
            If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
            Common to most of the events.  
            - `isUsingActiveInterpreter`?: `boolean`  
            Whether this resource is using the active Python interpreter or not.  
            Common to most of the events.  
            - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
            Whether kernel was started using kernel spec, interpreter, etc.  
            Common to most of the events.  
            - `kernelId`: `string`  
            Hash of the Kernel Connection id.  
            Common to most of the events.  
            - `kernelLanguage`: `string`  
            Language of the kernel connection.  
            Common to most of the events.  
            - `kernelSessionId`: `string`  
            Unique identifier for an instance of a notebook session.  
            If we restart or run this notebook tomorrow, this id will be different.  
            Id could be something as simple as a hash of the current Epoch time.  
            Common to most of the events.  
            - `pythonEnvironmentPackages`?: `string`  
            Comma delimited list of hashed packages & their versions.  
            Common to most of the events.  
            - `pythonEnvironmentPath`?: `string`  
            A key, so that rest of the information is tied to this. (hash)  
            Common to most of the events.  
            - `pythonEnvironmentType`?: `<see below>`  
            Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
            Common to most of the events.  
            Possible values include:  
                - `Unknown`  
                - `Conda`  
                - `VirtualEnv`  
                - `PipEnv`  
                - `Pyenv`  
                - `Venv`  
                - `WindowsStore`  
                - `Poetry`  
                - `VirtualEnvWrapper`  
                - `Global`  
                - `System`  
            - `pythonEnvironmentVersion`?: `string`  
            Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
            Common to most of the events.  
            - `resourceHash`?: `string`  
            Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
            If we run the same notebook tomorrow, the hash will be the same.  
            Used to check whether a particular notebook fails across time or not.  
            This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
            and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
            we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
            and have a better understanding of what is going on, e.g. why something failed.  
            Common to most of the events.  
            - `resourceType`?: `<see below>`  
            Used to determine whether this event is related to a Notebooks or Interactive window.  
            Common to most of the events.  
            Possible values include:  
                - `'notebook'`  
                - `'interactive'`  
            - `result`: `<see below>`  
            The result of the interrupt,  
            Possible values include:  
                - `success`  
                - `timeout`  
                - `restart`  
            - `userExecutedCell`?: `boolean`  
            Whether the user executed a cell.  
            Common to most of the events.  
        - Measures:  
            - `duration`: `number`  
            Duration of a measure in milliseconds.  
            Common measurement used across a number of events.  
            - `interruptCount`?: `number`  
            This number gets reset after we attempt a restart or change kernel.  
            Common to most of the events.  
            - `kernelInterpreterCount`: `number`  
            Total number of interpreters in the kernel spec list.  
            Common to most of the events.  
            - `kernelLiveCount`: `number`  
            Total number of live kernels in the kernel spec list.  
            Common to most of the events.  
            - `kernelSpecCount`: `number`  
            Total number of kernel specs in the kernel spec list.  
            Common to most of the events.  
            - `pythonEnvironmentCount`?: `number`  
            Total number of python environments.  
            Common to most of the events.  
            - `restartCount`?: `number`  
            This number gets reset after change the kernel.  
            Common to most of the events.  
            - `startFailureCount`?: `number`  
            Number of times starting the kernel failed.  
            Common to most of the events.  
            - `switchKernelCount`?: `number`  
            Number of times the kernel was changed.  
            Common to most of the events.  
    - `If there are unhandled exceptions`:  
        - Properties:  
            - `actionSource`: `<see below>`  
            Whether this was started by Jupyter extension or a 3rd party.  
            Common to most of the events.  
            Possible values include:  
                - `jupyterExtension`  
                - `3rdPartyExtension`  
            - `capturedEnvVars`?: `boolean`  
            Whether we managed to capture the environment variables or not.  
            In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
            Common to most of the events.  
            - `disableUI`?: `boolean`  
            Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
            If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
            Common to most of the events.  
            - `failed`: `true`  
            Whether there was a failure.  
            Common to most of the events.  
            - `failureCategory`?: `string`  
            A reason that we generate (e.g. kerneldied, noipykernel, etc), more like a category of the error.  
            Common to most of the events.  
            - `failureSubCategory`?: `string`  
            Further sub classification of the error. E.g. kernel died due to the fact that zmq is not installed properly.  
            Common to most of the events.  
            - `isUsingActiveInterpreter`?: `boolean`  
            Whether this resource is using the active Python interpreter or not.  
            Common to most of the events.  
            - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
            Whether kernel was started using kernel spec, interpreter, etc.  
            Common to most of the events.  
            - `kernelId`: `string`  
            Hash of the Kernel Connection id.  
            Common to most of the events.  
            - `kernelLanguage`: `string`  
            Language of the kernel connection.  
            Common to most of the events.  
            - `kernelSessionId`: `string`  
            Unique identifier for an instance of a notebook session.  
            If we restart or run this notebook tomorrow, this id will be different.  
            Id could be something as simple as a hash of the current Epoch time.  
            Common to most of the events.  
            - `pythonEnvironmentPackages`?: `string`  
            Comma delimited list of hashed packages & their versions.  
            Common to most of the events.  
            - `pythonEnvironmentPath`?: `string`  
            A key, so that rest of the information is tied to this. (hash)  
            Common to most of the events.  
            - `pythonEnvironmentType`?: `<see below>`  
            Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
            Common to most of the events.  
            Possible values include:  
                - `Unknown`  
                - `Conda`  
                - `VirtualEnv`  
                - `PipEnv`  
                - `Pyenv`  
                - `Venv`  
                - `WindowsStore`  
                - `Poetry`  
                - `VirtualEnvWrapper`  
                - `Global`  
                - `System`  
            - `pythonEnvironmentVersion`?: `string`  
            Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
            Common to most of the events.  
            - `pythonErrorFile`?: `string`  
            Hash of the file name that contains the file in the last frame (from Python stack trace).  
            Common to most of the events.  
            - `pythonErrorFolder`?: `string`  
            Hash of the folder that contains the file in the last frame (from Python stack trace).  
            Common to most of the events.  
            - `pythonErrorPackage`?: `string`  
            Hash of the module that contains the file in the last frame (from Python stack trace).  
            Common to most of the events.  
            - `resourceHash`?: `string`  
            Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
            If we run the same notebook tomorrow, the hash will be the same.  
            Used to check whether a particular notebook fails across time or not.  
            This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
            and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
            we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
            and have a better understanding of what is going on, e.g. why something failed.  
            Common to most of the events.  
            - `resourceType`?: `<see below>`  
            Used to determine whether this event is related to a Notebooks or Interactive window.  
            Common to most of the events.  
            Possible values include:  
                - `'notebook'`  
                - `'interactive'`  
            - `stackTrace`: `string`  
            Node stacktrace without PII.  
            Common to most of the events.  
            - `userExecutedCell`?: `boolean`  
            Whether the user executed a cell.  
            Common to most of the events.  
        - Measures:  
            - `duration`: `number`  
            Duration of a measure in milliseconds.  
            Common measurement used across a number of events.  
            - `interruptCount`?: `number`  
            This number gets reset after we attempt a restart or change kernel.  
            Common to most of the events.  
            - `kernelInterpreterCount`: `number`  
            Total number of interpreters in the kernel spec list.  
            Common to most of the events.  
            - `kernelLiveCount`: `number`  
            Total number of live kernels in the kernel spec list.  
            Common to most of the events.  
            - `kernelSpecCount`: `number`  
            Total number of kernel specs in the kernel spec list.  
            Common to most of the events.  
            - `pythonEnvironmentCount`?: `number`  
            Total number of python environments.  
            Common to most of the events.  
            - `restartCount`?: `number`  
            This number gets reset after change the kernel.  
            Common to most of the events.  
            - `startFailureCount`?: `number`  
            Number of times starting the kernel failed.  
            Common to most of the events.  
            - `switchKernelCount`?: `number`  
            Number of times the kernel was changed.  
            Common to most of the events.  


* DATASCIENCE.NOTEBOOK_RESTART  (Telemetry.NotebookRestart)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry sent when user Restarts the Kernel.  
    Check the `resourceType` to determine whether its a Jupyter Notebook or IW.  
    ```

    - `Sent to capture just the time taken to restart, see comments.`:  
        - Properties:  
            - `actionSource`: `<see below>`  
            Whether this was started by Jupyter extension or a 3rd party.  
            Common to most of the events.  
            Possible values include:  
                - `jupyterExtension`  
                - `3rdPartyExtension`  
            - `capturedEnvVars`?: `boolean`  
            Whether we managed to capture the environment variables or not.  
            In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
            Common to most of the events.  
            - `disableUI`?: `boolean`  
            Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
            If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
            Common to most of the events.  
            - `isUsingActiveInterpreter`?: `boolean`  
            Whether this resource is using the active Python interpreter or not.  
            Common to most of the events.  
            - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
            Whether kernel was started using kernel spec, interpreter, etc.  
            Common to most of the events.  
            - `kernelId`: `string`  
            Hash of the Kernel Connection id.  
            Common to most of the events.  
            - `kernelLanguage`: `string`  
            Language of the kernel connection.  
            Common to most of the events.  
            - `kernelSessionId`: `string`  
            Unique identifier for an instance of a notebook session.  
            If we restart or run this notebook tomorrow, this id will be different.  
            Id could be something as simple as a hash of the current Epoch time.  
            Common to most of the events.  
            - `pythonEnvironmentPackages`?: `string`  
            Comma delimited list of hashed packages & their versions.  
            Common to most of the events.  
            - `pythonEnvironmentPath`?: `string`  
            A key, so that rest of the information is tied to this. (hash)  
            Common to most of the events.  
            - `pythonEnvironmentType`?: `<see below>`  
            Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
            Common to most of the events.  
            Possible values include:  
                - `Unknown`  
                - `Conda`  
                - `VirtualEnv`  
                - `PipEnv`  
                - `Pyenv`  
                - `Venv`  
                - `WindowsStore`  
                - `Poetry`  
                - `VirtualEnvWrapper`  
                - `Global`  
                - `System`  
            - `pythonEnvironmentVersion`?: `string`  
            Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
            Common to most of the events.  
            - `resourceHash`?: `string`  
            Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
            If we run the same notebook tomorrow, the hash will be the same.  
            Used to check whether a particular notebook fails across time or not.  
            This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
            and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
            we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
            and have a better understanding of what is going on, e.g. why something failed.  
            Common to most of the events.  
            - `resourceType`?: `<see below>`  
            Used to determine whether this event is related to a Notebooks or Interactive window.  
            Common to most of the events.  
            Possible values include:  
                - `'notebook'`  
                - `'interactive'`  
            - `startTimeOnly`: `true`  
            If true, this is the total time taken to restart the kernel (excluding times to stop current cells and the like).  
            Also in the case of raw kernels, we keep a separate process running, and when restarting we just switch to that process.  
            In such cases this value will be `undefined`. In the case of raw kernels this will be true only when starting a new kernel process from scratch.  
            - `userExecutedCell`?: `boolean`  
            Whether the user executed a cell.  
            Common to most of the events.  
        - Measures:  
            - `duration`: `number`  
            Duration of a measure in milliseconds.  
            Common measurement used across a number of events.  
            - `interruptCount`?: `number`  
            This number gets reset after we attempt a restart or change kernel.  
            Common to most of the events.  
            - `kernelInterpreterCount`: `number`  
            Total number of interpreters in the kernel spec list.  
            Common to most of the events.  
            - `kernelLiveCount`: `number`  
            Total number of live kernels in the kernel spec list.  
            Common to most of the events.  
            - `kernelSpecCount`: `number`  
            Total number of kernel specs in the kernel spec list.  
            Common to most of the events.  
            - `pythonEnvironmentCount`?: `number`  
            Total number of python environments.  
            Common to most of the events.  
            - `restartCount`?: `number`  
            This number gets reset after change the kernel.  
            Common to most of the events.  
            - `startFailureCount`?: `number`  
            Number of times starting the kernel failed.  
            Common to most of the events.  
            - `switchKernelCount`?: `number`  
            Number of times the kernel was changed.  
            Common to most of the events.  
    - `If there are unhandled exceptions.`:  
        - Properties:  
            - `actionSource`: `<see below>`  
            Whether this was started by Jupyter extension or a 3rd party.  
            Common to most of the events.  
            Possible values include:  
                - `jupyterExtension`  
                - `3rdPartyExtension`  
            - `capturedEnvVars`?: `boolean`  
            Whether we managed to capture the environment variables or not.  
            In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
            Common to most of the events.  
            - `disableUI`?: `boolean`  
            Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
            If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
            Common to most of the events.  
            - `failed`: `true`  
            Whether there was a failure.  
            Common to most of the events.  
            - `failureCategory`?: `string`  
            A reason that we generate (e.g. kerneldied, noipykernel, etc), more like a category of the error.  
            Common to most of the events.  
            - `failureSubCategory`?: `string`  
            Further sub classification of the error. E.g. kernel died due to the fact that zmq is not installed properly.  
            Common to most of the events.  
            - `isUsingActiveInterpreter`?: `boolean`  
            Whether this resource is using the active Python interpreter or not.  
            Common to most of the events.  
            - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
            Whether kernel was started using kernel spec, interpreter, etc.  
            Common to most of the events.  
            - `kernelId`: `string`  
            Hash of the Kernel Connection id.  
            Common to most of the events.  
            - `kernelLanguage`: `string`  
            Language of the kernel connection.  
            Common to most of the events.  
            - `kernelSessionId`: `string`  
            Unique identifier for an instance of a notebook session.  
            If we restart or run this notebook tomorrow, this id will be different.  
            Id could be something as simple as a hash of the current Epoch time.  
            Common to most of the events.  
            - `pythonEnvironmentPackages`?: `string`  
            Comma delimited list of hashed packages & their versions.  
            Common to most of the events.  
            - `pythonEnvironmentPath`?: `string`  
            A key, so that rest of the information is tied to this. (hash)  
            Common to most of the events.  
            - `pythonEnvironmentType`?: `<see below>`  
            Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
            Common to most of the events.  
            Possible values include:  
                - `Unknown`  
                - `Conda`  
                - `VirtualEnv`  
                - `PipEnv`  
                - `Pyenv`  
                - `Venv`  
                - `WindowsStore`  
                - `Poetry`  
                - `VirtualEnvWrapper`  
                - `Global`  
                - `System`  
            - `pythonEnvironmentVersion`?: `string`  
            Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
            Common to most of the events.  
            - `pythonErrorFile`?: `string`  
            Hash of the file name that contains the file in the last frame (from Python stack trace).  
            Common to most of the events.  
            - `pythonErrorFolder`?: `string`  
            Hash of the folder that contains the file in the last frame (from Python stack trace).  
            Common to most of the events.  
            - `pythonErrorPackage`?: `string`  
            Hash of the module that contains the file in the last frame (from Python stack trace).  
            Common to most of the events.  
            - `resourceHash`?: `string`  
            Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
            If we run the same notebook tomorrow, the hash will be the same.  
            Used to check whether a particular notebook fails across time or not.  
            This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
            and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
            we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
            and have a better understanding of what is going on, e.g. why something failed.  
            Common to most of the events.  
            - `resourceType`?: `<see below>`  
            Used to determine whether this event is related to a Notebooks or Interactive window.  
            Common to most of the events.  
            Possible values include:  
                - `'notebook'`  
                - `'interactive'`  
            - `stackTrace`: `string`  
            Node stacktrace without PII.  
            Common to most of the events.  
            - `userExecutedCell`?: `boolean`  
            Whether the user executed a cell.  
            Common to most of the events.  
        - Measures:  
            - `interruptCount`?: `number`  
            This number gets reset after we attempt a restart or change kernel.  
            Common to most of the events.  
            - `kernelInterpreterCount`: `number`  
            Total number of interpreters in the kernel spec list.  
            Common to most of the events.  
            - `kernelLiveCount`: `number`  
            Total number of live kernels in the kernel spec list.  
            Common to most of the events.  
            - `kernelSpecCount`: `number`  
            Total number of kernel specs in the kernel spec list.  
            Common to most of the events.  
            - `pythonEnvironmentCount`?: `number`  
            Total number of python environments.  
            Common to most of the events.  
            - `restartCount`?: `number`  
            This number gets reset after change the kernel.  
            Common to most of the events.  
            - `startFailureCount`?: `number`  
            Number of times starting the kernel failed.  
            Common to most of the events.  
            - `switchKernelCount`?: `number`  
            Number of times the kernel was changed.  
            Common to most of the events.  


* DATASCIENCE.NOTEBOOK_START  (Telemetry.NotebookStart)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Send when a kernel starts.  
    ```

    - Properties:  
        - `actionSource`: `<see below>`  
        Whether this was started by Jupyter extension or a 3rd party.  
        Common to most of the events.  
        Possible values include:  
            - `jupyterExtension`  
            - `3rdPartyExtension`  
        - `capturedEnvVars`?: `boolean`  
        Whether we managed to capture the environment variables or not.  
        In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
        Common to most of the events.  
        - `disableUI`?: `boolean`  
        Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
        If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
        Common to most of the events.  
        - `failed`: `true`  
        Whether there was a failure.  
        Common to most of the events.  
        - `failureCategory`?: `string`  
        A reason that we generate (e.g. kerneldied, noipykernel, etc), more like a category of the error.  
        Common to most of the events.  
        - `failureSubCategory`?: `string`  
        Further sub classification of the error. E.g. kernel died due to the fact that zmq is not installed properly.  
        Common to most of the events.  
        - `isUsingActiveInterpreter`?: `boolean`  
        Whether this resource is using the active Python interpreter or not.  
        Common to most of the events.  
        - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
        Whether kernel was started using kernel spec, interpreter, etc.  
        Common to most of the events.  
        - `kernelId`: `string`  
        Hash of the Kernel Connection id.  
        Common to most of the events.  
        - `kernelLanguage`: `string`  
        Language of the kernel connection.  
        Common to most of the events.  
        - `kernelSessionId`: `string`  
        Unique identifier for an instance of a notebook session.  
        If we restart or run this notebook tomorrow, this id will be different.  
        Id could be something as simple as a hash of the current Epoch time.  
        Common to most of the events.  
        - `pythonEnvironmentPackages`?: `string`  
        Comma delimited list of hashed packages & their versions.  
        Common to most of the events.  
        - `pythonEnvironmentPath`?: `string`  
        A key, so that rest of the information is tied to this. (hash)  
        Common to most of the events.  
        - `pythonEnvironmentType`?: `<see below>`  
        Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
        Common to most of the events.  
        Possible values include:  
            - `Unknown`  
            - `Conda`  
            - `VirtualEnv`  
            - `PipEnv`  
            - `Pyenv`  
            - `Venv`  
            - `WindowsStore`  
            - `Poetry`  
            - `VirtualEnvWrapper`  
            - `Global`  
            - `System`  
        - `pythonEnvironmentVersion`?: `string`  
        Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
        Common to most of the events.  
        - `pythonErrorFile`?: `string`  
        Hash of the file name that contains the file in the last frame (from Python stack trace).  
        Common to most of the events.  
        - `pythonErrorFolder`?: `string`  
        Hash of the folder that contains the file in the last frame (from Python stack trace).  
        Common to most of the events.  
        - `pythonErrorPackage`?: `string`  
        Hash of the module that contains the file in the last frame (from Python stack trace).  
        Common to most of the events.  
        - `resourceHash`?: `string`  
        Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
        If we run the same notebook tomorrow, the hash will be the same.  
        Used to check whether a particular notebook fails across time or not.  
        This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
        and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
        we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
        and have a better understanding of what is going on, e.g. why something failed.  
        Common to most of the events.  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  
        - `stackTrace`: `string`  
        Node stacktrace without PII.  
        Common to most of the events.  
        - `userExecutedCell`?: `boolean`  
        Whether the user executed a cell.  
        Common to most of the events.  
    - Measures:  
        - `interruptCount`?: `number`  
        This number gets reset after we attempt a restart or change kernel.  
        Common to most of the events.  
        - `kernelInterpreterCount`: `number`  
        Total number of interpreters in the kernel spec list.  
        Common to most of the events.  
        - `kernelLiveCount`: `number`  
        Total number of live kernels in the kernel spec list.  
        Common to most of the events.  
        - `kernelSpecCount`: `number`  
        Total number of kernel specs in the kernel spec list.  
        Common to most of the events.  
        - `pythonEnvironmentCount`?: `number`  
        Total number of python environments.  
        Common to most of the events.  
        - `restartCount`?: `number`  
        This number gets reset after change the kernel.  
        Common to most of the events.  
        - `startFailureCount`?: `number`  
        Number of times starting the kernel failed.  
        Common to most of the events.  
        - `switchKernelCount`?: `number`  
        Number of times the kernel was changed.  
        Common to most of the events.  


* DATASCIENCE.OPEN_PLOT_VIEWER  (Telemetry.OpenPlotViewer)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    A new instance of the plot viewer was opened.  
    ```



* DATASCIENCE.PYTHON_VARIABLE_FETCHING_CODE_FAILURE  (Telemetry.PythonVariableFetchingCodeFailure)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    The Python code that we ran to fetch variables had a failure.  
    ```

    - Properties:  
        - `ename`: `string`  
        The error name of the failure.  
        - `evalue`: `string`  
        The error value of the failure  


* DATASCIENCE.RECOMMENT_EXTENSION  (Telemetry.RecommendExtension)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Telemetry sent when we recommend installing an extension.  
    ```

    - Properties:  
        - `action`: `<see below>`  
        `displayed` - If prompt was displayed  
        `dismissed` - If prompt was displayed & dismissed by the user  
        `ok` - If prompt was displayed & ok clicked by the user  
        `cancel` - If prompt was displayed & cancel clicked by the user  
        `doNotShowAgain` - If prompt was displayed & doNotShowAgain clicked by the user  
        Possible values include:  
            - `'displayed'`  
            - `'dismissed'`  
            - `'ok'`  
            - `'cancel'`  
            - `'doNotShowAgain'`  
        - `extensionId`: `string`  
        Extension we recommended the user to install.  


* DATASCIENCE.REFRESH_DATA_VIEWER  (Telemetry.RefreshDataViewer)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Sent when the jupyter.refreshDataViewer command is invoked  
    ```



* DATASCIENCE.RESTART_KERNEL_COMMAND  (Telemetry.RestartKernelCommand)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry event sent when IW or Notebook is restarted  
    ```

    - Properties:  
        - `actionSource`: `<see below>`  
        Whether this was started by Jupyter extension or a 3rd party.  
        Common to most of the events.  
        Possible values include:  
            - `jupyterExtension`  
            - `3rdPartyExtension`  
        - `capturedEnvVars`?: `boolean`  
        Whether we managed to capture the environment variables or not.  
        In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
        Common to most of the events.  
        - `disableUI`?: `boolean`  
        Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
        If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
        Common to most of the events.  
        - `isUsingActiveInterpreter`?: `boolean`  
        Whether this resource is using the active Python interpreter or not.  
        Common to most of the events.  
        - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
        Whether kernel was started using kernel spec, interpreter, etc.  
        Common to most of the events.  
        - `kernelId`: `string`  
        Hash of the Kernel Connection id.  
        Common to most of the events.  
        - `kernelLanguage`: `string`  
        Language of the kernel connection.  
        Common to most of the events.  
        - `kernelSessionId`: `string`  
        Unique identifier for an instance of a notebook session.  
        If we restart or run this notebook tomorrow, this id will be different.  
        Id could be something as simple as a hash of the current Epoch time.  
        Common to most of the events.  
        - `pythonEnvironmentPackages`?: `string`  
        Comma delimited list of hashed packages & their versions.  
        Common to most of the events.  
        - `pythonEnvironmentPath`?: `string`  
        A key, so that rest of the information is tied to this. (hash)  
        Common to most of the events.  
        - `pythonEnvironmentType`?: `<see below>`  
        Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
        Common to most of the events.  
        Possible values include:  
            - `Unknown`  
            - `Conda`  
            - `VirtualEnv`  
            - `PipEnv`  
            - `Pyenv`  
            - `Venv`  
            - `WindowsStore`  
            - `Poetry`  
            - `VirtualEnvWrapper`  
            - `Global`  
            - `System`  
        - `pythonEnvironmentVersion`?: `string`  
        Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
        Common to most of the events.  
        - `resourceHash`?: `string`  
        Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
        If we run the same notebook tomorrow, the hash will be the same.  
        Used to check whether a particular notebook fails across time or not.  
        This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
        and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
        we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
        and have a better understanding of what is going on, e.g. why something failed.  
        Common to most of the events.  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  
        - `userExecutedCell`?: `boolean`  
        Whether the user executed a cell.  
        Common to most of the events.  
    - Measures:  
        - `interruptCount`?: `number`  
        This number gets reset after we attempt a restart or change kernel.  
        Common to most of the events.  
        - `kernelInterpreterCount`: `number`  
        Total number of interpreters in the kernel spec list.  
        Common to most of the events.  
        - `kernelLiveCount`: `number`  
        Total number of live kernels in the kernel spec list.  
        Common to most of the events.  
        - `kernelSpecCount`: `number`  
        Total number of kernel specs in the kernel spec list.  
        Common to most of the events.  
        - `pythonEnvironmentCount`?: `number`  
        Total number of python environments.  
        Common to most of the events.  
        - `restartCount`?: `number`  
        This number gets reset after change the kernel.  
        Common to most of the events.  
        - `startFailureCount`?: `number`  
        Number of times starting the kernel failed.  
        Common to most of the events.  
        - `switchKernelCount`?: `number`  
        Number of times the kernel was changed.  
        Common to most of the events.  


* DATASCIENCE.RUN_ALL_CELLS  (Telemetry.RunAllCells)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Command to Run all cells from the active python file in the Interactive Window  
    ```



* DATASCIENCE.RUN_ALL_CELLS_ABOVE  (Telemetry.RunAllCellsAbove)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Command to Run all the above cells in the Interactive Window  
    ```



* DATASCIENCE.RUN_BY_LINE_VARIABLE_HOVER  (Telemetry.RunByLineVariableHover)  
      Owner: [@roblourens](https://github.com/roblourens)  
    ```
    Fired when a user hovers a variable while debugging the IW.  
    ```



* DATASCIENCE.RUN_CELL_AND_ALL_BELOW  (Telemetry.RunCellAndAllBelow)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Command to Run current cell and all below in the Interactive Window  
    ```



* DATASCIENCE.RUN_CHANGE_CELL_TO_CODE  (Telemetry.ChangeCellToCode)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Cell Edit Command in Interactive Window  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DATASCIENCE.RUN_CHANGE_CELL_TO_MARKDOWN  (Telemetry.ChangeCellToMarkdown)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Cell Edit Command in Interactive Window  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DATASCIENCE.RUN_CURRENT_CELL  (Telemetry.RunCurrentCell)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Command to Run the current Cell in the Interactive Window  
    ```



* DATASCIENCE.RUN_CURRENT_CELL_AND_ADD_BELOW  (Telemetry.RunCurrentCellAndAddBelow)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Run the cell and everything below it in the Interactive Window.  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DATASCIENCE.RUN_CURRENT_CELL_AND_ADVANCE  (Telemetry.RunCurrentCellAndAdvance)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Command to Run current cell in the Interactive Window and advance cursor to the next cell  
    ```



* DATASCIENCE.RUN_DELETE_CELLS  (Telemetry.DeleteCells)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Cell Edit Command in Interactive Window  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DATASCIENCE.RUN_EXTEND_SELECTION_BY_CELL_ABOVE  (Telemetry.ExtendSelectionByCellAbove)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Cell Selection Command in Interactive Window  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DATASCIENCE.RUN_EXTEND_SELECTION_BY_CELL_BELOW  (Telemetry.ExtendSelectionByCellBelow)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Cell Selection Command in Interactive Window  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DATASCIENCE.RUN_FILE_INTERACTIVE  (Telemetry.RunFileInteractive)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Command to Run the active file in the Interactive Window  
    ```



* DATASCIENCE.RUN_FROM_LINE  (Telemetry.RunFromLine)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Command to Run the active file contents from the cursor location in the Interactive Window  
    ```



* DATASCIENCE.RUN_INSERT_CELL_ABOVE  (Telemetry.InsertCellAbove)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Cell Edit Command in Interactive Window  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DATASCIENCE.RUN_INSERT_CELL_BELOW  (Telemetry.InsertCellBelow)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Cell Edit Command in Interactive Window  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DATASCIENCE.RUN_INSERT_CELL_BELOW_POSITION  (Telemetry.InsertCellBelowPosition)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Cell Edit Command in Interactive Window  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DATASCIENCE.RUN_MOVE_CELLS_DOWN  (Telemetry.MoveCellsDown)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Cell Edit Command in Interactive Window  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DATASCIENCE.RUN_MOVE_CELLS_UP  (Telemetry.MoveCellsUp)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Cell Edit Command in Interactive Window  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DATASCIENCE.RUN_SELECT_CELL  (Telemetry.SelectCell)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Cell Selection Command in Interactive Window  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DATASCIENCE.RUN_SELECT_CELL_CONTENTS  (Telemetry.SelectCellContents)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Cell Selection Command in Interactive Window  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DATASCIENCE.RUN_SELECTION_OR_LINE  (Telemetry.RunSelectionOrLine)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Command to Run a Selection or Line in the Interactive Window  
    ```



* DATASCIENCE.RUN_TO_LINE  (Telemetry.RunToLine)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Command to Run the active file contents up to the cursor location in the Interactive Window  
    ```



* DATASCIENCE.SELECT_JUPYTER_INTERPRETER_Command  (Telemetry.SelectJupyterInterpreterCommand)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry sent when user selects an interpreter to start jupyter server.  
    ```



* DATASCIENCE.SELECT_JUPYTER_URI  (Telemetry.SelectJupyterURI)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    User has triggered selection of a Jupyter URI for a remote connection.  
    Note: Might not come from a direct user action.  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DATASCIENCE.SELECT_LOCAL_JUPYTER_KERNEL  (Telemetry.SelectLocalJupyterKernel)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Kernel was switched to a local kernel connection.  
    ```

    - Properties:  
        - `actionSource`: `<see below>`  
        Whether this was started by Jupyter extension or a 3rd party.  
        Common to most of the events.  
        Possible values include:  
            - `jupyterExtension`  
            - `3rdPartyExtension`  
        - `capturedEnvVars`?: `boolean`  
        Whether we managed to capture the environment variables or not.  
        In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
        Common to most of the events.  
        - `disableUI`?: `boolean`  
        Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
        If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
        Common to most of the events.  
        - `isUsingActiveInterpreter`?: `boolean`  
        Whether this resource is using the active Python interpreter or not.  
        Common to most of the events.  
        - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
        Whether kernel was started using kernel spec, interpreter, etc.  
        Common to most of the events.  
        - `kernelId`: `string`  
        Hash of the Kernel Connection id.  
        Common to most of the events.  
        - `kernelLanguage`: `string`  
        Language of the kernel connection.  
        Common to most of the events.  
        - `kernelSessionId`: `string`  
        Unique identifier for an instance of a notebook session.  
        If we restart or run this notebook tomorrow, this id will be different.  
        Id could be something as simple as a hash of the current Epoch time.  
        Common to most of the events.  
        - `pythonEnvironmentPackages`?: `string`  
        Comma delimited list of hashed packages & their versions.  
        Common to most of the events.  
        - `pythonEnvironmentPath`?: `string`  
        A key, so that rest of the information is tied to this. (hash)  
        Common to most of the events.  
        - `pythonEnvironmentType`?: `<see below>`  
        Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
        Common to most of the events.  
        Possible values include:  
            - `Unknown`  
            - `Conda`  
            - `VirtualEnv`  
            - `PipEnv`  
            - `Pyenv`  
            - `Venv`  
            - `WindowsStore`  
            - `Poetry`  
            - `VirtualEnvWrapper`  
            - `Global`  
            - `System`  
        - `pythonEnvironmentVersion`?: `string`  
        Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
        Common to most of the events.  
        - `resourceHash`?: `string`  
        Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
        If we run the same notebook tomorrow, the hash will be the same.  
        Used to check whether a particular notebook fails across time or not.  
        This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
        and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
        we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
        and have a better understanding of what is going on, e.g. why something failed.  
        Common to most of the events.  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  
        - `userExecutedCell`?: `boolean`  
        Whether the user executed a cell.  
        Common to most of the events.  
    - Measures:  
        - `interruptCount`?: `number`  
        This number gets reset after we attempt a restart or change kernel.  
        Common to most of the events.  
        - `kernelInterpreterCount`: `number`  
        Total number of interpreters in the kernel spec list.  
        Common to most of the events.  
        - `kernelLiveCount`: `number`  
        Total number of live kernels in the kernel spec list.  
        Common to most of the events.  
        - `kernelSpecCount`: `number`  
        Total number of kernel specs in the kernel spec list.  
        Common to most of the events.  
        - `pythonEnvironmentCount`?: `number`  
        Total number of python environments.  
        Common to most of the events.  
        - `restartCount`?: `number`  
        This number gets reset after change the kernel.  
        Common to most of the events.  
        - `startFailureCount`?: `number`  
        Number of times starting the kernel failed.  
        Common to most of the events.  
        - `switchKernelCount`?: `number`  
        Number of times the kernel was changed.  
        Common to most of the events.  


* DATASCIENCE.SELECT_REMOTE_JUPYTER_KERNEL  (Telemetry.SelectRemoteJupyterKernel)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Kernel was switched to a remote kernel connection.  
    ```

    - Properties:  
        - `actionSource`: `<see below>`  
        Whether this was started by Jupyter extension or a 3rd party.  
        Common to most of the events.  
        Possible values include:  
            - `jupyterExtension`  
            - `3rdPartyExtension`  
        - `capturedEnvVars`?: `boolean`  
        Whether we managed to capture the environment variables or not.  
        In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
        Common to most of the events.  
        - `disableUI`?: `boolean`  
        Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
        If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
        Common to most of the events.  
        - `isUsingActiveInterpreter`?: `boolean`  
        Whether this resource is using the active Python interpreter or not.  
        Common to most of the events.  
        - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
        Whether kernel was started using kernel spec, interpreter, etc.  
        Common to most of the events.  
        - `kernelId`: `string`  
        Hash of the Kernel Connection id.  
        Common to most of the events.  
        - `kernelLanguage`: `string`  
        Language of the kernel connection.  
        Common to most of the events.  
        - `kernelSessionId`: `string`  
        Unique identifier for an instance of a notebook session.  
        If we restart or run this notebook tomorrow, this id will be different.  
        Id could be something as simple as a hash of the current Epoch time.  
        Common to most of the events.  
        - `pythonEnvironmentPackages`?: `string`  
        Comma delimited list of hashed packages & their versions.  
        Common to most of the events.  
        - `pythonEnvironmentPath`?: `string`  
        A key, so that rest of the information is tied to this. (hash)  
        Common to most of the events.  
        - `pythonEnvironmentType`?: `<see below>`  
        Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
        Common to most of the events.  
        Possible values include:  
            - `Unknown`  
            - `Conda`  
            - `VirtualEnv`  
            - `PipEnv`  
            - `Pyenv`  
            - `Venv`  
            - `WindowsStore`  
            - `Poetry`  
            - `VirtualEnvWrapper`  
            - `Global`  
            - `System`  
        - `pythonEnvironmentVersion`?: `string`  
        Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
        Common to most of the events.  
        - `resourceHash`?: `string`  
        Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
        If we run the same notebook tomorrow, the hash will be the same.  
        Used to check whether a particular notebook fails across time or not.  
        This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
        and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
        we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
        and have a better understanding of what is going on, e.g. why something failed.  
        Common to most of the events.  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  
        - `userExecutedCell`?: `boolean`  
        Whether the user executed a cell.  
        Common to most of the events.  
    - Measures:  
        - `interruptCount`?: `number`  
        This number gets reset after we attempt a restart or change kernel.  
        Common to most of the events.  
        - `kernelInterpreterCount`: `number`  
        Total number of interpreters in the kernel spec list.  
        Common to most of the events.  
        - `kernelLiveCount`: `number`  
        Total number of live kernels in the kernel spec list.  
        Common to most of the events.  
        - `kernelSpecCount`: `number`  
        Total number of kernel specs in the kernel spec list.  
        Common to most of the events.  
        - `pythonEnvironmentCount`?: `number`  
        Total number of python environments.  
        Common to most of the events.  
        - `restartCount`?: `number`  
        This number gets reset after change the kernel.  
        Common to most of the events.  
        - `startFailureCount`?: `number`  
        Number of times starting the kernel failed.  
        Common to most of the events.  
        - `switchKernelCount`?: `number`  
        Number of times the kernel was changed.  
        Common to most of the events.  


* DATASCIENCE.SELFCERTSMESSAGECLOSE  (Telemetry.SelfCertsMessageClose)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Sent when users chose not to allow connecting to Jupyter over HTTPS when certificate isn't trusted by a trusted CA.  
    ```



* DATASCIENCE.SELFCERTSMESSAGEENABLED  (Telemetry.SelfCertsMessageEnabled)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Sent when users chose to use self-signed certificates when connecting to Jupyter over https.  
    Basically this means users has chosen to connect to Jupyter over HTTPS when certificate isn't trusted by a trusted CA.  
    ```



* DATASCIENCE.SET_JUPYTER_URI_LOCAL  (Telemetry.SetJupyterURIToLocal)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Jupyter URI was set to local.  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DATASCIENCE.SET_JUPYTER_URI_UI_DISPLAYED  (Telemetry.SetJupyterURIUIDisplayed)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    This telemetry tracks the display of the Picker for Jupyter Remote servers.  
    ```

    - Properties:  
        - `commandSource`: `<see below>`  
        This telemetry tracks the source of this UI.  
        nonUser - Invoked internally by our code.  
        toolbar - Invoked by user from Native or Interactive window toolbar.  
        commandPalette - Invoked from command palette by the user.  
        nativeNotebookStatusBar - Invoked from Native notebook statusbar.  
        nativeNotebookToolbar - Invoked from Native notebook toolbar.  
        Possible values include:  
            - `nonUser`  
            - `toolbar`  
            - `commandPalette`  
            - `nativeNotebookStatusBar`  
            - `nativeNotebookToolbar`  
            - `errorHandler`  
            - `prompt`  


* DATASCIENCE.SET_JUPYTER_URI_USER_SPECIFIED  (Telemetry.SetJupyterURIToUserSpecified)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Jupyter URI was valid and set to a remote setting.  
    ```

    - Properties:  
        - `azure`: `boolean`  
        Was the URI set to an Azure uri.  


* DATASCIENCE.SHOW_DATA_EXPLORER  (Telemetry.ShowDataViewer)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Request was made to show the data viewer with specific data frame info.  
    ```

    - Properties:  
        - `columns`: `<see below>`  
        Count of columns in the target data frame.  
        Possible values include:  
            - `null or <empty>`  
        - `rows`: `<see below>`  
        Count of rows in the target data frame.  
        Possible values include:  
            - `null or <empty>`  


* DATASCIENCE.SHOW_DATA_EXPLORER_ROWS_LOADED  (Telemetry.ShowDataViewerRowsLoaded)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Data viewer loads rows in chunks, this event is sent when the rows have all been loaded  
    ```

    - Properties:  
        - `rowsTimer`: `<see below>`  
        Timer to indicate how long it took to load all the rows  
        Possible values include:  
            - `null or <empty>`  


* DATASCIENCE.START_SHOW_DATA_EXPLORER  (Telemetry.StartShowDataViewer)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    User requested to open the data frame viewer.  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DATASCIENCE.USER_DID_NOT_INSTALL_JUPYTER  (Telemetry.UserDidNotInstallJupyter)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Sent when user click `cancel` button when prompted to install Jupyter.  
    ```



* DATASCIENCE.USER_DID_NOT_INSTALL_PANDAS  (Telemetry.UserDidNotInstallPandas)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Prompted to install Pandas and chose not to install  
    Note: This could be just ignoring the UI so not a user action.  
    ```



* DATASCIENCE.USER_INSTALLED_JUPYTER  (Telemetry.UserInstalledJupyter)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Sent when user installs Jupyter.  
    ```



* DATASCIENCE.USER_INSTALLED_PANDAS  (Telemetry.UserInstalledPandas)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Installed the python Pandas package.  
    ```



* DATAVIEWER.USING_INTERPRETER  (Telemetry.DataViewerUsingInterpreter)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    When the Data Viewer installer is using a Python interpreter to do the install.  
    ```



* DATAVIEWER.USING_KERNEL  (Telemetry.DataViewerUsingKernel)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    When the Data Viewer installer is using the Kernel to do the install.  
    ```



* DS_INTERNAL.ACTIVE_INTERPRETER_LISTING_PERF  (Telemetry.ActiveInterpreterListingPerf)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Total time taken by Python extension to return the active Python environment.  
    ```

    - Properties:  
        - `firstTime`?: `boolean`  
        Whether this is the first time in the session.  
        (fetching kernels first time in the session is slower, later its cached).  
        This is a generic property supported for all telemetry (sent by decorators).  
    - Measures:  
        - `duration`: `number`  
        Total time taken to list interpreters.  


* DS_INTERNAL.CELL_OUTPUT_MIME_TYPE  (Telemetry.CellOutputMimeType)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Mime type of a cell output.  
    Used to detect the popularity of a mime type, that would help determine which mime types are most common.  
    E.g. if we see widget mimetype, then we know how many use ipywidgets and the like and helps us prioritize widget issues,  
    or prioritize rendering of widgets when opening an existing notebook or the like.  
    ```

    - Properties:  
        - `mimeType`: `string`  
        Mimetype of the output.  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  
        - `when`: `<see below>`  
        Whether the package was detected in an existing file (upon open, upon save, upon close) or when it was being used during execution.  
        Possible values include:  
            - `'onExecution'`  
            - `'onOpenCloseOrSave'`  


* DS_INTERNAL.CODE_LENS_ACQ_TIME  (Telemetry.CodeLensAverageAcquisitionTime)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    How long on average we spent parsing code lens. Sent on shutdown.  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DS_INTERNAL.COMMAND_EXECUTED  (Telemetry.CommandExecuted)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    A command that the extension contributes is executed.  
    ```

    - Properties:  
        - `command`: `string`  
        Name of the command executed.  


* DS_INTERNAL.CONNECTFAILEDJUPYTER  (Telemetry.ConnectFailedJupyter)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Sent when we have failed to connect to the local Jupyter server we started.  
    ```

    - Properties:  
        - `failed`: `true`  
        Whether there was a failure.  
        Common to most of the events.  
        - `failureCategory`?: `string`  
        A reason that we generate (e.g. kerneldied, noipykernel, etc), more like a category of the error.  
        Common to most of the events.  
        - `failureSubCategory`?: `string`  
        Further sub classification of the error. E.g. kernel died due to the fact that zmq is not installed properly.  
        Common to most of the events.  
        - `pythonErrorFile`?: `string`  
        Hash of the file name that contains the file in the last frame (from Python stack trace).  
        Common to most of the events.  
        - `pythonErrorFolder`?: `string`  
        Hash of the folder that contains the file in the last frame (from Python stack trace).  
        Common to most of the events.  
        - `pythonErrorPackage`?: `string`  
        Hash of the module that contains the file in the last frame (from Python stack trace).  
        Common to most of the events.  
        - `stackTrace`: `string`  
        Node stacktrace without PII.  
        Common to most of the events.  


* DS_INTERNAL.CONNECTLOCALJUPYTER  (Telemetry.ConnectLocalJupyter)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Sent when we have successfully connected to a local jupyter server.  
    ```



* DS_INTERNAL.CONNECTREMOTEEXPIREDCERTFAILEDJUPYTER  (Telemetry.ConnectRemoteExpiredCertFailedJupyter)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Jupyter server's certificate has expired.  
    ```



* DS_INTERNAL.CONNECTREMOTEFAILEDJUPYTER  (Telemetry.ConnectRemoteFailedJupyter)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Sent when we fail to connect to a remote jupyter server.  
    ```

    - Properties:  
        - `failed`: `true`  
        Whether there was a failure.  
        Common to most of the events.  
        - `failureCategory`?: `string`  
        A reason that we generate (e.g. kerneldied, noipykernel, etc), more like a category of the error.  
        Common to most of the events.  
        - `failureSubCategory`?: `string`  
        Further sub classification of the error. E.g. kernel died due to the fact that zmq is not installed properly.  
        Common to most of the events.  
        - `pythonErrorFile`?: `string`  
        Hash of the file name that contains the file in the last frame (from Python stack trace).  
        Common to most of the events.  
        - `pythonErrorFolder`?: `string`  
        Hash of the folder that contains the file in the last frame (from Python stack trace).  
        Common to most of the events.  
        - `pythonErrorPackage`?: `string`  
        Hash of the module that contains the file in the last frame (from Python stack trace).  
        Common to most of the events.  
        - `stackTrace`: `string`  
        Node stacktrace without PII.  
        Common to most of the events.  


* DS_INTERNAL.CONNECTREMOTEJUPYTER  (Telemetry.ConnectRemoteJupyter)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Sent when we have successfully connected to a remote jupyter server.  
    ```



* DS_INTERNAL.CONNECTREMOTEJUPYTER_VIA_LOCALHOST  (Telemetry.ConnectRemoteJupyterViaLocalHost)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Connecting to an existing Jupyter server, but connecting to localhost.  
    ```



* DS_INTERNAL.CONNECTREMOTESELFCERTFAILEDJUPYTER  (Telemetry.ConnectRemoteSelfCertFailedJupyter)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Jupyter server's certificate is not from a trusted authority.  
    ```



* DS_INTERNAL.EXECUTE_CELL_PERCEIVED_COLD  (Telemetry.ExecuteCellPerceivedCold)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry sent to capture first time execution of a cell.  
    If `notebook = true`, this its telemetry for Jupyter notebooks, else applies to IW.  
    ```

    - Properties:  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  
    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DS_INTERNAL.EXECUTE_CELL_PERCEIVED_WARM  (Telemetry.ExecuteCellPerceivedWarm)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry sent to capture subsequent execution of a cell.  
    If `notebook = true`, this its telemetry for native editor/notebooks.  
    (Note: The property `notebook` only gets sent correctly in Jupyter version 2022.8.0 or later)  
    ```

    - Properties:  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  
    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DS_INTERNAL.FAILED_TO_UPDATE_JUPYTER_KERNEL_SPEC  (Telemetry.FailedToUpdateKernelSpec)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Sent when we fail to update the kernel spec json file.  
    ```

    - Properties:  
        - `failed`: `true`  
        Whether there was a failure.  
        Common to most of the events.  
        - `failureCategory`?: `string`  
        A reason that we generate (e.g. kerneldied, noipykernel, etc), more like a category of the error.  
        Common to most of the events.  
        - `failureSubCategory`?: `string`  
        Further sub classification of the error. E.g. kernel died due to the fact that zmq is not installed properly.  
        Common to most of the events.  
        - `pythonErrorFile`?: `string`  
        Hash of the file name that contains the file in the last frame (from Python stack trace).  
        Common to most of the events.  
        - `pythonErrorFolder`?: `string`  
        Hash of the folder that contains the file in the last frame (from Python stack trace).  
        Common to most of the events.  
        - `pythonErrorPackage`?: `string`  
        Hash of the module that contains the file in the last frame (from Python stack trace).  
        Common to most of the events.  
        - `stackTrace`: `string`  
        Node stacktrace without PII.  
        Common to most of the events.  


* DS_INTERNAL.GET_ACTIVATED_ENV_VARIABLES  (Telemetry.GetActivatedEnvironmentVariables)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Used to capture time taken to get environment variables for a python environment.  
    Also lets us know whether it worked or not.  
    ```

    - Properties:  
        - `envType`?: `<see below>`  
        Type of the Python environment.  
        Possible values include:  
            - `Unknown`  
            - `Conda`  
            - `VirtualEnv`  
            - `PipEnv`  
            - `Pyenv`  
            - `Venv`  
            - `WindowsStore`  
            - `Poetry`  
            - `VirtualEnvWrapper`  
            - `Global`  
            - `System`  
        - `failed`: `boolean`  
        Whether the env variables were fetched successfully or not.  
        - `reason`?: `<see below>`  
        Reason for not being able to get the env variables.  
        Possible values include:  
            - `'noActivationCommands'`  
            - `'unknownOS'`  
            - `'emptyVariables'`  
            - `'unhandledError'`  
            - `'emptyFromCondaRun'`  
            - `'emptyFromPython'`  
            - `'condaActivationFailed'`  
            - `'failedToGetActivatedEnvVariablesFromPython'`  
            - `'failedToGetCustomEnvVariables'`  
        - `source`: `<see below>`  
        Source where the env variables were fetched from.  
        If `python`, then env variables were fetched from Python extension.  
        If `jupyter`, then env variables were fetched from Jupyter extension.  
        Possible values include:  
            - `'python'`  
            - `'jupyter'`  
    - Measures:  
        - `duration`: `number`  
        Time taken.  


* DS_INTERNAL.GET_PASSWORD_FAILURE  (Telemetry.GetPasswordFailure)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Sent to indicate we've failed to connect to a Remote Jupyter Server successfully after requesting a password.  
    ```



* DS_INTERNAL.GET_PASSWORD_SUCCESS  (Telemetry.GetPasswordSuccess)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Sent to indicate we've connected to a Remote Jupyter Server successfully after requesting a password.  
    ```



* DS_INTERNAL.INTERACTIVE_FILE_TOOLTIPS_PERF  (Telemetry.InteractiveFileTooltipsPerf)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    How long it took to return our hover tooltips for a .py file.  
    ```

    - Properties:  
        - `isResultNull`: `boolean`  
        Result is null if user signalled cancellation or if we timed out  
    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DS_INTERNAL.INTERPRETER_LISTING_PERF  (Telemetry.InterpreterListingPerf)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Time taken to list the Python interpreters.  
    ```

    - Properties:  
        - `firstTime`?: `boolean`  
        Whether this is the first time in the session.  
        (fetching kernels first time in the session is slower, later its cached).  
        This is a generic property supported for all telemetry (sent by decorators).  
    - Measures:  
        - `duration`: `number`  
        Total time taken to list interpreters.  


* DS_INTERNAL.IPYWIDGET_DISCOVER_WIDGETS_NB_EXTENSIONS  (Telemetry.DiscoverIPyWidgetNamesPerf)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Total time taken to discover all IPyWidgets.  
    This is how long it takes to discover all widgets on disc (from python environment).  
    ```

    - Properties:  
        - `type`: `<see below>`  
        Whether we're looking for widgets on local Jupyter environment (local connections) or remote.  
        Possible values include:  
            - `'local'`  
            - `'remote'`  


* DS_INTERNAL.IPYWIDGET_DISCOVERY_ERRORED  (Telemetry.HashedIPyWidgetScriptDiscoveryError)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Something went wrong in looking for a widget.  
    ```



* DS_INTERNAL.IPYWIDGET_EXTENSIONJS_INFO  (Telemetry.IPyWidgetExtensionJsInfo)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry event sent once we've successfully or unsuccessfully parsed the extension.js file in the widget folder.  
    E.g. if we have a widget named ipyvolume, we attempt to parse the nbextensions/ipyvolume/extension.js file to get some info out of it.  
    ```

    - `Successfully parsed extension.js`:  
        - Properties:  
            - `patternUsedToRegisterRequireConfig`: `string`  
            Pattern (code style) used to register require.config enties.  
            - `widgetFolderNameHash`: `string`  
            Hash of the widget folder name.  
        - Measures:  
            - `requireEntryPointCount`: `number`  
            Total number of entries in the require config.  
    - `Failed to parse extension.js.`:  
        - Properties:  
            - `failed`: `true`  
            Failed to parse extension.js.  
            - `failure`: `<see below>`  
            Reason for the failure.  
            Possible values include:  
                - `'couldNotLocateRequireConfigStart'`  
                - `'couldNotLocateRequireConfigEnd'`  
                - `'noRequireConfigEntries'`  
            - `patternUsedToRegisterRequireConfig`: `<see below>`  
            Pattern (code style) used to register require.config entries.  
            Pattern (code style) used to register require.config enties.  
            Possible values include:  
                - `null or <empty>`  
            - `widgetFolderNameHash`: `string`  
            Hash of the widget folder name.  


* DS_INTERNAL.IPYWIDGET_LOAD_FAILURE  (Telemetry.IPyWidgetLoadFailure)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry event sent when an ipywidget module fails to load. Module name is hashed.  
    ```

    - Properties:  
        - `isOnline`: `boolean`  
        Whether we've detected a connection to the internet or not (to access the CDN).  
        - `moduleHash`: `string`  
        Hash of the widget module.  
        - `moduleVersion`: `string`  
        Version of the module.  
        - `timedout`: `boolean`  
        Whether we timedout getting the source of the script (fetching script source in extension code).  


* DS_INTERNAL.IPYWIDGET_LOAD_SUCCESS  (Telemetry.IPyWidgetLoadSuccess)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry event sent when an ipywidget module loads. Module name is hashed.  
    ```

    - Properties:  
        - `moduleHash`: `string`  
        Hash of the module name.  
        - `moduleVersion`: `string`  
        Version of the module.  


* DS_INTERNAL.IPYWIDGET_OVERHEAD  (Telemetry.IPyWidgetOverhead)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry event sent to indicate the overhead of syncing the kernel with the UI.  
    ```

    - Measures:  
        - `averageWaitTime`: `number`  
        Average wait timne.  
        - `numberOfMessagesWaitedOn`: `number`  
        Number of messages  
        - `numberOfRegisteredHooks`: `number`  
        Number of registered hook.  
        - `totalOverheadInMs`: `number`  
        Total time in ms  


* DS_INTERNAL.IPYWIDGET_PROMPT_TO_USE_CDN  (Telemetry.IPyWidgetPromptToUseCDN)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry sent when we prompt user to use a CDN for IPyWidget scripts.  
    This is always sent when we display a prompt.  
    ```



* DS_INTERNAL.IPYWIDGET_PROMPT_TO_USE_CDN_SELECTION  (Telemetry.IPyWidgetPromptToUseCDNSelection)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry sent when user does something with the prompt displayed to user about using CDN for IPyWidget scripts.  
    ```

    - Properties:  
        - `selection`: `<see below>`  
        The section made by the user.  
        Possible values include:  
            - `'ok'`  
            - `'cancel'`  
            - `'dismissed'`  
            - `'doNotShowAgain'`  


* DS_INTERNAL.IPYWIDGET_RENDER_FAILURE  (Telemetry.IPyWidgetRenderFailure)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry event sent when the widget render function fails (note, this may not be sufficient to capture all failures).  
    ```



* DS_INTERNAL.IPYWIDGET_TIME_TO_COPY_NBEXTENSIONS_DIR  (Telemetry.IPyWidgetNbExtensionCopyTime)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Total time take to copy the nb extensions folder.  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DS_INTERNAL.IPYWIDGET_UNHANDLED_MESSAGE  (Telemetry.IPyWidgetUnhandledMessage)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry event sent when the widget tries to send a kernel message but nothing was listening  
    ```

    - Properties:  
        - `msg_type`: `string`  
        Type of the protocol message sent by Jupyter kernel.  


* DS_INTERNAL.IPYWIDGET_USED_BY_USER  (Telemetry.HashedIPyWidgetNameUsed)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry event sent with name of a Widget that is used.  
    Helps determine which widgets are used the most, and which are not.  
    Useful in prioritizing which widgets to work on if things fail to work.  
    ```

    - Properties:  
        - `cdnSearched`: `boolean`  
        Whether we searched CDN or not.  
        - `hashedName`: `string`  
        Hash of the widget module.  
        If the widget is found on a CDN, then the unhashed name is sent in `moduleName`.  
        - `moduleName`?: `string`  
        Name of the widget module, sent only for cases where `source` is `cdn`.  
        As that is the onl time we can safely send the name (if its on public CDN then its public information).  
        - `source`?: `<see below>`  
        Where did we find the hashed name (CDN or user environment or remote jupyter).  
        Possible values include:  
            - `'cdn'`  
            - `'local'`  
            - `'remote'`  


* DS_INTERNAL.IPYWIDGET_WIDGET_VERSION_NOT_SUPPORTED_LOAD_FAILURE  (Telemetry.IPyWidgetWidgetVersionNotSupportedLoadFailure)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry event sent when an ipywidget version that is not supported is used & we have trapped this and warned the user abou it.  
    ```

    - Properties:  
        - `moduleHash`: `string`  
        Hash of the widget module.  
        - `moduleVersion`: `string`  
        Version of the module.  


* DS_INTERNAL.JUPYTER_CREATING_NOTEBOOK  (Telemetry.JupyterCreatingNotebook)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Sent to measure the time taken to start a Jupyter Notebook.  
    ```

    - `When things fail`:  
        - Properties:  
            - `actionSource`: `<see below>`  
            Whether this was started by Jupyter extension or a 3rd party.  
            Common to most of the events.  
            Possible values include:  
                - `jupyterExtension`  
                - `3rdPartyExtension`  
            - `capturedEnvVars`?: `boolean`  
            Whether we managed to capture the environment variables or not.  
            In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
            Common to most of the events.  
            - `disableUI`?: `boolean`  
            Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
            If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
            Common to most of the events.  
            - `failed`: `true`  
            Whether there was a failure.  
            Common to most of the events.  
            - `failureCategory`?: `string`  
            A reason that we generate (e.g. kerneldied, noipykernel, etc), more like a category of the error.  
            Common to most of the events.  
            - `failureSubCategory`?: `string`  
            Further sub classification of the error. E.g. kernel died due to the fact that zmq is not installed properly.  
            Common to most of the events.  
            - `isUsingActiveInterpreter`?: `boolean`  
            Whether this resource is using the active Python interpreter or not.  
            Common to most of the events.  
            - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
            Whether kernel was started using kernel spec, interpreter, etc.  
            Common to most of the events.  
            - `kernelId`: `string`  
            Hash of the Kernel Connection id.  
            Common to most of the events.  
            - `kernelLanguage`: `string`  
            Language of the kernel connection.  
            Common to most of the events.  
            - `kernelSessionId`: `string`  
            Unique identifier for an instance of a notebook session.  
            If we restart or run this notebook tomorrow, this id will be different.  
            Id could be something as simple as a hash of the current Epoch time.  
            Common to most of the events.  
            - `pythonEnvironmentPackages`?: `string`  
            Comma delimited list of hashed packages & their versions.  
            Common to most of the events.  
            - `pythonEnvironmentPath`?: `string`  
            A key, so that rest of the information is tied to this. (hash)  
            Common to most of the events.  
            - `pythonEnvironmentType`?: `<see below>`  
            Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
            Common to most of the events.  
            Possible values include:  
                - `Unknown`  
                - `Conda`  
                - `VirtualEnv`  
                - `PipEnv`  
                - `Pyenv`  
                - `Venv`  
                - `WindowsStore`  
                - `Poetry`  
                - `VirtualEnvWrapper`  
                - `Global`  
                - `System`  
            - `pythonEnvironmentVersion`?: `string`  
            Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
            Common to most of the events.  
            - `pythonErrorFile`?: `string`  
            Hash of the file name that contains the file in the last frame (from Python stack trace).  
            Common to most of the events.  
            - `pythonErrorFolder`?: `string`  
            Hash of the folder that contains the file in the last frame (from Python stack trace).  
            Common to most of the events.  
            - `pythonErrorPackage`?: `string`  
            Hash of the module that contains the file in the last frame (from Python stack trace).  
            Common to most of the events.  
            - `resourceHash`?: `string`  
            Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
            If we run the same notebook tomorrow, the hash will be the same.  
            Used to check whether a particular notebook fails across time or not.  
            This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
            and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
            we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
            and have a better understanding of what is going on, e.g. why something failed.  
            Common to most of the events.  
            - `resourceType`?: `<see below>`  
            Used to determine whether this event is related to a Notebooks or Interactive window.  
            Common to most of the events.  
            Possible values include:  
                - `'notebook'`  
                - `'interactive'`  
            - `stackTrace`: `string`  
            Node stacktrace without PII.  
            Common to most of the events.  
            - `userExecutedCell`?: `boolean`  
            Whether the user executed a cell.  
            Common to most of the events.  
        - Measures:  
            - `duration`: `number`  
            Duration of a measure in milliseconds.  
            Common measurement used across a number of events.  
            - `interruptCount`?: `number`  
            This number gets reset after we attempt a restart or change kernel.  
            Common to most of the events.  
            - `kernelInterpreterCount`: `number`  
            Total number of interpreters in the kernel spec list.  
            Common to most of the events.  
            - `kernelLiveCount`: `number`  
            Total number of live kernels in the kernel spec list.  
            Common to most of the events.  
            - `kernelSpecCount`: `number`  
            Total number of kernel specs in the kernel spec list.  
            Common to most of the events.  
            - `pythonEnvironmentCount`?: `number`  
            Total number of python environments.  
            Common to most of the events.  
            - `restartCount`?: `number`  
            This number gets reset after change the kernel.  
            Common to most of the events.  
            - `startFailureCount`?: `number`  
            Number of times starting the kernel failed.  
            Common to most of the events.  
            - `switchKernelCount`?: `number`  
            Number of times the kernel was changed.  
            Common to most of the events.  
    - `When successfully created`:  
        - Properties:  
            - `actionSource`: `<see below>`  
            Whether this was started by Jupyter extension or a 3rd party.  
            Common to most of the events.  
            Possible values include:  
                - `jupyterExtension`  
                - `3rdPartyExtension`  
            - `capturedEnvVars`?: `boolean`  
            Whether we managed to capture the environment variables or not.  
            In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
            Common to most of the events.  
            - `disableUI`?: `boolean`  
            Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
            If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
            Common to most of the events.  
            - `isUsingActiveInterpreter`?: `boolean`  
            Whether this resource is using the active Python interpreter or not.  
            Common to most of the events.  
            - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
            Whether kernel was started using kernel spec, interpreter, etc.  
            Common to most of the events.  
            - `kernelId`: `string`  
            Hash of the Kernel Connection id.  
            Common to most of the events.  
            - `kernelLanguage`: `string`  
            Language of the kernel connection.  
            Common to most of the events.  
            - `kernelSessionId`: `string`  
            Unique identifier for an instance of a notebook session.  
            If we restart or run this notebook tomorrow, this id will be different.  
            Id could be something as simple as a hash of the current Epoch time.  
            Common to most of the events.  
            - `pythonEnvironmentPackages`?: `string`  
            Comma delimited list of hashed packages & their versions.  
            Common to most of the events.  
            - `pythonEnvironmentPath`?: `string`  
            A key, so that rest of the information is tied to this. (hash)  
            Common to most of the events.  
            - `pythonEnvironmentType`?: `<see below>`  
            Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
            Common to most of the events.  
            Possible values include:  
                - `Unknown`  
                - `Conda`  
                - `VirtualEnv`  
                - `PipEnv`  
                - `Pyenv`  
                - `Venv`  
                - `WindowsStore`  
                - `Poetry`  
                - `VirtualEnvWrapper`  
                - `Global`  
                - `System`  
            - `pythonEnvironmentVersion`?: `string`  
            Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
            Common to most of the events.  
            - `resourceHash`?: `string`  
            Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
            If we run the same notebook tomorrow, the hash will be the same.  
            Used to check whether a particular notebook fails across time or not.  
            This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
            and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
            we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
            and have a better understanding of what is going on, e.g. why something failed.  
            Common to most of the events.  
            - `resourceType`?: `<see below>`  
            Used to determine whether this event is related to a Notebooks or Interactive window.  
            Common to most of the events.  
            Possible values include:  
                - `'notebook'`  
                - `'interactive'`  
            - `userExecutedCell`?: `boolean`  
            Whether the user executed a cell.  
            Common to most of the events.  
        - Measures:  
            - `duration`: `number`  
            Duration of a measure in milliseconds.  
            Common measurement used across a number of events.  
            - `interruptCount`?: `number`  
            This number gets reset after we attempt a restart or change kernel.  
            Common to most of the events.  
            - `kernelInterpreterCount`: `number`  
            Total number of interpreters in the kernel spec list.  
            Common to most of the events.  
            - `kernelLiveCount`: `number`  
            Total number of live kernels in the kernel spec list.  
            Common to most of the events.  
            - `kernelSpecCount`: `number`  
            Total number of kernel specs in the kernel spec list.  
            Common to most of the events.  
            - `pythonEnvironmentCount`?: `number`  
            Total number of python environments.  
            Common to most of the events.  
            - `restartCount`?: `number`  
            This number gets reset after change the kernel.  
            Common to most of the events.  
            - `startFailureCount`?: `number`  
            Number of times starting the kernel failed.  
            Common to most of the events.  
            - `switchKernelCount`?: `number`  
            Number of times the kernel was changed.  
            Common to most of the events.  


* DS_INTERNAL.JUPYTER_CUSTOM_COMMAND_LINE  (Telemetry.JupyterCommandLineNonDefault)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry event sent to when user customizes the jupyter command line  
    ```



* DS_INTERNAL.JUPYTER_INTALLED_BUT_NO_KERNELSPEC_MODULE  (Telemetry.JupyterInstalledButNotKernelSpecModule)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry event sent when jupyter has been found in interpreter but we cannot find kernelspec.  
    ```



* DS_INTERNAL.JUPYTER_REGISTER_INTERPRETER_AS_KERNEL  (Telemetry.RegisterInterpreterAsKernel)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Sent to measure the time taken to register an interpreter as a Jupyter kernel.  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DS_INTERNAL.JUPYTERSTARTUPCOST  (Telemetry.StartJupyter)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Time taken to start the Jupyter server.  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DS_INTERNAL.KERNEL_COUNT  (Telemetry.KernelCount)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry sent with the total number of different types of kernels in the kernel picker.  
    ```

    - Properties:  
        - `actionSource`: `<see below>`  
        Whether this was started by Jupyter extension or a 3rd party.  
        Common to most of the events.  
        Possible values include:  
            - `jupyterExtension`  
            - `3rdPartyExtension`  
        - `capturedEnvVars`?: `boolean`  
        Whether we managed to capture the environment variables or not.  
        In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
        Common to most of the events.  
        - `disableUI`?: `boolean`  
        Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
        If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
        Common to most of the events.  
        - `isUsingActiveInterpreter`?: `boolean`  
        Whether this resource is using the active Python interpreter or not.  
        Common to most of the events.  
        - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
        Whether kernel was started using kernel spec, interpreter, etc.  
        Common to most of the events.  
        - `kernelId`: `string`  
        Hash of the Kernel Connection id.  
        Common to most of the events.  
        - `kernelLanguage`: `string`  
        Language of the kernel connection.  
        Common to most of the events.  
        - `kernelSessionId`: `string`  
        Unique identifier for an instance of a notebook session.  
        If we restart or run this notebook tomorrow, this id will be different.  
        Id could be something as simple as a hash of the current Epoch time.  
        Common to most of the events.  
        - `pythonEnvironmentPackages`?: `string`  
        Comma delimited list of hashed packages & their versions.  
        Common to most of the events.  
        - `pythonEnvironmentPath`?: `string`  
        A key, so that rest of the information is tied to this. (hash)  
        Common to most of the events.  
        - `pythonEnvironmentType`?: `<see below>`  
        Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
        Common to most of the events.  
        Possible values include:  
            - `Unknown`  
            - `Conda`  
            - `VirtualEnv`  
            - `PipEnv`  
            - `Pyenv`  
            - `Venv`  
            - `WindowsStore`  
            - `Poetry`  
            - `VirtualEnvWrapper`  
            - `Global`  
            - `System`  
        - `pythonEnvironmentVersion`?: `string`  
        Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
        Common to most of the events.  
        - `resourceHash`?: `string`  
        Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
        If we run the same notebook tomorrow, the hash will be the same.  
        Used to check whether a particular notebook fails across time or not.  
        This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
        and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
        we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
        and have a better understanding of what is going on, e.g. why something failed.  
        Common to most of the events.  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  
        - `userExecutedCell`?: `boolean`  
        Whether the user executed a cell.  
        Common to most of the events.  
    - Measures:  
        - `condaEnvsSharingSameInterpreter`: `number`  
        Total number of conda environments that share the same interpreter  
        This happens when we create conda envs without the `python` argument.  
        Such conda envs don't work today in the extension.  
        Hence users with such environments could hvae issues with starting kernels or packages not getting loaded correctly or at all.  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  
        - `interruptCount`?: `number`  
        This number gets reset after we attempt a restart or change kernel.  
        Common to most of the events.  
        - `kernelInterpreterCount`: `number`  
        Total number of interpreters in the kernel list.  
        - `kernelInterpreterCount`: `number`  
        Total number of interpreters in the kernel spec list.  
        Common to most of the events.  
        Total number of interpreters in the kernel list.  
        - `kernelLiveCount`: `number`  
        Total number of live kernels in the kernel list.  
        - `kernelLiveCount`: `number`  
        Total number of live kernels in the kernel spec list.  
        Common to most of the events.  
        Total number of live kernels in the kernel list.  
        - `kernelSpecCount`: `number`  
        Total number of kernel specs in the kernel list.  
        - `kernelSpecCount`: `number`  
        Total number of kernel specs in the kernel spec list.  
        Common to most of the events.  
        Total number of kernel specs in the kernel list.  
        - `localKernelSpecCount`: `number`  
        Total number of local kernel specs in the list.  
        - `pythonEnvironmentCount`?: `number`  
        Total number of python environments.  
        Common to most of the events.  
        - `remoteKernelSpecCount`: `number`  
        Total number of remote kernel specs in the list.  
        - `restartCount`?: `number`  
        This number gets reset after change the kernel.  
        Common to most of the events.  
        - `startFailureCount`?: `number`  
        Number of times starting the kernel failed.  
        Common to most of the events.  
        - `switchKernelCount`?: `number`  
        Number of times the kernel was changed.  
        Common to most of the events.  


* DS_INTERNAL.KERNEL_LAUNCHER_PERF  (Telemetry.KernelLauncherPerf)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Total time taken to Launch a raw kernel.  
    ```

    -  Group 1:  
        - Properties:  
            - `actionSource`: `<see below>`  
            Whether this was started by Jupyter extension or a 3rd party.  
            Common to most of the events.  
            Possible values include:  
                - `jupyterExtension`  
                - `3rdPartyExtension`  
            - `capturedEnvVars`?: `boolean`  
            Whether we managed to capture the environment variables or not.  
            In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
            Common to most of the events.  
            - `disableUI`?: `boolean`  
            Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
            If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
            Common to most of the events.  
            - `isUsingActiveInterpreter`?: `boolean`  
            Whether this resource is using the active Python interpreter or not.  
            Common to most of the events.  
            - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
            Whether kernel was started using kernel spec, interpreter, etc.  
            Common to most of the events.  
            - `kernelId`: `string`  
            Hash of the Kernel Connection id.  
            Common to most of the events.  
            - `kernelLanguage`: `string`  
            Language of the kernel connection.  
            Common to most of the events.  
            - `kernelSessionId`: `string`  
            Unique identifier for an instance of a notebook session.  
            If we restart or run this notebook tomorrow, this id will be different.  
            Id could be something as simple as a hash of the current Epoch time.  
            Common to most of the events.  
            - `pythonEnvironmentPackages`?: `string`  
            Comma delimited list of hashed packages & their versions.  
            Common to most of the events.  
            - `pythonEnvironmentPath`?: `string`  
            A key, so that rest of the information is tied to this. (hash)  
            Common to most of the events.  
            - `pythonEnvironmentType`?: `<see below>`  
            Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
            Common to most of the events.  
            Possible values include:  
                - `Unknown`  
                - `Conda`  
                - `VirtualEnv`  
                - `PipEnv`  
                - `Pyenv`  
                - `Venv`  
                - `WindowsStore`  
                - `Poetry`  
                - `VirtualEnvWrapper`  
                - `Global`  
                - `System`  
            - `pythonEnvironmentVersion`?: `string`  
            Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
            Common to most of the events.  
            - `resourceHash`?: `string`  
            Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
            If we run the same notebook tomorrow, the hash will be the same.  
            Used to check whether a particular notebook fails across time or not.  
            This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
            and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
            we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
            and have a better understanding of what is going on, e.g. why something failed.  
            Common to most of the events.  
            - `resourceType`?: `<see below>`  
            Used to determine whether this event is related to a Notebooks or Interactive window.  
            Common to most of the events.  
            Possible values include:  
                - `'notebook'`  
                - `'interactive'`  
            - `userExecutedCell`?: `boolean`  
            Whether the user executed a cell.  
            Common to most of the events.  
        - Measures:  
            - `duration`: `number`  
            Duration of a measure in milliseconds.  
            Common measurement used across a number of events.  
            - `interruptCount`?: `number`  
            This number gets reset after we attempt a restart or change kernel.  
            Common to most of the events.  
            - `kernelInterpreterCount`: `number`  
            Total number of interpreters in the kernel spec list.  
            Common to most of the events.  
            - `kernelLiveCount`: `number`  
            Total number of live kernels in the kernel spec list.  
            Common to most of the events.  
            - `kernelSpecCount`: `number`  
            Total number of kernel specs in the kernel spec list.  
            Common to most of the events.  
            - `pythonEnvironmentCount`?: `number`  
            Total number of python environments.  
            Common to most of the events.  
            - `restartCount`?: `number`  
            This number gets reset after change the kernel.  
            Common to most of the events.  
            - `startFailureCount`?: `number`  
            Number of times starting the kernel failed.  
            Common to most of the events.  
            - `switchKernelCount`?: `number`  
            Number of times the kernel was changed.  
            Common to most of the events.  
    -  Group 2:  
        - Properties:  
            - `failed`: `true`  
            Whether there was a failure.  
            Common to most of the events.  
            - `failureCategory`?: `string`  
            A reason that we generate (e.g. kerneldied, noipykernel, etc), more like a category of the error.  
            Common to most of the events.  
            - `failureSubCategory`?: `string`  
            Further sub classification of the error. E.g. kernel died due to the fact that zmq is not installed properly.  
            Common to most of the events.  
            - `pythonErrorFile`?: `string`  
            Hash of the file name that contains the file in the last frame (from Python stack trace).  
            Common to most of the events.  
            - `pythonErrorFolder`?: `string`  
            Hash of the folder that contains the file in the last frame (from Python stack trace).  
            Common to most of the events.  
            - `pythonErrorPackage`?: `string`  
            Hash of the module that contains the file in the last frame (from Python stack trace).  
            Common to most of the events.  
            - `stackTrace`: `string`  
            Node stacktrace without PII.  
            Common to most of the events.  


* DS_INTERNAL.KERNEL_LISTING_PERF  (Telemetry.KernelListingPerf)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Time taken to list the kernels.  
    ```

    - Properties:  
        - `kind`: `<see below>`  
        Whether this telemetry is for listing of all kernels or just python or just non-python.  
        (fetching kernels first time in the session is slower, later its cached).  
        Possible values include:  
            - `'remote'`  
            - `'local'`  
            - `'localKernelSpec'`  
            - `'localPython'`  
    - Measures:  
        - `duration`: `number`  
        Total time taken to list kernels.  


* DS_INTERNAL.KERNEL_SPEC_NOT_FOUND  (Telemetry.KernelSpecNotFound)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry event sent to indicate 'jupyter kernelspec' is not possible.  
    ```



* DS_INTERNAL.NATIVE_VARIABLE_VIEW_LOADED  (Telemetry.NativeVariableViewLoaded)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    The Variable View webview was loaded.  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DS_INTERNAL.NATIVE_VARIABLE_VIEW_MADE_VISIBLE  (Telemetry.NativeVariableViewMadeVisible)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    The Variable View webview was made visible.  
    ```



* DS_INTERNAL.NATIVE.NOTEBOOK_OPEN_COUNT  (Telemetry.NotebookOpenCount)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Total number of Jupyter notebooks or IW opened. Telemetry Sent when VS Code is closed.  
    ```

    - Measures:  
        - `count`: `number`  
        Total number of notebooks opened in a session.  
        Not unique.  
        If usre opens & closes a notebook, that counts as 2.  


* DS_INTERNAL.NATIVE.NOTEBOOK_RUN_COUNT  (Telemetry.NotebookRunCount)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Total number of cells executed. Telemetry Sent when VS Code is closed.  
    ```

    - Measures:  
        - `count`: `number`  
        Number of cells executed.  
        If a cell is executed 10 times, thats counted as 10.  


* DS_INTERNAL.NEW_FILE_USED_IN_INTERACTIVE  (Telemetry.NewFileForInteractiveWindow)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Telemetry event sent when a user runs the interactive window with a new file  
    ```



* DS_INTERNAL.NUMBER_OF_REMOTE_KERNEL_IDS_SAVED  (Telemetry.NumberOfSavedRemoteKernelIds)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    When users connect to a remote kernel, we store the kernel id so we can re-connect to that  
    when user opens the same notebook. We only store the last 100.  
    Count is the number of kernels saved in the list.  
    ```

    - Measures:  
        - `count`: `number`  
        Count is the number of kernels saved in the list.  


* DS_INTERNAL.PERCEIVED_JUPYTER_STARTUP_NOTEBOOK  (Telemetry.PerceivedJupyterStartupNotebook)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Time take for jupyter server to start and be ready to run first user cell.  
    (Note: The property `notebook` only gets sent correctly in Jupyter version 2022.8.0 or later)  
    ```

    - Properties:  
        - `actionSource`: `<see below>`  
        Whether this was started by Jupyter extension or a 3rd party.  
        Common to most of the events.  
        Possible values include:  
            - `jupyterExtension`  
            - `3rdPartyExtension`  
        - `capturedEnvVars`?: `boolean`  
        Whether we managed to capture the environment variables or not.  
        In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
        Common to most of the events.  
        - `disableUI`?: `boolean`  
        Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
        If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
        Common to most of the events.  
        - `isUsingActiveInterpreter`?: `boolean`  
        Whether this resource is using the active Python interpreter or not.  
        Common to most of the events.  
        - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
        Whether kernel was started using kernel spec, interpreter, etc.  
        Common to most of the events.  
        - `kernelId`: `string`  
        Hash of the Kernel Connection id.  
        Common to most of the events.  
        - `kernelLanguage`: `string`  
        Language of the kernel connection.  
        Common to most of the events.  
        - `kernelSessionId`: `string`  
        Unique identifier for an instance of a notebook session.  
        If we restart or run this notebook tomorrow, this id will be different.  
        Id could be something as simple as a hash of the current Epoch time.  
        Common to most of the events.  
        - `pythonEnvironmentPackages`?: `string`  
        Comma delimited list of hashed packages & their versions.  
        Common to most of the events.  
        - `pythonEnvironmentPath`?: `string`  
        A key, so that rest of the information is tied to this. (hash)  
        Common to most of the events.  
        - `pythonEnvironmentType`?: `<see below>`  
        Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
        Common to most of the events.  
        Possible values include:  
            - `Unknown`  
            - `Conda`  
            - `VirtualEnv`  
            - `PipEnv`  
            - `Pyenv`  
            - `Venv`  
            - `WindowsStore`  
            - `Poetry`  
            - `VirtualEnvWrapper`  
            - `Global`  
            - `System`  
        - `pythonEnvironmentVersion`?: `string`  
        Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
        Common to most of the events.  
        - `resourceHash`?: `string`  
        Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
        If we run the same notebook tomorrow, the hash will be the same.  
        Used to check whether a particular notebook fails across time or not.  
        This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
        and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
        we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
        and have a better understanding of what is going on, e.g. why something failed.  
        Common to most of the events.  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  
        - `userExecutedCell`?: `boolean`  
        Whether the user executed a cell.  
        Common to most of the events.  
    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  
        - `interruptCount`?: `number`  
        This number gets reset after we attempt a restart or change kernel.  
        Common to most of the events.  
        - `kernelInterpreterCount`: `number`  
        Total number of interpreters in the kernel spec list.  
        Common to most of the events.  
        - `kernelLiveCount`: `number`  
        Total number of live kernels in the kernel spec list.  
        Common to most of the events.  
        - `kernelSpecCount`: `number`  
        Total number of kernel specs in the kernel spec list.  
        Common to most of the events.  
        - `pythonEnvironmentCount`?: `number`  
        Total number of python environments.  
        Common to most of the events.  
        - `restartCount`?: `number`  
        This number gets reset after change the kernel.  
        Common to most of the events.  
        - `startFailureCount`?: `number`  
        Number of times starting the kernel failed.  
        Common to most of the events.  
        - `switchKernelCount`?: `number`  
        Number of times the kernel was changed.  
        Common to most of the events.  


* DS_INTERNAL.PREFERRED_KERNEL  (Telemetry.PreferredKernel)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Telemetry sent when we have attempted to find the preferred kernel.  
    ```

    - Properties:  
        - `hasActiveInterpreter`?: `boolean`  
        If we have an active interpreter or not.  
        - `language`: `string`  
        Language of the target notebook or interactive window  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  
        - `result`: `<see below>`  
        Note if we did or did not find a preferred kernel.  
        Possible values include:  
            - `'found'`  
            - `'notfound'`  
            - `'failed'`  


* DS_INTERNAL.PREFERRED_KERNEL_EXACT_MATCH  (Telemetry.PreferredKernelExactMatch)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Send we we complete our preferred kernel match. Matched reason might be 'no match'.  
    ```

    - Properties:  
        - `matchedReason`: `<see below>`  
        How/why the preferred kernel was matched the way it was.  
        Possible values include:  
            - `null or <empty>`  


* DS_INTERNAL.PYTHON_EXTENSION_INSTALLED_VIA_KERNEL_PICKER  (Telemetry.PythonExtensionInstalledViaKernelPicker)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Python extension was attempted to be installed via the kernel picker command.  
    ```

    - Properties:  
        - `action`: `<see below>`  
        Did the Extension install succeed or fail?  
        Possible values include:  
            - `'success'`  
            - `'failed'`  


* DS_INTERNAL.PYTHON_EXTENSION_NOT_INSTALLED  (Telemetry.PythonExtensionNotInstalled)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    The kernel picker command to install python extension was shown.  
    ```

    - Properties:  
        - `action`: `<see below>`  
        The message was displayed, or indicate that the user dismissed or downloaded the message.  
        Possible values include:  
            - `'displayed'`  
            - `'dismissed'`  
            - `'download'`  


* DS_INTERNAL.PYTHON_KERNEL_EXECUTABLE_MATCHES  (Telemetry.PythonKerneExecutableMatches)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry sent for local Python Kernels.  
    Tracking whether we have managed to launch the kernel that matches the interpreter.  
    If match=false, then this means we have failed to launch the right kernel.  
    ```

    - Properties:  
        - `kernelConnectionType`: `<see below>`  
        Type of kernel connection, whether its local, remote or a python environment.  
        Possible values include:  
            - `'startUsingLocalKernelSpec'`  
            - `'startUsingPythonInterpreter'`  
            - `'startUsingRemoteKernelSpec'`  
        - `match`: `<see below>`  
        Whether we've managed to correctly identify the Python Environment.  
        Possible values include:  
            - `'true'`  
            - `'false'`  


* DS_INTERNAL.PYTHON_MODULE_INSTALL  (Telemetry.PythonModuleInstall)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry sent when user is presented with a dialog to install a python package.  
    Also sent with the user's response to the dialog.  
    ```

    - Properties:  
        - `action`: `<see below>`  
        Action taken by the user or the extension.  
        Possible values include:  
            - `'cancelled'`  
            - `'displayed'`  
            - `'prompted'`  
            - `'installed'`  
            - `'ignored'`  
            - `'disabled'`  
            - `'failed'`  
            - `'install'`  
            - `'donotinstall'`  
            - `'differentKernel'`  
            - `'error'`  
            - `'installedInJupyter'`  
            - `'failedToInstallInJupyter'`  
            - `'dismissed'`  
            - `'moreInfo'`  
        - `isModulePresent`?: `<see below>`  
        Whether the module was already (once before) installed into the python environment or  
        whether this already exists (detected via `pip list`)  
        Possible values include:  
            - `'true'`  
            - `null or <empty>`  
        - `moduleName`: `string`  
        Name of the python module to be installed.  
        - `pythonEnvType`?: `<see below>`  
        Type of the python environment.  
        Possible values include:  
            - `Unknown`  
            - `Conda`  
            - `VirtualEnv`  
            - `PipEnv`  
            - `Pyenv`  
            - `Venv`  
            - `WindowsStore`  
            - `Poetry`  
            - `VirtualEnvWrapper`  
            - `Global`  
            - `System`  
        - `resourceHash`?: `string`  
        Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
        If we run the same notebook tomorrow, the hash will be the same.  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  
    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DS_INTERNAL.PYTHON_NOT_INSTALLED  (Telemetry.PythonNotInstalled)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    The kernel picker command to install python was shown.  
    ```

    - Properties:  
        - `action`: `<see below>`  
        The message was displayed, or indicate that the user dismissed or downloaded the message.  
        Possible values include:  
            - `'displayed'`  
            - `'dismissed'`  
            - `'download'`  


* DS_INTERNAL.RANK_KERNELS_PERF  (Telemetry.RankKernelsPerf)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Time taken to load kernels if needed and rank them all.  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DS_INTERNAL.RAWKERNEL_CREATING_NOTEBOOK  (Telemetry.RawKernelCreatingNotebook)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry send when we create a notebook for a raw kernel or jupyter  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DS_INTERNAL.RAWKERNEL_INFO_RESPONSE  (Telemetry.RawKernelInfoResponse)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    After starting a kernel we send a request to get the kernel info.  
    This tracks the total time taken to get the response back (or wether we timedout).  
    If we timeout and later we find successful comms for this session, then timeout is too low  
    or we need more attempts.  
    ```

    - Properties:  
        - `actionSource`: `<see below>`  
        Whether this was started by Jupyter extension or a 3rd party.  
        Common to most of the events.  
        Possible values include:  
            - `jupyterExtension`  
            - `3rdPartyExtension`  
        - `capturedEnvVars`?: `boolean`  
        Whether we managed to capture the environment variables or not.  
        In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
        Common to most of the events.  
        - `disableUI`?: `boolean`  
        Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
        If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
        Common to most of the events.  
        - `isUsingActiveInterpreter`?: `boolean`  
        Whether this resource is using the active Python interpreter or not.  
        Common to most of the events.  
        - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
        Whether kernel was started using kernel spec, interpreter, etc.  
        Common to most of the events.  
        - `kernelId`: `string`  
        Hash of the Kernel Connection id.  
        Common to most of the events.  
        - `kernelLanguage`: `string`  
        Language of the kernel connection.  
        Common to most of the events.  
        - `kernelSessionId`: `string`  
        Unique identifier for an instance of a notebook session.  
        If we restart or run this notebook tomorrow, this id will be different.  
        Id could be something as simple as a hash of the current Epoch time.  
        Common to most of the events.  
        - `pythonEnvironmentPackages`?: `string`  
        Comma delimited list of hashed packages & their versions.  
        Common to most of the events.  
        - `pythonEnvironmentPath`?: `string`  
        A key, so that rest of the information is tied to this. (hash)  
        Common to most of the events.  
        - `pythonEnvironmentType`?: `<see below>`  
        Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
        Common to most of the events.  
        Possible values include:  
            - `Unknown`  
            - `Conda`  
            - `VirtualEnv`  
            - `PipEnv`  
            - `Pyenv`  
            - `Venv`  
            - `WindowsStore`  
            - `Poetry`  
            - `VirtualEnvWrapper`  
            - `Global`  
            - `System`  
        - `pythonEnvironmentVersion`?: `string`  
        Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
        Common to most of the events.  
        - `resourceHash`?: `string`  
        Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
        If we run the same notebook tomorrow, the hash will be the same.  
        Used to check whether a particular notebook fails across time or not.  
        This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
        and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
        we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
        and have a better understanding of what is going on, e.g. why something failed.  
        Common to most of the events.  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  
        - `timedout`: `boolean`  
        Whether we timedout while waiting for response for Kernel info request.  
        - `userExecutedCell`?: `boolean`  
        Whether the user executed a cell.  
        Common to most of the events.  
    - Measures:  
        - `attempts`: `number`  
        Total number of attempts and sending a request and waiting for response.  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  
        - `interruptCount`?: `number`  
        This number gets reset after we attempt a restart or change kernel.  
        Common to most of the events.  
        - `kernelInterpreterCount`: `number`  
        Total number of interpreters in the kernel spec list.  
        Common to most of the events.  
        - `kernelLiveCount`: `number`  
        Total number of live kernels in the kernel spec list.  
        Common to most of the events.  
        - `kernelSpecCount`: `number`  
        Total number of kernel specs in the kernel spec list.  
        Common to most of the events.  
        - `pythonEnvironmentCount`?: `number`  
        Total number of python environments.  
        Common to most of the events.  
        - `restartCount`?: `number`  
        This number gets reset after change the kernel.  
        Common to most of the events.  
        - `startFailureCount`?: `number`  
        Number of times starting the kernel failed.  
        Common to most of the events.  
        - `switchKernelCount`?: `number`  
        Number of times the kernel was changed.  
        Common to most of the events.  


* DS_INTERNAL.RAWKERNEL_PROCESS_LAUNCH  (Telemetry.RawKernelProcessLaunch)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Sent to measure time taken to spawn the raw kernel process.  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DS_INTERNAL.RAWKERNEL_SESSION_CONNECT  (Telemetry.RawKernelSessionConnect)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Sent to measure the total time taken to start and connect to a raw kernel session.  
    ```

    - Properties:  
        - `actionSource`: `<see below>`  
        Whether this was started by Jupyter extension or a 3rd party.  
        Common to most of the events.  
        Possible values include:  
            - `jupyterExtension`  
            - `3rdPartyExtension`  
        - `capturedEnvVars`?: `boolean`  
        Whether we managed to capture the environment variables or not.  
        In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
        Common to most of the events.  
        - `disableUI`?: `boolean`  
        Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
        If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
        Common to most of the events.  
        - `isUsingActiveInterpreter`?: `boolean`  
        Whether this resource is using the active Python interpreter or not.  
        Common to most of the events.  
        - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
        Whether kernel was started using kernel spec, interpreter, etc.  
        Common to most of the events.  
        - `kernelId`: `string`  
        Hash of the Kernel Connection id.  
        Common to most of the events.  
        - `kernelLanguage`: `string`  
        Language of the kernel connection.  
        Common to most of the events.  
        - `kernelSessionId`: `string`  
        Unique identifier for an instance of a notebook session.  
        If we restart or run this notebook tomorrow, this id will be different.  
        Id could be something as simple as a hash of the current Epoch time.  
        Common to most of the events.  
        - `pythonEnvironmentPackages`?: `string`  
        Comma delimited list of hashed packages & their versions.  
        Common to most of the events.  
        - `pythonEnvironmentPath`?: `string`  
        A key, so that rest of the information is tied to this. (hash)  
        Common to most of the events.  
        - `pythonEnvironmentType`?: `<see below>`  
        Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
        Common to most of the events.  
        Possible values include:  
            - `Unknown`  
            - `Conda`  
            - `VirtualEnv`  
            - `PipEnv`  
            - `Pyenv`  
            - `Venv`  
            - `WindowsStore`  
            - `Poetry`  
            - `VirtualEnvWrapper`  
            - `Global`  
            - `System`  
        - `pythonEnvironmentVersion`?: `string`  
        Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
        Common to most of the events.  
        - `resourceHash`?: `string`  
        Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
        If we run the same notebook tomorrow, the hash will be the same.  
        Used to check whether a particular notebook fails across time or not.  
        This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
        and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
        we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
        and have a better understanding of what is going on, e.g. why something failed.  
        Common to most of the events.  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  
        - `userExecutedCell`?: `boolean`  
        Whether the user executed a cell.  
        Common to most of the events.  
    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  
        - `interruptCount`?: `number`  
        This number gets reset after we attempt a restart or change kernel.  
        Common to most of the events.  
        - `kernelInterpreterCount`: `number`  
        Total number of interpreters in the kernel spec list.  
        Common to most of the events.  
        - `kernelLiveCount`: `number`  
        Total number of live kernels in the kernel spec list.  
        Common to most of the events.  
        - `kernelSpecCount`: `number`  
        Total number of kernel specs in the kernel spec list.  
        Common to most of the events.  
        - `pythonEnvironmentCount`?: `number`  
        Total number of python environments.  
        Common to most of the events.  
        - `restartCount`?: `number`  
        This number gets reset after change the kernel.  
        Common to most of the events.  
        - `startFailureCount`?: `number`  
        Number of times starting the kernel failed.  
        Common to most of the events.  
        - `switchKernelCount`?: `number`  
        Number of times the kernel was changed.  
        Common to most of the events.  


* DS_INTERNAL.RAWKERNEL_SESSION_DISPOSED  (Telemetry.RawKernelSessionDisposed)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    This event is sent when a RawSession's `dispose` method is called.  
    Used to determine what part of the code that shut down the session, so as to determine when and how the kernel session crashed.  
    ```

    - Properties:  
        - `actionSource`: `<see below>`  
        Whether this was started by Jupyter extension or a 3rd party.  
        Common to most of the events.  
        Possible values include:  
            - `jupyterExtension`  
            - `3rdPartyExtension`  
        - `capturedEnvVars`?: `boolean`  
        Whether we managed to capture the environment variables or not.  
        In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
        Common to most of the events.  
        - `disableUI`?: `boolean`  
        Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
        If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
        Common to most of the events.  
        - `isUsingActiveInterpreter`?: `boolean`  
        Whether this resource is using the active Python interpreter or not.  
        Common to most of the events.  
        - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
        Whether kernel was started using kernel spec, interpreter, etc.  
        Common to most of the events.  
        - `kernelId`: `string`  
        Hash of the Kernel Connection id.  
        Common to most of the events.  
        - `kernelLanguage`: `string`  
        Language of the kernel connection.  
        Common to most of the events.  
        - `kernelSessionId`: `string`  
        Unique identifier for an instance of a notebook session.  
        If we restart or run this notebook tomorrow, this id will be different.  
        Id could be something as simple as a hash of the current Epoch time.  
        Common to most of the events.  
        - `pythonEnvironmentPackages`?: `string`  
        Comma delimited list of hashed packages & their versions.  
        Common to most of the events.  
        - `pythonEnvironmentPath`?: `string`  
        A key, so that rest of the information is tied to this. (hash)  
        Common to most of the events.  
        - `pythonEnvironmentType`?: `<see below>`  
        Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
        Common to most of the events.  
        Possible values include:  
            - `Unknown`  
            - `Conda`  
            - `VirtualEnv`  
            - `PipEnv`  
            - `Pyenv`  
            - `Venv`  
            - `WindowsStore`  
            - `Poetry`  
            - `VirtualEnvWrapper`  
            - `Global`  
            - `System`  
        - `pythonEnvironmentVersion`?: `string`  
        Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
        Common to most of the events.  
        - `resourceHash`?: `string`  
        Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
        If we run the same notebook tomorrow, the hash will be the same.  
        Used to check whether a particular notebook fails across time or not.  
        This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
        and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
        we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
        and have a better understanding of what is going on, e.g. why something failed.  
        Common to most of the events.  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  
        - `stacktrace`: `<see below>`  
        This is the callstack at the time that the `dispose` method  
        is called, intended for us to be able to identify who called  
        `dispose` on the RawSession.  
        Possible values include:  
            - `null or <empty>`  
        - `userExecutedCell`?: `boolean`  
        Whether the user executed a cell.  
        Common to most of the events.  
    - Measures:  
        - `interruptCount`?: `number`  
        This number gets reset after we attempt a restart or change kernel.  
        Common to most of the events.  
        - `kernelInterpreterCount`: `number`  
        Total number of interpreters in the kernel spec list.  
        Common to most of the events.  
        - `kernelLiveCount`: `number`  
        Total number of live kernels in the kernel spec list.  
        Common to most of the events.  
        - `kernelSpecCount`: `number`  
        Total number of kernel specs in the kernel spec list.  
        Common to most of the events.  
        - `pythonEnvironmentCount`?: `number`  
        Total number of python environments.  
        Common to most of the events.  
        - `restartCount`?: `number`  
        This number gets reset after change the kernel.  
        Common to most of the events.  
        - `startFailureCount`?: `number`  
        Number of times starting the kernel failed.  
        Common to most of the events.  
        - `switchKernelCount`?: `number`  
        Number of times the kernel was changed.  
        Common to most of the events.  


* DS_INTERNAL.RAWKERNEL_SESSION_KERNEL_PROCESS_EXITED  (Telemetry.RawKernelSessionKernelProcessExited)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    This event is sent when the underlying kernelProcess for a  
    RawJupyterSession exits.  
    ```

    - Properties:  
        - `actionSource`: `<see below>`  
        Whether this was started by Jupyter extension or a 3rd party.  
        Common to most of the events.  
        Possible values include:  
            - `jupyterExtension`  
            - `3rdPartyExtension`  
        - `capturedEnvVars`?: `boolean`  
        Whether we managed to capture the environment variables or not.  
        In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
        Common to most of the events.  
        - `disableUI`?: `boolean`  
        Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
        If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
        Common to most of the events.  
        - `exitReason`: `<see below>`  
        The kernel process's exit reason, based on the error  
        object's reason  
        Possible values include:  
            - `null or <empty>`  
        - `isUsingActiveInterpreter`?: `boolean`  
        Whether this resource is using the active Python interpreter or not.  
        Common to most of the events.  
        - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
        Whether kernel was started using kernel spec, interpreter, etc.  
        Common to most of the events.  
        - `kernelId`: `string`  
        Hash of the Kernel Connection id.  
        Common to most of the events.  
        - `kernelLanguage`: `string`  
        Language of the kernel connection.  
        Common to most of the events.  
        - `kernelSessionId`: `string`  
        Unique identifier for an instance of a notebook session.  
        If we restart or run this notebook tomorrow, this id will be different.  
        Id could be something as simple as a hash of the current Epoch time.  
        Common to most of the events.  
        - `pythonEnvironmentPackages`?: `string`  
        Comma delimited list of hashed packages & their versions.  
        Common to most of the events.  
        - `pythonEnvironmentPath`?: `string`  
        A key, so that rest of the information is tied to this. (hash)  
        Common to most of the events.  
        - `pythonEnvironmentType`?: `<see below>`  
        Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
        Common to most of the events.  
        Possible values include:  
            - `Unknown`  
            - `Conda`  
            - `VirtualEnv`  
            - `PipEnv`  
            - `Pyenv`  
            - `Venv`  
            - `WindowsStore`  
            - `Poetry`  
            - `VirtualEnvWrapper`  
            - `Global`  
            - `System`  
        - `pythonEnvironmentVersion`?: `string`  
        Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
        Common to most of the events.  
        - `resourceHash`?: `string`  
        Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
        If we run the same notebook tomorrow, the hash will be the same.  
        Used to check whether a particular notebook fails across time or not.  
        This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
        and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
        we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
        and have a better understanding of what is going on, e.g. why something failed.  
        Common to most of the events.  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  
        - `userExecutedCell`?: `boolean`  
        Whether the user executed a cell.  
        Common to most of the events.  
    - Measures:  
        - `exitCode`: `number`  
        The kernel process's exit code.  
        - `interruptCount`?: `number`  
        This number gets reset after we attempt a restart or change kernel.  
        Common to most of the events.  
        - `kernelInterpreterCount`: `number`  
        Total number of interpreters in the kernel spec list.  
        Common to most of the events.  
        - `kernelLiveCount`: `number`  
        Total number of live kernels in the kernel spec list.  
        Common to most of the events.  
        - `kernelSpecCount`: `number`  
        Total number of kernel specs in the kernel spec list.  
        Common to most of the events.  
        - `pythonEnvironmentCount`?: `number`  
        Total number of python environments.  
        Common to most of the events.  
        - `restartCount`?: `number`  
        This number gets reset after change the kernel.  
        Common to most of the events.  
        - `startFailureCount`?: `number`  
        Number of times starting the kernel failed.  
        Common to most of the events.  
        - `switchKernelCount`?: `number`  
        Number of times the kernel was changed.  
        Common to most of the events.  


* DS_INTERNAL.RAWKERNEL_SESSION_NO_IPYKERNEL  (Telemetry.RawKernelSessionStartNoIpykernel)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry event sent when raw kernel startup fails due to missing ipykernel dependency.  
    This is useful to see what the user does with this error message.  
    ```

    - Properties:  
        - `reason`: `<see below>`  
        Captures the result of the error message, whether user dismissed this or picked a new kernel or the like.  
        Possible values include:  
            - `0`  
        Enum Member: KernelInterpreterDependencyResponse.ok  
        Could mean dependencies are already installed
or user clicked ok to install and it got installed.  
            - `1`  
        Enum Member: KernelInterpreterDependencyResponse.cancel  
            - `2`  
        Enum Member: KernelInterpreterDependencyResponse.failed  
            - `3`  
        Enum Member: KernelInterpreterDependencyResponse.selectDifferentKernel  
        User chose to select a different kernel.  
            - `4`  
        Enum Member: KernelInterpreterDependencyResponse.uiHidden  
        Missing dependencies not installed and UI not displayed to the user
as the kernel startup is part of a background process.
In such cases we do not notify user of any failures or the like.  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  


* DS_INTERNAL.RAWKERNEL_SESSION_SHUTDOWN  (Telemetry.RawKernelSessionShutdown)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    This event is sent when a RawJupyterSession's `shutdownSession` method is called.  
    Used to determine what part of the code that shut down the session, so as to determine when and how the kernel session crashed.  
    ```

    - Properties:  
        - `actionSource`: `<see below>`  
        Whether this was started by Jupyter extension or a 3rd party.  
        Common to most of the events.  
        Possible values include:  
            - `jupyterExtension`  
            - `3rdPartyExtension`  
        - `capturedEnvVars`?: `boolean`  
        Whether we managed to capture the environment variables or not.  
        In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
        Common to most of the events.  
        - `disableUI`?: `boolean`  
        Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
        If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
        Common to most of the events.  
        - `isRequestToShutdownRestartSession`: `<see below>`  
        This indicates whether the session being shutdown is a restart session.  
        Possible values include:  
            - `true`  
            - `false`  
            - `null or <empty>`  
        - `isUsingActiveInterpreter`?: `boolean`  
        Whether this resource is using the active Python interpreter or not.  
        Common to most of the events.  
        - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
        Whether kernel was started using kernel spec, interpreter, etc.  
        Common to most of the events.  
        - `kernelId`: `string`  
        Hash of the Kernel Connection id.  
        Common to most of the events.  
        - `kernelLanguage`: `string`  
        Language of the kernel connection.  
        Common to most of the events.  
        - `kernelSessionId`: `string`  
        Unique identifier for an instance of a notebook session.  
        If we restart or run this notebook tomorrow, this id will be different.  
        Id could be something as simple as a hash of the current Epoch time.  
        Common to most of the events.  
        - `pythonEnvironmentPackages`?: `string`  
        Comma delimited list of hashed packages & their versions.  
        Common to most of the events.  
        - `pythonEnvironmentPath`?: `string`  
        A key, so that rest of the information is tied to this. (hash)  
        Common to most of the events.  
        - `pythonEnvironmentType`?: `<see below>`  
        Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
        Common to most of the events.  
        Possible values include:  
            - `Unknown`  
            - `Conda`  
            - `VirtualEnv`  
            - `PipEnv`  
            - `Pyenv`  
            - `Venv`  
            - `WindowsStore`  
            - `Poetry`  
            - `VirtualEnvWrapper`  
            - `Global`  
            - `System`  
        - `pythonEnvironmentVersion`?: `string`  
        Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
        Common to most of the events.  
        - `resourceHash`?: `string`  
        Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
        If we run the same notebook tomorrow, the hash will be the same.  
        Used to check whether a particular notebook fails across time or not.  
        This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
        and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
        we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
        and have a better understanding of what is going on, e.g. why something failed.  
        Common to most of the events.  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  
        - `stacktrace`: `<see below>`  
        This is the callstack at the time that the `shutdownSession`  
        method is called, intended for us to be ale to identify who  
        tried to shutdown the session.  
        Possible values include:  
            - `null or <empty>`  
        - `userExecutedCell`?: `boolean`  
        Whether the user executed a cell.  
        Common to most of the events.  
    - Measures:  
        - `interruptCount`?: `number`  
        This number gets reset after we attempt a restart or change kernel.  
        Common to most of the events.  
        - `kernelInterpreterCount`: `number`  
        Total number of interpreters in the kernel spec list.  
        Common to most of the events.  
        - `kernelLiveCount`: `number`  
        Total number of live kernels in the kernel spec list.  
        Common to most of the events.  
        - `kernelSpecCount`: `number`  
        Total number of kernel specs in the kernel spec list.  
        Common to most of the events.  
        - `pythonEnvironmentCount`?: `number`  
        Total number of python environments.  
        Common to most of the events.  
        - `restartCount`?: `number`  
        This number gets reset after change the kernel.  
        Common to most of the events.  
        - `startFailureCount`?: `number`  
        Number of times starting the kernel failed.  
        Common to most of the events.  
        - `switchKernelCount`?: `number`  
        Number of times the kernel was changed.  
        Common to most of the events.  


* DS_INTERNAL.RAWKERNEL_SESSION_START  (Telemetry.RawKernelSessionStart)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry sent when we start (or fail to start) a raw kernel  
    ```

    - `When started successfully.`:  
        - Properties:  
            - `actionSource`: `<see below>`  
            Whether this was started by Jupyter extension or a 3rd party.  
            Common to most of the events.  
            Possible values include:  
                - `jupyterExtension`  
                - `3rdPartyExtension`  
            - `capturedEnvVars`?: `boolean`  
            Whether we managed to capture the environment variables or not.  
            In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
            Common to most of the events.  
            - `disableUI`?: `boolean`  
            Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
            If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
            Common to most of the events.  
            - `isUsingActiveInterpreter`?: `boolean`  
            Whether this resource is using the active Python interpreter or not.  
            Common to most of the events.  
            - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
            Whether kernel was started using kernel spec, interpreter, etc.  
            Common to most of the events.  
            - `kernelId`: `string`  
            Hash of the Kernel Connection id.  
            Common to most of the events.  
            - `kernelLanguage`: `string`  
            Language of the kernel connection.  
            Common to most of the events.  
            - `kernelSessionId`: `string`  
            Unique identifier for an instance of a notebook session.  
            If we restart or run this notebook tomorrow, this id will be different.  
            Id could be something as simple as a hash of the current Epoch time.  
            Common to most of the events.  
            - `pythonEnvironmentPackages`?: `string`  
            Comma delimited list of hashed packages & their versions.  
            Common to most of the events.  
            - `pythonEnvironmentPath`?: `string`  
            A key, so that rest of the information is tied to this. (hash)  
            Common to most of the events.  
            - `pythonEnvironmentType`?: `<see below>`  
            Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
            Common to most of the events.  
            Possible values include:  
                - `Unknown`  
                - `Conda`  
                - `VirtualEnv`  
                - `PipEnv`  
                - `Pyenv`  
                - `Venv`  
                - `WindowsStore`  
                - `Poetry`  
                - `VirtualEnvWrapper`  
                - `Global`  
                - `System`  
            - `pythonEnvironmentVersion`?: `string`  
            Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
            Common to most of the events.  
            - `resourceHash`?: `string`  
            Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
            If we run the same notebook tomorrow, the hash will be the same.  
            Used to check whether a particular notebook fails across time or not.  
            This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
            and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
            we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
            and have a better understanding of what is going on, e.g. why something failed.  
            Common to most of the events.  
            - `resourceType`?: `<see below>`  
            Used to determine whether this event is related to a Notebooks or Interactive window.  
            Common to most of the events.  
            Possible values include:  
                - `'notebook'`  
                - `'interactive'`  
            - `userExecutedCell`?: `boolean`  
            Whether the user executed a cell.  
            Common to most of the events.  
        - Measures:  
            - `duration`: `number`  
            Duration of a measure in milliseconds.  
            Common measurement used across a number of events.  
            - `interruptCount`?: `number`  
            This number gets reset after we attempt a restart or change kernel.  
            Common to most of the events.  
            - `kernelInterpreterCount`: `number`  
            Total number of interpreters in the kernel spec list.  
            Common to most of the events.  
            - `kernelLiveCount`: `number`  
            Total number of live kernels in the kernel spec list.  
            Common to most of the events.  
            - `kernelSpecCount`: `number`  
            Total number of kernel specs in the kernel spec list.  
            Common to most of the events.  
            - `pythonEnvironmentCount`?: `number`  
            Total number of python environments.  
            Common to most of the events.  
            - `restartCount`?: `number`  
            This number gets reset after change the kernel.  
            Common to most of the events.  
            - `startFailureCount`?: `number`  
            Number of times starting the kernel failed.  
            Common to most of the events.  
            - `switchKernelCount`?: `number`  
            Number of times the kernel was changed.  
            Common to most of the events.  
    - `Sent when we fail to restart a kernel.`:  
        - Properties:  
            - `actionSource`: `<see below>`  
            Whether this was started by Jupyter extension or a 3rd party.  
            Common to most of the events.  
            Possible values include:  
                - `jupyterExtension`  
                - `3rdPartyExtension`  
            - `capturedEnvVars`?: `boolean`  
            Whether we managed to capture the environment variables or not.  
            In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
            Common to most of the events.  
            - `disableUI`?: `boolean`  
            Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
            If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
            Common to most of the events.  
            - `failed`: `true`  
            Whether there was a failure.  
            Common to most of the events.  
            - `failureCategory`?: `string`  
            A reason that we generate (e.g. kerneldied, noipykernel, etc), more like a category of the error.  
            Common to most of the events.  
            - `failureSubCategory`?: `string`  
            Further sub classification of the error. E.g. kernel died due to the fact that zmq is not installed properly.  
            Common to most of the events.  
            - `isUsingActiveInterpreter`?: `boolean`  
            Whether this resource is using the active Python interpreter or not.  
            Common to most of the events.  
            - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
            Whether kernel was started using kernel spec, interpreter, etc.  
            Common to most of the events.  
            - `kernelId`: `string`  
            Hash of the Kernel Connection id.  
            Common to most of the events.  
            - `kernelLanguage`: `string`  
            Language of the kernel connection.  
            Common to most of the events.  
            - `kernelSessionId`: `string`  
            Unique identifier for an instance of a notebook session.  
            If we restart or run this notebook tomorrow, this id will be different.  
            Id could be something as simple as a hash of the current Epoch time.  
            Common to most of the events.  
            - `pythonEnvironmentPackages`?: `string`  
            Comma delimited list of hashed packages & their versions.  
            Common to most of the events.  
            - `pythonEnvironmentPath`?: `string`  
            A key, so that rest of the information is tied to this. (hash)  
            Common to most of the events.  
            - `pythonEnvironmentType`?: `<see below>`  
            Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
            Common to most of the events.  
            Possible values include:  
                - `Unknown`  
                - `Conda`  
                - `VirtualEnv`  
                - `PipEnv`  
                - `Pyenv`  
                - `Venv`  
                - `WindowsStore`  
                - `Poetry`  
                - `VirtualEnvWrapper`  
                - `Global`  
                - `System`  
            - `pythonEnvironmentVersion`?: `string`  
            Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
            Common to most of the events.  
            - `pythonErrorFile`?: `string`  
            Hash of the file name that contains the file in the last frame (from Python stack trace).  
            Common to most of the events.  
            - `pythonErrorFolder`?: `string`  
            Hash of the folder that contains the file in the last frame (from Python stack trace).  
            Common to most of the events.  
            - `pythonErrorPackage`?: `string`  
            Hash of the module that contains the file in the last frame (from Python stack trace).  
            Common to most of the events.  
            - `resourceHash`?: `string`  
            Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
            If we run the same notebook tomorrow, the hash will be the same.  
            Used to check whether a particular notebook fails across time or not.  
            This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
            and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
            we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
            and have a better understanding of what is going on, e.g. why something failed.  
            Common to most of the events.  
            - `resourceType`?: `<see below>`  
            Used to determine whether this event is related to a Notebooks or Interactive window.  
            Common to most of the events.  
            Possible values include:  
                - `'notebook'`  
                - `'interactive'`  
            - `stackTrace`: `string`  
            Node stacktrace without PII.  
            Common to most of the events.  
            - `userExecutedCell`?: `boolean`  
            Whether the user executed a cell.  
            Common to most of the events.  
        - Measures:  
            - `interruptCount`?: `number`  
            This number gets reset after we attempt a restart or change kernel.  
            Common to most of the events.  
            - `kernelInterpreterCount`: `number`  
            Total number of interpreters in the kernel spec list.  
            Common to most of the events.  
            - `kernelLiveCount`: `number`  
            Total number of live kernels in the kernel spec list.  
            Common to most of the events.  
            - `kernelSpecCount`: `number`  
            Total number of kernel specs in the kernel spec list.  
            Common to most of the events.  
            - `pythonEnvironmentCount`?: `number`  
            Total number of python environments.  
            Common to most of the events.  
            - `restartCount`?: `number`  
            This number gets reset after change the kernel.  
            Common to most of the events.  
            - `startFailureCount`?: `number`  
            Number of times starting the kernel failed.  
            Common to most of the events.  
            - `switchKernelCount`?: `number`  
            Number of times the kernel was changed.  
            Common to most of the events.  


* DS_INTERNAL.RAWKERNEL_SESSION_START_USER_CANCEL  (Telemetry.RawKernelSessionStartUserCancel)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry event sent to indicate the fact that the kernel failed to start as the user canceled it in some way.  
    E.g. possible the user chose another kernel or the like.  
    ```

    - Properties:  
        - `actionSource`: `<see below>`  
        Whether this was started by Jupyter extension or a 3rd party.  
        Common to most of the events.  
        Possible values include:  
            - `jupyterExtension`  
            - `3rdPartyExtension`  
        - `capturedEnvVars`?: `boolean`  
        Whether we managed to capture the environment variables or not.  
        In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
        Common to most of the events.  
        - `disableUI`?: `boolean`  
        Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
        If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
        Common to most of the events.  
        - `isUsingActiveInterpreter`?: `boolean`  
        Whether this resource is using the active Python interpreter or not.  
        Common to most of the events.  
        - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
        Whether kernel was started using kernel spec, interpreter, etc.  
        Common to most of the events.  
        - `kernelId`: `string`  
        Hash of the Kernel Connection id.  
        Common to most of the events.  
        - `kernelLanguage`: `string`  
        Language of the kernel connection.  
        Common to most of the events.  
        - `kernelSessionId`: `string`  
        Unique identifier for an instance of a notebook session.  
        If we restart or run this notebook tomorrow, this id will be different.  
        Id could be something as simple as a hash of the current Epoch time.  
        Common to most of the events.  
        - `pythonEnvironmentPackages`?: `string`  
        Comma delimited list of hashed packages & their versions.  
        Common to most of the events.  
        - `pythonEnvironmentPath`?: `string`  
        A key, so that rest of the information is tied to this. (hash)  
        Common to most of the events.  
        - `pythonEnvironmentType`?: `<see below>`  
        Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
        Common to most of the events.  
        Possible values include:  
            - `Unknown`  
            - `Conda`  
            - `VirtualEnv`  
            - `PipEnv`  
            - `Pyenv`  
            - `Venv`  
            - `WindowsStore`  
            - `Poetry`  
            - `VirtualEnvWrapper`  
            - `Global`  
            - `System`  
        - `pythonEnvironmentVersion`?: `string`  
        Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
        Common to most of the events.  
        - `resourceHash`?: `string`  
        Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
        If we run the same notebook tomorrow, the hash will be the same.  
        Used to check whether a particular notebook fails across time or not.  
        This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
        and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
        we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
        and have a better understanding of what is going on, e.g. why something failed.  
        Common to most of the events.  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  
        - `userExecutedCell`?: `boolean`  
        Whether the user executed a cell.  
        Common to most of the events.  
    - Measures:  
        - `interruptCount`?: `number`  
        This number gets reset after we attempt a restart or change kernel.  
        Common to most of the events.  
        - `kernelInterpreterCount`: `number`  
        Total number of interpreters in the kernel spec list.  
        Common to most of the events.  
        - `kernelLiveCount`: `number`  
        Total number of live kernels in the kernel spec list.  
        Common to most of the events.  
        - `kernelSpecCount`: `number`  
        Total number of kernel specs in the kernel spec list.  
        Common to most of the events.  
        - `pythonEnvironmentCount`?: `number`  
        Total number of python environments.  
        Common to most of the events.  
        - `restartCount`?: `number`  
        This number gets reset after change the kernel.  
        Common to most of the events.  
        - `startFailureCount`?: `number`  
        Number of times starting the kernel failed.  
        Common to most of the events.  
        - `switchKernelCount`?: `number`  
        Number of times the kernel was changed.  
        Common to most of the events.  


* DS_INTERNAL.RAWKERNEL_START_RAW_SESSION  (Telemetry.RawKernelStartRawSession)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Sent to measure the time taken to start a raw kernel session.  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DS_INTERNAL.REGISTER_AND_USE_INTERPRETER_AS_KERNEL  (Telemetry.RegisterAndUseInterpreterAsKernel)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Similar to `Telemetry.RegisterInterpreterAsKernel`.  
    But sent when we have successfully registered the interpreter as a kernel.  
    ```



* DS_INTERNAL.RESTART_KERNEL  (Telemetry.RestartKernel)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Total time taken to restart a kernel.  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DS_INTERNAL.RUNTEST  (Telemetry.RunTest)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    A automated test has been run  
    ```

    - Properties:  
        - `commitHash`?: `string`  
        The git commit that the test was run against.  
        - `perfWarmup`?: `'true'`  
        If the test was an initial run to warmup the product.  
        - `testName`: `string`  
        The name of the test.  
        - `testResult`: `string`  
        Whether the test passed or failed.  
        - `timedCheckpoints`?: `string`  
        Timings for segments of the test.  


* DS_INTERNAL.SELECT_JUPYTER_INTERPRETER  (Telemetry.SelectJupyterInterpreter)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Sent when we notify the user to select an interpreter to start jupyter server  
    Also sent after the user makes a selection to start the jupyter server.  
    ```

    - Properties:  
        - `result`?: `<see below>`  
        If the value or `result` is empty this means we displayed the message to the user and user hasn't made a choice yet.  
            The result of the selection.  
        notSelected - No interpreter was selected.  
        selected - An interpreter was selected (and configured to have jupyter and notebook).  
        installationCancelled - Installation of jupyter and/or notebook was cancelled for an interpreter.  
        selectAnotherInterpreter - Selected another interpreter.  
        Possible values include:  
            - `'notSelected'`  
            - `'selected'`  
            - `'installationCancelled'`  
            - `'selectAnotherInterpreter'`  


* DS_INTERNAL.SETTINGS  (Telemetry.DataScienceSettings)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    The list of settings a user has set. Sent on activation.  
    ```

    - Properties:  
        - `settingsJson`: `string`  
        A json representation of settings that the user has set.  
        The values for string based settings are transalted to 'default' | 'non-default' unless white-listed.  


* DS_INTERNAL.SHIFTENTER_BANNER_SHOWN  (Telemetry.ShiftEnterBannerShown)  
      Owner: [@amunger](https://github.com/amunger)  
    ```
    Information banner displayed to give the user the option to configure shift+enter for the Interactive Window.  
    ```



* DS_INTERNAL.SHOW_DATA_NO_PANDAS  (Telemetry.PandasNotInstalled)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    User tried to open the data viewer and Pandas package was not installed.  
    Note: Not a failure state, as we prompt for install after this.  
    ```



* DS_INTERNAL.SHOW_DATA_PANDAS_INSTALL_CANCELED  (Telemetry.PandasInstallCanceled)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    When opening the data viewer the user was prompted to install / upgrade  
    pandas and choose to cancel the operation.  
    ```



* DS_INTERNAL.SHOW_DATA_PANDAS_OK  (Telemetry.PandasOK)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    When opening the data viewer the version of Pandas installed was ok.  
    ```



* DS_INTERNAL.SHOW_DATA_PANDAS_TOO_OLD  (Telemetry.PandasTooOld)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    When opening the data viewer the version of Pandas installed was too old.  
    ```



* DS_INTERNAL.START_EXECUTE_NOTEBOOK_CELL_PERCEIVED_COLD  (Telemetry.StartExecuteNotebookCellPerceivedCold)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Time take for jupyter server to be busy from the time user first hit `run` cell until jupyter reports it is busy running a cell.  
    ```

    - Properties:  
        - `actionSource`: `<see below>`  
        Whether this was started by Jupyter extension or a 3rd party.  
        Common to most of the events.  
        Possible values include:  
            - `jupyterExtension`  
            - `3rdPartyExtension`  
        - `capturedEnvVars`?: `boolean`  
        Whether we managed to capture the environment variables or not.  
        In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
        Common to most of the events.  
        - `disableUI`?: `boolean`  
        Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
        If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
        Common to most of the events.  
        - `isUsingActiveInterpreter`?: `boolean`  
        Whether this resource is using the active Python interpreter or not.  
        Common to most of the events.  
        - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
        Whether kernel was started using kernel spec, interpreter, etc.  
        Common to most of the events.  
        - `kernelId`: `string`  
        Hash of the Kernel Connection id.  
        Common to most of the events.  
        - `kernelLanguage`: `string`  
        Language of the kernel connection.  
        Common to most of the events.  
        - `kernelSessionId`: `string`  
        Unique identifier for an instance of a notebook session.  
        If we restart or run this notebook tomorrow, this id will be different.  
        Id could be something as simple as a hash of the current Epoch time.  
        Common to most of the events.  
        - `pythonEnvironmentPackages`?: `string`  
        Comma delimited list of hashed packages & their versions.  
        Common to most of the events.  
        - `pythonEnvironmentPath`?: `string`  
        A key, so that rest of the information is tied to this. (hash)  
        Common to most of the events.  
        - `pythonEnvironmentType`?: `<see below>`  
        Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
        Common to most of the events.  
        Possible values include:  
            - `Unknown`  
            - `Conda`  
            - `VirtualEnv`  
            - `PipEnv`  
            - `Pyenv`  
            - `Venv`  
            - `WindowsStore`  
            - `Poetry`  
            - `VirtualEnvWrapper`  
            - `Global`  
            - `System`  
        - `pythonEnvironmentVersion`?: `string`  
        Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
        Common to most of the events.  
        - `resourceHash`?: `string`  
        Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
        If we run the same notebook tomorrow, the hash will be the same.  
        Used to check whether a particular notebook fails across time or not.  
        This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
        and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
        we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
        and have a better understanding of what is going on, e.g. why something failed.  
        Common to most of the events.  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  
        - `userExecutedCell`?: `boolean`  
        Whether the user executed a cell.  
        Common to most of the events.  
    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  
        - `interruptCount`?: `number`  
        This number gets reset after we attempt a restart or change kernel.  
        Common to most of the events.  
        - `kernelInterpreterCount`: `number`  
        Total number of interpreters in the kernel spec list.  
        Common to most of the events.  
        - `kernelLiveCount`: `number`  
        Total number of live kernels in the kernel spec list.  
        Common to most of the events.  
        - `kernelSpecCount`: `number`  
        Total number of kernel specs in the kernel spec list.  
        Common to most of the events.  
        - `pythonEnvironmentCount`?: `number`  
        Total number of python environments.  
        Common to most of the events.  
        - `restartCount`?: `number`  
        This number gets reset after change the kernel.  
        Common to most of the events.  
        - `startFailureCount`?: `number`  
        Number of times starting the kernel failed.  
        Common to most of the events.  
        - `switchKernelCount`?: `number`  
        Number of times the kernel was changed.  
        Common to most of the events.  


* DS_INTERNAL.START_JUPYTER_PROCESS  (Telemetry.StartJupyterProcess)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Time taken to start the Jupyter server.  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DS_INTERNAL.START_SESSION_FAILED_JUPYTER  (Telemetry.StartSessionFailedJupyter)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry event sent when starting a session for a local connection failed.  
    ```



* DS_INTERNAL.SWITCH_KERNEL  (Telemetry.SwitchKernel)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Triggered when the kernel selection changes (note: This can also happen automatically when a notebook is opened).  
    WARNING: Due to changes in VS Code, this isn't necessarily a user action, hence difficult to tell if the user changed it or it changed automatically.  
    ```

    - Properties:  
        - `actionSource`: `<see below>`  
        Whether this was started by Jupyter extension or a 3rd party.  
        Common to most of the events.  
        Possible values include:  
            - `jupyterExtension`  
            - `3rdPartyExtension`  
        - `capturedEnvVars`?: `boolean`  
        Whether we managed to capture the environment variables or not.  
        In the case of conda environments, `false` would be an error condition, as we must have env variables for conda to work.  
        Common to most of the events.  
        - `disableUI`?: `boolean`  
        Whether the notebook startup UI (progress indicator & the like) was displayed to the user or not.  
        If its not displayed, then its considered an auto start (start in the background, like pre-warming kernel)  
        Common to most of the events.  
        - `isUsingActiveInterpreter`?: `boolean`  
        Whether this resource is using the active Python interpreter or not.  
        Common to most of the events.  
        - `kernelConnectionType`?: `KernelConnectionMetadata['kind']`  
        Whether kernel was started using kernel spec, interpreter, etc.  
        Common to most of the events.  
        - `kernelId`: `string`  
        Hash of the Kernel Connection id.  
        Common to most of the events.  
        - `kernelLanguage`: `string`  
        Language of the kernel connection.  
        Common to most of the events.  
        - `kernelSessionId`: `string`  
        Unique identifier for an instance of a notebook session.  
        If we restart or run this notebook tomorrow, this id will be different.  
        Id could be something as simple as a hash of the current Epoch time.  
        Common to most of the events.  
        - `pythonEnvironmentPackages`?: `string`  
        Comma delimited list of hashed packages & their versions.  
        Common to most of the events.  
        - `pythonEnvironmentPath`?: `string`  
        A key, so that rest of the information is tied to this. (hash)  
        Common to most of the events.  
        - `pythonEnvironmentType`?: `<see below>`  
        Found plenty of issues when starting kernels with conda, hence useful to capture this info.  
        Common to most of the events.  
        Possible values include:  
            - `Unknown`  
            - `Conda`  
            - `VirtualEnv`  
            - `PipEnv`  
            - `Pyenv`  
            - `Venv`  
            - `WindowsStore`  
            - `Poetry`  
            - `VirtualEnvWrapper`  
            - `Global`  
            - `System`  
        - `pythonEnvironmentVersion`?: `string`  
        Found plenty of issues when starting Conda Python 3.7, Python 3.7 Python 3.9 (in early days when ipykernel was not up to date)  
        Common to most of the events.  
        - `resourceHash`?: `string`  
        Hash of the resource (notebook.uri or pythonfile.uri associated with this).  
        If we run the same notebook tomorrow, the hash will be the same.  
        Used to check whether a particular notebook fails across time or not.  
        This is also used to map different telemetry events related to this same resource. E.g. we could have an event sent for starting a notebook with this hash,  
        and then later we get yet another event indicating starting a notebook failed. And another event indicating the Python environment used for this notebook is a conda environment or  
        we have some other event indicating some other piece of data for this resource. With the information across multiple resources we can now join the different data points  
        and have a better understanding of what is going on, e.g. why something failed.  
        Common to most of the events.  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  
        - `userExecutedCell`?: `boolean`  
        Whether the user executed a cell.  
        Common to most of the events.  
    - Measures:  
        - `interruptCount`?: `number`  
        This number gets reset after we attempt a restart or change kernel.  
        Common to most of the events.  
        - `kernelInterpreterCount`: `number`  
        Total number of interpreters in the kernel spec list.  
        Common to most of the events.  
        - `kernelLiveCount`: `number`  
        Total number of live kernels in the kernel spec list.  
        Common to most of the events.  
        - `kernelSpecCount`: `number`  
        Total number of kernel specs in the kernel spec list.  
        Common to most of the events.  
        - `pythonEnvironmentCount`?: `number`  
        Total number of python environments.  
        Common to most of the events.  
        - `restartCount`?: `number`  
        This number gets reset after change the kernel.  
        Common to most of the events.  
        - `startFailureCount`?: `number`  
        Number of times starting the kernel failed.  
        Common to most of the events.  
        - `switchKernelCount`?: `number`  
        Number of times the kernel was changed.  
        Common to most of the events.  


* DS_INTERNAL.VARIABLE_EXPLORER_FETCH_TIME  (Telemetry.VariableExplorerFetchTime)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    How long did it take for a single variable request to be resolved.  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DS_INTERNAL.VARIABLE_EXPLORER_VARIABLE_COUNT  (Telemetry.VariableExplorerVariableCount)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Count how many variables were in a variable request.  
    ```

    - Measures:  
        - `variableCount`: `number`  
        Count of variables requested  


* DS_INTERNAL.VSCNOTEBOOK_CELL_TRANSLATION_FAILED  (Telemetry.VSCNotebookCellTranslationFailed)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    We've failed to translate a Jupyter cell output for serialization into a Notebook cell.  
    ```

    - Properties:  
        - `outputType`: `string`  
        Type of the output received from the Jupyter kernel.  
        This is required to identify output types that we're not mapping correctly.  


* DS_INTERNAL.WAIT_FOR_IDLE_JUPYTER  (Telemetry.WaitForIdleJupyter)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Sent to measure the time taken to wait for a Jupyter kernel to be idle.  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DS_INTERNAL.WEBVIEW_STARTUP  (Telemetry.WebviewStartup)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    We started up a webview.  
    ```

    - Properties:  
        - `type`: `string`  
        The type of webview started up.  
    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* DS_INTERNAL.ZMQ_NATIVE_BINARIES_LOADING  (Telemetry.ZMQSupported)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry event sent when the ZMQ native binaries do work.  
    ```



* DS_INTERNAL.ZMQ_NATIVE_BINARIES_NOT_LOADING  (Telemetry.ZMQNotSupported)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry event sent when the ZMQ native binaries do not work.  
    ```



* ENVFILE_VARIABLE_SUBSTITUTION  (EventName.ENVFILE_VARIABLE_SUBSTITUTION)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry event sent when substituting Environment variables to calculate value of variables.  
    E.g. user has a a .env file with tokens that need to be replaced with env variables.  
    such as an env file having the variable `${HOME}`.  
    Gives us an idea of whether users have variable references in their .env files or not.  
    ```



* ENVFILE_WORKSPACE  (EventName.ENVFILE_WORKSPACE)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry event sent when an environment file is detected in the workspace.  
    ```



* EXTENSION.LOAD  (EventName.EXTENSION_LOAD)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry event sent with perf measures related to activation and loading of extension.  
    ```

    - Measures:  
        - `codeLoadingTime`: `number`  
        Time taken to load the code.  
        - `endActivateTime`: `number`  
        Time when activation completed.  
        - `startActivateTime`: `number`  
        Time when activation started.  
        - `totalActivateTime`: `number`  
        Time taken to activate the extension.  
        - `workspaceFolderCount`: `number`  
        Number of workspace folders opened  


* HASHED_PACKAGE_NAME  (EventName.HASHED_PACKAGE_NAME)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry event sent with hash of an imported python package.  
    Used to detect the popularity of a package, that would help determine which packages  
    need to be prioritized when resolving issues with intellisense or supporting similar issues related to a (known) specific package.  
    ```

    - Properties:  
        - `hashedNamev2`: `string`  
        Hash of the package name  
        - `resourceType`?: `<see below>`  
        Used to determine whether this event is related to a Notebooks or Interactive window.  
        Common to most of the events.  
        Possible values include:  
            - `'notebook'`  
            - `'interactive'`  
        - `when`: `<see below>`  
        Whether the package was detected in an existing file (upon open, upon save, upon close) or when it was being used during execution.  
        Possible values include:  
            - `'onExecution'`  
            - `'onOpenCloseOrSave'`  


* HASHED_PACKAGE_PERF  (EventName.HASHED_PACKAGE_PERF)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Time taken to hash python packages found in the code.  
    ```

    - Measures:  
        - `duration`: `number`  
        Duration of a measure in milliseconds.  
        Common measurement used across a number of events.  


* JUPYTER_IS_INSTALLED  (Telemetry.JupyterInstalled)  
      Owner: [@donjayamanne](https://github.com/donjayamanne)  
    ```
    Telemetry sent with result of detecting Jupyter in the current path.  
    ```

    - `/* Detection of jupyter failed`:  
        - Properties:  
            - `failed`: `true`  
            Failed to detect Jupyter.  
            - `frontEnd`: `<see below>`  
            Whether this is jupyter lab or notebook.  
            Possible values include:  
                - `'notebook'`  
                - `'lab'`  
            - `reason`: `'notInstalled'`  
            Reason for failure.  
    - `Jupyter was successfully detected`:  
        - Properties:  
            - `detection`: `'process'`  
            Jupyter is in current path of process owned by VS Code.  
            I.e. jupyter can be found in the path as defined by the env variable process.env['PATH'].  
            - `frontEnd`: `<see below>`  
            Whether this is jupyter lab or notebook.  
            Possible values include:  
                - `'notebook'`  
                - `'lab'`  
        - Measures:  
            - `frontEndVersion`: `number`  
            Version of the form 6.11, 4.8  


* OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_ERROR_EX  (EventName.OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_ERROR)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Telemetry event sent when user opens the data viewer via the variable view and there is an error in doing so.  
    ```



* OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_REQUEST_EX  (EventName.OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_REQUEST)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Telemetry event sent when user opens the data viewer via the variable view.  
    ```



* OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_SUCCESS_EX  (EventName.OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_SUCCESS)  
      Owner: [@IanMatthewHuff](https://github.com/IanMatthewHuff)  
    ```
    Telemetry event sent when user opens the data viewer via the variable view and we successfully open the view.  
    ```



<<<<<<< HEAD
||||||| parent of 55f0ce845 (Add option removing local kernels, improve error logging)
[src/webviews/extension-side/dataviewer/dataViewer.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/dataViewer.ts)
```typescript
                break;

            case DataViewerMessages.SliceEnablementStateChanged:
                void sendTelemetryEvent(Telemetry.DataViewerSliceEnablementStateChanged, undefined, {
                    newState: payload.newState ? CheckboxState.Checked : CheckboxState.Unchecked
                });
                break;
```

</details>
<details>
  <summary>DATASCIENCE.DATA_VIEWER_SLICE_OPERATION</summary>

## Description




 Telemetry event sent whenever the user applies a valid slice
 to a sliceable Python variable in the data viewer.

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/dataViewer.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/dataViewer.ts)
```typescript
                if (payload.shape?.length) {
                    this.maybeSendSliceDataDimensionalityTelemetry(payload.shape.length);
                }
                sendTelemetryEvent(Telemetry.DataViewerSliceOperation, undefined, { source: request.source });
                return this.postMessage(DataViewerMessages.InitializeData, payload);
            }
        });
```

</details>
<details>
  <summary>DATASCIENCE.DEBUG_CONTINUE</summary>

## Description




 Telemetry event sent when user hits the `continue` button while debugging IW

## Properties


No properties for event


## Locations Used

[src/interactive-window/commands/commandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/commands/commandRegistry.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.DebugContinue)
    private async debugContinue(): Promise<void> {
        // Make sure that we are in debug mode
        if (this.debugService?.activeDebugSession) {
```

</details>
<details>
  <summary>DATASCIENCE.DEBUG_CURRENT_CELL</summary>

## Description




 Telemetry event sent when user debugs the cell in the IW

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        return this.codeLenses;
    }

    @captureTelemetry(Telemetry.DebugCurrentCell)
    public async debugCurrentCell() {
        if (!this.documentManager.activeTextEditor || !this.documentManager.activeTextEditor.document) {
            return;
```


[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        return this.runMatchingCell(range, advance);
    }

    @captureTelemetry(Telemetry.DebugCurrentCell)
    public async debugCell(range: Range): Promise<void> {
        if (!this.documentManager.activeTextEditor || !this.documentManager.activeTextEditor.document) {
            return;
```

</details>
<details>
  <summary>DATASCIENCE.DEBUG_FILE_INTERACTIVE</summary>

## Description




 Telemetry event sent when user debugs the file in the IW

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        return this.runFileInteractiveInternal(false);
    }

    @captureTelemetry(Telemetry.DebugFileInteractive)
    public async debugFileInteractive() {
        return this.runFileInteractiveInternal(true);
    }
```

</details>
<details>
  <summary>DATASCIENCE.DEBUG_STEP_OVER</summary>

## Description




 Telemetry event sent when user hits the `step over` button while debugging IW

## Properties


No properties for event


## Locations Used

[src/interactive-window/commands/commandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/commands/commandRegistry.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.DebugStepOver)
    private async debugStepOver(): Promise<void> {
        // Make sure that we are in debug mode
        if (this.debugService?.activeDebugSession) {
```

</details>
<details>
  <summary>DATASCIENCE.DEBUG_STOP</summary>

## Description




 Telemetry event sent when user hits the `stop` button while debugging IW

## Properties


No properties for event


## Locations Used

[src/interactive-window/commands/commandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/commands/commandRegistry.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.DebugStop)
    private async debugStop(uri: Uri): Promise<void> {
        // Make sure that we are in debug mode
        if (this.debugService?.activeDebugSession && this.interactiveWindowProvider) {
```

</details>
<details>
  <summary>DATASCIENCE.DEBUGGING.CLICKED_ON_SETUP</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/debugger/debuggingManagerBase.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/debugger/debuggingManagerBase.ts)
```typescript
        );

        if (response === DataScience.setup()) {
            sendTelemetryEvent(DebuggingTelemetry.clickedOnSetup);
            this.appShell.openUrl(
                'https://github.com/microsoft/vscode-jupyter/wiki/Setting-Up-Run-by-Line-and-Debugging-for-Notebooks'
            );
```

</details>
<details>
  <summary>DATASCIENCE.DEBUGGING.CLICKED_RUN_AND_DEBUG_CELL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/debugger/debuggingManager.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/debugger/debuggingManager.ts)
```typescript
            }),

            this.commandManager.registerCommand(DSCommands.RunAndDebugCell, async (cell: NotebookCell | undefined) => {
                sendTelemetryEvent(DebuggingTelemetry.clickedRunAndDebugCell);
                const editor = this.vscNotebook.activeNotebookEditor;
                if (!cell) {
                    const range = editor?.selections[0];
```

</details>
<details>
  <summary>DATASCIENCE.DEBUGGING.CLICKED_RUNBYLINE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/debugger/debuggingManager.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/debugger/debuggingManager.ts)
```typescript
            }),

            this.commandManager.registerCommand(DSCommands.RunByLine, async (cell: NotebookCell | undefined) => {
                sendTelemetryEvent(DebuggingTelemetry.clickedRunByLine);
                const editor = this.vscNotebook.activeNotebookEditor;
                if (!cell) {
                    const range = editor?.selections[0];
```

</details>
<details>
  <summary>DATASCIENCE.DEBUGGING.CLOSED_MODAL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/debugger/debuggingManagerBase.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/debugger/debuggingManagerBase.ts)
```typescript
                'https://github.com/microsoft/vscode-jupyter/wiki/Setting-Up-Run-by-Line-and-Debugging-for-Notebooks'
            );
        } else {
            sendTelemetryEvent(DebuggingTelemetry.closedModal);
        }
    }
}
```

</details>
<details>
  <summary>DATASCIENCE.DEBUGGING.ENDED_SESSION</summary>

## Description


No description provided

## Properties

- 
        reason: 'normally' | 'onKernelDisposed' | 'onAnInterrupt' | 'onARestart' | 'withKeybinding';

## Locations Used

[src/notebooks/debugger/kernelDebugAdapterBase.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/debugger/kernelDebugAdapterBase.ts)
```typescript
                    if (!this.disconnected) {
                        debug.stopDebugging(this.session).then(noop, noop);
                        this.disconnect().ignoreErrors();
                        sendTelemetryEvent(DebuggingTelemetry.endedSession, undefined, { reason: 'onKernelDisposed' });
                    }
                })
            );
```


[src/notebooks/debugger/kernelDebugAdapterBase.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/debugger/kernelDebugAdapterBase.ts)
```typescript
                        cellStateChange.state === NotebookCellExecutionState.Idle &&
                        !this.disconnected
                    ) {
                        sendTelemetryEvent(DebuggingTelemetry.endedSession, undefined, { reason: 'normally' });
                        this.disconnect().ignoreErrors();
                    }
                },
```


[src/notebooks/debugger/debuggingManager.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/debugger/debuggingManager.ts)
```typescript
                if (editor) {
                    const controller = this.notebookToRunByLineController.get(editor.notebook);
                    if (controller) {
                        sendTelemetryEvent(DebuggingTelemetry.endedSession, undefined, {
                            reason: 'withKeybinding'
                        });
                        controller.stop();
```

</details>
<details>
  <summary>DATASCIENCE.DEBUGGING.IPYKERNEL6_STATUS</summary>

## Description


No description provided

## Properties

- 
        status: 'installed' | 'notInstalled';

## Locations Used

[src/notebooks/debugger/debuggingManagerBase.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/debugger/debuggingManagerBase.ts)
```typescript
            }

            const result = await isUsingIpykernel6OrLater(kernel);
            sendTelemetryEvent(DebuggingTelemetry.ipykernel6Status, undefined, {
                status: result === IpykernelCheckResult.Ok ? 'installed' : 'notInstalled'
            });
            return result;
```

</details>
<details>
  <summary>DATASCIENCE.DEBUGGING.SUCCESSFULLY_STARTED_IW_JUPYTER</summary>

## Description




 Telemetry sent when we have managed to successfully start the Interactive Window debugger using the Jupyter protocol.

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.DEBUGGING.SUCCESSFULLY_STARTED_RUN_AND_DEBUG_CELL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/debugger/debugCellControllers.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/debugger/debugCellControllers.ts)
```typescript
        private readonly kernel: IKernel,
        private readonly commandManager: ICommandManager
    ) {
        sendTelemetryEvent(DebuggingTelemetry.successfullyStartedRunAndDebugCell);
    }

    public async willSendEvent(_msg: DebugProtocolMessage): Promise<boolean> {
```


[src/interactive-window/debugger/jupyter/debugCellControllers.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/debugger/jupyter/debugCellControllers.ts)
```typescript
        public readonly debugCell: NotebookCell,
        private readonly kernel: IKernel
    ) {
        sendTelemetryEvent(DebuggingTelemetry.successfullyStartedRunAndDebugCell);
    }

    public async willSendEvent(_msg: DebugProtocolMessage): Promise<boolean> {
```

</details>
<details>
  <summary>DATASCIENCE.DEBUGGING.SUCCESSFULLY_STARTED_RUNBYLINE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/debugger/runByLineController.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/debugger/runByLineController.ts)
```typescript
        private readonly kernel: IKernel,
        private readonly settings: IConfigurationService
    ) {
        sendTelemetryEvent(DebuggingTelemetry.successfullyStartedRunByLine);
    }

    public continue(): void {
```

</details>
<details>
  <summary>DATASCIENCE.DEBUGPY_INSTALL_CANCELLED</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.DEBUGPY_INSTALL_FAILED</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.DEBUGPY_PROMPT_TO_INSTALL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.DEBUGPY_SUCCESSFULLY_INSTALLED</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.DELETE_ALL_CELLS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.DELETE_CELL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.DISABLE_INTERACTIVE_SHIFT_ENTER</summary>

## Description




 Disables using Shift+Enter to run code in IW (this is in response to the prompt recommending users to enable this to use the IW)

## Properties


No properties for event


## Locations Used

[src/interactive-window/shiftEnterBanner.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/shiftEnterBanner.ts)
```typescript
        );
    }

    @captureTelemetry(Telemetry.DisableInteractiveShiftEnter)
    public async disableInteractiveShiftEnter(): Promise<void> {
        await this.configuration.updateSetting(
            'sendSelectionToInteractiveWindow',
```


[src/test/datascience/shiftEnterBanner.unit.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/datascience/shiftEnterBanner.unit.test.ts)
```typescript

        expect(Reporter.eventNames).to.deep.equal([
            Telemetry.ShiftEnterBannerShown,
            Telemetry.DisableInteractiveShiftEnter
        ]);
    });
});
```

</details>
<details>
  <summary>DATASCIENCE.ENABLE_INTERACTIVE_SHIFT_ENTER</summary>

## Description




 Disables using Shift+Enter to run code in IW (this is in response to the prompt recommending users to enable this to use the IW)

## Properties


No properties for event


## Locations Used

[src/interactive-window/shiftEnterBanner.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/shiftEnterBanner.ts)
```typescript
        await this.disableBanner();
    }

    @captureTelemetry(Telemetry.EnableInteractiveShiftEnter)
    public async enableInteractiveShiftEnter(): Promise<void> {
        await this.configuration.updateSetting(
            'sendSelectionToInteractiveWindow',
```


[src/test/datascience/shiftEnterBanner.unit.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/datascience/shiftEnterBanner.unit.test.ts)
```typescript

        expect(Reporter.eventNames).to.deep.equal([
            Telemetry.ShiftEnterBannerShown,
            Telemetry.EnableInteractiveShiftEnter
        ]);
    });

```

</details>
<details>
  <summary>DATASCIENCE.ENTER_JUPYTER_URI</summary>

## Description




 Captures the telemetry when the Uri is manually entered by the user as part of the workflow when selecting a Kernel.

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
        await this.serverUriStorage.setUriToLocal();
    }

    @captureTelemetry(Telemetry.EnterJupyterURI)
    @traceDecoratorError('Failed to enter Jupyter Uri')
    public async setJupyterURIToRemote(userURI: string | undefined, ignoreValidation?: boolean): Promise<void> {
        // Double check this server can be connected to. Might need a password, might need a allowUnauthorized
```

</details>
<details>
  <summary>DATASCIENCE.EXECUTE_CELL</summary>

## Description




 Executes a cell, applies to IW and Notebook.
 Check the `resourceType` to determine whether its a Jupyter Notebook or IW.

## Properties


No properties for event


## Locations Used

[src/kernels/kernel.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernel.ts)
```typescript
    public async executeCell(cell: NotebookCell, codeOverride?: string): Promise<NotebookCellRunState> {
        traceCellMessage(cell, `kernel.executeCell, ${getDisplayPath(cell.notebook.uri)}`);
        initializeInteractiveOrNotebookTelemetryBasedOnUserAction(this.resourceUri, this.kernelConnectionMetadata);
        sendKernelTelemetryEvent(this.resourceUri, Telemetry.ExecuteCell);
        this.sendKernelStartedTelemetry();
        const stopWatch = new StopWatch();
        const sessionPromise = this.startJupyterSession();
```


[src/notebooks/controllers/vscodeNotebookController.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/vscodeNotebookController.ts)
```typescript
            return;
        }
        initializeInteractiveOrNotebookTelemetryBasedOnUserAction(notebook.uri, this.connection);
        sendKernelTelemetryEvent(notebook.uri, Telemetry.ExecuteCell);
        // Notebook is trusted. Continue to execute cells
        await Promise.all(cells.map((cell) => this.executeCell(notebook, cell)));
    }
```


[src/test/datascience/telemetry.vscode.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/datascience/telemetry.vscode.test.ts)
```typescript
        };

        // Right now this is the guaranteed list. Might want to expand this.
        assertEvent(Telemetry.ExecuteCell);
        assertEvent(Telemetry.OpenNotebookAll);
        assertEvent(Telemetry.NotebookStart);
    });
```

</details>
<details>
  <summary>DATASCIENCE.EXECUTE_CELL_TIME</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.EXPAND_ALL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.EXPORT_NOTEBOOK</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.EXPORT_NOTEBOOK_AS</summary>

## Description




 Called when user imports a Jupyter Notebook into a Python file.
 Command is `Jupyter: Import Jupyter Notebook`
 Basically user is exporting some jupyter notebook into a Python file or other.

## Properties


No properties for event


## Locations Used

[src/notebooks/export/exportFileOpener.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/export/exportFileOpener.ts)
```typescript
    public async openFile(format: ExportFormat, uri: Uri, openDirectly: boolean = false) {
        if (format === ExportFormat.python) {
            await this.openPythonFile(uri, openDirectly);
            sendTelemetryEvent(Telemetry.ExportNotebookAs, undefined, {
                format: format,
                successful: true,
                opened: true
```


[src/notebooks/export/exportFileOpener.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/export/exportFileOpener.ts)
```typescript
            });
        } else {
            const opened = await this.askOpenFile(uri, openDirectly);
            sendTelemetryEvent(Telemetry.ExportNotebookAs, undefined, {
                format: format,
                successful: true,
                opened: opened
```


[src/notebooks/export/fileConverter.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/export/fileConverter.ts)
```typescript
        }

        if (reporter.token.isCancellationRequested) {
            sendTelemetryEvent(Telemetry.ExportNotebookAs, undefined, { format: format, cancelled: true });
            return;
        }
    }
```

</details>
<details>
  <summary>DATASCIENCE.EXPORT_NOTEBOOK_AS_COMMAND</summary>

## Description




 Called when user exports a Jupyter Notebook or IW into a Python file, HTML, PDF, etc.
 Command is `Jupyter: Export to Python Script` or `Jupyter: Export to HTML`
 Basically user is exporting some jupyter notebook or IW into a Python file or other.

## Properties


No properties for event


## Locations Used

[src/standalone/import-export/exportCommands.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/import-export/exportCommands.ts)
```typescript
                this.controllerSelection.getSelected(sourceDocument)?.connection.interpreter ||
                this.controllerPreferred.getPreferred(sourceDocument)?.connection.interpreter;
            if (exportMethod) {
                sendTelemetryEvent(Telemetry.ExportNotebookAsCommand, undefined, { format: exportMethod });
            }
        }

```

</details>
<details>
  <summary>DATASCIENCE.EXPORT_NOTEBOOK_AS_FAILED</summary>

## Description




 Export fails

## Properties


No properties for event


## Locations Used

[src/notebooks/export/fileConverter.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/export/fileConverter.ts)
```typescript
            await this.performExport(format, sourceDocument, target, token, candidateInterpreter);
        } catch (e) {
            traceError('Export failed', e);
            sendTelemetryEvent(Telemetry.ExportNotebookAsFailed, undefined, { format: format });

            if (format === ExportFormat.pdf) {
                traceError(localize.DataScience.exportToPDFDependencyMessage());
```

</details>
<details>
  <summary>DATASCIENCE.EXPORT_PYTHON_FILE</summary>

## Description




 User exports a .py file with cells as a Jupyter Notebook.

## Properties


No properties for event


## Locations Used

[src/interactive-window/commands/commandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/commands/commandRegistry.ts)
```typescript
        return result;
    }

    @captureTelemetry(Telemetry.ExportPythonFileInteractive, undefined, false)
    private async exportFile(file: Uri): Promise<void> {
        const filePath = getFilePath(file);
        if (filePath && filePath.length > 0 && this.jupyterExporter) {
```

</details>
<details>
  <summary>DATASCIENCE.EXPORT_PYTHON_FILE_AND_OUTPUT</summary>

## Description




 User exports a .py file with cells along with the outputs from the current IW as a Jupyter Notebook.

## Properties


No properties for event


## Locations Used

[src/interactive-window/commands/commandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/commands/commandRegistry.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.ExportPythonFileAndOutputInteractive, undefined, false)
    private async exportFileAndOutput(file: Uri): Promise<Uri | undefined> {
        const filePath = getFilePath(file);
        if (
```

</details>
<details>
  <summary>DATASCIENCE.FAILED_SHOW_DATA_EXPLORER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/variablesView/variableView.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/variablesView/variableView.ts)
```typescript
            }
        } catch (e) {
            traceError(e);
            sendTelemetryEvent(Telemetry.FailedShowDataViewer);
            this.appShell.showErrorMessage(localize.DataScience.showDataViewerFail()).then(noop, noop);
        }
    }
```

</details>
<details>
  <summary>DATASCIENCE.FAILED_TO_CREATE_CONTROLLER</summary>

## Description



 Telemetry sent when we fail to create a Notebook Controller (an entry for the UI kernel list in Native Notebooks).

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/controllerRegistration.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/controllerRegistration.ts)
```typescript
            }
            // We know that this fails when we have xeus kernels installed (untill that's resolved thats one instance when we can have duplicates).
            sendTelemetryEvent(
                Telemetry.FailedToCreateNotebookController,
                undefined,
                { kind: metadata.kind },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
```

</details>
<details>
  <summary>DATASCIENCE.FAILED_TO_FIND_INTERPRETER_KERNEL_CONNECTION_FOR_INTERACTIVE</summary>

## Description




 Telemetry sent when we're unable to find a KernelSpec connection for Interactive window that can be started usig Python interpreter.

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.FAILED_TO_INSTALL_PANDAS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.FETCH_CONTROLLERS</summary>

## Description




 Telemetry sent when we have loaded some controllers.

## Properties


No properties for event


## Locations Used

[src/kernels/kernelFinder.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelFinder.ts)
```typescript
        const key = `${kind}:${useCache}`;
        if (this.startTimeForFetching && !this.fetchingTelemetrySent.has(key)) {
            this.fetchingTelemetrySent.add(key);
            sendTelemetryEvent(Telemetry.FetchControllers, this.startTimeForFetching.elapsedTime, {
                cached: useCache === 'useCache',
                kind
            });
```

</details>
<details>
  <summary>DATASCIENCE.GET_PASSWORD_ATTEMPT</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/jupyterPasswordConnect.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterPasswordConnect.ts)
```typescript
        this.serverUriStorage.onDidRemoveUris(this.onDidRemoveUris, this, this.disposables);
    }

    @captureTelemetry(Telemetry.GetPasswordAttempt)
    public getPasswordConnectionInfo(url: string): Promise<IJupyterPasswordConnectInfo | undefined> {
        if (!url || url.length < 1) {
            return Promise.resolve(undefined);
```

</details>
<details>
  <summary>DATASCIENCE.GOTO_NEXT_CELL_IN_FILE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        });
    }

    @captureTelemetry(Telemetry.GotoNextCellInFile)
    public gotoNextCell() {
        const editor = this.documentManager.activeTextEditor;
        if (!editor || !editor.selection) {
```

</details>
<details>
  <summary>DATASCIENCE.GOTO_PREV_CELL_IN_FILE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.GotoPrevCellInFile)
    public gotoPreviousCell() {
        const editor = this.documentManager.activeTextEditor;
        if (!editor || !editor.selection) {
```

</details>
<details>
  <summary>DATASCIENCE.GOTO_SOURCE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.IMPORT_NOTEBOOK</summary>

## Description




 Called when user imports a Jupyter Notebook into a Python file.
 Command is `Jupyter: Import Jupyter Notebook`
 Basically user is exporting some jupyter notebook into a Python file.

## Properties


No properties for event


## Locations Used

[src/telemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/telemetry.ts)
```typescript
    [Telemetry.GetPasswordSuccess]: never | undefined;
    [Telemetry.GotoSourceCode]: never | undefined;
    [Telemetry.HiddenCellTime]: never | undefined;
    [Telemetry.ImportNotebook]: { scope: 'command' | 'file' };
    /**
     * User interrupts a cell
     * Identical to `Telemetry.InterruptJupyterTime`
```


[src/interactive-window/commands/commandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/commands/commandRegistry.ts)
```typescript
        return this.statusProvider.waitWithStatus(promise, message, undefined, canceled);
    }

    @captureTelemetry(Telemetry.ImportNotebook, { scope: 'command' }, false)
    private async importNotebook(): Promise<void> {
        const filtersKey = DataScience.importDialogFilter();
        const filtersObject: { [name: string]: string[] } = {};
```


[src/interactive-window/commands/commandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/commands/commandRegistry.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.ImportNotebook, { scope: 'file' }, false)
    private async importNotebookOnFile(file: Uri): Promise<void> {
        const filepath = getFilePath(file);
        if (filepath && filepath.length > 0) {
```

</details>
<details>
  <summary>DATASCIENCE.IMPORT_NOTEBOOK</summary>

## Description


No description provided

## Properties

-  scope: 'command' | 'file'

## Locations Used

[src/telemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/telemetry.ts)
```typescript
     * Command is `Jupyter: Import Jupyter Notebook`
     * Basically user is exporting some jupyter notebook into a Python file.
     */
    [Telemetry.ImportNotebook]: { scope: 'command' | 'file' };
    /**
     * Called when user exports a Jupyter Notebook or IW into a Python file, HTML, PDF, etc.
     * Command is `Jupyter: Export to Python Script` or `Jupyter: Export to HTML`
```


[src/interactive-window/commands/commandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/commands/commandRegistry.ts)
```typescript
        return this.statusProvider.waitWithStatus(promise, message, undefined, canceled);
    }

    @captureTelemetry(Telemetry.ImportNotebook, { scope: 'command' }, false)
    private async importNotebook(): Promise<void> {
        const filtersKey = DataScience.importDialogFilter();
        const filtersObject: { [name: string]: string[] } = {};
```


[src/interactive-window/commands/commandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/commands/commandRegistry.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.ImportNotebook, { scope: 'file' }, false)
    private async importNotebookOnFile(file: Uri): Promise<void> {
        const filepath = getFilePath(file);
        if (filepath && filepath.length > 0) {
```

</details>
<details>
  <summary>DATASCIENCE.INTERACTIVE_WINDOW_DEBUG_SETUP_CODE_FAILURE</summary>

## Description


No description provided

## Properties

- 
        ename: string;
- 
        evalue: string;

## Locations Used

[src/interactive-window/debugger/interactiveWindowDebugger.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/debugger/interactiveWindowDebugger.node.ts)
```typescript
        executeSilently(kernel.session, this.tracingEnableCode, {
            traceErrors: true,
            traceErrorsMessage: 'Execute_request failure enabling tracing code for IW',
            telemetryName: Telemetry.InteractiveWindowDebugSetupCodeFailure
        }).ignoreErrors();
    }

```


[src/interactive-window/debugger/interactiveWindowDebugger.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/debugger/interactiveWindowDebugger.node.ts)
```typescript
        executeSilently(kernel.session, this.tracingDisableCode, {
            traceErrors: true,
            traceErrorsMessage: 'Execute_request failure disabling tracing code for IW',
            telemetryName: Telemetry.InteractiveWindowDebugSetupCodeFailure
        }).ignoreErrors();
    }

```


[src/interactive-window/debugger/interactiveWindowDebugger.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/debugger/interactiveWindowDebugger.node.ts)
```typescript
                const importResults = await executeSilently(kernel.session, this.waitForDebugClientCode, {
                    traceErrors: true,
                    traceErrorsMessage: 'Execute_request failure starting debug session for IW',
                    telemetryName: Telemetry.InteractiveWindowDebugSetupCodeFailure
                });
                if (importResults.some((item) => item.output_type === 'error')) {
                    traceWarning(`${this.debuggerPackage} not found in path.`);
```


[src/interactive-window/debugger/interactiveWindowDebugger.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/debugger/interactiveWindowDebugger.node.ts)
```typescript
                      {
                          traceErrors: true,
                          traceErrorsMessage: 'Execute_request failure appending debugger paths for IW',
                          telemetryName: Telemetry.InteractiveWindowDebugSetupCodeFailure
                      }
                  )
                : [];
```


[src/interactive-window/debugger/interactiveWindowDebugger.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/debugger/interactiveWindowDebugger.node.ts)
```typescript
            ? await executeSilently(kernel.session, this.enableDebuggerCode, {
                  traceErrors: true,
                  traceErrorsMessage: 'Execute_request failure enabling debugging for IW',
                  telemetryName: Telemetry.InteractiveWindowDebugSetupCodeFailure
              })
            : [];

```

</details>
<details>
  <summary>DATASCIENCE.INTERRUPT</summary>

## Description




 User interrupts a cell
 Identical to `Telemetry.InterruptJupyterTime`

## Properties


No properties for event


## Locations Used

[src/kernels/execution/kernelExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/execution/kernelExecution.ts)
```typescript
        traceInfoIfCI(`Dispose KernelExecution`);
        this.disposables.forEach((d) => d.dispose());
    }
    @captureTelemetry(Telemetry.Interrupt)
    @captureTelemetry(Telemetry.InterruptJupyterTime)
    private async interruptExecution(
        session: IKernelConnectionSession,
```

</details>
<details>
  <summary>DATASCIENCE.JUPYTER_COMMAND_SEARCH</summary>

## Description


No description provided

## Properties

- 
        where: 'activeInterpreter' | 'otherInterpreter' | 'path' | 'nowhere';
- 
        command: JupyterCommands;

## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.JUPYTER_KERNEL_API_ACCESS</summary>

## Description


No description provided

## Properties

- 
        extensionId: string;
- 
        allowed: 'yes' | 'no';

## Locations Used

[src/standalone/api/apiAccessService.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/api/apiAccessService.ts)
```typescript
        const extensionPermissions = this.globalState.get<ApiExtensionInfo | undefined>(API_ACCESS_GLOBAL_KEY);
        const extensionPermission = extensionPermissions?.find((item) => item.extensionId === info.extensionId);
        if (extensionPermission) {
            sendTelemetryEvent(Telemetry.JupyterKernelApiAccess, undefined, {
                extensionId: info.extensionId,
                allowed: extensionPermission.allowed
            });
```


[src/standalone/api/apiAccessService.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/api/apiAccessService.ts)
```typescript
                    return this.globalState.update(API_ACCESS_GLOBAL_KEY, extensionPermissions);
                })
                .then(noop, noop);
            sendTelemetryEvent(Telemetry.JupyterKernelApiAccess, undefined, {
                extensionId: info.extensionId,
                allowed: allow ? 'yes' : 'no'
            });
```

</details>
<details>
  <summary>DATASCIENCE.JUPYTER_KERNEL_API_USAGE</summary>

## Description


No description provided

## Properties

- 
        extensionId: string;
- 
        pemUsed: keyof IExportedKernelService;

## Locations Used

[src/standalone/api/kernelApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/api/kernelApi.ts)
```typescript
        KernelConnectionMetadata
    >();
    public get onDidChangeKernelSpecifications(): Event<void> {
        sendTelemetryEvent(Telemetry.JupyterKernelApiUsage, undefined, {
            extensionId: this.callingExtensionId,
            pemUsed: 'onDidChangeKernelSpecifications'
        });
```


[src/standalone/api/kernelApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/api/kernelApi.ts)
```typescript
        return this._onDidChangeKernelSpecifications.event;
    }
    public get onDidChangeKernels(): Event<void> {
        sendTelemetryEvent(Telemetry.JupyterKernelApiUsage, undefined, {
            extensionId: this.callingExtensionId,
            pemUsed: 'onDidChangeKernels'
        });
```


[src/standalone/api/kernelApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/api/kernelApi.ts)
```typescript
        this.controllerLoader.refreshed(() => this._onDidChangeKernelSpecifications.fire(), this, disposables);
    }
    async getKernelSpecifications(refresh?: boolean): Promise<KernelConnectionMetadata[]> {
        sendTelemetryEvent(Telemetry.JupyterKernelApiUsage, undefined, {
            extensionId: this.callingExtensionId,
            pemUsed: 'getKernelSpecifications'
        });
```


[src/standalone/api/kernelApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/api/kernelApi.ts)
```typescript
        return items.map((item) => this.translateKernelConnectionMetadataToExportedType(item.connection));
    }
    getActiveKernels(): { metadata: KernelConnectionMetadata; uri: Uri | undefined }[] {
        sendTelemetryEvent(Telemetry.JupyterKernelApiUsage, undefined, {
            extensionId: this.callingExtensionId,
            pemUsed: 'getActiveKernels'
        });
```


[src/standalone/api/kernelApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/api/kernelApi.ts)
```typescript
        return kernels;
    }
    getKernel(uri: Uri): { metadata: KernelConnectionMetadata; connection: IKernelConnectionInfo } | undefined {
        sendTelemetryEvent(Telemetry.JupyterKernelApiUsage, undefined, {
            extensionId: this.callingExtensionId,
            pemUsed: 'getKernel'
        });
```


[src/standalone/api/kernelApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/api/kernelApi.ts)
```typescript
        }
    }
    async startKernel(spec: KernelConnectionMetadata, uri: Uri): Promise<IKernelConnectionInfo> {
        sendTelemetryEvent(Telemetry.JupyterKernelApiUsage, undefined, {
            extensionId: this.callingExtensionId,
            pemUsed: 'startKernel'
        });
```


[src/standalone/api/kernelApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/api/kernelApi.ts)
```typescript
        return this.startOrConnect(spec, uri);
    }
    async connect(spec: ActiveKernel, uri: Uri): Promise<IKernelConnectionInfo> {
        sendTelemetryEvent(Telemetry.JupyterKernelApiUsage, undefined, {
            extensionId: this.callingExtensionId,
            pemUsed: 'connect'
        });
```

</details>
<details>
  <summary>DATASCIENCE.JUPYTER_KERNEL_FILTER_USED</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/kernelFilter/kernelFilterUI.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/kernelFilter/kernelFilterUI.ts)
```typescript
                    .map((item) => item.connection)
                    .filter((item) => !selectedItems.has(item));
                this.kernelFilter.storeHiddenKernels(hiddenConnections.map((item) => item)).then(noop, noop);
                sendTelemetryEvent(Telemetry.JupyterKernelFilterUsed);
            },
            this,
            disposables
```

</details>
<details>
  <summary>DATASCIENCE.JUPYTER_KERNEL_HIDDEN_VIA_FILTER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/kernelFilter/kernelFilterService.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/kernelFilter/kernelFilterService.ts)
```typescript
        });

        if (hidden) {
            sendTelemetryEvent(Telemetry.JupyterKernelHiddenViaFilter);
        }
        return hidden;
    }
```

</details>
<details>
  <summary>DATASCIENCE.JUPYTER_NOT_INSTALLED_ERROR_SHOWN</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts)
```typescript
                moduleName: ProductNames.get(Product.jupyter)!,
                pythonEnvType: interpreter.envType
            });
            sendTelemetryEvent(Telemetry.JupyterNotInstalledErrorShown);
            const selection = await this.applicationShell.showErrorMessage(
                message,
                { modal: true },
```

</details>
<details>
  <summary>DATASCIENCE.KERNEL_CRASH</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/kernelCrashMonitor.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelCrashMonitor.ts)
```typescript
    }
    private async endCellAndDisplayErrorsInCell(kernel: IKernel) {
        const lastExecutedCell = this.lastExecutedCellPerKernel.get(kernel);
        sendKernelTelemetryEvent(kernel.resourceUri, Telemetry.KernelCrash);
        if (!lastExecutedCell) {
            return;
        }
```


[src/kernels/kernelAutoReConnectFailedMonitor.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelAutoReConnectFailedMonitor.ts)
```typescript
        if (kernel.disposed || kernel.disposing) {
            return;
        }
        sendKernelTelemetryEvent(kernel.resourceUri, Telemetry.KernelCrash);

        const message = isLocalConnection(kernel.kernelConnectionMetadata)
            ? DataScience.kernelDisconnected().format(
```

</details>
<details>
  <summary>DATASCIENCE.KERNEL_SPEC_LANGUAGE</summary>

## Description


No description provided

## Properties

- 
        /**
         * Language of the kernelSpec.
         */
        language: string;
- 
        /**
         * Whether this is a local or remote kernel.
         */
        kind: 'local' | 'remote';
- 
        /**
         * Whether shell is used to start the kernel. E.g. `"/bin/sh"` is used in the argv of the kernelSpec.
         * OCaml is one such kernel.
         */
        usesShell?: boolean;

## Locations Used

[src/kernels/raw/finder/helper.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/finder/helper.ts)
```typescript
        arg = arg.toLowerCase();
        return shellScripts.some((shell) => arg.includes(shell));
    });
    sendTelemetryEvent(Telemetry.KernelSpecLanguage, undefined, {
        language: getTelemetrySafeLanguage(kernelSpec.language),
        kind,
        usesShell
```

</details>
<details>
  <summary>DATASCIENCE.KERNEL_STARTUP_CODE_FAILURE</summary>

## Description


No description provided

## Properties

- 
        ename: string;
- 
        evalue: string;

## Locations Used

[src/kernels/kernel.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernel.ts)
```typescript
        await this.executeSilently(session, startupCode, {
            traceErrors: true,
            traceErrorsMessage: 'Error executing jupyter extension internal startup code',
            telemetryName: Telemetry.KernelStartupCodeFailure
        });
        if (this.kernelConnectionMetadata.kind !== 'connectToLiveRemoteKernel') {
            // Run user specified startup commands
```

</details>
<details>
  <summary>DATASCIENCE.NATIVE.CONVERT_NOTEBOOK_TO_PYTHON</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.CREATE_NEW_NOTEBOOK</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/notebookEditorProvider.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/notebookEditorProvider.ts)
```typescript
export class NotebookEditorProvider implements INotebookEditorProvider {
    private providers: Set<IEmbedNotebookEditorProvider> = new Set();
    constructor(@inject(IVSCodeNotebook) private readonly vscodeNotebook: IVSCodeNotebook) {}
    @captureTelemetry(Telemetry.CreateNewNotebook, undefined, false)
    public async createNew(options?: { contents?: string; defaultCellLanguage: string }): Promise<void> {
        // contents will be ignored
        const language = options?.defaultCellLanguage ?? PYTHON_LANGUAGE;
```

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.ARROW_DOWN</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.ARROW_UP</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.CHANGE_TO_CODE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.CHANGE_TO_MARKDOWN</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.DELETE_CELL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.INSERT_ABOVE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.INSERT_BELOW</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.REDO</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.RUN</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.RUN_AND_ADD</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.RUN_AND_MOVE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.SAVE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.TOGGLE_LINE_NUMBERS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.TOGGLE_OUTPUT</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.UNDO</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.UNFOCUS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.ADD_TO_END</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.CHANGE_TO_CODE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.CHANGE_TO_MARKDOWN</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.DELETE_CELL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.INSERT_BELOW</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.MOVE_CELL_DOWN</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.MOVE_CELL_UP</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.RUN</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.RUN_ABOVE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.RUN_ALL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.RUN_BELOW</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.SAVE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.SELECT_KERNEL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.SELECT_SERVER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.TOGGLE_VARIABLE_EXPLORER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.OPEN_NOTEBOOK</summary>

## Description


No description provided

## Properties

-  scope: 'command' | 'file'

## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.OPEN_NOTEBOOK_ALL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/activation.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/activation.node.ts)
```typescript
        }
        this.notebookOpened = true;
        this.PreWarmDaemonPool().ignoreErrors();
        sendTelemetryEvent(Telemetry.OpenNotebookAll);

        if (!this.rawSupported.isSupported && this.extensionChecker.isPythonExtensionInstalled) {
            // Warm up our selected interpreter for the extension
```


[src/test/datascience/telemetry.vscode.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/datascience/telemetry.vscode.test.ts)
```typescript

        // Right now this is the guaranteed list. Might want to expand this.
        assertEvent(Telemetry.ExecuteCell);
        assertEvent(Telemetry.OpenNotebookAll);
        assertEvent(Telemetry.NotebookStart);
    });
    test('Run interactive window', async () => {
```

</details>
<details>
  <summary>DATASCIENCE.NATIVE.OPEN_NOTEBOOK_SELECTION</summary>

## Description




 Telemetry sent with details of the selection of the quick pick for when user creates new notebook.
 This only applies with other extensions like .NET registers with us.

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.OPEN_NOTEBOOK_SELECTION_REGISTERED</summary>

## Description


No description provided

## Properties

- 
        /**
         * The id of the extension registering with us to be displayed the dropdown list for notebook creation.
         */
        extensionId: string;

## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NO_ACTIVE_KERNEL_SESSION</summary>

## Description




 Useful when we need an active kernel session in order to execute commands silently.
 Used by the dataViewerDependencyService.

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/kernelDataViewerDependencyImplementation.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/kernelDataViewerDependencyImplementation.ts)
```typescript
        sendTelemetryEvent(Telemetry.DataViewerUsingKernel);

        if (!kernelHasSession(kernel)) {
            sendTelemetryEvent(Telemetry.NoActiveKernelSession);
            throw new Error('No no active kernel session.');
        }

```

</details>
<details>
  <summary>DATASCIENCE.NOTEBOOK_INTERRUPT</summary>

## Description




 Total time taken to interrupt a kernel
 Check the `resourceType` to determine whether its a Jupyter Notebook or IW.

## Properties


No properties for event


## Locations Used

[src/kernels/telemetry/sendKernelTelemetryEvent.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/telemetry/sendKernelTelemetryEvent.ts)
```typescript
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function resetData(resource: Resource, eventName: string, properties: any) {
    // Once we have successfully interrupted, clear the interrupt counter.
    if (eventName === Telemetry.NotebookInterrupt) {
        let kv: Pick<IEventNamePropertyMapping, Telemetry.NotebookInterrupt>;
        const data: undefined | typeof kv[Telemetry.NotebookInterrupt] = properties;
        // Check result to determine if success.
```


[src/kernels/telemetry/sendKernelTelemetryEvent.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/telemetry/sendKernelTelemetryEvent.ts)
```typescript
function resetData(resource: Resource, eventName: string, properties: any) {
    // Once we have successfully interrupted, clear the interrupt counter.
    if (eventName === Telemetry.NotebookInterrupt) {
        let kv: Pick<IEventNamePropertyMapping, Telemetry.NotebookInterrupt>;
        const data: undefined | typeof kv[Telemetry.NotebookInterrupt] = properties;
        // Check result to determine if success.
        if (data && 'result' in data && data.result === InterruptResult.Success) {
```


[src/kernels/telemetry/sendKernelTelemetryEvent.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/telemetry/sendKernelTelemetryEvent.ts)
```typescript
    // Once we have successfully interrupted, clear the interrupt counter.
    if (eventName === Telemetry.NotebookInterrupt) {
        let kv: Pick<IEventNamePropertyMapping, Telemetry.NotebookInterrupt>;
        const data: undefined | typeof kv[Telemetry.NotebookInterrupt] = properties;
        // Check result to determine if success.
        if (data && 'result' in data && data.result === InterruptResult.Success) {
            clearInterruptCounter(resource);
```


[src/kernels/execution/kernelExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/execution/kernelExecution.ts)
```typescript
                // Otherwise a real error occurred.
                sendKernelTelemetryEvent(
                    this.kernel.resourceUri,
                    Telemetry.NotebookInterrupt,
                    stopWatch.elapsedTime,
                    undefined,
                    exc
```


[src/kernels/execution/kernelExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/execution/kernelExecution.ts)
```typescript
        })();

        return promise.then((result) => {
            sendKernelTelemetryEvent(this.kernel.resourceUri, Telemetry.NotebookInterrupt, stopWatch.elapsedTime, {
                result
            });
            return result;
```

</details>
<details>
  <summary>DATASCIENCE.NOTEBOOK_LANGUAGE</summary>

## Description




 Telemetry event sent to indicate the language used in a notebook

 @type { language: string }
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

[src/notebooks/telemetry/notebookOrKernelLanguageTelemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/telemetry/notebookOrKernelLanguageTelemetry.ts)
```typescript
import { getTelemetrySafeLanguage } from '../../platform/telemetry/helpers';

export function sendNotebookOrKernelLanguageTelemetry(
    telemetryEvent: Telemetry.SwitchToExistingKernel | Telemetry.NotebookLanguage,
    language?: string
) {
    language = getTelemetrySafeLanguage(language);
```

</details>
<details>
  <summary>DATASCIENCE.NOTEBOOK_RESTART</summary>

## Description




 Restarts the Kernel.
 Check the `resourceType` to determine whether its a Jupyter Notebook or IW.

## Properties


No properties for event


## Locations Used

[src/kernels/telemetry/sendKernelTelemetryEvent.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/telemetry/sendKernelTelemetryEvent.ts)
```typescript
        }
    }
    // Once we have successfully restarted, clear the interrupt counter.
    if (eventName === Telemetry.NotebookRestart) {
        let kv: Pick<IEventNamePropertyMapping, Telemetry.NotebookRestart>;
        const data: undefined | typeof kv[Telemetry.NotebookRestart] = properties;
        // For restart to be successful, we should not have `failed`
```


[src/kernels/telemetry/sendKernelTelemetryEvent.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/telemetry/sendKernelTelemetryEvent.ts)
```typescript
    }
    // Once we have successfully restarted, clear the interrupt counter.
    if (eventName === Telemetry.NotebookRestart) {
        let kv: Pick<IEventNamePropertyMapping, Telemetry.NotebookRestart>;
        const data: undefined | typeof kv[Telemetry.NotebookRestart] = properties;
        // For restart to be successful, we should not have `failed`
        const failed = data && 'failed' in data ? data.failed : false;
```


[src/kernels/telemetry/sendKernelTelemetryEvent.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/telemetry/sendKernelTelemetryEvent.ts)
```typescript
    // Once we have successfully restarted, clear the interrupt counter.
    if (eventName === Telemetry.NotebookRestart) {
        let kv: Pick<IEventNamePropertyMapping, Telemetry.NotebookRestart>;
        const data: undefined | typeof kv[Telemetry.NotebookRestart] = properties;
        // For restart to be successful, we should not have `failed`
        const failed = data && 'failed' in data ? data.failed : false;
        if (!failed) {
```


[src/kernels/common/baseJupyterSession.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/common/baseJupyterSession.ts)
```typescript
        if (this.session?.isRemoteSession && this.session.kernel) {
            const stopWatch = new StopWatch();
            await this.session.kernel.restart();
            sendKernelTelemetryEvent(this.resource, Telemetry.NotebookRestart, stopWatch.elapsedTime, {
                startTimeOnly: true
            });
            this.setSession(this.session, true);
```


[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
            () => this.postStartRawSession(options, process)
        );
        if (options.purpose === 'restart') {
            sendKernelTelemetryWhenDone(this.resource, Telemetry.NotebookRestart, promise, false, {
                startTimeOnly: true
            });
        }
```


[src/kernels/jupyter/session/jupyterSession.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/session/jupyterSession.ts)
```typescript
            const stopWatch = new StopWatch();
            result = await this.createSession({ token: cancelToken, ui });
            await this.waitForIdleOnSession(result, this.idleTimeout, cancelToken);
            sendKernelTelemetryEvent(this.resource, Telemetry.NotebookRestart, stopWatch.elapsedTime, {
                startTimeOnly: true
            });
            return result;
```


[src/kernels/kernel.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernel.ts)
```typescript
            await (this._jupyterSessionPromise
                ? this.kernelExecution.restart(this._jupyterSessionPromise)
                : this.start(new DisplayOptions(false)));
            sendKernelTelemetryEvent(this.resourceUri, Telemetry.NotebookRestart, stopWatch.elapsedTime);
        } catch (ex) {
            traceError(`Restart failed ${getDisplayPath(this.uri)}`, ex);
            this._ignoreJupyterSessionDisposedErrors = true;
```


[src/kernels/kernel.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernel.ts)
```typescript
            this._jupyterSessionPromise = undefined;
            // If we get a kernel promise failure, then restarting timed out. Just shutdown and restart the entire server.
            // Note, this code might not be necessary, as such an error is thrown only when interrupting a kernel times out.
            sendKernelTelemetryEvent(this.resourceUri, Telemetry.NotebookRestart, stopWatch.elapsedTime, undefined, ex);
            await session?.dispose().catch(noop);
            this._ignoreJupyterSessionDisposedErrors = false;
            throw ex;
```

</details>
<details>
  <summary>DATASCIENCE.NOTEBOOK_START</summary>

## Description




 Starts a kernel, applies to IW and Notebook.
 Check the `resourceType` to determine whether its a Jupyter Notebook or IW.

## Properties


No properties for event


## Locations Used

[src/kernels/telemetry/sendKernelTelemetryEvent.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/telemetry/sendKernelTelemetryEvent.ts)
```typescript

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function incrementStartFailureCount(resource: Resource, eventName: any, properties: any) {
    if (eventName === Telemetry.NotebookStart) {
        let kv: Pick<IEventNamePropertyMapping, Telemetry.NotebookStart>;
        const data: undefined | typeof kv[Telemetry.NotebookStart] = properties;
        // Check start failed.
```


[src/kernels/telemetry/sendKernelTelemetryEvent.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/telemetry/sendKernelTelemetryEvent.ts)
```typescript
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function incrementStartFailureCount(resource: Resource, eventName: any, properties: any) {
    if (eventName === Telemetry.NotebookStart) {
        let kv: Pick<IEventNamePropertyMapping, Telemetry.NotebookStart>;
        const data: undefined | typeof kv[Telemetry.NotebookStart] = properties;
        // Check start failed.
        if (data && 'failed' in data && data.failed) {
```


[src/kernels/telemetry/sendKernelTelemetryEvent.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/telemetry/sendKernelTelemetryEvent.ts)
```typescript
function incrementStartFailureCount(resource: Resource, eventName: any, properties: any) {
    if (eventName === Telemetry.NotebookStart) {
        let kv: Pick<IEventNamePropertyMapping, Telemetry.NotebookStart>;
        const data: undefined | typeof kv[Telemetry.NotebookStart] = properties;
        // Check start failed.
        if (data && 'failed' in data && data.failed) {
            trackKernelResourceInformation(resource, { startFailed: true });
```


[src/kernels/errors/kernelErrorHandler.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/errors/kernelErrorHandler.ts)
```typescript
        }
        this.handledKernelErrors.add(err);
        if (errorContext === 'start') {
            sendKernelTelemetryWhenDone(resource, Telemetry.NotebookStart, Promise.reject(err), true, {
                disableUI: false,
                failureCategory
            });
```


[src/kernels/kernel.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernel.ts)
```typescript
        this.uiWasDisabledWhenKernelStartupTelemetryWasLastSent = this.startupUI.disableUI === true;
        // The corresponding failure telemetry property for the `Telemetry.NotebookStart` event will be sent in the Error Handler,
        // after we analyze the error.
        sendKernelTelemetryEvent(this.resourceUri, Telemetry.NotebookStart, undefined, {
            disableUI: this.startupUI.disableUI
        });
    }
```


[src/test/datascience/telemetry.vscode.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/datascience/telemetry.vscode.test.ts)
```typescript
        // Right now this is the guaranteed list. Might want to expand this.
        assertEvent(Telemetry.ExecuteCell);
        assertEvent(Telemetry.OpenNotebookAll);
        assertEvent(Telemetry.NotebookStart);
    });
    test('Run interactive window', async () => {
        const { activeInteractiveWindow } = await runNewPythonFile(
```

</details>
<details>
  <summary>DATASCIENCE.OPEN_PLOT_VIEWER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/plotting/plotViewerProvider.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/plotting/plotViewerProvider.ts)
```typescript
            this.currentViewer = this.serviceContainer.get<IPlotViewer>(IPlotViewer);
            this.currentViewerClosed = this.currentViewer.closed(this.closedViewer);
            this.currentViewer.removed(this.removedPlot);
            sendTelemetryEvent(Telemetry.OpenPlotViewer);
            await this.currentViewer.show();
        }

```

</details>
<details>
  <summary>DATASCIENCE.OPENED_INTERACTIVE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.PYTHON_VARIABLE_FETCHING_CODE_FAILURE</summary>

## Description


No description provided

## Properties

- 
        ename: string;
- 
        evalue: string;

## Locations Used

[src/kernels/variables/pythonVariableRequester.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/variables/pythonVariableRequester.ts)
```typescript
            {
                traceErrors: true,
                traceErrorsMessage: 'Failure in execute_request for getDataFrameInfo',
                telemetryName: Telemetry.PythonVariableFetchingCodeFailure
            }
        );

```


[src/kernels/variables/pythonVariableRequester.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/variables/pythonVariableRequester.ts)
```typescript
            {
                traceErrors: true,
                traceErrorsMessage: 'Failure in execute_request for getDataFrameRows',
                telemetryName: Telemetry.PythonVariableFetchingCodeFailure
            }
        );

```


[src/kernels/variables/pythonVariableRequester.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/variables/pythonVariableRequester.ts)
```typescript
                    {
                        traceErrors: true,
                        traceErrorsMessage: 'Failure in execute_request for getVariableProperties',
                        telemetryName: Telemetry.PythonVariableFetchingCodeFailure
                    }
                );
                result = { ...result, ...this.deserializeJupyterResult(attributes) };
```


[src/kernels/variables/pythonVariableRequester.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/variables/pythonVariableRequester.ts)
```typescript
                {
                    traceErrors: true,
                    traceErrorsMessage: 'Failure in execute_request for getVariableNamesAndTypesFromKernel',
                    telemetryName: Telemetry.PythonVariableFetchingCodeFailure
                }
            );

```


[src/kernels/variables/pythonVariableRequester.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/variables/pythonVariableRequester.ts)
```typescript
            {
                traceErrors: true,
                traceErrorsMessage: 'Failure in execute_request for getFullVariable',
                telemetryName: Telemetry.PythonVariableFetchingCodeFailure
            }
        );

```

</details>
<details>
  <summary>DATASCIENCE.RECOMMENT_EXTENSION</summary>

## Description



 Telemetry sent when we recommend installing an extension.

## Properties

- 
        /**
         * Extension we recommended the user to install.
         */
        extensionId: string;
- 
        /**
         * `displayed` - If prompt was displayed
         * `dismissed` - If prompt was displayed & dismissed by the user
         * `ok` - If prompt was displayed & ok clicked by the user
         * `cancel` - If prompt was displayed & cancel clicked by the user
         * `doNotShowAgain` - If prompt was displayed & doNotShowAgain clicked by the user
         */
        action: 'displayed' | 'dismissed' | 'ok' | 'cancel' | 'doNotShowAgain';

## Locations Used

[src/standalone/recommendation/extensionRecommendation.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/recommendation/extensionRecommendation.node.ts)
```typescript
            `[${extensionInfo.displayName}](${extensionInfo.extensionLink})`,
            language
        );
        sendTelemetryEvent(Telemetry.RecommendExtension, undefined, { extensionId, action: 'displayed' });
        const selection = await this.appShell.showInformationMessage(
            message,
            Common.bannerLabelYes(),
```


[src/standalone/recommendation/extensionRecommendation.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/recommendation/extensionRecommendation.node.ts)
```typescript
        );
        switch (selection) {
            case Common.bannerLabelYes(): {
                sendTelemetryEvent(Telemetry.RecommendExtension, undefined, { extensionId, action: 'ok' });
                this.commandManager.executeCommand('extension.open', extensionId).then(noop, noop);
                break;
            }
```


[src/standalone/recommendation/extensionRecommendation.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/recommendation/extensionRecommendation.node.ts)
```typescript
                break;
            }
            case Common.bannerLabelNo(): {
                sendTelemetryEvent(Telemetry.RecommendExtension, undefined, { extensionId, action: 'cancel' });
                break;
            }
            case Common.doNotShowAgain(): {
```


[src/standalone/recommendation/extensionRecommendation.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/recommendation/extensionRecommendation.node.ts)
```typescript
                break;
            }
            case Common.doNotShowAgain(): {
                sendTelemetryEvent(Telemetry.RecommendExtension, undefined, { extensionId, action: 'doNotShowAgain' });
                const list = this.globalMemento.get<string[]>(mementoKeyToNeverPromptExtensionAgain, []);
                if (!list.includes(extensionId)) {
                    list.push(extensionId);
```


[src/standalone/recommendation/extensionRecommendation.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/recommendation/extensionRecommendation.node.ts)
```typescript
                break;
            }
            default:
                sendTelemetryEvent(Telemetry.RecommendExtension, undefined, { extensionId, action: 'dismissed' });
        }
    }
}
```

</details>
<details>
  <summary>DATASCIENCE.REDO</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.REFRESH_DATA_VIEWER</summary>

## Description




 Sent when the jupyter.refreshDataViewer command is invoked

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/dataViewer.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/dataViewer.ts)
```typescript

            case DataViewerMessages.RefreshDataViewer:
                this.refreshData().ignoreErrors();
                void sendTelemetryEvent(Telemetry.RefreshDataViewer);
                break;

            case DataViewerMessages.SliceEnablementStateChanged:
```

</details>
<details>
  <summary>DATASCIENCE.RESTART_KERNEL_COMMAND</summary>

## Description




 Telemetry event sent when IW or Notebook is restarted.

## Properties


No properties for event


## Locations Used

[src/notebooks/notebookCommandListener.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/notebookCommandListener.ts)
```typescript
        const kernel = this.kernelProvider.get(document);

        if (kernel) {
            sendKernelTelemetryEvent(kernel.resourceUri, Telemetry.RestartKernelCommand);
            trackKernelResourceInformation(kernel.resourceUri, { restartKernel: true });
            if (await this.shouldAskForRestart(document.uri)) {
                // Ask the user if they want us to restart or not.
```

</details>
<details>
  <summary>DATASCIENCE.RUN_ADD_EMPTY_CELL_TO_BOTTOM</summary>

## Description




 Misc

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.RUN_ALL_CELLS</summary>

## Description




 Run all Cell Commands in Interactive Python

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        this.closeDocumentDisposable?.dispose(); // NOSONAR
        this.updateRequiredDisposable?.dispose(); // NOSONAR
    }
    @captureTelemetry(Telemetry.RunAllCells)
    public async runAllCells() {
        const iw = await this.getActiveInteractiveWindow();
        const runCellCommands = this.codeLenses.filter(
```

</details>
<details>
  <summary>DATASCIENCE.RUN_ALL_CELLS_ABOVE</summary>

## Description




 Run all the above cells in Interactive Python

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
    }

    // Run all cells up to the cell containing this start line and character
    @captureTelemetry(Telemetry.RunAllCellsAbove)
    public async runAllCellsAbove(stopLine: number, stopCharacter: number) {
        const iw = await this.getActiveInteractiveWindow();
        const runCellCommands = this.codeLenses.filter((c) => c.command && c.command.command === Commands.RunCell);
```

</details>
<details>
  <summary>DATASCIENCE.RUN_BY_LINE</summary>

## Description



 Run by line events

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.RUN_BY_LINE_STEP</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.RUN_BY_LINE_STOP</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.RUN_BY_LINE_VARIABLE_HOVER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/debugger/debuggerVariables.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/debugger/debuggerVariables.ts)
```typescript
            // Note, full variable results isn't necessary for this call. It only really needs the variable value.
            const result = this.lastKnownVariables.find((v) => v.name === name);
            if (result && kernel?.resourceUri && uriPath.extname(kernel?.resourceUri).toLowerCase() === '.ipynb') {
                sendTelemetryEvent(Telemetry.RunByLineVariableHover);
            }
            return result;
        }
```

</details>
<details>
  <summary>DATASCIENCE.RUN_CELL</summary>

## Description




 Run a Cell in Interactive Python

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.RUN_CELL_AND_ALL_BELOW</summary>

## Description




 Run current cell and all below in Interactive Python

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        await finished;
    }

    @captureTelemetry(Telemetry.RunCellAndAllBelow)
    public async runCellAndAllBelow(startLine: number, startCharacter: number) {
        const iw = await this.getActiveInteractiveWindow();
        const runCellCommands = this.codeLenses.filter((c) => c.command && c.command.command === Commands.RunCell);
```

</details>
<details>
  <summary>DATASCIENCE.RUN_CHANGE_CELL_TO_CODE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        });
    }

    @captureTelemetry(Telemetry.ChangeCellToCode)
    public changeCellToCode() {
        this.applyToCells((editor, cell, _) => {
            return this.changeCellTo(editor, cell, 'code');
```

</details>
<details>
  <summary>DATASCIENCE.RUN_CHANGE_CELL_TO_MARKDOWN</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        await this.moveCellsDirection(false);
    }

    @captureTelemetry(Telemetry.ChangeCellToMarkdown)
    public changeCellToMarkdown() {
        this.applyToCells((editor, cell, _) => {
            return this.changeCellTo(editor, cell, 'markdown');
```

</details>
<details>
  <summary>DATASCIENCE.RUN_CURRENT_CELL</summary>

## Description




 Run the current Cell in Interactive Python

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        return this.runMatchingCell(range, false, true);
    }

    @captureTelemetry(Telemetry.RunCurrentCell)
    public async runCurrentCell(): Promise<void> {
        if (!this.documentManager.activeTextEditor || !this.documentManager.activeTextEditor.document) {
            return;
```

</details>
<details>
  <summary>DATASCIENCE.RUN_CURRENT_CELL_AND_ADD_BELOW</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.RunCurrentCellAndAddBelow)
    public async runCurrentCellAndAddBelow(): Promise<void> {
        if (!this.documentManager.activeTextEditor || !this.documentManager.activeTextEditor.document) {
            return;
```

</details>
<details>
  <summary>DATASCIENCE.RUN_CURRENT_CELL_AND_ADVANCE</summary>

## Description




 Run current cell and advance cursor in Interactive Python

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        return this.runMatchingCell(this.documentManager.activeTextEditor.selection, false);
    }

    @captureTelemetry(Telemetry.RunCurrentCellAndAdvance)
    public async runCurrentCellAndAdvance() {
        if (!this.documentManager.activeTextEditor || !this.documentManager.activeTextEditor.document) {
            return;
```

</details>
<details>
  <summary>DATASCIENCE.RUN_DELETE_CELLS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.DeleteCells)
    public deleteCells() {
        const editor = this.documentManager.activeTextEditor;
        if (!editor || !editor.selection) {
```

</details>
<details>
  <summary>DATASCIENCE.RUN_EXTEND_SELECTION_BY_CELL_ABOVE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        editor.selections = selections;
    }

    @captureTelemetry(Telemetry.ExtendSelectionByCellAbove)
    public extendSelectionByCellAbove() {
        // This behaves similarly to excel "Extend Selection by One Cell Above".
        // The direction of the selection matters (i.e. where the active cursor)
```

</details>
<details>
  <summary>DATASCIENCE.RUN_EXTEND_SELECTION_BY_CELL_BELOW</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.ExtendSelectionByCellBelow)
    public extendSelectionByCellBelow() {
        // This behaves similarly to excel "Extend Selection by One Cell Above".
        // The direction of the selection matters (i.e. where the active cursor)
```

</details>
<details>
  <summary>DATASCIENCE.RUN_FILE_INTERACTIVE</summary>

## Description




 Run file in Interactive Python

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.RunFileInteractive)
    public async runFileInteractive() {
        return this.runFileInteractiveInternal(false);
    }
```


[src/test/datascience/telemetry.vscode.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/datascience/telemetry.vscode.test.ts)
```typescript
        };

        // Right now this is the guaranteed list. Might want to expand this.
        assertEvent(Telemetry.RunFileInteractive);
        assertEvent(Telemetry.ExecuteCellPerceivedWarm);
        assertEvent(Telemetry.SwitchKernel);
    });
```

</details>
<details>
  <summary>DATASCIENCE.RUN_FROM_LINE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.RunFromLine)
    public async runFromLine(targetLine: number) {
        if (this.document && targetLine < this.document.lineCount) {
            const iw = await this.getActiveInteractiveWindow();
```

</details>
<details>
  <summary>DATASCIENCE.RUN_INSERT_CELL_ABOVE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.InsertCellAbove)
    public insertCellAbove() {
        const editor = this.documentManager.activeTextEditor;
        if (editor && editor.selection) {
```

</details>
<details>
  <summary>DATASCIENCE.RUN_INSERT_CELL_BELOW</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.InsertCellBelow)
    public insertCellBelow() {
        const editor = this.documentManager.activeTextEditor;
        if (editor && editor.selection) {
```

</details>
<details>
  <summary>DATASCIENCE.RUN_INSERT_CELL_BELOW_POSITION</summary>

## Description




 Cell Edit Commands in Interactive Python

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        );
    }

    @captureTelemetry(Telemetry.InsertCellBelowPosition)
    public insertCellBelowPosition() {
        const editor = this.documentManager.activeTextEditor;
        if (editor && editor.selection) {
```

</details>
<details>
  <summary>DATASCIENCE.RUN_MOVE_CELLS_DOWN</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        await this.moveCellsDirection(true);
    }

    @captureTelemetry(Telemetry.MoveCellsDown)
    public async moveCellsDown(): Promise<void> {
        await this.moveCellsDirection(false);
    }
```

</details>
<details>
  <summary>DATASCIENCE.RUN_MOVE_CELLS_UP</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.MoveCellsUp)
    public async moveCellsUp(): Promise<void> {
        await this.moveCellsDirection(true);
    }
```

</details>
<details>
  <summary>DATASCIENCE.RUN_SELECT_CELL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
            .then(noop, noop);
    }

    @captureTelemetry(Telemetry.SelectCell)
    public selectCell() {
        const editor = this.documentManager.activeTextEditor;
        if (editor && editor.selection) {
```

</details>
<details>
  <summary>DATASCIENCE.RUN_SELECT_CELL_CONTENTS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.SelectCellContents)
    public selectCellContents() {
        const editor = this.documentManager.activeTextEditor;
        if (!editor || !editor.selection) {
```

</details>
<details>
  <summary>DATASCIENCE.RUN_SELECTION_OR_LINE</summary>

## Description




 Run a Selection or Line in Interactive Python

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        await finished;
    }

    @captureTelemetry(Telemetry.RunSelectionOrLine)
    public async runSelectionOrLine(activeEditor: TextEditor | undefined, text?: string | Uri) {
        if (this.document && activeEditor && urlPath.isEqual(activeEditor.document.uri, this.document.uri)) {
            const iw = await this.getActiveInteractiveWindow();
```

</details>
<details>
  <summary>DATASCIENCE.RUN_TO_LINE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.RunToLine)
    public async runToLine(targetLine: number) {
        if (this.document && targetLine > 0) {
            const iw = await this.getActiveInteractiveWindow();
```

</details>
<details>
  <summary>DATASCIENCE.SAVE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.SCROLLED_TO_CELL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.SELECT_JUPYTER_INTERPRETER_Command</summary>

## Description




 Telemetry sent when user selects an interpreter to start jupyter server.

 @type {(never | undefined)}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/interpreter/jupyterInterpreterSelectionCommand.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterSelectionCommand.node.ts)
```typescript
    public async activate(): Promise<void> {
        this.disposables.push(
            this.cmdManager.registerCommand('jupyter.selectJupyterInterpreter', () => {
                sendTelemetryEvent(Telemetry.SelectJupyterInterpreterCommand);
                this.service.selectInterpreter().ignoreErrors();
            })
        );
```

</details>
<details>
  <summary>DATASCIENCE.SELECT_JUPYTER_URI</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
        private readonly isWebExtension: boolean
    ) {}

    @captureTelemetry(Telemetry.SelectJupyterURI)
    public selectJupyterURI(
        commandSource: SelectJupyterUriCommandSource = 'nonUser',
        existingMultiStep?: IMultiStepInput<{}>
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
        @inject(IsWebExtension) private readonly isWebExtension: boolean
    ) {}

    @captureTelemetry(Telemetry.SelectJupyterURI)
    @traceDecoratorError('Failed to select Jupyter Uri')
    public selectJupyterURI(
        commandSource: SelectJupyterUriCommandSource = 'nonUser'
```


[src/kernels/jupyter/launcher/commandLineSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/commandLineSelector.ts)
```typescript
        workspaceService.onDidChangeConfiguration(this.onDidChangeConfiguration.bind(this));
    }

    @captureTelemetry(Telemetry.SelectJupyterURI)
    public async selectJupyterCommandLine(file: Uri): Promise<void> {
        const multiStep = this.multiStepFactory.create<{}>();
        await multiStep.run(this.startSelectingCommandLine.bind(this, file), {});
```

</details>
<details>
  <summary>DATASCIENCE.SELECT_LOCAL_JUPYTER_KERNEL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/vscodeNotebookController.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/vscodeNotebookController.ts)
```typescript
        // Else VSC is just setting a kernel for a notebook after it has opened.
        if (existingKernel) {
            const telemetryEvent = isLocalConnection(this.kernelConnection)
                ? Telemetry.SelectLocalJupyterKernel
                : Telemetry.SelectRemoteJupyterKernel;
            sendKernelTelemetryEvent(document.uri, telemetryEvent);
            this.notebookApi.notebookEditors
```

</details>
<details>
  <summary>DATASCIENCE.SELECT_REMOTE_JUPYTER_KERNEL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/vscodeNotebookController.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/vscodeNotebookController.ts)
```typescript
        if (existingKernel) {
            const telemetryEvent = isLocalConnection(this.kernelConnection)
                ? Telemetry.SelectLocalJupyterKernel
                : Telemetry.SelectRemoteJupyterKernel;
            sendKernelTelemetryEvent(document.uri, telemetryEvent);
            this.notebookApi.notebookEditors
                .filter((editor) => editor.notebook === document)
```

</details>
<details>
  <summary>DATASCIENCE.SELFCERTSMESSAGECLOSE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/jupyterUtils.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterUtils.ts)
```typescript
        await config.updateSetting('allowUnauthorizedRemoteConnection', true, undefined, ConfigurationTarget.Workspace);
        return true;
    } else if (value === closeOption) {
        sendTelemetryEvent(Telemetry.SelfCertsMessageClose);
    }
    return false;
}
```


[src/kernels/jupyter/jupyterUtils.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterUtils.ts)
```typescript
        await config.updateSetting('allowUnauthorizedRemoteConnection', true, undefined, ConfigurationTarget.Workspace);
        return true;
    } else if (value === closeOption) {
        sendTelemetryEvent(Telemetry.SelfCertsMessageClose);
    }
    return false;
}
```


[src/kernels/errors/kernelErrorHandler.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/errors/kernelErrorHandler.ts)
```typescript
                            )
                            .catch(noop);
                    } else if (value === closeOption) {
                        sendTelemetryEvent(Telemetry.SelfCertsMessageClose);
                    }
                })
                .then(noop, noop);
```


[src/kernels/jupyter/launcher/jupyterPasswordConnect.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterPasswordConnect.ts)
```typescript
                    );
                    return this.requestCreator.getFetchMethod()(url, this.addAllowUnauthorized(url, true, options));
                } else if (value === closeOption) {
                    sendTelemetryEvent(Telemetry.SelfCertsMessageClose);
                }
            }
            throw e;
```

</details>
<details>
  <summary>DATASCIENCE.SELFCERTSMESSAGEENABLED</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/jupyterUtils.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterUtils.ts)
```typescript
        closeOption
    );
    if (value === enableOption) {
        sendTelemetryEvent(Telemetry.SelfCertsMessageEnabled);
        await config.updateSetting('allowUnauthorizedRemoteConnection', true, undefined, ConfigurationTarget.Workspace);
        return true;
    } else if (value === closeOption) {
```


[src/kernels/jupyter/jupyterUtils.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterUtils.ts)
```typescript
        closeOption
    );
    if (value === enableOption) {
        sendTelemetryEvent(Telemetry.SelfCertsMessageEnabled);
        await config.updateSetting('allowUnauthorizedRemoteConnection', true, undefined, ConfigurationTarget.Workspace);
        return true;
    } else if (value === closeOption) {
```


[src/kernels/errors/kernelErrorHandler.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/errors/kernelErrorHandler.ts)
```typescript
                .showErrorMessage(DataScience.jupyterSelfCertFail().format(err.message), enableOption, closeOption)
                .then((value) => {
                    if (value === enableOption) {
                        sendTelemetryEvent(Telemetry.SelfCertsMessageEnabled);
                        this.configuration
                            .updateSetting(
                                'allowUnauthorizedRemoteConnection',
```


[src/kernels/jupyter/launcher/jupyterPasswordConnect.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterPasswordConnect.ts)
```typescript
                    closeOption
                );
                if (value === enableOption) {
                    sendTelemetryEvent(Telemetry.SelfCertsMessageEnabled);
                    await this.configService.updateSetting(
                        'allowUnauthorizedRemoteConnection',
                        true,
```

</details>
<details>
  <summary>DATASCIENCE.SET_JUPYTER_URI_LOCAL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.SetJupyterURIToLocal)
    public async setJupyterURIToLocal(): Promise<void> {
        await this.serverUriStorage.setUriToLocal();
    }
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
        return multiStep.run(this.startSelectingURI.bind(this, allowLocal), {});
    }

    @captureTelemetry(Telemetry.SetJupyterURIToLocal)
    public async setJupyterURIToLocal(): Promise<void> {
        await this.serverUriStorage.setUriToLocal();
    }
```

</details>
<details>
  <summary>DATASCIENCE.SET_JUPYTER_URI_UI_DISPLAYED</summary>

## Description




 This telemetry tracks the display of the Picker for Jupyter Remote servers.

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
        commandSource: SelectJupyterUriCommandSource = 'nonUser',
        existingMultiStep?: IMultiStepInput<{}>
    ): Promise<InputFlowAction | undefined | InputStep<{}> | void> {
        sendTelemetryEvent(Telemetry.SetJupyterURIUIDisplayed, undefined, {
            commandSource
        });
        if (existingMultiStep) {
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
        commandSource: SelectJupyterUriCommandSource = 'nonUser'
    ): Promise<InputFlowAction | undefined | InputStep<{}> | void> {
        const allowLocal = commandSource !== 'nonUser';
        sendTelemetryEvent(Telemetry.SetJupyterURIUIDisplayed, undefined, {
            commandSource
        });
        const multiStep = this.multiStepFactory.create<{}>();
```

</details>
<details>
  <summary>DATASCIENCE.SET_JUPYTER_URI_USER_SPECIFIED</summary>

## Description


No description provided

## Properties

- 
        azure: boolean;

## Locations Used

[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
            await this.serverUriStorage.setUriToRemote(userURI, connection.displayName);

            // Indicate setting a jupyter URI to a remote setting. Check if an azure remote or not
            sendTelemetryEvent(Telemetry.SetJupyterURIToUserSpecified, undefined, {
                azure: userURI.toLowerCase().includes('azure')
            });
        } else {
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
        await this.serverUriStorage.setUriToRemote(userURI, connection.displayName);

        // Indicate setting a jupyter URI to a remote setting. Check if an azure remote or not
        sendTelemetryEvent(Telemetry.SetJupyterURIToUserSpecified, undefined, {
            azure: userURI.toLowerCase().includes('azure')
        });
    }
```

</details>
<details>
  <summary>DATASCIENCE.SHOW_DATA_EXPLORER</summary>

## Description


No description provided

## Properties

-  rows: number | undefined;
-  columns: number | undefined

## Locations Used

[src/webviews/extension-side/dataviewer/dataViewer.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/dataViewer.ts)
```typescript

        // Log telemetry about number of rows
        try {
            sendTelemetryEvent(Telemetry.ShowDataViewer, 0, {
                rows: output.rowCount ? output.rowCount : 0,
                columns: output.columns ? output.columns.length : 0
            });
```


[src/webviews/extension-side/dataviewer/dataViewer.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/dataViewer.ts)
```typescript

    private sendElapsedTimeTelemetry() {
        if (this.rowsTimer && this.pendingRowsCount === 0) {
            sendTelemetryEvent(Telemetry.ShowDataViewer, this.rowsTimer.elapsedTime);
        }
    }

```

</details>
<details>
  <summary>DATASCIENCE.START_SHOW_DATA_EXPLORER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/dataViewerFactory.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/dataViewerFactory.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.StartShowDataViewer)
    public async create(dataProvider: IDataViewerDataProvider, title: string): Promise<IDataViewer> {
        let result: IDataViewer | undefined;

```

</details>
<details>
  <summary>DATASCIENCE.SUBMITCELLFROMREPL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.UNDO</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.USER_DID_NOT_INSTALL_JUPYTER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts)
```typescript
                }

                case DataScience.selectDifferentJupyterInterpreter(): {
                    sendTelemetryEvent(Telemetry.UserDidNotInstallJupyter);
                    return JupyterInterpreterDependencyResponse.selectAnotherInterpreter;
                }

```


[src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts)
```typescript

                case DataScience.pythonInteractiveHelpLink(): {
                    this.applicationShell.openUrl(HelpLinks.PythonInteractiveHelpLink);
                    sendTelemetryEvent(Telemetry.UserDidNotInstallJupyter);
                    return JupyterInterpreterDependencyResponse.cancel;
                }

```


[src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts)
```typescript
                }

                default:
                    sendTelemetryEvent(Telemetry.UserDidNotInstallJupyter);
                    return JupyterInterpreterDependencyResponse.cancel;
            }
        } finally {
```

</details>
<details>
  <summary>DATASCIENCE.USER_DID_NOT_INSTALL_PANDAS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts)
```typescript
        if (selection === Common.install()) {
            await this._doInstall(executer, tokenSource);
        } else {
            sendTelemetryEvent(Telemetry.UserDidNotInstallPandas);
            throw new Error(message);
        }
    }
```

</details>
<details>
  <summary>DATASCIENCE.USER_INSTALLED_JUPYTER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts)
```typescript
                            return JupyterInterpreterDependencyResponse.cancel;
                        }
                    }
                    sendTelemetryEvent(Telemetry.UserInstalledJupyter);

                    // Check if kernelspec module is something that accessible.
                    return this.checkKernelSpecAvailability(interpreter);
```

</details>
<details>
  <summary>DATASCIENCE.USER_INSTALLED_MODULE</summary>

## Description




 Telemetry event sent when installing a jupyter dependency

 @type {product: string}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.USER_INSTALLED_PANDAS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/interpreterDataViewerDependencyImplementation.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/interpreterDataViewerDependencyImplementation.node.ts)
```typescript
            cancellationPromise
        ]);
        if (response === InstallerResponse.Installed) {
            sendTelemetryEvent(Telemetry.UserInstalledPandas);
        }
    }

```


[src/webviews/extension-side/dataviewer/kernelDataViewerDependencyImplementation.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/kernelDataViewerDependencyImplementation.ts)
```typescript

        try {
            await this.execute(command, kernel);
            sendTelemetryEvent(Telemetry.UserInstalledPandas);
        } catch (e) {
            sendTelemetryEvent(Telemetry.UserInstalledPandas, undefined, undefined, e);
            throw new Error(DataScience.failedToInstallPandas());
```


[src/webviews/extension-side/dataviewer/kernelDataViewerDependencyImplementation.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/kernelDataViewerDependencyImplementation.ts)
```typescript
            await this.execute(command, kernel);
            sendTelemetryEvent(Telemetry.UserInstalledPandas);
        } catch (e) {
            sendTelemetryEvent(Telemetry.UserInstalledPandas, undefined, undefined, e);
            throw new Error(DataScience.failedToInstallPandas());
        }
    }
```

</details>
<details>
  <summary>DATASCIENCE.USER_STARTUP_CODE_FAILURE</summary>

## Description


No description provided

## Properties

- 
        ename: string;
- 
        evalue: string;

## Locations Used

[src/kernels/kernel.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernel.ts)
```typescript
            await this.executeSilently(session, this.getUserStartupCommands(), {
                traceErrors: true,
                traceErrorsMessage: 'Error executing user defined startup code',
                telemetryName: Telemetry.UserStartupCodeFailure
            });
        }

```

</details>
<details>
  <summary>DATASCIENCE.VARIABLE_EXPLORER_TOGGLE</summary>

## Description


No description provided

## Properties

-  open: boolean;
-  runByLine: boolean

## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATAVIEWER.USING_INTERPRETER</summary>

## Description




 When the Data Viewer installer is using the Python interpreter.

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/interpreterDataViewerDependencyImplementation.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/interpreterDataViewerDependencyImplementation.node.ts)
```typescript
    }

    public async checkAndInstallMissingDependencies(interpreter: PythonEnvironment): Promise<void> {
        sendTelemetryEvent(Telemetry.DataViewerUsingInterpreter);

        await this.checkOrInstall(interpreter);
    }
```

</details>
<details>
  <summary>DATAVIEWER.USING_KERNEL</summary>

## Description




 When the Data Viewer installer is using the Kernel.

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/kernelDataViewerDependencyImplementation.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/kernelDataViewerDependencyImplementation.ts)
```typescript
    }

    async checkAndInstallMissingDependencies(kernel: IKernel): Promise<void> {
        sendTelemetryEvent(Telemetry.DataViewerUsingKernel);

        if (!kernelHasSession(kernel)) {
            sendTelemetryEvent(Telemetry.NoActiveKernelSession);
```

</details>
<details>
  <summary>DS_INTERNAL.ACTIVE_INTERPRETER_LISTING_PERF</summary>

## Description


No description provided

## Properties

- 
        /**
         * Whether this is the first time in the session.
         * (fetching kernels first time in the session is slower, later its cached).
         * This is a generic property supported for all telemetry (sent by decorators).
         */
        firstTime?: boolean;

## Locations Used

[src/platform/api/pythonApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/api/pythonApi.ts)
```typescript
        }
    }
    private workspaceCachedActiveInterpreter = new Map<string, Promise<PythonEnvironment | undefined>>();
    @captureTelemetry(Telemetry.ActiveInterpreterListingPerf)
    @traceDecoratorVerbose('Get Active Interpreter', TraceOptions.Arguments | TraceOptions.BeforeCall)
    public getActiveInterpreter(resource?: Uri): Promise<PythonEnvironment | undefined> {
        this.hookupOnDidChangeInterpreterEvent();
```

</details>
<details>
  <summary>DS_INTERNAL.ASK_USER_FOR_NEW_KERNEL_JUPYTER</summary>

## Description




 Sent when a jupyter session fails to start and we ask the user for a new kernel

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.CELL_COUNT</summary>

## Description


No description provided

## Properties

-  count: number

## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.CODE_LENS_ACQ_TIME</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codelensprovider.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codelensprovider.ts)
```typescript
        // On shutdown send how long on average we spent parsing code lens
        if (this.totalGetCodeLensCalls > 0) {
            sendTelemetryEvent(
                Telemetry.CodeLensAverageAcquisitionTime,
                this.totalExecutionTimeInMs / this.totalGetCodeLensCalls
            );
        }
```

</details>
<details>
  <summary>DS_INTERNAL.COMMAND_EXECUTED</summary>

## Description




 Telemetry sent when a command is executed.

## Properties


No properties for event


## Locations Used

[src/platform/common/application/commandManager.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/application/commandManager.ts)
```typescript
        return commands.registerCommand(
            command,
            (...args: U) => {
                sendTelemetryEvent(Telemetry.CommandExecuted, undefined, { command: command as string });
                if (thisArg) {
                    return callback.call(thisArg, ...(args as any));
                } else {
```


[src/platform/common/application/commandManager.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/application/commandManager.ts)
```typescript
        return commands.registerTextEditorCommand(
            command,
            (textEditor: TextEditor, edit: TextEditorEdit, ...args: any[]) => {
                sendTelemetryEvent(Telemetry.CommandExecuted, undefined, { command: command as string });
                if (thisArg) {
                    return callback.call(thisArg, textEditor, edit, ...args);
                } else {
```


[src/platform/common/application/commandManager.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/application/commandManager.ts)
```typescript
        U extends ICommandNameArgumentTypeMapping[E]
    >(command: E, ...rest: U): Thenable<T> {
        if (!commandsToIgnore.has(command)) {
            sendTelemetryEvent(Telemetry.CommandExecuted, undefined, { command: command as string });
        }
        return commands.executeCommand<T>(command, ...rest);
    }
```

</details>
<details>
  <summary>DS_INTERNAL.COMPLETION_TIME_FROM_JUPYTER</summary>

## Description




 Telemetry event sent to capture total time taken for completions list to be provided by Jupyter.
 This is used to compare against time taken by LS.

 @type {(undefined | never)}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.COMPLETION_TIME_FROM_LS</summary>

## Description




 Telemetry event sent to capture total time taken for completions list to be provided by LS.
 This is used to compare against time taken by Jupyter.

 @type {(undefined | never)}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.CONNECTFAILEDJUPYTER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/jupyterExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterExecution.ts)
```typescript
                                throw new RemoteJupyterServerConnectionError(connection.baseUrl, options.serverId, err);
                            }
                        } else {
                            sendTelemetryEvent(Telemetry.ConnectFailedJupyter, undefined, undefined, err, true);
                            throw new LocalJupyterServerConnectionError(err);
                        }
                    } else {
```

</details>
<details>
  <summary>DS_INTERNAL.CONNECTLOCALJUPYTER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/jupyterExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterExecution.ts)
```typescript
                    traceInfo(`Connection complete server`);

                    sendTelemetryEvent(
                        options.localJupyter ? Telemetry.ConnectLocalJupyter : Telemetry.ConnectRemoteJupyter
                    );
                    return result;
                } catch (err) {
```

</details>
<details>
  <summary>DS_INTERNAL.CONNECTREMOTEEXPIREDCERTFAILEDJUPYTER</summary>

## Description




 Jupyter server's certificate has expired.

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/jupyterExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterExecution.ts)
```typescript
                                sendTelemetryEvent(Telemetry.ConnectRemoteSelfCertFailedJupyter);
                                throw new JupyterSelfCertsError(connection.baseUrl);
                            } else if (JupyterSelfCertsExpiredError.isSelfCertsExpiredError(err)) {
                                sendTelemetryEvent(Telemetry.ConnectRemoteExpiredCertFailedJupyter);
                                throw new JupyterSelfCertsExpiredError(connection.baseUrl);
                            } else {
                                throw new RemoteJupyterServerConnectionError(connection.baseUrl, options.serverId, err);
```

</details>
<details>
  <summary>DS_INTERNAL.CONNECTREMOTEFAILEDJUPYTER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/jupyterExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterExecution.ts)
```typescript

                        // Something else went wrong
                        if (!options.localJupyter) {
                            sendTelemetryEvent(Telemetry.ConnectRemoteFailedJupyter, undefined, undefined, err, true);

                            // Check for the self signed certs error specifically
                            if (JupyterSelfCertsError.isSelfCertsError(err)) {
```

</details>
<details>
  <summary>DS_INTERNAL.CONNECTREMOTEJUPYTER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/jupyterExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterExecution.ts)
```typescript
                    traceInfo(`Connection complete server`);

                    sendTelemetryEvent(
                        options.localJupyter ? Telemetry.ConnectLocalJupyter : Telemetry.ConnectRemoteJupyter
                    );
                    return result;
                } catch (err) {
```

</details>
<details>
  <summary>DS_INTERNAL.CONNECTREMOTEJUPYTER_VIA_LOCALHOST</summary>

## Description




 Connecting to an existing Jupyter server, but connecting to localhost.

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/jupyterExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterExecution.ts)
```typescript
                    connection = await this.startOrConnect(options, cancelToken);

                    if (!connection.localLaunch && LocalHosts.includes(connection.hostName.toLowerCase())) {
                        sendTelemetryEvent(Telemetry.ConnectRemoteJupyterViaLocalHost);
                    }
                    // eslint-disable-next-line no-constant-condition
                    traceInfo(`Connecting to process server`);
```

</details>
<details>
  <summary>DS_INTERNAL.CONNECTREMOTESELFCERTFAILEDJUPYTER</summary>

## Description




 Jupyter server's certificate is not from a trusted authority.

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
            }
        } catch (err) {
            if (JupyterSelfCertsError.isSelfCertsError(err)) {
                sendTelemetryEvent(Telemetry.ConnectRemoteSelfCertFailedJupyter);
                const handled = await handleSelfCertsError(this.applicationShell, this.configService, err.message);
                if (!handled) {
                    return;
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
                    return;
                }
            } else if (JupyterSelfCertsExpiredError.isSelfCertsExpiredError(err)) {
                sendTelemetryEvent(Telemetry.ConnectRemoteSelfCertFailedJupyter);
                const handled = await handleExpiredCertsError(this.applicationShell, this.configService, err.message);
                if (!handled) {
                    return;
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
        } catch (err) {
            traceWarning('Uri verification error', err);
            if (JupyterSelfCertsError.isSelfCertsError(err)) {
                sendTelemetryEvent(Telemetry.ConnectRemoteSelfCertFailedJupyter);
                const handled = await handleSelfCertsError(this.applicationShell, this.configService, err.message);
                if (!handled) {
                    return DataScience.jupyterSelfCertFailErrorMessageOnly();
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
                    return DataScience.jupyterSelfCertFailErrorMessageOnly();
                }
            } else if (JupyterSelfCertsExpiredError.isSelfCertsExpiredError(err)) {
                sendTelemetryEvent(Telemetry.ConnectRemoteSelfCertFailedJupyter);
                const handled = await handleExpiredCertsError(this.applicationShell, this.configService, err.message);
                if (!handled) {
                    return DataScience.jupyterSelfCertExpiredErrorMessageOnly();
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
            }
        } catch (err) {
            if (JupyterSelfCertsError.isSelfCertsError(err)) {
                sendTelemetryEvent(Telemetry.ConnectRemoteSelfCertFailedJupyter);
                const handled = await handleSelfCertsError(this.applicationShell, this.configService, err.message);
                if (!handled) {
                    return;
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
                    return;
                }
            } else if (JupyterSelfCertsExpiredError.isSelfCertsExpiredError(err)) {
                sendTelemetryEvent(Telemetry.ConnectRemoteSelfCertFailedJupyter);
                const handled = await handleExpiredCertsError(this.applicationShell, this.configService, err.message);
                if (!handled) {
                    return;
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
        } catch (err) {
            traceWarning('Uri verification error', err);
            if (JupyterSelfCertsError.isSelfCertsError(err)) {
                sendTelemetryEvent(Telemetry.ConnectRemoteSelfCertFailedJupyter);
                const handled = await handleSelfCertsError(this.applicationShell, this.configService, err.message);
                if (!handled) {
                    return DataScience.jupyterSelfCertFailErrorMessageOnly();
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
                    return DataScience.jupyterSelfCertFailErrorMessageOnly();
                }
            } else if (JupyterSelfCertsExpiredError.isSelfCertsExpiredError(err)) {
                sendTelemetryEvent(Telemetry.ConnectRemoteSelfCertFailedJupyter);
                const handled = await handleExpiredCertsError(this.applicationShell, this.configService, err.message);
                if (!handled) {
                    return DataScience.jupyterSelfCertExpiredErrorMessageOnly();
```


[src/kernels/jupyter/launcher/jupyterExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterExecution.ts)
```typescript

                            // Check for the self signed certs error specifically
                            if (JupyterSelfCertsError.isSelfCertsError(err)) {
                                sendTelemetryEvent(Telemetry.ConnectRemoteSelfCertFailedJupyter);
                                throw new JupyterSelfCertsError(connection.baseUrl);
                            } else if (JupyterSelfCertsExpiredError.isSelfCertsExpiredError(err)) {
                                sendTelemetryEvent(Telemetry.ConnectRemoteExpiredCertFailedJupyter);
```

</details>
<details>
  <summary>DS_INTERNAL.ERROR_START_RAWKERNEL_WITHOUT_INTERPRETER</summary>

## Description



 Whether we've attempted to start a raw Python kernel without any interpreter information.
 If we don't detect such telemetry in a few months, then we can remove this along with the temporary code associated with this telemetry.

## Properties

- 
        /**
         * Indicates whether the python extension is installed.
         * If we send telemetry fro this & this is `true`, then we have a bug.
         * If its `false`, then we can ignore this telemetry.
         */
        pythonExtensionInstalled: boolean;

## Locations Used

[src/kernels/raw/session/hostRawNotebookProvider.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/hostRawNotebookProvider.node.ts)
```typescript
                if (!kernelConnection.interpreter) {
                    sendKernelTelemetryEvent(
                        resource,
                        Telemetry.AttemptedToLaunchRawKernelWithoutInterpreter,
                        undefined,
                        {
                            pythonExtensionInstalled: this.extensionChecker.isPythonExtensionInstalled
```

</details>
<details>
  <summary>DS_INTERNAL.EXECUTE_CELL_PERCEIVED_COLD</summary>

## Description




 Telemetry sent to capture first time execution of a cell.
 If `notebook = true`, this its telemetry for Jupyter notebooks, else applies to IW.

## Properties


No properties for event


## Locations Used

[src/kernels/execution/cellExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/execution/cellExecution.ts)
```typescript
            CellExecution.sentExecuteCellTelemetry = true;
            sendKernelTelemetryEvent(
                this.resourceUri,
                Telemetry.ExecuteCellPerceivedCold,
                this.stopWatchForTelemetry.elapsedTime,
                props
            );
```


[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        if (runningStopWatch) {
            if (!CodeWatcher.sentExecuteCellTelemetry) {
                CodeWatcher.sentExecuteCellTelemetry = true;
                sendTelemetryEvent(Telemetry.ExecuteCellPerceivedCold, runningStopWatch.elapsedTime);
            } else {
                sendTelemetryEvent(Telemetry.ExecuteCellPerceivedWarm, runningStopWatch.elapsedTime);
            }
```

</details>
<details>
  <summary>DS_INTERNAL.EXECUTE_CELL_PERCEIVED_WARM</summary>

## Description




 Telemetry sent to capture subsequent execution of a cell.
 If `notebook = true`, this its telemetry for native editor/notebooks.
 (Note: The property `notebook` only gets sent correctly in Jupyter version 2022.8.0 or later)

## Properties


No properties for event


## Locations Used

[src/kernels/execution/cellExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/execution/cellExecution.ts)
```typescript
        } else {
            sendKernelTelemetryEvent(
                this.resourceUri,
                Telemetry.ExecuteCellPerceivedWarm,
                this.stopWatchForTelemetry.elapsedTime,
                props
            );
```


[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
                CodeWatcher.sentExecuteCellTelemetry = true;
                sendTelemetryEvent(Telemetry.ExecuteCellPerceivedCold, runningStopWatch.elapsedTime);
            } else {
                sendTelemetryEvent(Telemetry.ExecuteCellPerceivedWarm, runningStopWatch.elapsedTime);
            }
        }
    }
```


[src/test/datascience/telemetry.vscode.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/datascience/telemetry.vscode.test.ts)
```typescript

        // Right now this is the guaranteed list. Might want to expand this.
        assertEvent(Telemetry.RunFileInteractive);
        assertEvent(Telemetry.ExecuteCellPerceivedWarm);
        assertEvent(Telemetry.SwitchKernel);
    });
});
```

</details>
<details>
  <summary>DS_INTERNAL.FAILED_TO_UPDATE_JUPYTER_KERNEL_SPEC</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/jupyterKernelService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterKernelService.node.ts)
```typescript
            await this.fs.writeFile(kernelSpecFilePath, JSON.stringify(contents, undefined, 4));
        } catch (ex) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            sendTelemetryEvent(Telemetry.FailedToUpdateKernelSpec, undefined, undefined, ex as any, true);
            throw ex;
        }
        if (cancelToken.isCancellationRequested) {
```


[src/kernels/jupyter/jupyterKernelService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterKernelService.node.ts)
```typescript
                    return;
                }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                sendTelemetryEvent(Telemetry.FailedToUpdateKernelSpec, undefined, undefined, ex as any, true);
                throw ex;
            }

```

</details>
<details>
  <summary>DS_INTERNAL.FIND_JUPYTER_COMMAND</summary>

## Description


No description provided

## Properties

-  command: string

## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.FIND_JUPYTER_KERNEL_SPEC</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.FIND_KERNEL_FOR_LOCAL_CONNECTION</summary>

## Description




 Telemetry event sent once done searching for kernel spec and interpreter for a local connection.

 @type {{
         kernelSpecFound: boolean;
         interpreterFound: boolean;
     }}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.GET_ACTIVATED_ENV_VARIABLES</summary>

## Description




 Used to capture time taken to get enviornment variables for a python environment.
 Also lets us know whether it worked or not.

## Properties


No properties for event


## Locations Used

[src/platform/common/process/environmentActivationService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/process/environmentActivationService.node.ts)
```typescript
        ]);

        const envType = interpreter.envType;
        sendTelemetryEvent(Telemetry.GetActivatedEnvironmentVariables, stopWatch.elapsedTime, {
            envType,
            pythonEnvType: envType,
            source: 'python',
```


[src/platform/common/process/environmentActivationService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/process/environmentActivationService.node.ts)
```typescript
                    interpreter?.uri
                )}, shell cannot be determined.`
            );
            sendTelemetryEvent(Telemetry.GetActivatedEnvironmentVariables, 0, {
                envType,
                pythonEnvType: envType,
                source: 'jupyter',
```


[src/platform/common/process/environmentActivationService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/process/environmentActivationService.node.ts)
```typescript
                const stopWatch = new StopWatch();
                try {
                    const env = await this.getCondaEnvVariables(resource, interpreter);
                    sendTelemetryEvent(Telemetry.GetActivatedEnvironmentVariables, stopWatch.elapsedTime, {
                        envType,
                        pythonEnvType: envType,
                        source: 'jupyter',
```


[src/platform/common/process/environmentActivationService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/process/environmentActivationService.node.ts)
```typescript
                    });
                    return env;
                } catch (ex) {
                    sendTelemetryEvent(Telemetry.GetActivatedEnvironmentVariables, stopWatch.elapsedTime, {
                        envType,
                        pythonEnvType: envType,
                        source: 'jupyter',
```


[src/platform/common/process/environmentActivationService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/process/environmentActivationService.node.ts)
```typescript
            const processService = await processServicePromise;
            const hasCustomEnvVars = Object.keys(customEnvVars).length;
            if (!activationCommands || activationCommands.length === 0) {
                sendTelemetryEvent(Telemetry.GetActivatedEnvironmentVariables, stopWatch.elapsedTime, {
                    envType,
                    pythonEnvType: envType,
                    source: 'jupyter',
```


[src/platform/common/process/environmentActivationService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/process/environmentActivationService.node.ts)
```typescript
            } else if (returnedEnv) {
                delete returnedEnv[PYTHON_WARNINGS];
            }
            sendTelemetryEvent(Telemetry.GetActivatedEnvironmentVariables, stopWatch.elapsedTime, {
                envType,
                pythonEnvType: envType,
                source: 'jupyter',
```


[src/platform/common/process/environmentActivationService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/process/environmentActivationService.node.ts)
```typescript

            return returnedEnv;
        } catch (e) {
            sendTelemetryEvent(Telemetry.GetActivatedEnvironmentVariables, stopWatch.elapsedTime, {
                envType,
                pythonEnvType: envType,
                source: 'jupyter',
```

</details>
<details>
  <summary>DS_INTERNAL.GET_PASSWORD_FAILURE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/jupyterPasswordConnect.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterPasswordConnect.ts)
```typescript
            const requestHeaders = { Cookie: cookieString, 'X-XSRFToken': xsrfCookie };
            return { requestHeaders };
        } else {
            sendTelemetryEvent(Telemetry.GetPasswordFailure);
            return undefined;
        }
    }
```

</details>
<details>
  <summary>DS_INTERNAL.GET_PASSWORD_SUCCESS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/jupyterPasswordConnect.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterPasswordConnect.ts)
```typescript

        // If we found everything return it all back if not, undefined as partial is useless
        if (xsrfCookie && sessionCookieName && sessionCookieValue) {
            sendTelemetryEvent(Telemetry.GetPasswordSuccess);
            const cookieString = this.getSessionCookieString(xsrfCookie, sessionCookieName, sessionCookieValue);
            const requestHeaders = { Cookie: cookieString, 'X-XSRFToken': xsrfCookie };
            return { requestHeaders };
```

</details>
<details>
  <summary>DS_INTERNAL.GET_PREFERRED_KERNEL_PERF</summary>

## Description




 Total time taken to get the preferred kernel for notebook.

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.HASHED_NOTEBOOK_OUTPUT_MIME_TYPE_PERF</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.HASHED_OUTPUT_MIME_TYPE</summary>

## Description


No description provided

## Properties

- 
        /**
         * Hash of the cell output mimetype
         *
         * @type {string}
         */
        hashedName: string;
- 
        hasText: boolean;
- 
        hasLatex: boolean;
- 
        hasHtml: boolean;
- 
        hasSvg: boolean;
- 
        hasXml: boolean;
- 
        hasJson: boolean;
- 
        hasImage: boolean;
- 
        hasGeo: boolean;
- 
        hasPlotly: boolean;
- 
        hasVega: boolean;
- 
        hasWidget: boolean;
- 
        hasJupyter: boolean;
- 
        hasVnd: boolean;

## Locations Used

[src/kernels/jupyter/jupyterCellOutputMimeTypeTracker.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterCellOutputMimeTypeTracker.node.ts)
```typescript
            hasJupyter: lowerMimeType.includes('jupyter'),
            hasVnd: lowerMimeType.includes('vnd')
        };
        sendTelemetryEvent(Telemetry.HashedCellOutputMimeType, undefined, props);
    }
}

```

</details>
<details>
  <summary>DS_INTERNAL.HASHED_OUTPUT_MIME_TYPE_PERF</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/jupyterCellOutputMimeTypeTracker.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterCellOutputMimeTypeTracker.node.ts)
```typescript
        this.pendingChecks.set(id, setTimeout(check, 5000));
    }

    @captureTelemetry(Telemetry.HashedCellOutputMimeTypePerf)
    private checkCell(cell: NotebookCell) {
        this.pendingChecks.delete(cell.document.uri.toString());
        this.getCellOutputMimeTypes(cell).forEach(this.sendTelemetry.bind(this));
```

</details>
<details>
  <summary>DS_INTERNAL.HIDDEN_EXECUTION_TIME</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.INTERACTIVE_FILE_TOOLTIPS_PERF</summary>

## Description



 Capture telemetry re: how long returning a tooltip takes

## Properties

- 
        // Result is null if user signalled cancellation or if we timed out
        isResultNull: boolean;

## Locations Used

[src/interactive-window/editor-integration/hoverProvider.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/hoverProvider.ts)
```typescript
        const timeoutHandler = sleep(300).then(() => undefined);
        this.stopWatch.reset();
        const result = await Promise.race([timeoutHandler, this.getVariableHover(document, position, token)]);
        sendTelemetryEvent(Telemetry.InteractiveFileTooltipsPerf, this.stopWatch.elapsedTime, {
            isResultNull: !!result
        });
        return result;
```

</details>
<details>
  <summary>DS_INTERNAL.INTERPRETER_LISTING_PERF</summary>

## Description




 Time taken to list the Python interpreters.

## Properties


No properties for event


## Locations Used

[src/platform/api/pythonApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/api/pythonApi.ts)
```typescript
        if (!this.interpreterListCachePromise) {
            this.interpreterListCachePromise = this.getInterpretersImpl(resource);
        }
        sendTelemetryWhenDone(Telemetry.InterpreterListingPerf, this.interpreterListCachePromise, undefined, {
            firstTime
        });
        return this.interpreterListCachePromise;
```

</details>
<details>
  <summary>DS_INTERNAL.INTERRUPT_JUPYTER_TIME</summary>

## Description




 User interrupts a cell
 Identical to `Telemetry.Interrupt`

## Properties


No properties for event


## Locations Used

[src/kernels/execution/kernelExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/execution/kernelExecution.ts)
```typescript
        this.disposables.forEach((d) => d.dispose());
    }
    @captureTelemetry(Telemetry.Interrupt)
    @captureTelemetry(Telemetry.InterruptJupyterTime)
    private async interruptExecution(
        session: IKernelConnectionSession,
        pendingExecutions: Promise<unknown>
```

</details>
<details>
  <summary>DS_INTERNAL.INVALID_KERNEL_USED</summary>

## Description




 Telemetry event sent when a kernel picked crashes on startup
 @type {(undefined | never)}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

[src/kernels/errors/jupyterInvalidKernelError.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/errors/jupyterInvalidKernelError.ts)
```typescript
            DataScience.kernelInvalid().format(getDisplayNameOrNameOfKernelConnection(kernelConnectionMetadata)),
            kernelConnectionMetadata
        );
        sendTelemetryEvent(Telemetry.KernelInvalid);
    }
}

```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_DISCOVER_WIDGETS_NB_EXTENSIONS</summary>

## Description




 Total time taken to discover all IPyWidgets.
 This is how long it takes to discover all widgets on disc (from python environment).

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/scriptSourceProvider/baseIPyWidgetScriptManager.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/scriptSourceProvider/baseIPyWidgetScriptManager.ts)
```typescript
                )}`
            );
        }
        sendTelemetryEvent(Telemetry.DiscoverIPyWidgetNamesPerf, stopWatch.elapsedTime, {
            type: isLocalConnection(this.kernel.kernelConnectionMetadata) ? 'local' : 'remote'
        });
        return config && Object.keys(config).length ? config : undefined;
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_DISCOVERED</summary>

## Description




 Telemetry event sent with name of a Widget found.

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_DISCOVERY_ERRORED</summary>

## Description




 Something went wrong in looking for a widget.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/scriptSourceProvider/ipyWidgetScriptSource.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/scriptSourceProvider/ipyWidgetScriptSource.ts)
```typescript
            }
        } catch (ex) {
            traceError('Failed to get widget source due to an error', ex);
            sendTelemetryEvent(Telemetry.HashedIPyWidgetScriptDiscoveryError);
        } finally {
            traceInfo(
                `${ConsoleForegroundColors.Green}Script for ${moduleName}, is ${widgetSource.scriptUri} from ${widgetSource.source}`
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_EXTENSIONJS_INFO</summary>

## Description




 Telemetry event sent once we've successfully or unsuccessfully parsed the extension.js file in the widget folder.
 E.g. if we have a widget named ipyvolume, we attempt to parse the nbextensions/ipyvolume/extension.js file to get some info out of it.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/scriptSourceProvider/baseIPyWidgetScriptManager.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/scriptSourceProvider/baseIPyWidgetScriptManager.ts)
```typescript
    }

    if (indexOfRequireConfig < 0) {
        sendTelemetryEvent(Telemetry.IPyWidgetExtensionJsInfo, undefined, {
            widgetFolderNameHash,
            failed: true,
            patternUsedToRegisterRequireConfig,
```


[src/notebooks/controllers/ipywidgets/scriptSourceProvider/baseIPyWidgetScriptManager.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/scriptSourceProvider/baseIPyWidgetScriptManager.ts)
```typescript
    // Find the end bracket for the require config call.
    const endBracket = contents.indexOf(')', indexOfRequireConfig);
    if (endBracket <= 0 || !patternUsedToRegisterRequireConfig) {
        sendTelemetryEvent(Telemetry.IPyWidgetExtensionJsInfo, undefined, {
            widgetFolderNameHash,
            failed: true,
            patternUsedToRegisterRequireConfig,
```


[src/notebooks/controllers/ipywidgets/scriptSourceProvider/baseIPyWidgetScriptManager.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/scriptSourceProvider/baseIPyWidgetScriptManager.ts)
```typescript
    });

    if (!requireConfig || !Object.keys(requireConfig).length) {
        sendTelemetryEvent(Telemetry.IPyWidgetExtensionJsInfo, undefined, {
            widgetFolderNameHash,
            failed: true,
            patternUsedToRegisterRequireConfig,
```


[src/notebooks/controllers/ipywidgets/scriptSourceProvider/baseIPyWidgetScriptManager.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/scriptSourceProvider/baseIPyWidgetScriptManager.ts)
```typescript
        });
        return;
    }
    sendTelemetryEvent(Telemetry.IPyWidgetExtensionJsInfo, undefined, {
        widgetFolderNameHash,
        patternUsedToRegisterRequireConfig,
        requireEntryPointCount: Object.keys(requireConfig).length
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_LOAD_DISABLED</summary>

## Description




 Telemetry event sent when an loading of 3rd party ipywidget JS scripts from 3rd party source has been disabled.

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_LOAD_FAILURE</summary>

## Description




 Telemetry event sent when an ipywidget module fails to load. Module name is hashed.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/message/commonMessageCoordinator.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/message/commonMessageCoordinator.ts)
```typescript
            }
            traceError(`Widget load failure ${errorMessage}`, payload);

            sendTelemetryEvent(Telemetry.IPyWidgetLoadFailure, 0, {
                isOnline: payload.isOnline,
                moduleHash: getTelemetrySafeHashedString(payload.moduleName),
                moduleVersion: payload.moduleVersion,
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_LOAD_SUCCESS</summary>

## Description




 Telemetry event sent when an ipywidget module loads. Module name is hashed.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/message/commonMessageCoordinator.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/message/commonMessageCoordinator.ts)
```typescript

    private sendLoadSucceededTelemetry(payload: LoadIPyWidgetClassLoadAction) {
        try {
            sendTelemetryEvent(Telemetry.IPyWidgetLoadSuccess, 0, {
                moduleHash: getTelemetrySafeHashedString(payload.moduleName),
                moduleVersion: payload.moduleVersion
            });
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_OVERHEAD</summary>

## Description




 Telemetry event sent to indicate the overhead of syncing the kernel with the UI.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/message/ipyWidgetMessageDispatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/message/ipyWidgetMessageDispatcher.ts)
```typescript
    }

    private sendOverheadTelemetry() {
        sendTelemetryEvent(Telemetry.IPyWidgetOverhead, 0, {
            totalOverheadInMs: this.totalWaitTime,
            numberOfMessagesWaitedOn: this.totalWaitedMessages,
            averageWaitTime: this.totalWaitTime / this.totalWaitedMessages,
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_PROMPT_TO_USE_CDN</summary>

## Description




 Telemetry sent when we prompt user to use a CDN for IPyWidget scripts.
 This is always sent when we display a prompt.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/scriptSourceProvider/cdnWidgetScriptSourceProvider.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/scriptSourceProvider/cdnWidgetScriptSourceProvider.ts)
```typescript
            return this.configurationPromise.promise;
        }
        this.configurationPromise = createDeferred();
        sendTelemetryEvent(Telemetry.IPyWidgetPromptToUseCDN);
        const selection = await this.appShell.showInformationMessage(
            DataScience.useCDNForWidgetsNoInformation(),
            { modal: true },
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_PROMPT_TO_USE_CDN_SELECTION</summary>

## Description




 Telemetry sent when user does something with the prompt displayed to user about using CDN for IPyWidget scripts.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/scriptSourceProvider/cdnWidgetScriptSourceProvider.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/scriptSourceProvider/cdnWidgetScriptSourceProvider.ts)
```typescript
                break;
        }

        sendTelemetryEvent(Telemetry.IPyWidgetPromptToUseCDNSelection, undefined, { selection: selectionForTelemetry });
        this.configurationPromise.resolve();
    }
    private async updateScriptSources(scriptSources: WidgetCDNs[]) {
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_RENDER_FAILURE</summary>

## Description




 Telemetry event sent when the widget render function fails (note, this may not be sufficient to capture all failures).

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/message/commonMessageCoordinator.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/message/commonMessageCoordinator.ts)
```typescript
    private sendRenderFailureTelemetry(payload: Error) {
        try {
            traceError('Error rendering a widget: ', payload);
            sendTelemetryEvent(Telemetry.IPyWidgetRenderFailure);
        } catch {
            // Do nothing on a failure
        }
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_TEST_AVAILABILITY_ON_CDN</summary>

## Description




 Total time taken to discover a widget script on CDN.

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_TIME_TO_COPY_NBEXTENSIONS_DIR</summary>

## Description




 Total time take to copy the nb extensions folder.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/scriptSourceProvider/localIPyWidgetScriptManager.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/scriptSourceProvider/localIPyWidgetScriptManager.node.ts)
```typescript
            LocalIPyWidgetScriptManager.nbExtensionsCopiedKernelConnectionList.add(
                this.kernel.kernelConnectionMetadata.id
            );
            sendTelemetryEvent(Telemetry.IPyWidgetNbExtensionCopyTime, stopWatch.elapsedTime);
            return baseUrl;
        } catch (ex) {
            sendTelemetryEvent(Telemetry.IPyWidgetNbExtensionCopyTime, undefined, undefined, ex);
```


[src/notebooks/controllers/ipywidgets/scriptSourceProvider/localIPyWidgetScriptManager.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/scriptSourceProvider/localIPyWidgetScriptManager.node.ts)
```typescript
            sendTelemetryEvent(Telemetry.IPyWidgetNbExtensionCopyTime, stopWatch.elapsedTime);
            return baseUrl;
        } catch (ex) {
            sendTelemetryEvent(Telemetry.IPyWidgetNbExtensionCopyTime, undefined, undefined, ex);
            throw ex;
        }
    }
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_UNHANDLED_MESSAGE</summary>

## Description




 Telemetry event sent when the widget tries to send a kernel message but nothing was listening

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/message/commonMessageCoordinator.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/message/commonMessageCoordinator.ts)
```typescript
                this.jupyterOutput.appendLine(
                    DataScience.unhandledMessage().format(msg.header.msg_type, JSON.stringify(msg.content))
                );
                sendTelemetryEvent(Telemetry.IPyWidgetUnhandledMessage, undefined, { msg_type: msg.header.msg_type });
            } catch {
                // Don't care if this doesn't get logged
            }
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_USED_BY_USER</summary>

## Description




 Telemetry event sent with name of a Widget that is used.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/scriptSourceProvider/ipyWidgetScriptSourceProvider.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/scriptSourceProvider/ipyWidgetScriptSourceProvider.ts)
```typescript
            }
        }

        sendTelemetryEvent(Telemetry.HashedIPyWidgetNameUsed, undefined, {
            hashedName: getTelemetrySafeHashedString(found.moduleName),
            source: found.source,
            cdnSearched: this.configuredScriptSources.length > 0
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_WIDGET_VERSION_NOT_SUPPORTED_LOAD_FAILURE</summary>

## Description




 Telemetry event sent when an ipywidget version that is not supported is used & we have trapped this and warned the user abou it.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/message/commonMessageCoordinator.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/message/commonMessageCoordinator.ts)
```typescript
    }
    private sendUnsupportedWidgetVersionFailureTelemetry(payload: NotifyIPyWidgetWidgetVersionNotSupportedAction) {
        try {
            sendTelemetryEvent(Telemetry.IPyWidgetWidgetVersionNotSupportedLoadFailure, 0, {
                moduleHash: getTelemetrySafeHashedString(payload.moduleName),
                moduleVersion: payload.moduleVersion
            });
```

</details>
<details>
  <summary>DS_INTERNAL.JUPYTER_CREATING_NOTEBOOK</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/liveshare/hostJupyterServer.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/liveshare/hostJupyterServer.ts)
```typescript
            this.throwIfDisposedOrCancelled(cancelToken);
            const baseUrl = this.connection?.baseUrl || '';
            this.logRemoteOutput(DataScience.createdNewNotebook().format(baseUrl));
            sendKernelTelemetryEvent(resource, Telemetry.JupyterCreatingNotebook, stopWatch.elapsedTime);
            return session;
        } catch (ex) {
            sendKernelTelemetryEvent(
```


[src/kernels/jupyter/launcher/liveshare/hostJupyterServer.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/liveshare/hostJupyterServer.ts)
```typescript
        } catch (ex) {
            sendKernelTelemetryEvent(
                resource,
                Telemetry.JupyterCreatingNotebook,
                stopWatch.elapsedTime,
                undefined,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
```

</details>
<details>
  <summary>DS_INTERNAL.JUPYTER_CUSTOM_COMMAND_LINE</summary>

## Description




 Telemetry event sent to when user customizes the jupyter command line
 @type {(undefined | never)}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/commandLineSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/commandLineSelector.ts)
```typescript

    private async setJupyterCommandLine(val: string): Promise<void> {
        if (val) {
            sendTelemetryEvent(Telemetry.JupyterCommandLineNonDefault);
        }
        const split = parseArgsStringToArgv(val);
        await this.configuration.updateSetting(
```

</details>
<details>
  <summary>DS_INTERNAL.JUPYTER_IDLE_TIMEOUT</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/errors/jupyterWaitForIdleError.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/errors/jupyterWaitForIdleError.ts)
```typescript
export class JupyterWaitForIdleError extends BaseKernelError {
    constructor(kernelConnectionMetadata: KernelConnectionMetadata) {
        super('timeout', DataScience.jupyterLaunchTimedOut(), kernelConnectionMetadata);
        sendTelemetryEvent(Telemetry.SessionIdleTimeout);
    }
}

```

</details>
<details>
  <summary>DS_INTERNAL.JUPYTER_INSTALL_FAILED</summary>

## Description




 Telemetry event sent if there's an error installing a jupyter required dependency

 @type { product: string }
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.JUPYTER_INTALLED_BUT_NO_KERNELSPEC_MODULE</summary>

## Description




 Telemetry event sent when jupyter has been found in interpreter but we cannot find kernelspec.

 @type {(never | undefined)}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts)
```typescript
            return JupyterInterpreterDependencyResponse.ok;
        }
        // Indicate no kernel spec module.
        sendTelemetryEvent(Telemetry.JupyterInstalledButNotKernelSpecModule);
        if (Cancellation.isCanceled(token)) {
            return JupyterInterpreterDependencyResponse.cancel;
        }
```

</details>
<details>
  <summary>DS_INTERNAL.JUPYTER_REGISTER_INTERPRETER_AS_KERNEL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/jupyterKernelService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterKernelService.node.ts)
```typescript
     */
    // eslint-disable-next-line
    // eslint-disable-next-line complexity
    @captureTelemetry(Telemetry.RegisterInterpreterAsKernel, undefined, true)
    @traceDecoratorError('Failed to register an interpreter as a kernel')
    // eslint-disable-next-line
    private async registerKernel(
```

</details>
<details>
  <summary>DS_INTERNAL.JUPYTER_START_TIMEOUT</summary>

## Description


No description provided

## Properties

- 
        /**
         * Total time spent in attempting to start and connect to jupyter before giving up.
         *
         * @type {number}
         */
        timeout: number;

## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.JUPYTERSTARTUPCOST</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/jupyterExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterExecution.ts)
```typescript
    }

    // eslint-disable-next-line
    @captureTelemetry(Telemetry.StartJupyter)
    private async startNotebookServer(
        resource: Resource,
        useDefaultConfig: boolean,
```

</details>
<details>
  <summary>DS_INTERNAL.KERNEL_COUNT</summary>

## Description



 Misc

## Properties


No properties for event


## Locations Used

[src/notebooks/telemetry/kernelTelemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/telemetry/kernelTelemetry.ts)
```typescript
    });
    trackKernelResourceInformation(resource, counters);
    if (stopWatch) {
        sendKernelTelemetryEvent(resource, Telemetry.KernelCount, stopWatch.elapsedTime, counters);
    }
}

```

</details>
<details>
  <summary>DS_INTERNAL.KERNEL_ENUMERATION</summary>

## Description




 Telemetry event sent to every time a kernel enumeration is done

 @type {...}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.KERNEL_LAUNCHER_PERF</summary>

## Description




 Total time taken to Launch a raw kernel.

## Properties


No properties for event


## Locations Used

[src/kernels/raw/launcher/kernelLauncher.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/launcher/kernelLauncher.node.ts)
```typescript
        })();
        sendKernelTelemetryWhenDone(
            resource,
            Telemetry.KernelLauncherPerf,
            promise,
            false /* No need to send telemetry for kernel launch failures, that's sent elsewhere */
        );
```

</details>
<details>
  <summary>DS_INTERNAL.KERNEL_LISTING_PERF</summary>

## Description


No description provided

## Properties

- 
        /**
         * Whether this is the first time in the session.
         * (fetching kernels first time in the session is slower, later its cached).
         * This is a generic property supported for all telemetry (sent by decorators).
         */
        firstTime?: boolean;
- 
        /**
         * Whether this telemetry is for listing of all kernels or just python or just non-python.
         * (fetching kernels first time in the session is slower, later its cached).
         */
        kind: 'remote' | 'local' | 'localKernelSpec' | 'localPython';

## Locations Used

[src/kernels/raw/finder/localKnownPathKernelSpecFinder.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/finder/localKnownPathKernelSpecFinder.node.ts)
```typescript
    /**
     * @param {boolean} includePythonKernels Include/exclude Python kernels in the result.
     */
    @captureTelemetry(Telemetry.KernelListingPerf, { kind: 'localKernelSpec' })
    public async listKernelSpecs(
        includePythonKernels: boolean,
        cancelToken?: CancellationToken
```


[src/kernels/raw/finder/localPythonAndRelatedNonPythonKernelSpecFinder.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/finder/localPythonAndRelatedNonPythonKernelSpecFinder.node.ts)
```typescript
    ) {
        super(fs, workspaceService, extensionChecker, globalState);
    }
    @captureTelemetry(Telemetry.KernelListingPerf, { kind: 'localPython' })
    public async listKernelSpecs(resource: Resource, ignoreCache?: boolean, cancelToken?: CancellationToken) {
        // Get an id for the workspace folder, if we don't have one, use the fsPath of the resource
        const workspaceFolderId =
```


[src/kernels/jupyter/finder/remoteKernelFinder.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/finder/remoteKernelFinder.ts)
```typescript
    }

    // Talk to the remote server to determine sessions
    @captureTelemetry(Telemetry.KernelListingPerf, { kind: 'remote' })
    public async listKernelsFromConnection(
        _resource: Resource,
        connInfo: INotebookProviderConnection
```


[src/kernels/raw/finder/localKernelFinder.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/finder/localKernelFinder.node.ts)
```typescript
     * Search all our local file system locations for installed kernel specs and return them
     */
    @traceDecoratorError('List kernels failed')
    @captureTelemetry(Telemetry.KernelListingPerf, { kind: 'local' })
    public async listKernels(
        resource: Resource,
        @ignoreLogging() cancelToken?: CancellationToken
```

</details>
<details>
  <summary>DS_INTERNAL.KERNEL_NOT_INSTALLED</summary>

## Description


No description provided

## Properties

- 
        action: 'displayed';
-  // Message displayed.
        /**
         * Language found in the notebook if a known language. Otherwise 'unknown'
         */
        language: string;

## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.KERNEL_PROVIDER_PERF</summary>

## Description




 Total time taken to list kernels for VS Code.

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.KERNEL_REGISTER_FAILED</summary>

## Description




 Telemetry event sent to indicate registering a kernel with jupyter failed.

 @type {(undefined | never)}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.KERNEL_SPEC_NOT_FOUND</summary>

## Description




 Telemetry event sent to indicate 'jupyter kernelspec' is not possible.

 @type {(undefined | never)}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts)
```typescript
            .then(() => true)
            .catch((e) => {
                traceError(`Kernel spec not found: `, e);
                sendTelemetryEvent(Telemetry.KernelSpecNotFound);
                return false;
            });
    }
```

</details>
<details>
  <summary>DS_INTERNAL.LOCAL_KERNEL_SPEC_COUNT</summary>

## Description


No description provided

## Properties

- 
        /**
         * Number of kernel specs.
         */
        count: number;

## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.NATIVE_VARIABLE_VIEW_LOADED</summary>

## Description



 Native variable view events

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/variablesView/variableView.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/variablesView/variableView.ts)
```typescript
        this.dataViewerChecker = new DataViewerChecker(configuration, appShell);
    }

    @captureTelemetry(Telemetry.NativeVariableViewLoaded)
    public async load(codeWebview: vscodeWebviewView) {
        await super.loadWebview(Uri.file(process.cwd()), codeWebview).catch(traceError);

```

</details>
<details>
  <summary>DS_INTERNAL.NATIVE_VARIABLE_VIEW_MADE_VISIBLE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/variablesView/variableView.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/variablesView/variableView.ts)
```typescript

        // I've we've been made visible, make sure that we are updated
        if (visible) {
            sendTelemetryEvent(Telemetry.NativeVariableViewMadeVisible);
            // If there is an active execution count, update the view with that info
            // Keep the variables up to date if document has run cells while the view was not visible
            if (this.notebookWatcher.activeNotebookExecutionCount !== undefined) {
```

</details>
<details>
  <summary>DS_INTERNAL.NATIVE.NOTEBOOK_OPEN_COUNT</summary>

## Description




 Total number of Jupyter notebooks or IW opened. Telemetry Sent when VS Code is closed.

## Properties


No properties for event


## Locations Used

[src/notebooks/notebookUsageTracker.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/notebookUsageTracker.ts)
```typescript
    public dispose() {
        // Send a bunch of telemetry
        if (this.openedNotebookCount) {
            sendTelemetryEvent(Telemetry.NotebookOpenCount, undefined, { count: this.openedNotebookCount });
        }
        if (this.executedNotebooksIndexedByUri.size) {
            sendTelemetryEvent(Telemetry.NotebookRunCount, undefined, {
```

</details>
<details>
  <summary>DS_INTERNAL.NATIVE.NOTEBOOK_OPEN_TIME</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.NATIVE.NOTEBOOK_RUN_COUNT</summary>

## Description




 Total number of cells executed. Telemetry Sent when VS Code is closed.

## Properties


No properties for event


## Locations Used

[src/notebooks/notebookUsageTracker.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/notebookUsageTracker.ts)
```typescript
            sendTelemetryEvent(Telemetry.NotebookOpenCount, undefined, { count: this.openedNotebookCount });
        }
        if (this.executedNotebooksIndexedByUri.size) {
            sendTelemetryEvent(Telemetry.NotebookRunCount, undefined, {
                count: this.executedNotebooksIndexedByUri.size
            });
        }
```

</details>
<details>
  <summary>DS_INTERNAL.NATIVE.OPEN_NOTEBOOK_FAILURE</summary>

## Description




 Telemetry event fired if a failure occurs loading a notebook

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.NEW_FILE_USED_IN_INTERACTIVE</summary>

## Description




 Telemetry event sent when a user runs the interactive window with a new file
 @type {(undefined | never)}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.NUMBER_OF_REMOTE_KERNEL_IDS_SAVED</summary>

## Description



 When users connect to a remote kernel, we store the kernel id so we can re-connect to that
 when user opens the same notebook. We only store the last 100.
 Count is the number of entries saved in the list.

## Properties

-  count: number

## Locations Used

[src/kernels/jupyter/preferredRemoteKernelIdProvider.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/preferredRemoteKernelIdProvider.ts)
```typescript
        }

        // Prune list if too big
        sendTelemetryEvent(Telemetry.NumberOfSavedRemoteKernelIds, undefined, { count: list.length });
        while (list.length > MaximumKernelIdListSize) {
            requiresUpdate = true;
            list.shift();
```

</details>
<details>
  <summary>DS_INTERNAL.PERCEIVED_JUPYTER_STARTUP_NOTEBOOK</summary>

## Description




 Time take for jupyter server to start and be ready to run first user cell.
 (Note: The property `notebook` only gets sent correctly in Jupyter version 2022.8.0 or later)

## Properties


No properties for event


## Locations Used

[src/kernels/kernel.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernel.ts)
```typescript
                .then((session) => {
                    sendKernelTelemetryEvent(
                        this.resourceUri,
                        Telemetry.PerceivedJupyterStartupNotebook,
                        stopWatch.elapsedTime
                    );
                    return session;
```


[src/kernels/kernel.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernel.ts)
```typescript
            this.perceivedJupyterStartupTelemetryCaptured = true;
            sendKernelTelemetryEvent(
                this.resourceUri,
                Telemetry.PerceivedJupyterStartupNotebook,
                stopWatch.elapsedTime
            );
            executionPromise
```

</details>
<details>
  <summary>DS_INTERNAL.PREFERRED_KERNEL</summary>

## Description




 Telemetry sent when we have attempted to find the preferred kernel.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/controllerPreferredService.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/controllerPreferredService.ts)
```typescript
                ? PYTHON_LANGUAGE
                : getTelemetrySafeLanguage(getLanguageInNotebookMetadata(notebookMetadata) || '');

        sendTelemetryEvent(Telemetry.PreferredKernel, undefined, {
            result: preferredConnection ? 'found' : 'notfound',
            resourceType,
            language: telemetrySafeLanguage,
```

</details>
<details>
  <summary>DS_INTERNAL.PREFERRED_KERNEL_EXACT_MATCH</summary>

## Description


No description provided

## Properties

- 
        matchedReason: PreferredKernelExactMatchReason;

## Locations Used

[src/notebooks/controllers/controllerPreferredService.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/controllerPreferredService.ts)
```typescript
            topMatchIsPreferredInterpreter && (matchReason |= PreferredKernelExactMatchReason.WasPreferredInterpreter);
            isExactMatch && (matchReason |= PreferredKernelExactMatchReason.IsExactMatch);
            isNonPythonLanguageMatch && (matchReason |= PreferredKernelExactMatchReason.IsNonPythonKernelLanguageMatch);
            sendTelemetryEvent(Telemetry.PreferredKernelExactMatch, undefined, {
                matchedReason: matchReason
            });
        }
```

</details>
<details>
  <summary>DS_INTERNAL.PYTHON_EXTENSION_INSTALLED_VIA_KERNEL_PICKER</summary>

## Description


No description provided

## Properties

- 
        action:
            | 'success' // Correctly installed and hooked the API
            | 'failed';

## Locations Used

[src/notebooks/controllers/commands/installPythonControllerCommands.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/commands/installPythonControllerCommands.ts)
```typescript
                // Make sure that we didn't timeout waiting for the hook
                if (this.extensionChecker.isPythonExtensionInstalled && typeof hookResult !== 'number') {
                    traceInfo('Python Extension installed via Kernel Picker command');
                    sendTelemetryEvent(Telemetry.PythonExtensionInstalledViaKernelPicker, undefined, {
                        action: 'success'
                    });

```


[src/notebooks/controllers/commands/installPythonControllerCommands.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/commands/installPythonControllerCommands.ts)
```typescript
                    await this.controllerLoader.loadControllers(true);
                } else {
                    traceError('Failed to install Python Extension via Kernel Picker command');
                    sendTelemetryEvent(Telemetry.PythonExtensionInstalledViaKernelPicker, undefined, {
                        action: 'failed'
                    });
                    this.errorHandler
```

</details>
<details>
  <summary>DS_INTERNAL.PYTHON_EXTENSION_NOT_INSTALLED</summary>

## Description


No description provided

## Properties

- 
        action:
            | 'displayed' // Message displayed.
            | 'dismissed' // user dismissed the message.
            | 'download';

## Locations Used

[src/platform/api/pythonApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/api/pythonApi.ts)
```typescript
        PythonExtensionChecker.promptDisplayed = true;
        // Ask user if they want to install and then wait for them to actually install it.
        const yes = localize.Common.bannerLabelYes();
        sendTelemetryEvent(Telemetry.PythonExtensionNotInstalled, undefined, { action: 'displayed' });
        const answer = await this.appShell.showInformationMessage(
            localize.DataScience.pythonExtensionRequired(),
            { modal: true },
```


[src/platform/api/pythonApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/api/pythonApi.ts)
```typescript
            yes
        );
        if (answer === yes) {
            sendTelemetryEvent(Telemetry.PythonExtensionNotInstalled, undefined, { action: 'download' });
            await this.installPythonExtension();
        } else {
            sendTelemetryEvent(Telemetry.PythonExtensionNotInstalled, undefined, { action: 'dismissed' });
```


[src/platform/api/pythonApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/api/pythonApi.ts)
```typescript
            sendTelemetryEvent(Telemetry.PythonExtensionNotInstalled, undefined, { action: 'download' });
            await this.installPythonExtension();
        } else {
            sendTelemetryEvent(Telemetry.PythonExtensionNotInstalled, undefined, { action: 'dismissed' });
        }
    }
    private async installPythonExtension() {
```


[src/notebooks/controllers/commands/installPythonControllerCommands.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/commands/installPythonControllerCommands.ts)
```typescript
    // click run again
    private async installPythonExtensionViaKernelPicker(): Promise<void> {
        if (!this.extensionChecker.isPythonExtensionInstalled) {
            sendTelemetryEvent(Telemetry.PythonExtensionNotInstalled, undefined, { action: 'displayed' });

            if (!(await this.shouldInstallExtensionPrompt())) {
                // Check with the user before we move forward, if they don't want the install, just bail
```


[src/notebooks/controllers/commands/installPythonControllerCommands.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/commands/installPythonControllerCommands.ts)
```typescript
                Common.install()
            );
            if (selection === Common.install()) {
                sendTelemetryEvent(Telemetry.PythonExtensionNotInstalled, undefined, { action: 'download' });
                return true;
            } else {
                // If they don't want to install, just bail out at this point
```


[src/notebooks/controllers/commands/installPythonControllerCommands.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/commands/installPythonControllerCommands.ts)
```typescript
                return true;
            } else {
                // If they don't want to install, just bail out at this point
                sendTelemetryEvent(Telemetry.PythonExtensionNotInstalled, undefined, { action: 'dismissed' });
                return false;
            }
        }
```

</details>
<details>
  <summary>DS_INTERNAL.PYTHON_KERNEL_EXECUTABLE_MATCHES</summary>

## Description




 Telemetry sent for local Python Kernels.
 Tracking whether we have managed to launch the kernel that matches the interpreter.
 If match=false, then this means we have failed to launch the right kernel.

## Properties


No properties for event


## Locations Used

[src/kernels/helpers.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/helpers.node.ts)
```typescript
        }
        const sysExecutable = concatMultilineString(output.text).trim().toLowerCase();
        const match = areInterpreterPathsSame(kernelConnection.interpreter.uri, Uri.file(sysExecutable));
        sendTelemetryEvent(Telemetry.PythonKerneExecutableMatches, undefined, {
            match: match ? 'true' : 'false',
            kernelConnectionType: kernelConnection.kind
        });
```


[src/kernels/helpers.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/helpers.node.ts)
```typescript
                        Uri.file(execOutput.stdout.trim().toLowerCase()),
                        Uri.file(sysExecutable)
                    );
                    sendTelemetryEvent(Telemetry.PythonKerneExecutableMatches, undefined, {
                        match: match ? 'true' : 'false',
                        kernelConnectionType: kernelConnection.kind
                    });
```

</details>
<details>
  <summary>DS_INTERNAL.PYTHON_MODULE_INSTALL</summary>

## Description


No description provided

## Properties

- 
        moduleName: string;
- 
        /**
         * Whether the module was already (once before) installed into the python environment or
         * whether this already exists (detected via `pip list`)
         */
        isModulePresent?: 'true' | undefined;
- 
        action:
            | 'cancelled' // User cancelled the installation or closed the notebook or the like.
            | 'displayed' // Install prompt may have been displayed.
            | 'prompted' // Install prompt was displayed.
            | 'installed' // Installation disabled (this is what python extension returns).
            | 'ignored' // Installation disabled (this is what python extension returns).
            | 'disabled' // Installation disabled (this is what python extension returns).
            | 'failed' // Installation disabled (this is what python extension returns).
            | 'install' // User chose install from prompt.
            | 'donotinstall' // User chose not to install from prompt.
            | 'differentKernel' // User chose to select a different kernel.
            | 'error' // Some other error.
            | 'installedInJupyter' // The package was successfully installed in Jupyter whilst failed to install in Python ext.
            | 'failedToInstallInJupyter' // Failed to install the package in Jupyter as well as Python ext.
            | 'dismissed' // User chose to dismiss the prompt.
            | 'moreInfo';
-  // User requested more information on the module in question
        resourceType?: 'notebook' | 'interactive';
- 
        /**
         * Hash of the resource (notebook.uri or pythonfile.uri associated with this).
         * If we run the same notebook tomorrow, the hash will be the same.
         */
        resourceHash?: string;
- 
        pythonEnvType?: EnvironmentType;

## Locations Used

[src/kernels/installer/productInstaller.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/installer/productInstaller.node.ts)
```typescript
            action = 'failed';
            throw ex;
        } finally {
            sendTelemetryEvent(Telemetry.PythonModuleInstall, undefined, {
                action,
                moduleName: ProductNames.get(product)!
            });
```


[src/kernels/kernelDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelDependencyService.node.ts)
```typescript
        const productNameForTelemetry = products.map((product) => ProductNames.get(product)!).join(', ');
        const resourceType = resource ? getResourceType(resource) : undefined;
        const resourceHash = resource ? getTelemetrySafeHashedString(resource.toString()) : undefined;
        sendKernelTelemetryEvent(resource, Telemetry.PythonModuleInstall, undefined, {
            action: 'displayed',
            moduleName: productNameForTelemetry,
            resourceType,
```


[src/kernels/kernelDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelDependencyService.node.ts)
```typescript

        try {
            if (!this.isCodeSpace) {
                sendKernelTelemetryEvent(resource, Telemetry.PythonModuleInstall, undefined, {
                    action: 'prompted',
                    moduleName: productNameForTelemetry,
                    resourceType,
```


[src/kernels/kernelDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelDependencyService.node.ts)
```typescript
                      ]);

                if (selection === moreInfoOption) {
                    sendKernelTelemetryEvent(resource, Telemetry.PythonModuleInstall, undefined, {
                        action: 'moreInfo',
                        moduleName: productNameForTelemetry,
                        resourceType,
```


[src/kernels/kernelDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelDependencyService.node.ts)
```typescript
                // "More Info" isn't a full valid response here, so reprompt after showing it
            } while (selection === moreInfoOption);
            if (cancelTokenSource.token.isCancellationRequested) {
                sendKernelTelemetryEvent(resource, Telemetry.PythonModuleInstall, undefined, {
                    action: 'dismissed',
                    moduleName: productNameForTelemetry,
                    resourceType,
```


[src/kernels/kernelDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelDependencyService.node.ts)
```typescript
                return KernelInterpreterDependencyResponse.cancel;
            }
            if (selection === selectKernelOption) {
                sendKernelTelemetryEvent(resource, Telemetry.PythonModuleInstall, undefined, {
                    action: 'differentKernel',
                    moduleName: productNameForTelemetry,
                    resourceType,
```


[src/kernels/kernelDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelDependencyService.node.ts)
```typescript
                });
                return KernelInterpreterDependencyResponse.selectDifferentKernel;
            } else if (selection === installOption) {
                sendKernelTelemetryEvent(resource, Telemetry.PythonModuleInstall, undefined, {
                    action: 'install',
                    moduleName: productNameForTelemetry,
                    resourceType,
```


[src/kernels/kernelDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelDependencyService.node.ts)
```typescript
                    cancellationPromise
                ]);
                if (response === InstallerResponse.Installed) {
                    sendKernelTelemetryEvent(resource, Telemetry.PythonModuleInstall, undefined, {
                        action: 'installed',
                        moduleName: productNameForTelemetry,
                        resourceType,
```


[src/kernels/kernelDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelDependencyService.node.ts)
```typescript
                    });
                    return KernelInterpreterDependencyResponse.ok;
                } else if (response === InstallerResponse.Ignore) {
                    sendKernelTelemetryEvent(resource, Telemetry.PythonModuleInstall, undefined, {
                        action: 'failed',
                        moduleName: productNameForTelemetry,
                        resourceType,
```


[src/kernels/kernelDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelDependencyService.node.ts)
```typescript
                    return KernelInterpreterDependencyResponse.failed; // Happens when errors in pip or conda.
                }
            }
            sendKernelTelemetryEvent(resource, Telemetry.PythonModuleInstall, undefined, {
                action: 'dismissed',
                moduleName: productNameForTelemetry,
                resourceType,
```


[src/kernels/kernelDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelDependencyService.node.ts)
```typescript
            return KernelInterpreterDependencyResponse.cancel;
        } catch (ex) {
            traceError(`Failed to install ${productNameForTelemetry}`, ex);
            sendKernelTelemetryEvent(resource, Telemetry.PythonModuleInstall, undefined, {
                action: 'error',
                moduleName: productNameForTelemetry,
                resourceType,
```


[src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts)
```typescript
                pipInstalledInNonCondaEnv === false ? [Product.pip].concat(missingProducts) : missingProducts,
                interpreter.displayName
            );
            sendTelemetryEvent(Telemetry.PythonModuleInstall, undefined, {
                action: 'displayed',
                moduleName: ProductNames.get(Product.jupyter)!,
                pythonEnvType: interpreter.envType
```


[src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.PythonModuleInstall, {
        action: 'displayed',
        moduleName: ProductNames.get(Product.pandas)!
    })
```

</details>
<details>
  <summary>DS_INTERNAL.PYTHON_NOT_INSTALLED</summary>

## Description


No description provided

## Properties

- 
        action:
            | 'displayed' // Message displayed.
            | 'dismissed' // user dismissed the message.
            | 'download';

## Locations Used

[src/notebooks/controllers/commands/installPythonControllerCommands.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/commands/installPythonControllerCommands.ts)
```typescript
    // Unlike installing the python extension we don't expect in progress executions to be handled
    // when this command is installed, user will have to manually install python and rerun the cell
    private async installPythonViaKernelPicker(): Promise<void> {
        sendTelemetryEvent(Telemetry.PythonNotInstalled, undefined, { action: 'displayed' });
        const selection = await this.appShell.showErrorMessage(
            DataScience.pythonNotInstalled(),
            { modal: true },
```


[src/notebooks/controllers/commands/installPythonControllerCommands.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/commands/installPythonControllerCommands.ts)
```typescript
        );

        if (selection === Common.install()) {
            sendTelemetryEvent(Telemetry.PythonNotInstalled, undefined, { action: 'download' });
            // Activate the python extension command to show how to install python
            await this.commandManager.executeCommand('python.installPython');
        } else {
```


[src/notebooks/controllers/commands/installPythonControllerCommands.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/commands/installPythonControllerCommands.ts)
```typescript
            // Activate the python extension command to show how to install python
            await this.commandManager.executeCommand('python.installPython');
        } else {
            sendTelemetryEvent(Telemetry.PythonNotInstalled, undefined, { action: 'dismissed' });
        }
    }

```

</details>
<details>
  <summary>DS_INTERNAL.RANK_KERNELS_PERF</summary>

## Description




 Total time taken to find a kernel on disc or on a remote machine.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/kernelRanking/kernelRankingHelper.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/kernelRanking/kernelRankingHelper.ts)
```typescript
    ) {}

    @traceDecoratorVerbose('Rank Kernels', TraceOptions.BeforeCall | TraceOptions.Arguments)
    @captureTelemetry(Telemetry.RankKernelsPerf)
    public async rankKernels(
        resource: Resource,
        notebookMetadata?: INotebookMetadata | undefined,
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_CREATING_NOTEBOOK</summary>

## Description



 Telemetry send when we create a notebook for a raw kernel or jupyter

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/hostRawNotebookProvider.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/hostRawNotebookProvider.node.ts)
```typescript
        return this.rawNotebookSupportedService.isSupported;
    }

    @captureTelemetry(Telemetry.RawKernelCreatingNotebook, undefined, true)
    public async createNotebook(
        resource: Resource,
        kernelConnection: KernelConnectionMetadata,
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_INFO_RESPONSE</summary>

## Description




 After starting a kernel we send a request to get the kernel info.
 This tracks the total time taken to get the response back (or wether we timedout).
 If we timeout and later we find successful comms for this session, then timeout is too low
 or we need more attempts.

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
        } else {
            traceWarning(`Didn't get response for requestKernelInfo after ${stopWatch.elapsedTime}ms.`);
        }
        sendKernelTelemetryEvent(this.resource, Telemetry.RawKernelInfoResonse, stopWatch.elapsedTime, {
            attempts,
            timedout: !gotIoPubMessage.completed
        });
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_PROCESS_LAUNCH</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/raw/launcher/kernelProcess.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/launcher/kernelProcess.node.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.RawKernelProcessLaunch, undefined, true)
    public async launch(workingDirectory: string, timeout: number, cancelToken: CancellationToken): Promise<void> {
        if (this.launchedOnce) {
            throw new Error('Kernel has already been launched.');
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_SESSION_CONNECT</summary>

## Description



 Raw kernel timing events

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
                throw error;
            }
        } finally {
            sendKernelTelemetryEvent(this.resource, Telemetry.RawKernelSessionConnect, stopWatch.elapsedTime);
        }

        this.connected = true;
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_SESSION_DISPOSED</summary>

## Description




 This event is sent when a RawSession's `dispose` method is called.

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/rawSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawSession.node.ts)
```typescript
    public async dispose() {
        // We want to know who called dispose on us
        const stacktrace = new Error().stack;
        sendKernelTelemetryEvent(this.resource, Telemetry.RawKernelSessionDisposed, undefined, { stacktrace });

        // Now actually dispose ourselves
        this.isDisposing = true;
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_SESSION_KERNEL_PROCESS_EXITED</summary>

## Description




 This event is sent when the underlying kernelProcess for a
 RawJupyterSession exits.

## Properties


No properties for event


## Locations Used

[src/kernels/raw/launcher/kernelLauncher.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/launcher/kernelLauncher.node.ts)
```typescript

        const disposable = kernelProcess.exited(
            ({ exitCode, reason }) => {
                sendKernelTelemetryEvent(resource, Telemetry.RawKernelSessionKernelProcessExited, undefined, {
                    exitCode,
                    exitReason: getTelemetrySafeErrorMessageFromPythonTraceback(reason)
                });
```


[src/kernels/raw/session/rawSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawSession.node.ts)
```typescript
        traceError(`Disposing session as kernel process died ExitCode: ${e.exitCode}, Reason: ${e.reason}`);
        // Send telemetry so we know why the kernel process exited,
        // as this affects our kernel startup success
        sendKernelTelemetryEvent(this.resource, Telemetry.RawKernelSessionKernelProcessExited, undefined, {
            exitCode: e.exitCode,
            exitReason: getTelemetrySafeErrorMessageFromPythonTraceback(e.reason)
        });
```


[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
            if (session !== this.session) {
                return;
            }
            sendKernelTelemetryEvent(this.resource, Telemetry.RawKernelSessionKernelProcessExited, undefined, {
                exitCode,
                exitReason: getTelemetrySafeErrorMessageFromPythonTraceback(reason)
            });
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_SESSION_NO_IPYKERNEL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/kernelConnector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/kernelConnector.ts)
```typescript
        const rawNotebookProvider = serviceContainer.tryGet<IRawNotebookProvider>(IRawNotebookProvider);
        const rawLocalKernel = rawNotebookProvider?.isSupported && isLocal;
        if (rawLocalKernel && errorContext === 'start') {
            sendKernelTelemetryEvent(resource, Telemetry.RawKernelSessionStartNoIpykernel, {
                reason: handleResult
            });
        }
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_SESSION_SHUTDOWN</summary>

## Description




 This event is sent when a RawJupyterSession's `shutdownSession`
 method is called.

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
        // We want to know why we got shut down
        const stacktrace = new Error().stack;
        return super.shutdownSession(session, statusHandler, isRequestToShutdownRestartSession).then(() => {
            sendKernelTelemetryEvent(this.resource, Telemetry.RawKernelSessionShutdown, undefined, {
                isRequestToShutdownRestartSession,
                stacktrace
            });
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_SESSION_START</summary>

## Description



 Raw kernel single events

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
            Cancellation.throwIfCanceled(options.token);
            // Only connect our session if we didn't cancel or timeout
            sendKernelTelemetryEvent(this.resource, Telemetry.RawKernelSessionStartSuccess);
            sendKernelTelemetryEvent(this.resource, Telemetry.RawKernelSessionStart, stopWatch.elapsedTime);
            traceInfo(
                `${DataScience.kernelStarted().format(
                    getDisplayNameOrNameOfKernelConnection(this.kernelConnectionMetadata)
```


[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
            if (isCancellationError(error) || options.token.isCancellationRequested) {
                sendKernelTelemetryEvent(
                    this.resource,
                    Telemetry.RawKernelSessionStart,
                    stopWatch.elapsedTime,
                    undefined,
                    error
```


[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
                // Send our telemetry event with the error included
                sendKernelTelemetryEvent(
                    this.resource,
                    Telemetry.RawKernelSessionStart,
                    stopWatch.elapsedTime,
                    undefined,
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_SESSION_START_EXCEPTION</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
                );
                sendKernelTelemetryEvent(
                    this.resource,
                    Telemetry.RawKernelSessionStartException,
                    undefined,
                    undefined,
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_SESSION_START_SUCCESS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
            newSession = await this.startRawSession({ ...options, purpose: 'start' });
            Cancellation.throwIfCanceled(options.token);
            // Only connect our session if we didn't cancel or timeout
            sendKernelTelemetryEvent(this.resource, Telemetry.RawKernelSessionStartSuccess);
            sendKernelTelemetryEvent(this.resource, Telemetry.RawKernelSessionStart, stopWatch.elapsedTime);
            traceInfo(
                `${DataScience.kernelStarted().format(
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_SESSION_START_TIMEOUT</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_SESSION_START_USER_CANCEL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
                    undefined,
                    error
                );
                sendKernelTelemetryEvent(this.resource, Telemetry.RawKernelSessionStartUserCancel);
                traceVerbose('Starting of raw session cancelled by user');
                throw error;
            } else {
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_START_RAW_SESSION</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
        return this.startRawSession({ token: cancelToken, ui: new DisplayOptions(disableUI), purpose: 'restart' });
    }

    @captureTelemetry(Telemetry.RawKernelStartRawSession, undefined, true)
    private async startRawSession(options: {
        token: CancellationToken;
        ui: IDisplayOptions;
```

</details>
<details>
  <summary>DS_INTERNAL.REGISTER_AND_USE_INTERPRETER_AS_KERNEL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/jupyterKernelService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterKernelService.node.ts)
```typescript
            );
        }

        sendTelemetryEvent(Telemetry.RegisterAndUseInterpreterAsKernel);
        return kernelSpecFilePath.fsPath;
    }
    private async updateKernelEnvironment(
```

</details>
<details>
  <summary>DS_INTERNAL.REMOTE_KERNEL_SPEC_COUNT</summary>

## Description


No description provided

## Properties

- 
        /**
         * Number of kernel specs.
         */
        count: number;

## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.RESTART_JUPYTER_TIME</summary>

## Description




 Total time taken to restart a kernel.
 Identical to `Telemetry.RestartKernel`

## Properties


No properties for event


## Locations Used

[src/kernels/execution/kernelExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/execution/kernelExecution.ts)
```typescript
    }

    @captureTelemetry(Telemetry.RestartKernel)
    @captureTelemetry(Telemetry.RestartJupyterTime)
    private async restartExecution(session: IKernelConnectionSession): Promise<void> {
        // Just use the internal session. Pending cells should have been canceled by the caller
        await session.restart();
```

</details>
<details>
  <summary>DS_INTERNAL.RESTART_KERNEL</summary>

## Description




 Total time taken to restart a kernel.
 Identical to `Telemetry.RestartJupyterTime`

## Properties


No properties for event


## Locations Used

[src/kernels/execution/kernelExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/execution/kernelExecution.ts)
```typescript
        });
    }

    @captureTelemetry(Telemetry.RestartKernel)
    @captureTelemetry(Telemetry.RestartJupyterTime)
    private async restartExecution(session: IKernelConnectionSession): Promise<void> {
        // Just use the internal session. Pending cells should have been canceled by the caller
```

</details>
<details>
  <summary>DS_INTERNAL.RUNTEST</summary>

## Description


No description provided

## Properties

- 
        testName: string;
- 
        testResult: string;
- 
        perfWarmup?: 'true';
- 
        commitHash?: string;
- 
        timedCheckpoints?: string;

## Locations Used

[src/test/testHooks.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/testHooks.node.ts)
```typescript
            dimensions = { ...dimensions, commitHash: process.env.GITHUB_SHA };
        }

        traceInfoIfCI(`Sending telemetry event ${Telemetry.RunTest} with dimensions ${JSON.stringify(dimensions)}`);
        telemetryReporter.sendDangerousTelemetryEvent(Telemetry.RunTest, dimensions, measures);
    },
    afterAll: async () => {
```


[src/test/testHooks.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/testHooks.node.ts)
```typescript
        }

        traceInfoIfCI(`Sending telemetry event ${Telemetry.RunTest} with dimensions ${JSON.stringify(dimensions)}`);
        telemetryReporter.sendDangerousTelemetryEvent(Telemetry.RunTest, dimensions, measures);
    },
    afterAll: async () => {
        if (!IS_CI_SERVER) {
```

</details>
<details>
  <summary>DS_INTERNAL.SELECT_JUPYTER_INTERPRETER</summary>

## Description


No description provided

## Properties

- 
        /**
         * The result of the selection.
         * notSelected - No interpreter was selected.
         * selected - An interpreter was selected (and configured to have jupyter and notebook).
         * installationCancelled - Installation of jupyter and/or notebook was cancelled for an interpreter.
         *
         * @type {('notSelected' | 'selected' | 'installationCancelled')}
         */
        result?: 'notSelected' | 'selected' | 'installationCancelled';

## Locations Used

[src/kernels/jupyter/interpreter/jupyterInterpreterService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterService.node.ts)
```typescript
    public async selectInterpreter(): Promise<PythonEnvironment | undefined> {
        const interpreter = await this.jupyterInterpreterSelector.selectInterpreter();
        if (!interpreter) {
            sendTelemetryEvent(Telemetry.SelectJupyterInterpreter, undefined, { result: 'notSelected' });
            return;
        }

```


[src/kernels/jupyter/interpreter/jupyterInterpreterService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterService.node.ts)
```typescript
                return interpreter;
            }
            case JupyterInterpreterDependencyResponse.cancel:
                sendTelemetryEvent(Telemetry.SelectJupyterInterpreter, undefined, { result: 'installationCancelled' });
                return;
            default:
                return this.selectInterpreter();
```


[src/kernels/jupyter/interpreter/jupyterInterpreterService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterService.node.ts)
```typescript
        this._selectedInterpreter = interpreter;
        this._onDidChangeInterpreter.fire(interpreter);
        this.interpreterSelectionState.updateSelectedPythonPath(interpreter.uri);
        sendTelemetryEvent(Telemetry.SelectJupyterInterpreter, undefined, { result: 'selected' });
    }

    // For a given python path check if it can run jupyter for us
```

</details>
<details>
  <summary>DS_INTERNAL.SELECT_JUPYTER_INTERPRETER_MESSAGE_DISPLAYED</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/interpreter/jupyterInterpreterSubCommandExecutionService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterSubCommandExecutionService.node.ts)
```typescript
            if (!interpreter) {
                // Unlikely scenario, user hasn't selected python, python extension will fall over.
                // Get user to select something.
                sendTelemetryEvent(Telemetry.SelectJupyterInterpreterMessageDisplayed);
                return DataScience.selectJupyterInterpreter();
            }
        }
```

</details>
<details>
  <summary>DS_INTERNAL.SETTINGS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/standalone/activation/globalActivation.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/activation/globalActivation.ts)
```typescript
                    resultSettings[k] = currentValue;
                }
            }
            sendTelemetryEvent(Telemetry.DataScienceSettings, 0, resultSettings);
        }
    }
}
```

</details>
<details>
  <summary>DS_INTERNAL.SHIFTENTER_BANNER_SHOWN</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/shiftEnterBanner.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/shiftEnterBanner.ts)
```typescript
            return;
        }

        sendTelemetryEvent(Telemetry.ShiftEnterBannerShown);
        const response = await this.appShell.showInformationMessage(this.bannerMessage, ...this.bannerLabels);
        switch (response) {
            case this.bannerLabels[InteractiveShiftEnterLabelIndex.Yes]: {
```


[src/test/datascience/shiftEnterBanner.unit.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/datascience/shiftEnterBanner.unit.test.ts)
```typescript
        config.verifyAll();

        expect(Reporter.eventNames).to.deep.equal([
            Telemetry.ShiftEnterBannerShown,
            Telemetry.EnableInteractiveShiftEnter
        ]);
    });
```


[src/test/datascience/shiftEnterBanner.unit.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/datascience/shiftEnterBanner.unit.test.ts)
```typescript
        config.verifyAll();

        expect(Reporter.eventNames).to.deep.equal([
            Telemetry.ShiftEnterBannerShown,
            Telemetry.DisableInteractiveShiftEnter
        ]);
    });
```

</details>
<details>
  <summary>DS_INTERNAL.SHOW_DATA_NO_PANDAS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts)
```typescript
                const versionStr = `${pandasVersion.major}.${pandasVersion.minor}.${pandasVersion.build}`;
                await this.promptInstall(executer, tokenSource, versionStr);
            }
            sendTelemetryEvent(Telemetry.PandasNotInstalled);
            await this.promptInstall(executer, tokenSource);
        } finally {
            tokenSource.dispose();
```

</details>
<details>
  <summary>DS_INTERNAL.SHOW_DATA_PANDAS_INSTALL_CANCELED</summary>

## Description


No description provided

## Properties

-  version: string

## Locations Used

[src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts)
```typescript
            const pandasVersion = await this.getVersion(executer, tokenSource.token);

            if (Cancellation.isCanceled(tokenSource.token)) {
                sendTelemetryEvent(Telemetry.PandasInstallCanceled);
                return;
            }

```

</details>
<details>
  <summary>DS_INTERNAL.SHOW_DATA_PANDAS_OK</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts)
```typescript

            if (pandasVersion) {
                if (pandasVersion.compare(pandasMinimumVersionSupportedByVariableViewer) > 0) {
                    sendTelemetryEvent(Telemetry.PandasOK);
                    return;
                }
                sendTelemetryEvent(Telemetry.PandasTooOld);
```

</details>
<details>
  <summary>DS_INTERNAL.SHOW_DATA_PANDAS_TOO_OLD</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts)
```typescript
                    sendTelemetryEvent(Telemetry.PandasOK);
                    return;
                }
                sendTelemetryEvent(Telemetry.PandasTooOld);
                // Warn user that we cannot start because pandas is too old.
                const versionStr = `${pandasVersion.major}.${pandasVersion.minor}.${pandasVersion.build}`;
                await this.promptInstall(executer, tokenSource, versionStr);
```

</details>
<details>
  <summary>DS_INTERNAL.START_EXECUTE_NOTEBOOK_CELL_PERCEIVED_COLD</summary>

## Description




 Time take for jupyter server to be busy from the time user first hit `run` cell until jupyter reports it is busy running a cell.

## Properties


No properties for event


## Locations Used

[src/kernels/kernel.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernel.ts)
```typescript
                .finally(() =>
                    sendKernelTelemetryEvent(
                        this.resourceUri,
                        Telemetry.StartExecuteNotebookCellPerceivedCold,
                        stopWatch.elapsedTime
                    )
                )
```

</details>
<details>
  <summary>DS_INTERNAL.START_JUPYTER_PROCESS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/notebookStarter.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/notebookStarter.node.ts)
```typescript
            }

            // Fire off telemetry for the process being talkable
            sendTelemetryEvent(Telemetry.StartJupyterProcess, stopWatch.elapsedTime);

            try {
                const port = parseInt(url.parse(connection.baseUrl).port || '0', 10);
```

</details>
<details>
  <summary>DS_INTERNAL.START_RAW_FAILED_UI_DISABLED</summary>

## Description



 Telemetry sent when starting auto starting Native Notebook kernel fails silently.

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.START_SESSION_FAILED_JUPYTER</summary>

## Description




 Telemetry event sent when starting a session for a local connection failed.

 @type {(undefined | never)}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

[src/kernels/common/baseJupyterSession.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/common/baseJupyterSession.ts)
```typescript
export class JupyterSessionStartError extends WrappedError {
    constructor(originalException: Error) {
        super(originalException.message, originalException);
        sendTelemetryEvent(Telemetry.StartSessionFailedJupyter, undefined, undefined, originalException, true);
    }
}

```

</details>
<details>
  <summary>DS_INTERNAL.SWITCH_KERNEL</summary>

## Description




 Triggered when the kernel selection changes (note: This can also happen automatically when a notebook is opened).
 WARNING: Due to changes in VS Code, this isn't necessarily a user action, hence difficult to tell if the user changed it or it changed automatically.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/vscodeNotebookController.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/vscodeNotebookController.ts)
```typescript
            default:
            // We don't know as its the default kernel on Jupyter server.
        }
        sendKernelTelemetryEvent(document.uri, Telemetry.SwitchKernel);
        // If we have an existing kernel, then we know for a fact the user is changing the kernel.
        // Else VSC is just setting a kernel for a notebook after it has opened.
        if (existingKernel) {
```


[src/test/datascience/telemetry.vscode.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/datascience/telemetry.vscode.test.ts)
```typescript
        // Right now this is the guaranteed list. Might want to expand this.
        assertEvent(Telemetry.RunFileInteractive);
        assertEvent(Telemetry.ExecuteCellPerceivedWarm);
        assertEvent(Telemetry.SwitchKernel);
    });
});

```

</details>
<details>
  <summary>DS_INTERNAL.SWITCH_TO_EXISTING_KERNEL</summary>

## Description


No description provided

## Properties

-  language: string

## Locations Used

[src/telemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/telemetry.ts)
```typescript
     * Similar to Telemetry.SwitchKernel, but doesn't contain as much information as Telemetry.SwitchKernel.
     * WARNING: Due to changes in VS Code, this isn't necessarily a user action, hence difficult to tell if the user changed it or it changed automatically.
     */
    [Telemetry.SwitchToExistingKernel]: { language: string };
    [Telemetry.SwitchToInterpreterAsKernel]: never | undefined;
    /**
     * Total time taken to interrupt a kernel
```


[src/notebooks/telemetry/notebookOrKernelLanguageTelemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/telemetry/notebookOrKernelLanguageTelemetry.ts)
```typescript
import { getTelemetrySafeLanguage } from '../../platform/telemetry/helpers';

export function sendNotebookOrKernelLanguageTelemetry(
    telemetryEvent: Telemetry.SwitchToExistingKernel | Telemetry.NotebookLanguage,
    language?: string
) {
    language = getTelemetrySafeLanguage(language);
```


[src/notebooks/controllers/vscodeNotebookController.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/vscodeNotebookController.ts)
```typescript
        }
        switch (this.connection.kind) {
            case 'startUsingPythonInterpreter':
                sendNotebookOrKernelLanguageTelemetry(Telemetry.SwitchToExistingKernel, PYTHON_LANGUAGE);
                break;
            case 'connectToLiveRemoteKernel':
                sendNotebookOrKernelLanguageTelemetry(
```


[src/notebooks/controllers/vscodeNotebookController.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/vscodeNotebookController.ts)
```typescript
                break;
            case 'connectToLiveRemoteKernel':
                sendNotebookOrKernelLanguageTelemetry(
                    Telemetry.SwitchToExistingKernel,
                    this.connection.kernelModel.language
                );
                break;
```


[src/notebooks/controllers/vscodeNotebookController.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/vscodeNotebookController.ts)
```typescript
            case 'startUsingLocalKernelSpec':
            case 'startUsingRemoteKernelSpec':
                sendNotebookOrKernelLanguageTelemetry(
                    Telemetry.SwitchToExistingKernel,
                    this.connection.kernelSpec.language
                );
                break;
```

</details>
<details>
  <summary>DS_INTERNAL.SWITCH_TO_EXISTING_KERNEL</summary>

## Description




 Similar to Telemetry.SwitchKernel, but doesn't contain as much information as Telemetry.SwitchKernel.
 WARNING: Due to changes in VS Code, this isn't necessarily a user action, hence difficult to tell if the user changed it or it changed automatically.

## Properties


No properties for event


## Locations Used

[src/telemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/telemetry.ts)
```typescript
    [Telemetry.RegisterAndUseInterpreterAsKernel]: never | undefined;
    [Telemetry.UseInterpreterAsKernel]: never | undefined;
    [Telemetry.UseExistingKernel]: never | undefined;
    [Telemetry.SwitchToExistingKernel]: { language: string };
    [Telemetry.SwitchToInterpreterAsKernel]: never | undefined;
    [Telemetry.ConvertToPythonFile]: never | undefined;
    [Telemetry.CopySourceCode]: never | undefined;
```


[src/notebooks/telemetry/notebookOrKernelLanguageTelemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/telemetry/notebookOrKernelLanguageTelemetry.ts)
```typescript
import { getTelemetrySafeLanguage } from '../../platform/telemetry/helpers';

export function sendNotebookOrKernelLanguageTelemetry(
    telemetryEvent: Telemetry.SwitchToExistingKernel | Telemetry.NotebookLanguage,
    language?: string
) {
    language = getTelemetrySafeLanguage(language);
```


[src/notebooks/controllers/vscodeNotebookController.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/vscodeNotebookController.ts)
```typescript
        }
        switch (this.connection.kind) {
            case 'startUsingPythonInterpreter':
                sendNotebookOrKernelLanguageTelemetry(Telemetry.SwitchToExistingKernel, PYTHON_LANGUAGE);
                break;
            case 'connectToLiveRemoteKernel':
                sendNotebookOrKernelLanguageTelemetry(
```


[src/notebooks/controllers/vscodeNotebookController.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/vscodeNotebookController.ts)
```typescript
                break;
            case 'connectToLiveRemoteKernel':
                sendNotebookOrKernelLanguageTelemetry(
                    Telemetry.SwitchToExistingKernel,
                    this.connection.kernelModel.language
                );
                break;
```


[src/notebooks/controllers/vscodeNotebookController.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/vscodeNotebookController.ts)
```typescript
            case 'startUsingLocalKernelSpec':
            case 'startUsingRemoteKernelSpec':
                sendNotebookOrKernelLanguageTelemetry(
                    Telemetry.SwitchToExistingKernel,
                    this.connection.kernelSpec.language
                );
                break;
```

</details>
<details>
  <summary>DS_INTERNAL.SWITCH_TO_INTERPRETER_AS_KERNEL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/telemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/telemetry.ts)
```typescript
     * WARNING: Due to changes in VS Code, this isn't necessarily a user action, hence difficult to tell if the user changed it or it changed automatically.
     */
    [Telemetry.SwitchToExistingKernel]: { language: string };
    [Telemetry.SwitchToInterpreterAsKernel]: never | undefined;
    /**
     * Total time taken to interrupt a kernel
     * Check the `resourceType` to determine whether its a Jupyter Notebook or IW.
```

</details>
<details>
  <summary>DS_INTERNAL.SWITCH_TO_INTERPRETER_AS_KERNEL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/telemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/telemetry.ts)
```typescript
    [Telemetry.UseInterpreterAsKernel]: never | undefined;
    [Telemetry.UseExistingKernel]: never | undefined;
    [Telemetry.SwitchToExistingKernel]: { language: string };
    [Telemetry.SwitchToInterpreterAsKernel]: never | undefined;
    [Telemetry.ConvertToPythonFile]: never | undefined;
    [Telemetry.CopySourceCode]: never | undefined;
    [Telemetry.CreateNewNotebook]: never | undefined;
```

</details>
<details>
  <summary>DS_INTERNAL.SYNC_ALL_CELLS</summary>

## Description



 Sync events

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.SYNC_SINGLE_CELL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.USE_EXISTING_KERNEL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.USE_INTERPRETER_AS_KERNEL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.VARIABLE_EXPLORER_FETCH_TIME</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/variables/jupyterVariables.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/variables/jupyterVariables.ts)
```typescript
    }

    // IJupyterVariables implementation
    @captureTelemetry(Telemetry.VariableExplorerFetchTime, undefined, true)
    public async getVariables(request: IJupyterVariablesRequest, kernel?: IKernel): Promise<IJupyterVariablesResponse> {
        return this.variableHandler.getVariables(request, kernel);
    }
```

</details>
<details>
  <summary>DS_INTERNAL.VARIABLE_EXPLORER_VARIABLE_COUNT</summary>

## Description


No description provided

## Properties

-  variableCount: number

## Locations Used

[src/webviews/extension-side/variablesView/variableView.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/variablesView/variableView.ts)
```typescript
            const response = await this.variables.getVariables(args, activeNotebook);

            this.postMessage(InteractiveWindowMessages.GetVariablesResponse, response).ignoreErrors();
            sendTelemetryEvent(Telemetry.VariableExplorerVariableCount, undefined, {
                variableCount: response.totalCount
            });
        } else {
```

</details>
<details>
  <summary>DS_INTERNAL.VSCNOTEBOOK_CELL_TRANSLATION_FAILED</summary>

## Description


No description provided

## Properties

- 
        isErrorOutput: boolean;

## Locations Used

[src/kernels/execution/helpers.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/execution/helpers.ts)
```typescript
            // Unless we already know its an unknown output type.
            const outputType: nbformat.OutputType =
                <nbformat.OutputType>customMetadata?.outputType || (isStream ? 'stream' : 'display_data');
            sendTelemetryEvent(Telemetry.VSCNotebookCellTranslationFailed, undefined, {
                isErrorOutput: outputType === 'error'
            });

```

</details>
<details>
  <summary>DS_INTERNAL.WAIT_FOR_IDLE_JUPYTER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/session/jupyterSession.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/session/jupyterSession.ts)
```typescript
        return true;
    }

    @captureTelemetry(Telemetry.WaitForIdleJupyter, undefined, true)
    public waitForIdle(timeout: number, token: CancellationToken): Promise<void> {
        // Wait for idle on this session
        return this.waitForIdleOnSession(this.session, timeout, token);
```

</details>
<details>
  <summary>DS_INTERNAL.WEB_FETCH_ERROR</summary>

## Description




 Event sent when trying to talk to a remote server and the browser gives us a generic fetch error

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
                }
            } else if (userURI) {
                if (err.message.includes('Failed to fetch') && this.isWebExtension) {
                    sendTelemetryEvent(Telemetry.FetchError, undefined, { currentTask: 'connecting' });
                }
                const serverId = await computeServerId(userURI);
                await this.errorHandler.handleError(new RemoteJupyterServerConnectionError(userURI, serverId, err));
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
                }
            } else {
                if (err.message.includes('Failed to fetch') && this.isWebExtension) {
                    sendTelemetryEvent(Telemetry.FetchError, undefined, { currentTask: 'connecting' });
                }
                const serverId = await computeServerId(userURI);
                await this.errorHandler.handleError(new RemoteJupyterServerConnectionError(userURI, serverId, err));
```

</details>
<details>
  <summary>DS_INTERNAL.WEBVIEW_STARTUP</summary>

## Description


No description provided

## Properties

-  type: string

## Locations Used

[src/platform/webviews/webviewHost.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/webviews/webviewHost.ts)
```typescript
    protected webViewRendered() {
        if (this.webviewInit && !this.webviewInit.resolved) {
            // Send telemetry for startup
            sendTelemetryEvent(Telemetry.WebviewStartup, this.startupStopwatch.elapsedTime, { type: this.title });

            // Resolve our started promise. This means the webpanel is ready to go.
            this.webviewInit.resolve();
```

</details>
<details>
  <summary>DS_INTERNAL.WEBVIEW_STYLE_UPDATE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.ZMQ_NATIVE_BINARIES_LOADING</summary>

## Description




 Telemetry event sent when the ZMQ native binaries do work.

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/rawNotebookSupportedService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawNotebookSupportedService.node.ts)
```typescript
        try {
            require('zeromq');
            traceInfo(`ZMQ install verified.`);
            sendTelemetryEvent(Telemetry.ZMQSupported);
            this._isSupported = true;
        } catch (e) {
            traceError(`Exception while attempting zmq :`, e);
```

</details>
<details>
  <summary>DS_INTERNAL.ZMQ_NATIVE_BINARIES_NOT_LOADING</summary>

## Description




 Telemetry event sent when the ZMQ native binaries do not work.

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/rawNotebookSupportedService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawNotebookSupportedService.node.ts)
```typescript
            this._isSupported = true;
        } catch (e) {
            traceError(`Exception while attempting zmq :`, e);
            sendTelemetryEvent(Telemetry.ZMQNotSupported);
            this._isSupported = false;
        }

```

</details>
<details>
  <summary>ENVFILE_VARIABLE_SUBSTITUTION</summary>

## Description




 Telemetry event sent when substituting Environment variables to calculate value of variables

## Properties


No properties for event


## Locations Used

[src/platform/common/variables/environment.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/variables/environment.node.ts)
```typescript
    });
    if (!invalid && replacement !== value) {
        value = replacement;
        sendTelemetryEvent(EventName.ENVFILE_VARIABLE_SUBSTITUTION);
    }

    return value.replace(/\\\$/g, '$');
```

</details>
<details>
  <summary>ENVFILE_WORKSPACE</summary>

## Description




 Telemetry event sent when an environment file is detected in the workspace.

## Properties


No properties for event


## Locations Used

[src/platform/telemetry/envFileTelemetry.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/telemetry/envFileTelemetry.node.ts)
```typescript
}

function sendTelemetry(hasCustomEnvPath: boolean = false) {
    sendTelemetryEvent(EventName.ENVFILE_WORKSPACE, undefined, { hasCustomEnvPath });

    envFileTelemetrySent = true;
}
```

</details>
<details>
  <summary>EXTENSION.LOAD</summary>

## Description




 Telemetry event sent with details just after editor loads

## Properties


No properties for event


## Locations Used

[src/platform/telemetry/startupTelemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/telemetry/startupTelemetry.ts)
```typescript
        await activatedPromise;
        durations.totalActivateTime = stopWatch.elapsedTime;
        const props = await getActivationTelemetryProps(serviceContainer);
        sendTelemetryEvent(EventName.EXTENSION_LOAD, durations, props);
    } catch (ex) {
        traceError('sendStartupTelemetry() failed.', ex);
    }
```


[src/platform/telemetry/startupTelemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/telemetry/startupTelemetry.ts)
```typescript
                traceError('getActivationTelemetryProps() failed.', ex);
            }
        }
        sendTelemetryEvent(EventName.EXTENSION_LOAD, durations, props, ex);
    } catch (exc2) {
        traceError('sendErrorTelemetry() failed.', exc2);
    }
```


[src/platform/telemetry/startupTelemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/telemetry/startupTelemetry.ts)
```typescript

async function getActivationTelemetryProps(
    serviceContainer: IServiceContainer
): Promise<IEventNamePropertyMapping[EventName.EXTENSION_LOAD]> {
    // eslint-disable-next-line
    // TODO: Not all of this data is showing up in the database...
    // eslint-disable-next-line
```

</details>
<details>
  <summary>HASHED_PACKAGE_NAME</summary>

## Description




 Telemetry event sent with details when tracking imports

## Properties


No properties for event


## Locations Used

[src/standalone/import-export/importTracker.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/import-export/importTracker.node.ts)
```typescript
        // Hash the package name so that we will never accidentally see a
        // user's private package name.
        const hash = getTelemetrySafeHashedString(packageName);
        sendTelemetryEvent(EventName.HASHED_PACKAGE_NAME, undefined, { hashedNamev2: hash });
    }

    private lookForImports(lines: (string | undefined)[]) {
```


[src/test/telemetry/importTracker.unit.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/telemetry/importTracker.unit.test.ts)
```typescript
        public static expectHashes(...hashes: string[]) {
            expect(Reporter.eventNames).to.contain(EventName.HASHED_PACKAGE_PERF);
            if (hashes.length > 0) {
                expect(Reporter.eventNames).to.contain(EventName.HASHED_PACKAGE_NAME);
            }

            Reporter.properties.pop(); // HASHED_PACKAGE_PERF
```

</details>
<details>
  <summary>HASHED_PACKAGE_PERF</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/standalone/import-export/importTracker.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/import-export/importTracker.node.ts)
```typescript
        }
    }

    @captureTelemetry(EventName.HASHED_PACKAGE_PERF)
    private checkNotebookDocument(e: NotebookDocument) {
        this.pendingChecks.delete(e.uri.fsPath);
        const lines = this.getNotebookDocumentLines(e);
```


[src/standalone/import-export/importTracker.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/import-export/importTracker.node.ts)
```typescript
        this.lookForImports(lines);
    }

    @captureTelemetry(EventName.HASHED_PACKAGE_PERF)
    private checkNotebookCell(e: NotebookCellExecutionStateChangeEvent) {
        if (!isJupyterNotebook(e.cell.notebook)) {
            return;
```


[src/standalone/import-export/importTracker.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/import-export/importTracker.node.ts)
```typescript
        this.lookForImports(result);
    }

    @captureTelemetry(EventName.HASHED_PACKAGE_PERF)
    private checkDocument(document: TextDocument) {
        this.pendingChecks.delete(document.fileName);
        const lines = this.getDocumentLines(document);
```


[src/test/telemetry/importTracker.unit.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/telemetry/importTracker.unit.test.ts)
```typescript
        public static measures: {}[] = [];

        public static expectHashes(...hashes: string[]) {
            expect(Reporter.eventNames).to.contain(EventName.HASHED_PACKAGE_PERF);
            if (hashes.length > 0) {
                expect(Reporter.eventNames).to.contain(EventName.HASHED_PACKAGE_NAME);
            }
```

</details>
<details>
  <summary>JUPYTER_EXPERIMENTS_OPT_IN_OUT</summary>

## Description




 Telemetry event sent with details when a user has requested to opt it or out of an experiment group

## Properties


No properties for event


## Locations Used

[src/platform/common/experiments/service.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/experiments/service.ts)
```typescript
        // so we need to perform these checks and send the corresponding telemetry manually.
        switch (this.getOptInOptOutStatus(experiment)) {
            case 'optOut': {
                sendTelemetryEvent(EventName.JUPYTER_EXPERIMENTS_OPT_IN_OUT, undefined, {
                    expNameOptedOutOf: experiment
                });

```


[src/platform/common/experiments/service.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/experiments/service.ts)
```typescript
            }
            case 'optIn': {
                await this.experimentationService.isCachedFlightEnabled(experiment);
                sendTelemetryEvent(EventName.JUPYTER_EXPERIMENTS_OPT_IN_OUT, undefined, {
                    expNameOptedInto: experiment
                });

```


[src/test/common/experiments/service.unit.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/common/experiments/service.unit.test.ts)
```typescript
            assert.isTrue(result);
            assert.equal(telemetryEvents.length, 1);
            assert.deepEqual(telemetryEvents[0], {
                eventName: EventName.JUPYTER_EXPERIMENTS_OPT_IN_OUT,
                properties: { expNameOptedInto: experiment }
            });
            sinon.assert.calledOnce(isCachedFlightEnabledStub);
```


[src/test/common/experiments/service.unit.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/common/experiments/service.unit.test.ts)
```typescript
            assert.isFalse(result);
            assert.equal(telemetryEvents.length, 1);
            assert.deepEqual(telemetryEvents[0], {
                eventName: EventName.JUPYTER_EXPERIMENTS_OPT_IN_OUT,
                properties: { expNameOptedOutOf: experiment }
            });
            sinon.assert.notCalled(isCachedFlightEnabledStub);
```

</details>
<details>
  <summary>JUPYTER_IS_INSTALLED</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/jupyterDetectionTelemetry.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterDetectionTelemetry.node.ts)
```typescript
                const minor = parseInt(versionMatch[2], 10);
                const frontEndVersion = parseFloat(`${major}.${minor}`);
                if (shell) {
                    sendTelemetryEvent(Telemetry.JupyterInstalled, undefined, {
                        frontEnd,
                        frontEndVersion,
                        detection: 'shell',
```


[src/kernels/jupyter/jupyterDetectionTelemetry.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterDetectionTelemetry.node.ts)
```typescript
                        shellType: shell
                    });
                } else {
                    sendTelemetryEvent(Telemetry.JupyterInstalled, undefined, {
                        frontEnd,
                        frontEndVersion,
                        detection: 'process'
```


[src/kernels/jupyter/jupyterDetectionTelemetry.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterDetectionTelemetry.node.ts)
```typescript
                    });
                }
            } else {
                sendTelemetryEvent(Telemetry.JupyterInstalled, undefined, {
                    failed: true,
                    reason: 'notInstalled',
                    frontEnd
```


[src/kernels/jupyter/jupyterDetectionTelemetry.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterDetectionTelemetry.node.ts)
```typescript
                });
            }
        } catch (ex) {
            sendTelemetryEvent(Telemetry.JupyterInstalled, undefined, {
                failed: true,
                reason: 'notInstalled',
                frontEnd
```

</details>
<details>
  <summary>OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_ERROR_EX</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/dataViewerCommandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/dataViewerCommandRegistry.ts)
```typescript
                    sendTelemetryEvent(EventName.OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_SUCCESS);
                }
            } catch (e) {
                sendTelemetryEvent(EventName.OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_ERROR, undefined, undefined, e);
                traceError(e);
                this.errorHandler.handleError(e).then(noop, noop);
            }
```

</details>
<details>
  <summary>OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_REQUEST_EX</summary>

## Description




 Telemetry event sent when user opens the data viewer.

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/dataViewerCommandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/dataViewerCommandRegistry.ts)
```typescript
        this.disposables.push(disposable);
    }
    private async onVariablePanelShowDataViewerRequest(request: IShowDataViewerFromVariablePanel) {
        sendTelemetryEvent(EventName.OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_REQUEST);
        if (
            this.debugService?.activeDebugSession &&
            this.variableProvider &&
```

</details>
<details>
  <summary>OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_SUCCESS_EX</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/dataViewerCommandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/dataViewerCommandRegistry.ts)
```typescript
                if (columnSize && (await this.dataViewerChecker.isRequestedColumnSizeAllowed(columnSize))) {
                    const title: string = `${DataScience.dataExplorerTitle()} - ${jupyterVariable.name}`;
                    await this.dataViewerFactory.create(jupyterVariableDataProvider, title);
                    sendTelemetryEvent(EventName.OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_SUCCESS);
                }
            } catch (e) {
                sendTelemetryEvent(EventName.OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_ERROR, undefined, undefined, e);
```

</details>
<details>
  <summary>PLATFORM.INFO</summary>

## Description




 Telemetry event sent after fetching the OS version

## Properties


No properties for event


## Locations Used

[src/platform/common/platform/platformService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/platform/platformService.node.ts)
```typescript
    public version?: SemVer;
    constructor() {
        if (this.osType === OSType.Unknown) {
            sendTelemetryEvent(EventName.PLATFORM_INFO, undefined, {
                failureType: PlatformErrors.FailedToDetermineOS
            });
        }
```


[src/platform/common/platform/platformService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/platform/platformService.node.ts)
```typescript
                try {
                    const ver = coerce(os.release());
                    if (ver) {
                        sendTelemetryEvent(EventName.PLATFORM_INFO, undefined, {
                            osVersion: `${ver.major}.${ver.minor}.${ver.patch}`
                        });
                        return (this.version = ver);
```


[src/platform/common/platform/platformService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/platform/platformService.node.ts)
```typescript
                    }
                    throw new Error('Unable to parse version');
                } catch (ex) {
                    sendTelemetryEvent(EventName.PLATFORM_INFO, undefined, {
                        failureType: PlatformErrors.FailedToParseVersion
                    });
                    return parseVersion(os.release());
```

</details>
<details>
  <summary>PYTHON_INTERPRETER_ACTIVATION_ENVIRONMENT_VARIABLES</summary>

## Description


No description provided

## Properties

- 
        /**
         * Carries `true` if environment variables are present, `false` otherwise
         *
         * @type {boolean}
         */
        hasEnvVars?: boolean;
- 
        /**
         * Carries `true` if fetching environment variables failed, `false` otherwise
         *
         * @type {boolean}
         */
        failed?: boolean;
- 
        /**
         * Whether the environment was activated within a terminal or not.
         *
         * @type {boolean}
         */
        activatedInTerminal?: boolean;
- 
        /**
         * Whether the environment was activated by the wrapper class.
         * If `true`, this telemetry is sent by the class that wraps the two activation providers   .
         *
         * @type {boolean}
         */
        activatedByWrapper?: boolean;

## Locations Used

[src/platform/common/process/pythonExecutionFactory.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/process/pythonExecutionFactory.node.ts)
```typescript
            options.allowEnvironmentFetchExceptions
        );
        const hasEnvVars = envVars && Object.keys(envVars).length > 0;
        sendTelemetryEvent(EventName.PYTHON_INTERPRETER_ACTIVATION_ENVIRONMENT_VARIABLES, undefined, { hasEnvVars });
        if (!hasEnvVars) {
            return this.create({
                resource: options.resource,
```

</details>
<details>
  <summary>TERMINAL_ENV_VAR_EXTRACTION</summary>

## Description




 Telemetry sent only when we fail to extract the env variables for a shell.

## Properties


No properties for event


## Locations Used

[src/platform/terminals/helper.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/terminals/helper.node.ts)
```typescript
        terminal?: Terminal
    ): Promise<{ env?: NodeJS.ProcessEnv; shell: TerminalShellType }> {
        if (this.platform.osType === OSType.Unknown) {
            sendTelemetryEvent(Telemetry.TerminalEnvVariableExtraction, undefined, {
                failed: true,
                reason: 'unknownOs',
                shellType: undefined
```


[src/platform/terminals/helper.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/terminals/helper.node.ts)
```typescript
            return { env, shell };
        } catch (ex) {
            traceError('Failed to extract environment variables', ex);
            sendTelemetryEvent(Telemetry.TerminalEnvVariableExtraction, undefined, {
                failed: true,
                reason: failureReason,
                shellType: shell
```

</details>
<details>
  <summary>TERMINAL_SHELL_IDENTIFICATION</summary>

## Description



 Telemetry event sent to provide information on whether we have successfully identify the type of shell used.
 This information is useful in determining how well we identify shells on users machines.
 This impacts extraction of env variables from current shell.
 So, the better this works, the better it is for the user.
 failed - If true, indicates we have failed to identify the shell. Note this impacts impacts ability to activate environments in the terminal & code.
 shellIdentificationSource - How was the shell identified. One of 'terminalName' | 'settings' | 'environment' | 'default'
                             If terminalName, then this means we identified the type of the shell based on the name of the terminal.
                             If settings, then this means we identified the type of the shell based on user settings in VS Code.
                             If environment, then this means we identified the type of the shell based on their environment (env variables, etc).
                                 I.e. their default OS Shell.
                             If default, then we reverted to OS defaults (cmd on windows, and bash on the rest).
                                 This is the worst case scenario.
                                 I.e. we could not identify the shell at all.
 hasCustomShell - If undefined (not set), we didn't check.
                  If true, user has customzied their shell in VSC Settings.
 hasShellInEnv - If undefined (not set), we didn't check.
                 If true, user has a shell in their environment.
                 If false, user does not have a shell in their environment.

## Properties

- 
        failed: boolean;
- 
        reason: 'unknownShell' | undefined;
- 
        terminalProvided: boolean;
- 
        shellIdentificationSource: 'terminalName' | 'settings' | 'environment' | 'default' | 'vscode';
- 
        hasCustomShell: undefined | boolean;
- 
        hasShellInEnv: undefined | boolean;

## Locations Used

[src/platform/terminals/shellDetector.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/terminals/shellDetector.node.ts)
```typescript
        // This information is useful in determining how well we identify shells on users machines.
        // This impacts executing code in terminals and activation of environments in terminal.
        // So, the better this works, the better it is for the user.
        sendTelemetryEvent(Telemetry.TerminalShellIdentification, undefined, telemetryProperties);
        traceVerbose(`Shell identified as '${shell}'`);

        // If we could not identify the shell, use the defaults.
```

</details>
=======
[src/webviews/extension-side/dataviewer/dataViewer.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/dataViewer.ts)
```typescript
                break;

            case DataViewerMessages.SliceEnablementStateChanged:
                void sendTelemetryEvent(Telemetry.DataViewerSliceEnablementStateChanged, undefined, {
                    newState: payload.newState ? CheckboxState.Checked : CheckboxState.Unchecked
                });
                break;
```

</details>
<details>
  <summary>DATASCIENCE.DATA_VIEWER_SLICE_OPERATION</summary>

## Description




 Telemetry event sent whenever the user applies a valid slice
 to a sliceable Python variable in the data viewer.

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/dataViewer.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/dataViewer.ts)
```typescript
                if (payload.shape?.length) {
                    this.maybeSendSliceDataDimensionalityTelemetry(payload.shape.length);
                }
                sendTelemetryEvent(Telemetry.DataViewerSliceOperation, undefined, { source: request.source });
                return this.postMessage(DataViewerMessages.InitializeData, payload);
            }
        });
```

</details>
<details>
  <summary>DATASCIENCE.DEBUG_CONTINUE</summary>

## Description




 Telemetry event sent when user hits the `continue` button while debugging IW

## Properties


No properties for event


## Locations Used

[src/interactive-window/commands/commandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/commands/commandRegistry.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.DebugContinue)
    private async debugContinue(): Promise<void> {
        // Make sure that we are in debug mode
        if (this.debugService?.activeDebugSession) {
```

</details>
<details>
  <summary>DATASCIENCE.DEBUG_CURRENT_CELL</summary>

## Description




 Telemetry event sent when user debugs the cell in the IW

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        return this.codeLenses;
    }

    @captureTelemetry(Telemetry.DebugCurrentCell)
    public async debugCurrentCell() {
        if (!this.documentManager.activeTextEditor || !this.documentManager.activeTextEditor.document) {
            return;
```


[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        return this.runMatchingCell(range, advance);
    }

    @captureTelemetry(Telemetry.DebugCurrentCell)
    public async debugCell(range: Range): Promise<void> {
        if (!this.documentManager.activeTextEditor || !this.documentManager.activeTextEditor.document) {
            return;
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        return this.codeLenses;
    }

    @captureUsageTelemetry(Telemetry.DebugCurrentCell)
    public async debugCurrentCell() {
        if (!this.documentManager.activeTextEditor || !this.documentManager.activeTextEditor.document) {
            return;
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        return this.runMatchingCell(range, advance);
    }

    @captureUsageTelemetry(Telemetry.DebugCurrentCell)
    public async debugCell(range: Range): Promise<void> {
        if (!this.documentManager.activeTextEditor || !this.documentManager.activeTextEditor.document) {
            return;
```

</details>
<details>
  <summary>DATASCIENCE.DEBUG_FILE_INTERACTIVE</summary>

## Description




 Telemetry event sent when user debugs the file in the IW

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        return this.runFileInteractiveInternal(false);
    }

    @captureTelemetry(Telemetry.DebugFileInteractive)
    public async debugFileInteractive() {
        return this.runFileInteractiveInternal(true);
    }
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        return this.runFileInteractiveInternal(false);
    }

    @captureUsageTelemetry(Telemetry.DebugFileInteractive)
    public async debugFileInteractive() {
        return this.runFileInteractiveInternal(true);
    }
```

</details>
<details>
  <summary>DATASCIENCE.DEBUG_STEP_OVER</summary>

## Description




 Telemetry event sent when user hits the `step over` button while debugging IW

## Properties


No properties for event


## Locations Used

[src/interactive-window/commands/commandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/commands/commandRegistry.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.DebugStepOver)
    private async debugStepOver(): Promise<void> {
        // Make sure that we are in debug mode
        if (this.debugService?.activeDebugSession) {
```

</details>
<details>
  <summary>DATASCIENCE.DEBUG_STOP</summary>

## Description




 Telemetry event sent when user hits the `stop` button while debugging IW

## Properties


No properties for event


## Locations Used

[src/interactive-window/commands/commandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/commands/commandRegistry.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.DebugStop)
    private async debugStop(uri: Uri): Promise<void> {
        // Make sure that we are in debug mode
        if (this.debugService?.activeDebugSession && this.interactiveWindowProvider) {
```

</details>
<details>
  <summary>DATASCIENCE.DEBUGGING.CLICKED_ON_SETUP</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/debugger/debuggingManagerBase.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/debugger/debuggingManagerBase.ts)
```typescript
        );

        if (response === DataScience.setup()) {
            sendTelemetryEvent(DebuggingTelemetry.clickedOnSetup);
            this.appShell.openUrl(
                'https://github.com/microsoft/vscode-jupyter/wiki/Setting-Up-Run-by-Line-and-Debugging-for-Notebooks'
            );
```

</details>
<details>
  <summary>DATASCIENCE.DEBUGGING.CLICKED_RUN_AND_DEBUG_CELL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/debugger/debuggingManager.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/debugger/debuggingManager.ts)
```typescript
            }),

            this.commandManager.registerCommand(DSCommands.RunAndDebugCell, async (cell: NotebookCell | undefined) => {
                sendTelemetryEvent(DebuggingTelemetry.clickedRunAndDebugCell);
                const editor = this.vscNotebook.activeNotebookEditor;
                if (!cell) {
                    const range = editor?.selections[0];
```

</details>
<details>
  <summary>DATASCIENCE.DEBUGGING.CLICKED_RUNBYLINE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/debugger/debuggingManager.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/debugger/debuggingManager.ts)
```typescript
            ),

            this.commandManager.registerCommand(DSCommands.RunByLine, async (cell: NotebookCell | undefined) => {
                sendTelemetryEvent(DebuggingTelemetry.clickedRunByLine);
                const editor = this.vscNotebook.activeNotebookEditor;
                if (!cell) {
                    const range = editor?.selections[0];
```

</details>
<details>
  <summary>DATASCIENCE.DEBUGGING.CLOSED_MODAL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/debugger/debuggingManagerBase.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/debugger/debuggingManagerBase.ts)
```typescript
                'https://github.com/microsoft/vscode-jupyter/wiki/Setting-Up-Run-by-Line-and-Debugging-for-Notebooks'
            );
        } else {
            sendTelemetryEvent(DebuggingTelemetry.closedModal);
        }
    }
}
```

</details>
<details>
  <summary>DATASCIENCE.DEBUGGING.ENDED_SESSION</summary>

## Description


No description provided

## Properties

- 
        reason: 'normally' | 'onKernelDisposed' | 'onAnInterrupt' | 'onARestart' | 'withKeybinding';

## Locations Used

[src/notebooks/debugger/kernelDebugAdapterBase.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/debugger/kernelDebugAdapterBase.ts)
```typescript
                    if (!this.disconnected) {
                        debug.stopDebugging(this.session).then(noop, noop);
                        this.disconnect().ignoreErrors();
                        sendTelemetryEvent(DebuggingTelemetry.endedSession, undefined, { reason: 'onKernelDisposed' });
                    }
                })
            );
```


[src/notebooks/debugger/kernelDebugAdapterBase.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/debugger/kernelDebugAdapterBase.ts)
```typescript
                        cellStateChange.state === NotebookCellExecutionState.Idle &&
                        !this.disconnected
                    ) {
                        sendTelemetryEvent(DebuggingTelemetry.endedSession, undefined, { reason: 'normally' });
                        this.disconnect().ignoreErrors();
                    }
                },
```


[src/notebooks/debugger/debuggingManager.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/debugger/debuggingManager.ts)
```typescript
                if (editor) {
                    const controller = this.notebookToRunByLineController.get(editor.notebook);
                    if (controller) {
                        sendTelemetryEvent(DebuggingTelemetry.endedSession, undefined, {
                            reason: 'withKeybinding'
                        });
                        controller.stop();
```

</details>
<details>
  <summary>DATASCIENCE.DEBUGGING.IPYKERNEL6_STATUS</summary>

## Description


No description provided

## Properties

- 
        status: 'installed' | 'notInstalled';

## Locations Used

[src/notebooks/debugger/debuggingManagerBase.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/debugger/debuggingManagerBase.ts)
```typescript
            }

            const result = await isUsingIpykernel6OrLater(kernel);
            sendTelemetryEvent(DebuggingTelemetry.ipykernel6Status, undefined, {
                status: result === IpykernelCheckResult.Ok ? 'installed' : 'notInstalled'
            });
            return result;
```

</details>
<details>
  <summary>DATASCIENCE.DEBUGGING.SUCCESSFULLY_STARTED_IW_JUPYTER</summary>

## Description




 Telemetry sent when we have managed to successfully start the Interactive Window debugger using the Jupyter protocol.

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.DEBUGGING.SUCCESSFULLY_STARTED_RUN_AND_DEBUG_CELL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/debugger/debugCellControllers.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/debugger/debugCellControllers.ts)
```typescript
        private readonly kernel: IKernel,
        private readonly commandManager: ICommandManager
    ) {
        sendTelemetryEvent(DebuggingTelemetry.successfullyStartedRunAndDebugCell);
    }

    public async willSendEvent(_msg: DebugProtocolMessage): Promise<boolean> {
```


[src/interactive-window/debugger/jupyter/debugCellControllers.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/debugger/jupyter/debugCellControllers.ts)
```typescript
        public readonly debugCell: NotebookCell,
        private readonly kernel: IKernel
    ) {
        sendTelemetryEvent(DebuggingTelemetry.successfullyStartedRunAndDebugCell);
    }

    public async willSendEvent(_msg: DebugProtocolMessage): Promise<boolean> {
```

</details>
<details>
  <summary>DATASCIENCE.DEBUGGING.SUCCESSFULLY_STARTED_RUNBYLINE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/debugger/runByLineController.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/debugger/runByLineController.ts)
```typescript
        private readonly kernel: IKernel,
        private readonly settings: IConfigurationService
    ) {
        sendTelemetryEvent(DebuggingTelemetry.successfullyStartedRunByLine);
    }

    public continue(): void {
```

</details>
<details>
  <summary>DATASCIENCE.DEBUGPY_INSTALL_CANCELLED</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.DEBUGPY_INSTALL_FAILED</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.DEBUGPY_PROMPT_TO_INSTALL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.DEBUGPY_SUCCESSFULLY_INSTALLED</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.DELETE_ALL_CELLS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.DELETE_CELL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.DISABLE_INTERACTIVE_SHIFT_ENTER</summary>

## Description




 Disables using Shift+Enter to run code in IW (this is in response to the prompt recommending users to enable this to use the IW)

## Properties


No properties for event


## Locations Used

[src/interactive-window/shiftEnterBanner.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/shiftEnterBanner.ts)
```typescript
        );
    }

    @captureTelemetry(Telemetry.DisableInteractiveShiftEnter)
    public async disableInteractiveShiftEnter(): Promise<void> {
        await this.configuration.updateSetting(
            'sendSelectionToInteractiveWindow',
```


[src/test/datascience/shiftEnterBanner.unit.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/datascience/shiftEnterBanner.unit.test.ts)
```typescript

        expect(Reporter.eventNames).to.deep.equal([
            Telemetry.ShiftEnterBannerShown,
            Telemetry.DisableInteractiveShiftEnter
        ]);
    });
});
```

</details>
<details>
  <summary>DATASCIENCE.ENABLE_INTERACTIVE_SHIFT_ENTER</summary>

## Description




 Disables using Shift+Enter to run code in IW (this is in response to the prompt recommending users to enable this to use the IW)

## Properties


No properties for event


## Locations Used

[src/interactive-window/shiftEnterBanner.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/shiftEnterBanner.ts)
```typescript
        await this.disableBanner();
    }

    @captureTelemetry(Telemetry.EnableInteractiveShiftEnter)
    public async enableInteractiveShiftEnter(): Promise<void> {
        await this.configuration.updateSetting(
            'sendSelectionToInteractiveWindow',
```


[src/test/datascience/shiftEnterBanner.unit.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/datascience/shiftEnterBanner.unit.test.ts)
```typescript

        expect(Reporter.eventNames).to.deep.equal([
            Telemetry.ShiftEnterBannerShown,
            Telemetry.EnableInteractiveShiftEnter
        ]);
    });

```

</details>
<details>
  <summary>DATASCIENCE.ENTER_JUPYTER_URI</summary>

## Description




 Captures the telemetry when the Uri is manually entered by the user as part of the workflow when selecting a Kernel.

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
        await this.serverUriStorage.setUriToLocal();
    }

    @captureTelemetry(Telemetry.EnterJupyterURI)
    @traceDecoratorError('Failed to enter Jupyter Uri')
    public async setJupyterURIToRemote(userURI: string | undefined, ignoreValidation?: boolean): Promise<void> {
        // Double check this server can be connected to. Might need a password, might need a allowUnauthorized
```

</details>
<details>
  <summary>DATASCIENCE.EXECUTE_CELL</summary>

## Description




 Executes a cell, applies to IW and Notebook.
 Check the `resourceType` to determine whether its a Jupyter Notebook or IW.

## Properties


No properties for event


## Locations Used

[src/kernels/kernel.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernel.ts)
```typescript
    public async executeCell(cell: NotebookCell, codeOverride?: string): Promise<NotebookCellRunState> {
        traceCellMessage(cell, `kernel.executeCell, ${getDisplayPath(cell.notebook.uri)}`);
        initializeInteractiveOrNotebookTelemetryBasedOnUserAction(this.resourceUri, this.kernelConnectionMetadata);
        sendKernelTelemetryEvent(this.resourceUri, Telemetry.ExecuteCell);
        this.sendKernelStartedTelemetry();
        const stopWatch = new StopWatch();
        const sessionPromise = this.startJupyterSession();
```


[src/notebooks/controllers/vscodeNotebookController.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/vscodeNotebookController.ts)
```typescript
            return;
        }
        initializeInteractiveOrNotebookTelemetryBasedOnUserAction(notebook.uri, this.connection);
        sendKernelTelemetryEvent(notebook.uri, Telemetry.ExecuteCell);
        // Notebook is trusted. Continue to execute cells
        await Promise.all(cells.map((cell) => this.executeCell(notebook, cell)));
    }
```


[src/test/datascience/telemetry.vscode.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/datascience/telemetry.vscode.test.ts)
```typescript
        };

        // Right now this is the guaranteed list. Might want to expand this.
        assertEvent(Telemetry.ExecuteCell);
        assertEvent(Telemetry.OpenNotebookAll);
        assertEvent(Telemetry.NotebookStart);
    });
```

</details>
<details>
  <summary>DATASCIENCE.EXECUTE_CELL_TIME</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.EXPAND_ALL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.EXPORT_NOTEBOOK</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.EXPORT_NOTEBOOK_AS</summary>

## Description




 Called when user imports a Jupyter Notebook into a Python file.
 Command is `Jupyter: Import Jupyter Notebook`
 Basically user is exporting some jupyter notebook into a Python file or other.

## Properties


No properties for event


## Locations Used

[src/notebooks/export/exportFileOpener.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/export/exportFileOpener.ts)
```typescript
    public async openFile(format: ExportFormat, uri: Uri, openDirectly: boolean = false) {
        if (format === ExportFormat.python) {
            await this.openPythonFile(uri, openDirectly);
            sendTelemetryEvent(Telemetry.ExportNotebookAs, undefined, {
                format: format,
                successful: true,
                opened: true
```


[src/notebooks/export/exportFileOpener.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/export/exportFileOpener.ts)
```typescript
            });
        } else {
            const opened = await this.askOpenFile(uri, openDirectly);
            sendTelemetryEvent(Telemetry.ExportNotebookAs, undefined, {
                format: format,
                successful: true,
                opened: opened
```


[src/notebooks/export/fileConverter.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/export/fileConverter.ts)
```typescript
        }

        if (reporter.token.isCancellationRequested) {
            sendTelemetryEvent(Telemetry.ExportNotebookAs, undefined, { format: format, cancelled: true });
            return;
        }
    }
```

</details>
<details>
  <summary>DATASCIENCE.EXPORT_NOTEBOOK_AS_COMMAND</summary>

## Description




 Called when user exports a Jupyter Notebook or IW into a Python file, HTML, PDF, etc.
 Command is `Jupyter: Export to Python Script` or `Jupyter: Export to HTML`
 Basically user is exporting some jupyter notebook or IW into a Python file or other.

## Properties


No properties for event


## Locations Used

[src/standalone/import-export/exportCommands.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/import-export/exportCommands.ts)
```typescript
                this.controllerSelection.getSelected(sourceDocument)?.connection.interpreter ||
                this.controllerPreferred.getPreferred(sourceDocument)?.connection.interpreter;
            if (exportMethod) {
                sendTelemetryEvent(Telemetry.ExportNotebookAsCommand, undefined, { format: exportMethod });
            }
        }

```

</details>
<details>
  <summary>DATASCIENCE.EXPORT_NOTEBOOK_AS_FAILED</summary>

## Description




 Export fails

## Properties


No properties for event


## Locations Used

[src/notebooks/export/fileConverter.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/export/fileConverter.ts)
```typescript
            await this.performExport(format, sourceDocument, target, token, candidateInterpreter);
        } catch (e) {
            traceError('Export failed', e);
            sendTelemetryEvent(Telemetry.ExportNotebookAsFailed, undefined, { format: format });

            if (format === ExportFormat.pdf) {
                traceError(localize.DataScience.exportToPDFDependencyMessage());
```

</details>
<details>
  <summary>DATASCIENCE.EXPORT_PYTHON_FILE</summary>

## Description




 User exports a .py file with cells as a Jupyter Notebook.

## Properties


No properties for event


## Locations Used

[src/interactive-window/commands/commandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/commands/commandRegistry.ts)
```typescript
        return result;
    }

    @captureTelemetry(Telemetry.ExportPythonFileInteractive, undefined, false)
    private async exportFile(file: Uri): Promise<void> {
        const filePath = getFilePath(file);
        if (filePath && filePath.length > 0 && this.jupyterExporter) {
```

</details>
<details>
  <summary>DATASCIENCE.EXPORT_PYTHON_FILE_AND_OUTPUT</summary>

## Description




 User exports a .py file with cells along with the outputs from the current IW as a Jupyter Notebook.

## Properties


No properties for event


## Locations Used

[src/interactive-window/commands/commandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/commands/commandRegistry.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.ExportPythonFileAndOutputInteractive, undefined, false)
    private async exportFileAndOutput(file: Uri): Promise<Uri | undefined> {
        const filePath = getFilePath(file);
        if (
```

</details>
<details>
  <summary>DATASCIENCE.FAILED_SHOW_DATA_EXPLORER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/variablesView/variableView.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/variablesView/variableView.ts)
```typescript
            }
        } catch (e) {
            traceError(e);
            sendTelemetryEvent(Telemetry.FailedShowDataViewer);
            this.appShell.showErrorMessage(localize.DataScience.showDataViewerFail()).then(noop, noop);
        }
    }
```

</details>
<details>
  <summary>DATASCIENCE.FAILED_TO_CREATE_CONTROLLER</summary>

## Description



 Telemetry sent when we fail to create a Notebook Controller (an entry for the UI kernel list in Native Notebooks).

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/controllerRegistration.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/controllerRegistration.ts)
```typescript
            }
            // We know that this fails when we have xeus kernels installed (untill that's resolved thats one instance when we can have duplicates).
            sendTelemetryEvent(
                Telemetry.FailedToCreateNotebookController,
                undefined,
                { kind: metadata.kind },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
```

</details>
<details>
  <summary>DATASCIENCE.FAILED_TO_FIND_INTERPRETER_KERNEL_CONNECTION_FOR_INTERACTIVE</summary>

## Description




 Telemetry sent when we're unable to find a KernelSpec connection for Interactive window that can be started usig Python interpreter.

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.FAILED_TO_INSTALL_PANDAS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.FETCH_CONTROLLERS</summary>

## Description




 Telemetry sent when we have loaded some controllers.

## Properties


No properties for event


## Locations Used

[src/kernels/kernelFinder.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelFinder.ts)
```typescript
        const key = `${kind}:${useCache}`;
        if (this.startTimeForFetching && !this.fetchingTelemetrySent.has(key)) {
            this.fetchingTelemetrySent.add(key);
            sendTelemetryEvent(Telemetry.FetchControllers, this.startTimeForFetching.elapsedTime, {
                cached: useCache === 'useCache',
                kind
            });
```

</details>
<details>
  <summary>DATASCIENCE.GET_PASSWORD_ATTEMPT</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/jupyterPasswordConnect.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterPasswordConnect.ts)
```typescript
        this.serverUriStorage.onDidRemoveUris(this.onDidRemoveUris, this, this.disposables);
    }

    @captureTelemetry(Telemetry.GetPasswordAttempt)
    public getPasswordConnectionInfo(url: string): Promise<IJupyterPasswordConnectInfo | undefined> {
        if (!url || url.length < 1) {
            return Promise.resolve(undefined);
```

</details>
<details>
  <summary>DATASCIENCE.GOTO_NEXT_CELL_IN_FILE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        });
    }

    @captureTelemetry(Telemetry.GotoNextCellInFile)
    public gotoNextCell() {
        const editor = this.documentManager.activeTextEditor;
        if (!editor || !editor.selection) {
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        });
    }

    @capturePerfTelemetry(Telemetry.GotoNextCellInFile)
    public gotoNextCell() {
        const editor = this.documentManager.activeTextEditor;
        if (!editor || !editor.selection) {
```

</details>
<details>
  <summary>DATASCIENCE.GOTO_PREV_CELL_IN_FILE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.GotoPrevCellInFile)
    public gotoPreviousCell() {
        const editor = this.documentManager.activeTextEditor;
        if (!editor || !editor.selection) {
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        }
    }

    @capturePerfTelemetry(Telemetry.GotoPrevCellInFile)
    public gotoPreviousCell() {
        const editor = this.documentManager.activeTextEditor;
        if (!editor || !editor.selection) {
```

</details>
<details>
  <summary>DATASCIENCE.GOTO_SOURCE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.IMPORT_NOTEBOOK</summary>

## Description




 Called when user imports a Jupyter Notebook into a Python file.
 Command is `Jupyter: Import Jupyter Notebook`
 Basically user is exporting some jupyter notebook into a Python file.

## Properties


No properties for event


## Locations Used

[src/telemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/telemetry.ts)
```typescript
    [Telemetry.GetPasswordSuccess]: never | undefined;
    [Telemetry.GotoSourceCode]: never | undefined;
    [Telemetry.HiddenCellTime]: never | undefined;
    [Telemetry.ImportNotebook]: { scope: 'command' | 'file' };
    /**
     * User interrupts a cell
     * Identical to `Telemetry.InterruptJupyterTime`
```


[src/interactive-window/commands/commandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/commands/commandRegistry.ts)
```typescript
        return this.statusProvider.waitWithStatus(promise, message, undefined, canceled);
    }

    @captureTelemetry(Telemetry.ImportNotebook, { scope: 'command' }, false)
    private async importNotebook(): Promise<void> {
        const filtersKey = DataScience.importDialogFilter();
        const filtersObject: { [name: string]: string[] } = {};
```


[src/interactive-window/commands/commandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/commands/commandRegistry.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.ImportNotebook, { scope: 'file' }, false)
    private async importNotebookOnFile(file: Uri): Promise<void> {
        const filepath = getFilePath(file);
        if (filepath && filepath.length > 0) {
```

</details>
<details>
  <summary>DATASCIENCE.IMPORT_NOTEBOOK</summary>

## Description


No description provided

## Properties

-  scope: 'command' | 'file'

## Locations Used

[src/telemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/telemetry.ts)
```typescript
     * Command is `Jupyter: Import Jupyter Notebook`
     * Basically user is exporting some jupyter notebook into a Python file.
     */
    [Telemetry.ImportNotebook]: { scope: 'command' | 'file' };
    /**
     * Called when user exports a Jupyter Notebook or IW into a Python file, HTML, PDF, etc.
     * Command is `Jupyter: Export to Python Script` or `Jupyter: Export to HTML`
```


[src/interactive-window/commands/commandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/commands/commandRegistry.ts)
```typescript
        return this.statusProvider.waitWithStatus(promise, message, undefined, canceled);
    }

    @captureTelemetry(Telemetry.ImportNotebook, { scope: 'command' }, false)
    private async importNotebook(): Promise<void> {
        const filtersKey = DataScience.importDialogFilter();
        const filtersObject: { [name: string]: string[] } = {};
```


[src/interactive-window/commands/commandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/commands/commandRegistry.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.ImportNotebook, { scope: 'file' }, false)
    private async importNotebookOnFile(file: Uri): Promise<void> {
        const filepath = getFilePath(file);
        if (filepath && filepath.length > 0) {
```

</details>
<details>
  <summary>DATASCIENCE.INTERACTIVE_WINDOW_DEBUG_SETUP_CODE_FAILURE</summary>

## Description


No description provided

## Properties

- 
        ename: string;
- 
        evalue: string;

## Locations Used

[src/interactive-window/debugger/interactiveWindowDebugger.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/debugger/interactiveWindowDebugger.node.ts)
```typescript
        executeSilently(kernel.session, this.tracingEnableCode, {
            traceErrors: true,
            traceErrorsMessage: 'Execute_request failure enabling tracing code for IW',
            telemetryName: Telemetry.InteractiveWindowDebugSetupCodeFailure
        }).ignoreErrors();
    }

```


[src/interactive-window/debugger/interactiveWindowDebugger.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/debugger/interactiveWindowDebugger.node.ts)
```typescript
        executeSilently(kernel.session, this.tracingDisableCode, {
            traceErrors: true,
            traceErrorsMessage: 'Execute_request failure disabling tracing code for IW',
            telemetryName: Telemetry.InteractiveWindowDebugSetupCodeFailure
        }).ignoreErrors();
    }

```


[src/interactive-window/debugger/interactiveWindowDebugger.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/debugger/interactiveWindowDebugger.node.ts)
```typescript
                const importResults = await executeSilently(kernel.session, this.waitForDebugClientCode, {
                    traceErrors: true,
                    traceErrorsMessage: 'Execute_request failure starting debug session for IW',
                    telemetryName: Telemetry.InteractiveWindowDebugSetupCodeFailure
                });
                if (importResults.some((item) => item.output_type === 'error')) {
                    traceWarning(`${this.debuggerPackage} not found in path.`);
```


[src/interactive-window/debugger/interactiveWindowDebugger.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/debugger/interactiveWindowDebugger.node.ts)
```typescript
                      {
                          traceErrors: true,
                          traceErrorsMessage: 'Execute_request failure appending debugger paths for IW',
                          telemetryName: Telemetry.InteractiveWindowDebugSetupCodeFailure
                      }
                  )
                : [];
```


[src/interactive-window/debugger/interactiveWindowDebugger.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/debugger/interactiveWindowDebugger.node.ts)
```typescript
            ? await executeSilently(kernel.session, this.enableDebuggerCode, {
                  traceErrors: true,
                  traceErrorsMessage: 'Execute_request failure enabling debugging for IW',
                  telemetryName: Telemetry.InteractiveWindowDebugSetupCodeFailure
              })
            : [];

```

</details>
<details>
  <summary>DATASCIENCE.INTERRUPT</summary>

## Description




 User interrupts a cell
 Identical to `Telemetry.InterruptJupyterTime`

## Properties


No properties for event


## Locations Used

[src/kernels/execution/kernelExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/execution/kernelExecution.ts)
```typescript
        traceInfoIfCI(`Dispose KernelExecution`);
        this.disposables.forEach((d) => d.dispose());
    }
    @captureTelemetry(Telemetry.Interrupt)
    @captureTelemetry(Telemetry.InterruptJupyterTime)
    private async interruptExecution(
        session: IKernelConnectionSession,
```

</details>
<details>
  <summary>DATASCIENCE.JUPYTER_COMMAND_SEARCH</summary>

## Description


No description provided

## Properties

- 
        where: 'activeInterpreter' | 'otherInterpreter' | 'path' | 'nowhere';
- 
        command: JupyterCommands;

## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.JUPYTER_KERNEL_API_ACCESS</summary>

## Description


No description provided

## Properties

- 
        extensionId: string;
- 
        allowed: 'yes' | 'no';

## Locations Used

[src/standalone/api/apiAccessService.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/api/apiAccessService.ts)
```typescript
        const extensionPermissions = this.globalState.get<ApiExtensionInfo | undefined>(API_ACCESS_GLOBAL_KEY);
        const extensionPermission = extensionPermissions?.find((item) => item.extensionId === info.extensionId);
        if (extensionPermission) {
            sendTelemetryEvent(Telemetry.JupyterKernelApiAccess, undefined, {
                extensionId: info.extensionId,
                allowed: extensionPermission.allowed
            });
```


[src/standalone/api/apiAccessService.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/api/apiAccessService.ts)
```typescript
                    return this.globalState.update(API_ACCESS_GLOBAL_KEY, extensionPermissions);
                })
                .then(noop, noop);
            sendTelemetryEvent(Telemetry.JupyterKernelApiAccess, undefined, {
                extensionId: info.extensionId,
                allowed: allow ? 'yes' : 'no'
            });
```

</details>
<details>
  <summary>DATASCIENCE.JUPYTER_KERNEL_API_USAGE</summary>

## Description


No description provided

## Properties

- 
        extensionId: string;
- 
        pemUsed: keyof IExportedKernelService;

## Locations Used

[src/standalone/api/kernelApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/api/kernelApi.ts)
```typescript
        KernelConnectionMetadata
    >();
    public get onDidChangeKernelSpecifications(): Event<void> {
        sendTelemetryEvent(Telemetry.JupyterKernelApiUsage, undefined, {
            extensionId: this.callingExtensionId,
            pemUsed: 'onDidChangeKernelSpecifications'
        });
```


[src/standalone/api/kernelApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/api/kernelApi.ts)
```typescript
        return this._onDidChangeKernelSpecifications.event;
    }
    public get onDidChangeKernels(): Event<void> {
        sendTelemetryEvent(Telemetry.JupyterKernelApiUsage, undefined, {
            extensionId: this.callingExtensionId,
            pemUsed: 'onDidChangeKernels'
        });
```


[src/standalone/api/kernelApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/api/kernelApi.ts)
```typescript
        this.controllerLoader.refreshed(() => this._onDidChangeKernelSpecifications.fire(), this, disposables);
    }
    async getKernelSpecifications(refresh?: boolean): Promise<KernelConnectionMetadata[]> {
        sendTelemetryEvent(Telemetry.JupyterKernelApiUsage, undefined, {
            extensionId: this.callingExtensionId,
            pemUsed: 'getKernelSpecifications'
        });
```


[src/standalone/api/kernelApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/api/kernelApi.ts)
```typescript
        return items.map((item) => this.translateKernelConnectionMetadataToExportedType(item.connection));
    }
    getActiveKernels(): { metadata: KernelConnectionMetadata; uri: Uri | undefined }[] {
        sendTelemetryEvent(Telemetry.JupyterKernelApiUsage, undefined, {
            extensionId: this.callingExtensionId,
            pemUsed: 'getActiveKernels'
        });
```


[src/standalone/api/kernelApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/api/kernelApi.ts)
```typescript
        return kernels;
    }
    getKernel(uri: Uri): { metadata: KernelConnectionMetadata; connection: IKernelConnectionInfo } | undefined {
        sendTelemetryEvent(Telemetry.JupyterKernelApiUsage, undefined, {
            extensionId: this.callingExtensionId,
            pemUsed: 'getKernel'
        });
```


[src/standalone/api/kernelApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/api/kernelApi.ts)
```typescript
        }
    }
    async startKernel(spec: KernelConnectionMetadata, uri: Uri): Promise<IKernelConnectionInfo> {
        sendTelemetryEvent(Telemetry.JupyterKernelApiUsage, undefined, {
            extensionId: this.callingExtensionId,
            pemUsed: 'startKernel'
        });
```


[src/standalone/api/kernelApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/api/kernelApi.ts)
```typescript
        return this.startOrConnect(spec, uri);
    }
    async connect(spec: ActiveKernel, uri: Uri): Promise<IKernelConnectionInfo> {
        sendTelemetryEvent(Telemetry.JupyterKernelApiUsage, undefined, {
            extensionId: this.callingExtensionId,
            pemUsed: 'connect'
        });
```

</details>
<details>
  <summary>DATASCIENCE.JUPYTER_KERNEL_FILTER_USED</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/kernelFilter/kernelFilterUI.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/kernelFilter/kernelFilterUI.ts)
```typescript
                    .map((item) => item.connection)
                    .filter((item) => !selectedItems.has(item));
                this.kernelFilter.storeHiddenKernels(hiddenConnections.map((item) => item)).then(noop, noop);
                sendTelemetryEvent(Telemetry.JupyterKernelFilterUsed);
            },
            this,
            disposables
```

</details>
<details>
  <summary>DATASCIENCE.JUPYTER_KERNEL_HIDDEN_VIA_FILTER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/kernelFilter/kernelFilterService.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/kernelFilter/kernelFilterService.ts)
```typescript
        });

        if (hidden) {
            sendTelemetryEvent(Telemetry.JupyterKernelHiddenViaFilter);
        }
        return hidden;
    }
```

</details>
<details>
  <summary>DATASCIENCE.JUPYTER_NOT_INSTALLED_ERROR_SHOWN</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts)
```typescript
                moduleName: ProductNames.get(Product.jupyter)!,
                pythonEnvType: interpreter.envType
            });
            sendTelemetryEvent(Telemetry.JupyterNotInstalledErrorShown);
            const selection = await this.applicationShell.showErrorMessage(
                message,
                { modal: true },
```

</details>
<details>
  <summary>DATASCIENCE.KERNEL_CRASH</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/kernelCrashMonitor.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelCrashMonitor.ts)
```typescript
    }
    private async endCellAndDisplayErrorsInCell(kernel: IKernel) {
        const lastExecutedCell = this.lastExecutedCellPerKernel.get(kernel);
        sendKernelTelemetryEvent(kernel.resourceUri, Telemetry.KernelCrash);
        if (!lastExecutedCell) {
            return;
        }
```


[src/kernels/kernelAutoReConnectFailedMonitor.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelAutoReConnectFailedMonitor.ts)
```typescript
        if (kernel.disposed || kernel.disposing) {
            return;
        }
        sendKernelTelemetryEvent(kernel.resourceUri, Telemetry.KernelCrash);

        const message = isLocalConnection(kernel.kernelConnectionMetadata)
            ? DataScience.kernelDisconnected().format(
```

</details>
<details>
  <summary>DATASCIENCE.KERNEL_SPEC_LANGUAGE</summary>

## Description


No description provided

## Properties

- 
        /**
         * Language of the kernelSpec.
         */
        language: string;
- 
        /**
         * Whether this is a local or remote kernel.
         */
        kind: 'local' | 'remote';
- 
        /**
         * Whether shell is used to start the kernel. E.g. `"/bin/sh"` is used in the argv of the kernelSpec.
         * OCaml is one such kernel.
         */
        usesShell?: boolean;

## Locations Used

[src/kernels/raw/finder/helper.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/finder/helper.ts)
```typescript
        arg = arg.toLowerCase();
        return shellScripts.some((shell) => arg.includes(shell));
    });
    sendTelemetryEvent(Telemetry.KernelSpecLanguage, undefined, {
        language: getTelemetrySafeLanguage(kernelSpec.language),
        kind,
        usesShell
```

</details>
<details>
  <summary>DATASCIENCE.KERNEL_STARTUP_CODE_FAILURE</summary>

## Description


No description provided

## Properties

- 
        ename: string;
- 
        evalue: string;

## Locations Used

[src/kernels/kernel.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernel.ts)
```typescript
        await this.executeSilently(session, startupCode, {
            traceErrors: true,
            traceErrorsMessage: 'Error executing jupyter extension internal startup code',
            telemetryName: Telemetry.KernelStartupCodeFailure
        });
        if (this.kernelConnectionMetadata.kind !== 'connectToLiveRemoteKernel') {
            // Run user specified startup commands
```

</details>
<details>
  <summary>DATASCIENCE.NATIVE.CONVERT_NOTEBOOK_TO_PYTHON</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.CREATE_NEW_NOTEBOOK</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/notebookEditorProvider.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/notebookEditorProvider.ts)
```typescript
export class NotebookEditorProvider implements INotebookEditorProvider {
    private providers: Set<IEmbedNotebookEditorProvider> = new Set();
    constructor(@inject(IVSCodeNotebook) private readonly vscodeNotebook: IVSCodeNotebook) {}
    @captureTelemetry(Telemetry.CreateNewNotebook, undefined, false)
    public async createNew(options?: { contents?: string; defaultCellLanguage: string }): Promise<void> {
        // contents will be ignored
        const language = options?.defaultCellLanguage ?? PYTHON_LANGUAGE;
```

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.ARROW_DOWN</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.ARROW_UP</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.CHANGE_TO_CODE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.CHANGE_TO_MARKDOWN</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.DELETE_CELL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.INSERT_ABOVE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.INSERT_BELOW</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.REDO</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.RUN</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.RUN_AND_ADD</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.RUN_AND_MOVE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.SAVE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.TOGGLE_LINE_NUMBERS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.TOGGLE_OUTPUT</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.UNDO</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.KEYBOARD.UNFOCUS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.ADD_TO_END</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.CHANGE_TO_CODE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.CHANGE_TO_MARKDOWN</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.DELETE_CELL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.INSERT_BELOW</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.MOVE_CELL_DOWN</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.MOVE_CELL_UP</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.RUN</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.RUN_ABOVE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.RUN_ALL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.RUN_BELOW</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.SAVE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.SELECT_KERNEL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.SELECT_SERVER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.MOUSE.TOGGLE_VARIABLE_EXPLORER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.OPEN_NOTEBOOK</summary>

## Description


No description provided

## Properties

-  scope: 'command' | 'file'

## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.OPEN_NOTEBOOK_ALL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/activation.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/activation.node.ts)
```typescript
        }
        this.notebookOpened = true;
        this.PreWarmDaemonPool().ignoreErrors();
        sendTelemetryEvent(Telemetry.OpenNotebookAll);

        if (!this.rawSupported.isSupported && this.extensionChecker.isPythonExtensionInstalled) {
            // Warm up our selected interpreter for the extension
```


[src/test/datascience/telemetry.vscode.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/datascience/telemetry.vscode.test.ts)
```typescript

        // Right now this is the guaranteed list. Might want to expand this.
        assertEvent(Telemetry.ExecuteCell);
        assertEvent(Telemetry.OpenNotebookAll);
        assertEvent(Telemetry.NotebookStart);
    });
    test('Run interactive window', async () => {
```

</details>
<details>
  <summary>DATASCIENCE.NATIVE.OPEN_NOTEBOOK_SELECTION</summary>

## Description




 Telemetry sent with details of the selection of the quick pick for when user creates new notebook.
 This only applies with other extensions like .NET registers with us.

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NATIVE.OPEN_NOTEBOOK_SELECTION_REGISTERED</summary>

## Description


No description provided

## Properties

- 
        /**
         * The id of the extension registering with us to be displayed the dropdown list for notebook creation.
         */
        extensionId: string;

## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.NO_ACTIVE_KERNEL_SESSION</summary>

## Description




 Useful when we need an active kernel session in order to execute commands silently.
 Used by the dataViewerDependencyService.

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/kernelDataViewerDependencyImplementation.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/kernelDataViewerDependencyImplementation.ts)
```typescript
        sendTelemetryEvent(Telemetry.DataViewerUsingKernel);

        if (!kernelHasSession(kernel)) {
            sendTelemetryEvent(Telemetry.NoActiveKernelSession);
            throw new Error('No no active kernel session.');
        }

```

</details>
<details>
  <summary>DATASCIENCE.NOTEBOOK_INTERRUPT</summary>

## Description




 Total time taken to interrupt a kernel
 Check the `resourceType` to determine whether its a Jupyter Notebook or IW.

## Properties


No properties for event


## Locations Used

[src/kernels/telemetry/sendKernelTelemetryEvent.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/telemetry/sendKernelTelemetryEvent.ts)
```typescript
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function resetData(resource: Resource, eventName: string, properties: any) {
    // Once we have successfully interrupted, clear the interrupt counter.
    if (eventName === Telemetry.NotebookInterrupt) {
        let kv: Pick<IEventNamePropertyMapping, Telemetry.NotebookInterrupt>;
        const data: undefined | typeof kv[Telemetry.NotebookInterrupt] = properties;
        // Check result to determine if success.
```


[src/kernels/telemetry/sendKernelTelemetryEvent.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/telemetry/sendKernelTelemetryEvent.ts)
```typescript
function resetData(resource: Resource, eventName: string, properties: any) {
    // Once we have successfully interrupted, clear the interrupt counter.
    if (eventName === Telemetry.NotebookInterrupt) {
        let kv: Pick<IEventNamePropertyMapping, Telemetry.NotebookInterrupt>;
        const data: undefined | typeof kv[Telemetry.NotebookInterrupt] = properties;
        // Check result to determine if success.
        if (data && 'result' in data && data.result === InterruptResult.Success) {
```


[src/kernels/telemetry/sendKernelTelemetryEvent.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/telemetry/sendKernelTelemetryEvent.ts)
```typescript
    // Once we have successfully interrupted, clear the interrupt counter.
    if (eventName === Telemetry.NotebookInterrupt) {
        let kv: Pick<IEventNamePropertyMapping, Telemetry.NotebookInterrupt>;
        const data: undefined | typeof kv[Telemetry.NotebookInterrupt] = properties;
        // Check result to determine if success.
        if (data && 'result' in data && data.result === InterruptResult.Success) {
            clearInterruptCounter(resource);
```


[src/kernels/execution/kernelExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/execution/kernelExecution.ts)
```typescript
                // Otherwise a real error occurred.
                sendKernelTelemetryEvent(
                    this.kernel.resourceUri,
                    Telemetry.NotebookInterrupt,
                    stopWatch.elapsedTime,
                    undefined,
                    exc
```


[src/kernels/execution/kernelExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/execution/kernelExecution.ts)
```typescript
        })();

        return promise.then((result) => {
            sendKernelTelemetryEvent(this.kernel.resourceUri, Telemetry.NotebookInterrupt, stopWatch.elapsedTime, {
                result
            });
            return result;
```

</details>
<details>
  <summary>DATASCIENCE.NOTEBOOK_LANGUAGE</summary>

## Description




 Telemetry event sent to indicate the language used in a notebook

 @type { language: string }
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

[src/notebooks/telemetry/notebookOrKernelLanguageTelemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/telemetry/notebookOrKernelLanguageTelemetry.ts)
```typescript
import { getTelemetrySafeLanguage } from '../../platform/telemetry/helpers';

export function sendNotebookOrKernelLanguageTelemetry(
    telemetryEvent: Telemetry.SwitchToExistingKernel | Telemetry.NotebookLanguage,
    language?: string
) {
    language = getTelemetrySafeLanguage(language);
```

</details>
<details>
  <summary>DATASCIENCE.NOTEBOOK_RESTART</summary>

## Description




 Restarts the Kernel.
 Check the `resourceType` to determine whether its a Jupyter Notebook or IW.

## Properties


No properties for event


## Locations Used

[src/kernels/telemetry/sendKernelTelemetryEvent.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/telemetry/sendKernelTelemetryEvent.ts)
```typescript
        }
    }
    // Once we have successfully restarted, clear the interrupt counter.
    if (eventName === Telemetry.NotebookRestart) {
        let kv: Pick<IEventNamePropertyMapping, Telemetry.NotebookRestart>;
        const data: undefined | typeof kv[Telemetry.NotebookRestart] = properties;
        // For restart to be successful, we should not have `failed`
```


[src/kernels/telemetry/sendKernelTelemetryEvent.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/telemetry/sendKernelTelemetryEvent.ts)
```typescript
    }
    // Once we have successfully restarted, clear the interrupt counter.
    if (eventName === Telemetry.NotebookRestart) {
        let kv: Pick<IEventNamePropertyMapping, Telemetry.NotebookRestart>;
        const data: undefined | typeof kv[Telemetry.NotebookRestart] = properties;
        // For restart to be successful, we should not have `failed`
        const failed = data && 'failed' in data ? data.failed : false;
```


[src/kernels/telemetry/sendKernelTelemetryEvent.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/telemetry/sendKernelTelemetryEvent.ts)
```typescript
    // Once we have successfully restarted, clear the interrupt counter.
    if (eventName === Telemetry.NotebookRestart) {
        let kv: Pick<IEventNamePropertyMapping, Telemetry.NotebookRestart>;
        const data: undefined | typeof kv[Telemetry.NotebookRestart] = properties;
        // For restart to be successful, we should not have `failed`
        const failed = data && 'failed' in data ? data.failed : false;
        if (!failed) {
```


[src/kernels/common/baseJupyterSession.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/common/baseJupyterSession.ts)
```typescript
        if (this.session?.isRemoteSession && this.session.kernel) {
            const stopWatch = new StopWatch();
            await this.session.kernel.restart();
            sendKernelTelemetryEvent(this.resource, Telemetry.NotebookRestart, stopWatch.elapsedTime, {
                startTimeOnly: true
            });
            this.setSession(this.session, true);
```


[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
            () => this.postStartRawSession(options, process)
        );
        if (options.purpose === 'restart') {
            sendKernelTelemetryWhenDone(this.resource, Telemetry.NotebookRestart, promise, false, {
                startTimeOnly: true
            });
        }
```


[src/kernels/jupyter/session/jupyterSession.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/session/jupyterSession.ts)
```typescript
            const stopWatch = new StopWatch();
            result = await this.createSession({ token: cancelToken, ui });
            await this.waitForIdleOnSession(result, this.idleTimeout, cancelToken);
            sendKernelTelemetryEvent(this.resource, Telemetry.NotebookRestart, stopWatch.elapsedTime, {
                startTimeOnly: true
            });
            return result;
```


[src/kernels/kernel.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernel.ts)
```typescript
            await (this._jupyterSessionPromise
                ? this.kernelExecution.restart(this._jupyterSessionPromise)
                : this.start(new DisplayOptions(false)));
            sendKernelTelemetryEvent(this.resourceUri, Telemetry.NotebookRestart, stopWatch.elapsedTime);
        } catch (ex) {
            traceError(`Restart failed ${getDisplayPath(this.uri)}`, ex);
            this._ignoreJupyterSessionDisposedErrors = true;
```


[src/kernels/kernel.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernel.ts)
```typescript
            this._jupyterSessionPromise = undefined;
            // If we get a kernel promise failure, then restarting timed out. Just shutdown and restart the entire server.
            // Note, this code might not be necessary, as such an error is thrown only when interrupting a kernel times out.
            sendKernelTelemetryEvent(this.resourceUri, Telemetry.NotebookRestart, stopWatch.elapsedTime, undefined, ex);
            await session?.dispose().catch(noop);
            this._ignoreJupyterSessionDisposedErrors = false;
            throw ex;
```

</details>
<details>
  <summary>DATASCIENCE.NOTEBOOK_START</summary>

## Description




 Starts a kernel, applies to IW and Notebook.
 Check the `resourceType` to determine whether its a Jupyter Notebook or IW.

## Properties


No properties for event


## Locations Used

[src/kernels/telemetry/sendKernelTelemetryEvent.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/telemetry/sendKernelTelemetryEvent.ts)
```typescript

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function incrementStartFailureCount(resource: Resource, eventName: any, properties: any) {
    if (eventName === Telemetry.NotebookStart) {
        let kv: Pick<IEventNamePropertyMapping, Telemetry.NotebookStart>;
        const data: undefined | typeof kv[Telemetry.NotebookStart] = properties;
        // Check start failed.
```


[src/kernels/telemetry/sendKernelTelemetryEvent.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/telemetry/sendKernelTelemetryEvent.ts)
```typescript
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function incrementStartFailureCount(resource: Resource, eventName: any, properties: any) {
    if (eventName === Telemetry.NotebookStart) {
        let kv: Pick<IEventNamePropertyMapping, Telemetry.NotebookStart>;
        const data: undefined | typeof kv[Telemetry.NotebookStart] = properties;
        // Check start failed.
        if (data && 'failed' in data && data.failed) {
```


[src/kernels/telemetry/sendKernelTelemetryEvent.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/telemetry/sendKernelTelemetryEvent.ts)
```typescript
function incrementStartFailureCount(resource: Resource, eventName: any, properties: any) {
    if (eventName === Telemetry.NotebookStart) {
        let kv: Pick<IEventNamePropertyMapping, Telemetry.NotebookStart>;
        const data: undefined | typeof kv[Telemetry.NotebookStart] = properties;
        // Check start failed.
        if (data && 'failed' in data && data.failed) {
            trackKernelResourceInformation(resource, { startFailed: true });
```


[src/kernels/errors/kernelErrorHandler.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/errors/kernelErrorHandler.ts)
```typescript
        }
        this.handledKernelErrors.add(err);
        if (errorContext === 'start') {
            sendKernelTelemetryWhenDone(resource, Telemetry.NotebookStart, Promise.reject(err), true, {
                disableUI: false,
                failureCategory
            });
```


[src/kernels/kernel.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernel.ts)
```typescript
        this.uiWasDisabledWhenKernelStartupTelemetryWasLastSent = this.startupUI.disableUI === true;
        // The corresponding failure telemetry property for the `Telemetry.NotebookStart` event will be sent in the Error Handler,
        // after we analyze the error.
        sendKernelTelemetryEvent(this.resourceUri, Telemetry.NotebookStart, undefined, {
            disableUI: this.startupUI.disableUI
        });
    }
```


[src/test/datascience/telemetry.vscode.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/datascience/telemetry.vscode.test.ts)
```typescript
        // Right now this is the guaranteed list. Might want to expand this.
        assertEvent(Telemetry.ExecuteCell);
        assertEvent(Telemetry.OpenNotebookAll);
        assertEvent(Telemetry.NotebookStart);
    });
    test('Run interactive window', async () => {
        const { activeInteractiveWindow } = await runNewPythonFile(
```

</details>
<details>
  <summary>DATASCIENCE.OPEN_PLOT_VIEWER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/plotting/plotViewerProvider.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/plotting/plotViewerProvider.ts)
```typescript
            this.currentViewer = this.serviceContainer.get<IPlotViewer>(IPlotViewer);
            this.currentViewerClosed = this.currentViewer.closed(this.closedViewer);
            this.currentViewer.removed(this.removedPlot);
            sendTelemetryEvent(Telemetry.OpenPlotViewer);
            await this.currentViewer.show();
        }

```

</details>
<details>
  <summary>DATASCIENCE.OPENED_INTERACTIVE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.PYTHON_VARIABLE_FETCHING_CODE_FAILURE</summary>

## Description


No description provided

## Properties

- 
        ename: string;
- 
        evalue: string;

## Locations Used

[src/kernels/variables/pythonVariableRequester.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/variables/pythonVariableRequester.ts)
```typescript
            {
                traceErrors: true,
                traceErrorsMessage: 'Failure in execute_request for getDataFrameInfo',
                telemetryName: Telemetry.PythonVariableFetchingCodeFailure
            }
        );

```


[src/kernels/variables/pythonVariableRequester.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/variables/pythonVariableRequester.ts)
```typescript
            {
                traceErrors: true,
                traceErrorsMessage: 'Failure in execute_request for getDataFrameRows',
                telemetryName: Telemetry.PythonVariableFetchingCodeFailure
            }
        );

```


[src/kernels/variables/pythonVariableRequester.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/variables/pythonVariableRequester.ts)
```typescript
                    {
                        traceErrors: true,
                        traceErrorsMessage: 'Failure in execute_request for getVariableProperties',
                        telemetryName: Telemetry.PythonVariableFetchingCodeFailure
                    }
                );
                result = { ...result, ...this.deserializeJupyterResult(attributes) };
```


[src/kernels/variables/pythonVariableRequester.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/variables/pythonVariableRequester.ts)
```typescript
                {
                    traceErrors: true,
                    traceErrorsMessage: 'Failure in execute_request for getVariableNamesAndTypesFromKernel',
                    telemetryName: Telemetry.PythonVariableFetchingCodeFailure
                }
            );

```


[src/kernels/variables/pythonVariableRequester.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/variables/pythonVariableRequester.ts)
```typescript
            {
                traceErrors: true,
                traceErrorsMessage: 'Failure in execute_request for getFullVariable',
                telemetryName: Telemetry.PythonVariableFetchingCodeFailure
            }
        );

```

</details>
<details>
  <summary>DATASCIENCE.RECOMMENT_EXTENSION</summary>

## Description



 Telemetry sent when we recommend installing an extension.

## Properties

- 
        /**
         * Extension we recommended the user to install.
         */
        extensionId: string;
- 
        /**
         * `displayed` - If prompt was displayed
         * `dismissed` - If prompt was displayed & dismissed by the user
         * `ok` - If prompt was displayed & ok clicked by the user
         * `cancel` - If prompt was displayed & cancel clicked by the user
         * `doNotShowAgain` - If prompt was displayed & doNotShowAgain clicked by the user
         */
        action: 'displayed' | 'dismissed' | 'ok' | 'cancel' | 'doNotShowAgain';

## Locations Used

[src/standalone/recommendation/extensionRecommendation.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/recommendation/extensionRecommendation.node.ts)
```typescript
            `[${extensionInfo.displayName}](${extensionInfo.extensionLink})`,
            language
        );
        sendTelemetryEvent(Telemetry.RecommendExtension, undefined, { extensionId, action: 'displayed' });
        const selection = await this.appShell.showInformationMessage(
            message,
            Common.bannerLabelYes(),
```


[src/standalone/recommendation/extensionRecommendation.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/recommendation/extensionRecommendation.node.ts)
```typescript
        );
        switch (selection) {
            case Common.bannerLabelYes(): {
                sendTelemetryEvent(Telemetry.RecommendExtension, undefined, { extensionId, action: 'ok' });
                this.commandManager.executeCommand('extension.open', extensionId).then(noop, noop);
                break;
            }
```


[src/standalone/recommendation/extensionRecommendation.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/recommendation/extensionRecommendation.node.ts)
```typescript
                break;
            }
            case Common.bannerLabelNo(): {
                sendTelemetryEvent(Telemetry.RecommendExtension, undefined, { extensionId, action: 'cancel' });
                break;
            }
            case Common.doNotShowAgain(): {
```


[src/standalone/recommendation/extensionRecommendation.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/recommendation/extensionRecommendation.node.ts)
```typescript
                break;
            }
            case Common.doNotShowAgain(): {
                sendTelemetryEvent(Telemetry.RecommendExtension, undefined, { extensionId, action: 'doNotShowAgain' });
                const list = this.globalMemento.get<string[]>(mementoKeyToNeverPromptExtensionAgain, []);
                if (!list.includes(extensionId)) {
                    list.push(extensionId);
```


[src/standalone/recommendation/extensionRecommendation.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/recommendation/extensionRecommendation.node.ts)
```typescript
                break;
            }
            default:
                sendTelemetryEvent(Telemetry.RecommendExtension, undefined, { extensionId, action: 'dismissed' });
        }
    }
}
```

</details>
<details>
  <summary>DATASCIENCE.REDO</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.REFRESH_DATA_VIEWER</summary>

## Description




 Sent when the jupyter.refreshDataViewer command is invoked

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/dataViewer.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/dataViewer.ts)
```typescript

            case DataViewerMessages.RefreshDataViewer:
                this.refreshData().ignoreErrors();
                void sendTelemetryEvent(Telemetry.RefreshDataViewer);
                break;

            case DataViewerMessages.SliceEnablementStateChanged:
```

</details>
<details>
  <summary>DATASCIENCE.RESTART_KERNEL_COMMAND</summary>

## Description




 Telemetry event sent when IW or Notebook is restarted.

## Properties


No properties for event


## Locations Used

[src/notebooks/notebookCommandListener.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/notebookCommandListener.ts)
```typescript
        const kernel = this.kernelProvider.get(document);

        if (kernel) {
            sendKernelTelemetryEvent(kernel.resourceUri, Telemetry.RestartKernelCommand);
            trackKernelResourceInformation(kernel.resourceUri, { restartKernel: true });
            if (await this.shouldAskForRestart(document.uri)) {
                // Ask the user if they want us to restart or not.
```

</details>
<details>
  <summary>DATASCIENCE.RUN_ADD_EMPTY_CELL_TO_BOTTOM</summary>

## Description




 Misc

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.RUN_ALL_CELLS</summary>

## Description




 Run all Cell Commands in Interactive Python

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        this.closeDocumentDisposable?.dispose(); // NOSONAR
        this.updateRequiredDisposable?.dispose(); // NOSONAR
    }
    @captureTelemetry(Telemetry.RunAllCells)
    public async runAllCells() {
        const iw = await this.getActiveInteractiveWindow();
        const runCellCommands = this.codeLenses.filter(
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        this.closeDocumentDisposable?.dispose(); // NOSONAR
        this.updateRequiredDisposable?.dispose(); // NOSONAR
    }
    @captureUsageTelemetry(Telemetry.RunAllCells)
    public async runAllCells() {
        const iw = await this.getActiveInteractiveWindow();
        const runCellCommands = this.codeLenses.filter(
```

</details>
<details>
  <summary>DATASCIENCE.RUN_ALL_CELLS_ABOVE</summary>

## Description




 Run all the above cells in Interactive Python

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
    }

    // Run all cells up to the cell containing this start line and character
    @captureTelemetry(Telemetry.RunAllCellsAbove)
    public async runAllCellsAbove(stopLine: number, stopCharacter: number) {
        const iw = await this.getActiveInteractiveWindow();
        const runCellCommands = this.codeLenses.filter((c) => c.command && c.command.command === Commands.RunCell);
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
    }

    // Run all cells up to the cell containing this start line and character
    @captureUsageTelemetry(Telemetry.RunAllCellsAbove)
    public async runAllCellsAbove(stopLine: number, stopCharacter: number) {
        const iw = await this.getActiveInteractiveWindow();
        const runCellCommands = this.codeLenses.filter((c) => c.command && c.command.command === Commands.RunCell);
```

</details>
<details>
  <summary>DATASCIENCE.RUN_BY_LINE</summary>

## Description



 Run by line events

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.RUN_BY_LINE_STEP</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.RUN_BY_LINE_STOP</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.RUN_BY_LINE_VARIABLE_HOVER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/debugger/debuggerVariables.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/debugger/debuggerVariables.ts)
```typescript
            // Note, full variable results isn't necessary for this call. It only really needs the variable value.
            const result = this.lastKnownVariables.find((v) => v.name === name);
            if (result && kernel?.resourceUri && uriPath.extname(kernel?.resourceUri).toLowerCase() === '.ipynb') {
                sendTelemetryEvent(Telemetry.RunByLineVariableHover);
            }
            return result;
        }
```

</details>
<details>
  <summary>DATASCIENCE.RUN_CELL</summary>

## Description




 Run a Cell in Interactive Python

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.RUN_CELL_AND_ALL_BELOW</summary>

## Description




 Run current cell and all below in Interactive Python

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        await finished;
    }

    @captureTelemetry(Telemetry.RunCellAndAllBelow)
    public async runCellAndAllBelow(startLine: number, startCharacter: number) {
        const iw = await this.getActiveInteractiveWindow();
        const runCellCommands = this.codeLenses.filter((c) => c.command && c.command.command === Commands.RunCell);
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        await finished;
    }

    @captureUsageTelemetry(Telemetry.RunCellAndAllBelow)
    public async runCellAndAllBelow(startLine: number, startCharacter: number) {
        const iw = await this.getActiveInteractiveWindow();
        const runCellCommands = this.codeLenses.filter((c) => c.command && c.command.command === Commands.RunCell);
```

</details>
<details>
  <summary>DATASCIENCE.RUN_CHANGE_CELL_TO_CODE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        });
    }

    @captureTelemetry(Telemetry.ChangeCellToCode)
    public changeCellToCode() {
        this.applyToCells((editor, cell, _) => {
            return this.changeCellTo(editor, cell, 'code');
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        });
    }

    @capturePerfTelemetry(Telemetry.ChangeCellToCode)
    public changeCellToCode() {
        this.applyToCells((editor, cell, _) => {
            return this.changeCellTo(editor, cell, 'code');
```

</details>
<details>
  <summary>DATASCIENCE.RUN_CHANGE_CELL_TO_MARKDOWN</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        await this.moveCellsDirection(false);
    }

    @captureTelemetry(Telemetry.ChangeCellToMarkdown)
    public changeCellToMarkdown() {
        this.applyToCells((editor, cell, _) => {
            return this.changeCellTo(editor, cell, 'markdown');
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        await this.moveCellsDirection(false);
    }

    @capturePerfTelemetry(Telemetry.ChangeCellToMarkdown)
    public changeCellToMarkdown() {
        this.applyToCells((editor, cell, _) => {
            return this.changeCellTo(editor, cell, 'markdown');
```

</details>
<details>
  <summary>DATASCIENCE.RUN_CURRENT_CELL</summary>

## Description




 Run the current Cell in Interactive Python

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        return this.runMatchingCell(range, false, true);
    }

    @captureTelemetry(Telemetry.RunCurrentCell)
    public async runCurrentCell(): Promise<void> {
        if (!this.documentManager.activeTextEditor || !this.documentManager.activeTextEditor.document) {
            return;
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        return this.runMatchingCell(range, false, true);
    }

    @captureUsageTelemetry(Telemetry.RunCurrentCell)
    public async runCurrentCell(): Promise<void> {
        if (!this.documentManager.activeTextEditor || !this.documentManager.activeTextEditor.document) {
            return;
```

</details>
<details>
  <summary>DATASCIENCE.RUN_CURRENT_CELL_AND_ADD_BELOW</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.RunCurrentCellAndAddBelow)
    public async runCurrentCellAndAddBelow(): Promise<void> {
        if (!this.documentManager.activeTextEditor || !this.documentManager.activeTextEditor.document) {
            return;
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        }
    }

    @capturePerfTelemetry(Telemetry.RunCurrentCellAndAddBelow)
    public async runCurrentCellAndAddBelow(): Promise<void> {
        if (!this.documentManager.activeTextEditor || !this.documentManager.activeTextEditor.document) {
            return;
```

</details>
<details>
  <summary>DATASCIENCE.RUN_CURRENT_CELL_AND_ADVANCE</summary>

## Description




 Run current cell and advance cursor in Interactive Python

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        return this.runMatchingCell(this.documentManager.activeTextEditor.selection, false);
    }

    @captureTelemetry(Telemetry.RunCurrentCellAndAdvance)
    public async runCurrentCellAndAdvance() {
        if (!this.documentManager.activeTextEditor || !this.documentManager.activeTextEditor.document) {
            return;
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        return this.runMatchingCell(this.documentManager.activeTextEditor.selection, false);
    }

    @captureUsageTelemetry(Telemetry.RunCurrentCellAndAdvance)
    public async runCurrentCellAndAdvance() {
        if (!this.documentManager.activeTextEditor || !this.documentManager.activeTextEditor.document) {
            return;
```

</details>
<details>
  <summary>DATASCIENCE.RUN_DELETE_CELLS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.DeleteCells)
    public deleteCells() {
        const editor = this.documentManager.activeTextEditor;
        if (!editor || !editor.selection) {
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        }
    }

    @capturePerfTelemetry(Telemetry.DeleteCells)
    public deleteCells() {
        const editor = this.documentManager.activeTextEditor;
        if (!editor || !editor.selection) {
```

</details>
<details>
  <summary>DATASCIENCE.RUN_EXTEND_SELECTION_BY_CELL_ABOVE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        editor.selections = selections;
    }

    @captureTelemetry(Telemetry.ExtendSelectionByCellAbove)
    public extendSelectionByCellAbove() {
        // This behaves similarly to excel "Extend Selection by One Cell Above".
        // The direction of the selection matters (i.e. where the active cursor)
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        editor.selections = selections;
    }

    @capturePerfTelemetry(Telemetry.ExtendSelectionByCellAbove)
    public extendSelectionByCellAbove() {
        // This behaves similarly to excel "Extend Selection by One Cell Above".
        // The direction of the selection matters (i.e. where the active cursor)
```

</details>
<details>
  <summary>DATASCIENCE.RUN_EXTEND_SELECTION_BY_CELL_BELOW</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.ExtendSelectionByCellBelow)
    public extendSelectionByCellBelow() {
        // This behaves similarly to excel "Extend Selection by One Cell Above".
        // The direction of the selection matters (i.e. where the active cursor)
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        }
    }

    @capturePerfTelemetry(Telemetry.ExtendSelectionByCellBelow)
    public extendSelectionByCellBelow() {
        // This behaves similarly to excel "Extend Selection by One Cell Above".
        // The direction of the selection matters (i.e. where the active cursor)
```

</details>
<details>
  <summary>DATASCIENCE.RUN_FILE_INTERACTIVE</summary>

## Description




 Run file in Interactive Python

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.RunFileInteractive)
    public async runFileInteractive() {
        return this.runFileInteractiveInternal(false);
    }
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        }
    }

    @captureUsageTelemetry(Telemetry.RunFileInteractive)
    public async runFileInteractive() {
        return this.runFileInteractiveInternal(false);
    }
```


[src/test/datascience/telemetry.vscode.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/datascience/telemetry.vscode.test.ts)
```typescript
        };

        // Right now this is the guaranteed list. Might want to expand this.
        assertEvent(Telemetry.RunFileInteractive);
        assertEvent(Telemetry.ExecuteCellPerceivedWarm);
        assertEvent(Telemetry.SwitchKernel);
    });
```

</details>
<details>
  <summary>DATASCIENCE.RUN_FROM_LINE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.RunFromLine)
    public async runFromLine(targetLine: number) {
        if (this.document && targetLine < this.document.lineCount) {
            const iw = await this.getActiveInteractiveWindow();
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        }
    }

    @captureUsageTelemetry(Telemetry.RunFromLine)
    public async runFromLine(targetLine: number) {
        if (this.document && targetLine < this.document.lineCount) {
            const iw = await this.getActiveInteractiveWindow();
```

</details>
<details>
  <summary>DATASCIENCE.RUN_INSERT_CELL_ABOVE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.InsertCellAbove)
    public insertCellAbove() {
        const editor = this.documentManager.activeTextEditor;
        if (editor && editor.selection) {
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        }
    }

    @capturePerfTelemetry(Telemetry.InsertCellAbove)
    public insertCellAbove() {
        const editor = this.documentManager.activeTextEditor;
        if (editor && editor.selection) {
```

</details>
<details>
  <summary>DATASCIENCE.RUN_INSERT_CELL_BELOW</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.InsertCellBelow)
    public insertCellBelow() {
        const editor = this.documentManager.activeTextEditor;
        if (editor && editor.selection) {
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        }
    }

    @capturePerfTelemetry(Telemetry.InsertCellBelow)
    public insertCellBelow() {
        const editor = this.documentManager.activeTextEditor;
        if (editor && editor.selection) {
```

</details>
<details>
  <summary>DATASCIENCE.RUN_INSERT_CELL_BELOW_POSITION</summary>

## Description




 Cell Edit Commands in Interactive Python

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        );
    }

    @captureTelemetry(Telemetry.InsertCellBelowPosition)
    public insertCellBelowPosition() {
        const editor = this.documentManager.activeTextEditor;
        if (editor && editor.selection) {
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        );
    }

    @capturePerfTelemetry(Telemetry.InsertCellBelowPosition)
    public insertCellBelowPosition() {
        const editor = this.documentManager.activeTextEditor;
        if (editor && editor.selection) {
```

</details>
<details>
  <summary>DATASCIENCE.RUN_MOVE_CELLS_DOWN</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        await this.moveCellsDirection(true);
    }

    @captureTelemetry(Telemetry.MoveCellsDown)
    public async moveCellsDown(): Promise<void> {
        await this.moveCellsDirection(false);
    }
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        await this.moveCellsDirection(true);
    }

    @capturePerfTelemetry(Telemetry.MoveCellsDown)
    public async moveCellsDown(): Promise<void> {
        await this.moveCellsDirection(false);
    }
```

</details>
<details>
  <summary>DATASCIENCE.RUN_MOVE_CELLS_UP</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.MoveCellsUp)
    public async moveCellsUp(): Promise<void> {
        await this.moveCellsDirection(true);
    }
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        }
    }

    @capturePerfTelemetry(Telemetry.MoveCellsUp)
    public async moveCellsUp(): Promise<void> {
        await this.moveCellsDirection(true);
    }
```

</details>
<details>
  <summary>DATASCIENCE.RUN_SELECT_CELL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
            .then(noop, noop);
    }

    @captureTelemetry(Telemetry.SelectCell)
    public selectCell() {
        const editor = this.documentManager.activeTextEditor;
        if (editor && editor.selection) {
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
            .then(noop, noop);
    }

    @capturePerfTelemetry(Telemetry.SelectCell)
    public selectCell() {
        const editor = this.documentManager.activeTextEditor;
        if (editor && editor.selection) {
```

</details>
<details>
  <summary>DATASCIENCE.RUN_SELECT_CELL_CONTENTS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.SelectCellContents)
    public selectCellContents() {
        const editor = this.documentManager.activeTextEditor;
        if (!editor || !editor.selection) {
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        }
    }

    @capturePerfTelemetry(Telemetry.SelectCellContents)
    public selectCellContents() {
        const editor = this.documentManager.activeTextEditor;
        if (!editor || !editor.selection) {
```

</details>
<details>
  <summary>DATASCIENCE.RUN_SELECTION_OR_LINE</summary>

## Description




 Run a Selection or Line in Interactive Python

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        await finished;
    }

    @captureTelemetry(Telemetry.RunSelectionOrLine)
    public async runSelectionOrLine(
        activeEditor: TextEditor | undefined,
        text?: string | Uri | { code: string; normalize?: boolean }
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
    }

<<<<<<< Updated upstream
    @captureUsageTelemetry(Telemetry.RunSelectionOrLine)
    public async runSelectionOrLine(activeEditor: TextEditor | undefined, text?: string | Uri) {
||||||| Stash base
    @captureTelemetry(Telemetry.RunSelectionOrLine)
```

</details>
<details>
  <summary>DATASCIENCE.RUN_TO_LINE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.RunToLine)
    public async runToLine(targetLine: number) {
        if (this.document && targetLine > 0) {
            const iw = await this.getActiveInteractiveWindow();
```


[src/interactive-window/editor-integration/_codewatcher_mine.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/_codewatcher_mine.ts)
```typescript
        }
    }

    @captureUsageTelemetry(Telemetry.RunToLine)
    public async runToLine(targetLine: number) {
        if (this.document && targetLine > 0) {
            const iw = await this.getActiveInteractiveWindow();
```

</details>
<details>
  <summary>DATASCIENCE.SAVE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.SCROLLED_TO_CELL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.SELECT_JUPYTER_INTERPRETER_Command</summary>

## Description




 Telemetry sent when user selects an interpreter to start jupyter server.

 @type {(never | undefined)}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/interpreter/jupyterInterpreterSelectionCommand.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterSelectionCommand.node.ts)
```typescript
    public async activate(): Promise<void> {
        this.disposables.push(
            this.cmdManager.registerCommand('jupyter.selectJupyterInterpreter', () => {
                sendTelemetryEvent(Telemetry.SelectJupyterInterpreterCommand);
                this.service.selectInterpreter().ignoreErrors();
            })
        );
```

</details>
<details>
  <summary>DATASCIENCE.SELECT_JUPYTER_URI</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
        private readonly isWebExtension: boolean
    ) {}

    @captureTelemetry(Telemetry.SelectJupyterURI)
    public selectJupyterURI(
        commandSource: SelectJupyterUriCommandSource = 'nonUser',
        existingMultiStep?: IMultiStepInput<{}>
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
        @inject(IsWebExtension) private readonly isWebExtension: boolean
    ) {}

    @captureTelemetry(Telemetry.SelectJupyterURI)
    @traceDecoratorError('Failed to select Jupyter Uri')
    public selectJupyterURI(
        commandSource: SelectJupyterUriCommandSource = 'nonUser'
```


[src/kernels/jupyter/launcher/commandLineSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/commandLineSelector.ts)
```typescript
        workspaceService.onDidChangeConfiguration(this.onDidChangeConfiguration.bind(this));
    }

    @captureTelemetry(Telemetry.SelectJupyterURI)
    public async selectJupyterCommandLine(file: Uri): Promise<void> {
        const multiStep = this.multiStepFactory.create<{}>();
        await multiStep.run(this.startSelectingCommandLine.bind(this, file), {});
```

</details>
<details>
  <summary>DATASCIENCE.SELECT_LOCAL_JUPYTER_KERNEL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/vscodeNotebookController.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/vscodeNotebookController.ts)
```typescript
        // Else VSC is just setting a kernel for a notebook after it has opened.
        if (existingKernel) {
            const telemetryEvent = isLocalConnection(this.kernelConnection)
                ? Telemetry.SelectLocalJupyterKernel
                : Telemetry.SelectRemoteJupyterKernel;
            sendKernelTelemetryEvent(document.uri, telemetryEvent);
            this.notebookApi.notebookEditors
```

</details>
<details>
  <summary>DATASCIENCE.SELECT_REMOTE_JUPYTER_KERNEL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/vscodeNotebookController.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/vscodeNotebookController.ts)
```typescript
        if (existingKernel) {
            const telemetryEvent = isLocalConnection(this.kernelConnection)
                ? Telemetry.SelectLocalJupyterKernel
                : Telemetry.SelectRemoteJupyterKernel;
            sendKernelTelemetryEvent(document.uri, telemetryEvent);
            this.notebookApi.notebookEditors
                .filter((editor) => editor.notebook === document)
```

</details>
<details>
  <summary>DATASCIENCE.SELFCERTSMESSAGECLOSE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/jupyterUtils.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterUtils.ts)
```typescript
        await config.updateSetting('allowUnauthorizedRemoteConnection', true, undefined, ConfigurationTarget.Workspace);
        return true;
    } else if (value === closeOption) {
        sendTelemetryEvent(Telemetry.SelfCertsMessageClose);
    }
    return false;
}
```


[src/kernels/jupyter/jupyterUtils.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterUtils.ts)
```typescript
        await config.updateSetting('allowUnauthorizedRemoteConnection', true, undefined, ConfigurationTarget.Workspace);
        return true;
    } else if (value === closeOption) {
        sendTelemetryEvent(Telemetry.SelfCertsMessageClose);
    }
    return false;
}
```


[src/kernels/errors/kernelErrorHandler.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/errors/kernelErrorHandler.ts)
```typescript
                            )
                            .catch(noop);
                    } else if (value === closeOption) {
                        sendTelemetryEvent(Telemetry.SelfCertsMessageClose);
                    }
                })
                .then(noop, noop);
```


[src/kernels/jupyter/launcher/jupyterPasswordConnect.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterPasswordConnect.ts)
```typescript
                    );
                    return this.requestCreator.getFetchMethod()(url, this.addAllowUnauthorized(url, true, options));
                } else if (value === closeOption) {
                    sendTelemetryEvent(Telemetry.SelfCertsMessageClose);
                }
            }
            throw e;
```

</details>
<details>
  <summary>DATASCIENCE.SELFCERTSMESSAGEENABLED</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/jupyterUtils.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterUtils.ts)
```typescript
        closeOption
    );
    if (value === enableOption) {
        sendTelemetryEvent(Telemetry.SelfCertsMessageEnabled);
        await config.updateSetting('allowUnauthorizedRemoteConnection', true, undefined, ConfigurationTarget.Workspace);
        return true;
    } else if (value === closeOption) {
```


[src/kernels/jupyter/jupyterUtils.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterUtils.ts)
```typescript
        closeOption
    );
    if (value === enableOption) {
        sendTelemetryEvent(Telemetry.SelfCertsMessageEnabled);
        await config.updateSetting('allowUnauthorizedRemoteConnection', true, undefined, ConfigurationTarget.Workspace);
        return true;
    } else if (value === closeOption) {
```


[src/kernels/errors/kernelErrorHandler.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/errors/kernelErrorHandler.ts)
```typescript
                .showErrorMessage(DataScience.jupyterSelfCertFail().format(err.message), enableOption, closeOption)
                .then((value) => {
                    if (value === enableOption) {
                        sendTelemetryEvent(Telemetry.SelfCertsMessageEnabled);
                        this.configuration
                            .updateSetting(
                                'allowUnauthorizedRemoteConnection',
```


[src/kernels/jupyter/launcher/jupyterPasswordConnect.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterPasswordConnect.ts)
```typescript
                    closeOption
                );
                if (value === enableOption) {
                    sendTelemetryEvent(Telemetry.SelfCertsMessageEnabled);
                    await this.configService.updateSetting(
                        'allowUnauthorizedRemoteConnection',
                        true,
```

</details>
<details>
  <summary>DATASCIENCE.SET_JUPYTER_URI_LOCAL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.SetJupyterURIToLocal)
    public async setJupyterURIToLocal(): Promise<void> {
        await this.serverUriStorage.setUriToLocal();
    }
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
        return multiStep.run(this.startSelectingURI.bind(this, allowLocal), {});
    }

    @captureTelemetry(Telemetry.SetJupyterURIToLocal)
    public async setJupyterURIToLocal(): Promise<void> {
        await this.serverUriStorage.setUriToLocal();
    }
```

</details>
<details>
  <summary>DATASCIENCE.SET_JUPYTER_URI_UI_DISPLAYED</summary>

## Description




 This telemetry tracks the display of the Picker for Jupyter Remote servers.

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
        commandSource: SelectJupyterUriCommandSource = 'nonUser',
        existingMultiStep?: IMultiStepInput<{}>
    ): Promise<InputFlowAction | undefined | InputStep<{}> | void> {
        sendTelemetryEvent(Telemetry.SetJupyterURIUIDisplayed, undefined, {
            commandSource
        });
        if (existingMultiStep) {
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
        commandSource: SelectJupyterUriCommandSource = 'nonUser'
    ): Promise<InputFlowAction | undefined | InputStep<{}> | void> {
        const allowLocal = commandSource !== 'nonUser';
        sendTelemetryEvent(Telemetry.SetJupyterURIUIDisplayed, undefined, {
            commandSource
        });
        const multiStep = this.multiStepFactory.create<{}>();
```

</details>
<details>
  <summary>DATASCIENCE.SET_JUPYTER_URI_USER_SPECIFIED</summary>

## Description


No description provided

## Properties

- 
        azure: boolean;

## Locations Used

[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
            await this.serverUriStorage.setUriToRemote(userURI, connection.displayName);

            // Indicate setting a jupyter URI to a remote setting. Check if an azure remote or not
            sendTelemetryEvent(Telemetry.SetJupyterURIToUserSpecified, undefined, {
                azure: userURI.toLowerCase().includes('azure')
            });
        } else {
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
        await this.serverUriStorage.setUriToRemote(userURI, connection.displayName);

        // Indicate setting a jupyter URI to a remote setting. Check if an azure remote or not
        sendTelemetryEvent(Telemetry.SetJupyterURIToUserSpecified, undefined, {
            azure: userURI.toLowerCase().includes('azure')
        });
    }
```

</details>
<details>
  <summary>DATASCIENCE.SHOW_DATA_EXPLORER</summary>

## Description


No description provided

## Properties

-  rows: number | undefined;
-  columns: number | undefined

## Locations Used

[src/webviews/extension-side/dataviewer/dataViewer.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/dataViewer.ts)
```typescript

        // Log telemetry about number of rows
        try {
            sendTelemetryEvent(Telemetry.ShowDataViewer, 0, {
                rows: output.rowCount ? output.rowCount : 0,
                columns: output.columns ? output.columns.length : 0
            });
```


[src/webviews/extension-side/dataviewer/dataViewer.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/dataViewer.ts)
```typescript

    private sendElapsedTimeTelemetry() {
        if (this.rowsTimer && this.pendingRowsCount === 0) {
            sendTelemetryEvent(Telemetry.ShowDataViewer, this.rowsTimer.elapsedTime);
        }
    }

```

</details>
<details>
  <summary>DATASCIENCE.START_SHOW_DATA_EXPLORER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/dataViewerFactory.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/dataViewerFactory.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.StartShowDataViewer)
    public async create(dataProvider: IDataViewerDataProvider, title: string): Promise<IDataViewer> {
        let result: IDataViewer | undefined;

```

</details>
<details>
  <summary>DATASCIENCE.SUBMITCELLFROMREPL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.UNDO</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.USER_DID_NOT_INSTALL_JUPYTER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts)
```typescript
                }

                case DataScience.selectDifferentJupyterInterpreter(): {
                    sendTelemetryEvent(Telemetry.UserDidNotInstallJupyter);
                    return JupyterInterpreterDependencyResponse.selectAnotherInterpreter;
                }

```


[src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts)
```typescript

                case DataScience.pythonInteractiveHelpLink(): {
                    this.applicationShell.openUrl(HelpLinks.PythonInteractiveHelpLink);
                    sendTelemetryEvent(Telemetry.UserDidNotInstallJupyter);
                    return JupyterInterpreterDependencyResponse.cancel;
                }

```


[src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts)
```typescript
                }

                default:
                    sendTelemetryEvent(Telemetry.UserDidNotInstallJupyter);
                    return JupyterInterpreterDependencyResponse.cancel;
            }
        } finally {
```

</details>
<details>
  <summary>DATASCIENCE.USER_DID_NOT_INSTALL_PANDAS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts)
```typescript
        if (selection === Common.install()) {
            await this._doInstall(executer, tokenSource);
        } else {
            sendTelemetryEvent(Telemetry.UserDidNotInstallPandas);
            throw new Error(message);
        }
    }
```

</details>
<details>
  <summary>DATASCIENCE.USER_INSTALLED_JUPYTER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts)
```typescript
                            return JupyterInterpreterDependencyResponse.cancel;
                        }
                    }
                    sendTelemetryEvent(Telemetry.UserInstalledJupyter);

                    // Check if kernelspec module is something that accessible.
                    return this.checkKernelSpecAvailability(interpreter);
```

</details>
<details>
  <summary>DATASCIENCE.USER_INSTALLED_MODULE</summary>

## Description




 Telemetry event sent when installing a jupyter dependency

 @type {product: string}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATASCIENCE.USER_INSTALLED_PANDAS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/interpreterDataViewerDependencyImplementation.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/interpreterDataViewerDependencyImplementation.node.ts)
```typescript
            cancellationPromise
        ]);
        if (response === InstallerResponse.Installed) {
            sendTelemetryEvent(Telemetry.UserInstalledPandas);
        }
    }

```


[src/webviews/extension-side/dataviewer/kernelDataViewerDependencyImplementation.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/kernelDataViewerDependencyImplementation.ts)
```typescript

        try {
            await this.execute(command, kernel);
            sendTelemetryEvent(Telemetry.UserInstalledPandas);
        } catch (e) {
            sendTelemetryEvent(Telemetry.UserInstalledPandas, undefined, undefined, e);
            throw new Error(DataScience.failedToInstallPandas());
```


[src/webviews/extension-side/dataviewer/kernelDataViewerDependencyImplementation.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/kernelDataViewerDependencyImplementation.ts)
```typescript
            await this.execute(command, kernel);
            sendTelemetryEvent(Telemetry.UserInstalledPandas);
        } catch (e) {
            sendTelemetryEvent(Telemetry.UserInstalledPandas, undefined, undefined, e);
            throw new Error(DataScience.failedToInstallPandas());
        }
    }
```

</details>
<details>
  <summary>DATASCIENCE.USER_STARTUP_CODE_FAILURE</summary>

## Description


No description provided

## Properties

- 
        ename: string;
- 
        evalue: string;

## Locations Used

[src/kernels/kernel.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernel.ts)
```typescript
            await this.executeSilently(session, this.getUserStartupCommands(), {
                traceErrors: true,
                traceErrorsMessage: 'Error executing user defined startup code',
                telemetryName: Telemetry.UserStartupCodeFailure
            });
        }

```

</details>
<details>
  <summary>DATASCIENCE.VARIABLE_EXPLORER_TOGGLE</summary>

## Description


No description provided

## Properties

-  open: boolean;
-  runByLine: boolean

## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DATAVIEWER.USING_INTERPRETER</summary>

## Description




 When the Data Viewer installer is using the Python interpreter.

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/interpreterDataViewerDependencyImplementation.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/interpreterDataViewerDependencyImplementation.node.ts)
```typescript
    }

    public async checkAndInstallMissingDependencies(interpreter: PythonEnvironment): Promise<void> {
        sendTelemetryEvent(Telemetry.DataViewerUsingInterpreter);

        await this.checkOrInstall(interpreter);
    }
```

</details>
<details>
  <summary>DATAVIEWER.USING_KERNEL</summary>

## Description




 When the Data Viewer installer is using the Kernel.

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/kernelDataViewerDependencyImplementation.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/kernelDataViewerDependencyImplementation.ts)
```typescript
    }

    async checkAndInstallMissingDependencies(kernel: IKernel): Promise<void> {
        sendTelemetryEvent(Telemetry.DataViewerUsingKernel);

        if (!kernelHasSession(kernel)) {
            sendTelemetryEvent(Telemetry.NoActiveKernelSession);
```

</details>
<details>
  <summary>DS_INTERNAL.ACTIVE_INTERPRETER_LISTING_PERF</summary>

## Description


No description provided

## Properties

- 
        /**
         * Whether this is the first time in the session.
         * (fetching kernels first time in the session is slower, later its cached).
         * This is a generic property supported for all telemetry (sent by decorators).
         */
        firstTime?: boolean;

## Locations Used

[src/platform/api/pythonApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/api/pythonApi.ts)
```typescript
        }
    }
    private workspaceCachedActiveInterpreter = new Map<string, Promise<PythonEnvironment | undefined>>();
    @captureTelemetry(Telemetry.ActiveInterpreterListingPerf)
    @traceDecoratorVerbose('Get Active Interpreter', TraceOptions.Arguments | TraceOptions.BeforeCall)
    public getActiveInterpreter(resource?: Uri): Promise<PythonEnvironment | undefined> {
        this.hookupOnDidChangeInterpreterEvent();
```

</details>
<details>
  <summary>DS_INTERNAL.ASK_USER_FOR_NEW_KERNEL_JUPYTER</summary>

## Description




 Sent when a jupyter session fails to start and we ask the user for a new kernel

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.CELL_COUNT</summary>

## Description


No description provided

## Properties

-  count: number

## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.CODE_LENS_ACQ_TIME</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/editor-integration/codelensprovider.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codelensprovider.ts)
```typescript
        // On shutdown send how long on average we spent parsing code lens
        if (this.totalGetCodeLensCalls > 0) {
            sendTelemetryEvent(
                Telemetry.CodeLensAverageAcquisitionTime,
                this.totalExecutionTimeInMs / this.totalGetCodeLensCalls
            );
        }
```

</details>
<details>
  <summary>DS_INTERNAL.COMMAND_EXECUTED</summary>

## Description




 Telemetry sent when a command is executed.

## Properties


No properties for event


## Locations Used

[src/platform/common/application/commandManager.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/application/commandManager.ts)
```typescript
        return commands.registerCommand(
            command,
            (...args: U) => {
                sendTelemetryEvent(Telemetry.CommandExecuted, undefined, { command: command as string });
                if (thisArg) {
                    return callback.call(thisArg, ...(args as any));
                } else {
```


[src/platform/common/application/commandManager.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/application/commandManager.ts)
```typescript
        return commands.registerTextEditorCommand(
            command,
            (textEditor: TextEditor, edit: TextEditorEdit, ...args: any[]) => {
                sendTelemetryEvent(Telemetry.CommandExecuted, undefined, { command: command as string });
                if (thisArg) {
                    return callback.call(thisArg, textEditor, edit, ...args);
                } else {
```


[src/platform/common/application/commandManager.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/application/commandManager.ts)
```typescript
        U extends ICommandNameArgumentTypeMapping[E]
    >(command: E, ...rest: U): Thenable<T> {
        if (!commandsToIgnore.has(command)) {
            sendTelemetryEvent(Telemetry.CommandExecuted, undefined, { command: command as string });
        }
        return commands.executeCommand<T>(command, ...rest);
    }
```

</details>
<details>
  <summary>DS_INTERNAL.COMPLETION_TIME_FROM_JUPYTER</summary>

## Description




 Telemetry event sent to capture total time taken for completions list to be provided by Jupyter.
 This is used to compare against time taken by LS.

 @type {(undefined | never)}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.COMPLETION_TIME_FROM_LS</summary>

## Description




 Telemetry event sent to capture total time taken for completions list to be provided by LS.
 This is used to compare against time taken by Jupyter.

 @type {(undefined | never)}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.CONNECTFAILEDJUPYTER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/jupyterExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterExecution.ts)
```typescript
                                throw new RemoteJupyterServerConnectionError(connection.baseUrl, options.serverId, err);
                            }
                        } else {
                            sendTelemetryEvent(Telemetry.ConnectFailedJupyter, undefined, undefined, err, true);
                            throw new LocalJupyterServerConnectionError(err);
                        }
                    } else {
```

</details>
<details>
  <summary>DS_INTERNAL.CONNECTLOCALJUPYTER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/jupyterExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterExecution.ts)
```typescript
                    traceInfo(`Connection complete server`);

                    sendTelemetryEvent(
                        options.localJupyter ? Telemetry.ConnectLocalJupyter : Telemetry.ConnectRemoteJupyter
                    );
                    return result;
                } catch (err) {
```

</details>
<details>
  <summary>DS_INTERNAL.CONNECTREMOTEEXPIREDCERTFAILEDJUPYTER</summary>

## Description




 Jupyter server's certificate has expired.

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/jupyterExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterExecution.ts)
```typescript
                                sendTelemetryEvent(Telemetry.ConnectRemoteSelfCertFailedJupyter);
                                throw new JupyterSelfCertsError(connection.baseUrl);
                            } else if (JupyterSelfCertsExpiredError.isSelfCertsExpiredError(err)) {
                                sendTelemetryEvent(Telemetry.ConnectRemoteExpiredCertFailedJupyter);
                                throw new JupyterSelfCertsExpiredError(connection.baseUrl);
                            } else {
                                throw new RemoteJupyterServerConnectionError(connection.baseUrl, options.serverId, err);
```

</details>
<details>
  <summary>DS_INTERNAL.CONNECTREMOTEFAILEDJUPYTER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/jupyterExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterExecution.ts)
```typescript

                        // Something else went wrong
                        if (!options.localJupyter) {
                            sendTelemetryEvent(Telemetry.ConnectRemoteFailedJupyter, undefined, undefined, err, true);

                            // Check for the self signed certs error specifically
                            if (JupyterSelfCertsError.isSelfCertsError(err)) {
```

</details>
<details>
  <summary>DS_INTERNAL.CONNECTREMOTEJUPYTER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/jupyterExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterExecution.ts)
```typescript
                    traceInfo(`Connection complete server`);

                    sendTelemetryEvent(
                        options.localJupyter ? Telemetry.ConnectLocalJupyter : Telemetry.ConnectRemoteJupyter
                    );
                    return result;
                } catch (err) {
```

</details>
<details>
  <summary>DS_INTERNAL.CONNECTREMOTEJUPYTER_VIA_LOCALHOST</summary>

## Description




 Connecting to an existing Jupyter server, but connecting to localhost.

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/jupyterExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterExecution.ts)
```typescript
                    connection = await this.startOrConnect(options, cancelToken);

                    if (!connection.localLaunch && LocalHosts.includes(connection.hostName.toLowerCase())) {
                        sendTelemetryEvent(Telemetry.ConnectRemoteJupyterViaLocalHost);
                    }
                    // eslint-disable-next-line no-constant-condition
                    traceInfo(`Connecting to process server`);
```

</details>
<details>
  <summary>DS_INTERNAL.CONNECTREMOTESELFCERTFAILEDJUPYTER</summary>

## Description




 Jupyter server's certificate is not from a trusted authority.

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
            }
        } catch (err) {
            if (JupyterSelfCertsError.isSelfCertsError(err)) {
                sendTelemetryEvent(Telemetry.ConnectRemoteSelfCertFailedJupyter);
                const handled = await handleSelfCertsError(this.applicationShell, this.configService, err.message);
                if (!handled) {
                    return;
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
                    return;
                }
            } else if (JupyterSelfCertsExpiredError.isSelfCertsExpiredError(err)) {
                sendTelemetryEvent(Telemetry.ConnectRemoteSelfCertFailedJupyter);
                const handled = await handleExpiredCertsError(this.applicationShell, this.configService, err.message);
                if (!handled) {
                    return;
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
        } catch (err) {
            traceWarning('Uri verification error', err);
            if (JupyterSelfCertsError.isSelfCertsError(err)) {
                sendTelemetryEvent(Telemetry.ConnectRemoteSelfCertFailedJupyter);
                const handled = await handleSelfCertsError(this.applicationShell, this.configService, err.message);
                if (!handled) {
                    return DataScience.jupyterSelfCertFailErrorMessageOnly();
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
                    return DataScience.jupyterSelfCertFailErrorMessageOnly();
                }
            } else if (JupyterSelfCertsExpiredError.isSelfCertsExpiredError(err)) {
                sendTelemetryEvent(Telemetry.ConnectRemoteSelfCertFailedJupyter);
                const handled = await handleExpiredCertsError(this.applicationShell, this.configService, err.message);
                if (!handled) {
                    return DataScience.jupyterSelfCertExpiredErrorMessageOnly();
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
            }
        } catch (err) {
            if (JupyterSelfCertsError.isSelfCertsError(err)) {
                sendTelemetryEvent(Telemetry.ConnectRemoteSelfCertFailedJupyter);
                const handled = await handleSelfCertsError(this.applicationShell, this.configService, err.message);
                if (!handled) {
                    return;
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
                    return;
                }
            } else if (JupyterSelfCertsExpiredError.isSelfCertsExpiredError(err)) {
                sendTelemetryEvent(Telemetry.ConnectRemoteSelfCertFailedJupyter);
                const handled = await handleExpiredCertsError(this.applicationShell, this.configService, err.message);
                if (!handled) {
                    return;
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
        } catch (err) {
            traceWarning('Uri verification error', err);
            if (JupyterSelfCertsError.isSelfCertsError(err)) {
                sendTelemetryEvent(Telemetry.ConnectRemoteSelfCertFailedJupyter);
                const handled = await handleSelfCertsError(this.applicationShell, this.configService, err.message);
                if (!handled) {
                    return DataScience.jupyterSelfCertFailErrorMessageOnly();
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
                    return DataScience.jupyterSelfCertFailErrorMessageOnly();
                }
            } else if (JupyterSelfCertsExpiredError.isSelfCertsExpiredError(err)) {
                sendTelemetryEvent(Telemetry.ConnectRemoteSelfCertFailedJupyter);
                const handled = await handleExpiredCertsError(this.applicationShell, this.configService, err.message);
                if (!handled) {
                    return DataScience.jupyterSelfCertExpiredErrorMessageOnly();
```


[src/kernels/jupyter/launcher/jupyterExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterExecution.ts)
```typescript

                            // Check for the self signed certs error specifically
                            if (JupyterSelfCertsError.isSelfCertsError(err)) {
                                sendTelemetryEvent(Telemetry.ConnectRemoteSelfCertFailedJupyter);
                                throw new JupyterSelfCertsError(connection.baseUrl);
                            } else if (JupyterSelfCertsExpiredError.isSelfCertsExpiredError(err)) {
                                sendTelemetryEvent(Telemetry.ConnectRemoteExpiredCertFailedJupyter);
```

</details>
<details>
  <summary>DS_INTERNAL.ERROR_START_RAWKERNEL_WITHOUT_INTERPRETER</summary>

## Description



 Whether we've attempted to start a raw Python kernel without any interpreter information.
 If we don't detect such telemetry in a few months, then we can remove this along with the temporary code associated with this telemetry.

## Properties

- 
        /**
         * Indicates whether the python extension is installed.
         * If we send telemetry fro this & this is `true`, then we have a bug.
         * If its `false`, then we can ignore this telemetry.
         */
        pythonExtensionInstalled: boolean;

## Locations Used

[src/kernels/raw/session/hostRawNotebookProvider.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/hostRawNotebookProvider.node.ts)
```typescript
                if (!kernelConnection.interpreter) {
                    sendKernelTelemetryEvent(
                        resource,
                        Telemetry.AttemptedToLaunchRawKernelWithoutInterpreter,
                        undefined,
                        {
                            pythonExtensionInstalled: this.extensionChecker.isPythonExtensionInstalled
```

</details>
<details>
  <summary>DS_INTERNAL.EXECUTE_CELL_PERCEIVED_COLD</summary>

## Description




 Telemetry sent to capture first time execution of a cell.
 If `notebook = true`, this its telemetry for Jupyter notebooks, else applies to IW.

## Properties


No properties for event


## Locations Used

[src/kernels/execution/cellExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/execution/cellExecution.ts)
```typescript
            CellExecution.sentExecuteCellTelemetry = true;
            sendKernelTelemetryEvent(
                this.resourceUri,
                Telemetry.ExecuteCellPerceivedCold,
                this.stopWatchForTelemetry.elapsedTime,
                props
            );
```


[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
        if (runningStopWatch) {
            if (!CodeWatcher.sentExecuteCellTelemetry) {
                CodeWatcher.sentExecuteCellTelemetry = true;
                sendTelemetryEvent(Telemetry.ExecuteCellPerceivedCold, runningStopWatch.elapsedTime);
            } else {
                sendTelemetryEvent(Telemetry.ExecuteCellPerceivedWarm, runningStopWatch.elapsedTime);
            }
```

</details>
<details>
  <summary>DS_INTERNAL.EXECUTE_CELL_PERCEIVED_WARM</summary>

## Description




 Telemetry sent to capture subsequent execution of a cell.
 If `notebook = true`, this its telemetry for native editor/notebooks.
 (Note: The property `notebook` only gets sent correctly in Jupyter version 2022.8.0 or later)

## Properties


No properties for event


## Locations Used

[src/kernels/execution/cellExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/execution/cellExecution.ts)
```typescript
        } else {
            sendKernelTelemetryEvent(
                this.resourceUri,
                Telemetry.ExecuteCellPerceivedWarm,
                this.stopWatchForTelemetry.elapsedTime,
                props
            );
```


[src/interactive-window/editor-integration/codewatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/codewatcher.ts)
```typescript
                CodeWatcher.sentExecuteCellTelemetry = true;
                sendTelemetryEvent(Telemetry.ExecuteCellPerceivedCold, runningStopWatch.elapsedTime);
            } else {
                sendTelemetryEvent(Telemetry.ExecuteCellPerceivedWarm, runningStopWatch.elapsedTime);
            }
        }
    }
```


[src/test/datascience/telemetry.vscode.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/datascience/telemetry.vscode.test.ts)
```typescript

        // Right now this is the guaranteed list. Might want to expand this.
        assertEvent(Telemetry.RunFileInteractive);
        assertEvent(Telemetry.ExecuteCellPerceivedWarm);
        assertEvent(Telemetry.SwitchKernel);
    });
});
```

</details>
<details>
  <summary>DS_INTERNAL.FAILED_TO_UPDATE_JUPYTER_KERNEL_SPEC</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/jupyterKernelService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterKernelService.node.ts)
```typescript
            await this.fs.writeFile(kernelSpecFilePath, JSON.stringify(contents, undefined, 4));
        } catch (ex) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            sendTelemetryEvent(Telemetry.FailedToUpdateKernelSpec, undefined, undefined, ex as any, true);
            throw ex;
        }
        if (cancelToken.isCancellationRequested) {
```


[src/kernels/jupyter/jupyterKernelService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterKernelService.node.ts)
```typescript
                    return;
                }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                sendTelemetryEvent(Telemetry.FailedToUpdateKernelSpec, undefined, undefined, ex as any, true);
                throw ex;
            }

```

</details>
<details>
  <summary>DS_INTERNAL.FIND_JUPYTER_COMMAND</summary>

## Description


No description provided

## Properties

-  command: string

## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.FIND_JUPYTER_KERNEL_SPEC</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.FIND_KERNEL_FOR_LOCAL_CONNECTION</summary>

## Description




 Telemetry event sent once done searching for kernel spec and interpreter for a local connection.

 @type {{
         kernelSpecFound: boolean;
         interpreterFound: boolean;
     }}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.GET_ACTIVATED_ENV_VARIABLES</summary>

## Description




 Used to capture time taken to get enviornment variables for a python environment.
 Also lets us know whether it worked or not.

## Properties


No properties for event


## Locations Used

[src/platform/common/process/environmentActivationService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/process/environmentActivationService.node.ts)
```typescript
        ]);

        const envType = interpreter.envType;
        sendTelemetryEvent(Telemetry.GetActivatedEnvironmentVariables, stopWatch.elapsedTime, {
            envType,
            pythonEnvType: envType,
            source: 'python',
```


[src/platform/common/process/environmentActivationService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/process/environmentActivationService.node.ts)
```typescript
                    interpreter?.uri
                )}, shell cannot be determined.`
            );
            sendTelemetryEvent(Telemetry.GetActivatedEnvironmentVariables, 0, {
                envType,
                pythonEnvType: envType,
                source: 'jupyter',
```


[src/platform/common/process/environmentActivationService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/process/environmentActivationService.node.ts)
```typescript
                const stopWatch = new StopWatch();
                try {
                    const env = await this.getCondaEnvVariables(resource, interpreter);
                    sendTelemetryEvent(Telemetry.GetActivatedEnvironmentVariables, stopWatch.elapsedTime, {
                        envType,
                        pythonEnvType: envType,
                        source: 'jupyter',
```


[src/platform/common/process/environmentActivationService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/process/environmentActivationService.node.ts)
```typescript
                    });
                    return env;
                } catch (ex) {
                    sendTelemetryEvent(Telemetry.GetActivatedEnvironmentVariables, stopWatch.elapsedTime, {
                        envType,
                        pythonEnvType: envType,
                        source: 'jupyter',
```


[src/platform/common/process/environmentActivationService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/process/environmentActivationService.node.ts)
```typescript
            const processService = await processServicePromise;
            const hasCustomEnvVars = Object.keys(customEnvVars).length;
            if (!activationCommands || activationCommands.length === 0) {
                sendTelemetryEvent(Telemetry.GetActivatedEnvironmentVariables, stopWatch.elapsedTime, {
                    envType,
                    pythonEnvType: envType,
                    source: 'jupyter',
```


[src/platform/common/process/environmentActivationService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/process/environmentActivationService.node.ts)
```typescript
            } else if (returnedEnv) {
                delete returnedEnv[PYTHON_WARNINGS];
            }
            sendTelemetryEvent(Telemetry.GetActivatedEnvironmentVariables, stopWatch.elapsedTime, {
                envType,
                pythonEnvType: envType,
                source: 'jupyter',
```


[src/platform/common/process/environmentActivationService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/process/environmentActivationService.node.ts)
```typescript

            return returnedEnv;
        } catch (e) {
            sendTelemetryEvent(Telemetry.GetActivatedEnvironmentVariables, stopWatch.elapsedTime, {
                envType,
                pythonEnvType: envType,
                source: 'jupyter',
```

</details>
<details>
  <summary>DS_INTERNAL.GET_PASSWORD_FAILURE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/jupyterPasswordConnect.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterPasswordConnect.ts)
```typescript
            const requestHeaders = { Cookie: cookieString, 'X-XSRFToken': xsrfCookie };
            return { requestHeaders };
        } else {
            sendTelemetryEvent(Telemetry.GetPasswordFailure);
            return undefined;
        }
    }
```

</details>
<details>
  <summary>DS_INTERNAL.GET_PASSWORD_SUCCESS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/jupyterPasswordConnect.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterPasswordConnect.ts)
```typescript

        // If we found everything return it all back if not, undefined as partial is useless
        if (xsrfCookie && sessionCookieName && sessionCookieValue) {
            sendTelemetryEvent(Telemetry.GetPasswordSuccess);
            const cookieString = this.getSessionCookieString(xsrfCookie, sessionCookieName, sessionCookieValue);
            const requestHeaders = { Cookie: cookieString, 'X-XSRFToken': xsrfCookie };
            return { requestHeaders };
```

</details>
<details>
  <summary>DS_INTERNAL.GET_PREFERRED_KERNEL_PERF</summary>

## Description




 Total time taken to get the preferred kernel for notebook.

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.HASHED_NOTEBOOK_OUTPUT_MIME_TYPE_PERF</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.HASHED_OUTPUT_MIME_TYPE</summary>

## Description


No description provided

## Properties

- 
        /**
         * Hash of the cell output mimetype
         *
         * @type {string}
         */
        hashedName: string;
- 
        hasText: boolean;
- 
        hasLatex: boolean;
- 
        hasHtml: boolean;
- 
        hasSvg: boolean;
- 
        hasXml: boolean;
- 
        hasJson: boolean;
- 
        hasImage: boolean;
- 
        hasGeo: boolean;
- 
        hasPlotly: boolean;
- 
        hasVega: boolean;
- 
        hasWidget: boolean;
- 
        hasJupyter: boolean;
- 
        hasVnd: boolean;

## Locations Used

[src/kernels/jupyter/jupyterCellOutputMimeTypeTracker.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterCellOutputMimeTypeTracker.node.ts)
```typescript
            hasJupyter: lowerMimeType.includes('jupyter'),
            hasVnd: lowerMimeType.includes('vnd')
        };
        sendTelemetryEvent(Telemetry.HashedCellOutputMimeType, undefined, props);
    }
}

```

</details>
<details>
  <summary>DS_INTERNAL.HASHED_OUTPUT_MIME_TYPE_PERF</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/jupyterCellOutputMimeTypeTracker.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterCellOutputMimeTypeTracker.node.ts)
```typescript
        this.pendingChecks.set(id, setTimeout(check, 5000));
    }

    @captureTelemetry(Telemetry.HashedCellOutputMimeTypePerf)
    private checkCell(cell: NotebookCell) {
        this.pendingChecks.delete(cell.document.uri.toString());
        this.getCellOutputMimeTypes(cell).forEach(this.sendTelemetry.bind(this));
```

</details>
<details>
  <summary>DS_INTERNAL.HIDDEN_EXECUTION_TIME</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.INTERACTIVE_FILE_TOOLTIPS_PERF</summary>

## Description



 Capture telemetry re: how long returning a tooltip takes

## Properties

- 
        // Result is null if user signalled cancellation or if we timed out
        isResultNull: boolean;

## Locations Used

[src/interactive-window/editor-integration/hoverProvider.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/editor-integration/hoverProvider.ts)
```typescript
        const timeoutHandler = sleep(300).then(() => undefined);
        this.stopWatch.reset();
        const result = await Promise.race([timeoutHandler, this.getVariableHover(document, position, token)]);
        sendTelemetryEvent(Telemetry.InteractiveFileTooltipsPerf, this.stopWatch.elapsedTime, {
            isResultNull: !!result
        });
        return result;
```

</details>
<details>
  <summary>DS_INTERNAL.INTERPRETER_LISTING_PERF</summary>

## Description




 Time taken to list the Python interpreters.

## Properties


No properties for event


## Locations Used

[src/platform/api/pythonApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/api/pythonApi.ts)
```typescript
        if (!this.interpreterListCachePromise) {
            this.interpreterListCachePromise = this.getInterpretersImpl(resource);
        }
        sendTelemetryWhenDone(Telemetry.InterpreterListingPerf, this.interpreterListCachePromise, undefined, {
            firstTime
        });
        return this.interpreterListCachePromise;
```

</details>
<details>
  <summary>DS_INTERNAL.INTERRUPT_JUPYTER_TIME</summary>

## Description




 User interrupts a cell
 Identical to `Telemetry.Interrupt`

## Properties


No properties for event


## Locations Used

[src/kernels/execution/kernelExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/execution/kernelExecution.ts)
```typescript
        this.disposables.forEach((d) => d.dispose());
    }
    @captureTelemetry(Telemetry.Interrupt)
    @captureTelemetry(Telemetry.InterruptJupyterTime)
    private async interruptExecution(
        session: IKernelConnectionSession,
        pendingExecutions: Promise<unknown>
```

</details>
<details>
  <summary>DS_INTERNAL.INVALID_KERNEL_USED</summary>

## Description




 Telemetry event sent when a kernel picked crashes on startup
 @type {(undefined | never)}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

[src/kernels/errors/jupyterInvalidKernelError.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/errors/jupyterInvalidKernelError.ts)
```typescript
            DataScience.kernelInvalid().format(getDisplayNameOrNameOfKernelConnection(kernelConnectionMetadata)),
            kernelConnectionMetadata
        );
        sendTelemetryEvent(Telemetry.KernelInvalid);
    }
}

```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_DISCOVER_WIDGETS_NB_EXTENSIONS</summary>

## Description




 Total time taken to discover all IPyWidgets.
 This is how long it takes to discover all widgets on disc (from python environment).

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/scriptSourceProvider/baseIPyWidgetScriptManager.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/scriptSourceProvider/baseIPyWidgetScriptManager.ts)
```typescript
                )}`
            );
        }
        sendTelemetryEvent(Telemetry.DiscoverIPyWidgetNamesPerf, stopWatch.elapsedTime, {
            type: isLocalConnection(this.kernel.kernelConnectionMetadata) ? 'local' : 'remote'
        });
        return config && Object.keys(config).length ? config : undefined;
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_DISCOVERED</summary>

## Description




 Telemetry event sent with name of a Widget found.

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_DISCOVERY_ERRORED</summary>

## Description




 Something went wrong in looking for a widget.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/scriptSourceProvider/ipyWidgetScriptSource.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/scriptSourceProvider/ipyWidgetScriptSource.ts)
```typescript
            }
        } catch (ex) {
            traceError('Failed to get widget source due to an error', ex);
            sendTelemetryEvent(Telemetry.HashedIPyWidgetScriptDiscoveryError);
        } finally {
            traceInfo(
                `${ConsoleForegroundColors.Green}Script for ${moduleName}, is ${widgetSource.scriptUri} from ${widgetSource.source}`
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_EXTENSIONJS_INFO</summary>

## Description




 Telemetry event sent once we've successfully or unsuccessfully parsed the extension.js file in the widget folder.
 E.g. if we have a widget named ipyvolume, we attempt to parse the nbextensions/ipyvolume/extension.js file to get some info out of it.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/scriptSourceProvider/baseIPyWidgetScriptManager.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/scriptSourceProvider/baseIPyWidgetScriptManager.ts)
```typescript
    }

    if (indexOfRequireConfig < 0) {
        sendTelemetryEvent(Telemetry.IPyWidgetExtensionJsInfo, undefined, {
            widgetFolderNameHash,
            failed: true,
            patternUsedToRegisterRequireConfig,
```


[src/notebooks/controllers/ipywidgets/scriptSourceProvider/baseIPyWidgetScriptManager.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/scriptSourceProvider/baseIPyWidgetScriptManager.ts)
```typescript
    // Find the end bracket for the require config call.
    const endBracket = contents.indexOf(')', indexOfRequireConfig);
    if (endBracket <= 0 || !patternUsedToRegisterRequireConfig) {
        sendTelemetryEvent(Telemetry.IPyWidgetExtensionJsInfo, undefined, {
            widgetFolderNameHash,
            failed: true,
            patternUsedToRegisterRequireConfig,
```


[src/notebooks/controllers/ipywidgets/scriptSourceProvider/baseIPyWidgetScriptManager.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/scriptSourceProvider/baseIPyWidgetScriptManager.ts)
```typescript
    });

    if (!requireConfig || !Object.keys(requireConfig).length) {
        sendTelemetryEvent(Telemetry.IPyWidgetExtensionJsInfo, undefined, {
            widgetFolderNameHash,
            failed: true,
            patternUsedToRegisterRequireConfig,
```


[src/notebooks/controllers/ipywidgets/scriptSourceProvider/baseIPyWidgetScriptManager.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/scriptSourceProvider/baseIPyWidgetScriptManager.ts)
```typescript
        });
        return;
    }
    sendTelemetryEvent(Telemetry.IPyWidgetExtensionJsInfo, undefined, {
        widgetFolderNameHash,
        patternUsedToRegisterRequireConfig,
        requireEntryPointCount: Object.keys(requireConfig).length
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_LOAD_DISABLED</summary>

## Description




 Telemetry event sent when an loading of 3rd party ipywidget JS scripts from 3rd party source has been disabled.

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_LOAD_FAILURE</summary>

## Description




 Telemetry event sent when an ipywidget module fails to load. Module name is hashed.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/message/commonMessageCoordinator.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/message/commonMessageCoordinator.ts)
```typescript
            }
            traceError(`Widget load failure ${errorMessage}`, payload);

            sendTelemetryEvent(Telemetry.IPyWidgetLoadFailure, 0, {
                isOnline: payload.isOnline,
                moduleHash: getTelemetrySafeHashedString(payload.moduleName),
                moduleVersion: payload.moduleVersion,
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_LOAD_SUCCESS</summary>

## Description




 Telemetry event sent when an ipywidget module loads. Module name is hashed.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/message/commonMessageCoordinator.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/message/commonMessageCoordinator.ts)
```typescript

    private sendLoadSucceededTelemetry(payload: LoadIPyWidgetClassLoadAction) {
        try {
            sendTelemetryEvent(Telemetry.IPyWidgetLoadSuccess, 0, {
                moduleHash: getTelemetrySafeHashedString(payload.moduleName),
                moduleVersion: payload.moduleVersion
            });
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_OVERHEAD</summary>

## Description




 Telemetry event sent to indicate the overhead of syncing the kernel with the UI.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/message/ipyWidgetMessageDispatcher.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/message/ipyWidgetMessageDispatcher.ts)
```typescript
    }

    private sendOverheadTelemetry() {
        sendTelemetryEvent(Telemetry.IPyWidgetOverhead, 0, {
            totalOverheadInMs: this.totalWaitTime,
            numberOfMessagesWaitedOn: this.totalWaitedMessages,
            averageWaitTime: this.totalWaitTime / this.totalWaitedMessages,
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_PROMPT_TO_USE_CDN</summary>

## Description




 Telemetry sent when we prompt user to use a CDN for IPyWidget scripts.
 This is always sent when we display a prompt.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/scriptSourceProvider/cdnWidgetScriptSourceProvider.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/scriptSourceProvider/cdnWidgetScriptSourceProvider.ts)
```typescript
            return this.configurationPromise.promise;
        }
        this.configurationPromise = createDeferred();
        sendTelemetryEvent(Telemetry.IPyWidgetPromptToUseCDN);
        const selection = await this.appShell.showInformationMessage(
            DataScience.useCDNForWidgetsNoInformation(),
            { modal: true },
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_PROMPT_TO_USE_CDN_SELECTION</summary>

## Description




 Telemetry sent when user does something with the prompt displayed to user about using CDN for IPyWidget scripts.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/scriptSourceProvider/cdnWidgetScriptSourceProvider.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/scriptSourceProvider/cdnWidgetScriptSourceProvider.ts)
```typescript
                break;
        }

        sendTelemetryEvent(Telemetry.IPyWidgetPromptToUseCDNSelection, undefined, { selection: selectionForTelemetry });
        this.configurationPromise.resolve();
    }
    private async updateScriptSources(scriptSources: WidgetCDNs[]) {
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_RENDER_FAILURE</summary>

## Description




 Telemetry event sent when the widget render function fails (note, this may not be sufficient to capture all failures).

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/message/commonMessageCoordinator.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/message/commonMessageCoordinator.ts)
```typescript
    private sendRenderFailureTelemetry(payload: Error) {
        try {
            traceError('Error rendering a widget: ', payload);
            sendTelemetryEvent(Telemetry.IPyWidgetRenderFailure);
        } catch {
            // Do nothing on a failure
        }
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_TEST_AVAILABILITY_ON_CDN</summary>

## Description




 Total time taken to discover a widget script on CDN.

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_TIME_TO_COPY_NBEXTENSIONS_DIR</summary>

## Description




 Total time take to copy the nb extensions folder.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/scriptSourceProvider/localIPyWidgetScriptManager.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/scriptSourceProvider/localIPyWidgetScriptManager.node.ts)
```typescript
            LocalIPyWidgetScriptManager.nbExtensionsCopiedKernelConnectionList.add(
                this.kernel.kernelConnectionMetadata.id
            );
            sendTelemetryEvent(Telemetry.IPyWidgetNbExtensionCopyTime, stopWatch.elapsedTime);
            return baseUrl;
        } catch (ex) {
            sendTelemetryEvent(Telemetry.IPyWidgetNbExtensionCopyTime, undefined, undefined, ex);
```


[src/notebooks/controllers/ipywidgets/scriptSourceProvider/localIPyWidgetScriptManager.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/scriptSourceProvider/localIPyWidgetScriptManager.node.ts)
```typescript
            sendTelemetryEvent(Telemetry.IPyWidgetNbExtensionCopyTime, stopWatch.elapsedTime);
            return baseUrl;
        } catch (ex) {
            sendTelemetryEvent(Telemetry.IPyWidgetNbExtensionCopyTime, undefined, undefined, ex);
            throw ex;
        }
    }
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_UNHANDLED_MESSAGE</summary>

## Description




 Telemetry event sent when the widget tries to send a kernel message but nothing was listening

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/message/commonMessageCoordinator.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/message/commonMessageCoordinator.ts)
```typescript
                this.jupyterOutput.appendLine(
                    DataScience.unhandledMessage().format(msg.header.msg_type, JSON.stringify(msg.content))
                );
                sendTelemetryEvent(Telemetry.IPyWidgetUnhandledMessage, undefined, { msg_type: msg.header.msg_type });
            } catch {
                // Don't care if this doesn't get logged
            }
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_USED_BY_USER</summary>

## Description




 Telemetry event sent with name of a Widget that is used.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/scriptSourceProvider/ipyWidgetScriptSourceProvider.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/scriptSourceProvider/ipyWidgetScriptSourceProvider.ts)
```typescript
            }
        }

        sendTelemetryEvent(Telemetry.HashedIPyWidgetNameUsed, undefined, {
            hashedName: getTelemetrySafeHashedString(found.moduleName),
            source: found.source,
            cdnSearched: this.configuredScriptSources.length > 0
```

</details>
<details>
  <summary>DS_INTERNAL.IPYWIDGET_WIDGET_VERSION_NOT_SUPPORTED_LOAD_FAILURE</summary>

## Description




 Telemetry event sent when an ipywidget version that is not supported is used & we have trapped this and warned the user abou it.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/ipywidgets/message/commonMessageCoordinator.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/ipywidgets/message/commonMessageCoordinator.ts)
```typescript
    }
    private sendUnsupportedWidgetVersionFailureTelemetry(payload: NotifyIPyWidgetWidgetVersionNotSupportedAction) {
        try {
            sendTelemetryEvent(Telemetry.IPyWidgetWidgetVersionNotSupportedLoadFailure, 0, {
                moduleHash: getTelemetrySafeHashedString(payload.moduleName),
                moduleVersion: payload.moduleVersion
            });
```

</details>
<details>
  <summary>DS_INTERNAL.JUPYTER_CREATING_NOTEBOOK</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/liveshare/hostJupyterServer.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/liveshare/hostJupyterServer.ts)
```typescript
            this.throwIfDisposedOrCancelled(cancelToken);
            const baseUrl = this.connection?.baseUrl || '';
            this.logRemoteOutput(DataScience.createdNewNotebook().format(baseUrl));
            sendKernelTelemetryEvent(resource, Telemetry.JupyterCreatingNotebook, stopWatch.elapsedTime);
            return session;
        } catch (ex) {
            sendKernelTelemetryEvent(
```


[src/kernels/jupyter/launcher/liveshare/hostJupyterServer.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/liveshare/hostJupyterServer.ts)
```typescript
        } catch (ex) {
            sendKernelTelemetryEvent(
                resource,
                Telemetry.JupyterCreatingNotebook,
                stopWatch.elapsedTime,
                undefined,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
```

</details>
<details>
  <summary>DS_INTERNAL.JUPYTER_CUSTOM_COMMAND_LINE</summary>

## Description




 Telemetry event sent to when user customizes the jupyter command line
 @type {(undefined | never)}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/commandLineSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/commandLineSelector.ts)
```typescript

    private async setJupyterCommandLine(val: string): Promise<void> {
        if (val) {
            sendTelemetryEvent(Telemetry.JupyterCommandLineNonDefault);
        }
        const split = parseArgsStringToArgv(val);
        await this.configuration.updateSetting(
```

</details>
<details>
  <summary>DS_INTERNAL.JUPYTER_IDLE_TIMEOUT</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/errors/jupyterWaitForIdleError.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/errors/jupyterWaitForIdleError.ts)
```typescript
export class JupyterWaitForIdleError extends BaseKernelError {
    constructor(kernelConnectionMetadata: KernelConnectionMetadata) {
        super('timeout', DataScience.jupyterLaunchTimedOut(), kernelConnectionMetadata);
        sendTelemetryEvent(Telemetry.SessionIdleTimeout);
    }
}

```

</details>
<details>
  <summary>DS_INTERNAL.JUPYTER_INSTALL_FAILED</summary>

## Description




 Telemetry event sent if there's an error installing a jupyter required dependency

 @type { product: string }
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.JUPYTER_INTALLED_BUT_NO_KERNELSPEC_MODULE</summary>

## Description




 Telemetry event sent when jupyter has been found in interpreter but we cannot find kernelspec.

 @type {(never | undefined)}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts)
```typescript
            return JupyterInterpreterDependencyResponse.ok;
        }
        // Indicate no kernel spec module.
        sendTelemetryEvent(Telemetry.JupyterInstalledButNotKernelSpecModule);
        if (Cancellation.isCanceled(token)) {
            return JupyterInterpreterDependencyResponse.cancel;
        }
```

</details>
<details>
  <summary>DS_INTERNAL.JUPYTER_REGISTER_INTERPRETER_AS_KERNEL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/jupyterKernelService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterKernelService.node.ts)
```typescript
     */
    // eslint-disable-next-line
    // eslint-disable-next-line complexity
    @captureTelemetry(Telemetry.RegisterInterpreterAsKernel, undefined, true)
    @traceDecoratorError('Failed to register an interpreter as a kernel')
    // eslint-disable-next-line
    private async registerKernel(
```

</details>
<details>
  <summary>DS_INTERNAL.JUPYTER_START_TIMEOUT</summary>

## Description


No description provided

## Properties

- 
        /**
         * Total time spent in attempting to start and connect to jupyter before giving up.
         *
         * @type {number}
         */
        timeout: number;

## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.JUPYTERSTARTUPCOST</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/jupyterExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/jupyterExecution.ts)
```typescript
    }

    // eslint-disable-next-line
    @captureTelemetry(Telemetry.StartJupyter)
    private async startNotebookServer(
        resource: Resource,
        useDefaultConfig: boolean,
```

</details>
<details>
  <summary>DS_INTERNAL.KERNEL_COUNT</summary>

## Description



 Misc

## Properties


No properties for event


## Locations Used

[src/notebooks/telemetry/kernelTelemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/telemetry/kernelTelemetry.ts)
```typescript
    });
    trackKernelResourceInformation(resource, counters);
    if (stopWatch) {
        sendKernelTelemetryEvent(resource, Telemetry.KernelCount, stopWatch.elapsedTime, counters);
    }
}

```

</details>
<details>
  <summary>DS_INTERNAL.KERNEL_ENUMERATION</summary>

## Description




 Telemetry event sent to every time a kernel enumeration is done

 @type {...}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.KERNEL_LAUNCHER_PERF</summary>

## Description




 Total time taken to Launch a raw kernel.

## Properties


No properties for event


## Locations Used

[src/kernels/raw/launcher/kernelLauncher.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/launcher/kernelLauncher.node.ts)
```typescript
        })();
        sendKernelTelemetryWhenDone(
            resource,
            Telemetry.KernelLauncherPerf,
            promise,
            false /* No need to send telemetry for kernel launch failures, that's sent elsewhere */
        );
```

</details>
<details>
  <summary>DS_INTERNAL.KERNEL_LISTING_PERF</summary>

## Description


No description provided

## Properties

- 
        /**
         * Whether this is the first time in the session.
         * (fetching kernels first time in the session is slower, later its cached).
         * This is a generic property supported for all telemetry (sent by decorators).
         */
        firstTime?: boolean;
- 
        /**
         * Whether this telemetry is for listing of all kernels or just python or just non-python.
         * (fetching kernels first time in the session is slower, later its cached).
         */
        kind: 'remote' | 'local' | 'localKernelSpec' | 'localPython';

## Locations Used

[src/kernels/raw/finder/localKnownPathKernelSpecFinder.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/finder/localKnownPathKernelSpecFinder.node.ts)
```typescript
    /**
     * @param {boolean} includePythonKernels Include/exclude Python kernels in the result.
     */
    @captureTelemetry(Telemetry.KernelListingPerf, { kind: 'localKernelSpec' })
    public async listKernelSpecs(
        includePythonKernels: boolean,
        cancelToken?: CancellationToken
```


[src/kernels/raw/finder/localPythonAndRelatedNonPythonKernelSpecFinder.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/finder/localPythonAndRelatedNonPythonKernelSpecFinder.node.ts)
```typescript
    ) {
        super(fs, workspaceService, extensionChecker, globalState);
    }
    @captureTelemetry(Telemetry.KernelListingPerf, { kind: 'localPython' })
    public async listKernelSpecs(resource: Resource, ignoreCache?: boolean, cancelToken?: CancellationToken) {
        // Get an id for the workspace folder, if we don't have one, use the fsPath of the resource
        const workspaceFolderId =
```


[src/kernels/jupyter/finder/remoteKernelFinder.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/finder/remoteKernelFinder.ts)
```typescript
    }

    // Talk to the remote server to determine sessions
    @captureTelemetry(Telemetry.KernelListingPerf, { kind: 'remote' })
    public async listKernelsFromConnection(
        _resource: Resource,
        connInfo: INotebookProviderConnection
```


[src/kernels/raw/finder/localKernelFinder.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/finder/localKernelFinder.node.ts)
```typescript
     * Search all our local file system locations for installed kernel specs and return them
     */
    @traceDecoratorError('List kernels failed')
    @captureTelemetry(Telemetry.KernelListingPerf, { kind: 'local' })
    public async listKernels(
        resource: Resource,
        @ignoreLogging() cancelToken?: CancellationToken
```

</details>
<details>
  <summary>DS_INTERNAL.KERNEL_NOT_INSTALLED</summary>

## Description


No description provided

## Properties

- 
        action: 'displayed';
-  // Message displayed.
        /**
         * Language found in the notebook if a known language. Otherwise 'unknown'
         */
        language: string;

## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.KERNEL_PROVIDER_PERF</summary>

## Description




 Total time taken to list kernels for VS Code.

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.KERNEL_REGISTER_FAILED</summary>

## Description




 Telemetry event sent to indicate registering a kernel with jupyter failed.

 @type {(undefined | never)}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.KERNEL_SPEC_NOT_FOUND</summary>

## Description




 Telemetry event sent to indicate 'jupyter kernelspec' is not possible.

 @type {(undefined | never)}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts)
```typescript
            .then(() => true)
            .catch((e) => {
                traceError(`Kernel spec not found: `, e);
                sendTelemetryEvent(Telemetry.KernelSpecNotFound);
                return false;
            });
    }
```

</details>
<details>
  <summary>DS_INTERNAL.LOCAL_KERNEL_SPEC_COUNT</summary>

## Description


No description provided

## Properties

- 
        /**
         * Number of kernel specs.
         */
        count: number;

## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.NATIVE_VARIABLE_VIEW_LOADED</summary>

## Description



 Native variable view events

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/variablesView/variableView.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/variablesView/variableView.ts)
```typescript
        this.dataViewerChecker = new DataViewerChecker(configuration, appShell);
    }

    @captureTelemetry(Telemetry.NativeVariableViewLoaded)
    public async load(codeWebview: vscodeWebviewView) {
        await super.loadWebview(Uri.file(process.cwd()), codeWebview).catch(traceError);

```

</details>
<details>
  <summary>DS_INTERNAL.NATIVE_VARIABLE_VIEW_MADE_VISIBLE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/variablesView/variableView.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/variablesView/variableView.ts)
```typescript

        // I've we've been made visible, make sure that we are updated
        if (visible) {
            sendTelemetryEvent(Telemetry.NativeVariableViewMadeVisible);
            // If there is an active execution count, update the view with that info
            // Keep the variables up to date if document has run cells while the view was not visible
            if (this.notebookWatcher.activeNotebookExecutionCount !== undefined) {
```

</details>
<details>
  <summary>DS_INTERNAL.NATIVE.NOTEBOOK_OPEN_COUNT</summary>

## Description




 Total number of Jupyter notebooks or IW opened. Telemetry Sent when VS Code is closed.

## Properties


No properties for event


## Locations Used

[src/notebooks/notebookUsageTracker.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/notebookUsageTracker.ts)
```typescript
    public dispose() {
        // Send a bunch of telemetry
        if (this.openedNotebookCount) {
            sendTelemetryEvent(Telemetry.NotebookOpenCount, undefined, { count: this.openedNotebookCount });
        }
        if (this.executedNotebooksIndexedByUri.size) {
            sendTelemetryEvent(Telemetry.NotebookRunCount, undefined, {
```

</details>
<details>
  <summary>DS_INTERNAL.NATIVE.NOTEBOOK_OPEN_TIME</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.NATIVE.NOTEBOOK_RUN_COUNT</summary>

## Description




 Total number of cells executed. Telemetry Sent when VS Code is closed.

## Properties


No properties for event


## Locations Used

[src/notebooks/notebookUsageTracker.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/notebookUsageTracker.ts)
```typescript
            sendTelemetryEvent(Telemetry.NotebookOpenCount, undefined, { count: this.openedNotebookCount });
        }
        if (this.executedNotebooksIndexedByUri.size) {
            sendTelemetryEvent(Telemetry.NotebookRunCount, undefined, {
                count: this.executedNotebooksIndexedByUri.size
            });
        }
```

</details>
<details>
  <summary>DS_INTERNAL.NATIVE.OPEN_NOTEBOOK_FAILURE</summary>

## Description




 Telemetry event fired if a failure occurs loading a notebook

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.NEW_FILE_USED_IN_INTERACTIVE</summary>

## Description




 Telemetry event sent when a user runs the interactive window with a new file
 @type {(undefined | never)}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.NUMBER_OF_REMOTE_KERNEL_IDS_SAVED</summary>

## Description



 When users connect to a remote kernel, we store the kernel id so we can re-connect to that
 when user opens the same notebook. We only store the last 100.
 Count is the number of entries saved in the list.

## Properties

-  count: number

## Locations Used

[src/kernels/jupyter/preferredRemoteKernelIdProvider.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/preferredRemoteKernelIdProvider.ts)
```typescript
        }

        // Prune list if too big
        sendTelemetryEvent(Telemetry.NumberOfSavedRemoteKernelIds, undefined, { count: list.length });
        while (list.length > MaximumKernelIdListSize) {
            requiresUpdate = true;
            list.shift();
```

</details>
<details>
  <summary>DS_INTERNAL.PERCEIVED_JUPYTER_STARTUP_NOTEBOOK</summary>

## Description




 Time take for jupyter server to start and be ready to run first user cell.
 (Note: The property `notebook` only gets sent correctly in Jupyter version 2022.8.0 or later)

## Properties


No properties for event


## Locations Used

[src/kernels/kernel.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernel.ts)
```typescript
                .then((session) => {
                    sendKernelTelemetryEvent(
                        this.resourceUri,
                        Telemetry.PerceivedJupyterStartupNotebook,
                        stopWatch.elapsedTime
                    );
                    return session;
```


[src/kernels/kernel.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernel.ts)
```typescript
            this.perceivedJupyterStartupTelemetryCaptured = true;
            sendKernelTelemetryEvent(
                this.resourceUri,
                Telemetry.PerceivedJupyterStartupNotebook,
                stopWatch.elapsedTime
            );
            executionPromise
```

</details>
<details>
  <summary>DS_INTERNAL.PREFERRED_KERNEL</summary>

## Description




 Telemetry sent when we have attempted to find the preferred kernel.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/controllerPreferredService.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/controllerPreferredService.ts)
```typescript
                ? PYTHON_LANGUAGE
                : getTelemetrySafeLanguage(getLanguageInNotebookMetadata(notebookMetadata) || '');

        sendTelemetryEvent(Telemetry.PreferredKernel, undefined, {
            result: preferredConnection ? 'found' : 'notfound',
            resourceType,
            language: telemetrySafeLanguage,
```

</details>
<details>
  <summary>DS_INTERNAL.PREFERRED_KERNEL_EXACT_MATCH</summary>

## Description


No description provided

## Properties

- 
        matchedReason: PreferredKernelExactMatchReason;

## Locations Used

[src/notebooks/controllers/controllerPreferredService.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/controllerPreferredService.ts)
```typescript
            topMatchIsPreferredInterpreter && (matchReason |= PreferredKernelExactMatchReason.WasPreferredInterpreter);
            isExactMatch && (matchReason |= PreferredKernelExactMatchReason.IsExactMatch);
            isNonPythonLanguageMatch && (matchReason |= PreferredKernelExactMatchReason.IsNonPythonKernelLanguageMatch);
            sendTelemetryEvent(Telemetry.PreferredKernelExactMatch, undefined, {
                matchedReason: matchReason
            });
        }
```

</details>
<details>
  <summary>DS_INTERNAL.PYTHON_EXTENSION_INSTALLED_VIA_KERNEL_PICKER</summary>

## Description


No description provided

## Properties

- 
        action:
            | 'success' // Correctly installed and hooked the API
            | 'failed';

## Locations Used

[src/notebooks/controllers/commands/installPythonControllerCommands.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/commands/installPythonControllerCommands.ts)
```typescript
                // Make sure that we didn't timeout waiting for the hook
                if (this.extensionChecker.isPythonExtensionInstalled && typeof hookResult !== 'number') {
                    traceInfo('Python Extension installed via Kernel Picker command');
                    sendTelemetryEvent(Telemetry.PythonExtensionInstalledViaKernelPicker, undefined, {
                        action: 'success'
                    });

```


[src/notebooks/controllers/commands/installPythonControllerCommands.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/commands/installPythonControllerCommands.ts)
```typescript
                    await this.controllerLoader.loadControllers(true);
                } else {
                    traceError('Failed to install Python Extension via Kernel Picker command');
                    sendTelemetryEvent(Telemetry.PythonExtensionInstalledViaKernelPicker, undefined, {
                        action: 'failed'
                    });
                    this.errorHandler
```

</details>
<details>
  <summary>DS_INTERNAL.PYTHON_EXTENSION_NOT_INSTALLED</summary>

## Description


No description provided

## Properties

- 
        action:
            | 'displayed' // Message displayed.
            | 'dismissed' // user dismissed the message.
            | 'download';

## Locations Used

[src/platform/api/pythonApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/api/pythonApi.ts)
```typescript
        PythonExtensionChecker.promptDisplayed = true;
        // Ask user if they want to install and then wait for them to actually install it.
        const yes = localize.Common.bannerLabelYes();
        sendTelemetryEvent(Telemetry.PythonExtensionNotInstalled, undefined, { action: 'displayed' });
        const answer = await this.appShell.showInformationMessage(
            localize.DataScience.pythonExtensionRequired(),
            { modal: true },
```


[src/platform/api/pythonApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/api/pythonApi.ts)
```typescript
            yes
        );
        if (answer === yes) {
            sendTelemetryEvent(Telemetry.PythonExtensionNotInstalled, undefined, { action: 'download' });
            await this.installPythonExtension();
        } else {
            sendTelemetryEvent(Telemetry.PythonExtensionNotInstalled, undefined, { action: 'dismissed' });
```


[src/platform/api/pythonApi.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/api/pythonApi.ts)
```typescript
            sendTelemetryEvent(Telemetry.PythonExtensionNotInstalled, undefined, { action: 'download' });
            await this.installPythonExtension();
        } else {
            sendTelemetryEvent(Telemetry.PythonExtensionNotInstalled, undefined, { action: 'dismissed' });
        }
    }
    private async installPythonExtension() {
```


[src/notebooks/controllers/commands/installPythonControllerCommands.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/commands/installPythonControllerCommands.ts)
```typescript
    // click run again
    private async installPythonExtensionViaKernelPicker(): Promise<void> {
        if (!this.extensionChecker.isPythonExtensionInstalled) {
            sendTelemetryEvent(Telemetry.PythonExtensionNotInstalled, undefined, { action: 'displayed' });

            if (!(await this.shouldInstallExtensionPrompt())) {
                // Check with the user before we move forward, if they don't want the install, just bail
```


[src/notebooks/controllers/commands/installPythonControllerCommands.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/commands/installPythonControllerCommands.ts)
```typescript
                Common.install()
            );
            if (selection === Common.install()) {
                sendTelemetryEvent(Telemetry.PythonExtensionNotInstalled, undefined, { action: 'download' });
                return true;
            } else {
                // If they don't want to install, just bail out at this point
```


[src/notebooks/controllers/commands/installPythonControllerCommands.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/commands/installPythonControllerCommands.ts)
```typescript
                return true;
            } else {
                // If they don't want to install, just bail out at this point
                sendTelemetryEvent(Telemetry.PythonExtensionNotInstalled, undefined, { action: 'dismissed' });
                return false;
            }
        }
```

</details>
<details>
  <summary>DS_INTERNAL.PYTHON_KERNEL_EXECUTABLE_MATCHES</summary>

## Description




 Telemetry sent for local Python Kernels.
 Tracking whether we have managed to launch the kernel that matches the interpreter.
 If match=false, then this means we have failed to launch the right kernel.

## Properties


No properties for event


## Locations Used

[src/kernels/helpers.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/helpers.node.ts)
```typescript
        }
        const sysExecutable = concatMultilineString(output.text).trim().toLowerCase();
        const match = areInterpreterPathsSame(kernelConnection.interpreter.uri, Uri.file(sysExecutable));
        sendTelemetryEvent(Telemetry.PythonKerneExecutableMatches, undefined, {
            match: match ? 'true' : 'false',
            kernelConnectionType: kernelConnection.kind
        });
```


[src/kernels/helpers.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/helpers.node.ts)
```typescript
                        Uri.file(execOutput.stdout.trim().toLowerCase()),
                        Uri.file(sysExecutable)
                    );
                    sendTelemetryEvent(Telemetry.PythonKerneExecutableMatches, undefined, {
                        match: match ? 'true' : 'false',
                        kernelConnectionType: kernelConnection.kind
                    });
```

</details>
<details>
  <summary>DS_INTERNAL.PYTHON_MODULE_INSTALL</summary>

## Description


No description provided

## Properties

- 
        moduleName: string;
- 
        /**
         * Whether the module was already (once before) installed into the python environment or
         * whether this already exists (detected via `pip list`)
         */
        isModulePresent?: 'true' | undefined;
- 
        action:
            | 'cancelled' // User cancelled the installation or closed the notebook or the like.
            | 'displayed' // Install prompt may have been displayed.
            | 'prompted' // Install prompt was displayed.
            | 'installed' // Installation disabled (this is what python extension returns).
            | 'ignored' // Installation disabled (this is what python extension returns).
            | 'disabled' // Installation disabled (this is what python extension returns).
            | 'failed' // Installation disabled (this is what python extension returns).
            | 'install' // User chose install from prompt.
            | 'donotinstall' // User chose not to install from prompt.
            | 'differentKernel' // User chose to select a different kernel.
            | 'error' // Some other error.
            | 'installedInJupyter' // The package was successfully installed in Jupyter whilst failed to install in Python ext.
            | 'failedToInstallInJupyter' // Failed to install the package in Jupyter as well as Python ext.
            | 'dismissed' // User chose to dismiss the prompt.
            | 'moreInfo';
-  // User requested more information on the module in question
        resourceType?: 'notebook' | 'interactive';
- 
        /**
         * Hash of the resource (notebook.uri or pythonfile.uri associated with this).
         * If we run the same notebook tomorrow, the hash will be the same.
         */
        resourceHash?: string;
- 
        pythonEnvType?: EnvironmentType;

## Locations Used

[src/kernels/installer/productInstaller.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/installer/productInstaller.node.ts)
```typescript
            action = 'failed';
            throw ex;
        } finally {
            sendTelemetryEvent(Telemetry.PythonModuleInstall, undefined, {
                action,
                moduleName: ProductNames.get(product)!
            });
```


[src/kernels/kernelDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelDependencyService.node.ts)
```typescript
        const productNameForTelemetry = products.map((product) => ProductNames.get(product)!).join(', ');
        const resourceType = resource ? getResourceType(resource) : undefined;
        const resourceHash = resource ? getTelemetrySafeHashedString(resource.toString()) : undefined;
        sendKernelTelemetryEvent(resource, Telemetry.PythonModuleInstall, undefined, {
            action: 'displayed',
            moduleName: productNameForTelemetry,
            resourceType,
```


[src/kernels/kernelDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelDependencyService.node.ts)
```typescript

        try {
            if (!this.isCodeSpace) {
                sendKernelTelemetryEvent(resource, Telemetry.PythonModuleInstall, undefined, {
                    action: 'prompted',
                    moduleName: productNameForTelemetry,
                    resourceType,
```


[src/kernels/kernelDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelDependencyService.node.ts)
```typescript
                      ]);

                if (selection === moreInfoOption) {
                    sendKernelTelemetryEvent(resource, Telemetry.PythonModuleInstall, undefined, {
                        action: 'moreInfo',
                        moduleName: productNameForTelemetry,
                        resourceType,
```


[src/kernels/kernelDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelDependencyService.node.ts)
```typescript
                // "More Info" isn't a full valid response here, so reprompt after showing it
            } while (selection === moreInfoOption);
            if (cancelTokenSource.token.isCancellationRequested) {
                sendKernelTelemetryEvent(resource, Telemetry.PythonModuleInstall, undefined, {
                    action: 'dismissed',
                    moduleName: productNameForTelemetry,
                    resourceType,
```


[src/kernels/kernelDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelDependencyService.node.ts)
```typescript
                return KernelInterpreterDependencyResponse.cancel;
            }
            if (selection === selectKernelOption) {
                sendKernelTelemetryEvent(resource, Telemetry.PythonModuleInstall, undefined, {
                    action: 'differentKernel',
                    moduleName: productNameForTelemetry,
                    resourceType,
```


[src/kernels/kernelDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelDependencyService.node.ts)
```typescript
                });
                return KernelInterpreterDependencyResponse.selectDifferentKernel;
            } else if (selection === installOption) {
                sendKernelTelemetryEvent(resource, Telemetry.PythonModuleInstall, undefined, {
                    action: 'install',
                    moduleName: productNameForTelemetry,
                    resourceType,
```


[src/kernels/kernelDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelDependencyService.node.ts)
```typescript
                    cancellationPromise
                ]);
                if (response === InstallerResponse.Installed) {
                    sendKernelTelemetryEvent(resource, Telemetry.PythonModuleInstall, undefined, {
                        action: 'installed',
                        moduleName: productNameForTelemetry,
                        resourceType,
```


[src/kernels/kernelDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelDependencyService.node.ts)
```typescript
                    });
                    return KernelInterpreterDependencyResponse.ok;
                } else if (response === InstallerResponse.Ignore) {
                    sendKernelTelemetryEvent(resource, Telemetry.PythonModuleInstall, undefined, {
                        action: 'failed',
                        moduleName: productNameForTelemetry,
                        resourceType,
```


[src/kernels/kernelDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelDependencyService.node.ts)
```typescript
                    return KernelInterpreterDependencyResponse.failed; // Happens when errors in pip or conda.
                }
            }
            sendKernelTelemetryEvent(resource, Telemetry.PythonModuleInstall, undefined, {
                action: 'dismissed',
                moduleName: productNameForTelemetry,
                resourceType,
```


[src/kernels/kernelDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernelDependencyService.node.ts)
```typescript
            return KernelInterpreterDependencyResponse.cancel;
        } catch (ex) {
            traceError(`Failed to install ${productNameForTelemetry}`, ex);
            sendKernelTelemetryEvent(resource, Telemetry.PythonModuleInstall, undefined, {
                action: 'error',
                moduleName: productNameForTelemetry,
                resourceType,
```


[src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterDependencyService.node.ts)
```typescript
                pipInstalledInNonCondaEnv === false ? [Product.pip].concat(missingProducts) : missingProducts,
                interpreter.displayName
            );
            sendTelemetryEvent(Telemetry.PythonModuleInstall, undefined, {
                action: 'displayed',
                moduleName: ProductNames.get(Product.jupyter)!,
                pythonEnvType: interpreter.envType
```


[src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.PythonModuleInstall, {
        action: 'displayed',
        moduleName: ProductNames.get(Product.pandas)!
    })
```

</details>
<details>
  <summary>DS_INTERNAL.PYTHON_NOT_INSTALLED</summary>

## Description


No description provided

## Properties

- 
        action:
            | 'displayed' // Message displayed.
            | 'dismissed' // user dismissed the message.
            | 'download';

## Locations Used

[src/notebooks/controllers/commands/installPythonControllerCommands.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/commands/installPythonControllerCommands.ts)
```typescript
    // Unlike installing the python extension we don't expect in progress executions to be handled
    // when this command is installed, user will have to manually install python and rerun the cell
    private async installPythonViaKernelPicker(): Promise<void> {
        sendTelemetryEvent(Telemetry.PythonNotInstalled, undefined, { action: 'displayed' });
        const selection = await this.appShell.showErrorMessage(
            DataScience.pythonNotInstalled(),
            { modal: true },
```


[src/notebooks/controllers/commands/installPythonControllerCommands.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/commands/installPythonControllerCommands.ts)
```typescript
        );

        if (selection === Common.install()) {
            sendTelemetryEvent(Telemetry.PythonNotInstalled, undefined, { action: 'download' });
            // Activate the python extension command to show how to install python
            await this.commandManager.executeCommand('python.installPython');
        } else {
```


[src/notebooks/controllers/commands/installPythonControllerCommands.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/commands/installPythonControllerCommands.ts)
```typescript
            // Activate the python extension command to show how to install python
            await this.commandManager.executeCommand('python.installPython');
        } else {
            sendTelemetryEvent(Telemetry.PythonNotInstalled, undefined, { action: 'dismissed' });
        }
    }

```

</details>
<details>
  <summary>DS_INTERNAL.RANK_KERNELS_PERF</summary>

## Description




 Total time taken to find a kernel on disc or on a remote machine.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/kernelRanking/kernelRankingHelper.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/kernelRanking/kernelRankingHelper.ts)
```typescript
    ) {}

    @traceDecoratorVerbose('Rank Kernels', TraceOptions.BeforeCall | TraceOptions.Arguments)
    @captureTelemetry(Telemetry.RankKernelsPerf)
    public async rankKernels(
        resource: Resource,
        notebookMetadata?: INotebookMetadata | undefined,
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_CREATING_NOTEBOOK</summary>

## Description



 Telemetry send when we create a notebook for a raw kernel or jupyter

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/hostRawNotebookProvider.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/hostRawNotebookProvider.node.ts)
```typescript
        return this.rawNotebookSupportedService.isSupported;
    }

    @captureTelemetry(Telemetry.RawKernelCreatingNotebook, undefined, true)
    public async createNotebook(
        resource: Resource,
        kernelConnection: KernelConnectionMetadata,
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_INFO_RESPONSE</summary>

## Description




 After starting a kernel we send a request to get the kernel info.
 This tracks the total time taken to get the response back (or wether we timedout).
 If we timeout and later we find successful comms for this session, then timeout is too low
 or we need more attempts.

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
        } else {
            traceWarning(`Didn't get response for requestKernelInfo after ${stopWatch.elapsedTime}ms.`);
        }
        sendKernelTelemetryEvent(this.resource, Telemetry.RawKernelInfoResonse, stopWatch.elapsedTime, {
            attempts,
            timedout: !gotIoPubMessage.completed
        });
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_PROCESS_LAUNCH</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/raw/launcher/kernelProcess.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/launcher/kernelProcess.node.ts)
```typescript
        }
    }

    @captureTelemetry(Telemetry.RawKernelProcessLaunch, undefined, true)
    public async launch(workingDirectory: string, timeout: number, cancelToken: CancellationToken): Promise<void> {
        if (this.launchedOnce) {
            throw new Error('Kernel has already been launched.');
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_SESSION_CONNECT</summary>

## Description



 Raw kernel timing events

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
                throw error;
            }
        } finally {
            sendKernelTelemetryEvent(this.resource, Telemetry.RawKernelSessionConnect, stopWatch.elapsedTime);
        }

        this.connected = true;
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_SESSION_DISPOSED</summary>

## Description




 This event is sent when a RawSession's `dispose` method is called.

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/rawSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawSession.node.ts)
```typescript
    public async dispose() {
        // We want to know who called dispose on us
        const stacktrace = new Error().stack;
        sendKernelTelemetryEvent(this.resource, Telemetry.RawKernelSessionDisposed, undefined, { stacktrace });

        // Now actually dispose ourselves
        this.isDisposing = true;
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_SESSION_KERNEL_PROCESS_EXITED</summary>

## Description




 This event is sent when the underlying kernelProcess for a
 RawJupyterSession exits.

## Properties


No properties for event


## Locations Used

[src/kernels/raw/launcher/kernelLauncher.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/launcher/kernelLauncher.node.ts)
```typescript

        const disposable = kernelProcess.exited(
            ({ exitCode, reason }) => {
                sendKernelTelemetryEvent(resource, Telemetry.RawKernelSessionKernelProcessExited, undefined, {
                    exitCode,
                    exitReason: getTelemetrySafeErrorMessageFromPythonTraceback(reason)
                });
```


[src/kernels/raw/session/rawSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawSession.node.ts)
```typescript
        traceError(`Disposing session as kernel process died ExitCode: ${e.exitCode}, Reason: ${e.reason}`);
        // Send telemetry so we know why the kernel process exited,
        // as this affects our kernel startup success
        sendKernelTelemetryEvent(this.resource, Telemetry.RawKernelSessionKernelProcessExited, undefined, {
            exitCode: e.exitCode,
            exitReason: getTelemetrySafeErrorMessageFromPythonTraceback(e.reason)
        });
```


[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
            if (session !== this.session) {
                return;
            }
            sendKernelTelemetryEvent(this.resource, Telemetry.RawKernelSessionKernelProcessExited, undefined, {
                exitCode,
                exitReason: getTelemetrySafeErrorMessageFromPythonTraceback(reason)
            });
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_SESSION_NO_IPYKERNEL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/kernelConnector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/kernelConnector.ts)
```typescript
        const rawNotebookProvider = serviceContainer.tryGet<IRawNotebookProvider>(IRawNotebookProvider);
        const rawLocalKernel = rawNotebookProvider?.isSupported && isLocal;
        if (rawLocalKernel && errorContext === 'start') {
            sendKernelTelemetryEvent(resource, Telemetry.RawKernelSessionStartNoIpykernel, {
                reason: handleResult
            });
        }
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_SESSION_SHUTDOWN</summary>

## Description




 This event is sent when a RawJupyterSession's `shutdownSession`
 method is called.

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
        // We want to know why we got shut down
        const stacktrace = new Error().stack;
        return super.shutdownSession(session, statusHandler, isRequestToShutdownRestartSession).then(() => {
            sendKernelTelemetryEvent(this.resource, Telemetry.RawKernelSessionShutdown, undefined, {
                isRequestToShutdownRestartSession,
                stacktrace
            });
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_SESSION_START</summary>

## Description



 Raw kernel single events

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
            Cancellation.throwIfCanceled(options.token);
            // Only connect our session if we didn't cancel or timeout
            sendKernelTelemetryEvent(this.resource, Telemetry.RawKernelSessionStartSuccess);
            sendKernelTelemetryEvent(this.resource, Telemetry.RawKernelSessionStart, stopWatch.elapsedTime);
            traceInfo(
                `${DataScience.kernelStarted().format(
                    getDisplayNameOrNameOfKernelConnection(this.kernelConnectionMetadata)
```


[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
            if (isCancellationError(error) || options.token.isCancellationRequested) {
                sendKernelTelemetryEvent(
                    this.resource,
                    Telemetry.RawKernelSessionStart,
                    stopWatch.elapsedTime,
                    undefined,
                    error
```


[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
                // Send our telemetry event with the error included
                sendKernelTelemetryEvent(
                    this.resource,
                    Telemetry.RawKernelSessionStart,
                    stopWatch.elapsedTime,
                    undefined,
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_SESSION_START_EXCEPTION</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
                );
                sendKernelTelemetryEvent(
                    this.resource,
                    Telemetry.RawKernelSessionStartException,
                    undefined,
                    undefined,
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_SESSION_START_SUCCESS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
            newSession = await this.startRawSession({ ...options, purpose: 'start' });
            Cancellation.throwIfCanceled(options.token);
            // Only connect our session if we didn't cancel or timeout
            sendKernelTelemetryEvent(this.resource, Telemetry.RawKernelSessionStartSuccess);
            sendKernelTelemetryEvent(this.resource, Telemetry.RawKernelSessionStart, stopWatch.elapsedTime);
            traceInfo(
                `${DataScience.kernelStarted().format(
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_SESSION_START_TIMEOUT</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_SESSION_START_USER_CANCEL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
                    undefined,
                    error
                );
                sendKernelTelemetryEvent(this.resource, Telemetry.RawKernelSessionStartUserCancel);
                traceVerbose('Starting of raw session cancelled by user');
                throw error;
            } else {
```

</details>
<details>
  <summary>DS_INTERNAL.RAWKERNEL_START_RAW_SESSION</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/rawJupyterSession.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawJupyterSession.node.ts)
```typescript
        return this.startRawSession({ token: cancelToken, ui: new DisplayOptions(disableUI), purpose: 'restart' });
    }

    @captureTelemetry(Telemetry.RawKernelStartRawSession, undefined, true)
    private async startRawSession(options: {
        token: CancellationToken;
        ui: IDisplayOptions;
```

</details>
<details>
  <summary>DS_INTERNAL.REGISTER_AND_USE_INTERPRETER_AS_KERNEL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/jupyterKernelService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterKernelService.node.ts)
```typescript
            );
        }

        sendTelemetryEvent(Telemetry.RegisterAndUseInterpreterAsKernel);
        return kernelSpecFilePath.fsPath;
    }
    private async updateKernelEnvironment(
```

</details>
<details>
  <summary>DS_INTERNAL.REMOTE_KERNEL_SPEC_COUNT</summary>

## Description


No description provided

## Properties

- 
        /**
         * Number of kernel specs.
         */
        count: number;

## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.RESTART_JUPYTER_TIME</summary>

## Description




 Total time taken to restart a kernel.
 Identical to `Telemetry.RestartKernel`

## Properties


No properties for event


## Locations Used

[src/kernels/execution/kernelExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/execution/kernelExecution.ts)
```typescript
    }

    @captureTelemetry(Telemetry.RestartKernel)
    @captureTelemetry(Telemetry.RestartJupyterTime)
    private async restartExecution(session: IKernelConnectionSession): Promise<void> {
        // Just use the internal session. Pending cells should have been canceled by the caller
        await session.restart();
```

</details>
<details>
  <summary>DS_INTERNAL.RESTART_KERNEL</summary>

## Description




 Total time taken to restart a kernel.
 Identical to `Telemetry.RestartJupyterTime`

## Properties


No properties for event


## Locations Used

[src/kernels/execution/kernelExecution.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/execution/kernelExecution.ts)
```typescript
        });
    }

    @captureTelemetry(Telemetry.RestartKernel)
    @captureTelemetry(Telemetry.RestartJupyterTime)
    private async restartExecution(session: IKernelConnectionSession): Promise<void> {
        // Just use the internal session. Pending cells should have been canceled by the caller
```

</details>
<details>
  <summary>DS_INTERNAL.RUNTEST</summary>

## Description


No description provided

## Properties

- 
        testName: string;
- 
        testResult: string;
- 
        perfWarmup?: 'true';
- 
        commitHash?: string;
- 
        timedCheckpoints?: string;

## Locations Used

[src/test/testHooks.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/testHooks.node.ts)
```typescript
            dimensions = { ...dimensions, commitHash: process.env.GITHUB_SHA };
        }

        traceInfoIfCI(`Sending telemetry event ${Telemetry.RunTest} with dimensions ${JSON.stringify(dimensions)}`);
        telemetryReporter.sendDangerousTelemetryEvent(Telemetry.RunTest, dimensions, measures);
    },
    afterAll: async () => {
```


[src/test/testHooks.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/testHooks.node.ts)
```typescript
        }

        traceInfoIfCI(`Sending telemetry event ${Telemetry.RunTest} with dimensions ${JSON.stringify(dimensions)}`);
        telemetryReporter.sendDangerousTelemetryEvent(Telemetry.RunTest, dimensions, measures);
    },
    afterAll: async () => {
        if (!IS_CI_SERVER) {
```

</details>
<details>
  <summary>DS_INTERNAL.SELECT_JUPYTER_INTERPRETER</summary>

## Description


No description provided

## Properties

- 
        /**
         * The result of the selection.
         * notSelected - No interpreter was selected.
         * selected - An interpreter was selected (and configured to have jupyter and notebook).
         * installationCancelled - Installation of jupyter and/or notebook was cancelled for an interpreter.
         *
         * @type {('notSelected' | 'selected' | 'installationCancelled')}
         */
        result?: 'notSelected' | 'selected' | 'installationCancelled';

## Locations Used

[src/kernels/jupyter/interpreter/jupyterInterpreterService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterService.node.ts)
```typescript
    public async selectInterpreter(): Promise<PythonEnvironment | undefined> {
        const interpreter = await this.jupyterInterpreterSelector.selectInterpreter();
        if (!interpreter) {
            sendTelemetryEvent(Telemetry.SelectJupyterInterpreter, undefined, { result: 'notSelected' });
            return;
        }

```


[src/kernels/jupyter/interpreter/jupyterInterpreterService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterService.node.ts)
```typescript
                return interpreter;
            }
            case JupyterInterpreterDependencyResponse.cancel:
                sendTelemetryEvent(Telemetry.SelectJupyterInterpreter, undefined, { result: 'installationCancelled' });
                return;
            default:
                return this.selectInterpreter();
```


[src/kernels/jupyter/interpreter/jupyterInterpreterService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterService.node.ts)
```typescript
        this._selectedInterpreter = interpreter;
        this._onDidChangeInterpreter.fire(interpreter);
        this.interpreterSelectionState.updateSelectedPythonPath(interpreter.uri);
        sendTelemetryEvent(Telemetry.SelectJupyterInterpreter, undefined, { result: 'selected' });
    }

    // For a given python path check if it can run jupyter for us
```

</details>
<details>
  <summary>DS_INTERNAL.SELECT_JUPYTER_INTERPRETER_MESSAGE_DISPLAYED</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/interpreter/jupyterInterpreterSubCommandExecutionService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/interpreter/jupyterInterpreterSubCommandExecutionService.node.ts)
```typescript
            if (!interpreter) {
                // Unlikely scenario, user hasn't selected python, python extension will fall over.
                // Get user to select something.
                sendTelemetryEvent(Telemetry.SelectJupyterInterpreterMessageDisplayed);
                return DataScience.selectJupyterInterpreter();
            }
        }
```

</details>
<details>
  <summary>DS_INTERNAL.SETTINGS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/standalone/activation/globalActivation.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/activation/globalActivation.ts)
```typescript
                    resultSettings[k] = currentValue;
                }
            }
            sendTelemetryEvent(Telemetry.DataScienceSettings, 0, resultSettings);
        }
    }
}
```

</details>
<details>
  <summary>DS_INTERNAL.SHIFTENTER_BANNER_SHOWN</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/interactive-window/shiftEnterBanner.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/interactive-window/shiftEnterBanner.ts)
```typescript
            return;
        }

        sendTelemetryEvent(Telemetry.ShiftEnterBannerShown);
        const response = await this.appShell.showInformationMessage(this.bannerMessage, ...this.bannerLabels);
        switch (response) {
            case this.bannerLabels[InteractiveShiftEnterLabelIndex.Yes]: {
```


[src/test/datascience/shiftEnterBanner.unit.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/datascience/shiftEnterBanner.unit.test.ts)
```typescript
        config.verifyAll();

        expect(Reporter.eventNames).to.deep.equal([
            Telemetry.ShiftEnterBannerShown,
            Telemetry.EnableInteractiveShiftEnter
        ]);
    });
```


[src/test/datascience/shiftEnterBanner.unit.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/datascience/shiftEnterBanner.unit.test.ts)
```typescript
        config.verifyAll();

        expect(Reporter.eventNames).to.deep.equal([
            Telemetry.ShiftEnterBannerShown,
            Telemetry.DisableInteractiveShiftEnter
        ]);
    });
```

</details>
<details>
  <summary>DS_INTERNAL.SHOW_DATA_NO_PANDAS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts)
```typescript
                const versionStr = `${pandasVersion.major}.${pandasVersion.minor}.${pandasVersion.build}`;
                await this.promptInstall(executer, tokenSource, versionStr);
            }
            sendTelemetryEvent(Telemetry.PandasNotInstalled);
            await this.promptInstall(executer, tokenSource);
        } finally {
            tokenSource.dispose();
```

</details>
<details>
  <summary>DS_INTERNAL.SHOW_DATA_PANDAS_INSTALL_CANCELED</summary>

## Description


No description provided

## Properties

-  version: string

## Locations Used

[src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts)
```typescript
            const pandasVersion = await this.getVersion(executer, tokenSource.token);

            if (Cancellation.isCanceled(tokenSource.token)) {
                sendTelemetryEvent(Telemetry.PandasInstallCanceled);
                return;
            }

```

</details>
<details>
  <summary>DS_INTERNAL.SHOW_DATA_PANDAS_OK</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts)
```typescript

            if (pandasVersion) {
                if (pandasVersion.compare(pandasMinimumVersionSupportedByVariableViewer) > 0) {
                    sendTelemetryEvent(Telemetry.PandasOK);
                    return;
                }
                sendTelemetryEvent(Telemetry.PandasTooOld);
```

</details>
<details>
  <summary>DS_INTERNAL.SHOW_DATA_PANDAS_TOO_OLD</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/baseDataViewerDependencyImplementation.ts)
```typescript
                    sendTelemetryEvent(Telemetry.PandasOK);
                    return;
                }
                sendTelemetryEvent(Telemetry.PandasTooOld);
                // Warn user that we cannot start because pandas is too old.
                const versionStr = `${pandasVersion.major}.${pandasVersion.minor}.${pandasVersion.build}`;
                await this.promptInstall(executer, tokenSource, versionStr);
```

</details>
<details>
  <summary>DS_INTERNAL.START_EXECUTE_NOTEBOOK_CELL_PERCEIVED_COLD</summary>

## Description




 Time take for jupyter server to be busy from the time user first hit `run` cell until jupyter reports it is busy running a cell.

## Properties


No properties for event


## Locations Used

[src/kernels/kernel.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/kernel.ts)
```typescript
                .finally(() =>
                    sendKernelTelemetryEvent(
                        this.resourceUri,
                        Telemetry.StartExecuteNotebookCellPerceivedCold,
                        stopWatch.elapsedTime
                    )
                )
```

</details>
<details>
  <summary>DS_INTERNAL.START_JUPYTER_PROCESS</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/launcher/notebookStarter.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/launcher/notebookStarter.node.ts)
```typescript
            }

            // Fire off telemetry for the process being talkable
            sendTelemetryEvent(Telemetry.StartJupyterProcess, stopWatch.elapsedTime);

            try {
                const port = parseInt(url.parse(connection.baseUrl).port || '0', 10);
```

</details>
<details>
  <summary>DS_INTERNAL.START_RAW_FAILED_UI_DISABLED</summary>

## Description



 Telemetry sent when starting auto starting Native Notebook kernel fails silently.

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.START_SESSION_FAILED_JUPYTER</summary>

## Description




 Telemetry event sent when starting a session for a local connection failed.

 @type {(undefined | never)}
 @memberof IEventNamePropertyMapping

## Properties


No properties for event


## Locations Used

[src/kernels/common/baseJupyterSession.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/common/baseJupyterSession.ts)
```typescript
export class JupyterSessionStartError extends WrappedError {
    constructor(originalException: Error) {
        super(originalException.message, originalException);
        sendTelemetryEvent(Telemetry.StartSessionFailedJupyter, undefined, undefined, originalException, true);
    }
}

```

</details>
<details>
  <summary>DS_INTERNAL.SWITCH_KERNEL</summary>

## Description




 Triggered when the kernel selection changes (note: This can also happen automatically when a notebook is opened).
 WARNING: Due to changes in VS Code, this isn't necessarily a user action, hence difficult to tell if the user changed it or it changed automatically.

## Properties


No properties for event


## Locations Used

[src/notebooks/controllers/vscodeNotebookController.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/vscodeNotebookController.ts)
```typescript
            default:
            // We don't know as its the default kernel on Jupyter server.
        }
        sendKernelTelemetryEvent(document.uri, Telemetry.SwitchKernel);
        // If we have an existing kernel, then we know for a fact the user is changing the kernel.
        // Else VSC is just setting a kernel for a notebook after it has opened.
        if (existingKernel) {
```


[src/test/datascience/telemetry.vscode.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/datascience/telemetry.vscode.test.ts)
```typescript
        // Right now this is the guaranteed list. Might want to expand this.
        assertEvent(Telemetry.RunFileInteractive);
        assertEvent(Telemetry.ExecuteCellPerceivedWarm);
        assertEvent(Telemetry.SwitchKernel);
    });
});

```

</details>
<details>
  <summary>DS_INTERNAL.SWITCH_TO_EXISTING_KERNEL</summary>

## Description


No description provided

## Properties

-  language: string

## Locations Used

[src/telemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/telemetry.ts)
```typescript
     * Similar to Telemetry.SwitchKernel, but doesn't contain as much information as Telemetry.SwitchKernel.
     * WARNING: Due to changes in VS Code, this isn't necessarily a user action, hence difficult to tell if the user changed it or it changed automatically.
     */
    [Telemetry.SwitchToExistingKernel]: { language: string };
    [Telemetry.SwitchToInterpreterAsKernel]: never | undefined;
    /**
     * Total time taken to interrupt a kernel
```


[src/notebooks/telemetry/notebookOrKernelLanguageTelemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/telemetry/notebookOrKernelLanguageTelemetry.ts)
```typescript
import { getTelemetrySafeLanguage } from '../../platform/telemetry/helpers';

export function sendNotebookOrKernelLanguageTelemetry(
    telemetryEvent: Telemetry.SwitchToExistingKernel | Telemetry.NotebookLanguage,
    language?: string
) {
    language = getTelemetrySafeLanguage(language);
```


[src/notebooks/controllers/vscodeNotebookController.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/vscodeNotebookController.ts)
```typescript
        }
        switch (this.connection.kind) {
            case 'startUsingPythonInterpreter':
                sendNotebookOrKernelLanguageTelemetry(Telemetry.SwitchToExistingKernel, PYTHON_LANGUAGE);
                break;
            case 'connectToLiveRemoteKernel':
                sendNotebookOrKernelLanguageTelemetry(
```


[src/notebooks/controllers/vscodeNotebookController.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/vscodeNotebookController.ts)
```typescript
                break;
            case 'connectToLiveRemoteKernel':
                sendNotebookOrKernelLanguageTelemetry(
                    Telemetry.SwitchToExistingKernel,
                    this.connection.kernelModel.language
                );
                break;
```


[src/notebooks/controllers/vscodeNotebookController.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/vscodeNotebookController.ts)
```typescript
            case 'startUsingLocalKernelSpec':
            case 'startUsingRemoteKernelSpec':
                sendNotebookOrKernelLanguageTelemetry(
                    Telemetry.SwitchToExistingKernel,
                    this.connection.kernelSpec.language
                );
                break;
```

</details>
<details>
  <summary>DS_INTERNAL.SWITCH_TO_EXISTING_KERNEL</summary>

## Description




 Similar to Telemetry.SwitchKernel, but doesn't contain as much information as Telemetry.SwitchKernel.
 WARNING: Due to changes in VS Code, this isn't necessarily a user action, hence difficult to tell if the user changed it or it changed automatically.

## Properties


No properties for event


## Locations Used

[src/telemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/telemetry.ts)
```typescript
    [Telemetry.RegisterAndUseInterpreterAsKernel]: never | undefined;
    [Telemetry.UseInterpreterAsKernel]: never | undefined;
    [Telemetry.UseExistingKernel]: never | undefined;
    [Telemetry.SwitchToExistingKernel]: { language: string };
    [Telemetry.SwitchToInterpreterAsKernel]: never | undefined;
    [Telemetry.ConvertToPythonFile]: never | undefined;
    [Telemetry.CopySourceCode]: never | undefined;
```


[src/notebooks/telemetry/notebookOrKernelLanguageTelemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/telemetry/notebookOrKernelLanguageTelemetry.ts)
```typescript
import { getTelemetrySafeLanguage } from '../../platform/telemetry/helpers';

export function sendNotebookOrKernelLanguageTelemetry(
    telemetryEvent: Telemetry.SwitchToExistingKernel | Telemetry.NotebookLanguage,
    language?: string
) {
    language = getTelemetrySafeLanguage(language);
```


[src/notebooks/controllers/vscodeNotebookController.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/vscodeNotebookController.ts)
```typescript
        }
        switch (this.connection.kind) {
            case 'startUsingPythonInterpreter':
                sendNotebookOrKernelLanguageTelemetry(Telemetry.SwitchToExistingKernel, PYTHON_LANGUAGE);
                break;
            case 'connectToLiveRemoteKernel':
                sendNotebookOrKernelLanguageTelemetry(
```


[src/notebooks/controllers/vscodeNotebookController.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/vscodeNotebookController.ts)
```typescript
                break;
            case 'connectToLiveRemoteKernel':
                sendNotebookOrKernelLanguageTelemetry(
                    Telemetry.SwitchToExistingKernel,
                    this.connection.kernelModel.language
                );
                break;
```


[src/notebooks/controllers/vscodeNotebookController.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/notebooks/controllers/vscodeNotebookController.ts)
```typescript
            case 'startUsingLocalKernelSpec':
            case 'startUsingRemoteKernelSpec':
                sendNotebookOrKernelLanguageTelemetry(
                    Telemetry.SwitchToExistingKernel,
                    this.connection.kernelSpec.language
                );
                break;
```

</details>
<details>
  <summary>DS_INTERNAL.SWITCH_TO_INTERPRETER_AS_KERNEL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/telemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/telemetry.ts)
```typescript
     * WARNING: Due to changes in VS Code, this isn't necessarily a user action, hence difficult to tell if the user changed it or it changed automatically.
     */
    [Telemetry.SwitchToExistingKernel]: { language: string };
    [Telemetry.SwitchToInterpreterAsKernel]: never | undefined;
    /**
     * Total time taken to interrupt a kernel
     * Check the `resourceType` to determine whether its a Jupyter Notebook or IW.
```

</details>
<details>
  <summary>DS_INTERNAL.SWITCH_TO_INTERPRETER_AS_KERNEL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/telemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/telemetry.ts)
```typescript
    [Telemetry.UseInterpreterAsKernel]: never | undefined;
    [Telemetry.UseExistingKernel]: never | undefined;
    [Telemetry.SwitchToExistingKernel]: { language: string };
    [Telemetry.SwitchToInterpreterAsKernel]: never | undefined;
    [Telemetry.ConvertToPythonFile]: never | undefined;
    [Telemetry.CopySourceCode]: never | undefined;
    [Telemetry.CreateNewNotebook]: never | undefined;
```

</details>
<details>
  <summary>DS_INTERNAL.SYNC_ALL_CELLS</summary>

## Description



 Sync events

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.SYNC_SINGLE_CELL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.USE_EXISTING_KERNEL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.USE_INTERPRETER_AS_KERNEL</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.VARIABLE_EXPLORER_FETCH_TIME</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/variables/jupyterVariables.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/variables/jupyterVariables.ts)
```typescript
    }

    // IJupyterVariables implementation
    @captureTelemetry(Telemetry.VariableExplorerFetchTime, undefined, true)
    public async getVariables(request: IJupyterVariablesRequest, kernel?: IKernel): Promise<IJupyterVariablesResponse> {
        return this.variableHandler.getVariables(request, kernel);
    }
```

</details>
<details>
  <summary>DS_INTERNAL.VARIABLE_EXPLORER_VARIABLE_COUNT</summary>

## Description


No description provided

## Properties

-  variableCount: number

## Locations Used

[src/webviews/extension-side/variablesView/variableView.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/variablesView/variableView.ts)
```typescript
            const response = await this.variables.getVariables(args, activeNotebook);

            this.postMessage(InteractiveWindowMessages.GetVariablesResponse, response).ignoreErrors();
            sendTelemetryEvent(Telemetry.VariableExplorerVariableCount, undefined, {
                variableCount: response.totalCount
            });
        } else {
```

</details>
<details>
  <summary>DS_INTERNAL.VSCNOTEBOOK_CELL_TRANSLATION_FAILED</summary>

## Description


No description provided

## Properties

- 
        isErrorOutput: boolean;

## Locations Used

[src/kernels/execution/helpers.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/execution/helpers.ts)
```typescript
            // Unless we already know its an unknown output type.
            const outputType: nbformat.OutputType =
                <nbformat.OutputType>customMetadata?.outputType || (isStream ? 'stream' : 'display_data');
            sendTelemetryEvent(Telemetry.VSCNotebookCellTranslationFailed, undefined, {
                isErrorOutput: outputType === 'error'
            });

```

</details>
<details>
  <summary>DS_INTERNAL.WAIT_FOR_IDLE_JUPYTER</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/session/jupyterSession.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/session/jupyterSession.ts)
```typescript
        return true;
    }

    @captureTelemetry(Telemetry.WaitForIdleJupyter, undefined, true)
    public waitForIdle(timeout: number, token: CancellationToken): Promise<void> {
        // Wait for idle on this session
        return this.waitForIdleOnSession(this.session, timeout, token);
```

</details>
<details>
  <summary>DS_INTERNAL.WEB_FETCH_ERROR</summary>

## Description




 Event sent when trying to talk to a remote server and the browser gives us a generic fetch error

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
                }
            } else if (userURI) {
                if (err.message.includes('Failed to fetch') && this.isWebExtension) {
                    sendTelemetryEvent(Telemetry.FetchError, undefined, { currentTask: 'connecting' });
                }
                const serverId = await computeServerId(userURI);
                await this.errorHandler.handleError(new RemoteJupyterServerConnectionError(userURI, serverId, err));
```


[src/kernels/jupyter/serverSelector.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/serverSelector.ts)
```typescript
                }
            } else {
                if (err.message.includes('Failed to fetch') && this.isWebExtension) {
                    sendTelemetryEvent(Telemetry.FetchError, undefined, { currentTask: 'connecting' });
                }
                const serverId = await computeServerId(userURI);
                await this.errorHandler.handleError(new RemoteJupyterServerConnectionError(userURI, serverId, err));
```

</details>
<details>
  <summary>DS_INTERNAL.WEBVIEW_STARTUP</summary>

## Description


No description provided

## Properties

-  type: string

## Locations Used

[src/platform/webviews/webviewHost.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/webviews/webviewHost.ts)
```typescript
    protected webViewRendered() {
        if (this.webviewInit && !this.webviewInit.resolved) {
            // Send telemetry for startup
            sendTelemetryEvent(Telemetry.WebviewStartup, this.startupStopwatch.elapsedTime, { type: this.title });

            // Resolve our started promise. This means the webpanel is ready to go.
            this.webviewInit.resolve();
```

</details>
<details>
  <summary>DS_INTERNAL.WEBVIEW_STYLE_UPDATE</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

Event can be removed. Not referenced anywhere

</details>
<details>
  <summary>DS_INTERNAL.ZMQ_NATIVE_BINARIES_LOADING</summary>

## Description




 Telemetry event sent when the ZMQ native binaries do work.

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/rawNotebookSupportedService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawNotebookSupportedService.node.ts)
```typescript
        try {
            require('zeromq');
            traceInfo(`ZMQ install verified.`);
            sendTelemetryEvent(Telemetry.ZMQSupported);
            this._isSupported = true;
        } catch (e) {
            traceError(`Exception while attempting zmq :`, e);
```

</details>
<details>
  <summary>DS_INTERNAL.ZMQ_NATIVE_BINARIES_NOT_LOADING</summary>

## Description




 Telemetry event sent when the ZMQ native binaries do not work.

## Properties


No properties for event


## Locations Used

[src/kernels/raw/session/rawNotebookSupportedService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/raw/session/rawNotebookSupportedService.node.ts)
```typescript
            this._isSupported = true;
        } catch (e) {
            traceError(`Exception while attempting zmq :`, e);
            sendTelemetryEvent(Telemetry.ZMQNotSupported);
            this._isSupported = false;
        }

```

</details>
<details>
  <summary>ENVFILE_VARIABLE_SUBSTITUTION</summary>

## Description




 Telemetry event sent when substituting Environment variables to calculate value of variables

## Properties


No properties for event


## Locations Used

[src/platform/common/variables/environment.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/variables/environment.node.ts)
```typescript
    });
    if (!invalid && replacement !== value) {
        value = replacement;
        sendTelemetryEvent(EventName.ENVFILE_VARIABLE_SUBSTITUTION);
    }

    return value.replace(/\\\$/g, '$');
```

</details>
<details>
  <summary>ENVFILE_WORKSPACE</summary>

## Description




 Telemetry event sent when an environment file is detected in the workspace.

## Properties


No properties for event


## Locations Used

[src/platform/telemetry/envFileTelemetry.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/telemetry/envFileTelemetry.node.ts)
```typescript
}

function sendTelemetry(hasCustomEnvPath: boolean = false) {
    sendTelemetryEvent(EventName.ENVFILE_WORKSPACE, undefined, { hasCustomEnvPath });

    envFileTelemetrySent = true;
}
```

</details>
<details>
  <summary>EXTENSION.LOAD</summary>

## Description




 Telemetry event sent with details just after editor loads

## Properties


No properties for event


## Locations Used

[src/platform/telemetry/startupTelemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/telemetry/startupTelemetry.ts)
```typescript
        await activatedPromise;
        durations.totalActivateTime = stopWatch.elapsedTime;
        const props = await getActivationTelemetryProps(serviceContainer);
        sendTelemetryEvent(EventName.EXTENSION_LOAD, durations, props);
    } catch (ex) {
        traceError('sendStartupTelemetry() failed.', ex);
    }
```


[src/platform/telemetry/startupTelemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/telemetry/startupTelemetry.ts)
```typescript
                traceError('getActivationTelemetryProps() failed.', ex);
            }
        }
        sendTelemetryEvent(EventName.EXTENSION_LOAD, durations, props, ex);
    } catch (exc2) {
        traceError('sendErrorTelemetry() failed.', exc2);
    }
```


[src/platform/telemetry/startupTelemetry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/telemetry/startupTelemetry.ts)
```typescript

async function getActivationTelemetryProps(
    serviceContainer: IServiceContainer
): Promise<IEventNamePropertyMapping[EventName.EXTENSION_LOAD]> {
    // eslint-disable-next-line
    // TODO: Not all of this data is showing up in the database...
    // eslint-disable-next-line
```

</details>
<details>
  <summary>HASHED_PACKAGE_NAME</summary>

## Description




 Telemetry event sent with details when tracking imports

## Properties


No properties for event


## Locations Used

[src/standalone/import-export/importTracker.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/import-export/importTracker.node.ts)
```typescript
        // Hash the package name so that we will never accidentally see a
        // user's private package name.
        const hash = getTelemetrySafeHashedString(packageName);
        sendTelemetryEvent(EventName.HASHED_PACKAGE_NAME, undefined, { hashedNamev2: hash });
    }

    private lookForImports(lines: (string | undefined)[]) {
```


[src/test/telemetry/importTracker.unit.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/telemetry/importTracker.unit.test.ts)
```typescript
        public static expectHashes(...hashes: string[]) {
            expect(Reporter.eventNames).to.contain(EventName.HASHED_PACKAGE_PERF);
            if (hashes.length > 0) {
                expect(Reporter.eventNames).to.contain(EventName.HASHED_PACKAGE_NAME);
            }

            Reporter.properties.pop(); // HASHED_PACKAGE_PERF
```

</details>
<details>
  <summary>HASHED_PACKAGE_PERF</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/standalone/import-export/importTracker.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/import-export/importTracker.node.ts)
```typescript
        }
    }

    @captureTelemetry(EventName.HASHED_PACKAGE_PERF)
    private checkNotebookDocument(e: NotebookDocument) {
        this.pendingChecks.delete(e.uri.fsPath);
        const lines = this.getNotebookDocumentLines(e);
```


[src/standalone/import-export/importTracker.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/import-export/importTracker.node.ts)
```typescript
        this.lookForImports(lines);
    }

    @captureTelemetry(EventName.HASHED_PACKAGE_PERF)
    private checkNotebookCell(e: NotebookCellExecutionStateChangeEvent) {
        if (!isJupyterNotebook(e.cell.notebook)) {
            return;
```


[src/standalone/import-export/importTracker.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/standalone/import-export/importTracker.node.ts)
```typescript
        this.lookForImports(result);
    }

    @captureTelemetry(EventName.HASHED_PACKAGE_PERF)
    private checkDocument(document: TextDocument) {
        this.pendingChecks.delete(document.fileName);
        const lines = this.getDocumentLines(document);
```


[src/test/telemetry/importTracker.unit.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/telemetry/importTracker.unit.test.ts)
```typescript
        public static measures: {}[] = [];

        public static expectHashes(...hashes: string[]) {
            expect(Reporter.eventNames).to.contain(EventName.HASHED_PACKAGE_PERF);
            if (hashes.length > 0) {
                expect(Reporter.eventNames).to.contain(EventName.HASHED_PACKAGE_NAME);
            }
```

</details>
<details>
  <summary>JUPYTER_EXPERIMENTS_OPT_IN_OUT</summary>

## Description




 Telemetry event sent with details when a user has requested to opt it or out of an experiment group

## Properties


No properties for event


## Locations Used

[src/platform/common/experiments/service.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/experiments/service.ts)
```typescript
        // so we need to perform these checks and send the corresponding telemetry manually.
        switch (this.getOptInOptOutStatus(experiment)) {
            case 'optOut': {
                sendTelemetryEvent(EventName.JUPYTER_EXPERIMENTS_OPT_IN_OUT, undefined, {
                    expNameOptedOutOf: experiment
                });

```


[src/platform/common/experiments/service.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/experiments/service.ts)
```typescript
            }
            case 'optIn': {
                await this.experimentationService.isCachedFlightEnabled(experiment);
                sendTelemetryEvent(EventName.JUPYTER_EXPERIMENTS_OPT_IN_OUT, undefined, {
                    expNameOptedInto: experiment
                });

```


[src/test/common/experiments/service.unit.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/common/experiments/service.unit.test.ts)
```typescript
            assert.isTrue(result);
            assert.equal(telemetryEvents.length, 1);
            assert.deepEqual(telemetryEvents[0], {
                eventName: EventName.JUPYTER_EXPERIMENTS_OPT_IN_OUT,
                properties: { expNameOptedInto: experiment }
            });
            sinon.assert.calledOnce(isCachedFlightEnabledStub);
```


[src/test/common/experiments/service.unit.test.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/test/common/experiments/service.unit.test.ts)
```typescript
            assert.isFalse(result);
            assert.equal(telemetryEvents.length, 1);
            assert.deepEqual(telemetryEvents[0], {
                eventName: EventName.JUPYTER_EXPERIMENTS_OPT_IN_OUT,
                properties: { expNameOptedOutOf: experiment }
            });
            sinon.assert.notCalled(isCachedFlightEnabledStub);
```

</details>
<details>
  <summary>JUPYTER_IS_INSTALLED</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/kernels/jupyter/jupyterDetectionTelemetry.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterDetectionTelemetry.node.ts)
```typescript
                const minor = parseInt(versionMatch[2], 10);
                const frontEndVersion = parseFloat(`${major}.${minor}`);
                if (shell) {
                    sendTelemetryEvent(Telemetry.JupyterInstalled, undefined, {
                        frontEnd,
                        frontEndVersion,
                        detection: 'shell',
```


[src/kernels/jupyter/jupyterDetectionTelemetry.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterDetectionTelemetry.node.ts)
```typescript
                        shellType: shell
                    });
                } else {
                    sendTelemetryEvent(Telemetry.JupyterInstalled, undefined, {
                        frontEnd,
                        frontEndVersion,
                        detection: 'process'
```


[src/kernels/jupyter/jupyterDetectionTelemetry.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterDetectionTelemetry.node.ts)
```typescript
                    });
                }
            } else {
                sendTelemetryEvent(Telemetry.JupyterInstalled, undefined, {
                    failed: true,
                    reason: 'notInstalled',
                    frontEnd
```


[src/kernels/jupyter/jupyterDetectionTelemetry.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/kernels/jupyter/jupyterDetectionTelemetry.node.ts)
```typescript
                });
            }
        } catch (ex) {
            sendTelemetryEvent(Telemetry.JupyterInstalled, undefined, {
                failed: true,
                reason: 'notInstalled',
                frontEnd
```

</details>
<details>
  <summary>OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_ERROR_EX</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/dataViewerCommandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/dataViewerCommandRegistry.ts)
```typescript
                    sendTelemetryEvent(EventName.OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_SUCCESS);
                }
            } catch (e) {
                sendTelemetryEvent(EventName.OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_ERROR, undefined, undefined, e);
                traceError(e);
                this.errorHandler.handleError(e).then(noop, noop);
            }
```

</details>
<details>
  <summary>OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_REQUEST_EX</summary>

## Description




 Telemetry event sent when user opens the data viewer.

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/dataViewerCommandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/dataViewerCommandRegistry.ts)
```typescript
        this.disposables.push(disposable);
    }
    private async onVariablePanelShowDataViewerRequest(request: IShowDataViewerFromVariablePanel) {
        sendTelemetryEvent(EventName.OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_REQUEST);
        if (
            this.debugService?.activeDebugSession &&
            this.variableProvider &&
```

</details>
<details>
  <summary>OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_SUCCESS_EX</summary>

## Description


No description provided

## Properties


No properties for event


## Locations Used

[src/webviews/extension-side/dataviewer/dataViewerCommandRegistry.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/webviews/extension-side/dataviewer/dataViewerCommandRegistry.ts)
```typescript
                if (columnSize && (await this.dataViewerChecker.isRequestedColumnSizeAllowed(columnSize))) {
                    const title: string = `${DataScience.dataExplorerTitle()} - ${jupyterVariable.name}`;
                    await this.dataViewerFactory.create(jupyterVariableDataProvider, title);
                    sendTelemetryEvent(EventName.OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_SUCCESS);
                }
            } catch (e) {
                sendTelemetryEvent(EventName.OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_ERROR, undefined, undefined, e);
```

</details>
<details>
  <summary>PLATFORM.INFO</summary>

## Description




 Telemetry event sent after fetching the OS version

## Properties


No properties for event


## Locations Used

[src/platform/common/platform/platformService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/platform/platformService.node.ts)
```typescript
    public version?: SemVer;
    constructor() {
        if (this.osType === OSType.Unknown) {
            sendTelemetryEvent(EventName.PLATFORM_INFO, undefined, {
                failureType: PlatformErrors.FailedToDetermineOS
            });
        }
```


[src/platform/common/platform/platformService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/platform/platformService.node.ts)
```typescript
                try {
                    const ver = coerce(os.release());
                    if (ver) {
                        sendTelemetryEvent(EventName.PLATFORM_INFO, undefined, {
                            osVersion: `${ver.major}.${ver.minor}.${ver.patch}`
                        });
                        return (this.version = ver);
```


[src/platform/common/platform/platformService.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/platform/platformService.node.ts)
```typescript
                    }
                    throw new Error('Unable to parse version');
                } catch (ex) {
                    sendTelemetryEvent(EventName.PLATFORM_INFO, undefined, {
                        failureType: PlatformErrors.FailedToParseVersion
                    });
                    return parseVersion(os.release());
```

</details>
<details>
  <summary>PYTHON_INTERPRETER_ACTIVATION_ENVIRONMENT_VARIABLES</summary>

## Description


No description provided

## Properties

- 
        /**
         * Carries `true` if environment variables are present, `false` otherwise
         *
         * @type {boolean}
         */
        hasEnvVars?: boolean;
- 
        /**
         * Carries `true` if fetching environment variables failed, `false` otherwise
         *
         * @type {boolean}
         */
        failed?: boolean;
- 
        /**
         * Whether the environment was activated within a terminal or not.
         *
         * @type {boolean}
         */
        activatedInTerminal?: boolean;
- 
        /**
         * Whether the environment was activated by the wrapper class.
         * If `true`, this telemetry is sent by the class that wraps the two activation providers   .
         *
         * @type {boolean}
         */
        activatedByWrapper?: boolean;

## Locations Used

[src/platform/common/process/pythonExecutionFactory.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/common/process/pythonExecutionFactory.node.ts)
```typescript
            options.allowEnvironmentFetchExceptions
        );
        const hasEnvVars = envVars && Object.keys(envVars).length > 0;
        sendTelemetryEvent(EventName.PYTHON_INTERPRETER_ACTIVATION_ENVIRONMENT_VARIABLES, undefined, { hasEnvVars });
        if (!hasEnvVars) {
            return this.create({
                resource: options.resource,
```

</details>
<details>
  <summary>TERMINAL_ENV_VAR_EXTRACTION</summary>

## Description




 Telemetry sent only when we fail to extract the env variables for a shell.

## Properties


No properties for event


## Locations Used

[src/platform/terminals/helper.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/terminals/helper.node.ts)
```typescript
        terminal?: Terminal
    ): Promise<{ env?: NodeJS.ProcessEnv; shell: TerminalShellType }> {
        if (this.platform.osType === OSType.Unknown) {
            sendTelemetryEvent(Telemetry.TerminalEnvVariableExtraction, undefined, {
                failed: true,
                reason: 'unknownOs',
                shellType: undefined
```


[src/platform/terminals/helper.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/terminals/helper.node.ts)
```typescript
            return { env, shell };
        } catch (ex) {
            traceError('Failed to extract environment variables', ex);
            sendTelemetryEvent(Telemetry.TerminalEnvVariableExtraction, undefined, {
                failed: true,
                reason: failureReason,
                shellType: shell
```

</details>
<details>
  <summary>TERMINAL_SHELL_IDENTIFICATION</summary>

## Description



 Telemetry event sent to provide information on whether we have successfully identify the type of shell used.
 This information is useful in determining how well we identify shells on users machines.
 This impacts extraction of env variables from current shell.
 So, the better this works, the better it is for the user.
 failed - If true, indicates we have failed to identify the shell. Note this impacts impacts ability to activate environments in the terminal & code.
 shellIdentificationSource - How was the shell identified. One of 'terminalName' | 'settings' | 'environment' | 'default'
                             If terminalName, then this means we identified the type of the shell based on the name of the terminal.
                             If settings, then this means we identified the type of the shell based on user settings in VS Code.
                             If environment, then this means we identified the type of the shell based on their environment (env variables, etc).
                                 I.e. their default OS Shell.
                             If default, then we reverted to OS defaults (cmd on windows, and bash on the rest).
                                 This is the worst case scenario.
                                 I.e. we could not identify the shell at all.
 hasCustomShell - If undefined (not set), we didn't check.
                  If true, user has customzied their shell in VSC Settings.
 hasShellInEnv - If undefined (not set), we didn't check.
                 If true, user has a shell in their environment.
                 If false, user does not have a shell in their environment.

## Properties

- 
        failed: boolean;
- 
        reason: 'unknownShell' | undefined;
- 
        terminalProvided: boolean;
- 
        shellIdentificationSource: 'terminalName' | 'settings' | 'environment' | 'default' | 'vscode';
- 
        hasCustomShell: undefined | boolean;
- 
        hasShellInEnv: undefined | boolean;

## Locations Used

[src/platform/terminals/shellDetector.node.ts](https://github.com/microsoft/vscode-jupyter/tree/main/src/platform/terminals/shellDetector.node.ts)
```typescript
        // This information is useful in determining how well we identify shells on users machines.
        // This impacts executing code in terminals and activation of environments in terminal.
        // So, the better this works, the better it is for the user.
        sendTelemetryEvent(Telemetry.TerminalShellIdentification, undefined, telemetryProperties);
        traceVerbose(`Shell identified as '${shell}'`);

        // If we could not identify the shell, use the defaults.
```

</details>
>>>>>>> 55f0ce845 (Add option removing local kernels, improve error logging)
