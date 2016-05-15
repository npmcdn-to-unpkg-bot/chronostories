import {Injectable} from "angular2/core";
import {Http, Headers, RequestOptions} from 'angular2/http';
import {JwtToken} from "../models/jwtToken";
import {Observable} from "rxjs/Observable";
import {User} from "../models/user";
import {WebStorageService} from "./webstorage.service";
import {Configuration} from "../config/configuration";


@Injectable()
export class AuthService {

    constructor(public http:Http, private webStorageService:WebStorageService, private configuration:Configuration) {
    }

    logout():boolean {
        this.webStorageService.remove(this.configuration.token.name);
        return true;
    }

    login(user:User):Observable<string> {
        console.log('Creating temporary data');
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
            .map(res => res.text());
    }

    register(user:User):Observable<string> {
        console.log('Creating temporary data');
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
            .map(res => res.text());

    }

    isLoggedIn():boolean {
        var tokenDataSplit = (this.webStorageService.get(this.configuration.token.name) || '').split('.')[1];
        if (!tokenDataSplit) {
            return false;
        }
        var tokenDataRaw = atob(tokenDataSplit);

        var tokenData = JSON.parse(tokenDataRaw) as JwtToken;
        console.log(tokenData);
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