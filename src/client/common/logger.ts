// These are all just temporary aliases, for backward compatibility
// and to avoid churn.
export {
    traceDecorators,
    logError as traceError,
    logErrorIf as traceErrorIf,
    logInfo as traceInfo,
    logInfoOnCI as traceInfoIfCI,
    logVerbose as traceVerbose,
    logWarning as traceWarning
} from '../logging';
export { TraceOptions as LogOptions } from '../logging/trace';
