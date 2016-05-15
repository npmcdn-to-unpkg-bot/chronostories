import {Component, OnInit, Input} from "angular2/core";
import {StoryBlockService} from "../services/storyblocks.service";
import {StoryBlock} from "../models/storyblock";
import {StoryBlockType} from "../models/storyblock-type";

@Component({
    selector:'sidebar',
    template: `
        <div class="sidebar-action" *ngIf="_index == -1">
            <a class="create-storyblock">Create storyblock</a>
        </div>
        <div class="sidebar-action" *ngIf="_index >= 0 && !!_storyBlock">
            <div class="form-group">
                <label>Storyblock type</label>
                <div class="select-wrapper">
                    <select [(ngModel)]="_storyBlock.type">
                        <option *ngFor="#storyBlockType of storyBlockTypes" value={{storyBlockType.id}}>{{storyBlockType.name}}</option>
                    </select>
                </div>
            </div>
        </div>
    `,
    inputs: ['storyBlock']
})
export class SidebarComponent implements OnInit {
    public storyBlockTypes:StoryBlockType[];
    
    public _index: number;
    public _storyBlock;
    public _subscription: any;
    constructor(private _storyBlockService:StoryBlockService) {}
    @Input()
    set storyBlock(storyBlock){
        this._storyBlock = storyBlock;
    }
    ngOnInit() {
        this.storyBlockTypes = this._storyBlockService.getStoryBlockTypes();
        this._index = this._storyBlockService.getExposedIndex();
        this._storyBlock = null;
        this._subscription = this._storyBlockService.indexChange$.subscribe(
            index => this.selectIndex(index));
    }
    selectIndex(index: number) {
        this._index = index;
    }
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}