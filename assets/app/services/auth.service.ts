import {Injectable} from "angular2/core";
// import {LocalStorage} from "angular2-localstorage/LocalStorage";
import {Http, Headers} from 'angular2/http';
import {JwtToken} from "../models/jwtToken";
import {Observable} from "rxjs/Observable";
import {User} from "../models/user";


@Injectable()
export class AuthService {
    public token:string = '';

    constructor(public http:Http) {
    }

    logout():boolean {
        this.token = undefined;
        return true;
    }

    login(user:User):Observable<string> {
        return this.http.put('/auth/login', JSON.stringify(user))
            .map(res => res.text());
    }

    register(user:User):Observable<string> {
        return this.http.put('/auth/login', JSON.stringify(user))
            .map(res => res.text());
    }

    isLoggedIn():boolean {
        var tokenDataSplit = (this.token || '').split('.')[1];
        var tokenDataRaw = atob(tokenDataSplit);
        var tokenData = JSON.parse(tokenDataRaw) as JwtToken;
        return (tokenData.exp || 0) > Date.now() / 1000;
    };
}