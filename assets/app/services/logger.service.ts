import {Injectable, forwardRef, Inject} from "angular2/core";
import {Configuration} from "../config/configuration";
import {Observable} from "rxjs/Observable";

declare var moment:any;

@Injectable()
export class LoggerService {
    private debugLevel;

    constructor(@Inject(forwardRef(() => Configuration)) private configuration:Configuration) {
        this.setDebugLevel(configuration.debugLevel || DEBUG_LEVEL.ERROR);
        var that = this;
        window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
            that.log(DEBUG_LEVEL.ERROR, 'onerror', errorMsg, url, lineNumber, column, errorObj);
            return true;
        };
    }

    setDebugLevel(debugLevel) {
        this.debugLevel = debugLevel;
    }

    public log(level, functionName, message, ...args:any[]) {
        if (!level || !level.value || !level.name) {
            level = DEBUG_LEVEL.INFO;
        }
        if (level.value >= this.debugLevel.value) {
            Array.prototype.unshift.call(args, '[' + moment().format("DD/MM/YY - HH:mm:ss.SSS") + '][' + level.name + '][' + functionName + '] ' + (message || ''));
            if (level.value === DEBUG_LEVEL.ERROR.value) {
                console.debug.apply(console, args);
            }
            else if (level.value === DEBUG_LEVEL.WARN.value) {
                console.warn.apply(console, args);
            }
            else {
                console.log.apply(console, args);
            }
        }
    }

    call(exception:any, stackTrace?:any, reason?:string):void {
        this.log(DEBUG_LEVEL.ERROR, 'angular', '', exception, reason);
    }

    errorCatcher() {
        var that = this;
        return function (err:any, source:Observable<any>, caught:Observable<any>):Observable<any> {
            that.log(DEBUG_LEVEL.ERROR, 'errorCatcher', err.message, err);
            return Observable.throw(err);
        }
    }
}

export const DEBUG_LEVEL = {
    VERBOSE: {
        value: 0,
        name: 'Verbose'
    },
    INFO: {
        value: 1,
        name: 'Info'
    },
    WARN: {
        value: 2,
        name: 'Warn'
    },
    ERROR: {
        value: 3,
        name: 'Error'
    },
    NONE: {
        value: 4,
        name: ''
    }
};