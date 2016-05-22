var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
System.register("services/logger.service", ["angular2/core", "config/configuration", "rxjs/Observable"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, configuration_1, Observable_1;
    var LoggerService, DEBUG_LEVEL;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (configuration_1_1) {
                configuration_1 = configuration_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            LoggerService = (function () {
                function LoggerService(configuration) {
                    this.configuration = configuration;
                    this.setDebugLevel(configuration.debugLevel || DEBUG_LEVEL.ERROR);
                    var that = this;
                    window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
                        that.log(DEBUG_LEVEL.ERROR, 'onerror', errorMsg, url, lineNumber, column, errorObj);
                        return true;
                    };
                }
                LoggerService.prototype.ngOnInit = function () {
                };
                LoggerService.prototype.setDebugLevel = function (debugLevel) {
                    this.debugLevel = debugLevel;
                };
                LoggerService.prototype.log = function (level, functionName, text) {
                    var args = [];
                    for (var _i = 3; _i < arguments.length; _i++) {
                        args[_i - 3] = arguments[_i];
                    }
                    if (!level || (level.value === undefined) || !level.name) {
                        level = DEBUG_LEVEL.INFO;
                    }
                    if (level.value >= this.debugLevel.value) {
                        var message = '[' + moment().format("DD/MM/YY - HH:mm:ss.SSS") + '][' + level.name + '][' + functionName + '] ' + (text || '');
                        Array.prototype.unshift.call(args, message);
                        if (level.value === DEBUG_LEVEL.ERROR.value) {
                            console.debug.apply(console, args);
                        }
                        else if (level.value === DEBUG_LEVEL.WARN.value) {
                            console.warn.apply(console, args);
                        }
                        else {
                            console.log.apply(console, args);
                        }
                        if (!!this.log$ && this.logStream$) {
                            var logMessage = {
                                time: moment().format("DD/MM/YY - HH:mm:ss.SSS"),
                                level: level.name,
                                functionName: functionName,
                                message: text,
                                data: args,
                                pretty: ''
                            };
                            logMessage.pretty = JSON.stringify(logMessage, null, 2);
                            this.logStream$.next(logMessage);
                        }
                    }
                };
                LoggerService.prototype.getLogStream = function () {
                    var _this = this;
                    if (!this.log$) {
                        this.log$ = new Observable_1.Observable(function (observer) { return _this.logStream$ = observer; }).share();
                    }
                    return this.log$;
                };
                LoggerService.prototype.call = function (exception, stackTrace, reason) {
                    this.log(DEBUG_LEVEL.ERROR, 'angular', '', exception, reason);
                };
                LoggerService.prototype.errorCatcher = function () {
                    var that = this;
                    return function (err, source, caught) {
                        that.log(DEBUG_LEVEL.ERROR, 'errorCatcher', err.message, err);
                        return Observable_1.Observable.throw(err);
                    };
                };
                LoggerService = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(core_1.forwardRef(function () { return configuration_1.Configuration; }))), 
                    __metadata('design:paramtypes', [configuration_1.Configuration])
                ], LoggerService);
                return LoggerService;
            }());
            exports_1("LoggerService", LoggerService);
            exports_1("DEBUG_LEVEL", DEBUG_LEVEL = {
                VERBOSE: {
                    value: 0,
                    name: 'Log'
                },
                INFO: {
                    value: 1,
                    name: 'Info'
                },
                WARN: {
                    value: 2,
                    name: 'Warn'
                },
                ERROR: {
                    value: 3,
                    name: 'Error'
                },
                NONE: {
                    value: 4,
                    name: ''
                }
            });
        }
    }
});
System.register("config/configuration", ["angular2/core", "services/logger.service"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2, logger_service_1;
    var Configuration;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            Configuration = (function () {
                function Configuration() {
                    this.zoom = {
                        offset: 0,
                        step: 150,
                        strength: 0.6
                    };
                    this.token = {
                        name: 'token',
                        expiration: (30 * 24 * 60 * 60 * 1000)
                    };
                    // public apiBasePath = 'https://aa2016-chronostories.herokuapp.com';
                    this.apiBasePath = '/api';
                    this.debugLevel = logger_service_1.DEBUG_LEVEL.INFO;
                }
                Configuration = __decorate([
                    core_2.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Configuration);
                return Configuration;
            }());
            exports_2("Configuration", Configuration);
        }
    }
});
System.register("models/jwtToken", [], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("models/user", [], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User() {
                }
                return User;
            }());
            exports_4("User", User);
        }
    }
});
System.register("services/webstorage.service", ["angular2/core"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_3;
    var WebStorageService;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            }],
        execute: function() {
            WebStorageService = (function () {
                function WebStorageService() {
                    this.storageSupported = (typeof (Storage) !== "undefined");
                }
                WebStorageService.prototype.put = function (key, value) {
                    if (this.storageSupported) {
                        if (!!value) {
                            this.putInLocalStorage(key, value);
                        }
                        else {
                            this.removeFromLocalStorage(key);
                        }
                    }
                    else {
                        if (!!value) {
                            this.putInCookies(key, value);
                        }
                        else {
                            this.removeFromCookies(key);
                        }
                    }
                };
                WebStorageService.prototype.get = function (key) {
                    if (this.storageSupported) {
                        return this.getFromLocalStorage(key);
                    }
                    else {
                        return this.getFromCookie(key);
                    }
                };
                WebStorageService.prototype.remove = function (key) {
                    if (this.storageSupported) {
                        this.removeFromLocalStorage(key);
                    }
                    else {
                        this.removeFromCookies(key);
                    }
                };
                WebStorageService.prototype.putInLocalStorage = function (key, value) {
                    localStorage.setItem(key, JSON.stringify(encodeURI(value) || ""));
                };
                WebStorageService.prototype.getFromLocalStorage = function (key) {
                    return JSON.parse(decodeURI(localStorage.getItem(key)) || "{}");
                };
                WebStorageService.prototype.removeFromLocalStorage = function (key) {
                    localStorage.removeItem(key);
                };
                WebStorageService.prototype.putInCookies = function (key, value) {
                    var d = new Date();
                    d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
                    var expires = d.toUTCString();
                    document.cookie += key + '=' + JSON.stringify(encodeURI(value) || "") + ";path=/;expires=" + expires;
                };
                WebStorageService.prototype.getFromCookie = function (key) {
                    var regex = new RegExp('(?:^|;)\\s?' + key + '=(.*?)(?:;|$)', 'i');
                    var mtc = document.cookie.match(regex) || [];
                    if (mtc.length > 0) {
                        return JSON.parse(decodeURI(mtc[1]));
                    }
                    return '';
                };
                ;
                WebStorageService.prototype.removeFromCookies = function (key) {
                    document.cookie = key + "=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT";
                };
                WebStorageService = __decorate([
                    core_3.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], WebStorageService);
                return WebStorageService;
            }());
            exports_5("WebStorageService", WebStorageService);
        }
    }
});
System.register("services/auth.service", ["angular2/core", 'angular2/http', "services/webstorage.service", "config/configuration", "services/logger.service"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_4, http_1, webstorage_service_1, configuration_2, logger_service_2;
    var AuthService;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (webstorage_service_1_1) {
                webstorage_service_1 = webstorage_service_1_1;
            },
            function (configuration_2_1) {
                configuration_2 = configuration_2_1;
            },
            function (logger_service_2_1) {
                logger_service_2 = logger_service_2_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(logger, http, webStorageService, configuration) {
                    this.logger = logger;
                    this.http = http;
                    this.webStorageService = webStorageService;
                    this.configuration = configuration;
                    this.authStatusChange$ = new core_4.EventEmitter();
                }
                AuthService.prototype.logout = function () {
                    this.webStorageService.remove(this.configuration.token.name);
                    this.authStatusChange$.emit('Logout');
                    return true;
                };
                AuthService.prototype.login = function (user) {
                    this.logger.log(logger_service_2.DEBUG_LEVEL.INFO, 'login', 'Creating temporary data');
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/x-www-form-urlencoded'
                    });
                    var options = new http_1.RequestOptions({
                        headers: headers
                    });
                    return this.http.post(this.configuration.apiBasePath + '/auth/login', "name=" + user.name + "&" +
                        "email=" + user.email + "&" +
                        "password=" + user.password, options)
                        .map(function (res) {
                        return res.text();
                    })
                        .catch(this.logger.errorCatcher());
                };
                AuthService.prototype.register = function (user) {
                    this.logger.log(logger_service_2.DEBUG_LEVEL.INFO, 'register', 'Creating temporary data');
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/x-www-form-urlencoded'
                    });
                    var options = new http_1.RequestOptions({
                        headers: headers
                    });
                    return this.http.post(this.configuration.apiBasePath + '/auth/register', "email=" + user.email + "&" +
                        "password=" + user.password, options)
                        .map(function (res) {
                        return res.text();
                    })
                        .catch(this.logger.errorCatcher());
                };
                AuthService.prototype.isLoggedIn = function () {
                    var tokenDataSplit = (this.webStorageService.get(this.configuration.token.name) || '').split('.')[1];
                    if (!tokenDataSplit) {
                        return false;
                    }
                    var tokenDataRaw = atob(tokenDataSplit);
                    var tokenData = JSON.parse(tokenDataRaw);
                    return (tokenData.exp || 0) > Date.now() / 1000;
                };
                ;
                AuthService.prototype.getIdFromToken = function () {
                    var tokenDataSplit = (this.webStorageService.get(this.configuration.token.name) || '').split('.')[1];
                    if (!tokenDataSplit) {
                        return '';
                    }
                    var tokenDataRaw = atob(tokenDataSplit);
                    var tokenData = JSON.parse(tokenDataRaw);
                    return tokenData._id;
                };
                AuthService.prototype.getIdFromAnonymousToken = function (tokenDataString) {
                    var tokenDataRaw = atob(tokenDataString);
                    var tokenData = JSON.parse(tokenDataRaw);
                    return tokenData._id;
                };
                AuthService.prototype.generateAnonymousToken = function () {
                    var anonymousToken = {
                        _id: this.generateUniqueId()
                    };
                    return btoa(JSON.stringify(anonymousToken));
                };
                AuthService.prototype.generateUniqueId = function () {
                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                        return v.toString(16);
                    });
                };
                ;
                __decorate([
                    core_4.Output(), 
                    __metadata('design:type', core_4.EventEmitter)
                ], AuthService.prototype, "authStatusChange$", void 0);
                AuthService = __decorate([
                    core_4.Injectable(),
                    __param(0, core_4.Inject(core_4.forwardRef(function () { return logger_service_2.LoggerService; }))),
                    __param(1, core_4.Inject(core_4.forwardRef(function () { return http_1.Http; }))),
                    __param(2, core_4.Inject(core_4.forwardRef(function () { return webstorage_service_1.WebStorageService; }))),
                    __param(3, core_4.Inject(core_4.forwardRef(function () { return configuration_2.Configuration; }))), 
                    __metadata('design:paramtypes', [logger_service_2.LoggerService, http_1.Http, webstorage_service_1.WebStorageService, configuration_2.Configuration])
                ], AuthService);
                return AuthService;
            }());
            exports_6("AuthService", AuthService);
        }
    }
});
System.register("models/storyblock", [], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("mock/mock-storyblocks", [], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var STORYBLOCKS;
    return {
        setters:[],
        execute: function() {
            exports_8("STORYBLOCKS", STORYBLOCKS = [
                {
                    blockId: 1,
                    title: 'Preface',
                    description: 'You need to start somewhere',
                    timePosition: 1,
                    importance: -1,
                    blockNumber: 0,
                    type: 'chapter'
                },
                {
                    blockId: 2,
                    title: 'Introduction',
                    description: 'Where your characters became real',
                    timePosition: 2,
                    importance: 1,
                    blockNumber: 1,
                    type: 'chapter'
                },
                {
                    blockId: 3,
                    title: 'Evolution',
                    description: 'Things gets trickier',
                    timePosition: 3,
                    importance: 2,
                    blockNumber: 2,
                    type: 'chapter'
                },
                {
                    blockId: 4,
                    title: 'Topic moment',
                    description: 'Woah!',
                    timePosition: 4,
                    importance: 1,
                    blockNumber: 3,
                    type: 'chapter'
                },
                {
                    blockId: 5,
                    title: 'Epilogue',
                    description: 'Because even the best things end',
                    timePosition: 5,
                    importance: -1,
                    blockNumber: 4,
                    type: 'chapter'
                }
            ]);
        }
    }
});
System.register("models/storyblock-type", [], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("mock/mock-storyblock-types", [], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var STORYBLOCK_TYPES;
    return {
        setters:[],
        execute: function() {
            exports_10("STORYBLOCK_TYPES", STORYBLOCK_TYPES = [
                {
                    id: 'chapter',
                    name: 'Chapter',
                    level: 0
                },
                {
                    id: 'paragraph',
                    name: 'Paragraph',
                    level: 1
                },
            ]);
        }
    }
});
System.register("services/storyblocks.service", ["angular2/core", 'angular2/http', 'rxjs/Rx', "rxjs/Observable", 'rxjs/add/operator/share', "mock/mock-storyblocks", "mock/mock-storyblock-types", "config/configuration", "services/logger.service"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_5, http_2, Observable_2, mock_storyblocks_1, mock_storyblock_types_1, configuration_3, logger_service_3;
    var StoryBlockService;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (_1) {},
            function (Observable_2_1) {
                Observable_2 = Observable_2_1;
            },
            function (_2) {},
            function (mock_storyblocks_1_1) {
                mock_storyblocks_1 = mock_storyblocks_1_1;
            },
            function (mock_storyblock_types_1_1) {
                mock_storyblock_types_1 = mock_storyblock_types_1_1;
            },
            function (configuration_3_1) {
                configuration_3 = configuration_3_1;
            },
            function (logger_service_3_1) {
                logger_service_3 = logger_service_3_1;
            }],
        execute: function() {
            StoryBlockService = (function () {
                function StoryBlockService(logger, http, configuration) {
                    var _this = this;
                    this.logger = logger;
                    this.http = http;
                    this.configuration = configuration;
                    this._exposedIndex = -1;
                    this.addRequest$ = new core_5.EventEmitter();
                    this.indexChange$ = new Observable_2.Observable(function (observer) { return _this._observer = observer; }).share();
                }
                StoryBlockService.prototype.changeExposedIndex = function (index) {
                    this._exposedIndex = index;
                    this._observer.next(index);
                };
                StoryBlockService.prototype.getExposedIndex = function () {
                    return this._exposedIndex;
                };
                StoryBlockService.prototype.getStoryBlocks = function (userId, storyId) {
                    return this.http.get(this.configuration.apiBasePath + '/story/' + userId + '/' + storyId)
                        .map(function (res) { return res.json(); })
                        .catch(this.logger.errorCatcher());
                };
                StoryBlockService.prototype.saveStoryBlock = function (userId, storyId, storyBlock) {
                    var headers = new http_2.Headers({
                        'Content-Type': 'application/x-www-form-urlencoded'
                    });
                    var options = new http_2.RequestOptions({
                        headers: headers
                    });
                    storyBlock.userId = userId;
                    storyBlock.storyId = storyId;
                    if (!!storyBlock._id) {
                        storyBlock.createdAt = storyBlock.createdAt || (new Date());
                        storyBlock.lastModifiedAt = (new Date());
                        return this.http.put(this.configuration.apiBasePath + '/story/' + userId + '/' + storyId + '/' + storyBlock._id, "data=" + JSON.stringify(storyBlock), options)
                            .map(function (res) { return res.json(); })
                            .catch(this.logger.errorCatcher());
                    }
                    else {
                        storyBlock.createdAt = (new Date());
                        storyBlock.lastModifiedAt = (new Date());
                        return this.http.post(this.configuration.apiBasePath + '/story/' + userId + '/' + storyId + '/', "data=" + JSON.stringify(storyBlock), options)
                            .map(function (res) { return res.json(); })
                            .catch(this.logger.errorCatcher());
                    }
                };
                StoryBlockService.prototype.deleteStoryBlock = function (userId, storyId, storyBlock) {
                    if (!!storyBlock._id) {
                        return this.http.delete(this.configuration.apiBasePath + '/story/' + userId + '/' + storyId + '/' + storyBlock._id)
                            .map(function (res) { return res.json(); })
                            .catch(this.logger.errorCatcher());
                    }
                    return null;
                };
                StoryBlockService.prototype.getStoryBlockTypes = function () {
                    return mock_storyblock_types_1.STORYBLOCK_TYPES;
                };
                StoryBlockService.prototype.getStoryBlockDefaultTypes = function () {
                    return mock_storyblock_types_1.STORYBLOCK_TYPES;
                };
                StoryBlockService.prototype.generateTestData = function (userId, storyId) {
                    this.logger.log(logger_service_3.DEBUG_LEVEL.INFO, 'generateTestData', 'Creating temporary data for ' + userId);
                    var headers = new http_2.Headers({
                        'Content-Type': 'application/x-www-form-urlencoded'
                    });
                    var options = new http_2.RequestOptions({
                        headers: headers
                    });
                    var blocks = mock_storyblocks_1.STORYBLOCKS;
                    for (var i = 0; i < blocks.length; i++) {
                        blocks[i].userId = userId;
                        blocks[i].storyId = storyId;
                        blocks[i].createdAt = (new Date());
                        blocks[i].lastModifiedAt = (new Date());
                    }
                    return this.http.post(this.configuration.apiBasePath + '/story/' + userId + '/' + storyId + '/', "data=" + JSON.stringify(blocks), options)
                        .map(function (res) { return res.json(); })
                        .catch(this.logger.errorCatcher());
                };
                StoryBlockService.prototype.downloadPdf = function (storyBlocks) {
                    function compare(a, b) {
                        if (a.timePosition < b.timePosition)
                            return -1;
                        else if (a.timePosition > b.timePosition)
                            return 1;
                        else
                            return 0;
                    }
                    storyBlocks.sort(compare);
                    var docDefinition = {
                        content: [],
                        styles: {
                            chapter: {
                                fontSize: 22,
                                bold: true,
                                margin: [0, 16, 0, 8]
                            },
                            paragraph: {
                                fontSize: 18,
                                bold: true,
                                margin: [0, 0, 0, 12]
                            }
                        }
                    };
                    for (var i = 0; i < storyBlocks.length; i++) {
                        docDefinition.content.push({
                            text: storyBlocks[i].title,
                            style: storyBlocks[i].type,
                        });
                        docDefinition.content.push(storyBlocks[i].description);
                    }
                    pdfMake.createPdf(docDefinition).download();
                };
                __decorate([
                    core_5.Output(), 
                    __metadata('design:type', core_5.EventEmitter)
                ], StoryBlockService.prototype, "addRequest$", void 0);
                StoryBlockService = __decorate([
                    core_5.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_3.LoggerService, http_2.Http, configuration_3.Configuration])
                ], StoryBlockService);
                return StoryBlockService;
            }());
            exports_11("StoryBlockService", StoryBlockService);
        }
    }
});
System.register("components/notification.component", ["angular2/core"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_6;
    var NotificationComponent;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            }],
        execute: function() {
            NotificationComponent = (function () {
                function NotificationComponent(_e) {
                    this._e = _e;
                }
                NotificationComponent.prototype.show = function (content) {
                    var _this = this;
                    if (!!this._timer) {
                        clearTimeout(this._timer);
                    }
                    this._content = content;
                    this._e.nativeElement.classList.add('visible');
                    this._timer = setTimeout(function () {
                        _this._e.nativeElement.classList.remove('visible');
                    }, 3000);
                };
                NotificationComponent = __decorate([
                    core_6.Component({
                        selector: 'notification',
                        template: "\n        <div>{{ _content\u00A0}}</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [core_6.ElementRef])
                ], NotificationComponent);
                return NotificationComponent;
            }());
            exports_12("NotificationComponent", NotificationComponent);
        }
    }
});
System.register("services/utils.service", ["angular2/core"], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var core_7;
    var UtilsService;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            }],
        execute: function() {
            UtilsService = (function () {
                function UtilsService() {
                    this.EMAIL_REGEX = '^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$';
                }
                UtilsService.prototype.getRomanNumeral = function (num) {
                    if (!+num)
                        return '';
                    var digits = String(+num).split(""), key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
                        "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
                        "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], roman = "", i = 3;
                    while (i--)
                        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
                    return Array(+digits.join("") + 1).join("M") + roman;
                };
                UtilsService.prototype.getHumanDate = function (d) {
                    var date = new Date(d);
                    return (date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear() + ' at ' + date.getHours() + ':' + date.getMinutes());
                };
                UtilsService = __decorate([
                    core_7.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UtilsService);
                return UtilsService;
            }());
            exports_13("UtilsService", UtilsService);
        }
    }
});
System.register("services/validators.service", [], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var emailRegexp;
    /*
     Custom validators to use everywhere.
     */
    // SINGLE FIELD VALIDATORS
    function emailValidator(control) {
        var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value && control.value.length < 6 && !emailRegexp.test(control.value)) {
            return { invalidEmail: true };
        }
    }
    exports_14("emailValidator", emailValidator);
    //CONTROL GROUP VALIDATORS
    function matchingPasswords(passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    }
    exports_14("matchingPasswords", matchingPasswords);
    return {
        setters:[],
        execute: function() {
            exports_14("emailRegexp", emailRegexp = '^[a-z0-9!#$%&\'*+\\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$');
        }
    }
});
System.register("components/log-message.component", ["angular2/core", "angular2/common"], function(exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var core_8, common_1;
    var LogMessageComponent;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            LogMessageComponent = (function () {
                function LogMessageComponent() {
                    this.closeModal = new core_8.EventEmitter();
                }
                LogMessageComponent.prototype.close = function (event) {
                    this.closeModal.emit(event);
                };
                __decorate([
                    core_8.Input(), 
                    __metadata('design:type', Object)
                ], LogMessageComponent.prototype, "logMessage", void 0);
                __decorate([
                    core_8.Output(), 
                    __metadata('design:type', core_8.EventEmitter)
                ], LogMessageComponent.prototype, "closeModal", void 0);
                LogMessageComponent = __decorate([
                    core_8.Component({
                        selector: 'log-message',
                        template: "\n        <div class=\"modal-container\">\n            <div class=\"modal\">\n                <div class=\"flexbox flex-row\">\n                    <h1>{{logMessage.message}}</h1>\n                    <div><a class=\"close\" (click)=\"close($event)\"><i class=\"fa fa-times\" aria-hidden=\"true\">X</i></a></div>\n                </div>\n                <textarea class=\"description\" [attr.readonly]=\"true\" [(ngModel)]=\"logMessage.pretty\"></textarea>\n            </div>\n        </div>\n    ",
                        providers: [],
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LogMessageComponent);
                return LogMessageComponent;
            }());
            exports_15("LogMessageComponent", LogMessageComponent);
        }
    }
});
System.register("components/debug-console.component", ["angular2/core", "services/logger.service", "components/log-message.component"], function(exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var core_9, logger_service_4, log_message_component_1;
    var DebugConsoleComponent;
    return {
        setters:[
            function (core_9_1) {
                core_9 = core_9_1;
            },
            function (logger_service_4_1) {
                logger_service_4 = logger_service_4_1;
            },
            function (log_message_component_1_1) {
                log_message_component_1 = log_message_component_1_1;
            }],
        execute: function() {
            DebugConsoleComponent = (function () {
                function DebugConsoleComponent(logger) {
                    this.logger = logger;
                }
                DebugConsoleComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.logMessages = [];
                    this.logStream$ = this.logger.getLogStream();
                    this.logStream$.subscribe(function (message) {
                        _this.logMessages.push(message);
                    });
                };
                DebugConsoleComponent.prototype.show = function (index) {
                    this.openMessage = (!this.openMessage) ? index : undefined;
                    document.querySelector('body').classList.add('no-scroll');
                };
                DebugConsoleComponent.prototype.hide = function () {
                    this.openMessage = undefined;
                    document.querySelector('body').classList.remove('no-scroll');
                };
                DebugConsoleComponent.prototype.isError = function (message) {
                    return message.level == logger_service_4.DEBUG_LEVEL.ERROR.name;
                };
                DebugConsoleComponent.prototype.isWarning = function (message) {
                    return message.level == logger_service_4.DEBUG_LEVEL.WARN.name;
                };
                DebugConsoleComponent = __decorate([
                    core_9.Component({
                        selector: 'debug-console',
                        template: "\n            <div>Debug errors:</div>\n            <div class=\"error-log\">\n                <div \n                    *ngFor=\"#logMessage of logMessages; #i = index\" \n                    >\n                    <a (click)=\"show(i)\" [ngClass]=\"{error: isError(logMessage), warning: isWarning(logMessage)}\">{{logMessage.message}}</a>\n                    <log-message\n                        *ngIf=\"i==openMessage\"\n                        (closeModal)=\"hide()\"\n                        [logMessage]=\"logMessage\"\n                    ></log-message>\n                </div>\n            </div>\n    ",
                        providers: [],
                        directives: [log_message_component_1.LogMessageComponent]
                    }), 
                    __metadata('design:paramtypes', [logger_service_4.LoggerService])
                ], DebugConsoleComponent);
                return DebugConsoleComponent;
            }());
            exports_16("DebugConsoleComponent", DebugConsoleComponent);
        }
    }
});
System.register("components/sidebar.component", ["angular2/core", "services/storyblocks.service", "services/utils.service", "services/logger.service", "components/debug-console.component"], function(exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var core_10, storyblocks_service_1, utils_service_1, logger_service_5, debug_console_component_1;
    var SidebarComponent;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
            },
            function (storyblocks_service_1_1) {
                storyblocks_service_1 = storyblocks_service_1_1;
            },
            function (utils_service_1_1) {
                utils_service_1 = utils_service_1_1;
            },
            function (logger_service_5_1) {
                logger_service_5 = logger_service_5_1;
            },
            function (debug_console_component_1_1) {
                debug_console_component_1 = debug_console_component_1_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
                function SidebarComponent(logger, _storyBlockService, utilsService) {
                    this.logger = logger;
                    this._storyBlockService = _storyBlockService;
                    this.utilsService = utilsService;
                    this.startDragging = new core_10.EventEmitter();
                    this.endDragging = new core_10.EventEmitter();
                }
                Object.defineProperty(SidebarComponent.prototype, "storyBlock", {
                    set: function (storyBlock) {
                        this._storyBlock = storyBlock;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SidebarComponent.prototype, "storyBlocksLength", {
                    set: function (storyBlocksLength) {
                        this._storyBlocksLength = storyBlocksLength;
                    },
                    enumerable: true,
                    configurable: true
                });
                SidebarComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.storyBlockTypes = this._storyBlockService.getStoryBlockTypes();
                    this._index = this._storyBlockService.getExposedIndex();
                    this._storyBlock = null;
                    this._subscription = this._storyBlockService.indexChange$.subscribe(function (index) { return _this.selectIndex(index); });
                };
                SidebarComponent.prototype.selectIndex = function (index) {
                    this._index = index;
                };
                SidebarComponent.prototype.ngOnDestroy = function () {
                    this._subscription.unsubscribe();
                };
                SidebarComponent.prototype.dragStart = function (e) {
                    var img = document.createElement("img");
                    img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABGdBTUEAALGPC/xhBQAABO1JREFUWAn" +
                        "NmEFsFFUYx783O7PaArpgqFKtGKMhGOJJEm1FQ8IapUQkpj2YePNmjAej8eDRg9F4IMabNxMPbRQxgMZiiGKrCRyMUQlqTEApCAqrhhZ3Zuf5" +
                        "/d7s293Slp3FluyX7Ozb2ff+//98773vfd8Y6dBu3GdXBxerw1ZMWYzcbq3tN8b0A6PtaW1Pi5WTRuxEuqK4/68d5kInFCZv59JYskts+pw1s" +
                        "kWZw1zjjEmMlcNigrcqo+GePGPaClr9fjxka/Z1ffpBAKOCsQ+tNWb7rYFsuMHIuh4jt1yfUZ25JHJ61srxv60cOJXKF+esjWv6CGrquSlTMC" +
                        "9deDKazHovfF1U0MiYLUxI/KYKeZ6hfT3GvnxPwYysD2RVPv/IP4nI+IlUXvuhZs/ONoTtLkv0wvioqS0kaUFBpT22ZON4TKemXFSPvLixYJ7" +
                        "dEEhvIYP4tmJlv3rgq3NWptUjeAbDU/3qsQfWGhlWD95byuBnlPrt46m8caxmq3jMmAkTRaOVXaaSjWxe5wlyYqrVKe2yEa+8NxSa+9Zk3fb+" +
                        "ZuXV7xL5Sackj92tU/rKplB23paNP3reylOTiffWMVMsDl4uao4gpulTiT/GM5tKgYxtCfWJRU5cFHnm60SO/Jnm0TGvz+abAnnn/lDWrxD1q" +
                        "MjI4US+ryiWeuoRiR5rnb6gdTRrBjF4xouZ1GnZejC+ajHg8yBggMUDjuuDwgGX42wR0fAQuylN0i9ZMwe2ZtMEwBOfJxKn+aaoBXfBZhQY+f" +
                        "DhUIZ0jTF92w8lbk0FYfCg330ND7G1QWEBs2aYpqenlk4M2DwYmGDDARf3PTdtJ4igR5zBjewmjDVz/t+l8YwDrF/ABBuDC064XeDVexm7RmA" +
                        "6EGfY2uymq13A4LQzsOGAC07Xv67BcDbJTHw2CqTwy87IEPQ2fxLn3trtyBf7n5Bw5NHIBc8798Y2TqUmvVFfYGbiHbraQ44DxBD08saZxcjy" +
                        "3IcDLjjhRgNamLIyAJxNGBG4E+vT6FwZLbpPY8vmBPBcnluHlVExwHgOSozj4FqZ5/LcyjsQ6gp3uQynNsbZlMfu0KiLrbmu6RciMVZTiF9ns" +
                        "vaVrp7Lc6MlJLnSxpwU4kog/r9vhou+2fj29/64ZOWuj+LG/cUarYcyfdBCIuFcks8vTejZpDmiJ8y85O9xuucx79smklim7LQOXvW7phArV2" +
                        "YpxM/tH07WfZB1YlH/+HjmrX691wLeVtPN9cQObgwtgcuB9QeZHkY+c63Mc3lutAQk5Agg7cRIrjqxqkaJoxp5+XTinVYuz42WQCuHg/xJDoy" +
                        "R6XVilarIts8S9+lkHH09l+emUglsb7RPl3dCQk4OTNpJWF9ugwMuOOFGA2VTQN1EqUJ1QEKOkXYut3kOOOFGA1qy+dG6CQFUB2xZcmDSzuUy" +
                        "sOGAC07HU9fgWCnidIVPUapQHWDkwK1R2N1cgguYYGNwwQm3LyQbbqCIoxOlCuklx8C7g6GQdi6VgQUm2HDABbbnpt0QRE6rSndTN1GqUB2Q+" +
                        "5IDL4WnwPD5NNhwwAWnz6fnCOIHFSWlCW6kVPGiDm2L/teaYs2AwQP6MshVssrlOCGv27z56KpC0avsqlLai+qqlw1eFN9d8zqmVRTtrnlhdb" +
                        "kwyiZXqWTFwQBpp27dua/0NIPVcROck52+0vsPOOPlLnVY0lYAAAAASUVORK5CYII=";
                    img.style.cursor = 'move';
                    e.dataTransfer.setDragImage(img, 18, 18);
                    this.startDragging.emit(e);
                };
                SidebarComponent.prototype.dragEnd = function (e) {
                    var iconWidth = 36;
                    var asideWidth = 240;
                    if (window.innerWidth >= 768 && e.x > window.innerWidth - asideWidth - iconWidth) {
                        return false;
                    }
                    this._storyBlockService.addRequest$.emit(e);
                };
                SidebarComponent.prototype.isDebug = function () {
                    return (location.search.indexOf('?debug') >= 0);
                };
                __decorate([
                    core_10.Output(), 
                    __metadata('design:type', core_10.EventEmitter)
                ], SidebarComponent.prototype, "startDragging", void 0);
                __decorate([
                    core_10.Output(), 
                    __metadata('design:type', core_10.EventEmitter)
                ], SidebarComponent.prototype, "endDragging", void 0);
                __decorate([
                    core_10.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], SidebarComponent.prototype, "storyBlock", null);
                __decorate([
                    core_10.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], SidebarComponent.prototype, "storyBlocksLength", null);
                SidebarComponent = __decorate([
                    core_10.Component({
                        selector: 'sidebar',
                        template: "\n        <div *ngIf=\"_index == -1\">\n            <div class=\"sidebar-action\">\n                <a class=\"create-storyblock\" draggable=\"true\" (dragstart)=\"dragStart($event)\" (dragend)=\"dragEnd($event)\">Create storyblock</a>\n            </div>\n            <div class=\"sidebar-count\">\n                <span class=\"label\">Total chapters</span><span class=\"count\">{{_storyBlocksLength}}</span>\n            </div>\n        </div>\n        <div *ngIf=\"_index >= 0 && !!_storyBlock\">\n            <div class=\"sidebar-action\">\n                <h3><span class=\"capital-letter\">Chapter</span> {{_storyBlock.blockNumber+1}}</h3>\n            </div>\n            <div class=\"sidebar-separator\"></div>\n            <div class=\"sidebar-action\">\n                <div class=\"form-group\">\n                    <label>Storyblock type</label>\n                    <div class=\"select-wrapper\">\n                        <select [(ngModel)]=\"_storyBlock.type\">\n                            <option *ngFor=\"#storyBlockType of storyBlockTypes\" value={{storyBlockType.id}}>{{storyBlockType.name}}</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"sidebar-separator\"></div>\n            <div class=\"sidebar-count\">\n                <span class=\"label\">Total characters</span><span class=\"count\">{{_storyBlock.description.length}}</span>\n            </div>\n            <div class=\"sidebar-info\" *ngIf=\"!!_storyBlock.createdAt\">\n                <span class=\"label\">Created</span><span class=\"info\">{{utilsService.getHumanDate(_storyBlock.createdAt)}}</span>\n            </div>\n            <div class=\"sidebar-info\" *ngIf=\"!!_storyBlock.lastModifiedAt\">\n                <span class=\"label\">Last modified</span><span class=\"info\">{{utilsService.getHumanDate(_storyBlock.lastModifiedAt)}}</span>\n            </div>\n        </div>\n        <debug-console *ngIf=\"isDebug()\"></debug-console>\n    ",
                        providers: [utils_service_1.UtilsService],
                        directives: [debug_console_component_1.DebugConsoleComponent],
                        inputs: ['storyBlock', 'storyBlocksLength']
                    }), 
                    __metadata('design:paramtypes', [logger_service_5.LoggerService, storyblocks_service_1.StoryBlockService, utils_service_1.UtilsService])
                ], SidebarComponent);
                return SidebarComponent;
            }());
            exports_17("SidebarComponent", SidebarComponent);
        }
    }
});
System.register("components/signin-form.component", ["angular2/core", "models/user", "services/auth.service", "angular2/common", "services/validators.service", "services/webstorage.service", "config/configuration", "services/logger.service"], function(exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var core_11, user_1, auth_service_1, common_2, validators_service_1, webstorage_service_2, configuration_4, logger_service_6;
    var SignInComponent;
    return {
        setters:[
            function (core_11_1) {
                core_11 = core_11_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (common_2_1) {
                common_2 = common_2_1;
            },
            function (validators_service_1_1) {
                validators_service_1 = validators_service_1_1;
            },
            function (webstorage_service_2_1) {
                webstorage_service_2 = webstorage_service_2_1;
            },
            function (configuration_4_1) {
                configuration_4 = configuration_4_1;
            },
            function (logger_service_6_1) {
                logger_service_6 = logger_service_6_1;
            }],
        execute: function() {
            SignInComponent = (function () {
                function SignInComponent(logger, authService, builder, webStorageService, configuration) {
                    this.logger = logger;
                    this.authService = authService;
                    this.builder = builder;
                    this.webStorageService = webStorageService;
                    this.configuration = configuration;
                    this.user = new user_1.User();
                    this.submitted = false;
                    this.closeModal = new core_11.EventEmitter();
                    this.swapWindow = new core_11.EventEmitter();
                    this.notify = new core_11.EventEmitter();
                    this.authStatus = new core_11.EventEmitter();
                    this.user = new user_1.User();
                    this.submitted = false;
                    this.form = builder.group({
                        email: ['', common_2.Validators.compose([common_2.Validators.required, common_2.Validators.pattern(validators_service_1.emailRegexp)])],
                        password: ['', common_2.Validators.required],
                    });
                }
                SignInComponent.prototype.close = function (event) {
                    this.closeModal.emit(event);
                };
                SignInComponent.prototype.swapToSignUp = function () {
                    this.swapWindow.emit(event);
                };
                SignInComponent.prototype.onSignIn = function (event) {
                    var _this = this;
                    this.submitted = true;
                    if (this.form.valid) {
                        this.authService.login(this.user).subscribe(function (data) {
                            _this.webStorageService.put(_this.configuration.token.name, data);
                        }, function (err) {
                            _this.logger.log(logger_service_6.DEBUG_LEVEL.WARN, 'onSignIn', 'Server error', err);
                            _this.notify.emit({
                                type: 'error',
                                message: 'Invalid email or password'
                            });
                        }, function () {
                            _this.logger.log(logger_service_6.DEBUG_LEVEL.INFO, 'onSignIn', 'logged in');
                            _this.authStatus.emit('Login');
                            _this.authService.authStatusChange$.emit('Login');
                            _this.close('');
                        });
                    }
                };
                __decorate([
                    core_11.Output(), 
                    __metadata('design:type', core_11.EventEmitter)
                ], SignInComponent.prototype, "closeModal", void 0);
                __decorate([
                    core_11.Output(), 
                    __metadata('design:type', core_11.EventEmitter)
                ], SignInComponent.prototype, "swapWindow", void 0);
                __decorate([
                    core_11.Output(), 
                    __metadata('design:type', core_11.EventEmitter)
                ], SignInComponent.prototype, "notify", void 0);
                __decorate([
                    core_11.Output(), 
                    __metadata('design:type', core_11.EventEmitter)
                ], SignInComponent.prototype, "authStatus", void 0);
                SignInComponent = __decorate([
                    core_11.Component({
                        selector: 'sign-in-form',
                        template: "\n        <div class=\"form-wrapper\">\n            <div class=\"flexbox flex-row\">\n                <h1>Come in, storyteller</h1>\n                <div><a class=\"close\" (click)=\"close($event)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></a></div>\n            </div>\n            <form [ngFormModel]=\"form\" (ngSubmit)=\"onSignIn($event)\" novalidate>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your email\"\n                    [(ngModel)]=\"user.email\" \n                    [ngFormControl]=\"form.controls['email']\"\n                    #email=\"ngForm\"\n                    >\n                <label for=\"email\">Email</label>\n                <div  *ngIf=\"(email.dirty || submitted) && !email.valid\" class=\"panel panel-error\">\n                    Email is invalid\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Your password\"\n                    [(ngModel)]=\"user.password\" \n                    [ngFormControl]=\"form.controls['password']\"\n                    #password=\"ngForm\"\n                    >\n                <label for=\"password\">Password</label>\n                <div  *ngIf=\"(password.dirty || submitted) && !password.valid\" class=\"panel panel-error\">\n                    The password should be at least 6 characters long\n                </div>\n              </div>\n              <button type=\"submit\" class=\"button primary block-button\">Sign in</button>\n              <div class=\"swap-form\"><a (click)=\"swapToSignUp()\">I want to create a new account</a></div>\n            </form>\n        </div>\n    ",
                        providers: [],
                        directives: [common_2.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [logger_service_6.LoggerService, auth_service_1.AuthService, common_2.FormBuilder, webstorage_service_2.WebStorageService, configuration_4.Configuration])
                ], SignInComponent);
                return SignInComponent;
            }());
            exports_18("SignInComponent", SignInComponent);
        }
    }
});
System.register("components/signup-form.component", ["angular2/core", "models/user", "services/auth.service", "angular2/common", "services/validators.service", "services/webstorage.service", "config/configuration", "services/logger.service"], function(exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    var core_12, user_2, auth_service_2, common_3, validators_service_2, webstorage_service_3, configuration_5, logger_service_7;
    var SignUpComponent;
    return {
        setters:[
            function (core_12_1) {
                core_12 = core_12_1;
            },
            function (user_2_1) {
                user_2 = user_2_1;
            },
            function (auth_service_2_1) {
                auth_service_2 = auth_service_2_1;
            },
            function (common_3_1) {
                common_3 = common_3_1;
            },
            function (validators_service_2_1) {
                validators_service_2 = validators_service_2_1;
            },
            function (webstorage_service_3_1) {
                webstorage_service_3 = webstorage_service_3_1;
            },
            function (configuration_5_1) {
                configuration_5 = configuration_5_1;
            },
            function (logger_service_7_1) {
                logger_service_7 = logger_service_7_1;
            }],
        execute: function() {
            SignUpComponent = (function () {
                function SignUpComponent(logger, authService, builder, webStorageService, configuration) {
                    this.logger = logger;
                    this.authService = authService;
                    this.builder = builder;
                    this.webStorageService = webStorageService;
                    this.configuration = configuration;
                    this.user = new user_2.User();
                    this.submitted = false;
                    this.closeModal = new core_12.EventEmitter();
                    this.swapWindow = new core_12.EventEmitter();
                    this.notify = new core_12.EventEmitter();
                    this.authStatus = new core_12.EventEmitter();
                    this.user = new user_2.User();
                    this.submitted = false;
                    this.form = builder.group({
                        name: [''],
                        email: ['', common_3.Validators.compose([common_3.Validators.required, common_3.Validators.pattern(validators_service_2.emailRegexp)])],
                        password: ['', common_3.Validators.compose([common_3.Validators.required, common_3.Validators.minLength(6)])],
                        confirmPassword: ['', common_3.Validators.required],
                    }, { validator: validators_service_2.matchingPasswords('password', 'confirmPassword') });
                }
                SignUpComponent.prototype.close = function (event) {
                    this.closeModal.emit(event);
                };
                SignUpComponent.prototype.swapToSignIn = function () {
                    this.swapWindow.emit(event);
                };
                SignUpComponent.prototype.onSignUp = function (event) {
                    var _this = this;
                    this.submitted = true;
                    console.log(JSON.stringify(this.form.value));
                    if (this.form.valid) {
                        this.authService.register(this.user).subscribe(function (data) {
                            _this.webStorageService.put(_this.configuration.token.name, data);
                        }, function (err) {
                            _this.logger.log(logger_service_7.DEBUG_LEVEL.WARN, 'onSignUp', 'Server error', err);
                            _this.notify.emit({
                                type: 'error',
                                message: 'The email is already taken'
                            });
                        }, function () {
                            _this.logger.log(logger_service_7.DEBUG_LEVEL.INFO, 'onSignUp', 'registered');
                            _this.authStatus.emit('Registered');
                            _this.authService.authStatusChange$.emit('Registered');
                            _this.close('');
                        });
                    }
                };
                __decorate([
                    core_12.Output(), 
                    __metadata('design:type', core_12.EventEmitter)
                ], SignUpComponent.prototype, "closeModal", void 0);
                __decorate([
                    core_12.Output(), 
                    __metadata('design:type', core_12.EventEmitter)
                ], SignUpComponent.prototype, "swapWindow", void 0);
                __decorate([
                    core_12.Output(), 
                    __metadata('design:type', core_12.EventEmitter)
                ], SignUpComponent.prototype, "notify", void 0);
                __decorate([
                    core_12.Output(), 
                    __metadata('design:type', core_12.EventEmitter)
                ], SignUpComponent.prototype, "authStatus", void 0);
                SignUpComponent = __decorate([
                    core_12.Component({
                        selector: 'sign-up-form',
                        template: "\n        <div class=\"form-wrapper\">\n            <div class=\"flexbox flex-row\">\n                <h1>Become a storyteller</h1>\n                <div><a class=\"close\" (click)=\"close($event)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></a></div>\n            </div>\n            <form [ngFormModel]=\"form\" (ngSubmit)=\"onSignUp($event)\" novalidate>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your name\"\n                    [(ngModel)]=\"user.name\"\n                    [ngFormControl]=\"form.controls['name']\"\n                    #name=\"ngForm\"\n                    >\n                <label for=\"name\">Name</label>\n                <div  *ngIf=\"(name.dirty || submitted) && !name.valid\" class=\"panel panel-error\">\n                    Your name is required\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your email\"\n                    [(ngModel)]=\"user.email\" \n                    [ngFormControl]=\"form.controls['email']\"\n                    #email=\"ngForm\"\n                    >\n                <label for=\"email\">Email</label>\n                <div  *ngIf=\"(email.dirty || submitted) && !email.valid\" class=\"panel panel-error\">\n                    Email is invalid\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Your password\"\n                    [(ngModel)]=\"user.password\" \n                    [ngFormControl]=\"form.controls['password']\"\n                    #password=\"ngForm\"\n                    >\n                <label for=\"password\">Password</label>\n                <div  *ngIf=\"(password.dirty || submitted) && !password.valid\" class=\"panel panel-error\">\n                    The password should be at least 6 characters long\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm password\"\n                    [(ngModel)]=\"user.confirmPassword\" \n                    [ngFormControl]=\"form.controls['confirmPassword']\"\n                    #confirmPassword=\"ngForm\"\n                    >\n                <label for=\"confirm-password\">Password</label>\n                <div *ngIf=\"(confirmPassword.dirty || submitted) && form.hasError('mismatchedPasswords')\" class=\"panel panel-error\">\n                    The passwords don't match\n                </div>\n              </div>\n              <button type=\"submit\" class=\"button primary block-button\">Sign up</button>\n              <div class=\"swap-form\"><a (click)=\"swapToSignIn()\">I already have an account</a></div>\n            </form>\n        </div>\n    ",
                        providers: [],
                        directives: [common_3.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [logger_service_7.LoggerService, auth_service_2.AuthService, common_3.FormBuilder, webstorage_service_3.WebStorageService, configuration_5.Configuration])
                ], SignUpComponent);
                return SignUpComponent;
            }());
            exports_19("SignUpComponent", SignUpComponent);
        }
    }
});
System.register("components/auth-form.component", ["angular2/core", "components/signin-form.component", "components/signup-form.component"], function(exports_20, context_20) {
    "use strict";
    var __moduleName = context_20 && context_20.id;
    var core_13, signin_form_component_1, signup_form_component_1;
    var AuthFormComponent;
    return {
        setters:[
            function (core_13_1) {
                core_13 = core_13_1;
            },
            function (signin_form_component_1_1) {
                signin_form_component_1 = signin_form_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            }],
        execute: function() {
            AuthFormComponent = (function () {
                function AuthFormComponent() {
                    this.closeModal = new core_13.EventEmitter();
                    this.notify = new core_13.EventEmitter();
                    this.authStatus = new core_13.EventEmitter();
                    this.login = false;
                }
                AuthFormComponent.prototype.hideAccessForm = function (event) {
                    this.closeModal.emit(event);
                };
                AuthFormComponent.prototype.notifyMessage = function (event) {
                    this.notify.emit(event);
                };
                AuthFormComponent.prototype.authStatusChanged = function (event) {
                    this.authStatus.emit(event);
                };
                __decorate([
                    core_13.Output(), 
                    __metadata('design:type', core_13.EventEmitter)
                ], AuthFormComponent.prototype, "closeModal", void 0);
                __decorate([
                    core_13.Output(), 
                    __metadata('design:type', core_13.EventEmitter)
                ], AuthFormComponent.prototype, "notify", void 0);
                __decorate([
                    core_13.Output(), 
                    __metadata('design:type', core_13.EventEmitter)
                ], AuthFormComponent.prototype, "authStatus", void 0);
                AuthFormComponent = __decorate([
                    core_13.Component({
                        selector: 'auth-form',
                        template: "\n        <sign-in-form \n            *ngIf=\"login\" \n            (closeModal)=\"hideAccessForm()\"\n            (swapWindow)=\"login=!login\"\n            (authStatus)=\"authStatusChanged($event)\"\n            (notify)=\"notifyMessage($event)\"\n            ></sign-in-form>\n        <sign-up-form \n            *ngIf=\"!login\" \n            (closeModal)=\"hideAccessForm()\"\n            (swapWindow)=\"login=!login\"\n            (authStatus)=\"authStatusChanged($event)\"\n            (notify)=\"notifyMessage($event)\"\n            ></sign-up-form>\n    ",
                        providers: [],
                        directives: [signin_form_component_1.SignInComponent, signup_form_component_1.SignUpComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AuthFormComponent);
                return AuthFormComponent;
            }());
            exports_20("AuthFormComponent", AuthFormComponent);
        }
    }
});
System.register("directives/collapse.directive", ['angular2/core', 'angular2/src/animate/animation_builder'], function(exports_21, context_21) {
    "use strict";
    var __moduleName = context_21 && context_21.id;
    var core_14, animation_builder_1;
    var Collapse;
    return {
        setters:[
            function (core_14_1) {
                core_14 = core_14_1;
            },
            function (animation_builder_1_1) {
                animation_builder_1 = animation_builder_1_1;
            }],
        execute: function() {
            Collapse = (function () {
                function Collapse(animationBuilder, _el) {
                    this._el = _el;
                    this._animation = animationBuilder.css();
                }
                Collapse.prototype.ngOnChanges = function (changes) {
                    // if the change happened in the collapse property
                    if (changes.collapse) {
                        if (this.collapse) {
                            this.hide();
                        }
                        else {
                            this.show();
                        }
                    }
                };
                Collapse.prototype.hide = function () {
                    var animation = this._animation
                        .setDuration(350)
                        .setFromStyles({
                        'flex-grow': 1,
                        'opacity': 1,
                        'transition-timing-function': 'cubic-bezier(0.575, 0.255, 0.440, 0.985);'
                    })
                        .setToStyles({
                        'flex-grow': 0,
                        'opacity': 0
                    });
                    // a is the Animation instance running this animation.
                    var a = animation
                        .start(this._el.nativeElement);
                    a.onComplete(function () {
                    });
                };
                Collapse.prototype.show = function () {
                    var animation = this._animation
                        .setDuration(350)
                        .setFromStyles({
                        'flex-grow': 0,
                        'opacity': 0,
                        'transition-timing-function': 'cubic-bezier(0.575, 0.255, 0.440, 0.985);'
                    })
                        .setToStyles({
                        'flex-grow': 1,
                        'opacity': 1
                    });
                    // a is the Animation instance running this animation.
                    var a = animation
                        .start(this._el.nativeElement);
                    a.onComplete(function () {
                    });
                };
                __decorate([
                    core_14.Input(), 
                    __metadata('design:type', Boolean)
                ], Collapse.prototype, "collapse", void 0);
                Collapse = __decorate([
                    core_14.Directive({
                        selector: '[collapse]'
                    }), 
                    __metadata('design:paramtypes', [animation_builder_1.AnimationBuilder, core_14.ElementRef])
                ], Collapse);
                return Collapse;
            }());
            exports_21("Collapse", Collapse);
        }
    }
});
System.register("directives/disappear.directive", ['angular2/core', 'angular2/src/animate/animation_builder'], function(exports_22, context_22) {
    "use strict";
    var __moduleName = context_22 && context_22.id;
    var core_15, animation_builder_2;
    var Disappear;
    return {
        setters:[
            function (core_15_1) {
                core_15 = core_15_1;
            },
            function (animation_builder_2_1) {
                animation_builder_2 = animation_builder_2_1;
            }],
        execute: function() {
            Disappear = (function () {
                function Disappear(animationBuilder, _el) {
                    this._el = _el;
                    this._animation = animationBuilder.css();
                }
                Disappear.prototype.ngOnChanges = function (changes) {
                    // if the change happened in the disappear property
                    if (changes.disappear) {
                        if (this.disappear) {
                            this.hide();
                        }
                        else {
                            this.show();
                        }
                    }
                };
                Disappear.prototype.hide = function () {
                    var animation = this._animation
                        .setDuration(100)
                        .setFromStyles({
                        'opacity': 1,
                        'transition-timing-function': 'cubic-bezier(0.575, 0.255, 0.440, 0.985);'
                    })
                        .setToStyles({
                        'opacity': 0
                    });
                    // a is the Animation instance running this animation.
                    var a = animation
                        .start(this._el.nativeElement);
                    a.onComplete(function () {
                    });
                };
                Disappear.prototype.show = function () {
                    var animation = this._animation
                        .setDuration(100)
                        .setFromStyles({
                        'opacity': 0,
                        'transition-timing-function': 'cubic-bezier(0.575, 0.255, 0.440, 0.985);'
                    })
                        .setToStyles({
                        'opacity': 1
                    });
                    // a is the Animation instance running this animation.
                    var a = animation
                        .start(this._el.nativeElement);
                    a.onComplete(function () {
                    });
                };
                __decorate([
                    core_15.Input(), 
                    __metadata('design:type', Boolean)
                ], Disappear.prototype, "disappear", void 0);
                Disappear = __decorate([
                    core_15.Directive({
                        selector: '[disappear]'
                    }), 
                    __metadata('design:paramtypes', [animation_builder_2.AnimationBuilder, core_15.ElementRef])
                ], Disappear);
                return Disappear;
            }());
            exports_22("Disappear", Disappear);
        }
    }
});
System.register("models/story", [], function(exports_23, context_23) {
    "use strict";
    var __moduleName = context_23 && context_23.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("components/storyblock.component", ["angular2/core", "services/utils.service", "angular2/src/animate/animation_builder", "services/storyblocks.service", "config/configuration", "services/logger.service", "directives/collapse.directive", "directives/disappear.directive"], function(exports_24, context_24) {
    "use strict";
    var __moduleName = context_24 && context_24.id;
    var core_16, utils_service_2, animation_builder_3, storyblocks_service_2, configuration_6, logger_service_8, collapse_directive_1, disappear_directive_1;
    var StoryBlockComponent;
    return {
        setters:[
            function (core_16_1) {
                core_16 = core_16_1;
            },
            function (utils_service_2_1) {
                utils_service_2 = utils_service_2_1;
            },
            function (animation_builder_3_1) {
                animation_builder_3 = animation_builder_3_1;
            },
            function (storyblocks_service_2_1) {
                storyblocks_service_2 = storyblocks_service_2_1;
            },
            function (configuration_6_1) {
                configuration_6 = configuration_6_1;
            },
            function (logger_service_8_1) {
                logger_service_8 = logger_service_8_1;
            },
            function (collapse_directive_1_1) {
                collapse_directive_1 = collapse_directive_1_1;
            },
            function (disappear_directive_1_1) {
                disappear_directive_1 = disappear_directive_1_1;
            }],
        execute: function() {
            StoryBlockComponent = (function () {
                function StoryBlockComponent(logger, _ab, _e, utilsService, storyBlockService, configuration) {
                    this.logger = logger;
                    this._ab = _ab;
                    this._e = _e;
                    this.utilsService = utilsService;
                    this.storyBlockService = storyBlockService;
                    this.configuration = configuration;
                    this._exposed = false;
                    this._active = true;
                    this._selected = false;
                    this._zoomLevel = 10;
                    this._previousZoomLevel = 10;
                    this.collapsed = false;
                    this.disappeared = false;
                    this.zoomEvent = new core_16.EventEmitter();
                    this.exposeEvent = new core_16.EventEmitter();
                    this.removeStoryBlockEvent = new core_16.EventEmitter();
                    this.notify = new core_16.EventEmitter();
                    this.modified = new core_16.EventEmitter();
                    this.loaded = new core_16.EventEmitter();
                }
                StoryBlockComponent.prototype.ngOnInit = function () {
                    this.changePositionOnZoom(1000);
                    this.storyBlockInfo.loaded = true;
                    this.loaded.emit(this.storyBlockInfo);
                };
                Object.defineProperty(StoryBlockComponent.prototype, "zoomLevel", {
                    set: function (value) {
                        this._previousZoomLevel = (this._previousZoomLevel == undefined) ? 10 : this._previousZoomLevel;
                        this._zoomLevel = (this._zoomLevel == undefined) ? 10 : this._zoomLevel;
                        if (this._zoomLevel != value) {
                            this._previousZoomLevel = this._zoomLevel;
                            this._zoomLevel = value;
                            this.zoomChanged();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StoryBlockComponent.prototype, "exposedIndex", {
                    set: function (value) {
                        this._exposed = (value == this.index);
                    },
                    enumerable: true,
                    configurable: true
                });
                StoryBlockComponent.prototype.swapCollapse = function () {
                    this.collapsed = !this.collapsed;
                };
                StoryBlockComponent.prototype.swapDisappear = function () {
                    this.disappeared = !this.disappeared;
                };
                StoryBlockComponent.prototype.zoom = function (e) {
                    var e = window.event || e; // old IE support
                    this.zoomEvent.emit(e);
                    e.preventDefault();
                    e.stopPropagation();
                };
                StoryBlockComponent.prototype.zoomChanged = function () {
                    this.logger.log(logger_service_8.DEBUG_LEVEL.VERBOSE, 'zoomChanged', '', {
                        storyBlock: this.index,
                        previousZoom: this._previousZoomLevel,
                        currentZoom: this._zoomLevel
                    });
                    if (this._zoomLevel < this.storyBlockInfo.importance) {
                        this.fadeOut(1000);
                        this._active = false;
                    }
                    else {
                        this.changePositionOnZoom(1000);
                        this._active = true;
                    }
                };
                StoryBlockComponent.prototype.fadeIn = function (speed) {
                    this.logger.log(logger_service_8.DEBUG_LEVEL.VERBOSE, 'fadeIn', '', {
                        storyBlock: this.index,
                        message: 'Fading in'
                    });
                    var animation = this._ab.css();
                    var _self = this;
                    var fromStyle = {};
                    var toStyle = {};
                    fromStyle['display'] = 'flex';
                    fromStyle['transition-timing-function'] = 'cubic-bezier(0.575, 0.255, 0.440, 0.985);';
                    toStyle['opacity'] = 1;
                    animation
                        .setDuration(speed)
                        .setFromStyles(fromStyle)
                        .setToStyles(toStyle);
                    if (!!_self._actionTimeout) {
                        clearTimeout(_self._actionTimeout);
                    }
                    _self._actionTimeout = setTimeout(function () {
                        animation.start(_self._e.nativeElement);
                    }, 100);
                };
                StoryBlockComponent.prototype.hasId = function () {
                    return !!((this.storyBlockInfo || { _id: undefined })._id);
                };
                StoryBlockComponent.prototype.fadeOut = function (speed) {
                    if (this._active) {
                        this.logger.log(logger_service_8.DEBUG_LEVEL.VERBOSE, 'fadeOut', '', {
                            storyBlock: this.index,
                            previousZoom: this._previousZoomLevel,
                            currentZoom: this._zoomLevel,
                            importance: this.storyBlockInfo.importance,
                            message: 'Fading out'
                        });
                        var animation_1 = this._ab.css();
                        var _self = this;
                        var fromStyle = {};
                        var toStyle = {};
                        toStyle['transition-timing-function'] = 'cubic-bezier(0.575, 0.255, 0.440, 0.985);';
                        toStyle['opacity'] = 0;
                        animation_1
                            .setDuration(speed)
                            .setFromStyles(fromStyle)
                            .setToStyles(toStyle);
                        if (!!_self._actionTimeout) {
                            this.logger.log(logger_service_8.DEBUG_LEVEL.VERBOSE, 'fadeOut', '', {
                                storyBlock: this.index,
                                message: 'Animation removed'
                            });
                            clearTimeout(_self._actionTimeout);
                        }
                        _self._actionTimeout = setTimeout(function () {
                            animation_1.start(_self._e.nativeElement);
                        }, 100);
                    }
                };
                StoryBlockComponent.prototype.changePositionOnZoom = function (speed) {
                    var animation = this._ab.css();
                    var _self = this;
                    var fromStyle = {
                        top: this.configuration.zoom.offset + ((this.configuration.zoom.step + Math.exp(this._previousZoomLevel * this.configuration.zoom.strength)) * this.storyBlockInfo.timePosition) + 'px'
                    };
                    var toStyle = {
                        top: this.configuration.zoom.offset + ((this.configuration.zoom.step + Math.exp(this._zoomLevel * this.configuration.zoom.strength)) * this.storyBlockInfo.timePosition) + 'px'
                    };
                    this.logger.log(logger_service_8.DEBUG_LEVEL.VERBOSE, 'changePositionOnZoom', '', {
                        storyBlock: this.index,
                        previousZoom: this._previousZoomLevel,
                        currentZoom: this._zoomLevel,
                        timePosition: this.storyBlockInfo.timePosition,
                        offset: this.configuration.zoom.offset,
                        step: this.configuration.zoom.step,
                        strength: this.configuration.zoom.strength,
                        fromPosition: fromStyle.top,
                        toPosition: toStyle.top,
                        message: 'Changing position'
                    });
                    if (_self._zoomLevel > _self.storyBlockInfo.importance) {
                        this.logger.log(logger_service_8.DEBUG_LEVEL.VERBOSE, 'changePositionOnZoom', '', {
                            storyBlock: this.index,
                            previousZoom: this._previousZoomLevel,
                            currentZoom: this._zoomLevel,
                            importance: this.storyBlockInfo.importance,
                            message: 'Fading in'
                        });
                        toStyle['opacity'] = 1;
                    }
                    else {
                        this.logger.log(logger_service_8.DEBUG_LEVEL.VERBOSE, 'changePositionOnZoom', '', {
                            storyBlock: this.index,
                            previousZoom: this._previousZoomLevel,
                            currentZoom: this._zoomLevel,
                            importance: this.storyBlockInfo.importance,
                            message: 'Fading out'
                        });
                        toStyle['opacity'] = 0;
                    }
                    toStyle['transition-timing-function'] = 'cubic-bezier(0.575, 0.255, 0.440, 0.985);';
                    animation
                        .setDuration(speed)
                        .setFromStyles(fromStyle)
                        .setToStyles(toStyle);
                    if (!!_self._actionTimeout) {
                        this.logger.log(logger_service_8.DEBUG_LEVEL.VERBOSE, 'changePositionOnZoom', '', {
                            storyBlock: this.index,
                            message: 'Animation removed'
                        });
                        clearTimeout(_self._actionTimeout);
                    }
                    _self._actionTimeout = setTimeout(function () {
                        animation.start(_self._e.nativeElement);
                    }, 100);
                };
                StoryBlockComponent.prototype.focus = function () {
                    var native = this._e.nativeElement;
                    var container = null;
                    var textarea = null;
                    for (var i = 0; i < native.childNodes.length; i++) {
                        if ((native.childNodes[i].className || '').indexOf("text-container") > -1) {
                            container = native.childNodes[i];
                            break;
                        }
                    }
                    if (!!container) {
                        for (var i = 0; i < container.childNodes.length; i++) {
                            if ((container.childNodes[i].className || '').indexOf("description") > -1) {
                                textarea = container.childNodes[i];
                                break;
                            }
                        }
                        if (!!textarea) {
                            setTimeout(function () {
                                textarea.focus();
                            }, 50);
                        }
                    }
                };
                StoryBlockComponent.prototype.edit = function (index, event) {
                    this.logger.log(logger_service_8.DEBUG_LEVEL.INFO, 'edit', 'Saving temporary data ', this.storyBlockInfo);
                    this.storyBlockLocalSave = JSON.parse(JSON.stringify(this.storyBlockInfo));
                    this.exposeEvent.emit(index);
                    this.focus();
                };
                StoryBlockComponent.prototype.remove = function (index, event) {
                    var _this = this;
                    this.storyBlockService.deleteStoryBlock(this.userId, this.story._id, this.storyBlockInfo).subscribe(function (data) {
                        _this.logger.log(logger_service_8.DEBUG_LEVEL.INFO, 'remove', 'Received data', data);
                    }, function (error) {
                        _this.logger.log(logger_service_8.DEBUG_LEVEL.WARN, 'remove', 'Error while removing', _this.storyBlockInfo, error);
                        _this.notify.emit({
                            type: 'error',
                            message: 'Error. Please try again.'
                        });
                    }, function () {
                        _this.logger.log(logger_service_8.DEBUG_LEVEL.INFO, 'remove', 'Removing block index ' + _this.index);
                        _this.notify.emit({
                            type: 'success',
                            message: 'Removed successfully.'
                        });
                        _this.removeStoryBlockEvent.emit(_this.index);
                        _this.modified.emit(_this.storyBlockInfo);
                    });
                };
                StoryBlockComponent.prototype.save = function (index, event) {
                    var _this = this;
                    this.logger.log(logger_service_8.DEBUG_LEVEL.INFO, 'save', 'I am about to save', this.storyBlockInfo);
                    if (!(this.storyBlockInfo.title == '' && this.storyBlockInfo.description == '')) {
                        this.storyBlockService.saveStoryBlock(this.userId, this.story._id, this.storyBlockInfo).subscribe(function (data) {
                            _this.storyBlockInfo = data;
                            _this.logger.log(logger_service_8.DEBUG_LEVEL.INFO, 'save', 'Received ', data);
                            _this.logger.log(logger_service_8.DEBUG_LEVEL.INFO, 'save', 'Saving temporary data ', data, _this.storyBlockInfo);
                            _this.storyBlockLocalSave = JSON.parse(JSON.stringify(_this.storyBlockInfo));
                        }, function (error) {
                            _this.logger.log(logger_service_8.DEBUG_LEVEL.WARN, 'save', 'Error while saving', _this.storyBlockInfo, error);
                            _this.notify.emit({
                                type: 'error',
                                message: 'Error. Please try again.'
                            });
                        }, function () {
                            _this.logger.log(logger_service_8.DEBUG_LEVEL.INFO, 'save', 'Saved ', _this.storyBlockInfo);
                            _this.notify.emit({
                                type: 'success',
                                message: 'Saved successfully.'
                            });
                            _this.modified.emit(_this.storyBlockInfo);
                        });
                    }
                    else {
                        this.notify.emit('Please insert a title or some content.');
                    }
                };
                StoryBlockComponent.prototype.close = function () {
                    this.exposeEvent.emit(-1);
                    if (!this.storyBlockLocalSave) {
                        this.logger.log(logger_service_8.DEBUG_LEVEL.INFO, 'close', 'Removing block index ' + this.index);
                        this.removeStoryBlockEvent.emit(this.index);
                    }
                };
                __decorate([
                    core_16.Output(), 
                    __metadata('design:type', core_16.EventEmitter)
                ], StoryBlockComponent.prototype, "zoomEvent", void 0);
                __decorate([
                    core_16.Output(), 
                    __metadata('design:type', core_16.EventEmitter)
                ], StoryBlockComponent.prototype, "exposeEvent", void 0);
                __decorate([
                    core_16.Output(), 
                    __metadata('design:type', core_16.EventEmitter)
                ], StoryBlockComponent.prototype, "removeStoryBlockEvent", void 0);
                __decorate([
                    core_16.Output(), 
                    __metadata('design:type', core_16.EventEmitter)
                ], StoryBlockComponent.prototype, "notify", void 0);
                __decorate([
                    core_16.Output(), 
                    __metadata('design:type', core_16.EventEmitter)
                ], StoryBlockComponent.prototype, "modified", void 0);
                __decorate([
                    core_16.Output(), 
                    __metadata('design:type', core_16.EventEmitter)
                ], StoryBlockComponent.prototype, "loaded", void 0);
                __decorate([
                    core_16.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], StoryBlockComponent.prototype, "zoomLevel", null);
                __decorate([
                    core_16.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], StoryBlockComponent.prototype, "exposedIndex", null);
                StoryBlockComponent = __decorate([
                    core_16.Component({
                        selector: 'storyblock',
                        template: "\n        <a class=\"index\" (click)=\"swapCollapse()\" (click)=\"swapDisappear()\">\n            <span *ngIf=\"storyBlockInfo.type == 'chapter'\">{{utilsService.getRomanNumeral(storyBlockInfo.blockNumber + 1)}}</span>\n        </a>\n        <div class=\"text-container\" [collapse]=\"collapsed\">\n            <input class=\"title\" [attr.readonly]=\"_exposed ? null : true\" [(ngModel)]=\"storyBlockInfo.title\" placeholder=\"Insert a title\"  [disappear]=\"disappeared\"/>\n            <textarea class=\"description\" [attr.readonly]=\"_exposed ? null : true\" [(ngModel)]=\"storyBlockInfo.description\" placeholder=\"Start writing your story here...\" [disappear]=\"disappeared\"></textarea>\n            <div class=\"default-actions\">\n                <a (click)=\"edit(index, $event)\" class=\"button inline-button primary\">Edit</a>\n                <a (click)=\"remove(index, $event)\" [ngClass]=\"{disabled:!hasId()}\" class=\"button inline-button alert\">Remove</a>\n            </div>\n            <div class=\"exposed-actions\">\n                <a (click)=\"save(index, $event)\" class=\"button inline-button primary\">Save</a>\n                <a (click)=\"close()\" class=\"button inline-button secondary\">Close</a>\n            </div>\n        </div>\n    ",
                        directives: [collapse_directive_1.Collapse, disappear_directive_1.Disappear],
                        providers: [utils_service_2.UtilsService],
                        inputs: ['story', 'storyBlockInfo', 'index', 'userId']
                    }), 
                    __metadata('design:paramtypes', [logger_service_8.LoggerService, animation_builder_3.AnimationBuilder, core_16.ElementRef, utils_service_2.UtilsService, storyblocks_service_2.StoryBlockService, configuration_6.Configuration])
                ], StoryBlockComponent);
                return StoryBlockComponent;
            }());
            exports_24("StoryBlockComponent", StoryBlockComponent);
        }
    }
});
System.register("components/timeline.component", ["angular2/core"], function(exports_25, context_25) {
    "use strict";
    var __moduleName = context_25 && context_25.id;
    var core_17;
    var TimelineComponent;
    return {
        setters:[
            function (core_17_1) {
                core_17 = core_17_1;
            }],
        execute: function() {
            TimelineComponent = (function () {
                function TimelineComponent() {
                }
                TimelineComponent = __decorate([
                    core_17.Component({
                        selector: 'timeline',
                        template: "\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TimelineComponent);
                return TimelineComponent;
            }());
            exports_25("TimelineComponent", TimelineComponent);
        }
    }
});
System.register("components/add-button.component", ["angular2/core"], function(exports_26, context_26) {
    "use strict";
    var __moduleName = context_26 && context_26.id;
    var core_18;
    var AddButtonComponent;
    return {
        setters:[
            function (core_18_1) {
                core_18 = core_18_1;
            }],
        execute: function() {
            AddButtonComponent = (function () {
                function AddButtonComponent(_e) {
                    this._e = _e;
                }
                Object.defineProperty(AddButtonComponent.prototype, "offsetY", {
                    set: function (value) {
                        this._offsetY = value;
                        this.offsetChanged(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                AddButtonComponent.prototype.offsetChanged = function (value) {
                    this._e.nativeElement.style.top = value + 'px';
                };
                __decorate([
                    core_18.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], AddButtonComponent.prototype, "offsetY", null);
                AddButtonComponent = __decorate([
                    core_18.Component({
                        selector: 'add-button',
                        template: "\n        <a><span>+</span></a>\n    ",
                        inputs: ['offsetY']
                    }), 
                    __metadata('design:paramtypes', [core_18.ElementRef])
                ], AddButtonComponent);
                return AddButtonComponent;
            }());
            exports_26("AddButtonComponent", AddButtonComponent);
        }
    }
});
System.register("components/story.component", ['angular2/core', 'angular2/common', "services/storyblocks.service", "components/storyblock.component", "components/timeline.component", "components/add-button.component", "config/configuration", "services/auth.service", "services/webstorage.service", "services/logger.service"], function(exports_27, context_27) {
    "use strict";
    var __moduleName = context_27 && context_27.id;
    var core_19, common_4, storyblocks_service_3, storyblock_component_1, timeline_component_1, add_button_component_1, configuration_7, auth_service_3, webstorage_service_4, logger_service_9;
    var StoryComponent;
    return {
        setters:[
            function (core_19_1) {
                core_19 = core_19_1;
            },
            function (common_4_1) {
                common_4 = common_4_1;
            },
            function (storyblocks_service_3_1) {
                storyblocks_service_3 = storyblocks_service_3_1;
            },
            function (storyblock_component_1_1) {
                storyblock_component_1 = storyblock_component_1_1;
            },
            function (timeline_component_1_1) {
                timeline_component_1 = timeline_component_1_1;
            },
            function (add_button_component_1_1) {
                add_button_component_1 = add_button_component_1_1;
            },
            function (configuration_7_1) {
                configuration_7 = configuration_7_1;
            },
            function (auth_service_3_1) {
                auth_service_3 = auth_service_3_1;
            },
            function (webstorage_service_4_1) {
                webstorage_service_4 = webstorage_service_4_1;
            },
            function (logger_service_9_1) {
                logger_service_9 = logger_service_9_1;
            }],
        execute: function() {
            StoryComponent = (function () {
                function StoryComponent(logger, storyBlockService, configuration, webStorageService, authService) {
                    var _this = this;
                    this.logger = logger;
                    this.storyBlockService = storyBlockService;
                    this.configuration = configuration;
                    this.webStorageService = webStorageService;
                    this.authService = authService;
                    this.token = '';
                    this.maxIndex = 0;
                    this.modified = false;
                    this.hasLoaded = false;
                    this.notify = new core_19.EventEmitter();
                    this.exposeStoryBlock = new core_19.EventEmitter();
                    this.storyBlockList = new core_19.EventEmitter();
                    this.loaded = new core_19.EventEmitter();
                    authService.authStatusChange$.subscribe(function (event) { return _this.authStatusChanged(event); });
                    storyBlockService.addRequest$.subscribe(function (event) { return _this.addStoryBlock(event); });
                }
                StoryComponent.prototype.ngOnInit = function () {
                    this.storyBlocks = [];
                    this.storyBlocksLoaded = 0;
                    this.zoomLevel = 4;
                    this.exposedIndex = -1;
                    this.exposedStoryBlock = null;
                    this.modified = false;
                    this.addButton = {
                        visible: false,
                        top: 0
                    };
                    this.menuVisible = false;
                    this.accessFormVisible = false;
                    this.notification = {
                        type: null,
                        message: '',
                    };
                    if (!!this.story && !!this.story._id) {
                        this.getStoryBlockTypes();
                        this.getStoryBlocks(this.userId);
                    }
                    else {
                        this.modified = true;
                    }
                    this.checkIfLoadingIsComplete();
                };
                StoryComponent.prototype.ngOnChanges = function (changes) {
                    for (var propName in changes) {
                        if (propName === 'story') {
                            console.log('Changed story', changes[propName]);
                            this.ngOnInit();
                        }
                    }
                };
                StoryComponent.prototype.authUser = function () {
                    if (this.authService.isLoggedIn()) {
                        return this.authService.getIdFromToken();
                    }
                    else {
                        var anonymousToken = this.webStorageService.get('anonymous_token');
                        if (!anonymousToken) {
                            var anonymousToken = this.authService.generateAnonymousToken();
                            this.webStorageService.put('anonymous_token', anonymousToken);
                        }
                        return this.authService.getIdFromAnonymousToken(anonymousToken);
                    }
                };
                StoryComponent.prototype.authStatusChanged = function (event) {
                    this.refreshBlockList();
                };
                StoryComponent.prototype.refreshBlockList = function () {
                    this.userId = this.authUser();
                    this.getStoryBlocks(this.userId);
                };
                StoryComponent.prototype.storyBlockLoaded = function ($event) {
                    this.storyBlocksLoaded = this.storyBlocksLoaded + 1;
                    this.checkIfLoadingIsComplete();
                };
                StoryComponent.prototype.checkIfLoadingIsComplete = function () {
                    this.hasLoaded = this.storyBlocks.length === this.storyBlocksLoaded && this.modified;
                    this.logger.log(logger_service_9.DEBUG_LEVEL.INFO, 'checkIfLoadingIsComplete', 'Checking if all the blocks are loaded', this.storyBlocks.length, this.storyBlocksLoaded);
                    if (this.hasLoaded) {
                        this.loaded.emit(this.storyBlockList);
                    }
                };
                StoryComponent.prototype.getStoryBlockTypes = function () {
                    this.storyBlockTypes = this.storyBlockService.getStoryBlockTypes();
                    this.storyBlockDefaultTypes = this.storyBlockService.getStoryBlockDefaultTypes();
                };
                StoryComponent.prototype.getStoryBlocks = function (userId) {
                    var _this = this;
                    this.storyBlockService.getStoryBlocks(userId, this.story._id).subscribe(function (data) {
                        _this.storyBlocks = data;
                        _this.maxIndex = 0;
                        for (var i = 0; i < _this.storyBlocks.length; i++) {
                            if (_this.storyBlocks[i].type === 'chapter') {
                                _this.maxIndex = Math.max(_this.maxIndex, _this.storyBlocks[i].blockId || 0);
                            }
                        }
                        if (!_this.modified && (!_this.storyBlocks || _this.storyBlocks.length == 0)) {
                            _this.logger.log(logger_service_9.DEBUG_LEVEL.INFO, 'getStoryBlocks', 'No blocks received!');
                            _this.storyBlockService.generateTestData(_this.userId, _this.story._id).subscribe(function (saveDefaultBlocks) {
                                _this.storyBlocks = saveDefaultBlocks;
                                _this.recalculateStoryBlockNumbers();
                                _this.storyBlockList.emit(_this.storyBlocks);
                            }, function (err) { return _this.logger.log(logger_service_9.DEBUG_LEVEL.ERROR, 'getStoryBlocks', 'Error', err); }, function () {
                                _this.logger.log(logger_service_9.DEBUG_LEVEL.INFO, 'getStoryBlocks', 'Loaded ' + _this.storyBlocks.length + ' default blocks', _this.storyBlocks);
                                _this.modified = true;
                            });
                        }
                        else {
                            _this.storyBlockList.emit(_this.storyBlocks);
                            _this.recalculateStoryBlockNumbers();
                        }
                    }, function (err) {
                        _this.logger.log(logger_service_9.DEBUG_LEVEL.ERROR, 'getStoryBlocks', 'Error', err);
                    }, function () {
                        _this.logger.log(logger_service_9.DEBUG_LEVEL.INFO, 'getStoryBlocks', 'Loaded ' + _this.storyBlocks.length + ' blocks', _this.storyBlocks);
                        _this.modified = true;
                    });
                };
                StoryComponent.prototype.removeStoryBlock = function (index) {
                    if (this.storyBlocks[index].loaded) {
                        this.storyBlocksLoaded--;
                    }
                    this.storyBlocks.splice(index, 1);
                    this.storyBlockList.emit(this.storyBlocks);
                    this.recalculateStoryBlockNumbers();
                };
                StoryComponent.prototype.recalculateStoryBlockNumbers = function () {
                    this.logger.log(logger_service_9.DEBUG_LEVEL.INFO, 'recalculateStoryBlockNumbers', 'Sorting blocks: before', this.storyBlocks);
                    var currentTypes = {};
                    for (var i = 0; i < this.storyBlockTypes.length; i++) {
                        currentTypes[this.storyBlockTypes[i].id] = this.storyBlockTypes[i];
                        currentTypes[this.storyBlockTypes[i].id].index = 0;
                    }
                    for (var i = 0; i < this.storyBlocks.length; i++) {
                        var currentType = this.storyBlocks[i].type || this.storyBlockDefaultTypes[0].id;
                        currentTypes[currentType] = currentTypes[currentType] || this.storyBlockDefaultTypes[0];
                        this.storyBlocks[i].blockNumber = currentTypes[currentType].index || 0;
                        currentTypes[currentType].index++;
                        for (var j = 0; j < this.storyBlockTypes.length; j++) {
                            if (this.storyBlockTypes[j].level > currentTypes[currentType].level) {
                                currentTypes[this.storyBlockTypes[j].id].index = 0;
                            }
                        }
                    }
                    this.logger.log(logger_service_9.DEBUG_LEVEL.INFO, 'recalculateStoryBlockNumbers', 'Sorting blocks: after', this.storyBlocks);
                };
                StoryComponent.prototype.zoomIn = function () {
                    if (this.zoomLevel < 10) {
                        this.zoomLevel++;
                    }
                    else {
                        this.notifyMsg({
                            type: 'message',
                            message: 'Max zoom reached'
                        });
                    }
                };
                StoryComponent.prototype.zoomOut = function () {
                    if (this.zoomLevel > 0) {
                        this.zoomLevel--;
                    }
                    else {
                        this.notifyMsg({
                            type: 'message',
                            message: 'Minimum zoom reached'
                        });
                    }
                };
                StoryComponent.prototype.onMouseEnter = function (event) {
                    this.addButton = {
                        visible: true,
                        top: event.y
                    };
                };
                StoryComponent.prototype.onMouseLeave = function (event) {
                    this.addButton = {
                        visible: false,
                        top: 0
                    };
                };
                StoryComponent.prototype.onMouseMove = function (event) {
                    if (this.addButton.visible) {
                        this.addButton.top = event.y;
                    }
                };
                StoryComponent.prototype.addStoryBlock = function (event) {
                    this.addButton = {
                        visible: false,
                        top: 0
                    };
                    var zoomConversionFactor = this.configuration.zoom.step + Math.exp(this.zoomLevel * this.configuration.zoom.strength);
                    var positionAtZoom = ((event.pageY - this.configuration.zoom.offset) / zoomConversionFactor);
                    var newStoryBlock = {
                        blockId: this.maxIndex + 1,
                        title: '',
                        description: '',
                        timePosition: positionAtZoom,
                        importance: 3,
                        type: 'chapter'
                    };
                    this.maxIndex++;
                    var tmpArrayPos = 0;
                    for (var i = 0; i < this.storyBlocks.length; i++) {
                        if (this.storyBlocks[i].timePosition > positionAtZoom) {
                            tmpArrayPos = i;
                            break;
                        }
                    }
                    this.storyBlocks.splice(tmpArrayPos, 0, newStoryBlock);
                    this.logger.log(logger_service_9.DEBUG_LEVEL.INFO, 'addStoryBlock', 'Adding block index ' + tmpArrayPos);
                    this.setExposed(tmpArrayPos);
                    event.preventDefault();
                    event.stopPropagation();
                    this.storyBlockList.emit(this.storyBlocks);
                };
                StoryComponent.prototype.setExposed = function (index) {
                    this.logger.log(logger_service_9.DEBUG_LEVEL.INFO, 'setExposed', 'Setting block ' + index + ' exposed');
                    this.recalculateStoryBlockNumbers();
                    this.exposedIndex = index;
                    this.exposedStoryBlock = index >= 0 ? this.storyBlocks[index] : null;
                    this.storyBlockService.changeExposedIndex(index);
                    document.querySelector('body').classList.toggle('no-scroll');
                    this.exposeStoryBlock.emit(this.exposedStoryBlock);
                    this.storyBlockList.emit(this.storyBlocks);
                };
                StoryComponent.prototype.save = function () {
                    for (var i = 0; i < this.storyBlocks.length; i++) {
                        this.storyBlockService.saveStoryBlock(this.userId, this.story._id, this.storyBlocks[i]).subscribe();
                    }
                };
                StoryComponent.prototype.notifyMsg = function (notification) {
                    this.notify.emit(notification);
                };
                StoryComponent.prototype.toggleMenu = function (visibility) {
                    this.menuVisible = visibility;
                    if (visibility) {
                        document.querySelector('body').classList.add('no-scroll');
                    }
                    else {
                        document.querySelector('body').classList.remove('no-scroll');
                    }
                };
                __decorate([
                    core_19.Output(), 
                    __metadata('design:type', core_19.EventEmitter)
                ], StoryComponent.prototype, "notify", void 0);
                __decorate([
                    core_19.Output(), 
                    __metadata('design:type', core_19.EventEmitter)
                ], StoryComponent.prototype, "exposeStoryBlock", void 0);
                __decorate([
                    core_19.Output(), 
                    __metadata('design:type', core_19.EventEmitter)
                ], StoryComponent.prototype, "storyBlockList", void 0);
                __decorate([
                    core_19.Output(), 
                    __metadata('design:type', core_19.EventEmitter)
                ], StoryComponent.prototype, "loaded", void 0);
                StoryComponent = __decorate([
                    core_19.Component({
                        selector: 'story',
                        template: "\n            <main [hidden]=\"!hasLoaded\">\n                <timeline class=\"timeline-block\"></timeline>\n                <div class=\"story-blocks\">\n                    <storyblock *ngFor=\"#storyBlock of storyBlocks; #i = index\" \n                        [index]=\"i\" \n                        [storyBlockInfo]=\"storyBlock\" \n                        [zoomLevel]=\"zoomLevel\"\n                        [userId]=\"userId\"\n                        [story]=\"story\"\n                        (modified)=\"modified=true\"\n                        (loaded)=\"storyBlockLoaded($event)\"\n                        [exposedIndex]=\"exposedIndex\"\n                        [ngClass]=\"{exposed: exposedIndex == i}\"\n                        (removeStoryBlockEvent)=\"removeStoryBlock($event)\" \n                        (exposeEvent)=\"setExposed($event)\"\n                        (notify)=\"notifyMsg($event)\"\n                        class=\"story-block {{ storyBlock.type\u00A0}}\"></storyblock>\n                </div>\n                <div class=\"timeline\"\n                    (click)=\"addStoryBlock($event)\"\n                    (mouseenter)=\"onMouseEnter($event)\"\n                    (mouseleave)=\"onMouseLeave($event)\"\n                    (mousemove)=\"onMouseMove($event)\">\n                    <add-button *ngIf=\"addButton.visible\"\n                        [offsetY]=\"addButton.top\"\n                        (click)=\"addStoryBlock($event)\"></add-button>\n                </div>\n                <div id=\"controls\">\n                    <div id=\"zoom-controls\">              \n                        <a title=\"Zoom in\" (click)=\"zoomIn()\">+</a>  \n                        <a title=\"Zoom out\" (click)=\"zoomOut()\">&ndash;</a>                \n                    </div>            \n                </div>\n            </main>\n    ",
                        providers: [],
                        directives: [storyblock_component_1.StoryBlockComponent, timeline_component_1.TimelineComponent, add_button_component_1.AddButtonComponent, common_4.NgClass],
                        inputs: ['userId', 'story']
                    }), 
                    __metadata('design:paramtypes', [logger_service_9.LoggerService, storyblocks_service_3.StoryBlockService, configuration_7.Configuration, webstorage_service_4.WebStorageService, auth_service_3.AuthService])
                ], StoryComponent);
                return StoryComponent;
            }());
            exports_27("StoryComponent", StoryComponent);
        }
    }
});
System.register("services/story.service", ["angular2/core", 'angular2/http', 'rxjs/Rx', 'rxjs/add/operator/share', "config/configuration", "services/logger.service"], function(exports_28, context_28) {
    "use strict";
    var __moduleName = context_28 && context_28.id;
    var core_20, http_3, configuration_8, logger_service_10;
    var StoryService;
    return {
        setters:[
            function (core_20_1) {
                core_20 = core_20_1;
            },
            function (http_3_1) {
                http_3 = http_3_1;
            },
            function (_3) {},
            function (_4) {},
            function (configuration_8_1) {
                configuration_8 = configuration_8_1;
            },
            function (logger_service_10_1) {
                logger_service_10 = logger_service_10_1;
            }],
        execute: function() {
            StoryService = (function () {
                function StoryService(logger, http, configuration) {
                    this.logger = logger;
                    this.http = http;
                    this.configuration = configuration;
                }
                StoryService.prototype.getStories = function (userId) {
                    return this.http.get(this.configuration.apiBasePath + '/story/' + userId)
                        .map(function (res) { return res.json(); })
                        .catch(this.logger.errorCatcher());
                };
                StoryService.prototype.saveStory = function (userId, story) {
                    var headers = new http_3.Headers({
                        'Content-Type': 'application/x-www-form-urlencoded'
                    });
                    var options = new http_3.RequestOptions({
                        headers: headers
                    });
                    story.userId = userId;
                    if (!!story._id) {
                        story.createdAt = story.createdAt || (new Date());
                        story.lastModifiedAt = (new Date());
                        return this.http.put(this.configuration.apiBasePath + '/story/' + userId + '/' + story._id, "data=" + JSON.stringify(story), options)
                            .map(function (res) { return res.json(); })
                            .catch(this.logger.errorCatcher());
                    }
                    else {
                        story.createdAt = (new Date());
                        story.lastModifiedAt = (new Date());
                        return this.http.post(this.configuration.apiBasePath + '/story/' + userId + '/', "data=" + JSON.stringify(story), options)
                            .map(function (res) { return res.json(); })
                            .catch(this.logger.errorCatcher());
                    }
                };
                StoryService.prototype.deleteStory = function (userId, story) {
                    if (!!story._id) {
                        return this.http.delete(this.configuration.apiBasePath + '/story/' + userId + '/' + story._id)
                            .map(function (res) { return res.json(); })
                            .catch(this.logger.errorCatcher());
                    }
                    return null;
                };
                StoryService = __decorate([
                    core_20.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_10.LoggerService, http_3.Http, configuration_8.Configuration])
                ], StoryService);
                return StoryService;
            }());
            exports_28("StoryService", StoryService);
        }
    }
});
System.register("components/story-card.component", ['angular2/core', "services/logger.service", "services/story.service"], function(exports_29, context_29) {
    "use strict";
    var __moduleName = context_29 && context_29.id;
    var core_21, logger_service_11, story_service_1;
    var StoryCardComponent;
    return {
        setters:[
            function (core_21_1) {
                core_21 = core_21_1;
            },
            function (logger_service_11_1) {
                logger_service_11 = logger_service_11_1;
            },
            function (story_service_1_1) {
                story_service_1 = story_service_1_1;
            }],
        execute: function() {
            StoryCardComponent = (function () {
                function StoryCardComponent(storyService, logger) {
                    this.storyService = storyService;
                    this.logger = logger;
                    this.openStory = new core_21.EventEmitter();
                    this.removeStory = new core_21.EventEmitter();
                }
                StoryCardComponent.prototype.ngOnInit = function () {
                };
                StoryCardComponent.prototype.open = function () {
                    this.openStory.emit(this.index);
                };
                StoryCardComponent.prototype.remove = function () {
                    this.removeStory.emit(this.index);
                };
                __decorate([
                    core_21.Output(), 
                    __metadata('design:type', core_21.EventEmitter)
                ], StoryCardComponent.prototype, "openStory", void 0);
                __decorate([
                    core_21.Output(), 
                    __metadata('design:type', core_21.EventEmitter)
                ], StoryCardComponent.prototype, "removeStory", void 0);
                StoryCardComponent = __decorate([
                    core_21.Component({
                        selector: 'story-card',
                        template: "\n        <div class=\"story-container\" ngClass=\"material-shadow\">\n          <section class=\"story\" id=\"story\">\n            <header>\n              <h2>{{story.title}}</h2>\n              <h4>Story card</h4>\n            </header>\n            <div class=\"story-description\">{{story.description}}</div>\n            <footer class=\"default-actions\">\n                <a class=\"button inline-button primary\" (click)=\"open()\">OPEN</a>\n                <a class=\"button inline-button alert\" (click)=\"remove()\">DELETE</a>\n            </footer>\n          </section>\n        </div>\n    ",
                        providers: [story_service_1.StoryService],
                        directives: [],
                        inputs: ['story', 'index']
                    }), 
                    __metadata('design:paramtypes', [story_service_1.StoryService, logger_service_11.LoggerService])
                ], StoryCardComponent);
                return StoryCardComponent;
            }());
            exports_29("StoryCardComponent", StoryCardComponent);
        }
    }
});
System.register("components/story-list.component", ['angular2/core', "services/logger.service", "services/story.service", "components/story-card.component"], function(exports_30, context_30) {
    "use strict";
    var __moduleName = context_30 && context_30.id;
    var core_22, logger_service_12, story_service_2, story_card_component_1;
    var StoryListComponent;
    return {
        setters:[
            function (core_22_1) {
                core_22 = core_22_1;
            },
            function (logger_service_12_1) {
                logger_service_12 = logger_service_12_1;
            },
            function (story_service_2_1) {
                story_service_2 = story_service_2_1;
            },
            function (story_card_component_1_1) {
                story_card_component_1 = story_card_component_1_1;
            }],
        execute: function() {
            StoryListComponent = (function () {
                function StoryListComponent(storyService, logger) {
                    this.storyService = storyService;
                    this.logger = logger;
                    this.loadStory = new core_22.EventEmitter();
                }
                StoryListComponent.prototype.ngOnInit = function () {
                    this.stories = [];
                    this.getStories(this.userId);
                };
                StoryListComponent.prototype.getStories = function (userId) {
                    var _this = this;
                    this.storyService.getStories(userId).subscribe(function (data) {
                        _this.stories = data;
                    }, function (err) { return console.error(err); }, function () {
                        _this.logger.log(logger_service_12.DEBUG_LEVEL.INFO, 'getStories', 'Loaded ' + _this.stories.length + ' stories', _this.stories);
                    });
                };
                StoryListComponent.prototype.addStory = function () {
                    var _this = this;
                    var story = {
                        title: 'Untitled',
                        description: 'Description',
                        loaded: false
                    };
                    this.storyService.saveStory(this.userId, story).subscribe(function (data) {
                        _this.stories.push(data);
                    }, function (err) { return console.error(err); }, function () {
                        _this.logger.log(logger_service_12.DEBUG_LEVEL.INFO, 'addStory', 'Created a new story', _this.stories);
                    });
                };
                StoryListComponent.prototype.openStory = function (index) {
                    this.loadStory.emit(this.stories[index]);
                };
                StoryListComponent.prototype.removeStory = function (index) {
                    var _this = this;
                    this.storyService.deleteStory(this.userId, this.stories[index]).subscribe(function (data) {
                        _this.logger.log(logger_service_12.DEBUG_LEVEL.INFO, 'removeStory', 'The story has been removed', data);
                    }, function (err) { return console.error(err); }, function () {
                        _this.stories.splice(index, 1);
                    });
                };
                __decorate([
                    core_22.Output(), 
                    __metadata('design:type', core_22.EventEmitter)
                ], StoryListComponent.prototype, "loadStory", void 0);
                StoryListComponent = __decorate([
                    core_22.Component({
                        selector: 'story-list',
                        template: "\n        <main>\n            <story-card \n            *ngFor=\"#story of stories; #i = index\"\n                [story]=\"story\"\n                [index]=\"i\"\n                (openStory)=\"openStory($event)\"\n                (removeStory)=\"removeStory($event)\"\n            ></story-card>\n            <div class=\"add-story-card\">\n                <div class=\"story-container\" ngClass=\"material-shadow\">\n                    <section class=\"story\" id=\"story\">\n                        <header>\n                          <h2>Add a new story</h2>\n                          <h4>Story card</h4>\n                        </header>\n                        <div class=\"story-add\"><a (click)=\"addStory()\">+</a></div>\n                        <footer></footer>\n                    </section>\n                </div>\n            </div>\n        </main>\n    ",
                        providers: [story_service_2.StoryService],
                        directives: [story_card_component_1.StoryCardComponent],
                        inputs: ['userId']
                    }), 
                    __metadata('design:paramtypes', [story_service_2.StoryService, logger_service_12.LoggerService])
                ], StoryListComponent);
                return StoryListComponent;
            }());
            exports_30("StoryListComponent", StoryListComponent);
        }
    }
});
System.register("components/story-board.component", ['angular2/core', 'angular2/common', "components/notification.component", "components/sidebar.component", "config/configuration", "services/auth.service", "services/webstorage.service", "components/auth-form.component", "services/logger.service", "components/story.component", "services/storyblocks.service", "components/story-list.component"], function(exports_31, context_31) {
    "use strict";
    var __moduleName = context_31 && context_31.id;
    var core_23, common_5, notification_component_1, sidebar_component_1, configuration_9, auth_service_4, webstorage_service_5, auth_form_component_1, logger_service_13, story_component_1, storyblocks_service_4, story_list_component_1;
    var StoryBoardComponent;
    return {
        setters:[
            function (core_23_1) {
                core_23 = core_23_1;
            },
            function (common_5_1) {
                common_5 = common_5_1;
            },
            function (notification_component_1_1) {
                notification_component_1 = notification_component_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            },
            function (configuration_9_1) {
                configuration_9 = configuration_9_1;
            },
            function (auth_service_4_1) {
                auth_service_4 = auth_service_4_1;
            },
            function (webstorage_service_5_1) {
                webstorage_service_5 = webstorage_service_5_1;
            },
            function (auth_form_component_1_1) {
                auth_form_component_1 = auth_form_component_1_1;
            },
            function (logger_service_13_1) {
                logger_service_13 = logger_service_13_1;
            },
            function (story_component_1_1) {
                story_component_1 = story_component_1_1;
            },
            function (storyblocks_service_4_1) {
                storyblocks_service_4 = storyblocks_service_4_1;
            },
            function (story_list_component_1_1) {
                story_list_component_1 = story_list_component_1_1;
            }],
        execute: function() {
            StoryBoardComponent = (function () {
                function StoryBoardComponent(logger, configuration, webStorageService, storyBlockService, authService) {
                    var _this = this;
                    this.logger = logger;
                    this.configuration = configuration;
                    this.webStorageService = webStorageService;
                    this.storyBlockService = storyBlockService;
                    this.authService = authService;
                    this.token = '';
                    this.storyBlocks = [];
                    this.loaded = new core_23.EventEmitter();
                    this.showStory = false;
                    authService.authStatusChange$.subscribe(function (event) { return _this.authStatusChanged(event); });
                }
                StoryBoardComponent.prototype.ngOnInit = function () {
                    this.userId = this.authUser();
                    this.menuVisible = false;
                    this.accessFormVisible = false;
                    this.notification = {
                        type: null,
                        message: '',
                    };
                };
                StoryBoardComponent.prototype.setExposed = function (event) {
                    this.exposedStoryBlock = event;
                };
                StoryBoardComponent.prototype.updateStoryBlocks = function (event) {
                    this.logger.log(logger_service_13.DEBUG_LEVEL.INFO, 'updateStoryBlocks', 'Storyblocks updated:', (event || []));
                    this.storyBlocks = event || [];
                };
                StoryBoardComponent.prototype.loadStory = function (story) {
                    this.story = story;
                    this.showStory = true;
                };
                StoryBoardComponent.prototype.authUser = function () {
                    if (this.authService.isLoggedIn()) {
                        return this.authService.getIdFromToken();
                    }
                    else {
                        var anonymousToken = this.webStorageService.get('anonymous_token');
                        if (!anonymousToken) {
                            var anonymousToken = this.authService.generateAnonymousToken();
                            this.webStorageService.put('anonymous_token', anonymousToken);
                        }
                        return this.authService.getIdFromAnonymousToken(anonymousToken);
                    }
                };
                StoryBoardComponent.prototype.setToken = function (value) {
                    this.webStorageService.put('token', value);
                };
                StoryBoardComponent.prototype.getToken = function () {
                    return this.webStorageService.get('token');
                };
                StoryBoardComponent.prototype.authStatusChanged = function (event) {
                    this.userId = this.authUser();
                    this.logger.log(logger_service_13.DEBUG_LEVEL.INFO, 'authStatusChanged', { event: event });
                };
                StoryBoardComponent.prototype.showAccessForm = function () {
                    this.toggleMenu(false);
                    this.logger.log(logger_service_13.DEBUG_LEVEL.INFO, 'showAccessForm', this.authService.isLoggedIn());
                    this.accessFormVisible = true;
                    document.querySelector('body').classList.add('no-scroll');
                };
                StoryBoardComponent.prototype.hideAccessForm = function () {
                    this.accessFormVisible = false;
                    document.querySelector('body').classList.remove('no-scroll');
                };
                StoryBoardComponent.prototype.logOut = function () {
                    this.authService.logout();
                };
                StoryBoardComponent.prototype.isLoggedIn = function () {
                    return this.authService.isLoggedIn();
                };
                StoryBoardComponent.prototype.hasLoaded = function (event) {
                    this.loaded.emit(event);
                };
                StoryBoardComponent.prototype.notify = function (notification) {
                    this.notification = {
                        type: notification.type || null,
                        message: notification.message || '',
                    };
                    this.notificationComponent.show(notification.message);
                };
                StoryBoardComponent.prototype.downloadPdf = function () {
                    this.storyBlockService.downloadPdf(this.storyBlocks);
                };
                StoryBoardComponent.prototype.toggleMenu = function (visibility) {
                    this.menuVisible = visibility;
                    if (visibility) {
                        document.querySelector('body').classList.add('no-scroll');
                    }
                    else {
                        document.querySelector('body').classList.remove('no-scroll');
                    }
                };
                __decorate([
                    core_23.ViewChild(notification_component_1.NotificationComponent), 
                    __metadata('design:type', notification_component_1.NotificationComponent)
                ], StoryBoardComponent.prototype, "notificationComponent", void 0);
                __decorate([
                    core_23.Output(), 
                    __metadata('design:type', core_23.EventEmitter)
                ], StoryBoardComponent.prototype, "loaded", void 0);
                StoryBoardComponent = __decorate([
                    core_23.Component({
                        selector: 'story-board',
                        template: "\n        <story \n            [hidden]=\"!showStory\"\n            [userId]=\"userId\"\n            (exposeStoryblock)=\"setExposed($event)\"\n            (notify)=\"notify($event)\"\n            (loaded)=\"hasLoaded($event)\"\n            (storyBlockList)=\"updateStoryBlocks($event)\"\n            [story]=\"story\"\n        ></story>\n        <story-list\n            [hidden]=\"showStory\"\n            [userId]=\"userId\"\n            (loadStory)=\"loadStory($event)\"\n        ></story-list>\n        <aside [ngClass]=\"{visible: menuVisible}\">\n            <sidebar\n            (startDragging)=\"toggleMenu(false)\"\n            (endDragging)=\"addStoryBlock($event)\"\n            [storyBlock]=\"exposedStoryBlock\" [storyBlocksLength]=\"storyBlocks.length\"></sidebar>\n            <a class=\"user-aside\" (click)=\"downloadPdf()\">Download PDF</a>\n            <a class=\"user-aside\" *ngIf=\"!isLoggedIn()\" (click)=\"showAccessForm()\">Login/Signup</a>\n            <a class=\"user-aside\" *ngIf=\"isLoggedIn()\" (click)=\"logOut()\">Logout</a>\n            <a id=\"close-menu\" (click)=\"toggleMenu(false)\"></a>\n        </aside>\n        <header><a id=\"burger\" (click)=\"toggleMenu(true)\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a></header>\n        <auth-form \n            *ngIf=\"accessFormVisible\" \n            (closeModal)=\"hideAccessForm()\"\n            (notify)=\"notify($event)\"\n            >\n        </auth-form>\n        <notification [ngClass]=\"{error: notification.type == 'error', success: notification.type == 'success'}\"></notification>\n    ",
                        providers: [],
                        directives: [story_component_1.StoryComponent, notification_component_1.NotificationComponent, sidebar_component_1.SidebarComponent, auth_form_component_1.AuthFormComponent, common_5.NgClass, story_list_component_1.StoryListComponent]
                    }), 
                    __metadata('design:paramtypes', [logger_service_13.LoggerService, configuration_9.Configuration, webstorage_service_5.WebStorageService, storyblocks_service_4.StoryBlockService, auth_service_4.AuthService])
                ], StoryBoardComponent);
                return StoryBoardComponent;
            }());
            exports_31("StoryBoardComponent", StoryBoardComponent);
        }
    }
});
System.register("models/news", [], function(exports_32, context_32) {
    "use strict";
    var __moduleName = context_32 && context_32.id;
    var News;
    return {
        setters:[],
        execute: function() {
            News = (function () {
                function News() {
                }
                return News;
            }());
            exports_32("News", News);
        }
    }
});
System.register("services/news.service", ["angular2/core", 'angular2/http', 'rxjs/Rx', 'rxjs/add/operator/share', "config/configuration", "services/logger.service"], function(exports_33, context_33) {
    "use strict";
    var __moduleName = context_33 && context_33.id;
    var core_24, http_4, configuration_10, logger_service_14;
    var NewsService;
    return {
        setters:[
            function (core_24_1) {
                core_24 = core_24_1;
            },
            function (http_4_1) {
                http_4 = http_4_1;
            },
            function (_5) {},
            function (_6) {},
            function (configuration_10_1) {
                configuration_10 = configuration_10_1;
            },
            function (logger_service_14_1) {
                logger_service_14 = logger_service_14_1;
            }],
        execute: function() {
            NewsService = (function () {
                function NewsService(logger, http, configuration) {
                    this.logger = logger;
                    this.http = http;
                    this.configuration = configuration;
                }
                NewsService.prototype.getNews = function () {
                    return this.http.get(this.configuration.apiBasePath + '/news/')
                        .map(function (res) { return res.json(); })
                        .catch(this.logger.errorCatcher());
                };
                NewsService = __decorate([
                    core_24.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_14.LoggerService, http_4.Http, configuration_10.Configuration])
                ], NewsService);
                return NewsService;
            }());
            exports_33("NewsService", NewsService);
        }
    }
});
System.register("components/splash-screen.component", ['angular2/core', "services/logger.service"], function(exports_34, context_34) {
    "use strict";
    var __moduleName = context_34 && context_34.id;
    var core_25, logger_service_15;
    var SplashScreenComponent;
    return {
        setters:[
            function (core_25_1) {
                core_25 = core_25_1;
            },
            function (logger_service_15_1) {
                logger_service_15 = logger_service_15_1;
            }],
        execute: function() {
            SplashScreenComponent = (function () {
                function SplashScreenComponent(logger) {
                    this.logger = logger;
                }
                SplashScreenComponent.prototype.ngOnInit = function () {
                };
                SplashScreenComponent = __decorate([
                    core_25.Component({
                        selector: 'splash-screen',
                        template: "\n        <div>\n            <div class=\"loader\">                \n                <div class=\"logo\"></div>\n                <div class=\"uil-ripple-css\">\n                    <div></div>\n                    <div></div>\n                </div>\n            </div>\n        </div>\n    ",
                        providers: [],
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [logger_service_15.LoggerService])
                ], SplashScreenComponent);
                return SplashScreenComponent;
            }());
            exports_34("SplashScreenComponent", SplashScreenComponent);
        }
    }
});
System.register("components/app-content.component", ['angular2/core', "components/story-board.component", "services/news.service", "services/logger.service", "components/splash-screen.component"], function(exports_35, context_35) {
    "use strict";
    var __moduleName = context_35 && context_35.id;
    var core_26, story_board_component_1, news_service_1, logger_service_16, splash_screen_component_1;
    var AppContentComponent;
    return {
        setters:[
            function (core_26_1) {
                core_26 = core_26_1;
            },
            function (story_board_component_1_1) {
                story_board_component_1 = story_board_component_1_1;
            },
            function (news_service_1_1) {
                news_service_1 = news_service_1_1;
            },
            function (logger_service_16_1) {
                logger_service_16 = logger_service_16_1;
            },
            function (splash_screen_component_1_1) {
                splash_screen_component_1 = splash_screen_component_1_1;
            }],
        execute: function() {
            AppContentComponent = (function () {
                function AppContentComponent(newsService, logger) {
                    this.newsService = newsService;
                    this.logger = logger;
                    this.ready = false;
                }
                AppContentComponent.prototype.ngOnInit = function () {
                    //     this.newsService.getNews().subscribe(data=> {
                    //         this.logger.log(DEBUG_LEVEL.INFO, 'getNews', data);
                    //         console.log(data)
                    //     },
                    //     err => this.logger.log(DEBUG_LEVEL.ERROR, 'getNews', 'Error',err),
                    //         () => this.logger.log(DEBUG_LEVEL.INFO, 'getNews', 'Get news completed')
                    // )
                };
                AppContentComponent = __decorate([
                    core_26.Component({
                        selector: 'app-content',
                        template: "\n        <story-board\n            (loaded)=\"ready=true\"\n            [hidden]=\"!ready\"\n        ></story-board>\n        <splash-screen [hidden]=\"ready\"></splash-screen>\n    ",
                        providers: [news_service_1.NewsService],
                        directives: [story_board_component_1.StoryBoardComponent, splash_screen_component_1.SplashScreenComponent]
                    }), 
                    __metadata('design:paramtypes', [news_service_1.NewsService, logger_service_16.LoggerService])
                ], AppContentComponent);
                return AppContentComponent;
            }());
            exports_35("AppContentComponent", AppContentComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', 'angular2/http', "config/configuration", "angular2/core", "services/logger.service", "services/auth.service", "services/webstorage.service", "services/storyblocks.service", "components/app-content.component"], function(exports_36, context_36) {
    "use strict";
    var __moduleName = context_36 && context_36.id;
    var browser_1, http_5, configuration_11, core_27, logger_service_17, auth_service_5, webstorage_service_6, storyblocks_service_5, app_content_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_5_1) {
                http_5 = http_5_1;
            },
            function (configuration_11_1) {
                configuration_11 = configuration_11_1;
            },
            function (core_27_1) {
                core_27 = core_27_1;
            },
            function (logger_service_17_1) {
                logger_service_17 = logger_service_17_1;
            },
            function (auth_service_5_1) {
                auth_service_5 = auth_service_5_1;
            },
            function (webstorage_service_6_1) {
                webstorage_service_6 = webstorage_service_6_1;
            },
            function (storyblocks_service_5_1) {
                storyblocks_service_5 = storyblocks_service_5_1;
            },
            function (app_content_component_1_1) {
                app_content_component_1 = app_content_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_content_component_1.AppContentComponent, [
                http_5.HTTP_PROVIDERS,
                configuration_11.Configuration,
                core_27.provide(core_27.ExceptionHandler, { useClass: logger_service_17.LoggerService }),
                auth_service_5.AuthService,
                logger_service_17.LoggerService,
                webstorage_service_6.WebStorageService,
                storyblocks_service_5.StoryBlockService
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlLnRzIiwiY29uZmlnL2NvbmZpZ3VyYXRpb24udHMiLCJtb2RlbHMvdXNlci50cyIsInNlcnZpY2VzL3dlYnN0b3JhZ2Uuc2VydmljZS50cyIsInNlcnZpY2VzL2F1dGguc2VydmljZS50cyIsIm1vY2svbW9jay1zdG9yeWJsb2Nrcy50cyIsIm1vY2svbW9jay1zdG9yeWJsb2NrLXR5cGVzLnRzIiwic2VydmljZXMvc3RvcnlibG9ja3Muc2VydmljZS50cyIsImNvbXBvbmVudHMvbm90aWZpY2F0aW9uLmNvbXBvbmVudC50cyIsInNlcnZpY2VzL3V0aWxzLnNlcnZpY2UudHMiLCJzZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UudHMiLCJjb21wb25lbnRzL2xvZy1tZXNzYWdlLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvZGVidWctY29uc29sZS5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3NpZGViYXIuY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9zaWduaW4tZm9ybS5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3NpZ251cC1mb3JtLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvYXV0aC1mb3JtLmNvbXBvbmVudC50cyIsImRpcmVjdGl2ZXMvY29sbGFwc2UuZGlyZWN0aXZlLnRzIiwiZGlyZWN0aXZlcy9kaXNhcHBlYXIuZGlyZWN0aXZlLnRzIiwiY29tcG9uZW50cy9zdG9yeWJsb2NrLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvdGltZWxpbmUuY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9hZGQtYnV0dG9uLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvc3RvcnkuY29tcG9uZW50LnRzIiwic2VydmljZXMvc3Rvcnkuc2VydmljZS50cyIsImNvbXBvbmVudHMvc3RvcnktY2FyZC5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3N0b3J5LWxpc3QuY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9zdG9yeS1ib2FyZC5jb21wb25lbnQudHMiLCJtb2RlbHMvbmV3cy50cyIsInNlcnZpY2VzL25ld3Muc2VydmljZS50cyIsImNvbXBvbmVudHMvc3BsYXNoLXNjcmVlbi5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL2FwcC1jb250ZW50LmNvbXBvbmVudC50cyIsImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFtRmEsV0FBVzs7Ozs7Ozs7Ozs7OztZQTNFeEI7Z0JBS0ksdUJBQTZELGFBQTJCO29CQUEzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFDcEYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFFbEUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUVoQixNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsUUFBUSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVE7d0JBQ2xFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO3dCQUNwRixNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNoQixDQUFDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCxnQ0FBUSxHQUFSO2dCQUNBLENBQUM7Z0JBRUQscUNBQWEsR0FBYixVQUFjLFVBQVU7b0JBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2dCQUNqQyxDQUFDO2dCQUVNLDJCQUFHLEdBQVYsVUFBVyxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUk7b0JBQUUsY0FBYTt5QkFBYixXQUFhLENBQWIsc0JBQWEsQ0FBYixJQUFhO3dCQUFiLDZCQUFhOztvQkFDL0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3ZELEtBQUssR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO29CQUM3QixDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxJQUFJLE9BQU8sR0FBTyxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLFlBQVksR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7d0JBQ25JLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7d0JBQzVDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUMxQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3ZDLENBQUM7d0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUM5QyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3RDLENBQUM7d0JBQ0QsSUFBSSxDQUFDLENBQUM7NEJBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNyQyxDQUFDO3dCQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxD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VSxFQUFFLEVBQUU7cUJBQ2pCLENBQUM7O3lDQUFBO2dCQVdGLDRCQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCwwREFTQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNWRDtnQkFHSSw2QkFDWSxXQUF1QixFQUN2QixNQUFvQjtvQkFEcEIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7b0JBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQWM7b0JBSmhDLFVBQUssR0FBQyxLQUFLLENBQUM7Z0JBTVosQ0FBQztnQkFFRCxzQ0FBUSxHQUFSO29CQUNBLG9EQUFvRDtvQkFDcEQsOERBQThEO29CQUM5RCw0QkFBNEI7b0JBQzVCLFNBQVM7b0JBQ1QseUVBQXlFO29CQUN6RSxtRkFBbUY7b0JBQ25GLElBQUk7Z0JBQ0osQ0FBQztnQkE5Qkw7b0JBQUMsaUJBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLHlMQU1UO3dCQUNELFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7d0JBQ3hCLFVBQVUsRUFBRSxDQUFDLDJDQUFtQixFQUFFLCtDQUFxQixDQUFDO3FCQUMzRCxDQUFDOzt1Q0FBQTtnQkFvQkYsMEJBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELHNEQWtCQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQzNCRCxtQkFBUyxDQUNMLDJDQUFtQixFQUNmO2dCQUNJLHFCQUFjO2dCQUNkLDhCQUFhO2dCQUNiLGVBQU8sQ0FBQyx3QkFBZ0IsRUFBRyxFQUFDLFFBQVEsRUFBRSwrQkFBYSxFQUFDLENBQUM7Z0JBQ3JELDBCQUFXO2dCQUNYLCtCQUFhO2dCQUNiLHNDQUFpQjtnQkFDakIsdUNBQWlCO2FBQ3BCLENBQ1IsQ0FBQyIsImZpbGUiOiIuLi8uLi8uLi9DaHJvbm9zdG9yaWVzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgZm9yd2FyZFJlZiwgSW5qZWN0LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge09ic2VydmVyfSBmcm9tIFwicnhqcy9PYnNlcnZlclwiO1xyXG5cclxuZGVjbGFyZSB2YXIgbW9tZW50OmFueTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvZ2dlclNlcnZpY2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z0xldmVsO1xyXG4gICAgcHJpdmF0ZSBsb2dTdHJlYW0kOk9ic2VydmVyPE9iamVjdD47XHJcbiAgICBwdWJsaWMgbG9nJDpPYnNlcnZhYmxlPE9iamVjdD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IENvbmZpZ3VyYXRpb24pKSBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMuc2V0RGVidWdMZXZlbChjb25maWd1cmF0aW9uLmRlYnVnTGV2ZWwgfHwgREVCVUdfTEVWRUwuRVJST1IpO1xyXG5cclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIHdpbmRvdy5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yTXNnLCB1cmwsIGxpbmVOdW1iZXIsIGNvbHVtbiwgZXJyb3JPYmopIHtcclxuICAgICAgICAgICAgdGhhdC5sb2coREVCVUdfTEVWRUwuRVJST1IsICdvbmVycm9yJywgZXJyb3JNc2csIHVybCwgbGluZU51bWJlciwgY29sdW1uLCBlcnJvck9iaik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTphbnkge1xyXG4gICAgfVxyXG5cclxuICAgIHNldERlYnVnTGV2ZWwoZGVidWdMZXZlbCkge1xyXG4gICAgICAgIHRoaXMuZGVidWdMZXZlbCA9IGRlYnVnTGV2ZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZyhsZXZlbCwgZnVuY3Rpb25OYW1lLCB0ZXh0LCAuLi5hcmdzOmFueVtdKSB7XHJcbiAgICAgICAgaWYgKCFsZXZlbCB8fCAobGV2ZWwudmFsdWUgPT09IHVuZGVmaW5lZCkgfHwgIWxldmVsLm5hbWUpIHtcclxuICAgICAgICAgICAgbGV2ZWwgPSBERUJVR19MRVZFTC5JTkZPO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV2ZWwudmFsdWUgPj0gdGhpcy5kZWJ1Z0xldmVsLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlOmFueSA9ICdbJyArIG1vbWVudCgpLmZvcm1hdChcIkREL01NL1lZIC0gSEg6bW06c3MuU1NTXCIpICsgJ11bJyArIGxldmVsLm5hbWUgKyAnXVsnICsgZnVuY3Rpb25OYW1lICsgJ10gJyArICh0ZXh0IHx8ICcnKTtcclxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuY2FsbChhcmdzLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgaWYgKGxldmVsLnZhbHVlID09PSBERUJVR19MRVZFTC5FUlJPUi52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1Zy5hcHBseShjb25zb2xlLCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChsZXZlbC52YWx1ZSA9PT0gREVCVUdfTEVWRUwuV0FSTi52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCEhdGhpcy5sb2ckICYmIHRoaXMubG9nU3RyZWFtJCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxvZ01lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogbW9tZW50KCkuZm9ybWF0KFwiREQvTU0vWVkgLSBISDptbTpzcy5TU1NcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IGxldmVsLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBmdW5jdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBhcmdzLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXR0eTonJ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxvZ01lc3NhZ2UucHJldHR5ID0gSlNPTi5zdHJpbmdpZnkobG9nTWVzc2FnZSwgbnVsbCwgMik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dTdHJlYW0kLm5leHQobG9nTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9nU3RyZWFtKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5sb2ckKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nJCA9IG5ldyBPYnNlcnZhYmxlPE9iamVjdD4ob2JzZXJ2ZXIgPT4gdGhpcy5sb2dTdHJlYW0kID0gb2JzZXJ2ZXIpLnNoYXJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvZyQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbChleGNlcHRpb246YW55LCBzdGFja1RyYWNlPzphbnksIHJlYXNvbj86c3RyaW5nKTp2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZyhERUJVR19MRVZFTC5FUlJPUiwgJ2FuZ3VsYXInLCAnJywgZXhjZXB0aW9uLCByZWFzb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGVycm9yQ2F0Y2hlcigpIHtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlcnI6YW55LCBzb3VyY2U6T2JzZXJ2YWJsZTxhbnk+LCBjYXVnaHQ6T2JzZXJ2YWJsZTxhbnk+KTpPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgICAgICB0aGF0LmxvZyhERUJVR19MRVZFTC5FUlJPUiwgJ2Vycm9yQ2F0Y2hlcicsIGVyci5tZXNzYWdlLCBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERFQlVHX0xFVkVMID0ge1xyXG4gICAgVkVSQk9TRToge1xyXG4gICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgIG5hbWU6ICdMb2cnXHJcbiAgICB9LFxyXG4gICAgSU5GTzoge1xyXG4gICAgICAgIHZhbHVlOiAxLFxyXG4gICAgICAgIG5hbWU6ICdJbmZvJ1xyXG4gICAgfSxcclxuICAgIFdBUk46IHtcclxuICAgICAgICB2YWx1ZTogMixcclxuICAgICAgICBuYW1lOiAnV2FybidcclxuICAgIH0sXHJcbiAgICBFUlJPUjoge1xyXG4gICAgICAgIHZhbHVlOiAzLFxyXG4gICAgICAgIG5hbWU6ICdFcnJvcidcclxuICAgIH0sXHJcbiAgICBOT05FOiB7XHJcbiAgICAgICAgdmFsdWU6IDQsXHJcbiAgICAgICAgbmFtZTogJydcclxuICAgIH1cclxufTsiLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7REVCVUdfTEVWRUx9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XHJcbiAgICBwdWJsaWMgem9vbSA9IHtcclxuICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgc3RlcDogMTUwLFxyXG4gICAgICAgIHN0cmVuZ3RoOiAwLjZcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIHRva2VuID0ge1xyXG4gICAgICAgIG5hbWU6ICd0b2tlbicsXHJcbiAgICAgICAgZXhwaXJhdGlvbjogKDMwICogMjQgKiA2MCAqIDYwICogMTAwMClcclxuICAgIH07XHJcblxyXG4gICAgLy8gcHVibGljIGFwaUJhc2VQYXRoID0gJ2h0dHBzOi8vYWEyMDE2LWNocm9ub3N0b3JpZXMuaGVyb2t1YXBwLmNvbSc7XHJcbiAgICBwdWJsaWMgYXBpQmFzZVBhdGggPSAnL2FwaSc7XHJcbiAgICBcclxuICAgIHB1YmxpYyBkZWJ1Z0xldmVsID0gREVCVUdfTEVWRUwuSU5GTztcclxufSIsImV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICAgIG5hbWUgOiBzdHJpbmc7XHJcbiAgICBlbWFpbCA6IHN0cmluZztcclxuICAgIHBhc3N3b3JkIDogc3RyaW5nO1xyXG59IiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2ViU3RvcmFnZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzdG9yYWdlU3VwcG9ydGVkID0gKHR5cGVvZihTdG9yYWdlKSAhPT0gXCJ1bmRlZmluZWRcIik7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0KGtleSwgdmFsdWUpOnZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2VTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgaWYgKCEhdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHV0SW5Mb2NhbFN0b3JhZ2Uoa2V5LCB2YWx1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoISF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXRJbkNvb2tpZXMoa2V5LCB2YWx1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUNvb2tpZXMoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQoa2V5KTphbnkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2VTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RnJvbUxvY2FsU3RvcmFnZShrZXkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGcm9tQ29va2llKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShrZXkpOnZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2VTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tTG9jYWxTdG9yYWdlKGtleSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUNvb2tpZXMoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwdXRJbkxvY2FsU3RvcmFnZShrZXksIHZhbHVlKTp2b2lkIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGVuY29kZVVSSSh2YWx1ZSkgfHwgXCJcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RnJvbUxvY2FsU3RvcmFnZShrZXkpOmFueSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlVVJJKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpIHx8IFwie31cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVGcm9tTG9jYWxTdG9yYWdlKGtleSk6dm9pZCB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHB1dEluQ29va2llcyhrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGQuc2V0VGltZShkLmdldFRpbWUoKSArICgzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcclxuICAgICAgICB2YXIgZXhwaXJlcyA9IGQudG9VVENTdHJpbmcoKTtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgKz0ga2V5ICsgJz0nICsgSlNPTi5zdHJpbmdpZnkoZW5jb2RlVVJJKHZhbHVlKSB8fCBcIlwiKSArIFwiO3BhdGg9LztleHBpcmVzPVwiICsgZXhwaXJlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEZyb21Db29raWUoa2V5KTphbnkge1xyXG4gICAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJyg/Ol58OylcXFxccz8nICsga2V5ICsgJz0oLio/KSg/Ojt8JCknLCAnaScpO1xyXG4gICAgICAgIHZhciBtdGMgPSBkb2N1bWVudC5jb29raWUubWF0Y2gocmVnZXgpIHx8IFtdO1xyXG4gICAgICAgIGlmIChtdGMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUkkobXRjWzFdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVGcm9tQ29va2llcyhrZXkpOnZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGtleSArIFwiPTtwYXRoPS87ZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVFwiO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJbmplY3RhYmxlLCBmb3J3YXJkUmVmLCBJbmplY3QsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHtKd3RUb2tlbn0gZnJvbSBcIi4uL21vZGVscy9qd3RUb2tlblwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXJcIjtcclxuaW1wb3J0IHtXZWJTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4vd2Vic3RvcmFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7TG9nZ2VyU2VydmljZSwgREVCVUdfTEVWRUx9IGZyb20gXCIuL2xvZ2dlci5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBhdXRoU3RhdHVzQ2hhbmdlJDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gTG9nZ2VyU2VydmljZSkpIHByaXZhdGUgbG9nZ2VyOkxvZ2dlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gSHR0cCkpIHB1YmxpYyBodHRwOkh0dHAsXHJcbiAgICAgICAgICAgICAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gV2ViU3RvcmFnZVNlcnZpY2UpKSBwcml2YXRlIHdlYlN0b3JhZ2VTZXJ2aWNlOldlYlN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IENvbmZpZ3VyYXRpb24pKSBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbikge1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpOmJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMud2ViU3RvcmFnZVNlcnZpY2UucmVtb3ZlKHRoaXMuY29uZmlndXJhdGlvbi50b2tlbi5uYW1lKTtcclxuICAgICAgICB0aGlzLmF1dGhTdGF0dXNDaGFuZ2UkLmVtaXQoJ0xvZ291dCcpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKHVzZXI6VXNlcik6T2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ2xvZ2luJywgJ0NyZWF0aW5nIHRlbXBvcmFyeSBkYXRhJyk7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvYXV0aC9sb2dpbicsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWU9XCIgKyB1c2VyLm5hbWUgKyBcIiZcIiArXHJcbiAgICAgICAgICAgICAgICBcImVtYWlsPVwiICsgdXNlci5lbWFpbCArIFwiJlwiICtcclxuICAgICAgICAgICAgICAgIFwicGFzc3dvcmQ9XCIgKyB1c2VyLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiBcclxuICAgICAgICAgICAgICAgIHJlcy50ZXh0KClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dnZXIuZXJyb3JDYXRjaGVyKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKHVzZXI6VXNlcik6T2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ3JlZ2lzdGVyJywgJ0NyZWF0aW5nIHRlbXBvcmFyeSBkYXRhJyk7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5jb25maWd1cmF0aW9uLmFwaUJhc2VQYXRoICsgJy9hdXRoL3JlZ2lzdGVyJyxcclxuICAgICAgICAgICAgICAgIFwiZW1haWw9XCIgKyB1c2VyLmVtYWlsICsgXCImXCIgK1xyXG4gICAgICAgICAgICAgICAgXCJwYXNzd29yZD1cIiArIHVzZXIucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IFxyXG4gICAgICAgICAgICAgICAgcmVzLnRleHQoKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvckNhdGNoZXIoKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlzTG9nZ2VkSW4oKTpib29sZWFuIHtcclxuICAgICAgICB2YXIgdG9rZW5EYXRhU3BsaXQgPSAodGhpcy53ZWJTdG9yYWdlU2VydmljZS5nZXQodGhpcy5jb25maWd1cmF0aW9uLnRva2VuLm5hbWUpIHx8ICcnKS5zcGxpdCgnLicpWzFdO1xyXG4gICAgICAgIGlmICghdG9rZW5EYXRhU3BsaXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdG9rZW5EYXRhUmF3ID0gYXRvYih0b2tlbkRhdGFTcGxpdCk7XHJcblxyXG4gICAgICAgIHZhciB0b2tlbkRhdGEgPSBKU09OLnBhcnNlKHRva2VuRGF0YVJhdykgYXMgSnd0VG9rZW47XHJcbiAgICAgICAgcmV0dXJuICh0b2tlbkRhdGEuZXhwIHx8IDApID4gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBnZXRJZEZyb21Ub2tlbigpIHtcclxuICAgICAgICB2YXIgdG9rZW5EYXRhU3BsaXQgPSAodGhpcy53ZWJTdG9yYWdlU2VydmljZS5nZXQodGhpcy5jb25maWd1cmF0aW9uLnRva2VuLm5hbWUpIHx8ICcnKS5zcGxpdCgnLicpWzFdO1xyXG4gICAgICAgIGlmICghdG9rZW5EYXRhU3BsaXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdG9rZW5EYXRhUmF3ID0gYXRvYih0b2tlbkRhdGFTcGxpdCk7XHJcblxyXG4gICAgICAgIHZhciB0b2tlbkRhdGEgPSBKU09OLnBhcnNlKHRva2VuRGF0YVJhdykgYXMgSnd0VG9rZW47XHJcblxyXG4gICAgICAgIHJldHVybiB0b2tlbkRhdGEuX2lkXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWRGcm9tQW5vbnltb3VzVG9rZW4odG9rZW5EYXRhU3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHRva2VuRGF0YVJhdyA9IGF0b2IodG9rZW5EYXRhU3RyaW5nKTtcclxuXHJcbiAgICAgICAgdmFyIHRva2VuRGF0YSA9IEpTT04ucGFyc2UodG9rZW5EYXRhUmF3KSBhcyBKd3RUb2tlbjtcclxuICAgICAgICByZXR1cm4gdG9rZW5EYXRhLl9pZFxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlQW5vbnltb3VzVG9rZW4oKTphbnkge1xyXG4gICAgICAgIHZhciBhbm9ueW1vdXNUb2tlbiA9IHtcclxuICAgICAgICAgICAgX2lkOiB0aGlzLmdlbmVyYXRlVW5pcXVlSWQoKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBidG9hKEpTT04uc3RyaW5naWZ5KGFub255bW91c1Rva2VuKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZVVuaXF1ZUlkKCkge1xyXG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMCwgdiA9IGMgPT09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn0iLCJpbXBvcnQge1N0b3J5QmxvY2t9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9ja1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNUT1JZQkxPQ0tTOlN0b3J5QmxvY2tbXSA9IDxTdG9yeUJsb2NrW10+W1xyXG4gICAge1xyXG4gICAgICAgIGJsb2NrSWQ6IDEsXHJcbiAgICAgICAgdGl0bGU6ICdQcmVmYWNlJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1lvdSBuZWVkIHRvIHN0YXJ0IHNvbWV3aGVyZScsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOjEsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogLTEsXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6MCxcclxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBibG9ja0lkOiAyLFxyXG4gICAgICAgIHRpdGxlOiAnSW50cm9kdWN0aW9uJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1doZXJlIHlvdXIgY2hhcmFjdGVycyBiZWNhbWUgcmVhbCcsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiAyLFxyXG4gICAgICAgIGltcG9ydGFuY2U6IDEsXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6MSxcclxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBibG9ja0lkOiAzLFxyXG4gICAgICAgIHRpdGxlOiAnRXZvbHV0aW9uJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaW5ncyBnZXRzIHRyaWNraWVyJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDMsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogMixcclxuICAgICAgICBibG9ja051bWJlcjoyLFxyXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGJsb2NrSWQ6IDQsXHJcbiAgICAgICAgdGl0bGU6ICdUb3BpYyBtb21lbnQnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnV29haCEnLFxyXG4gICAgICAgIHRpbWVQb3NpdGlvbjogNCxcclxuICAgICAgICBpbXBvcnRhbmNlOiAxLFxyXG4gICAgICAgIGJsb2NrTnVtYmVyOjMsXHJcbiAgICAgICAgdHlwZTonY2hhcHRlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgYmxvY2tJZDogNSxcclxuICAgICAgICB0aXRsZTogJ0VwaWxvZ3VlJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0JlY2F1c2UgZXZlbiB0aGUgYmVzdCB0aGluZ3MgZW5kJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDUsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogLTEsXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6NCxcclxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xyXG4gICAgfVxyXG5dOyIsImltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1R5cGV9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9jay10eXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU1RPUllCTE9DS19UWVBFUzpTdG9yeUJsb2NrVHlwZVtdID0gPFN0b3J5QmxvY2tUeXBlW10+W1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAnY2hhcHRlcicsXHJcbiAgICAgICAgbmFtZTogJ0NoYXB0ZXInLFxyXG4gICAgICAgIGxldmVsOiAwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAncGFyYWdyYXBoJyxcclxuICAgICAgICBuYW1lOiAnUGFyYWdyYXBoJyxcclxuICAgICAgICBsZXZlbDogMVxyXG4gICAgfSxcclxuXTsiLCJpbXBvcnQge0luamVjdGFibGUsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHtTdG9yeUJsb2NrfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2tcIjtcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmUnO1xyXG5pbXBvcnQge09ic2VydmVyfSBmcm9tICdyeGpzL09ic2VydmVyJztcclxuaW1wb3J0IHtTVE9SWUJMT0NLU30gZnJvbSBcIi4uL21vY2svbW9jay1zdG9yeWJsb2Nrc1wiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tUeXBlfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2stdHlwZVwiO1xyXG5pbXBvcnQge1NUT1JZQkxPQ0tfVFlQRVN9IGZyb20gXCIuLi9tb2NrL21vY2stc3RvcnlibG9jay10eXBlc1wiO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2UsIERFQlVHX0xFVkVMfSBmcm9tIFwiLi9sb2dnZXIuc2VydmljZVwiO1xyXG5cclxuZGVjbGFyZSB2YXIgcGRmTWFrZTphbnk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdG9yeUJsb2NrU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9leHBvc2VkSW5kZXggPSAtMTtcclxuICAgIGluZGV4Q2hhbmdlJDpPYnNlcnZhYmxlPG51bWJlcj47XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGFkZFJlcXVlc3QkOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgcHJpdmF0ZSBfb2JzZXJ2ZXI6T2JzZXJ2ZXI8bnVtYmVyPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjpMb2dnZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGh0dHA6SHR0cCxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjpDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5pbmRleENoYW5nZSQgPSBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB0aGlzLl9vYnNlcnZlciA9IG9ic2VydmVyKS5zaGFyZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUV4cG9zZWRJbmRleChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuX2V4cG9zZWRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuX29ic2VydmVyLm5leHQoaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEV4cG9zZWRJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXhwb3NlZEluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0b3J5QmxvY2tzKHVzZXJJZCwgc3RvcnlJZCk6T2JzZXJ2YWJsZTxTdG9yeUJsb2NrW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpQmFzZVBhdGggKyAnL3N0b3J5LycgKyB1c2VySWQgKyAnLycrIHN0b3J5SWQpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvckNhdGNoZXIoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVN0b3J5QmxvY2sodXNlcklkLCBzdG9yeUlkLCBzdG9yeUJsb2NrOlN0b3J5QmxvY2spOk9ic2VydmFibGU8U3RvcnlCbG9jaz4ge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHN0b3J5QmxvY2sudXNlcklkID0gdXNlcklkO1xyXG4gICAgICAgIHN0b3J5QmxvY2suc3RvcnlJZCA9IHN0b3J5SWQ7XHJcbiAgICAgICAgaWYgKCEhc3RvcnlCbG9jay5faWQpIHtcclxuICAgICAgICAgICAgc3RvcnlCbG9jay5jcmVhdGVkQXQgPSBzdG9yeUJsb2NrLmNyZWF0ZWRBdCB8fCAobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIHN0b3J5QmxvY2subGFzdE1vZGlmaWVkQXQgPSAobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvc3RvcnkvJyArIHVzZXJJZCArICcvJysgc3RvcnlJZCArICcvJyArIHN0b3J5QmxvY2suX2lkLCBcImRhdGE9XCIgKyBKU09OLnN0cmluZ2lmeShzdG9yeUJsb2NrKSwgb3B0aW9ucylcclxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dnZXIuZXJyb3JDYXRjaGVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3RvcnlCbG9jay5jcmVhdGVkQXQgPSAobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIHN0b3J5QmxvY2subGFzdE1vZGlmaWVkQXQgPSAobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpQmFzZVBhdGggKyAnL3N0b3J5LycgKyB1c2VySWQgKyAnLycrIHN0b3J5SWQgKyAnLycsIFwiZGF0YT1cIiArIEpTT04uc3RyaW5naWZ5KHN0b3J5QmxvY2spLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvckNhdGNoZXIoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVN0b3J5QmxvY2sodXNlcklkLCBzdG9yeUlkLCBzdG9yeUJsb2NrOlN0b3J5QmxvY2spOk9ic2VydmFibGU8U3RvcnlCbG9ja1tdPiB7XHJcbiAgICAgICAgaWYgKCEhc3RvcnlCbG9jay5faWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5jb25maWd1cmF0aW9uLmFwaUJhc2VQYXRoICsgJy9zdG9yeS8nICsgdXNlcklkICsgJy8nKyBzdG9yeUlkICsgJy8nICsgc3RvcnlCbG9jay5faWQpXHJcbiAgICAgICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nZ2VyLmVycm9yQ2F0Y2hlcigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RvcnlCbG9ja1R5cGVzKCk6U3RvcnlCbG9ja1R5cGVbXSB7XHJcbiAgICAgICAgcmV0dXJuIFNUT1JZQkxPQ0tfVFlQRVM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RvcnlCbG9ja0RlZmF1bHRUeXBlcygpOlN0b3J5QmxvY2tUeXBlW10ge1xyXG4gICAgICAgIHJldHVybiBTVE9SWUJMT0NLX1RZUEVTO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlVGVzdERhdGEodXNlcklkLCBzdG9yeUlkKTpPYnNlcnZhYmxlPFN0b3J5QmxvY2tbXT4ge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnZ2VuZXJhdGVUZXN0RGF0YScsICdDcmVhdGluZyB0ZW1wb3JhcnkgZGF0YSBmb3IgJyArIHVzZXJJZCk7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIGJsb2NrczpTdG9yeUJsb2NrW10gPSBTVE9SWUJMT0NLUztcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYmxvY2tzW2ldLnVzZXJJZCA9IHVzZXJJZDtcclxuICAgICAgICAgICAgYmxvY2tzW2ldLnN0b3J5SWQgPSBzdG9yeUlkO1xyXG4gICAgICAgICAgICBibG9ja3NbaV0uY3JlYXRlZEF0ID0gKG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICBibG9ja3NbaV0ubGFzdE1vZGlmaWVkQXQgPSAobmV3IERhdGUoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5jb25maWd1cmF0aW9uLmFwaUJhc2VQYXRoICsgJy9zdG9yeS8nICsgdXNlcklkICsgJy8nKyBzdG9yeUlkICsgJy8nLCBcImRhdGE9XCIgKyBKU09OLnN0cmluZ2lmeShibG9ja3MpLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dnZXIuZXJyb3JDYXRjaGVyKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvd25sb2FkUGRmKHN0b3J5QmxvY2tzOlN0b3J5QmxvY2tbXSkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGNvbXBhcmUoYTpTdG9yeUJsb2NrLCBiOlN0b3J5QmxvY2spIHtcclxuICAgICAgICAgICAgaWYgKGEudGltZVBvc2l0aW9uIDwgYi50aW1lUG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGEudGltZVBvc2l0aW9uID4gYi50aW1lUG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdG9yeUJsb2Nrcy5zb3J0KGNvbXBhcmUpO1xyXG5cclxuXHJcbiAgICAgICAgdmFyIGRvY0RlZmluaXRpb24gPSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFtdLFxyXG5cclxuICAgICAgICAgICAgc3R5bGVzOiB7XHJcbiAgICAgICAgICAgICAgICBjaGFwdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIyLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvbGQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBbMCwgMTYsIDAsIDhdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGFyYWdyYXBoOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvbGQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBbMCwgMCwgMCwgMTJdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0b3J5QmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRvY0RlZmluaXRpb24uY29udGVudC5wdXNoKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHN0b3J5QmxvY2tzW2ldLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBzdG9yeUJsb2Nrc1tpXS50eXBlLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBkb2NEZWZpbml0aW9uLmNvbnRlbnQucHVzaChcclxuICAgICAgICAgICAgICAgIHN0b3J5QmxvY2tzW2ldLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwZGZNYWtlLmNyZWF0ZVBkZihkb2NEZWZpbml0aW9uKS5kb3dubG9hZCgpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3Rvcjonbm90aWZpY2F0aW9uJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdj57eyBfY29udGVudMKgfX08L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF90aW1lcjtcclxuICAgIHByaXZhdGUgX2NvbnRlbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZTpFbGVtZW50UmVmKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyhjb250ZW50KXtcclxuICAgICAgICBpZighIXRoaXMuX3RpbWVyKXtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5fZS5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgICAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9lLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVdGlsc1NlcnZpY2Uge1xyXG4gICAgcHVibGljIEVNQUlMX1JFR0VYID0gJ15bLWEtejAtOX4hJCVeJipfPSt9e1xcJz9dKyhcXC5bLWEtejAtOX4hJCVeJipfPSt9e1xcJz9dKykqQChbYS16MC05X11bLWEtejAtOV9dKihcXC5bLWEtejAtOV9dKykqXFwuKGFlcm98YXJwYXxiaXp8Y29tfGNvb3B8ZWR1fGdvdnxpbmZvfGludHxtaWx8bXVzZXVtfG5hbWV8bmV0fG9yZ3xwcm98dHJhdmVsfG1vYml8W2Etel1bYS16XSl8KFswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM30pKSg6WzAtOV17MSw1fSk/JCc7XHJcblxyXG5cclxuICAgIGdldFJvbWFuTnVtZXJhbChudW0pOnN0cmluZyB7XHJcbiAgICAgICAgaWYgKCErbnVtKVxyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgdmFyIGRpZ2l0cyA9IFN0cmluZygrbnVtKS5zcGxpdChcIlwiKSxcclxuICAgICAgICAgICAga2V5ID0gW1wiXCIsIFwiQ1wiLCBcIkNDXCIsIFwiQ0NDXCIsIFwiQ0RcIiwgXCJEXCIsIFwiRENcIiwgXCJEQ0NcIiwgXCJEQ0NDXCIsIFwiQ01cIixcclxuICAgICAgICAgICAgICAgIFwiXCIsIFwiWFwiLCBcIlhYXCIsIFwiWFhYXCIsIFwiWExcIiwgXCJMXCIsIFwiTFhcIiwgXCJMWFhcIiwgXCJMWFhYXCIsIFwiWENcIixcclxuICAgICAgICAgICAgICAgIFwiXCIsIFwiSVwiLCBcIklJXCIsIFwiSUlJXCIsIFwiSVZcIiwgXCJWXCIsIFwiVklcIiwgXCJWSUlcIiwgXCJWSUlJXCIsIFwiSVhcIl0sXHJcbiAgICAgICAgICAgIHJvbWFuID0gXCJcIixcclxuICAgICAgICAgICAgaSA9IDM7XHJcbiAgICAgICAgd2hpbGUgKGktLSlcclxuICAgICAgICAgICAgcm9tYW4gPSAoa2V5WytkaWdpdHMucG9wKCkgKyAoaSAqIDEwKV0gfHwgXCJcIikgKyByb21hbjtcclxuICAgICAgICByZXR1cm4gQXJyYXkoK2RpZ2l0cy5qb2luKFwiXCIpICsgMSkuam9pbihcIk1cIikgKyByb21hbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIdW1hbkRhdGUoZCk6c3RyaW5ne1xyXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoZCk7XHJcbiAgICAgICAgcmV0dXJuIChkYXRlLmdldE1vbnRoKCkgKyAnLycgKyBkYXRlLmdldERhdGUoKSArICcvJyArICBkYXRlLmdldEZ1bGxZZWFyKCkgKyAnIGF0ICcgKyBkYXRlLmdldEhvdXJzKCkgKyAnOicgKyBkYXRlLmdldE1pbnV0ZXMoKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbnRyb2wsIENvbnRyb2xHcm91cH0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xyXG5cclxuLypcclxuIEN1c3RvbSB2YWxpZGF0b3JzIHRvIHVzZSBldmVyeXdoZXJlLlxyXG4gKi9cclxuXHJcbi8vIFNJTkdMRSBGSUVMRCBWQUxJREFUT1JTXHJcbmV4cG9ydCBmdW5jdGlvbiBlbWFpbFZhbGlkYXRvcihjb250cm9sOiBDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xyXG4gICAgdmFyIGVtYWlsUmVnZXhwID0gL15bYS16MC05ISMkJSYnKitcXC89P15fYHt8fX4uLV0rQFthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSokL2k7XHJcbiAgICBpZiAoY29udHJvbC52YWx1ZSAmJiBjb250cm9sLnZhbHVlLmxlbmd0aCA8IDYgJiYgIWVtYWlsUmVnZXhwLnRlc3QoY29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4ge2ludmFsaWRFbWFpbDogdHJ1ZX07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlbWFpbFJlZ2V4cCA9ICdeW2EtejAtOSEjJCUmXFwnKitcXFxcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFxcXC5bYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPykqJCc7XHJcblxyXG4vL0NPTlRST0wgR1JPVVAgVkFMSURBVE9SU1xyXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hpbmdQYXNzd29yZHMocGFzc3dvcmRLZXk6IHN0cmluZywgY29uZmlybVBhc3N3b3JkS2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAoZ3JvdXA6IENvbnRyb2xHcm91cCk6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcclxuICAgICAgICBsZXQgcGFzc3dvcmQgPSBncm91cC5jb250cm9sc1twYXNzd29yZEtleV07XHJcbiAgICAgICAgbGV0IGNvbmZpcm1QYXNzd29yZCA9IGdyb3VwLmNvbnRyb2xzW2NvbmZpcm1QYXNzd29yZEtleV07XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkLnZhbHVlICE9PSBjb25maXJtUGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1pc21hdGNoZWRQYXNzd29yZHM6IHRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXJcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBDb250cm9sR3JvdXAsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xyXG5pbXBvcnQge2VtYWlsVmFsaWRhdG9yLCBtYXRjaGluZ1Bhc3N3b3JkcywgZW1haWxSZWdleHB9IGZyb20gJy4uL3NlcnZpY2VzL3ZhbGlkYXRvcnMuc2VydmljZSc7XHJcbmltcG9ydCB7V2ViU3RvcmFnZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy93ZWJzdG9yYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlLCBERUJVR19MRVZFTH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbG9nLW1lc3NhZ2UnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhib3ggZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e3tsb2dNZXNzYWdlLm1lc3NhZ2V9fTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48YSBjbGFzcz1cImNsb3NlXCIgKGNsaWNrKT1cImNsb3NlKCRldmVudClcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+WDwvaT48L2E+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImRlc2NyaXB0aW9uXCIgW2F0dHIucmVhZG9ubHldPVwidHJ1ZVwiIFsobmdNb2RlbCldPVwibG9nTWVzc2FnZS5wcmV0dHlcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dNZXNzYWdlQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgbG9nTWVzc2FnZTtcclxuICAgIEBPdXRwdXQoKSBjbG9zZU1vZGFsOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHJcbiAgICBjbG9zZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbC5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlLCBERUJVR19MRVZFTH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge0xvZ01lc3NhZ2VDb21wb25lbnR9IGZyb20gXCIuL2xvZy1tZXNzYWdlLmNvbXBvbmVudFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkZWJ1Zy1jb25zb2xlJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgIDxkaXY+RGVidWcgZXJyb3JzOjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItbG9nXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cIiNsb2dNZXNzYWdlIG9mIGxvZ01lc3NhZ2VzOyAjaSA9IGluZGV4XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJzaG93KGkpXCIgW25nQ2xhc3NdPVwie2Vycm9yOiBpc0Vycm9yKGxvZ01lc3NhZ2UpLCB3YXJuaW5nOiBpc1dhcm5pbmcobG9nTWVzc2FnZSl9XCI+e3tsb2dNZXNzYWdlLm1lc3NhZ2V9fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8bG9nLW1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpPT1vcGVuTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbG9zZU1vZGFsKT1cImhpZGUoKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtsb2dNZXNzYWdlXT1cImxvZ01lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2xvZy1tZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczogW10sXHJcbiAgICBkaXJlY3RpdmVzOiBbTG9nTWVzc2FnZUNvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z0NvbnNvbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBwcml2YXRlIGxvZ1N0cmVhbSQ6T2JzZXJ2YWJsZTxPYmplY3RbXT47XHJcbiAgICBwdWJsaWMgbG9nTWVzc2FnZXM6T2JqZWN0W107XHJcbiAgICBwdWJsaWMgb3Blbk1lc3NhZ2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6TG9nZ2VyU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHtcclxuICAgICAgICB0aGlzLmxvZ01lc3NhZ2VzPVtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubG9nU3RyZWFtJCA9IHRoaXMubG9nZ2VyLmdldExvZ1N0cmVhbSgpO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ1N0cmVhbSQuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ01lc3NhZ2VzLnB1c2gobWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNob3coaW5kZXgpIHtcclxuICAgICAgICB0aGlzLm9wZW5NZXNzYWdlID0gKCF0aGlzLm9wZW5NZXNzYWdlKT9pbmRleDp1bmRlZmluZWQ7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKXtcclxuICAgICAgICB0aGlzLm9wZW5NZXNzYWdlPXVuZGVmaW5lZDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNFcnJvcihtZXNzYWdlKXtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZS5sZXZlbCA9PSBERUJVR19MRVZFTC5FUlJPUi5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGlzV2FybmluZyhtZXNzYWdlKXtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZS5sZXZlbCA9PSBERUJVR19MRVZFTC5XQVJOLm5hbWU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvc3RvcnlibG9ja3Muc2VydmljZVwiO1xyXG5pbXBvcnQge1V0aWxzU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTdG9yeUJsb2NrVHlwZX0gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrLXR5cGVcIjtcclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtEZWJ1Z0NvbnNvbGVDb21wb25lbnR9IGZyb20gXCIuL2RlYnVnLWNvbnNvbGUuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidzaWRlYmFyJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIl9pbmRleCA9PSAtMVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiY3JlYXRlLXN0b3J5YmxvY2tcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgKGRyYWdzdGFydCk9XCJkcmFnU3RhcnQoJGV2ZW50KVwiIChkcmFnZW5kKT1cImRyYWdFbmQoJGV2ZW50KVwiPkNyZWF0ZSBzdG9yeWJsb2NrPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItY291bnRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5Ub3RhbCBjaGFwdGVyczwvc3Bhbj48c3BhbiBjbGFzcz1cImNvdW50XCI+e3tfc3RvcnlCbG9ja3NMZW5ndGh9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIl9pbmRleCA+PSAwICYmICEhX3N0b3J5QmxvY2tcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+PHNwYW4gY2xhc3M9XCJjYXBpdGFsLWxldHRlclwiPkNoYXB0ZXI8L3NwYW4+IHt7X3N0b3J5QmxvY2suYmxvY2tOdW1iZXIrMX19PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLXNlcGFyYXRvclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlN0b3J5YmxvY2sgdHlwZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgWyhuZ01vZGVsKV09XCJfc3RvcnlCbG9jay50eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cIiNzdG9yeUJsb2NrVHlwZSBvZiBzdG9yeUJsb2NrVHlwZXNcIiB2YWx1ZT17e3N0b3J5QmxvY2tUeXBlLmlkfX0+e3tzdG9yeUJsb2NrVHlwZS5uYW1lfX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLXNlcGFyYXRvclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1jb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlRvdGFsIGNoYXJhY3RlcnM8L3NwYW4+PHNwYW4gY2xhc3M9XCJjb3VudFwiPnt7X3N0b3J5QmxvY2suZGVzY3JpcHRpb24ubGVuZ3RofX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1pbmZvXCIgKm5nSWY9XCIhIV9zdG9yeUJsb2NrLmNyZWF0ZWRBdFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkNyZWF0ZWQ8L3NwYW4+PHNwYW4gY2xhc3M9XCJpbmZvXCI+e3t1dGlsc1NlcnZpY2UuZ2V0SHVtYW5EYXRlKF9zdG9yeUJsb2NrLmNyZWF0ZWRBdCl9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWluZm9cIiAqbmdJZj1cIiEhX3N0b3J5QmxvY2subGFzdE1vZGlmaWVkQXRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5MYXN0IG1vZGlmaWVkPC9zcGFuPjxzcGFuIGNsYXNzPVwiaW5mb1wiPnt7dXRpbHNTZXJ2aWNlLmdldEh1bWFuRGF0ZShfc3RvcnlCbG9jay5sYXN0TW9kaWZpZWRBdCl9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRlYnVnLWNvbnNvbGUgKm5nSWY9XCJpc0RlYnVnKClcIj48L2RlYnVnLWNvbnNvbGU+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOiBbVXRpbHNTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtEZWJ1Z0NvbnNvbGVDb21wb25lbnRdLFxyXG4gICAgaW5wdXRzOiBbJ3N0b3J5QmxvY2snLCAnc3RvcnlCbG9ja3NMZW5ndGgnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgc3RvcnlCbG9ja1R5cGVzOlN0b3J5QmxvY2tUeXBlW107XHJcbiAgICBcclxuICAgIHB1YmxpYyBfaW5kZXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBfc3RvcnlCbG9jaztcclxuICAgIHB1YmxpYyBfc3RvcnlCbG9ja3NMZW5ndGg7XHJcbiAgICBwdWJsaWMgX3N1YnNjcmlwdGlvbjogYW55O1xyXG5cclxuICAgIEBPdXRwdXQoKSBzdGFydERyYWdnaW5nOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIGVuZERyYWdnaW5nOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbG9nZ2VyOkxvZ2dlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfc3RvcnlCbG9ja1NlcnZpY2U6U3RvcnlCbG9ja1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB1dGlsc1NlcnZpY2U6VXRpbHNTZXJ2aWNlXHJcbiAgICApIHt9XHJcblxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgc3RvcnlCbG9jayhzdG9yeUJsb2NrKSB7XHJcbiAgICAgICAgdGhpcy5fc3RvcnlCbG9jayA9IHN0b3J5QmxvY2s7XHJcbiAgICB9XHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IHN0b3J5QmxvY2tzTGVuZ3RoKHN0b3J5QmxvY2tzTGVuZ3RoKXtcclxuICAgICAgICB0aGlzLl9zdG9yeUJsb2Nrc0xlbmd0aCA9IHN0b3J5QmxvY2tzTGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrVHlwZXMgPSB0aGlzLl9zdG9yeUJsb2NrU2VydmljZS5nZXRTdG9yeUJsb2NrVHlwZXMoKTtcclxuICAgICAgICB0aGlzLl9pbmRleCA9IHRoaXMuX3N0b3J5QmxvY2tTZXJ2aWNlLmdldEV4cG9zZWRJbmRleCgpO1xyXG4gICAgICAgIHRoaXMuX3N0b3J5QmxvY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX3N0b3J5QmxvY2tTZXJ2aWNlLmluZGV4Q2hhbmdlJC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGluZGV4ID0+IHRoaXMuc2VsZWN0SW5kZXgoaW5kZXgpKTtcclxuICAgIH1cclxuICAgIHNlbGVjdEluZGV4KGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9pbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICBkcmFnU3RhcnQoZSl7XHJcbiAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1nLnNyYyA9ICAgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNRQUFBQWtDQVlBQUFEaEFKaVlBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFCTzFKUkVGVVdBblwiICtcclxuICAgICAgICAgICAgXCJObUVGc0ZGVVl4NzgzTzdQYUFycGdxRkt0R0tNaEdPSkpFbTFGUThJYXBVUWtwajJZZVBObWpBZWo4ZURSZzlGNElNYWJOeE1QYlJReGdNWmlpR0tyQ1J5TVVRbHFURUFwQ0FxcmhoWjNadWY1XCIgK1xyXG4gICAgICAgICAgICBcIi9kN3MyOTNTbHAzRmx1eVg3T3piMmZmKy8vOTg3NzN2ZmQ4WTZkQnUzR2RYQnhlcncxWk1XWXpjYnEzdE44YjBBNlB0YVcxUGk1V1RSdXhFdXFLNC82OGQ1a0luRkNadjU5Sllza3RzK3B3MXNcIiArXHJcbiAgICAgICAgICAgIFwia1dadzF6ampFbU1sY05pZ3JjcW8rR2VQR1BhQ2xyOWZqeGthL1oxZmZwQkFLT0NzUSt0TldiN3JZRnN1TUhJdWg0anQxeWZVWjI1SkhKNjFzcnh2NjBjT0pYS0YrZXNqV3Y2Q0dycXVTbFRNQ1wiICtcclxuICAgICAgICAgICAgXCI5ZGVES2F6SG92ZkYxVTBNaVlMVXhJL0tZS2VaNmhmVDNHdm54UHdZeXNEMlJWUHYvSVA0bkkrSWxVWHZ1aFpzL09Ob1R0TGt2MHd2aW9xUzBrYVVGQnBUMjJaT040VEtlbVhGU1B2TGl4WUo3XCIgK1xyXG4gICAgICAgICAgICBcImRFRWh2SVlQNHRtSmx2M3JncTNOV3B0VWplQWJEVS8zcXNRZldHaGxXRDk1Ynl1Qm5sUHJ0NDZtOGNheG1xM2pNbUFrVFJhT1ZYYWFTald4ZTV3bHlZcXJWS2UyeUVhKzhOeFNhKzlaazNmYitcIiArXHJcbiAgICAgICAgICAgIFwiWnVYVjd4TDVTYWNrajkydFUvcktwbEIyM3BhTlAzcmV5bE9UaWZmV01WTXNEbDR1YW80Z3B1bFRpVC9HTTV0S2dZeHRDZldKUlU1Y0ZIbm02MFNPL0pubTBUR3Z6K2FiQW5ubi9sRFdyeEQxcVwiICtcclxuICAgICAgICAgICAgXCJNakk0VVMrcnlpV2V1b1JpUjVybmI2Z2RUUnJCakY0eG91WjFHblplakMrYWpIZzh5QmdnTVVEanV1RHdnR1g0MndSMGZBUXV5bE4waTlaTXdlMlp0TUV3Qk9mSnhLbithYW9CWGZCWmhRWStmXCIgK1xyXG4gICAgICAgICAgICBcIkRoVUlaMGpURjkydzhsYmswRllmQ2czMzBORDdHMVFXRUJzMmFZcHFlbmxrNE0yRHdZbUdEREFSZjNQVGR0SjRpZ1I1ekJqZXdtakRWei90K2w4WXdEckYvQUJCdURDMDY0WGVEVmV4bTdSbUFcIiArXHJcbiAgICAgICAgICAgIFwiNkVHZlkydXltcTEzQTRMUXpzT0dBQzA3WHY2N0JjRGJKVEh3MkNxVHd5ODdJRVBRMmZ4TG4zdHJ0eUJmN241Qnc1TkhJQmM4Nzk4WTJUcVVtdlZGZllHYmlIYnJhUTQ0RHhCRDA4c2FaeGNqeVwiICtcclxuICAgICAgICAgICAgXCIzSWNETGpqaFJnTmFtTEl5QUp4TkdCRzRFK3ZUNkZ3WkxicFBZOHZtQlBCY25sdUhsVkV4d0hnT1Nvemo0RnFaNS9MY3lqc1E2Z3AzdVF5bk5zYlpsTWZ1MEtpTHJibXU2UmNpTVZaVGlGOW5zXCIgK1xyXG4gICAgICAgICAgICBcInZhVnJwN0xjNk1sSkxuU3hwd1U0a29nL3I5dmhvdSsyZmoyOS82NFpPV3VqK0xHL2NVYXJZY3lmZEJDSXVGY2tzOHZUZWpacERtaUo4eTg1Tzl4dXVjeDc5c21rbGltN0xRT1h2VzdwaEFyVjJcIiArXHJcbiAgICAgICAgICAgIFwiWXB4TS90SDA3V2ZaQjFZbEgvK0hqbXJYNjkxd0xlVnRQTjljUU9iZ3d0Z2N1QjlRZVpIa1krYzYzTWMzbHV0QVFrNUFnZzdjUklyanF4cWthSm94cDUrWFRpblZZdXo0MldRQ3VIZy94SkRveVwiICtcclxuICAgICAgICAgICAgXCJSNlhWaWxhckl0czhTOStsa0hIMDlsK2VtVWdsc2I3UlBsM2RDUWs0T1ROcEpXRjl1Z3dNdU9PRkdBMlZUUU4xRXFVSjFRRUtPa1hZdXQza09PT0ZHQTFxeStkRzZDUUZVQjJ4WmNtRFN6dVV5XCIgK1xyXG4gICAgICAgICAgICBcInNPR0FDMDdIVTlmZ1dDbmlkSVZQVWFwUUhXRGt3SzFSMk4xY2dndVlZR053d1FtM0x5UWJicUNJb3hPbEN1a2x4OEM3ZzZHUWRpNlZnUVVtMkhEQUJiYm5wdDBRUkU2clNuZFROMUdxVUIyUStcIiArXHJcbiAgICAgICAgICAgIFwiNUlETDRXbndQRDVOTmh3d0FXbno2Zm5DT0lIRlNXbENXNmtWUEdpRG0yTC90ZWFZczJBd1FQNk1zaFZzc3JsT0NHdjI3ejU2S3BDMGF2c3FsTGFpK3FxbHcxZUZOOWQ4enFtVlJUdHJubGhkYlwiICtcclxuICAgICAgICAgICAgXCJrd3lpWlhxV1RGd1FCcHAyN2R1YS8wTklQVmNST2NrNTIrMHZzUE9PUGxMblZZMGxZQUFBQUFTVVZPUks1Q1lJST1cIjtcclxuICAgICAgICBpbWcuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZShpbWcsIDE4LCAxOCk7XHJcbiAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nLmVtaXQoZSk7XHJcbiAgICB9XHJcbiAgICBkcmFnRW5kKGUpe1xyXG4gICAgICAgIHZhciBpY29uV2lkdGggPSAzNjtcclxuICAgICAgICB2YXIgYXNpZGVXaWR0aCA9IDI0MDtcclxuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NjggJiYgZS54ID4gd2luZG93LmlubmVyV2lkdGggLSBhc2lkZVdpZHRoIC0gaWNvbldpZHRoKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdG9yeUJsb2NrU2VydmljZS5hZGRSZXF1ZXN0JC5lbWl0KGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRGVidWcoKXtcclxuICAgICAgICByZXR1cm4gKGxvY2F0aW9uLnNlYXJjaC5pbmRleE9mKCc/ZGVidWcnKT49MCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uL21vZGVscy91c2VyXCI7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgQ29udHJvbEdyb3VwLCBGT1JNX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcclxuaW1wb3J0IHtlbWFpbFJlZ2V4cH0gZnJvbSAnLi4vc2VydmljZXMvdmFsaWRhdG9ycy5zZXJ2aWNlJztcclxuaW1wb3J0IHtXZWJTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3dlYnN0b3JhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2UsIERFQlVHX0xFVkVMfSBmcm9tIFwiLi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzaWduLWluLWZvcm0nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4Ym94IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+Q29tZSBpbiwgc3Rvcnl0ZWxsZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdj48YSBjbGFzcz1cImNsb3NlXCIgKGNsaWNrKT1cImNsb3NlKCRldmVudClcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJmb3JtXCIgKG5nU3VibWl0KT1cIm9uU2lnbkluKCRldmVudClcIiBub3ZhbGlkYXRlPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLmVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdPVwiZm9ybS5jb250cm9sc1snZW1haWwnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgI2VtYWlsPVwibmdGb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICAqbmdJZj1cIihlbWFpbC5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmICFlbWFpbC52YWxpZFwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICBFbWFpbCBpcyBpbnZhbGlkXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIucGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXCJcclxuICAgICAgICAgICAgICAgICAgICAjcGFzc3dvcmQ9XCJuZ0Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgICpuZ0lmPVwiKHBhc3N3b3JkLmRpcnR5IHx8IHN1Ym1pdHRlZCkgJiYgIXBhc3N3b3JkLnZhbGlkXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZSBwYXNzd29yZCBzaG91bGQgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmdcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIHByaW1hcnkgYmxvY2stYnV0dG9uXCI+U2lnbiBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2FwLWZvcm1cIj48YSAoY2xpY2spPVwic3dhcFRvU2lnblVwKClcIj5JIHdhbnQgdG8gY3JlYXRlIGEgbmV3IGFjY291bnQ8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduSW5Db21wb25lbnQge1xyXG4gICAgdXNlcjpVc2VyID0gbmV3IFVzZXIoKTtcclxuICAgIGZvcm06Q29udHJvbEdyb3VwO1xyXG4gICAgc3VibWl0dGVkID0gZmFsc2U7XHJcblxyXG4gICAgQE91dHB1dCgpIGNsb3NlTW9kYWw6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgc3dhcFdpbmRvdzpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBub3RpZnk6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgYXV0aFN0YXR1czpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGxvZ2dlcjpMb2dnZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBidWlsZGVyOkZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgd2ViU3RvcmFnZVNlcnZpY2U6V2ViU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOkNvbmZpZ3VyYXRpb25cclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZvcm0gPSBidWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oZW1haWxSZWdleHApXSldLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3YXBUb1NpZ25VcCgpIHtcclxuICAgICAgICB0aGlzLnN3YXBXaW5kb3cuZW1pdChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaWduSW4oZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcikuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJTdG9yYWdlU2VydmljZS5wdXQodGhpcy5jb25maWd1cmF0aW9uLnRva2VuLm5hbWUsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLldBUk4sICdvblNpZ25JbicsICdTZXJ2ZXIgZXJyb3InLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdvblNpZ25JbicsICdsb2dnZWQgaW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTdGF0dXMuZW1pdCgnTG9naW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmF1dGhTdGF0dXNDaGFuZ2UkLmVtaXQoJ0xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgnJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9tb2RlbHMvdXNlclwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cCwgRk9STV9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XHJcbmltcG9ydCB7ZW1haWxWYWxpZGF0b3IsIG1hdGNoaW5nUGFzc3dvcmRzLCBlbWFpbFJlZ2V4cH0gZnJvbSAnLi4vc2VydmljZXMvdmFsaWRhdG9ycy5zZXJ2aWNlJztcclxuaW1wb3J0IHtXZWJTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3dlYnN0b3JhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2UsIERFQlVHX0xFVkVMfSBmcm9tIFwiLi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzaWduLXVwLWZvcm0nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4Ym94IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+QmVjb21lIGEgc3Rvcnl0ZWxsZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdj48YSBjbGFzcz1cImNsb3NlXCIgKGNsaWNrKT1cImNsb3NlKCRldmVudClcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJmb3JtXCIgKG5nU3VibWl0KT1cIm9uU2lnblVwKCRldmVudClcIiBub3ZhbGlkYXRlPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdPVwiZm9ybS5jb250cm9sc1snbmFtZSddXCJcclxuICAgICAgICAgICAgICAgICAgICAjbmFtZT1cIm5nRm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgICpuZ0lmPVwiKG5hbWUuZGlydHkgfHwgc3VibWl0dGVkKSAmJiAhbmFtZS52YWxpZFwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICBZb3VyIG5hbWUgaXMgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLmVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdPVwiZm9ybS5jb250cm9sc1snZW1haWwnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgI2VtYWlsPVwibmdGb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICAqbmdJZj1cIihlbWFpbC5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmICFlbWFpbC52YWxpZFwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICBFbWFpbCBpcyBpbnZhbGlkXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIucGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXCJcclxuICAgICAgICAgICAgICAgICAgICAjcGFzc3dvcmQ9XCJuZ0Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgICpuZ0lmPVwiKHBhc3N3b3JkLmRpcnR5IHx8IHN1Ym1pdHRlZCkgJiYgIXBhc3N3b3JkLnZhbGlkXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZSBwYXNzd29yZCBzaG91bGQgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmdcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlci5jb25maXJtUGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgI2NvbmZpcm1QYXNzd29yZD1cIm5nRm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbmZpcm0tcGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiKGNvbmZpcm1QYXNzd29yZC5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmIGZvcm0uaGFzRXJyb3IoJ21pc21hdGNoZWRQYXNzd29yZHMnKVwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgcGFzc3dvcmRzIGRvbid0IG1hdGNoXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ1dHRvbiBwcmltYXJ5IGJsb2NrLWJ1dHRvblwiPlNpZ24gdXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dhcC1mb3JtXCI+PGEgKGNsaWNrKT1cInN3YXBUb1NpZ25JbigpXCI+SSBhbHJlYWR5IGhhdmUgYW4gYWNjb3VudDwvYT48L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczogW10sXHJcbiAgICBkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25VcENvbXBvbmVudCB7XHJcbiAgICB1c2VyOlVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgZm9ybTpDb250cm9sR3JvdXA7XHJcbiAgICBzdWJtaXR0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBAT3V0cHV0KCkgY2xvc2VNb2RhbDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBzd2FwV2luZG93OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIG5vdGlmeTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBhdXRoU3RhdHVzOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbG9nZ2VyOkxvZ2dlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGJ1aWxkZXI6Rm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSB3ZWJTdG9yYWdlU2VydmljZTpXZWJTdG9yYWdlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvblxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZm9ybSA9IGJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBuYW1lOlsnJ10sXHJcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKGVtYWlsUmVnZXhwKV0pXSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0pXSxcclxuICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgIH0sIHt2YWxpZGF0b3I6IG1hdGNoaW5nUGFzc3dvcmRzKCdwYXNzd29yZCcsICdjb25maXJtUGFzc3dvcmQnKX0pXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmNsb3NlTW9kYWwuZW1pdChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dhcFRvU2lnbkluKCkge1xyXG4gICAgICAgIHRoaXMuc3dhcFdpbmRvdy5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNpZ25VcChldmVudCkge1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmZvcm0udmFsdWUpKTtcclxuICAgICAgICBpZiAodGhpcy5mb3JtLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYlN0b3JhZ2VTZXJ2aWNlLnB1dCh0aGlzLmNvbmZpZ3VyYXRpb24udG9rZW4ubmFtZSwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuV0FSTiwgJ29uU2lnblVwJywnU2VydmVyIGVycm9yJywgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBlbWFpbCBpcyBhbHJlYWR5IHRha2VuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ29uU2lnblVwJywgJ3JlZ2lzdGVyZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTdGF0dXMuZW1pdCgnUmVnaXN0ZXJlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuYXV0aFN0YXR1c0NoYW5nZSQuZW1pdCgnUmVnaXN0ZXJlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoJycpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHtTaWduSW5Db21wb25lbnR9IGZyb20gXCIuL3NpZ25pbi1mb3JtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1NpZ25VcENvbXBvbmVudH0gZnJvbSBcIi4vc2lnbnVwLWZvcm0uY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXV0aC1mb3JtJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPHNpZ24taW4tZm9ybSBcclxuICAgICAgICAgICAgKm5nSWY9XCJsb2dpblwiIFxyXG4gICAgICAgICAgICAoY2xvc2VNb2RhbCk9XCJoaWRlQWNjZXNzRm9ybSgpXCJcclxuICAgICAgICAgICAgKHN3YXBXaW5kb3cpPVwibG9naW49IWxvZ2luXCJcclxuICAgICAgICAgICAgKGF1dGhTdGF0dXMpPVwiYXV0aFN0YXR1c0NoYW5nZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChub3RpZnkpPVwibm90aWZ5TWVzc2FnZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvc2lnbi1pbi1mb3JtPlxyXG4gICAgICAgIDxzaWduLXVwLWZvcm0gXHJcbiAgICAgICAgICAgICpuZ0lmPVwiIWxvZ2luXCIgXHJcbiAgICAgICAgICAgIChjbG9zZU1vZGFsKT1cImhpZGVBY2Nlc3NGb3JtKClcIlxyXG4gICAgICAgICAgICAoc3dhcFdpbmRvdyk9XCJsb2dpbj0hbG9naW5cIlxyXG4gICAgICAgICAgICAoYXV0aFN0YXR1cyk9XCJhdXRoU3RhdHVzQ2hhbmdlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgKG5vdGlmeSk9XCJub3RpZnlNZXNzYWdlKCRldmVudClcIlxyXG4gICAgICAgICAgICA+PC9zaWduLXVwLWZvcm0+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOiBbXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtTaWduSW5Db21wb25lbnQsIFNpZ25VcENvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoRm9ybUNvbXBvbmVudCB7XHJcbiAgICBAT3V0cHV0KCkgY2xvc2VNb2RhbDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBub3RpZnk6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgYXV0aFN0YXR1czpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgcHVibGljIGxvZ2luPWZhbHNlO1xyXG5cclxuICAgIGhpZGVBY2Nlc3NGb3JtKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBub3RpZnlNZXNzYWdlKGV2ZW50KXtcclxuICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBhdXRoU3RhdHVzQ2hhbmdlZChldmVudCl7XHJcbiAgICAgICAgdGhpcy5hdXRoU3RhdHVzLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtEaXJlY3RpdmUsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9hbmltYXRlL2FuaW1hdGlvbl9idWlsZGVyJztcclxuaW1wb3J0IHtDc3NBbmltYXRpb25CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvYW5pbWF0ZS9jc3NfYW5pbWF0aW9uX2J1aWxkZXInO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tjb2xsYXBzZV0nXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGFwc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgQElucHV0KCkgY29sbGFwc2U6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9hbmltYXRpb246IENzc0FuaW1hdGlvbkJ1aWxkZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYW5pbWF0aW9uQnVpbGRlcjpBbmltYXRpb25CdWlsZGVyLCBwcml2YXRlIF9lbDpFbGVtZW50UmVmKSB7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gYW5pbWF0aW9uQnVpbGRlci5jc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XHJcbiAgICAgICAgLy8gaWYgdGhlIGNoYW5nZSBoYXBwZW5lZCBpbiB0aGUgY29sbGFwc2UgcHJvcGVydHlcclxuICAgICAgICBpZiAoY2hhbmdlcy5jb2xsYXBzZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb2xsYXBzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBhbmltYXRpb24gPSB0aGlzLl9hbmltYXRpb25cclxuICAgICAgICAgICAgLnNldER1cmF0aW9uKDM1MClcclxuICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoe1xyXG4gICAgICAgICAgICAgICAgJ2ZsZXgtZ3Jvdyc6IDEsXHJcbiAgICAgICAgICAgICAgICAnb3BhY2l0eScgOiAxLFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJzogJ2N1YmljLWJlemllcigwLjU3NSwgMC4yNTUsIDAuNDQwLCAwLjk4NSk7J1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc2V0VG9TdHlsZXMoe1xyXG4gICAgICAgICAgICAgICAgJ2ZsZXgtZ3Jvdyc6IDAsXHJcbiAgICAgICAgICAgICAgICAnb3BhY2l0eScgOiAwXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBhIGlzIHRoZSBBbmltYXRpb24gaW5zdGFuY2UgcnVubmluZyB0aGlzIGFuaW1hdGlvbi5cclxuICAgICAgICBsZXQgYSA9IGFuaW1hdGlvblxyXG4gICAgICAgICAgICAuc3RhcnQodGhpcy5fZWwubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgYS5vbkNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBhbmltYXRpb24gPSB0aGlzLl9hbmltYXRpb25cclxuICAgICAgICAgICAgLnNldER1cmF0aW9uKDM1MClcclxuICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoe1xyXG4gICAgICAgICAgICAgICAgJ2ZsZXgtZ3Jvdyc6IDAsXHJcbiAgICAgICAgICAgICAgICAnb3BhY2l0eScgOiAwLFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJzogJ2N1YmljLWJlemllcigwLjU3NSwgMC4yNTUsIDAuNDQwLCAwLjk4NSk7J1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc2V0VG9TdHlsZXMoe1xyXG4gICAgICAgICAgICAgICAgJ2ZsZXgtZ3Jvdyc6IDEsXHJcbiAgICAgICAgICAgICAgICAnb3BhY2l0eScgOiAxXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBhIGlzIHRoZSBBbmltYXRpb24gaW5zdGFuY2UgcnVubmluZyB0aGlzIGFuaW1hdGlvbi5cclxuICAgICAgICBsZXQgYSA9IGFuaW1hdGlvblxyXG4gICAgICAgICAgICAuc3RhcnQodGhpcy5fZWwubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgYS5vbkNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICB9KTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHtEaXJlY3RpdmUsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9hbmltYXRlL2FuaW1hdGlvbl9idWlsZGVyJztcclxuaW1wb3J0IHtDc3NBbmltYXRpb25CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvYW5pbWF0ZS9jc3NfYW5pbWF0aW9uX2J1aWxkZXInO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tkaXNhcHBlYXJdJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERpc2FwcGVhciBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgICBASW5wdXQoKSBkaXNhcHBlYXI6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9hbmltYXRpb246IENzc0FuaW1hdGlvbkJ1aWxkZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYW5pbWF0aW9uQnVpbGRlcjpBbmltYXRpb25CdWlsZGVyLCBwcml2YXRlIF9lbDpFbGVtZW50UmVmKSB7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gYW5pbWF0aW9uQnVpbGRlci5jc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XHJcbiAgICAgICAgLy8gaWYgdGhlIGNoYW5nZSBoYXBwZW5lZCBpbiB0aGUgZGlzYXBwZWFyIHByb3BlcnR5XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuZGlzYXBwZWFyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpc2FwcGVhcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBhbmltYXRpb24gPSB0aGlzLl9hbmltYXRpb25cclxuICAgICAgICAgICAgLnNldER1cmF0aW9uKDEwMClcclxuICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoe1xyXG4gICAgICAgICAgICAgICAgJ29wYWNpdHknIDogMSxcclxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbic6ICdjdWJpYy1iZXppZXIoMC41NzUsIDAuMjU1LCAwLjQ0MCwgMC45ODUpOydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnNldFRvU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgICdvcGFjaXR5JyA6IDBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGEgaXMgdGhlIEFuaW1hdGlvbiBpbnN0YW5jZSBydW5uaW5nIHRoaXMgYW5pbWF0aW9uLlxyXG4gICAgICAgIGxldCBhID0gYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIC5zdGFydCh0aGlzLl9lbC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICBhLm9uQ29tcGxldGUoKCkgPT4ge1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbiA9IHRoaXMuX2FuaW1hdGlvblxyXG4gICAgICAgICAgICAuc2V0RHVyYXRpb24oMTAwKVxyXG4gICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyh7XHJcbiAgICAgICAgICAgICAgICAnb3BhY2l0eScgOiAwLFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJzogJ2N1YmljLWJlemllcigwLjU3NSwgMC4yNTUsIDAuNDQwLCAwLjk4NSk7J1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc2V0VG9TdHlsZXMoe1xyXG4gICAgICAgICAgICAgICAgJ29wYWNpdHknIDogMVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gYSBpcyB0aGUgQW5pbWF0aW9uIGluc3RhbmNlIHJ1bm5pbmcgdGhpcyBhbmltYXRpb24uXHJcbiAgICAgICAgbGV0IGEgPSBhbmltYXRpb25cclxuICAgICAgICAgICAgLnN0YXJ0KHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIGEub25Db21wbGV0ZSgoKSA9PiB7XHJcbiAgICAgICAgfSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtVdGlsc1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QW5pbWF0aW9uQnVpbGRlcn0gZnJvbSBcImFuZ3VsYXIyL3NyYy9hbmltYXRlL2FuaW1hdGlvbl9idWlsZGVyXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdG9yeWJsb2Nrcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7TG9nZ2VyU2VydmljZSwgREVCVUdfTEVWRUx9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbGxhcHNlfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jb2xsYXBzZS5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHtEaXNhcHBlYXJ9IGZyb20gXCIuLi9kaXJlY3RpdmVzL2Rpc2FwcGVhci5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHtTdG9yeX0gZnJvbSBcIi4uL21vZGVscy9zdG9yeVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3N0b3J5YmxvY2snLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8YSBjbGFzcz1cImluZGV4XCIgKGNsaWNrKT1cInN3YXBDb2xsYXBzZSgpXCIgKGNsaWNrKT1cInN3YXBEaXNhcHBlYXIoKVwiPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInN0b3J5QmxvY2tJbmZvLnR5cGUgPT0gJ2NoYXB0ZXInXCI+e3t1dGlsc1NlcnZpY2UuZ2V0Um9tYW5OdW1lcmFsKHN0b3J5QmxvY2tJbmZvLmJsb2NrTnVtYmVyICsgMSl9fTwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY29udGFpbmVyXCIgW2NvbGxhcHNlXT1cImNvbGxhcHNlZFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0aXRsZVwiIFthdHRyLnJlYWRvbmx5XT1cIl9leHBvc2VkID8gbnVsbCA6IHRydWVcIiBbKG5nTW9kZWwpXT1cInN0b3J5QmxvY2tJbmZvLnRpdGxlXCIgcGxhY2Vob2xkZXI9XCJJbnNlcnQgYSB0aXRsZVwiICBbZGlzYXBwZWFyXT1cImRpc2FwcGVhcmVkXCIvPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJkZXNjcmlwdGlvblwiIFthdHRyLnJlYWRvbmx5XT1cIl9leHBvc2VkID8gbnVsbCA6IHRydWVcIiBbKG5nTW9kZWwpXT1cInN0b3J5QmxvY2tJbmZvLmRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJTdGFydCB3cml0aW5nIHlvdXIgc3RvcnkgaGVyZS4uLlwiIFtkaXNhcHBlYXJdPVwiZGlzYXBwZWFyZWRcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVmYXVsdC1hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwiZWRpdChpbmRleCwgJGV2ZW50KVwiIGNsYXNzPVwiYnV0dG9uIGlubGluZS1idXR0b24gcHJpbWFyeVwiPkVkaXQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwicmVtb3ZlKGluZGV4LCAkZXZlbnQpXCIgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiFoYXNJZCgpfVwiIGNsYXNzPVwiYnV0dG9uIGlubGluZS1idXR0b24gYWxlcnRcIj5SZW1vdmU8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwb3NlZC1hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwic2F2ZShpbmRleCwgJGV2ZW50KVwiIGNsYXNzPVwiYnV0dG9uIGlubGluZS1idXR0b24gcHJpbWFyeVwiPlNhdmU8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwiY2xvc2UoKVwiIGNsYXNzPVwiYnV0dG9uIGlubGluZS1idXR0b24gc2Vjb25kYXJ5XCI+Q2xvc2U8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtDb2xsYXBzZSwgRGlzYXBwZWFyXSxcclxuICAgIHByb3ZpZGVyczogW1V0aWxzU2VydmljZV0sXHJcbiAgICBpbnB1dHM6IFsnc3RvcnknLCdzdG9yeUJsb2NrSW5mbycsICdpbmRleCcsICd1c2VySWQnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0b3J5QmxvY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIHN0b3J5QmxvY2tJbmZvOlN0b3J5QmxvY2s7XHJcbiAgICBwcml2YXRlIHVzZXJJZDtcclxuICAgIHByaXZhdGUgc3Rvcnk6U3Rvcnk7XHJcbiAgICBwdWJsaWMgaW5kZXg7XHJcbiAgICBwdWJsaWMgX2V4cG9zZWQgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBfYWN0aXZlID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX2FjdGlvblRpbWVvdXQ7XHJcbiAgICBwdWJsaWMgX3NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF96b29tTGV2ZWwgPSAxMDtcclxuICAgIHByaXZhdGUgX3ByZXZpb3VzWm9vbUxldmVsID0gMTA7XHJcbiAgICBwcml2YXRlIHN0b3J5QmxvY2tMb2NhbFNhdmU6U3RvcnlCbG9jaztcclxuICAgIHB1YmxpYyBjb2xsYXBzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBkaXNhcHBlYXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBPdXRwdXQoKSB6b29tRXZlbnQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgZXhwb3NlRXZlbnQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgcmVtb3ZlU3RvcnlCbG9ja0V2ZW50OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIG5vdGlmeTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBtb2RpZmllZDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBsb2FkZWQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6TG9nZ2VyU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2FiOkFuaW1hdGlvbkJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9lOkVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHV0aWxzU2VydmljZTpVdGlsc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgc3RvcnlCbG9ja1NlcnZpY2U6U3RvcnlCbG9ja1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvblxyXG4gICAgICAgICkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOmFueSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQb3NpdGlvbk9uWm9vbSgxMDAwKTtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tJbmZvLmxvYWRlZD10cnVlO1xyXG4gICAgICAgIHRoaXMubG9hZGVkLmVtaXQodGhpcy5zdG9yeUJsb2NrSW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCB6b29tTGV2ZWwodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcHJldmlvdXNab29tTGV2ZWwgPSAodGhpcy5fcHJldmlvdXNab29tTGV2ZWwgPT0gdW5kZWZpbmVkKSA/IDEwIDogdGhpcy5fcHJldmlvdXNab29tTGV2ZWw7XHJcbiAgICAgICAgdGhpcy5fem9vbUxldmVsID0gKHRoaXMuX3pvb21MZXZlbCA9PSB1bmRlZmluZWQpID8gMTAgOiB0aGlzLl96b29tTGV2ZWw7XHJcbiAgICAgICAgaWYgKHRoaXMuX3pvb21MZXZlbCAhPSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1pvb21MZXZlbCA9IHRoaXMuX3pvb21MZXZlbDtcclxuICAgICAgICAgICAgdGhpcy5fem9vbUxldmVsID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbUNoYW5nZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCBleHBvc2VkSW5kZXgodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3NlZCA9ICh2YWx1ZSA9PSB0aGlzLmluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBzd2FwQ29sbGFwc2UoKXtcclxuICAgICAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcclxuICAgIH1cclxuXHJcbiAgICBzd2FwRGlzYXBwZWFyKCl7XHJcbiAgICAgICAgdGhpcy5kaXNhcHBlYXJlZCA9ICF0aGlzLmRpc2FwcGVhcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHpvb20oZSkge1xyXG4gICAgICAgIHZhciBlID0gd2luZG93LmV2ZW50IHx8IGU7IC8vIG9sZCBJRSBzdXBwb3J0XHJcbiAgICAgICAgdGhpcy56b29tRXZlbnQuZW1pdChlKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICB6b29tQ2hhbmdlZCgpIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuVkVSQk9TRSwnem9vbUNoYW5nZWQnLCcnLCB7XHJcbiAgICAgICAgICAgIHN0b3J5QmxvY2s6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgIHByZXZpb3VzWm9vbTogdGhpcy5fcHJldmlvdXNab29tTGV2ZWwsXHJcbiAgICAgICAgICAgIGN1cnJlbnRab29tOiB0aGlzLl96b29tTGV2ZWxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5fem9vbUxldmVsIDwgdGhpcy5zdG9yeUJsb2NrSW5mby5pbXBvcnRhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFkZU91dCgxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVBvc2l0aW9uT25ab29tKDEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYWRlSW4oc3BlZWQ6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLlZFUkJPU0UsJ2ZhZGVJbicsJycsIHtcclxuICAgICAgICAgICAgc3RvcnlCbG9jazogdGhpcy5pbmRleCxcclxuICAgICAgICAgICAgbWVzc2FnZTonRmFkaW5nIGluJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYWIuY3NzKCk7XHJcbiAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgZnJvbVN0eWxlID0ge307XHJcbiAgICAgICAgdmFyIHRvU3R5bGUgPSB7fTtcclxuXHJcbiAgICAgICAgZnJvbVN0eWxlWydkaXNwbGF5J10gPSAnZmxleCc7XHJcbiAgICAgICAgZnJvbVN0eWxlWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJ2N1YmljLWJlemllcigwLjU3NSwgMC4yNTUsIDAuNDQwLCAwLjk4NSk7JztcclxuICAgICAgICB0b1N0eWxlWydvcGFjaXR5J10gPSAxO1xyXG5cclxuICAgICAgICBhbmltYXRpb25cclxuICAgICAgICAgICAgLnNldER1cmF0aW9uKHNwZWVkKVxyXG4gICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyhmcm9tU3R5bGUpXHJcbiAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh0b1N0eWxlKTtcclxuXHJcbiAgICAgICAgaWYgKCEhX3NlbGYuX2FjdGlvblRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF9zZWxmLl9hY3Rpb25UaW1lb3V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF9zZWxmLl9hY3Rpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5zdGFydChfc2VsZi5fZS5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0lkKCkge1xyXG4gICAgICAgIHJldHVybiAhISgodGhpcy5zdG9yeUJsb2NrSW5mbyB8fCB7X2lkOiB1bmRlZmluZWR9KS5faWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZhZGVPdXQoc3BlZWQ6bnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuVkVSQk9TRSwnZmFkZU91dCcsJycsIHtcclxuICAgICAgICAgICAgICAgIHN0b3J5QmxvY2s6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1pvb206IHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFpvb206IHRoaXMuX3pvb21MZXZlbCxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFuY2U6IHRoaXMuc3RvcnlCbG9ja0luZm8uaW1wb3J0YW5jZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6J0ZhZGluZyBvdXQnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGFuaW1hdGlvbiA9IHRoaXMuX2FiLmNzcygpO1xyXG4gICAgICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgZnJvbVN0eWxlID0ge307XHJcbiAgICAgICAgICAgIHZhciB0b1N0eWxlID0ge307XHJcblxyXG4gICAgICAgICAgICB0b1N0eWxlWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJ2N1YmljLWJlemllcigwLjU3NSwgMC4yNTUsIDAuNDQwLCAwLjk4NSk7JztcclxuICAgICAgICAgICAgdG9TdHlsZVsnb3BhY2l0eSddID0gMDtcclxuXHJcbiAgICAgICAgICAgIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgLnNldER1cmF0aW9uKHNwZWVkKVxyXG4gICAgICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoZnJvbVN0eWxlKVxyXG4gICAgICAgICAgICAgICAgLnNldFRvU3R5bGVzKHRvU3R5bGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEhX3NlbGYuX2FjdGlvblRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5WRVJCT1NFLCdmYWRlT3V0JywnJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3J5QmxvY2s6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTonQW5pbWF0aW9uIHJlbW92ZWQnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoX3NlbGYuX2FjdGlvblRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBfc2VsZi5fYWN0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLnN0YXJ0KF9zZWxmLl9lLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQb3NpdGlvbk9uWm9vbShzcGVlZCkge1xyXG4gICAgICAgIGxldCBhbmltYXRpb24gPSB0aGlzLl9hYi5jc3MoKTtcclxuICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBmcm9tU3R5bGUgPSB7XHJcbiAgICAgICAgICAgIHRvcDogdGhpcy5jb25maWd1cmF0aW9uLnpvb20ub2Zmc2V0ICsgKCh0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5zdGVwICsgTWF0aC5leHAodGhpcy5fcHJldmlvdXNab29tTGV2ZWwgKiB0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5zdHJlbmd0aCkpICogdGhpcy5zdG9yeUJsb2NrSW5mby50aW1lUG9zaXRpb24pICsgJ3B4J1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciB0b1N0eWxlID0ge1xyXG4gICAgICAgICAgICB0b3A6IHRoaXMuY29uZmlndXJhdGlvbi56b29tLm9mZnNldCArICgodGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RlcCArIE1hdGguZXhwKHRoaXMuX3pvb21MZXZlbCAqIHRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0cmVuZ3RoKSkgKiB0aGlzLnN0b3J5QmxvY2tJbmZvLnRpbWVQb3NpdGlvbikgKyAncHgnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLlZFUkJPU0UsICdjaGFuZ2VQb3NpdGlvbk9uWm9vbScsICcnLCB7XHJcbiAgICAgICAgICAgIHN0b3J5QmxvY2s6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgIHByZXZpb3VzWm9vbTogdGhpcy5fcHJldmlvdXNab29tTGV2ZWwsXHJcbiAgICAgICAgICAgIGN1cnJlbnRab29tOiB0aGlzLl96b29tTGV2ZWwsXHJcbiAgICAgICAgICAgIHRpbWVQb3NpdGlvbjogdGhpcy5zdG9yeUJsb2NrSW5mby50aW1lUG9zaXRpb24sXHJcbiAgICAgICAgICAgIG9mZnNldDp0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5vZmZzZXQsXHJcbiAgICAgICAgICAgIHN0ZXA6dGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RlcCxcclxuICAgICAgICAgICAgc3RyZW5ndGg6dGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RyZW5ndGgsXHJcbiAgICAgICAgICAgIGZyb21Qb3NpdGlvbjpmcm9tU3R5bGUudG9wLFxyXG4gICAgICAgICAgICB0b1Bvc2l0aW9uOnRvU3R5bGUudG9wLFxyXG4gICAgICAgICAgICBtZXNzYWdlOidDaGFuZ2luZyBwb3NpdGlvbidcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKF9zZWxmLl96b29tTGV2ZWwgPiBfc2VsZi5zdG9yeUJsb2NrSW5mby5pbXBvcnRhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5WRVJCT1NFLCdjaGFuZ2VQb3NpdGlvbk9uWm9vbScsJycsIHtcclxuICAgICAgICAgICAgICAgIHN0b3J5QmxvY2s6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1pvb206IHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFpvb206IHRoaXMuX3pvb21MZXZlbCxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFuY2U6IHRoaXMuc3RvcnlCbG9ja0luZm8uaW1wb3J0YW5jZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6J0ZhZGluZyBpbidcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRvU3R5bGVbJ29wYWNpdHknXSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuVkVSQk9TRSwnY2hhbmdlUG9zaXRpb25Pblpvb20nLCcnLCB7XHJcbiAgICAgICAgICAgICAgICBzdG9yeUJsb2NrOiB0aGlzLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNab29tOiB0aGlzLl9wcmV2aW91c1pvb21MZXZlbCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRab29tOiB0aGlzLl96b29tTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbmNlOiB0aGlzLnN0b3J5QmxvY2tJbmZvLmltcG9ydGFuY2UsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOidGYWRpbmcgb3V0J1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdG9TdHlsZVsnb3BhY2l0eSddID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRvU3R5bGVbJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gPSAnY3ViaWMtYmV6aWVyKDAuNTc1LCAwLjI1NSwgMC40NDAsIDAuOTg1KTsnO1xyXG5cclxuICAgICAgICBhbmltYXRpb25cclxuICAgICAgICAgICAgLnNldER1cmF0aW9uKHNwZWVkKVxyXG4gICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyhmcm9tU3R5bGUpXHJcbiAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh0b1N0eWxlKTtcclxuXHJcbiAgICAgICAgaWYgKCEhX3NlbGYuX2FjdGlvblRpbWVvdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLlZFUkJPU0UsJ2NoYW5nZVBvc2l0aW9uT25ab29tJywnJywge1xyXG4gICAgICAgICAgICAgICAgc3RvcnlCbG9jazogdGhpcy5pbmRleCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6J0FuaW1hdGlvbiByZW1vdmVkJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF9zZWxmLl9hY3Rpb25UaW1lb3V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF9zZWxmLl9hY3Rpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5zdGFydChfc2VsZi5fZS5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZvY3VzKCkge1xyXG4gICAgICAgIHZhciBuYXRpdmUgPSB0aGlzLl9lLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgdmFyIHRleHRhcmVhID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hdGl2ZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICgobmF0aXZlLmNoaWxkTm9kZXNbaV0uY2xhc3NOYW1lIHx8ICcnKS5pbmRleE9mKFwidGV4dC1jb250YWluZXJcIikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gbmF0aXZlLmNoaWxkTm9kZXNbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISFjb250YWluZXIpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKChjb250YWluZXIuY2hpbGROb2Rlc1tpXS5jbGFzc05hbWUgfHwgJycpLmluZGV4T2YoXCJkZXNjcmlwdGlvblwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEgPSBjb250YWluZXIuY2hpbGROb2Rlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoISF0ZXh0YXJlYSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH0sIDUwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlZGl0KGluZGV4LCBldmVudCkge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnZWRpdCcsICdTYXZpbmcgdGVtcG9yYXJ5IGRhdGEgJywgdGhpcy5zdG9yeUJsb2NrSW5mbyk7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrTG9jYWxTYXZlID0gPFN0b3J5QmxvY2s+SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0b3J5QmxvY2tJbmZvKSk7XHJcbiAgICAgICAgdGhpcy5leHBvc2VFdmVudC5lbWl0KGluZGV4KTtcclxuICAgICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGluZGV4LCBldmVudCkge1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja1NlcnZpY2UuZGVsZXRlU3RvcnlCbG9jayh0aGlzLnVzZXJJZCx0aGlzLnN0b3J5Ll9pZCwgdGhpcy5zdG9yeUJsb2NrSW5mbykuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAncmVtb3ZlJywgJ1JlY2VpdmVkIGRhdGEnLCAgZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5XQVJOLCAncmVtb3ZlJywgJ0Vycm9yIHdoaWxlIHJlbW92aW5nJywgdGhpcy5zdG9yeUJsb2NrSW5mbywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4uJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAncmVtb3ZlJywgJ1JlbW92aW5nIGJsb2NrIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUmVtb3ZlZCBzdWNjZXNzZnVsbHkuJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVN0b3J5QmxvY2tFdmVudC5lbWl0KHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RpZmllZC5lbWl0KHRoaXMuc3RvcnlCbG9ja0luZm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKGluZGV4LCBldmVudCkge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnc2F2ZScsICdJIGFtIGFib3V0IHRvIHNhdmUnLCB0aGlzLnN0b3J5QmxvY2tJbmZvKTtcclxuXHJcbiAgICAgICAgaWYgKCEodGhpcy5zdG9yeUJsb2NrSW5mby50aXRsZSA9PSAnJyAmJiB0aGlzLnN0b3J5QmxvY2tJbmZvLmRlc2NyaXB0aW9uID09ICcnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLnNhdmVTdG9yeUJsb2NrKHRoaXMudXNlcklkLCB0aGlzLnN0b3J5Ll9pZCwgdGhpcy5zdG9yeUJsb2NrSW5mbykuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2NrSW5mbyA9IDxTdG9yeUJsb2NrPmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdzYXZlJywgJ1JlY2VpdmVkICcsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnc2F2ZScsICdTYXZpbmcgdGVtcG9yYXJ5IGRhdGEgJywgZGF0YSwgdGhpcy5zdG9yeUJsb2NrSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2NrTG9jYWxTYXZlID0gPFN0b3J5QmxvY2s+SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0b3J5QmxvY2tJbmZvKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5XQVJOLCAnc2F2ZScsICdFcnJvciB3aGlsZSBzYXZpbmcnLCB0aGlzLnN0b3J5QmxvY2tJbmZvLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvci4gUGxlYXNlIHRyeSBhZ2Fpbi4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnc2F2ZScsICdTYXZlZCAnLCB0aGlzLnN0b3J5QmxvY2tJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2F2ZWQgc3VjY2Vzc2Z1bGx5LidcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGlmaWVkLmVtaXQodGhpcy5zdG9yeUJsb2NrSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCgnUGxlYXNlIGluc2VydCBhIHRpdGxlIG9yIHNvbWUgY29udGVudC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5leHBvc2VFdmVudC5lbWl0KC0xKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnN0b3J5QmxvY2tMb2NhbFNhdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdjbG9zZScsJ1JlbW92aW5nIGJsb2NrIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVTdG9yeUJsb2NrRXZlbnQuZW1pdCh0aGlzLmluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J3RpbWVsaW5lJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lbGluZUNvbXBvbmVudCB7XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWZ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidhZGQtYnV0dG9uJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGE+PHNwYW4+Kzwvc3Bhbj48L2E+XHJcbiAgICBgLFxyXG4gICAgaW5wdXRzOiBbJ29mZnNldFknXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkQnV0dG9uQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgX29mZnNldFk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZTpFbGVtZW50UmVmKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCBvZmZzZXRZKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX29mZnNldFkgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLm9mZnNldENoYW5nZWQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZnNldENoYW5nZWQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9lLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gdmFsdWUgKyAncHgnO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtOZ0NsYXNzfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvc3RvcnlibG9ja3Muc2VydmljZVwiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2t9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9ja1wiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tDb21wb25lbnR9IGZyb20gXCIuL3N0b3J5YmxvY2suY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VGltZWxpbmVDb21wb25lbnR9IGZyb20gXCIuL3RpbWVsaW5lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0FkZEJ1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vYWRkLWJ1dHRvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHtTdG9yeUJsb2NrVHlwZX0gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrLXR5cGVcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQge1dlYlN0b3JhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvd2Vic3RvcmFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TG9nZ2VyU2VydmljZSwgREVCVUdfTEVWRUx9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge1N0b3J5fSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5XCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3N0b3J5JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgIDxtYWluIFtoaWRkZW5dPVwiIWhhc0xvYWRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPHRpbWVsaW5lIGNsYXNzPVwidGltZWxpbmUtYmxvY2tcIj48L3RpbWVsaW5lPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0b3J5LWJsb2Nrc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdG9yeWJsb2NrICpuZ0Zvcj1cIiNzdG9yeUJsb2NrIG9mIHN0b3J5QmxvY2tzOyAjaSA9IGluZGV4XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpbmRleF09XCJpXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtzdG9yeUJsb2NrSW5mb109XCJzdG9yeUJsb2NrXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt6b29tTGV2ZWxdPVwiem9vbUxldmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3VzZXJJZF09XCJ1c2VySWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbc3RvcnldPVwic3RvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAobW9kaWZpZWQpPVwibW9kaWZpZWQ9dHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChsb2FkZWQpPVwic3RvcnlCbG9ja0xvYWRlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2V4cG9zZWRJbmRleF09XCJleHBvc2VkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ZXhwb3NlZDogZXhwb3NlZEluZGV4ID09IGl9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlbW92ZVN0b3J5QmxvY2tFdmVudCk9XCJyZW1vdmVTdG9yeUJsb2NrKCRldmVudClcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGV4cG9zZUV2ZW50KT1cInNldEV4cG9zZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChub3RpZnkpPVwibm90aWZ5TXNnKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0b3J5LWJsb2NrIHt7IHN0b3J5QmxvY2sudHlwZcKgfX1cIj48L3N0b3J5YmxvY2s+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZFN0b3J5QmxvY2soJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwib25Nb3VzZUVudGVyKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cIm9uTW91c2VMZWF2ZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAobW91c2Vtb3ZlKT1cIm9uTW91c2VNb3ZlKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YWRkLWJ1dHRvbiAqbmdJZj1cImFkZEJ1dHRvbi52aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW29mZnNldFldPVwiYWRkQnV0dG9uLnRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhZGRTdG9yeUJsb2NrKCRldmVudClcIj48L2FkZC1idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250cm9sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ6b29tLWNvbnRyb2xzXCI+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9XCJab29tIGluXCIgKGNsaWNrKT1cInpvb21JbigpXCI+KzwvYT4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT1cIlpvb20gb3V0XCIgKGNsaWNrKT1cInpvb21PdXQoKVwiPiZuZGFzaDs8L2E+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgZGlyZWN0aXZlczogW1N0b3J5QmxvY2tDb21wb25lbnQsIFRpbWVsaW5lQ29tcG9uZW50LCBBZGRCdXR0b25Db21wb25lbnQsIE5nQ2xhc3NdLFxyXG4gICAgaW5wdXRzOiBbJ3VzZXJJZCcsICdzdG9yeSddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgICBwdWJsaWMgc3RvcnlCbG9ja3M6U3RvcnlCbG9ja1tdO1xyXG4gICAgcHVibGljIHN0b3J5QmxvY2tUeXBlczpTdG9yeUJsb2NrVHlwZVtdO1xyXG4gICAgcHVibGljIHN0b3J5QmxvY2tEZWZhdWx0VHlwZXM6U3RvcnlCbG9ja1R5cGVbXTtcclxuICAgIHB1YmxpYyB6b29tTGV2ZWw7XHJcbiAgICBwdWJsaWMgZXhwb3NlZEluZGV4O1xyXG4gICAgcHVibGljIGV4cG9zZWRTdG9yeUJsb2NrO1xyXG4gICAgcHVibGljIGFkZEJ1dHRvbjtcclxuICAgIHB1YmxpYyB0b2tlbjpzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBtZW51VmlzaWJsZTtcclxuICAgIHB1YmxpYyB1c2VySWQ7XHJcbiAgICBwdWJsaWMgc3Rvcnk6U3Rvcnk7XHJcbiAgICBwdWJsaWMgYWNjZXNzRm9ybVZpc2libGU7XHJcbiAgICBwcml2YXRlIG1heEluZGV4ID0gMDtcclxuICAgIHByaXZhdGUgbm90aWZpY2F0aW9uO1xyXG4gICAgcHJpdmF0ZSBzdG9yeUJsb2Nrc0xvYWRlZDtcclxuICAgIHByaXZhdGUgbW9kaWZpZWQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaGFzTG9hZGVkPWZhbHNlO1xyXG5cclxuICAgIEBPdXRwdXQoKSBub3RpZnk6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgZXhwb3NlU3RvcnlCbG9jazpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBzdG9yeUJsb2NrTGlzdDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBsb2FkZWQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6TG9nZ2VyU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgc3RvcnlCbG9ja1NlcnZpY2U6U3RvcnlCbG9ja1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgd2ViU3RvcmFnZVNlcnZpY2U6V2ViU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgIGF1dGhTZXJ2aWNlLmF1dGhTdGF0dXNDaGFuZ2UkLnN1YnNjcmliZShldmVudCA9PiB0aGlzLmF1dGhTdGF0dXNDaGFuZ2VkKGV2ZW50KSk7XHJcbiAgICAgICAgc3RvcnlCbG9ja1NlcnZpY2UuYWRkUmVxdWVzdCQuc3Vic2NyaWJlKGV2ZW50ID0+IHRoaXMuYWRkU3RvcnlCbG9jayhldmVudCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tzID0gW107XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2Nrc0xvYWRlZCA9IDA7XHJcbiAgICAgICAgdGhpcy56b29tTGV2ZWwgPSA0O1xyXG4gICAgICAgIHRoaXMuZXhwb3NlZEluZGV4ID0gLTE7XHJcbiAgICAgICAgdGhpcy5leHBvc2VkU3RvcnlCbG9jayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tb2RpZmllZD1mYWxzZTtcclxuICAgICAgICB0aGlzLmFkZEJ1dHRvbiA9IHtcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvcDogMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubWVudVZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFjY2Vzc0Zvcm1WaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24gPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYoISF0aGlzLnN0b3J5ICYmICEhdGhpcy5zdG9yeS5faWQpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRTdG9yeUJsb2NrVHlwZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRTdG9yeUJsb2Nrcyh0aGlzLnVzZXJJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubW9kaWZpZWQ9dHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGVja0lmTG9hZGluZ0lzQ29tcGxldGUoKVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6e1twcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pOmFueSB7XHJcbiAgICAgICAgZm9yKGxldCBwcm9wTmFtZSBpbiBjaGFuZ2VzKXtcclxuICAgICAgICAgICAgaWYocHJvcE5hbWUgPT09ICdzdG9yeScpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NoYW5nZWQgc3RvcnknLCBjaGFuZ2VzW3Byb3BOYW1lXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXV0aFVzZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmdldElkRnJvbVRva2VuKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGFub255bW91c1Rva2VuID0gdGhpcy53ZWJTdG9yYWdlU2VydmljZS5nZXQoJ2Fub255bW91c190b2tlbicpO1xyXG4gICAgICAgICAgICBpZiAoIWFub255bW91c1Rva2VuKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYW5vbnltb3VzVG9rZW4gPSB0aGlzLmF1dGhTZXJ2aWNlLmdlbmVyYXRlQW5vbnltb3VzVG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMud2ViU3RvcmFnZVNlcnZpY2UucHV0KCdhbm9ueW1vdXNfdG9rZW4nLCBhbm9ueW1vdXNUb2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0SWRGcm9tQW5vbnltb3VzVG9rZW4oYW5vbnltb3VzVG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhdXRoU3RhdHVzQ2hhbmdlZChldmVudCkge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaEJsb2NrTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hCbG9ja0xpc3QoKSB7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSB0aGlzLmF1dGhVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5nZXRTdG9yeUJsb2Nrcyh0aGlzLnVzZXJJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcnlCbG9ja0xvYWRlZCgkZXZlbnQpe1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja3NMb2FkZWQgPSB0aGlzLnN0b3J5QmxvY2tzTG9hZGVkKzE7XHJcbiAgICAgICAgdGhpcy5jaGVja0lmTG9hZGluZ0lzQ29tcGxldGUoKVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrSWZMb2FkaW5nSXNDb21wbGV0ZSgpe1xyXG4gICAgICAgIHRoaXMuaGFzTG9hZGVkID0gdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGggPT09IHRoaXMuc3RvcnlCbG9ja3NMb2FkZWQgJiYgdGhpcy5tb2RpZmllZDtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ2NoZWNrSWZMb2FkaW5nSXNDb21wbGV0ZScsICdDaGVja2luZyBpZiBhbGwgdGhlIGJsb2NrcyBhcmUgbG9hZGVkJywgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGgsIHRoaXMuc3RvcnlCbG9ja3NMb2FkZWQpO1xyXG4gICAgICAgIGlmKHRoaXMuaGFzTG9hZGVkKXtcclxuICAgICAgICAgICAgdGhpcy5sb2FkZWQuZW1pdCh0aGlzLnN0b3J5QmxvY2tMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RvcnlCbG9ja1R5cGVzKCkge1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja1R5cGVzID0gdGhpcy5zdG9yeUJsb2NrU2VydmljZS5nZXRTdG9yeUJsb2NrVHlwZXMoKTtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tEZWZhdWx0VHlwZXMgPSB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdldFN0b3J5QmxvY2tEZWZhdWx0VHlwZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdG9yeUJsb2Nrcyh1c2VySWQpIHtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdldFN0b3J5QmxvY2tzKHVzZXJJZCwgdGhpcy5zdG9yeS5faWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF4SW5kZXggPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0b3J5QmxvY2tzW2ldLnR5cGUgPT09ICdjaGFwdGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1heEluZGV4ID0gTWF0aC5tYXgodGhpcy5tYXhJbmRleCwgdGhpcy5zdG9yeUJsb2Nrc1tpXS5ibG9ja0lkIHx8IDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tb2RpZmllZCAmJiAoIXRoaXMuc3RvcnlCbG9ja3MgfHwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGggPT0gMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ2dldFN0b3J5QmxvY2tzJywgJ05vIGJsb2NrcyByZWNlaXZlZCEnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdlbmVyYXRlVGVzdERhdGEodGhpcy51c2VySWQsIHRoaXMuc3RvcnkuX2lkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVEZWZhdWx0QmxvY2tzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcnlCbG9ja3MgPSBzYXZlRGVmYXVsdEJsb2NrcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjYWxjdWxhdGVTdG9yeUJsb2NrTnVtYmVycygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2NrTGlzdC5lbWl0KHRoaXMuc3RvcnlCbG9ja3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIgPT4gdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLkVSUk9SLCAnZ2V0U3RvcnlCbG9ja3MnLCAnRXJyb3InLCBlcnIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ2dldFN0b3J5QmxvY2tzJywgJ0xvYWRlZCAnICsgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGggKyAnIGRlZmF1bHQgYmxvY2tzJywgdGhpcy5zdG9yeUJsb2Nrcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGlmaWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tMaXN0LmVtaXQodGhpcy5zdG9yeUJsb2Nrcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZVN0b3J5QmxvY2tOdW1iZXJzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLkVSUk9SLCAnZ2V0U3RvcnlCbG9ja3MnLCAnRXJyb3InLCBlcnIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnZ2V0U3RvcnlCbG9ja3MnLCAnTG9hZGVkICcgKyB0aGlzLnN0b3J5QmxvY2tzLmxlbmd0aCArICcgYmxvY2tzJywgdGhpcy5zdG9yeUJsb2NrcylcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kaWZpZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTdG9yeUJsb2NrKGluZGV4KSB7XHJcbiAgICAgICAgaWYodGhpcy5zdG9yeUJsb2Nrc1tpbmRleF0ubG9hZGVkKXtcclxuICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2Nrc0xvYWRlZC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrTGlzdC5lbWl0KHRoaXMuc3RvcnlCbG9ja3MpO1xyXG4gICAgICAgIHRoaXMucmVjYWxjdWxhdGVTdG9yeUJsb2NrTnVtYmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY2FsY3VsYXRlU3RvcnlCbG9ja051bWJlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdyZWNhbGN1bGF0ZVN0b3J5QmxvY2tOdW1iZXJzJywgJ1NvcnRpbmcgYmxvY2tzOiBiZWZvcmUnLCB0aGlzLnN0b3J5QmxvY2tzKTtcclxuICAgICAgICB2YXIgY3VycmVudFR5cGVzID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0b3J5QmxvY2tUeXBlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjdXJyZW50VHlwZXNbdGhpcy5zdG9yeUJsb2NrVHlwZXNbaV0uaWRdID0gdGhpcy5zdG9yeUJsb2NrVHlwZXNbaV07XHJcbiAgICAgICAgICAgIGN1cnJlbnRUeXBlc1t0aGlzLnN0b3J5QmxvY2tUeXBlc1tpXS5pZF0uaW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0b3J5QmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50VHlwZSA9IHRoaXMuc3RvcnlCbG9ja3NbaV0udHlwZSB8fCB0aGlzLnN0b3J5QmxvY2tEZWZhdWx0VHlwZXNbMF0uaWQ7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUeXBlc1tjdXJyZW50VHlwZV0gPSBjdXJyZW50VHlwZXNbY3VycmVudFR5cGVdIHx8IHRoaXMuc3RvcnlCbG9ja0RlZmF1bHRUeXBlc1swXTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2Nrc1tpXS5ibG9ja051bWJlciA9IGN1cnJlbnRUeXBlc1tjdXJyZW50VHlwZV0uaW5kZXggfHwgMDtcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnRUeXBlc1tjdXJyZW50VHlwZV0uaW5kZXgrKztcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnN0b3J5QmxvY2tUeXBlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RvcnlCbG9ja1R5cGVzW2pdLmxldmVsID4gY3VycmVudFR5cGVzW2N1cnJlbnRUeXBlXS5sZXZlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUeXBlc1t0aGlzLnN0b3J5QmxvY2tUeXBlc1tqXS5pZF0uaW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAncmVjYWxjdWxhdGVTdG9yeUJsb2NrTnVtYmVycycsICdTb3J0aW5nIGJsb2NrczogYWZ0ZXInLCB0aGlzLnN0b3J5QmxvY2tzKTtcclxuICAgIH1cclxuXHJcbiAgICB6b29tSW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuem9vbUxldmVsIDwgMTApIHtcclxuICAgICAgICAgICAgdGhpcy56b29tTGV2ZWwrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5TXNnKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdtZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdNYXggem9vbSByZWFjaGVkJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgem9vbU91dCgpIHtcclxuICAgICAgICBpZiAodGhpcy56b29tTGV2ZWwgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbUxldmVsLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeU1zZyh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnbWVzc2FnZScsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTWluaW11bSB6b29tIHJlYWNoZWQnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlRW50ZXIoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmFkZEJ1dHRvbiA9IHtcclxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgdG9wOiBldmVudC55XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlTGVhdmUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmFkZEJ1dHRvbiA9IHtcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvcDogMFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5hZGRCdXR0b24udmlzaWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEJ1dHRvbi50b3AgPSBldmVudC55O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRTdG9yeUJsb2NrKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5hZGRCdXR0b24gPSB7XHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3A6IDBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgem9vbUNvbnZlcnNpb25GYWN0b3IgPSB0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5zdGVwICsgTWF0aC5leHAodGhpcy56b29tTGV2ZWwgKiB0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5zdHJlbmd0aCk7XHJcblxyXG4gICAgICAgIHZhciBwb3NpdGlvbkF0Wm9vbSA9ICgoZXZlbnQucGFnZVkgLSB0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5vZmZzZXQpIC8gem9vbUNvbnZlcnNpb25GYWN0b3IpO1xyXG5cclxuICAgICAgICB2YXIgbmV3U3RvcnlCbG9jazpTdG9yeUJsb2NrID0gPFN0b3J5QmxvY2s+IHtcclxuICAgICAgICAgICAgYmxvY2tJZDogdGhpcy5tYXhJbmRleCArIDEsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgICB0aW1lUG9zaXRpb246IHBvc2l0aW9uQXRab29tLFxyXG4gICAgICAgICAgICBpbXBvcnRhbmNlOiAzLFxyXG4gICAgICAgICAgICB0eXBlOiAnY2hhcHRlcidcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm1heEluZGV4Kys7XHJcblxyXG4gICAgICAgIHZhciB0bXBBcnJheVBvcyA9IDA7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdG9yeUJsb2Nrc1tpXS50aW1lUG9zaXRpb24gPiBwb3NpdGlvbkF0Wm9vbSkge1xyXG4gICAgICAgICAgICAgICAgdG1wQXJyYXlQb3MgPSBpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja3Muc3BsaWNlKHRtcEFycmF5UG9zLCAwLCBuZXdTdG9yeUJsb2NrKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdhZGRTdG9yeUJsb2NrJywgJ0FkZGluZyBibG9jayBpbmRleCAnICsgdG1wQXJyYXlQb3MpO1xyXG4gICAgICAgIHRoaXMuc2V0RXhwb3NlZCh0bXBBcnJheVBvcyk7XHJcblxyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja0xpc3QuZW1pdCh0aGlzLnN0b3J5QmxvY2tzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFeHBvc2VkKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdzZXRFeHBvc2VkJywgJ1NldHRpbmcgYmxvY2sgJyArIGluZGV4ICsgJyBleHBvc2VkJyk7XHJcbiAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZVN0b3J5QmxvY2tOdW1iZXJzKCk7XHJcbiAgICAgICAgdGhpcy5leHBvc2VkSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmV4cG9zZWRTdG9yeUJsb2NrID0gaW5kZXggPj0gMCA/IHRoaXMuc3RvcnlCbG9ja3NbaW5kZXhdIDogbnVsbDtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmNoYW5nZUV4cG9zZWRJbmRleChpbmRleCk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ25vLXNjcm9sbCcpO1xyXG4gICAgICAgIHRoaXMuZXhwb3NlU3RvcnlCbG9jay5lbWl0KHRoaXMuZXhwb3NlZFN0b3J5QmxvY2spO1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja0xpc3QuZW1pdCh0aGlzLnN0b3J5QmxvY2tzKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLnNhdmVTdG9yeUJsb2NrKHRoaXMudXNlcklkLCB0aGlzLnN0b3J5Ll9pZCwgdGhpcy5zdG9yeUJsb2Nrc1tpXSkuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeU1zZyhub3RpZmljYXRpb24pIHtcclxuICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KG5vdGlmaWNhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTWVudSh2aXNpYmlsaXR5KSB7XHJcbiAgICAgICAgdGhpcy5tZW51VmlzaWJsZSA9IHZpc2liaWxpdHk7XHJcbiAgICAgICAgaWYgKHZpc2liaWxpdHkpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0luamVjdGFibGUsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHtTdG9yeUJsb2NrfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2tcIjtcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmUnO1xyXG5pbXBvcnQge09ic2VydmVyfSBmcm9tICdyeGpzL09ic2VydmVyJztcclxuaW1wb3J0IHtTVE9SWUJMT0NLU30gZnJvbSBcIi4uL21vY2svbW9jay1zdG9yeWJsb2Nrc1wiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tUeXBlfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2stdHlwZVwiO1xyXG5pbXBvcnQge1NUT1JZQkxPQ0tfVFlQRVN9IGZyb20gXCIuLi9tb2NrL21vY2stc3RvcnlibG9jay10eXBlc1wiO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2UsIERFQlVHX0xFVkVMfSBmcm9tIFwiLi9sb2dnZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge1N0b3J5fSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5XCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3RvcnlTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjpMb2dnZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGh0dHA6SHR0cCxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjpDb25maWd1cmF0aW9uKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3Rvcmllcyh1c2VySWQpOk9ic2VydmFibGU8U3RvcnlbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvc3RvcnkvJyArIHVzZXJJZClcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nZ2VyLmVycm9yQ2F0Y2hlcigpKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlU3RvcnkodXNlcklkLCBzdG9yeTpTdG9yeSk6T2JzZXJ2YWJsZTxTdG9yeT4ge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RvcnkudXNlcklkID0gdXNlcklkO1xyXG5cclxuICAgICAgICBpZiAoISFzdG9yeS5faWQpIHtcclxuICAgICAgICAgICAgc3RvcnkuY3JlYXRlZEF0ID0gc3RvcnkuY3JlYXRlZEF0IHx8IChuZXcgRGF0ZSgpKTtcclxuICAgICAgICAgICAgc3RvcnkubGFzdE1vZGlmaWVkQXQgPSAobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvc3RvcnkvJyArIHVzZXJJZCArICcvJysgc3RvcnkuX2lkICwgXCJkYXRhPVwiICsgSlNPTi5zdHJpbmdpZnkoc3RvcnkpLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvckNhdGNoZXIoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzdG9yeS5jcmVhdGVkQXQgPSAobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIHN0b3J5Lmxhc3RNb2RpZmllZEF0ID0gKG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5jb25maWd1cmF0aW9uLmFwaUJhc2VQYXRoICsgJy9zdG9yeS8nICsgdXNlcklkICsgJy8nLCBcImRhdGE9XCIgKyBKU09OLnN0cmluZ2lmeShzdG9yeSksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nZ2VyLmVycm9yQ2F0Y2hlcigpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlU3RvcnkodXNlcklkLCBzdG9yeTpTdG9yeSk6T2JzZXJ2YWJsZTxTdG9yeVtdPiB7XHJcbiAgICAgICAgaWYgKCEhc3RvcnkuX2lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvc3RvcnkvJyArIHVzZXJJZCArICcvJysgc3RvcnkuX2lkKVxyXG4gICAgICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvckNhdGNoZXIoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge05nQ2xhc3N9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdG9yeWJsb2Nrcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja0NvbXBvbmVudH0gZnJvbSBcIi4vc3RvcnlibG9jay5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtUaW1lbGluZUNvbXBvbmVudH0gZnJvbSBcIi4vdGltZWxpbmUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QWRkQnV0dG9uQ29tcG9uZW50fSBmcm9tIFwiLi9hZGQtYnV0dG9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tUeXBlfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2stdHlwZVwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7V2ViU3RvcmFnZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy93ZWJzdG9yYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlLCBERUJVR19MRVZFTH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3Rvcnl9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlcIjtcclxuaW1wb3J0IHtTdG9yeVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdG9yeS5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3N0b3J5LWNhcmQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RvcnktY29udGFpbmVyXCIgbmdDbGFzcz1cIm1hdGVyaWFsLXNoYWRvd1wiPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzdG9yeVwiIGlkPVwic3RvcnlcIj5cclxuICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICA8aDI+e3tzdG9yeS50aXRsZX19PC9oMj5cclxuICAgICAgICAgICAgICA8aDQ+U3RvcnkgY2FyZDwvaDQ+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RvcnktZGVzY3JpcHRpb25cIj57e3N0b3J5LmRlc2NyaXB0aW9ufX08L2Rpdj5cclxuICAgICAgICAgICAgPGZvb3RlciBjbGFzcz1cImRlZmF1bHQtYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidXR0b24gaW5saW5lLWJ1dHRvbiBwcmltYXJ5XCIgKGNsaWNrKT1cIm9wZW4oKVwiPk9QRU48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ1dHRvbiBpbmxpbmUtYnV0dG9uIGFsZXJ0XCIgKGNsaWNrKT1cInJlbW92ZSgpXCI+REVMRVRFPC9hPlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtTdG9yeVNlcnZpY2VdLFxyXG4gICAgZGlyZWN0aXZlczogW10sXHJcbiAgICBpbnB1dHM6WydzdG9yeScsJ2luZGV4J11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9yeUNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgc3Rvcnk6U3Rvcnk7XHJcbiAgICBpbmRleDtcclxuXHJcbiAgICBAT3V0cHV0KCkgb3BlblN0b3J5OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIHJlbW92ZVN0b3J5OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcnlTZXJ2aWNlOlN0b3J5U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgbG9nZ2VyOkxvZ2dlclNlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTphbnkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCl7XHJcbiAgICAgICAgdGhpcy5vcGVuU3RvcnkuZW1pdCh0aGlzLmluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoKXtcclxuICAgICAgICB0aGlzLnJlbW92ZVN0b3J5LmVtaXQodGhpcy5pbmRleCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge05nQ2xhc3N9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdG9yeWJsb2Nrcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja0NvbXBvbmVudH0gZnJvbSBcIi4vc3RvcnlibG9jay5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtUaW1lbGluZUNvbXBvbmVudH0gZnJvbSBcIi4vdGltZWxpbmUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QWRkQnV0dG9uQ29tcG9uZW50fSBmcm9tIFwiLi9hZGQtYnV0dG9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tUeXBlfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2stdHlwZVwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7V2ViU3RvcmFnZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy93ZWJzdG9yYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlLCBERUJVR19MRVZFTH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3Rvcnl9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlcIjtcclxuaW1wb3J0IHtTdG9yeVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdG9yeS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3RvcnlDYXJkQ29tcG9uZW50fSBmcm9tIFwiLi9zdG9yeS1jYXJkLmNvbXBvbmVudFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzdG9yeS1saXN0JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxzdG9yeS1jYXJkIFxyXG4gICAgICAgICAgICAqbmdGb3I9XCIjc3Rvcnkgb2Ygc3RvcmllczsgI2kgPSBpbmRleFwiXHJcbiAgICAgICAgICAgICAgICBbc3RvcnldPVwic3RvcnlcIlxyXG4gICAgICAgICAgICAgICAgW2luZGV4XT1cImlcIlxyXG4gICAgICAgICAgICAgICAgKG9wZW5TdG9yeSk9XCJvcGVuU3RvcnkoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAocmVtb3ZlU3RvcnkpPVwicmVtb3ZlU3RvcnkoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgID48L3N0b3J5LWNhcmQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtc3RvcnktY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0b3J5LWNvbnRhaW5lclwiIG5nQ2xhc3M9XCJtYXRlcmlhbC1zaGFkb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInN0b3J5XCIgaWQ9XCJzdG9yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5BZGQgYSBuZXcgc3Rvcnk8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5TdG9yeSBjYXJkPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdG9yeS1hZGRcIj48YSAoY2xpY2spPVwiYWRkU3RvcnkoKVwiPis8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb290ZXI+PC9mb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtTdG9yeVNlcnZpY2VdLFxyXG4gICAgZGlyZWN0aXZlczogW1N0b3J5Q2FyZENvbXBvbmVudF0sXHJcbiAgICBpbnB1dHM6IFsndXNlcklkJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9yeUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBzdG9yaWVzOlN0b3J5W107XHJcbiAgICBwcml2YXRlIHVzZXJJZDtcclxuICAgIEBPdXRwdXQoKSBsb2FkU3Rvcnk6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yeVNlcnZpY2U6U3RvcnlTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBsb2dnZXI6TG9nZ2VyU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOmFueSB7XHJcbiAgICAgICAgdGhpcy5zdG9yaWVzID0gW107XHJcbiAgICAgICAgdGhpcy5nZXRTdG9yaWVzKHRoaXMudXNlcklkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdG9yaWVzKHVzZXJJZCkge1xyXG4gICAgICAgIHRoaXMuc3RvcnlTZXJ2aWNlLmdldFN0b3JpZXModXNlcklkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yaWVzID0gZGF0YTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdnZXRTdG9yaWVzJywgJ0xvYWRlZCAnICsgdGhpcy5zdG9yaWVzLmxlbmd0aCArICcgc3RvcmllcycsIHRoaXMuc3RvcmllcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFkZFN0b3J5KCl7XHJcbiAgICAgICAgdmFyIHN0b3J5OlN0b3J5ID0gPFN0b3J5PntcclxuICAgICAgICAgICAgdGl0bGU6J1VudGl0bGVkJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J0Rlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgbG9hZGVkOmZhbHNlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zdG9yeVNlcnZpY2Uuc2F2ZVN0b3J5KHRoaXMudXNlcklkLCBzdG9yeSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Rvcmllcy5wdXNoKDxTdG9yeT5kYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdhZGRTdG9yeScsICdDcmVhdGVkIGEgbmV3IHN0b3J5JywgdGhpcy5zdG9yaWVzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuU3RvcnkoaW5kZXgpe1xyXG4gICAgICAgIHRoaXMubG9hZFN0b3J5LmVtaXQodGhpcy5zdG9yaWVzW2luZGV4XSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU3RvcnkoaW5kZXgpe1xyXG4gICAgICAgIHRoaXMuc3RvcnlTZXJ2aWNlLmRlbGV0ZVN0b3J5KHRoaXMudXNlcklkLCB0aGlzLnN0b3JpZXNbaW5kZXhdKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdyZW1vdmVTdG9yeScsICdUaGUgc3RvcnkgaGFzIGJlZW4gcmVtb3ZlZCcsIGRhdGEpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVyciksXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Rvcmllcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtOZ0NsYXNzfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5pbXBvcnQge05vdGlmaWNhdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1NpZGViYXJDb21wb25lbnR9IGZyb20gXCIuL3NpZGViYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtXZWJTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3dlYnN0b3JhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge0F1dGhGb3JtQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoLWZvcm0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TG9nZ2VyU2VydmljZSwgREVCVUdfTEVWRUx9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge1N0b3J5Q29tcG9uZW50fSBmcm9tIFwiLi9zdG9yeS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTdG9yeUJsb2NrU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0b3J5YmxvY2tzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTdG9yeUxpc3RDb21wb25lbnR9IGZyb20gXCIuL3N0b3J5LWxpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U3Rvcnl9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzdG9yeS1ib2FyZCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxzdG9yeSBcclxuICAgICAgICAgICAgW2hpZGRlbl09XCIhc2hvd1N0b3J5XCJcclxuICAgICAgICAgICAgW3VzZXJJZF09XCJ1c2VySWRcIlxyXG4gICAgICAgICAgICAoZXhwb3NlU3RvcnlibG9jayk9XCJzZXRFeHBvc2VkKCRldmVudClcIlxyXG4gICAgICAgICAgICAobm90aWZ5KT1cIm5vdGlmeSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgKGxvYWRlZCk9XCJoYXNMb2FkZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChzdG9yeUJsb2NrTGlzdCk9XCJ1cGRhdGVTdG9yeUJsb2NrcygkZXZlbnQpXCJcclxuICAgICAgICAgICAgW3N0b3J5XT1cInN0b3J5XCJcclxuICAgICAgICA+PC9zdG9yeT5cclxuICAgICAgICA8c3RvcnktbGlzdFxyXG4gICAgICAgICAgICBbaGlkZGVuXT1cInNob3dTdG9yeVwiXHJcbiAgICAgICAgICAgIFt1c2VySWRdPVwidXNlcklkXCJcclxuICAgICAgICAgICAgKGxvYWRTdG9yeSk9XCJsb2FkU3RvcnkoJGV2ZW50KVwiXHJcbiAgICAgICAgPjwvc3RvcnktbGlzdD5cclxuICAgICAgICA8YXNpZGUgW25nQ2xhc3NdPVwie3Zpc2libGU6IG1lbnVWaXNpYmxlfVwiPlxyXG4gICAgICAgICAgICA8c2lkZWJhclxyXG4gICAgICAgICAgICAoc3RhcnREcmFnZ2luZyk9XCJ0b2dnbGVNZW51KGZhbHNlKVwiXHJcbiAgICAgICAgICAgIChlbmREcmFnZ2luZyk9XCJhZGRTdG9yeUJsb2NrKCRldmVudClcIlxyXG4gICAgICAgICAgICBbc3RvcnlCbG9ja109XCJleHBvc2VkU3RvcnlCbG9ja1wiIFtzdG9yeUJsb2Nrc0xlbmd0aF09XCJzdG9yeUJsb2Nrcy5sZW5ndGhcIj48L3NpZGViYXI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwidXNlci1hc2lkZVwiIChjbGljayk9XCJkb3dubG9hZFBkZigpXCI+RG93bmxvYWQgUERGPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cInVzZXItYXNpZGVcIiAqbmdJZj1cIiFpc0xvZ2dlZEluKClcIiAoY2xpY2spPVwic2hvd0FjY2Vzc0Zvcm0oKVwiPkxvZ2luL1NpZ251cDwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJ1c2VyLWFzaWRlXCIgKm5nSWY9XCJpc0xvZ2dlZEluKClcIiAoY2xpY2spPVwibG9nT3V0KClcIj5Mb2dvdXQ8L2E+XHJcbiAgICAgICAgICAgIDxhIGlkPVwiY2xvc2UtbWVudVwiIChjbGljayk9XCJ0b2dnbGVNZW51KGZhbHNlKVwiPjwvYT5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgIDxoZWFkZXI+PGEgaWQ9XCJidXJnZXJcIiAoY2xpY2spPVwidG9nZ2xlTWVudSh0cnVlKVwiPjxpIGNsYXNzPVwiZmEgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2E+PC9oZWFkZXI+XHJcbiAgICAgICAgPGF1dGgtZm9ybSBcclxuICAgICAgICAgICAgKm5nSWY9XCJhY2Nlc3NGb3JtVmlzaWJsZVwiIFxyXG4gICAgICAgICAgICAoY2xvc2VNb2RhbCk9XCJoaWRlQWNjZXNzRm9ybSgpXCJcclxuICAgICAgICAgICAgKG5vdGlmeSk9XCJub3RpZnkoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICA8L2F1dGgtZm9ybT5cclxuICAgICAgICA8bm90aWZpY2F0aW9uIFtuZ0NsYXNzXT1cIntlcnJvcjogbm90aWZpY2F0aW9uLnR5cGUgPT0gJ2Vycm9yJywgc3VjY2Vzczogbm90aWZpY2F0aW9uLnR5cGUgPT0gJ3N1Y2Nlc3MnfVwiPjwvbm90aWZpY2F0aW9uPlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczogW10sXHJcbiAgICBkaXJlY3RpdmVzOiBbU3RvcnlDb21wb25lbnQsIE5vdGlmaWNhdGlvbkNvbXBvbmVudCwgU2lkZWJhckNvbXBvbmVudCwgQXV0aEZvcm1Db21wb25lbnQsIE5nQ2xhc3MsIFN0b3J5TGlzdENvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9yeUJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBWaWV3Q2hpbGQoTm90aWZpY2F0aW9uQ29tcG9uZW50KSBub3RpZmljYXRpb25Db21wb25lbnQ6Tm90aWZpY2F0aW9uQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSB1c2VySWQ7XHJcbiAgICBwdWJsaWMgdG9rZW46c3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgbWVudVZpc2libGU7XHJcbiAgICBwdWJsaWMgYWNjZXNzRm9ybVZpc2libGU7XHJcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvbjtcclxuICAgIHByaXZhdGUgZXhwb3NlZFN0b3J5QmxvY2s7XHJcbiAgICBwcml2YXRlIHN0b3J5OlN0b3J5O1xyXG4gICAgcHJpdmF0ZSBzdG9yeUJsb2NrcyA9IFtdO1xyXG4gICAgQE91dHB1dCgpIGxvYWRlZDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIHByaXZhdGUgc2hvd1N0b3J5PWZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbG9nZ2VyOkxvZ2dlclNlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjpDb25maWd1cmF0aW9uLFxyXG4gICAgICAgIHByaXZhdGUgd2ViU3RvcmFnZVNlcnZpY2U6V2ViU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBzdG9yeUJsb2NrU2VydmljZTpTdG9yeUJsb2NrU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgIGF1dGhTZXJ2aWNlLmF1dGhTdGF0dXNDaGFuZ2UkLnN1YnNjcmliZShldmVudCA9PiB0aGlzLmF1dGhTdGF0dXNDaGFuZ2VkKGV2ZW50KSlcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOmFueSB7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSB0aGlzLmF1dGhVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5tZW51VmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWNjZXNzRm9ybVZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbiA9IHtcclxuICAgICAgICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFeHBvc2VkKGV2ZW50KXtcclxuICAgICAgICB0aGlzLmV4cG9zZWRTdG9yeUJsb2NrID0gZXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3RvcnlCbG9ja3MoZXZlbnQpe1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAndXBkYXRlU3RvcnlCbG9ja3MnLCAnU3RvcnlibG9ja3MgdXBkYXRlZDonLCAoZXZlbnQgfHwgW10pKTtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tzID0gZXZlbnQgfHwgW107XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFN0b3J5KHN0b3J5KXtcclxuICAgICAgICB0aGlzLnN0b3J5ID0gPFN0b3J5PnN0b3J5O1xyXG4gICAgICAgIHRoaXMuc2hvd1N0b3J5PXRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGF1dGhVc2VyKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmdldElkRnJvbVRva2VuKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGFub255bW91c1Rva2VuID0gdGhpcy53ZWJTdG9yYWdlU2VydmljZS5nZXQoJ2Fub255bW91c190b2tlbicpO1xyXG4gICAgICAgICAgICBpZiAoIWFub255bW91c1Rva2VuKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYW5vbnltb3VzVG9rZW4gPSB0aGlzLmF1dGhTZXJ2aWNlLmdlbmVyYXRlQW5vbnltb3VzVG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMud2ViU3RvcmFnZVNlcnZpY2UucHV0KCdhbm9ueW1vdXNfdG9rZW4nLCBhbm9ueW1vdXNUb2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0SWRGcm9tQW5vbnltb3VzVG9rZW4oYW5vbnltb3VzVG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRUb2tlbih2YWx1ZTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMud2ViU3RvcmFnZVNlcnZpY2UucHV0KCd0b2tlbicsdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRva2VuKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2ViU3RvcmFnZVNlcnZpY2UuZ2V0KCd0b2tlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGF1dGhTdGF0dXNDaGFuZ2VkKGV2ZW50KXtcclxuICAgICAgICB0aGlzLnVzZXJJZCA9IHRoaXMuYXV0aFVzZXIoKTtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ2F1dGhTdGF0dXNDaGFuZ2VkJywgeyBldmVudCA6IGV2ZW50fSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0FjY2Vzc0Zvcm0oKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVNZW51KGZhbHNlKTtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ3Nob3dBY2Nlc3NGb3JtJywgdGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCkpO1xyXG4gICAgICAgIHRoaXMuYWNjZXNzRm9ybVZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCduby1zY3JvbGwnKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlQWNjZXNzRm9ybSgpIHtcclxuICAgICAgICB0aGlzLmFjY2Vzc0Zvcm1WaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ091dCgpe1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNMb2dnZWRJbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaGFzTG9hZGVkKGV2ZW50KXtcclxuICAgICAgICB0aGlzLmxvYWRlZC5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBub3RpZnkobm90aWZpY2F0aW9uKXtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbiA9IHtcclxuICAgICAgICAgICAgdHlwZTogbm90aWZpY2F0aW9uLnR5cGUgfHwgbnVsbCxcclxuICAgICAgICAgICAgbWVzc2FnZTogbm90aWZpY2F0aW9uLm1lc3NhZ2UgfHwgJycsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbkNvbXBvbmVudC5zaG93KG5vdGlmaWNhdGlvbi5tZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBkb3dubG9hZFBkZigpe1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja1NlcnZpY2UuZG93bmxvYWRQZGYodGhpcy5zdG9yeUJsb2Nrcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTWVudSh2aXNpYmlsaXR5KXtcclxuICAgICAgICB0aGlzLm1lbnVWaXNpYmxlID0gdmlzaWJpbGl0eTtcclxuICAgICAgICBpZih2aXNpYmlsaXR5KXtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTmV3cyB7XHJcbiAgICBjcmVhdGVkQXQgOiBhbnk7XHJcbiAgICB0aXRsZSA6IHN0cmluZztcclxuICAgIGNvbnRlbnQgOiBzdHJpbmc7XHJcbn0iLCJpbXBvcnQge0luamVjdGFibGUgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHAgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmUnO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2UsIERFQlVHX0xFVkVMfSBmcm9tIFwiLi9sb2dnZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge05ld3N9IGZyb20gXCIuLi9tb2RlbHMvbmV3c1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmV3c1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6TG9nZ2VyU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBodHRwOkh0dHAsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbikge1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5ld3MoKTpPYnNlcnZhYmxlPE5ld3NbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvbmV3cy8nKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dnZXIuZXJyb3JDYXRjaGVyKCkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7REVCVUdfTEVWRUwsIExvZ2dlclNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzcGxhc2gtc2NyZWVuJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRlclwiPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWlsLXJpcHBsZS1jc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOiBbXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3BsYXNoU2NyZWVuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbG9nZ2VyOkxvZ2dlclNlcnZpY2VcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7U3RvcnlCb2FyZENvbXBvbmVudH0gZnJvbSBcIi4vc3RvcnktYm9hcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TmV3c1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9uZXdzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtERUJVR19MRVZFTCwgTG9nZ2VyU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3BsYXNoU2NyZWVuQ29tcG9uZW50fSBmcm9tIFwiLi9zcGxhc2gtc2NyZWVuLmNvbXBvbmVudFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtY29udGVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxzdG9yeS1ib2FyZFxyXG4gICAgICAgICAgICAobG9hZGVkKT1cInJlYWR5PXRydWVcIlxyXG4gICAgICAgICAgICBbaGlkZGVuXT1cIiFyZWFkeVwiXHJcbiAgICAgICAgPjwvc3RvcnktYm9hcmQ+XHJcbiAgICAgICAgPHNwbGFzaC1zY3JlZW4gW2hpZGRlbl09XCJyZWFkeVwiPjwvc3BsYXNoLXNjcmVlbj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtOZXdzU2VydmljZV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbU3RvcnlCb2FyZENvbXBvbmVudCwgU3BsYXNoU2NyZWVuQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcmVhZHk9ZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBuZXdzU2VydmljZTpOZXdzU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGxvZ2dlcjpMb2dnZXJTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOmFueSB7XHJcbiAgICAvLyAgICAgdGhpcy5uZXdzU2VydmljZS5nZXROZXdzKCkuc3Vic2NyaWJlKGRhdGE9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnZ2V0TmV3cycsIGRhdGEpO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgZXJyID0+IHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5FUlJPUiwgJ2dldE5ld3MnLCAnRXJyb3InLGVyciksXHJcbiAgICAvLyAgICAgICAgICgpID0+IHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnZ2V0TmV3cycsICdHZXQgbmV3cyBjb21wbGV0ZWQnKVxyXG4gICAgLy8gKVxyXG4gICAgfVxyXG59XHJcbiIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cclxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xyXG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9ICAgIGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7RXhjZXB0aW9uSGFuZGxlciwgcHJvdmlkZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtXZWJTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvd2Vic3RvcmFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1NlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL3N0b3J5YmxvY2tzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBcHBDb250ZW50Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2FwcC1jb250ZW50LmNvbXBvbmVudFwiO1xyXG5cclxuYm9vdHN0cmFwKFxyXG4gICAgQXBwQ29udGVudENvbXBvbmVudCxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIEhUVFBfUFJPVklERVJTLCBcclxuICAgICAgICAgICAgQ29uZmlndXJhdGlvbiwgXHJcbiAgICAgICAgICAgIHByb3ZpZGUoRXhjZXB0aW9uSGFuZGxlciwgIHt1c2VDbGFzczogTG9nZ2VyU2VydmljZX0pLCBcclxuICAgICAgICAgICAgQXV0aFNlcnZpY2UsIFxyXG4gICAgICAgICAgICBMb2dnZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICBXZWJTdG9yYWdlU2VydmljZSxcclxuICAgICAgICAgICAgU3RvcnlCbG9ja1NlcnZpY2VcclxuICAgICAgICBdXHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
