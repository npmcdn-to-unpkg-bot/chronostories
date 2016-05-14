import {Component, Input, ElementRef, EventEmitter, Output, OnInit} from "angular2/core";
import {UtilsService} from "../services/utils.service";
import {AnimationBuilder} from "angular2/src/animate/animation_builder";
import {StoryBlock} from "../models/storyblock";
import {StoryBlockService} from "../services/storyblocks.service";

@Component({
    selector: 'storyblock',
    template: `
        <div class="index" (mousewheel)="zoom()" (DOMMouseScroll)="zoom()"><span>{{utilsService.getRomanNumeral(index + 1)}}</span></div>
        <div class="text-container">
            <div class="title"><span [hidden]="!_active" >A</span><span [hidden]="!_selected" >S</span>{{storyBlockInfo.title}}</div>
            <div class="description">{{storyBlockInfo.description}}</div>
            <div class="actions">
                <a (click)="edit(index, $event)" class="button inline-button primary">Edit</a>
                <a (click)="remove(index, $event)" class="button inline-button alert">Remove</a>
            </div>
        </div>
    `,
    providers: [UtilsService, StoryBlockService],
    inputs: ['storyBlockInfo', 'index']
})

export class StoryBlockComponent implements OnInit {
    public storyBlockInfo:StoryBlock;
    public index;
    public _active = true;
    private _actionTimeout;
    public _selected = false;
    private _zoomLevel = 10;
    private _previousZoomLevel = 10;
    private _zoomStrength = 5;
    private _zoomOffset = 250;
    private _zoomStep = 85;
    private _self;

    @Output() zoomEvent:EventEmitter<any> = new EventEmitter();

    @Output() enterHeaderEvent:EventEmitter<any> = new EventEmitter();
    @Output() exitHeaderEvent:EventEmitter<any> = new EventEmitter();

    constructor(private _ab:AnimationBuilder, private _e:ElementRef, private utilsService:UtilsService, public storyBlockService: StoryBlockService) {

    }

    @Input()
    set zoomLevel(value:number) {
        this._previousZoomLevel = (this._previousZoomLevel == undefined)? 10:this._previousZoomLevel;
        this._zoomLevel = (this._zoomLevel == undefined)? 10:this._zoomLevel;
        if (this._zoomLevel != value) {
            this._previousZoomLevel = this._zoomLevel;
            this._zoomLevel = value;
            this.zoomChanged();
        }
    }

    ngOnInit():any {
        this.changePositionOnZoom(1000);
    }

    zoom(e) {
        var e = window.event || e; // old IE support
        this.zoomEvent.emit(e);
        e.preventDefault();
        e.stopPropagation();
    }

    zoomChanged() {
        console.log('[StoryBlock #' + this.index + '] Zoom changed from ' + this._previousZoomLevel + ' to ' + this._zoomLevel);

        if (this._zoomLevel < this.storyBlockInfo.importance) {
            this.fadeOut(1000);
            this._active = false;
        }
        else {
            this.changePositionOnZoom(1000);
            this._active = true;
        }
    }

    fadeIn(speed:number) {
        console.log('[StoryBlock #' + this.index + '] Fading in...');
        let animation = this._ab.css();

        var fromStyle = {};
        var toStyle = {};

        fromStyle['display'] = 'flex';
        fromStyle['transition-timing-function'] = 'cubic-bezier(0.575, 0.255, 0.440, 0.985);';
        toStyle['opacity'] = 1;


        animation
            .setDuration(speed);
        animation
            .setFromStyles(fromStyle)
            .setToStyles(toStyle);


        if (!!this._actionTimeout) {
            clearTimeout(this._actionTimeout);
        }

        var _self = this;

        this._actionTimeout = setTimeout(function () {
            animation
                .start(_self._e.nativeElement);
        }, 100);
    }

    fadeOut(speed:number) {
        if(this._active) {
            console.log('[StoryBlock #' + this.index + '] Fading out...['+this._zoomLevel +'<'+ this.storyBlockInfo.importance+']');
            let animation = this._ab.css();

            var fromStyle = {};
            var toStyle = {};


            toStyle['transition-timing-function'] = 'cubic-bezier(0.575, 0.255, 0.440, 0.985);';
            toStyle['opacity'] = 0;


            animation
                .setDuration(speed);
            animation
                .setFromStyles(fromStyle)
                .setToStyles(toStyle);


            if (!!this._actionTimeout) {
                console.log('[StoryBlock #' + this.index + '] Animation removed');
                clearTimeout(this._actionTimeout);
            }

            var _self = this;

            this._actionTimeout = setTimeout(function () {
                animation
                    .start(_self._e.nativeElement);
            }, 100);
        }
    }

    changePositionOnZoom(speed) {
        let animation = this._ab.css();
        var fromStyle = {
            top: this._zoomOffset + ((this._zoomStep + (this._previousZoomLevel * this._zoomStrength)) * this.storyBlockInfo.timePosition) + 'px'
        };

        var toStyle = {
            top: this._zoomOffset + ((this._zoomStep + (this._zoomLevel * this._zoomStrength)) * this.storyBlockInfo.timePosition) + 'px'
        };

        console.log('[StoryBlock #' + this.index + '] Changing position from '+(fromStyle.top)+' to '+(toStyle.top)+' ...');

        if (this._zoomLevel > this.storyBlockInfo.importance) {
            console.log('[StoryBlock #' + this.index + '] ...and fading in ['+this._zoomLevel+'>'+this.storyBlockInfo.importance+']');
            toStyle['opacity'] = 1;
        }
        else{
            console.log('[StoryBlock #' + this.index + '] ...and fading out');
            toStyle['opacity'] = 0;
        }

        toStyle['transition-timing-function'] = 'cubic-bezier(0.575, 0.255, 0.440, 0.985);';


        animation
            .setDuration(speed);
        animation
            .setFromStyles(fromStyle)
            .setToStyles(toStyle);


        if (!!this._actionTimeout) {
            console.log('[StoryBlock #' + this.index + '] Animation removed');
            clearTimeout(this._actionTimeout);
        }

        var _self = this;

        this._actionTimeout = setTimeout(function () {
            animation
                .start(_self._e.nativeElement);
        }, 100);
    }

    edit(index, event){
        console.log('Should edit', index, event);
        let animation = this._ab.css();

        var toStyle = {
            position: 'fixed',
            top: '0px',
            left: '0px',
            right: '240px',
            bottom: '0px',
            width: 'auto'
        };

        animation
            .setDuration(100);
        animation
            .setToStyles(toStyle);

        if (!!this._actionTimeout) {
            console.log('[StoryBlock #' + this.index + '] Animation removed');
            clearTimeout(this._actionTimeout);
        }

        var _self = this;

        this._actionTimeout = setTimeout(function () {
            animation
                .start(_self._e.nativeElement);
        }, 100);
    }

    remove(index, event){
        this.storyBlockService.deleteStoryBlock(this.storyBlockInfo).subscribe(
            data => {
                console.log(data)
            },
            err => console.error(err),
            () => console.log('done')
        );
        console.log('Should remove', index, event);
    }
}