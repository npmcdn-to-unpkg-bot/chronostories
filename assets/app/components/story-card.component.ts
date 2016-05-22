import {Component, OnInit, EventEmitter, Output} from 'angular2/core';
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
import {StoryService} from "../services/story.service";


@Component({
    selector: 'story-card',
    template: `
        <div class="story-container" ngClass="material-shadow">
          <section class="story" id="story">
            <header>
              <h2>{{story.title}}</h2>
              <h4>Story card</h4>
            </header>
            <div class="story-description">{{story.description}}</div>
            <footer class="default-actions">
                <a class="button inline-button primary" (click)="open()">OPEN</a>
                <a class="button inline-button alert" (click)="remove()">DELETE</a>
            </footer>
          </section>
        </div>
    `,
    providers: [StoryService],
    directives: [],
    inputs:['story','index']
})

export class StoryCardComponent implements OnInit {
    story:Story;
    index;

    @Output() openStory:EventEmitter<any> = new EventEmitter();
    @Output() removeStory:EventEmitter<any> = new EventEmitter();

    constructor(private storyService:StoryService,
                private logger:LoggerService) {

    }

    ngOnInit():any {

    }

    open(){
        this.openStory.emit(this.index);
    }

    remove(){
        this.removeStory.emit(this.index);
    }
}
