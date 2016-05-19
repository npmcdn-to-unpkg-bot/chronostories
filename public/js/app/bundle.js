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
System.register("components/notification.component", ["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var NotificationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                    core_1.Component({
                        selector: 'notification',
                        template: "\n        <div>{{ _content\u00A0}}</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], NotificationComponent);
                return NotificationComponent;
            }());
            exports_1("NotificationComponent", NotificationComponent);
        }
    }
});
System.register("models/storyblock", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("mock/mock-storyblocks", [], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var STORYBLOCKS;
    return {
        setters:[],
        execute: function() {
            exports_3("STORYBLOCKS", STORYBLOCKS = [
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
System.register("models/storyblock-type", [], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("mock/mock-storyblock-types", [], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var STORYBLOCK_TYPES;
    return {
        setters:[],
        execute: function() {
            exports_5("STORYBLOCK_TYPES", STORYBLOCK_TYPES = [
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
System.register("services/logger.service", ["angular2/core", "config/configuration", "rxjs/Observable"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_2, configuration_1, Observable_1;
    var LoggerService, DEBUG_LEVEL;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
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
                    core_2.Injectable(),
                    __param(0, core_2.Inject(core_2.forwardRef(function () { return configuration_1.Configuration; }))), 
                    __metadata('design:paramtypes', [configuration_1.Configuration])
                ], LoggerService);
                return LoggerService;
            }());
            exports_6("LoggerService", LoggerService);
            exports_6("DEBUG_LEVEL", DEBUG_LEVEL = {
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
System.register("config/configuration", ["angular2/core", "services/logger.service"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_3, logger_service_1;
    var Configuration;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
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
                    this.apiBasePath = '';
                    this.debugLevel = logger_service_1.DEBUG_LEVEL.INFO;
                }
                Configuration = __decorate([
                    core_3.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Configuration);
                return Configuration;
            }());
            exports_7("Configuration", Configuration);
        }
    }
});
System.register("services/storyblocks.service", ["angular2/core", 'angular2/http', 'rxjs/Rx', "rxjs/Observable", 'rxjs/add/operator/share', "mock/mock-storyblocks", "mock/mock-storyblock-types", "config/configuration", "services/logger.service"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_4, http_1, Observable_2, mock_storyblocks_1, mock_storyblock_types_1, configuration_2, logger_service_2;
    var StoryBlockService;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
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
            function (configuration_2_1) {
                configuration_2 = configuration_2_1;
            },
            function (logger_service_2_1) {
                logger_service_2 = logger_service_2_1;
            }],
        execute: function() {
            StoryBlockService = (function () {
                function StoryBlockService(logger, http, configuration) {
                    var _this = this;
                    this.logger = logger;
                    this.http = http;
                    this.configuration = configuration;
                    this._exposedIndex = -1;
                    this.addRequest$ = new core_4.EventEmitter();
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
                    return this.http.get(this.configuration.apiBasePath + '/storyblocks/' + userId)
                        .map(function (res) { return res.json(); })
                        .catch(this.logger.errorCatcher());
                };
                StoryBlockService.prototype.saveStoryBlock = function (userId, storyBlock) {
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/x-www-form-urlencoded'
                    });
                    var options = new http_1.RequestOptions({
                        headers: headers
                    });
                    if (!!storyBlock._id) {
                        storyBlock.createdAt = storyBlock.createdAt || (new Date());
                        storyBlock.lastModifiedAt = (new Date());
                        return this.http.put(this.configuration.apiBasePath + '/storyblocks/' + userId + '/' + storyBlock._id, "data=" + JSON.stringify(storyBlock), options)
                            .map(function (res) { return res.json(); })
                            .catch(this.logger.errorCatcher());
                    }
                    else {
                        storyBlock.createdAt = (new Date());
                        storyBlock.lastModifiedAt = (new Date());
                        return this.http.post(this.configuration.apiBasePath + '/storyblocks/' + userId + '/', "data=" + JSON.stringify(storyBlock), options)
                            .map(function (res) { return res.json(); })
                            .catch(this.logger.errorCatcher());
                    }
                };
                StoryBlockService.prototype.deleteStoryBlock = function (userId, storyBlock) {
                    if (!!storyBlock._id) {
                        return this.http.delete(this.configuration.apiBasePath + '/storyblocks/' + userId + '/' + storyBlock._id)
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
                    this.logger.log(logger_service_2.DEBUG_LEVEL.INFO, 'generateTestData', 'Creating temporary data for ' + userId);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/x-www-form-urlencoded'
                    });
                    var options = new http_1.RequestOptions({
                        headers: headers
                    });
                    var blocks = mock_storyblocks_1.STORYBLOCKS;
                    for (var i = 0; i < blocks.length; i++) {
                        blocks[i].userId = userId;
                        blocks[i].createdAt = (new Date());
                        blocks[i].lastModifiedAt = (new Date());
                    }
                    return this.http.post(this.configuration.apiBasePath + '/storyblocks/' + userId + '/', "data=" + JSON.stringify(blocks), options)
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
                    core_4.Output(), 
                    __metadata('design:type', core_4.EventEmitter)
                ], StoryBlockService.prototype, "addRequest$", void 0);
                StoryBlockService = __decorate([
                    core_4.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_2.LoggerService, http_1.Http, configuration_2.Configuration])
                ], StoryBlockService);
                return StoryBlockService;
            }());
            exports_8("StoryBlockService", StoryBlockService);
        }
    }
});
System.register("services/utils.service", ["angular2/core"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_5;
    var UtilsService;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
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
                    core_5.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UtilsService);
                return UtilsService;
            }());
            exports_9("UtilsService", UtilsService);
        }
    }
});
System.register("models/user", [], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User() {
                }
                return User;
            }());
            exports_10("User", User);
        }
    }
});
System.register("models/jwtToken", [], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("services/webstorage.service", ["angular2/core"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_6;
    var WebStorageService;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
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
                    core_6.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], WebStorageService);
                return WebStorageService;
            }());
            exports_12("WebStorageService", WebStorageService);
        }
    }
});
System.register("services/auth.service", ["angular2/core", 'angular2/http', "services/webstorage.service", "config/configuration", "services/logger.service"], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var core_7, http_2, webstorage_service_1, configuration_3, logger_service_3;
    var AuthService;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (webstorage_service_1_1) {
                webstorage_service_1 = webstorage_service_1_1;
            },
            function (configuration_3_1) {
                configuration_3 = configuration_3_1;
            },
            function (logger_service_3_1) {
                logger_service_3 = logger_service_3_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(logger, http, webStorageService, configuration) {
                    this.logger = logger;
                    this.http = http;
                    this.webStorageService = webStorageService;
                    this.configuration = configuration;
                    this.authStatusChange$ = new core_7.EventEmitter();
                }
                AuthService.prototype.logout = function () {
                    this.webStorageService.remove(this.configuration.token.name);
                    this.authStatusChange$.emit('Logout');
                    return true;
                };
                AuthService.prototype.login = function (user) {
                    this.logger.log(logger_service_3.DEBUG_LEVEL.INFO, 'login', 'Creating temporary data');
                    var headers = new http_2.Headers({
                        'Content-Type': 'application/x-www-form-urlencoded'
                    });
                    var options = new http_2.RequestOptions({
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
                    this.logger.log(logger_service_3.DEBUG_LEVEL.INFO, 'register', 'Creating temporary data');
                    var headers = new http_2.Headers({
                        'Content-Type': 'application/x-www-form-urlencoded'
                    });
                    var options = new http_2.RequestOptions({
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
                    core_7.Output(), 
                    __metadata('design:type', core_7.EventEmitter)
                ], AuthService.prototype, "authStatusChange$", void 0);
                AuthService = __decorate([
                    core_7.Injectable(),
                    __param(0, core_7.Inject(core_7.forwardRef(function () { return logger_service_3.LoggerService; }))),
                    __param(1, core_7.Inject(core_7.forwardRef(function () { return http_2.Http; }))),
                    __param(2, core_7.Inject(core_7.forwardRef(function () { return webstorage_service_1.WebStorageService; }))),
                    __param(3, core_7.Inject(core_7.forwardRef(function () { return configuration_3.Configuration; }))), 
                    __metadata('design:paramtypes', [logger_service_3.LoggerService, http_2.Http, webstorage_service_1.WebStorageService, configuration_3.Configuration])
                ], AuthService);
                return AuthService;
            }());
            exports_13("AuthService", AuthService);
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
                            }, function (err) { return console.error(err); }, function () { return _this.logger.log(logger_service_9.DEBUG_LEVEL.INFO, 'getStoryBlocks', 'Loaded ' + _this.storyBlocks.length + ' blocks', _this.storyBlocks); });
                        }
                        else {
                            _this.recalculateStoryBlockNumbers();
                        }
                    }, function (err) { return console.error(err); }, function () {
                        _this.storyBlockList.emit(_this.storyBlocks);
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
System.register("components/app-content.component", ['angular2/core', 'angular2/common', "components/notification.component", "components/sidebar.component", "config/configuration", "services/auth.service", "services/webstorage.service", "components/auth-form.component", "services/logger.service", "components/story.component"], function(exports_27, context_27) {
    "use strict";
    var __moduleName = context_27 && context_27.id;
    var core_20, common_5, notification_component_1, sidebar_component_1, configuration_8, auth_service_4, webstorage_service_5, auth_form_component_1, logger_service_10, story_component_1;
    var AppComponent;
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
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(logger, configuration, webStorageService, authService) {
                    var _this = this;
                    this.logger = logger;
                    this.configuration = configuration;
                    this.webStorageService = webStorageService;
                    this.authService = authService;
                    this.token = '';
                    this.storyBlocks = [];
                    authService.authStatusChange$.subscribe(function (event) { return _this.authStatusChanged(event); });
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.userId = this.authUser();
                    this.menuVisible = false;
                    this.accessFormVisible = false;
                    this.notification = {
                        type: null,
                        message: '',
                    };
                };
                AppComponent.prototype.setExposed = function (event) {
                    this.exposedStoryBlock = event;
                };
                AppComponent.prototype.setStoryBlocks = function (event) {
                    this.storyBlocks = event || [];
                };
                AppComponent.prototype.authUser = function () {
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
                AppComponent.prototype.setToken = function (value) {
                    this.webStorageService.put('token', value);
                };
                AppComponent.prototype.getToken = function () {
                    return this.webStorageService.get('token');
                };
                AppComponent.prototype.authStatusChanged = function (event) {
                    this.userId = this.authUser();
                    this.logger.log(logger_service_10.DEBUG_LEVEL.INFO, 'authStatusChanged', { event: event });
                };
                AppComponent.prototype.showAccessForm = function () {
                    this.toggleMenu(false);
                    this.logger.log(logger_service_10.DEBUG_LEVEL.INFO, 'showAccessForm', this.authService.isLoggedIn());
                    this.accessFormVisible = true;
                    document.querySelector('body').classList.add('no-scroll');
                };
                AppComponent.prototype.hideAccessForm = function () {
                    this.accessFormVisible = false;
                    document.querySelector('body').classList.remove('no-scroll');
                };
                AppComponent.prototype.logOut = function () {
                    this.authService.logout();
                };
                AppComponent.prototype.isLoggedIn = function () {
                    return this.authService.isLoggedIn();
                };
                AppComponent.prototype.notify = function (notification) {
                    this.notification = {
                        type: notification.type || null,
                        message: notification.message || '',
                    };
                    this.notificationComponent.show(notification.message);
                };
                AppComponent.prototype.downloadPdf = function () {
                    // this.storyBlockService.downloadPdf(this.storyBlocks);
                };
                AppComponent.prototype.toggleMenu = function (visibility) {
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
                ], AppComponent.prototype, "notificationComponent", void 0);
                AppComponent = __decorate([
                    core_20.Component({
                        selector: 'app-content',
                        template: "\n        <story \n            [userId]=\"userId\"\n            (exposeStoryblock)=\"setExposed(event)\"\n            (notify)=\"notify($event)\"\n            (storyBlockList)=\"setStoryBlocks(event)\"\n        ></story>\n        <aside [ngClass]=\"{visible: menuVisible}\">\n            <sidebar\n            (startDragging)=\"toggleMenu(false)\"\n            (endDragging)=\"addStoryBlock($event)\"\n            [storyBlock]=\"exposedStoryBlock\" [storyBlocksLength]=\"storyBlocks.length\"></sidebar>\n            <a class=\"user-aside\" (click)=\"downloadPdf()\">Download PDF</a>\n            <a class=\"user-aside\" *ngIf=\"!isLoggedIn()\" (click)=\"showAccessForm()\">Login/Signup</a>\n            <a class=\"user-aside\" *ngIf=\"isLoggedIn()\" (click)=\"logOut()\">Logout</a>\n            <a id=\"close-menu\" (click)=\"toggleMenu(false)\"></a>\n        </aside>\n        <header><a id=\"burger\" (click)=\"toggleMenu(true)\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a></header>\n        <auth-form \n            *ngIf=\"accessFormVisible\" \n            (closeModal)=\"hideAccessForm()\"\n            (notify)=\"notify($event)\"\n            >\n        </auth-form>\n        <notification [ngClass]=\"{error: notification.type == 'error', success: notification.type == 'success'}\"></notification>\n    ",
                        providers: [],
                        directives: [story_component_1.StoryComponent, notification_component_1.NotificationComponent, sidebar_component_1.SidebarComponent, auth_form_component_1.AuthFormComponent, common_5.NgClass]
                    }), 
                    __metadata('design:paramtypes', [logger_service_10.LoggerService, configuration_8.Configuration, webstorage_service_5.WebStorageService, auth_service_4.AuthService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_27("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "components/app-content.component", 'angular2/http', "config/configuration", "angular2/core", "services/logger.service", "services/auth.service", "services/webstorage.service", "services/storyblocks.service"], function(exports_28, context_28) {
    "use strict";
    var __moduleName = context_28 && context_28.id;
    var browser_1, app_content_component_1, http_3, configuration_9, core_21, logger_service_11, auth_service_5, webstorage_service_6, storyblocks_service_4;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_content_component_1_1) {
                app_content_component_1 = app_content_component_1_1;
            },
            function (http_3_1) {
                http_3 = http_3_1;
            },
            function (configuration_9_1) {
                configuration_9 = configuration_9_1;
            },
            function (core_21_1) {
                core_21 = core_21_1;
            },
            function (logger_service_11_1) {
                logger_service_11 = logger_service_11_1;
            },
            function (auth_service_5_1) {
                auth_service_5 = auth_service_5_1;
            },
            function (webstorage_service_6_1) {
                webstorage_service_6 = webstorage_service_6_1;
            },
            function (storyblocks_service_4_1) {
                storyblocks_service_4 = storyblocks_service_4_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_content_component_1.AppComponent, [
                http_3.HTTP_PROVIDERS,
                configuration_9.Configuration,
                core_21.provide(core_21.ExceptionHandler, { useClass: logger_service_11.LoggerService }),
                auth_service_5.AuthService,
                logger_service_11.LoggerService,
                webstorage_service_6.WebStorageService,
                storyblocks_service_4.StoryBlockService
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbm90aWZpY2F0aW9uLmNvbXBvbmVudC50cyIsIm1vY2svbW9jay1zdG9yeWJsb2Nrcy50cyIsIm1vY2svbW9jay1zdG9yeWJsb2NrLXR5cGVzLnRzIiwic2VydmljZXMvbG9nZ2VyLnNlcnZpY2UudHMiLCJjb25maWcvY29uZmlndXJhdGlvbi50cyIsInNlcnZpY2VzL3N0b3J5YmxvY2tzLnNlcnZpY2UudHMiLCJzZXJ2aWNlcy91dGlscy5zZXJ2aWNlLnRzIiwibW9kZWxzL3VzZXIudHMiLCJzZXJ2aWNlcy93ZWJzdG9yYWdlLnNlcnZpY2UudHMiLCJzZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiLCJzZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UudHMiLCJjb21wb25lbnRzL2xvZy1tZXNzYWdlLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvZGVidWctY29uc29sZS5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3NpZGViYXIuY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9zaWduaW4tZm9ybS5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3NpZ251cC1mb3JtLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvYXV0aC1mb3JtLmNvbXBvbmVudC50cyIsImRpcmVjdGl2ZXMvY29sbGFwc2UuZGlyZWN0aXZlLnRzIiwiZGlyZWN0aXZlcy9kaXNhcHBlYXIuZGlyZWN0aXZlLnRzIiwiY29tcG9uZW50cy9zdG9yeWJsb2NrLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvdGltZWxpbmUuY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9hZGQtYnV0dG9uLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvc3RvcnkuY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9hcHAtY29udGVudC5jb21wb25lbnQudHMiLCJib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBSUksK0JBQW9CLEVB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RCxTQUFTLEVBQUUsRUFBRTt3QkFDYixVQUFVLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLDhDQUFxQixFQUFFLG9DQUFnQixFQUFFLHVDQUFpQixFQUFFLGdCQUFPLENBQUM7cUJBQ3BHLENBQUM7O2dDQUFBO2dCQTBHRixtQkFBQztZQUFELENBeEdBLEFBd0dDLElBQUE7WUF4R0Qsd0NBd0dDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDeklELG1CQUFTLENBQ0wsb0NBQVksRUFDUjtnQkFDSSxxQkFBYztnQkFDZCw2QkFBYTtnQkFDYixlQUFPLENBQUMsd0JBQWdCLEVBQUcsRUFBQyxRQUFRLEVBQUUsK0JBQWEsRUFBQyxDQUFDO2dCQUNyRCwwQkFBVztnQkFDWCwrQkFBYTtnQkFDYixzQ0FBaUI7Z0JBQ2pCLHVDQUFpQjthQUNwQixDQUNSLENBQUMiLCJmaWxlIjoiLi4vLi4vLi4vY2hyb25vc3Rvcmllcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J25vdGlmaWNhdGlvbicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXY+e3sgX2NvbnRlbnTCoH19PC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfdGltZXI7XHJcbiAgICBwcml2YXRlIF9jb250ZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2U6RWxlbWVudFJlZil7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3coY29udGVudCl7XHJcbiAgICAgICAgaWYoISF0aGlzLl90aW1lcil7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMuX2UubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fZS5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1N0b3J5QmxvY2t9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9ja1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNUT1JZQkxPQ0tTOlN0b3J5QmxvY2tbXSA9IDxTdG9yeUJsb2NrW10+W1xyXG4gICAge1xyXG4gICAgICAgIGJsb2NrSWQ6IDEsXHJcbiAgICAgICAgdGl0bGU6ICdQcmVmYWNlJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1lvdSBuZWVkIHRvIHN0YXJ0IHNvbWV3aGVyZScsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOjEsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogLTEsXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6MCxcclxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBibG9ja0lkOiAyLFxyXG4gICAgICAgIHRpdGxlOiAnSW50cm9kdWN0aW9uJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1doZXJlIHlvdXIgY2hhcmFjdGVycyBiZWNhbWUgcmVhbCcsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiAyLFxyXG4gICAgICAgIGltcG9ydGFuY2U6IDEsXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6MSxcclxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBibG9ja0lkOiAzLFxyXG4gICAgICAgIHRpdGxlOiAnRXZvbHV0aW9uJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaW5ncyBnZXRzIHRyaWNraWVyJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDMsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogMixcclxuICAgICAgICBibG9ja051bWJlcjoyLFxyXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGJsb2NrSWQ6IDQsXHJcbiAgICAgICAgdGl0bGU6ICdUb3BpYyBtb21lbnQnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnV29haCEnLFxyXG4gICAgICAgIHRpbWVQb3NpdGlvbjogNCxcclxuICAgICAgICBpbXBvcnRhbmNlOiAxLFxyXG4gICAgICAgIGJsb2NrTnVtYmVyOjMsXHJcbiAgICAgICAgdHlwZTonY2hhcHRlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgYmxvY2tJZDogNSxcclxuICAgICAgICB0aXRsZTogJ0VwaWxvZ3VlJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0JlY2F1c2UgZXZlbiB0aGUgYmVzdCB0aGluZ3MgZW5kJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDUsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogLTEsXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6NCxcclxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xyXG4gICAgfVxyXG5dOyIsImltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1R5cGV9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9jay10eXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU1RPUllCTE9DS19UWVBFUzpTdG9yeUJsb2NrVHlwZVtdID0gPFN0b3J5QmxvY2tUeXBlW10+W1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAnY2hhcHRlcicsXHJcbiAgICAgICAgbmFtZTogJ0NoYXB0ZXInLFxyXG4gICAgICAgIGxldmVsOiAwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAncGFyYWdyYXBoJyxcclxuICAgICAgICBuYW1lOiAnUGFyYWdyYXBoJyxcclxuICAgICAgICBsZXZlbDogMVxyXG4gICAgfSxcclxuXTsiLCJpbXBvcnQge0luamVjdGFibGUsIGZvcndhcmRSZWYsIEluamVjdCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHtPYnNlcnZlcn0gZnJvbSBcInJ4anMvT2JzZXJ2ZXJcIjtcclxuXHJcbmRlY2xhcmUgdmFyIG1vbWVudDphbnk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2dnZXJTZXJ2aWNlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgZGVidWdMZXZlbDtcclxuICAgIHByaXZhdGUgbG9nU3RyZWFtJDpPYnNlcnZlcjxPYmplY3Q+O1xyXG4gICAgcHVibGljIGxvZyQ6T2JzZXJ2YWJsZTxPYmplY3Q+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBDb25maWd1cmF0aW9uKSkgcHJpdmF0ZSBjb25maWd1cmF0aW9uOkNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB0aGlzLnNldERlYnVnTGV2ZWwoY29uZmlndXJhdGlvbi5kZWJ1Z0xldmVsIHx8IERFQlVHX0xFVkVMLkVSUk9SKTtcclxuXHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICB3aW5kb3cub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvck1zZywgdXJsLCBsaW5lTnVtYmVyLCBjb2x1bW4sIGVycm9yT2JqKSB7XHJcbiAgICAgICAgICAgIHRoYXQubG9nKERFQlVHX0xFVkVMLkVSUk9SLCAnb25lcnJvcicsIGVycm9yTXNnLCB1cmwsIGxpbmVOdW1iZXIsIGNvbHVtbiwgZXJyb3JPYmopO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHtcclxuICAgIH1cclxuXHJcbiAgICBzZXREZWJ1Z0xldmVsKGRlYnVnTGV2ZWwpIHtcclxuICAgICAgICB0aGlzLmRlYnVnTGV2ZWwgPSBkZWJ1Z0xldmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2cobGV2ZWwsIGZ1bmN0aW9uTmFtZSwgdGV4dCwgLi4uYXJnczphbnlbXSkge1xyXG4gICAgICAgIGlmICghbGV2ZWwgfHwgKGxldmVsLnZhbHVlID09PSB1bmRlZmluZWQpIHx8ICFsZXZlbC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGxldmVsID0gREVCVUdfTEVWRUwuSU5GTztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldmVsLnZhbHVlID49IHRoaXMuZGVidWdMZXZlbC52YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZTphbnkgPSAnWycgKyBtb21lbnQoKS5mb3JtYXQoXCJERC9NTS9ZWSAtIEhIOm1tOnNzLlNTU1wiKSArICddWycgKyBsZXZlbC5uYW1lICsgJ11bJyArIGZ1bmN0aW9uTmFtZSArICddICcgKyAodGV4dCB8fCAnJyk7XHJcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmNhbGwoYXJncywgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGlmIChsZXZlbC52YWx1ZSA9PT0gREVCVUdfTEVWRUwuRVJST1IudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcuYXBwbHkoY29uc29sZSwgYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobGV2ZWwudmFsdWUgPT09IERFQlVHX0xFVkVMLldBUk4udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybi5hcHBseShjb25zb2xlLCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghIXRoaXMubG9nJCAmJiB0aGlzLmxvZ1N0cmVhbSQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBsb2dNZXNzYWdlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IG1vbWVudCgpLmZvcm1hdChcIkREL01NL1lZIC0gSEg6bW06c3MuU1NTXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsOiBsZXZlbC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogZnVuY3Rpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogYXJncyxcclxuICAgICAgICAgICAgICAgICAgICBwcmV0dHk6JydcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBsb2dNZXNzYWdlLnByZXR0eSA9IEpTT04uc3RyaW5naWZ5KGxvZ01lc3NhZ2UsIG51bGwsIDIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubG9nU3RyZWFtJC5uZXh0KGxvZ01lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldExvZ1N0cmVhbSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubG9nJCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZyQgPSBuZXcgT2JzZXJ2YWJsZTxPYmplY3Q+KG9ic2VydmVyID0+IHRoaXMubG9nU3RyZWFtJCA9IG9ic2VydmVyKS5zaGFyZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2ckO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGwoZXhjZXB0aW9uOmFueSwgc3RhY2tUcmFjZT86YW55LCByZWFzb24/OnN0cmluZyk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2coREVCVUdfTEVWRUwuRVJST1IsICdhbmd1bGFyJywgJycsIGV4Y2VwdGlvbiwgcmVhc29uKTtcclxuICAgIH1cclxuXHJcbiAgICBlcnJvckNhdGNoZXIoKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXJyOmFueSwgc291cmNlOk9ic2VydmFibGU8YW55PiwgY2F1Z2h0Ok9ic2VydmFibGU8YW55Pik6T2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICAgICAgdGhhdC5sb2coREVCVUdfTEVWRUwuRVJST1IsICdlcnJvckNhdGNoZXInLCBlcnIubWVzc2FnZSwgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBERUJVR19MRVZFTCA9IHtcclxuICAgIFZFUkJPU0U6IHtcclxuICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgICBuYW1lOiAnTG9nJ1xyXG4gICAgfSxcclxuICAgIElORk86IHtcclxuICAgICAgICB2YWx1ZTogMSxcclxuICAgICAgICBuYW1lOiAnSW5mbydcclxuICAgIH0sXHJcbiAgICBXQVJOOiB7XHJcbiAgICAgICAgdmFsdWU6IDIsXHJcbiAgICAgICAgbmFtZTogJ1dhcm4nXHJcbiAgICB9LFxyXG4gICAgRVJST1I6IHtcclxuICAgICAgICB2YWx1ZTogMyxcclxuICAgICAgICBuYW1lOiAnRXJyb3InXHJcbiAgICB9LFxyXG4gICAgTk9ORToge1xyXG4gICAgICAgIHZhbHVlOiA0LFxyXG4gICAgICAgIG5hbWU6ICcnXHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2UsIERFQlVHX0xFVkVMfSBmcm9tIFwiLi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xyXG4gICAgcHVibGljIHpvb20gPSB7XHJcbiAgICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICAgIHN0ZXA6IDE1MCxcclxuICAgICAgICBzdHJlbmd0aDogMC42XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyB0b2tlbiA9IHtcclxuICAgICAgICBuYW1lOiAndG9rZW4nLFxyXG4gICAgICAgIGV4cGlyYXRpb246ICgzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDApXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHB1YmxpYyBhcGlCYXNlUGF0aCA9ICdodHRwczovL2FhMjAxNi1jaHJvbm9zdG9yaWVzLmhlcm9rdWFwcC5jb20nO1xyXG4gICAgcHVibGljIGFwaUJhc2VQYXRoID0gJyc7XHJcbiAgICBcclxuICAgIHB1YmxpYyBkZWJ1Z0xldmVsID0gREVCVUdfTEVWRUwuSU5GTztcclxufSIsImltcG9ydCB7SW5qZWN0YWJsZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQge1N0b3J5QmxvY2t9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9ja1wiO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zaGFyZSc7XHJcbmltcG9ydCB7T2JzZXJ2ZXJ9IGZyb20gJ3J4anMvT2JzZXJ2ZXInO1xyXG5pbXBvcnQge1NUT1JZQkxPQ0tTfSBmcm9tIFwiLi4vbW9jay9tb2NrLXN0b3J5YmxvY2tzXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1R5cGV9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9jay10eXBlXCI7XHJcbmltcG9ydCB7U1RPUllCTE9DS19UWVBFU30gZnJvbSBcIi4uL21vY2svbW9jay1zdG9yeWJsb2NrLXR5cGVzXCI7XHJcbmltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7TG9nZ2VyU2VydmljZSwgREVCVUdfTEVWRUx9IGZyb20gXCIuL2xvZ2dlci5zZXJ2aWNlXCI7XHJcblxyXG5kZWNsYXJlIHZhciBwZGZNYWtlOmFueTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0b3J5QmxvY2tTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX2V4cG9zZWRJbmRleCA9IC0xO1xyXG4gICAgaW5kZXhDaGFuZ2UkOk9ic2VydmFibGU8bnVtYmVyPjtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgYWRkUmVxdWVzdCQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBwcml2YXRlIF9vYnNlcnZlcjpPYnNlcnZlcjxudW1iZXI+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOkxvZ2dlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgaHR0cDpIdHRwLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOkNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB0aGlzLmluZGV4Q2hhbmdlJCA9IG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHRoaXMuX29ic2VydmVyID0gb2JzZXJ2ZXIpLnNoYXJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlRXhwb3NlZEluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3NlZEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RXhwb3NlZEluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHBvc2VkSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RvcnlCbG9ja3ModXNlcklkKTpPYnNlcnZhYmxlPFN0b3J5QmxvY2tbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvc3RvcnlibG9ja3MvJyArIHVzZXJJZClcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nZ2VyLmVycm9yQ2F0Y2hlcigpKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlU3RvcnlCbG9jayh1c2VySWQsIHN0b3J5QmxvY2s6U3RvcnlCbG9jayk6T2JzZXJ2YWJsZTxTdG9yeUJsb2NrPiB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCEhc3RvcnlCbG9jay5faWQpIHtcclxuICAgICAgICAgICAgc3RvcnlCbG9jay5jcmVhdGVkQXQgPSBzdG9yeUJsb2NrLmNyZWF0ZWRBdCB8fCAobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIHN0b3J5QmxvY2subGFzdE1vZGlmaWVkQXQgPSAobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvc3RvcnlibG9ja3MvJyArIHVzZXJJZCArICcvJyArIHN0b3J5QmxvY2suX2lkLCBcImRhdGE9XCIgKyBKU09OLnN0cmluZ2lmeShzdG9yeUJsb2NrKSwgb3B0aW9ucylcclxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dnZXIuZXJyb3JDYXRjaGVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3RvcnlCbG9jay5jcmVhdGVkQXQgPSAobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIHN0b3J5QmxvY2subGFzdE1vZGlmaWVkQXQgPSAobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpQmFzZVBhdGggKyAnL3N0b3J5YmxvY2tzLycgKyB1c2VySWQgKyAnLycsIFwiZGF0YT1cIiArIEpTT04uc3RyaW5naWZ5KHN0b3J5QmxvY2spLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvckNhdGNoZXIoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVN0b3J5QmxvY2sodXNlcklkLCBzdG9yeUJsb2NrOlN0b3J5QmxvY2spOk9ic2VydmFibGU8U3RvcnlCbG9ja1tdPiB7XHJcbiAgICAgICAgaWYgKCEhc3RvcnlCbG9jay5faWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5jb25maWd1cmF0aW9uLmFwaUJhc2VQYXRoICsgJy9zdG9yeWJsb2Nrcy8nICsgdXNlcklkICsgJy8nICsgc3RvcnlCbG9jay5faWQpXHJcbiAgICAgICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nZ2VyLmVycm9yQ2F0Y2hlcigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RvcnlCbG9ja1R5cGVzKCk6U3RvcnlCbG9ja1R5cGVbXSB7XHJcbiAgICAgICAgcmV0dXJuIFNUT1JZQkxPQ0tfVFlQRVM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RvcnlCbG9ja0RlZmF1bHRUeXBlcygpOlN0b3J5QmxvY2tUeXBlW10ge1xyXG4gICAgICAgIHJldHVybiBTVE9SWUJMT0NLX1RZUEVTO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlVGVzdERhdGEodXNlcklkKTpPYnNlcnZhYmxlPFN0b3J5QmxvY2tbXT4ge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnZ2VuZXJhdGVUZXN0RGF0YScsICdDcmVhdGluZyB0ZW1wb3JhcnkgZGF0YSBmb3IgJyArIHVzZXJJZCk7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIGJsb2NrczpTdG9yeUJsb2NrW10gPSBTVE9SWUJMT0NLUztcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYmxvY2tzW2ldLnVzZXJJZCA9IHVzZXJJZDtcclxuICAgICAgICAgICAgYmxvY2tzW2ldLmNyZWF0ZWRBdCA9IChuZXcgRGF0ZSgpKTtcclxuICAgICAgICAgICAgYmxvY2tzW2ldLmxhc3RNb2RpZmllZEF0ID0gKG5ldyBEYXRlKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvc3RvcnlibG9ja3MvJyArIHVzZXJJZCArICcvJywgXCJkYXRhPVwiICsgSlNPTi5zdHJpbmdpZnkoYmxvY2tzKSwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nZ2VyLmVycm9yQ2F0Y2hlcigpKTtcclxuICAgIH1cclxuXHJcbiAgICBkb3dubG9hZFBkZihzdG9yeUJsb2NrczpTdG9yeUJsb2NrW10pIHtcclxuICAgICAgICBmdW5jdGlvbiBjb21wYXJlKGE6U3RvcnlCbG9jaywgYjpTdG9yeUJsb2NrKSB7XHJcbiAgICAgICAgICAgIGlmIChhLnRpbWVQb3NpdGlvbiA8IGIudGltZVBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChhLnRpbWVQb3NpdGlvbiA+IGIudGltZVBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RvcnlCbG9ja3Muc29ydChjb21wYXJlKTtcclxuXHJcblxyXG4gICAgICAgIHZhciBkb2NEZWZpbml0aW9uID0ge1xyXG4gICAgICAgICAgICBjb250ZW50OiBbXSxcclxuXHJcbiAgICAgICAgICAgIHN0eWxlczoge1xyXG4gICAgICAgICAgICAgICAgY2hhcHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMixcclxuICAgICAgICAgICAgICAgICAgICBib2xkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogWzAsIDE2LCAwLCA4XVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhcmFncmFwaDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICAgICAgICBib2xkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogWzAsIDAsIDAsIDEyXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkb2NEZWZpbml0aW9uLmNvbnRlbnQucHVzaChcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBzdG9yeUJsb2Nrc1tpXS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogc3RvcnlCbG9ja3NbaV0udHlwZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZG9jRGVmaW5pdGlvbi5jb250ZW50LnB1c2goXHJcbiAgICAgICAgICAgICAgICBzdG9yeUJsb2Nrc1tpXS5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGRmTWFrZS5jcmVhdGVQZGYoZG9jRGVmaW5pdGlvbikuZG93bmxvYWQoKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXRpbHNTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBFTUFJTF9SRUdFWCA9ICdeWy1hLXowLTl+ISQlXiYqXz0rfXtcXCc/XSsoXFwuWy1hLXowLTl+ISQlXiYqXz0rfXtcXCc/XSspKkAoW2EtejAtOV9dWy1hLXowLTlfXSooXFwuWy1hLXowLTlfXSspKlxcLihhZXJvfGFycGF8Yml6fGNvbXxjb29wfGVkdXxnb3Z8aW5mb3xpbnR8bWlsfG11c2V1bXxuYW1lfG5ldHxvcmd8cHJvfHRyYXZlbHxtb2JpfFthLXpdW2Etel0pfChbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9KSkoOlswLTldezEsNX0pPyQnO1xyXG5cclxuXHJcbiAgICBnZXRSb21hbk51bWVyYWwobnVtKTpzdHJpbmcge1xyXG4gICAgICAgIGlmICghK251bSlcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIHZhciBkaWdpdHMgPSBTdHJpbmcoK251bSkuc3BsaXQoXCJcIiksXHJcbiAgICAgICAgICAgIGtleSA9IFtcIlwiLCBcIkNcIiwgXCJDQ1wiLCBcIkNDQ1wiLCBcIkNEXCIsIFwiRFwiLCBcIkRDXCIsIFwiRENDXCIsIFwiRENDQ1wiLCBcIkNNXCIsXHJcbiAgICAgICAgICAgICAgICBcIlwiLCBcIlhcIiwgXCJYWFwiLCBcIlhYWFwiLCBcIlhMXCIsIFwiTFwiLCBcIkxYXCIsIFwiTFhYXCIsIFwiTFhYWFwiLCBcIlhDXCIsXHJcbiAgICAgICAgICAgICAgICBcIlwiLCBcIklcIiwgXCJJSVwiLCBcIklJSVwiLCBcIklWXCIsIFwiVlwiLCBcIlZJXCIsIFwiVklJXCIsIFwiVklJSVwiLCBcIklYXCJdLFxyXG4gICAgICAgICAgICByb21hbiA9IFwiXCIsXHJcbiAgICAgICAgICAgIGkgPSAzO1xyXG4gICAgICAgIHdoaWxlIChpLS0pXHJcbiAgICAgICAgICAgIHJvbWFuID0gKGtleVsrZGlnaXRzLnBvcCgpICsgKGkgKiAxMCldIHx8IFwiXCIpICsgcm9tYW47XHJcbiAgICAgICAgcmV0dXJuIEFycmF5KCtkaWdpdHMuam9pbihcIlwiKSArIDEpLmpvaW4oXCJNXCIpICsgcm9tYW47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SHVtYW5EYXRlKGQpOnN0cmluZ3tcclxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGQpO1xyXG4gICAgICAgIHJldHVybiAoZGF0ZS5nZXRNb250aCgpICsgJy8nICsgZGF0ZS5nZXREYXRlKCkgKyAnLycgKyAgZGF0ZS5nZXRGdWxsWWVhcigpICsgJyBhdCAnICsgZGF0ZS5nZXRIb3VycygpICsgJzonICsgZGF0ZS5nZXRNaW51dGVzKCkpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gICAgbmFtZSA6IHN0cmluZztcclxuICAgIGVtYWlsIDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQgOiBzdHJpbmc7XHJcbn0iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXZWJTdG9yYWdlU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHN0b3JhZ2VTdXBwb3J0ZWQgPSAodHlwZW9mKFN0b3JhZ2UpICE9PSBcInVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdXQoa2V5LCB2YWx1ZSk6dm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RvcmFnZVN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICBpZiAoISF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXRJbkxvY2FsU3RvcmFnZShrZXksIHZhbHVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tTG9jYWxTdG9yYWdlKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1dEluQ29va2llcyhrZXksIHZhbHVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tQ29va2llcyhrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldChrZXkpOmFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RvcmFnZVN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGcm9tTG9jYWxTdG9yYWdlKGtleSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEZyb21Db29raWUoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGtleSk6dm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RvcmFnZVN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tQ29va2llcyhrZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHB1dEluTG9jYWxTdG9yYWdlKGtleSwgdmFsdWUpOnZvaWQge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZW5jb2RlVVJJKHZhbHVlKSB8fCBcIlwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRGcm9tTG9jYWxTdG9yYWdlKGtleSk6YW55IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUkkobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgfHwgXCJ7fVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KTp2b2lkIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHV0SW5Db29raWVzKGtleSwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgKDMwICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xyXG4gICAgICAgIHZhciBleHBpcmVzID0gZC50b1VUQ1N0cmluZygpO1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSArPSBrZXkgKyAnPScgKyBKU09OLnN0cmluZ2lmeShlbmNvZGVVUkkodmFsdWUpIHx8IFwiXCIpICsgXCI7cGF0aD0vO2V4cGlyZXM9XCIgKyBleHBpcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RnJvbUNvb2tpZShrZXkpOmFueSB7XHJcbiAgICAgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnKD86Xnw7KVxcXFxzPycgKyBrZXkgKyAnPSguKj8pKD86O3wkKScsICdpJyk7XHJcbiAgICAgICAgdmFyIG10YyA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChyZWdleCkgfHwgW107XHJcbiAgICAgICAgaWYgKG10Yy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZVVSSShtdGNbMV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZUZyb21Db29raWVzKGtleSk6dm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0ga2V5ICsgXCI9O3BhdGg9LztleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UXCI7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0luamVjdGFibGUsIGZvcndhcmRSZWYsIEluamVjdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQge0p3dFRva2VufSBmcm9tIFwiLi4vbW9kZWxzL2p3dFRva2VuXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9tb2RlbHMvdXNlclwiO1xyXG5pbXBvcnQge1dlYlN0b3JhZ2VTZXJ2aWNlfSBmcm9tIFwiLi93ZWJzdG9yYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlLCBERUJVR19MRVZFTH0gZnJvbSBcIi4vbG9nZ2VyLnNlcnZpY2VcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGF1dGhTdGF0dXNDaGFuZ2UkOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBMb2dnZXJTZXJ2aWNlKSkgcHJpdmF0ZSBsb2dnZXI6TG9nZ2VyU2VydmljZSxcclxuICAgICAgICAgICAgICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBIdHRwKSkgcHVibGljIGh0dHA6SHR0cCxcclxuICAgICAgICAgICAgICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBXZWJTdG9yYWdlU2VydmljZSkpIHByaXZhdGUgd2ViU3RvcmFnZVNlcnZpY2U6V2ViU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gQ29uZmlndXJhdGlvbikpIHByaXZhdGUgY29uZmlndXJhdGlvbjpDb25maWd1cmF0aW9uKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCk6Ym9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy53ZWJTdG9yYWdlU2VydmljZS5yZW1vdmUodGhpcy5jb25maWd1cmF0aW9uLnRva2VuLm5hbWUpO1xyXG4gICAgICAgIHRoaXMuYXV0aFN0YXR1c0NoYW5nZSQuZW1pdCgnTG9nb3V0Jyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4odXNlcjpVc2VyKTpPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnbG9naW4nLCAnQ3JlYXRpbmcgdGVtcG9yYXJ5IGRhdGEnKTtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5jb25maWd1cmF0aW9uLmFwaUJhc2VQYXRoICsgJy9hdXRoL2xvZ2luJyxcclxuICAgICAgICAgICAgICAgIFwibmFtZT1cIiArIHVzZXIubmFtZSArIFwiJlwiICtcclxuICAgICAgICAgICAgICAgIFwiZW1haWw9XCIgKyB1c2VyLmVtYWlsICsgXCImXCIgK1xyXG4gICAgICAgICAgICAgICAgXCJwYXNzd29yZD1cIiArIHVzZXIucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IFxyXG4gICAgICAgICAgICAgICAgcmVzLnRleHQoKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvckNhdGNoZXIoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIodXNlcjpVc2VyKTpPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAncmVnaXN0ZXInLCAnQ3JlYXRpbmcgdGVtcG9yYXJ5IGRhdGEnKTtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpQmFzZVBhdGggKyAnL2F1dGgvcmVnaXN0ZXInLFxyXG4gICAgICAgICAgICAgICAgXCJlbWFpbD1cIiArIHVzZXIuZW1haWwgKyBcIiZcIiArXHJcbiAgICAgICAgICAgICAgICBcInBhc3N3b3JkPVwiICsgdXNlci5wYXNzd29yZCxcclxuICAgICAgICAgICAgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gXHJcbiAgICAgICAgICAgICAgICByZXMudGV4dCgpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nZ2VyLmVycm9yQ2F0Y2hlcigpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaXNMb2dnZWRJbigpOmJvb2xlYW4ge1xyXG4gICAgICAgIHZhciB0b2tlbkRhdGFTcGxpdCA9ICh0aGlzLndlYlN0b3JhZ2VTZXJ2aWNlLmdldCh0aGlzLmNvbmZpZ3VyYXRpb24udG9rZW4ubmFtZSkgfHwgJycpLnNwbGl0KCcuJylbMV07XHJcbiAgICAgICAgaWYgKCF0b2tlbkRhdGFTcGxpdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0b2tlbkRhdGFSYXcgPSBhdG9iKHRva2VuRGF0YVNwbGl0KTtcclxuXHJcbiAgICAgICAgdmFyIHRva2VuRGF0YSA9IEpTT04ucGFyc2UodG9rZW5EYXRhUmF3KSBhcyBKd3RUb2tlbjtcclxuICAgICAgICByZXR1cm4gKHRva2VuRGF0YS5leHAgfHwgMCkgPiBEYXRlLm5vdygpIC8gMTAwMDtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGdldElkRnJvbVRva2VuKCkge1xyXG4gICAgICAgIHZhciB0b2tlbkRhdGFTcGxpdCA9ICh0aGlzLndlYlN0b3JhZ2VTZXJ2aWNlLmdldCh0aGlzLmNvbmZpZ3VyYXRpb24udG9rZW4ubmFtZSkgfHwgJycpLnNwbGl0KCcuJylbMV07XHJcbiAgICAgICAgaWYgKCF0b2tlbkRhdGFTcGxpdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0b2tlbkRhdGFSYXcgPSBhdG9iKHRva2VuRGF0YVNwbGl0KTtcclxuXHJcbiAgICAgICAgdmFyIHRva2VuRGF0YSA9IEpTT04ucGFyc2UodG9rZW5EYXRhUmF3KSBhcyBKd3RUb2tlbjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRva2VuRGF0YS5faWRcclxuICAgIH1cclxuXHJcbiAgICBnZXRJZEZyb21Bbm9ueW1vdXNUb2tlbih0b2tlbkRhdGFTdHJpbmcpIHtcclxuICAgICAgICB2YXIgdG9rZW5EYXRhUmF3ID0gYXRvYih0b2tlbkRhdGFTdHJpbmcpO1xyXG5cclxuICAgICAgICB2YXIgdG9rZW5EYXRhID0gSlNPTi5wYXJzZSh0b2tlbkRhdGFSYXcpIGFzIEp3dFRva2VuO1xyXG4gICAgICAgIHJldHVybiB0b2tlbkRhdGEuX2lkXHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVBbm9ueW1vdXNUb2tlbigpOmFueSB7XHJcbiAgICAgICAgdmFyIGFub255bW91c1Rva2VuID0ge1xyXG4gICAgICAgICAgICBfaWQ6IHRoaXMuZ2VuZXJhdGVVbmlxdWVJZCgpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJ0b2EoSlNPTi5zdHJpbmdpZnkoYW5vbnltb3VzVG9rZW4pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdlbmVyYXRlVW5pcXVlSWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcclxuICAgICAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufSIsImltcG9ydCB7Q29udHJvbCwgQ29udHJvbEdyb3VwfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XHJcblxyXG4vKlxyXG4gQ3VzdG9tIHZhbGlkYXRvcnMgdG8gdXNlIGV2ZXJ5d2hlcmUuXHJcbiAqL1xyXG5cclxuLy8gU0lOR0xFIEZJRUxEIFZBTElEQVRPUlNcclxuZXhwb3J0IGZ1bmN0aW9uIGVtYWlsVmFsaWRhdG9yKGNvbnRyb2w6IENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XHJcbiAgICB2YXIgZW1haWxSZWdleHAgPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKiQvaTtcclxuICAgIGlmIChjb250cm9sLnZhbHVlICYmIGNvbnRyb2wudmFsdWUubGVuZ3RoIDwgNiAmJiAhZW1haWxSZWdleHAudGVzdChjb250cm9sLnZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiB7aW52YWxpZEVtYWlsOiB0cnVlfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVtYWlsUmVnZXhwID0gJ15bYS16MC05ISMkJSZcXCcqK1xcXFwvPT9eX2B7fH1+Li1dK0BbYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSokJztcclxuXHJcbi8vQ09OVFJPTCBHUk9VUCBWQUxJREFUT1JTXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGluZ1Bhc3N3b3JkcyhwYXNzd29yZEtleTogc3RyaW5nLCBjb25maXJtUGFzc3dvcmRLZXk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIChncm91cDogQ29udHJvbEdyb3VwKToge1trZXk6IHN0cmluZ106IGFueX0gPT4ge1xyXG4gICAgICAgIGxldCBwYXNzd29yZCA9IGdyb3VwLmNvbnRyb2xzW3Bhc3N3b3JkS2V5XTtcclxuICAgICAgICBsZXQgY29uZmlybVBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbY29uZmlybVBhc3N3b3JkS2V5XTtcclxuICAgICAgICBpZiAocGFzc3dvcmQudmFsdWUgIT09IGNvbmZpcm1QYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWlzbWF0Y2hlZFBhc3N3b3JkczogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9tb2RlbHMvdXNlclwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cCwgRk9STV9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XHJcbmltcG9ydCB7ZW1haWxWYWxpZGF0b3IsIG1hdGNoaW5nUGFzc3dvcmRzLCBlbWFpbFJlZ2V4cH0gZnJvbSAnLi4vc2VydmljZXMvdmFsaWRhdG9ycy5zZXJ2aWNlJztcclxuaW1wb3J0IHtXZWJTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3dlYnN0b3JhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2UsIERFQlVHX0xFVkVMfSBmcm9tIFwiLi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsb2ctbWVzc2FnZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleGJveCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57e2xvZ01lc3NhZ2UubWVzc2FnZX19PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxhIGNsYXNzPVwiY2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoJGV2ZW50KVwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5YPC9pPjwvYT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZGVzY3JpcHRpb25cIiBbYXR0ci5yZWFkb25seV09XCJ0cnVlXCIgWyhuZ01vZGVsKV09XCJsb2dNZXNzYWdlLnByZXR0eVwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczogW10sXHJcbiAgICBkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ01lc3NhZ2VDb21wb25lbnQge1xyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBsb2dNZXNzYWdlO1xyXG4gICAgQE91dHB1dCgpIGNsb3NlTW9kYWw6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cclxuICAgIGNsb3NlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2UsIERFQlVHX0xFVkVMfSBmcm9tIFwiLi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7TG9nTWVzc2FnZUNvbXBvbmVudH0gZnJvbSBcIi4vbG9nLW1lc3NhZ2UuY29tcG9uZW50XCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2RlYnVnLWNvbnNvbGUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgPGRpdj5EZWJ1ZyBlcnJvcnM6PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1sb2dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwiI2xvZ01lc3NhZ2Ugb2YgbG9nTWVzc2FnZXM7ICNpID0gaW5kZXhcIiBcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cInNob3coaSlcIiBbbmdDbGFzc109XCJ7ZXJyb3I6IGlzRXJyb3IobG9nTWVzc2FnZSksIHdhcm5pbmc6IGlzV2FybmluZyhsb2dNZXNzYWdlKX1cIj57e2xvZ01lc3NhZ2UubWVzc2FnZX19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsb2ctbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImk9PW9wZW5NZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsb3NlTW9kYWwpPVwiaGlkZSgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2xvZ01lc3NhZ2VdPVwibG9nTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvbG9nLW1lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOiBbXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtMb2dNZXNzYWdlQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERlYnVnQ29uc29sZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIHByaXZhdGUgbG9nU3RyZWFtJDpPYnNlcnZhYmxlPE9iamVjdFtdPjtcclxuICAgIHB1YmxpYyBsb2dNZXNzYWdlczpPYmplY3RbXTtcclxuICAgIHB1YmxpYyBvcGVuTWVzc2FnZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjpMb2dnZXJTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTphbnkge1xyXG4gICAgICAgIHRoaXMubG9nTWVzc2FnZXM9W107XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sb2dTdHJlYW0kID0gdGhpcy5sb2dnZXIuZ2V0TG9nU3RyZWFtKCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nU3RyZWFtJC5zdWJzY3JpYmUobWVzc2FnZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nTWVzc2FnZXMucHVzaChtZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyhpbmRleCkge1xyXG4gICAgICAgIHRoaXMub3Blbk1lc3NhZ2UgPSAoIXRoaXMub3Blbk1lc3NhZ2UpP2luZGV4OnVuZGVmaW5lZDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpe1xyXG4gICAgICAgIHRoaXMub3Blbk1lc3NhZ2U9dW5kZWZpbmVkO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0Vycm9yKG1lc3NhZ2Upe1xyXG4gICAgICAgIHJldHVybiBtZXNzYWdlLmxldmVsID09IERFQlVHX0xFVkVMLkVSUk9SLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgaXNXYXJuaW5nKG1lc3NhZ2Upe1xyXG4gICAgICAgIHJldHVybiBtZXNzYWdlLmxldmVsID09IERFQlVHX0xFVkVMLldBUk4ubmFtZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdG9yeWJsb2Nrcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VXRpbHNTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvdXRpbHMuc2VydmljZVwiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tUeXBlfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2stdHlwZVwiO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge0RlYnVnQ29uc29sZUNvbXBvbmVudH0gZnJvbSBcIi4vZGVidWctY29uc29sZS5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J3NpZGViYXInLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiX2luZGV4ID09IC0xXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJjcmVhdGUtc3RvcnlibG9ja1wiIGRyYWdnYWJsZT1cInRydWVcIiAoZHJhZ3N0YXJ0KT1cImRyYWdTdGFydCgkZXZlbnQpXCIgKGRyYWdlbmQpPVwiZHJhZ0VuZCgkZXZlbnQpXCI+Q3JlYXRlIHN0b3J5YmxvY2s8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1jb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlRvdGFsIGNoYXB0ZXJzPC9zcGFuPjxzcGFuIGNsYXNzPVwiY291bnRcIj57e19zdG9yeUJsb2Nrc0xlbmd0aH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiX2luZGV4ID49IDAgJiYgISFfc3RvcnlCbG9ja1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxoMz48c3BhbiBjbGFzcz1cImNhcGl0YWwtbGV0dGVyXCI+Q2hhcHRlcjwvc3Bhbj4ge3tfc3RvcnlCbG9jay5ibG9ja051bWJlcisxfX08L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItc2VwYXJhdG9yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3RvcnlibG9jayB0eXBlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBbKG5nTW9kZWwpXT1cIl9zdG9yeUJsb2NrLnR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwiI3N0b3J5QmxvY2tUeXBlIG9mIHN0b3J5QmxvY2tUeXBlc1wiIHZhbHVlPXt7c3RvcnlCbG9ja1R5cGUuaWR9fT57e3N0b3J5QmxvY2tUeXBlLm5hbWV9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItc2VwYXJhdG9yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+VG90YWwgY2hhcmFjdGVyczwvc3Bhbj48c3BhbiBjbGFzcz1cImNvdW50XCI+e3tfc3RvcnlCbG9jay5kZXNjcmlwdGlvbi5sZW5ndGh9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWluZm9cIiAqbmdJZj1cIiEhX3N0b3J5QmxvY2suY3JlYXRlZEF0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+Q3JlYXRlZDwvc3Bhbj48c3BhbiBjbGFzcz1cImluZm9cIj57e3V0aWxzU2VydmljZS5nZXRIdW1hbkRhdGUoX3N0b3J5QmxvY2suY3JlYXRlZEF0KX19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItaW5mb1wiICpuZ0lmPVwiISFfc3RvcnlCbG9jay5sYXN0TW9kaWZpZWRBdFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkxhc3QgbW9kaWZpZWQ8L3NwYW4+PHNwYW4gY2xhc3M9XCJpbmZvXCI+e3t1dGlsc1NlcnZpY2UuZ2V0SHVtYW5EYXRlKF9zdG9yeUJsb2NrLmxhc3RNb2RpZmllZEF0KX19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGVidWctY29uc29sZSAqbmdJZj1cImlzRGVidWcoKVwiPjwvZGVidWctY29uc29sZT5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtVdGlsc1NlcnZpY2VdLFxyXG4gICAgZGlyZWN0aXZlczogW0RlYnVnQ29uc29sZUNvbXBvbmVudF0sXHJcbiAgICBpbnB1dHM6IFsnc3RvcnlCbG9jaycsICdzdG9yeUJsb2Nrc0xlbmd0aCddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBzdG9yeUJsb2NrVHlwZXM6U3RvcnlCbG9ja1R5cGVbXTtcclxuICAgIFxyXG4gICAgcHVibGljIF9pbmRleDogbnVtYmVyO1xyXG4gICAgcHVibGljIF9zdG9yeUJsb2NrO1xyXG4gICAgcHVibGljIF9zdG9yeUJsb2Nrc0xlbmd0aDtcclxuICAgIHB1YmxpYyBfc3Vic2NyaXB0aW9uOiBhbnk7XHJcblxyXG4gICAgQE91dHB1dCgpIHN0YXJ0RHJhZ2dpbmc6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgZW5kRHJhZ2dpbmc6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBsb2dnZXI6TG9nZ2VyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9zdG9yeUJsb2NrU2VydmljZTpTdG9yeUJsb2NrU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHV0aWxzU2VydmljZTpVdGlsc1NlcnZpY2VcclxuICAgICkge31cclxuXHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCBzdG9yeUJsb2NrKHN0b3J5QmxvY2spIHtcclxuICAgICAgICB0aGlzLl9zdG9yeUJsb2NrID0gc3RvcnlCbG9jaztcclxuICAgIH1cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgc3RvcnlCbG9ja3NMZW5ndGgoc3RvcnlCbG9ja3NMZW5ndGgpe1xyXG4gICAgICAgIHRoaXMuX3N0b3J5QmxvY2tzTGVuZ3RoID0gc3RvcnlCbG9ja3NMZW5ndGg7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tUeXBlcyA9IHRoaXMuX3N0b3J5QmxvY2tTZXJ2aWNlLmdldFN0b3J5QmxvY2tUeXBlcygpO1xyXG4gICAgICAgIHRoaXMuX2luZGV4ID0gdGhpcy5fc3RvcnlCbG9ja1NlcnZpY2UuZ2V0RXhwb3NlZEluZGV4KCk7XHJcbiAgICAgICAgdGhpcy5fc3RvcnlCbG9jayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5fc3RvcnlCbG9ja1NlcnZpY2UuaW5kZXhDaGFuZ2UkLnN1YnNjcmliZShcclxuICAgICAgICAgICAgaW5kZXggPT4gdGhpcy5zZWxlY3RJbmRleChpbmRleCkpO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0SW5kZXgoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2luZGV4ID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIGRyYWdTdGFydChlKXtcclxuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWcuc3JjID0gICBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ1FBQUFBa0NBWUFBQURoQUppWUFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUJPMUpSRUZVV0FuXCIgK1xyXG4gICAgICAgICAgICBcIk5tRUZzRkZVWXg3ODNPN1BhQXJwZ3FGS3RHS01oR09KSkVtMUZROElhcFVRa3BqMlllUE5takFlajhlRFJnOUY0SU1hYk54TVBiUlF4Z01aaWlHS3JDUnlNVVFscVRFQXBDQXFyaGhaM1p1ZjVcIiArXHJcbiAgICAgICAgICAgIFwiL2Q3czI5M1NscDNGbHV5WDdPemIyZmYrLy85ODc3M3ZmZDhZNmRCdTNHZFhCeGVydzFaTVdZemNicTN0TjhiMEE2UHRhVzFQaTVXVFJ1eEV1cUs0LzY4ZDVrSW5GQ1p2NTlKWXNrdHMrcHcxc1wiICtcclxuICAgICAgICAgICAgXCJrV1p3MXpqakVtTWxjTmlncmNxbytHZVBHUGFDbHI5Zmp4a2EvWjFmZnBCQUtPQ3NRK3ROV2I3cllGc3VNSEl1aDRqdDF5ZlVaMjVKSEo2MXNyeHY2MGNPSlhLRitlc2pXdjZDR3JxdVNsVE1DXCIgK1xyXG4gICAgICAgICAgICBcIjlkZURLYXpIb3ZmRjFVME1pWUxVeEkvS1lLZVo2aGZUM0d2bnhQd1l5c0QyUlZQdi9JUDRuSStJbFVYdnVoWnMvT05vVHRMa3Ywd3Zpb3FTMGthVUZCcFQyMlpPTjRUS2VtWEZTUHZMaXhZSjdcIiArXHJcbiAgICAgICAgICAgIFwiZEVFaHZJWVA0dG1KbHYzcmdxM05XcHRVamVBYkRVLzNxc1FmV0dobFdEOTVieXVCbmxQcnQ0Nm04Y2F4bXEzak1tQWtUUmFPVlhhYVNqV3hlNXdseVlxclZLZTJ5RWErOE54U2ErOVprM2ZiK1wiICtcclxuICAgICAgICAgICAgXCJadVhWN3hMNVNhY2tqOTJ0VS9yS3BsQjIzcGFOUDNyZXlsT1RpZmZXTVZNc0RsNHVhbzRncHVsVGlUL0dNNXRLZ1l4dENmV0pSVTVjRkhubTYwU08vSm5tMFRHdnorYWJBbm5uL2xEV3J4RDFxXCIgK1xyXG4gICAgICAgICAgICBcIk1qSTRVUytyeWlXZXVvUmlSNXJuYjZnZFRSckJqRjR4b3VaMUduWmVqQythakhnOHlCZ2dNVURqdXVEd2dHWDQyd1IwZkFRdXlsTjBpOVpNd2UyWnRNRXdCT2ZKeEtuK2Fhb0JYZkJaaFFZK2ZcIiArXHJcbiAgICAgICAgICAgIFwiRGhVSVowalRGOTJ3OGxiazBGWWZDZzMzME5EN0cxUVdFQnMyYVlwcWVubGs0TTJEd1ltR0REQVJmM1BUZHRKNGlnUjV6Qmpld21qRFZ6L3QrbDhZd0RyRi9BQkJ1REMwNjRYZURWZXhtN1JtQVwiICtcclxuICAgICAgICAgICAgXCI2RUdmWTJ1eW1xMTNBNExRenNPR0FDMDdYdjY3QmNEYkpUSHcyQ3FUd3k4N0lFUFEyZnhMbjN0cnR5QmY3bjVCdzVOSElCYzg3OThZMlRxVW12VkZmWUdiaUhicmFRNDREeEJEMDhzYVp4Y2p5XCIgK1xyXG4gICAgICAgICAgICBcIjNJY0RMampoUmdOYW1MSXlBSnhOR0JHNEUrdlQ2RndaTGJwUFk4dm1CUEJjbmx1SGxWRXh3SGdPU296ajRGcVo1L0xjeWpzUTZncDN1UXluTnNiWmxNZnUwS2lMcmJtdTZSY2lNVlpUaUY5bnNcIiArXHJcbiAgICAgICAgICAgIFwidmFWcnA3TGM2TWxKTG5TeHB3VTRrb2cvcjl2aG91KzJmajI5LzY0Wk9XdWorTEcvY1VhclljeWZkQkNJdUZja3M4dlRlalpwRG1pSjh5ODVPOXh1dWN4NzlzbWtsaW03TFFPWHZXN3BoQXJWMlwiICtcclxuICAgICAgICAgICAgXCJZcHhNL3RIMDdXZlpCMVlsSC8rSGptclg2OTF3TGVWdFBOOWNRT2Jnd3RnY3VCOVFlWkhrWStjNjNNYzNsdXRBUWs1QWdnN2NSSXJqcXhxa2FKb3hwNStYVGluVll1ejQyV1FDdUhnL3hKRG95XCIgK1xyXG4gICAgICAgICAgICBcIlI2WFZpbGFySXRzOFM5K2xrSEgwOWwrZW1VZ2xzYjdSUGwzZENRazRPVE5wSldGOXVnd011T09GR0EyVlRRTjFFcVVKMVFFS09rWFl1dDNrT09PRkdBMXF5K2RHNkNRRlVCMnhaY21EU3p1VXlcIiArXHJcbiAgICAgICAgICAgIFwic09HQUMwN0hVOWZnV0NuaWRJVlBVYXBRSFdEa3dLMVIyTjFjZ2d1WVlHTnd3UW0zTHlRYmJxQ0lveE9sQ3VrbHg4QzdnNkdRZGk2VmdRVW0ySERBQmJibnB0MFFSRTZyU25kVE4xR3FVQjJRK1wiICtcclxuICAgICAgICAgICAgXCI1SURMNFdud1BENU5OaHd3QVduejZmbkNPSUhGU1dsQ1c2a1ZQR2lEbTJML3RlYVlzMkF3UVA2TXNoVnNzcmxPQ0d2Mjd6NTZLcEMwYXZzcWxMYWkrcXFsdzFlRk45ZDh6cW1WUlR0cm5saGRiXCIgK1xyXG4gICAgICAgICAgICBcImt3eWlaWHFXVEZ3UUJwcDI3ZHVhLzBOSVBWY1JPY2s1MiswdnNQT09QbExuVlkwbFlBQUFBQVNVVk9SSzVDWUlJPVwiO1xyXG4gICAgICAgIGltZy5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XHJcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKGltZywgMTgsIDE4KTtcclxuICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcuZW1pdChlKTtcclxuICAgIH1cclxuICAgIGRyYWdFbmQoZSl7XHJcbiAgICAgICAgdmFyIGljb25XaWR0aCA9IDM2O1xyXG4gICAgICAgIHZhciBhc2lkZVdpZHRoID0gMjQwO1xyXG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID49IDc2OCAmJiBlLnggPiB3aW5kb3cuaW5uZXJXaWR0aCAtIGFzaWRlV2lkdGggLSBpY29uV2lkdGgpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N0b3J5QmxvY2tTZXJ2aWNlLmFkZFJlcXVlc3QkLmVtaXQoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNEZWJ1Zygpe1xyXG4gICAgICAgIHJldHVybiAobG9jYXRpb24uc2VhcmNoLmluZGV4T2YoJz9kZWJ1ZycpPj0wKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXJcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBDb250cm9sR3JvdXAsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xyXG5pbXBvcnQge2VtYWlsUmVnZXhwfSBmcm9tICcuLi9zZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UnO1xyXG5pbXBvcnQge1dlYlN0b3JhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvd2Vic3RvcmFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7TG9nZ2VyU2VydmljZSwgREVCVUdfTEVWRUx9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NpZ24taW4tZm9ybScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhib3ggZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5Db21lIGluLCBzdG9yeXRlbGxlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PjxhIGNsYXNzPVwiY2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoJGV2ZW50KVwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5YPC9pPjwvYT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJmb3JtXCIgKG5nU3VibWl0KT1cIm9uU2lnbkluKCRldmVudClcIiBub3ZhbGlkYXRlPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLmVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdPVwiZm9ybS5jb250cm9sc1snZW1haWwnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgI2VtYWlsPVwibmdGb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICAqbmdJZj1cIihlbWFpbC5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmICFlbWFpbC52YWxpZFwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICBFbWFpbCBpcyBpbnZhbGlkXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIucGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXCJcclxuICAgICAgICAgICAgICAgICAgICAjcGFzc3dvcmQ9XCJuZ0Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgICpuZ0lmPVwiKHBhc3N3b3JkLmRpcnR5IHx8IHN1Ym1pdHRlZCkgJiYgIXBhc3N3b3JkLnZhbGlkXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZSBwYXNzd29yZCBzaG91bGQgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmdcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIHByaW1hcnkgYmxvY2stYnV0dG9uXCI+U2lnbiBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2FwLWZvcm1cIj48YSAoY2xpY2spPVwic3dhcFRvU2lnblVwKClcIj5JIHdhbnQgdG8gY3JlYXRlIGEgbmV3IGFjY291bnQ8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduSW5Db21wb25lbnQge1xyXG4gICAgdXNlcjpVc2VyID0gbmV3IFVzZXIoKTtcclxuICAgIGZvcm06Q29udHJvbEdyb3VwO1xyXG4gICAgc3VibWl0dGVkID0gZmFsc2U7XHJcblxyXG4gICAgQE91dHB1dCgpIGNsb3NlTW9kYWw6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgc3dhcFdpbmRvdzpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBub3RpZnk6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgYXV0aFN0YXR1czpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGxvZ2dlcjpMb2dnZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBidWlsZGVyOkZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgd2ViU3RvcmFnZVNlcnZpY2U6V2ViU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOkNvbmZpZ3VyYXRpb25cclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZvcm0gPSBidWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oZW1haWxSZWdleHApXSldLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3YXBUb1NpZ25VcCgpIHtcclxuICAgICAgICB0aGlzLnN3YXBXaW5kb3cuZW1pdChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaWduSW4oZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcikuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJTdG9yYWdlU2VydmljZS5wdXQodGhpcy5jb25maWd1cmF0aW9uLnRva2VuLm5hbWUsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLldBUk4sICdvblNpZ25JbicsICdTZXJ2ZXIgZXJyb3InLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdvblNpZ25JbicsICdsb2dnZWQgaW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTdGF0dXMuZW1pdCgnTG9naW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmF1dGhTdGF0dXNDaGFuZ2UkLmVtaXQoJ0xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgnJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9tb2RlbHMvdXNlclwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cCwgRk9STV9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XHJcbmltcG9ydCB7ZW1haWxWYWxpZGF0b3IsIG1hdGNoaW5nUGFzc3dvcmRzLCBlbWFpbFJlZ2V4cH0gZnJvbSAnLi4vc2VydmljZXMvdmFsaWRhdG9ycy5zZXJ2aWNlJztcclxuaW1wb3J0IHtXZWJTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3dlYnN0b3JhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2UsIERFQlVHX0xFVkVMfSBmcm9tIFwiLi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzaWduLXVwLWZvcm0nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4Ym94IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+QmVjb21lIGEgc3Rvcnl0ZWxsZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdj48YSBjbGFzcz1cImNsb3NlXCIgKGNsaWNrKT1cImNsb3NlKCRldmVudClcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+WDwvaT48L2E+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwiZm9ybVwiIChuZ1N1Ym1pdCk9XCJvblNpZ25VcCgkZXZlbnQpXCIgbm92YWxpZGF0ZT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cImZvcm0uY29udHJvbHNbJ25hbWUnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgI25hbWU9XCJuZ0Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICAqbmdJZj1cIihuYW1lLmRpcnR5IHx8IHN1Ym1pdHRlZCkgJiYgIW5hbWUudmFsaWRcIiBjbGFzcz1cInBhbmVsIHBhbmVsLWVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgWW91ciBuYW1lIGlzIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlci5lbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cImZvcm0uY29udHJvbHNbJ2VtYWlsJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgICNlbWFpbD1cIm5nRm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAgKm5nSWY9XCIoZW1haWwuZGlydHkgfHwgc3VibWl0dGVkKSAmJiAhZW1haWwudmFsaWRcIiBjbGFzcz1cInBhbmVsIHBhbmVsLWVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRW1haWwgaXMgaW52YWxpZFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLnBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdPVwiZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgI3Bhc3N3b3JkPVwibmdGb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICAqbmdJZj1cIihwYXNzd29yZC5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmICFwYXNzd29yZC52YWxpZFwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgcGFzc3dvcmQgc2hvdWxkIGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJDb25maXJtIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIuY29uZmlybVBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdPVwiZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgICNjb25maXJtUGFzc3dvcmQ9XCJuZ0Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb25maXJtLXBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIihjb25maXJtUGFzc3dvcmQuZGlydHkgfHwgc3VibWl0dGVkKSAmJiBmb3JtLmhhc0Vycm9yKCdtaXNtYXRjaGVkUGFzc3dvcmRzJylcIiBjbGFzcz1cInBhbmVsIHBhbmVsLWVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhlIHBhc3N3b3JkcyBkb24ndCBtYXRjaFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24gcHJpbWFyeSBibG9jay1idXR0b25cIj5TaWduIHVwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN3YXAtZm9ybVwiPjxhIChjbGljayk9XCJzd2FwVG9TaWduSW4oKVwiPkkgYWxyZWFkeSBoYXZlIGFuIGFjY291bnQ8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduVXBDb21wb25lbnQge1xyXG4gICAgdXNlcjpVc2VyID0gbmV3IFVzZXIoKTtcclxuICAgIGZvcm06Q29udHJvbEdyb3VwO1xyXG4gICAgc3VibWl0dGVkID0gZmFsc2U7XHJcblxyXG4gICAgQE91dHB1dCgpIGNsb3NlTW9kYWw6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgc3dhcFdpbmRvdzpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBub3RpZnk6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgYXV0aFN0YXR1czpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGxvZ2dlcjpMb2dnZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBidWlsZGVyOkZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgd2ViU3RvcmFnZVNlcnZpY2U6V2ViU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOkNvbmZpZ3VyYXRpb25cclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZvcm0gPSBidWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgbmFtZTpbJyddLFxyXG4gICAgICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybihlbWFpbFJlZ2V4cCldKV0sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKV0sXHJcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICB9LCB7dmFsaWRhdG9yOiBtYXRjaGluZ1Bhc3N3b3JkcygncGFzc3dvcmQnLCAnY29uZmlybVBhc3N3b3JkJyl9KVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3YXBUb1NpZ25JbigpIHtcclxuICAgICAgICB0aGlzLnN3YXBXaW5kb3cuZW1pdChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaWduVXAoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5mb3JtLnZhbHVlKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcikuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJTdG9yYWdlU2VydmljZS5wdXQodGhpcy5jb25maWd1cmF0aW9uLnRva2VuLm5hbWUsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLldBUk4sICdvblNpZ25VcCcsJ1NlcnZlciBlcnJvcicsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgZW1haWwgaXMgYWxyZWFkeSB0YWtlbidcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdvblNpZ25VcCcsICdyZWdpc3RlcmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU3RhdHVzLmVtaXQoJ1JlZ2lzdGVyZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmF1dGhTdGF0dXNDaGFuZ2UkLmVtaXQoJ1JlZ2lzdGVyZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCcnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7U2lnbkluQ29tcG9uZW50fSBmcm9tIFwiLi9zaWduaW4tZm9ybS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTaWduVXBDb21wb25lbnR9IGZyb20gXCIuL3NpZ251cC1mb3JtLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2F1dGgtZm9ybScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxzaWduLWluLWZvcm0gXHJcbiAgICAgICAgICAgICpuZ0lmPVwibG9naW5cIiBcclxuICAgICAgICAgICAgKGNsb3NlTW9kYWwpPVwiaGlkZUFjY2Vzc0Zvcm0oKVwiXHJcbiAgICAgICAgICAgIChzd2FwV2luZG93KT1cImxvZ2luPSFsb2dpblwiXHJcbiAgICAgICAgICAgIChhdXRoU3RhdHVzKT1cImF1dGhTdGF0dXNDaGFuZ2VkKCRldmVudClcIlxyXG4gICAgICAgICAgICAobm90aWZ5KT1cIm5vdGlmeU1lc3NhZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgID48L3NpZ24taW4tZm9ybT5cclxuICAgICAgICA8c2lnbi11cC1mb3JtIFxyXG4gICAgICAgICAgICAqbmdJZj1cIiFsb2dpblwiIFxyXG4gICAgICAgICAgICAoY2xvc2VNb2RhbCk9XCJoaWRlQWNjZXNzRm9ybSgpXCJcclxuICAgICAgICAgICAgKHN3YXBXaW5kb3cpPVwibG9naW49IWxvZ2luXCJcclxuICAgICAgICAgICAgKGF1dGhTdGF0dXMpPVwiYXV0aFN0YXR1c0NoYW5nZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChub3RpZnkpPVwibm90aWZ5TWVzc2FnZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvc2lnbi11cC1mb3JtPlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczogW10sXHJcbiAgICBkaXJlY3RpdmVzOiBbU2lnbkluQ29tcG9uZW50LCBTaWduVXBDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aEZvcm1Db21wb25lbnQge1xyXG4gICAgQE91dHB1dCgpIGNsb3NlTW9kYWw6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgbm90aWZ5OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIGF1dGhTdGF0dXM6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIHB1YmxpYyBsb2dpbj1mYWxzZTtcclxuXHJcbiAgICBoaWRlQWNjZXNzRm9ybShldmVudCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbC5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbm90aWZ5TWVzc2FnZShldmVudCl7XHJcbiAgICAgICAgdGhpcy5ub3RpZnkuZW1pdChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXV0aFN0YXR1c0NoYW5nZWQoZXZlbnQpe1xyXG4gICAgICAgIHRoaXMuYXV0aFN0YXR1cy5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7RGlyZWN0aXZlLCBPbkNoYW5nZXMsIEVsZW1lbnRSZWYsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtBbmltYXRpb25CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvYW5pbWF0ZS9hbmltYXRpb25fYnVpbGRlcic7XHJcbmltcG9ydCB7Q3NzQW5pbWF0aW9uQnVpbGRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2FuaW1hdGUvY3NzX2FuaW1hdGlvbl9idWlsZGVyJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbY29sbGFwc2VdJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbGxhcHNlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIGNvbGxhcHNlOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uOiBDc3NBbmltYXRpb25CdWlsZGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFuaW1hdGlvbkJ1aWxkZXI6QW5pbWF0aW9uQnVpbGRlciwgcHJpdmF0ZSBfZWw6RWxlbWVudFJlZikge1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbiA9IGFuaW1hdGlvbkJ1aWxkZXIuY3NzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xyXG4gICAgICAgIC8vIGlmIHRoZSBjaGFuZ2UgaGFwcGVuZWQgaW4gdGhlIGNvbGxhcHNlIHByb3BlcnR5XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuY29sbGFwc2UpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29sbGFwc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIC5zZXREdXJhdGlvbigzNTApXHJcbiAgICAgICAgICAgIC5zZXRGcm9tU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgICdmbGV4LWdyb3cnOiAxLFxyXG4gICAgICAgICAgICAgICAgJ29wYWNpdHknIDogMSxcclxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbic6ICdjdWJpYy1iZXppZXIoMC41NzUsIDAuMjU1LCAwLjQ0MCwgMC45ODUpOydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnNldFRvU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgICdmbGV4LWdyb3cnOiAwLFxyXG4gICAgICAgICAgICAgICAgJ29wYWNpdHknIDogMFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gYSBpcyB0aGUgQW5pbWF0aW9uIGluc3RhbmNlIHJ1bm5pbmcgdGhpcyBhbmltYXRpb24uXHJcbiAgICAgICAgbGV0IGEgPSBhbmltYXRpb25cclxuICAgICAgICAgICAgLnN0YXJ0KHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIGEub25Db21wbGV0ZSgoKSA9PiB7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIC5zZXREdXJhdGlvbigzNTApXHJcbiAgICAgICAgICAgIC5zZXRGcm9tU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgICdmbGV4LWdyb3cnOiAwLFxyXG4gICAgICAgICAgICAgICAgJ29wYWNpdHknIDogMCxcclxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbic6ICdjdWJpYy1iZXppZXIoMC41NzUsIDAuMjU1LCAwLjQ0MCwgMC45ODUpOydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnNldFRvU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgICdmbGV4LWdyb3cnOiAxLFxyXG4gICAgICAgICAgICAgICAgJ29wYWNpdHknIDogMVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gYSBpcyB0aGUgQW5pbWF0aW9uIGluc3RhbmNlIHJ1bm5pbmcgdGhpcyBhbmltYXRpb24uXHJcbiAgICAgICAgbGV0IGEgPSBhbmltYXRpb25cclxuICAgICAgICAgICAgLnN0YXJ0KHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIGEub25Db21wbGV0ZSgoKSA9PiB7XHJcbiAgICAgICAgfSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7RGlyZWN0aXZlLCBPbkNoYW5nZXMsIEVsZW1lbnRSZWYsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtBbmltYXRpb25CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvYW5pbWF0ZS9hbmltYXRpb25fYnVpbGRlcic7XHJcbmltcG9ydCB7Q3NzQW5pbWF0aW9uQnVpbGRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2FuaW1hdGUvY3NzX2FuaW1hdGlvbl9idWlsZGVyJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbZGlzYXBwZWFyXSdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEaXNhcHBlYXIgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgQElucHV0KCkgZGlzYXBwZWFyOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uOiBDc3NBbmltYXRpb25CdWlsZGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFuaW1hdGlvbkJ1aWxkZXI6QW5pbWF0aW9uQnVpbGRlciwgcHJpdmF0ZSBfZWw6RWxlbWVudFJlZikge1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbiA9IGFuaW1hdGlvbkJ1aWxkZXIuY3NzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xyXG4gICAgICAgIC8vIGlmIHRoZSBjaGFuZ2UgaGFwcGVuZWQgaW4gdGhlIGRpc2FwcGVhciBwcm9wZXJ0eVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLmRpc2FwcGVhcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXNhcHBlYXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIC5zZXREdXJhdGlvbigxMDApXHJcbiAgICAgICAgICAgIC5zZXRGcm9tU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgICdvcGFjaXR5JyA6IDEsXHJcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nOiAnY3ViaWMtYmV6aWVyKDAuNTc1LCAwLjI1NSwgMC40NDAsIDAuOTg1KTsnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh7XHJcbiAgICAgICAgICAgICAgICAnb3BhY2l0eScgOiAwXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBhIGlzIHRoZSBBbmltYXRpb24gaW5zdGFuY2UgcnVubmluZyB0aGlzIGFuaW1hdGlvbi5cclxuICAgICAgICBsZXQgYSA9IGFuaW1hdGlvblxyXG4gICAgICAgICAgICAuc3RhcnQodGhpcy5fZWwubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgYS5vbkNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBhbmltYXRpb24gPSB0aGlzLl9hbmltYXRpb25cclxuICAgICAgICAgICAgLnNldER1cmF0aW9uKDEwMClcclxuICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoe1xyXG4gICAgICAgICAgICAgICAgJ29wYWNpdHknIDogMCxcclxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbic6ICdjdWJpYy1iZXppZXIoMC41NzUsIDAuMjU1LCAwLjQ0MCwgMC45ODUpOydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnNldFRvU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgICdvcGFjaXR5JyA6IDFcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGEgaXMgdGhlIEFuaW1hdGlvbiBpbnN0YW5jZSBydW5uaW5nIHRoaXMgYW5pbWF0aW9uLlxyXG4gICAgICAgIGxldCBhID0gYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIC5zdGFydCh0aGlzLl9lbC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICBhLm9uQ29tcGxldGUoKCkgPT4ge1xyXG4gICAgICAgIH0pO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7VXRpbHNTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvdXRpbHMuc2VydmljZVwiO1xyXG5pbXBvcnQge0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gXCJhbmd1bGFyMi9zcmMvYW5pbWF0ZS9hbmltYXRpb25fYnVpbGRlclwiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2t9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9ja1wiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvc3RvcnlibG9ja3Muc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2UsIERFQlVHX0xFVkVMfSBmcm9tIFwiLi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb2xsYXBzZX0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY29sbGFwc2UuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7RGlzYXBwZWFyfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9kaXNhcHBlYXIuZGlyZWN0aXZlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3RvcnlibG9jaycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxhIGNsYXNzPVwiaW5kZXhcIiAoY2xpY2spPVwic3dhcENvbGxhcHNlKClcIiAoY2xpY2spPVwic3dhcERpc2FwcGVhcigpXCI+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwic3RvcnlCbG9ja0luZm8udHlwZSA9PSAnY2hhcHRlcidcIj57e3V0aWxzU2VydmljZS5nZXRSb21hbk51bWVyYWwoc3RvcnlCbG9ja0luZm8uYmxvY2tOdW1iZXIgKyAxKX19PC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jb250YWluZXJcIiBbY29sbGFwc2VdPVwiY29sbGFwc2VkXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInRpdGxlXCIgW2F0dHIucmVhZG9ubHldPVwiX2V4cG9zZWQgPyBudWxsIDogdHJ1ZVwiIFsobmdNb2RlbCldPVwic3RvcnlCbG9ja0luZm8udGl0bGVcIiBwbGFjZWhvbGRlcj1cIkluc2VydCBhIHRpdGxlXCIgIFtkaXNhcHBlYXJdPVwiZGlzYXBwZWFyZWRcIi8+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImRlc2NyaXB0aW9uXCIgW2F0dHIucmVhZG9ubHldPVwiX2V4cG9zZWQgPyBudWxsIDogdHJ1ZVwiIFsobmdNb2RlbCldPVwic3RvcnlCbG9ja0luZm8uZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIlN0YXJ0IHdyaXRpbmcgeW91ciBzdG9yeSBoZXJlLi4uXCIgW2Rpc2FwcGVhcl09XCJkaXNhcHBlYXJlZFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWZhdWx0LWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJlZGl0KGluZGV4LCAkZXZlbnQpXCIgY2xhc3M9XCJidXR0b24gaW5saW5lLWJ1dHRvbiBwcmltYXJ5XCI+RWRpdDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJyZW1vdmUoaW5kZXgsICRldmVudClcIiBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6IWhhc0lkKCl9XCIgY2xhc3M9XCJidXR0b24gaW5saW5lLWJ1dHRvbiBhbGVydFwiPlJlbW92ZTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBvc2VkLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJzYXZlKGluZGV4LCAkZXZlbnQpXCIgY2xhc3M9XCJidXR0b24gaW5saW5lLWJ1dHRvbiBwcmltYXJ5XCI+U2F2ZTwvYT5cclxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJjbG9zZSgpXCIgY2xhc3M9XCJidXR0b24gaW5saW5lLWJ1dHRvbiBzZWNvbmRhcnlcIj5DbG9zZTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW0NvbGxhcHNlLCBEaXNhcHBlYXJdLFxyXG4gICAgcHJvdmlkZXJzOiBbVXRpbHNTZXJ2aWNlXSxcclxuICAgIGlucHV0czogWydzdG9yeUJsb2NrSW5mbycsICdpbmRleCcsICd1c2VySWQnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0b3J5QmxvY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIHN0b3J5QmxvY2tJbmZvOlN0b3J5QmxvY2s7XHJcbiAgICBwcml2YXRlIHVzZXJJZDtcclxuICAgIHB1YmxpYyBpbmRleDtcclxuICAgIHB1YmxpYyBfZXhwb3NlZCA9IGZhbHNlO1xyXG4gICAgcHVibGljIF9hY3RpdmUgPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfYWN0aW9uVGltZW91dDtcclxuICAgIHB1YmxpYyBfc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3pvb21MZXZlbCA9IDEwO1xyXG4gICAgcHJpdmF0ZSBfcHJldmlvdXNab29tTGV2ZWwgPSAxMDtcclxuICAgIHByaXZhdGUgc3RvcnlCbG9ja0xvY2FsU2F2ZTpTdG9yeUJsb2NrO1xyXG4gICAgcHVibGljIGNvbGxhcHNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGRpc2FwcGVhcmVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQE91dHB1dCgpIHpvb21FdmVudDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBleHBvc2VFdmVudDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSByZW1vdmVTdG9yeUJsb2NrRXZlbnQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgbm90aWZ5OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOkxvZ2dlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9hYjpBbmltYXRpb25CdWlsZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfZTpFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB1dGlsc1NlcnZpY2U6VXRpbHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIHN0b3J5QmxvY2tTZXJ2aWNlOlN0b3J5QmxvY2tTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOkNvbmZpZ3VyYXRpb25cclxuICAgICAgICApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCB6b29tTGV2ZWwodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcHJldmlvdXNab29tTGV2ZWwgPSAodGhpcy5fcHJldmlvdXNab29tTGV2ZWwgPT0gdW5kZWZpbmVkKSA/IDEwIDogdGhpcy5fcHJldmlvdXNab29tTGV2ZWw7XHJcbiAgICAgICAgdGhpcy5fem9vbUxldmVsID0gKHRoaXMuX3pvb21MZXZlbCA9PSB1bmRlZmluZWQpID8gMTAgOiB0aGlzLl96b29tTGV2ZWw7XHJcbiAgICAgICAgaWYgKHRoaXMuX3pvb21MZXZlbCAhPSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1pvb21MZXZlbCA9IHRoaXMuX3pvb21MZXZlbDtcclxuICAgICAgICAgICAgdGhpcy5fem9vbUxldmVsID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbUNoYW5nZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCBleHBvc2VkSW5kZXgodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3NlZCA9ICh2YWx1ZSA9PSB0aGlzLmluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBzd2FwQ29sbGFwc2UoKXtcclxuICAgICAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcclxuICAgIH1cclxuXHJcbiAgICBzd2FwRGlzYXBwZWFyKCl7XHJcbiAgICAgICAgdGhpcy5kaXNhcHBlYXJlZCA9ICF0aGlzLmRpc2FwcGVhcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHtcclxuICAgICAgICB0aGlzLmNoYW5nZVBvc2l0aW9uT25ab29tKDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHpvb20oZSkge1xyXG4gICAgICAgIHZhciBlID0gd2luZG93LmV2ZW50IHx8IGU7IC8vIG9sZCBJRSBzdXBwb3J0XHJcbiAgICAgICAgdGhpcy56b29tRXZlbnQuZW1pdChlKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICB6b29tQ2hhbmdlZCgpIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuVkVSQk9TRSwnem9vbUNoYW5nZWQnLCcnLCB7XHJcbiAgICAgICAgICAgIHN0b3J5QmxvY2s6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgIHByZXZpb3VzWm9vbTogdGhpcy5fcHJldmlvdXNab29tTGV2ZWwsXHJcbiAgICAgICAgICAgIGN1cnJlbnRab29tOiB0aGlzLl96b29tTGV2ZWxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5fem9vbUxldmVsIDwgdGhpcy5zdG9yeUJsb2NrSW5mby5pbXBvcnRhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFkZU91dCgxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVBvc2l0aW9uT25ab29tKDEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYWRlSW4oc3BlZWQ6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLlZFUkJPU0UsJ2ZhZGVJbicsJycsIHtcclxuICAgICAgICAgICAgc3RvcnlCbG9jazogdGhpcy5pbmRleCxcclxuICAgICAgICAgICAgbWVzc2FnZTonRmFkaW5nIGluJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYWIuY3NzKCk7XHJcbiAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgZnJvbVN0eWxlID0ge307XHJcbiAgICAgICAgdmFyIHRvU3R5bGUgPSB7fTtcclxuXHJcbiAgICAgICAgZnJvbVN0eWxlWydkaXNwbGF5J10gPSAnZmxleCc7XHJcbiAgICAgICAgZnJvbVN0eWxlWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJ2N1YmljLWJlemllcigwLjU3NSwgMC4yNTUsIDAuNDQwLCAwLjk4NSk7JztcclxuICAgICAgICB0b1N0eWxlWydvcGFjaXR5J10gPSAxO1xyXG5cclxuICAgICAgICBhbmltYXRpb25cclxuICAgICAgICAgICAgLnNldER1cmF0aW9uKHNwZWVkKVxyXG4gICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyhmcm9tU3R5bGUpXHJcbiAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh0b1N0eWxlKTtcclxuXHJcbiAgICAgICAgaWYgKCEhX3NlbGYuX2FjdGlvblRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF9zZWxmLl9hY3Rpb25UaW1lb3V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF9zZWxmLl9hY3Rpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5zdGFydChfc2VsZi5fZS5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0lkKCkge1xyXG4gICAgICAgIHJldHVybiAhISgodGhpcy5zdG9yeUJsb2NrSW5mbyB8fCB7X2lkOiB1bmRlZmluZWR9KS5faWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZhZGVPdXQoc3BlZWQ6bnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuVkVSQk9TRSwnZmFkZU91dCcsJycsIHtcclxuICAgICAgICAgICAgICAgIHN0b3J5QmxvY2s6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1pvb206IHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFpvb206IHRoaXMuX3pvb21MZXZlbCxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFuY2U6IHRoaXMuc3RvcnlCbG9ja0luZm8uaW1wb3J0YW5jZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6J0ZhZGluZyBvdXQnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGFuaW1hdGlvbiA9IHRoaXMuX2FiLmNzcygpO1xyXG4gICAgICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgZnJvbVN0eWxlID0ge307XHJcbiAgICAgICAgICAgIHZhciB0b1N0eWxlID0ge307XHJcblxyXG4gICAgICAgICAgICB0b1N0eWxlWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJ2N1YmljLWJlemllcigwLjU3NSwgMC4yNTUsIDAuNDQwLCAwLjk4NSk7JztcclxuICAgICAgICAgICAgdG9TdHlsZVsnb3BhY2l0eSddID0gMDtcclxuXHJcbiAgICAgICAgICAgIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgLnNldER1cmF0aW9uKHNwZWVkKVxyXG4gICAgICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoZnJvbVN0eWxlKVxyXG4gICAgICAgICAgICAgICAgLnNldFRvU3R5bGVzKHRvU3R5bGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEhX3NlbGYuX2FjdGlvblRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5WRVJCT1NFLCdmYWRlT3V0JywnJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3J5QmxvY2s6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTonQW5pbWF0aW9uIHJlbW92ZWQnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoX3NlbGYuX2FjdGlvblRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBfc2VsZi5fYWN0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLnN0YXJ0KF9zZWxmLl9lLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQb3NpdGlvbk9uWm9vbShzcGVlZCkge1xyXG4gICAgICAgIGxldCBhbmltYXRpb24gPSB0aGlzLl9hYi5jc3MoKTtcclxuICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBmcm9tU3R5bGUgPSB7XHJcbiAgICAgICAgICAgIHRvcDogdGhpcy5jb25maWd1cmF0aW9uLnpvb20ub2Zmc2V0ICsgKCh0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5zdGVwICsgTWF0aC5leHAodGhpcy5fcHJldmlvdXNab29tTGV2ZWwgKiB0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5zdHJlbmd0aCkpICogdGhpcy5zdG9yeUJsb2NrSW5mby50aW1lUG9zaXRpb24pICsgJ3B4J1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciB0b1N0eWxlID0ge1xyXG4gICAgICAgICAgICB0b3A6IHRoaXMuY29uZmlndXJhdGlvbi56b29tLm9mZnNldCArICgodGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RlcCArIE1hdGguZXhwKHRoaXMuX3pvb21MZXZlbCAqIHRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0cmVuZ3RoKSkgKiB0aGlzLnN0b3J5QmxvY2tJbmZvLnRpbWVQb3NpdGlvbikgKyAncHgnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLlZFUkJPU0UsICdjaGFuZ2VQb3NpdGlvbk9uWm9vbScsICcnLCB7XHJcbiAgICAgICAgICAgIHN0b3J5QmxvY2s6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgIHByZXZpb3VzWm9vbTogdGhpcy5fcHJldmlvdXNab29tTGV2ZWwsXHJcbiAgICAgICAgICAgIGN1cnJlbnRab29tOiB0aGlzLl96b29tTGV2ZWwsXHJcbiAgICAgICAgICAgIHRpbWVQb3NpdGlvbjogdGhpcy5zdG9yeUJsb2NrSW5mby50aW1lUG9zaXRpb24sXHJcbiAgICAgICAgICAgIG9mZnNldDp0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5vZmZzZXQsXHJcbiAgICAgICAgICAgIHN0ZXA6dGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RlcCxcclxuICAgICAgICAgICAgc3RyZW5ndGg6dGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RyZW5ndGgsXHJcbiAgICAgICAgICAgIGZyb21Qb3NpdGlvbjpmcm9tU3R5bGUudG9wLFxyXG4gICAgICAgICAgICB0b1Bvc2l0aW9uOnRvU3R5bGUudG9wLFxyXG4gICAgICAgICAgICBtZXNzYWdlOidDaGFuZ2luZyBwb3NpdGlvbidcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKF9zZWxmLl96b29tTGV2ZWwgPiBfc2VsZi5zdG9yeUJsb2NrSW5mby5pbXBvcnRhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5WRVJCT1NFLCdjaGFuZ2VQb3NpdGlvbk9uWm9vbScsJycsIHtcclxuICAgICAgICAgICAgICAgIHN0b3J5QmxvY2s6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1pvb206IHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFpvb206IHRoaXMuX3pvb21MZXZlbCxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFuY2U6IHRoaXMuc3RvcnlCbG9ja0luZm8uaW1wb3J0YW5jZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6J0ZhZGluZyBpbidcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRvU3R5bGVbJ29wYWNpdHknXSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuVkVSQk9TRSwnY2hhbmdlUG9zaXRpb25Pblpvb20nLCcnLCB7XHJcbiAgICAgICAgICAgICAgICBzdG9yeUJsb2NrOiB0aGlzLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNab29tOiB0aGlzLl9wcmV2aW91c1pvb21MZXZlbCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRab29tOiB0aGlzLl96b29tTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbmNlOiB0aGlzLnN0b3J5QmxvY2tJbmZvLmltcG9ydGFuY2UsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOidGYWRpbmcgb3V0J1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdG9TdHlsZVsnb3BhY2l0eSddID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRvU3R5bGVbJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gPSAnY3ViaWMtYmV6aWVyKDAuNTc1LCAwLjI1NSwgMC40NDAsIDAuOTg1KTsnO1xyXG5cclxuICAgICAgICBhbmltYXRpb25cclxuICAgICAgICAgICAgLnNldER1cmF0aW9uKHNwZWVkKVxyXG4gICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyhmcm9tU3R5bGUpXHJcbiAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh0b1N0eWxlKTtcclxuXHJcbiAgICAgICAgaWYgKCEhX3NlbGYuX2FjdGlvblRpbWVvdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLlZFUkJPU0UsJ2NoYW5nZVBvc2l0aW9uT25ab29tJywnJywge1xyXG4gICAgICAgICAgICAgICAgc3RvcnlCbG9jazogdGhpcy5pbmRleCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6J0FuaW1hdGlvbiByZW1vdmVkJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF9zZWxmLl9hY3Rpb25UaW1lb3V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF9zZWxmLl9hY3Rpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5zdGFydChfc2VsZi5fZS5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZvY3VzKCkge1xyXG4gICAgICAgIHZhciBuYXRpdmUgPSB0aGlzLl9lLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgdmFyIHRleHRhcmVhID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hdGl2ZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICgobmF0aXZlLmNoaWxkTm9kZXNbaV0uY2xhc3NOYW1lIHx8ICcnKS5pbmRleE9mKFwidGV4dC1jb250YWluZXJcIikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gbmF0aXZlLmNoaWxkTm9kZXNbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISFjb250YWluZXIpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKChjb250YWluZXIuY2hpbGROb2Rlc1tpXS5jbGFzc05hbWUgfHwgJycpLmluZGV4T2YoXCJkZXNjcmlwdGlvblwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEgPSBjb250YWluZXIuY2hpbGROb2Rlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoISF0ZXh0YXJlYSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH0sIDUwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlZGl0KGluZGV4LCBldmVudCkge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnZWRpdCcsICdTYXZpbmcgdGVtcG9yYXJ5IGRhdGEgJywgdGhpcy5zdG9yeUJsb2NrSW5mbyk7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrTG9jYWxTYXZlID0gPFN0b3J5QmxvY2s+SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0b3J5QmxvY2tJbmZvKSk7XHJcbiAgICAgICAgdGhpcy5leHBvc2VFdmVudC5lbWl0KGluZGV4KTtcclxuICAgICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGluZGV4LCBldmVudCkge1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja1NlcnZpY2UuZGVsZXRlU3RvcnlCbG9jayh0aGlzLnVzZXJJZCwgdGhpcy5zdG9yeUJsb2NrSW5mbykuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAncmVtb3ZlJywgJ1JlY2VpdmVkIGRhdGEnLCAgZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5XQVJOLCAncmVtb3ZlJywgJ0Vycm9yIHdoaWxlIHJlbW92aW5nJywgdGhpcy5zdG9yeUJsb2NrSW5mbywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4uJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAncmVtb3ZlJywgJ1JlbW92aW5nIGJsb2NrIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUmVtb3ZlZCBzdWNjZXNzZnVsbHkuJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVN0b3J5QmxvY2tFdmVudC5lbWl0KHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKGluZGV4LCBldmVudCkge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnc2F2ZScsICdJIGFtIGFib3V0IHRvIHNhdmUnLCB0aGlzLnN0b3J5QmxvY2tJbmZvKTtcclxuXHJcbiAgICAgICAgaWYgKCEodGhpcy5zdG9yeUJsb2NrSW5mby50aXRsZSA9PSAnJyAmJiB0aGlzLnN0b3J5QmxvY2tJbmZvLmRlc2NyaXB0aW9uID09ICcnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLnNhdmVTdG9yeUJsb2NrKHRoaXMudXNlcklkLCB0aGlzLnN0b3J5QmxvY2tJbmZvKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tJbmZvID0gPFN0b3J5QmxvY2s+ZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ3NhdmUnLCAnUmVjZWl2ZWQgJywgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdzYXZlJywgJ1NhdmluZyB0ZW1wb3JhcnkgZGF0YSAnLCBkYXRhLCB0aGlzLnN0b3J5QmxvY2tJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tMb2NhbFNhdmUgPSA8U3RvcnlCbG9jaz5KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RvcnlCbG9ja0luZm8pKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLldBUk4sICdzYXZlJywgJ0Vycm9yIHdoaWxlIHNhdmluZycsIHRoaXMuc3RvcnlCbG9ja0luZm8sIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yLiBQbGVhc2UgdHJ5IGFnYWluLidcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdzYXZlJywgJ1NhdmVkICcsIHRoaXMuc3RvcnlCbG9ja0luZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTYXZlZCBzdWNjZXNzZnVsbHkuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoJ1BsZWFzZSBpbnNlcnQgYSB0aXRsZSBvciBzb21lIGNvbnRlbnQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuZXhwb3NlRXZlbnQuZW1pdCgtMSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zdG9yeUJsb2NrTG9jYWxTYXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnY2xvc2UnLCdSZW1vdmluZyBibG9jayBpbmRleCAnICsgdGhpcy5pbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU3RvcnlCbG9ja0V2ZW50LmVtaXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOid0aW1lbGluZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZWxpbmVDb21wb25lbnQge1xyXG59IiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjonYWRkLWJ1dHRvbicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxhPjxzcGFuPis8L3NwYW4+PC9hPlxyXG4gICAgYCxcclxuICAgIGlucHV0czogWydvZmZzZXRZJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZEJ1dHRvbkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF9vZmZzZXRZO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2U6RWxlbWVudFJlZil7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgb2Zmc2V0WSh2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9vZmZzZXRZID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5vZmZzZXRDaGFuZ2VkKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmZzZXRDaGFuZ2VkKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fZS5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IHZhbHVlICsgJ3B4JztcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtOZ0NsYXNzfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvc3RvcnlibG9ja3Muc2VydmljZVwiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2t9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9ja1wiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tDb21wb25lbnR9IGZyb20gXCIuL3N0b3J5YmxvY2suY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VGltZWxpbmVDb21wb25lbnR9IGZyb20gXCIuL3RpbWVsaW5lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0FkZEJ1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vYWRkLWJ1dHRvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHtTdG9yeUJsb2NrVHlwZX0gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrLXR5cGVcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQge1dlYlN0b3JhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvd2Vic3RvcmFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TG9nZ2VyU2VydmljZSwgREVCVUdfTEVWRUx9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzdG9yeScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIDx0aW1lbGluZSBjbGFzcz1cInRpbWVsaW5lLWJsb2NrXCI+PC90aW1lbGluZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdG9yeS1ibG9ja3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3RvcnlibG9jayAqbmdGb3I9XCIjc3RvcnlCbG9jayBvZiBzdG9yeUJsb2NrczsgI2kgPSBpbmRleFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbaW5kZXhdPVwiaVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbc3RvcnlCbG9ja0luZm9dPVwic3RvcnlCbG9ja1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbem9vbUxldmVsXT1cInpvb21MZXZlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt1c2VySWRdPVwidXNlcklkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2V4cG9zZWRJbmRleF09XCJleHBvc2VkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ZXhwb3NlZDogZXhwb3NlZEluZGV4ID09IGl9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlbW92ZVN0b3J5QmxvY2tFdmVudCk9XCJyZW1vdmVTdG9yeUJsb2NrKCRldmVudClcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGV4cG9zZUV2ZW50KT1cInNldEV4cG9zZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChub3RpZnkpPVwibm90aWZ5TXNnKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0b3J5LWJsb2NrIHt7IHN0b3J5QmxvY2sudHlwZcKgfX1cIj48L3N0b3J5YmxvY2s+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZFN0b3J5QmxvY2soJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwib25Nb3VzZUVudGVyKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cIm9uTW91c2VMZWF2ZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAobW91c2Vtb3ZlKT1cIm9uTW91c2VNb3ZlKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YWRkLWJ1dHRvbiAqbmdJZj1cImFkZEJ1dHRvbi52aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW29mZnNldFldPVwiYWRkQnV0dG9uLnRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhZGRTdG9yeUJsb2NrKCRldmVudClcIj48L2FkZC1idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250cm9sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ6b29tLWNvbnRyb2xzXCI+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9XCJab29tIGluXCIgKGNsaWNrKT1cInpvb21JbigpXCI+KzwvYT4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT1cIlpvb20gb3V0XCIgKGNsaWNrKT1cInpvb21PdXQoKVwiPiZuZGFzaDs8L2E+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgZGlyZWN0aXZlczogW1N0b3J5QmxvY2tDb21wb25lbnQsIFRpbWVsaW5lQ29tcG9uZW50LCBBZGRCdXR0b25Db21wb25lbnQsIE5nQ2xhc3NdLFxyXG4gICAgaW5wdXRzOiBbJ3VzZXJJZCddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIHN0b3J5QmxvY2tzOlN0b3J5QmxvY2tbXTtcclxuICAgIHB1YmxpYyBzdG9yeUJsb2NrVHlwZXM6U3RvcnlCbG9ja1R5cGVbXTtcclxuICAgIHB1YmxpYyBzdG9yeUJsb2NrRGVmYXVsdFR5cGVzOlN0b3J5QmxvY2tUeXBlW107XHJcbiAgICBwdWJsaWMgem9vbUxldmVsO1xyXG4gICAgcHVibGljIGV4cG9zZWRJbmRleDtcclxuICAgIHB1YmxpYyBleHBvc2VkU3RvcnlCbG9jaztcclxuICAgIHB1YmxpYyBhZGRCdXR0b247XHJcbiAgICBwdWJsaWMgdG9rZW46c3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgbWVudVZpc2libGU7XHJcbiAgICBwdWJsaWMgdXNlcklkO1xyXG4gICAgcHVibGljIGFjY2Vzc0Zvcm1WaXNpYmxlO1xyXG4gICAgcHJpdmF0ZSBtYXhJbmRleCA9IDA7XHJcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvbjtcclxuXHJcbiAgICBAT3V0cHV0KCkgbm90aWZ5OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIGV4cG9zZVN0b3J5QmxvY2s6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgc3RvcnlCbG9ja0xpc3Q6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6TG9nZ2VyU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgc3RvcnlCbG9ja1NlcnZpY2U6U3RvcnlCbG9ja1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgd2ViU3RvcmFnZVNlcnZpY2U6V2ViU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXV0aFNlcnZpY2UuYXV0aFN0YXR1c0NoYW5nZSQuc3Vic2NyaWJlKGV2ZW50ID0+IHRoaXMuYXV0aFN0YXR1c0NoYW5nZWQoZXZlbnQpKTtcclxuICAgICAgICBzdG9yeUJsb2NrU2VydmljZS5hZGRSZXF1ZXN0JC5zdWJzY3JpYmUoZXZlbnQgPT4gdGhpcy5hZGRTdG9yeUJsb2NrKGV2ZW50KSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTphbnkge1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja3MgPSBbXTtcclxuICAgICAgICB0aGlzLmdldFN0b3J5QmxvY2tUeXBlcygpO1xyXG4gICAgICAgIHRoaXMuZ2V0U3RvcnlCbG9ja3ModGhpcy51c2VySWQpO1xyXG4gICAgICAgIHRoaXMuem9vbUxldmVsID0gNDtcclxuICAgICAgICB0aGlzLmV4cG9zZWRJbmRleCA9IC0xO1xyXG4gICAgICAgIHRoaXMuZXhwb3NlZFN0b3J5QmxvY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYWRkQnV0dG9uID0ge1xyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgdG9wOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1lbnVWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NGb3JtVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uID0ge1xyXG4gICAgICAgICAgICB0eXBlOiBudWxsLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGF1dGhVc2VyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRJZEZyb21Ub2tlbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBhbm9ueW1vdXNUb2tlbiA9IHRoaXMud2ViU3RvcmFnZVNlcnZpY2UuZ2V0KCdhbm9ueW1vdXNfdG9rZW4nKTtcclxuICAgICAgICAgICAgaWYgKCFhbm9ueW1vdXNUb2tlbikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFub255bW91c1Rva2VuID0gdGhpcy5hdXRoU2VydmljZS5nZW5lcmF0ZUFub255bW91c1Rva2VuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYlN0b3JhZ2VTZXJ2aWNlLnB1dCgnYW5vbnltb3VzX3Rva2VuJywgYW5vbnltb3VzVG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmdldElkRnJvbUFub255bW91c1Rva2VuKGFub255bW91c1Rva2VuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXV0aFN0YXR1c0NoYW5nZWQoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hCbG9ja0xpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoQmxvY2tMaXN0KCkge1xyXG4gICAgICAgIHRoaXMudXNlcklkID0gdGhpcy5hdXRoVXNlcigpO1xyXG4gICAgICAgIHRoaXMuZ2V0U3RvcnlCbG9ja3ModGhpcy51c2VySWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0b3J5QmxvY2tUeXBlcygpIHtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tUeXBlcyA9IHRoaXMuc3RvcnlCbG9ja1NlcnZpY2UuZ2V0U3RvcnlCbG9ja1R5cGVzKCk7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrRGVmYXVsdFR5cGVzID0gdGhpcy5zdG9yeUJsb2NrU2VydmljZS5nZXRTdG9yeUJsb2NrRGVmYXVsdFR5cGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RvcnlCbG9ja3MoaWQpIHtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdldFN0b3J5QmxvY2tzKGlkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2NrcyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heEluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RvcnlCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdG9yeUJsb2Nrc1tpXS50eXBlID09PSAnY2hhcHRlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXhJbmRleCA9IE1hdGgubWF4KHRoaXMubWF4SW5kZXgsIHRoaXMuc3RvcnlCbG9ja3NbaV0uYmxvY2tJZCB8fCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3RvcnlCbG9ja3MgfHwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnZ2V0U3RvcnlCbG9ja3MnLCAnTm8gYmxvY2tzIHJlY2VpdmVkIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcnlCbG9ja1NlcnZpY2UuZ2VuZXJhdGVUZXN0RGF0YSh0aGlzLnVzZXJJZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlRGVmYXVsdEJsb2NrcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tzID0gc2F2ZURlZmF1bHRCbG9ja3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2FsY3VsYXRlU3RvcnlCbG9ja051bWJlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdnZXRTdG9yeUJsb2NrcycsICdMb2FkZWQgJyArIHRoaXMuc3RvcnlCbG9ja3MubGVuZ3RoICsgJyBibG9ja3MnLCB0aGlzLnN0b3J5QmxvY2tzKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2FsY3VsYXRlU3RvcnlCbG9ja051bWJlcnMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVyciksXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcnlCbG9ja0xpc3QuZW1pdCh0aGlzLnN0b3J5QmxvY2tzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnZ2V0U3RvcnlCbG9ja3MnLCAnTG9hZGVkICcgKyB0aGlzLnN0b3J5QmxvY2tzLmxlbmd0aCArICcgYmxvY2tzJywgdGhpcy5zdG9yeUJsb2NrcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU3RvcnlCbG9jayhpbmRleCkge1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tMaXN0LmVtaXQodGhpcy5zdG9yeUJsb2Nrcyk7XHJcbiAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZVN0b3J5QmxvY2tOdW1iZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjYWxjdWxhdGVTdG9yeUJsb2NrTnVtYmVycygpIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ3JlY2FsY3VsYXRlU3RvcnlCbG9ja051bWJlcnMnLCAnU29ydGluZyBibG9ja3M6IGJlZm9yZScsIHRoaXMuc3RvcnlCbG9ja3MpO1xyXG4gICAgICAgIHZhciBjdXJyZW50VHlwZXMgPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RvcnlCbG9ja1R5cGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUeXBlc1t0aGlzLnN0b3J5QmxvY2tUeXBlc1tpXS5pZF0gPSB0aGlzLnN0b3J5QmxvY2tUeXBlc1tpXTtcclxuICAgICAgICAgICAgY3VycmVudFR5cGVzW3RoaXMuc3RvcnlCbG9ja1R5cGVzW2ldLmlkXS5pbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RvcnlCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRUeXBlID0gdGhpcy5zdG9yeUJsb2Nrc1tpXS50eXBlIHx8IHRoaXMuc3RvcnlCbG9ja0RlZmF1bHRUeXBlc1swXS5pZDtcclxuICAgICAgICAgICAgY3VycmVudFR5cGVzW2N1cnJlbnRUeXBlXSA9IGN1cnJlbnRUeXBlc1tjdXJyZW50VHlwZV0gfHwgdGhpcy5zdG9yeUJsb2NrRGVmYXVsdFR5cGVzWzBdO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tzW2ldLmJsb2NrTnVtYmVyID0gY3VycmVudFR5cGVzW2N1cnJlbnRUeXBlXS5pbmRleCB8fCAwO1xyXG5cclxuICAgICAgICAgICAgY3VycmVudFR5cGVzW2N1cnJlbnRUeXBlXS5pbmRleCsrO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuc3RvcnlCbG9ja1R5cGVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdG9yeUJsb2NrVHlwZXNbal0ubGV2ZWwgPiBjdXJyZW50VHlwZXNbY3VycmVudFR5cGVdLmxldmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFR5cGVzW3RoaXMuc3RvcnlCbG9ja1R5cGVzW2pdLmlkXS5pbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdyZWNhbGN1bGF0ZVN0b3J5QmxvY2tOdW1iZXJzJywgJ1NvcnRpbmcgYmxvY2tzOiBhZnRlcicsIHRoaXMuc3RvcnlCbG9ja3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHpvb21JbigpIHtcclxuICAgICAgICBpZiAodGhpcy56b29tTGV2ZWwgPCAxMCkge1xyXG4gICAgICAgICAgICB0aGlzLnpvb21MZXZlbCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnlNc2coe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ21lc3NhZ2UnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ01heCB6b29tIHJlYWNoZWQnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB6b29tT3V0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnpvb21MZXZlbCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy56b29tTGV2ZWwtLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5TXNnKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdtZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdNaW5pbXVtIHpvb20gcmVhY2hlZCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VFbnRlcihldmVudCkge1xyXG4gICAgICAgIHRoaXMuYWRkQnV0dG9uID0ge1xyXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB0b3A6IGV2ZW50LnlcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VMZWF2ZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuYWRkQnV0dG9uID0ge1xyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgdG9wOiAwXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlTW92ZShldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkZEJ1dHRvbi52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQnV0dG9uLnRvcCA9IGV2ZW50Lnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFN0b3J5QmxvY2soZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmFkZEJ1dHRvbiA9IHtcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvcDogMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciB6b29tQ29udmVyc2lvbkZhY3RvciA9IHRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0ZXAgKyBNYXRoLmV4cCh0aGlzLnpvb21MZXZlbCAqIHRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0cmVuZ3RoKTtcclxuXHJcbiAgICAgICAgdmFyIHBvc2l0aW9uQXRab29tID0gKChldmVudC5wYWdlWSAtIHRoaXMuY29uZmlndXJhdGlvbi56b29tLm9mZnNldCkgLyB6b29tQ29udmVyc2lvbkZhY3Rvcik7XHJcblxyXG4gICAgICAgIHZhciBuZXdTdG9yeUJsb2NrOlN0b3J5QmxvY2sgPSA8U3RvcnlCbG9jaz4ge1xyXG4gICAgICAgICAgICBibG9ja0lkOiB0aGlzLm1heEluZGV4ICsgMSxcclxuICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgICAgIHRpbWVQb3NpdGlvbjogcG9zaXRpb25BdFpvb20sXHJcbiAgICAgICAgICAgIGltcG9ydGFuY2U6IDMsXHJcbiAgICAgICAgICAgIHR5cGU6ICdjaGFwdGVyJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubWF4SW5kZXgrKztcclxuXHJcbiAgICAgICAgdmFyIHRtcEFycmF5UG9zID0gMDtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0b3J5QmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0b3J5QmxvY2tzW2ldLnRpbWVQb3NpdGlvbiA+IHBvc2l0aW9uQXRab29tKSB7XHJcbiAgICAgICAgICAgICAgICB0bXBBcnJheVBvcyA9IGk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2Nrcy5zcGxpY2UodG1wQXJyYXlQb3MsIDAsIG5ld1N0b3J5QmxvY2spO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ2FkZFN0b3J5QmxvY2snLCAnQWRkaW5nIGJsb2NrIGluZGV4ICcgKyB0bXBBcnJheVBvcyk7XHJcbiAgICAgICAgdGhpcy5zZXRFeHBvc2VkKHRtcEFycmF5UG9zKTtcclxuXHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXhwb3NlZChpbmRleCkge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnc2V0RXhwb3NlZCcsICdTZXR0aW5nIGJsb2NrICcgKyBpbmRleCArICcgZXhwb3NlZCcpO1xyXG4gICAgICAgIHRoaXMucmVjYWxjdWxhdGVTdG9yeUJsb2NrTnVtYmVycygpO1xyXG4gICAgICAgIHRoaXMuZXhwb3NlZEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5leHBvc2VkU3RvcnlCbG9jayA9IGluZGV4ID49IDAgPyB0aGlzLnN0b3J5QmxvY2tzW2luZGV4XSA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5jaGFuZ2VFeHBvc2VkSW5kZXgoaW5kZXgpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCduby1zY3JvbGwnKTtcclxuICAgICAgICB0aGlzLmV4cG9zZVN0b3J5QmxvY2suZW1pdCh0aGlzLmV4cG9zZWRTdG9yeUJsb2NrKTtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tMaXN0LmVtaXQodGhpcy5zdG9yeUJsb2Nrcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZSgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RvcnlCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5zYXZlU3RvcnlCbG9jayh0aGlzLnVzZXJJZCwgdGhpcy5zdG9yeUJsb2Nrc1tpXSkuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeU1zZyhub3RpZmljYXRpb24pIHtcclxuICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KG5vdGlmaWNhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTWVudSh2aXNpYmlsaXR5KSB7XHJcbiAgICAgICAgdGhpcy5tZW51VmlzaWJsZSA9IHZpc2liaWxpdHk7XHJcbiAgICAgICAgaWYgKHZpc2liaWxpdHkpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge05nQ2xhc3N9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcbmltcG9ydCB7Tm90aWZpY2F0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9ub3RpZmljYXRpb24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2lkZWJhckNvbXBvbmVudH0gZnJvbSBcIi4vc2lkZWJhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQge1dlYlN0b3JhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvd2Vic3RvcmFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QXV0aEZvcm1Db21wb25lbnR9IGZyb20gXCIuL2F1dGgtZm9ybS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlLCBERUJVR19MRVZFTH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3RvcnlDb21wb25lbnR9IGZyb20gXCIuL3N0b3J5LmNvbXBvbmVudFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtY29udGVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxzdG9yeSBcclxuICAgICAgICAgICAgW3VzZXJJZF09XCJ1c2VySWRcIlxyXG4gICAgICAgICAgICAoZXhwb3NlU3RvcnlibG9jayk9XCJzZXRFeHBvc2VkKGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChub3RpZnkpPVwibm90aWZ5KCRldmVudClcIlxyXG4gICAgICAgICAgICAoc3RvcnlCbG9ja0xpc3QpPVwic2V0U3RvcnlCbG9ja3MoZXZlbnQpXCJcclxuICAgICAgICA+PC9zdG9yeT5cclxuICAgICAgICA8YXNpZGUgW25nQ2xhc3NdPVwie3Zpc2libGU6IG1lbnVWaXNpYmxlfVwiPlxyXG4gICAgICAgICAgICA8c2lkZWJhclxyXG4gICAgICAgICAgICAoc3RhcnREcmFnZ2luZyk9XCJ0b2dnbGVNZW51KGZhbHNlKVwiXHJcbiAgICAgICAgICAgIChlbmREcmFnZ2luZyk9XCJhZGRTdG9yeUJsb2NrKCRldmVudClcIlxyXG4gICAgICAgICAgICBbc3RvcnlCbG9ja109XCJleHBvc2VkU3RvcnlCbG9ja1wiIFtzdG9yeUJsb2Nrc0xlbmd0aF09XCJzdG9yeUJsb2Nrcy5sZW5ndGhcIj48L3NpZGViYXI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwidXNlci1hc2lkZVwiIChjbGljayk9XCJkb3dubG9hZFBkZigpXCI+RG93bmxvYWQgUERGPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cInVzZXItYXNpZGVcIiAqbmdJZj1cIiFpc0xvZ2dlZEluKClcIiAoY2xpY2spPVwic2hvd0FjY2Vzc0Zvcm0oKVwiPkxvZ2luL1NpZ251cDwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJ1c2VyLWFzaWRlXCIgKm5nSWY9XCJpc0xvZ2dlZEluKClcIiAoY2xpY2spPVwibG9nT3V0KClcIj5Mb2dvdXQ8L2E+XHJcbiAgICAgICAgICAgIDxhIGlkPVwiY2xvc2UtbWVudVwiIChjbGljayk9XCJ0b2dnbGVNZW51KGZhbHNlKVwiPjwvYT5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgIDxoZWFkZXI+PGEgaWQ9XCJidXJnZXJcIiAoY2xpY2spPVwidG9nZ2xlTWVudSh0cnVlKVwiPjxpIGNsYXNzPVwiZmEgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2E+PC9oZWFkZXI+XHJcbiAgICAgICAgPGF1dGgtZm9ybSBcclxuICAgICAgICAgICAgKm5nSWY9XCJhY2Nlc3NGb3JtVmlzaWJsZVwiIFxyXG4gICAgICAgICAgICAoY2xvc2VNb2RhbCk9XCJoaWRlQWNjZXNzRm9ybSgpXCJcclxuICAgICAgICAgICAgKG5vdGlmeSk9XCJub3RpZnkoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICA8L2F1dGgtZm9ybT5cclxuICAgICAgICA8bm90aWZpY2F0aW9uIFtuZ0NsYXNzXT1cIntlcnJvcjogbm90aWZpY2F0aW9uLnR5cGUgPT0gJ2Vycm9yJywgc3VjY2Vzczogbm90aWZpY2F0aW9uLnR5cGUgPT0gJ3N1Y2Nlc3MnfVwiPjwvbm90aWZpY2F0aW9uPlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczogW10sXHJcbiAgICBkaXJlY3RpdmVzOiBbU3RvcnlDb21wb25lbnQsIE5vdGlmaWNhdGlvbkNvbXBvbmVudCwgU2lkZWJhckNvbXBvbmVudCwgQXV0aEZvcm1Db21wb25lbnQsIE5nQ2xhc3NdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBWaWV3Q2hpbGQoTm90aWZpY2F0aW9uQ29tcG9uZW50KSBub3RpZmljYXRpb25Db21wb25lbnQ6Tm90aWZpY2F0aW9uQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSB1c2VySWQ7XHJcbiAgICBwdWJsaWMgdG9rZW46c3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgbWVudVZpc2libGU7XHJcbiAgICBwdWJsaWMgYWNjZXNzRm9ybVZpc2libGU7XHJcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvbjtcclxuICAgIHByaXZhdGUgZXhwb3NlZFN0b3J5QmxvY2s7XHJcbiAgICBwcml2YXRlIHN0b3J5QmxvY2tzID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBsb2dnZXI6TG9nZ2VyU2VydmljZSwgXHJcbiAgICAgICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOkNvbmZpZ3VyYXRpb24sXHJcbiAgICAgICAgcHJpdmF0ZSB3ZWJTdG9yYWdlU2VydmljZTpXZWJTdG9yYWdlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgIGF1dGhTZXJ2aWNlLmF1dGhTdGF0dXNDaGFuZ2UkLnN1YnNjcmliZShldmVudCA9PiB0aGlzLmF1dGhTdGF0dXNDaGFuZ2VkKGV2ZW50KSlcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOmFueSB7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSB0aGlzLmF1dGhVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5tZW51VmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWNjZXNzRm9ybVZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbiA9IHtcclxuICAgICAgICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFeHBvc2VkKGV2ZW50KXtcclxuICAgICAgICB0aGlzLmV4cG9zZWRTdG9yeUJsb2NrID0gZXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RvcnlCbG9ja3MoZXZlbnQpe1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja3MgPSBldmVudCB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhdXRoVXNlcigpe1xyXG4gICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRJZEZyb21Ub2tlbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBhbm9ueW1vdXNUb2tlbiA9IHRoaXMud2ViU3RvcmFnZVNlcnZpY2UuZ2V0KCdhbm9ueW1vdXNfdG9rZW4nKTtcclxuICAgICAgICAgICAgaWYgKCFhbm9ueW1vdXNUb2tlbikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFub255bW91c1Rva2VuID0gdGhpcy5hdXRoU2VydmljZS5nZW5lcmF0ZUFub255bW91c1Rva2VuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYlN0b3JhZ2VTZXJ2aWNlLnB1dCgnYW5vbnltb3VzX3Rva2VuJywgYW5vbnltb3VzVG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmdldElkRnJvbUFub255bW91c1Rva2VuKGFub255bW91c1Rva2VuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VG9rZW4odmFsdWU6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLndlYlN0b3JhZ2VTZXJ2aWNlLnB1dCgndG9rZW4nLHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2tlbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLndlYlN0b3JhZ2VTZXJ2aWNlLmdldCgndG9rZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBhdXRoU3RhdHVzQ2hhbmdlZChldmVudCl7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSB0aGlzLmF1dGhVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdhdXRoU3RhdHVzQ2hhbmdlZCcsIHsgZXZlbnQgOiBldmVudH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dBY2Nlc3NGb3JtKCkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlTWVudShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdzaG93QWNjZXNzRm9ybScsIHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpKTtcclxuICAgICAgICB0aGlzLmFjY2Vzc0Zvcm1WaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUFjY2Vzc0Zvcm0oKSB7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NGb3JtVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dPdXQoKXtcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTG9nZ2VkSW4oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5KG5vdGlmaWNhdGlvbil7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24gPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IG5vdGlmaWNhdGlvbi50eXBlIHx8IG51bGwsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG5vdGlmaWNhdGlvbi5tZXNzYWdlIHx8ICcnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25Db21wb25lbnQuc2hvdyhub3RpZmljYXRpb24ubWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRQZGYoKXtcclxuICAgICAgICAvLyB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmRvd25sb2FkUGRmKHRoaXMuc3RvcnlCbG9ja3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZU1lbnUodmlzaWJpbGl0eSl7XHJcbiAgICAgICAgdGhpcy5tZW51VmlzaWJsZSA9IHZpc2liaWxpdHk7XHJcbiAgICAgICAgaWYodmlzaWJpbGl0eSl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCduby1zY3JvbGwnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XHJcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2FwcC1jb250ZW50LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9ICAgIGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7RXhjZXB0aW9uSGFuZGxlciwgcHJvdmlkZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtXZWJTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvd2Vic3RvcmFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1NlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL3N0b3J5YmxvY2tzLnNlcnZpY2VcIjtcclxuXHJcbmJvb3RzdHJhcChcclxuICAgIEFwcENvbXBvbmVudCwgXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBIVFRQX1BST1ZJREVSUywgXHJcbiAgICAgICAgICAgIENvbmZpZ3VyYXRpb24sIFxyXG4gICAgICAgICAgICBwcm92aWRlKEV4Y2VwdGlvbkhhbmRsZXIsICB7dXNlQ2xhc3M6IExvZ2dlclNlcnZpY2V9KSwgXHJcbiAgICAgICAgICAgIEF1dGhTZXJ2aWNlLCBcclxuICAgICAgICAgICAgTG9nZ2VyU2VydmljZSxcclxuICAgICAgICAgICAgV2ViU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgICAgIFN0b3J5QmxvY2tTZXJ2aWNlXHJcbiAgICAgICAgXVxyXG4pO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
