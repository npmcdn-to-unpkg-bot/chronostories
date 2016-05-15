import {Component, ElementRef} from "angular2/core";

@Component({
    selector:'notification',
    template: `
        <div>{{ _content }}</div>
    `
})
export class NotificationComponent {
    private _timer;
    private _content;

    constructor(private _e:ElementRef){

    }

    show(content){
        if(!!this._timer){
            clearTimeout(this._timer);
        }
        this._content = content;
        this._e.nativeElement.classList.add('visible');
        this._timer = setTimeout(() => {
            this._e.nativeElement.classList.remove('visible');
        }, 3000);
    }


}