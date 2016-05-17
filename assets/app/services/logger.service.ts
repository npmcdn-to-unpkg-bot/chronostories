import {Injectable, forwardRef, Inject, OnInit} from "angular2/core";
import {Configuration} from "../config/configuration";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";

declare var moment:any;

@Injectable()
export class LoggerService implements OnInit {
    private debugLevel;
    private logStream$:Observer<Object>;
    public log$:Observable<Object>;

    constructor(@Inject(forwardRef(() => Configuration)) private configuration:Configuration) {
        this.setDebugLevel(configuration.debugLevel || DEBUG_LEVEL.ERROR);

        var that = this;

        window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
            that.log(DEBUG_LEVEL.ERROR, 'onerror', errorMsg, url, lineNumber, column, errorObj);
            return true;
        };
    }

    ngOnInit():any {
    }

    setDebugLevel(debugLevel) {
        this.debugLevel = debugLevel;
    }

    public log(level, functionName, text, ...args:any[]) {
        if (!level || (level.value === undefined) || !level.name) {
            level = DEBUG_LEVEL.INFO;
        }
        if (level.value >= this.debugLevel.value) {
            var message:any = '[' + moment().format("DD/MM/YY - HH:mm:ss.SSS") + '][' + level.name + '][' + functionName + '] ' + (text || '');
            Array.prototype.unshift.call(args, message);
            if (level.value === DEBUG_LEVEL.ERROR.value) {
                console.debug.apply(console, args);
            }
            else if (level.value === DEBUG_LEVEL.WARN.value) {
                console.warn.apply(console, args);
            }
            else {
                console.log.apply(console, args);
            }
            if (!!this.log$ && this.logStream$) {
                var logMessage = {
                    time: moment().format("DD/MM/YY - HH:mm:ss.SSS"),
                    level: level.name,
                    functionName: functionName,
                    message: text,
                    data: args,
                    pretty:''
                };
                logMessage.pretty = JSON.stringify(logMessage, null, 2);

                this.logStream$.next(logMessage);
            }
        }
    }

    getLogStream() {
        if (!this.log$) {
            this.log$ = new Observable<Object>(observer => this.logStream$ = observer).share();
        }
        return this.log$;
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
        name: 'Log'
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