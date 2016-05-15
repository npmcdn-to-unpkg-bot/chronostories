import {Injectable} from "angular2/core";

@Injectable()
export class WebStorageService {
    private storageSupported = (typeof(Storage) !== "undefined");

    constructor() {
    }

    put(key, value):void {
        if (this.storageSupported) {
            if (!!value) {
                this.putInLocalStorage(key, value)
            }
            else {
                this.removeFromLocalStorage(key);
            }
        }
        else {
            if (!!value) {
                this.putInCookies(key, value)
            }
            else {
                this.removeFromCookies(key);
            }
        }
    }

    get(key):any {
        if (this.storageSupported) {
            return this.getFromLocalStorage(key)
        }
        else {
            return this.getFromCookie(key);
        }
    }

    remove(key):void {
        if (this.storageSupported) {
            this.removeFromLocalStorage(key)
        }
        else {
            this.removeFromCookies(key);
        }
    }

    private putInLocalStorage(key, value):void {
        localStorage.setItem(key, JSON.stringify(encodeURI(value) || ""));
    }

    private getFromLocalStorage(key):any {
        return JSON.parse(decodeURI(localStorage.getItem(key)) || "{}");
    }

    private removeFromLocalStorage(key):void {
        localStorage.removeItem(key);
    }

    private putInCookies(key, value) {
        var d = new Date();
        d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
        var expires = d.toUTCString();
        document.cookie += key + '=' + JSON.stringify(encodeURI(value) || "") + ";path=/;expires=" + expires;
    }

    private getFromCookie(key):any {
        var regex = new RegExp('(?:^|;)\\s?' + key + '=(.*?)(?:;|$)', 'i');
        var mtc = document.cookie.match(regex) || [];
        if (mtc.length > 0) {
            return JSON.parse(decodeURI(mtc[1]));
        }
        return '';
    };

    private removeFromCookies(key):void {
        document.cookie = key + "=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
}