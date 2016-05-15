import {Injectable} from "angular2/core";
import {Http, Headers, RequestOptions} from 'angular2/http';
import {StoryBlock} from "../models/storyblock";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/share';
import {Observer} from 'rxjs/Observer';
import {STORYBLOCKS} from "../mock/mock-storyblocks";
import {StoryBlockType} from "../models/storyblock-type";
import {STORYBLOCK_TYPES} from "../mock/mock-storyblock-types";
declare var pdfMake: any;

@Injectable()
export class StoryBlockService {
    private _exposedIndex = -1;
    indexChange$: Observable<number>;
    private _observer: Observer<number>;
    constructor(public http:Http) {
        this.indexChange$ = new Observable(observer =>
            this._observer = observer).share();
        // share() allows multiple subscribers
    }
    changeExposedIndex(index) {
        this._exposedIndex = index;
        this._observer.next(index);
    }
    getExposedIndex() {
        return this._exposedIndex;
    }

    getStoryBlocks(userId):Observable<StoryBlock[]> {
        return this.http.get('/storyblocks/'+userId)
            .map(res => res.json());
    }

    saveStoryBlock(userId, storyBlock:StoryBlock):Observable<StoryBlock> {
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });

        let options = new RequestOptions({
            headers: headers
        });

        if (!!storyBlock._id) {
            return this.http.put('/storyblocks/' + userId + '/' + storyBlock._id, "data=" + JSON.stringify(storyBlock), options)
                .map(res => res.json());
        }
        else {
            return this.http.post('/storyblocks/'+userId +'/' , "data=" + JSON.stringify(storyBlock), options)
                .map(res => res.json());
        }
    }

    deleteStoryBlock(userId, storyBlock:StoryBlock):Observable<StoryBlock[]> {
        if (!!storyBlock._id) {
            return this.http.delete('/storyblocks/' + userId + '/' + storyBlock._id)
                .map(res => res.json());
        }
        return null;
    }

    getStoryBlockTypes():StoryBlockType[] {
        return STORYBLOCK_TYPES;
    }

    getStoryBlockDefaultTypes():StoryBlockType[] {
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

    downloadPdf(storyBlocks:StoryBlock[]) {
        function compare(a:StoryBlock, b:StoryBlock) {
            if (a.timePosition < b.timePosition)
                return -1;
            else if (a.timePosition > b.timePosition)
                return 1;
            else
                return 0;
        }

        storyBlocks.sort(compare);


        var docDefinition = {
            content: [],

            styles: {
                chapter: {
                    fontSize: 22,
                    bold: true
                },
                paragraph: {
                    fontSize: 18,
                    bold: true
                }
            }
        };

        for (var i = 0; i < storyBlocks.length; i++) {
            docDefinition.content.push(
                {
                    text: storyBlocks[i].title,
                    style: storyBlocks[i].type
                }
            );
            docDefinition.content.push(
                storyBlocks[i].description
            );
        }

        pdfMake.createPdf(docDefinition).download();
    }

}