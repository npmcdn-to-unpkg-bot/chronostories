import {Component, OnInit, Output, EventEmitter} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {StoryBlockService} from "../services/storyblocks.service";
import {StoryBlock} from "../models/storyblock";
import {StoryBlockComponent} from "./storyblock.component";
import {TimelineComponent} from "./timeline.component";
import {AddButtonComponent} from "./add-button.component";
import {SidebarComponent} from "./sidebar.component";
import {AuthFormComponent} from "./auth-form.component";
import {User} from "../models/user";
// import {LocalStorage} from "angular2-localstorage/LocalStorage";

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
                    [ngClass]="{exposed: exposedIndex == i}"
                    (removeStoryBlockEvent)="removeStoryBlock($event)" 
                    (exposeEvent)="setExposed($event)" 
                    (enterHeaderEvent)="requestSelection($event)" 
                    (exitHeaderEvent)="requestDeselection($event)" 
                    class="story-block"></storyblock>
            </div>
            <div class="timeline"
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
        <aside>
            <sidebar></sidebar>
            <a class="user-aside" (click)="showAccessForm()">Login/Signup</a>
        </aside>
        <auth-form *ngIf="accessFormVisible" (closeModal)="hideAccessForm()"></auth-form>
    `,
    providers: [StoryBlockService],
    directives: [StoryBlockComponent, TimelineComponent, AddButtonComponent, SidebarComponent, AuthFormComponent, NgClass]
})

export class AppComponent implements OnInit {
    public storyBlocks:StoryBlock[];
    zoomLevel = 10;
    public selectedIndex = 0;
    public exposedIndex = -1;
    public addButton = {
        visible: false,
        top: 0
    };
    public selectedBlock:StoryBlock;
    public token:string = '';
    public accessFormVisible = false;

    constructor(private storyBlockService:StoryBlockService) {
    }

    ngOnInit():any {
        this.getStoryBlocks();
        this.zoomLevel = 10;
        this.selectedIndex = 0;
        this.exposedIndex = -1;
        this.addButton = {
            visible: false,
            top: 0
        };
        this.accessFormVisible = false;
        // this.storyBlockService.generateTestData().subscribe(
        //     err => console.error(err),
        //     () => console.log('done, loaded ' + this.storyBlocks.length + ' blocks')
        // );
    }

    getStoryBlocks() {
        this.storyBlockService.getStoryBlocks().subscribe(
            data => {
                this.storyBlocks = data;
                this.selectedBlock = this.storyBlocks[this.selectedIndex]
            },
            err => console.error(err),
            () => console.log('done, loaded ' + this.storyBlocks.length + ' blocks')
        );
    }

    removeStoryBlock(index){
        this.storyBlocks.splice(index, 1);
    }

    showAccessForm(){
        this.accessFormVisible = true;
        document.querySelector('body').classList.add('no-scroll');
    }

    hideAccessForm(){
        this.accessFormVisible = false;
        document.querySelector('body').classList.remove('no-scroll');
    }

    zoomIn(){
        if(this.zoomLevel < 10) {
            this.zoomLevel++;
        }
    }

    zoomOut(){
        if(this.zoomLevel > 0) {
            this.zoomLevel--;
        }
    }

    onMouseEnter(event){
        this.addButton = {
            visible: true,
            top: event.y
        };
    }

    onMouseLeave(event){
        this.addButton = {
            visible: false,
            top: 0
        };
    }

    onMouseMove(event){
        if(this.addButton.visible) {
            this.addButton.top = event.y;
        }
    }

    addStoryBlock(event){
        this.addButton = {
            visible: false,
            top: 0
        };
    }

    setExposed(index){
        this.exposedIndex = index;
        document.querySelector('body').classList.toggle('no-scroll');
    }

    requestSelection(block) {
        if (this.selectedIndex != block.index) {
            this.selectedIndex = block.index;
            this.selectedBlock = this.storyBlocks[this.selectedIndex];
        }
    }

    requestDeselection(block) {
        if (block.index > 0) {
            this.selectedIndex = block.index - 1;
            this.selectedBlock = this.storyBlocks[this.selectedIndex];
        }
    }
}
