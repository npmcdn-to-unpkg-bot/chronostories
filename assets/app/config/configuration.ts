import {Injectable} from "angular2/core";
import {LoggerService, DEBUG_LEVEL} from "../services/logger.service";

@Injectable()
export class Configuration {
    public zoom = {
        offset: 0,
        step: 150,
        strength: 0.6
    };

    public token = {
        name: 'token',
        expiration: (30 * 24 * 60 * 60 * 1000)
    };

    // public apiBasePath = 'https://aa2016-chronostories.herokuapp.com';
    public apiBasePath = '';
    
    public debugLevel = DEBUG_LEVEL.INFO;
}