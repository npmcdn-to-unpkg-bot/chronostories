import {Component, OnInit, Input, Output, EventEmitter} from "angular2/core";
import {StoryBlockService} from "../services/storyblocks.service";
import {StoryBlock} from "../models/storyblock";
import {StoryBlockType} from "../models/storyblock-type";

@Component({
    selector:'sidebar',
    template: `
        <div class="sidebar-action" *ngIf="_index == -1">
            <a class="create-storyblock" draggable="true" (dragstart)="dragStart($event)" (dragend)="dragEnd($event)">Create storyblock</a>
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

    @Output() startDragging:EventEmitter<any> = new EventEmitter();
    @Output() endDragging:EventEmitter<any> = new EventEmitter();

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
    dragStart(e){
        var img = document.createElement("img");
        img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABGdBTUEAALGPC/xhBQAABO1JREFUWAnNmEFsFFUYx783O7PaArpgqFKtGKMhGOJJEm1FQ8IapUQkpj2YePNmjAej8eDRg9F4IMabNxMPbRQxgMZiiGKrCRyMUQlqTEApCAqrhhZ3Zuf5/d7s293Slp3FluyX7Ozb2ff+//98773vfd8Y6dBu3GdXBxerw1ZMWYzcbq3tN8b0A6PtaW1Pi5WTRuxEuqK4/68d5kInFCZv59JYskts+pw1skWZw1zjjEmMlcNigrcqo+GePGPaClr9fjxka/Z1ffpBAKOCsQ+tNWb7rYFsuMHIuh4jt1yfUZ25JHJ61srxv60cOJXKF+esjWv6CGrquSlTMC9deDKazHovfF1U0MiYLUxI/KYKeZ6hfT3GvnxPwYysD2RVPv/IP4nI+IlUXvuhZs/ONoTtLkv0wvioqS0kaUFBpT22ZON4TKemXFSPvLixYJ7dEEhvIYP4tmJlv3rgq3NWptUjeAbDU/3qsQfWGhlWD95byuBnlPrt46m8caxmq3jMmAkTRaOVXaaSjWxe5wlyYqrVKe2yEa+8NxSa+9Zk3fb+ZuXV7xL5Sackj92tU/rKplB23paNP3reylOTiffWMVMsDl4uao4gpulTiT/GM5tKgYxtCfWJRU5cFHnm60SO/Jnm0TGvz+abAnnn/lDWrxD1qMjI4US+ryiWeuoRiR5rnb6gdTRrBjF4xouZ1GnZejC+ajHg8yBggMUDjuuDwgGX42wR0fAQuylN0i9ZMwe2ZtMEwBOfJxKn+aaoBXfBZhQY+fDhUIZ0jTF92w8lbk0FYfCg330ND7G1QWEBs2aYpqenlk4M2DwYmGDDARf3PTdtJ4igR5zBjewmjDVz/t+l8YwDrF/ABBuDC064XeDVexm7RmA6EGfY2uymq13A4LQzsOGAC07Xv67BcDbJTHw2CqTwy87IEPQ2fxLn3trtyBf7n5Bw5NHIBc8798Y2TqUmvVFfYGbiHbraQ44DxBD08saZxcjy3IcDLjjhRgNamLIyAJxNGBG4E+vT6FwZLbpPY8vmBPBcnluHlVExwHgOSozj4FqZ5/LcyjsQ6gp3uQynNsbZlMfu0KiLrbmu6RciMVZTiF9nsvaVrp7Lc6MlJLnSxpwU4kog/r9vhou+2fj29/64ZOWuj+LG/cUarYcyfdBCIuFcks8vTejZpDmiJ8y85O9xuucx79smklim7LQOXvW7phArV2YpxM/tH07WfZB1YlH/+HjmrX691wLeVtPN9cQObgwtgcuB9QeZHkY+c63Mc3lutAQk5Agg7cRIrjqxqkaJoxp5+XTinVYuz42WQCuHg/xJDoyR6XVilarIts8S9+lkHH09l+emUglsb7RPl3dCQk4OTNpJWF9ugwMuOOFGA2VTQN1EqUJ1QEKOkXYut3kOOOFGA1qy+dG6CQFUB2xZcmDSzuUysOGAC07HU9fgWCnidIVPUapQHWDkwK1R2N1cgguYYGNwwQm3LyQbbqCIoxOlCuklx8C7g6GQdi6VgQUm2HDABbbnpt0QRE6rSndTN1GqUB2Q+5IDL4WnwPD5NNhwwAWnz6fnCOIHFSWlCW6kVPGiDm2L/teaYs2AwQP6MshVssrlOCGv27z56KpC0avsqlLai+qqlw1eFN9d8zqmVRTtrnlhdbkwyiZXqWTFwQBpp27dua/0NIPVcROck52+0vsPOOPlLnVY0lYAAAAASUVORK5CYII=";
        img.style.cursor = 'move';
        e.dataTransfer.setDragImage(img, 18, 18);
        this.startDragging.emit(e);
    }
    dragEnd(e){
        var iconWidth = 36;
        var asideWidth = 240;
        if(window.innerWidth >= 768 && e.x > window.innerWidth - asideWidth - iconWidth){
            return false;
        }
        this.endDragging.emit(e);
    }
}