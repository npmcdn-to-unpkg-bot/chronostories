import {Component, OnInit} from 'angular2/core';
import {StoryBoardComponent} from "./story-board.component";
import {NewsService} from "../services/news.service";
import {DEBUG_LEVEL, LoggerService} from "../services/logger.service";


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
        private newsService:NewsService,
        private logger:LoggerService
    ) {
    }

    ngOnInit():any {
    //     this.newsService.getNews().subscribe(data=> {
    //         this.logger.log(DEBUG_LEVEL.INFO, 'getNews', data);
    //         console.log(data)
    //     },
    //     err => this.logger.log(DEBUG_LEVEL.ERROR, 'getNews', 'Error',err),
    //         () => this.logger.log(DEBUG_LEVEL.INFO, 'getNews', 'Get news completed')
    // )
    }
}
