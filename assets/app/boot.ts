///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import { HTTP_PROVIDERS }    from 'angular2/http';
import {Configuration} from "./config/configuration";
import {ExceptionHandler, provide} from "angular2/core";
import {LoggerService} from "./services/logger.service";
import {AuthService} from "./services/auth.service";
import {WebStorageService} from "./services/webstorage.service";
import {StoryBlockService} from "./services/storyblocks.service";
import {AppContentComponent} from "./components/app-content.component";

bootstrap(
    AppContentComponent,
        [
            HTTP_PROVIDERS, 
            Configuration, 
            provide(ExceptionHandler,  {useClass: LoggerService}), 
            AuthService, 
            LoggerService,
            WebStorageService,
            StoryBlockService
        ]
);
