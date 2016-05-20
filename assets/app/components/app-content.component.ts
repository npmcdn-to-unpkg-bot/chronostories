import {Component, OnInit} from 'angular2/core';
import {StoryBoardComponent} from "./story-board.component";
import {NewsService} from "../services/news.service";


@Component({
    selector: 'app-content',
    template: `
        <story-board></story-board>
    `,
    providers: [NewsService],
    directives: [StoryBoardComponent]
})

export class AppContentComponent implements OnInit {
    constructor(
        private newsService:NewsService
    ){
    }
    
    ngOnInit():any {
        this.newsService.getNews().subscribe(data=>{console.log(data)})
    }
}
