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
import {StoryCardComponent} from "./story-card.component";


@Component({
    selector: 'story-list',
    template: `
        <main>
            <story-card 
            *ngFor="#story of stories; #i = index"
                [story]="story"
                [index]="i"
                (openStory)="openStory($event)"
                (removeStory)="removeStory($event)"
            ></story-card>
            <div class="add-story-card">
                <div class="story-container" ngClass="material-shadow">
                    <section class="story" id="story">
                        <header>
                          <h2>Add a new story</h2>
                          <h4>Story card</h4>
                        </header>
                        <div class="story-add"><a (click)="addStory()">+</a></div>
                        <footer></footer>
                    </section>
                </div>
            </div>
        </main>
    `,
    providers: [StoryService],
    directives: [StoryCardComponent],
    inputs: ['userId']
})

export class StoryListComponent implements OnInit {
    private stories:Story[];
    private userId;
    @Output() loadStory:EventEmitter<any> = new EventEmitter();

    constructor(private storyService:StoryService,
                private logger:LoggerService) {

    }

    ngOnInit():any {
        this.stories = [];
        this.getStories(this.userId);
    }

    getStories(userId) {
        this.storyService.getStories(userId).subscribe(
            data => {
                this.stories = data;
            },
            err => console.error(err),
            () => {
                this.logger.log(DEBUG_LEVEL.INFO, 'getStories', 'Loaded ' + this.stories.length + ' stories', this.stories)
            }
        );
    }
    
    addStory(){
        var story:Story = <Story>{
            title:'Untitled',
            description:'Description',
            loaded:false
        };

        this.storyService.saveStory(this.userId, story).subscribe(
            data => {
                this.stories.push(<Story>data);
            },
            err => console.error(err),
            () => {
                this.logger.log(DEBUG_LEVEL.INFO, 'addStory', 'Created a new story', this.stories)
            }
        );
    }

    openStory(index){
        this.loadStory.emit(this.stories[index]);
    }

    removeStory(index){
        this.storyService.deleteStory(this.userId, this.stories[index]).subscribe(
            data => {
                this.logger.log(DEBUG_LEVEL.INFO, 'removeStory', 'The story has been removed', data)
            },
            err => console.error(err),
            () => {
                this.stories.splice(index, 1);
            }
        );
    }
}
