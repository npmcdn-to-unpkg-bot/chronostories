import {Injectable} from "angular2/core";

@Injectable()
export class Configuration {
    public zoom = {
        offset: 0,
        step: 150,
        strength: 10
    }
}