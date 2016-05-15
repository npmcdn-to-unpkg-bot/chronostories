import {Component, ElementRef} from "angular2/core";

@Component({
    selector:'notification',
    template: `
        <div [ngClass]="{error: _error, success: _success}">{{ _content }}</div>
    `
})
export class NotificationComponent {
    private _timer;
    private _content;
    private _error = false;
    private _success = false;

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

    success(content){
        this._error = false;
        this._success = true;
        this.show(content)
    }

    error(content){
        this._error = true;
        this._success = false;
        this.show(content)
    }

    message(content){
        this._error = false;
        this._success = false;
        this.show(content)
    }
}
