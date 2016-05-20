import {Injectable } from "angular2/core";
import {Http } from 'angular2/http';
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/share';
import {Configuration} from "../config/configuration";
import {LoggerService, DEBUG_LEVEL} from "./logger.service";
import {News} from "../models/news";

@Injectable()
export class NewsService {
    constructor(private logger:LoggerService,
                public http:Http,
                private configuration:Configuration) {
    }

    getNews():Observable<News[]> {
        return this.http.get(this.configuration.apiBasePath + '/news/')
            .map(res => res.json())
            .catch(this.logger.errorCatcher());
    }
}