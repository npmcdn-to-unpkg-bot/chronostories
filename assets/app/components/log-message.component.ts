import {Component, EventEmitter, Output, Input} from "angular2/core";
import {User} from "../models/user";
import {AuthService} from "../services/auth.service";
import {FormBuilder, Validators, ControlGroup, FORM_DIRECTIVES} from "angular2/common";
import {emailValidator, matchingPasswords, emailRegexp} from '../services/validators.service';
import {WebStorageService} from "../services/webstorage.service";
import {Configuration} from "../config/configuration";
import {LoggerService, DEBUG_LEVEL} from "../services/logger.service";

@Component({
    selector: 'log-message',
    template: `
        <div class="modal-container">
            <div class="modal">
                <div class="flexbox flex-row">
                    <h1>{{logMessage.message}}</h1>
                    <div><a class="close" (click)="close($event)"><i class="fa fa-times" aria-hidden="true">X</i></a></div>
                </div>
                <textarea class="description" [attr.readonly]="true" [(ngModel)]="logMessage.pretty"></textarea>
            </div>
        </div>
    `,
    providers: [],
    directives: [FORM_DIRECTIVES]
})

export class LogMessageComponent {
    @Input()
    public logMessage;
    @Output() closeModal:EventEmitter<any> = new EventEmitter();


    close(event) {
        this.closeModal.emit(event);
    }

}
