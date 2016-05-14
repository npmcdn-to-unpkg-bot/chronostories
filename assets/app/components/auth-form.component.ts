import {Component, EventEmitter, Output} from "angular2/core";
import {User} from "../models/user";
import {AuthService} from "../services/auth.service";
import {FormBuilder, Validators, ControlGroup, FORM_DIRECTIVES} from "angular2/common";
import {emailValidator, matchingPasswords} from '../services/validators.service';

@Component({
    selector: 'auth-form',
    template: `
        <div class="form-wrapper">
            <div class="flexbox flex-row">
                <h1>Become a storyteller</h1>
                <div><a class="close" (click)="close($event)"><i class="fa fa-times" aria-hidden="true"></i></a></div>
            </div>
            <form [ngFormModel]="form" (ngSubmit)="onSignUp($event)" novalidate>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Your name"
                    [(ngModel)]="user.name"
                    [ngFormControl]="form.controls['name']"
                    #name="ngForm"
                    >
                <label for="name">Name</label>
                <div  *ngIf="(name.dirty || submitted) && !name.valid" class="panel panel-error">
                    Your name is required
                </div>
              </div>
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
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Confirm password"
                    [(ngModel)]="user.confirmPassword" 
                    [ngFormControl]="form.controls['confirmPassword']"
                    #confirmPassword="ngForm"
                    >
                <label for="confirm-password">Password</label>
                <div *ngIf="(confirmPassword.dirty || submitted) && !confirmPassword.valid" class="panel panel-error">
                    The passwords don't match
                </div>
              </div>
              <button type="submit" class="button primary block-button">Sign up</button>
            </form>
        </div>
    `,
    providers: [AuthService],
    directives: [FORM_DIRECTIVES]
})

export class AuthFormComponent {
    user:User = new User();
    form:ControlGroup;
    submitted = false;

    @Output() closeModal:EventEmitter<any> = new EventEmitter();

    constructor(private authService:AuthService, private builder:FormBuilder) {
        this.user = new User();
        this.submitted = false;
        this.form = builder.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required,  emailValidator])],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        }, {validator: matchingPasswords('password', 'confirmPassword')})
    }

    close(event){
        this.closeModal.emit(event);
    }

    onSignUp(event) {
        this.submitted = true;
        console.log(JSON.stringify(this.form.value));
        if(this.form.valid) {
            //this.authService.register(this.user);
        }
    }
}