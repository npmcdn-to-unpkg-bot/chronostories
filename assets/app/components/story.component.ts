import {Component, OnInit, EventEmitter, Output, OnChanges, SimpleChange} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {StoryBlockService} from "../services/storyblocks.service";
import {StoryBlock} from "../models/storyblock";
import {StoryBlockComponent} from "./storyblock.component";
import {TimelineComponent} from "./timeline.component";
import {AddButtonComponent} from "./add-button.component";
import {Configuration} from "../config/configuration";
import {StoryBlockType} from "../models/storyblock-type";
import {AuthService} from "../services/auth.service";
import {WebStorageService} from "../services/webstorage.service";
import {LoggerService, DEBUG_LEVEL} from "../services/logger.service";
import {Story} from "../models/story";


@Component({
    selector: 'story',
    template: `
            <main [hidden]="!hasLoaded">
                <timeline class="timeline-block"></timeline>
                <div class="story-blocks">
                    <storyblock *ngFor="#storyBlock of storyBlocks; #i = index" 
                        [index]="i" 
                        [storyBlockInfo]="storyBlock" 
                        [zoomLevel]="zoomLevel"
                        [userId]="userId"
                        [story]="story"
                        (modified)="modified=true"
                        (loaded)="storyBlockLoaded($event)"
                        [exposedIndex]="exposedIndex"
                        [ngClass]="{exposed: exposedIndex == i}"
                        (removeStoryBlockEvent)="removeStoryBlock($event)" 
                        (exposeEvent)="setExposed($event)"
                        (notify)="notifyMsg($event)"
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
    `,
    providers: [],
    directives: [StoryBlockComponent, TimelineComponent, AddButtonComponent, NgClass],
    inputs: ['userId', 'story']
})

export class StoryComponent implements OnInit, OnChanges {
    public storyBlocks:StoryBlock[];
    public storyBlockTypes:StoryBlockType[];
    public storyBlockDefaultTypes:StoryBlockType[];
    public zoomLevel;
    public exposedIndex;
    public exposedStoryBlock;
    public addButton;
    public token:string = '';
    public menuVisible;
    public userId;
    public story:Story;
    public accessFormVisible;
    private maxIndex = 0;
    private notification;
    private storyBlocksLoaded;
    private modified = false;
    private hasLoaded=false;

    @Output() notify:EventEmitter<any> = new EventEmitter();
    @Output() exposeStoryBlock:EventEmitter<any> = new EventEmitter();
    @Output() storyBlockList:EventEmitter<any> = new EventEmitter();
    @Output() loaded:EventEmitter<any> = new EventEmitter();

    constructor(private logger:LoggerService,
                private storyBlockService:StoryBlockService,
                private configuration:Configuration,
                private webStorageService:WebStorageService,
                private authService:AuthService) {

        authService.authStatusChange$.subscribe(event => this.authStatusChanged(event));
        storyBlockService.addRequest$.subscribe(event => this.addStoryBlock(event));
    }

    ngOnInit():any {
        this.storyBlocks = [];
        this.storyBlocksLoaded = 0;
        this.zoomLevel = 4;
        this.exposedIndex = -1;
        this.exposedStoryBlock = null;
        this.modified=false;
        this.addButton = {
            visible: false,
            top: 0
        };

        this.menuVisible = false;
        this.accessFormVisible = false;
        this.notification = {
            type: null,
            message: '',
        };
        if(!!this.story && !!this.story._id) {
            this.getStoryBlockTypes();
            this.getStoryBlocks(this.userId);
        }
        else{
            this.modified=true;
        }
        this.checkIfLoadingIsComplete()
    }

    ngOnChanges(changes:{[propertyName: string]: SimpleChange}):any {
        for(let propName in changes){
            if(propName === 'story'){
                console.log('Changed story', changes[propName]);
                this.ngOnInit();
            }
        }
    }

