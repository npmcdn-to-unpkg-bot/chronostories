import {Injectable} from "angular2/core";
import {WebStorageService} from "./webstorage.service";
import {Configuration} from "../config/configuration";


@Injectable()
export class LoggerService {

    constructor(private webStorageService:WebStorageService, private configuration:Configuration) {
    }
}