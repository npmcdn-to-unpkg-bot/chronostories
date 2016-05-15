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
        return this.http.post('/auth/login',
                "name=" + user.name+"&" +
                "email=" + user.email+"&" +
                "password="+user.password,
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
        return this.http.post('/auth/register',
                "email=" + user.email+"&" +
                "password="+user.password,
            options)
            .map(res => res.text());

    }

    isLoggedIn():boolean {
        var tokenDataSplit = (this.webStorageService.get(this.configuration.token.name) || '').split('.')[1];
        if(!tokenDataSplit){
            return false;
        }
        var tokenDataRaw = atob(tokenDataSplit);
        var tokenData = JSON.parse(tokenDataRaw) as JwtToken;
        return (tokenData.exp || 0) > Date.now() / 1000;
    };
}