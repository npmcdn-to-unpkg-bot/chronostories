import {Component, EventEmitter, Output} from "angular2/core";
import {User} from "../models/user";
import {AuthService} from "../services/auth.service";
import {FormBuilder, Validators, ControlGroup, FORM_DIRECTIVES} from "angular2/common";
import {emailValidator, matchingPasswords, emailRegexp} from '../services/validators.service';
import {WebStorageService} from "../services/webstorage.service";
import {Configuration} from "../config/configuration";

@Component({
    selector: 'sign-in-form',
    template: `
        <div class="form-wrapper">
            <div class="flexbox flex-row">
                <h1>Come in, storyteller</h1>
                <div><a class="close" (click)="close($event)"><i class="fa fa-times" aria-hidden="true"></i></a></div>
            </div>
            <form [ngFormModel]="form" (ngSubmit)="onSignIn($event)" novalidate>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Your email"
                    [(ngModel)]="user.email" 
                    [ngFormControl]="form.controls['email']"
                    #email="ngForm"
                    >
                <label for="email">Email</label>
                <div  *ngIf="(email.dirty || submitted) && !email.valid" class="panel panel-error">
                    Email is invalid
                </div>
              </div>
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Your password"
                    [(ngModel)]="user.password" 
                    [ngFormControl]="form.controls['password']"
                    #password="ngForm"
                    >
                <label for="password">Password</label>
                <div  *ngIf="(password.dirty || submitted) && !password.valid" class="panel panel-error">
                    The password should be at least 6 characters long
                </div>
              </div>
              <button type="submit" class="button primary block-button">Sign in</button>
              <div class="swap-form"><a (click)="swapToSignUp()">I want to create a new account</a></div>
            </form>
        </div>
    `,
    providers: [AuthService, WebStorageService],
    directives: [FORM_DIRECTIVES]
})

export class SignInComponent {
    user:User = new User();
    form:ControlGroup;
    submitted = false;

    @Output() closeModal:EventEmitter<any> = new EventEmitter();
    @Output() swapWindow:EventEmitter<any> = new EventEmitter();
    @Output() notify:EventEmitter<any> = new EventEmitter();

    constructor(private authService:AuthService, private builder:FormBuilder, private webStorageService:WebStorageService, private configuration:Configuration) {
        this.user = new User();
        this.submitted = false;
        this.form = builder.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegexp)])],
            password: ['', Validators.required],
        })
    }

    close(event) {
        this.closeModal.emit(event);
    }

    swapToSignUp() {
        this.swapWindow.emit(event);
    }

    onSignIn(event) {
        this.submitted = true;
        console.log(JSON.stringify(this.form.value));
        if (this.form.valid) {
            this.authService.login(this.user).subscribe(
                data => {
                    this.webStorageService.put(this.configuration.token.name, data);
                },
                err => {
                    console.error(err);
                    this.notify.emit({
                        type: 'error',
                        message: 'Invalid email or password'
                    });
                },
                () => {
                    console.log('logged in');
                    this.close('');
                });
        }
    }
}
