import {Component, OnInit} from "angular2/core";
import {LoggerService, DEBUG_LEVEL} from "../services/logger.service";
import {Observable} from "rxjs/Observable";
import {LogMessageComponent} from "./log-message.component";


@Component({
    selector: 'debug-console',
    template: `
            <div>Debug errors:</div>
            <div class="error-log">
                <div 
                    *ngFor="#logMessage of logMessages; #i = index" 
                    >
                    <a (click)="show(i)" [ngClass]="{error: isError(logMessage), warning: isWarning(logMessage)}">{{logMessage.message}}</a>
                    <log-message
                        *ngIf="i==openMessage"
                        (closeModal)="hide()"
                        [logMessage]="logMessage"
                    ></log-message>
                </div>
            </div>
    `,
    providers: [],
    directives: [LogMessageComponent]
})

export class DebugConsoleComponent implements OnInit{
    private logStream$:Observable<Object[]>;
    public logMessages:Object[];
    public openMessage;

    constructor(private logger:LoggerService) {
    }

    ngOnInit():any {
        this.logMessages=[];
        
        this.logStream$ = this.logger.getLogStream();

        this.logStream$.subscribe(message => {
            this.logMessages.push(message)
        })
    }

    show(index) {
        this.openMessage = (!this.openMessage)?index:undefined;
        document.querySelector('body').classList.add('no-scroll');
    }

    hide(){
        this.openMessage=undefined;
        document.querySelector('body').classList.remove('no-scroll');
    }

    isError(message){
        return message.level == DEBUG_LEVEL.ERROR.name;
    }

    isWarning(message){
        return message.level == DEBUG_LEVEL.WARN.name;
    }
}
