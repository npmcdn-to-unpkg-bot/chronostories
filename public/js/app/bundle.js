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
                StoryBlockService.prototype.getStoryBlocks = function (userId) {
                    return this.http.get(this.configuration.apiBasePath + '/story/' + userId)
                        .map(function (res) { return res.json(); })
                        .catch(this.logger.errorCatcher());
                };
                StoryBlockService.prototype.saveStoryBlock = function (userId, storyBlock) {
                    var headers = new http_2.Headers({
                        'Content-Type': 'application/x-www-form-urlencoded'
                    });
                    var options = new http_2.RequestOptions({
                        headers: headers
                    });
                    if (!!storyBlock._id) {
                        storyBlock.createdAt = storyBlock.createdAt || (new Date());
                        storyBlock.lastModifiedAt = (new Date());
                        return this.http.put(this.configuration.apiBasePath + '/story/' + userId + '/' + storyBlock._id, "data=" + JSON.stringify(storyBlock), options)
                            .map(function (res) { return res.json(); })
                            .catch(this.logger.errorCatcher());
                    }
                    else {
                        storyBlock.createdAt = (new Date());
                        storyBlock.lastModifiedAt = (new Date());
                        return this.http.post(this.configuration.apiBasePath + '/story/' + userId + '/', "data=" + JSON.stringify(storyBlock), options)
                            .map(function (res) { return res.json(); })
                            .catch(this.logger.errorCatcher());
                    }
                };
                StoryBlockService.prototype.deleteStoryBlock = function (userId, storyBlock) {
                    if (!!storyBlock._id) {
                        return this.http.delete(this.configuration.apiBasePath + '/story/' + userId + '/' + storyBlock._id)
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
                StoryBlockService.prototype.generateTestData = function (userId) {
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
                        blocks[i].createdAt = (new Date());
                        blocks[i].lastModifiedAt = (new Date());
                    }
                    return this.http.post(this.configuration.apiBasePath + '/story/' + userId + '/', "data=" + JSON.stringify(blocks), options)
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
                        template: "\n        <div class=\"form-wrapper\">\n            <div class=\"flexbox flex-row\">\n                <h1>Come in, storyteller</h1>\n                <div><a class=\"close\" (click)=\"close($event)\"><i class=\"fa fa-times\" aria-hidden=\"true\">X</i></a></div>\n            </div>\n            <form [ngFormModel]=\"form\" (ngSubmit)=\"onSignIn($event)\" novalidate>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your email\"\n                    [(ngModel)]=\"user.email\" \n                    [ngFormControl]=\"form.controls['email']\"\n                    #email=\"ngForm\"\n                    >\n                <label for=\"email\">Email</label>\n                <div  *ngIf=\"(email.dirty || submitted) && !email.valid\" class=\"panel panel-error\">\n                    Email is invalid\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Your password\"\n                    [(ngModel)]=\"user.password\" \n                    [ngFormControl]=\"form.controls['password']\"\n                    #password=\"ngForm\"\n                    >\n                <label for=\"password\">Password</label>\n                <div  *ngIf=\"(password.dirty || submitted) && !password.valid\" class=\"panel panel-error\">\n                    The password should be at least 6 characters long\n                </div>\n              </div>\n              <button type=\"submit\" class=\"button primary block-button\">Sign in</button>\n              <div class=\"swap-form\"><a (click)=\"swapToSignUp()\">I want to create a new account</a></div>\n            </form>\n        </div>\n    ",
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
                        template: "\n        <div class=\"form-wrapper\">\n            <div class=\"flexbox flex-row\">\n                <h1>Become a storyteller</h1>\n                <div><a class=\"close\" (click)=\"close($event)\"><i class=\"fa fa-times\" aria-hidden=\"true\">X</i></a></div>\n            </div>\n            <form [ngFormModel]=\"form\" (ngSubmit)=\"onSignUp($event)\" novalidate>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your name\"\n                    [(ngModel)]=\"user.name\"\n                    [ngFormControl]=\"form.controls['name']\"\n                    #name=\"ngForm\"\n                    >\n                <label for=\"name\">Name</label>\n                <div  *ngIf=\"(name.dirty || submitted) && !name.valid\" class=\"panel panel-error\">\n                    Your name is required\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your email\"\n                    [(ngModel)]=\"user.email\" \n                    [ngFormControl]=\"form.controls['email']\"\n                    #email=\"ngForm\"\n                    >\n                <label for=\"email\">Email</label>\n                <div  *ngIf=\"(email.dirty || submitted) && !email.valid\" class=\"panel panel-error\">\n                    Email is invalid\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Your password\"\n                    [(ngModel)]=\"user.password\" \n                    [ngFormControl]=\"form.controls['password']\"\n                    #password=\"ngForm\"\n                    >\n                <label for=\"password\">Password</label>\n                <div  *ngIf=\"(password.dirty || submitted) && !password.valid\" class=\"panel panel-error\">\n                    The password should be at least 6 characters long\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm password\"\n                    [(ngModel)]=\"user.confirmPassword\" \n                    [ngFormControl]=\"form.controls['confirmPassword']\"\n                    #confirmPassword=\"ngForm\"\n                    >\n                <label for=\"confirm-password\">Password</label>\n                <div *ngIf=\"(confirmPassword.dirty || submitted) && form.hasError('mismatchedPasswords')\" class=\"panel panel-error\">\n                    The passwords don't match\n                </div>\n              </div>\n              <button type=\"submit\" class=\"button primary block-button\">Sign up</button>\n              <div class=\"swap-form\"><a (click)=\"swapToSignIn()\">I already have an account</a></div>\n            </form>\n        </div>\n    ",
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
System.register("components/storyblock.component", ["angular2/core", "services/utils.service", "angular2/src/animate/animation_builder", "services/storyblocks.service", "config/configuration", "services/logger.service", "directives/collapse.directive", "directives/disappear.directive"], function(exports_23, context_23) {
    "use strict";
    var __moduleName = context_23 && context_23.id;
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
                }
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
                StoryBlockComponent.prototype.ngOnInit = function () {
                    this.changePositionOnZoom(1000);
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
                    this.storyBlockService.deleteStoryBlock(this.userId, this.storyBlockInfo).subscribe(function (data) {
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
                    });
                };
                StoryBlockComponent.prototype.save = function (index, event) {
                    var _this = this;
                    this.logger.log(logger_service_8.DEBUG_LEVEL.INFO, 'save', 'I am about to save', this.storyBlockInfo);
                    if (!(this.storyBlockInfo.title == '' && this.storyBlockInfo.description == '')) {
                        this.storyBlockService.saveStoryBlock(this.userId, this.storyBlockInfo).subscribe(function (data) {
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
                        inputs: ['storyBlockInfo', 'index', 'userId']
                    }), 
                    __metadata('design:paramtypes', [logger_service_8.LoggerService, animation_builder_3.AnimationBuilder, core_16.ElementRef, utils_service_2.UtilsService, storyblocks_service_2.StoryBlockService, configuration_6.Configuration])
                ], StoryBlockComponent);
                return StoryBlockComponent;
            }());
            exports_23("StoryBlockComponent", StoryBlockComponent);
        }
    }
});
System.register("components/timeline.component", ["angular2/core"], function(exports_24, context_24) {
    "use strict";
    var __moduleName = context_24 && context_24.id;
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
            exports_24("TimelineComponent", TimelineComponent);
        }
    }
});
System.register("components/add-button.component", ["angular2/core"], function(exports_25, context_25) {
    "use strict";
    var __moduleName = context_25 && context_25.id;
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
            exports_25("AddButtonComponent", AddButtonComponent);
        }
    }
});
System.register("components/story.component", ['angular2/core', 'angular2/common', "services/storyblocks.service", "components/storyblock.component", "components/timeline.component", "components/add-button.component", "config/configuration", "services/auth.service", "services/webstorage.service", "services/logger.service"], function(exports_26, context_26) {
    "use strict";
    var __moduleName = context_26 && context_26.id;
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
                    this.notify = new core_19.EventEmitter();
                    this.exposeStoryBlock = new core_19.EventEmitter();
                    this.storyBlockList = new core_19.EventEmitter();
                    authService.authStatusChange$.subscribe(function (event) { return _this.authStatusChanged(event); });
                    storyBlockService.addRequest$.subscribe(function (event) { return _this.addStoryBlock(event); });
                }
                StoryComponent.prototype.ngOnInit = function () {
                    this.storyBlocks = [];
                    this.getStoryBlockTypes();
                    this.getStoryBlocks(this.userId);
                    this.zoomLevel = 4;
                    this.exposedIndex = -1;
                    this.exposedStoryBlock = null;
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
                StoryComponent.prototype.getStoryBlockTypes = function () {
                    this.storyBlockTypes = this.storyBlockService.getStoryBlockTypes();
                    this.storyBlockDefaultTypes = this.storyBlockService.getStoryBlockDefaultTypes();
                };
                StoryComponent.prototype.getStoryBlocks = function (id) {
                    var _this = this;
                    this.storyBlockService.getStoryBlocks(id).subscribe(function (data) {
                        _this.storyBlocks = data;
                        _this.maxIndex = 0;
                        for (var i = 0; i < _this.storyBlocks.length; i++) {
                            if (_this.storyBlocks[i].type === 'chapter') {
                                _this.maxIndex = Math.max(_this.maxIndex, _this.storyBlocks[i].blockId || 0);
                            }
                        }
                        if (!_this.storyBlocks || _this.storyBlocks.length == 0) {
                            _this.logger.log(logger_service_9.DEBUG_LEVEL.INFO, 'getStoryBlocks', 'No blocks received!');
                            _this.storyBlockService.generateTestData(_this.userId).subscribe(function (saveDefaultBlocks) {
                                _this.storyBlocks = saveDefaultBlocks;
                                _this.recalculateStoryBlockNumbers();
                                _this.storyBlockList.emit(_this.storyBlocks);
                            }, function (err) { return console.error(err); }, function () { return _this.logger.log(logger_service_9.DEBUG_LEVEL.INFO, 'getStoryBlocks', 'Loaded ' + _this.storyBlocks.length + ' default blocks', _this.storyBlocks); });
                        }
                        else {
                            _this.storyBlockList.emit(_this.storyBlocks);
                            _this.recalculateStoryBlockNumbers();
                        }
                    }, function (err) { return console.error(err); }, function () {
                        _this.logger.log(logger_service_9.DEBUG_LEVEL.INFO, 'getStoryBlocks', 'Loaded ' + _this.storyBlocks.length + ' blocks', _this.storyBlocks);
                    });
                };
                StoryComponent.prototype.removeStoryBlock = function (index) {
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
                        this.storyBlockService.saveStoryBlock(this.userId, this.storyBlocks[i]).subscribe();
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
                StoryComponent = __decorate([
                    core_19.Component({
                        selector: 'story',
                        template: "\n            <main>\n                <timeline class=\"timeline-block\"></timeline>\n                <div class=\"story-blocks\">\n                    <storyblock *ngFor=\"#storyBlock of storyBlocks; #i = index\" \n                        [index]=\"i\" \n                        [storyBlockInfo]=\"storyBlock\" \n                        [zoomLevel]=\"zoomLevel\"\n                        [userId]=\"userId\"\n                        [exposedIndex]=\"exposedIndex\"\n                        [ngClass]=\"{exposed: exposedIndex == i}\"\n                        (removeStoryBlockEvent)=\"removeStoryBlock($event)\" \n                        (exposeEvent)=\"setExposed($event)\"\n                        (notify)=\"notifyMsg($event)\"\n                        class=\"story-block {{ storyBlock.type\u00A0}}\"></storyblock>\n                </div>\n                <div class=\"timeline\"\n                    (click)=\"addStoryBlock($event)\"\n                    (mouseenter)=\"onMouseEnter($event)\"\n                    (mouseleave)=\"onMouseLeave($event)\"\n                    (mousemove)=\"onMouseMove($event)\">\n                    <add-button *ngIf=\"addButton.visible\"\n                        [offsetY]=\"addButton.top\"\n                        (click)=\"addStoryBlock($event)\"></add-button>\n                </div>\n                <div id=\"controls\">\n                    <div id=\"zoom-controls\">              \n                        <a title=\"Zoom in\" (click)=\"zoomIn()\">+</a>  \n                        <a title=\"Zoom out\" (click)=\"zoomOut()\">&ndash;</a>                \n                    </div>            \n                </div>\n            </main>\n    ",
                        providers: [],
                        directives: [storyblock_component_1.StoryBlockComponent, timeline_component_1.TimelineComponent, add_button_component_1.AddButtonComponent, common_4.NgClass],
                        inputs: ['userId']
                    }), 
                    __metadata('design:paramtypes', [logger_service_9.LoggerService, storyblocks_service_3.StoryBlockService, configuration_7.Configuration, webstorage_service_4.WebStorageService, auth_service_3.AuthService])
                ], StoryComponent);
                return StoryComponent;
            }());
            exports_26("StoryComponent", StoryComponent);
        }
    }
});
System.register("components/story-board.component", ['angular2/core', 'angular2/common', "components/notification.component", "components/sidebar.component", "config/configuration", "services/auth.service", "services/webstorage.service", "components/auth-form.component", "services/logger.service", "components/story.component", "services/storyblocks.service"], function(exports_27, context_27) {
    "use strict";
    var __moduleName = context_27 && context_27.id;
    var core_20, common_5, notification_component_1, sidebar_component_1, configuration_8, auth_service_4, webstorage_service_5, auth_form_component_1, logger_service_10, story_component_1, storyblocks_service_4;
    var StoryBoardComponent;
    return {
        setters:[
            function (core_20_1) {
                core_20 = core_20_1;
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
            function (configuration_8_1) {
                configuration_8 = configuration_8_1;
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
            function (logger_service_10_1) {
                logger_service_10 = logger_service_10_1;
            },
            function (story_component_1_1) {
                story_component_1 = story_component_1_1;
            },
            function (storyblocks_service_4_1) {
                storyblocks_service_4 = storyblocks_service_4_1;
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
                    this.logger.log(logger_service_10.DEBUG_LEVEL.INFO, 'updateStoryBlocks', 'Storyblocks updated:', (event || []));
                    this.storyBlocks = event || [];
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
                    this.logger.log(logger_service_10.DEBUG_LEVEL.INFO, 'authStatusChanged', { event: event });
                };
                StoryBoardComponent.prototype.showAccessForm = function () {
                    this.toggleMenu(false);
                    this.logger.log(logger_service_10.DEBUG_LEVEL.INFO, 'showAccessForm', this.authService.isLoggedIn());
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
                    core_20.ViewChild(notification_component_1.NotificationComponent), 
                    __metadata('design:type', notification_component_1.NotificationComponent)
                ], StoryBoardComponent.prototype, "notificationComponent", void 0);
                StoryBoardComponent = __decorate([
                    core_20.Component({
                        selector: 'story-board',
                        template: "\n        <story \n            [userId]=\"userId\"\n            (exposeStoryblock)=\"setExposed($event)\"\n            (notify)=\"notify($event)\"\n            (storyBlockList)=\"updateStoryBlocks($event)\"\n        ></story>\n        <aside [ngClass]=\"{visible: menuVisible}\">\n            <sidebar\n            (startDragging)=\"toggleMenu(false)\"\n            (endDragging)=\"addStoryBlock($event)\"\n            [storyBlock]=\"exposedStoryBlock\" [storyBlocksLength]=\"storyBlocks.length\"></sidebar>\n            <a class=\"user-aside\" (click)=\"downloadPdf()\">Download PDF</a>\n            <a class=\"user-aside\" *ngIf=\"!isLoggedIn()\" (click)=\"showAccessForm()\">Login/Signup</a>\n            <a class=\"user-aside\" *ngIf=\"isLoggedIn()\" (click)=\"logOut()\">Logout</a>\n            <a id=\"close-menu\" (click)=\"toggleMenu(false)\"></a>\n        </aside>\n        <header><a id=\"burger\" (click)=\"toggleMenu(true)\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a></header>\n        <auth-form \n            *ngIf=\"accessFormVisible\" \n            (closeModal)=\"hideAccessForm()\"\n            (notify)=\"notify($event)\"\n            >\n        </auth-form>\n        <notification [ngClass]=\"{error: notification.type == 'error', success: notification.type == 'success'}\"></notification>\n    ",
                        providers: [],
                        directives: [story_component_1.StoryComponent, notification_component_1.NotificationComponent, sidebar_component_1.SidebarComponent, auth_form_component_1.AuthFormComponent, common_5.NgClass]
                    }), 
                    __metadata('design:paramtypes', [logger_service_10.LoggerService, configuration_8.Configuration, webstorage_service_5.WebStorageService, storyblocks_service_4.StoryBlockService, auth_service_4.AuthService])
                ], StoryBoardComponent);
                return StoryBoardComponent;
            }());
            exports_27("StoryBoardComponent", StoryBoardComponent);
        }
    }
});
System.register("models/news", [], function(exports_28, context_28) {
    "use strict";
    var __moduleName = context_28 && context_28.id;
    var News;
    return {
        setters:[],
        execute: function() {
            News = (function () {
                function News() {
                }
                return News;
            }());
            exports_28("News", News);
        }
    }
});
System.register("services/news.service", ["angular2/core", 'angular2/http', 'rxjs/Rx', 'rxjs/add/operator/share', "config/configuration", "services/logger.service"], function(exports_29, context_29) {
    "use strict";
    var __moduleName = context_29 && context_29.id;
    var core_21, http_3, configuration_9, logger_service_11;
    var NewsService;
    return {
        setters:[
            function (core_21_1) {
                core_21 = core_21_1;
            },
            function (http_3_1) {
                http_3 = http_3_1;
            },
            function (_3) {},
            function (_4) {},
            function (configuration_9_1) {
                configuration_9 = configuration_9_1;
            },
            function (logger_service_11_1) {
                logger_service_11 = logger_service_11_1;
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
                    core_21.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_11.LoggerService, http_3.Http, configuration_9.Configuration])
                ], NewsService);
                return NewsService;
            }());
            exports_29("NewsService", NewsService);
        }
    }
});
System.register("components/app-content.component", ['angular2/core', "components/story-board.component", "services/news.service"], function(exports_30, context_30) {
    "use strict";
    var __moduleName = context_30 && context_30.id;
    var core_22, story_board_component_1, news_service_1;
    var AppContentComponent;
    return {
        setters:[
            function (core_22_1) {
                core_22 = core_22_1;
            },
            function (story_board_component_1_1) {
                story_board_component_1 = story_board_component_1_1;
            },
            function (news_service_1_1) {
                news_service_1 = news_service_1_1;
            }],
        execute: function() {
            AppContentComponent = (function () {
                function AppContentComponent(newsService) {
                    this.newsService = newsService;
                }
                AppContentComponent.prototype.ngOnInit = function () {
                    this.newsService.getNews().subscribe(function (data) { console.log(data); });
                };
                AppContentComponent = __decorate([
                    core_22.Component({
                        selector: 'app-content',
                        template: "\n        <story-board></story-board>\n    ",
                        providers: [news_service_1.NewsService],
                        directives: [story_board_component_1.StoryBoardComponent]
                    }), 
                    __metadata('design:paramtypes', [news_service_1.NewsService])
                ], AppContentComponent);
                return AppContentComponent;
            }());
            exports_30("AppContentComponent", AppContentComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', 'angular2/http', "config/configuration", "angular2/core", "services/logger.service", "services/auth.service", "services/webstorage.service", "services/storyblocks.service", "components/app-content.component"], function(exports_31, context_31) {
    "use strict";
    var __moduleName = context_31 && context_31.id;
    var browser_1, http_4, configuration_10, core_23, logger_service_12, auth_service_5, webstorage_service_6, storyblocks_service_5, app_content_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_4_1) {
                http_4 = http_4_1;
            },
            function (configuration_10_1) {
                configuration_10 = configuration_10_1;
            },
            function (core_23_1) {
                core_23 = core_23_1;
            },
            function (logger_service_12_1) {
                logger_service_12 = logger_service_12_1;
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
                http_4.HTTP_PROVIDERS,
                configuration_10.Configuration,
                core_23.provide(core_23.ExceptionHandler, { useClass: logger_service_12.LoggerService }),
                auth_service_5.AuthService,
                logger_service_12.LoggerService,
                webstorage_service_6.WebStorageService,
                storyblocks_service_5.StoryBlockService
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlLnRzIiwiY29uZmlnL2NvbmZpZ3VyYXRpb24udHMiLCJtb2RlbHMvdXNlci50cyIsInNlcnZpY2VzL3dlYnN0b3JhZ2Uuc2VydmljZS50cyIsInNlcnZpY2VzL2F1dGguc2VydmljZS50cyIsIm1vY2svbW9jay1zdG9yeWJsb2Nrcy50cyIsIm1vY2svbW9jay1zdG9yeWJsb2NrLXR5cGVzLnRzIiwic2VydmljZXMvc3RvcnlibG9ja3Muc2VydmljZS50cyIsImNvbXBvbmVudHMvbm90aWZpY2F0aW9uLmNvbXBvbmVudC50cyIsInNlcnZpY2VzL3V0aWxzLnNlcnZpY2UudHMiLCJzZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UudHMiLCJjb21wb25lbnRzL2xvZy1tZXNzYWdlLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvZGVidWctY29uc29sZS5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3NpZGViYXIuY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9zaWduaW4tZm9ybS5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3NpZ251cC1mb3JtLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvYXV0aC1mb3JtLmNvbXBvbmVudC50cyIsImRpcmVjdGl2ZXMvY29sbGFwc2UuZGlyZWN0aXZlLnRzIiwiZGlyZWN0aXZlcy9kaXNhcHBlYXIuZGlyZWN0aXZlLnRzIiwiY29tcG9uZW50cy9zdG9yeWJsb2NrLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvdGltZWxpbmUuY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9hZGQtYnV0dG9uLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvc3RvcnkuY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9zdG9yeS1ib2FyZC5jb21wb25lbnQudHMiLCJtb2RlbHMvbmV3cy50cyIsInNlcnZpY2VzL25ld3Muc2VydmljZS50cyIsImNvbXBvbmVudHMvYXBwLWNvbnRlbnQuY29tcG9uZW50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LENBQ1IsQ0FBQyIsImZpbGUiOiIuLi8uLi8uLi9DaHJvbm9zdG9yaWVzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgZm9yd2FyZFJlZiwgSW5qZWN0LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge09ic2VydmVyfSBmcm9tIFwicnhqcy9PYnNlcnZlclwiO1xyXG5cclxuZGVjbGFyZSB2YXIgbW9tZW50OmFueTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvZ2dlclNlcnZpY2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z0xldmVsO1xyXG4gICAgcHJpdmF0ZSBsb2dTdHJlYW0kOk9ic2VydmVyPE9iamVjdD47XHJcbiAgICBwdWJsaWMgbG9nJDpPYnNlcnZhYmxlPE9iamVjdD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IENvbmZpZ3VyYXRpb24pKSBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMuc2V0RGVidWdMZXZlbChjb25maWd1cmF0aW9uLmRlYnVnTGV2ZWwgfHwgREVCVUdfTEVWRUwuRVJST1IpO1xyXG5cclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIHdpbmRvdy5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yTXNnLCB1cmwsIGxpbmVOdW1iZXIsIGNvbHVtbiwgZXJyb3JPYmopIHtcclxuICAgICAgICAgICAgdGhhdC5sb2coREVCVUdfTEVWRUwuRVJST1IsICdvbmVycm9yJywgZXJyb3JNc2csIHVybCwgbGluZU51bWJlciwgY29sdW1uLCBlcnJvck9iaik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTphbnkge1xyXG4gICAgfVxyXG5cclxuICAgIHNldERlYnVnTGV2ZWwoZGVidWdMZXZlbCkge1xyXG4gICAgICAgIHRoaXMuZGVidWdMZXZlbCA9IGRlYnVnTGV2ZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZyhsZXZlbCwgZnVuY3Rpb25OYW1lLCB0ZXh0LCAuLi5hcmdzOmFueVtdKSB7XHJcbiAgICAgICAgaWYgKCFsZXZlbCB8fCAobGV2ZWwudmFsdWUgPT09IHVuZGVmaW5lZCkgfHwgIWxldmVsLm5hbWUpIHtcclxuICAgICAgICAgICAgbGV2ZWwgPSBERUJVR19MRVZFTC5JTkZPO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV2ZWwudmFsdWUgPj0gdGhpcy5kZWJ1Z0xldmVsLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlOmFueSA9ICdbJyArIG1vbWVudCgpLmZvcm1hdChcIkREL01NL1lZIC0gSEg6bW06c3MuU1NTXCIpICsgJ11bJyArIGxldmVsLm5hbWUgKyAnXVsnICsgZnVuY3Rpb25OYW1lICsgJ10gJyArICh0ZXh0IHx8ICcnKTtcclxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuY2FsbChhcmdzLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgaWYgKGxldmVsLnZhbHVlID09PSBERUJVR19MRVZFTC5FUlJPUi52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1Zy5hcHBseShjb25zb2xlLCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChsZXZlbC52YWx1ZSA9PT0gREVCVUdfTEVWRUwuV0FSTi52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCEhdGhpcy5sb2ckICYmIHRoaXMubG9nU3RyZWFtJCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxvZ01lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogbW9tZW50KCkuZm9ybWF0KFwiREQvTU0vWVkgLSBISDptbTpzcy5TU1NcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IGxldmVsLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBmdW5jdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBhcmdzLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXR0eTonJ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxvZ01lc3NhZ2UucHJldHR5ID0gSlNPTi5zdHJpbmdpZnkobG9nTWVzc2FnZSwgbnVsbCwgMik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dTdHJlYW0kLm5leHQobG9nTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9nU3RyZWFtKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5sb2ckKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nJCA9IG5ldyBPYnNlcnZhYmxlPE9iamVjdD4ob2JzZXJ2ZXIgPT4gdGhpcy5sb2dTdHJlYW0kID0gb2JzZXJ2ZXIpLnNoYXJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvZyQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbChleGNlcHRpb246YW55LCBzdGFja1RyYWNlPzphbnksIHJlYXNvbj86c3RyaW5nKTp2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZyhERUJVR19MRVZFTC5FUlJPUiwgJ2FuZ3VsYXInLCAnJywgZXhjZXB0aW9uLCByZWFzb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGVycm9yQ2F0Y2hlcigpIHtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlcnI6YW55LCBzb3VyY2U6T2JzZXJ2YWJsZTxhbnk+LCBjYXVnaHQ6T2JzZXJ2YWJsZTxhbnk+KTpPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgICAgICB0aGF0LmxvZyhERUJVR19MRVZFTC5FUlJPUiwgJ2Vycm9yQ2F0Y2hlcicsIGVyci5tZXNzYWdlLCBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERFQlVHX0xFVkVMID0ge1xyXG4gICAgVkVSQk9TRToge1xyXG4gICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgIG5hbWU6ICdMb2cnXHJcbiAgICB9LFxyXG4gICAgSU5GTzoge1xyXG4gICAgICAgIHZhbHVlOiAxLFxyXG4gICAgICAgIG5hbWU6ICdJbmZvJ1xyXG4gICAgfSxcclxuICAgIFdBUk46IHtcclxuICAgICAgICB2YWx1ZTogMixcclxuICAgICAgICBuYW1lOiAnV2FybidcclxuICAgIH0sXHJcbiAgICBFUlJPUjoge1xyXG4gICAgICAgIHZhbHVlOiAzLFxyXG4gICAgICAgIG5hbWU6ICdFcnJvcidcclxuICAgIH0sXHJcbiAgICBOT05FOiB7XHJcbiAgICAgICAgdmFsdWU6IDQsXHJcbiAgICAgICAgbmFtZTogJydcclxuICAgIH1cclxufTsiLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7REVCVUdfTEVWRUx9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XHJcbiAgICBwdWJsaWMgem9vbSA9IHtcclxuICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgc3RlcDogMTUwLFxyXG4gICAgICAgIHN0cmVuZ3RoOiAwLjZcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIHRva2VuID0ge1xyXG4gICAgICAgIG5hbWU6ICd0b2tlbicsXHJcbiAgICAgICAgZXhwaXJhdGlvbjogKDMwICogMjQgKiA2MCAqIDYwICogMTAwMClcclxuICAgIH07XHJcblxyXG4gICAgLy8gcHVibGljIGFwaUJhc2VQYXRoID0gJ2h0dHBzOi8vYWEyMDE2LWNocm9ub3N0b3JpZXMuaGVyb2t1YXBwLmNvbSc7XHJcbiAgICBwdWJsaWMgYXBpQmFzZVBhdGggPSAnL2FwaSc7XHJcbiAgICBcclxuICAgIHB1YmxpYyBkZWJ1Z0xldmVsID0gREVCVUdfTEVWRUwuSU5GTztcclxufSIsImV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICAgIG5hbWUgOiBzdHJpbmc7XHJcbiAgICBlbWFpbCA6IHN0cmluZztcclxuICAgIHBhc3N3b3JkIDogc3RyaW5nO1xyXG59IiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2ViU3RvcmFnZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzdG9yYWdlU3VwcG9ydGVkID0gKHR5cGVvZihTdG9yYWdlKSAhPT0gXCJ1bmRlZmluZWRcIik7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0KGtleSwgdmFsdWUpOnZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2VTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgaWYgKCEhdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHV0SW5Mb2NhbFN0b3JhZ2Uoa2V5LCB2YWx1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoISF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXRJbkNvb2tpZXMoa2V5LCB2YWx1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUNvb2tpZXMoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQoa2V5KTphbnkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2VTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RnJvbUxvY2FsU3RvcmFnZShrZXkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGcm9tQ29va2llKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShrZXkpOnZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2VTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tTG9jYWxTdG9yYWdlKGtleSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUNvb2tpZXMoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwdXRJbkxvY2FsU3RvcmFnZShrZXksIHZhbHVlKTp2b2lkIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGVuY29kZVVSSSh2YWx1ZSkgfHwgXCJcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RnJvbUxvY2FsU3RvcmFnZShrZXkpOmFueSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlVVJJKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpIHx8IFwie31cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVGcm9tTG9jYWxTdG9yYWdlKGtleSk6dm9pZCB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHB1dEluQ29va2llcyhrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGQuc2V0VGltZShkLmdldFRpbWUoKSArICgzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcclxuICAgICAgICB2YXIgZXhwaXJlcyA9IGQudG9VVENTdHJpbmcoKTtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgKz0ga2V5ICsgJz0nICsgSlNPTi5zdHJpbmdpZnkoZW5jb2RlVVJJKHZhbHVlKSB8fCBcIlwiKSArIFwiO3BhdGg9LztleHBpcmVzPVwiICsgZXhwaXJlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEZyb21Db29raWUoa2V5KTphbnkge1xyXG4gICAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJyg/Ol58OylcXFxccz8nICsga2V5ICsgJz0oLio/KSg/Ojt8JCknLCAnaScpO1xyXG4gICAgICAgIHZhciBtdGMgPSBkb2N1bWVudC5jb29raWUubWF0Y2gocmVnZXgpIHx8IFtdO1xyXG4gICAgICAgIGlmIChtdGMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUkkobXRjWzFdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVGcm9tQ29va2llcyhrZXkpOnZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGtleSArIFwiPTtwYXRoPS87ZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVFwiO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJbmplY3RhYmxlLCBmb3J3YXJkUmVmLCBJbmplY3QsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHtKd3RUb2tlbn0gZnJvbSBcIi4uL21vZGVscy9qd3RUb2tlblwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXJcIjtcclxuaW1wb3J0IHtXZWJTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4vd2Vic3RvcmFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7TG9nZ2VyU2VydmljZSwgREVCVUdfTEVWRUx9IGZyb20gXCIuL2xvZ2dlci5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBhdXRoU3RhdHVzQ2hhbmdlJDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gTG9nZ2VyU2VydmljZSkpIHByaXZhdGUgbG9nZ2VyOkxvZ2dlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gSHR0cCkpIHB1YmxpYyBodHRwOkh0dHAsXHJcbiAgICAgICAgICAgICAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gV2ViU3RvcmFnZVNlcnZpY2UpKSBwcml2YXRlIHdlYlN0b3JhZ2VTZXJ2aWNlOldlYlN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IENvbmZpZ3VyYXRpb24pKSBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbikge1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpOmJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMud2ViU3RvcmFnZVNlcnZpY2UucmVtb3ZlKHRoaXMuY29uZmlndXJhdGlvbi50b2tlbi5uYW1lKTtcclxuICAgICAgICB0aGlzLmF1dGhTdGF0dXNDaGFuZ2UkLmVtaXQoJ0xvZ291dCcpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKHVzZXI6VXNlcik6T2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ2xvZ2luJywgJ0NyZWF0aW5nIHRlbXBvcmFyeSBkYXRhJyk7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvYXV0aC9sb2dpbicsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWU9XCIgKyB1c2VyLm5hbWUgKyBcIiZcIiArXHJcbiAgICAgICAgICAgICAgICBcImVtYWlsPVwiICsgdXNlci5lbWFpbCArIFwiJlwiICtcclxuICAgICAgICAgICAgICAgIFwicGFzc3dvcmQ9XCIgKyB1c2VyLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiBcclxuICAgICAgICAgICAgICAgIHJlcy50ZXh0KClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dnZXIuZXJyb3JDYXRjaGVyKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKHVzZXI6VXNlcik6T2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ3JlZ2lzdGVyJywgJ0NyZWF0aW5nIHRlbXBvcmFyeSBkYXRhJyk7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5jb25maWd1cmF0aW9uLmFwaUJhc2VQYXRoICsgJy9hdXRoL3JlZ2lzdGVyJyxcclxuICAgICAgICAgICAgICAgIFwiZW1haWw9XCIgKyB1c2VyLmVtYWlsICsgXCImXCIgK1xyXG4gICAgICAgICAgICAgICAgXCJwYXNzd29yZD1cIiArIHVzZXIucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IFxyXG4gICAgICAgICAgICAgICAgcmVzLnRleHQoKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvckNhdGNoZXIoKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlzTG9nZ2VkSW4oKTpib29sZWFuIHtcclxuICAgICAgICB2YXIgdG9rZW5EYXRhU3BsaXQgPSAodGhpcy53ZWJTdG9yYWdlU2VydmljZS5nZXQodGhpcy5jb25maWd1cmF0aW9uLnRva2VuLm5hbWUpIHx8ICcnKS5zcGxpdCgnLicpWzFdO1xyXG4gICAgICAgIGlmICghdG9rZW5EYXRhU3BsaXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdG9rZW5EYXRhUmF3ID0gYXRvYih0b2tlbkRhdGFTcGxpdCk7XHJcblxyXG4gICAgICAgIHZhciB0b2tlbkRhdGEgPSBKU09OLnBhcnNlKHRva2VuRGF0YVJhdykgYXMgSnd0VG9rZW47XHJcbiAgICAgICAgcmV0dXJuICh0b2tlbkRhdGEuZXhwIHx8IDApID4gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBnZXRJZEZyb21Ub2tlbigpIHtcclxuICAgICAgICB2YXIgdG9rZW5EYXRhU3BsaXQgPSAodGhpcy53ZWJTdG9yYWdlU2VydmljZS5nZXQodGhpcy5jb25maWd1cmF0aW9uLnRva2VuLm5hbWUpIHx8ICcnKS5zcGxpdCgnLicpWzFdO1xyXG4gICAgICAgIGlmICghdG9rZW5EYXRhU3BsaXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdG9rZW5EYXRhUmF3ID0gYXRvYih0b2tlbkRhdGFTcGxpdCk7XHJcblxyXG4gICAgICAgIHZhciB0b2tlbkRhdGEgPSBKU09OLnBhcnNlKHRva2VuRGF0YVJhdykgYXMgSnd0VG9rZW47XHJcblxyXG4gICAgICAgIHJldHVybiB0b2tlbkRhdGEuX2lkXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWRGcm9tQW5vbnltb3VzVG9rZW4odG9rZW5EYXRhU3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHRva2VuRGF0YVJhdyA9IGF0b2IodG9rZW5EYXRhU3RyaW5nKTtcclxuXHJcbiAgICAgICAgdmFyIHRva2VuRGF0YSA9IEpTT04ucGFyc2UodG9rZW5EYXRhUmF3KSBhcyBKd3RUb2tlbjtcclxuICAgICAgICByZXR1cm4gdG9rZW5EYXRhLl9pZFxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlQW5vbnltb3VzVG9rZW4oKTphbnkge1xyXG4gICAgICAgIHZhciBhbm9ueW1vdXNUb2tlbiA9IHtcclxuICAgICAgICAgICAgX2lkOiB0aGlzLmdlbmVyYXRlVW5pcXVlSWQoKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBidG9hKEpTT04uc3RyaW5naWZ5KGFub255bW91c1Rva2VuKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZVVuaXF1ZUlkKCkge1xyXG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMCwgdiA9IGMgPT09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn0iLCJpbXBvcnQge1N0b3J5QmxvY2t9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9ja1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNUT1JZQkxPQ0tTOlN0b3J5QmxvY2tbXSA9IDxTdG9yeUJsb2NrW10+W1xyXG4gICAge1xyXG4gICAgICAgIGJsb2NrSWQ6IDEsXHJcbiAgICAgICAgdGl0bGU6ICdQcmVmYWNlJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1lvdSBuZWVkIHRvIHN0YXJ0IHNvbWV3aGVyZScsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOjEsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogLTEsXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6MCxcclxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBibG9ja0lkOiAyLFxyXG4gICAgICAgIHRpdGxlOiAnSW50cm9kdWN0aW9uJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1doZXJlIHlvdXIgY2hhcmFjdGVycyBiZWNhbWUgcmVhbCcsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiAyLFxyXG4gICAgICAgIGltcG9ydGFuY2U6IDEsXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6MSxcclxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBibG9ja0lkOiAzLFxyXG4gICAgICAgIHRpdGxlOiAnRXZvbHV0aW9uJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaW5ncyBnZXRzIHRyaWNraWVyJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDMsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogMixcclxuICAgICAgICBibG9ja051bWJlcjoyLFxyXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGJsb2NrSWQ6IDQsXHJcbiAgICAgICAgdGl0bGU6ICdUb3BpYyBtb21lbnQnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnV29haCEnLFxyXG4gICAgICAgIHRpbWVQb3NpdGlvbjogNCxcclxuICAgICAgICBpbXBvcnRhbmNlOiAxLFxyXG4gICAgICAgIGJsb2NrTnVtYmVyOjMsXHJcbiAgICAgICAgdHlwZTonY2hhcHRlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgYmxvY2tJZDogNSxcclxuICAgICAgICB0aXRsZTogJ0VwaWxvZ3VlJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0JlY2F1c2UgZXZlbiB0aGUgYmVzdCB0aGluZ3MgZW5kJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDUsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogLTEsXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6NCxcclxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xyXG4gICAgfVxyXG5dOyIsImltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1R5cGV9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9jay10eXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU1RPUllCTE9DS19UWVBFUzpTdG9yeUJsb2NrVHlwZVtdID0gPFN0b3J5QmxvY2tUeXBlW10+W1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAnY2hhcHRlcicsXHJcbiAgICAgICAgbmFtZTogJ0NoYXB0ZXInLFxyXG4gICAgICAgIGxldmVsOiAwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAncGFyYWdyYXBoJyxcclxuICAgICAgICBuYW1lOiAnUGFyYWdyYXBoJyxcclxuICAgICAgICBsZXZlbDogMVxyXG4gICAgfSxcclxuXTsiLCJpbXBvcnQge0luamVjdGFibGUsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHtTdG9yeUJsb2NrfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2tcIjtcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmUnO1xyXG5pbXBvcnQge09ic2VydmVyfSBmcm9tICdyeGpzL09ic2VydmVyJztcclxuaW1wb3J0IHtTVE9SWUJMT0NLU30gZnJvbSBcIi4uL21vY2svbW9jay1zdG9yeWJsb2Nrc1wiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tUeXBlfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2stdHlwZVwiO1xyXG5pbXBvcnQge1NUT1JZQkxPQ0tfVFlQRVN9IGZyb20gXCIuLi9tb2NrL21vY2stc3RvcnlibG9jay10eXBlc1wiO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2UsIERFQlVHX0xFVkVMfSBmcm9tIFwiLi9sb2dnZXIuc2VydmljZVwiO1xyXG5cclxuZGVjbGFyZSB2YXIgcGRmTWFrZTphbnk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdG9yeUJsb2NrU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9leHBvc2VkSW5kZXggPSAtMTtcclxuICAgIGluZGV4Q2hhbmdlJDpPYnNlcnZhYmxlPG51bWJlcj47XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGFkZFJlcXVlc3QkOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgcHJpdmF0ZSBfb2JzZXJ2ZXI6T2JzZXJ2ZXI8bnVtYmVyPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjpMb2dnZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGh0dHA6SHR0cCxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjpDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5pbmRleENoYW5nZSQgPSBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB0aGlzLl9vYnNlcnZlciA9IG9ic2VydmVyKS5zaGFyZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUV4cG9zZWRJbmRleChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuX2V4cG9zZWRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuX29ic2VydmVyLm5leHQoaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEV4cG9zZWRJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXhwb3NlZEluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0b3J5QmxvY2tzKHVzZXJJZCk6T2JzZXJ2YWJsZTxTdG9yeUJsb2NrW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpQmFzZVBhdGggKyAnL3N0b3J5LycgKyB1c2VySWQpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvckNhdGNoZXIoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVN0b3J5QmxvY2sodXNlcklkLCBzdG9yeUJsb2NrOlN0b3J5QmxvY2spOk9ic2VydmFibGU8U3RvcnlCbG9jaz4ge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghIXN0b3J5QmxvY2suX2lkKSB7XHJcbiAgICAgICAgICAgIHN0b3J5QmxvY2suY3JlYXRlZEF0ID0gc3RvcnlCbG9jay5jcmVhdGVkQXQgfHwgKG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICBzdG9yeUJsb2NrLmxhc3RNb2RpZmllZEF0ID0gKG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpQmFzZVBhdGggKyAnL3N0b3J5LycgKyB1c2VySWQgKyAnLycgKyBzdG9yeUJsb2NrLl9pZCwgXCJkYXRhPVwiICsgSlNPTi5zdHJpbmdpZnkoc3RvcnlCbG9jayksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nZ2VyLmVycm9yQ2F0Y2hlcigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN0b3J5QmxvY2suY3JlYXRlZEF0ID0gKG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICBzdG9yeUJsb2NrLmxhc3RNb2RpZmllZEF0ID0gKG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5jb25maWd1cmF0aW9uLmFwaUJhc2VQYXRoICsgJy9zdG9yeS8nICsgdXNlcklkICsgJy8nLCBcImRhdGE9XCIgKyBKU09OLnN0cmluZ2lmeShzdG9yeUJsb2NrKSwgb3B0aW9ucylcclxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dnZXIuZXJyb3JDYXRjaGVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVTdG9yeUJsb2NrKHVzZXJJZCwgc3RvcnlCbG9jazpTdG9yeUJsb2NrKTpPYnNlcnZhYmxlPFN0b3J5QmxvY2tbXT4ge1xyXG4gICAgICAgIGlmICghIXN0b3J5QmxvY2suX2lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvc3RvcnkvJyArIHVzZXJJZCArICcvJyArIHN0b3J5QmxvY2suX2lkKVxyXG4gICAgICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvckNhdGNoZXIoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0b3J5QmxvY2tUeXBlcygpOlN0b3J5QmxvY2tUeXBlW10ge1xyXG4gICAgICAgIHJldHVybiBTVE9SWUJMT0NLX1RZUEVTO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0b3J5QmxvY2tEZWZhdWx0VHlwZXMoKTpTdG9yeUJsb2NrVHlwZVtdIHtcclxuICAgICAgICByZXR1cm4gU1RPUllCTE9DS19UWVBFUztcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVRlc3REYXRhKHVzZXJJZCk6T2JzZXJ2YWJsZTxTdG9yeUJsb2NrW10+IHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ2dlbmVyYXRlVGVzdERhdGEnLCAnQ3JlYXRpbmcgdGVtcG9yYXJ5IGRhdGEgZm9yICcgKyB1c2VySWQpO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBibG9ja3M6U3RvcnlCbG9ja1tdID0gU1RPUllCTE9DS1M7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJsb2Nrc1tpXS51c2VySWQgPSB1c2VySWQ7XHJcbiAgICAgICAgICAgIGJsb2Nrc1tpXS5jcmVhdGVkQXQgPSAobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIGJsb2Nrc1tpXS5sYXN0TW9kaWZpZWRBdCA9IChuZXcgRGF0ZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpQmFzZVBhdGggKyAnL3N0b3J5LycgKyB1c2VySWQgKyAnLycsIFwiZGF0YT1cIiArIEpTT04uc3RyaW5naWZ5KGJsb2NrcyksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvckNhdGNoZXIoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRQZGYoc3RvcnlCbG9ja3M6U3RvcnlCbG9ja1tdKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gY29tcGFyZShhOlN0b3J5QmxvY2ssIGI6U3RvcnlCbG9jaykge1xyXG4gICAgICAgICAgICBpZiAoYS50aW1lUG9zaXRpb24gPCBiLnRpbWVQb3NpdGlvbilcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoYS50aW1lUG9zaXRpb24gPiBiLnRpbWVQb3NpdGlvbilcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0b3J5QmxvY2tzLnNvcnQoY29tcGFyZSk7XHJcblxyXG5cclxuICAgICAgICB2YXIgZG9jRGVmaW5pdGlvbiA9IHtcclxuICAgICAgICAgICAgY29udGVudDogW10sXHJcblxyXG4gICAgICAgICAgICBzdHlsZXM6IHtcclxuICAgICAgICAgICAgICAgIGNoYXB0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9sZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFswLCAxNiwgMCwgOF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYXJhZ3JhcGg6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9sZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFswLCAwLCAwLCAxMl1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RvcnlCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZG9jRGVmaW5pdGlvbi5jb250ZW50LnB1c2goXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogc3RvcnlCbG9ja3NbaV0udGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHN0b3J5QmxvY2tzW2ldLnR5cGUsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRvY0RlZmluaXRpb24uY29udGVudC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgc3RvcnlCbG9ja3NbaV0uZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBkZk1ha2UuY3JlYXRlUGRmKGRvY0RlZmluaXRpb24pLmRvd25sb2FkKCk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWZ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidub3RpZmljYXRpb24nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2Pnt7IF9jb250ZW50wqB9fTwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgX3RpbWVyO1xyXG4gICAgcHJpdmF0ZSBfY29udGVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lOkVsZW1lbnRSZWYpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93KGNvbnRlbnQpe1xyXG4gICAgICAgIGlmKCEhdGhpcy5fdGltZXIpe1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLl9lLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2UubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFV0aWxzU2VydmljZSB7XHJcbiAgICBwdWJsaWMgRU1BSUxfUkVHRVggPSAnXlstYS16MC05fiEkJV4mKl89K317XFwnP10rKFxcLlstYS16MC05fiEkJV4mKl89K317XFwnP10rKSpAKFthLXowLTlfXVstYS16MC05X10qKFxcLlstYS16MC05X10rKSpcXC4oYWVyb3xhcnBhfGJpenxjb218Y29vcHxlZHV8Z292fGluZm98aW50fG1pbHxtdXNldW18bmFtZXxuZXR8b3JnfHByb3x0cmF2ZWx8bW9iaXxbYS16XVthLXpdKXwoWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfSkpKDpbMC05XXsxLDV9KT8kJztcclxuXHJcblxyXG4gICAgZ2V0Um9tYW5OdW1lcmFsKG51bSk6c3RyaW5nIHtcclxuICAgICAgICBpZiAoIStudW0pXHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB2YXIgZGlnaXRzID0gU3RyaW5nKCtudW0pLnNwbGl0KFwiXCIpLFxyXG4gICAgICAgICAgICBrZXkgPSBbXCJcIiwgXCJDXCIsIFwiQ0NcIiwgXCJDQ0NcIiwgXCJDRFwiLCBcIkRcIiwgXCJEQ1wiLCBcIkRDQ1wiLCBcIkRDQ0NcIiwgXCJDTVwiLFxyXG4gICAgICAgICAgICAgICAgXCJcIiwgXCJYXCIsIFwiWFhcIiwgXCJYWFhcIiwgXCJYTFwiLCBcIkxcIiwgXCJMWFwiLCBcIkxYWFwiLCBcIkxYWFhcIiwgXCJYQ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJcIiwgXCJJXCIsIFwiSUlcIiwgXCJJSUlcIiwgXCJJVlwiLCBcIlZcIiwgXCJWSVwiLCBcIlZJSVwiLCBcIlZJSUlcIiwgXCJJWFwiXSxcclxuICAgICAgICAgICAgcm9tYW4gPSBcIlwiLFxyXG4gICAgICAgICAgICBpID0gMztcclxuICAgICAgICB3aGlsZSAoaS0tKVxyXG4gICAgICAgICAgICByb21hbiA9IChrZXlbK2RpZ2l0cy5wb3AoKSArIChpICogMTApXSB8fCBcIlwiKSArIHJvbWFuO1xyXG4gICAgICAgIHJldHVybiBBcnJheSgrZGlnaXRzLmpvaW4oXCJcIikgKyAxKS5qb2luKFwiTVwiKSArIHJvbWFuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEh1bWFuRGF0ZShkKTpzdHJpbmd7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShkKTtcclxuICAgICAgICByZXR1cm4gKGRhdGUuZ2V0TW9udGgoKSArICcvJyArIGRhdGUuZ2V0RGF0ZSgpICsgJy8nICsgIGRhdGUuZ2V0RnVsbFllYXIoKSArICcgYXQgJyArIGRhdGUuZ2V0SG91cnMoKSArICc6JyArIGRhdGUuZ2V0TWludXRlcygpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29udHJvbCwgQ29udHJvbEdyb3VwfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XHJcblxyXG4vKlxyXG4gQ3VzdG9tIHZhbGlkYXRvcnMgdG8gdXNlIGV2ZXJ5d2hlcmUuXHJcbiAqL1xyXG5cclxuLy8gU0lOR0xFIEZJRUxEIFZBTElEQVRPUlNcclxuZXhwb3J0IGZ1bmN0aW9uIGVtYWlsVmFsaWRhdG9yKGNvbnRyb2w6IENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XHJcbiAgICB2YXIgZW1haWxSZWdleHAgPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKiQvaTtcclxuICAgIGlmIChjb250cm9sLnZhbHVlICYmIGNvbnRyb2wudmFsdWUubGVuZ3RoIDwgNiAmJiAhZW1haWxSZWdleHAudGVzdChjb250cm9sLnZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiB7aW52YWxpZEVtYWlsOiB0cnVlfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVtYWlsUmVnZXhwID0gJ15bYS16MC05ISMkJSZcXCcqK1xcXFwvPT9eX2B7fH1+Li1dK0BbYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSokJztcclxuXHJcbi8vQ09OVFJPTCBHUk9VUCBWQUxJREFUT1JTXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGluZ1Bhc3N3b3JkcyhwYXNzd29yZEtleTogc3RyaW5nLCBjb25maXJtUGFzc3dvcmRLZXk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIChncm91cDogQ29udHJvbEdyb3VwKToge1trZXk6IHN0cmluZ106IGFueX0gPT4ge1xyXG4gICAgICAgIGxldCBwYXNzd29yZCA9IGdyb3VwLmNvbnRyb2xzW3Bhc3N3b3JkS2V5XTtcclxuICAgICAgICBsZXQgY29uZmlybVBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbY29uZmlybVBhc3N3b3JkS2V5XTtcclxuICAgICAgICBpZiAocGFzc3dvcmQudmFsdWUgIT09IGNvbmZpcm1QYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWlzbWF0Y2hlZFBhc3N3b3JkczogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9tb2RlbHMvdXNlclwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cCwgRk9STV9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XHJcbmltcG9ydCB7ZW1haWxWYWxpZGF0b3IsIG1hdGNoaW5nUGFzc3dvcmRzLCBlbWFpbFJlZ2V4cH0gZnJvbSAnLi4vc2VydmljZXMvdmFsaWRhdG9ycy5zZXJ2aWNlJztcclxuaW1wb3J0IHtXZWJTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3dlYnN0b3JhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2UsIERFQlVHX0xFVkVMfSBmcm9tIFwiLi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsb2ctbWVzc2FnZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleGJveCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57e2xvZ01lc3NhZ2UubWVzc2FnZX19PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxhIGNsYXNzPVwiY2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoJGV2ZW50KVwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5YPC9pPjwvYT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZGVzY3JpcHRpb25cIiBbYXR0ci5yZWFkb25seV09XCJ0cnVlXCIgWyhuZ01vZGVsKV09XCJsb2dNZXNzYWdlLnByZXR0eVwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczogW10sXHJcbiAgICBkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ01lc3NhZ2VDb21wb25lbnQge1xyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBsb2dNZXNzYWdlO1xyXG4gICAgQE91dHB1dCgpIGNsb3NlTW9kYWw6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cclxuICAgIGNsb3NlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2UsIERFQlVHX0xFVkVMfSBmcm9tIFwiLi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7TG9nTWVzc2FnZUNvbXBvbmVudH0gZnJvbSBcIi4vbG9nLW1lc3NhZ2UuY29tcG9uZW50XCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2RlYnVnLWNvbnNvbGUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgPGRpdj5EZWJ1ZyBlcnJvcnM6PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1sb2dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwiI2xvZ01lc3NhZ2Ugb2YgbG9nTWVzc2FnZXM7ICNpID0gaW5kZXhcIiBcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cInNob3coaSlcIiBbbmdDbGFzc109XCJ7ZXJyb3I6IGlzRXJyb3IobG9nTWVzc2FnZSksIHdhcm5pbmc6IGlzV2FybmluZyhsb2dNZXNzYWdlKX1cIj57e2xvZ01lc3NhZ2UubWVzc2FnZX19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsb2ctbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImk9PW9wZW5NZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsb3NlTW9kYWwpPVwiaGlkZSgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2xvZ01lc3NhZ2VdPVwibG9nTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvbG9nLW1lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOiBbXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtMb2dNZXNzYWdlQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERlYnVnQ29uc29sZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIHByaXZhdGUgbG9nU3RyZWFtJDpPYnNlcnZhYmxlPE9iamVjdFtdPjtcclxuICAgIHB1YmxpYyBsb2dNZXNzYWdlczpPYmplY3RbXTtcclxuICAgIHB1YmxpYyBvcGVuTWVzc2FnZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjpMb2dnZXJTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTphbnkge1xyXG4gICAgICAgIHRoaXMubG9nTWVzc2FnZXM9W107XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sb2dTdHJlYW0kID0gdGhpcy5sb2dnZXIuZ2V0TG9nU3RyZWFtKCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nU3RyZWFtJC5zdWJzY3JpYmUobWVzc2FnZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nTWVzc2FnZXMucHVzaChtZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyhpbmRleCkge1xyXG4gICAgICAgIHRoaXMub3Blbk1lc3NhZ2UgPSAoIXRoaXMub3Blbk1lc3NhZ2UpP2luZGV4OnVuZGVmaW5lZDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpe1xyXG4gICAgICAgIHRoaXMub3Blbk1lc3NhZ2U9dW5kZWZpbmVkO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0Vycm9yKG1lc3NhZ2Upe1xyXG4gICAgICAgIHJldHVybiBtZXNzYWdlLmxldmVsID09IERFQlVHX0xFVkVMLkVSUk9SLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgaXNXYXJuaW5nKG1lc3NhZ2Upe1xyXG4gICAgICAgIHJldHVybiBtZXNzYWdlLmxldmVsID09IERFQlVHX0xFVkVMLldBUk4ubmFtZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdG9yeWJsb2Nrcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VXRpbHNTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvdXRpbHMuc2VydmljZVwiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tUeXBlfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2stdHlwZVwiO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge0RlYnVnQ29uc29sZUNvbXBvbmVudH0gZnJvbSBcIi4vZGVidWctY29uc29sZS5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J3NpZGViYXInLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiX2luZGV4ID09IC0xXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJjcmVhdGUtc3RvcnlibG9ja1wiIGRyYWdnYWJsZT1cInRydWVcIiAoZHJhZ3N0YXJ0KT1cImRyYWdTdGFydCgkZXZlbnQpXCIgKGRyYWdlbmQpPVwiZHJhZ0VuZCgkZXZlbnQpXCI+Q3JlYXRlIHN0b3J5YmxvY2s8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1jb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlRvdGFsIGNoYXB0ZXJzPC9zcGFuPjxzcGFuIGNsYXNzPVwiY291bnRcIj57e19zdG9yeUJsb2Nrc0xlbmd0aH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiX2luZGV4ID49IDAgJiYgISFfc3RvcnlCbG9ja1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxoMz48c3BhbiBjbGFzcz1cImNhcGl0YWwtbGV0dGVyXCI+Q2hhcHRlcjwvc3Bhbj4ge3tfc3RvcnlCbG9jay5ibG9ja051bWJlcisxfX08L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItc2VwYXJhdG9yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3RvcnlibG9jayB0eXBlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBbKG5nTW9kZWwpXT1cIl9zdG9yeUJsb2NrLnR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwiI3N0b3J5QmxvY2tUeXBlIG9mIHN0b3J5QmxvY2tUeXBlc1wiIHZhbHVlPXt7c3RvcnlCbG9ja1R5cGUuaWR9fT57e3N0b3J5QmxvY2tUeXBlLm5hbWV9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItc2VwYXJhdG9yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+VG90YWwgY2hhcmFjdGVyczwvc3Bhbj48c3BhbiBjbGFzcz1cImNvdW50XCI+e3tfc3RvcnlCbG9jay5kZXNjcmlwdGlvbi5sZW5ndGh9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWluZm9cIiAqbmdJZj1cIiEhX3N0b3J5QmxvY2suY3JlYXRlZEF0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+Q3JlYXRlZDwvc3Bhbj48c3BhbiBjbGFzcz1cImluZm9cIj57e3V0aWxzU2VydmljZS5nZXRIdW1hbkRhdGUoX3N0b3J5QmxvY2suY3JlYXRlZEF0KX19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItaW5mb1wiICpuZ0lmPVwiISFfc3RvcnlCbG9jay5sYXN0TW9kaWZpZWRBdFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkxhc3QgbW9kaWZpZWQ8L3NwYW4+PHNwYW4gY2xhc3M9XCJpbmZvXCI+e3t1dGlsc1NlcnZpY2UuZ2V0SHVtYW5EYXRlKF9zdG9yeUJsb2NrLmxhc3RNb2RpZmllZEF0KX19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGVidWctY29uc29sZSAqbmdJZj1cImlzRGVidWcoKVwiPjwvZGVidWctY29uc29sZT5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtVdGlsc1NlcnZpY2VdLFxyXG4gICAgZGlyZWN0aXZlczogW0RlYnVnQ29uc29sZUNvbXBvbmVudF0sXHJcbiAgICBpbnB1dHM6IFsnc3RvcnlCbG9jaycsICdzdG9yeUJsb2Nrc0xlbmd0aCddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBzdG9yeUJsb2NrVHlwZXM6U3RvcnlCbG9ja1R5cGVbXTtcclxuICAgIFxyXG4gICAgcHVibGljIF9pbmRleDogbnVtYmVyO1xyXG4gICAgcHVibGljIF9zdG9yeUJsb2NrO1xyXG4gICAgcHVibGljIF9zdG9yeUJsb2Nrc0xlbmd0aDtcclxuICAgIHB1YmxpYyBfc3Vic2NyaXB0aW9uOiBhbnk7XHJcblxyXG4gICAgQE91dHB1dCgpIHN0YXJ0RHJhZ2dpbmc6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgZW5kRHJhZ2dpbmc6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBsb2dnZXI6TG9nZ2VyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9zdG9yeUJsb2NrU2VydmljZTpTdG9yeUJsb2NrU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHV0aWxzU2VydmljZTpVdGlsc1NlcnZpY2VcclxuICAgICkge31cclxuXHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCBzdG9yeUJsb2NrKHN0b3J5QmxvY2spIHtcclxuICAgICAgICB0aGlzLl9zdG9yeUJsb2NrID0gc3RvcnlCbG9jaztcclxuICAgIH1cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgc3RvcnlCbG9ja3NMZW5ndGgoc3RvcnlCbG9ja3NMZW5ndGgpe1xyXG4gICAgICAgIHRoaXMuX3N0b3J5QmxvY2tzTGVuZ3RoID0gc3RvcnlCbG9ja3NMZW5ndGg7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tUeXBlcyA9IHRoaXMuX3N0b3J5QmxvY2tTZXJ2aWNlLmdldFN0b3J5QmxvY2tUeXBlcygpO1xyXG4gICAgICAgIHRoaXMuX2luZGV4ID0gdGhpcy5fc3RvcnlCbG9ja1NlcnZpY2UuZ2V0RXhwb3NlZEluZGV4KCk7XHJcbiAgICAgICAgdGhpcy5fc3RvcnlCbG9jayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5fc3RvcnlCbG9ja1NlcnZpY2UuaW5kZXhDaGFuZ2UkLnN1YnNjcmliZShcclxuICAgICAgICAgICAgaW5kZXggPT4gdGhpcy5zZWxlY3RJbmRleChpbmRleCkpO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0SW5kZXgoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2luZGV4ID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIGRyYWdTdGFydChlKXtcclxuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWcuc3JjID0gICBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ1FBQUFBa0NBWUFBQURoQUppWUFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUJPMUpSRUZVV0FuXCIgK1xyXG4gICAgICAgICAgICBcIk5tRUZzRkZVWXg3ODNPN1BhQXJwZ3FGS3RHS01oR09KSkVtMUZROElhcFVRa3BqMlllUE5takFlajhlRFJnOUY0SU1hYk54TVBiUlF4Z01aaWlHS3JDUnlNVVFscVRFQXBDQXFyaGhaM1p1ZjVcIiArXHJcbiAgICAgICAgICAgIFwiL2Q3czI5M1NscDNGbHV5WDdPemIyZmYrLy85ODc3M3ZmZDhZNmRCdTNHZFhCeGVydzFaTVdZemNicTN0TjhiMEE2UHRhVzFQaTVXVFJ1eEV1cUs0LzY4ZDVrSW5GQ1p2NTlKWXNrdHMrcHcxc1wiICtcclxuICAgICAgICAgICAgXCJrV1p3MXpqakVtTWxjTmlncmNxbytHZVBHUGFDbHI5Zmp4a2EvWjFmZnBCQUtPQ3NRK3ROV2I3cllGc3VNSEl1aDRqdDF5ZlVaMjVKSEo2MXNyeHY2MGNPSlhLRitlc2pXdjZDR3JxdVNsVE1DXCIgK1xyXG4gICAgICAgICAgICBcIjlkZURLYXpIb3ZmRjFVME1pWUxVeEkvS1lLZVo2aGZUM0d2bnhQd1l5c0QyUlZQdi9JUDRuSStJbFVYdnVoWnMvT05vVHRMa3Ywd3Zpb3FTMGthVUZCcFQyMlpPTjRUS2VtWEZTUHZMaXhZSjdcIiArXHJcbiAgICAgICAgICAgIFwiZEVFaHZJWVA0dG1KbHYzcmdxM05XcHRVamVBYkRVLzNxc1FmV0dobFdEOTVieXVCbmxQcnQ0Nm04Y2F4bXEzak1tQWtUUmFPVlhhYVNqV3hlNXdseVlxclZLZTJ5RWErOE54U2ErOVprM2ZiK1wiICtcclxuICAgICAgICAgICAgXCJadVhWN3hMNVNhY2tqOTJ0VS9yS3BsQjIzcGFOUDNyZXlsT1RpZmZXTVZNc0RsNHVhbzRncHVsVGlUL0dNNXRLZ1l4dENmV0pSVTVjRkhubTYwU08vSm5tMFRHdnorYWJBbm5uL2xEV3J4RDFxXCIgK1xyXG4gICAgICAgICAgICBcIk1qSTRVUytyeWlXZXVvUmlSNXJuYjZnZFRSckJqRjR4b3VaMUduWmVqQythakhnOHlCZ2dNVURqdXVEd2dHWDQyd1IwZkFRdXlsTjBpOVpNd2UyWnRNRXdCT2ZKeEtuK2Fhb0JYZkJaaFFZK2ZcIiArXHJcbiAgICAgICAgICAgIFwiRGhVSVowalRGOTJ3OGxiazBGWWZDZzMzME5EN0cxUVdFQnMyYVlwcWVubGs0TTJEd1ltR0REQVJmM1BUZHRKNGlnUjV6Qmpld21qRFZ6L3QrbDhZd0RyRi9BQkJ1REMwNjRYZURWZXhtN1JtQVwiICtcclxuICAgICAgICAgICAgXCI2RUdmWTJ1eW1xMTNBNExRenNPR0FDMDdYdjY3QmNEYkpUSHcyQ3FUd3k4N0lFUFEyZnhMbjN0cnR5QmY3bjVCdzVOSElCYzg3OThZMlRxVW12VkZmWUdiaUhicmFRNDREeEJEMDhzYVp4Y2p5XCIgK1xyXG4gICAgICAgICAgICBcIjNJY0RMampoUmdOYW1MSXlBSnhOR0JHNEUrdlQ2RndaTGJwUFk4dm1CUEJjbmx1SGxWRXh3SGdPU296ajRGcVo1L0xjeWpzUTZncDN1UXluTnNiWmxNZnUwS2lMcmJtdTZSY2lNVlpUaUY5bnNcIiArXHJcbiAgICAgICAgICAgIFwidmFWcnA3TGM2TWxKTG5TeHB3VTRrb2cvcjl2aG91KzJmajI5LzY0Wk9XdWorTEcvY1VhclljeWZkQkNJdUZja3M4dlRlalpwRG1pSjh5ODVPOXh1dWN4NzlzbWtsaW03TFFPWHZXN3BoQXJWMlwiICtcclxuICAgICAgICAgICAgXCJZcHhNL3RIMDdXZlpCMVlsSC8rSGptclg2OTF3TGVWdFBOOWNRT2Jnd3RnY3VCOVFlWkhrWStjNjNNYzNsdXRBUWs1QWdnN2NSSXJqcXhxa2FKb3hwNStYVGluVll1ejQyV1FDdUhnL3hKRG95XCIgK1xyXG4gICAgICAgICAgICBcIlI2WFZpbGFySXRzOFM5K2xrSEgwOWwrZW1VZ2xzYjdSUGwzZENRazRPVE5wSldGOXVnd011T09GR0EyVlRRTjFFcVVKMVFFS09rWFl1dDNrT09PRkdBMXF5K2RHNkNRRlVCMnhaY21EU3p1VXlcIiArXHJcbiAgICAgICAgICAgIFwic09HQUMwN0hVOWZnV0NuaWRJVlBVYXBRSFdEa3dLMVIyTjFjZ2d1WVlHTnd3UW0zTHlRYmJxQ0lveE9sQ3VrbHg4QzdnNkdRZGk2VmdRVW0ySERBQmJibnB0MFFSRTZyU25kVE4xR3FVQjJRK1wiICtcclxuICAgICAgICAgICAgXCI1SURMNFdud1BENU5OaHd3QVduejZmbkNPSUhGU1dsQ1c2a1ZQR2lEbTJML3RlYVlzMkF3UVA2TXNoVnNzcmxPQ0d2Mjd6NTZLcEMwYXZzcWxMYWkrcXFsdzFlRk45ZDh6cW1WUlR0cm5saGRiXCIgK1xyXG4gICAgICAgICAgICBcImt3eWlaWHFXVEZ3UUJwcDI3ZHVhLzBOSVBWY1JPY2s1MiswdnNQT09QbExuVlkwbFlBQUFBQVNVVk9SSzVDWUlJPVwiO1xyXG4gICAgICAgIGltZy5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XHJcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKGltZywgMTgsIDE4KTtcclxuICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcuZW1pdChlKTtcclxuICAgIH1cclxuICAgIGRyYWdFbmQoZSl7XHJcbiAgICAgICAgdmFyIGljb25XaWR0aCA9IDM2O1xyXG4gICAgICAgIHZhciBhc2lkZVdpZHRoID0gMjQwO1xyXG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID49IDc2OCAmJiBlLnggPiB3aW5kb3cuaW5uZXJXaWR0aCAtIGFzaWRlV2lkdGggLSBpY29uV2lkdGgpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N0b3J5QmxvY2tTZXJ2aWNlLmFkZFJlcXVlc3QkLmVtaXQoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNEZWJ1Zygpe1xyXG4gICAgICAgIHJldHVybiAobG9jYXRpb24uc2VhcmNoLmluZGV4T2YoJz9kZWJ1ZycpPj0wKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXJcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBDb250cm9sR3JvdXAsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xyXG5pbXBvcnQge2VtYWlsUmVnZXhwfSBmcm9tICcuLi9zZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UnO1xyXG5pbXBvcnQge1dlYlN0b3JhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvd2Vic3RvcmFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7TG9nZ2VyU2VydmljZSwgREVCVUdfTEVWRUx9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NpZ24taW4tZm9ybScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhib3ggZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5Db21lIGluLCBzdG9yeXRlbGxlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PjxhIGNsYXNzPVwiY2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoJGV2ZW50KVwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5YPC9pPjwvYT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJmb3JtXCIgKG5nU3VibWl0KT1cIm9uU2lnbkluKCRldmVudClcIiBub3ZhbGlkYXRlPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLmVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdPVwiZm9ybS5jb250cm9sc1snZW1haWwnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgI2VtYWlsPVwibmdGb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICAqbmdJZj1cIihlbWFpbC5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmICFlbWFpbC52YWxpZFwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICBFbWFpbCBpcyBpbnZhbGlkXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIucGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXCJcclxuICAgICAgICAgICAgICAgICAgICAjcGFzc3dvcmQ9XCJuZ0Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgICpuZ0lmPVwiKHBhc3N3b3JkLmRpcnR5IHx8IHN1Ym1pdHRlZCkgJiYgIXBhc3N3b3JkLnZhbGlkXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZSBwYXNzd29yZCBzaG91bGQgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmdcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIHByaW1hcnkgYmxvY2stYnV0dG9uXCI+U2lnbiBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2FwLWZvcm1cIj48YSAoY2xpY2spPVwic3dhcFRvU2lnblVwKClcIj5JIHdhbnQgdG8gY3JlYXRlIGEgbmV3IGFjY291bnQ8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduSW5Db21wb25lbnQge1xyXG4gICAgdXNlcjpVc2VyID0gbmV3IFVzZXIoKTtcclxuICAgIGZvcm06Q29udHJvbEdyb3VwO1xyXG4gICAgc3VibWl0dGVkID0gZmFsc2U7XHJcblxyXG4gICAgQE91dHB1dCgpIGNsb3NlTW9kYWw6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgc3dhcFdpbmRvdzpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBub3RpZnk6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgYXV0aFN0YXR1czpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGxvZ2dlcjpMb2dnZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBidWlsZGVyOkZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgd2ViU3RvcmFnZVNlcnZpY2U6V2ViU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOkNvbmZpZ3VyYXRpb25cclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZvcm0gPSBidWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oZW1haWxSZWdleHApXSldLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3YXBUb1NpZ25VcCgpIHtcclxuICAgICAgICB0aGlzLnN3YXBXaW5kb3cuZW1pdChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaWduSW4oZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcikuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJTdG9yYWdlU2VydmljZS5wdXQodGhpcy5jb25maWd1cmF0aW9uLnRva2VuLm5hbWUsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLldBUk4sICdvblNpZ25JbicsICdTZXJ2ZXIgZXJyb3InLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdvblNpZ25JbicsICdsb2dnZWQgaW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTdGF0dXMuZW1pdCgnTG9naW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmF1dGhTdGF0dXNDaGFuZ2UkLmVtaXQoJ0xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgnJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9tb2RlbHMvdXNlclwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cCwgRk9STV9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XHJcbmltcG9ydCB7ZW1haWxWYWxpZGF0b3IsIG1hdGNoaW5nUGFzc3dvcmRzLCBlbWFpbFJlZ2V4cH0gZnJvbSAnLi4vc2VydmljZXMvdmFsaWRhdG9ycy5zZXJ2aWNlJztcclxuaW1wb3J0IHtXZWJTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3dlYnN0b3JhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2UsIERFQlVHX0xFVkVMfSBmcm9tIFwiLi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzaWduLXVwLWZvcm0nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4Ym94IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+QmVjb21lIGEgc3Rvcnl0ZWxsZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdj48YSBjbGFzcz1cImNsb3NlXCIgKGNsaWNrKT1cImNsb3NlKCRldmVudClcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+WDwvaT48L2E+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwiZm9ybVwiIChuZ1N1Ym1pdCk9XCJvblNpZ25VcCgkZXZlbnQpXCIgbm92YWxpZGF0ZT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cImZvcm0uY29udHJvbHNbJ25hbWUnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgI25hbWU9XCJuZ0Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICAqbmdJZj1cIihuYW1lLmRpcnR5IHx8IHN1Ym1pdHRlZCkgJiYgIW5hbWUudmFsaWRcIiBjbGFzcz1cInBhbmVsIHBhbmVsLWVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgWW91ciBuYW1lIGlzIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlci5lbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cImZvcm0uY29udHJvbHNbJ2VtYWlsJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgICNlbWFpbD1cIm5nRm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAgKm5nSWY9XCIoZW1haWwuZGlydHkgfHwgc3VibWl0dGVkKSAmJiAhZW1haWwudmFsaWRcIiBjbGFzcz1cInBhbmVsIHBhbmVsLWVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRW1haWwgaXMgaW52YWxpZFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLnBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdPVwiZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgI3Bhc3N3b3JkPVwibmdGb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICAqbmdJZj1cIihwYXNzd29yZC5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmICFwYXNzd29yZC52YWxpZFwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgcGFzc3dvcmQgc2hvdWxkIGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJDb25maXJtIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIuY29uZmlybVBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdPVwiZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgICNjb25maXJtUGFzc3dvcmQ9XCJuZ0Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb25maXJtLXBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIihjb25maXJtUGFzc3dvcmQuZGlydHkgfHwgc3VibWl0dGVkKSAmJiBmb3JtLmhhc0Vycm9yKCdtaXNtYXRjaGVkUGFzc3dvcmRzJylcIiBjbGFzcz1cInBhbmVsIHBhbmVsLWVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhlIHBhc3N3b3JkcyBkb24ndCBtYXRjaFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24gcHJpbWFyeSBibG9jay1idXR0b25cIj5TaWduIHVwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN3YXAtZm9ybVwiPjxhIChjbGljayk9XCJzd2FwVG9TaWduSW4oKVwiPkkgYWxyZWFkeSBoYXZlIGFuIGFjY291bnQ8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduVXBDb21wb25lbnQge1xyXG4gICAgdXNlcjpVc2VyID0gbmV3IFVzZXIoKTtcclxuICAgIGZvcm06Q29udHJvbEdyb3VwO1xyXG4gICAgc3VibWl0dGVkID0gZmFsc2U7XHJcblxyXG4gICAgQE91dHB1dCgpIGNsb3NlTW9kYWw6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgc3dhcFdpbmRvdzpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBub3RpZnk6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgYXV0aFN0YXR1czpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGxvZ2dlcjpMb2dnZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBidWlsZGVyOkZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgd2ViU3RvcmFnZVNlcnZpY2U6V2ViU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOkNvbmZpZ3VyYXRpb25cclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZvcm0gPSBidWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgbmFtZTpbJyddLFxyXG4gICAgICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybihlbWFpbFJlZ2V4cCldKV0sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKV0sXHJcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICB9LCB7dmFsaWRhdG9yOiBtYXRjaGluZ1Bhc3N3b3JkcygncGFzc3dvcmQnLCAnY29uZmlybVBhc3N3b3JkJyl9KVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3YXBUb1NpZ25JbigpIHtcclxuICAgICAgICB0aGlzLnN3YXBXaW5kb3cuZW1pdChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaWduVXAoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5mb3JtLnZhbHVlKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcikuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJTdG9yYWdlU2VydmljZS5wdXQodGhpcy5jb25maWd1cmF0aW9uLnRva2VuLm5hbWUsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLldBUk4sICdvblNpZ25VcCcsJ1NlcnZlciBlcnJvcicsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgZW1haWwgaXMgYWxyZWFkeSB0YWtlbidcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdvblNpZ25VcCcsICdyZWdpc3RlcmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU3RhdHVzLmVtaXQoJ1JlZ2lzdGVyZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmF1dGhTdGF0dXNDaGFuZ2UkLmVtaXQoJ1JlZ2lzdGVyZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCcnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7U2lnbkluQ29tcG9uZW50fSBmcm9tIFwiLi9zaWduaW4tZm9ybS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTaWduVXBDb21wb25lbnR9IGZyb20gXCIuL3NpZ251cC1mb3JtLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2F1dGgtZm9ybScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxzaWduLWluLWZvcm0gXHJcbiAgICAgICAgICAgICpuZ0lmPVwibG9naW5cIiBcclxuICAgICAgICAgICAgKGNsb3NlTW9kYWwpPVwiaGlkZUFjY2Vzc0Zvcm0oKVwiXHJcbiAgICAgICAgICAgIChzd2FwV2luZG93KT1cImxvZ2luPSFsb2dpblwiXHJcbiAgICAgICAgICAgIChhdXRoU3RhdHVzKT1cImF1dGhTdGF0dXNDaGFuZ2VkKCRldmVudClcIlxyXG4gICAgICAgICAgICAobm90aWZ5KT1cIm5vdGlmeU1lc3NhZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgID48L3NpZ24taW4tZm9ybT5cclxuICAgICAgICA8c2lnbi11cC1mb3JtIFxyXG4gICAgICAgICAgICAqbmdJZj1cIiFsb2dpblwiIFxyXG4gICAgICAgICAgICAoY2xvc2VNb2RhbCk9XCJoaWRlQWNjZXNzRm9ybSgpXCJcclxuICAgICAgICAgICAgKHN3YXBXaW5kb3cpPVwibG9naW49IWxvZ2luXCJcclxuICAgICAgICAgICAgKGF1dGhTdGF0dXMpPVwiYXV0aFN0YXR1c0NoYW5nZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChub3RpZnkpPVwibm90aWZ5TWVzc2FnZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvc2lnbi11cC1mb3JtPlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczogW10sXHJcbiAgICBkaXJlY3RpdmVzOiBbU2lnbkluQ29tcG9uZW50LCBTaWduVXBDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aEZvcm1Db21wb25lbnQge1xyXG4gICAgQE91dHB1dCgpIGNsb3NlTW9kYWw6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgbm90aWZ5OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIGF1dGhTdGF0dXM6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIHB1YmxpYyBsb2dpbj1mYWxzZTtcclxuXHJcbiAgICBoaWRlQWNjZXNzRm9ybShldmVudCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbC5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbm90aWZ5TWVzc2FnZShldmVudCl7XHJcbiAgICAgICAgdGhpcy5ub3RpZnkuZW1pdChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXV0aFN0YXR1c0NoYW5nZWQoZXZlbnQpe1xyXG4gICAgICAgIHRoaXMuYXV0aFN0YXR1cy5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7RGlyZWN0aXZlLCBPbkNoYW5nZXMsIEVsZW1lbnRSZWYsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtBbmltYXRpb25CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvYW5pbWF0ZS9hbmltYXRpb25fYnVpbGRlcic7XHJcbmltcG9ydCB7Q3NzQW5pbWF0aW9uQnVpbGRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2FuaW1hdGUvY3NzX2FuaW1hdGlvbl9idWlsZGVyJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbY29sbGFwc2VdJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbGxhcHNlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIGNvbGxhcHNlOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uOiBDc3NBbmltYXRpb25CdWlsZGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFuaW1hdGlvbkJ1aWxkZXI6QW5pbWF0aW9uQnVpbGRlciwgcHJpdmF0ZSBfZWw6RWxlbWVudFJlZikge1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbiA9IGFuaW1hdGlvbkJ1aWxkZXIuY3NzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xyXG4gICAgICAgIC8vIGlmIHRoZSBjaGFuZ2UgaGFwcGVuZWQgaW4gdGhlIGNvbGxhcHNlIHByb3BlcnR5XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuY29sbGFwc2UpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29sbGFwc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIC5zZXREdXJhdGlvbigzNTApXHJcbiAgICAgICAgICAgIC5zZXRGcm9tU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgICdmbGV4LWdyb3cnOiAxLFxyXG4gICAgICAgICAgICAgICAgJ29wYWNpdHknIDogMSxcclxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbic6ICdjdWJpYy1iZXppZXIoMC41NzUsIDAuMjU1LCAwLjQ0MCwgMC45ODUpOydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnNldFRvU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgICdmbGV4LWdyb3cnOiAwLFxyXG4gICAgICAgICAgICAgICAgJ29wYWNpdHknIDogMFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gYSBpcyB0aGUgQW5pbWF0aW9uIGluc3RhbmNlIHJ1bm5pbmcgdGhpcyBhbmltYXRpb24uXHJcbiAgICAgICAgbGV0IGEgPSBhbmltYXRpb25cclxuICAgICAgICAgICAgLnN0YXJ0KHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIGEub25Db21wbGV0ZSgoKSA9PiB7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIC5zZXREdXJhdGlvbigzNTApXHJcbiAgICAgICAgICAgIC5zZXRGcm9tU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgICdmbGV4LWdyb3cnOiAwLFxyXG4gICAgICAgICAgICAgICAgJ29wYWNpdHknIDogMCxcclxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbic6ICdjdWJpYy1iZXppZXIoMC41NzUsIDAuMjU1LCAwLjQ0MCwgMC45ODUpOydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnNldFRvU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgICdmbGV4LWdyb3cnOiAxLFxyXG4gICAgICAgICAgICAgICAgJ29wYWNpdHknIDogMVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gYSBpcyB0aGUgQW5pbWF0aW9uIGluc3RhbmNlIHJ1bm5pbmcgdGhpcyBhbmltYXRpb24uXHJcbiAgICAgICAgbGV0IGEgPSBhbmltYXRpb25cclxuICAgICAgICAgICAgLnN0YXJ0KHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIGEub25Db21wbGV0ZSgoKSA9PiB7XHJcbiAgICAgICAgfSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7RGlyZWN0aXZlLCBPbkNoYW5nZXMsIEVsZW1lbnRSZWYsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtBbmltYXRpb25CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvYW5pbWF0ZS9hbmltYXRpb25fYnVpbGRlcic7XHJcbmltcG9ydCB7Q3NzQW5pbWF0aW9uQnVpbGRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2FuaW1hdGUvY3NzX2FuaW1hdGlvbl9idWlsZGVyJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbZGlzYXBwZWFyXSdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEaXNhcHBlYXIgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgQElucHV0KCkgZGlzYXBwZWFyOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uOiBDc3NBbmltYXRpb25CdWlsZGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFuaW1hdGlvbkJ1aWxkZXI6QW5pbWF0aW9uQnVpbGRlciwgcHJpdmF0ZSBfZWw6RWxlbWVudFJlZikge1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbiA9IGFuaW1hdGlvbkJ1aWxkZXIuY3NzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xyXG4gICAgICAgIC8vIGlmIHRoZSBjaGFuZ2UgaGFwcGVuZWQgaW4gdGhlIGRpc2FwcGVhciBwcm9wZXJ0eVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLmRpc2FwcGVhcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXNhcHBlYXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIC5zZXREdXJhdGlvbigxMDApXHJcbiAgICAgICAgICAgIC5zZXRGcm9tU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgICdvcGFjaXR5JyA6IDEsXHJcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nOiAnY3ViaWMtYmV6aWVyKDAuNTc1LCAwLjI1NSwgMC40NDAsIDAuOTg1KTsnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh7XHJcbiAgICAgICAgICAgICAgICAnb3BhY2l0eScgOiAwXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBhIGlzIHRoZSBBbmltYXRpb24gaW5zdGFuY2UgcnVubmluZyB0aGlzIGFuaW1hdGlvbi5cclxuICAgICAgICBsZXQgYSA9IGFuaW1hdGlvblxyXG4gICAgICAgICAgICAuc3RhcnQodGhpcy5fZWwubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgYS5vbkNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBhbmltYXRpb24gPSB0aGlzLl9hbmltYXRpb25cclxuICAgICAgICAgICAgLnNldER1cmF0aW9uKDEwMClcclxuICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoe1xyXG4gICAgICAgICAgICAgICAgJ29wYWNpdHknIDogMCxcclxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbic6ICdjdWJpYy1iZXppZXIoMC41NzUsIDAuMjU1LCAwLjQ0MCwgMC45ODUpOydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnNldFRvU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgICdvcGFjaXR5JyA6IDFcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGEgaXMgdGhlIEFuaW1hdGlvbiBpbnN0YW5jZSBydW5uaW5nIHRoaXMgYW5pbWF0aW9uLlxyXG4gICAgICAgIGxldCBhID0gYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIC5zdGFydCh0aGlzLl9lbC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICBhLm9uQ29tcGxldGUoKCkgPT4ge1xyXG4gICAgICAgIH0pO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7VXRpbHNTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvdXRpbHMuc2VydmljZVwiO1xyXG5pbXBvcnQge0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gXCJhbmd1bGFyMi9zcmMvYW5pbWF0ZS9hbmltYXRpb25fYnVpbGRlclwiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2t9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9ja1wiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvc3RvcnlibG9ja3Muc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2UsIERFQlVHX0xFVkVMfSBmcm9tIFwiLi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb2xsYXBzZX0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY29sbGFwc2UuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7RGlzYXBwZWFyfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9kaXNhcHBlYXIuZGlyZWN0aXZlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3RvcnlibG9jaycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxhIGNsYXNzPVwiaW5kZXhcIiAoY2xpY2spPVwic3dhcENvbGxhcHNlKClcIiAoY2xpY2spPVwic3dhcERpc2FwcGVhcigpXCI+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwic3RvcnlCbG9ja0luZm8udHlwZSA9PSAnY2hhcHRlcidcIj57e3V0aWxzU2VydmljZS5nZXRSb21hbk51bWVyYWwoc3RvcnlCbG9ja0luZm8uYmxvY2tOdW1iZXIgKyAxKX19PC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jb250YWluZXJcIiBbY29sbGFwc2VdPVwiY29sbGFwc2VkXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInRpdGxlXCIgW2F0dHIucmVhZG9ubHldPVwiX2V4cG9zZWQgPyBudWxsIDogdHJ1ZVwiIFsobmdNb2RlbCldPVwic3RvcnlCbG9ja0luZm8udGl0bGVcIiBwbGFjZWhvbGRlcj1cIkluc2VydCBhIHRpdGxlXCIgIFtkaXNhcHBlYXJdPVwiZGlzYXBwZWFyZWRcIi8+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImRlc2NyaXB0aW9uXCIgW2F0dHIucmVhZG9ubHldPVwiX2V4cG9zZWQgPyBudWxsIDogdHJ1ZVwiIFsobmdNb2RlbCldPVwic3RvcnlCbG9ja0luZm8uZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIlN0YXJ0IHdyaXRpbmcgeW91ciBzdG9yeSBoZXJlLi4uXCIgW2Rpc2FwcGVhcl09XCJkaXNhcHBlYXJlZFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWZhdWx0LWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJlZGl0KGluZGV4LCAkZXZlbnQpXCIgY2xhc3M9XCJidXR0b24gaW5saW5lLWJ1dHRvbiBwcmltYXJ5XCI+RWRpdDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJyZW1vdmUoaW5kZXgsICRldmVudClcIiBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6IWhhc0lkKCl9XCIgY2xhc3M9XCJidXR0b24gaW5saW5lLWJ1dHRvbiBhbGVydFwiPlJlbW92ZTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBvc2VkLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJzYXZlKGluZGV4LCAkZXZlbnQpXCIgY2xhc3M9XCJidXR0b24gaW5saW5lLWJ1dHRvbiBwcmltYXJ5XCI+U2F2ZTwvYT5cclxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJjbG9zZSgpXCIgY2xhc3M9XCJidXR0b24gaW5saW5lLWJ1dHRvbiBzZWNvbmRhcnlcIj5DbG9zZTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW0NvbGxhcHNlLCBEaXNhcHBlYXJdLFxyXG4gICAgcHJvdmlkZXJzOiBbVXRpbHNTZXJ2aWNlXSxcclxuICAgIGlucHV0czogWydzdG9yeUJsb2NrSW5mbycsICdpbmRleCcsICd1c2VySWQnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0b3J5QmxvY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIHN0b3J5QmxvY2tJbmZvOlN0b3J5QmxvY2s7XHJcbiAgICBwcml2YXRlIHVzZXJJZDtcclxuICAgIHB1YmxpYyBpbmRleDtcclxuICAgIHB1YmxpYyBfZXhwb3NlZCA9IGZhbHNlO1xyXG4gICAgcHVibGljIF9hY3RpdmUgPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfYWN0aW9uVGltZW91dDtcclxuICAgIHB1YmxpYyBfc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3pvb21MZXZlbCA9IDEwO1xyXG4gICAgcHJpdmF0ZSBfcHJldmlvdXNab29tTGV2ZWwgPSAxMDtcclxuICAgIHByaXZhdGUgc3RvcnlCbG9ja0xvY2FsU2F2ZTpTdG9yeUJsb2NrO1xyXG4gICAgcHVibGljIGNvbGxhcHNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGRpc2FwcGVhcmVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQE91dHB1dCgpIHpvb21FdmVudDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBleHBvc2VFdmVudDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSByZW1vdmVTdG9yeUJsb2NrRXZlbnQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgbm90aWZ5OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOkxvZ2dlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9hYjpBbmltYXRpb25CdWlsZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfZTpFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB1dGlsc1NlcnZpY2U6VXRpbHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIHN0b3J5QmxvY2tTZXJ2aWNlOlN0b3J5QmxvY2tTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOkNvbmZpZ3VyYXRpb25cclxuICAgICAgICApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCB6b29tTGV2ZWwodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcHJldmlvdXNab29tTGV2ZWwgPSAodGhpcy5fcHJldmlvdXNab29tTGV2ZWwgPT0gdW5kZWZpbmVkKSA/IDEwIDogdGhpcy5fcHJldmlvdXNab29tTGV2ZWw7XHJcbiAgICAgICAgdGhpcy5fem9vbUxldmVsID0gKHRoaXMuX3pvb21MZXZlbCA9PSB1bmRlZmluZWQpID8gMTAgOiB0aGlzLl96b29tTGV2ZWw7XHJcbiAgICAgICAgaWYgKHRoaXMuX3pvb21MZXZlbCAhPSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1pvb21MZXZlbCA9IHRoaXMuX3pvb21MZXZlbDtcclxuICAgICAgICAgICAgdGhpcy5fem9vbUxldmVsID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbUNoYW5nZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCBleHBvc2VkSW5kZXgodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3NlZCA9ICh2YWx1ZSA9PSB0aGlzLmluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBzd2FwQ29sbGFwc2UoKXtcclxuICAgICAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcclxuICAgIH1cclxuXHJcbiAgICBzd2FwRGlzYXBwZWFyKCl7XHJcbiAgICAgICAgdGhpcy5kaXNhcHBlYXJlZCA9ICF0aGlzLmRpc2FwcGVhcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHtcclxuICAgICAgICB0aGlzLmNoYW5nZVBvc2l0aW9uT25ab29tKDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHpvb20oZSkge1xyXG4gICAgICAgIHZhciBlID0gd2luZG93LmV2ZW50IHx8IGU7IC8vIG9sZCBJRSBzdXBwb3J0XHJcbiAgICAgICAgdGhpcy56b29tRXZlbnQuZW1pdChlKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICB6b29tQ2hhbmdlZCgpIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuVkVSQk9TRSwnem9vbUNoYW5nZWQnLCcnLCB7XHJcbiAgICAgICAgICAgIHN0b3J5QmxvY2s6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgIHByZXZpb3VzWm9vbTogdGhpcy5fcHJldmlvdXNab29tTGV2ZWwsXHJcbiAgICAgICAgICAgIGN1cnJlbnRab29tOiB0aGlzLl96b29tTGV2ZWxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5fem9vbUxldmVsIDwgdGhpcy5zdG9yeUJsb2NrSW5mby5pbXBvcnRhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFkZU91dCgxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVBvc2l0aW9uT25ab29tKDEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYWRlSW4oc3BlZWQ6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLlZFUkJPU0UsJ2ZhZGVJbicsJycsIHtcclxuICAgICAgICAgICAgc3RvcnlCbG9jazogdGhpcy5pbmRleCxcclxuICAgICAgICAgICAgbWVzc2FnZTonRmFkaW5nIGluJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYWIuY3NzKCk7XHJcbiAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgZnJvbVN0eWxlID0ge307XHJcbiAgICAgICAgdmFyIHRvU3R5bGUgPSB7fTtcclxuXHJcbiAgICAgICAgZnJvbVN0eWxlWydkaXNwbGF5J10gPSAnZmxleCc7XHJcbiAgICAgICAgZnJvbVN0eWxlWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJ2N1YmljLWJlemllcigwLjU3NSwgMC4yNTUsIDAuNDQwLCAwLjk4NSk7JztcclxuICAgICAgICB0b1N0eWxlWydvcGFjaXR5J10gPSAxO1xyXG5cclxuICAgICAgICBhbmltYXRpb25cclxuICAgICAgICAgICAgLnNldER1cmF0aW9uKHNwZWVkKVxyXG4gICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyhmcm9tU3R5bGUpXHJcbiAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh0b1N0eWxlKTtcclxuXHJcbiAgICAgICAgaWYgKCEhX3NlbGYuX2FjdGlvblRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF9zZWxmLl9hY3Rpb25UaW1lb3V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF9zZWxmLl9hY3Rpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5zdGFydChfc2VsZi5fZS5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0lkKCkge1xyXG4gICAgICAgIHJldHVybiAhISgodGhpcy5zdG9yeUJsb2NrSW5mbyB8fCB7X2lkOiB1bmRlZmluZWR9KS5faWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZhZGVPdXQoc3BlZWQ6bnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuVkVSQk9TRSwnZmFkZU91dCcsJycsIHtcclxuICAgICAgICAgICAgICAgIHN0b3J5QmxvY2s6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1pvb206IHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFpvb206IHRoaXMuX3pvb21MZXZlbCxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFuY2U6IHRoaXMuc3RvcnlCbG9ja0luZm8uaW1wb3J0YW5jZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6J0ZhZGluZyBvdXQnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGFuaW1hdGlvbiA9IHRoaXMuX2FiLmNzcygpO1xyXG4gICAgICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgZnJvbVN0eWxlID0ge307XHJcbiAgICAgICAgICAgIHZhciB0b1N0eWxlID0ge307XHJcblxyXG4gICAgICAgICAgICB0b1N0eWxlWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJ2N1YmljLWJlemllcigwLjU3NSwgMC4yNTUsIDAuNDQwLCAwLjk4NSk7JztcclxuICAgICAgICAgICAgdG9TdHlsZVsnb3BhY2l0eSddID0gMDtcclxuXHJcbiAgICAgICAgICAgIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgLnNldER1cmF0aW9uKHNwZWVkKVxyXG4gICAgICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoZnJvbVN0eWxlKVxyXG4gICAgICAgICAgICAgICAgLnNldFRvU3R5bGVzKHRvU3R5bGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEhX3NlbGYuX2FjdGlvblRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5WRVJCT1NFLCdmYWRlT3V0JywnJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3J5QmxvY2s6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTonQW5pbWF0aW9uIHJlbW92ZWQnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoX3NlbGYuX2FjdGlvblRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBfc2VsZi5fYWN0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLnN0YXJ0KF9zZWxmLl9lLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQb3NpdGlvbk9uWm9vbShzcGVlZCkge1xyXG4gICAgICAgIGxldCBhbmltYXRpb24gPSB0aGlzLl9hYi5jc3MoKTtcclxuICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBmcm9tU3R5bGUgPSB7XHJcbiAgICAgICAgICAgIHRvcDogdGhpcy5jb25maWd1cmF0aW9uLnpvb20ub2Zmc2V0ICsgKCh0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5zdGVwICsgTWF0aC5leHAodGhpcy5fcHJldmlvdXNab29tTGV2ZWwgKiB0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5zdHJlbmd0aCkpICogdGhpcy5zdG9yeUJsb2NrSW5mby50aW1lUG9zaXRpb24pICsgJ3B4J1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciB0b1N0eWxlID0ge1xyXG4gICAgICAgICAgICB0b3A6IHRoaXMuY29uZmlndXJhdGlvbi56b29tLm9mZnNldCArICgodGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RlcCArIE1hdGguZXhwKHRoaXMuX3pvb21MZXZlbCAqIHRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0cmVuZ3RoKSkgKiB0aGlzLnN0b3J5QmxvY2tJbmZvLnRpbWVQb3NpdGlvbikgKyAncHgnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLlZFUkJPU0UsICdjaGFuZ2VQb3NpdGlvbk9uWm9vbScsICcnLCB7XHJcbiAgICAgICAgICAgIHN0b3J5QmxvY2s6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgIHByZXZpb3VzWm9vbTogdGhpcy5fcHJldmlvdXNab29tTGV2ZWwsXHJcbiAgICAgICAgICAgIGN1cnJlbnRab29tOiB0aGlzLl96b29tTGV2ZWwsXHJcbiAgICAgICAgICAgIHRpbWVQb3NpdGlvbjogdGhpcy5zdG9yeUJsb2NrSW5mby50aW1lUG9zaXRpb24sXHJcbiAgICAgICAgICAgIG9mZnNldDp0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5vZmZzZXQsXHJcbiAgICAgICAgICAgIHN0ZXA6dGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RlcCxcclxuICAgICAgICAgICAgc3RyZW5ndGg6dGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RyZW5ndGgsXHJcbiAgICAgICAgICAgIGZyb21Qb3NpdGlvbjpmcm9tU3R5bGUudG9wLFxyXG4gICAgICAgICAgICB0b1Bvc2l0aW9uOnRvU3R5bGUudG9wLFxyXG4gICAgICAgICAgICBtZXNzYWdlOidDaGFuZ2luZyBwb3NpdGlvbidcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKF9zZWxmLl96b29tTGV2ZWwgPiBfc2VsZi5zdG9yeUJsb2NrSW5mby5pbXBvcnRhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5WRVJCT1NFLCdjaGFuZ2VQb3NpdGlvbk9uWm9vbScsJycsIHtcclxuICAgICAgICAgICAgICAgIHN0b3J5QmxvY2s6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1pvb206IHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFpvb206IHRoaXMuX3pvb21MZXZlbCxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFuY2U6IHRoaXMuc3RvcnlCbG9ja0luZm8uaW1wb3J0YW5jZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6J0ZhZGluZyBpbidcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRvU3R5bGVbJ29wYWNpdHknXSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuVkVSQk9TRSwnY2hhbmdlUG9zaXRpb25Pblpvb20nLCcnLCB7XHJcbiAgICAgICAgICAgICAgICBzdG9yeUJsb2NrOiB0aGlzLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNab29tOiB0aGlzLl9wcmV2aW91c1pvb21MZXZlbCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRab29tOiB0aGlzLl96b29tTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbmNlOiB0aGlzLnN0b3J5QmxvY2tJbmZvLmltcG9ydGFuY2UsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOidGYWRpbmcgb3V0J1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdG9TdHlsZVsnb3BhY2l0eSddID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRvU3R5bGVbJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gPSAnY3ViaWMtYmV6aWVyKDAuNTc1LCAwLjI1NSwgMC40NDAsIDAuOTg1KTsnO1xyXG5cclxuICAgICAgICBhbmltYXRpb25cclxuICAgICAgICAgICAgLnNldER1cmF0aW9uKHNwZWVkKVxyXG4gICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyhmcm9tU3R5bGUpXHJcbiAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh0b1N0eWxlKTtcclxuXHJcbiAgICAgICAgaWYgKCEhX3NlbGYuX2FjdGlvblRpbWVvdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLlZFUkJPU0UsJ2NoYW5nZVBvc2l0aW9uT25ab29tJywnJywge1xyXG4gICAgICAgICAgICAgICAgc3RvcnlCbG9jazogdGhpcy5pbmRleCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6J0FuaW1hdGlvbiByZW1vdmVkJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF9zZWxmLl9hY3Rpb25UaW1lb3V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF9zZWxmLl9hY3Rpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5zdGFydChfc2VsZi5fZS5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZvY3VzKCkge1xyXG4gICAgICAgIHZhciBuYXRpdmUgPSB0aGlzLl9lLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgdmFyIHRleHRhcmVhID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hdGl2ZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICgobmF0aXZlLmNoaWxkTm9kZXNbaV0uY2xhc3NOYW1lIHx8ICcnKS5pbmRleE9mKFwidGV4dC1jb250YWluZXJcIikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gbmF0aXZlLmNoaWxkTm9kZXNbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISFjb250YWluZXIpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKChjb250YWluZXIuY2hpbGROb2Rlc1tpXS5jbGFzc05hbWUgfHwgJycpLmluZGV4T2YoXCJkZXNjcmlwdGlvblwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEgPSBjb250YWluZXIuY2hpbGROb2Rlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoISF0ZXh0YXJlYSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH0sIDUwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlZGl0KGluZGV4LCBldmVudCkge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnZWRpdCcsICdTYXZpbmcgdGVtcG9yYXJ5IGRhdGEgJywgdGhpcy5zdG9yeUJsb2NrSW5mbyk7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrTG9jYWxTYXZlID0gPFN0b3J5QmxvY2s+SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0b3J5QmxvY2tJbmZvKSk7XHJcbiAgICAgICAgdGhpcy5leHBvc2VFdmVudC5lbWl0KGluZGV4KTtcclxuICAgICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGluZGV4LCBldmVudCkge1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja1NlcnZpY2UuZGVsZXRlU3RvcnlCbG9jayh0aGlzLnVzZXJJZCwgdGhpcy5zdG9yeUJsb2NrSW5mbykuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAncmVtb3ZlJywgJ1JlY2VpdmVkIGRhdGEnLCAgZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5XQVJOLCAncmVtb3ZlJywgJ0Vycm9yIHdoaWxlIHJlbW92aW5nJywgdGhpcy5zdG9yeUJsb2NrSW5mbywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4uJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAncmVtb3ZlJywgJ1JlbW92aW5nIGJsb2NrIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUmVtb3ZlZCBzdWNjZXNzZnVsbHkuJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVN0b3J5QmxvY2tFdmVudC5lbWl0KHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKGluZGV4LCBldmVudCkge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnc2F2ZScsICdJIGFtIGFib3V0IHRvIHNhdmUnLCB0aGlzLnN0b3J5QmxvY2tJbmZvKTtcclxuXHJcbiAgICAgICAgaWYgKCEodGhpcy5zdG9yeUJsb2NrSW5mby50aXRsZSA9PSAnJyAmJiB0aGlzLnN0b3J5QmxvY2tJbmZvLmRlc2NyaXB0aW9uID09ICcnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLnNhdmVTdG9yeUJsb2NrKHRoaXMudXNlcklkLCB0aGlzLnN0b3J5QmxvY2tJbmZvKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tJbmZvID0gPFN0b3J5QmxvY2s+ZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ3NhdmUnLCAnUmVjZWl2ZWQgJywgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdzYXZlJywgJ1NhdmluZyB0ZW1wb3JhcnkgZGF0YSAnLCBkYXRhLCB0aGlzLnN0b3J5QmxvY2tJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tMb2NhbFNhdmUgPSA8U3RvcnlCbG9jaz5KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RvcnlCbG9ja0luZm8pKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLldBUk4sICdzYXZlJywgJ0Vycm9yIHdoaWxlIHNhdmluZycsIHRoaXMuc3RvcnlCbG9ja0luZm8sIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yLiBQbGVhc2UgdHJ5IGFnYWluLidcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdzYXZlJywgJ1NhdmVkICcsIHRoaXMuc3RvcnlCbG9ja0luZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTYXZlZCBzdWNjZXNzZnVsbHkuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoJ1BsZWFzZSBpbnNlcnQgYSB0aXRsZSBvciBzb21lIGNvbnRlbnQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuZXhwb3NlRXZlbnQuZW1pdCgtMSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zdG9yeUJsb2NrTG9jYWxTYXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnY2xvc2UnLCdSZW1vdmluZyBibG9jayBpbmRleCAnICsgdGhpcy5pbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU3RvcnlCbG9ja0V2ZW50LmVtaXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOid0aW1lbGluZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZWxpbmVDb21wb25lbnQge1xyXG59IiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjonYWRkLWJ1dHRvbicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxhPjxzcGFuPis8L3NwYW4+PC9hPlxyXG4gICAgYCxcclxuICAgIGlucHV0czogWydvZmZzZXRZJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZEJ1dHRvbkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF9vZmZzZXRZO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2U6RWxlbWVudFJlZil7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgb2Zmc2V0WSh2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9vZmZzZXRZID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5vZmZzZXRDaGFuZ2VkKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmZzZXRDaGFuZ2VkKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fZS5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IHZhbHVlICsgJ3B4JztcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtOZ0NsYXNzfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvc3RvcnlibG9ja3Muc2VydmljZVwiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2t9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9ja1wiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tDb21wb25lbnR9IGZyb20gXCIuL3N0b3J5YmxvY2suY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VGltZWxpbmVDb21wb25lbnR9IGZyb20gXCIuL3RpbWVsaW5lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0FkZEJ1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vYWRkLWJ1dHRvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHtTdG9yeUJsb2NrVHlwZX0gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrLXR5cGVcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQge1dlYlN0b3JhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvd2Vic3RvcmFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TG9nZ2VyU2VydmljZSwgREVCVUdfTEVWRUx9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzdG9yeScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIDx0aW1lbGluZSBjbGFzcz1cInRpbWVsaW5lLWJsb2NrXCI+PC90aW1lbGluZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdG9yeS1ibG9ja3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3RvcnlibG9jayAqbmdGb3I9XCIjc3RvcnlCbG9jayBvZiBzdG9yeUJsb2NrczsgI2kgPSBpbmRleFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbaW5kZXhdPVwiaVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbc3RvcnlCbG9ja0luZm9dPVwic3RvcnlCbG9ja1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbem9vbUxldmVsXT1cInpvb21MZXZlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt1c2VySWRdPVwidXNlcklkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2V4cG9zZWRJbmRleF09XCJleHBvc2VkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ZXhwb3NlZDogZXhwb3NlZEluZGV4ID09IGl9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlbW92ZVN0b3J5QmxvY2tFdmVudCk9XCJyZW1vdmVTdG9yeUJsb2NrKCRldmVudClcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGV4cG9zZUV2ZW50KT1cInNldEV4cG9zZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChub3RpZnkpPVwibm90aWZ5TXNnKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0b3J5LWJsb2NrIHt7IHN0b3J5QmxvY2sudHlwZcKgfX1cIj48L3N0b3J5YmxvY2s+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZFN0b3J5QmxvY2soJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwib25Nb3VzZUVudGVyKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cIm9uTW91c2VMZWF2ZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAobW91c2Vtb3ZlKT1cIm9uTW91c2VNb3ZlKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YWRkLWJ1dHRvbiAqbmdJZj1cImFkZEJ1dHRvbi52aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW29mZnNldFldPVwiYWRkQnV0dG9uLnRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhZGRTdG9yeUJsb2NrKCRldmVudClcIj48L2FkZC1idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250cm9sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ6b29tLWNvbnRyb2xzXCI+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9XCJab29tIGluXCIgKGNsaWNrKT1cInpvb21JbigpXCI+KzwvYT4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT1cIlpvb20gb3V0XCIgKGNsaWNrKT1cInpvb21PdXQoKVwiPiZuZGFzaDs8L2E+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgZGlyZWN0aXZlczogW1N0b3J5QmxvY2tDb21wb25lbnQsIFRpbWVsaW5lQ29tcG9uZW50LCBBZGRCdXR0b25Db21wb25lbnQsIE5nQ2xhc3NdLFxyXG4gICAgaW5wdXRzOiBbJ3VzZXJJZCddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIHN0b3J5QmxvY2tzOlN0b3J5QmxvY2tbXTtcclxuICAgIHB1YmxpYyBzdG9yeUJsb2NrVHlwZXM6U3RvcnlCbG9ja1R5cGVbXTtcclxuICAgIHB1YmxpYyBzdG9yeUJsb2NrRGVmYXVsdFR5cGVzOlN0b3J5QmxvY2tUeXBlW107XHJcbiAgICBwdWJsaWMgem9vbUxldmVsO1xyXG4gICAgcHVibGljIGV4cG9zZWRJbmRleDtcclxuICAgIHB1YmxpYyBleHBvc2VkU3RvcnlCbG9jaztcclxuICAgIHB1YmxpYyBhZGRCdXR0b247XHJcbiAgICBwdWJsaWMgdG9rZW46c3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgbWVudVZpc2libGU7XHJcbiAgICBwdWJsaWMgdXNlcklkO1xyXG4gICAgcHVibGljIGFjY2Vzc0Zvcm1WaXNpYmxlO1xyXG4gICAgcHJpdmF0ZSBtYXhJbmRleCA9IDA7XHJcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvbjtcclxuXHJcbiAgICBAT3V0cHV0KCkgbm90aWZ5OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIGV4cG9zZVN0b3J5QmxvY2s6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgc3RvcnlCbG9ja0xpc3Q6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6TG9nZ2VyU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgc3RvcnlCbG9ja1NlcnZpY2U6U3RvcnlCbG9ja1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgd2ViU3RvcmFnZVNlcnZpY2U6V2ViU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgIGF1dGhTZXJ2aWNlLmF1dGhTdGF0dXNDaGFuZ2UkLnN1YnNjcmliZShldmVudCA9PiB0aGlzLmF1dGhTdGF0dXNDaGFuZ2VkKGV2ZW50KSk7XHJcbiAgICAgICAgc3RvcnlCbG9ja1NlcnZpY2UuYWRkUmVxdWVzdCQuc3Vic2NyaWJlKGV2ZW50ID0+IHRoaXMuYWRkU3RvcnlCbG9jayhldmVudCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tzID0gW107XHJcbiAgICAgICAgdGhpcy5nZXRTdG9yeUJsb2NrVHlwZXMoKTtcclxuICAgICAgICB0aGlzLmdldFN0b3J5QmxvY2tzKHRoaXMudXNlcklkKTtcclxuICAgICAgICB0aGlzLnpvb21MZXZlbCA9IDQ7XHJcbiAgICAgICAgdGhpcy5leHBvc2VkSW5kZXggPSAtMTtcclxuICAgICAgICB0aGlzLmV4cG9zZWRTdG9yeUJsb2NrID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFkZEJ1dHRvbiA9IHtcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvcDogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tZW51VmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWNjZXNzRm9ybVZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbiA9IHtcclxuICAgICAgICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBhdXRoVXNlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0SWRGcm9tVG9rZW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgYW5vbnltb3VzVG9rZW4gPSB0aGlzLndlYlN0b3JhZ2VTZXJ2aWNlLmdldCgnYW5vbnltb3VzX3Rva2VuJyk7XHJcbiAgICAgICAgICAgIGlmICghYW5vbnltb3VzVG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIHZhciBhbm9ueW1vdXNUb2tlbiA9IHRoaXMuYXV0aFNlcnZpY2UuZ2VuZXJhdGVBbm9ueW1vdXNUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJTdG9yYWdlU2VydmljZS5wdXQoJ2Fub255bW91c190b2tlbicsIGFub255bW91c1Rva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRJZEZyb21Bbm9ueW1vdXNUb2tlbihhbm9ueW1vdXNUb2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGF1dGhTdGF0dXNDaGFuZ2VkKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQmxvY2tMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaEJsb2NrTGlzdCgpIHtcclxuICAgICAgICB0aGlzLnVzZXJJZCA9IHRoaXMuYXV0aFVzZXIoKTtcclxuICAgICAgICB0aGlzLmdldFN0b3J5QmxvY2tzKHRoaXMudXNlcklkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdG9yeUJsb2NrVHlwZXMoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrVHlwZXMgPSB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdldFN0b3J5QmxvY2tUeXBlcygpO1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja0RlZmF1bHRUeXBlcyA9IHRoaXMuc3RvcnlCbG9ja1NlcnZpY2UuZ2V0U3RvcnlCbG9ja0RlZmF1bHRUeXBlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0b3J5QmxvY2tzKGlkKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5nZXRTdG9yeUJsb2NrcyhpZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcnlCbG9ja3MgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXhJbmRleCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0b3J5QmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RvcnlCbG9ja3NbaV0udHlwZSA9PT0gJ2NoYXB0ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF4SW5kZXggPSBNYXRoLm1heCh0aGlzLm1heEluZGV4LCB0aGlzLnN0b3J5QmxvY2tzW2ldLmJsb2NrSWQgfHwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN0b3J5QmxvY2tzIHx8IHRoaXMuc3RvcnlCbG9ja3MubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ2dldFN0b3J5QmxvY2tzJywgJ05vIGJsb2NrcyByZWNlaXZlZCEnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdlbmVyYXRlVGVzdERhdGEodGhpcy51c2VySWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZURlZmF1bHRCbG9ja3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2NrcyA9IHNhdmVEZWZhdWx0QmxvY2tzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZVN0b3J5QmxvY2tOdW1iZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tMaXN0LmVtaXQodGhpcy5zdG9yeUJsb2Nrcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVyciksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnZ2V0U3RvcnlCbG9ja3MnLCAnTG9hZGVkICcgKyB0aGlzLnN0b3J5QmxvY2tzLmxlbmd0aCArICcgZGVmYXVsdCBibG9ja3MnLCB0aGlzLnN0b3J5QmxvY2tzKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tMaXN0LmVtaXQodGhpcy5zdG9yeUJsb2Nrcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZVN0b3J5QmxvY2tOdW1iZXJzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ2dldFN0b3J5QmxvY2tzJywgJ0xvYWRlZCAnICsgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGggKyAnIGJsb2NrcycsIHRoaXMuc3RvcnlCbG9ja3MpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVN0b3J5QmxvY2soaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrTGlzdC5lbWl0KHRoaXMuc3RvcnlCbG9ja3MpO1xyXG4gICAgICAgIHRoaXMucmVjYWxjdWxhdGVTdG9yeUJsb2NrTnVtYmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY2FsY3VsYXRlU3RvcnlCbG9ja051bWJlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdyZWNhbGN1bGF0ZVN0b3J5QmxvY2tOdW1iZXJzJywgJ1NvcnRpbmcgYmxvY2tzOiBiZWZvcmUnLCB0aGlzLnN0b3J5QmxvY2tzKTtcclxuICAgICAgICB2YXIgY3VycmVudFR5cGVzID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0b3J5QmxvY2tUeXBlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjdXJyZW50VHlwZXNbdGhpcy5zdG9yeUJsb2NrVHlwZXNbaV0uaWRdID0gdGhpcy5zdG9yeUJsb2NrVHlwZXNbaV07XHJcbiAgICAgICAgICAgIGN1cnJlbnRUeXBlc1t0aGlzLnN0b3J5QmxvY2tUeXBlc1tpXS5pZF0uaW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0b3J5QmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50VHlwZSA9IHRoaXMuc3RvcnlCbG9ja3NbaV0udHlwZSB8fCB0aGlzLnN0b3J5QmxvY2tEZWZhdWx0VHlwZXNbMF0uaWQ7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUeXBlc1tjdXJyZW50VHlwZV0gPSBjdXJyZW50VHlwZXNbY3VycmVudFR5cGVdIHx8IHRoaXMuc3RvcnlCbG9ja0RlZmF1bHRUeXBlc1swXTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2Nrc1tpXS5ibG9ja051bWJlciA9IGN1cnJlbnRUeXBlc1tjdXJyZW50VHlwZV0uaW5kZXggfHwgMDtcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnRUeXBlc1tjdXJyZW50VHlwZV0uaW5kZXgrKztcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnN0b3J5QmxvY2tUeXBlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RvcnlCbG9ja1R5cGVzW2pdLmxldmVsID4gY3VycmVudFR5cGVzW2N1cnJlbnRUeXBlXS5sZXZlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUeXBlc1t0aGlzLnN0b3J5QmxvY2tUeXBlc1tqXS5pZF0uaW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAncmVjYWxjdWxhdGVTdG9yeUJsb2NrTnVtYmVycycsICdTb3J0aW5nIGJsb2NrczogYWZ0ZXInLCB0aGlzLnN0b3J5QmxvY2tzKTtcclxuICAgIH1cclxuXHJcbiAgICB6b29tSW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuem9vbUxldmVsIDwgMTApIHtcclxuICAgICAgICAgICAgdGhpcy56b29tTGV2ZWwrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5TXNnKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdtZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdNYXggem9vbSByZWFjaGVkJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgem9vbU91dCgpIHtcclxuICAgICAgICBpZiAodGhpcy56b29tTGV2ZWwgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbUxldmVsLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeU1zZyh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnbWVzc2FnZScsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTWluaW11bSB6b29tIHJlYWNoZWQnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlRW50ZXIoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmFkZEJ1dHRvbiA9IHtcclxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgdG9wOiBldmVudC55XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlTGVhdmUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmFkZEJ1dHRvbiA9IHtcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvcDogMFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5hZGRCdXR0b24udmlzaWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEJ1dHRvbi50b3AgPSBldmVudC55O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRTdG9yeUJsb2NrKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5hZGRCdXR0b24gPSB7XHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3A6IDBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgem9vbUNvbnZlcnNpb25GYWN0b3IgPSB0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5zdGVwICsgTWF0aC5leHAodGhpcy56b29tTGV2ZWwgKiB0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5zdHJlbmd0aCk7XHJcblxyXG4gICAgICAgIHZhciBwb3NpdGlvbkF0Wm9vbSA9ICgoZXZlbnQucGFnZVkgLSB0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5vZmZzZXQpIC8gem9vbUNvbnZlcnNpb25GYWN0b3IpO1xyXG5cclxuICAgICAgICB2YXIgbmV3U3RvcnlCbG9jazpTdG9yeUJsb2NrID0gPFN0b3J5QmxvY2s+IHtcclxuICAgICAgICAgICAgYmxvY2tJZDogdGhpcy5tYXhJbmRleCArIDEsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgICB0aW1lUG9zaXRpb246IHBvc2l0aW9uQXRab29tLFxyXG4gICAgICAgICAgICBpbXBvcnRhbmNlOiAzLFxyXG4gICAgICAgICAgICB0eXBlOiAnY2hhcHRlcidcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm1heEluZGV4Kys7XHJcblxyXG4gICAgICAgIHZhciB0bXBBcnJheVBvcyA9IDA7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdG9yeUJsb2Nrc1tpXS50aW1lUG9zaXRpb24gPiBwb3NpdGlvbkF0Wm9vbSkge1xyXG4gICAgICAgICAgICAgICAgdG1wQXJyYXlQb3MgPSBpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja3Muc3BsaWNlKHRtcEFycmF5UG9zLCAwLCBuZXdTdG9yeUJsb2NrKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdhZGRTdG9yeUJsb2NrJywgJ0FkZGluZyBibG9jayBpbmRleCAnICsgdG1wQXJyYXlQb3MpO1xyXG4gICAgICAgIHRoaXMuc2V0RXhwb3NlZCh0bXBBcnJheVBvcyk7XHJcblxyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja0xpc3QuZW1pdCh0aGlzLnN0b3J5QmxvY2tzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFeHBvc2VkKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdzZXRFeHBvc2VkJywgJ1NldHRpbmcgYmxvY2sgJyArIGluZGV4ICsgJyBleHBvc2VkJyk7XHJcbiAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZVN0b3J5QmxvY2tOdW1iZXJzKCk7XHJcbiAgICAgICAgdGhpcy5leHBvc2VkSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmV4cG9zZWRTdG9yeUJsb2NrID0gaW5kZXggPj0gMCA/IHRoaXMuc3RvcnlCbG9ja3NbaW5kZXhdIDogbnVsbDtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmNoYW5nZUV4cG9zZWRJbmRleChpbmRleCk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ25vLXNjcm9sbCcpO1xyXG4gICAgICAgIHRoaXMuZXhwb3NlU3RvcnlCbG9jay5lbWl0KHRoaXMuZXhwb3NlZFN0b3J5QmxvY2spO1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja0xpc3QuZW1pdCh0aGlzLnN0b3J5QmxvY2tzKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLnNhdmVTdG9yeUJsb2NrKHRoaXMudXNlcklkLCB0aGlzLnN0b3J5QmxvY2tzW2ldKS5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5TXNnKG5vdGlmaWNhdGlvbikge1xyXG4gICAgICAgIHRoaXMubm90aWZ5LmVtaXQobm90aWZpY2F0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVNZW51KHZpc2liaWxpdHkpIHtcclxuICAgICAgICB0aGlzLm1lbnVWaXNpYmxlID0gdmlzaWJpbGl0eTtcclxuICAgICAgICBpZiAodmlzaWJpbGl0eSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TmdDbGFzc30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuaW1wb3J0IHtOb3RpZmljYXRpb25Db21wb25lbnR9IGZyb20gXCIuL25vdGlmaWNhdGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTaWRlYmFyQ29tcG9uZW50fSBmcm9tIFwiLi9zaWRlYmFyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7V2ViU3RvcmFnZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy93ZWJzdG9yYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBdXRoRm9ybUNvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC1mb3JtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2UsIERFQlVHX0xFVkVMfSBmcm9tIFwiLi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTdG9yeUNvbXBvbmVudH0gZnJvbSBcIi4vc3RvcnkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdG9yeWJsb2Nrcy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3RvcnktYm9hcmQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8c3RvcnkgXHJcbiAgICAgICAgICAgIFt1c2VySWRdPVwidXNlcklkXCJcclxuICAgICAgICAgICAgKGV4cG9zZVN0b3J5YmxvY2spPVwic2V0RXhwb3NlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgKG5vdGlmeSk9XCJub3RpZnkoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChzdG9yeUJsb2NrTGlzdCk9XCJ1cGRhdGVTdG9yeUJsb2NrcygkZXZlbnQpXCJcclxuICAgICAgICA+PC9zdG9yeT5cclxuICAgICAgICA8YXNpZGUgW25nQ2xhc3NdPVwie3Zpc2libGU6IG1lbnVWaXNpYmxlfVwiPlxyXG4gICAgICAgICAgICA8c2lkZWJhclxyXG4gICAgICAgICAgICAoc3RhcnREcmFnZ2luZyk9XCJ0b2dnbGVNZW51KGZhbHNlKVwiXHJcbiAgICAgICAgICAgIChlbmREcmFnZ2luZyk9XCJhZGRTdG9yeUJsb2NrKCRldmVudClcIlxyXG4gICAgICAgICAgICBbc3RvcnlCbG9ja109XCJleHBvc2VkU3RvcnlCbG9ja1wiIFtzdG9yeUJsb2Nrc0xlbmd0aF09XCJzdG9yeUJsb2Nrcy5sZW5ndGhcIj48L3NpZGViYXI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwidXNlci1hc2lkZVwiIChjbGljayk9XCJkb3dubG9hZFBkZigpXCI+RG93bmxvYWQgUERGPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cInVzZXItYXNpZGVcIiAqbmdJZj1cIiFpc0xvZ2dlZEluKClcIiAoY2xpY2spPVwic2hvd0FjY2Vzc0Zvcm0oKVwiPkxvZ2luL1NpZ251cDwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJ1c2VyLWFzaWRlXCIgKm5nSWY9XCJpc0xvZ2dlZEluKClcIiAoY2xpY2spPVwibG9nT3V0KClcIj5Mb2dvdXQ8L2E+XHJcbiAgICAgICAgICAgIDxhIGlkPVwiY2xvc2UtbWVudVwiIChjbGljayk9XCJ0b2dnbGVNZW51KGZhbHNlKVwiPjwvYT5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgIDxoZWFkZXI+PGEgaWQ9XCJidXJnZXJcIiAoY2xpY2spPVwidG9nZ2xlTWVudSh0cnVlKVwiPjxpIGNsYXNzPVwiZmEgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2E+PC9oZWFkZXI+XHJcbiAgICAgICAgPGF1dGgtZm9ybSBcclxuICAgICAgICAgICAgKm5nSWY9XCJhY2Nlc3NGb3JtVmlzaWJsZVwiIFxyXG4gICAgICAgICAgICAoY2xvc2VNb2RhbCk9XCJoaWRlQWNjZXNzRm9ybSgpXCJcclxuICAgICAgICAgICAgKG5vdGlmeSk9XCJub3RpZnkoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICA8L2F1dGgtZm9ybT5cclxuICAgICAgICA8bm90aWZpY2F0aW9uIFtuZ0NsYXNzXT1cIntlcnJvcjogbm90aWZpY2F0aW9uLnR5cGUgPT0gJ2Vycm9yJywgc3VjY2Vzczogbm90aWZpY2F0aW9uLnR5cGUgPT0gJ3N1Y2Nlc3MnfVwiPjwvbm90aWZpY2F0aW9uPlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczogW10sXHJcbiAgICBkaXJlY3RpdmVzOiBbU3RvcnlDb21wb25lbnQsIE5vdGlmaWNhdGlvbkNvbXBvbmVudCwgU2lkZWJhckNvbXBvbmVudCwgQXV0aEZvcm1Db21wb25lbnQsIE5nQ2xhc3NdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcnlCb2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBAVmlld0NoaWxkKE5vdGlmaWNhdGlvbkNvbXBvbmVudCkgbm90aWZpY2F0aW9uQ29tcG9uZW50Ok5vdGlmaWNhdGlvbkNvbXBvbmVudDtcclxuICAgIHByaXZhdGUgdXNlcklkO1xyXG4gICAgcHVibGljIHRva2VuOnN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIG1lbnVWaXNpYmxlO1xyXG4gICAgcHVibGljIGFjY2Vzc0Zvcm1WaXNpYmxlO1xyXG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb247XHJcbiAgICBwcml2YXRlIGV4cG9zZWRTdG9yeUJsb2NrO1xyXG4gICAgcHJpdmF0ZSBzdG9yeUJsb2NrcyA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbG9nZ2VyOkxvZ2dlclNlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjpDb25maWd1cmF0aW9uLFxyXG4gICAgICAgIHByaXZhdGUgd2ViU3RvcmFnZVNlcnZpY2U6V2ViU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBzdG9yeUJsb2NrU2VydmljZTpTdG9yeUJsb2NrU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgIGF1dGhTZXJ2aWNlLmF1dGhTdGF0dXNDaGFuZ2UkLnN1YnNjcmliZShldmVudCA9PiB0aGlzLmF1dGhTdGF0dXNDaGFuZ2VkKGV2ZW50KSlcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOmFueSB7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSB0aGlzLmF1dGhVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5tZW51VmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWNjZXNzRm9ybVZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbiA9IHtcclxuICAgICAgICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFeHBvc2VkKGV2ZW50KXtcclxuICAgICAgICB0aGlzLmV4cG9zZWRTdG9yeUJsb2NrID0gZXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3RvcnlCbG9ja3MoZXZlbnQpe1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAndXBkYXRlU3RvcnlCbG9ja3MnLCAnU3RvcnlibG9ja3MgdXBkYXRlZDonLCAoZXZlbnQgfHwgW10pKTtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tzID0gZXZlbnQgfHwgW107XHJcbiAgICB9XHJcblxyXG4gICAgYXV0aFVzZXIoKXtcclxuICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0SWRGcm9tVG9rZW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgYW5vbnltb3VzVG9rZW4gPSB0aGlzLndlYlN0b3JhZ2VTZXJ2aWNlLmdldCgnYW5vbnltb3VzX3Rva2VuJyk7XHJcbiAgICAgICAgICAgIGlmICghYW5vbnltb3VzVG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIHZhciBhbm9ueW1vdXNUb2tlbiA9IHRoaXMuYXV0aFNlcnZpY2UuZ2VuZXJhdGVBbm9ueW1vdXNUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJTdG9yYWdlU2VydmljZS5wdXQoJ2Fub255bW91c190b2tlbicsIGFub255bW91c1Rva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRJZEZyb21Bbm9ueW1vdXNUb2tlbihhbm9ueW1vdXNUb2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFRva2VuKHZhbHVlOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy53ZWJTdG9yYWdlU2VydmljZS5wdXQoJ3Rva2VuJyx2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9rZW4oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy53ZWJTdG9yYWdlU2VydmljZS5nZXQoJ3Rva2VuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXV0aFN0YXR1c0NoYW5nZWQoZXZlbnQpe1xyXG4gICAgICAgIHRoaXMudXNlcklkID0gdGhpcy5hdXRoVXNlcigpO1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnYXV0aFN0YXR1c0NoYW5nZWQnLCB7IGV2ZW50IDogZXZlbnR9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93QWNjZXNzRm9ybSgpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZU1lbnUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnc2hvd0FjY2Vzc0Zvcm0nLCB0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKSk7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NGb3JtVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVBY2Nlc3NGb3JtKCkge1xyXG4gICAgICAgIHRoaXMuYWNjZXNzRm9ybVZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nT3V0KCl7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0xvZ2dlZEluKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeShub3RpZmljYXRpb24pe1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uID0ge1xyXG4gICAgICAgICAgICB0eXBlOiBub3RpZmljYXRpb24udHlwZSB8fCBudWxsLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBub3RpZmljYXRpb24ubWVzc2FnZSB8fCAnJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uQ29tcG9uZW50LnNob3cobm90aWZpY2F0aW9uLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvd25sb2FkUGRmKCl7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5kb3dubG9hZFBkZih0aGlzLnN0b3J5QmxvY2tzKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVNZW51KHZpc2liaWxpdHkpe1xyXG4gICAgICAgIHRoaXMubWVudVZpc2libGUgPSB2aXNpYmlsaXR5O1xyXG4gICAgICAgIGlmKHZpc2liaWxpdHkpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBOZXdzIHtcclxuICAgIGNyZWF0ZWRBdCA6IGFueTtcclxuICAgIHRpdGxlIDogc3RyaW5nO1xyXG4gICAgY29udGVudCA6IHN0cmluZztcclxufSIsImltcG9ydCB7SW5qZWN0YWJsZSB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cCB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zaGFyZSc7XHJcbmltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7TG9nZ2VyU2VydmljZSwgREVCVUdfTEVWRUx9IGZyb20gXCIuL2xvZ2dlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TmV3c30gZnJvbSBcIi4uL21vZGVscy9uZXdzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZXdzU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjpMb2dnZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGh0dHA6SHR0cCxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjpDb25maWd1cmF0aW9uKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmV3cygpOk9ic2VydmFibGU8TmV3c1tdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jb25maWd1cmF0aW9uLmFwaUJhc2VQYXRoICsgJy9uZXdzLycpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvckNhdGNoZXIoKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtTdG9yeUJvYXJkQ29tcG9uZW50fSBmcm9tIFwiLi9zdG9yeS1ib2FyZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtOZXdzU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL25ld3Muc2VydmljZVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtY29udGVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxzdG9yeS1ib2FyZD48L3N0b3J5LWJvYXJkPlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczogW05ld3NTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtTdG9yeUJvYXJkQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBuZXdzU2VydmljZTpOZXdzU2VydmljZVxyXG4gICAgKXtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKTphbnkge1xyXG4gICAgICAgIHRoaXMubmV3c1NlcnZpY2UuZ2V0TmV3cygpLnN1YnNjcmliZShkYXRhPT57Y29uc29sZS5sb2coZGF0YSl9KVxyXG4gICAgfVxyXG59XHJcbiIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cclxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xyXG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9ICAgIGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7RXhjZXB0aW9uSGFuZGxlciwgcHJvdmlkZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtXZWJTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvd2Vic3RvcmFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1NlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL3N0b3J5YmxvY2tzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBcHBDb250ZW50Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2FwcC1jb250ZW50LmNvbXBvbmVudFwiO1xyXG5cclxuYm9vdHN0cmFwKFxyXG4gICAgQXBwQ29udGVudENvbXBvbmVudCxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIEhUVFBfUFJPVklERVJTLCBcclxuICAgICAgICAgICAgQ29uZmlndXJhdGlvbiwgXHJcbiAgICAgICAgICAgIHByb3ZpZGUoRXhjZXB0aW9uSGFuZGxlciwgIHt1c2VDbGFzczogTG9nZ2VyU2VydmljZX0pLCBcclxuICAgICAgICAgICAgQXV0aFNlcnZpY2UsIFxyXG4gICAgICAgICAgICBMb2dnZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICBXZWJTdG9yYWdlU2VydmljZSxcclxuICAgICAgICAgICAgU3RvcnlCbG9ja1NlcnZpY2VcclxuICAgICAgICBdXHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
