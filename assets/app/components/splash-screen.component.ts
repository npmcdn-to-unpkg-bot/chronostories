import {Component, OnInit} from 'angular2/core';
import {DEBUG_LEVEL, LoggerService} from "../services/logger.service";


@Component({
    selector: 'splash-screen',
    template: `
        <div>
            <div class="loader">                
                <div class="logo"></div>
                <div class="uil-ripple-css">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    `,
    providers: [],
    directives: []
})

export class SplashScreenComponent implements OnInit {
    constructor(
        private logger:LoggerService
    ) {
    }

    ngOnInit():any {

    }
}
