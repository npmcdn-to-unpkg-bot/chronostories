import {Component, OnInit, ViewChild} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {StoryBlockService} from "../services/storyblocks.service";
import {StoryBlock} from "../models/storyblock";
import {StoryBlockComponent} from "./storyblock.component";
import {TimelineComponent} from "./timeline.component";
import {AddButtonComponent} from "./add-button.component";
import {NotificationComponent} from "./notification.component";
import {SidebarComponent} from "./sidebar.component";
import {Configuration} from "../config/configuration";
import {StoryBlockType} from "../models/storyblock-type";
import {AuthService} from "../services/auth.service";
import {WebStorageService} from "../services/webstorage.service";
import {AuthFormComponent} from "./auth-form.component";


@Component({
    selector: 'app-content',
    template: `
        <main>
            <timeline class="timeline-block"></timeline>
            <div class="story-blocks">
                <storyblock *ngFor="#storyBlock of storyBlocks; #i = index" 
                    [index]="i" 
                    [storyBlockInfo]="storyBlock" 
                    [zoomLevel]="zoomLevel"
                    [exposedIndex]="exposedIndex"
                    [ngClass]="{exposed: exposedIndex == i}"
                    (removeStoryBlockEvent)="removeStoryBlock($event)" 
                    (exposeEvent)="setExposed($event)"
                    (notify)="notify($event)"
                    class="story-block {{ storyBlock.type }}"></storyblock>
            </div>
            <div class="timeline"
                (click)="addStoryBlock($event)"
                (mouseenter)="onMouseEnter($event)"
                (mouseleave)="onMouseLeave($event)"
                (mousemove)="onMouseMove($event)">
                <add-button *ngIf="addButton.visible"
                    [offsetY]="addButton.top"
                    (click)="addStoryBlock($event)"></add-button>
            </div>
            <div id="controls">
                <div id="zoom-controls">              
                    <a title="Zoom in" (click)="zoomIn()">+</a>  
                    <a title="Zoom out" (click)="zoomOut()">&ndash;</a>                
                </div>            
            </div>
        </main>
        <aside [ngClass]="{visible: menuVisible}">
            <sidebar
            (startDragging)="toggleMenu(false)"
            (endDragging)="addStoryBlock($event)"
            [storyBlock]="exposedStoryBlock"></sidebar>
            <a class="user-aside" (click)="downloadPdf()">Download PDF</a>
            <a class="user-aside" [hidden]="authService.isLoggedIn()" (click)="showAccessForm()">Login/Signup</a>
            <a class="user-aside" [hidden]="!authService.isLoggedIn()" (click)="authService.logOut()">Logout</a>
            <a id="close-menu" (click)="toggleMenu(false)"></a>
        </aside>
        <header><a id="burger" (click)="toggleMenu(true)"><i class="fa fa-bars" aria-hidden="true"></i></a></header>
        <auth-form *ngIf="accessFormVisible" (closeModal)="hideAccessForm()"></auth-form>
        <notification></notification>
    `,
    providers: [StoryBlockService, Configuration, AuthService, WebStorageService],
    directives: [StoryBlockComponent, TimelineComponent, AddButtonComponent, NotificationComponent, SidebarComponent, AuthFormComponent, NgClass]
})

export class AppComponent implements OnInit {
    @ViewChild(NotificationComponent) notificationComponent:NotificationComponent;
    public storyBlocks:StoryBlock[];
    public storyBlockTypes:StoryBlockType[];
    public storyBlockDefaultTypes:StoryBlockType[];

    public zoomLevel;
    public exposedIndex;
    public exposedStoryBlock;
    public addButton;
    public token:string = '';
    public menuVisible;
    public accessFormVisible;
    private maxIndex = 0;

    constructor(private storyBlockService:StoryBlockService, private configuration:Configuration, private webStorageService:WebStorageService, private authService:AuthService) {
    }

    ngOnInit():any {
        this.getStoryBlockTypes();
        this.getStoryBlocks();
        this.zoomLevel = 10;
        this.exposedIndex = -1;
        this.exposedStoryBlock = null;
        this.addButton = {
            visible: false,
            top: 0
        };
        this.menuVisible = false;
        this.accessFormVisible = false;
        // this.storyBlockService.generateTestData().subscribe(
        //     err => console.error(err),
        //     () => console.log('done, loaded ' + this.storyBlocks.length + ' blocks')
        // );
    }
    
    setToken(value:string){
        this.webStorageService.put('token',value);
    }    
    
    getToken(){
        return this.webStorageService.get('token');
    }

