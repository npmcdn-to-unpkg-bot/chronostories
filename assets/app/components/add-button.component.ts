import {Component, Input, ElementRef} from "angular2/core";

@Component({
    selector:'add-button',
    template: `
        <a><span>+</span></a>
    `,
    inputs: ['offsetY']
})
export class AddButtonComponent {
    private _offsetY;

    constructor(private _e:ElementRef){

    }

    @Input()
    set offsetY(value:number) {
        this._offsetY = value;
        this.offsetChanged(value);
    }

    offsetChanged(value) {
        this._e.nativeElement.style.top = value + 'px';
    }
}