///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./components/app-content.component";
import { HTTP_PROVIDERS }    from 'angular2/http';
import {Configuration} from "./config/configuration";
import {ExceptionHandler, provide} from "angular2/core";
import {LoggerService} from "./services/logger.service";

bootstrap(AppComponent, [HTTP_PROVIDERS, Configuration, provide(ExceptionHandler,  {useClass: LoggerService})]);
