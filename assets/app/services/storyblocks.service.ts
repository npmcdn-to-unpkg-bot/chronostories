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

    getStoryBlocks() : Observable<StoryBlock[]> {
        return this.http.get('/storyblocks/')
            .map(res => res.json());
    }

    saveStoryBlock(storyBlock:StoryBlock) : Observable<StoryBlock[]> {
        if(!!storyBlock._id){
            return this.http.put('/storyblocks/'+storyBlock._id, JSON.stringify(storyBlock))
                .map(res => res.json());
        }
        else {
            return this.http.post('/storyblocks/', JSON.stringify(storyBlock))
                .map(res => res.json());
        }
    }

    deleteStoryBlock(storyBlock:StoryBlock) : Observable<StoryBlock[]> {
        if(!!storyBlock._id){
            return this.http.delete('/storyblocks/'+storyBlock._id)
                .map(res => res.json());
        }
        return null;
    }

    generateTestData() {
        var mockData = STORYBLOCKS;

        for(var i=0;  i< mockData.length; i++) {
            this.http.post('/storyblocks/', JSON.stringify(mockData[i]));
        }
    }
}