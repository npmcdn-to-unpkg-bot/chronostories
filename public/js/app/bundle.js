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
System.register("models/storyblock", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("mock/mock-storyblocks", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var STORYBLOCKS;
    return {
        setters:[],
        execute: function() {
            exports_2("STORYBLOCKS", STORYBLOCKS = [
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
System.register("models/storyblock-type", [], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("mock/mock-storyblock-types", [], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var STORYBLOCK_TYPES;
    return {
        setters:[],
        execute: function() {
            exports_4("STORYBLOCK_TYPES", STORYBLOCK_TYPES = [
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
System.register("services/logger.service", ["angular2/core", "config/configuration", "rxjs/Observable"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
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
            exports_5("LoggerService", LoggerService);
            exports_5("DEBUG_LEVEL", DEBUG_LEVEL = {
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
System.register("config/configuration", ["angular2/core", "services/logger.service"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
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
                    this.apiBasePath = '';
                    this.debugLevel = logger_service_1.DEBUG_LEVEL.INFO;
                }
                Configuration = __decorate([
                    core_2.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Configuration);
                return Configuration;
            }());
            exports_6("Configuration", Configuration);
        }
    }
});
System.register("services/storyblocks.service", ["angular2/core", 'angular2/http', 'rxjs/Rx', "rxjs/Observable", 'rxjs/add/operator/share', "mock/mock-storyblocks", "mock/mock-storyblock-types", "config/configuration", "services/logger.service"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_3, http_1, Observable_2, mock_storyblocks_1, mock_storyblock_types_1, configuration_2, logger_service_2;
    var StoryBlockService;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
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
                    this.indexChange$ = new Observable_2.Observable(function (observer) {
                        return _this._observer = observer;
                    }).share();
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
                StoryBlockService = __decorate([
                    core_3.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_2.LoggerService, http_1.Http, configuration_2.Configuration])
                ], StoryBlockService);
                return StoryBlockService;
            }());
            exports_7("StoryBlockService", StoryBlockService);
        }
    }
});
System.register("services/utils.service", ["angular2/core"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_4;
    var UtilsService;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
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
                    core_4.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UtilsService);
                return UtilsService;
            }());
            exports_8("UtilsService", UtilsService);
        }
    }
});
System.register("components/storyblock.component", ["angular2/core", "services/utils.service", "angular2/src/animate/animation_builder", "services/storyblocks.service", "config/configuration", "services/logger.service"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_5, utils_service_1, animation_builder_1, storyblocks_service_1, configuration_3, logger_service_3;
    var StoryBlockComponent;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (utils_service_1_1) {
                utils_service_1 = utils_service_1_1;
            },
            function (animation_builder_1_1) {
                animation_builder_1 = animation_builder_1_1;
            },
            function (storyblocks_service_1_1) {
                storyblocks_service_1 = storyblocks_service_1_1;
            },
            function (configuration_3_1) {
                configuration_3 = configuration_3_1;
            },
            function (logger_service_3_1) {
                logger_service_3 = logger_service_3_1;
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
                    this.zoomEvent = new core_5.EventEmitter();
                    this.exposeEvent = new core_5.EventEmitter();
                    this.removeStoryBlockEvent = new core_5.EventEmitter();
                    this.notify = new core_5.EventEmitter();
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
                    this.logger.log(logger_service_3.DEBUG_LEVEL.VERBOSE, 'zoomChanged', '', {
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
                    this.logger.log(logger_service_3.DEBUG_LEVEL.VERBOSE, 'fadeIn', '', {
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
                        this.logger.log(logger_service_3.DEBUG_LEVEL.VERBOSE, 'fadeOut', '', {
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
                            this.logger.log(logger_service_3.DEBUG_LEVEL.VERBOSE, 'fadeOut', '', {
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
                    this.logger.log(logger_service_3.DEBUG_LEVEL.VERBOSE, 'changePositionOnZoom', '', {
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
                        this.logger.log(logger_service_3.DEBUG_LEVEL.VERBOSE, 'changePositionOnZoom', '', {
                            storyBlock: this.index,
                            previousZoom: this._previousZoomLevel,
                            currentZoom: this._zoomLevel,
                            importance: this.storyBlockInfo.importance,
                            message: 'Fading in'
                        });
                        toStyle['opacity'] = 1;
                    }
                    else {
                        this.logger.log(logger_service_3.DEBUG_LEVEL.VERBOSE, 'changePositionOnZoom', '', {
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
                        this.logger.log(logger_service_3.DEBUG_LEVEL.VERBOSE, 'changePositionOnZoom', '', {
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
                    this.logger.log(logger_service_3.DEBUG_LEVEL.INFO, 'edit', 'Saving temporary data ', this.storyBlockInfo);
                    this.storyBlockLocalSave = JSON.parse(JSON.stringify(this.storyBlockInfo));
                    this.exposeEvent.emit(index);
                    this.focus();
                };
                StoryBlockComponent.prototype.remove = function (index, event) {
                    var _this = this;
                    this.storyBlockService.deleteStoryBlock(this.userId, this.storyBlockInfo).subscribe(function (data) {
                        _this.logger.log(logger_service_3.DEBUG_LEVEL.INFO, 'remove', 'Received data', data);
                    }, function (error) {
                        _this.logger.log(logger_service_3.DEBUG_LEVEL.WARN, 'remove', 'Error while removing', _this.storyBlockInfo, error);
                        _this.notify.emit({
                            type: 'error',
                            message: 'Error. Please try again.'
                        });
                    }, function () {
                        _this.logger.log(logger_service_3.DEBUG_LEVEL.INFO, 'remove', 'Removing block index ' + _this.index);
                        _this.notify.emit({
                            type: 'success',
                            message: 'Removed successfully.'
                        });
                        _this.removeStoryBlockEvent.emit(_this.index);
                    });
                };
                StoryBlockComponent.prototype.save = function (index, event) {
                    var _this = this;
                    this.logger.log(logger_service_3.DEBUG_LEVEL.INFO, 'save', 'I am about to save', this.storyBlockInfo);
                    if (!(this.storyBlockInfo.title == '' && this.storyBlockInfo.description == '')) {
                        this.storyBlockService.saveStoryBlock(this.userId, this.storyBlockInfo).subscribe(function (data) {
                            _this.storyBlockInfo = data;
                            _this.logger.log(logger_service_3.DEBUG_LEVEL.INFO, 'save', 'Received ', data);
                            _this.logger.log(logger_service_3.DEBUG_LEVEL.INFO, 'save', 'Saving temporary data ', data, _this.storyBlockInfo);
                            _this.storyBlockLocalSave = JSON.parse(JSON.stringify(_this.storyBlockInfo));
                        }, function (error) {
                            _this.logger.log(logger_service_3.DEBUG_LEVEL.WARN, 'save', 'Error while saving', _this.storyBlockInfo, error);
                            _this.notify.emit({
                                type: 'error',
                                message: 'Error. Please try again.'
                            });
                        }, function () {
                            _this.logger.log(logger_service_3.DEBUG_LEVEL.INFO, 'save', 'Saved ', _this.storyBlockInfo);
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
                        this.logger.log(logger_service_3.DEBUG_LEVEL.INFO, 'close', 'Removing block index ' + this.index);
                        this.removeStoryBlockEvent.emit(this.index);
                    }
                };
                __decorate([
                    core_5.Output(), 
                    __metadata('design:type', core_5.EventEmitter)
                ], StoryBlockComponent.prototype, "zoomEvent", void 0);
                __decorate([
                    core_5.Output(), 
                    __metadata('design:type', core_5.EventEmitter)
                ], StoryBlockComponent.prototype, "exposeEvent", void 0);
                __decorate([
                    core_5.Output(), 
                    __metadata('design:type', core_5.EventEmitter)
                ], StoryBlockComponent.prototype, "removeStoryBlockEvent", void 0);
                __decorate([
                    core_5.Output(), 
                    __metadata('design:type', core_5.EventEmitter)
                ], StoryBlockComponent.prototype, "notify", void 0);
                __decorate([
                    core_5.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], StoryBlockComponent.prototype, "zoomLevel", null);
                __decorate([
                    core_5.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], StoryBlockComponent.prototype, "exposedIndex", null);
                StoryBlockComponent = __decorate([
                    core_5.Component({
                        selector: 'storyblock',
                        template: "\n        <div class=\"index\"><span *ngIf=\"storyBlockInfo.type == 'chapter'\">{{utilsService.getRomanNumeral(storyBlockInfo.blockNumber + 1)}}</span></div>\n        <div class=\"text-container\">\n            <input class=\"title\" [attr.readonly]=\"_exposed ? null : true\" [(ngModel)]=\"storyBlockInfo.title\" placeholder=\"Insert a title\" />\n            <textarea class=\"description\" [attr.readonly]=\"_exposed ? null : true\" [(ngModel)]=\"storyBlockInfo.description\" placeholder=\"Start writing your story here...\"></textarea>\n            <div class=\"default-actions\">\n                <a (click)=\"edit(index, $event)\" class=\"button inline-button primary\">Edit</a>\n                <a (click)=\"remove(index, $event)\" [ngClass]=\"{disabled:!hasId()}\" class=\"button inline-button alert\">Remove</a>\n            </div>\n            <div class=\"exposed-actions\">\n                <a (click)=\"save(index, $event)\" class=\"button inline-button primary\">Save</a>\n                <a (click)=\"close()\" class=\"button inline-button secondary\">Close</a>\n            </div>\n        </div>\n    ",
                        providers: [utils_service_1.UtilsService, storyblocks_service_1.StoryBlockService],
                        inputs: ['storyBlockInfo', 'index', 'userId']
                    }), 
                    __metadata('design:paramtypes', [logger_service_3.LoggerService, animation_builder_1.AnimationBuilder, core_5.ElementRef, utils_service_1.UtilsService, storyblocks_service_1.StoryBlockService, configuration_3.Configuration])
                ], StoryBlockComponent);
                return StoryBlockComponent;
            }());
            exports_9("StoryBlockComponent", StoryBlockComponent);
        }
    }
});
System.register("components/timeline.component", ["angular2/core"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_6;
    var TimelineComponent;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            }],
        execute: function() {
            TimelineComponent = (function () {
                function TimelineComponent() {
                }
                TimelineComponent = __decorate([
                    core_6.Component({
                        selector: 'timeline',
                        template: "\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TimelineComponent);
                return TimelineComponent;
            }());
            exports_10("TimelineComponent", TimelineComponent);
        }
    }
});
System.register("components/add-button.component", ["angular2/core"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_7;
    var AddButtonComponent;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
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
                    core_7.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], AddButtonComponent.prototype, "offsetY", null);
                AddButtonComponent = __decorate([
                    core_7.Component({
                        selector: 'add-button',
                        template: "\n        <a><span>+</span></a>\n    ",
                        inputs: ['offsetY']
                    }), 
                    __metadata('design:paramtypes', [core_7.ElementRef])
                ], AddButtonComponent);
                return AddButtonComponent;
            }());
            exports_11("AddButtonComponent", AddButtonComponent);
        }
    }
});
System.register("components/notification.component", ["angular2/core"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_8;
    var NotificationComponent;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
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
                    core_8.Component({
                        selector: 'notification',
                        template: "\n        <div>{{ _content\u00A0}}</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [core_8.ElementRef])
                ], NotificationComponent);
                return NotificationComponent;
            }());
            exports_12("NotificationComponent", NotificationComponent);
        }
    }
});
System.register("models/user", [], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User() {
                }
                return User;
            }());
            exports_13("User", User);
        }
    }
});
System.register("models/jwtToken", [], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("services/webstorage.service", ["angular2/core"], function(exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var core_9;
    var WebStorageService;
    return {
        setters:[
            function (core_9_1) {
                core_9 = core_9_1;
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
                    core_9.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], WebStorageService);
                return WebStorageService;
            }());
            exports_15("WebStorageService", WebStorageService);
        }
    }
});
System.register("services/auth.service", ["angular2/core", 'angular2/http', "services/webstorage.service", "config/configuration", "services/logger.service"], function(exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var core_10, http_2, webstorage_service_1, configuration_4, logger_service_4;
    var AuthService;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (webstorage_service_1_1) {
                webstorage_service_1 = webstorage_service_1_1;
            },
            function (configuration_4_1) {
                configuration_4 = configuration_4_1;
            },
            function (logger_service_4_1) {
                logger_service_4 = logger_service_4_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(logger, http, webStorageService, configuration) {
                    this.logger = logger;
                    this.http = http;
                    this.webStorageService = webStorageService;
                    this.configuration = configuration;
                }
                AuthService.prototype.logout = function () {
                    this.webStorageService.remove(this.configuration.token.name);
                    return true;
                };
                AuthService.prototype.login = function (user) {
                    this.logger.log(logger_service_4.DEBUG_LEVEL.INFO, 'login', 'Creating temporary data');
                    var headers = new http_2.Headers({
                        'Content-Type': 'application/x-www-form-urlencoded'
                    });
                    var options = new http_2.RequestOptions({
                        headers: headers
                    });
                    return this.http.post(this.configuration.apiBasePath + '/auth/login', "name=" + user.name + "&" +
                        "email=" + user.email + "&" +
                        "password=" + user.password, options)
                        .map(function (res) { return res.text(); })
                        .catch(this.logger.errorCatcher());
                };
                AuthService.prototype.register = function (user) {
                    this.logger.log(logger_service_4.DEBUG_LEVEL.INFO, 'register', 'Creating temporary data');
                    var headers = new http_2.Headers({
                        'Content-Type': 'application/x-www-form-urlencoded'
                    });
                    var options = new http_2.RequestOptions({
                        headers: headers
                    });
                    return this.http.post(this.configuration.apiBasePath + '/auth/register', "email=" + user.email + "&" +
                        "password=" + user.password, options)
                        .map(function (res) { return res.text(); })
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
                AuthService = __decorate([
                    core_10.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_4.LoggerService, http_2.Http, webstorage_service_1.WebStorageService, configuration_4.Configuration])
                ], AuthService);
                return AuthService;
            }());
            exports_16("AuthService", AuthService);
        }
    }
});
System.register("services/validators.service", [], function(exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
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
    exports_17("emailValidator", emailValidator);
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
    exports_17("matchingPasswords", matchingPasswords);
    return {
        setters:[],
        execute: function() {
            exports_17("emailRegexp", emailRegexp = '^[a-z0-9!#$%&\'*+\\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$');
        }
    }
});
System.register("components/log-message.component", ["angular2/core", "services/auth.service", "angular2/common", "services/webstorage.service"], function(exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var core_11, auth_service_1, common_1, webstorage_service_2;
    var LogMessageComponent;
    return {
        setters:[
            function (core_11_1) {
                core_11 = core_11_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (webstorage_service_2_1) {
                webstorage_service_2 = webstorage_service_2_1;
            }],
        execute: function() {
            LogMessageComponent = (function () {
                function LogMessageComponent() {
                    this.closeModal = new core_11.EventEmitter();
                }
                LogMessageComponent.prototype.close = function (event) {
                    this.closeModal.emit(event);
                };
                __decorate([
                    core_11.Input(), 
                    __metadata('design:type', Object)
                ], LogMessageComponent.prototype, "logMessage", void 0);
                __decorate([
                    core_11.Output(), 
                    __metadata('design:type', core_11.EventEmitter)
                ], LogMessageComponent.prototype, "closeModal", void 0);
                LogMessageComponent = __decorate([
                    core_11.Component({
                        selector: 'log-message',
                        template: "\n        <div class=\"modal-container\">\n            <div class=\"modal\">\n                <div class=\"flexbox flex-row\">\n                    <h1>{{logMessage.message}}</h1>\n                    <div><a class=\"close\" (click)=\"close($event)\"><i class=\"fa fa-times\" aria-hidden=\"true\">X</i></a></div>\n                </div>\n                <textarea class=\"description\" [attr.readonly]=\"true\" [(ngModel)]=\"logMessage.pretty\"></textarea>\n            </div>\n        </div>\n    ",
                        providers: [auth_service_1.AuthService, webstorage_service_2.WebStorageService],
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LogMessageComponent);
                return LogMessageComponent;
            }());
            exports_18("LogMessageComponent", LogMessageComponent);
        }
    }
});
System.register("components/debug-console.component", ["angular2/core", "services/logger.service", "components/log-message.component"], function(exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    var core_12, logger_service_5, log_message_component_1;
    var DebugConsoleComponent;
    return {
        setters:[
            function (core_12_1) {
                core_12 = core_12_1;
            },
            function (logger_service_5_1) {
                logger_service_5 = logger_service_5_1;
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
                    return message.level == logger_service_5.DEBUG_LEVEL.ERROR.name;
                };
                DebugConsoleComponent.prototype.isWarning = function (message) {
                    return message.level == logger_service_5.DEBUG_LEVEL.WARN.name;
                };
                DebugConsoleComponent = __decorate([
                    core_12.Component({
                        selector: 'debug-console',
                        template: "\n            <div>Debug errors:</div>\n            <div class=\"error-log\">\n                <div \n                    *ngFor=\"#logMessage of logMessages; #i = index\" \n                    >\n                    <a (click)=\"show(i)\" [ngClass]=\"{error: isError(logMessage), warning: isWarning(logMessage)}\">{{logMessage.message}}</a>\n                    <log-message\n                        *ngIf=\"i==openMessage\"\n                        (closeModal)=\"hide()\"\n                        [logMessage]=\"logMessage\"\n                    ></log-message>\n                </div>\n            </div>\n    ",
                        providers: [],
                        directives: [log_message_component_1.LogMessageComponent]
                    }), 
                    __metadata('design:paramtypes', [logger_service_5.LoggerService])
                ], DebugConsoleComponent);
                return DebugConsoleComponent;
            }());
            exports_19("DebugConsoleComponent", DebugConsoleComponent);
        }
    }
});
System.register("components/sidebar.component", ["angular2/core", "services/storyblocks.service", "services/utils.service", "services/logger.service", "components/debug-console.component"], function(exports_20, context_20) {
    "use strict";
    var __moduleName = context_20 && context_20.id;
    var core_13, storyblocks_service_2, utils_service_2, logger_service_6, debug_console_component_1;
    var SidebarComponent;
    return {
        setters:[
            function (core_13_1) {
                core_13 = core_13_1;
            },
            function (storyblocks_service_2_1) {
                storyblocks_service_2 = storyblocks_service_2_1;
            },
            function (utils_service_2_1) {
                utils_service_2 = utils_service_2_1;
            },
            function (logger_service_6_1) {
                logger_service_6 = logger_service_6_1;
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
                    this.startDragging = new core_13.EventEmitter();
                    this.endDragging = new core_13.EventEmitter();
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
                    this.endDragging.emit(e);
                };
                SidebarComponent.prototype.isDebug = function () {
                    return (location.search.indexOf('?debug') >= 0);
                };
                __decorate([
                    core_13.Output(), 
                    __metadata('design:type', core_13.EventEmitter)
                ], SidebarComponent.prototype, "startDragging", void 0);
                __decorate([
                    core_13.Output(), 
                    __metadata('design:type', core_13.EventEmitter)
                ], SidebarComponent.prototype, "endDragging", void 0);
                __decorate([
                    core_13.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], SidebarComponent.prototype, "storyBlock", null);
                __decorate([
                    core_13.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], SidebarComponent.prototype, "storyBlocksLength", null);
                SidebarComponent = __decorate([
                    core_13.Component({
                        selector: 'sidebar',
                        template: "\n        <div *ngIf=\"_index == -1\">\n            <div class=\"sidebar-action\">\n                <a class=\"create-storyblock\" draggable=\"true\" (dragstart)=\"dragStart($event)\" (dragend)=\"dragEnd($event)\">Create storyblock</a>\n            </div>\n            <div class=\"sidebar-count\">\n                <span class=\"label\">Total chapters</span><span class=\"count\">{{_storyBlocksLength}}</span>\n            </div>\n        </div>\n        <div *ngIf=\"_index >= 0 && !!_storyBlock\">\n            <div class=\"sidebar-action\">\n                <h3><span class=\"capital-letter\">Chapter</span> {{_storyBlock.blockNumber+1}}</h3>\n            </div>\n            <div class=\"sidebar-separator\"></div>\n            <div class=\"sidebar-action\">\n                <div class=\"form-group\">\n                    <label>Storyblock type</label>\n                    <div class=\"select-wrapper\">\n                        <select [(ngModel)]=\"_storyBlock.type\">\n                            <option *ngFor=\"#storyBlockType of storyBlockTypes\" value={{storyBlockType.id}}>{{storyBlockType.name}}</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"sidebar-separator\"></div>\n            <div class=\"sidebar-count\">\n                <span class=\"label\">Total characters</span><span class=\"count\">{{_storyBlock.description.length}}</span>\n            </div>\n            <div class=\"sidebar-info\" *ngIf=\"!!_storyBlock.createdAt\">\n                <span class=\"label\">Created</span><span class=\"info\">{{utilsService.getHumanDate(_storyBlock.createdAt)}}</span>\n            </div>\n            <div class=\"sidebar-info\" *ngIf=\"!!_storyBlock.lastModifiedAt\">\n                <span class=\"label\">Last modified</span><span class=\"info\">{{utilsService.getHumanDate(_storyBlock.lastModifiedAt)}}</span>\n            </div>\n        </div>\n        <debug-console *ngIf=\"isDebug()\"></debug-console>\n    ",
                        providers: [utils_service_2.UtilsService],
                        directives: [debug_console_component_1.DebugConsoleComponent],
                        inputs: ['storyBlock', 'storyBlocksLength']
                    }), 
                    __metadata('design:paramtypes', [logger_service_6.LoggerService, storyblocks_service_2.StoryBlockService, utils_service_2.UtilsService])
                ], SidebarComponent);
                return SidebarComponent;
            }());
            exports_20("SidebarComponent", SidebarComponent);
        }
    }
});
System.register("components/signin-form.component", ["angular2/core", "models/user", "services/auth.service", "angular2/common", "services/validators.service", "services/webstorage.service", "config/configuration", "services/logger.service"], function(exports_21, context_21) {
    "use strict";
    var __moduleName = context_21 && context_21.id;
    var core_14, user_1, auth_service_2, common_2, validators_service_1, webstorage_service_3, configuration_5, logger_service_7;
    var SignInComponent;
    return {
        setters:[
            function (core_14_1) {
                core_14 = core_14_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (auth_service_2_1) {
                auth_service_2 = auth_service_2_1;
            },
            function (common_2_1) {
                common_2 = common_2_1;
            },
            function (validators_service_1_1) {
                validators_service_1 = validators_service_1_1;
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
            SignInComponent = (function () {
                function SignInComponent(logger, authService, builder, webStorageService, configuration) {
                    this.logger = logger;
                    this.authService = authService;
                    this.builder = builder;
                    this.webStorageService = webStorageService;
                    this.configuration = configuration;
                    this.user = new user_1.User();
                    this.submitted = false;
                    this.closeModal = new core_14.EventEmitter();
                    this.swapWindow = new core_14.EventEmitter();
                    this.notify = new core_14.EventEmitter();
                    this.authStatus = new core_14.EventEmitter();
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
                            _this.logger.log(logger_service_7.DEBUG_LEVEL.WARN, 'onSignIn', 'Server error', err);
                            _this.notify.emit({
                                type: 'error',
                                message: 'Invalid email or password'
                            });
                        }, function () {
                            _this.logger.log(logger_service_7.DEBUG_LEVEL.INFO, 'onSignIn', 'logged in');
                            _this.authStatus.emit('Login');
                            _this.close('');
                        });
                    }
                };
                __decorate([
                    core_14.Output(), 
                    __metadata('design:type', core_14.EventEmitter)
                ], SignInComponent.prototype, "closeModal", void 0);
                __decorate([
                    core_14.Output(), 
                    __metadata('design:type', core_14.EventEmitter)
                ], SignInComponent.prototype, "swapWindow", void 0);
                __decorate([
                    core_14.Output(), 
                    __metadata('design:type', core_14.EventEmitter)
                ], SignInComponent.prototype, "notify", void 0);
                __decorate([
                    core_14.Output(), 
                    __metadata('design:type', core_14.EventEmitter)
                ], SignInComponent.prototype, "authStatus", void 0);
                SignInComponent = __decorate([
                    core_14.Component({
                        selector: 'sign-in-form',
                        template: "\n        <div class=\"form-wrapper\">\n            <div class=\"flexbox flex-row\">\n                <h1>Come in, storyteller</h1>\n                <div><a class=\"close\" (click)=\"close($event)\"><i class=\"fa fa-times\" aria-hidden=\"true\">X</i></a></div>\n            </div>\n            <form [ngFormModel]=\"form\" (ngSubmit)=\"onSignIn($event)\" novalidate>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your email\"\n                    [(ngModel)]=\"user.email\" \n                    [ngFormControl]=\"form.controls['email']\"\n                    #email=\"ngForm\"\n                    >\n                <label for=\"email\">Email</label>\n                <div  *ngIf=\"(email.dirty || submitted) && !email.valid\" class=\"panel panel-error\">\n                    Email is invalid\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Your password\"\n                    [(ngModel)]=\"user.password\" \n                    [ngFormControl]=\"form.controls['password']\"\n                    #password=\"ngForm\"\n                    >\n                <label for=\"password\">Password</label>\n                <div  *ngIf=\"(password.dirty || submitted) && !password.valid\" class=\"panel panel-error\">\n                    The password should be at least 6 characters long\n                </div>\n              </div>\n              <button type=\"submit\" class=\"button primary block-button\">Sign in</button>\n              <div class=\"swap-form\"><a (click)=\"swapToSignUp()\">I want to create a new account</a></div>\n            </form>\n        </div>\n    ",
                        providers: [auth_service_2.AuthService, webstorage_service_3.WebStorageService],
                        directives: [common_2.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [logger_service_7.LoggerService, auth_service_2.AuthService, common_2.FormBuilder, webstorage_service_3.WebStorageService, configuration_5.Configuration])
                ], SignInComponent);
                return SignInComponent;
            }());
            exports_21("SignInComponent", SignInComponent);
        }
    }
});
System.register("components/signup-form.component", ["angular2/core", "models/user", "services/auth.service", "angular2/common", "services/validators.service", "services/webstorage.service", "config/configuration", "services/logger.service"], function(exports_22, context_22) {
    "use strict";
    var __moduleName = context_22 && context_22.id;
    var core_15, user_2, auth_service_3, common_3, validators_service_2, webstorage_service_4, configuration_6, logger_service_8;
    var SignUpComponent;
    return {
        setters:[
            function (core_15_1) {
                core_15 = core_15_1;
            },
            function (user_2_1) {
                user_2 = user_2_1;
            },
            function (auth_service_3_1) {
                auth_service_3 = auth_service_3_1;
            },
            function (common_3_1) {
                common_3 = common_3_1;
            },
            function (validators_service_2_1) {
                validators_service_2 = validators_service_2_1;
            },
            function (webstorage_service_4_1) {
                webstorage_service_4 = webstorage_service_4_1;
            },
            function (configuration_6_1) {
                configuration_6 = configuration_6_1;
            },
            function (logger_service_8_1) {
                logger_service_8 = logger_service_8_1;
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
                    this.closeModal = new core_15.EventEmitter();
                    this.swapWindow = new core_15.EventEmitter();
                    this.notify = new core_15.EventEmitter();
                    this.authStatus = new core_15.EventEmitter();
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
                            _this.logger.log(logger_service_8.DEBUG_LEVEL.WARN, 'onSignUp', 'Server error', err);
                            _this.notify.emit({
                                type: 'error',
                                message: 'The email is already taken'
                            });
                        }, function () {
                            _this.logger.log(logger_service_8.DEBUG_LEVEL.INFO, 'onSignUp', 'registered');
                            _this.authStatus.emit('Login');
                            _this.close('');
                        });
                    }
                };
                __decorate([
                    core_15.Output(), 
                    __metadata('design:type', core_15.EventEmitter)
                ], SignUpComponent.prototype, "closeModal", void 0);
                __decorate([
                    core_15.Output(), 
                    __metadata('design:type', core_15.EventEmitter)
                ], SignUpComponent.prototype, "swapWindow", void 0);
                __decorate([
                    core_15.Output(), 
                    __metadata('design:type', core_15.EventEmitter)
                ], SignUpComponent.prototype, "notify", void 0);
                __decorate([
                    core_15.Output(), 
                    __metadata('design:type', core_15.EventEmitter)
                ], SignUpComponent.prototype, "authStatus", void 0);
                SignUpComponent = __decorate([
                    core_15.Component({
                        selector: 'sign-up-form',
                        template: "\n        <div class=\"form-wrapper\">\n            <div class=\"flexbox flex-row\">\n                <h1>Become a storyteller</h1>\n                <div><a class=\"close\" (click)=\"close($event)\"><i class=\"fa fa-times\" aria-hidden=\"true\">X</i></a></div>\n            </div>\n            <form [ngFormModel]=\"form\" (ngSubmit)=\"onSignUp($event)\" novalidate>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your name\"\n                    [(ngModel)]=\"user.name\"\n                    [ngFormControl]=\"form.controls['name']\"\n                    #name=\"ngForm\"\n                    >\n                <label for=\"name\">Name</label>\n                <div  *ngIf=\"(name.dirty || submitted) && !name.valid\" class=\"panel panel-error\">\n                    Your name is required\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your email\"\n                    [(ngModel)]=\"user.email\" \n                    [ngFormControl]=\"form.controls['email']\"\n                    #email=\"ngForm\"\n                    >\n                <label for=\"email\">Email</label>\n                <div  *ngIf=\"(email.dirty || submitted) && !email.valid\" class=\"panel panel-error\">\n                    Email is invalid\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Your password\"\n                    [(ngModel)]=\"user.password\" \n                    [ngFormControl]=\"form.controls['password']\"\n                    #password=\"ngForm\"\n                    >\n                <label for=\"password\">Password</label>\n                <div  *ngIf=\"(password.dirty || submitted) && !password.valid\" class=\"panel panel-error\">\n                    The password should be at least 6 characters long\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm password\"\n                    [(ngModel)]=\"user.confirmPassword\" \n                    [ngFormControl]=\"form.controls['confirmPassword']\"\n                    #confirmPassword=\"ngForm\"\n                    >\n                <label for=\"confirm-password\">Password</label>\n                <div *ngIf=\"(confirmPassword.dirty || submitted) && form.hasError('mismatchedPasswords')\" class=\"panel panel-error\">\n                    The passwords don't match\n                </div>\n              </div>\n              <button type=\"submit\" class=\"button primary block-button\">Sign up</button>\n              <div class=\"swap-form\"><a (click)=\"swapToSignIn()\">I already have an account</a></div>\n            </form>\n        </div>\n    ",
                        providers: [auth_service_3.AuthService, webstorage_service_4.WebStorageService],
                        directives: [common_3.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [logger_service_8.LoggerService, auth_service_3.AuthService, common_3.FormBuilder, webstorage_service_4.WebStorageService, configuration_6.Configuration])
                ], SignUpComponent);
                return SignUpComponent;
            }());
            exports_22("SignUpComponent", SignUpComponent);
        }
    }
});
System.register("components/auth-form.component", ["angular2/core", "components/signin-form.component", "components/signup-form.component"], function(exports_23, context_23) {
    "use strict";
    var __moduleName = context_23 && context_23.id;
    var core_16, signin_form_component_1, signup_form_component_1;
    var AuthFormComponent;
    return {
        setters:[
            function (core_16_1) {
                core_16 = core_16_1;
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
                    this.closeModal = new core_16.EventEmitter();
                    this.notify = new core_16.EventEmitter();
                    this.authStatus = new core_16.EventEmitter();
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
                    core_16.Output(), 
                    __metadata('design:type', core_16.EventEmitter)
                ], AuthFormComponent.prototype, "closeModal", void 0);
                __decorate([
                    core_16.Output(), 
                    __metadata('design:type', core_16.EventEmitter)
                ], AuthFormComponent.prototype, "notify", void 0);
                __decorate([
                    core_16.Output(), 
                    __metadata('design:type', core_16.EventEmitter)
                ], AuthFormComponent.prototype, "authStatus", void 0);
                AuthFormComponent = __decorate([
                    core_16.Component({
                        selector: 'auth-form',
                        template: "\n        <sign-in-form \n            *ngIf=\"login\" \n            (closeModal)=\"hideAccessForm()\"\n            (swapWindow)=\"login=!login\"\n            (authStatus)=\"authStatusChanged($event)\"\n            (notify)=\"notifyMessage($event)\"\n            ></sign-in-form>\n        <sign-up-form \n            *ngIf=\"!login\" \n            (closeModal)=\"hideAccessForm()\"\n            (swapWindow)=\"login=!login\"\n            (authStatus)=\"authStatusChanged($event)\"\n            (notify)=\"notifyMessage($event)\"\n            ></sign-up-form>\n    ",
                        providers: [],
                        directives: [signin_form_component_1.SignInComponent, signup_form_component_1.SignUpComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AuthFormComponent);
                return AuthFormComponent;
            }());
            exports_23("AuthFormComponent", AuthFormComponent);
        }
    }
});
System.register("components/app-content.component", ['angular2/core', 'angular2/common', "services/storyblocks.service", "components/storyblock.component", "components/timeline.component", "components/add-button.component", "components/notification.component", "components/sidebar.component", "config/configuration", "services/auth.service", "services/webstorage.service", "components/auth-form.component", "services/logger.service"], function(exports_24, context_24) {
    "use strict";
    var __moduleName = context_24 && context_24.id;
    var core_17, common_4, storyblocks_service_3, storyblock_component_1, timeline_component_1, add_button_component_1, notification_component_1, sidebar_component_1, configuration_7, auth_service_4, webstorage_service_5, auth_form_component_1, logger_service_9;
    var AppComponent;
    return {
        setters:[
            function (core_17_1) {
                core_17 = core_17_1;
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
            function (notification_component_1_1) {
                notification_component_1 = notification_component_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            },
            function (configuration_7_1) {
                configuration_7 = configuration_7_1;
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
            function (logger_service_9_1) {
                logger_service_9 = logger_service_9_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(logger, storyBlockService, configuration, webStorageService, authService) {
                    this.logger = logger;
                    this.storyBlockService = storyBlockService;
                    this.configuration = configuration;
                    this.webStorageService = webStorageService;
                    this.authService = authService;
                    this.token = '';
                    this.maxIndex = 0;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.storyBlocks = [];
                    this.userId = this.authUser();
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
                AppComponent.prototype.authStatusChanged = function () {
                    this.refreshBlockList();
                };
                AppComponent.prototype.refreshBlockList = function () {
                    this.userId = this.authUser();
                    this.getStoryBlocks(this.userId);
                };
                AppComponent.prototype.getStoryBlockTypes = function () {
                    this.storyBlockTypes = this.storyBlockService.getStoryBlockTypes();
                    this.storyBlockDefaultTypes = this.storyBlockService.getStoryBlockDefaultTypes();
                };
                AppComponent.prototype.getStoryBlocks = function (id) {
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
                    }, function (err) { return console.error(err); }, function () { return _this.logger.log(logger_service_9.DEBUG_LEVEL.INFO, 'getStoryBlocks', 'Loaded ' + _this.storyBlocks.length + ' blocks', _this.storyBlocks); });
                };
                AppComponent.prototype.removeStoryBlock = function (index) {
                    this.storyBlocks.splice(index, 1);
                    this.recalculateStoryBlockNumbers();
                };
                AppComponent.prototype.showAccessForm = function () {
                    this.toggleMenu(false);
                    this.logger.log(logger_service_9.DEBUG_LEVEL.INFO, 'showAccessForm', this.authService.isLoggedIn());
                    this.accessFormVisible = true;
                    document.querySelector('body').classList.add('no-scroll');
                };
                AppComponent.prototype.hideAccessForm = function () {
                    this.accessFormVisible = false;
                    document.querySelector('body').classList.remove('no-scroll');
                };
                AppComponent.prototype.recalculateStoryBlockNumbers = function () {
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
                AppComponent.prototype.logOut = function () {
                    this.authService.logout();
                    this.refreshBlockList();
                };
                AppComponent.prototype.isLoggedIn = function () {
                    return this.authService.isLoggedIn();
                };
                AppComponent.prototype.zoomIn = function () {
                    if (this.zoomLevel < 10) {
                        this.zoomLevel++;
                    }
                    else {
                        this.notify({
                            type: 'message',
                            message: 'Max zoom reached'
                        });
                    }
                };
                AppComponent.prototype.zoomOut = function () {
                    if (this.zoomLevel > 0) {
                        this.zoomLevel--;
                    }
                    else {
                        this.notify({
                            type: 'message',
                            message: 'Minimum zoom reached'
                        });
                    }
                };
                AppComponent.prototype.onMouseEnter = function (event) {
                    this.addButton = {
                        visible: true,
                        top: event.y
                    };
                };
                AppComponent.prototype.onMouseLeave = function (event) {
                    this.addButton = {
                        visible: false,
                        top: 0
                    };
                };
                AppComponent.prototype.onMouseMove = function (event) {
                    if (this.addButton.visible) {
                        this.addButton.top = event.y;
                    }
                };
                AppComponent.prototype.addStoryBlock = function (event) {
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
                AppComponent.prototype.setExposed = function (index) {
                    this.logger.log(logger_service_9.DEBUG_LEVEL.INFO, 'setExposed', 'Setting block ' + index + ' exposed');
                    this.recalculateStoryBlockNumbers();
                    this.exposedIndex = index;
                    this.exposedStoryBlock = index >= 0 ? this.storyBlocks[index] : null;
                    this.storyBlockService.changeExposedIndex(index);
                    document.querySelector('body').classList.toggle('no-scroll');
                };
                AppComponent.prototype.save = function () {
                    for (var i = 0; i < this.storyBlocks.length; i++) {
                        this.storyBlockService.saveStoryBlock(this.userId, this.storyBlocks[i]).subscribe();
                    }
                };
                AppComponent.prototype.notify = function (notification) {
                    this.notification = {
                        type: notification.type || null,
                        message: notification.message || '',
                    };
                    this.notificationComponent.show(notification.message);
                };
                AppComponent.prototype.downloadPdf = function () {
                    this.storyBlockService.downloadPdf(this.storyBlocks);
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
                    core_17.ViewChild(notification_component_1.NotificationComponent), 
                    __metadata('design:type', notification_component_1.NotificationComponent)
                ], AppComponent.prototype, "notificationComponent", void 0);
                AppComponent = __decorate([
                    core_17.Component({
                        selector: 'app-content',
                        template: "\n        <main>\n            <timeline class=\"timeline-block\"></timeline>\n            <div class=\"story-blocks\">\n                <storyblock *ngFor=\"#storyBlock of storyBlocks; #i = index\" \n                    [index]=\"i\" \n                    [storyBlockInfo]=\"storyBlock\" \n                    [zoomLevel]=\"zoomLevel\"\n                    [userId]=\"userId\"\n                    [exposedIndex]=\"exposedIndex\"\n                    [ngClass]=\"{exposed: exposedIndex == i}\"\n                    (removeStoryBlockEvent)=\"removeStoryBlock($event)\" \n                    (exposeEvent)=\"setExposed($event)\"\n                    (notify)=\"notify($event)\"\n                    class=\"story-block {{ storyBlock.type\u00A0}}\"></storyblock>\n            </div>\n            <div class=\"timeline\"\n                (click)=\"addStoryBlock($event)\"\n                (mouseenter)=\"onMouseEnter($event)\"\n                (mouseleave)=\"onMouseLeave($event)\"\n                (mousemove)=\"onMouseMove($event)\">\n                <add-button *ngIf=\"addButton.visible\"\n                    [offsetY]=\"addButton.top\"\n                    (click)=\"addStoryBlock($event)\"></add-button>\n            </div>\n            <div id=\"controls\">\n                <div id=\"zoom-controls\">              \n                    <a title=\"Zoom in\" (click)=\"zoomIn()\">+</a>  \n                    <a title=\"Zoom out\" (click)=\"zoomOut()\">&ndash;</a>                \n                </div>            \n            </div>\n        </main>\n        <aside [ngClass]=\"{visible: menuVisible}\">\n            <sidebar\n            (startDragging)=\"toggleMenu(false)\"\n            (endDragging)=\"addStoryBlock($event)\"\n            [storyBlock]=\"exposedStoryBlock\" [storyBlocksLength]=\"storyBlocks.length\"></sidebar>\n            <a class=\"user-aside\" (click)=\"downloadPdf()\">Download PDF</a>\n            <a class=\"user-aside\" *ngIf=\"!isLoggedIn()\" (click)=\"showAccessForm()\">Login/Signup</a>\n            <a class=\"user-aside\" *ngIf=\"isLoggedIn()\" (click)=\"logOut()\">Logout</a>\n            <a id=\"close-menu\" (click)=\"toggleMenu(false)\"></a>\n        </aside>\n        <header><a id=\"burger\" (click)=\"toggleMenu(true)\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a></header>\n        <auth-form \n            *ngIf=\"accessFormVisible\" \n            (closeModal)=\"hideAccessForm()\"\n            (notify)=\"notify($event)\"\n            (authStatus)=\"authStatusChanged($event)\"\n            >\n        </auth-form>\n        <notification [ngClass]=\"{error: notification.type == 'error', success: notification.type == 'success'}\"></notification>\n    ",
                        providers: [storyblocks_service_3.StoryBlockService, configuration_7.Configuration, auth_service_4.AuthService, webstorage_service_5.WebStorageService, logger_service_9.LoggerService],
                        directives: [storyblock_component_1.StoryBlockComponent, timeline_component_1.TimelineComponent, add_button_component_1.AddButtonComponent, notification_component_1.NotificationComponent, sidebar_component_1.SidebarComponent, auth_form_component_1.AuthFormComponent, common_4.NgClass]
                    }), 
                    __metadata('design:paramtypes', [logger_service_9.LoggerService, storyblocks_service_3.StoryBlockService, configuration_7.Configuration, webstorage_service_5.WebStorageService, auth_service_4.AuthService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_24("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "components/app-content.component", 'angular2/http', "config/configuration", "angular2/core", "services/logger.service"], function(exports_25, context_25) {
    "use strict";
    var __moduleName = context_25 && context_25.id;
    var browser_1, app_content_component_1, http_3, configuration_8, core_18, logger_service_10;
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
            function (configuration_8_1) {
                configuration_8 = configuration_8_1;
            },
            function (core_18_1) {
                core_18 = core_18_1;
            },
            function (logger_service_10_1) {
                logger_service_10 = logger_service_10_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_content_component_1.AppComponent, [http_3.HTTP_PROVIDERS, configuration_8.Configuration, core_18.provide(core_18.ExceptionHandler, { useClass: logger_service_10.LoggerService })]);
        }
    }
});
System.register("directives/collapse.directive", ['angular2/core', 'angular2/src/animate/animation_builder'], function(exports_26, context_26) {
    "use strict";
    var __moduleName = context_26 && context_26.id;
    var core_19, animation_builder_2;
    var Collapse;
    return {
        setters:[
            function (core_19_1) {
                core_19 = core_19_1;
            },
            function (animation_builder_2_1) {
                animation_builder_2 = animation_builder_2_1;
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
                Object.defineProperty(Collapse.prototype, "_baseSequence", {
                    get: function () {
                        return this._animation
                            .setDuration(250) // the transition duration
                            .removeClass('collapse') // remove a class before the transition start
                            .removeClass('in')
                            .addAnimationClass('collapsing'); // add a temp class for the transition period
                    },
                    enumerable: true,
                    configurable: true
                });
                Collapse.prototype.hide = function () {
                    this._baseSequence
                        .setFromStyles({
                        height: this._el.nativeElement.scrollHeight + 'px'
                    })
                        .setToStyles({
                        height: '0'
                    });
                    // a is the Animation instance running this animation.
                    var a = this._animation.start(this._el.nativeElement);
                    a.onComplete(function () {
                        a.removeClasses(['in']); // rapid change will leave 'in'
                        a.addClasses(['collapse']);
                    });
                };
                Collapse.prototype.show = function () {
                    var _this = this;
                    this._animation // 1st animation build
                        .setDuration(0)
                        .addClass('collapse')
                        .addClass('in')
                        .setFromStyles({
                        overflow: 'hidden'
                    })
                        .start(this._el.nativeElement) // 1st animation start
                        .onComplete(function () {
                        var a = _this._baseSequence //  2nd animation build
                            .setFromStyles({
                            height: '0'
                        })
                            .setToStyles({
                            height: _this._el.nativeElement.scrollHeight + 'px'
                        })
                            .start(_this._el.nativeElement); // 2nd animation start
                        a.onComplete(function () { return a.addClasses(['collapse', 'in']); });
                    });
                };
                __decorate([
                    core_19.Input(), 
                    __metadata('design:type', Boolean)
                ], Collapse.prototype, "collapse", void 0);
                Collapse = __decorate([
                    core_19.Directive({
                        selector: '[collapse]'
                    }), 
                    __metadata('design:paramtypes', [animation_builder_2.AnimationBuilder, core_19.ElementRef])
                ], Collapse);
                return Collapse;
            }());
            exports_26("Collapse", Collapse);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2svbW9jay1zdG9yeWJsb2Nrcy50cyIsIm1vY2svbW9jay1zdG9yeWJsb2NrLXR5cGVzLnRzIiwic2VydmljZXMvbG9nZ2VyLnNlcnZpY2UudHMiLCJjb25maWcvY29uZmlndXJhdGlvbi50cyIsInNlcnZpY2VzL3N0b3J5YmxvY2tzLnNlcnZpY2UudHMiLCJzZXJ2aWNlcy91dGlscy5zZXJ2aWNlLnRzIiwiY29tcG9uZW50cy9zdG9yeWJsb2NrLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvdGltZWxpbmUuY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9hZGQtYnV0dG9uLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvbm90aWZpY2F0aW9uLmNvbXBvbmVudC50cyIsIm1vZGVscy91c2VyLnRzIiwic2VydmljZXMvd2Vic3RvcmFnZS5zZXJ2aWNlLnRzIiwic2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIiwic2VydmljZXMvdmFsaWRhdG9ycy5zZXJ2aWNlLnRzIiwiY29tcG9uZW50cy9sb2ctbWVzc2FnZS5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL2RlYnVnLWNvbnNvbGUuY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9zaWRlYmFyLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvc2lnbmluLWZvcm0uY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9zaWdudXAtZm9ybS5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL2F1dGgtZm9ybS5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL2FwcC1jb250ZW50LmNvbXBvbmVudC50cyIsImJvb3QudHMiLCJkaXJlY3RpdmVzL2NvbGxhcHNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFFYSxXQUFXOzs7O1lBQVgseUJBQUEsV0FBVyxHQUE4QjtnQkFDbEQ7b0JBQ0ksT0FBTyxFQUFFLENBQUM7b0JBQ1YsS0FBSyxFQUFFLFNBQVM7b0JB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QUFDO29CQUM3QixDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxJQUFJLE9BQU8sR0FBTyxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLFlBQVksR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7d0JBQ25JLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7d0JBQzVDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUMxQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3ZDLENBQUM7d0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUM5QyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3RDLENBQUM7d0JBQ0QsSUFBSSxDQUFDLENBQUM7NEJBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNyQyxDQUFDO3dCQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzRCQUNqQyxJQUFJLFVBQVUsR0FBRztnQ0FDYixJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDO2dDQUNoRCxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUk7Z0NBQ2pCLFlBQVksRUFBRSxZQUFZO2dDQUMxQixPQUFPLEVBQUUsSUFBSTtnQ0FDYixJQUFJLEVBQUUsSUFBSTtnQ0FDVixNQUFNLEVBQUMsRUFBRTs2QkFDWixDQUFDOzRCQUNGLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUV4RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDckMsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsb0NBQVksR0FBWjtvQkFBQSxpQkFLQztvQkFKRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSx1QkFBVSxDQUFTLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLEVBQTFCLENBQTBCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDdkYsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDckIsQ0FBQztnQkFFRCw0QkFBSSxHQUFKLFVBQUssU0FBYSxFQUFFLFVBQWUsRUFBRSxNQUFjO29CQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBRUQsb0NBQVksR0FBWjtvQkFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2hCLE1BQU0sQ0FBQyxVQUFVLEdBQU8sRUFBRSxNQUFzQixFQUFFLE1BQXNCO3dCQUNwRSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQzlELE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakMsQ0FBQyxDQUFBO2dCQUNMLENBQUM7Z0JBekVMO29CQUFDLGlCQUFVLEVBQUU7K0JBTUksYUFBTSxDQUFDLGlCQUFVLENBQUMsY0FBTSxPQUFBLDZCQUFhLEVBQWIsQ0FBYSxDQUFDLENBQUM7O2lDQU4zQztnQkEwRWIsb0JBQUM7WUFBRCxDQXpFQSxBQXlFQyxJQUFBO1lBekVELHlDQXlFQyxDQUFBO1lBRVkseUJBQUEsV0FBVyxHQUFHO2dCQUN2QixPQUFPLEVBQUU7b0JBQ0wsS0FBSyxFQUFFLENBQUM7b0JBQ1IsSUFBSSxFQUFFLEtBQUs7aUJBQ2Q7Z0JBQ0QsSUFBSSxFQUFFO29CQUNGLEtBQUssRUFBRSxDQUFDO29CQUNSLElBQUksRUFBRSxNQUFNO2lCQUNmO2dCQUNELElBQUksRUFBRTtvQkFDRixLQUFLLEVBQUUsQ0FBQztvQkFDUixJQUFJLEVBQUUsTUFBTTtpQkFDZjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0gsS0FBSyxFQUFFLENBQUM7b0JBQ1IsSUFBSSxFQUFFLE9BQU87aUJBQ2hCO2dCQUNELElBQUksRUFBRTtvQkFDRixLQUFLLEVBQUUsQ0FBQztvQkFDUixJQUFJLEVBQUUsRUFBRTtpQkFDWDthQUNKLENBQUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDcEdGO2dCQUFBO29CQUNXLFNBQUksR0FBRzt3QkFDVixNQUFNLEVBQUUsQ0FBQzt3QkFDVCxJQUFJLEVBQUUsR0FBRzt3QkFDVCxRQUFRLEVBQUUsR0FBRztxQkFDaEIsQ0FBQztvQkFFSyxVQUFLLEdBQUc7d0JBQ1gsSUFBSSxFQUFFLE9BQU87d0JBQ2IsVUFBVSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztxQkFDekMsQ0FBQztvQkFFRixxRUFBcUU7b0JBQzlELGdCQUFXLEdBQUcsRUFBRSxDQUFDO29CQUVqQixlQUFVLEdBQUcsNEJBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ3pDLENBQUM7Z0JBakJEO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQWlCYixvQkFBQztZQUFELENBaEJBLEFBZ0JDLElBQUE7WUFoQkQseUNBZ0JDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDTEQ7Z0JBS0ksMkJBQ1ksTUFBb0IsRUFDckIsSUFBUyxFQUNSLGFBQTJCO29CQVIzQyxpQkF5SUM7b0JBbkllLFdBQU0sR0FBTixNQUFNLENBQWM7b0JBQ3JCLFNBQUksR0FBSixJQUFJLENBQUs7b0JBQ1Isa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBUC9CLGtCQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBU3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSx1QkFBVSxDQUFDLFVBQUEsUUFBUTt3QkFDdkMsT0FBQSxLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVE7b0JBQXpCLENBQXlCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDM0MsQ0FBQztnQkFDRCw4Q0FBa0IsR0FBbEIsVUFBbUIsS0FBSztvQkFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7b0JBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQUNELDJDQUFlLEdBQWY7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsMENBQWMsR0FBZCxVQUFlLE1BQU07b0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxlQUFlLEdBQUMsTUFBTSxDQUFDO3lCQUN4RSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO3lCQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUVELDBDQUFjLEdBQWQsVUFBZSxNQUFNLEVBQUUsVUFBcUI7b0JBQ3hDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDO3dCQUN0QixjQUFjLEVBQUUsbUNBQW1DO3FCQUN0RCxDQUFDLENBQUM7b0JBRUgsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDO3dCQUM3QixPQUFPLEVBQUUsT0FBTztxQkFDbkIsQ0FBQyxDQUFDO29CQUVILEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDbkIsVUFBVSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO3dCQUM1RCxVQUFVLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO3dCQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsZUFBZSxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxPQUFPLENBQUM7NkJBQ2hKLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7NkJBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7b0JBQzNDLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0YsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQzt3QkFDcEMsVUFBVSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQzt3QkFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLGVBQWUsR0FBQyxNQUFNLEdBQUUsR0FBRyxFQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE9BQU8sQ0FBQzs2QkFDOUgsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzs2QkFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztvQkFDM0MsQ0FBQztnQkFDTCxDQUFDO2dCQUVELDRDQUFnQixHQUFoQixVQUFpQixNQUFNLEVBQUUsVUFBcUI7b0JBQzFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLGVBQWUsR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUM7NkJBQ3BHLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7NkJBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7b0JBQzNDLENBQUM7b0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQztnQkFFRCw4Q0FBa0IsR0FBbEI7b0JBQ0ksTUFBTSxDQUFDLHdDQUFnQixDQUFDO2dCQUM1QixDQUFDO2dCQUVELHFEQUF5QixHQUF6QjtvQkFDSSxNQUFNLENBQUMsd0NBQWdCLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsNENBQWdCLEdBQWhCLFVBQWlCLE1BQU07b0JBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDRCQUFXLENBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLDhCQUE4QixHQUFHLE1BQU0sQ0FBQyxDQUFDO29CQUMvRixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQzt3QkFDdEIsY0FBYyxFQUFFLG1DQUFtQztxQkFDdEQsQ0FBQyxDQUFDO29CQUVILElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQzt3QkFDN0IsT0FBTyxFQUFFLE9BQU87cUJBQ25CLENBQUMsQ0FBQztvQkFFSCxJQUFJLE1BQU0sR0FBZ0IsOEJBQVcsQ0FBQztvQkFFdEMsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7d0JBQy9CLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO3dCQUMxQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO3dCQUNuQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUM1QyxDQUFDO29CQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxlQUFlLEdBQUcsTUFBTSxHQUFHLEdBQUcsRUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxPQUFPLENBQUM7eUJBQzVILEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBRUQsdUNBQVcsR0FBWCxVQUFZLFdBQXdCO29CQUNoQyxpQkFBaUIsQ0FBWSxFQUFFLENBQVk7d0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQzs0QkFDaEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNkLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7NEJBQ3JDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ2IsSUFBSTs0QkFDQSxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNqQixDQUFDO29CQUVELFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRzFCLElBQUksYUFBYSxHQUFHO3dCQUNoQixPQUFPLEVBQUUsRUFBRTt3QkFFWCxNQUFNLEVBQUU7NEJBQ0osT0FBTyxFQUFFO2dDQUNMLFFBQVEsRUFBRSxFQUFFO2dDQUNaLElBQUksRUFBRSxJQUFJO2dDQUNWLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs2QkFDeEI7NEJBQ0QsU0FBUyxFQUFFO2dDQUNQLFFBQVEsRUFBRSxFQUFFO2dDQUNaLElBQUksRUFBRSxJQUFJO2dDQUNWLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs2QkFDeEI7eUJBQ0o7cUJBQ0osQ0FBQztvQkFFRixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDMUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3RCOzRCQUNJLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSzs0QkFDMUIsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO3lCQUM3QixDQUNKLENBQUM7d0JBQ0YsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3RCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQzdCLENBQUM7b0JBQ04sQ0FBQztvQkFFRCxPQUFPLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoRCxDQUFDO2dCQXhJTDtvQkFBQyxpQkFBVSxFQUFFOztxQ0FBQTtnQkEwSWIsd0JBQUM7WUFBRCxDQXpJQSxBQXlJQyxJQUFBO1lBeklELGlEQXlJQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7WUNwSkQ7Z0JBQUE7b0JBQ1csZ0JBQVcsR0FBRywrUEFBK1AsQ0FBQztnQkFxQnpSLENBQUM7Z0JBbEJHLHNDQUFlLEdBQWYsVUFBZ0IsR0FBRztvQkFDZixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO3dCQUNOLE1BQU0sQ0FBQyxFQUFFLENBQUM7b0JBQ2QsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUMvQixHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJO3dCQUM3RCxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJO3dCQUMxRCxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFDL0QsS0FBSyxHQUFHLEVBQUUsRUFDVixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNWLE9BQU8sQ0FBQyxFQUFFO3dCQUNOLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQztvQkFDMUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDekQsQ0FBQztnQkFFRCxtQ0FBWSxHQUFaLFVBQWEsQ0FBQztvQkFDVixJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxHQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztnQkFDckksQ0FBQztnQkF0Qkw7b0JBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7Z0JBdUJiLG1CQUFDO1lBQUQsQ0F0QkEsQUFzQkMsSUFBQTtZQXRCRCx1Q0FzQkMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDR0Q7Z0JBaUJJLDZCQUFvQixNQUFvQixFQUNwQixHQUFvQixFQUNwQixFQUFhLEVBQ2IsWUFBeUIsRUFDMUIsaUJBQW1DLEVBQ2xDLGFBQTJCO29CQUwzQixXQUFNLEdBQU4sTUFBTSxDQUFjO29CQUNwQixRQUFHLEdBQUgsR0FBRyxDQUFpQjtvQkFDcEIsT0FBRSxHQUFGLEVBQUUsQ0FBVztvQkFDYixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDMUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtvQkFDbEMsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBbEJ4QyxhQUFRLEdBQUcsS0FBSyxDQUFDO29CQUNqQixZQUFPLEdBQUcsSUFBSSxDQUFDO29CQUVmLGNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ2pCLGVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ2hCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztvQkFHdEIsY0FBUyxHQUFxQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFDakQsZ0JBQVcsR0FBcUIsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBQ25ELDBCQUFxQixHQUFxQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFDN0QsV0FBTSxHQUFxQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFReEQsQ0FBQztnQkFHRCxzQkFBSSwwQ0FBUzt5QkFBYixVQUFjLEtBQVk7d0JBQ3RCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO3dCQUNoRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzt3QkFDeEUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs0QkFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7NEJBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDdkIsQ0FBQztvQkFDTCxDQUFDOzs7bUJBQUE7Z0JBR0Qsc0JBQUksNkNBQVk7eUJBQWhCLFVBQWlCLEtBQVk7d0JBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMxQyxDQUFDOzs7bUJBQUE7Z0JBRUQsc0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBRUQsa0NBQUksR0FBSixVQUFLLENBQUM7b0JBQ0YsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7b0JBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztnQkFFRCx5Q0FBVyxHQUFYO29CQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDRCQUFXLENBQUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxFQUFFLEVBQUU7d0JBQ2xELFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSzt3QkFDdEIsWUFBWSxFQUFFLElBQUksQ0FBQyxrQkFBa0I7d0JBQ3JDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVTtxQkFDL0IsQ0FBQyxDQUFDO29CQUNILEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDekIsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUN4QixDQUFDO2dCQUNMLENBQUM7Z0JBRUQsb0NBQU0sR0FBTixVQUFPLEtBQVk7b0JBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsNEJBQVcsQ0FBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBRTt3QkFDN0MsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLO3dCQUN0QixPQUFPLEVBQUMsV0FBVztxQkFDdEIsQ0FBQyxDQUFDO29CQUVILElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQy9CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO29CQUNuQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBRWpCLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7b0JBQzlCLFNBQVMsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDJDQUEyQyxDQUFDO29CQUN0RixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUV2QixTQUFTO3lCQUNKLFdBQVcsQ0FBQyxLQUFLLENBQUM7eUJBQ2xCLGFBQWEsQ0FBQyxTQUFTLENBQUM7eUJBQ3hCLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUN6QixZQUFZLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUN2QyxDQUFDO29CQUVELEtBQUssQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDO3dCQUM5QixTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzVDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDWixDQUFDO2dCQUVELG1DQUFLLEdBQUw7b0JBQ0ksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3RCxDQUFDO2dCQUVELHFDQUFPLEdBQVAsVUFBUSxLQUFZO29CQUNoQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDZixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyw0QkFBVyxDQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsRUFBRSxFQUFFOzRCQUM5QyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUs7NEJBQ3RCLFlBQVksRUFBRSxJQUFJLENBQUMsa0JBQWtCOzRCQUNyQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVU7NEJBQzVCLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVU7NEJBQzFDLE9BQU8sRUFBQyxZQUFZO3lCQUN2QixDQUFDLENBQUM7d0JBRUgsSUFBSSxXQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO3dCQUNqQixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7d0JBQ25CLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQzt3QkFFakIsT0FBTyxDQUFDLDRCQUE0QixDQUFDLEdBQUcsMkNBQTJDLENBQUM7d0JBQ3BGLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBRXZCLFdBQVM7NkJBQ0osV0FBVyxDQUFDLEtBQUssQ0FBQzs2QkFDbEIsYUFBYSxDQUFDLFNBQVMsQ0FBQzs2QkFDeEIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUUxQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDRCQUFXLENBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxFQUFFLEVBQUU7Z0NBQzlDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSztnQ0FDdEIsT0FBTyxFQUFDLG1CQUFtQjs2QkFDOUIsQ0FBQyxDQUFDOzRCQUVILFlBQVksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7d0JBQ3ZDLENBQUM7d0JBRUQsS0FBSyxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUM7NEJBQzlCLFdBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQzt3QkFDNUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNaLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxrREFBb0IsR0FBcEIsVUFBcUIsS0FBSztvQkFDdEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNqQixJQUFJLFNBQVMsR0FBRzt3QkFDWixHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUk7cUJBQzFMLENBQUM7b0JBRUYsSUFBSSxPQUFPLEdBQUc7d0JBQ1YsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSTtxQkFDbEwsQ0FBQztvQkFFRixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyw0QkFBVyxDQUFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxFQUFFLEVBQUU7d0JBQzdELFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSzt3QkFDdEIsWUFBWSxFQUFFLElBQUksQ0FBQyxrQkFBa0I7d0JBQ3JDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVTt3QkFDNUIsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWTt3QkFDOUMsTUFBTSxFQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU07d0JBQ3JDLElBQUksRUFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJO3dCQUNqQyxRQUFRLEVBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUTt3QkFDekMsWUFBWSxFQUFDLFNBQVMsQ0FBQyxHQUFHO3dCQUMxQixVQUFVLEVBQUMsT0FBTyxDQUFDLEdBQUc7d0JBQ3RCLE9BQU8sRUFBQyxtQkFBbUI7cUJBQzlCLENBQUMsQ0FBQztvQkFFSCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsNEJBQVcsQ0FBQyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsRUFBRSxFQUFFOzRCQUMzRCxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUs7NEJBQ3RCLFlBQVksRUFBRSxJQUFJLENBQUMsa0JBQWtCOzRCQUNyQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVU7NEJBQzVCLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVU7NEJBQzFDLE9BQU8sRUFBQyxXQUFXO3lCQUN0QixDQUFDLENBQUM7d0JBQ0gsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDM0IsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyw0QkFBVyxDQUFDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxFQUFFLEVBQUU7NEJBQzNELFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSzs0QkFDdEIsWUFBWSxFQUFFLElBQUksQ0FBQyxrQkFBa0I7NEJBQ3JDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVTs0QkFDNUIsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVTs0QkFDMUMsT0FBTyxFQUFDLFlBQVk7eUJBQ3ZCLENBQUMsQ0FBQzt3QkFDSCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMzQixDQUFDO29CQUVELE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDJDQUEyQyxDQUFDO29CQUVwRixTQUFTO3lCQUNKLFdBQVcsQ0FBQyxLQUFLLENBQUM7eUJBQ2xCLGFBQWEsQ0FBQyxTQUFTLENBQUM7eUJBQ3hCLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyw0QkFBVyxDQUFDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxFQUFFLEVBQUU7NEJBQzNELFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSzs0QkFDdEIsT0FBTyxFQUFDLG1CQUFtQjt5QkFDOUIsQ0FBQyxDQUFDO3dCQUNILFlBQVksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ3ZDLENBQUM7b0JBRUQsS0FBSyxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUM7d0JBQzlCLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDNUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNaLENBQUM7Z0JBRUQsbUNBQUssR0FBTDtvQkFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDbkMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUNyQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3BCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDaEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3hFLFNBQVMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNqQyxLQUFLLENBQUM7d0JBQ1YsQ0FBQztvQkFDTCxDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUNkLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs0QkFDbkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUN4RSxRQUFRLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDbkMsS0FBSyxDQUFDOzRCQUNWLENBQUM7d0JBQ0wsQ0FBQzt3QkFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs0QkFDYixVQUFVLENBQUM7Z0NBQ1AsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDOzRCQUNyQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBQ1gsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsa0NBQUksR0FBSixVQUFLLEtBQUssRUFBRSxLQUFLO29CQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDRCQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSx3QkFBd0IsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ3pGLElBQUksQ0FBQyxtQkFBbUIsR0FBZSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZGLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM3QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2pCLENBQUM7Z0JBRUQsb0NBQU0sR0FBTixVQUFPLEtBQUssRUFBRSxLQUFLO29CQUFuQixpQkFxQkM7b0JBcEJHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQy9FLFVBQUEsSUFBSTt3QkFDQSxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyw0QkFBVyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFHLElBQUksQ0FBQyxDQUFDO29CQUN4RSxDQUFDLEVBQ0QsVUFBQSxLQUFLO3dCQUNELEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDRCQUFXLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxLQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUNoRyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDYixJQUFJLEVBQUUsT0FBTzs0QkFDYixPQUFPLEVBQUUsMEJBQTBCO3lCQUN0QyxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxFQUNEO3dCQUNJLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDRCQUFXLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSx1QkFBdUIsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2xGLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDOzRCQUNiLElBQUksRUFBRSxTQUFTOzRCQUNmLE9BQU8sRUFBRSx1QkFBdUI7eUJBQ25DLENBQUMsQ0FBQzt3QkFDSCxLQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDaEQsQ0FBQyxDQUNKLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCxrQ0FBSSxHQUFKLFVBQUssS0FBSyxFQUFFLEtBQUs7b0JBQWpCLGlCQTZCQztvQkE1QkcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsNEJBQVcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLG9CQUFvQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFFckYsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUM3RSxVQUFBLElBQUk7NEJBQ0EsS0FBSSxDQUFDLGNBQWMsR0FBZSxJQUFJLENBQUM7NEJBQ3ZDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDRCQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7NEJBQzdELEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDRCQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDOzRCQUMvRixLQUFJLENBQUMsbUJBQW1CLEdBQWUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUMzRixDQUFDLEVBQ0QsVUFBQSxLQUFLOzRCQUNELEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDRCQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxLQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDOzRCQUM1RixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQ0FDYixJQUFJLEVBQUUsT0FBTztnQ0FDYixPQUFPLEVBQUUsMEJBQTBCOzZCQUN0QyxDQUFDLENBQUM7d0JBQ1AsQ0FBQyxFQUNEOzRCQUNJLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDRCQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDOzRCQUN6RSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQ0FDYixJQUFJLEVBQUUsU0FBUztnQ0FDZixPQUFPLEVBQUUscUJBQXFCOzZCQUNqQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQyxDQUNKLENBQUM7b0JBQ04sQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO29CQUMvRCxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsbUNBQUssR0FBTDtvQkFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUUxQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7d0JBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDRCQUFXLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2hGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNoRCxDQUFDO2dCQUNMLENBQUM7Z0JBN1JEO29CQUFDLGFBQU0sRUFBRTs7c0VBQUE7Z0JBQ1Q7b0JBQUMsYUFBTSxFQUFFOzt3RUFBQTtnQkFDVDtvQkFBQyxhQUFNLEVBQUU7O2tGQUFBO2dCQUNUO29CQUFDLGFBQU0sRUFBRTs7bUVBQUE7Z0JBVVQ7b0JBQUMsWUFBSyxFQUFFOzs7b0VBQUE7Z0JBV1I7b0JBQUMsWUFBSyxFQUFFOzs7dUVBQUE7Z0JBekRaO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSxnbUNBY1Q7d0JBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksRUFBRSx1Q0FBaUIsQ0FBQzt3QkFDNUMsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztxQkFDaEQsQ0FBQzs7dUNBQUE7Z0JBNFNGLDBCQUFDO1lBQUQsQ0ExU0EsQUEwU0MsSUFBQTtZQTFTRCxxREEwU0MsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7O1lDaFVEO2dCQUFBO2dCQUNBLENBQUM7Z0JBTkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsVUFBVTt3QkFDbkIsUUFBUSxFQUFFLFFBQ1Q7cUJBQ0osQ0FBQzs7cUNBQUE7Z0JBRUYsd0JBQUM7WUFBRCxDQURBLEFBQ0MsSUFBQTtZQURELGtEQUNDLENBQUE7Ozs7Ozs7Ozs7Ozs7OztZQ0NEO2dCQUdJLDRCQUFvQixFQUFhO29CQUFiLE9BQUUsR0FBRixFQUFFLENBQVc7Z0JBRWpDLENBQUM7Z0JBR0Qsc0JBQUksdUNBQU87eUJBQVgsVUFBWSxLQUFZO3dCQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDOUIsQ0FBQzs7O21CQUFBO2dCQUVELDBDQUFhLEdBQWIsVUFBYyxLQUFLO29CQUNmLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDbkQsQ0FBQztnQkFSRDtvQkFBQyxZQUFLLEVBQUU7OztpRUFBQTtnQkFkWjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxZQUFZO3dCQUNyQixRQUFRLEVBQUUsdUNBRVQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO3FCQUN0QixDQUFDOztzQ0FBQTtnQkFpQkYseUJBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBO1lBaEJELG9EQWdCQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7WUNqQkQ7Z0JBSUksK0JBQW9CLEVBQWE7b0JBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztnQkFFakMsQ0FBQztnQkFFRCxvQ0FBSSxHQUFKLFVBQUssT0FBTztvQkFBWixpQkFTQztvQkFSRyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7d0JBQ2QsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDOUIsQ0FBQztvQkFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztvQkFDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7d0JBQ3JCLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3RELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDYixDQUFDO2dCQXZCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxjQUFjO3dCQUN2QixRQUFRLEVBQUUsZ0RBRVQ7cUJBQ0osQ0FBQzs7eUNBQUE7Z0JBbUJGLDRCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCwwREFrQkMsQ0FBQTs7Ozs7Ozs7Ozs7WUMxQkQ7Z0JBQUE7Z0JBSUEsQ0FBQztnQkFBRCxXQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFKRCx3QkFJQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNERDtnQkFHSTtvQkFGUSxxQkFBZ0IsR0FBRyxDQUFDLE9BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLENBQUMsQ0FBQztnQkFHN0QsQ0FBQztnQkFFRCwrQkFBRyxHQUFILFVBQUksR0FBRyxFQUFFLEtBQUs7b0JBQ1YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQzt3QkFDeEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQ1YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTt3QkFDdEMsQ0FBQzt3QkFDRCxJQUFJLENBQUMsQ0FBQzs0QkFDRixJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3JDLENBQUM7b0JBQ0wsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDVixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTt3QkFDakMsQ0FBQzt3QkFDRCxJQUFJLENBQUMsQ0FBQzs0QkFDRixJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2hDLENBQUM7b0JBQ0wsQ0FBQztnQkFDTCxDQUFDO2dCQUVELCtCQUFHLEdBQUgsVUFBSSxHQUFHO29CQUNILEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUE7b0JBQ3hDLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25DLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxrQ0FBTSxHQUFOLFVBQU8sR0FBRztvQkFDTixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLENBQUE7b0JBQ3BDLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNoQyxDQUFDO2dCQUNMLENBQUM7Z0JBRU8sNkNBQWlCLEdBQXpCLFVBQTBCLEdBQUcsRUFBRSxLQUFLO29CQUNoQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0RSxDQUFDO2dCQUVPLCtDQUFtQixHQUEzQixVQUE0QixHQUFHO29CQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO2dCQUNwRSxDQUFDO2dCQUVPLGtEQUFzQixHQUE5QixVQUErQixHQUFHO29CQUM5QixZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQUVPLHdDQUFZLEdBQXBCLFVBQXFCLEdBQUcsRUFBRSxLQUFLO29CQUMzQixJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO29CQUNuQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNwRCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQzlCLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxrQkFBa0IsR0FBRyxPQUFPLENBQUM7Z0JBQ3pHLENBQUM7Z0JBRU8seUNBQWEsR0FBckIsVUFBc0IsR0FBRztvQkFDckIsSUFBSSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxHQUFHLEdBQUcsR0FBRyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ25FLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDN0MsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekMsQ0FBQztvQkFDRCxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUNkLENBQUM7O2dCQUVPLDZDQUFpQixHQUF6QixVQUEwQixHQUFHO29CQUN6QixRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxnREFBZ0QsQ0FBQztnQkFDN0UsQ0FBQztnQkExRUw7b0JBQUMsaUJBQVUsRUFBRTs7cUNBQUE7Z0JBMkViLHdCQUFDO1lBQUQsQ0ExRUEsQUEwRUMsSUFBQTtZQTFFRCxrREEwRUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDbEVEO2dCQUVJLHFCQUNZLE1BQW9CLEVBQ3JCLElBQVMsRUFDUixpQkFBbUMsRUFDbkMsYUFBMkI7b0JBSDNCLFdBQU0sR0FBTixNQUFNLENBQWM7b0JBQ3JCLFNBQUksR0FBSixJQUFJLENBQUs7b0JBQ1Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtvQkFDbkMsa0JBQWEsR0FBYixhQUFhLENBQWM7Z0JBRXZDLENBQUM7Z0JBRUQsNEJBQU0sR0FBTjtvQkFDSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO2dCQUVELDJCQUFLLEdBQUwsVUFBTSxJQUFTO29CQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDRCQUFXLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO29CQUN0RSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQzt3QkFDdEIsY0FBYyxFQUFFLG1DQUFtQztxQkFDdEQsQ0FBQyxDQUFDO29CQUVILElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQzt3QkFDN0IsT0FBTyxFQUFFLE9BQU87cUJBQ25CLENBQUMsQ0FBQztvQkFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsYUFBYSxFQUM1RCxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO3dCQUN6QixRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHO3dCQUMzQixXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFDL0IsT0FBTyxDQUFDO3lCQUNQLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBRUQsOEJBQVEsR0FBUixVQUFTLElBQVM7b0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsNEJBQVcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLHlCQUF5QixDQUFDLENBQUM7b0JBQ3pFLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDO3dCQUN0QixjQUFjLEVBQUUsbUNBQW1DO3FCQUN0RCxDQUFDLENBQUM7b0JBRUgsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDO3dCQUM3QixPQUFPLEVBQUUsT0FBTztxQkFDbkIsQ0FBQyxDQUFDO29CQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsRUFDL0QsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRzt3QkFDM0IsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQy9CLE9BQU8sQ0FBQzt5QkFDUCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO3lCQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO2dCQUUzQyxDQUFDO2dCQUVELGdDQUFVLEdBQVY7b0JBQ0ksSUFBSSxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckcsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNqQixDQUFDO29CQUNELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFFeEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQWEsQ0FBQztvQkFDckQsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUNwRCxDQUFDOztnQkFHRCxvQ0FBYyxHQUFkO29CQUNJLElBQUksY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JHLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsTUFBTSxDQUFDLEVBQUUsQ0FBQztvQkFDZCxDQUFDO29CQUNELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFFeEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQWEsQ0FBQztvQkFFckQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUE7Z0JBQ3hCLENBQUM7Z0JBRUQsNkNBQXVCLEdBQXZCLFVBQXdCLGVBQWU7b0JBQ25DLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFFekMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQWEsQ0FBQztvQkFDckQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUE7Z0JBQ3hCLENBQUM7Z0JBRUQsNENBQXNCLEdBQXRCO29CQUNJLElBQUksY0FBYyxHQUFHO3dCQUNqQixHQUFHLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFO3FCQUMvQixDQUFDO29CQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQUVPLHNDQUFnQixHQUF4QjtvQkFDSSxNQUFNLENBQUMsc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7d0JBQ3RFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7d0JBQ3BFLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUMxQixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDOztnQkFqR0w7b0JBQUMsa0JBQVUsRUFBRTs7K0JBQUE7Z0JBa0diLGtCQUFDO1lBQUQsQ0FqR0EsQUFpR0MsSUFBQTtZQWpHRCxzQ0FpR0MsQ0FBQTs7Ozs7OztRQzlGWSxXQUFXO0lBWnhCOztPQUVHO0lBRUgsMEJBQTBCO0lBQzFCLHdCQUErQixPQUFnQjtRQUMzQyxJQUFJLFdBQVcsR0FBRyxtR0FBbUcsQ0FBQztRQUN0SCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRixNQUFNLENBQUMsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDaEMsQ0FBQztJQUNMLENBQUM7SUFMRCw0Q0FLQyxDQUFBO0lBSUQsMEJBQTBCO0lBQzFCLDJCQUFrQyxXQUFtQixFQUFFLGtCQUEwQjtRQUM3RSxNQUFNLENBQUMsVUFBQyxLQUFtQjtZQUN2QixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNDLElBQUksZUFBZSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUN6RCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxNQUFNLENBQUM7b0JBQ0gsbUJBQW1CLEVBQUUsSUFBSTtpQkFDNUIsQ0FBQztZQUNOLENBQUM7UUFFTCxDQUFDLENBQUE7SUFDTCxDQUFDO0lBWEQsa0RBV0MsQ0FBQTs7OztZQWRZLDBCQUFBLFdBQVcsR0FBRyxxR0FBcUcsQ0FBQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNZakk7Z0JBQUE7b0JBR2MsZUFBVSxHQUFxQixJQUFJLG9CQUFZLEVBQUUsQ0FBQztnQkFPaEUsQ0FBQztnQkFKRyxtQ0FBSyxHQUFMLFVBQU0sS0FBSztvQkFDUCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFQRDtvQkFBQyxhQUFLLEVBQUU7O3VFQUFBO2dCQUVSO29CQUFDLGNBQU0sRUFBRTs7dUVBQUE7Z0JBcEJiO29CQUFDLGlCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSxvZkFVVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLHNDQUFpQixDQUFDO3dCQUMzQyxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxDQUFDO3FCQUNoQyxDQUFDOzt1Q0FBQTtnQkFZRiwwQkFBQztZQUFELENBVkEsQUFVQyxJQUFBO1lBVkQsc0RBVUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDVEQ7Z0JBS0ksK0JBQW9CLE1BQW9CO29CQUFwQixXQUFNLEdBQU4sTUFBTSxDQUFjO2dCQUN4QyxDQUFDO2dCQUVELHdDQUFRLEdBQVI7b0JBQUEsaUJBUUM7b0JBUEcsSUFBSSxDQUFDLFdBQVcsR0FBQyxFQUFFLENBQUM7b0JBRXBCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFFN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBQSxPQUFPO3dCQUM3QixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDbEMsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkFFRCxvQ0FBSSxHQUFKLFVBQUssS0FBSztvQkFDTixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUMsS0FBSyxHQUFDLFNBQVMsQ0FBQztvQkFDdkQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM5RCxDQUFDO2dCQUVELG9DQUFJLEdBQUo7b0JBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBQyxTQUFTLENBQUM7b0JBQzNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDakUsQ0FBQztnQkFFRCx1Q0FBTyxHQUFQLFVBQVEsT0FBTztvQkFDWCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSw0QkFBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ25ELENBQUM7Z0JBRUQseUNBQVMsR0FBVCxVQUFVLE9BQU87b0JBQ2IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksNEJBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNsRCxDQUFDO2dCQXZETDtvQkFBQyxpQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsd21CQWNUO3dCQUNELFNBQVMsRUFBRSxFQUFFO3dCQUNiLFVBQVUsRUFBRSxDQUFDLDJDQUFtQixDQUFDO3FCQUNwQyxDQUFDOzt5Q0FBQTtnQkFxQ0YsNEJBQUM7WUFBRCxDQW5DQSxBQW1DQyxJQUFBO1lBbkNELDBEQW1DQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNaRDtnQkFXSSwwQkFDWSxNQUFvQixFQUNwQixrQkFBb0MsRUFDcEMsWUFBeUI7b0JBRnpCLFdBQU0sR0FBTixNQUFNLENBQWM7b0JBQ3BCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBa0I7b0JBQ3BDLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQU4zQixrQkFBYSxHQUFxQixJQUFJLG9CQUFZLEVBQUUsQ0FBQztvQkFDckQsZ0JBQVcsR0FBcUIsSUFBSSxvQkFBWSxFQUFFLENBQUM7Z0JBTTFELENBQUM7Z0JBSUosc0JBQUksd0NBQVU7eUJBQWQsVUFBZSxVQUFVO3dCQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztvQkFDbEMsQ0FBQzs7O21CQUFBO2dCQUVELHNCQUFJLCtDQUFpQjt5QkFBckIsVUFBc0IsaUJBQWlCO3dCQUNuQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsaUJBQWlCLENBQUM7b0JBQ2hELENBQUM7OzttQkFBQTtnQkFDRCxtQ0FBUSxHQUFSO29CQUFBLGlCQU1DO29CQUxHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixFQUFFLENBQUM7b0JBQ3BFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FDL0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBQ0Qsc0NBQVcsR0FBWCxVQUFZLEtBQWE7b0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixDQUFDO2dCQUNELHNDQUFXLEdBQVg7b0JBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDckMsQ0FBQztnQkFDRCxvQ0FBUyxHQUFULFVBQVUsQ0FBQztvQkFDUCxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4QyxHQUFHLENBQUMsR0FBRyxHQUFLLHVHQUF1Rzt3QkFDL0csK0dBQStHO3dCQUMvRywrR0FBK0c7d0JBQy9HLCtHQUErRzt3QkFDL0csK0dBQStHO3dCQUMvRywrR0FBK0c7d0JBQy9HLCtHQUErRzt3QkFDL0csK0dBQStHO3dCQUMvRywrR0FBK0c7d0JBQy9HLCtHQUErRzt3QkFDL0csK0dBQStHO3dCQUMvRywrR0FBK0c7d0JBQy9HLCtHQUErRzt3QkFDL0csK0dBQStHO3dCQUMvRywrR0FBK0c7d0JBQy9HLCtHQUErRzt3QkFDL0csb0VBQW9FLENBQUM7b0JBQ3pFLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztvQkFDMUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBQ0Qsa0NBQU8sR0FBUCxVQUFRLENBQUM7b0JBQ0wsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO29CQUNuQixJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUM7b0JBQ3JCLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUEsQ0FBQzt3QkFDN0UsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDakIsQ0FBQztvQkFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCxrQ0FBTyxHQUFQO29CQUNJLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2dCQWpFRDtvQkFBQyxjQUFNLEVBQUU7O3VFQUFBO2dCQUNUO29CQUFDLGNBQU0sRUFBRTs7cUVBQUE7Z0JBU1Q7b0JBQUMsYUFBSyxFQUFFOzs7a0VBQUE7Z0JBSVI7b0JBQUMsYUFBSyxFQUFFOzs7eUVBQUE7Z0JBakVaO29CQUFDLGlCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLFNBQVM7d0JBQ2xCLFFBQVEsRUFBRSxnL0RBb0NUO3dCQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7d0JBQ3pCLFVBQVUsRUFBRSxDQUFDLCtDQUFxQixDQUFDO3dCQUNuQyxNQUFNLEVBQUUsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLENBQUM7cUJBQzlDLENBQUM7O29DQUFBO2dCQTJFRix1QkFBQztZQUFELENBMUVBLEFBMEVDLElBQUE7WUExRUQsZ0RBMEVDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQzNFRDtnQkFVSSx5QkFDWSxNQUFvQixFQUNwQixXQUF1QixFQUN2QixPQUFtQixFQUNuQixpQkFBbUMsRUFDbkMsYUFBMkI7b0JBSjNCLFdBQU0sR0FBTixNQUFNLENBQWM7b0JBQ3BCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO29CQUN2QixZQUFPLEdBQVAsT0FBTyxDQUFZO29CQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO29CQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFkdkMsU0FBSSxHQUFRLElBQUksV0FBSSxFQUFFLENBQUM7b0JBRXZCLGNBQVMsR0FBRyxLQUFLLENBQUM7b0JBRVIsZUFBVSxHQUFxQixJQUFJLG9CQUFZLEVBQUUsQ0FBQztvQkFDbEQsZUFBVSxHQUFxQixJQUFJLG9CQUFZLEVBQUUsQ0FBQztvQkFDbEQsV0FBTSxHQUFxQixJQUFJLG9CQUFZLEVBQUUsQ0FBQztvQkFDOUMsZUFBVSxHQUFxQixJQUFJLG9CQUFZLEVBQUUsQ0FBQztvQkFTeEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO3dCQUN0QixLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBVSxDQUFDLFFBQVEsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQyxnQ0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN2RixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7cUJBQ3RDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2dCQUVELCtCQUFLLEdBQUwsVUFBTSxLQUFLO29CQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQUVELHNDQUFZLEdBQVo7b0JBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBRUQsa0NBQVEsR0FBUixVQUFTLEtBQUs7b0JBQWQsaUJBb0JDO29CQW5CRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUN2QyxVQUFBLElBQUk7NEJBQ0EsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3BFLENBQUMsRUFDRCxVQUFBLEdBQUc7NEJBQ0MsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsNEJBQVcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQzs0QkFDbkUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0NBQ2IsSUFBSSxFQUFFLE9BQU87Z0NBQ2IsT0FBTyxFQUFFLDJCQUEyQjs2QkFDdkMsQ0FBQyxDQUFDO3dCQUNQLENBQUMsRUFDRDs0QkFDSSxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyw0QkFBVyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7NEJBQzNELEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUM5QixLQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNuQixDQUFDLENBQUMsQ0FBQztvQkFDWCxDQUFDO2dCQUNMLENBQUM7Z0JBaEREO29CQUFDLGNBQU0sRUFBRTs7bUVBQUE7Z0JBQ1Q7b0JBQUMsY0FBTSxFQUFFOzttRUFBQTtnQkFDVDtvQkFBQyxjQUFNLEVBQUU7OytEQUFBO2dCQUNUO29CQUFDLGNBQU0sRUFBRTs7bUVBQUE7Z0JBaERiO29CQUFDLGlCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSx5dURBaUNUO3dCQUNELFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsc0NBQWlCLENBQUM7d0JBQzNDLFVBQVUsRUFBRSxDQUFDLHdCQUFlLENBQUM7cUJBQ2hDLENBQUM7O21DQUFBO2dCQXdERixzQkFBQztZQUFELENBdERBLEFBc0RDLElBQUE7WUF0REQsOENBc0RDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ2hDRDtnQkFVSSx5QkFDWSxNQUFvQixFQUNwQixXQUF1QixFQUN2QixPQUFtQixFQUNuQixpQkFBbUMsRUFDbkMsYUFBMkI7b0JBSjNCLFdBQU0sR0FBTixNQUFNLENBQWM7b0JBQ3BCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO29CQUN2QixZQUFPLEdBQVAsT0FBTyxDQUFZO29CQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO29CQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFkdkMsU0FBSSxHQUFRLElBQUksV0FBSSxFQUFFLENBQUM7b0JBRXZCLGNBQVMsR0FBRyxLQUFLLENBQUM7b0JBRVIsZUFBVSxHQUFxQixJQUFJLG9CQUFZLEVBQUUsQ0FBQztvQkFDbEQsZUFBVSxHQUFxQixJQUFJLG9CQUFZLEVBQUUsQ0FBQztvQkFDbEQsV0FBTSxHQUFxQixJQUFJLG9CQUFZLEVBQUUsQ0FBQztvQkFDOUMsZUFBVSxHQUFxQixJQUFJLG9CQUFZLEVBQUUsQ0FBQztvQkFTeEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO3dCQUN0QixJQUFJLEVBQUMsQ0FBQyxFQUFFLENBQUM7d0JBQ1QsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQVUsQ0FBQyxRQUFRLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUMsZ0NBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdkYsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQVUsQ0FBQyxRQUFRLEVBQUUsbUJBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNsRixlQUFlLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7cUJBQzdDLEVBQUUsRUFBQyxTQUFTLEVBQUUsc0NBQWlCLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLEVBQUMsQ0FBQyxDQUFBO2dCQUNyRSxDQUFDO2dCQUVELCtCQUFLLEdBQUwsVUFBTSxLQUFLO29CQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQUVELHNDQUFZLEdBQVo7b0JBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBRUQsa0NBQVEsR0FBUixVQUFTLEtBQUs7b0JBQWQsaUJBcUJDO29CQXBCRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDN0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUMxQyxVQUFBLElBQUk7NEJBQ0EsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3BFLENBQUMsRUFDRCxVQUFBLEdBQUc7NEJBQ0MsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsNEJBQVcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQzs0QkFDbEUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0NBQ2IsSUFBSSxFQUFFLE9BQU87Z0NBQ2IsT0FBTyxFQUFFLDRCQUE0Qjs2QkFDeEMsQ0FBQyxDQUFDO3dCQUNQLENBQUMsRUFDRDs0QkFDSSxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyw0QkFBVyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7NEJBQzVELEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUM5QixLQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNuQixDQUFDLENBQUMsQ0FBQztvQkFDWCxDQUFDO2dCQUNMLENBQUM7Z0JBbkREO29CQUFDLGNBQU0sRUFBRTs7bUVBQUE7Z0JBQ1Q7b0JBQUMsY0FBTSxFQUFFOzttRUFBQTtnQkFDVDtvQkFBQyxjQUFNLEVBQUU7OytEQUFBO2dCQUNUO29CQUFDLGNBQU0sRUFBRTs7bUVBQUE7Z0JBdEViO29CQUFDLGlCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSxvNEZBdURUO3dCQUNELFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsc0NBQWlCLENBQUM7d0JBQzNDLFVBQVUsRUFBRSxDQUFDLHdCQUFlLENBQUM7cUJBQ2hDLENBQUM7O21DQUFBO2dCQTJERixzQkFBQztZQUFELENBekRBLEFBeURDLElBQUE7WUF6REQsOENBeURDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ3JHRDtnQkFBQTtvQkFDYyxlQUFVLEdBQXFCLElBQUksb0JBQVksRUFBRSxDQUFDO29CQUNsRCxXQUFNLEdBQXFCLElBQUksb0JBQVksRUFBRSxDQUFDO29CQUM5QyxlQUFVLEdBQXFCLElBQUksb0JBQVksRUFBRSxDQUFDO29CQUVyRCxVQUFLLEdBQUMsS0FBSyxDQUFDO2dCQWF2QixDQUFDO2dCQVhHLDBDQUFjLEdBQWQsVUFBZSxLQUFLO29CQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFFRCx5Q0FBYSxHQUFiLFVBQWMsS0FBSztvQkFDZixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCw2Q0FBaUIsR0FBakIsVUFBa0IsS0FBSztvQkFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBaEJEO29CQUFDLGNBQU0sRUFBRTs7cUVBQUE7Z0JBQ1Q7b0JBQUMsY0FBTSxFQUFFOztpRUFBQTtnQkFDVDtvQkFBQyxjQUFNLEVBQUU7O3FFQUFBO2dCQXpCYjtvQkFBQyxpQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUscWpCQWVUO3dCQUNELFNBQVMsRUFBRSxFQUFFO3dCQUNiLFVBQVUsRUFBRSxDQUFDLHVDQUFlLEVBQUUsdUNBQWUsQ0FBQztxQkFDakQsQ0FBQzs7cUNBQUE7Z0JBb0JGLHdCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCxrREFrQkMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDOEJEO2dCQWdCSSxzQkFDWSxNQUFvQixFQUNwQixpQkFBbUMsRUFDbkMsYUFBMkIsRUFDM0IsaUJBQW1DLEVBQ25DLFdBQXVCO29CQUp2QixXQUFNLEdBQU4sTUFBTSxDQUFjO29CQUNwQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO29CQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFDM0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtvQkFDbkMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7b0JBWDVCLFVBQUssR0FBVSxFQUFFLENBQUM7b0JBR2pCLGFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBU3JCLENBQUM7Z0JBRUQsK0JBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzlCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO29CQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7b0JBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7b0JBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUc7d0JBQ2IsT0FBTyxFQUFFLEtBQUs7d0JBQ2QsR0FBRyxFQUFFLENBQUM7cUJBQ1QsQ0FBQztvQkFDRixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztvQkFDekIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztvQkFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRzt3QkFDaEIsSUFBSSxFQUFFLElBQUk7d0JBQ1YsT0FBTyxFQUFFLEVBQUU7cUJBQ2QsQ0FBQztnQkFDTixDQUFDO2dCQUVELCtCQUFRLEdBQVI7b0JBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUM3QyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQzt3QkFDbkUsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDOzRCQUNsQixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLHNCQUFzQixFQUFFLENBQUM7NEJBQy9ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsY0FBYyxDQUFDLENBQUM7d0JBQ2xFLENBQUM7d0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ3BFLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCwrQkFBUSxHQUFSLFVBQVMsS0FBWTtvQkFDakIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlDLENBQUM7Z0JBRUQsK0JBQVEsR0FBUjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0MsQ0FBQztnQkFFRCx3Q0FBaUIsR0FBakI7b0JBQ0ksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsdUNBQWdCLEdBQWhCO29CQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckMsQ0FBQztnQkFFRCx5Q0FBa0IsR0FBbEI7b0JBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztvQkFDbkUsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO2dCQUNyRixDQUFDO2dCQUVELHFDQUFjLEdBQWQsVUFBZSxFQUFFO29CQUFqQixpQkE4QkM7b0JBN0JHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUMvQyxVQUFBLElBQUk7d0JBQ0EsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7d0JBQ3hCLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO3dCQUVsQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7NEJBQy9DLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0NBQ3pDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUM5RSxDQUFDO3dCQUNMLENBQUM7d0JBQ0QsRUFBRSxDQUFBLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxJQUFFLENBQUMsQ0FBQyxDQUFBLENBQUM7NEJBQ2hELEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDRCQUFXLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLHFCQUFxQixDQUFDLENBQUM7NEJBQzNFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUMxRCxVQUFBLGlCQUFpQjtnQ0FDYixLQUFJLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDO2dDQUNyQyxLQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQzs0QkFDeEMsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsRUFDekIsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDRCQUFXLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUF0SCxDQUFzSCxDQUMvSCxDQUFDO3dCQUNOLENBQUM7d0JBQ0QsSUFBSSxDQUFBLENBQUM7NEJBQ0QsS0FBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7d0JBQ3hDLENBQUM7b0JBRUwsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsRUFDekIsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDRCQUFXLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUF0SCxDQUFzSCxDQUMvSCxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsdUNBQWdCLEdBQWhCLFVBQWlCLEtBQUs7b0JBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7Z0JBQ3hDLENBQUM7Z0JBRUQscUNBQWMsR0FBZDtvQkFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyw0QkFBVyxDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7b0JBQ25GLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7b0JBQzlCLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztnQkFFRCxxQ0FBYyxHQUFkO29CQUNJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7b0JBQy9CLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDakUsQ0FBQztnQkFFRCxtREFBNEIsR0FBNUI7b0JBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsNEJBQVcsQ0FBQyxJQUFJLEVBQUUsOEJBQThCLEVBQUUsd0JBQXdCLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUM3RyxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7b0JBQ3RCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDbkQsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkUsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDdkQsQ0FBQztvQkFFRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQy9DLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7d0JBQ2hGLFlBQVksQ0FBQyxXQUFXLENBQUMsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN4RixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQzt3QkFFdkUsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNsQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7NEJBQ25ELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dDQUNsRSxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOzRCQUN2RCxDQUFDO3dCQUNMLENBQUM7b0JBQ0wsQ0FBQztvQkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyw0QkFBVyxDQUFDLElBQUksRUFBRSw4QkFBOEIsRUFBRSx1QkFBdUIsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2hILENBQUM7Z0JBRUQsNkJBQU0sR0FBTjtvQkFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUMxQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCxpQ0FBVSxHQUFWO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUN6QyxDQUFDO2dCQUVELDZCQUFNLEdBQU47b0JBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ3JCLENBQUM7b0JBQ0QsSUFBSSxDQUFBLENBQUM7d0JBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQzs0QkFDUixJQUFJLEVBQUMsU0FBUzs0QkFDZCxPQUFPLEVBQUMsa0JBQWtCO3lCQUM3QixDQUFDLENBQUM7b0JBQ1AsQ0FBQztnQkFDTCxDQUFDO2dCQUVELDhCQUFPLEdBQVA7b0JBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ3JCLENBQUM7b0JBQ0QsSUFBSSxDQUFBLENBQUM7d0JBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQzs0QkFDUixJQUFJLEVBQUMsU0FBUzs0QkFDZCxPQUFPLEVBQUMsc0JBQXNCO3lCQUNqQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQztnQkFDTCxDQUFDO2dCQUVELG1DQUFZLEdBQVosVUFBYSxLQUFLO29CQUNkLElBQUksQ0FBQyxTQUFTLEdBQUc7d0JBQ2IsT0FBTyxFQUFFLElBQUk7d0JBQ2IsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO3FCQUNmLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCxtQ0FBWSxHQUFaLFVBQWEsS0FBSztvQkFDZCxJQUFJLENBQUMsU0FBUyxHQUFHO3dCQUNiLE9BQU8sRUFBRSxLQUFLO3dCQUNkLEdBQUcsRUFBRSxDQUFDO3FCQUNULENBQUM7Z0JBQ04sQ0FBQztnQkFFRCxrQ0FBVyxHQUFYLFVBQVksS0FBSztvQkFDYixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ2pDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxvQ0FBYSxHQUFiLFVBQWMsS0FBSztvQkFDZixJQUFJLENBQUMsU0FBUyxHQUFHO3dCQUNiLE9BQU8sRUFBRSxLQUFLO3dCQUNkLEdBQUcsRUFBRSxDQUFDO3FCQUNULENBQUM7b0JBRUYsSUFBSSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUV0SCxJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDO29CQUU3RixJQUFJLGFBQWEsR0FBMkI7d0JBQ3hDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7d0JBQzFCLEtBQUssRUFBRSxFQUFFO3dCQUNULFdBQVcsRUFBRSxFQUFFO3dCQUNmLFlBQVksRUFBRSxjQUFjO3dCQUM1QixVQUFVLEVBQUUsQ0FBQzt3QkFDYixJQUFJLEVBQUUsU0FBUztxQkFDbEIsQ0FBQztvQkFFRixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBRWhCLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztvQkFFcEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUMvQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDOzRCQUNwRCxXQUFXLEdBQUcsQ0FBQyxDQUFDOzRCQUNoQixLQUFLLENBQUM7d0JBQ1YsQ0FBQztvQkFDTCxDQUFDO29CQUVELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7b0JBRXZELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDRCQUFXLENBQUMsSUFBSSxFQUFDLGVBQWUsRUFBRSxxQkFBcUIsR0FBRyxXQUFXLENBQUMsQ0FBQztvQkFDdkYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFHN0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsaUNBQVUsR0FBVixVQUFXLEtBQUs7b0JBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsNEJBQVcsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixHQUFDLEtBQUssR0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDbkYsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO29CQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDckUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNqRCxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2pFLENBQUM7Z0JBRUQsMkJBQUksR0FBSjtvQkFDSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQy9DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ3hGLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCw2QkFBTSxHQUFOLFVBQU8sWUFBWTtvQkFDZixJQUFJLENBQUMsWUFBWSxHQUFHO3dCQUNoQixJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUksSUFBSSxJQUFJO3dCQUMvQixPQUFPLEVBQUUsWUFBWSxDQUFDLE9BQU8sSUFBSSxFQUFFO3FCQUN0QyxDQUFDO29CQUNGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMxRCxDQUFDO2dCQUVELGtDQUFXLEdBQVg7b0JBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3pELENBQUM7Z0JBRUQsaUNBQVUsR0FBVixVQUFXLFVBQVU7b0JBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO29CQUM5QixFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsQ0FBQSxDQUFDO3dCQUNYLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDOUQsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ2pFLENBQUM7Z0JBQ0wsQ0FBQztnQkF0UkQ7b0JBQUMsaUJBQVMsQ0FBQyw4Q0FBcUIsQ0FBQzs7MkVBQUE7Z0JBM0RyQztvQkFBQyxpQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsMHBGQW1EVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBaUIsRUFBRSw2QkFBYSxFQUFFLDBCQUFXLEVBQUUsc0NBQWlCLEVBQUUsOEJBQWEsQ0FBQzt3QkFDNUYsVUFBVSxFQUFFLENBQUMsMENBQW1CLEVBQUUsc0NBQWlCLEVBQUUseUNBQWtCLEVBQUUsOENBQXFCLEVBQUUsb0NBQWdCLEVBQUUsdUNBQWlCLEVBQUUsZ0JBQU8sQ0FBQztxQkFDaEosQ0FBQzs7Z0NBQUE7Z0JBMFJGLG1CQUFDO1lBQUQsQ0F4UkEsQUF3UkMsSUFBQTtZQXhSRCx3Q0F3UkMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUMzVkQsbUJBQVMsQ0FBQyxvQ0FBWSxFQUFFLENBQUMscUJBQWMsRUFBRSw2QkFBYSxFQUFFLGVBQU8sQ0FBQyx3QkFBZ0IsRUFBRyxFQUFDLFFBQVEsRUFBRSwrQkFBYSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ0FoSDtnQkFJSSxrQkFBWSxnQkFBaUMsRUFBVSxHQUFjO29CQUFkLFFBQUcsR0FBSCxHQUFHLENBQVc7b0JBQ2pFLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQzdDLENBQUM7Z0JBRUQsOEJBQVcsR0FBWCxVQUFZLE9BQU87b0JBQ2Ysa0RBQWtEO29CQUNsRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7NEJBQ2hCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDaEIsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDSixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ2hCLENBQUM7b0JBQ0wsQ0FBQztnQkFDTCxDQUFDO2dCQUVELHNCQUFZLG1DQUFhO3lCQUF6Qjt3QkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVU7NkJBQ2pCLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQywwQkFBMEI7NkJBQzNDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyw2Q0FBNkM7NkJBQ3JFLFdBQVcsQ0FBQyxJQUFJLENBQUM7NkJBQ2pCLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsNkNBQTZDO29CQUN2RixDQUFDOzs7bUJBQUE7Z0JBRUQsdUJBQUksR0FBSjtvQkFDSSxJQUFJLENBQUMsYUFBYTt5QkFDYixhQUFhLENBQUM7d0JBQ1gsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxJQUFJO3FCQUNyRCxDQUFDO3lCQUNELFdBQVcsQ0FBQzt3QkFDVCxNQUFNLEVBQUUsR0FBRztxQkFDZCxDQUFDLENBQUM7b0JBRVAsc0RBQXNEO29CQUN0RCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUN0RCxDQUFDLENBQUMsVUFBVSxDQUFDO3dCQUNULENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsK0JBQStCO3dCQUN4RCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtvQkFDOUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCx1QkFBSSxHQUFKO29CQUFBLGlCQXFCQztvQkFwQkcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0I7eUJBQ2pDLFdBQVcsQ0FBQyxDQUFDLENBQUM7eUJBQ2QsUUFBUSxDQUFDLFVBQVUsQ0FBQzt5QkFDcEIsUUFBUSxDQUFDLElBQUksQ0FBQzt5QkFDZCxhQUFhLENBQUM7d0JBQ1gsUUFBUSxFQUFFLFFBQVE7cUJBQ3JCLENBQUM7eUJBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsc0JBQXNCO3lCQUNwRCxVQUFVLENBQUM7d0JBQ1IsSUFBSSxDQUFDLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUI7NkJBQzdDLGFBQWEsQ0FBQzs0QkFDWCxNQUFNLEVBQUUsR0FBRzt5QkFDZCxDQUFDOzZCQUNELFdBQVcsQ0FBQzs0QkFDVCxNQUFNLEVBQUUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLElBQUk7eUJBQ3JELENBQUM7NkJBQ0QsS0FBSyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7d0JBRTFELENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBTyxPQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBRSxDQUFDO29CQUMzRCxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQWhFRDtvQkFBQyxhQUFLLEVBQUU7OzBEQUFBO2dCQUxaO29CQUFDLGlCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7cUJBQ3pCLENBQUM7OzRCQUFBO2dCQW9FRixlQUFDO1lBQUQsQ0FsRUEsQUFrRUMsSUFBQTtZQWxFRCxnQ0FrRUMsQ0FBQSIsImZpbGUiOiIuLi8uLi8uLi9jaHJvbm9zdG9yaWVzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU1RPUllCTE9DS1M6U3RvcnlCbG9ja1tdID0gPFN0b3J5QmxvY2tbXT5bXHJcbiAgICB7XHJcbiAgICAgICAgYmxvY2tJZDogMSxcclxuICAgICAgICB0aXRsZTogJ1ByZWZhY2UnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnWW91IG5lZWQgdG8gc3RhcnQgc29tZXdoZXJlJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246MSxcclxuICAgICAgICBpbXBvcnRhbmNlOiAtMSxcclxuICAgICAgICBibG9ja051bWJlcjowLFxyXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGJsb2NrSWQ6IDIsXHJcbiAgICAgICAgdGl0bGU6ICdJbnRyb2R1Y3Rpb24nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnV2hlcmUgeW91ciBjaGFyYWN0ZXJzIGJlY2FtZSByZWFsJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDIsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogMSxcclxuICAgICAgICBibG9ja051bWJlcjoxLFxyXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGJsb2NrSWQ6IDMsXHJcbiAgICAgICAgdGl0bGU6ICdFdm9sdXRpb24nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpbmdzIGdldHMgdHJpY2tpZXInLFxyXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMyxcclxuICAgICAgICBpbXBvcnRhbmNlOiAyLFxyXG4gICAgICAgIGJsb2NrTnVtYmVyOjIsXHJcbiAgICAgICAgdHlwZTonY2hhcHRlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgYmxvY2tJZDogNCxcclxuICAgICAgICB0aXRsZTogJ1RvcGljIG1vbWVudCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdXb2FoIScsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiA0LFxyXG4gICAgICAgIGltcG9ydGFuY2U6IDEsXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6MyxcclxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBibG9ja0lkOiA1LFxyXG4gICAgICAgIHRpdGxlOiAnRXBpbG9ndWUnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQmVjYXVzZSBldmVuIHRoZSBiZXN0IHRoaW5ncyBlbmQnLFxyXG4gICAgICAgIHRpbWVQb3NpdGlvbjogNSxcclxuICAgICAgICBpbXBvcnRhbmNlOiAtMSxcclxuICAgICAgICBibG9ja051bWJlcjo0LFxyXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXHJcbiAgICB9XHJcbl07IiwiaW1wb3J0IHtTdG9yeUJsb2NrfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2tcIjtcclxuaW1wb3J0IHtTdG9yeUJsb2NrVHlwZX0gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrLXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTVE9SWUJMT0NLX1RZUEVTOlN0b3J5QmxvY2tUeXBlW10gPSA8U3RvcnlCbG9ja1R5cGVbXT5bXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdjaGFwdGVyJyxcclxuICAgICAgICBuYW1lOiAnQ2hhcHRlcicsXHJcbiAgICAgICAgbGV2ZWw6IDBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdwYXJhZ3JhcGgnLFxyXG4gICAgICAgIG5hbWU6ICdQYXJhZ3JhcGgnLFxyXG4gICAgICAgIGxldmVsOiAxXHJcbiAgICB9LFxyXG5dOyIsImltcG9ydCB7SW5qZWN0YWJsZSwgZm9yd2FyZFJlZiwgSW5qZWN0LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge09ic2VydmVyfSBmcm9tIFwicnhqcy9PYnNlcnZlclwiO1xyXG5cclxuZGVjbGFyZSB2YXIgbW9tZW50OmFueTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvZ2dlclNlcnZpY2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z0xldmVsO1xyXG4gICAgcHJpdmF0ZSBsb2dTdHJlYW0kOk9ic2VydmVyPE9iamVjdD47XHJcbiAgICBwdWJsaWMgbG9nJDpPYnNlcnZhYmxlPE9iamVjdD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IENvbmZpZ3VyYXRpb24pKSBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMuc2V0RGVidWdMZXZlbChjb25maWd1cmF0aW9uLmRlYnVnTGV2ZWwgfHwgREVCVUdfTEVWRUwuRVJST1IpO1xyXG5cclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIHdpbmRvdy5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yTXNnLCB1cmwsIGxpbmVOdW1iZXIsIGNvbHVtbiwgZXJyb3JPYmopIHtcclxuICAgICAgICAgICAgdGhhdC5sb2coREVCVUdfTEVWRUwuRVJST1IsICdvbmVycm9yJywgZXJyb3JNc2csIHVybCwgbGluZU51bWJlciwgY29sdW1uLCBlcnJvck9iaik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTphbnkge1xyXG4gICAgfVxyXG5cclxuICAgIHNldERlYnVnTGV2ZWwoZGVidWdMZXZlbCkge1xyXG4gICAgICAgIHRoaXMuZGVidWdMZXZlbCA9IGRlYnVnTGV2ZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZyhsZXZlbCwgZnVuY3Rpb25OYW1lLCB0ZXh0LCAuLi5hcmdzOmFueVtdKSB7XHJcbiAgICAgICAgaWYgKCFsZXZlbCB8fCAobGV2ZWwudmFsdWUgPT09IHVuZGVmaW5lZCkgfHwgIWxldmVsLm5hbWUpIHtcclxuICAgICAgICAgICAgbGV2ZWwgPSBERUJVR19MRVZFTC5JTkZPO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV2ZWwudmFsdWUgPj0gdGhpcy5kZWJ1Z0xldmVsLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlOmFueSA9ICdbJyArIG1vbWVudCgpLmZvcm1hdChcIkREL01NL1lZIC0gSEg6bW06c3MuU1NTXCIpICsgJ11bJyArIGxldmVsLm5hbWUgKyAnXVsnICsgZnVuY3Rpb25OYW1lICsgJ10gJyArICh0ZXh0IHx8ICcnKTtcclxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuY2FsbChhcmdzLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgaWYgKGxldmVsLnZhbHVlID09PSBERUJVR19MRVZFTC5FUlJPUi52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1Zy5hcHBseShjb25zb2xlLCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChsZXZlbC52YWx1ZSA9PT0gREVCVUdfTEVWRUwuV0FSTi52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCEhdGhpcy5sb2ckICYmIHRoaXMubG9nU3RyZWFtJCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxvZ01lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogbW9tZW50KCkuZm9ybWF0KFwiREQvTU0vWVkgLSBISDptbTpzcy5TU1NcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IGxldmVsLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBmdW5jdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBhcmdzLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXR0eTonJ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxvZ01lc3NhZ2UucHJldHR5ID0gSlNPTi5zdHJpbmdpZnkobG9nTWVzc2FnZSwgbnVsbCwgMik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dTdHJlYW0kLm5leHQobG9nTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9nU3RyZWFtKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5sb2ckKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nJCA9IG5ldyBPYnNlcnZhYmxlPE9iamVjdD4ob2JzZXJ2ZXIgPT4gdGhpcy5sb2dTdHJlYW0kID0gb2JzZXJ2ZXIpLnNoYXJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvZyQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbChleGNlcHRpb246YW55LCBzdGFja1RyYWNlPzphbnksIHJlYXNvbj86c3RyaW5nKTp2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZyhERUJVR19MRVZFTC5FUlJPUiwgJ2FuZ3VsYXInLCAnJywgZXhjZXB0aW9uLCByZWFzb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGVycm9yQ2F0Y2hlcigpIHtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlcnI6YW55LCBzb3VyY2U6T2JzZXJ2YWJsZTxhbnk+LCBjYXVnaHQ6T2JzZXJ2YWJsZTxhbnk+KTpPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgICAgICB0aGF0LmxvZyhERUJVR19MRVZFTC5FUlJPUiwgJ2Vycm9yQ2F0Y2hlcicsIGVyci5tZXNzYWdlLCBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERFQlVHX0xFVkVMID0ge1xyXG4gICAgVkVSQk9TRToge1xyXG4gICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgIG5hbWU6ICdMb2cnXHJcbiAgICB9LFxyXG4gICAgSU5GTzoge1xyXG4gICAgICAgIHZhbHVlOiAxLFxyXG4gICAgICAgIG5hbWU6ICdJbmZvJ1xyXG4gICAgfSxcclxuICAgIFdBUk46IHtcclxuICAgICAgICB2YWx1ZTogMixcclxuICAgICAgICBuYW1lOiAnV2FybidcclxuICAgIH0sXHJcbiAgICBFUlJPUjoge1xyXG4gICAgICAgIHZhbHVlOiAzLFxyXG4gICAgICAgIG5hbWU6ICdFcnJvcidcclxuICAgIH0sXHJcbiAgICBOT05FOiB7XHJcbiAgICAgICAgdmFsdWU6IDQsXHJcbiAgICAgICAgbmFtZTogJydcclxuICAgIH1cclxufTsiLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7TG9nZ2VyU2VydmljZSwgREVCVUdfTEVWRUx9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XHJcbiAgICBwdWJsaWMgem9vbSA9IHtcclxuICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgc3RlcDogMTUwLFxyXG4gICAgICAgIHN0cmVuZ3RoOiAwLjZcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIHRva2VuID0ge1xyXG4gICAgICAgIG5hbWU6ICd0b2tlbicsXHJcbiAgICAgICAgZXhwaXJhdGlvbjogKDMwICogMjQgKiA2MCAqIDYwICogMTAwMClcclxuICAgIH07XHJcblxyXG4gICAgLy8gcHVibGljIGFwaUJhc2VQYXRoID0gJ2h0dHBzOi8vYWEyMDE2LWNocm9ub3N0b3JpZXMuaGVyb2t1YXBwLmNvbSc7XHJcbiAgICBwdWJsaWMgYXBpQmFzZVBhdGggPSAnJztcclxuICAgIFxyXG4gICAgcHVibGljIGRlYnVnTGV2ZWwgPSBERUJVR19MRVZFTC5JTkZPO1xyXG59IiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHtTdG9yeUJsb2NrfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2tcIjtcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmUnO1xyXG5pbXBvcnQge09ic2VydmVyfSBmcm9tICdyeGpzL09ic2VydmVyJztcclxuaW1wb3J0IHtTVE9SWUJMT0NLU30gZnJvbSBcIi4uL21vY2svbW9jay1zdG9yeWJsb2Nrc1wiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tUeXBlfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2stdHlwZVwiO1xyXG5pbXBvcnQge1NUT1JZQkxPQ0tfVFlQRVN9IGZyb20gXCIuLi9tb2NrL21vY2stc3RvcnlibG9jay10eXBlc1wiO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2UsIERFQlVHX0xFVkVMfSBmcm9tIFwiLi9sb2dnZXIuc2VydmljZVwiO1xyXG5kZWNsYXJlIHZhciBwZGZNYWtlOiBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdG9yeUJsb2NrU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9leHBvc2VkSW5kZXggPSAtMTtcclxuICAgIGluZGV4Q2hhbmdlJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gICAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IE9ic2VydmVyPG51bWJlcj47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBsb2dnZXI6TG9nZ2VyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgaHR0cDpIdHRwLCBcclxuICAgICAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvblxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5pbmRleENoYW5nZSQgPSBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PlxyXG4gICAgICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG9ic2VydmVyKS5zaGFyZSgpO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlRXhwb3NlZEluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3NlZEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChpbmRleCk7XHJcbiAgICB9XHJcbiAgICBnZXRFeHBvc2VkSW5kZXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4cG9zZWRJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdG9yeUJsb2Nrcyh1c2VySWQpOk9ic2VydmFibGU8U3RvcnlCbG9ja1tdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jb25maWd1cmF0aW9uLmFwaUJhc2VQYXRoICsgJy9zdG9yeWJsb2Nrcy8nK3VzZXJJZClcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nZ2VyLmVycm9yQ2F0Y2hlcigpKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlU3RvcnlCbG9jayh1c2VySWQsIHN0b3J5QmxvY2s6U3RvcnlCbG9jayk6T2JzZXJ2YWJsZTxTdG9yeUJsb2NrPiB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCEhc3RvcnlCbG9jay5faWQpIHtcclxuICAgICAgICAgICAgc3RvcnlCbG9jay5jcmVhdGVkQXQgPSBzdG9yeUJsb2NrLmNyZWF0ZWRBdCB8fCAobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIHN0b3J5QmxvY2subGFzdE1vZGlmaWVkQXQgPSAobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvc3RvcnlibG9ja3MvJyArIHVzZXJJZCArICcvJyArIHN0b3J5QmxvY2suX2lkLCBcImRhdGE9XCIgKyBKU09OLnN0cmluZ2lmeShzdG9yeUJsb2NrKSwgb3B0aW9ucylcclxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dnZXIuZXJyb3JDYXRjaGVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3RvcnlCbG9jay5jcmVhdGVkQXQgPSAobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIHN0b3J5QmxvY2subGFzdE1vZGlmaWVkQXQgPSAobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpQmFzZVBhdGggKyAnL3N0b3J5YmxvY2tzLycrdXNlcklkICsnLycgLCBcImRhdGE9XCIgKyBKU09OLnN0cmluZ2lmeShzdG9yeUJsb2NrKSwgb3B0aW9ucylcclxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dnZXIuZXJyb3JDYXRjaGVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVTdG9yeUJsb2NrKHVzZXJJZCwgc3RvcnlCbG9jazpTdG9yeUJsb2NrKTpPYnNlcnZhYmxlPFN0b3J5QmxvY2tbXT4ge1xyXG4gICAgICAgIGlmICghIXN0b3J5QmxvY2suX2lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvc3RvcnlibG9ja3MvJyArIHVzZXJJZCArICcvJyArIHN0b3J5QmxvY2suX2lkKVxyXG4gICAgICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvckNhdGNoZXIoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0b3J5QmxvY2tUeXBlcygpOlN0b3J5QmxvY2tUeXBlW10ge1xyXG4gICAgICAgIHJldHVybiBTVE9SWUJMT0NLX1RZUEVTO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0b3J5QmxvY2tEZWZhdWx0VHlwZXMoKTpTdG9yeUJsb2NrVHlwZVtdIHtcclxuICAgICAgICByZXR1cm4gU1RPUllCTE9DS19UWVBFUztcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVRlc3REYXRhKHVzZXJJZCk6T2JzZXJ2YWJsZTxTdG9yeUJsb2NrW10+IHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ2dlbmVyYXRlVGVzdERhdGEnLCAnQ3JlYXRpbmcgdGVtcG9yYXJ5IGRhdGEgZm9yICcgKyB1c2VySWQpO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBibG9ja3M6U3RvcnlCbG9ja1tdID0gU1RPUllCTE9DS1M7XHJcblxyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPGJsb2Nrcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGJsb2Nrc1tpXS51c2VySWQgPSB1c2VySWQ7XHJcbiAgICAgICAgICAgIGJsb2Nrc1tpXS5jcmVhdGVkQXQgPSAobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIGJsb2Nrc1tpXS5sYXN0TW9kaWZpZWRBdCA9IChuZXcgRGF0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvc3RvcnlibG9ja3MvJyArIHVzZXJJZCArICcvJywgXCJkYXRhPVwiICsgSlNPTi5zdHJpbmdpZnkoYmxvY2tzKSwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nZ2VyLmVycm9yQ2F0Y2hlcigpKTtcclxuICAgIH1cclxuXHJcbiAgICBkb3dubG9hZFBkZihzdG9yeUJsb2NrczpTdG9yeUJsb2NrW10pIHtcclxuICAgICAgICBmdW5jdGlvbiBjb21wYXJlKGE6U3RvcnlCbG9jaywgYjpTdG9yeUJsb2NrKSB7XHJcbiAgICAgICAgICAgIGlmIChhLnRpbWVQb3NpdGlvbiA8IGIudGltZVBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChhLnRpbWVQb3NpdGlvbiA+IGIudGltZVBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RvcnlCbG9ja3Muc29ydChjb21wYXJlKTtcclxuXHJcblxyXG4gICAgICAgIHZhciBkb2NEZWZpbml0aW9uID0ge1xyXG4gICAgICAgICAgICBjb250ZW50OiBbXSxcclxuXHJcbiAgICAgICAgICAgIHN0eWxlczoge1xyXG4gICAgICAgICAgICAgICAgY2hhcHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMixcclxuICAgICAgICAgICAgICAgICAgICBib2xkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogWzAsIDE2LCAwLCA4XVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhcmFncmFwaDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICAgICAgICBib2xkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogWzAsIDAsIDAsIDEyXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkb2NEZWZpbml0aW9uLmNvbnRlbnQucHVzaChcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBzdG9yeUJsb2Nrc1tpXS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogc3RvcnlCbG9ja3NbaV0udHlwZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZG9jRGVmaW5pdGlvbi5jb250ZW50LnB1c2goXHJcbiAgICAgICAgICAgICAgICBzdG9yeUJsb2Nrc1tpXS5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGRmTWFrZS5jcmVhdGVQZGYoZG9jRGVmaW5pdGlvbikuZG93bmxvYWQoKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXRpbHNTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBFTUFJTF9SRUdFWCA9ICdeWy1hLXowLTl+ISQlXiYqXz0rfXtcXCc/XSsoXFwuWy1hLXowLTl+ISQlXiYqXz0rfXtcXCc/XSspKkAoW2EtejAtOV9dWy1hLXowLTlfXSooXFwuWy1hLXowLTlfXSspKlxcLihhZXJvfGFycGF8Yml6fGNvbXxjb29wfGVkdXxnb3Z8aW5mb3xpbnR8bWlsfG11c2V1bXxuYW1lfG5ldHxvcmd8cHJvfHRyYXZlbHxtb2JpfFthLXpdW2Etel0pfChbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9KSkoOlswLTldezEsNX0pPyQnO1xyXG5cclxuXHJcbiAgICBnZXRSb21hbk51bWVyYWwobnVtKTpzdHJpbmcge1xyXG4gICAgICAgIGlmICghK251bSlcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIHZhciBkaWdpdHMgPSBTdHJpbmcoK251bSkuc3BsaXQoXCJcIiksXHJcbiAgICAgICAgICAgIGtleSA9IFtcIlwiLCBcIkNcIiwgXCJDQ1wiLCBcIkNDQ1wiLCBcIkNEXCIsIFwiRFwiLCBcIkRDXCIsIFwiRENDXCIsIFwiRENDQ1wiLCBcIkNNXCIsXHJcbiAgICAgICAgICAgICAgICBcIlwiLCBcIlhcIiwgXCJYWFwiLCBcIlhYWFwiLCBcIlhMXCIsIFwiTFwiLCBcIkxYXCIsIFwiTFhYXCIsIFwiTFhYWFwiLCBcIlhDXCIsXHJcbiAgICAgICAgICAgICAgICBcIlwiLCBcIklcIiwgXCJJSVwiLCBcIklJSVwiLCBcIklWXCIsIFwiVlwiLCBcIlZJXCIsIFwiVklJXCIsIFwiVklJSVwiLCBcIklYXCJdLFxyXG4gICAgICAgICAgICByb21hbiA9IFwiXCIsXHJcbiAgICAgICAgICAgIGkgPSAzO1xyXG4gICAgICAgIHdoaWxlIChpLS0pXHJcbiAgICAgICAgICAgIHJvbWFuID0gKGtleVsrZGlnaXRzLnBvcCgpICsgKGkgKiAxMCldIHx8IFwiXCIpICsgcm9tYW47XHJcbiAgICAgICAgcmV0dXJuIEFycmF5KCtkaWdpdHMuam9pbihcIlwiKSArIDEpLmpvaW4oXCJNXCIpICsgcm9tYW47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SHVtYW5EYXRlKGQpOnN0cmluZ3tcclxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGQpO1xyXG4gICAgICAgIHJldHVybiAoZGF0ZS5nZXRNb250aCgpICsgJy8nICsgZGF0ZS5nZXREYXRlKCkgKyAnLycgKyAgZGF0ZS5nZXRGdWxsWWVhcigpICsgJyBhdCAnICsgZGF0ZS5nZXRIb3VycygpICsgJzonICsgZGF0ZS5nZXRNaW51dGVzKCkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge1V0aWxzU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBbmltYXRpb25CdWlsZGVyfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2FuaW1hdGUvYW5pbWF0aW9uX2J1aWxkZXJcIjtcclxuaW1wb3J0IHtTdG9yeUJsb2NrfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2tcIjtcclxuaW1wb3J0IHtTdG9yeUJsb2NrU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0b3J5YmxvY2tzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlLCBERUJVR19MRVZFTH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3RvcnlibG9jaycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmRleFwiPjxzcGFuICpuZ0lmPVwic3RvcnlCbG9ja0luZm8udHlwZSA9PSAnY2hhcHRlcidcIj57e3V0aWxzU2VydmljZS5nZXRSb21hbk51bWVyYWwoc3RvcnlCbG9ja0luZm8uYmxvY2tOdW1iZXIgKyAxKX19PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0aXRsZVwiIFthdHRyLnJlYWRvbmx5XT1cIl9leHBvc2VkID8gbnVsbCA6IHRydWVcIiBbKG5nTW9kZWwpXT1cInN0b3J5QmxvY2tJbmZvLnRpdGxlXCIgcGxhY2Vob2xkZXI9XCJJbnNlcnQgYSB0aXRsZVwiIC8+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImRlc2NyaXB0aW9uXCIgW2F0dHIucmVhZG9ubHldPVwiX2V4cG9zZWQgPyBudWxsIDogdHJ1ZVwiIFsobmdNb2RlbCldPVwic3RvcnlCbG9ja0luZm8uZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIlN0YXJ0IHdyaXRpbmcgeW91ciBzdG9yeSBoZXJlLi4uXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlZmF1bHQtYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cImVkaXQoaW5kZXgsICRldmVudClcIiBjbGFzcz1cImJ1dHRvbiBpbmxpbmUtYnV0dG9uIHByaW1hcnlcIj5FZGl0PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cInJlbW92ZShpbmRleCwgJGV2ZW50KVwiIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDohaGFzSWQoKX1cIiBjbGFzcz1cImJ1dHRvbiBpbmxpbmUtYnV0dG9uIGFsZXJ0XCI+UmVtb3ZlPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4cG9zZWQtYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cInNhdmUoaW5kZXgsICRldmVudClcIiBjbGFzcz1cImJ1dHRvbiBpbmxpbmUtYnV0dG9uIHByaW1hcnlcIj5TYXZlPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cImNsb3NlKClcIiBjbGFzcz1cImJ1dHRvbiBpbmxpbmUtYnV0dG9uIHNlY29uZGFyeVwiPkNsb3NlPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtVdGlsc1NlcnZpY2UsIFN0b3J5QmxvY2tTZXJ2aWNlXSxcclxuICAgIGlucHV0czogWydzdG9yeUJsb2NrSW5mbycsICdpbmRleCcsICd1c2VySWQnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0b3J5QmxvY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIHN0b3J5QmxvY2tJbmZvOlN0b3J5QmxvY2s7XHJcbiAgICBwcml2YXRlIHVzZXJJZDtcclxuICAgIHB1YmxpYyBpbmRleDtcclxuICAgIHB1YmxpYyBfZXhwb3NlZCA9IGZhbHNlO1xyXG4gICAgcHVibGljIF9hY3RpdmUgPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfYWN0aW9uVGltZW91dDtcclxuICAgIHB1YmxpYyBfc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3pvb21MZXZlbCA9IDEwO1xyXG4gICAgcHJpdmF0ZSBfcHJldmlvdXNab29tTGV2ZWwgPSAxMDtcclxuICAgIHByaXZhdGUgc3RvcnlCbG9ja0xvY2FsU2F2ZTpTdG9yeUJsb2NrO1xyXG5cclxuICAgIEBPdXRwdXQoKSB6b29tRXZlbnQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgZXhwb3NlRXZlbnQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgcmVtb3ZlU3RvcnlCbG9ja0V2ZW50OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIG5vdGlmeTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjpMb2dnZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfYWI6QW5pbWF0aW9uQnVpbGRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2U6RWxlbWVudFJlZixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgdXRpbHNTZXJ2aWNlOlV0aWxzU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBzdG9yeUJsb2NrU2VydmljZTpTdG9yeUJsb2NrU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjpDb25maWd1cmF0aW9uKSB7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCB6b29tTGV2ZWwodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcHJldmlvdXNab29tTGV2ZWwgPSAodGhpcy5fcHJldmlvdXNab29tTGV2ZWwgPT0gdW5kZWZpbmVkKSA/IDEwIDogdGhpcy5fcHJldmlvdXNab29tTGV2ZWw7XHJcbiAgICAgICAgdGhpcy5fem9vbUxldmVsID0gKHRoaXMuX3pvb21MZXZlbCA9PSB1bmRlZmluZWQpID8gMTAgOiB0aGlzLl96b29tTGV2ZWw7XHJcbiAgICAgICAgaWYgKHRoaXMuX3pvb21MZXZlbCAhPSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1pvb21MZXZlbCA9IHRoaXMuX3pvb21MZXZlbDtcclxuICAgICAgICAgICAgdGhpcy5fem9vbUxldmVsID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbUNoYW5nZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCBleHBvc2VkSW5kZXgodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhwb3NlZCA9ICh2YWx1ZSA9PSB0aGlzLmluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOmFueSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQb3NpdGlvbk9uWm9vbSgxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICB6b29tKGUpIHtcclxuICAgICAgICB2YXIgZSA9IHdpbmRvdy5ldmVudCB8fCBlOyAvLyBvbGQgSUUgc3VwcG9ydFxyXG4gICAgICAgIHRoaXMuem9vbUV2ZW50LmVtaXQoZSk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgem9vbUNoYW5nZWQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLlZFUkJPU0UsJ3pvb21DaGFuZ2VkJywnJywge1xyXG4gICAgICAgICAgICBzdG9yeUJsb2NrOiB0aGlzLmluZGV4LFxyXG4gICAgICAgICAgICBwcmV2aW91c1pvb206IHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsLFxyXG4gICAgICAgICAgICBjdXJyZW50Wm9vbTogdGhpcy5fem9vbUxldmVsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3pvb21MZXZlbCA8IHRoaXMuc3RvcnlCbG9ja0luZm8uaW1wb3J0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZhZGVPdXQoMTAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQb3NpdGlvbk9uWm9vbSgxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmFkZUluKHNwZWVkOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5WRVJCT1NFLCdmYWRlSW4nLCcnLCB7XHJcbiAgICAgICAgICAgIHN0b3J5QmxvY2s6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6J0ZhZGluZyBpbidcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbiA9IHRoaXMuX2FiLmNzcygpO1xyXG4gICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGZyb21TdHlsZSA9IHt9O1xyXG4gICAgICAgIHZhciB0b1N0eWxlID0ge307XHJcblxyXG4gICAgICAgIGZyb21TdHlsZVsnZGlzcGxheSddID0gJ2ZsZXgnO1xyXG4gICAgICAgIGZyb21TdHlsZVsndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSA9ICdjdWJpYy1iZXppZXIoMC41NzUsIDAuMjU1LCAwLjQ0MCwgMC45ODUpOyc7XHJcbiAgICAgICAgdG9TdHlsZVsnb3BhY2l0eSddID0gMTtcclxuXHJcbiAgICAgICAgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIC5zZXREdXJhdGlvbihzcGVlZClcclxuICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoZnJvbVN0eWxlKVxyXG4gICAgICAgICAgICAuc2V0VG9TdHlsZXModG9TdHlsZSk7XHJcblxyXG4gICAgICAgIGlmICghIV9zZWxmLl9hY3Rpb25UaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfc2VsZi5fYWN0aW9uVGltZW91dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfc2VsZi5fYWN0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhbmltYXRpb24uc3RhcnQoX3NlbGYuX2UubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNJZCgpIHtcclxuICAgICAgICByZXR1cm4gISEoKHRoaXMuc3RvcnlCbG9ja0luZm8gfHwge19pZDogdW5kZWZpbmVkfSkuX2lkKTtcclxuICAgIH1cclxuXHJcbiAgICBmYWRlT3V0KHNwZWVkOm51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLlZFUkJPU0UsJ2ZhZGVPdXQnLCcnLCB7XHJcbiAgICAgICAgICAgICAgICBzdG9yeUJsb2NrOiB0aGlzLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNab29tOiB0aGlzLl9wcmV2aW91c1pvb21MZXZlbCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRab29tOiB0aGlzLl96b29tTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbmNlOiB0aGlzLnN0b3J5QmxvY2tJbmZvLmltcG9ydGFuY2UsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOidGYWRpbmcgb3V0J1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBhbmltYXRpb24gPSB0aGlzLl9hYi5jc3MoKTtcclxuICAgICAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGZyb21TdHlsZSA9IHt9O1xyXG4gICAgICAgICAgICB2YXIgdG9TdHlsZSA9IHt9O1xyXG5cclxuICAgICAgICAgICAgdG9TdHlsZVsndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSA9ICdjdWJpYy1iZXppZXIoMC41NzUsIDAuMjU1LCAwLjQ0MCwgMC45ODUpOyc7XHJcbiAgICAgICAgICAgIHRvU3R5bGVbJ29wYWNpdHknXSA9IDA7XHJcblxyXG4gICAgICAgICAgICBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgIC5zZXREdXJhdGlvbihzcGVlZClcclxuICAgICAgICAgICAgICAgIC5zZXRGcm9tU3R5bGVzKGZyb21TdHlsZSlcclxuICAgICAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh0b1N0eWxlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghIV9zZWxmLl9hY3Rpb25UaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuVkVSQk9TRSwnZmFkZU91dCcsJycsIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yeUJsb2NrOiB0aGlzLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6J0FuaW1hdGlvbiByZW1vdmVkJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF9zZWxmLl9hY3Rpb25UaW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgX3NlbGYuX2FjdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5zdGFydChfc2VsZi5fZS5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUG9zaXRpb25Pblpvb20oc3BlZWQpIHtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYWIuY3NzKCk7XHJcbiAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgZnJvbVN0eWxlID0ge1xyXG4gICAgICAgICAgICB0b3A6IHRoaXMuY29uZmlndXJhdGlvbi56b29tLm9mZnNldCArICgodGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RlcCArIE1hdGguZXhwKHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsICogdGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RyZW5ndGgpKSAqIHRoaXMuc3RvcnlCbG9ja0luZm8udGltZVBvc2l0aW9uKSArICdweCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgdG9TdHlsZSA9IHtcclxuICAgICAgICAgICAgdG9wOiB0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5vZmZzZXQgKyAoKHRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0ZXAgKyBNYXRoLmV4cCh0aGlzLl96b29tTGV2ZWwgKiB0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5zdHJlbmd0aCkpICogdGhpcy5zdG9yeUJsb2NrSW5mby50aW1lUG9zaXRpb24pICsgJ3B4J1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5WRVJCT1NFLCAnY2hhbmdlUG9zaXRpb25Pblpvb20nLCAnJywge1xyXG4gICAgICAgICAgICBzdG9yeUJsb2NrOiB0aGlzLmluZGV4LFxyXG4gICAgICAgICAgICBwcmV2aW91c1pvb206IHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsLFxyXG4gICAgICAgICAgICBjdXJyZW50Wm9vbTogdGhpcy5fem9vbUxldmVsLFxyXG4gICAgICAgICAgICB0aW1lUG9zaXRpb246IHRoaXMuc3RvcnlCbG9ja0luZm8udGltZVBvc2l0aW9uLFxyXG4gICAgICAgICAgICBvZmZzZXQ6dGhpcy5jb25maWd1cmF0aW9uLnpvb20ub2Zmc2V0LFxyXG4gICAgICAgICAgICBzdGVwOnRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0ZXAsXHJcbiAgICAgICAgICAgIHN0cmVuZ3RoOnRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0cmVuZ3RoLFxyXG4gICAgICAgICAgICBmcm9tUG9zaXRpb246ZnJvbVN0eWxlLnRvcCxcclxuICAgICAgICAgICAgdG9Qb3NpdGlvbjp0b1N0eWxlLnRvcCxcclxuICAgICAgICAgICAgbWVzc2FnZTonQ2hhbmdpbmcgcG9zaXRpb24nXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChfc2VsZi5fem9vbUxldmVsID4gX3NlbGYuc3RvcnlCbG9ja0luZm8uaW1wb3J0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuVkVSQk9TRSwnY2hhbmdlUG9zaXRpb25Pblpvb20nLCcnLCB7XHJcbiAgICAgICAgICAgICAgICBzdG9yeUJsb2NrOiB0aGlzLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNab29tOiB0aGlzLl9wcmV2aW91c1pvb21MZXZlbCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRab29tOiB0aGlzLl96b29tTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbmNlOiB0aGlzLnN0b3J5QmxvY2tJbmZvLmltcG9ydGFuY2UsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOidGYWRpbmcgaW4nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0b1N0eWxlWydvcGFjaXR5J10gPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLlZFUkJPU0UsJ2NoYW5nZVBvc2l0aW9uT25ab29tJywnJywge1xyXG4gICAgICAgICAgICAgICAgc3RvcnlCbG9jazogdGhpcy5pbmRleCxcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzWm9vbTogdGhpcy5fcHJldmlvdXNab29tTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Wm9vbTogdGhpcy5fem9vbUxldmVsLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW5jZTogdGhpcy5zdG9yeUJsb2NrSW5mby5pbXBvcnRhbmNlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTonRmFkaW5nIG91dCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRvU3R5bGVbJ29wYWNpdHknXSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0b1N0eWxlWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJ2N1YmljLWJlemllcigwLjU3NSwgMC4yNTUsIDAuNDQwLCAwLjk4NSk7JztcclxuXHJcbiAgICAgICAgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIC5zZXREdXJhdGlvbihzcGVlZClcclxuICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoZnJvbVN0eWxlKVxyXG4gICAgICAgICAgICAuc2V0VG9TdHlsZXModG9TdHlsZSk7XHJcblxyXG4gICAgICAgIGlmICghIV9zZWxmLl9hY3Rpb25UaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5WRVJCT1NFLCdjaGFuZ2VQb3NpdGlvbk9uWm9vbScsJycsIHtcclxuICAgICAgICAgICAgICAgIHN0b3J5QmxvY2s6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOidBbmltYXRpb24gcmVtb3ZlZCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfc2VsZi5fYWN0aW9uVGltZW91dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfc2VsZi5fYWN0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhbmltYXRpb24uc3RhcnQoX3NlbGYuX2UubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBmb2N1cygpIHtcclxuICAgICAgICB2YXIgbmF0aXZlID0gdGhpcy5fZS5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSBudWxsO1xyXG4gICAgICAgIHZhciB0ZXh0YXJlYSA9IG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYXRpdmUuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoKG5hdGl2ZS5jaGlsZE5vZGVzW2ldLmNsYXNzTmFtZSB8fCAnJykuaW5kZXhPZihcInRleHQtY29udGFpbmVyXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IG5hdGl2ZS5jaGlsZE5vZGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEhY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICgoY29udGFpbmVyLmNoaWxkTm9kZXNbaV0uY2xhc3NOYW1lIHx8ICcnKS5pbmRleE9mKFwiZGVzY3JpcHRpb25cIikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhID0gY29udGFpbmVyLmNoaWxkTm9kZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCEhdGV4dGFyZWEpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdChpbmRleCwgZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ2VkaXQnLCAnU2F2aW5nIHRlbXBvcmFyeSBkYXRhICcsIHRoaXMuc3RvcnlCbG9ja0luZm8pO1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja0xvY2FsU2F2ZSA9IDxTdG9yeUJsb2NrPkpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdG9yeUJsb2NrSW5mbykpO1xyXG4gICAgICAgIHRoaXMuZXhwb3NlRXZlbnQuZW1pdChpbmRleCk7XHJcbiAgICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShpbmRleCwgZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmRlbGV0ZVN0b3J5QmxvY2sodGhpcy51c2VySWQsIHRoaXMuc3RvcnlCbG9ja0luZm8pLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ3JlbW92ZScsICdSZWNlaXZlZCBkYXRhJywgIGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuV0FSTiwgJ3JlbW92ZScsICdFcnJvciB3aGlsZSByZW1vdmluZycsIHRoaXMuc3RvcnlCbG9ja0luZm8sIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yLiBQbGVhc2UgdHJ5IGFnYWluLidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ3JlbW92ZScsICdSZW1vdmluZyBibG9jayBpbmRleCAnICsgdGhpcy5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1JlbW92ZWQgc3VjY2Vzc2Z1bGx5LidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTdG9yeUJsb2NrRXZlbnQuZW1pdCh0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZShpbmRleCwgZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ3NhdmUnLCAnSSBhbSBhYm91dCB0byBzYXZlJywgdGhpcy5zdG9yeUJsb2NrSW5mbyk7XHJcblxyXG4gICAgICAgIGlmICghKHRoaXMuc3RvcnlCbG9ja0luZm8udGl0bGUgPT0gJycgJiYgdGhpcy5zdG9yeUJsb2NrSW5mby5kZXNjcmlwdGlvbiA9PSAnJykpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5zYXZlU3RvcnlCbG9jayh0aGlzLnVzZXJJZCwgdGhpcy5zdG9yeUJsb2NrSW5mbykuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2NrSW5mbyA9IDxTdG9yeUJsb2NrPmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdzYXZlJywgJ1JlY2VpdmVkICcsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnc2F2ZScsICdTYXZpbmcgdGVtcG9yYXJ5IGRhdGEgJywgZGF0YSwgdGhpcy5zdG9yeUJsb2NrSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2NrTG9jYWxTYXZlID0gPFN0b3J5QmxvY2s+SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0b3J5QmxvY2tJbmZvKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5XQVJOLCAnc2F2ZScsICdFcnJvciB3aGlsZSBzYXZpbmcnLCB0aGlzLnN0b3J5QmxvY2tJbmZvLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvci4gUGxlYXNlIHRyeSBhZ2Fpbi4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnc2F2ZScsICdTYXZlZCAnLCB0aGlzLnN0b3J5QmxvY2tJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2F2ZWQgc3VjY2Vzc2Z1bGx5LidcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KCdQbGVhc2UgaW5zZXJ0IGEgdGl0bGUgb3Igc29tZSBjb250ZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLmV4cG9zZUV2ZW50LmVtaXQoLTEpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc3RvcnlCbG9ja0xvY2FsU2F2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ2Nsb3NlJywnUmVtb3ZpbmcgYmxvY2sgaW5kZXggJyArIHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVN0b3J5QmxvY2tFdmVudC5lbWl0KHRoaXMuaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjondGltZWxpbmUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lQ29tcG9uZW50IHtcclxufSIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J2FkZC1idXR0b24nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8YT48c3Bhbj4rPC9zcGFuPjwvYT5cclxuICAgIGAsXHJcbiAgICBpbnB1dHM6IFsnb2Zmc2V0WSddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRCdXR0b25Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfb2Zmc2V0WTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lOkVsZW1lbnRSZWYpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IG9mZnNldFkodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fb2Zmc2V0WSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0Q2hhbmdlZCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb2Zmc2V0Q2hhbmdlZCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2UubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSB2YWx1ZSArICdweCc7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J25vdGlmaWNhdGlvbicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXY+e3sgX2NvbnRlbnTCoH19PC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfdGltZXI7XHJcbiAgICBwcml2YXRlIF9jb250ZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2U6RWxlbWVudFJlZil7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3coY29udGVudCl7XHJcbiAgICAgICAgaWYoISF0aGlzLl90aW1lcil7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMuX2UubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fZS5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgVXNlciB7XHJcbiAgICBuYW1lIDogc3RyaW5nO1xyXG4gICAgZW1haWwgOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZCA6IHN0cmluZztcclxufSIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdlYlN0b3JhZ2VTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgc3RvcmFnZVN1cHBvcnRlZCA9ICh0eXBlb2YoU3RvcmFnZSkgIT09IFwidW5kZWZpbmVkXCIpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1dChrZXksIHZhbHVlKTp2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zdG9yYWdlU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIGlmICghIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1dEluTG9jYWxTdG9yYWdlKGtleSwgdmFsdWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCEhdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHV0SW5Db29raWVzKGtleSwgdmFsdWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21Db29raWVzKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGtleSk6YW55IHtcclxuICAgICAgICBpZiAodGhpcy5zdG9yYWdlU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEZyb21Mb2NhbFN0b3JhZ2Uoa2V5KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RnJvbUNvb2tpZShrZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoa2V5KTp2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zdG9yYWdlU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShrZXkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21Db29raWVzKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHV0SW5Mb2NhbFN0b3JhZ2Uoa2V5LCB2YWx1ZSk6dm9pZCB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShlbmNvZGVVUkkodmFsdWUpIHx8IFwiXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEZyb21Mb2NhbFN0b3JhZ2Uoa2V5KTphbnkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZVVSSShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB8fCBcInt9XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShrZXkpOnZvaWQge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwdXRJbkNvb2tpZXMoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuICAgICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XHJcbiAgICAgICAgdmFyIGV4cGlyZXMgPSBkLnRvVVRDU3RyaW5nKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llICs9IGtleSArICc9JyArIEpTT04uc3RyaW5naWZ5KGVuY29kZVVSSSh2YWx1ZSkgfHwgXCJcIikgKyBcIjtwYXRoPS87ZXhwaXJlcz1cIiArIGV4cGlyZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRGcm9tQ29va2llKGtleSk6YW55IHtcclxuICAgICAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCcoPzpefDspXFxcXHM/JyArIGtleSArICc9KC4qPykoPzo7fCQpJywgJ2knKTtcclxuICAgICAgICB2YXIgbXRjID0gZG9jdW1lbnQuY29va2llLm1hdGNoKHJlZ2V4KSB8fCBbXTtcclxuICAgICAgICBpZiAobXRjLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlVVJJKG10Y1sxXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlRnJvbUNvb2tpZXMoa2V5KTp2b2lkIHtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBrZXkgKyBcIj07cGF0aD0vO2V4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVRcIjtcclxuICAgIH1cclxufSIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCB7Snd0VG9rZW59IGZyb20gXCIuLi9tb2RlbHMvand0VG9rZW5cIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uL21vZGVscy91c2VyXCI7XHJcbmltcG9ydCB7V2ViU3RvcmFnZVNlcnZpY2V9IGZyb20gXCIuL3dlYnN0b3JhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2UsIERFQlVHX0xFVkVMfSBmcm9tIFwiLi9sb2dnZXIuc2VydmljZVwiO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGxvZ2dlcjpMb2dnZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBodHRwOkh0dHAsXHJcbiAgICAgICAgcHJpdmF0ZSB3ZWJTdG9yYWdlU2VydmljZTpXZWJTdG9yYWdlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvblxyXG4gICAgKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCk6Ym9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy53ZWJTdG9yYWdlU2VydmljZS5yZW1vdmUodGhpcy5jb25maWd1cmF0aW9uLnRva2VuLm5hbWUpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKHVzZXI6VXNlcik6T2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ2xvZ2luJywgJ0NyZWF0aW5nIHRlbXBvcmFyeSBkYXRhJyk7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvYXV0aC9sb2dpbicsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWU9XCIgKyB1c2VyLm5hbWUgKyBcIiZcIiArXHJcbiAgICAgICAgICAgICAgICBcImVtYWlsPVwiICsgdXNlci5lbWFpbCArIFwiJlwiICtcclxuICAgICAgICAgICAgICAgIFwicGFzc3dvcmQ9XCIgKyB1c2VyLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMudGV4dCgpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dnZXIuZXJyb3JDYXRjaGVyKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKHVzZXI6VXNlcik6T2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ3JlZ2lzdGVyJywgJ0NyZWF0aW5nIHRlbXBvcmFyeSBkYXRhJyk7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5jb25maWd1cmF0aW9uLmFwaUJhc2VQYXRoICsgJy9hdXRoL3JlZ2lzdGVyJyxcclxuICAgICAgICAgICAgICAgIFwiZW1haWw9XCIgKyB1c2VyLmVtYWlsICsgXCImXCIgK1xyXG4gICAgICAgICAgICAgICAgXCJwYXNzd29yZD1cIiArIHVzZXIucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy50ZXh0KCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvckNhdGNoZXIoKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlzTG9nZ2VkSW4oKTpib29sZWFuIHtcclxuICAgICAgICB2YXIgdG9rZW5EYXRhU3BsaXQgPSAodGhpcy53ZWJTdG9yYWdlU2VydmljZS5nZXQodGhpcy5jb25maWd1cmF0aW9uLnRva2VuLm5hbWUpIHx8ICcnKS5zcGxpdCgnLicpWzFdO1xyXG4gICAgICAgIGlmICghdG9rZW5EYXRhU3BsaXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdG9rZW5EYXRhUmF3ID0gYXRvYih0b2tlbkRhdGFTcGxpdCk7XHJcblxyXG4gICAgICAgIHZhciB0b2tlbkRhdGEgPSBKU09OLnBhcnNlKHRva2VuRGF0YVJhdykgYXMgSnd0VG9rZW47XHJcbiAgICAgICAgcmV0dXJuICh0b2tlbkRhdGEuZXhwIHx8IDApID4gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBnZXRJZEZyb21Ub2tlbigpIHtcclxuICAgICAgICB2YXIgdG9rZW5EYXRhU3BsaXQgPSAodGhpcy53ZWJTdG9yYWdlU2VydmljZS5nZXQodGhpcy5jb25maWd1cmF0aW9uLnRva2VuLm5hbWUpIHx8ICcnKS5zcGxpdCgnLicpWzFdO1xyXG4gICAgICAgIGlmICghdG9rZW5EYXRhU3BsaXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdG9rZW5EYXRhUmF3ID0gYXRvYih0b2tlbkRhdGFTcGxpdCk7XHJcblxyXG4gICAgICAgIHZhciB0b2tlbkRhdGEgPSBKU09OLnBhcnNlKHRva2VuRGF0YVJhdykgYXMgSnd0VG9rZW47XHJcblxyXG4gICAgICAgIHJldHVybiB0b2tlbkRhdGEuX2lkXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWRGcm9tQW5vbnltb3VzVG9rZW4odG9rZW5EYXRhU3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHRva2VuRGF0YVJhdyA9IGF0b2IodG9rZW5EYXRhU3RyaW5nKTtcclxuXHJcbiAgICAgICAgdmFyIHRva2VuRGF0YSA9IEpTT04ucGFyc2UodG9rZW5EYXRhUmF3KSBhcyBKd3RUb2tlbjtcclxuICAgICAgICByZXR1cm4gdG9rZW5EYXRhLl9pZFxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlQW5vbnltb3VzVG9rZW4oKTphbnkge1xyXG4gICAgICAgIHZhciBhbm9ueW1vdXNUb2tlbiA9IHtcclxuICAgICAgICAgICAgX2lkOiB0aGlzLmdlbmVyYXRlVW5pcXVlSWQoKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBidG9hKEpTT04uc3RyaW5naWZ5KGFub255bW91c1Rva2VuKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZVVuaXF1ZUlkKCkge1xyXG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMCwgdiA9IGMgPT09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn0iLCJpbXBvcnQge0NvbnRyb2wsIENvbnRyb2xHcm91cH0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xyXG5cclxuLypcclxuIEN1c3RvbSB2YWxpZGF0b3JzIHRvIHVzZSBldmVyeXdoZXJlLlxyXG4gKi9cclxuXHJcbi8vIFNJTkdMRSBGSUVMRCBWQUxJREFUT1JTXHJcbmV4cG9ydCBmdW5jdGlvbiBlbWFpbFZhbGlkYXRvcihjb250cm9sOiBDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xyXG4gICAgdmFyIGVtYWlsUmVnZXhwID0gL15bYS16MC05ISMkJSYnKitcXC89P15fYHt8fX4uLV0rQFthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSokL2k7XHJcbiAgICBpZiAoY29udHJvbC52YWx1ZSAmJiBjb250cm9sLnZhbHVlLmxlbmd0aCA8IDYgJiYgIWVtYWlsUmVnZXhwLnRlc3QoY29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4ge2ludmFsaWRFbWFpbDogdHJ1ZX07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlbWFpbFJlZ2V4cCA9ICdeW2EtejAtOSEjJCUmXFwnKitcXFxcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFxcXC5bYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPykqJCc7XHJcblxyXG4vL0NPTlRST0wgR1JPVVAgVkFMSURBVE9SU1xyXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hpbmdQYXNzd29yZHMocGFzc3dvcmRLZXk6IHN0cmluZywgY29uZmlybVBhc3N3b3JkS2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAoZ3JvdXA6IENvbnRyb2xHcm91cCk6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcclxuICAgICAgICBsZXQgcGFzc3dvcmQgPSBncm91cC5jb250cm9sc1twYXNzd29yZEtleV07XHJcbiAgICAgICAgbGV0IGNvbmZpcm1QYXNzd29yZCA9IGdyb3VwLmNvbnRyb2xzW2NvbmZpcm1QYXNzd29yZEtleV07XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkLnZhbHVlICE9PSBjb25maXJtUGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1pc21hdGNoZWRQYXNzd29yZHM6IHRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXJcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBDb250cm9sR3JvdXAsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xyXG5pbXBvcnQge2VtYWlsVmFsaWRhdG9yLCBtYXRjaGluZ1Bhc3N3b3JkcywgZW1haWxSZWdleHB9IGZyb20gJy4uL3NlcnZpY2VzL3ZhbGlkYXRvcnMuc2VydmljZSc7XHJcbmltcG9ydCB7V2ViU3RvcmFnZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy93ZWJzdG9yYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlLCBERUJVR19MRVZFTH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbG9nLW1lc3NhZ2UnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhib3ggZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e3tsb2dNZXNzYWdlLm1lc3NhZ2V9fTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48YSBjbGFzcz1cImNsb3NlXCIgKGNsaWNrKT1cImNsb3NlKCRldmVudClcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+WDwvaT48L2E+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImRlc2NyaXB0aW9uXCIgW2F0dHIucmVhZG9ubHldPVwidHJ1ZVwiIFsobmdNb2RlbCldPVwibG9nTWVzc2FnZS5wcmV0dHlcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZSwgV2ViU3RvcmFnZVNlcnZpY2VdLFxyXG4gICAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dNZXNzYWdlQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgbG9nTWVzc2FnZTtcclxuICAgIEBPdXRwdXQoKSBjbG9zZU1vZGFsOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHJcbiAgICBjbG9zZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbC5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlLCBERUJVR19MRVZFTH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge0xvZ01lc3NhZ2VDb21wb25lbnR9IGZyb20gXCIuL2xvZy1tZXNzYWdlLmNvbXBvbmVudFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkZWJ1Zy1jb25zb2xlJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgIDxkaXY+RGVidWcgZXJyb3JzOjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItbG9nXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cIiNsb2dNZXNzYWdlIG9mIGxvZ01lc3NhZ2VzOyAjaSA9IGluZGV4XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJzaG93KGkpXCIgW25nQ2xhc3NdPVwie2Vycm9yOiBpc0Vycm9yKGxvZ01lc3NhZ2UpLCB3YXJuaW5nOiBpc1dhcm5pbmcobG9nTWVzc2FnZSl9XCI+e3tsb2dNZXNzYWdlLm1lc3NhZ2V9fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8bG9nLW1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpPT1vcGVuTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbG9zZU1vZGFsKT1cImhpZGUoKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtsb2dNZXNzYWdlXT1cImxvZ01lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2xvZy1tZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczogW10sXHJcbiAgICBkaXJlY3RpdmVzOiBbTG9nTWVzc2FnZUNvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z0NvbnNvbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBwcml2YXRlIGxvZ1N0cmVhbSQ6T2JzZXJ2YWJsZTxPYmplY3RbXT47XHJcbiAgICBwdWJsaWMgbG9nTWVzc2FnZXM6T2JqZWN0W107XHJcbiAgICBwdWJsaWMgb3Blbk1lc3NhZ2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6TG9nZ2VyU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHtcclxuICAgICAgICB0aGlzLmxvZ01lc3NhZ2VzPVtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubG9nU3RyZWFtJCA9IHRoaXMubG9nZ2VyLmdldExvZ1N0cmVhbSgpO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ1N0cmVhbSQuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ01lc3NhZ2VzLnB1c2gobWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNob3coaW5kZXgpIHtcclxuICAgICAgICB0aGlzLm9wZW5NZXNzYWdlID0gKCF0aGlzLm9wZW5NZXNzYWdlKT9pbmRleDp1bmRlZmluZWQ7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKXtcclxuICAgICAgICB0aGlzLm9wZW5NZXNzYWdlPXVuZGVmaW5lZDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNFcnJvcihtZXNzYWdlKXtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZS5sZXZlbCA9PSBERUJVR19MRVZFTC5FUlJPUi5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGlzV2FybmluZyhtZXNzYWdlKXtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZS5sZXZlbCA9PSBERUJVR19MRVZFTC5XQVJOLm5hbWU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvc3RvcnlibG9ja3Muc2VydmljZVwiO1xyXG5pbXBvcnQge1V0aWxzU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTdG9yeUJsb2NrVHlwZX0gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrLXR5cGVcIjtcclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtEZWJ1Z0NvbnNvbGVDb21wb25lbnR9IGZyb20gXCIuL2RlYnVnLWNvbnNvbGUuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidzaWRlYmFyJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIl9pbmRleCA9PSAtMVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiY3JlYXRlLXN0b3J5YmxvY2tcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgKGRyYWdzdGFydCk9XCJkcmFnU3RhcnQoJGV2ZW50KVwiIChkcmFnZW5kKT1cImRyYWdFbmQoJGV2ZW50KVwiPkNyZWF0ZSBzdG9yeWJsb2NrPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItY291bnRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5Ub3RhbCBjaGFwdGVyczwvc3Bhbj48c3BhbiBjbGFzcz1cImNvdW50XCI+e3tfc3RvcnlCbG9ja3NMZW5ndGh9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIl9pbmRleCA+PSAwICYmICEhX3N0b3J5QmxvY2tcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+PHNwYW4gY2xhc3M9XCJjYXBpdGFsLWxldHRlclwiPkNoYXB0ZXI8L3NwYW4+IHt7X3N0b3J5QmxvY2suYmxvY2tOdW1iZXIrMX19PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLXNlcGFyYXRvclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlN0b3J5YmxvY2sgdHlwZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgWyhuZ01vZGVsKV09XCJfc3RvcnlCbG9jay50eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cIiNzdG9yeUJsb2NrVHlwZSBvZiBzdG9yeUJsb2NrVHlwZXNcIiB2YWx1ZT17e3N0b3J5QmxvY2tUeXBlLmlkfX0+e3tzdG9yeUJsb2NrVHlwZS5uYW1lfX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLXNlcGFyYXRvclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1jb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlRvdGFsIGNoYXJhY3RlcnM8L3NwYW4+PHNwYW4gY2xhc3M9XCJjb3VudFwiPnt7X3N0b3J5QmxvY2suZGVzY3JpcHRpb24ubGVuZ3RofX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1pbmZvXCIgKm5nSWY9XCIhIV9zdG9yeUJsb2NrLmNyZWF0ZWRBdFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkNyZWF0ZWQ8L3NwYW4+PHNwYW4gY2xhc3M9XCJpbmZvXCI+e3t1dGlsc1NlcnZpY2UuZ2V0SHVtYW5EYXRlKF9zdG9yeUJsb2NrLmNyZWF0ZWRBdCl9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWluZm9cIiAqbmdJZj1cIiEhX3N0b3J5QmxvY2subGFzdE1vZGlmaWVkQXRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5MYXN0IG1vZGlmaWVkPC9zcGFuPjxzcGFuIGNsYXNzPVwiaW5mb1wiPnt7dXRpbHNTZXJ2aWNlLmdldEh1bWFuRGF0ZShfc3RvcnlCbG9jay5sYXN0TW9kaWZpZWRBdCl9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRlYnVnLWNvbnNvbGUgKm5nSWY9XCJpc0RlYnVnKClcIj48L2RlYnVnLWNvbnNvbGU+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOiBbVXRpbHNTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtEZWJ1Z0NvbnNvbGVDb21wb25lbnRdLFxyXG4gICAgaW5wdXRzOiBbJ3N0b3J5QmxvY2snLCAnc3RvcnlCbG9ja3NMZW5ndGgnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgc3RvcnlCbG9ja1R5cGVzOlN0b3J5QmxvY2tUeXBlW107XHJcbiAgICBcclxuICAgIHB1YmxpYyBfaW5kZXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBfc3RvcnlCbG9jaztcclxuICAgIHB1YmxpYyBfc3RvcnlCbG9ja3NMZW5ndGg7XHJcbiAgICBwdWJsaWMgX3N1YnNjcmlwdGlvbjogYW55O1xyXG5cclxuICAgIEBPdXRwdXQoKSBzdGFydERyYWdnaW5nOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIGVuZERyYWdnaW5nOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbG9nZ2VyOkxvZ2dlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfc3RvcnlCbG9ja1NlcnZpY2U6U3RvcnlCbG9ja1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB1dGlsc1NlcnZpY2U6VXRpbHNTZXJ2aWNlXHJcbiAgICApIHt9XHJcblxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgc3RvcnlCbG9jayhzdG9yeUJsb2NrKSB7XHJcbiAgICAgICAgdGhpcy5fc3RvcnlCbG9jayA9IHN0b3J5QmxvY2s7XHJcbiAgICB9XHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IHN0b3J5QmxvY2tzTGVuZ3RoKHN0b3J5QmxvY2tzTGVuZ3RoKXtcclxuICAgICAgICB0aGlzLl9zdG9yeUJsb2Nrc0xlbmd0aCA9IHN0b3J5QmxvY2tzTGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrVHlwZXMgPSB0aGlzLl9zdG9yeUJsb2NrU2VydmljZS5nZXRTdG9yeUJsb2NrVHlwZXMoKTtcclxuICAgICAgICB0aGlzLl9pbmRleCA9IHRoaXMuX3N0b3J5QmxvY2tTZXJ2aWNlLmdldEV4cG9zZWRJbmRleCgpO1xyXG4gICAgICAgIHRoaXMuX3N0b3J5QmxvY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX3N0b3J5QmxvY2tTZXJ2aWNlLmluZGV4Q2hhbmdlJC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGluZGV4ID0+IHRoaXMuc2VsZWN0SW5kZXgoaW5kZXgpKTtcclxuICAgIH1cclxuICAgIHNlbGVjdEluZGV4KGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9pbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICBkcmFnU3RhcnQoZSl7XHJcbiAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1nLnNyYyA9ICAgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNRQUFBQWtDQVlBQUFEaEFKaVlBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFCTzFKUkVGVVdBblwiICtcclxuICAgICAgICAgICAgXCJObUVGc0ZGVVl4NzgzTzdQYUFycGdxRkt0R0tNaEdPSkpFbTFGUThJYXBVUWtwajJZZVBObWpBZWo4ZURSZzlGNElNYWJOeE1QYlJReGdNWmlpR0tyQ1J5TVVRbHFURUFwQ0FxcmhoWjNadWY1XCIgK1xyXG4gICAgICAgICAgICBcIi9kN3MyOTNTbHAzRmx1eVg3T3piMmZmKy8vOTg3NzN2ZmQ4WTZkQnUzR2RYQnhlcncxWk1XWXpjYnEzdE44YjBBNlB0YVcxUGk1V1RSdXhFdXFLNC82OGQ1a0luRkNadjU5Sllza3RzK3B3MXNcIiArXHJcbiAgICAgICAgICAgIFwia1dadzF6ampFbU1sY05pZ3JjcW8rR2VQR1BhQ2xyOWZqeGthL1oxZmZwQkFLT0NzUSt0TldiN3JZRnN1TUhJdWg0anQxeWZVWjI1SkhKNjFzcnh2NjBjT0pYS0YrZXNqV3Y2Q0dycXVTbFRNQ1wiICtcclxuICAgICAgICAgICAgXCI5ZGVES2F6SG92ZkYxVTBNaVlMVXhJL0tZS2VaNmhmVDNHdm54UHdZeXNEMlJWUHYvSVA0bkkrSWxVWHZ1aFpzL09Ob1R0TGt2MHd2aW9xUzBrYVVGQnBUMjJaT040VEtlbVhGU1B2TGl4WUo3XCIgK1xyXG4gICAgICAgICAgICBcImRFRWh2SVlQNHRtSmx2M3JncTNOV3B0VWplQWJEVS8zcXNRZldHaGxXRDk1Ynl1Qm5sUHJ0NDZtOGNheG1xM2pNbUFrVFJhT1ZYYWFTald4ZTV3bHlZcXJWS2UyeUVhKzhOeFNhKzlaazNmYitcIiArXHJcbiAgICAgICAgICAgIFwiWnVYVjd4TDVTYWNrajkydFUvcktwbEIyM3BhTlAzcmV5bE9UaWZmV01WTXNEbDR1YW80Z3B1bFRpVC9HTTV0S2dZeHRDZldKUlU1Y0ZIbm02MFNPL0pubTBUR3Z6K2FiQW5ubi9sRFdyeEQxcVwiICtcclxuICAgICAgICAgICAgXCJNakk0VVMrcnlpV2V1b1JpUjVybmI2Z2RUUnJCakY0eG91WjFHblplakMrYWpIZzh5QmdnTVVEanV1RHdnR1g0MndSMGZBUXV5bE4waTlaTXdlMlp0TUV3Qk9mSnhLbithYW9CWGZCWmhRWStmXCIgK1xyXG4gICAgICAgICAgICBcIkRoVUlaMGpURjkydzhsYmswRllmQ2czMzBORDdHMVFXRUJzMmFZcHFlbmxrNE0yRHdZbUdEREFSZjNQVGR0SjRpZ1I1ekJqZXdtakRWei90K2w4WXdEckYvQUJCdURDMDY0WGVEVmV4bTdSbUFcIiArXHJcbiAgICAgICAgICAgIFwiNkVHZlkydXltcTEzQTRMUXpzT0dBQzA3WHY2N0JjRGJKVEh3MkNxVHd5ODdJRVBRMmZ4TG4zdHJ0eUJmN241Qnc1TkhJQmM4Nzk4WTJUcVVtdlZGZllHYmlIYnJhUTQ0RHhCRDA4c2FaeGNqeVwiICtcclxuICAgICAgICAgICAgXCIzSWNETGpqaFJnTmFtTEl5QUp4TkdCRzRFK3ZUNkZ3WkxicFBZOHZtQlBCY25sdUhsVkV4d0hnT1Nvemo0RnFaNS9MY3lqc1E2Z3AzdVF5bk5zYlpsTWZ1MEtpTHJibXU2UmNpTVZaVGlGOW5zXCIgK1xyXG4gICAgICAgICAgICBcInZhVnJwN0xjNk1sSkxuU3hwd1U0a29nL3I5dmhvdSsyZmoyOS82NFpPV3VqK0xHL2NVYXJZY3lmZEJDSXVGY2tzOHZUZWpacERtaUo4eTg1Tzl4dXVjeDc5c21rbGltN0xRT1h2VzdwaEFyVjJcIiArXHJcbiAgICAgICAgICAgIFwiWXB4TS90SDA3V2ZaQjFZbEgvK0hqbXJYNjkxd0xlVnRQTjljUU9iZ3d0Z2N1QjlRZVpIa1krYzYzTWMzbHV0QVFrNUFnZzdjUklyanF4cWthSm94cDUrWFRpblZZdXo0MldRQ3VIZy94SkRveVwiICtcclxuICAgICAgICAgICAgXCJSNlhWaWxhckl0czhTOStsa0hIMDlsK2VtVWdsc2I3UlBsM2RDUWs0T1ROcEpXRjl1Z3dNdU9PRkdBMlZUUU4xRXFVSjFRRUtPa1hZdXQza09PT0ZHQTFxeStkRzZDUUZVQjJ4WmNtRFN6dVV5XCIgK1xyXG4gICAgICAgICAgICBcInNPR0FDMDdIVTlmZ1dDbmlkSVZQVWFwUUhXRGt3SzFSMk4xY2dndVlZR053d1FtM0x5UWJicUNJb3hPbEN1a2x4OEM3ZzZHUWRpNlZnUVVtMkhEQUJiYm5wdDBRUkU2clNuZFROMUdxVUIyUStcIiArXHJcbiAgICAgICAgICAgIFwiNUlETDRXbndQRDVOTmh3d0FXbno2Zm5DT0lIRlNXbENXNmtWUEdpRG0yTC90ZWFZczJBd1FQNk1zaFZzc3JsT0NHdjI3ejU2S3BDMGF2c3FsTGFpK3FxbHcxZUZOOWQ4enFtVlJUdHJubGhkYlwiICtcclxuICAgICAgICAgICAgXCJrd3lpWlhxV1RGd1FCcHAyN2R1YS8wTklQVmNST2NrNTIrMHZzUE9PUGxMblZZMGxZQUFBQUFTVVZPUks1Q1lJST1cIjtcclxuICAgICAgICBpbWcuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZShpbWcsIDE4LCAxOCk7XHJcbiAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nLmVtaXQoZSk7XHJcbiAgICB9XHJcbiAgICBkcmFnRW5kKGUpe1xyXG4gICAgICAgIHZhciBpY29uV2lkdGggPSAzNjtcclxuICAgICAgICB2YXIgYXNpZGVXaWR0aCA9IDI0MDtcclxuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NjggJiYgZS54ID4gd2luZG93LmlubmVyV2lkdGggLSBhc2lkZVdpZHRoIC0gaWNvbldpZHRoKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVuZERyYWdnaW5nLmVtaXQoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNEZWJ1Zygpe1xyXG4gICAgICAgIHJldHVybiAobG9jYXRpb24uc2VhcmNoLmluZGV4T2YoJz9kZWJ1ZycpPj0wKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXJcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBDb250cm9sR3JvdXAsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xyXG5pbXBvcnQge2VtYWlsVmFsaWRhdG9yLCBtYXRjaGluZ1Bhc3N3b3JkcywgZW1haWxSZWdleHB9IGZyb20gJy4uL3NlcnZpY2VzL3ZhbGlkYXRvcnMuc2VydmljZSc7XHJcbmltcG9ydCB7V2ViU3RvcmFnZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy93ZWJzdG9yYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlLCBERUJVR19MRVZFTH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2lnbi1pbi1mb3JtJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0td3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleGJveCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPkNvbWUgaW4sIHN0b3J5dGVsbGVyPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXY+PGEgY2xhc3M9XCJjbG9zZVwiIChjbGljayk9XCJjbG9zZSgkZXZlbnQpXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlg8L2k+PC9hPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cImZvcm1cIiAobmdTdWJtaXQpPVwib25TaWduSW4oJGV2ZW50KVwiIG5vdmFsaWRhdGU+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIuZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWydlbWFpbCddXCJcclxuICAgICAgICAgICAgICAgICAgICAjZW1haWw9XCJuZ0Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgICpuZ0lmPVwiKGVtYWlsLmRpcnR5IHx8IHN1Ym1pdHRlZCkgJiYgIWVtYWlsLnZhbGlkXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVtYWlsIGlzIGludmFsaWRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIllvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlci5wYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cImZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgICNwYXNzd29yZD1cIm5nRm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAgKm5nSWY9XCIocGFzc3dvcmQuZGlydHkgfHwgc3VibWl0dGVkKSAmJiAhcGFzc3dvcmQudmFsaWRcIiBjbGFzcz1cInBhbmVsIHBhbmVsLWVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhlIHBhc3N3b3JkIHNob3VsZCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZ1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24gcHJpbWFyeSBibG9jay1idXR0b25cIj5TaWduIGluPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN3YXAtZm9ybVwiPjxhIChjbGljayk9XCJzd2FwVG9TaWduVXAoKVwiPkkgd2FudCB0byBjcmVhdGUgYSBuZXcgYWNjb3VudDwvYT48L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlLCBXZWJTdG9yYWdlU2VydmljZV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25JbkNvbXBvbmVudCB7XHJcbiAgICB1c2VyOlVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgZm9ybTpDb250cm9sR3JvdXA7XHJcbiAgICBzdWJtaXR0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBAT3V0cHV0KCkgY2xvc2VNb2RhbDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBzd2FwV2luZG93OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIG5vdGlmeTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBhdXRoU3RhdHVzOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbG9nZ2VyOkxvZ2dlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGJ1aWxkZXI6Rm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSB3ZWJTdG9yYWdlU2VydmljZTpXZWJTdG9yYWdlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvblxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZm9ybSA9IGJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybihlbWFpbFJlZ2V4cCldKV0sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmNsb3NlTW9kYWwuZW1pdChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dhcFRvU2lnblVwKCkge1xyXG4gICAgICAgIHRoaXMuc3dhcFdpbmRvdy5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNpZ25JbihldmVudCkge1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5mb3JtLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9naW4odGhpcy51c2VyKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYlN0b3JhZ2VTZXJ2aWNlLnB1dCh0aGlzLmNvbmZpZ3VyYXRpb24udG9rZW4ubmFtZSwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuV0FSTiwgJ29uU2lnbkluJywgJ1NlcnZlciBlcnJvcicsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ29uU2lnbkluJywgJ2xvZ2dlZCBpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFN0YXR1cy5lbWl0KCdMb2dpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoJycpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXJcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBDb250cm9sR3JvdXAsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xyXG5pbXBvcnQge2VtYWlsVmFsaWRhdG9yLCBtYXRjaGluZ1Bhc3N3b3JkcywgZW1haWxSZWdleHB9IGZyb20gJy4uL3NlcnZpY2VzL3ZhbGlkYXRvcnMuc2VydmljZSc7XHJcbmltcG9ydCB7V2ViU3RvcmFnZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy93ZWJzdG9yYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlLCBERUJVR19MRVZFTH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2lnbi11cC1mb3JtJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0td3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleGJveCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPkJlY29tZSBhIHN0b3J5dGVsbGVyPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXY+PGEgY2xhc3M9XCJjbG9zZVwiIChjbGljayk9XCJjbG9zZSgkZXZlbnQpXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlg8L2k+PC9hPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cImZvcm1cIiAobmdTdWJtaXQpPVwib25TaWduVXAoJGV2ZW50KVwiIG5vdmFsaWRhdGU+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlci5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWyduYW1lJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgICNuYW1lPVwibmdGb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAgKm5nSWY9XCIobmFtZS5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmICFuYW1lLnZhbGlkXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFlvdXIgbmFtZSBpcyByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIuZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWydlbWFpbCddXCJcclxuICAgICAgICAgICAgICAgICAgICAjZW1haWw9XCJuZ0Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgICpuZ0lmPVwiKGVtYWlsLmRpcnR5IHx8IHN1Ym1pdHRlZCkgJiYgIWVtYWlsLnZhbGlkXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVtYWlsIGlzIGludmFsaWRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIllvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlci5wYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cImZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgICNwYXNzd29yZD1cIm5nRm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAgKm5nSWY9XCIocGFzc3dvcmQuZGlydHkgfHwgc3VibWl0dGVkKSAmJiAhcGFzc3dvcmQudmFsaWRcIiBjbGFzcz1cInBhbmVsIHBhbmVsLWVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhlIHBhc3N3b3JkIHNob3VsZCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZ1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLmNvbmZpcm1QYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cImZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddXCJcclxuICAgICAgICAgICAgICAgICAgICAjY29uZmlybVBhc3N3b3JkPVwibmdGb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29uZmlybS1wYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIoY29uZmlybVBhc3N3b3JkLmRpcnR5IHx8IHN1Ym1pdHRlZCkgJiYgZm9ybS5oYXNFcnJvcignbWlzbWF0Y2hlZFBhc3N3b3JkcycpXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZSBwYXNzd29yZHMgZG9uJ3QgbWF0Y2hcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIHByaW1hcnkgYmxvY2stYnV0dG9uXCI+U2lnbiB1cDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2FwLWZvcm1cIj48YSAoY2xpY2spPVwic3dhcFRvU2lnbkluKClcIj5JIGFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PC9hPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2UsIFdlYlN0b3JhZ2VTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2lnblVwQ29tcG9uZW50IHtcclxuICAgIHVzZXI6VXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICBmb3JtOkNvbnRyb2xHcm91cDtcclxuICAgIHN1Ym1pdHRlZCA9IGZhbHNlO1xyXG5cclxuICAgIEBPdXRwdXQoKSBjbG9zZU1vZGFsOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIHN3YXBXaW5kb3c6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgbm90aWZ5OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIGF1dGhTdGF0dXM6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBsb2dnZXI6TG9nZ2VyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgYnVpbGRlcjpGb3JtQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIHdlYlN0b3JhZ2VTZXJ2aWNlOldlYlN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjpDb25maWd1cmF0aW9uXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5mb3JtID0gYnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgIG5hbWU6WycnXSxcclxuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oZW1haWxSZWdleHApXSldLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSldLFxyXG4gICAgICAgICAgICBjb25maXJtUGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgfSwge3ZhbGlkYXRvcjogbWF0Y2hpbmdQYXNzd29yZHMoJ3Bhc3N3b3JkJywgJ2NvbmZpcm1QYXNzd29yZCcpfSlcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbC5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBzd2FwVG9TaWduSW4oKSB7XHJcbiAgICAgICAgdGhpcy5zd2FwV2luZG93LmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2lnblVwKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuZm9ybS52YWx1ZSkpO1xyXG4gICAgICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2ViU3RvcmFnZVNlcnZpY2UucHV0KHRoaXMuY29uZmlndXJhdGlvbi50b2tlbi5uYW1lLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5XQVJOLCAnb25TaWduVXAnLCdTZXJ2ZXIgZXJyb3InLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlIGVtYWlsIGlzIGFscmVhZHkgdGFrZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnb25TaWduVXAnLCAncmVnaXN0ZXJlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFN0YXR1cy5lbWl0KCdMb2dpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoJycpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHtTaWduSW5Db21wb25lbnR9IGZyb20gXCIuL3NpZ25pbi1mb3JtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1NpZ25VcENvbXBvbmVudH0gZnJvbSBcIi4vc2lnbnVwLWZvcm0uY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXV0aC1mb3JtJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPHNpZ24taW4tZm9ybSBcclxuICAgICAgICAgICAgKm5nSWY9XCJsb2dpblwiIFxyXG4gICAgICAgICAgICAoY2xvc2VNb2RhbCk9XCJoaWRlQWNjZXNzRm9ybSgpXCJcclxuICAgICAgICAgICAgKHN3YXBXaW5kb3cpPVwibG9naW49IWxvZ2luXCJcclxuICAgICAgICAgICAgKGF1dGhTdGF0dXMpPVwiYXV0aFN0YXR1c0NoYW5nZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChub3RpZnkpPVwibm90aWZ5TWVzc2FnZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvc2lnbi1pbi1mb3JtPlxyXG4gICAgICAgIDxzaWduLXVwLWZvcm0gXHJcbiAgICAgICAgICAgICpuZ0lmPVwiIWxvZ2luXCIgXHJcbiAgICAgICAgICAgIChjbG9zZU1vZGFsKT1cImhpZGVBY2Nlc3NGb3JtKClcIlxyXG4gICAgICAgICAgICAoc3dhcFdpbmRvdyk9XCJsb2dpbj0hbG9naW5cIlxyXG4gICAgICAgICAgICAoYXV0aFN0YXR1cyk9XCJhdXRoU3RhdHVzQ2hhbmdlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgKG5vdGlmeSk9XCJub3RpZnlNZXNzYWdlKCRldmVudClcIlxyXG4gICAgICAgICAgICA+PC9zaWduLXVwLWZvcm0+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOiBbXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtTaWduSW5Db21wb25lbnQsIFNpZ25VcENvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoRm9ybUNvbXBvbmVudCB7XHJcbiAgICBAT3V0cHV0KCkgY2xvc2VNb2RhbDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBub3RpZnk6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgYXV0aFN0YXR1czpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgcHVibGljIGxvZ2luPWZhbHNlO1xyXG5cclxuICAgIGhpZGVBY2Nlc3NGb3JtKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBub3RpZnlNZXNzYWdlKGV2ZW50KXtcclxuICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBhdXRoU3RhdHVzQ2hhbmdlZChldmVudCl7XHJcbiAgICAgICAgdGhpcy5hdXRoU3RhdHVzLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtOZ0NsYXNzfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvc3RvcnlibG9ja3Muc2VydmljZVwiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2t9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9ja1wiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tDb21wb25lbnR9IGZyb20gXCIuL3N0b3J5YmxvY2suY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VGltZWxpbmVDb21wb25lbnR9IGZyb20gXCIuL3RpbWVsaW5lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0FkZEJ1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vYWRkLWJ1dHRvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtOb3RpZmljYXRpb25Db21wb25lbnR9IGZyb20gXCIuL25vdGlmaWNhdGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTaWRlYmFyQ29tcG9uZW50fSBmcm9tIFwiLi9zaWRlYmFyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tUeXBlfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2stdHlwZVwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7V2ViU3RvcmFnZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy93ZWJzdG9yYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBdXRoRm9ybUNvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC1mb3JtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2UsIERFQlVHX0xFVkVMfSBmcm9tIFwiLi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2VcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWNvbnRlbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPHRpbWVsaW5lIGNsYXNzPVwidGltZWxpbmUtYmxvY2tcIj48L3RpbWVsaW5lPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RvcnktYmxvY2tzXCI+XHJcbiAgICAgICAgICAgICAgICA8c3RvcnlibG9jayAqbmdGb3I9XCIjc3RvcnlCbG9jayBvZiBzdG9yeUJsb2NrczsgI2kgPSBpbmRleFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIFtpbmRleF09XCJpXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0b3J5QmxvY2tJbmZvXT1cInN0b3J5QmxvY2tcIiBcclxuICAgICAgICAgICAgICAgICAgICBbem9vbUxldmVsXT1cInpvb21MZXZlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3VzZXJJZF09XCJ1c2VySWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtleHBvc2VkSW5kZXhdPVwiZXhwb3NlZEluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ZXhwb3NlZDogZXhwb3NlZEluZGV4ID09IGl9XCJcclxuICAgICAgICAgICAgICAgICAgICAocmVtb3ZlU3RvcnlCbG9ja0V2ZW50KT1cInJlbW92ZVN0b3J5QmxvY2soJGV2ZW50KVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIChleHBvc2VFdmVudCk9XCJzZXRFeHBvc2VkKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIChub3RpZnkpPVwibm90aWZ5KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RvcnktYmxvY2sge3sgc3RvcnlCbG9jay50eXBlwqB9fVwiPjwvc3RvcnlibG9jaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWRkU3RvcnlCbG9jaygkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cIm9uTW91c2VFbnRlcigkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cIm9uTW91c2VMZWF2ZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIChtb3VzZW1vdmUpPVwib25Nb3VzZU1vdmUoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgPGFkZC1idXR0b24gKm5nSWY9XCJhZGRCdXR0b24udmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW29mZnNldFldPVwiYWRkQnV0dG9uLnRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZFN0b3J5QmxvY2soJGV2ZW50KVwiPjwvYWRkLWJ1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250cm9sc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInpvb20tY29udHJvbHNcIj4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPVwiWm9vbSBpblwiIChjbGljayk9XCJ6b29tSW4oKVwiPis8L2E+ICBcclxuICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT1cIlpvb20gb3V0XCIgKGNsaWNrKT1cInpvb21PdXQoKVwiPiZuZGFzaDs8L2E+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8YXNpZGUgW25nQ2xhc3NdPVwie3Zpc2libGU6IG1lbnVWaXNpYmxlfVwiPlxyXG4gICAgICAgICAgICA8c2lkZWJhclxyXG4gICAgICAgICAgICAoc3RhcnREcmFnZ2luZyk9XCJ0b2dnbGVNZW51KGZhbHNlKVwiXHJcbiAgICAgICAgICAgIChlbmREcmFnZ2luZyk9XCJhZGRTdG9yeUJsb2NrKCRldmVudClcIlxyXG4gICAgICAgICAgICBbc3RvcnlCbG9ja109XCJleHBvc2VkU3RvcnlCbG9ja1wiIFtzdG9yeUJsb2Nrc0xlbmd0aF09XCJzdG9yeUJsb2Nrcy5sZW5ndGhcIj48L3NpZGViYXI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwidXNlci1hc2lkZVwiIChjbGljayk9XCJkb3dubG9hZFBkZigpXCI+RG93bmxvYWQgUERGPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cInVzZXItYXNpZGVcIiAqbmdJZj1cIiFpc0xvZ2dlZEluKClcIiAoY2xpY2spPVwic2hvd0FjY2Vzc0Zvcm0oKVwiPkxvZ2luL1NpZ251cDwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJ1c2VyLWFzaWRlXCIgKm5nSWY9XCJpc0xvZ2dlZEluKClcIiAoY2xpY2spPVwibG9nT3V0KClcIj5Mb2dvdXQ8L2E+XHJcbiAgICAgICAgICAgIDxhIGlkPVwiY2xvc2UtbWVudVwiIChjbGljayk9XCJ0b2dnbGVNZW51KGZhbHNlKVwiPjwvYT5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgIDxoZWFkZXI+PGEgaWQ9XCJidXJnZXJcIiAoY2xpY2spPVwidG9nZ2xlTWVudSh0cnVlKVwiPjxpIGNsYXNzPVwiZmEgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2E+PC9oZWFkZXI+XHJcbiAgICAgICAgPGF1dGgtZm9ybSBcclxuICAgICAgICAgICAgKm5nSWY9XCJhY2Nlc3NGb3JtVmlzaWJsZVwiIFxyXG4gICAgICAgICAgICAoY2xvc2VNb2RhbCk9XCJoaWRlQWNjZXNzRm9ybSgpXCJcclxuICAgICAgICAgICAgKG5vdGlmeSk9XCJub3RpZnkoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChhdXRoU3RhdHVzKT1cImF1dGhTdGF0dXNDaGFuZ2VkKCRldmVudClcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgPC9hdXRoLWZvcm0+XHJcbiAgICAgICAgPG5vdGlmaWNhdGlvbiBbbmdDbGFzc109XCJ7ZXJyb3I6IG5vdGlmaWNhdGlvbi50eXBlID09ICdlcnJvcicsIHN1Y2Nlc3M6IG5vdGlmaWNhdGlvbi50eXBlID09ICdzdWNjZXNzJ31cIj48L25vdGlmaWNhdGlvbj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtTdG9yeUJsb2NrU2VydmljZSwgQ29uZmlndXJhdGlvbiwgQXV0aFNlcnZpY2UsIFdlYlN0b3JhZ2VTZXJ2aWNlLCBMb2dnZXJTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtTdG9yeUJsb2NrQ29tcG9uZW50LCBUaW1lbGluZUNvbXBvbmVudCwgQWRkQnV0dG9uQ29tcG9uZW50LCBOb3RpZmljYXRpb25Db21wb25lbnQsIFNpZGViYXJDb21wb25lbnQsIEF1dGhGb3JtQ29tcG9uZW50LCBOZ0NsYXNzXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBAVmlld0NoaWxkKE5vdGlmaWNhdGlvbkNvbXBvbmVudCkgbm90aWZpY2F0aW9uQ29tcG9uZW50Ok5vdGlmaWNhdGlvbkNvbXBvbmVudDtcclxuICAgIHB1YmxpYyBzdG9yeUJsb2NrczpTdG9yeUJsb2NrW107XHJcbiAgICBwdWJsaWMgc3RvcnlCbG9ja1R5cGVzOlN0b3J5QmxvY2tUeXBlW107XHJcbiAgICBwdWJsaWMgc3RvcnlCbG9ja0RlZmF1bHRUeXBlczpTdG9yeUJsb2NrVHlwZVtdO1xyXG4gICAgcHJpdmF0ZSB1c2VySWQ7XHJcbiAgICBwdWJsaWMgem9vbUxldmVsO1xyXG4gICAgcHVibGljIGV4cG9zZWRJbmRleDtcclxuICAgIHB1YmxpYyBleHBvc2VkU3RvcnlCbG9jaztcclxuICAgIHB1YmxpYyBhZGRCdXR0b247XHJcbiAgICBwdWJsaWMgdG9rZW46c3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgbWVudVZpc2libGU7XHJcbiAgICBwdWJsaWMgYWNjZXNzRm9ybVZpc2libGU7XHJcbiAgICBwcml2YXRlIG1heEluZGV4ID0gMDtcclxuICAgIHByaXZhdGUgbm90aWZpY2F0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbG9nZ2VyOkxvZ2dlclNlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgc3RvcnlCbG9ja1NlcnZpY2U6U3RvcnlCbG9ja1NlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjpDb25maWd1cmF0aW9uLFxyXG4gICAgICAgIHByaXZhdGUgd2ViU3RvcmFnZVNlcnZpY2U6V2ViU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tzID0gW107XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSB0aGlzLmF1dGhVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5nZXRTdG9yeUJsb2NrVHlwZXMoKTtcclxuICAgICAgICB0aGlzLmdldFN0b3J5QmxvY2tzKHRoaXMudXNlcklkKTtcclxuICAgICAgICB0aGlzLnpvb21MZXZlbCA9IDQ7XHJcbiAgICAgICAgdGhpcy5leHBvc2VkSW5kZXggPSAtMTtcclxuICAgICAgICB0aGlzLmV4cG9zZWRTdG9yeUJsb2NrID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFkZEJ1dHRvbiA9IHtcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvcDogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tZW51VmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWNjZXNzRm9ybVZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbiA9IHtcclxuICAgICAgICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBhdXRoVXNlcigpe1xyXG4gICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRJZEZyb21Ub2tlbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBhbm9ueW1vdXNUb2tlbiA9IHRoaXMud2ViU3RvcmFnZVNlcnZpY2UuZ2V0KCdhbm9ueW1vdXNfdG9rZW4nKTtcclxuICAgICAgICAgICAgaWYgKCFhbm9ueW1vdXNUb2tlbikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFub255bW91c1Rva2VuID0gdGhpcy5hdXRoU2VydmljZS5nZW5lcmF0ZUFub255bW91c1Rva2VuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYlN0b3JhZ2VTZXJ2aWNlLnB1dCgnYW5vbnltb3VzX3Rva2VuJywgYW5vbnltb3VzVG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmdldElkRnJvbUFub255bW91c1Rva2VuKGFub255bW91c1Rva2VuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VG9rZW4odmFsdWU6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLndlYlN0b3JhZ2VTZXJ2aWNlLnB1dCgndG9rZW4nLHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2tlbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLndlYlN0b3JhZ2VTZXJ2aWNlLmdldCgndG9rZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBhdXRoU3RhdHVzQ2hhbmdlZCgpe1xyXG4gICAgICAgIHRoaXMucmVmcmVzaEJsb2NrTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hCbG9ja0xpc3QoKXtcclxuICAgICAgICB0aGlzLnVzZXJJZCA9IHRoaXMuYXV0aFVzZXIoKTtcclxuICAgICAgICB0aGlzLmdldFN0b3J5QmxvY2tzKHRoaXMudXNlcklkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdG9yeUJsb2NrVHlwZXMoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrVHlwZXMgPSB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdldFN0b3J5QmxvY2tUeXBlcygpO1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja0RlZmF1bHRUeXBlcyA9IHRoaXMuc3RvcnlCbG9ja1NlcnZpY2UuZ2V0U3RvcnlCbG9ja0RlZmF1bHRUeXBlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0b3J5QmxvY2tzKGlkKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5nZXRTdG9yeUJsb2NrcyhpZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcnlCbG9ja3MgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXhJbmRleCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0b3J5QmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RvcnlCbG9ja3NbaV0udHlwZSA9PT0gJ2NoYXB0ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF4SW5kZXggPSBNYXRoLm1heCh0aGlzLm1heEluZGV4LCB0aGlzLnN0b3J5QmxvY2tzW2ldLmJsb2NrSWQgfHwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuc3RvcnlCbG9ja3MgfHwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGg9PTApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnZ2V0U3RvcnlCbG9ja3MnLCAnTm8gYmxvY2tzIHJlY2VpdmVkIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcnlCbG9ja1NlcnZpY2UuZ2VuZXJhdGVUZXN0RGF0YSh0aGlzLnVzZXJJZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlRGVmYXVsdEJsb2NrcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tzID0gc2F2ZURlZmF1bHRCbG9ja3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2FsY3VsYXRlU3RvcnlCbG9ja051bWJlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdnZXRTdG9yeUJsb2NrcycsICdMb2FkZWQgJyArIHRoaXMuc3RvcnlCbG9ja3MubGVuZ3RoICsgJyBibG9ja3MnLCB0aGlzLnN0b3J5QmxvY2tzKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjYWxjdWxhdGVTdG9yeUJsb2NrTnVtYmVycygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdnZXRTdG9yeUJsb2NrcycsICdMb2FkZWQgJyArIHRoaXMuc3RvcnlCbG9ja3MubGVuZ3RoICsgJyBibG9ja3MnLCB0aGlzLnN0b3J5QmxvY2tzKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU3RvcnlCbG9jayhpbmRleCkge1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLnJlY2FsY3VsYXRlU3RvcnlCbG9ja051bWJlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93QWNjZXNzRm9ybSgpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZU1lbnUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnc2hvd0FjY2Vzc0Zvcm0nLCB0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKSk7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NGb3JtVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVBY2Nlc3NGb3JtKCkge1xyXG4gICAgICAgIHRoaXMuYWNjZXNzRm9ybVZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjYWxjdWxhdGVTdG9yeUJsb2NrTnVtYmVycygpIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ3JlY2FsY3VsYXRlU3RvcnlCbG9ja051bWJlcnMnLCAnU29ydGluZyBibG9ja3M6IGJlZm9yZScsdGhpcy5zdG9yeUJsb2Nrcyk7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRUeXBlcyA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdG9yeUJsb2NrVHlwZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY3VycmVudFR5cGVzW3RoaXMuc3RvcnlCbG9ja1R5cGVzW2ldLmlkXSA9IHRoaXMuc3RvcnlCbG9ja1R5cGVzW2ldO1xyXG4gICAgICAgICAgICBjdXJyZW50VHlwZXNbdGhpcy5zdG9yeUJsb2NrVHlwZXNbaV0uaWRdLmluZGV4ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFR5cGUgPSB0aGlzLnN0b3J5QmxvY2tzW2ldLnR5cGUgfHwgdGhpcy5zdG9yeUJsb2NrRGVmYXVsdFR5cGVzWzBdLmlkO1xyXG4gICAgICAgICAgICBjdXJyZW50VHlwZXNbY3VycmVudFR5cGVdID0gY3VycmVudFR5cGVzW2N1cnJlbnRUeXBlXSB8fCB0aGlzLnN0b3J5QmxvY2tEZWZhdWx0VHlwZXNbMF07XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcnlCbG9ja3NbaV0uYmxvY2tOdW1iZXIgPSBjdXJyZW50VHlwZXNbY3VycmVudFR5cGVdLmluZGV4IHx8IDA7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50VHlwZXNbY3VycmVudFR5cGVdLmluZGV4Kys7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5zdG9yeUJsb2NrVHlwZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0b3J5QmxvY2tUeXBlc1tqXS5sZXZlbCA+IGN1cnJlbnRUeXBlc1tjdXJyZW50VHlwZV0ubGV2ZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHlwZXNbdGhpcy5zdG9yeUJsb2NrVHlwZXNbal0uaWRdLmluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ3JlY2FsY3VsYXRlU3RvcnlCbG9ja051bWJlcnMnLCAnU29ydGluZyBibG9ja3M6IGFmdGVyJyx0aGlzLnN0b3J5QmxvY2tzKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dPdXQoKXtcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaEJsb2NrTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTG9nZ2VkSW4oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgem9vbUluKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnpvb21MZXZlbCA8IDEwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbUxldmVsKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6J21lc3NhZ2UnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTonTWF4IHpvb20gcmVhY2hlZCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHpvb21PdXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuem9vbUxldmVsID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnpvb21MZXZlbC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOidtZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6J01pbmltdW0gem9vbSByZWFjaGVkJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZUVudGVyKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5hZGRCdXR0b24gPSB7XHJcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgIHRvcDogZXZlbnQueVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZUxlYXZlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5hZGRCdXR0b24gPSB7XHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3A6IDBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VNb3ZlKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkQnV0dG9uLnZpc2libGUpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRCdXR0b24udG9wID0gZXZlbnQueTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3RvcnlCbG9jayhldmVudCkge1xyXG4gICAgICAgIHRoaXMuYWRkQnV0dG9uID0ge1xyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgdG9wOiAwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHpvb21Db252ZXJzaW9uRmFjdG9yID0gdGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RlcCArIE1hdGguZXhwKHRoaXMuem9vbUxldmVsICogdGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RyZW5ndGgpO1xyXG5cclxuICAgICAgICB2YXIgcG9zaXRpb25BdFpvb20gPSAoKGV2ZW50LnBhZ2VZIC0gdGhpcy5jb25maWd1cmF0aW9uLnpvb20ub2Zmc2V0KSAvIHpvb21Db252ZXJzaW9uRmFjdG9yKTtcclxuXHJcbiAgICAgICAgdmFyIG5ld1N0b3J5QmxvY2s6U3RvcnlCbG9jayA9IDxTdG9yeUJsb2NrPiB7XHJcbiAgICAgICAgICAgIGJsb2NrSWQ6IHRoaXMubWF4SW5kZXggKyAxLFxyXG4gICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICAgICAgdGltZVBvc2l0aW9uOiBwb3NpdGlvbkF0Wm9vbSxcclxuICAgICAgICAgICAgaW1wb3J0YW5jZTogMyxcclxuICAgICAgICAgICAgdHlwZTogJ2NoYXB0ZXInXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXhJbmRleCsrO1xyXG5cclxuICAgICAgICB2YXIgdG1wQXJyYXlQb3MgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RvcnlCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcnlCbG9ja3NbaV0udGltZVBvc2l0aW9uID4gcG9zaXRpb25BdFpvb20pIHtcclxuICAgICAgICAgICAgICAgIHRtcEFycmF5UG9zID0gaTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tzLnNwbGljZSh0bXBBcnJheVBvcywgMCwgbmV3U3RvcnlCbG9jayk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCdhZGRTdG9yeUJsb2NrJywgJ0FkZGluZyBibG9jayBpbmRleCAnICsgdG1wQXJyYXlQb3MpO1xyXG4gICAgICAgIHRoaXMuc2V0RXhwb3NlZCh0bXBBcnJheVBvcyk7XHJcblxyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEV4cG9zZWQoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ3NldEV4cG9zZWQnLCAnU2V0dGluZyBibG9jayAnK2luZGV4KycgZXhwb3NlZCcpO1xyXG4gICAgICAgIHRoaXMucmVjYWxjdWxhdGVTdG9yeUJsb2NrTnVtYmVycygpO1xyXG4gICAgICAgIHRoaXMuZXhwb3NlZEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5leHBvc2VkU3RvcnlCbG9jayA9IGluZGV4ID49IDAgPyB0aGlzLnN0b3J5QmxvY2tzW2luZGV4XSA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5jaGFuZ2VFeHBvc2VkSW5kZXgoaW5kZXgpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCduby1zY3JvbGwnKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLnNhdmVTdG9yeUJsb2NrKHRoaXMudXNlcklkLCB0aGlzLnN0b3J5QmxvY2tzW2ldKS5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5KG5vdGlmaWNhdGlvbil7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24gPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IG5vdGlmaWNhdGlvbi50eXBlIHx8IG51bGwsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG5vdGlmaWNhdGlvbi5tZXNzYWdlIHx8ICcnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25Db21wb25lbnQuc2hvdyhub3RpZmljYXRpb24ubWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRQZGYoKXtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmRvd25sb2FkUGRmKHRoaXMuc3RvcnlCbG9ja3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZU1lbnUodmlzaWJpbGl0eSl7XHJcbiAgICAgICAgdGhpcy5tZW51VmlzaWJsZSA9IHZpc2liaWxpdHk7XHJcbiAgICAgICAgaWYodmlzaWJpbGl0eSl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCduby1zY3JvbGwnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XHJcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2FwcC1jb250ZW50LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9ICAgIGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7RXhjZXB0aW9uSGFuZGxlciwgcHJvdmlkZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5cclxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW0hUVFBfUFJPVklERVJTLCBDb25maWd1cmF0aW9uLCBwcm92aWRlKEV4Y2VwdGlvbkhhbmRsZXIsICB7dXNlQ2xhc3M6IExvZ2dlclNlcnZpY2V9KV0pO1xyXG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgT25DaGFuZ2VzLCBFbGVtZW50UmVmLCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7QW5pbWF0aW9uQnVpbGRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2FuaW1hdGUvYW5pbWF0aW9uX2J1aWxkZXInO1xyXG5pbXBvcnQge0Nzc0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9hbmltYXRlL2Nzc19hbmltYXRpb25fYnVpbGRlcic7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2NvbGxhcHNlXSdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xsYXBzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgICBASW5wdXQoKSBjb2xsYXBzZTogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX2FuaW1hdGlvbjogQ3NzQW5pbWF0aW9uQnVpbGRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhbmltYXRpb25CdWlsZGVyOkFuaW1hdGlvbkJ1aWxkZXIsIHByaXZhdGUgX2VsOkVsZW1lbnRSZWYpIHtcclxuICAgICAgICB0aGlzLl9hbmltYXRpb24gPSBhbmltYXRpb25CdWlsZGVyLmNzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcclxuICAgICAgICAvLyBpZiB0aGUgY2hhbmdlIGhhcHBlbmVkIGluIHRoZSBjb2xsYXBzZSBwcm9wZXJ0eVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLmNvbGxhcHNlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbGxhcHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IF9iYXNlU2VxdWVuY2UoKTogQ3NzQW5pbWF0aW9uQnVpbGRlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuaW1hdGlvblxyXG4gICAgICAgICAgICAuc2V0RHVyYXRpb24oMjUwKSAvLyB0aGUgdHJhbnNpdGlvbiBkdXJhdGlvblxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlJykgLy8gcmVtb3ZlIGEgY2xhc3MgYmVmb3JlIHRoZSB0cmFuc2l0aW9uIHN0YXJ0XHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaW4nKVxyXG4gICAgICAgICAgICAuYWRkQW5pbWF0aW9uQ2xhc3MoJ2NvbGxhcHNpbmcnKTsgLy8gYWRkIGEgdGVtcCBjbGFzcyBmb3IgdGhlIHRyYW5zaXRpb24gcGVyaW9kXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9iYXNlU2VxdWVuY2VcclxuICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoe1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCArICdweCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnNldFRvU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzAnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBhIGlzIHRoZSBBbmltYXRpb24gaW5zdGFuY2UgcnVubmluZyB0aGlzIGFuaW1hdGlvbi5cclxuICAgICAgICBsZXQgYSA9IHRoaXMuX2FuaW1hdGlvbi5zdGFydCh0aGlzLl9lbC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICBhLm9uQ29tcGxldGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBhLnJlbW92ZUNsYXNzZXMoWydpbiddKTsgLy8gcmFwaWQgY2hhbmdlIHdpbGwgbGVhdmUgJ2luJ1xyXG4gICAgICAgICAgICBhLmFkZENsYXNzZXMoWydjb2xsYXBzZSddKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uIC8vIDFzdCBhbmltYXRpb24gYnVpbGRcclxuICAgICAgICAgICAgLnNldER1cmF0aW9uKDApXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnY29sbGFwc2UnKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2luJylcclxuICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoe1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCh0aGlzLl9lbC5uYXRpdmVFbGVtZW50KSAvLyAxc3QgYW5pbWF0aW9uIHN0YXJ0XHJcbiAgICAgICAgICAgIC5vbkNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBhID0gdGhpcy5fYmFzZVNlcXVlbmNlIC8vICAybmQgYW5pbWF0aW9uIGJ1aWxkXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldFRvU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCArICdweCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCh0aGlzLl9lbC5uYXRpdmVFbGVtZW50KTsgLy8gMm5kIGFuaW1hdGlvbiBzdGFydFxyXG5cclxuICAgICAgICAgICAgICAgIGEub25Db21wbGV0ZSgoKSA9PiAgYS5hZGRDbGFzc2VzKFsnY29sbGFwc2UnLCAnaW4nXSkgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
