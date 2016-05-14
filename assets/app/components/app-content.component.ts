import {Component, OnInit, Output, EventEmitter} from 'angular2/core';
import {StoryBlockService} from "../services/storyblocks.service";
import {StoryBlock} from "../models/storyblock";
import {StoryBlockComponent} from "./storyblock.component";
import {TimelineComponent} from "./timeline.component";
// import {LocalStorage} from "angular2-localstorage/LocalStorage";

@Component({
    selector: 'app-content',
    template: `
        <main>
            <timeline class="timeline-block"></timeline>
            <div (document:scroll)="onScroll($event)" class="story-blocks">
                <storyblock *ngFor="#storyBlock of storyBlocks; #i = index" 
                    [index]="i" 
                    [storyBlockInfo]="storyBlock" 
                    [zoomLevel]="zoomLevel" 
                    (zoomEvent)="onMouseWheel($event)" 
                    (enterHeaderEvent)="requestSelection($event)" 
                    (exitHeaderEvent)="requestDeselection($event)" 
                    class="story-block"></storyblock>
            </div>
            <div (mousewheel)="onMouseWheel()" (DOMMouseScroll)="onMouseWheel()" class="timeline"></div>
        </main>
        <aside>
            Sidebar
        </aside>
    `,
    providers: [StoryBlockService],
    directives: [StoryBlockComponent, TimelineComponent]
})

export class AppComponent implements OnInit {
    public storyBlocks:StoryBlock[];
    @Output() scrollWheel:EventEmitter<any> = new EventEmitter();
    zoomLevel = 10;
    public selectedIndex = 0;
    scrollValue = document.body.scrollTop;
    public selectedBlock:StoryBlock;
    public token:string = '';


    constructor(private storyBlockService:StoryBlockService) {
    }

    ngOnInit():any {
        this.getStoryBlocks();
        this.zoomLevel = 10;
        this.selectedIndex = 0;
        this.scrollValue = document.body.scrollTop;
    }

    getStoryBlocks() {
        this.storyBlockService.getStoryBlocks().subscribe(
            data => {
                this.storyBlocks = data;
                this.selectedBlock = this.storyBlocks[this.selectedIndex]
            },
            err => console.error(err),
            () => console.log('done, loaded '+this.storyBlocks.length +' blocks')
        );

    }

    onMouseWheel(e) {
        var e = window.event || e; // old IE support
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        console.log('Zoomed, old zoomLevel is ' + this.zoomLevel + ' and delta is ' + delta);
        if ((this.zoomLevel > 0 && delta < 0) || (this.zoomLevel < 10 && delta > 0)) {
            this.zoomLevel += (delta * 2);
        }
        e.preventDefault();
        e.stopPropagation();
    }

    onScroll(e) {
        this.scrollValue = document.body.scrollTop;
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
