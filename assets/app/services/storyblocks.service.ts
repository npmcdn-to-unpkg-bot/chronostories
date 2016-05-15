import {Injectable} from "angular2/core";
import {Http, Headers, RequestOptions} from 'angular2/http';
import {StoryBlock} from "../models/storyblock";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {STORYBLOCKS} from "../mock/mock-storyblocks";
import {StoryBlockType} from "../models/storyblock-type";
import {STORYBLOCK_TYPES} from "../mock/mock-storyblock-types";

@Injectable()
export class StoryBlockService {

    constructor(public http:Http) {

    }

    getStoryBlocks():Observable<StoryBlock[]> {
        return this.http.get('/storyblocks/')
            .map(res => res.json());
    }

    saveStoryBlock(storyBlock:StoryBlock):Observable<StoryBlock> {
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });

        let options = new RequestOptions({
            headers: headers
        });

        if (!!storyBlock._id) {
            return this.http.put('/storyblocks/' + storyBlock._id, "data=" + JSON.stringify(storyBlock), options)
                .map(res => res.json());
        }
        else {
            return this.http.post('/storyblocks/', "data=" + JSON.stringify(storyBlock), options)
                .map(res => res.json());
        }
    }

    deleteStoryBlock(storyBlock:StoryBlock):Observable<StoryBlock[]> {
        if (!!storyBlock._id) {
            return this.http.delete('/storyblocks/' + storyBlock._id)
                .map(res => res.json());
        }
        return null;
    }
    
    getStoryBlockTypes():StoryBlockType[]{
        return STORYBLOCK_TYPES;
    }    
    getStoryBlockDefaultTypes():StoryBlockType[]{
        return STORYBLOCK_TYPES;
    }

    generateTestData() {
        console.log('Creating temporary data');
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });

        let options = new RequestOptions({
            headers: headers
        });
        this.http.post('/storyblocks/', "data=" + JSON.stringify(STORYBLOCKS), options).map(res => res.text()).subscribe();
    }
}