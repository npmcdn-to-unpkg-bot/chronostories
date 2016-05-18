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
System.register("directives/collapse.directive", ['angular2/core', 'angular2/src/animate/animation_builder'], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_5, animation_builder_1;
    var Collapse;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
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
                        width: this._el.nativeElement.scrollWidth + 'px'
                    })
                        .setToStyles({
                        width: '0'
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
                            width: '0'
                        })
                            .setToStyles({
                            width: _this._el.nativeElement.scrollWidth + 'px'
                        })
                            .start(_this._el.nativeElement); // 2nd animation start
                        a.onComplete(function () { return a.addClasses(['collapse', 'in']); });
                    });
                };
                __decorate([
                    core_5.Input(), 
                    __metadata('design:type', Boolean)
                ], Collapse.prototype, "collapse", void 0);
                Collapse = __decorate([
                    core_5.Directive({
                        selector: '[collapse]'
                    }), 
                    __metadata('design:paramtypes', [animation_builder_1.AnimationBuilder, core_5.ElementRef])
                ], Collapse);
                return Collapse;
            }());
            exports_9("Collapse", Collapse);
        }
    }
});
System.register("components/storyblock.component", ["angular2/core", "services/utils.service", "angular2/src/animate/animation_builder", "services/storyblocks.service", "config/configuration", "services/logger.service", "directives/collapse.directive"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_6, utils_service_1, animation_builder_2, storyblocks_service_1, configuration_3, logger_service_3, collapse_directive_1;
    var StoryBlockComponent;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (utils_service_1_1) {
                utils_service_1 = utils_service_1_1;
            },
            function (animation_builder_2_1) {
                animation_builder_2 = animation_builder_2_1;
            },
            function (storyblocks_service_1_1) {
                storyblocks_service_1 = storyblocks_service_1_1;
            },
            function (configuration_3_1) {
                configuration_3 = configuration_3_1;
            },
            function (logger_service_3_1) {
                logger_service_3 = logger_service_3_1;
            },
            function (collapse_directive_1_1) {
                collapse_directive_1 = collapse_directive_1_1;
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
                    this.zoomEvent = new core_6.EventEmitter();
                    this.exposeEvent = new core_6.EventEmitter();
                    this.removeStoryBlockEvent = new core_6.EventEmitter();
                    this.notify = new core_6.EventEmitter();
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
                    core_6.Output(), 
                    __metadata('design:type', core_6.EventEmitter)
                ], StoryBlockComponent.prototype, "zoomEvent", void 0);
                __decorate([
                    core_6.Output(), 
                    __metadata('design:type', core_6.EventEmitter)
                ], StoryBlockComponent.prototype, "exposeEvent", void 0);
                __decorate([
                    core_6.Output(), 
                    __metadata('design:type', core_6.EventEmitter)
                ], StoryBlockComponent.prototype, "removeStoryBlockEvent", void 0);
                __decorate([
                    core_6.Output(), 
                    __metadata('design:type', core_6.EventEmitter)
                ], StoryBlockComponent.prototype, "notify", void 0);
                __decorate([
                    core_6.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], StoryBlockComponent.prototype, "zoomLevel", null);
                __decorate([
                    core_6.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], StoryBlockComponent.prototype, "exposedIndex", null);
                StoryBlockComponent = __decorate([
                    core_6.Component({
                        selector: 'storyblock',
                        template: "\n        <a class=\"index\" (click)=\"swapCollapse()\">\n            <span *ngIf=\"storyBlockInfo.type == 'chapter'\">{{utilsService.getRomanNumeral(storyBlockInfo.blockNumber + 1)}}</span>\n        </a>\n        <div class=\"text-container\" [collapse]=\"collapsed\">\n            <input class=\"title\" [attr.readonly]=\"_exposed ? null : true\" [(ngModel)]=\"storyBlockInfo.title\" placeholder=\"Insert a title\" />\n            <textarea class=\"description\" [attr.readonly]=\"_exposed ? null : true\" [(ngModel)]=\"storyBlockInfo.description\" placeholder=\"Start writing your story here...\"></textarea>\n            <div class=\"default-actions\">\n                <a (click)=\"edit(index, $event)\" class=\"button inline-button primary\">Edit</a>\n                <a (click)=\"remove(index, $event)\" [ngClass]=\"{disabled:!hasId()}\" class=\"button inline-button alert\">Remove</a>\n            </div>\n            <div class=\"exposed-actions\">\n                <a (click)=\"save(index, $event)\" class=\"button inline-button primary\">Save</a>\n                <a (click)=\"close()\" class=\"button inline-button secondary\">Close</a>\n            </div>\n        </div>\n    ",
                        directives: [collapse_directive_1.Collapse],
                        providers: [utils_service_1.UtilsService, storyblocks_service_1.StoryBlockService],
                        inputs: ['storyBlockInfo', 'index', 'userId']
                    }), 
                    __metadata('design:paramtypes', [logger_service_3.LoggerService, animation_builder_2.AnimationBuilder, core_6.ElementRef, utils_service_1.UtilsService, storyblocks_service_1.StoryBlockService, configuration_3.Configuration])
                ], StoryBlockComponent);
                return StoryBlockComponent;
            }());
            exports_10("StoryBlockComponent", StoryBlockComponent);
        }
    }
});
System.register("components/timeline.component", ["angular2/core"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_7;
    var TimelineComponent;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            }],
        execute: function() {
            TimelineComponent = (function () {
                function TimelineComponent() {
                }
                TimelineComponent = __decorate([
                    core_7.Component({
                        selector: 'timeline',
                        template: "\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TimelineComponent);
                return TimelineComponent;
            }());
            exports_11("TimelineComponent", TimelineComponent);
        }
    }
});
System.register("components/add-button.component", ["angular2/core"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_8;
    var AddButtonComponent;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
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
                    core_8.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], AddButtonComponent.prototype, "offsetY", null);
                AddButtonComponent = __decorate([
                    core_8.Component({
                        selector: 'add-button',
                        template: "\n        <a><span>+</span></a>\n    ",
                        inputs: ['offsetY']
                    }), 
                    __metadata('design:paramtypes', [core_8.ElementRef])
                ], AddButtonComponent);
                return AddButtonComponent;
            }());
            exports_12("AddButtonComponent", AddButtonComponent);
        }
    }
});
System.register("components/notification.component", ["angular2/core"], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var core_9;
    var NotificationComponent;
    return {
        setters:[
            function (core_9_1) {
                core_9 = core_9_1;
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
                    core_9.Component({
                        selector: 'notification',
                        template: "\n        <div>{{ _content\u00A0}}</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [core_9.ElementRef])
                ], NotificationComponent);
                return NotificationComponent;
            }());
            exports_13("NotificationComponent", NotificationComponent);
        }
    }
});
System.register("models/user", [], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User() {
                }
                return User;
            }());
            exports_14("User", User);
        }
    }
});
System.register("models/jwtToken", [], function(exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("services/webstorage.service", ["angular2/core"], function(exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var core_10;
    var WebStorageService;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
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
                    core_10.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], WebStorageService);
                return WebStorageService;
            }());
            exports_16("WebStorageService", WebStorageService);
        }
    }
});
System.register("services/auth.service", ["angular2/core", 'angular2/http', "services/webstorage.service", "config/configuration", "services/logger.service"], function(exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var core_11, http_2, webstorage_service_1, configuration_4, logger_service_4;
    var AuthService;
    return {
        setters:[
            function (core_11_1) {
                core_11 = core_11_1;
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
                    core_11.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_4.LoggerService, http_2.Http, webstorage_service_1.WebStorageService, configuration_4.Configuration])
                ], AuthService);
                return AuthService;
            }());
            exports_17("AuthService", AuthService);
        }
    }
});
System.register("services/validators.service", [], function(exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
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
    exports_18("emailValidator", emailValidator);
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
    exports_18("matchingPasswords", matchingPasswords);
    return {
        setters:[],
        execute: function() {
            exports_18("emailRegexp", emailRegexp = '^[a-z0-9!#$%&\'*+\\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$');
        }
    }
});
System.register("components/log-message.component", ["angular2/core", "services/auth.service", "angular2/common", "services/webstorage.service"], function(exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    var core_12, auth_service_1, common_1, webstorage_service_2;
    var LogMessageComponent;
    return {
        setters:[
            function (core_12_1) {
                core_12 = core_12_1;
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
                    this.closeModal = new core_12.EventEmitter();
                }
                LogMessageComponent.prototype.close = function (event) {
                    this.closeModal.emit(event);
                };
                __decorate([
                    core_12.Input(), 
                    __metadata('design:type', Object)
                ], LogMessageComponent.prototype, "logMessage", void 0);
                __decorate([
                    core_12.Output(), 
                    __metadata('design:type', core_12.EventEmitter)
                ], LogMessageComponent.prototype, "closeModal", void 0);
                LogMessageComponent = __decorate([
                    core_12.Component({
                        selector: 'log-message',
                        template: "\n        <div class=\"modal-container\">\n            <div class=\"modal\">\n                <div class=\"flexbox flex-row\">\n                    <h1>{{logMessage.message}}</h1>\n                    <div><a class=\"close\" (click)=\"close($event)\"><i class=\"fa fa-times\" aria-hidden=\"true\">X</i></a></div>\n                </div>\n                <textarea class=\"description\" [attr.readonly]=\"true\" [(ngModel)]=\"logMessage.pretty\"></textarea>\n            </div>\n        </div>\n    ",
                        providers: [auth_service_1.AuthService, webstorage_service_2.WebStorageService],
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LogMessageComponent);
                return LogMessageComponent;
            }());
            exports_19("LogMessageComponent", LogMessageComponent);
        }
    }
});
System.register("components/debug-console.component", ["angular2/core", "services/logger.service", "components/log-message.component"], function(exports_20, context_20) {
    "use strict";
    var __moduleName = context_20 && context_20.id;
    var core_13, logger_service_5, log_message_component_1;
    var DebugConsoleComponent;
    return {
        setters:[
            function (core_13_1) {
                core_13 = core_13_1;
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
                    core_13.Component({
                        selector: 'debug-console',
                        template: "\n            <div>Debug errors:</div>\n            <div class=\"error-log\">\n                <div \n                    *ngFor=\"#logMessage of logMessages; #i = index\" \n                    >\n                    <a (click)=\"show(i)\" [ngClass]=\"{error: isError(logMessage), warning: isWarning(logMessage)}\">{{logMessage.message}}</a>\n                    <log-message\n                        *ngIf=\"i==openMessage\"\n                        (closeModal)=\"hide()\"\n                        [logMessage]=\"logMessage\"\n                    ></log-message>\n                </div>\n            </div>\n    ",
                        providers: [],
                        directives: [log_message_component_1.LogMessageComponent]
                    }), 
                    __metadata('design:paramtypes', [logger_service_5.LoggerService])
                ], DebugConsoleComponent);
                return DebugConsoleComponent;
            }());
            exports_20("DebugConsoleComponent", DebugConsoleComponent);
        }
    }
});
System.register("components/sidebar.component", ["angular2/core", "services/storyblocks.service", "services/utils.service", "services/logger.service", "components/debug-console.component"], function(exports_21, context_21) {
    "use strict";
    var __moduleName = context_21 && context_21.id;
    var core_14, storyblocks_service_2, utils_service_2, logger_service_6, debug_console_component_1;
    var SidebarComponent;
    return {
        setters:[
            function (core_14_1) {
                core_14 = core_14_1;
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
                    this.startDragging = new core_14.EventEmitter();
                    this.endDragging = new core_14.EventEmitter();
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
                    core_14.Output(), 
                    __metadata('design:type', core_14.EventEmitter)
                ], SidebarComponent.prototype, "startDragging", void 0);
                __decorate([
                    core_14.Output(), 
                    __metadata('design:type', core_14.EventEmitter)
                ], SidebarComponent.prototype, "endDragging", void 0);
                __decorate([
                    core_14.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], SidebarComponent.prototype, "storyBlock", null);
                __decorate([
                    core_14.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], SidebarComponent.prototype, "storyBlocksLength", null);
                SidebarComponent = __decorate([
                    core_14.Component({
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
            exports_21("SidebarComponent", SidebarComponent);
        }
    }
});
System.register("components/signin-form.component", ["angular2/core", "models/user", "services/auth.service", "angular2/common", "services/validators.service", "services/webstorage.service", "config/configuration", "services/logger.service"], function(exports_22, context_22) {
    "use strict";
    var __moduleName = context_22 && context_22.id;
    var core_15, user_1, auth_service_2, common_2, validators_service_1, webstorage_service_3, configuration_5, logger_service_7;
    var SignInComponent;
    return {
        setters:[
            function (core_15_1) {
                core_15 = core_15_1;
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
                    this.closeModal = new core_15.EventEmitter();
                    this.swapWindow = new core_15.EventEmitter();
                    this.notify = new core_15.EventEmitter();
                    this.authStatus = new core_15.EventEmitter();
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
                    core_15.Output(), 
                    __metadata('design:type', core_15.EventEmitter)
                ], SignInComponent.prototype, "closeModal", void 0);
                __decorate([
                    core_15.Output(), 
                    __metadata('design:type', core_15.EventEmitter)
                ], SignInComponent.prototype, "swapWindow", void 0);
                __decorate([
                    core_15.Output(), 
                    __metadata('design:type', core_15.EventEmitter)
                ], SignInComponent.prototype, "notify", void 0);
                __decorate([
                    core_15.Output(), 
                    __metadata('design:type', core_15.EventEmitter)
                ], SignInComponent.prototype, "authStatus", void 0);
                SignInComponent = __decorate([
                    core_15.Component({
                        selector: 'sign-in-form',
                        template: "\n        <div class=\"form-wrapper\">\n            <div class=\"flexbox flex-row\">\n                <h1>Come in, storyteller</h1>\n                <div><a class=\"close\" (click)=\"close($event)\"><i class=\"fa fa-times\" aria-hidden=\"true\">X</i></a></div>\n            </div>\n            <form [ngFormModel]=\"form\" (ngSubmit)=\"onSignIn($event)\" novalidate>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your email\"\n                    [(ngModel)]=\"user.email\" \n                    [ngFormControl]=\"form.controls['email']\"\n                    #email=\"ngForm\"\n                    >\n                <label for=\"email\">Email</label>\n                <div  *ngIf=\"(email.dirty || submitted) && !email.valid\" class=\"panel panel-error\">\n                    Email is invalid\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Your password\"\n                    [(ngModel)]=\"user.password\" \n                    [ngFormControl]=\"form.controls['password']\"\n                    #password=\"ngForm\"\n                    >\n                <label for=\"password\">Password</label>\n                <div  *ngIf=\"(password.dirty || submitted) && !password.valid\" class=\"panel panel-error\">\n                    The password should be at least 6 characters long\n                </div>\n              </div>\n              <button type=\"submit\" class=\"button primary block-button\">Sign in</button>\n              <div class=\"swap-form\"><a (click)=\"swapToSignUp()\">I want to create a new account</a></div>\n            </form>\n        </div>\n    ",
                        providers: [auth_service_2.AuthService, webstorage_service_3.WebStorageService],
                        directives: [common_2.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [logger_service_7.LoggerService, auth_service_2.AuthService, common_2.FormBuilder, webstorage_service_3.WebStorageService, configuration_5.Configuration])
                ], SignInComponent);
                return SignInComponent;
            }());
            exports_22("SignInComponent", SignInComponent);
        }
    }
});
System.register("components/signup-form.component", ["angular2/core", "models/user", "services/auth.service", "angular2/common", "services/validators.service", "services/webstorage.service", "config/configuration", "services/logger.service"], function(exports_23, context_23) {
    "use strict";
    var __moduleName = context_23 && context_23.id;
    var core_16, user_2, auth_service_3, common_3, validators_service_2, webstorage_service_4, configuration_6, logger_service_8;
    var SignUpComponent;
    return {
        setters:[
            function (core_16_1) {
                core_16 = core_16_1;
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
                    this.closeModal = new core_16.EventEmitter();
                    this.swapWindow = new core_16.EventEmitter();
                    this.notify = new core_16.EventEmitter();
                    this.authStatus = new core_16.EventEmitter();
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
                    core_16.Output(), 
                    __metadata('design:type', core_16.EventEmitter)
                ], SignUpComponent.prototype, "closeModal", void 0);
                __decorate([
                    core_16.Output(), 
                    __metadata('design:type', core_16.EventEmitter)
                ], SignUpComponent.prototype, "swapWindow", void 0);
                __decorate([
                    core_16.Output(), 
                    __metadata('design:type', core_16.EventEmitter)
                ], SignUpComponent.prototype, "notify", void 0);
                __decorate([
                    core_16.Output(), 
                    __metadata('design:type', core_16.EventEmitter)
                ], SignUpComponent.prototype, "authStatus", void 0);
                SignUpComponent = __decorate([
                    core_16.Component({
                        selector: 'sign-up-form',
                        template: "\n        <div class=\"form-wrapper\">\n            <div class=\"flexbox flex-row\">\n                <h1>Become a storyteller</h1>\n                <div><a class=\"close\" (click)=\"close($event)\"><i class=\"fa fa-times\" aria-hidden=\"true\">X</i></a></div>\n            </div>\n            <form [ngFormModel]=\"form\" (ngSubmit)=\"onSignUp($event)\" novalidate>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your name\"\n                    [(ngModel)]=\"user.name\"\n                    [ngFormControl]=\"form.controls['name']\"\n                    #name=\"ngForm\"\n                    >\n                <label for=\"name\">Name</label>\n                <div  *ngIf=\"(name.dirty || submitted) && !name.valid\" class=\"panel panel-error\">\n                    Your name is required\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your email\"\n                    [(ngModel)]=\"user.email\" \n                    [ngFormControl]=\"form.controls['email']\"\n                    #email=\"ngForm\"\n                    >\n                <label for=\"email\">Email</label>\n                <div  *ngIf=\"(email.dirty || submitted) && !email.valid\" class=\"panel panel-error\">\n                    Email is invalid\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Your password\"\n                    [(ngModel)]=\"user.password\" \n                    [ngFormControl]=\"form.controls['password']\"\n                    #password=\"ngForm\"\n                    >\n                <label for=\"password\">Password</label>\n                <div  *ngIf=\"(password.dirty || submitted) && !password.valid\" class=\"panel panel-error\">\n                    The password should be at least 6 characters long\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm password\"\n                    [(ngModel)]=\"user.confirmPassword\" \n                    [ngFormControl]=\"form.controls['confirmPassword']\"\n                    #confirmPassword=\"ngForm\"\n                    >\n                <label for=\"confirm-password\">Password</label>\n                <div *ngIf=\"(confirmPassword.dirty || submitted) && form.hasError('mismatchedPasswords')\" class=\"panel panel-error\">\n                    The passwords don't match\n                </div>\n              </div>\n              <button type=\"submit\" class=\"button primary block-button\">Sign up</button>\n              <div class=\"swap-form\"><a (click)=\"swapToSignIn()\">I already have an account</a></div>\n            </form>\n        </div>\n    ",
                        providers: [auth_service_3.AuthService, webstorage_service_4.WebStorageService],
                        directives: [common_3.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [logger_service_8.LoggerService, auth_service_3.AuthService, common_3.FormBuilder, webstorage_service_4.WebStorageService, configuration_6.Configuration])
                ], SignUpComponent);
                return SignUpComponent;
            }());
            exports_23("SignUpComponent", SignUpComponent);
        }
    }
});
System.register("components/auth-form.component", ["angular2/core", "components/signin-form.component", "components/signup-form.component"], function(exports_24, context_24) {
    "use strict";
    var __moduleName = context_24 && context_24.id;
    var core_17, signin_form_component_1, signup_form_component_1;
    var AuthFormComponent;
    return {
        setters:[
            function (core_17_1) {
                core_17 = core_17_1;
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
                    this.closeModal = new core_17.EventEmitter();
                    this.notify = new core_17.EventEmitter();
                    this.authStatus = new core_17.EventEmitter();
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
                    core_17.Output(), 
                    __metadata('design:type', core_17.EventEmitter)
                ], AuthFormComponent.prototype, "closeModal", void 0);
                __decorate([
                    core_17.Output(), 
                    __metadata('design:type', core_17.EventEmitter)
                ], AuthFormComponent.prototype, "notify", void 0);
                __decorate([
                    core_17.Output(), 
                    __metadata('design:type', core_17.EventEmitter)
                ], AuthFormComponent.prototype, "authStatus", void 0);
                AuthFormComponent = __decorate([
                    core_17.Component({
                        selector: 'auth-form',
                        template: "\n        <sign-in-form \n            *ngIf=\"login\" \n            (closeModal)=\"hideAccessForm()\"\n            (swapWindow)=\"login=!login\"\n            (authStatus)=\"authStatusChanged($event)\"\n            (notify)=\"notifyMessage($event)\"\n            ></sign-in-form>\n        <sign-up-form \n            *ngIf=\"!login\" \n            (closeModal)=\"hideAccessForm()\"\n            (swapWindow)=\"login=!login\"\n            (authStatus)=\"authStatusChanged($event)\"\n            (notify)=\"notifyMessage($event)\"\n            ></sign-up-form>\n    ",
                        providers: [],
                        directives: [signin_form_component_1.SignInComponent, signup_form_component_1.SignUpComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AuthFormComponent);
                return AuthFormComponent;
            }());
            exports_24("AuthFormComponent", AuthFormComponent);
        }
    }
});
System.register("components/app-content.component", ['angular2/core', 'angular2/common', "services/storyblocks.service", "components/storyblock.component", "components/timeline.component", "components/add-button.component", "components/notification.component", "components/sidebar.component", "config/configuration", "services/auth.service", "services/webstorage.service", "components/auth-form.component", "services/logger.service"], function(exports_25, context_25) {
    "use strict";
    var __moduleName = context_25 && context_25.id;
    var core_18, common_4, storyblocks_service_3, storyblock_component_1, timeline_component_1, add_button_component_1, notification_component_1, sidebar_component_1, configuration_7, auth_service_4, webstorage_service_5, auth_form_component_1, logger_service_9;
    var AppComponent;
    return {
        setters:[
            function (core_18_1) {
                core_18 = core_18_1;
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
                    core_18.ViewChild(notification_component_1.NotificationComponent), 
                    __metadata('design:type', notification_component_1.NotificationComponent)
                ], AppComponent.prototype, "notificationComponent", void 0);
                AppComponent = __decorate([
                    core_18.Component({
                        selector: 'app-content',
                        template: "\n        <main>\n            <timeline class=\"timeline-block\"></timeline>\n            <div class=\"story-blocks\">\n                <storyblock *ngFor=\"#storyBlock of storyBlocks; #i = index\" \n                    [index]=\"i\" \n                    [storyBlockInfo]=\"storyBlock\" \n                    [zoomLevel]=\"zoomLevel\"\n                    [userId]=\"userId\"\n                    [exposedIndex]=\"exposedIndex\"\n                    [ngClass]=\"{exposed: exposedIndex == i}\"\n                    (removeStoryBlockEvent)=\"removeStoryBlock($event)\" \n                    (exposeEvent)=\"setExposed($event)\"\n                    (notify)=\"notify($event)\"\n                    class=\"story-block {{ storyBlock.type\u00A0}}\"></storyblock>\n            </div>\n            <div class=\"timeline\"\n                (click)=\"addStoryBlock($event)\"\n                (mouseenter)=\"onMouseEnter($event)\"\n                (mouseleave)=\"onMouseLeave($event)\"\n                (mousemove)=\"onMouseMove($event)\">\n                <add-button *ngIf=\"addButton.visible\"\n                    [offsetY]=\"addButton.top\"\n                    (click)=\"addStoryBlock($event)\"></add-button>\n            </div>\n            <div id=\"controls\">\n                <div id=\"zoom-controls\">              \n                    <a title=\"Zoom in\" (click)=\"zoomIn()\">+</a>  \n                    <a title=\"Zoom out\" (click)=\"zoomOut()\">&ndash;</a>                \n                </div>            \n            </div>\n        </main>\n        <aside [ngClass]=\"{visible: menuVisible}\">\n            <sidebar\n            (startDragging)=\"toggleMenu(false)\"\n            (endDragging)=\"addStoryBlock($event)\"\n            [storyBlock]=\"exposedStoryBlock\" [storyBlocksLength]=\"storyBlocks.length\"></sidebar>\n            <a class=\"user-aside\" (click)=\"downloadPdf()\">Download PDF</a>\n            <a class=\"user-aside\" *ngIf=\"!isLoggedIn()\" (click)=\"showAccessForm()\">Login/Signup</a>\n            <a class=\"user-aside\" *ngIf=\"isLoggedIn()\" (click)=\"logOut()\">Logout</a>\n            <a id=\"close-menu\" (click)=\"toggleMenu(false)\"></a>\n        </aside>\n        <header><a id=\"burger\" (click)=\"toggleMenu(true)\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a></header>\n        <auth-form \n            *ngIf=\"accessFormVisible\" \n            (closeModal)=\"hideAccessForm()\"\n            (notify)=\"notify($event)\"\n            (authStatus)=\"authStatusChanged($event)\"\n            >\n        </auth-form>\n        <notification [ngClass]=\"{error: notification.type == 'error', success: notification.type == 'success'}\"></notification>\n    ",
                        providers: [storyblocks_service_3.StoryBlockService, configuration_7.Configuration, auth_service_4.AuthService, webstorage_service_5.WebStorageService, logger_service_9.LoggerService],
                        directives: [storyblock_component_1.StoryBlockComponent, timeline_component_1.TimelineComponent, add_button_component_1.AddButtonComponent, notification_component_1.NotificationComponent, sidebar_component_1.SidebarComponent, auth_form_component_1.AuthFormComponent, common_4.NgClass]
                    }), 
                    __metadata('design:paramtypes', [logger_service_9.LoggerService, storyblocks_service_3.StoryBlockService, configuration_7.Configuration, webstorage_service_5.WebStorageService, auth_service_4.AuthService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_25("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "components/app-content.component", 'angular2/http', "config/configuration", "angular2/core", "services/logger.service"], function(exports_26, context_26) {
    "use strict";
    var __moduleName = context_26 && context_26.id;
    var browser_1, app_content_component_1, http_3, configuration_8, core_19, logger_service_10;
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
            function (core_19_1) {
                core_19 = core_19_1;
            },
            function (logger_service_10_1) {
                logger_service_10 = logger_service_10_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_content_component_1.AppComponent, [http_3.HTTP_PROVIDERS, configuration_8.Configuration, core_19.provide(core_19.ExceptionHandler, { useClass: logger_service_10.LoggerService })]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2svbW9jay1zdG9yeWJsb2Nrcy50cyIsIm1vY2svbW9jay1zdG9yeWJsb2NrLXR5cGVzLnRzIiwic2VydmljZXMvbG9nZ2VyLnNlcnZpY2UudHMiLCJjb25maWcvY29uZmlndXJhdGlvbi50cyIsInNlcnZpY2VzL3N0b3J5YmxvY2tzLnNlcnZpY2UudHMiLCJzZXJ2aWNlcy91dGlscy5zZXJ2aWNlLnRzIiwiZGlyZWN0aXZlcy9jb2xsYXBzZS5kaXJlY3RpdmUudHMiLCJjb21wb25lbnRzL3N0b3J5YmxvY2suY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy90aW1lbGluZS5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL2FkZC1idXR0b24uY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9ub3RpZmljYXRpb24uY29tcG9uZW50LnRzIiwibW9kZWxzL3VzZXIudHMiLCJzZXJ2aWNlcy93ZWJzdG9yYWdlLnNlcnZpY2UudHMiLCJzZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiLCJzZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UudHMiLCJjb21wb25lbnRzL2xvZy1tZXNzYWdlLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvZGVidWctY29uc29sZS5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3NpZGViYXIuY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9zaWduaW4tZm9ybS5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3NpZ251cC1mb3JtLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvYXV0aC1mb3JtLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvYXBwLWNvbnRlbnQuY29tcG9uZW50LnRzIiwiYm9vdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFFYSxXQUFXOzs7O1lBQVgseUJBQUEsV0FBVyxHQUE4QjtnQkFDbEQ7b0JBQ0ksT0FBTyxFQUFFLENBQUM7b0JBQ1YsS0FBSyxFQUFFLFNBQVM7b0JB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QUFDO29CQUM3QixDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxJQUFJLE9BQU8sR0FBTyxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLFlBQVksR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7d0JBQ25JLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7d0JBQzVDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUMxQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3ZDLENBQUM7d0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUM5QyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3RDLENBQUM7d0JBQ0QsSUFBSSxDQUFDLENBQUM7NEJBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNyQyxDQUFDO3dCQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzRCQUNqQyxJQUFJLFVBQVUsR0FBRztnQ0FDYixJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLHlCQUF5QixD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QyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDOUQsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ2pFLENBQUM7Z0JBQ0wsQ0FBQztnQkF0UkQ7b0JBQUMsaUJBQVMsQ0FBQyw4Q0FBcUIsQ0FBQzs7MkVBQUE7Z0JBM0RyQztvQkFBQyxpQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsMHBGQW1EVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBaUIsRUFBRSw2QkFBYSxFQUFFLDBCQUFXLEVBQUUsc0NBQWlCLEVBQUUsOEJBQWEsQ0FBQzt3QkFDNUYsVUFBVSxFQUFFLENBQUMsMENBQW1CLEVBQUUsc0NBQWlCLEVBQUUseUNBQWtCLEVBQUUsOENBQXFCLEVBQUUsb0NBQWdCLEVBQUUsdUNBQWlCLEVBQUUsZ0JBQU8sQ0FBQztxQkFDaEosQ0FBQzs7Z0NBQUE7Z0JBMFJGLG1CQUFDO1lBQUQsQ0F4UkEsQUF3UkMsSUFBQTtZQXhSRCx3Q0F3UkMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUMzVkQsbUJBQVMsQ0FBQyxvQ0FBWSxFQUFFLENBQUMscUJBQWMsRUFBRSw2QkFBYSxFQUFFLGVBQU8sQ0FBQyx3QkFBZ0IsRUFBRyxFQUFDLFFBQVEsRUFBRSwrQkFBYSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiLi4vLi4vLi4vY2hyb25vc3Rvcmllcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0b3J5QmxvY2t9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9ja1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNUT1JZQkxPQ0tTOlN0b3J5QmxvY2tbXSA9IDxTdG9yeUJsb2NrW10+W1xyXG4gICAge1xyXG4gICAgICAgIGJsb2NrSWQ6IDEsXHJcbiAgICAgICAgdGl0bGU6ICdQcmVmYWNlJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1lvdSBuZWVkIHRvIHN0YXJ0IHNvbWV3aGVyZScsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOjEsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogLTEsXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6MCxcclxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBibG9ja0lkOiAyLFxyXG4gICAgICAgIHRpdGxlOiAnSW50cm9kdWN0aW9uJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1doZXJlIHlvdXIgY2hhcmFjdGVycyBiZWNhbWUgcmVhbCcsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiAyLFxyXG4gICAgICAgIGltcG9ydGFuY2U6IDEsXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6MSxcclxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBibG9ja0lkOiAzLFxyXG4gICAgICAgIHRpdGxlOiAnRXZvbHV0aW9uJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaW5ncyBnZXRzIHRyaWNraWVyJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDMsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogMixcclxuICAgICAgICBibG9ja051bWJlcjoyLFxyXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGJsb2NrSWQ6IDQsXHJcbiAgICAgICAgdGl0bGU6ICdUb3BpYyBtb21lbnQnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnV29haCEnLFxyXG4gICAgICAgIHRpbWVQb3NpdGlvbjogNCxcclxuICAgICAgICBpbXBvcnRhbmNlOiAxLFxyXG4gICAgICAgIGJsb2NrTnVtYmVyOjMsXHJcbiAgICAgICAgdHlwZTonY2hhcHRlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgYmxvY2tJZDogNSxcclxuICAgICAgICB0aXRsZTogJ0VwaWxvZ3VlJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0JlY2F1c2UgZXZlbiB0aGUgYmVzdCB0aGluZ3MgZW5kJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDUsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogLTEsXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6NCxcclxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xyXG4gICAgfVxyXG5dOyIsImltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1R5cGV9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9jay10eXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU1RPUllCTE9DS19UWVBFUzpTdG9yeUJsb2NrVHlwZVtdID0gPFN0b3J5QmxvY2tUeXBlW10+W1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAnY2hhcHRlcicsXHJcbiAgICAgICAgbmFtZTogJ0NoYXB0ZXInLFxyXG4gICAgICAgIGxldmVsOiAwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAncGFyYWdyYXBoJyxcclxuICAgICAgICBuYW1lOiAnUGFyYWdyYXBoJyxcclxuICAgICAgICBsZXZlbDogMVxyXG4gICAgfSxcclxuXTsiLCJpbXBvcnQge0luamVjdGFibGUsIGZvcndhcmRSZWYsIEluamVjdCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHtPYnNlcnZlcn0gZnJvbSBcInJ4anMvT2JzZXJ2ZXJcIjtcclxuXHJcbmRlY2xhcmUgdmFyIG1vbWVudDphbnk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2dnZXJTZXJ2aWNlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgZGVidWdMZXZlbDtcclxuICAgIHByaXZhdGUgbG9nU3RyZWFtJDpPYnNlcnZlcjxPYmplY3Q+O1xyXG4gICAgcHVibGljIGxvZyQ6T2JzZXJ2YWJsZTxPYmplY3Q+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBDb25maWd1cmF0aW9uKSkgcHJpdmF0ZSBjb25maWd1cmF0aW9uOkNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB0aGlzLnNldERlYnVnTGV2ZWwoY29uZmlndXJhdGlvbi5kZWJ1Z0xldmVsIHx8IERFQlVHX0xFVkVMLkVSUk9SKTtcclxuXHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICB3aW5kb3cub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvck1zZywgdXJsLCBsaW5lTnVtYmVyLCBjb2x1bW4sIGVycm9yT2JqKSB7XHJcbiAgICAgICAgICAgIHRoYXQubG9nKERFQlVHX0xFVkVMLkVSUk9SLCAnb25lcnJvcicsIGVycm9yTXNnLCB1cmwsIGxpbmVOdW1iZXIsIGNvbHVtbiwgZXJyb3JPYmopO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHtcclxuICAgIH1cclxuXHJcbiAgICBzZXREZWJ1Z0xldmVsKGRlYnVnTGV2ZWwpIHtcclxuICAgICAgICB0aGlzLmRlYnVnTGV2ZWwgPSBkZWJ1Z0xldmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2cobGV2ZWwsIGZ1bmN0aW9uTmFtZSwgdGV4dCwgLi4uYXJnczphbnlbXSkge1xyXG4gICAgICAgIGlmICghbGV2ZWwgfHwgKGxldmVsLnZhbHVlID09PSB1bmRlZmluZWQpIHx8ICFsZXZlbC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGxldmVsID0gREVCVUdfTEVWRUwuSU5GTztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldmVsLnZhbHVlID49IHRoaXMuZGVidWdMZXZlbC52YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZTphbnkgPSAnWycgKyBtb21lbnQoKS5mb3JtYXQoXCJERC9NTS9ZWSAtIEhIOm1tOnNzLlNTU1wiKSArICddWycgKyBsZXZlbC5uYW1lICsgJ11bJyArIGZ1bmN0aW9uTmFtZSArICddICcgKyAodGV4dCB8fCAnJyk7XHJcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmNhbGwoYXJncywgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGlmIChsZXZlbC52YWx1ZSA9PT0gREVCVUdfTEVWRUwuRVJST1IudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcuYXBwbHkoY29uc29sZSwgYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobGV2ZWwudmFsdWUgPT09IERFQlVHX0xFVkVMLldBUk4udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybi5hcHBseShjb25zb2xlLCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghIXRoaXMubG9nJCAmJiB0aGlzLmxvZ1N0cmVhbSQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBsb2dNZXNzYWdlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IG1vbWVudCgpLmZvcm1hdChcIkREL01NL1lZIC0gSEg6bW06c3MuU1NTXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsOiBsZXZlbC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogZnVuY3Rpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogYXJncyxcclxuICAgICAgICAgICAgICAgICAgICBwcmV0dHk6JydcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBsb2dNZXNzYWdlLnByZXR0eSA9IEpTT04uc3RyaW5naWZ5KGxvZ01lc3NhZ2UsIG51bGwsIDIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubG9nU3RyZWFtJC5uZXh0KGxvZ01lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldExvZ1N0cmVhbSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubG9nJCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZyQgPSBuZXcgT2JzZXJ2YWJsZTxPYmplY3Q+KG9ic2VydmVyID0+IHRoaXMubG9nU3RyZWFtJCA9IG9ic2VydmVyKS5zaGFyZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2ckO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGwoZXhjZXB0aW9uOmFueSwgc3RhY2tUcmFjZT86YW55LCByZWFzb24/OnN0cmluZyk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2coREVCVUdfTEVWRUwuRVJST1IsICdhbmd1bGFyJywgJycsIGV4Y2VwdGlvbiwgcmVhc29uKTtcclxuICAgIH1cclxuXHJcbiAgICBlcnJvckNhdGNoZXIoKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXJyOmFueSwgc291cmNlOk9ic2VydmFibGU8YW55PiwgY2F1Z2h0Ok9ic2VydmFibGU8YW55Pik6T2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICAgICAgdGhhdC5sb2coREVCVUdfTEVWRUwuRVJST1IsICdlcnJvckNhdGNoZXInLCBlcnIubWVzc2FnZSwgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBERUJVR19MRVZFTCA9IHtcclxuICAgIFZFUkJPU0U6IHtcclxuICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgICBuYW1lOiAnTG9nJ1xyXG4gICAgfSxcclxuICAgIElORk86IHtcclxuICAgICAgICB2YWx1ZTogMSxcclxuICAgICAgICBuYW1lOiAnSW5mbydcclxuICAgIH0sXHJcbiAgICBXQVJOOiB7XHJcbiAgICAgICAgdmFsdWU6IDIsXHJcbiAgICAgICAgbmFtZTogJ1dhcm4nXHJcbiAgICB9LFxyXG4gICAgRVJST1I6IHtcclxuICAgICAgICB2YWx1ZTogMyxcclxuICAgICAgICBuYW1lOiAnRXJyb3InXHJcbiAgICB9LFxyXG4gICAgTk9ORToge1xyXG4gICAgICAgIHZhbHVlOiA0LFxyXG4gICAgICAgIG5hbWU6ICcnXHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2UsIERFQlVHX0xFVkVMfSBmcm9tIFwiLi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xyXG4gICAgcHVibGljIHpvb20gPSB7XHJcbiAgICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICAgIHN0ZXA6IDE1MCxcclxuICAgICAgICBzdHJlbmd0aDogMC42XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyB0b2tlbiA9IHtcclxuICAgICAgICBuYW1lOiAndG9rZW4nLFxyXG4gICAgICAgIGV4cGlyYXRpb246ICgzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDApXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHB1YmxpYyBhcGlCYXNlUGF0aCA9ICdodHRwczovL2FhMjAxNi1jaHJvbm9zdG9yaWVzLmhlcm9rdWFwcC5jb20nO1xyXG4gICAgcHVibGljIGFwaUJhc2VQYXRoID0gJyc7XHJcbiAgICBcclxuICAgIHB1YmxpYyBkZWJ1Z0xldmVsID0gREVCVUdfTEVWRUwuSU5GTztcclxufSIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3NoYXJlJztcclxuaW1wb3J0IHtPYnNlcnZlcn0gZnJvbSAncnhqcy9PYnNlcnZlcic7XHJcbmltcG9ydCB7U1RPUllCTE9DS1N9IGZyb20gXCIuLi9tb2NrL21vY2stc3RvcnlibG9ja3NcIjtcclxuaW1wb3J0IHtTdG9yeUJsb2NrVHlwZX0gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrLXR5cGVcIjtcclxuaW1wb3J0IHtTVE9SWUJMT0NLX1RZUEVTfSBmcm9tIFwiLi4vbW9jay9tb2NrLXN0b3J5YmxvY2stdHlwZXNcIjtcclxuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlLCBERUJVR19MRVZFTH0gZnJvbSBcIi4vbG9nZ2VyLnNlcnZpY2VcIjtcclxuZGVjbGFyZSB2YXIgcGRmTWFrZTogYW55O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3RvcnlCbG9ja1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfZXhwb3NlZEluZGV4ID0gLTE7XHJcbiAgICBpbmRleENoYW5nZSQ6IE9ic2VydmFibGU8bnVtYmVyPjtcclxuICAgIHByaXZhdGUgX29ic2VydmVyOiBPYnNlcnZlcjxudW1iZXI+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbG9nZ2VyOkxvZ2dlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGh0dHA6SHR0cCwgXHJcbiAgICAgICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOkNvbmZpZ3VyYXRpb25cclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuaW5kZXhDaGFuZ2UkID0gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT5cclxuICAgICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBvYnNlcnZlcikuc2hhcmUoKTtcclxuICAgIH1cclxuICAgIGNoYW5nZUV4cG9zZWRJbmRleChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuX2V4cG9zZWRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuX29ic2VydmVyLm5leHQoaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgZ2V0RXhwb3NlZEluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHBvc2VkSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RvcnlCbG9ja3ModXNlcklkKTpPYnNlcnZhYmxlPFN0b3J5QmxvY2tbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvc3RvcnlibG9ja3MvJyt1c2VySWQpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvckNhdGNoZXIoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVN0b3J5QmxvY2sodXNlcklkLCBzdG9yeUJsb2NrOlN0b3J5QmxvY2spOk9ic2VydmFibGU8U3RvcnlCbG9jaz4ge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghIXN0b3J5QmxvY2suX2lkKSB7XHJcbiAgICAgICAgICAgIHN0b3J5QmxvY2suY3JlYXRlZEF0ID0gc3RvcnlCbG9jay5jcmVhdGVkQXQgfHwgKG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICBzdG9yeUJsb2NrLmxhc3RNb2RpZmllZEF0ID0gKG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpQmFzZVBhdGggKyAnL3N0b3J5YmxvY2tzLycgKyB1c2VySWQgKyAnLycgKyBzdG9yeUJsb2NrLl9pZCwgXCJkYXRhPVwiICsgSlNPTi5zdHJpbmdpZnkoc3RvcnlCbG9jayksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nZ2VyLmVycm9yQ2F0Y2hlcigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN0b3J5QmxvY2suY3JlYXRlZEF0ID0gKG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICBzdG9yeUJsb2NrLmxhc3RNb2RpZmllZEF0ID0gKG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5jb25maWd1cmF0aW9uLmFwaUJhc2VQYXRoICsgJy9zdG9yeWJsb2Nrcy8nK3VzZXJJZCArJy8nICwgXCJkYXRhPVwiICsgSlNPTi5zdHJpbmdpZnkoc3RvcnlCbG9jayksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nZ2VyLmVycm9yQ2F0Y2hlcigpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlU3RvcnlCbG9jayh1c2VySWQsIHN0b3J5QmxvY2s6U3RvcnlCbG9jayk6T2JzZXJ2YWJsZTxTdG9yeUJsb2NrW10+IHtcclxuICAgICAgICBpZiAoISFzdG9yeUJsb2NrLl9pZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpQmFzZVBhdGggKyAnL3N0b3J5YmxvY2tzLycgKyB1c2VySWQgKyAnLycgKyBzdG9yeUJsb2NrLl9pZClcclxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dnZXIuZXJyb3JDYXRjaGVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdG9yeUJsb2NrVHlwZXMoKTpTdG9yeUJsb2NrVHlwZVtdIHtcclxuICAgICAgICByZXR1cm4gU1RPUllCTE9DS19UWVBFUztcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdG9yeUJsb2NrRGVmYXVsdFR5cGVzKCk6U3RvcnlCbG9ja1R5cGVbXSB7XHJcbiAgICAgICAgcmV0dXJuIFNUT1JZQkxPQ0tfVFlQRVM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVUZXN0RGF0YSh1c2VySWQpOk9ic2VydmFibGU8U3RvcnlCbG9ja1tdPiB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdnZW5lcmF0ZVRlc3REYXRhJywgJ0NyZWF0aW5nIHRlbXBvcmFyeSBkYXRhIGZvciAnICsgdXNlcklkKTtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgYmxvY2tzOlN0b3J5QmxvY2tbXSA9IFNUT1JZQkxPQ0tTO1xyXG5cclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxibG9ja3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBibG9ja3NbaV0udXNlcklkID0gdXNlcklkO1xyXG4gICAgICAgICAgICBibG9ja3NbaV0uY3JlYXRlZEF0ID0gKG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICBibG9ja3NbaV0ubGFzdE1vZGlmaWVkQXQgPSAobmV3IERhdGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpQmFzZVBhdGggKyAnL3N0b3J5YmxvY2tzLycgKyB1c2VySWQgKyAnLycsIFwiZGF0YT1cIiArIEpTT04uc3RyaW5naWZ5KGJsb2NrcyksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvckNhdGNoZXIoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRQZGYoc3RvcnlCbG9ja3M6U3RvcnlCbG9ja1tdKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gY29tcGFyZShhOlN0b3J5QmxvY2ssIGI6U3RvcnlCbG9jaykge1xyXG4gICAgICAgICAgICBpZiAoYS50aW1lUG9zaXRpb24gPCBiLnRpbWVQb3NpdGlvbilcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoYS50aW1lUG9zaXRpb24gPiBiLnRpbWVQb3NpdGlvbilcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0b3J5QmxvY2tzLnNvcnQoY29tcGFyZSk7XHJcblxyXG5cclxuICAgICAgICB2YXIgZG9jRGVmaW5pdGlvbiA9IHtcclxuICAgICAgICAgICAgY29udGVudDogW10sXHJcblxyXG4gICAgICAgICAgICBzdHlsZXM6IHtcclxuICAgICAgICAgICAgICAgIGNoYXB0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9sZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFswLCAxNiwgMCwgOF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYXJhZ3JhcGg6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9sZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFswLCAwLCAwLCAxMl1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RvcnlCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZG9jRGVmaW5pdGlvbi5jb250ZW50LnB1c2goXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogc3RvcnlCbG9ja3NbaV0udGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHN0b3J5QmxvY2tzW2ldLnR5cGUsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRvY0RlZmluaXRpb24uY29udGVudC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgc3RvcnlCbG9ja3NbaV0uZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBkZk1ha2UuY3JlYXRlUGRmKGRvY0RlZmluaXRpb24pLmRvd25sb2FkKCk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFV0aWxzU2VydmljZSB7XHJcbiAgICBwdWJsaWMgRU1BSUxfUkVHRVggPSAnXlstYS16MC05fiEkJV4mKl89K317XFwnP10rKFxcLlstYS16MC05fiEkJV4mKl89K317XFwnP10rKSpAKFthLXowLTlfXVstYS16MC05X10qKFxcLlstYS16MC05X10rKSpcXC4oYWVyb3xhcnBhfGJpenxjb218Y29vcHxlZHV8Z292fGluZm98aW50fG1pbHxtdXNldW18bmFtZXxuZXR8b3JnfHByb3x0cmF2ZWx8bW9iaXxbYS16XVthLXpdKXwoWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfSkpKDpbMC05XXsxLDV9KT8kJztcclxuXHJcblxyXG4gICAgZ2V0Um9tYW5OdW1lcmFsKG51bSk6c3RyaW5nIHtcclxuICAgICAgICBpZiAoIStudW0pXHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB2YXIgZGlnaXRzID0gU3RyaW5nKCtudW0pLnNwbGl0KFwiXCIpLFxyXG4gICAgICAgICAgICBrZXkgPSBbXCJcIiwgXCJDXCIsIFwiQ0NcIiwgXCJDQ0NcIiwgXCJDRFwiLCBcIkRcIiwgXCJEQ1wiLCBcIkRDQ1wiLCBcIkRDQ0NcIiwgXCJDTVwiLFxyXG4gICAgICAgICAgICAgICAgXCJcIiwgXCJYXCIsIFwiWFhcIiwgXCJYWFhcIiwgXCJYTFwiLCBcIkxcIiwgXCJMWFwiLCBcIkxYWFwiLCBcIkxYWFhcIiwgXCJYQ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJcIiwgXCJJXCIsIFwiSUlcIiwgXCJJSUlcIiwgXCJJVlwiLCBcIlZcIiwgXCJWSVwiLCBcIlZJSVwiLCBcIlZJSUlcIiwgXCJJWFwiXSxcclxuICAgICAgICAgICAgcm9tYW4gPSBcIlwiLFxyXG4gICAgICAgICAgICBpID0gMztcclxuICAgICAgICB3aGlsZSAoaS0tKVxyXG4gICAgICAgICAgICByb21hbiA9IChrZXlbK2RpZ2l0cy5wb3AoKSArIChpICogMTApXSB8fCBcIlwiKSArIHJvbWFuO1xyXG4gICAgICAgIHJldHVybiBBcnJheSgrZGlnaXRzLmpvaW4oXCJcIikgKyAxKS5qb2luKFwiTVwiKSArIHJvbWFuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEh1bWFuRGF0ZShkKTpzdHJpbmd7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShkKTtcclxuICAgICAgICByZXR1cm4gKGRhdGUuZ2V0TW9udGgoKSArICcvJyArIGRhdGUuZ2V0RGF0ZSgpICsgJy8nICsgIGRhdGUuZ2V0RnVsbFllYXIoKSArICcgYXQgJyArIGRhdGUuZ2V0SG91cnMoKSArICc6JyArIGRhdGUuZ2V0TWludXRlcygpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7RGlyZWN0aXZlLCBPbkNoYW5nZXMsIEVsZW1lbnRSZWYsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtBbmltYXRpb25CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvYW5pbWF0ZS9hbmltYXRpb25fYnVpbGRlcic7XHJcbmltcG9ydCB7Q3NzQW5pbWF0aW9uQnVpbGRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2FuaW1hdGUvY3NzX2FuaW1hdGlvbl9idWlsZGVyJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbY29sbGFwc2VdJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbGxhcHNlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIGNvbGxhcHNlOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uOiBDc3NBbmltYXRpb25CdWlsZGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFuaW1hdGlvbkJ1aWxkZXI6QW5pbWF0aW9uQnVpbGRlciwgcHJpdmF0ZSBfZWw6RWxlbWVudFJlZikge1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbiA9IGFuaW1hdGlvbkJ1aWxkZXIuY3NzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xyXG4gICAgICAgIC8vIGlmIHRoZSBjaGFuZ2UgaGFwcGVuZWQgaW4gdGhlIGNvbGxhcHNlIHByb3BlcnR5XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuY29sbGFwc2UpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29sbGFwc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgX2Jhc2VTZXF1ZW5jZSgpOiBDc3NBbmltYXRpb25CdWlsZGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIC5zZXREdXJhdGlvbigyNTApIC8vIHRoZSB0cmFuc2l0aW9uIGR1cmF0aW9uXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnY29sbGFwc2UnKSAvLyByZW1vdmUgYSBjbGFzcyBiZWZvcmUgdGhlIHRyYW5zaXRpb24gc3RhcnRcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpbicpXHJcbiAgICAgICAgICAgIC5hZGRBbmltYXRpb25DbGFzcygnY29sbGFwc2luZycpOyAvLyBhZGQgYSB0ZW1wIGNsYXNzIGZvciB0aGUgdHJhbnNpdGlvbiBwZXJpb2RcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VTZXF1ZW5jZVxyXG4gICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyh7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5fZWwubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCArICdweCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnNldFRvU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMCdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGEgaXMgdGhlIEFuaW1hdGlvbiBpbnN0YW5jZSBydW5uaW5nIHRoaXMgYW5pbWF0aW9uLlxyXG4gICAgICAgIGxldCBhID0gdGhpcy5fYW5pbWF0aW9uLnN0YXJ0KHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIGEub25Db21wbGV0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGEucmVtb3ZlQ2xhc3NlcyhbJ2luJ10pOyAvLyByYXBpZCBjaGFuZ2Ugd2lsbCBsZWF2ZSAnaW4nXHJcbiAgICAgICAgICAgIGEuYWRkQ2xhc3NlcyhbJ2NvbGxhcHNlJ10pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9hbmltYXRpb24gLy8gMXN0IGFuaW1hdGlvbiBidWlsZFxyXG4gICAgICAgICAgICAuc2V0RHVyYXRpb24oMClcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdjb2xsYXBzZScpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnaW4nKVxyXG4gICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyh7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpIC8vIDFzdCBhbmltYXRpb24gc3RhcnRcclxuICAgICAgICAgICAgLm9uQ29tcGxldGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGEgPSB0aGlzLl9iYXNlU2VxdWVuY2UgLy8gIDJuZCBhbmltYXRpb24gYnVpbGRcclxuICAgICAgICAgICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpOyAvLyAybmQgYW5pbWF0aW9uIHN0YXJ0XHJcblxyXG4gICAgICAgICAgICAgICAgYS5vbkNvbXBsZXRlKCgpID0+ICBhLmFkZENsYXNzZXMoWydjb2xsYXBzZScsICdpbiddKSApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtVdGlsc1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QW5pbWF0aW9uQnVpbGRlcn0gZnJvbSBcImFuZ3VsYXIyL3NyYy9hbmltYXRlL2FuaW1hdGlvbl9idWlsZGVyXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdG9yeWJsb2Nrcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7TG9nZ2VyU2VydmljZSwgREVCVUdfTEVWRUx9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbGxhcHNlfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jb2xsYXBzZS5kaXJlY3RpdmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzdG9yeWJsb2NrJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGEgY2xhc3M9XCJpbmRleFwiIChjbGljayk9XCJzd2FwQ29sbGFwc2UoKVwiPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInN0b3J5QmxvY2tJbmZvLnR5cGUgPT0gJ2NoYXB0ZXInXCI+e3t1dGlsc1NlcnZpY2UuZ2V0Um9tYW5OdW1lcmFsKHN0b3J5QmxvY2tJbmZvLmJsb2NrTnVtYmVyICsgMSl9fTwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY29udGFpbmVyXCIgW2NvbGxhcHNlXT1cImNvbGxhcHNlZFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0aXRsZVwiIFthdHRyLnJlYWRvbmx5XT1cIl9leHBvc2VkID8gbnVsbCA6IHRydWVcIiBbKG5nTW9kZWwpXT1cInN0b3J5QmxvY2tJbmZvLnRpdGxlXCIgcGxhY2Vob2xkZXI9XCJJbnNlcnQgYSB0aXRsZVwiIC8+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImRlc2NyaXB0aW9uXCIgW2F0dHIucmVhZG9ubHldPVwiX2V4cG9zZWQgPyBudWxsIDogdHJ1ZVwiIFsobmdNb2RlbCldPVwic3RvcnlCbG9ja0luZm8uZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIlN0YXJ0IHdyaXRpbmcgeW91ciBzdG9yeSBoZXJlLi4uXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlZmF1bHQtYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cImVkaXQoaW5kZXgsICRldmVudClcIiBjbGFzcz1cImJ1dHRvbiBpbmxpbmUtYnV0dG9uIHByaW1hcnlcIj5FZGl0PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cInJlbW92ZShpbmRleCwgJGV2ZW50KVwiIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDohaGFzSWQoKX1cIiBjbGFzcz1cImJ1dHRvbiBpbmxpbmUtYnV0dG9uIGFsZXJ0XCI+UmVtb3ZlPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4cG9zZWQtYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cInNhdmUoaW5kZXgsICRldmVudClcIiBjbGFzcz1cImJ1dHRvbiBpbmxpbmUtYnV0dG9uIHByaW1hcnlcIj5TYXZlPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cImNsb3NlKClcIiBjbGFzcz1cImJ1dHRvbiBpbmxpbmUtYnV0dG9uIHNlY29uZGFyeVwiPkNsb3NlPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbQ29sbGFwc2VdLFxyXG4gICAgcHJvdmlkZXJzOiBbVXRpbHNTZXJ2aWNlLCBTdG9yeUJsb2NrU2VydmljZV0sXHJcbiAgICBpbnB1dHM6IFsnc3RvcnlCbG9ja0luZm8nLCAnaW5kZXgnLCAndXNlcklkJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9yeUJsb2NrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBzdG9yeUJsb2NrSW5mbzpTdG9yeUJsb2NrO1xyXG4gICAgcHJpdmF0ZSB1c2VySWQ7XHJcbiAgICBwdWJsaWMgaW5kZXg7XHJcbiAgICBwdWJsaWMgX2V4cG9zZWQgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBfYWN0aXZlID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX2FjdGlvblRpbWVvdXQ7XHJcbiAgICBwdWJsaWMgX3NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF96b29tTGV2ZWwgPSAxMDtcclxuICAgIHByaXZhdGUgX3ByZXZpb3VzWm9vbUxldmVsID0gMTA7XHJcbiAgICBwcml2YXRlIHN0b3J5QmxvY2tMb2NhbFNhdmU6U3RvcnlCbG9jaztcclxuICAgIHB1YmxpYyBjb2xsYXBzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAT3V0cHV0KCkgem9vbUV2ZW50OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIGV4cG9zZUV2ZW50OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIHJlbW92ZVN0b3J5QmxvY2tFdmVudDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBub3RpZnk6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6TG9nZ2VyU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2FiOkFuaW1hdGlvbkJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9lOkVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHV0aWxzU2VydmljZTpVdGlsc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgc3RvcnlCbG9ja1NlcnZpY2U6U3RvcnlCbG9ja1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbikge1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgem9vbUxldmVsKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsID0gKHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsID09IHVuZGVmaW5lZCkgPyAxMCA6IHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsO1xyXG4gICAgICAgIHRoaXMuX3pvb21MZXZlbCA9ICh0aGlzLl96b29tTGV2ZWwgPT0gdW5kZWZpbmVkKSA/IDEwIDogdGhpcy5fem9vbUxldmVsO1xyXG4gICAgICAgIGlmICh0aGlzLl96b29tTGV2ZWwgIT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNab29tTGV2ZWwgPSB0aGlzLl96b29tTGV2ZWw7XHJcbiAgICAgICAgICAgIHRoaXMuX3pvb21MZXZlbCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnpvb21DaGFuZ2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgZXhwb3NlZEluZGV4KHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2V4cG9zZWQgPSAodmFsdWUgPT0gdGhpcy5pbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dhcENvbGxhcHNlKCl7XHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTphbnkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUG9zaXRpb25Pblpvb20oMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgem9vbShlKSB7XHJcbiAgICAgICAgdmFyIGUgPSB3aW5kb3cuZXZlbnQgfHwgZTsgLy8gb2xkIElFIHN1cHBvcnRcclxuICAgICAgICB0aGlzLnpvb21FdmVudC5lbWl0KGUpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHpvb21DaGFuZ2VkKCkge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5WRVJCT1NFLCd6b29tQ2hhbmdlZCcsJycsIHtcclxuICAgICAgICAgICAgc3RvcnlCbG9jazogdGhpcy5pbmRleCxcclxuICAgICAgICAgICAgcHJldmlvdXNab29tOiB0aGlzLl9wcmV2aW91c1pvb21MZXZlbCxcclxuICAgICAgICAgICAgY3VycmVudFpvb206IHRoaXMuX3pvb21MZXZlbFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLl96b29tTGV2ZWwgPCB0aGlzLnN0b3J5QmxvY2tJbmZvLmltcG9ydGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5mYWRlT3V0KDEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUG9zaXRpb25Pblpvb20oMTAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZhZGVJbihzcGVlZDpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuVkVSQk9TRSwnZmFkZUluJywnJywge1xyXG4gICAgICAgICAgICBzdG9yeUJsb2NrOiB0aGlzLmluZGV4LFxyXG4gICAgICAgICAgICBtZXNzYWdlOidGYWRpbmcgaW4nXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBhbmltYXRpb24gPSB0aGlzLl9hYi5jc3MoKTtcclxuICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBmcm9tU3R5bGUgPSB7fTtcclxuICAgICAgICB2YXIgdG9TdHlsZSA9IHt9O1xyXG5cclxuICAgICAgICBmcm9tU3R5bGVbJ2Rpc3BsYXknXSA9ICdmbGV4JztcclxuICAgICAgICBmcm9tU3R5bGVbJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gPSAnY3ViaWMtYmV6aWVyKDAuNTc1LCAwLjI1NSwgMC40NDAsIDAuOTg1KTsnO1xyXG4gICAgICAgIHRvU3R5bGVbJ29wYWNpdHknXSA9IDE7XHJcblxyXG4gICAgICAgIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAuc2V0RHVyYXRpb24oc3BlZWQpXHJcbiAgICAgICAgICAgIC5zZXRGcm9tU3R5bGVzKGZyb21TdHlsZSlcclxuICAgICAgICAgICAgLnNldFRvU3R5bGVzKHRvU3R5bGUpO1xyXG5cclxuICAgICAgICBpZiAoISFfc2VsZi5fYWN0aW9uVGltZW91dCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3NlbGYuX2FjdGlvblRpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX3NlbGYuX2FjdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLnN0YXJ0KF9zZWxmLl9lLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzSWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhKCh0aGlzLnN0b3J5QmxvY2tJbmZvIHx8IHtfaWQ6IHVuZGVmaW5lZH0pLl9pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmFkZU91dChzcGVlZDpudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5fYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5WRVJCT1NFLCdmYWRlT3V0JywnJywge1xyXG4gICAgICAgICAgICAgICAgc3RvcnlCbG9jazogdGhpcy5pbmRleCxcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzWm9vbTogdGhpcy5fcHJldmlvdXNab29tTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Wm9vbTogdGhpcy5fem9vbUxldmVsLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW5jZTogdGhpcy5zdG9yeUJsb2NrSW5mby5pbXBvcnRhbmNlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTonRmFkaW5nIG91dCdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYWIuY3NzKCk7XHJcbiAgICAgICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBmcm9tU3R5bGUgPSB7fTtcclxuICAgICAgICAgICAgdmFyIHRvU3R5bGUgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIHRvU3R5bGVbJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gPSAnY3ViaWMtYmV6aWVyKDAuNTc1LCAwLjI1NSwgMC40NDAsIDAuOTg1KTsnO1xyXG4gICAgICAgICAgICB0b1N0eWxlWydvcGFjaXR5J10gPSAwO1xyXG5cclxuICAgICAgICAgICAgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICAuc2V0RHVyYXRpb24oc3BlZWQpXHJcbiAgICAgICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyhmcm9tU3R5bGUpXHJcbiAgICAgICAgICAgICAgICAuc2V0VG9TdHlsZXModG9TdHlsZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoISFfc2VsZi5fYWN0aW9uVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLlZFUkJPU0UsJ2ZhZGVPdXQnLCcnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcnlCbG9jazogdGhpcy5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOidBbmltYXRpb24gcmVtb3ZlZCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChfc2VsZi5fYWN0aW9uVGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIF9zZWxmLl9hY3Rpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24uc3RhcnQoX3NlbGYuX2UubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVBvc2l0aW9uT25ab29tKHNwZWVkKSB7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbiA9IHRoaXMuX2FiLmNzcygpO1xyXG4gICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGZyb21TdHlsZSA9IHtcclxuICAgICAgICAgICAgdG9wOiB0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5vZmZzZXQgKyAoKHRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0ZXAgKyBNYXRoLmV4cCh0aGlzLl9wcmV2aW91c1pvb21MZXZlbCAqIHRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0cmVuZ3RoKSkgKiB0aGlzLnN0b3J5QmxvY2tJbmZvLnRpbWVQb3NpdGlvbikgKyAncHgnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHRvU3R5bGUgPSB7XHJcbiAgICAgICAgICAgIHRvcDogdGhpcy5jb25maWd1cmF0aW9uLnpvb20ub2Zmc2V0ICsgKCh0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5zdGVwICsgTWF0aC5leHAodGhpcy5fem9vbUxldmVsICogdGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RyZW5ndGgpKSAqIHRoaXMuc3RvcnlCbG9ja0luZm8udGltZVBvc2l0aW9uKSArICdweCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuVkVSQk9TRSwgJ2NoYW5nZVBvc2l0aW9uT25ab29tJywgJycsIHtcclxuICAgICAgICAgICAgc3RvcnlCbG9jazogdGhpcy5pbmRleCxcclxuICAgICAgICAgICAgcHJldmlvdXNab29tOiB0aGlzLl9wcmV2aW91c1pvb21MZXZlbCxcclxuICAgICAgICAgICAgY3VycmVudFpvb206IHRoaXMuX3pvb21MZXZlbCxcclxuICAgICAgICAgICAgdGltZVBvc2l0aW9uOiB0aGlzLnN0b3J5QmxvY2tJbmZvLnRpbWVQb3NpdGlvbixcclxuICAgICAgICAgICAgb2Zmc2V0OnRoaXMuY29uZmlndXJhdGlvbi56b29tLm9mZnNldCxcclxuICAgICAgICAgICAgc3RlcDp0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5zdGVwLFxyXG4gICAgICAgICAgICBzdHJlbmd0aDp0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5zdHJlbmd0aCxcclxuICAgICAgICAgICAgZnJvbVBvc2l0aW9uOmZyb21TdHlsZS50b3AsXHJcbiAgICAgICAgICAgIHRvUG9zaXRpb246dG9TdHlsZS50b3AsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6J0NoYW5naW5nIHBvc2l0aW9uJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoX3NlbGYuX3pvb21MZXZlbCA+IF9zZWxmLnN0b3J5QmxvY2tJbmZvLmltcG9ydGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLlZFUkJPU0UsJ2NoYW5nZVBvc2l0aW9uT25ab29tJywnJywge1xyXG4gICAgICAgICAgICAgICAgc3RvcnlCbG9jazogdGhpcy5pbmRleCxcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzWm9vbTogdGhpcy5fcHJldmlvdXNab29tTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Wm9vbTogdGhpcy5fem9vbUxldmVsLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW5jZTogdGhpcy5zdG9yeUJsb2NrSW5mby5pbXBvcnRhbmNlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTonRmFkaW5nIGluJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdG9TdHlsZVsnb3BhY2l0eSddID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5WRVJCT1NFLCdjaGFuZ2VQb3NpdGlvbk9uWm9vbScsJycsIHtcclxuICAgICAgICAgICAgICAgIHN0b3J5QmxvY2s6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1pvb206IHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFpvb206IHRoaXMuX3pvb21MZXZlbCxcclxuICAgICAgICAgICAgICAgIGltcG9ydGFuY2U6IHRoaXMuc3RvcnlCbG9ja0luZm8uaW1wb3J0YW5jZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6J0ZhZGluZyBvdXQnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0b1N0eWxlWydvcGFjaXR5J10gPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdG9TdHlsZVsndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSA9ICdjdWJpYy1iZXppZXIoMC41NzUsIDAuMjU1LCAwLjQ0MCwgMC45ODUpOyc7XHJcblxyXG4gICAgICAgIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAuc2V0RHVyYXRpb24oc3BlZWQpXHJcbiAgICAgICAgICAgIC5zZXRGcm9tU3R5bGVzKGZyb21TdHlsZSlcclxuICAgICAgICAgICAgLnNldFRvU3R5bGVzKHRvU3R5bGUpO1xyXG5cclxuICAgICAgICBpZiAoISFfc2VsZi5fYWN0aW9uVGltZW91dCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuVkVSQk9TRSwnY2hhbmdlUG9zaXRpb25Pblpvb20nLCcnLCB7XHJcbiAgICAgICAgICAgICAgICBzdG9yeUJsb2NrOiB0aGlzLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTonQW5pbWF0aW9uIHJlbW92ZWQnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3NlbGYuX2FjdGlvblRpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX3NlbGYuX2FjdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLnN0YXJ0KF9zZWxmLl9lLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9jdXMoKSB7XHJcbiAgICAgICAgdmFyIG5hdGl2ZSA9IHRoaXMuX2UubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB2YXIgY29udGFpbmVyID0gbnVsbDtcclxuICAgICAgICB2YXIgdGV4dGFyZWEgPSBudWxsO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmF0aXZlLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKChuYXRpdmUuY2hpbGROb2Rlc1tpXS5jbGFzc05hbWUgfHwgJycpLmluZGV4T2YoXCJ0ZXh0LWNvbnRhaW5lclwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSBuYXRpdmUuY2hpbGROb2Rlc1tpXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghIWNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGNvbnRhaW5lci5jaGlsZE5vZGVzW2ldLmNsYXNzTmFtZSB8fCAnJykuaW5kZXhPZihcImRlc2NyaXB0aW9uXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSA9IGNvbnRhaW5lci5jaGlsZE5vZGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghIXRleHRhcmVhKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVkaXQoaW5kZXgsIGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdlZGl0JywgJ1NhdmluZyB0ZW1wb3JhcnkgZGF0YSAnLCB0aGlzLnN0b3J5QmxvY2tJbmZvKTtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tMb2NhbFNhdmUgPSA8U3RvcnlCbG9jaz5KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RvcnlCbG9ja0luZm8pKTtcclxuICAgICAgICB0aGlzLmV4cG9zZUV2ZW50LmVtaXQoaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoaW5kZXgsIGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5kZWxldGVTdG9yeUJsb2NrKHRoaXMudXNlcklkLCB0aGlzLnN0b3J5QmxvY2tJbmZvKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdyZW1vdmUnLCAnUmVjZWl2ZWQgZGF0YScsICBkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLldBUk4sICdyZW1vdmUnLCAnRXJyb3Igd2hpbGUgcmVtb3ZpbmcnLCB0aGlzLnN0b3J5QmxvY2tJbmZvLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvci4gUGxlYXNlIHRyeSBhZ2Fpbi4nXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdyZW1vdmUnLCAnUmVtb3ZpbmcgYmxvY2sgaW5kZXggJyArIHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdSZW1vdmVkIHN1Y2Nlc3NmdWxseS4nXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlU3RvcnlCbG9ja0V2ZW50LmVtaXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUoaW5kZXgsIGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdzYXZlJywgJ0kgYW0gYWJvdXQgdG8gc2F2ZScsIHRoaXMuc3RvcnlCbG9ja0luZm8pO1xyXG5cclxuICAgICAgICBpZiAoISh0aGlzLnN0b3J5QmxvY2tJbmZvLnRpdGxlID09ICcnICYmIHRoaXMuc3RvcnlCbG9ja0luZm8uZGVzY3JpcHRpb24gPT0gJycpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcnlCbG9ja1NlcnZpY2Uuc2F2ZVN0b3J5QmxvY2sodGhpcy51c2VySWQsIHRoaXMuc3RvcnlCbG9ja0luZm8pLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcnlCbG9ja0luZm8gPSA8U3RvcnlCbG9jaz5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnc2F2ZScsICdSZWNlaXZlZCAnLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ3NhdmUnLCAnU2F2aW5nIHRlbXBvcmFyeSBkYXRhICcsIGRhdGEsIHRoaXMuc3RvcnlCbG9ja0luZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcnlCbG9ja0xvY2FsU2F2ZSA9IDxTdG9yeUJsb2NrPkpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdG9yeUJsb2NrSW5mbykpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuV0FSTiwgJ3NhdmUnLCAnRXJyb3Igd2hpbGUgc2F2aW5nJywgdGhpcy5zdG9yeUJsb2NrSW5mbywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4uJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ3NhdmUnLCAnU2F2ZWQgJywgdGhpcy5zdG9yeUJsb2NrSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NhdmVkIHN1Y2Nlc3NmdWxseS4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCgnUGxlYXNlIGluc2VydCBhIHRpdGxlIG9yIHNvbWUgY29udGVudC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5leHBvc2VFdmVudC5lbWl0KC0xKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnN0b3J5QmxvY2tMb2NhbFNhdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdjbG9zZScsJ1JlbW92aW5nIGJsb2NrIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVTdG9yeUJsb2NrRXZlbnQuZW1pdCh0aGlzLmluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J3RpbWVsaW5lJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lbGluZUNvbXBvbmVudCB7XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWZ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidhZGQtYnV0dG9uJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGE+PHNwYW4+Kzwvc3Bhbj48L2E+XHJcbiAgICBgLFxyXG4gICAgaW5wdXRzOiBbJ29mZnNldFknXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkQnV0dG9uQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgX29mZnNldFk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZTpFbGVtZW50UmVmKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCBvZmZzZXRZKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX29mZnNldFkgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLm9mZnNldENoYW5nZWQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZnNldENoYW5nZWQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9lLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gdmFsdWUgKyAncHgnO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWZ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidub3RpZmljYXRpb24nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2Pnt7IF9jb250ZW50wqB9fTwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgX3RpbWVyO1xyXG4gICAgcHJpdmF0ZSBfY29udGVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lOkVsZW1lbnRSZWYpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93KGNvbnRlbnQpe1xyXG4gICAgICAgIGlmKCEhdGhpcy5fdGltZXIpe1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLl9lLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2UubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gICAgbmFtZSA6IHN0cmluZztcclxuICAgIGVtYWlsIDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQgOiBzdHJpbmc7XHJcbn0iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXZWJTdG9yYWdlU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHN0b3JhZ2VTdXBwb3J0ZWQgPSAodHlwZW9mKFN0b3JhZ2UpICE9PSBcInVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdXQoa2V5LCB2YWx1ZSk6dm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RvcmFnZVN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICBpZiAoISF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXRJbkxvY2FsU3RvcmFnZShrZXksIHZhbHVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tTG9jYWxTdG9yYWdlKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1dEluQ29va2llcyhrZXksIHZhbHVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tQ29va2llcyhrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldChrZXkpOmFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RvcmFnZVN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGcm9tTG9jYWxTdG9yYWdlKGtleSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEZyb21Db29raWUoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGtleSk6dm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RvcmFnZVN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tQ29va2llcyhrZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHB1dEluTG9jYWxTdG9yYWdlKGtleSwgdmFsdWUpOnZvaWQge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZW5jb2RlVVJJKHZhbHVlKSB8fCBcIlwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRGcm9tTG9jYWxTdG9yYWdlKGtleSk6YW55IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUkkobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgfHwgXCJ7fVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KTp2b2lkIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHV0SW5Db29raWVzKGtleSwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgKDMwICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xyXG4gICAgICAgIHZhciBleHBpcmVzID0gZC50b1VUQ1N0cmluZygpO1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSArPSBrZXkgKyAnPScgKyBKU09OLnN0cmluZ2lmeShlbmNvZGVVUkkodmFsdWUpIHx8IFwiXCIpICsgXCI7cGF0aD0vO2V4cGlyZXM9XCIgKyBleHBpcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RnJvbUNvb2tpZShrZXkpOmFueSB7XHJcbiAgICAgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnKD86Xnw7KVxcXFxzPycgKyBrZXkgKyAnPSguKj8pKD86O3wkKScsICdpJyk7XHJcbiAgICAgICAgdmFyIG10YyA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChyZWdleCkgfHwgW107XHJcbiAgICAgICAgaWYgKG10Yy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZVVSSShtdGNbMV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZUZyb21Db29raWVzKGtleSk6dm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0ga2V5ICsgXCI9O3BhdGg9LztleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UXCI7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQge0p3dFRva2VufSBmcm9tIFwiLi4vbW9kZWxzL2p3dFRva2VuXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9tb2RlbHMvdXNlclwiO1xyXG5pbXBvcnQge1dlYlN0b3JhZ2VTZXJ2aWNlfSBmcm9tIFwiLi93ZWJzdG9yYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlLCBERUJVR19MRVZFTH0gZnJvbSBcIi4vbG9nZ2VyLnNlcnZpY2VcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBsb2dnZXI6TG9nZ2VyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgaHR0cDpIdHRwLFxyXG4gICAgICAgIHByaXZhdGUgd2ViU3RvcmFnZVNlcnZpY2U6V2ViU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOkNvbmZpZ3VyYXRpb25cclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpOmJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMud2ViU3RvcmFnZVNlcnZpY2UucmVtb3ZlKHRoaXMuY29uZmlndXJhdGlvbi50b2tlbi5uYW1lKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbih1c2VyOlVzZXIpOk9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdsb2dpbicsICdDcmVhdGluZyB0ZW1wb3JhcnkgZGF0YScpO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpQmFzZVBhdGggKyAnL2F1dGgvbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lPVwiICsgdXNlci5uYW1lICsgXCImXCIgK1xyXG4gICAgICAgICAgICAgICAgXCJlbWFpbD1cIiArIHVzZXIuZW1haWwgKyBcIiZcIiArXHJcbiAgICAgICAgICAgICAgICBcInBhc3N3b3JkPVwiICsgdXNlci5wYXNzd29yZCxcclxuICAgICAgICAgICAgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLnRleHQoKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nZ2VyLmVycm9yQ2F0Y2hlcigpKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlcih1c2VyOlVzZXIpOk9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdyZWdpc3RlcicsICdDcmVhdGluZyB0ZW1wb3JhcnkgZGF0YScpO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvYXV0aC9yZWdpc3RlcicsXHJcbiAgICAgICAgICAgICAgICBcImVtYWlsPVwiICsgdXNlci5lbWFpbCArIFwiJlwiICtcclxuICAgICAgICAgICAgICAgIFwicGFzc3dvcmQ9XCIgKyB1c2VyLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMudGV4dCgpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dnZXIuZXJyb3JDYXRjaGVyKCkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpc0xvZ2dlZEluKCk6Ym9vbGVhbiB7XHJcbiAgICAgICAgdmFyIHRva2VuRGF0YVNwbGl0ID0gKHRoaXMud2ViU3RvcmFnZVNlcnZpY2UuZ2V0KHRoaXMuY29uZmlndXJhdGlvbi50b2tlbi5uYW1lKSB8fCAnJykuc3BsaXQoJy4nKVsxXTtcclxuICAgICAgICBpZiAoIXRva2VuRGF0YVNwbGl0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRva2VuRGF0YVJhdyA9IGF0b2IodG9rZW5EYXRhU3BsaXQpO1xyXG5cclxuICAgICAgICB2YXIgdG9rZW5EYXRhID0gSlNPTi5wYXJzZSh0b2tlbkRhdGFSYXcpIGFzIEp3dFRva2VuO1xyXG4gICAgICAgIHJldHVybiAodG9rZW5EYXRhLmV4cCB8fCAwKSA+IERhdGUubm93KCkgLyAxMDAwO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgZ2V0SWRGcm9tVG9rZW4oKSB7XHJcbiAgICAgICAgdmFyIHRva2VuRGF0YVNwbGl0ID0gKHRoaXMud2ViU3RvcmFnZVNlcnZpY2UuZ2V0KHRoaXMuY29uZmlndXJhdGlvbi50b2tlbi5uYW1lKSB8fCAnJykuc3BsaXQoJy4nKVsxXTtcclxuICAgICAgICBpZiAoIXRva2VuRGF0YVNwbGl0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRva2VuRGF0YVJhdyA9IGF0b2IodG9rZW5EYXRhU3BsaXQpO1xyXG5cclxuICAgICAgICB2YXIgdG9rZW5EYXRhID0gSlNPTi5wYXJzZSh0b2tlbkRhdGFSYXcpIGFzIEp3dFRva2VuO1xyXG5cclxuICAgICAgICByZXR1cm4gdG9rZW5EYXRhLl9pZFxyXG4gICAgfVxyXG5cclxuICAgIGdldElkRnJvbUFub255bW91c1Rva2VuKHRva2VuRGF0YVN0cmluZykge1xyXG4gICAgICAgIHZhciB0b2tlbkRhdGFSYXcgPSBhdG9iKHRva2VuRGF0YVN0cmluZyk7XHJcblxyXG4gICAgICAgIHZhciB0b2tlbkRhdGEgPSBKU09OLnBhcnNlKHRva2VuRGF0YVJhdykgYXMgSnd0VG9rZW47XHJcbiAgICAgICAgcmV0dXJuIHRva2VuRGF0YS5faWRcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUFub255bW91c1Rva2VuKCk6YW55IHtcclxuICAgICAgICB2YXIgYW5vbnltb3VzVG9rZW4gPSB7XHJcbiAgICAgICAgICAgIF9pZDogdGhpcy5nZW5lcmF0ZVVuaXF1ZUlkKClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYnRvYShKU09OLnN0cmluZ2lmeShhbm9ueW1vdXNUb2tlbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2VuZXJhdGVVbmlxdWVJZCgpIHtcclxuICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHtDb250cm9sLCBDb250cm9sR3JvdXB9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcclxuXHJcbi8qXHJcbiBDdXN0b20gdmFsaWRhdG9ycyB0byB1c2UgZXZlcnl3aGVyZS5cclxuICovXHJcblxyXG4vLyBTSU5HTEUgRklFTEQgVkFMSURBVE9SU1xyXG5leHBvcnQgZnVuY3Rpb24gZW1haWxWYWxpZGF0b3IoY29udHJvbDogQ29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcclxuICAgIHZhciBlbWFpbFJlZ2V4cCA9IC9eW2EtejAtOSEjJCUmJyorXFwvPT9eX2B7fH1+Li1dK0BbYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXC5bYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPykqJC9pO1xyXG4gICAgaWYgKGNvbnRyb2wudmFsdWUgJiYgY29udHJvbC52YWx1ZS5sZW5ndGggPCA2ICYmICFlbWFpbFJlZ2V4cC50ZXN0KGNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpbnZhbGlkRW1haWw6IHRydWV9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZW1haWxSZWdleHAgPSAnXlthLXowLTkhIyQlJlxcJyorXFxcXC89P15fYHt8fX4uLV0rQFthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KFxcXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKiQnO1xyXG5cclxuLy9DT05UUk9MIEdST1VQIFZBTElEQVRPUlNcclxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoaW5nUGFzc3dvcmRzKHBhc3N3b3JkS2V5OiBzdHJpbmcsIGNvbmZpcm1QYXNzd29yZEtleTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKGdyb3VwOiBDb250cm9sR3JvdXApOiB7W2tleTogc3RyaW5nXTogYW55fSA9PiB7XHJcbiAgICAgICAgbGV0IHBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbcGFzc3dvcmRLZXldO1xyXG4gICAgICAgIGxldCBjb25maXJtUGFzc3dvcmQgPSBncm91cC5jb250cm9sc1tjb25maXJtUGFzc3dvcmRLZXldO1xyXG4gICAgICAgIGlmIChwYXNzd29yZC52YWx1ZSAhPT0gY29uZmlybVBhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtaXNtYXRjaGVkUGFzc3dvcmRzOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uL21vZGVscy91c2VyXCI7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgQ29udHJvbEdyb3VwLCBGT1JNX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcclxuaW1wb3J0IHtlbWFpbFZhbGlkYXRvciwgbWF0Y2hpbmdQYXNzd29yZHMsIGVtYWlsUmVnZXhwfSBmcm9tICcuLi9zZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UnO1xyXG5pbXBvcnQge1dlYlN0b3JhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvd2Vic3RvcmFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7TG9nZ2VyU2VydmljZSwgREVCVUdfTEVWRUx9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xvZy1tZXNzYWdlJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4Ym94IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPnt7bG9nTWVzc2FnZS5tZXNzYWdlfX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PGEgY2xhc3M9XCJjbG9zZVwiIChjbGljayk9XCJjbG9zZSgkZXZlbnQpXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlg8L2k+PC9hPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJkZXNjcmlwdGlvblwiIFthdHRyLnJlYWRvbmx5XT1cInRydWVcIiBbKG5nTW9kZWwpXT1cImxvZ01lc3NhZ2UucHJldHR5XCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2UsIFdlYlN0b3JhZ2VTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9nTWVzc2FnZUNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIGxvZ01lc3NhZ2U7XHJcbiAgICBAT3V0cHV0KCkgY2xvc2VNb2RhbDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblxyXG4gICAgY2xvc2UoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmNsb3NlTW9kYWwuZW1pdChldmVudCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7TG9nZ2VyU2VydmljZSwgREVCVUdfTEVWRUx9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHtMb2dNZXNzYWdlQ29tcG9uZW50fSBmcm9tIFwiLi9sb2ctbWVzc2FnZS5jb21wb25lbnRcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGVidWctY29uc29sZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICA8ZGl2PkRlYnVnIGVycm9yczo8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yLWxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCIjbG9nTWVzc2FnZSBvZiBsb2dNZXNzYWdlczsgI2kgPSBpbmRleFwiIFxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwic2hvdyhpKVwiIFtuZ0NsYXNzXT1cIntlcnJvcjogaXNFcnJvcihsb2dNZXNzYWdlKSwgd2FybmluZzogaXNXYXJuaW5nKGxvZ01lc3NhZ2UpfVwiPnt7bG9nTWVzc2FnZS5tZXNzYWdlfX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxvZy1tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaT09b3Blbk1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xvc2VNb2RhbCk9XCJoaWRlKClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbG9nTWVzc2FnZV09XCJsb2dNZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9sb2ctbWVzc2FnZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgZGlyZWN0aXZlczogW0xvZ01lc3NhZ2VDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGVidWdDb25zb2xlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgcHJpdmF0ZSBsb2dTdHJlYW0kOk9ic2VydmFibGU8T2JqZWN0W10+O1xyXG4gICAgcHVibGljIGxvZ01lc3NhZ2VzOk9iamVjdFtdO1xyXG4gICAgcHVibGljIG9wZW5NZXNzYWdlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOkxvZ2dlclNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOmFueSB7XHJcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlcz1bXTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmxvZ1N0cmVhbSQgPSB0aGlzLmxvZ2dlci5nZXRMb2dTdHJlYW0oKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dTdHJlYW0kLnN1YnNjcmliZShtZXNzYWdlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2dNZXNzYWdlcy5wdXNoKG1lc3NhZ2UpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93KGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5vcGVuTWVzc2FnZSA9ICghdGhpcy5vcGVuTWVzc2FnZSk/aW5kZXg6dW5kZWZpbmVkO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCduby1zY3JvbGwnKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCl7XHJcbiAgICAgICAgdGhpcy5vcGVuTWVzc2FnZT11bmRlZmluZWQ7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRXJyb3IobWVzc2FnZSl7XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UubGV2ZWwgPT0gREVCVUdfTEVWRUwuRVJST1IubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBpc1dhcm5pbmcobWVzc2FnZSl7XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UubGV2ZWwgPT0gREVCVUdfTEVWRUwuV0FSTi5uYW1lO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtTdG9yeUJsb2NrU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0b3J5YmxvY2tzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtVdGlsc1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1R5cGV9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9jay10eXBlXCI7XHJcbmltcG9ydCB7TG9nZ2VyU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RGVidWdDb25zb2xlQ29tcG9uZW50fSBmcm9tIFwiLi9kZWJ1Zy1jb25zb2xlLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3Rvcjonc2lkZWJhcicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJfaW5kZXggPT0gLTFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImNyZWF0ZS1zdG9yeWJsb2NrXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIChkcmFnc3RhcnQpPVwiZHJhZ1N0YXJ0KCRldmVudClcIiAoZHJhZ2VuZCk9XCJkcmFnRW5kKCRldmVudClcIj5DcmVhdGUgc3RvcnlibG9jazwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+VG90YWwgY2hhcHRlcnM8L3NwYW4+PHNwYW4gY2xhc3M9XCJjb3VudFwiPnt7X3N0b3J5QmxvY2tzTGVuZ3RofX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJfaW5kZXggPj0gMCAmJiAhIV9zdG9yeUJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPjxzcGFuIGNsYXNzPVwiY2FwaXRhbC1sZXR0ZXJcIj5DaGFwdGVyPC9zcGFuPiB7e19zdG9yeUJsb2NrLmJsb2NrTnVtYmVyKzF9fTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1zZXBhcmF0b3JcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TdG9yeWJsb2NrIHR5cGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3Qtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFsobmdNb2RlbCldPVwiX3N0b3J5QmxvY2sudHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCIjc3RvcnlCbG9ja1R5cGUgb2Ygc3RvcnlCbG9ja1R5cGVzXCIgdmFsdWU9e3tzdG9yeUJsb2NrVHlwZS5pZH19Pnt7c3RvcnlCbG9ja1R5cGUubmFtZX19PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1zZXBhcmF0b3JcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItY291bnRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5Ub3RhbCBjaGFyYWN0ZXJzPC9zcGFuPjxzcGFuIGNsYXNzPVwiY291bnRcIj57e19zdG9yeUJsb2NrLmRlc2NyaXB0aW9uLmxlbmd0aH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItaW5mb1wiICpuZ0lmPVwiISFfc3RvcnlCbG9jay5jcmVhdGVkQXRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5DcmVhdGVkPC9zcGFuPjxzcGFuIGNsYXNzPVwiaW5mb1wiPnt7dXRpbHNTZXJ2aWNlLmdldEh1bWFuRGF0ZShfc3RvcnlCbG9jay5jcmVhdGVkQXQpfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1pbmZvXCIgKm5nSWY9XCIhIV9zdG9yeUJsb2NrLmxhc3RNb2RpZmllZEF0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+TGFzdCBtb2RpZmllZDwvc3Bhbj48c3BhbiBjbGFzcz1cImluZm9cIj57e3V0aWxzU2VydmljZS5nZXRIdW1hbkRhdGUoX3N0b3J5QmxvY2subGFzdE1vZGlmaWVkQXQpfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkZWJ1Zy1jb25zb2xlICpuZ0lmPVwiaXNEZWJ1ZygpXCI+PC9kZWJ1Zy1jb25zb2xlPlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczogW1V0aWxzU2VydmljZV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbRGVidWdDb25zb2xlQ29tcG9uZW50XSxcclxuICAgIGlucHV0czogWydzdG9yeUJsb2NrJywgJ3N0b3J5QmxvY2tzTGVuZ3RoJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIHN0b3J5QmxvY2tUeXBlczpTdG9yeUJsb2NrVHlwZVtdO1xyXG4gICAgXHJcbiAgICBwdWJsaWMgX2luZGV4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgX3N0b3J5QmxvY2s7XHJcbiAgICBwdWJsaWMgX3N0b3J5QmxvY2tzTGVuZ3RoO1xyXG4gICAgcHVibGljIF9zdWJzY3JpcHRpb246IGFueTtcclxuXHJcbiAgICBAT3V0cHV0KCkgc3RhcnREcmFnZ2luZzpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBlbmREcmFnZ2luZzpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGxvZ2dlcjpMb2dnZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX3N0b3J5QmxvY2tTZXJ2aWNlOlN0b3J5QmxvY2tTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgdXRpbHNTZXJ2aWNlOlV0aWxzU2VydmljZVxyXG4gICAgKSB7fVxyXG5cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IHN0b3J5QmxvY2soc3RvcnlCbG9jaykge1xyXG4gICAgICAgIHRoaXMuX3N0b3J5QmxvY2sgPSBzdG9yeUJsb2NrO1xyXG4gICAgfVxyXG4gICAgQElucHV0KClcclxuICAgIHNldCBzdG9yeUJsb2Nrc0xlbmd0aChzdG9yeUJsb2Nrc0xlbmd0aCl7XHJcbiAgICAgICAgdGhpcy5fc3RvcnlCbG9ja3NMZW5ndGggPSBzdG9yeUJsb2Nrc0xlbmd0aDtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja1R5cGVzID0gdGhpcy5fc3RvcnlCbG9ja1NlcnZpY2UuZ2V0U3RvcnlCbG9ja1R5cGVzKCk7XHJcbiAgICAgICAgdGhpcy5faW5kZXggPSB0aGlzLl9zdG9yeUJsb2NrU2VydmljZS5nZXRFeHBvc2VkSW5kZXgoKTtcclxuICAgICAgICB0aGlzLl9zdG9yeUJsb2NrID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLl9zdG9yeUJsb2NrU2VydmljZS5pbmRleENoYW5nZSQuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBpbmRleCA9PiB0aGlzLnNlbGVjdEluZGV4KGluZGV4KSk7XHJcbiAgICB9XHJcbiAgICBzZWxlY3RJbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5faW5kZXggPSBpbmRleDtcclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgZHJhZ1N0YXJ0KGUpe1xyXG4gICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltZy5zcmMgPSAgIFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDUUFBQUFrQ0FZQUFBRGhBSmlZQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQk8xSlJFRlVXQW5cIiArXHJcbiAgICAgICAgICAgIFwiTm1FRnNGRlVZeDc4M083UGFBcnBncUZLdEdLTWhHT0pKRW0xRlE4SWFwVVFrcGoyWWVQTm1qQWVqOGVEUmc5RjRJTWFiTnhNUGJSUXhnTVppaUdLckNSeU1VUWxxVEVBcENBcXJoaFozWnVmNVwiICtcclxuICAgICAgICAgICAgXCIvZDdzMjkzU2xwM0ZsdXlYN096YjJmZisvLzk4NzczdmZkOFk2ZEJ1M0dkWEJ4ZXJ3MVpNV1l6Y2JxM3ROOGIwQTZQdGFXMVBpNVdUUnV4RXVxSzQvNjhkNWtJbkZDWnY1OUpZc2t0cytwdzFzXCIgK1xyXG4gICAgICAgICAgICBcImtXWncxempqRW1NbGNOaWdyY3FvK0dlUEdQYUNscjlmanhrYS9aMWZmcEJBS09Dc1ErdE5XYjdyWUZzdU1ISXVoNGp0MXlmVVoyNUpISjYxc3J4djYwY09KWEtGK2Vzald2NkNHcnF1U2xUTUNcIiArXHJcbiAgICAgICAgICAgIFwiOWRlREthekhvdmZGMVUwTWlZTFV4SS9LWUtlWjZoZlQzR3ZueFB3WXlzRDJSVlB2L0lQNG5JK0lsVVh2dWhacy9PTm9UdExrdjB3dmlvcVMwa2FVRkJwVDIyWk9ONFRLZW1YRlNQdkxpeFlKN1wiICtcclxuICAgICAgICAgICAgXCJkRUVodklZUDR0bUpsdjNyZ3EzTldwdFVqZUFiRFUvM3FzUWZXR2hsV0Q5NWJ5dUJubFBydDQ2bThjYXhtcTNqTW1Ba1RSYU9WWGFhU2pXeGU1d2x5WXFyVktlMnlFYSs4TnhTYSs5WmszZmIrXCIgK1xyXG4gICAgICAgICAgICBcIlp1WFY3eEw1U2Fja2o5MnRVL3JLcGxCMjNwYU5QM3JleWxPVGlmZldNVk1zRGw0dWFvNGdwdWxUaVQvR001dEtnWXh0Q2ZXSlJVNWNGSG5tNjBTTy9Kbm0wVEd2eithYkFubm4vbERXcnhEMXFcIiArXHJcbiAgICAgICAgICAgIFwiTWpJNFVTK3J5aVdldW9SaVI1cm5iNmdkVFJyQmpGNHhvdVoxR25aZWpDK2FqSGc4eUJnZ01VRGp1dUR3Z0dYNDJ3UjBmQVF1eWxOMGk5Wk13ZTJadE1Fd0JPZkp4S24rYWFvQlhmQlpoUVkrZlwiICtcclxuICAgICAgICAgICAgXCJEaFVJWjBqVEY5Mnc4bGJrMEZZZkNnMzMwTkQ3RzFRV0VCczJhWXBxZW5sazRNMkR3WW1HRERBUmYzUFRkdEo0aWdSNXpCamV3bWpEVnovdCtsOFl3RHJGL0FCQnVEQzA2NFhlRFZleG03Um1BXCIgK1xyXG4gICAgICAgICAgICBcIjZFR2ZZMnV5bXExM0E0TFF6c09HQUMwN1h2NjdCY0RiSlRIdzJDcVR3eTg3SUVQUTJmeExuM3RydHlCZjduNUJ3NU5ISUJjODc5OFkyVHFVbXZWRmZZR2JpSGJyYVE0NER4QkQwOHNhWnhjanlcIiArXHJcbiAgICAgICAgICAgIFwiM0ljRExqamhSZ05hbUxJeUFKeE5HQkc0RSt2VDZGd1pMYnBQWTh2bUJQQmNubHVIbFZFeHdIZ09Tb3pqNEZxWjUvTGN5anNRNmdwM3VReW5Oc2JabE1mdTBLaUxyYm11NlJjaU1WWlRpRjluc1wiICtcclxuICAgICAgICAgICAgXCJ2YVZycDdMYzZNbEpMblN4cHdVNGtvZy9yOXZob3UrMmZqMjkvNjRaT1d1aitMRy9jVWFyWWN5ZmRCQ0l1RmNrczh2VGVqWnBEbWlKOHk4NU85eHV1Y3g3OXNta2xpbTdMUU9Ydlc3cGhBclYyXCIgK1xyXG4gICAgICAgICAgICBcIllweE0vdEgwN1dmWkIxWWxILytIam1yWDY5MXdMZVZ0UE45Y1FPYmd3dGdjdUI5UWVaSGtZK2M2M01jM2x1dEFRazVBZ2c3Y1JJcmpxeHFrYUpveHA1K1hUaW5WWXV6NDJXUUN1SGcveEpEb3lcIiArXHJcbiAgICAgICAgICAgIFwiUjZYVmlsYXJJdHM4UzkrbGtISDA5bCtlbVVnbHNiN1JQbDNkQ1FrNE9UTnBKV0Y5dWd3TXVPT0ZHQTJWVFFOMUVxVUoxUUVLT2tYWXV0M2tPT09GR0ExcXkrZEc2Q1FGVUIyeFpjbURTenVVeVwiICtcclxuICAgICAgICAgICAgXCJzT0dBQzA3SFU5ZmdXQ25pZElWUFVhcFFIV0Rrd0sxUjJOMWNnZ3VZWUdOd3dRbTNMeVFiYnFDSW94T2xDdWtseDhDN2c2R1FkaTZWZ1FVbTJIREFCYmJucHQwUVJFNnJTbmRUTjFHcVVCMlErXCIgK1xyXG4gICAgICAgICAgICBcIjVJREw0V253UEQ1Tk5od3dBV256NmZuQ09JSEZTV2xDVzZrVlBHaURtMkwvdGVhWXMyQXdRUDZNc2hWc3NybE9DR3YyN3o1NktwQzBhdnNxbExhaStxcWx3MWVGTjlkOHpxbVZSVHRybmxoZGJcIiArXHJcbiAgICAgICAgICAgIFwia3d5aVpYcVdURndRQnBwMjdkdWEvME5JUFZjUk9jazUyKzB2c1BPT1BsTG5WWTBsWUFBQUFBU1VWT1JLNUNZSUk9XCI7XHJcbiAgICAgICAgaW1nLnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcclxuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoaW1nLCAxOCwgMTgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZy5lbWl0KGUpO1xyXG4gICAgfVxyXG4gICAgZHJhZ0VuZChlKXtcclxuICAgICAgICB2YXIgaWNvbldpZHRoID0gMzY7XHJcbiAgICAgICAgdmFyIGFzaWRlV2lkdGggPSAyNDA7XHJcbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPj0gNzY4ICYmIGUueCA+IHdpbmRvdy5pbm5lcldpZHRoIC0gYXNpZGVXaWR0aCAtIGljb25XaWR0aCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbmREcmFnZ2luZy5lbWl0KGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRGVidWcoKXtcclxuICAgICAgICByZXR1cm4gKGxvY2F0aW9uLnNlYXJjaC5pbmRleE9mKCc/ZGVidWcnKT49MCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uL21vZGVscy91c2VyXCI7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgQ29udHJvbEdyb3VwLCBGT1JNX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcclxuaW1wb3J0IHtlbWFpbFZhbGlkYXRvciwgbWF0Y2hpbmdQYXNzd29yZHMsIGVtYWlsUmVnZXhwfSBmcm9tICcuLi9zZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UnO1xyXG5pbXBvcnQge1dlYlN0b3JhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvd2Vic3RvcmFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7TG9nZ2VyU2VydmljZSwgREVCVUdfTEVWRUx9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NpZ24taW4tZm9ybScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhib3ggZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5Db21lIGluLCBzdG9yeXRlbGxlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PjxhIGNsYXNzPVwiY2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoJGV2ZW50KVwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5YPC9pPjwvYT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJmb3JtXCIgKG5nU3VibWl0KT1cIm9uU2lnbkluKCRldmVudClcIiBub3ZhbGlkYXRlPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLmVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdPVwiZm9ybS5jb250cm9sc1snZW1haWwnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgI2VtYWlsPVwibmdGb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICAqbmdJZj1cIihlbWFpbC5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmICFlbWFpbC52YWxpZFwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICBFbWFpbCBpcyBpbnZhbGlkXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIucGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXCJcclxuICAgICAgICAgICAgICAgICAgICAjcGFzc3dvcmQ9XCJuZ0Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgICpuZ0lmPVwiKHBhc3N3b3JkLmRpcnR5IHx8IHN1Ym1pdHRlZCkgJiYgIXBhc3N3b3JkLnZhbGlkXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZSBwYXNzd29yZCBzaG91bGQgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmdcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIHByaW1hcnkgYmxvY2stYnV0dG9uXCI+U2lnbiBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2FwLWZvcm1cIj48YSAoY2xpY2spPVwic3dhcFRvU2lnblVwKClcIj5JIHdhbnQgdG8gY3JlYXRlIGEgbmV3IGFjY291bnQ8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZSwgV2ViU3RvcmFnZVNlcnZpY2VdLFxyXG4gICAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduSW5Db21wb25lbnQge1xyXG4gICAgdXNlcjpVc2VyID0gbmV3IFVzZXIoKTtcclxuICAgIGZvcm06Q29udHJvbEdyb3VwO1xyXG4gICAgc3VibWl0dGVkID0gZmFsc2U7XHJcblxyXG4gICAgQE91dHB1dCgpIGNsb3NlTW9kYWw6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgc3dhcFdpbmRvdzpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBub3RpZnk6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgYXV0aFN0YXR1czpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGxvZ2dlcjpMb2dnZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBidWlsZGVyOkZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgd2ViU3RvcmFnZVNlcnZpY2U6V2ViU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOkNvbmZpZ3VyYXRpb25cclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZvcm0gPSBidWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oZW1haWxSZWdleHApXSldLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3YXBUb1NpZ25VcCgpIHtcclxuICAgICAgICB0aGlzLnN3YXBXaW5kb3cuZW1pdChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaWduSW4oZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcikuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJTdG9yYWdlU2VydmljZS5wdXQodGhpcy5jb25maWd1cmF0aW9uLnRva2VuLm5hbWUsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLldBUk4sICdvblNpZ25JbicsICdTZXJ2ZXIgZXJyb3InLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdvblNpZ25JbicsICdsb2dnZWQgaW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTdGF0dXMuZW1pdCgnTG9naW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCcnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uL21vZGVscy91c2VyXCI7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgQ29udHJvbEdyb3VwLCBGT1JNX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcclxuaW1wb3J0IHtlbWFpbFZhbGlkYXRvciwgbWF0Y2hpbmdQYXNzd29yZHMsIGVtYWlsUmVnZXhwfSBmcm9tICcuLi9zZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UnO1xyXG5pbXBvcnQge1dlYlN0b3JhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvd2Vic3RvcmFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7TG9nZ2VyU2VydmljZSwgREVCVUdfTEVWRUx9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NpZ24tdXAtZm9ybScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhib3ggZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5CZWNvbWUgYSBzdG9yeXRlbGxlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PjxhIGNsYXNzPVwiY2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoJGV2ZW50KVwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5YPC9pPjwvYT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJmb3JtXCIgKG5nU3VibWl0KT1cIm9uU2lnblVwKCRldmVudClcIiBub3ZhbGlkYXRlPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdPVwiZm9ybS5jb250cm9sc1snbmFtZSddXCJcclxuICAgICAgICAgICAgICAgICAgICAjbmFtZT1cIm5nRm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgICpuZ0lmPVwiKG5hbWUuZGlydHkgfHwgc3VibWl0dGVkKSAmJiAhbmFtZS52YWxpZFwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICBZb3VyIG5hbWUgaXMgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLmVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdPVwiZm9ybS5jb250cm9sc1snZW1haWwnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgI2VtYWlsPVwibmdGb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICAqbmdJZj1cIihlbWFpbC5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmICFlbWFpbC52YWxpZFwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICBFbWFpbCBpcyBpbnZhbGlkXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIucGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXCJcclxuICAgICAgICAgICAgICAgICAgICAjcGFzc3dvcmQ9XCJuZ0Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgICpuZ0lmPVwiKHBhc3N3b3JkLmRpcnR5IHx8IHN1Ym1pdHRlZCkgJiYgIXBhc3N3b3JkLnZhbGlkXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZSBwYXNzd29yZCBzaG91bGQgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmdcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlci5jb25maXJtUGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgI2NvbmZpcm1QYXNzd29yZD1cIm5nRm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbmZpcm0tcGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiKGNvbmZpcm1QYXNzd29yZC5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmIGZvcm0uaGFzRXJyb3IoJ21pc21hdGNoZWRQYXNzd29yZHMnKVwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgcGFzc3dvcmRzIGRvbid0IG1hdGNoXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ1dHRvbiBwcmltYXJ5IGJsb2NrLWJ1dHRvblwiPlNpZ24gdXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dhcC1mb3JtXCI+PGEgKGNsaWNrKT1cInN3YXBUb1NpZ25JbigpXCI+SSBhbHJlYWR5IGhhdmUgYW4gYWNjb3VudDwvYT48L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlLCBXZWJTdG9yYWdlU2VydmljZV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25VcENvbXBvbmVudCB7XHJcbiAgICB1c2VyOlVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgZm9ybTpDb250cm9sR3JvdXA7XHJcbiAgICBzdWJtaXR0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBAT3V0cHV0KCkgY2xvc2VNb2RhbDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBzd2FwV2luZG93OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIG5vdGlmeTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBhdXRoU3RhdHVzOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbG9nZ2VyOkxvZ2dlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGJ1aWxkZXI6Rm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSB3ZWJTdG9yYWdlU2VydmljZTpXZWJTdG9yYWdlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvblxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZm9ybSA9IGJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBuYW1lOlsnJ10sXHJcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKGVtYWlsUmVnZXhwKV0pXSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0pXSxcclxuICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgIH0sIHt2YWxpZGF0b3I6IG1hdGNoaW5nUGFzc3dvcmRzKCdwYXNzd29yZCcsICdjb25maXJtUGFzc3dvcmQnKX0pXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmNsb3NlTW9kYWwuZW1pdChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dhcFRvU2lnbkluKCkge1xyXG4gICAgICAgIHRoaXMuc3dhcFdpbmRvdy5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNpZ25VcChldmVudCkge1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmZvcm0udmFsdWUpKTtcclxuICAgICAgICBpZiAodGhpcy5mb3JtLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYlN0b3JhZ2VTZXJ2aWNlLnB1dCh0aGlzLmNvbmZpZ3VyYXRpb24udG9rZW4ubmFtZSwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuV0FSTiwgJ29uU2lnblVwJywnU2VydmVyIGVycm9yJywgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBlbWFpbCBpcyBhbHJlYWR5IHRha2VuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ29uU2lnblVwJywgJ3JlZ2lzdGVyZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTdGF0dXMuZW1pdCgnTG9naW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCcnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7U2lnbkluQ29tcG9uZW50fSBmcm9tIFwiLi9zaWduaW4tZm9ybS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTaWduVXBDb21wb25lbnR9IGZyb20gXCIuL3NpZ251cC1mb3JtLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2F1dGgtZm9ybScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxzaWduLWluLWZvcm0gXHJcbiAgICAgICAgICAgICpuZ0lmPVwibG9naW5cIiBcclxuICAgICAgICAgICAgKGNsb3NlTW9kYWwpPVwiaGlkZUFjY2Vzc0Zvcm0oKVwiXHJcbiAgICAgICAgICAgIChzd2FwV2luZG93KT1cImxvZ2luPSFsb2dpblwiXHJcbiAgICAgICAgICAgIChhdXRoU3RhdHVzKT1cImF1dGhTdGF0dXNDaGFuZ2VkKCRldmVudClcIlxyXG4gICAgICAgICAgICAobm90aWZ5KT1cIm5vdGlmeU1lc3NhZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgID48L3NpZ24taW4tZm9ybT5cclxuICAgICAgICA8c2lnbi11cC1mb3JtIFxyXG4gICAgICAgICAgICAqbmdJZj1cIiFsb2dpblwiIFxyXG4gICAgICAgICAgICAoY2xvc2VNb2RhbCk9XCJoaWRlQWNjZXNzRm9ybSgpXCJcclxuICAgICAgICAgICAgKHN3YXBXaW5kb3cpPVwibG9naW49IWxvZ2luXCJcclxuICAgICAgICAgICAgKGF1dGhTdGF0dXMpPVwiYXV0aFN0YXR1c0NoYW5nZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChub3RpZnkpPVwibm90aWZ5TWVzc2FnZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvc2lnbi11cC1mb3JtPlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczogW10sXHJcbiAgICBkaXJlY3RpdmVzOiBbU2lnbkluQ29tcG9uZW50LCBTaWduVXBDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aEZvcm1Db21wb25lbnQge1xyXG4gICAgQE91dHB1dCgpIGNsb3NlTW9kYWw6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgbm90aWZ5OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIGF1dGhTdGF0dXM6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIHB1YmxpYyBsb2dpbj1mYWxzZTtcclxuXHJcbiAgICBoaWRlQWNjZXNzRm9ybShldmVudCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbC5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbm90aWZ5TWVzc2FnZShldmVudCl7XHJcbiAgICAgICAgdGhpcy5ub3RpZnkuZW1pdChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXV0aFN0YXR1c0NoYW5nZWQoZXZlbnQpe1xyXG4gICAgICAgIHRoaXMuYXV0aFN0YXR1cy5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TmdDbGFzc30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuaW1wb3J0IHtTdG9yeUJsb2NrU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0b3J5YmxvY2tzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTdG9yeUJsb2NrfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2tcIjtcclxuaW1wb3J0IHtTdG9yeUJsb2NrQ29tcG9uZW50fSBmcm9tIFwiLi9zdG9yeWJsb2NrLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1RpbWVsaW5lQ29tcG9uZW50fSBmcm9tIFwiLi90aW1lbGluZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtBZGRCdXR0b25Db21wb25lbnR9IGZyb20gXCIuL2FkZC1idXR0b24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Tm90aWZpY2F0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9ub3RpZmljYXRpb24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2lkZWJhckNvbXBvbmVudH0gZnJvbSBcIi4vc2lkZWJhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHtTdG9yeUJsb2NrVHlwZX0gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrLXR5cGVcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQge1dlYlN0b3JhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvd2Vic3RvcmFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QXV0aEZvcm1Db21wb25lbnR9IGZyb20gXCIuL2F1dGgtZm9ybS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlLCBERUJVR19MRVZFTH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jb250ZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDx0aW1lbGluZSBjbGFzcz1cInRpbWVsaW5lLWJsb2NrXCI+PC90aW1lbGluZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0b3J5LWJsb2Nrc1wiPlxyXG4gICAgICAgICAgICAgICAgPHN0b3J5YmxvY2sgKm5nRm9yPVwiI3N0b3J5QmxvY2sgb2Ygc3RvcnlCbG9ja3M7ICNpID0gaW5kZXhcIiBcclxuICAgICAgICAgICAgICAgICAgICBbaW5kZXhdPVwiaVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIFtzdG9yeUJsb2NrSW5mb109XCJzdG9yeUJsb2NrXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW3pvb21MZXZlbF09XCJ6b29tTGV2ZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIFt1c2VySWRdPVwidXNlcklkXCJcclxuICAgICAgICAgICAgICAgICAgICBbZXhwb3NlZEluZGV4XT1cImV4cG9zZWRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie2V4cG9zZWQ6IGV4cG9zZWRJbmRleCA9PSBpfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKHJlbW92ZVN0b3J5QmxvY2tFdmVudCk9XCJyZW1vdmVTdG9yeUJsb2NrKCRldmVudClcIiBcclxuICAgICAgICAgICAgICAgICAgICAoZXhwb3NlRXZlbnQpPVwic2V0RXhwb3NlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAobm90aWZ5KT1cIm5vdGlmeSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0b3J5LWJsb2NrIHt7IHN0b3J5QmxvY2sudHlwZcKgfX1cIj48L3N0b3J5YmxvY2s+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZFN0b3J5QmxvY2soJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJvbk1vdXNlRW50ZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJvbk1vdXNlTGVhdmUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAobW91c2Vtb3ZlKT1cIm9uTW91c2VNb3ZlKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgIDxhZGQtYnV0dG9uICpuZ0lmPVwiYWRkQnV0dG9uLnZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtvZmZzZXRZXT1cImFkZEJ1dHRvbi50b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhZGRTdG9yeUJsb2NrKCRldmVudClcIj48L2FkZC1idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29udHJvbHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ6b29tLWNvbnRyb2xzXCI+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT1cIlpvb20gaW5cIiAoY2xpY2spPVwiem9vbUluKClcIj4rPC9hPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9XCJab29tIG91dFwiIChjbGljayk9XCJ6b29tT3V0KClcIj4mbmRhc2g7PC9hPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPGFzaWRlIFtuZ0NsYXNzXT1cInt2aXNpYmxlOiBtZW51VmlzaWJsZX1cIj5cclxuICAgICAgICAgICAgPHNpZGViYXJcclxuICAgICAgICAgICAgKHN0YXJ0RHJhZ2dpbmcpPVwidG9nZ2xlTWVudShmYWxzZSlcIlxyXG4gICAgICAgICAgICAoZW5kRHJhZ2dpbmcpPVwiYWRkU3RvcnlCbG9jaygkZXZlbnQpXCJcclxuICAgICAgICAgICAgW3N0b3J5QmxvY2tdPVwiZXhwb3NlZFN0b3J5QmxvY2tcIiBbc3RvcnlCbG9ja3NMZW5ndGhdPVwic3RvcnlCbG9ja3MubGVuZ3RoXCI+PC9zaWRlYmFyPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cInVzZXItYXNpZGVcIiAoY2xpY2spPVwiZG93bmxvYWRQZGYoKVwiPkRvd25sb2FkIFBERjwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJ1c2VyLWFzaWRlXCIgKm5nSWY9XCIhaXNMb2dnZWRJbigpXCIgKGNsaWNrKT1cInNob3dBY2Nlc3NGb3JtKClcIj5Mb2dpbi9TaWdudXA8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwidXNlci1hc2lkZVwiICpuZ0lmPVwiaXNMb2dnZWRJbigpXCIgKGNsaWNrKT1cImxvZ091dCgpXCI+TG9nb3V0PC9hPlxyXG4gICAgICAgICAgICA8YSBpZD1cImNsb3NlLW1lbnVcIiAoY2xpY2spPVwidG9nZ2xlTWVudShmYWxzZSlcIj48L2E+XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICA8aGVhZGVyPjxhIGlkPVwiYnVyZ2VyXCIgKGNsaWNrKT1cInRvZ2dsZU1lbnUodHJ1ZSlcIj48aSBjbGFzcz1cImZhIGZhLWJhcnNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9hPjwvaGVhZGVyPlxyXG4gICAgICAgIDxhdXRoLWZvcm0gXHJcbiAgICAgICAgICAgICpuZ0lmPVwiYWNjZXNzRm9ybVZpc2libGVcIiBcclxuICAgICAgICAgICAgKGNsb3NlTW9kYWwpPVwiaGlkZUFjY2Vzc0Zvcm0oKVwiXHJcbiAgICAgICAgICAgIChub3RpZnkpPVwibm90aWZ5KCRldmVudClcIlxyXG4gICAgICAgICAgICAoYXV0aFN0YXR1cyk9XCJhdXRoU3RhdHVzQ2hhbmdlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgIDwvYXV0aC1mb3JtPlxyXG4gICAgICAgIDxub3RpZmljYXRpb24gW25nQ2xhc3NdPVwie2Vycm9yOiBub3RpZmljYXRpb24udHlwZSA9PSAnZXJyb3InLCBzdWNjZXNzOiBub3RpZmljYXRpb24udHlwZSA9PSAnc3VjY2Vzcyd9XCI+PC9ub3RpZmljYXRpb24+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOiBbU3RvcnlCbG9ja1NlcnZpY2UsIENvbmZpZ3VyYXRpb24sIEF1dGhTZXJ2aWNlLCBXZWJTdG9yYWdlU2VydmljZSwgTG9nZ2VyU2VydmljZV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbU3RvcnlCbG9ja0NvbXBvbmVudCwgVGltZWxpbmVDb21wb25lbnQsIEFkZEJ1dHRvbkNvbXBvbmVudCwgTm90aWZpY2F0aW9uQ29tcG9uZW50LCBTaWRlYmFyQ29tcG9uZW50LCBBdXRoRm9ybUNvbXBvbmVudCwgTmdDbGFzc11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQFZpZXdDaGlsZChOb3RpZmljYXRpb25Db21wb25lbnQpIG5vdGlmaWNhdGlvbkNvbXBvbmVudDpOb3RpZmljYXRpb25Db21wb25lbnQ7XHJcbiAgICBwdWJsaWMgc3RvcnlCbG9ja3M6U3RvcnlCbG9ja1tdO1xyXG4gICAgcHVibGljIHN0b3J5QmxvY2tUeXBlczpTdG9yeUJsb2NrVHlwZVtdO1xyXG4gICAgcHVibGljIHN0b3J5QmxvY2tEZWZhdWx0VHlwZXM6U3RvcnlCbG9ja1R5cGVbXTtcclxuICAgIHByaXZhdGUgdXNlcklkO1xyXG4gICAgcHVibGljIHpvb21MZXZlbDtcclxuICAgIHB1YmxpYyBleHBvc2VkSW5kZXg7XHJcbiAgICBwdWJsaWMgZXhwb3NlZFN0b3J5QmxvY2s7XHJcbiAgICBwdWJsaWMgYWRkQnV0dG9uO1xyXG4gICAgcHVibGljIHRva2VuOnN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIG1lbnVWaXNpYmxlO1xyXG4gICAgcHVibGljIGFjY2Vzc0Zvcm1WaXNpYmxlO1xyXG4gICAgcHJpdmF0ZSBtYXhJbmRleCA9IDA7XHJcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGxvZ2dlcjpMb2dnZXJTZXJ2aWNlLCBcclxuICAgICAgICBwcml2YXRlIHN0b3J5QmxvY2tTZXJ2aWNlOlN0b3J5QmxvY2tTZXJ2aWNlLCBcclxuICAgICAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbixcclxuICAgICAgICBwcml2YXRlIHdlYlN0b3JhZ2VTZXJ2aWNlOldlYlN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOmFueSB7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrcyA9IFtdO1xyXG4gICAgICAgIHRoaXMudXNlcklkID0gdGhpcy5hdXRoVXNlcigpO1xyXG4gICAgICAgIHRoaXMuZ2V0U3RvcnlCbG9ja1R5cGVzKCk7XHJcbiAgICAgICAgdGhpcy5nZXRTdG9yeUJsb2Nrcyh0aGlzLnVzZXJJZCk7XHJcbiAgICAgICAgdGhpcy56b29tTGV2ZWwgPSA0O1xyXG4gICAgICAgIHRoaXMuZXhwb3NlZEluZGV4ID0gLTE7XHJcbiAgICAgICAgdGhpcy5leHBvc2VkU3RvcnlCbG9jayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hZGRCdXR0b24gPSB7XHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3A6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubWVudVZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFjY2Vzc0Zvcm1WaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24gPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgYXV0aFVzZXIoKXtcclxuICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0SWRGcm9tVG9rZW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgYW5vbnltb3VzVG9rZW4gPSB0aGlzLndlYlN0b3JhZ2VTZXJ2aWNlLmdldCgnYW5vbnltb3VzX3Rva2VuJyk7XHJcbiAgICAgICAgICAgIGlmICghYW5vbnltb3VzVG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIHZhciBhbm9ueW1vdXNUb2tlbiA9IHRoaXMuYXV0aFNlcnZpY2UuZ2VuZXJhdGVBbm9ueW1vdXNUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJTdG9yYWdlU2VydmljZS5wdXQoJ2Fub255bW91c190b2tlbicsIGFub255bW91c1Rva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRJZEZyb21Bbm9ueW1vdXNUb2tlbihhbm9ueW1vdXNUb2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFRva2VuKHZhbHVlOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy53ZWJTdG9yYWdlU2VydmljZS5wdXQoJ3Rva2VuJyx2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9rZW4oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy53ZWJTdG9yYWdlU2VydmljZS5nZXQoJ3Rva2VuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXV0aFN0YXR1c0NoYW5nZWQoKXtcclxuICAgICAgICB0aGlzLnJlZnJlc2hCbG9ja0xpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoQmxvY2tMaXN0KCl7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSB0aGlzLmF1dGhVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5nZXRTdG9yeUJsb2Nrcyh0aGlzLnVzZXJJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RvcnlCbG9ja1R5cGVzKCkge1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja1R5cGVzID0gdGhpcy5zdG9yeUJsb2NrU2VydmljZS5nZXRTdG9yeUJsb2NrVHlwZXMoKTtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tEZWZhdWx0VHlwZXMgPSB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdldFN0b3J5QmxvY2tEZWZhdWx0VHlwZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdG9yeUJsb2NrcyhpZCkge1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja1NlcnZpY2UuZ2V0U3RvcnlCbG9ja3MoaWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF4SW5kZXggPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0b3J5QmxvY2tzW2ldLnR5cGUgPT09ICdjaGFwdGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1heEluZGV4ID0gTWF0aC5tYXgodGhpcy5tYXhJbmRleCwgdGhpcy5zdG9yeUJsb2Nrc1tpXS5ibG9ja0lkIHx8IDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnN0b3J5QmxvY2tzIHx8IHRoaXMuc3RvcnlCbG9ja3MubGVuZ3RoPT0wKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ2dldFN0b3J5QmxvY2tzJywgJ05vIGJsb2NrcyByZWNlaXZlZCEnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdlbmVyYXRlVGVzdERhdGEodGhpcy51c2VySWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZURlZmF1bHRCbG9ja3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2NrcyA9IHNhdmVEZWZhdWx0QmxvY2tzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZVN0b3J5QmxvY2tOdW1iZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVyciksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnZ2V0U3RvcnlCbG9ja3MnLCAnTG9hZGVkICcgKyB0aGlzLnN0b3J5QmxvY2tzLmxlbmd0aCArICcgYmxvY2tzJywgdGhpcy5zdG9yeUJsb2NrcylcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2FsY3VsYXRlU3RvcnlCbG9ja051bWJlcnMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVyciksXHJcbiAgICAgICAgICAgICgpID0+IHRoaXMubG9nZ2VyLmxvZyhERUJVR19MRVZFTC5JTkZPLCAnZ2V0U3RvcnlCbG9ja3MnLCAnTG9hZGVkICcgKyB0aGlzLnN0b3J5QmxvY2tzLmxlbmd0aCArICcgYmxvY2tzJywgdGhpcy5zdG9yeUJsb2NrcylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVN0b3J5QmxvY2soaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZVN0b3J5QmxvY2tOdW1iZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0FjY2Vzc0Zvcm0oKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVNZW51KGZhbHNlKTtcclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywgJ3Nob3dBY2Nlc3NGb3JtJywgdGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCkpO1xyXG4gICAgICAgIHRoaXMuYWNjZXNzRm9ybVZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCduby1zY3JvbGwnKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlQWNjZXNzRm9ybSgpIHtcclxuICAgICAgICB0aGlzLmFjY2Vzc0Zvcm1WaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY2FsY3VsYXRlU3RvcnlCbG9ja051bWJlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdyZWNhbGN1bGF0ZVN0b3J5QmxvY2tOdW1iZXJzJywgJ1NvcnRpbmcgYmxvY2tzOiBiZWZvcmUnLHRoaXMuc3RvcnlCbG9ja3MpO1xyXG4gICAgICAgIHZhciBjdXJyZW50VHlwZXMgPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RvcnlCbG9ja1R5cGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUeXBlc1t0aGlzLnN0b3J5QmxvY2tUeXBlc1tpXS5pZF0gPSB0aGlzLnN0b3J5QmxvY2tUeXBlc1tpXTtcclxuICAgICAgICAgICAgY3VycmVudFR5cGVzW3RoaXMuc3RvcnlCbG9ja1R5cGVzW2ldLmlkXS5pbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RvcnlCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRUeXBlID0gdGhpcy5zdG9yeUJsb2Nrc1tpXS50eXBlIHx8IHRoaXMuc3RvcnlCbG9ja0RlZmF1bHRUeXBlc1swXS5pZDtcclxuICAgICAgICAgICAgY3VycmVudFR5cGVzW2N1cnJlbnRUeXBlXSA9IGN1cnJlbnRUeXBlc1tjdXJyZW50VHlwZV0gfHwgdGhpcy5zdG9yeUJsb2NrRGVmYXVsdFR5cGVzWzBdO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tzW2ldLmJsb2NrTnVtYmVyID0gY3VycmVudFR5cGVzW2N1cnJlbnRUeXBlXS5pbmRleCB8fCAwO1xyXG5cclxuICAgICAgICAgICAgY3VycmVudFR5cGVzW2N1cnJlbnRUeXBlXS5pbmRleCsrO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuc3RvcnlCbG9ja1R5cGVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdG9yeUJsb2NrVHlwZXNbal0ubGV2ZWwgPiBjdXJyZW50VHlwZXNbY3VycmVudFR5cGVdLmxldmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFR5cGVzW3RoaXMuc3RvcnlCbG9ja1R5cGVzW2pdLmlkXS5pbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdyZWNhbGN1bGF0ZVN0b3J5QmxvY2tOdW1iZXJzJywgJ1NvcnRpbmcgYmxvY2tzOiBhZnRlcicsdGhpcy5zdG9yeUJsb2Nrcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nT3V0KCl7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hCbG9ja0xpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0xvZ2dlZEluKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHpvb21JbigpIHtcclxuICAgICAgICBpZiAodGhpcy56b29tTGV2ZWwgPCAxMCkge1xyXG4gICAgICAgICAgICB0aGlzLnpvb21MZXZlbCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOidtZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6J01heCB6b29tIHJlYWNoZWQnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB6b29tT3V0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnpvb21MZXZlbCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy56b29tTGV2ZWwtLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnkoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTonbWVzc2FnZScsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOidNaW5pbXVtIHpvb20gcmVhY2hlZCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VFbnRlcihldmVudCkge1xyXG4gICAgICAgIHRoaXMuYWRkQnV0dG9uID0ge1xyXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB0b3A6IGV2ZW50LnlcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VMZWF2ZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuYWRkQnV0dG9uID0ge1xyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgdG9wOiAwXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlTW92ZShldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkZEJ1dHRvbi52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQnV0dG9uLnRvcCA9IGV2ZW50Lnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFN0b3J5QmxvY2soZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmFkZEJ1dHRvbiA9IHtcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvcDogMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciB6b29tQ29udmVyc2lvbkZhY3RvciA9IHRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0ZXAgKyBNYXRoLmV4cCh0aGlzLnpvb21MZXZlbCAqIHRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0cmVuZ3RoKTtcclxuXHJcbiAgICAgICAgdmFyIHBvc2l0aW9uQXRab29tID0gKChldmVudC5wYWdlWSAtIHRoaXMuY29uZmlndXJhdGlvbi56b29tLm9mZnNldCkgLyB6b29tQ29udmVyc2lvbkZhY3Rvcik7XHJcblxyXG4gICAgICAgIHZhciBuZXdTdG9yeUJsb2NrOlN0b3J5QmxvY2sgPSA8U3RvcnlCbG9jaz4ge1xyXG4gICAgICAgICAgICBibG9ja0lkOiB0aGlzLm1heEluZGV4ICsgMSxcclxuICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgICAgIHRpbWVQb3NpdGlvbjogcG9zaXRpb25BdFpvb20sXHJcbiAgICAgICAgICAgIGltcG9ydGFuY2U6IDMsXHJcbiAgICAgICAgICAgIHR5cGU6ICdjaGFwdGVyJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubWF4SW5kZXgrKztcclxuXHJcbiAgICAgICAgdmFyIHRtcEFycmF5UG9zID0gMDtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0b3J5QmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0b3J5QmxvY2tzW2ldLnRpbWVQb3NpdGlvbiA+IHBvc2l0aW9uQXRab29tKSB7XHJcbiAgICAgICAgICAgICAgICB0bXBBcnJheVBvcyA9IGk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2Nrcy5zcGxpY2UodG1wQXJyYXlQb3MsIDAsIG5ld1N0b3J5QmxvY2spO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coREVCVUdfTEVWRUwuSU5GTywnYWRkU3RvcnlCbG9jaycsICdBZGRpbmcgYmxvY2sgaW5kZXggJyArIHRtcEFycmF5UG9zKTtcclxuICAgICAgICB0aGlzLnNldEV4cG9zZWQodG1wQXJyYXlQb3MpO1xyXG5cclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFeHBvc2VkKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKERFQlVHX0xFVkVMLklORk8sICdzZXRFeHBvc2VkJywgJ1NldHRpbmcgYmxvY2sgJytpbmRleCsnIGV4cG9zZWQnKTtcclxuICAgICAgICB0aGlzLnJlY2FsY3VsYXRlU3RvcnlCbG9ja051bWJlcnMoKTtcclxuICAgICAgICB0aGlzLmV4cG9zZWRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuZXhwb3NlZFN0b3J5QmxvY2sgPSBpbmRleCA+PSAwID8gdGhpcy5zdG9yeUJsb2Nrc1tpbmRleF0gOiBudWxsO1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja1NlcnZpY2UuY2hhbmdlRXhwb3NlZEluZGV4KGluZGV4KTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnbm8tc2Nyb2xsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZSgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RvcnlCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5zYXZlU3RvcnlCbG9jayh0aGlzLnVzZXJJZCwgdGhpcy5zdG9yeUJsb2Nrc1tpXSkuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeShub3RpZmljYXRpb24pe1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uID0ge1xyXG4gICAgICAgICAgICB0eXBlOiBub3RpZmljYXRpb24udHlwZSB8fCBudWxsLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBub3RpZmljYXRpb24ubWVzc2FnZSB8fCAnJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uQ29tcG9uZW50LnNob3cobm90aWZpY2F0aW9uLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvd25sb2FkUGRmKCl7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5kb3dubG9hZFBkZih0aGlzLnN0b3J5QmxvY2tzKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVNZW51KHZpc2liaWxpdHkpe1xyXG4gICAgICAgIHRoaXMubWVudVZpc2libGUgPSB2aXNpYmlsaXR5O1xyXG4gICAgICAgIGlmKHZpc2liaWxpdHkpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cclxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xyXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9hcHAtY29udGVudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMgfSAgICBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQge0V4Y2VwdGlvbkhhbmRsZXIsIHByb3ZpZGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7TG9nZ2VyU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2VcIjtcclxuXHJcbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtIVFRQX1BST1ZJREVSUywgQ29uZmlndXJhdGlvbiwgcHJvdmlkZShFeGNlcHRpb25IYW5kbGVyLCAge3VzZUNsYXNzOiBMb2dnZXJTZXJ2aWNlfSldKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