    getStoryBlockTypes() {
        this.storyBlockTypes = this.storyBlockService.getStoryBlockTypes();
        this.storyBlockDefaultTypes = this.storyBlockService.getStoryBlockDefaultTypes();
    }

    getStoryBlocks() {
        this.storyBlockService.getStoryBlocks().subscribe(
            data => {
                this.storyBlocks = data;
                this.maxIndex = 0;

                for (var i = 0; i < this.storyBlocks.length; i++) {
                    if (this.storyBlocks[i].type === 'chapter') {
                        this.maxIndex = Math.max(this.maxIndex, this.storyBlocks[i].blockId || 0);
                    }
                }
                this.recalculateStoryBlockNumbers();

            },
            err => console.error(err),
            () => console.log('done, loaded ' + this.storyBlocks.length + ' blocks', this.storyBlocks)
        );
    }

    removeStoryBlock(index) {
        this.storyBlocks.splice(index, 1);
        this.recalculateStoryBlockNumbers();
    }

    showAccessForm() {
        this.toggleMenu(false);
        this.accessFormVisible = true;
        document.querySelector('body').classList.add('no-scroll');
    }

    hideAccessForm() {
        this.accessFormVisible = false;
        document.querySelector('body').classList.remove('no-scroll');
    }

    recalculateStoryBlockNumbers() {
        console.log('Numbering before',this.storyBlocks);
        var currentTypes = {};
        for (var i = 0; i < this.storyBlockTypes.length; i++) {
            currentTypes[this.storyBlockTypes[i].id] = this.storyBlockTypes[i];
            currentTypes[this.storyBlockTypes[i].id].index = 0;
        }

        for (var i = 0; i < this.storyBlocks.length; i++) {
            var currentType = this.storyBlocks[i].type || this.storyBlockDefaultTypes[0].id;
            currentTypes[currentType] = currentTypes[currentType] || this.storyBlockDefaultTypes[0];
            this.storyBlocks[i].blockNumber = currentTypes[currentType].index || 0;

            currentTypes[currentType].index++;
            for (var j = 0; j < this.storyBlockTypes.length; j++) {
                if (this.storyBlockTypes[j].level > currentTypes[currentType].level) {
                    currentTypes[this.storyBlockTypes[j].id].index = 0;
                }
            }
        }
        console.log('Numbering after',this.storyBlocks);
    }

    zoomIn() {
        if (this.zoomLevel < 10) {
            this.zoomLevel++;
        }
    }

    zoomOut() {
        if (this.zoomLevel > 0) {
            this.zoomLevel--;
        }
    }

    onMouseEnter(event) {
        this.addButton = {
            visible: true,
            top: event.y
        };
    }

    onMouseLeave(event) {
        this.addButton = {
            visible: false,
            top: 0
        };
    }

    onMouseMove(event) {
        if (this.addButton.visible) {
            this.addButton.top = event.y;
        }
    }

    addStoryBlock(event) {
        this.addButton = {
            visible: false,
            top: 0
        };

        var zoomConversionFactor = this.configuration.zoom.step + (this.zoomLevel * this.configuration.zoom.strength);
        var positionAtZoom = ((event.pageY - this.configuration.zoom.offset) / zoomConversionFactor);
        var newStoryBlock:StoryBlock = <StoryBlock> {
            blockId: this.maxIndex + 1,
            title: '',
            description: '',
            timePosition: positionAtZoom,
            importance: 3,
            type: 'chapter'
        };
        this.maxIndex++;

        var tmpArrayPos = undefined;

        for (var i = 0; i < this.storyBlocks.length; i++) {
            if (this.storyBlocks[i].timePosition > positionAtZoom) {
                tmpArrayPos = i;
                break;
            }
        }

        this.storyBlocks.splice(tmpArrayPos, 0, newStoryBlock);

        console.log('Adding block index ' + tmpArrayPos);
        this.setExposed(tmpArrayPos);
        event.preventDefault();
        event.stopPropagation();
    }

    setExposed(index) {
        this.recalculateStoryBlockNumbers();
        this.exposedIndex = index;
        this.exposedStoryBlock = index >= 0 ? this.storyBlocks[index] : null;
        this.storyBlockService.changeExposedIndex(index);
        document.querySelector('body').classList.toggle('no-scroll');
    }

    save() {
        for (var i = 0; i < this.storyBlocks.length; i++) {
            this.storyBlockService.saveStoryBlock(this.storyBlocks[i]).subscribe();
        }
    }

    notify(notification){
        this.notificationComponent.show(notification);
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
