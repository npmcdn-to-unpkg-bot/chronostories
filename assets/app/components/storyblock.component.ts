import {Component, Input, ElementRef, EventEmitter, Output, OnInit} from "angular2/core";
import {UtilsService} from "../services/utils.service";
import {AnimationBuilder} from "angular2/src/animate/animation_builder";
import {StoryBlock} from "../models/storyblock";
import {StoryBlockService} from "../services/storyblocks.service";
import {Configuration} from "../config/configuration";

@Component({
    selector: 'storyblock',
    template: `
        <div class="index"><span *ngIf="storyBlockInfo.type == 'chapter'">{{utilsService.getRomanNumeral(storyBlockInfo.blockNumber + 1)}}</span></div>
        <div class="text-container">
            <input class="title" [attr.readonly]="_exposed ? null : true" [(ngModel)]="storyBlockInfo.title" placeholder="Insert a title" />
            <textarea class="description" [attr.readonly]="_exposed ? null : true" [(ngModel)]="storyBlockInfo.description" placeholder="Start writing your story here..."></textarea>
            <div class="default-actions">
                <a (click)="edit(index, $event)" class="button inline-button primary">Edit</a>
                <a (click)="remove(index, $event)" class="button inline-button alert">Remove</a>
            </div>
            <div class="exposed-actions">
                <a (click)="save(index, $event)" class="button inline-button primary">Save</a>
                <a (click)="cancel()" class="button inline-button secondary">Cancel</a>
            </div>
        </div>
    `,
    providers: [UtilsService, StoryBlockService, Configuration],
    inputs: ['storyBlockInfo', 'index']
})

export class StoryBlockComponent implements OnInit {
    public storyBlockInfo:StoryBlock;

    public index;
    public _exposed = false;
    public _active = true;
    private _actionTimeout;
    public _selected = false;
    private _zoomLevel = 10;
    private _previousZoomLevel = 10;
    private storyBlockLocalSave:StoryBlock;

    @Output() zoomEvent:EventEmitter<any> = new EventEmitter();
    @Output() exposeEvent:EventEmitter<any> = new EventEmitter();
    @Output() removeStoryBlockEvent:EventEmitter<any> = new EventEmitter();

    constructor(private _ab:AnimationBuilder, private _e:ElementRef, private utilsService:UtilsService, public storyBlockService:StoryBlockService, private configuration:Configuration) {
    }

    @Input()
    set zoomLevel(value:number) {
        this._previousZoomLevel = (this._previousZoomLevel == undefined) ? 10 : this._previousZoomLevel;
        this._zoomLevel = (this._zoomLevel == undefined) ? 10 : this._zoomLevel;
        if (this._zoomLevel != value) {
            this._previousZoomLevel = this._zoomLevel;
            this._zoomLevel = value;
            this.zoomChanged();
        }
    }

    @Input()
    set exposedIndex(value:number){
        this._exposed = (value == this.index);
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
        // console.log('[StoryBlock #' + this.index + '] Zoom changed from ' + this._previousZoomLevel + ' to ' + this._zoomLevel);

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
        // console.log('[StoryBlock #' + this.index + '] Fading in...');
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
        if (this._active) {
            // console.log('[StoryBlock #' + this.index + '] Fading out...[' + this._zoomLevel + '<' + this.storyBlockInfo.importance + ']');
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
            top: this.configuration.zoom.offset + ((this.configuration.zoom.step + (this._previousZoomLevel * this.configuration.zoom.strength)) * this.storyBlockInfo.timePosition) + 'px'
        };

        var toStyle = {
            top: this.configuration.zoom.offset + ((this.configuration.zoom.step + (this._zoomLevel * this.configuration.zoom.strength)) * this.storyBlockInfo.timePosition) + 'px'
        };

        // console.log('[StoryBlock #' + this.index + '] Changing position from ' + (fromStyle.top) + ' to ' + (toStyle.top) + ' ...');

        if (this._zoomLevel > this.storyBlockInfo.importance) {
            // console.log('[StoryBlock #' + this.index + '] ...and fading in [' + this._zoomLevel + '>' + this.storyBlockInfo.importance + ']');
            toStyle['opacity'] = 1;
        }
        else {
            // console.log('[StoryBlock #' + this.index + '] ...and fading out');
            toStyle['opacity'] = 0;
        }

        toStyle['transition-timing-function'] = 'cubic-bezier(0.575, 0.255, 0.440, 0.985);';


        animation
            .setDuration(speed);
        animation
            .setFromStyles(fromStyle)
            .setToStyles(toStyle);


        if (!!this._actionTimeout) {
            // console.log('[StoryBlock #' + this.index + '] Animation removed');
            clearTimeout(this._actionTimeout);
        }

        var _self = this;

        this._actionTimeout = setTimeout(function () {
            animation
                .start(_self._e.nativeElement);
        }, 100);
    }

    focus() {
        var native = this._e.nativeElement;
        var container = null;
        var textarea = null;
        for (var i = 0; i < native.childNodes.length; i++) {
            if ((native.childNodes[i].className || '').indexOf("text-container") > -1) {
                container = native.childNodes[i];
                break;
            }
        }
        if (!!container) {
            for (var i = 0; i < container.childNodes.length; i++) {
                if ((container.childNodes[i].className || '').indexOf("description") > -1) {
                    textarea = container.childNodes[i];
                    break;
                }
            }
            if (!!textarea) {
                setTimeout(() => {
                    textarea.focus();
                }, 50);
            }
        }
    }

    edit(index, event) {
        console.log('Saving temporary data ', this.storyBlockInfo);
        this.storyBlockLocalSave = <StoryBlock>JSON.parse(JSON.stringify(this.storyBlockInfo));
        this.exposeEvent.emit(index);
        this.focus();
    }

    remove(index, event) {
        console.log('Should remove', index, event);
        this.storyBlockService.deleteStoryBlock(this.storyBlockInfo).subscribe(
            data => {
                console.log(data)
            },
            () => {
                console.log('Removing block index ' +this.index);
                this.removeStoryBlockEvent.emit(this.index);
            }
        );
    }

    save(index, event) {
        this.storyBlockService.saveStoryBlock(this.storyBlockInfo).subscribe(
            data => {
                this.storyBlockInfo = <StoryBlock>data;
                console.log('Saving temporary data ', this.storyBlockInfo);
                this.storyBlockLocalSave = <StoryBlock>JSON.parse(JSON.stringify(this.storyBlockInfo));
            },
            () => {
                console.log('Saved ', this.storyBlockInfo);
            }
        );
    }

    cancel() {
        this.exposeEvent.emit(-1);
        if (!!this.storyBlockLocalSave) {
            this.storyBlockInfo = <StoryBlock>JSON.parse(JSON.stringify(this.storyBlockLocalSave));
        }
        else{
            console.log('Removing block index ' +this.index);
            this.removeStoryBlockEvent.emit(this.index);
        }
    }
}