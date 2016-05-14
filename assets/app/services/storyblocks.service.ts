import {Injectable} from "angular2/core";
import {Http, Headers} from 'angular2/http';
import {StoryBlock} from "../models/storyblock";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {STORYBLOCKS} from "../mock/mock-storyblocks";

@Injectable()
export class StoryBlockService{

    constructor(public http:Http) {

    }

    getStoryBlocks() : Observable<Object[]> {
        return Observable.of(STORYBLOCKS);
    }
    
    saveStoryBlock(storyBlock:StoryBlock) : Observable<StoryBlock[]> {
        //TODO
        return  null;
    }

    deleteStoryBlock(storyBlock:StoryBlock) : Observable<StoryBlock[]> {

        //TODO
        return  null;
    }


}