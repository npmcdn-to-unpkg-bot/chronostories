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
import {Configuration} from "../config/configuration";
declare var pdfMake: any;

@Injectable()
export class StoryBlockService {
    private _exposedIndex = -1;
    indexChange$: Observable<number>;
    private _observer: Observer<number>;

    constructor(public http:Http, private configuration:Configuration) {
        this.indexChange$ = new Observable(observer =>
            this._observer = observer).share();
    }
    changeExposedIndex(index) {
        this._exposedIndex = index;
        this._observer.next(index);
    }
    getExposedIndex() {
        return this._exposedIndex;
    }

    getStoryBlocks(userId):Observable<StoryBlock[]> {
        return this.http.get(this.configuration.apiBasePath + '/storyblocks/'+userId)
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
            storyBlock.createdAt = storyBlock.createdAt || (new Date());
            storyBlock.lastModifiedAt = (new Date());
            return this.http.put(this.configuration.apiBasePath + '/storyblocks/' + userId + '/' + storyBlock._id, "data=" + JSON.stringify(storyBlock), options)
                .map(res => res.json());
        }
        else {
            storyBlock.createdAt = (new Date());
            storyBlock.lastModifiedAt = (new Date());
            return this.http.post(this.configuration.apiBasePath + '/storyblocks/'+userId +'/' , "data=" + JSON.stringify(storyBlock), options)
                .map(res => res.json());
        }
    }

    deleteStoryBlock(userId, storyBlock:StoryBlock):Observable<StoryBlock[]> {
        if (!!storyBlock._id) {
            return this.http.delete(this.configuration.apiBasePath + '/storyblocks/' + userId + '/' + storyBlock._id)
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

    generateTestData(userId):Observable<StoryBlock[]> {
        console.log('Creating temporary data for ' + userId);
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });

        let options = new RequestOptions({
            headers: headers
        });

        var blocks:StoryBlock[] = STORYBLOCKS;

        for(var i=0; i<blocks.length; i++){
            blocks[i].userId = userId;
            blocks[i].createdAt = (new Date());
            blocks[i].lastModifiedAt = (new Date());
        }
        
        return this.http.post(this.configuration.apiBasePath + '/storyblocks/' + userId + '/', "data=" + JSON.stringify(blocks), options).map(res => res.json());
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
                    bold: true,
                    margin: [0, 16, 0, 8]
                },
                paragraph: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 12]
                }
            }
        };

        for (var i = 0; i < storyBlocks.length; i++) {
            docDefinition.content.push(
                {
                    text: storyBlocks[i].title,
                    style: storyBlocks[i].type,
                }
            );
            docDefinition.content.push(
                storyBlocks[i].description
            );
        }

        pdfMake.createPdf(docDefinition).download();
    }

}