    authUser() {
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

    authStatusChanged(event) {
        this.refreshBlockList();
    }

    refreshBlockList() {
        this.userId = this.authUser();
        this.getStoryBlocks(this.userId);
    }

    storyBlockLoaded($event){
        this.storyBlocksLoaded = this.storyBlocksLoaded+1;
        this.checkIfLoadingIsComplete()
    }

    checkIfLoadingIsComplete(){
        this.hasLoaded = this.storyBlocks.length === this.storyBlocksLoaded && this.modified;
        this.logger.log(DEBUG_LEVEL.INFO, 'checkIfLoadingIsComplete', 'Checking if all the blocks are loaded', this.storyBlocks.length, this.storyBlocksLoaded);
        if(this.hasLoaded){
            this.loaded.emit(this.storyBlockList);
        }
    }

    getStoryBlockTypes() {
        this.storyBlockTypes = this.storyBlockService.getStoryBlockTypes();
        this.storyBlockDefaultTypes = this.storyBlockService.getStoryBlockDefaultTypes();
    }

    getStoryBlocks(userId) {
        this.storyBlockService.getStoryBlocks(userId, this.story._id).subscribe(
            data => {
                this.storyBlocks = data;
                this.maxIndex = 0;

                for (var i = 0; i < this.storyBlocks.length; i++) {
                    if (this.storyBlocks[i].type === 'chapter') {
                        this.maxIndex = Math.max(this.maxIndex, this.storyBlocks[i].blockId || 0);
                    }
                }
                if (!this.modified && (!this.storyBlocks || this.storyBlocks.length == 0)) {
                    this.logger.log(DEBUG_LEVEL.INFO, 'getStoryBlocks', 'No blocks received!');
                    this.storyBlockService.generateTestData(this.userId, this.story._id).subscribe(
                        saveDefaultBlocks => {
                            this.storyBlocks = saveDefaultBlocks;
                            this.recalculateStoryBlockNumbers();
                            this.storyBlockList.emit(this.storyBlocks);
                        },
                        err => this.logger.log(DEBUG_LEVEL.ERROR, 'getStoryBlocks', 'Error', err),
                        () => {
                            this.logger.log(DEBUG_LEVEL.INFO, 'getStoryBlocks', 'Loaded ' + this.storyBlocks.length + ' default blocks', this.storyBlocks);
                            this.modified = true;
                        }
                    );
                }
                else {
                    this.storyBlockList.emit(this.storyBlocks);
                    this.recalculateStoryBlockNumbers();
                }

            },
            err => {
                this.logger.log(DEBUG_LEVEL.ERROR, 'getStoryBlocks', 'Error', err)
            },
            () => {
                this.logger.log(DEBUG_LEVEL.INFO, 'getStoryBlocks', 'Loaded ' + this.storyBlocks.length + ' blocks', this.storyBlocks)
                this.modified = true;
            }
        );
    }

    removeStoryBlock(index) {
        if(this.storyBlocks[index].loaded){
            this.storyBlocksLoaded--;
        }
        this.storyBlocks.splice(index, 1);
        this.storyBlockList.emit(this.storyBlocks);
        this.recalculateStoryBlockNumbers();
    }

    recalculateStoryBlockNumbers() {
        this.logger.log(DEBUG_LEVEL.INFO, 'recalculateStoryBlockNumbers', 'Sorting blocks: before', this.storyBlocks);
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
        this.logger.log(DEBUG_LEVEL.INFO, 'recalculateStoryBlockNumbers', 'Sorting blocks: after', this.storyBlocks);
    }

    zoomIn() {
        if (this.zoomLevel < 10) {
            this.zoomLevel++;
        }
        else {
            this.notifyMsg({
                type: 'message',
                message: 'Max zoom reached'
            });
        }
    }

    zoomOut() {
        if (this.zoomLevel > 0) {
            this.zoomLevel--;
        }
        else {
            this.notifyMsg({
                type: 'message',
                message: 'Minimum zoom reached'
            });
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

        var zoomConversionFactor = this.configuration.zoom.step + Math.exp(this.zoomLevel * this.configuration.zoom.strength);

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

        var tmpArrayPos = 0;

        for (var i = 0; i < this.storyBlocks.length; i++) {
            if (this.storyBlocks[i].timePosition > positionAtZoom) {
                tmpArrayPos = i;
                break;
            }
        }

        this.storyBlocks.splice(tmpArrayPos, 0, newStoryBlock);

        this.logger.log(DEBUG_LEVEL.INFO, 'addStoryBlock', 'Adding block index ' + tmpArrayPos);
        this.setExposed(tmpArrayPos);


        event.preventDefault();
        event.stopPropagation();
        this.storyBlockList.emit(this.storyBlocks);
    }

    setExposed(index) {
        this.logger.log(DEBUG_LEVEL.INFO, 'setExposed', 'Setting block ' + index + ' exposed');
        this.recalculateStoryBlockNumbers();
        this.exposedIndex = index;
        this.exposedStoryBlock = index >= 0 ? this.storyBlocks[index] : null;
        this.storyBlockService.changeExposedIndex(index);
        document.querySelector('body').classList.toggle('no-scroll');
        this.exposeStoryBlock.emit(this.exposedStoryBlock);
        this.storyBlockList.emit(this.storyBlocks);
    }

    save() {
        for (var i = 0; i < this.storyBlocks.length; i++) {
            this.storyBlockService.saveStoryBlock(this.userId, this.story._id, this.storyBlocks[i]).subscribe();
        }
    }

    notifyMsg(notification) {
        this.notify.emit(notification);
    }

    toggleMenu(visibility) {
        this.menuVisible = visibility;
        if (visibility) {
            document.querySelector('body').classList.add('no-scroll');
        }
        else {
            document.querySelector('body').classList.remove('no-scroll');
        }
    }
}
