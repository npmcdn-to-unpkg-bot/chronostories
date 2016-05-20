import {Component, OnInit, ViewChild} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {NotificationComponent} from "./notification.component";
import {SidebarComponent} from "./sidebar.component";
import {Configuration} from "../config/configuration";
import {AuthService} from "../services/auth.service";
import {WebStorageService} from "../services/webstorage.service";
import {AuthFormComponent} from "./auth-form.component";
import {LoggerService, DEBUG_LEVEL} from "../services/logger.service";
import {StoryComponent} from "./story.component";
import {StoryBlockService} from "../services/storyblocks.service";


@Component({
    selector: 'app-content',
    template: `
        <story 
            [userId]="userId"
            (exposeStoryblock)="setExposed($event)"
            (notify)="notify($event)"
            (storyBlockList)="updateStoryBlocks($event)"
        ></story>
        <aside [ngClass]="{visible: menuVisible}">
            <sidebar
            (startDragging)="toggleMenu(false)"
            (endDragging)="addStoryBlock($event)"
            [storyBlock]="exposedStoryBlock" [storyBlocksLength]="storyBlocks.length"></sidebar>
            <a class="user-aside" (click)="downloadPdf()">Download PDF</a>
            <a class="user-aside" *ngIf="!isLoggedIn()" (click)="showAccessForm()">Login/Signup</a>
            <a class="user-aside" *ngIf="isLoggedIn()" (click)="logOut()">Logout</a>
            <a id="close-menu" (click)="toggleMenu(false)"></a>
        </aside>
        <header><a id="burger" (click)="toggleMenu(true)"><i class="fa fa-bars" aria-hidden="true"></i></a></header>
        <auth-form 
            *ngIf="accessFormVisible" 
            (closeModal)="hideAccessForm()"
            (notify)="notify($event)"
            >
        </auth-form>
        <notification [ngClass]="{error: notification.type == 'error', success: notification.type == 'success'}"></notification>
    `,
    providers: [],
    directives: [StoryComponent, NotificationComponent, SidebarComponent, AuthFormComponent, NgClass]
})

export class AppComponent implements OnInit {
    @ViewChild(NotificationComponent) notificationComponent:NotificationComponent;
    private userId;
    public token:string = '';
    public menuVisible;
    public accessFormVisible;
    private notification;
    private exposedStoryBlock;
    private storyBlocks = [];

    constructor(
        private logger:LoggerService, 
        private configuration:Configuration,
        private webStorageService:WebStorageService,
        private storyBlockService:StoryBlockService,
        private authService:AuthService) {

        authService.authStatusChange$.subscribe(event => this.authStatusChanged(event))
    }

    ngOnInit():any {
        this.userId = this.authUser();
        this.menuVisible = false;
        this.accessFormVisible = false;
        this.notification = {
            type: null,
            message: '',
        };
    }

    setExposed(event){
        this.exposedStoryBlock = event;
    }

    updateStoryBlocks(event){
        this.logger.log(DEBUG_LEVEL.INFO, 'updateStoryBlocks', 'Storyblocks updated:', (event || []));
        this.storyBlocks = event || [];
    }

    authUser(){
        if (this.authService.isLoggedIn()) {
            return this.authService.getIdFromToken();
        } else {
            var anonymousToken = this.webStorageService.get('anonymous_token');
            if (!anonymousToken) {
                var anonymousToken = this.authService.generateAnonymousToken();
                this.webStorageService.put('anonymous_token', anonymousToken);
            }
            return this.authService.getIdFromAnonymousToken(anonymousToken);
        }
    }

    setToken(value:string){
        this.webStorageService.put('token',value);
    }

    getToken(){
        return this.webStorageService.get('token');
    }

    authStatusChanged(event){
        this.userId = this.authUser();
        this.logger.log(DEBUG_LEVEL.INFO, 'authStatusChanged', { event : event});
    }

    showAccessForm() {
        this.toggleMenu(false);
        this.logger.log(DEBUG_LEVEL.INFO, 'showAccessForm', this.authService.isLoggedIn());
        this.accessFormVisible = true;
        document.querySelector('body').classList.add('no-scroll');
    }

    hideAccessForm() {
        this.accessFormVisible = false;
        document.querySelector('body').classList.remove('no-scroll');
    }

    logOut(){
        this.authService.logout();
    }

    isLoggedIn(){
        return this.authService.isLoggedIn();
    }

    notify(notification){
        this.notification = {
            type: notification.type || null,
            message: notification.message || '',
        };
        this.notificationComponent.show(notification.message);
    }

    downloadPdf(){
        this.storyBlockService.downloadPdf(this.storyBlocks);
    }

    toggleMenu(visibility){
        this.menuVisible = visibility;
        if(visibility){
            document.querySelector('body').classList.add('no-scroll');
        }
        else {
            document.querySelector('body').classList.remove('no-scroll');
        }
    }
}
