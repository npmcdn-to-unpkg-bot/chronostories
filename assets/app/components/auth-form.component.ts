import {Component, EventEmitter, Output} from "angular2/core";

import {SignInComponent} from "./signin-form.component";
import {SignUpComponent} from "./signup-form.component";

@Component({
    selector: 'auth-form',
    template: `
        <sign-in-form 
            *ngIf="login" 
            (closeModal)="hideAccessForm()"
            (swapWindow)="login=!login"
            ></sign-in-form>
        <sign-up-form 
            *ngIf="!login" 
            (closeModal)="hideAccessForm()"
            (swapWindow)="login=!login"
            ></sign-up-form>
    `,
    providers: [],
    directives: [SignInComponent, SignUpComponent]
})

export class AuthFormComponent {
    @Output() closeModal:EventEmitter<any> = new EventEmitter();
    public login=false;

    hideAccessForm(event) {
        this.closeModal.emit(event);
    }
}