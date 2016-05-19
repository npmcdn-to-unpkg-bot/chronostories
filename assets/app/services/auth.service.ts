import {Injectable, forwardRef, Inject, EventEmitter, Output} from "angular2/core";
import {Http, Headers, RequestOptions} from 'angular2/http';
import {JwtToken} from "../models/jwtToken";
import {Observable} from "rxjs/Observable";
import {User} from "../models/user";
import {WebStorageService} from "./webstorage.service";
import {Configuration} from "../config/configuration";
import {LoggerService, DEBUG_LEVEL} from "./logger.service";


@Injectable()
export class AuthService {
    @Output() public authStatusChange$:EventEmitter<any> = new EventEmitter();

    constructor(@Inject(forwardRef(() => LoggerService)) private logger:LoggerService,
                @Inject(forwardRef(() => Http)) public http:Http,
                @Inject(forwardRef(() => WebStorageService)) private webStorageService:WebStorageService,
                @Inject(forwardRef(() => Configuration)) private configuration:Configuration) {
    }

    logout():boolean {
        this.webStorageService.remove(this.configuration.token.name);
        this.authStatusChange$.emit('Logout');
        return true;
    }

    login(user:User):Observable<string> {
        this.logger.log(DEBUG_LEVEL.INFO, 'login', 'Creating temporary data');
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });

        let options = new RequestOptions({
            headers: headers
        });

        return this.http.post(this.configuration.apiBasePath + '/auth/login',
                "name=" + user.name + "&" +
                "email=" + user.email + "&" +
                "password=" + user.password,
            options)
            .map(res => 
                res.text()
            )
            .catch(this.logger.errorCatcher());
    }

    register(user:User):Observable<string> {
        this.logger.log(DEBUG_LEVEL.INFO, 'register', 'Creating temporary data');
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });

        let options = new RequestOptions({
            headers: headers
        });
        return this.http.post(this.configuration.apiBasePath + '/auth/register',
                "email=" + user.email + "&" +
                "password=" + user.password,
            options)
            .map(res => 
                res.text()
            )
            .catch(this.logger.errorCatcher());

    }

    isLoggedIn():boolean {
        var tokenDataSplit = (this.webStorageService.get(this.configuration.token.name) || '').split('.')[1];
        if (!tokenDataSplit) {
            return false;
        }
        var tokenDataRaw = atob(tokenDataSplit);

        var tokenData = JSON.parse(tokenDataRaw) as JwtToken;
        return (tokenData.exp || 0) > Date.now() / 1000;
    };


    getIdFromToken() {
        var tokenDataSplit = (this.webStorageService.get(this.configuration.token.name) || '').split('.')[1];
        if (!tokenDataSplit) {
            return '';
        }
        var tokenDataRaw = atob(tokenDataSplit);

        var tokenData = JSON.parse(tokenDataRaw) as JwtToken;

        return tokenData._id
    }

    getIdFromAnonymousToken(tokenDataString) {
        var tokenDataRaw = atob(tokenDataString);

        var tokenData = JSON.parse(tokenDataRaw) as JwtToken;
        return tokenData._id
    }

    generateAnonymousToken():any {
        var anonymousToken = {
            _id: this.generateUniqueId()
        };

        return btoa(JSON.stringify(anonymousToken));
    }

    private generateUniqueId() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
}