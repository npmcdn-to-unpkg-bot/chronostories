import {Injectable} from "angular2/core";

@Injectable()
export class Configuration {
    public zoom = {
        offset: 0,
        step: 150,
        strength: 10
    };

    public token = {
        name: 'token',
        expiration: (30 * 24 * 60 * 60 * 1000)
    };
}