import {Injectable, Output, EventEmitter} from "angular2/core";
import {Http, Headers, RequestOptions} from 'angular2/http';
import {StoryBlock} from "../models/storyblock";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/share';
import {Observer} from 'rxjs/Observer';
import {STORYBLOCKS} from "../mock/mock-storyblocks";
import {StoryBlockType} from "../models/storyblock-type";
import {STORYBLOCK_TYPES} from "../mock/mock-storyblock-types";
import {Configuration} from "../config/configuration";
import {LoggerService, DEBUG_LEVEL} from "./logger.service";
import {Story} from "../models/story";


@Injectable()
export class StoryService {

    constructor(private logger:LoggerService,
                public http:Http,
                private configuration:Configuration) {
    }

    getStories(userId):Observable<Story[]> {
        return this.http.get(this.configuration.apiBasePath + '/story/' + userId)
            .map(res => res.json())
            .catch(this.logger.errorCatcher());
    }

    saveStory(userId, story:Story):Observable<Story> {
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });

        let options = new RequestOptions({
            headers: headers
        });
        story.userId = userId;

        if (!!story._id) {
            story.createdAt = story.createdAt || (new Date());
            story.lastModifiedAt = (new Date());
            return this.http.put(this.configuration.apiBasePath + '/story/' + userId + '/'+ story._id , "data=" + JSON.stringify(story), options)
                .map(res => res.json())
                .catch(this.logger.errorCatcher());
        }
        else {
            story.createdAt = (new Date());
            story.lastModifiedAt = (new Date());
            return this.http.post(this.configuration.apiBasePath + '/story/' + userId + '/', "data=" + JSON.stringify(story), options)
                .map(res => res.json())
                .catch(this.logger.errorCatcher());
        }
    }

    deleteStory(userId, story:Story):Observable<Story[]> {
        if (!!story._id) {
            return this.http.delete(this.configuration.apiBasePath + '/story/' + userId + '/'+ story._id)
                .map(res => res.json())
                .catch(this.logger.errorCatcher());
        }
        return null;
    }
}