var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
System.register("config/configuration", ["angular2/core"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_1;
    var Configuration;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                    this.apiBasePath = 'https://aa2016-chronostories.herokuapp.com';
                }
                Configuration = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Configuration);
                return Configuration;
            }());
            exports_5("Configuration", Configuration);
        }
    }
});
System.register("services/storyblocks.service", ["angular2/core", 'angular2/http', 'rxjs/Rx', "rxjs/Observable", 'rxjs/add/operator/share', "mock/mock-storyblocks", "mock/mock-storyblock-types", "config/configuration"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_2, http_1, Observable_1, mock_storyblocks_1, mock_storyblock_types_1, configuration_1;
    var StoryBlockService;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_2) {},
            function (mock_storyblocks_1_1) {
                mock_storyblocks_1 = mock_storyblocks_1_1;
            },
            function (mock_storyblock_types_1_1) {
                mock_storyblock_types_1 = mock_storyblock_types_1_1;
            },
            function (configuration_1_1) {
                configuration_1 = configuration_1_1;
            }],
        execute: function() {
            StoryBlockService = (function () {
                function StoryBlockService(http, configuration) {
                    var _this = this;
                    this.http = http;
                    this.configuration = configuration;
                    this._exposedIndex = -1;
                    this.indexChange$ = new Observable_1.Observable(function (observer) {
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
                        .map(function (res) { return res.json(); });
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
                            .map(function (res) { return res.json(); });
                    }
                    else {
                        storyBlock.createdAt = (new Date());
                        storyBlock.lastModifiedAt = (new Date());
                        return this.http.post(this.configuration.apiBasePath + '/storyblocks/' + userId + '/', "data=" + JSON.stringify(storyBlock), options)
                            .map(function (res) { return res.json(); });
                    }
                };
                StoryBlockService.prototype.deleteStoryBlock = function (userId, storyBlock) {
                    if (!!storyBlock._id) {
                        return this.http.delete(this.configuration.apiBasePath + '/storyblocks/' + userId + '/' + storyBlock._id)
                            .map(function (res) { return res.json(); });
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
                    console.log('Creating temporary data for ' + userId);
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
                    return this.http.post(this.configuration.apiBasePath + '/storyblocks/' + userId + '/', "data=" + JSON.stringify(blocks), options).map(function (res) { return res.json(); });
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
                    core_2.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, configuration_1.Configuration])
                ], StoryBlockService);
                return StoryBlockService;
            }());
            exports_6("StoryBlockService", StoryBlockService);
        }
    }
});
System.register("services/utils.service", ["angular2/core"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_3;
    var UtilsService;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
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
                    core_3.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UtilsService);
                return UtilsService;
            }());
            exports_7("UtilsService", UtilsService);
        }
    }
});
System.register("components/storyblock.component", ["angular2/core", "services/utils.service", "angular2/src/animate/animation_builder", "services/storyblocks.service", "config/configuration"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_4, utils_service_1, animation_builder_1, storyblocks_service_1, configuration_2;
    var StoryBlockComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
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
            function (configuration_2_1) {
                configuration_2 = configuration_2_1;
            }],
        execute: function() {
            StoryBlockComponent = (function () {
                function StoryBlockComponent(_ab, _e, utilsService, storyBlockService, configuration) {
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
                    this.zoomEvent = new core_4.EventEmitter();
                    this.exposeEvent = new core_4.EventEmitter();
                    this.removeStoryBlockEvent = new core_4.EventEmitter();
                    this.notify = new core_4.EventEmitter();
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
                    // console.log('[StoryBlock #' + this.index + '] Zoom changed from ' + this._previousZoomLevel + ' to ' + this._zoomLevel);
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
                    // console.log('[StoryBlock #' + this.index + '] Fading in...');
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
                        // console.log('[StoryBlock #' + this.index + '] Fading out...[' + this._zoomLevel + '<' + this.storyBlockInfo.importance + ']');
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
                            console.log('[StoryBlock #' + _self.index + '] Animation removed');
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
                    // console.log('[StoryBlock #' + this.index + '] Changing position from ' + (fromStyle.top) + ' to ' + (toStyle.top) + ' ...');
                    if (_self._zoomLevel > _self.storyBlockInfo.importance) {
                        // console.log('[StoryBlock #' + this.index + '] ...and fading in [' + this._zoomLevel + '>' + this.storyBlockInfo.importance + ']');
                        toStyle['opacity'] = 1;
                    }
                    else {
                        // console.log('[StoryBlock #' + this.index + '] ...and fading out');
                        toStyle['opacity'] = 0;
                    }
                    toStyle['transition-timing-function'] = 'cubic-bezier(0.575, 0.255, 0.440, 0.985);';
                    animation
                        .setDuration(speed)
                        .setFromStyles(fromStyle)
                        .setToStyles(toStyle);
                    if (!!_self._actionTimeout) {
                        // console.log('[StoryBlock #' + this.index + '] Animation removed');
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
                    console.log('Saving temporary data ', this.storyBlockInfo);
                    this.storyBlockLocalSave = JSON.parse(JSON.stringify(this.storyBlockInfo));
                    this.exposeEvent.emit(index);
                    this.focus();
                };
                StoryBlockComponent.prototype.remove = function (index, event) {
                    var _this = this;
                    this.storyBlockService.deleteStoryBlock(this.userId, this.storyBlockInfo).subscribe(function (data) {
                        console.log(data);
                    }, function (error) {
                        console.log('Error while removing', _this.storyBlockInfo, error);
                        _this.notify.emit({
                            type: 'error',
                            message: 'Error. Please try again.'
                        });
                    }, function () {
                        console.log('Removing block index ' + _this.index);
                        _this.notify.emit({
                            type: 'success',
                            message: 'Removed successfully.'
                        });
                        _this.removeStoryBlockEvent.emit(_this.index);
                    });
                };
                StoryBlockComponent.prototype.save = function (index, event) {
                    var _this = this;
                    if (!(this.storyBlockInfo.title == '' && this.storyBlockInfo.description == '')) {
                        this.storyBlockService.saveStoryBlock(this.userId, this.storyBlockInfo).subscribe(function (data) {
                            _this.storyBlockInfo = data;
                            console.log('Saving temporary data ', data, _this.storyBlockInfo);
                            _this.storyBlockLocalSave = JSON.parse(JSON.stringify(_this.storyBlockInfo));
                        }, function (error) {
                            console.log('Error while saving', _this.storyBlockInfo, error);
                            _this.notify.emit({
                                type: 'error',
                                message: 'Error. Please try again.'
                            });
                        }, function () {
                            console.log('Saved ', _this.storyBlockInfo);
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
                        console.log('Removing block index ' + this.index);
                        this.removeStoryBlockEvent.emit(this.index);
                    }
                };
                __decorate([
                    core_4.Output(), 
                    __metadata('design:type', core_4.EventEmitter)
                ], StoryBlockComponent.prototype, "zoomEvent", void 0);
                __decorate([
                    core_4.Output(), 
                    __metadata('design:type', core_4.EventEmitter)
                ], StoryBlockComponent.prototype, "exposeEvent", void 0);
                __decorate([
                    core_4.Output(), 
                    __metadata('design:type', core_4.EventEmitter)
                ], StoryBlockComponent.prototype, "removeStoryBlockEvent", void 0);
                __decorate([
                    core_4.Output(), 
                    __metadata('design:type', core_4.EventEmitter)
                ], StoryBlockComponent.prototype, "notify", void 0);
                __decorate([
                    core_4.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], StoryBlockComponent.prototype, "zoomLevel", null);
                __decorate([
                    core_4.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], StoryBlockComponent.prototype, "exposedIndex", null);
                StoryBlockComponent = __decorate([
                    core_4.Component({
                        selector: 'storyblock',
                        template: "\n        <div class=\"index\"><span *ngIf=\"storyBlockInfo.type == 'chapter'\">{{utilsService.getRomanNumeral(storyBlockInfo.blockNumber + 1)}}</span></div>\n        <div class=\"text-container\">\n            <input class=\"title\" [attr.readonly]=\"_exposed ? null : true\" [(ngModel)]=\"storyBlockInfo.title\" placeholder=\"Insert a title\" />\n            <textarea class=\"description\" [attr.readonly]=\"_exposed ? null : true\" [(ngModel)]=\"storyBlockInfo.description\" placeholder=\"Start writing your story here...\"></textarea>\n            <div class=\"default-actions\">\n                <a (click)=\"edit(index, $event)\" class=\"button inline-button primary\">Edit</a>\n                <a (click)=\"remove(index, $event)\" [ngClass]=\"{disabled:!hasId()}\" class=\"button inline-button alert\">Remove</a>\n            </div>\n            <div class=\"exposed-actions\">\n                <a (click)=\"save(index, $event)\" class=\"button inline-button primary\">Save</a>\n                <a (click)=\"close()\" class=\"button inline-button secondary\">Close</a>\n            </div>\n        </div>\n    ",
                        providers: [utils_service_1.UtilsService, storyblocks_service_1.StoryBlockService],
                        inputs: ['storyBlockInfo', 'index', 'userId']
                    }), 
                    __metadata('design:paramtypes', [animation_builder_1.AnimationBuilder, core_4.ElementRef, utils_service_1.UtilsService, storyblocks_service_1.StoryBlockService, configuration_2.Configuration])
                ], StoryBlockComponent);
                return StoryBlockComponent;
            }());
            exports_8("StoryBlockComponent", StoryBlockComponent);
        }
    }
});
System.register("components/timeline.component", ["angular2/core"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_5;
    var TimelineComponent;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            }],
        execute: function() {
            TimelineComponent = (function () {
                function TimelineComponent() {
                }
                TimelineComponent = __decorate([
                    core_5.Component({
                        selector: 'timeline',
                        template: "\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TimelineComponent);
                return TimelineComponent;
            }());
            exports_9("TimelineComponent", TimelineComponent);
        }
    }
});
System.register("components/add-button.component", ["angular2/core"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_6;
    var AddButtonComponent;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
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
                    core_6.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], AddButtonComponent.prototype, "offsetY", null);
                AddButtonComponent = __decorate([
                    core_6.Component({
                        selector: 'add-button',
                        template: "\n        <a><span>+</span></a>\n    ",
                        inputs: ['offsetY']
                    }), 
                    __metadata('design:paramtypes', [core_6.ElementRef])
                ], AddButtonComponent);
                return AddButtonComponent;
            }());
            exports_10("AddButtonComponent", AddButtonComponent);
        }
    }
});
System.register("components/notification.component", ["angular2/core"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_7;
    var NotificationComponent;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
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
                    core_7.Component({
                        selector: 'notification',
                        template: "\n        <div>{{ _content\u00A0}}</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [core_7.ElementRef])
                ], NotificationComponent);
                return NotificationComponent;
            }());
            exports_11("NotificationComponent", NotificationComponent);
        }
    }
});
System.register("components/sidebar.component", ["angular2/core", "services/storyblocks.service", "services/utils.service"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_8, storyblocks_service_2, utils_service_2;
    var SidebarComponent;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            },
            function (storyblocks_service_2_1) {
                storyblocks_service_2 = storyblocks_service_2_1;
            },
            function (utils_service_2_1) {
                utils_service_2 = utils_service_2_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
                function SidebarComponent(_storyBlockService, utilsService) {
                    this._storyBlockService = _storyBlockService;
                    this.utilsService = utilsService;
                    this.startDragging = new core_8.EventEmitter();
                    this.endDragging = new core_8.EventEmitter();
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
                    img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABGdBTUEAALGPC/xhBQAABO1JREFUWAnNmEFsFFUYx783O7PaArpgqFKtGKMhGOJJEm1FQ8IapUQkpj2YePNmjAej8eDRg9F4IMabNxMPbRQxgMZiiGKrCRyMUQlqTEApCAqrhhZ3Zuf5/d7s293Slp3FluyX7Ozb2ff+//98773vfd8Y6dBu3GdXBxerw1ZMWYzcbq3tN8b0A6PtaW1Pi5WTRuxEuqK4/68d5kInFCZv59JYskts+pw1skWZw1zjjEmMlcNigrcqo+GePGPaClr9fjxka/Z1ffpBAKOCsQ+tNWb7rYFsuMHIuh4jt1yfUZ25JHJ61srxv60cOJXKF+esjWv6CGrquSlTMC9deDKazHovfF1U0MiYLUxI/KYKeZ6hfT3GvnxPwYysD2RVPv/IP4nI+IlUXvuhZs/ONoTtLkv0wvioqS0kaUFBpT22ZON4TKemXFSPvLixYJ7dEEhvIYP4tmJlv3rgq3NWptUjeAbDU/3qsQfWGhlWD95byuBnlPrt46m8caxmq3jMmAkTRaOVXaaSjWxe5wlyYqrVKe2yEa+8NxSa+9Zk3fb+ZuXV7xL5Sackj92tU/rKplB23paNP3reylOTiffWMVMsDl4uao4gpulTiT/GM5tKgYxtCfWJRU5cFHnm60SO/Jnm0TGvz+abAnnn/lDWrxD1qMjI4US+ryiWeuoRiR5rnb6gdTRrBjF4xouZ1GnZejC+ajHg8yBggMUDjuuDwgGX42wR0fAQuylN0i9ZMwe2ZtMEwBOfJxKn+aaoBXfBZhQY+fDhUIZ0jTF92w8lbk0FYfCg330ND7G1QWEBs2aYpqenlk4M2DwYmGDDARf3PTdtJ4igR5zBjewmjDVz/t+l8YwDrF/ABBuDC064XeDVexm7RmA6EGfY2uymq13A4LQzsOGAC07Xv67BcDbJTHw2CqTwy87IEPQ2fxLn3trtyBf7n5Bw5NHIBc8798Y2TqUmvVFfYGbiHbraQ44DxBD08saZxcjy3IcDLjjhRgNamLIyAJxNGBG4E+vT6FwZLbpPY8vmBPBcnluHlVExwHgOSozj4FqZ5/LcyjsQ6gp3uQynNsbZlMfu0KiLrbmu6RciMVZTiF9nsvaVrp7Lc6MlJLnSxpwU4kog/r9vhou+2fj29/64ZOWuj+LG/cUarYcyfdBCIuFcks8vTejZpDmiJ8y85O9xuucx79smklim7LQOXvW7phArV2YpxM/tH07WfZB1YlH/+HjmrX691wLeVtPN9cQObgwtgcuB9QeZHkY+c63Mc3lutAQk5Agg7cRIrjqxqkaJoxp5+XTinVYuz42WQCuHg/xJDoyR6XVilarIts8S9+lkHH09l+emUglsb7RPl3dCQk4OTNpJWF9ugwMuOOFGA2VTQN1EqUJ1QEKOkXYut3kOOOFGA1qy+dG6CQFUB2xZcmDSzuUysOGAC07HU9fgWCnidIVPUapQHWDkwK1R2N1cgguYYGNwwQm3LyQbbqCIoxOlCuklx8C7g6GQdi6VgQUm2HDABbbnpt0QRE6rSndTN1GqUB2Q+5IDL4WnwPD5NNhwwAWnz6fnCOIHFSWlCW6kVPGiDm2L/teaYs2AwQP6MshVssrlOCGv27z56KpC0avsqlLai+qqlw1eFN9d8zqmVRTtrnlhdbkwyiZXqWTFwQBpp27dua/0NIPVcROck52+0vsPOOPlLnVY0lYAAAAASUVORK5CYII=";
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
                __decorate([
                    core_8.Output(), 
                    __metadata('design:type', core_8.EventEmitter)
                ], SidebarComponent.prototype, "startDragging", void 0);
                __decorate([
                    core_8.Output(), 
                    __metadata('design:type', core_8.EventEmitter)
                ], SidebarComponent.prototype, "endDragging", void 0);
                __decorate([
                    core_8.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], SidebarComponent.prototype, "storyBlock", null);
                __decorate([
                    core_8.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], SidebarComponent.prototype, "storyBlocksLength", null);
                SidebarComponent = __decorate([
                    core_8.Component({
                        selector: 'sidebar',
                        template: "\n        <div *ngIf=\"_index == -1\">\n            <div class=\"sidebar-action\">\n                <a class=\"create-storyblock\" draggable=\"true\" (dragstart)=\"dragStart($event)\" (dragend)=\"dragEnd($event)\">Create storyblock</a>\n            </div>\n            <div class=\"sidebar-count\">\n                <span class=\"label\">Total chapters</span><span class=\"count\">{{_storyBlocksLength}}</span>\n            </div>\n        </div>\n        <div *ngIf=\"_index >= 0 && !!_storyBlock\">\n            <div class=\"sidebar-action\">\n                <h3><span class=\"capital-letter\">Chapter</span> {{_storyBlock.blockNumber+1}}</h3>\n            </div>\n            <div class=\"sidebar-separator\"></div>\n            <div class=\"sidebar-action\">\n                <div class=\"form-group\">\n                    <label>Storyblock type</label>\n                    <div class=\"select-wrapper\">\n                        <select [(ngModel)]=\"_storyBlock.type\">\n                            <option *ngFor=\"#storyBlockType of storyBlockTypes\" value={{storyBlockType.id}}>{{storyBlockType.name}}</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"sidebar-separator\"></div>\n            <div class=\"sidebar-count\">\n                <span class=\"label\">Total characters</span><span class=\"count\">{{_storyBlock.description.length}}</span>\n            </div>\n            <div class=\"sidebar-info\" *ngIf=\"!!_storyBlock.createdAt\">\n                <span class=\"label\">Created</span><span class=\"info\">{{utilsService.getHumanDate(_storyBlock.createdAt)}}</span>\n            </div>\n            <div class=\"sidebar-info\" *ngIf=\"!!_storyBlock.lastModifiedAt\">\n                <span class=\"label\">Last modified</span><span class=\"info\">{{utilsService.getHumanDate(_storyBlock.lastModifiedAt)}}</span>\n            </div>\n        </div>\n    ",
                        providers: [utils_service_2.UtilsService],
                        inputs: ['storyBlock', 'storyBlocksLength']
                    }), 
                    __metadata('design:paramtypes', [storyblocks_service_2.StoryBlockService, utils_service_2.UtilsService])
                ], SidebarComponent);
                return SidebarComponent;
            }());
            exports_12("SidebarComponent", SidebarComponent);
        }
    }
});
System.register("models/jwtToken", [], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    return {
        setters:[],
        execute: function() {
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
System.register("services/auth.service", ["angular2/core", 'angular2/http', "services/webstorage.service", "config/configuration"], function(exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var core_10, http_2, webstorage_service_1, configuration_3;
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
            function (configuration_3_1) {
                configuration_3 = configuration_3_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(http, webStorageService, configuration) {
                    this.http = http;
                    this.webStorageService = webStorageService;
                    this.configuration = configuration;
                }
                AuthService.prototype.logout = function () {
                    this.webStorageService.remove(this.configuration.token.name);
                    return true;
                };
                AuthService.prototype.login = function (user) {
                    console.log('Creating temporary data');
                    var headers = new http_2.Headers({
                        'Content-Type': 'application/x-www-form-urlencoded'
                    });
                    var options = new http_2.RequestOptions({
                        headers: headers
                    });
                    return this.http.post(this.configuration.apiBasePath + '/auth/login', "name=" + user.name + "&" +
                        "email=" + user.email + "&" +
                        "password=" + user.password, options)
                        .map(function (res) { return res.text(); });
                };
                AuthService.prototype.register = function (user) {
                    console.log('Creating temporary data');
                    var headers = new http_2.Headers({
                        'Content-Type': 'application/x-www-form-urlencoded'
                    });
                    var options = new http_2.RequestOptions({
                        headers: headers
                    });
                    return this.http.post(this.configuration.apiBasePath + '/auth/register', "email=" + user.email + "&" +
                        "password=" + user.password, options)
                        .map(function (res) { return res.text(); });
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
                    __metadata('design:paramtypes', [http_2.Http, webstorage_service_1.WebStorageService, configuration_3.Configuration])
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
System.register("components/signin-form.component", ["angular2/core", "models/user", "services/auth.service", "angular2/common", "services/validators.service", "services/webstorage.service", "config/configuration"], function(exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var core_11, user_1, auth_service_1, common_1, validators_service_1, webstorage_service_2, configuration_4;
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
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (validators_service_1_1) {
                validators_service_1 = validators_service_1_1;
            },
            function (webstorage_service_2_1) {
                webstorage_service_2 = webstorage_service_2_1;
            },
            function (configuration_4_1) {
                configuration_4 = configuration_4_1;
            }],
        execute: function() {
            SignInComponent = (function () {
                function SignInComponent(authService, builder, webStorageService, configuration) {
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
                        email: ['', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.pattern(validators_service_1.emailRegexp)])],
                        password: ['', common_1.Validators.required],
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
                            console.error(err);
                            _this.notify.emit({
                                type: 'error',
                                message: 'Invalid email or password'
                            });
                        }, function () {
                            console.log('logged in');
                            _this.authStatus.emit('Login');
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
                        providers: [auth_service_1.AuthService, webstorage_service_2.WebStorageService],
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, common_1.FormBuilder, webstorage_service_2.WebStorageService, configuration_4.Configuration])
                ], SignInComponent);
                return SignInComponent;
            }());
            exports_18("SignInComponent", SignInComponent);
        }
    }
});
System.register("components/signup-form.component", ["angular2/core", "models/user", "services/auth.service", "angular2/common", "services/validators.service", "services/webstorage.service", "config/configuration"], function(exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    var core_12, user_2, auth_service_2, common_2, validators_service_2, webstorage_service_3, configuration_5;
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
            function (common_2_1) {
                common_2 = common_2_1;
            },
            function (validators_service_2_1) {
                validators_service_2 = validators_service_2_1;
            },
            function (webstorage_service_3_1) {
                webstorage_service_3 = webstorage_service_3_1;
            },
            function (configuration_5_1) {
                configuration_5 = configuration_5_1;
            }],
        execute: function() {
            SignUpComponent = (function () {
                function SignUpComponent(authService, builder, webStorageService, configuration) {
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
                        email: ['', common_2.Validators.compose([common_2.Validators.required, common_2.Validators.pattern(validators_service_2.emailRegexp)])],
                        password: ['', common_2.Validators.compose([common_2.Validators.required, common_2.Validators.minLength(6)])],
                        confirmPassword: ['', common_2.Validators.required],
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
                            console.error(err);
                            _this.notify.emit({
                                type: 'error',
                                message: 'The email is already taken'
                            });
                        }, function () {
                            console.log('registered');
                            _this.authStatus.emit('Login');
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
                        providers: [auth_service_2.AuthService, webstorage_service_3.WebStorageService],
                        directives: [common_2.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [auth_service_2.AuthService, common_2.FormBuilder, webstorage_service_3.WebStorageService, configuration_5.Configuration])
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
System.register("components/app-content.component", ['angular2/core', 'angular2/common', "services/storyblocks.service", "components/storyblock.component", "components/timeline.component", "components/add-button.component", "components/notification.component", "components/sidebar.component", "config/configuration", "services/auth.service", "services/webstorage.service", "components/auth-form.component"], function(exports_21, context_21) {
    "use strict";
    var __moduleName = context_21 && context_21.id;
    var core_14, common_3, storyblocks_service_3, storyblock_component_1, timeline_component_1, add_button_component_1, notification_component_1, sidebar_component_1, configuration_6, auth_service_3, webstorage_service_4, auth_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_14_1) {
                core_14 = core_14_1;
            },
            function (common_3_1) {
                common_3 = common_3_1;
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
            function (configuration_6_1) {
                configuration_6 = configuration_6_1;
            },
            function (auth_service_3_1) {
                auth_service_3 = auth_service_3_1;
            },
            function (webstorage_service_4_1) {
                webstorage_service_4 = webstorage_service_4_1;
            },
            function (auth_form_component_1_1) {
                auth_form_component_1 = auth_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(storyBlockService, configuration, webStorageService, authService) {
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
                            console.log('No blocks received!');
                            _this.storyBlockService.generateTestData(_this.userId).subscribe(function (saveDefaultBlocks) {
                                _this.storyBlocks = saveDefaultBlocks;
                                _this.recalculateStoryBlockNumbers();
                            }, function (err) { return console.error(err); }, function () { return console.log('done, loaded ' + _this.storyBlocks.length + ' blocks', _this.storyBlocks); });
                        }
                        else {
                            _this.recalculateStoryBlockNumbers();
                        }
                    }, function (err) { return console.error(err); }, function () { return console.log('done, loaded ' + _this.storyBlocks.length + ' blocks', _this.storyBlocks); });
                };
                AppComponent.prototype.removeStoryBlock = function (index) {
                    this.storyBlocks.splice(index, 1);
                    this.recalculateStoryBlockNumbers();
                };
                AppComponent.prototype.showAccessForm = function () {
                    this.toggleMenu(false);
                    console.log(this.authService.isLoggedIn());
                    this.accessFormVisible = true;
                    document.querySelector('body').classList.add('no-scroll');
                };
                AppComponent.prototype.hideAccessForm = function () {
                    this.accessFormVisible = false;
                    document.querySelector('body').classList.remove('no-scroll');
                };
                AppComponent.prototype.recalculateStoryBlockNumbers = function () {
                    console.log('Numbering before', this.storyBlocks);
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
                    console.log('Numbering after', this.storyBlocks);
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
                    var zoomConversionFactor = this.configuration.zoom.step + (this.zoomLevel * this.configuration.zoom.strength);
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
                    console.log('Adding block index ' + tmpArrayPos);
                    this.setExposed(tmpArrayPos);
                    event.preventDefault();
                    event.stopPropagation();
                };
                AppComponent.prototype.setExposed = function (index) {
                    console.log('Setting block ' + index + ' exposed');
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
                    core_14.ViewChild(notification_component_1.NotificationComponent), 
                    __metadata('design:type', notification_component_1.NotificationComponent)
                ], AppComponent.prototype, "notificationComponent", void 0);
                AppComponent = __decorate([
                    core_14.Component({
                        selector: 'app-content',
                        template: "\n        <main>\n            <timeline class=\"timeline-block\"></timeline>\n            <div class=\"story-blocks\">\n                <storyblock *ngFor=\"#storyBlock of storyBlocks; #i = index\" \n                    [index]=\"i\" \n                    [storyBlockInfo]=\"storyBlock\" \n                    [zoomLevel]=\"zoomLevel\"\n                    [userId]=\"userId\"\n                    [exposedIndex]=\"exposedIndex\"\n                    [ngClass]=\"{exposed: exposedIndex == i}\"\n                    (removeStoryBlockEvent)=\"removeStoryBlock($event)\" \n                    (exposeEvent)=\"setExposed($event)\"\n                    (notify)=\"notify($event)\"\n                    class=\"story-block {{ storyBlock.type\u00A0}}\"></storyblock>\n            </div>\n            <div class=\"timeline\"\n                (click)=\"addStoryBlock($event)\"\n                (mouseenter)=\"onMouseEnter($event)\"\n                (mouseleave)=\"onMouseLeave($event)\"\n                (mousemove)=\"onMouseMove($event)\">\n                <add-button *ngIf=\"addButton.visible\"\n                    [offsetY]=\"addButton.top\"\n                    (click)=\"addStoryBlock($event)\"></add-button>\n            </div>\n            <div id=\"controls\">\n                <div id=\"zoom-controls\">              \n                    <a title=\"Zoom in\" (click)=\"zoomIn()\">+</a>  \n                    <a title=\"Zoom out\" (click)=\"zoomOut()\">&ndash;</a>                \n                </div>            \n            </div>\n        </main>\n        <aside [ngClass]=\"{visible: menuVisible}\">\n            <sidebar\n            (startDragging)=\"toggleMenu(false)\"\n            (endDragging)=\"addStoryBlock($event)\"\n            [storyBlock]=\"exposedStoryBlock\" [storyBlocksLength]=\"storyBlocks.length\"></sidebar>\n            <a class=\"user-aside\" (click)=\"downloadPdf()\">Download PDF</a>\n            <a class=\"user-aside\" *ngIf=\"!isLoggedIn()\" (click)=\"showAccessForm()\">Login/Signup</a>\n            <a class=\"user-aside\" *ngIf=\"isLoggedIn()\" (click)=\"logOut()\">Logout</a>\n            <a id=\"close-menu\" (click)=\"toggleMenu(false)\"></a>\n        </aside>\n        <header><a id=\"burger\" (click)=\"toggleMenu(true)\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a></header>\n        <auth-form \n            *ngIf=\"accessFormVisible\" \n            (closeModal)=\"hideAccessForm()\"\n            (notify)=\"notify($event)\"\n            (authStatus)=\"authStatusChanged($event)\"\n            ></auth-form>\n        <notification [ngClass]=\"{error: notification.type == 'error', success: notification.type == 'success'}\"></notification>\n    ",
                        providers: [storyblocks_service_3.StoryBlockService, configuration_6.Configuration, auth_service_3.AuthService, webstorage_service_4.WebStorageService],
                        directives: [storyblock_component_1.StoryBlockComponent, timeline_component_1.TimelineComponent, add_button_component_1.AddButtonComponent, notification_component_1.NotificationComponent, sidebar_component_1.SidebarComponent, auth_form_component_1.AuthFormComponent, common_3.NgClass]
                    }), 
                    __metadata('design:paramtypes', [storyblocks_service_3.StoryBlockService, configuration_6.Configuration, webstorage_service_4.WebStorageService, auth_service_3.AuthService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_21("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "components/app-content.component", 'angular2/http', "config/configuration"], function(exports_22, context_22) {
    "use strict";
    var __moduleName = context_22 && context_22.id;
    var browser_1, app_content_component_1, http_3, configuration_7;
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
            function (configuration_7_1) {
                configuration_7 = configuration_7_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_content_component_1.AppComponent, [http_3.HTTP_PROVIDERS, configuration_7.Configuration]);
        }
    }
});
System.register("directives/collapse.directive", ['angular2/core', 'angular2/src/animate/animation_builder'], function(exports_23, context_23) {
    "use strict";
    var __moduleName = context_23 && context_23.id;
    var core_15, animation_builder_2;
    var Collapse;
    return {
        setters:[
            function (core_15_1) {
                core_15 = core_15_1;
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
                    core_15.Input(), 
                    __metadata('design:type', Boolean)
                ], Collapse.prototype, "collapse", void 0);
                Collapse = __decorate([
                    core_15.Directive({
                        selector: '[collapse]'
                    }), 
                    __metadata('design:paramtypes', [animation_builder_2.AnimationBuilder, core_15.ElementRef])
                ], Collapse);
                return Collapse;
            }());
            exports_23("Collapse", Collapse);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2svbW9jay1zdG9yeWJsb2Nrcy50cyIsIm1vY2svbW9jay1zdG9yeWJsb2NrLXR5cGVzLnRzIiwiY29uZmlnL2NvbmZpZ3VyYXRpb24udHMiLCJzZXJ2aWNlcy9zdG9yeWJsb2Nrcy5zZXJ2aWNlLnRzIiwic2VydmljZXMvdXRpbHMuc2VydmljZS50cyIsImNvbXBvbmVudHMvc3RvcnlibG9jay5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3RpbWVsaW5lLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvYWRkLWJ1dHRvbi5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL25vdGlmaWNhdGlvbi5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3NpZGViYXIuY29tcG9uZW50LnRzIiwibW9kZWxzL3VzZXIudHMiLCJzZXJ2aWNlcy93ZWJzdG9yYWdlLnNlcnZpY2UudHMiLCJzZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiLCJzZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UudHMiLCJjb21wb25lbnRzL3NpZ25pbi1mb3JtLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvc2lnbnVwLWZvcm0uY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9hdXRoLWZvcm0uY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9hcHAtY29udGVudC5jb21wb25lbnQudHMiLCJib290LnRzIiwiZGlyZWN0aXZlcy9jb2xsYXBzZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRWEsV0FBVzs7OztZQUFYLHlCQUFBLFdBQVcsR0FBOEI7Z0JBQ2xEO29CQUNJLE9BQU8sRUFBRSxDQUFDO29CQUNWLEtBQUssRUFBRSxTQUFTO29CQUNoQixXQUFXLEVBQUUsNkJBQTZCO29CQUMxQyxZQUFZLEVBQUMsQ0FBQztvQkFDZCxVQUFVLEVBQUUsQ0FBQyxDQUFDO29CQUNkLFdBQVcsRUFBQyxDQUFDO29CQUNiLElBQUksRUFBQyxTQUFT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Q1gsUUFBUSxFQUFFLFFBQVE7cUJBQ3JCLENBQUM7eUJBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsc0JBQXNCO3lCQUNwRCxVQUFVLENBQUM7d0JBQ1IsSUFBSSxDQUFDLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUI7NkJBQzdDLGFBQWEsQ0FBQzs0QkFDWCxNQUFNLEVBQUUsR0FBRzt5QkFDZCxDQUFDOzZCQUNELFdBQVcsQ0FBQzs0QkFDVCxNQUFNLEVBQUUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLElBQUk7eUJBQ3JELENBQUM7NkJBQ0QsS0FBSyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7d0JBRTFELENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBTyxPQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBRSxDQUFDO29CQUMzRCxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQWhFRDtvQkFBQyxhQUFLLEVBQUU7OzBEQUFBO2dCQUxaO29CQUFDLGlCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7cUJBQ3pCLENBQUM7OzRCQUFBO2dCQW9FRixlQUFDO1lBQUQsQ0FsRUEsQUFrRUMsSUFBQTtZQWxFRCxnQ0FrRUMsQ0FBQSIsImZpbGUiOiIuLi8uLi8uLi9hbmd1bGFyYXR0YWNrMjAxNi1jaHJvbm9zdG9yaWVzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XG5cbmV4cG9ydCBjb25zdCBTVE9SWUJMT0NLUzpTdG9yeUJsb2NrW10gPSA8U3RvcnlCbG9ja1tdPltcbiAgICB7XG4gICAgICAgIGJsb2NrSWQ6IDEsXG4gICAgICAgIHRpdGxlOiAnUHJlZmFjZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnWW91IG5lZWQgdG8gc3RhcnQgc29tZXdoZXJlJyxcbiAgICAgICAgdGltZVBvc2l0aW9uOjEsXG4gICAgICAgIGltcG9ydGFuY2U6IC0xLFxuICAgICAgICBibG9ja051bWJlcjowLFxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBibG9ja0lkOiAyLFxuICAgICAgICB0aXRsZTogJ0ludHJvZHVjdGlvbicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnV2hlcmUgeW91ciBjaGFyYWN0ZXJzIGJlY2FtZSByZWFsJyxcbiAgICAgICAgdGltZVBvc2l0aW9uOiAyLFxuICAgICAgICBpbXBvcnRhbmNlOiAxLFxuICAgICAgICBibG9ja051bWJlcjoxLFxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBibG9ja0lkOiAzLFxuICAgICAgICB0aXRsZTogJ0V2b2x1dGlvbicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpbmdzIGdldHMgdHJpY2tpZXInLFxuICAgICAgICB0aW1lUG9zaXRpb246IDMsXG4gICAgICAgIGltcG9ydGFuY2U6IDIsXG4gICAgICAgIGJsb2NrTnVtYmVyOjIsXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJsb2NrSWQ6IDQsXG4gICAgICAgIHRpdGxlOiAnVG9waWMgbW9tZW50JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdXb2FoIScsXG4gICAgICAgIHRpbWVQb3NpdGlvbjogNCxcbiAgICAgICAgaW1wb3J0YW5jZTogMSxcbiAgICAgICAgYmxvY2tOdW1iZXI6MyxcbiAgICAgICAgdHlwZTonY2hhcHRlcidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmxvY2tJZDogNSxcbiAgICAgICAgdGl0bGU6ICdFcGlsb2d1ZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQmVjYXVzZSBldmVuIHRoZSBiZXN0IHRoaW5ncyBlbmQnLFxuICAgICAgICB0aW1lUG9zaXRpb246IDUsXG4gICAgICAgIGltcG9ydGFuY2U6IC0xLFxuICAgICAgICBibG9ja051bWJlcjo0LFxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xuICAgIH1cbl07IiwiaW1wb3J0IHtTdG9yeUJsb2NrfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2tcIjtcbmltcG9ydCB7U3RvcnlCbG9ja1R5cGV9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9jay10eXBlXCI7XG5cbmV4cG9ydCBjb25zdCBTVE9SWUJMT0NLX1RZUEVTOlN0b3J5QmxvY2tUeXBlW10gPSA8U3RvcnlCbG9ja1R5cGVbXT5bXG4gICAge1xuICAgICAgICBpZDogJ2NoYXB0ZXInLFxuICAgICAgICBuYW1lOiAnQ2hhcHRlcicsXG4gICAgICAgIGxldmVsOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAncGFyYWdyYXBoJyxcbiAgICAgICAgbmFtZTogJ1BhcmFncmFwaCcsXG4gICAgICAgIGxldmVsOiAxXG4gICAgfSxcbl07IiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XG4gICAgcHVibGljIHpvb20gPSB7XG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RlcDogMTUwLFxuICAgICAgICBzdHJlbmd0aDogMC42XG4gICAgfTtcblxuICAgIHB1YmxpYyB0b2tlbiA9IHtcbiAgICAgICAgbmFtZTogJ3Rva2VuJyxcbiAgICAgICAgZXhwaXJhdGlvbjogKDMwICogMjQgKiA2MCAqIDYwICogMTAwMClcbiAgICB9O1xuXG4gICAgcHVibGljIGFwaUJhc2VQYXRoID0gJ2h0dHBzOi8vYWEyMDE2LWNocm9ub3N0b3JpZXMuaGVyb2t1YXBwLmNvbSc7XG4gICAgLy8gcHVibGljIGFwaUJhc2VQYXRoID0gJydcbn0iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XG5pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3NoYXJlJztcbmltcG9ydCB7T2JzZXJ2ZXJ9IGZyb20gJ3J4anMvT2JzZXJ2ZXInO1xuaW1wb3J0IHtTVE9SWUJMT0NLU30gZnJvbSBcIi4uL21vY2svbW9jay1zdG9yeWJsb2Nrc1wiO1xuaW1wb3J0IHtTdG9yeUJsb2NrVHlwZX0gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrLXR5cGVcIjtcbmltcG9ydCB7U1RPUllCTE9DS19UWVBFU30gZnJvbSBcIi4uL21vY2svbW9jay1zdG9yeWJsb2NrLXR5cGVzXCI7XG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xuZGVjbGFyZSB2YXIgcGRmTWFrZTogYW55O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RvcnlCbG9ja1NlcnZpY2Uge1xuICAgIHByaXZhdGUgX2V4cG9zZWRJbmRleCA9IC0xO1xuICAgIGluZGV4Q2hhbmdlJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICAgIHByaXZhdGUgX29ic2VydmVyOiBPYnNlcnZlcjxudW1iZXI+O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6SHR0cCwgcHJpdmF0ZSBjb25maWd1cmF0aW9uOkNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgdGhpcy5pbmRleENoYW5nZSQgPSBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PlxuICAgICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBvYnNlcnZlcikuc2hhcmUoKTtcbiAgICB9XG4gICAgY2hhbmdlRXhwb3NlZEluZGV4KGluZGV4KSB7XG4gICAgICAgIHRoaXMuX2V4cG9zZWRJbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLl9vYnNlcnZlci5uZXh0KGluZGV4KTtcbiAgICB9XG4gICAgZ2V0RXhwb3NlZEluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhwb3NlZEluZGV4O1xuICAgIH1cblxuICAgIGdldFN0b3J5QmxvY2tzKHVzZXJJZCk6T2JzZXJ2YWJsZTxTdG9yeUJsb2NrW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jb25maWd1cmF0aW9uLmFwaUJhc2VQYXRoICsgJy9zdG9yeWJsb2Nrcy8nK3VzZXJJZClcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuICAgIHNhdmVTdG9yeUJsb2NrKHVzZXJJZCwgc3RvcnlCbG9jazpTdG9yeUJsb2NrKTpPYnNlcnZhYmxlPFN0b3J5QmxvY2s+IHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoISFzdG9yeUJsb2NrLl9pZCkge1xuICAgICAgICAgICAgc3RvcnlCbG9jay5jcmVhdGVkQXQgPSBzdG9yeUJsb2NrLmNyZWF0ZWRBdCB8fCAobmV3IERhdGUoKSk7XG4gICAgICAgICAgICBzdG9yeUJsb2NrLmxhc3RNb2RpZmllZEF0ID0gKG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5jb25maWd1cmF0aW9uLmFwaUJhc2VQYXRoICsgJy9zdG9yeWJsb2Nrcy8nICsgdXNlcklkICsgJy8nICsgc3RvcnlCbG9jay5faWQsIFwiZGF0YT1cIiArIEpTT04uc3RyaW5naWZ5KHN0b3J5QmxvY2spLCBvcHRpb25zKVxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RvcnlCbG9jay5jcmVhdGVkQXQgPSAobmV3IERhdGUoKSk7XG4gICAgICAgICAgICBzdG9yeUJsb2NrLmxhc3RNb2RpZmllZEF0ID0gKG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvc3RvcnlibG9ja3MvJyt1c2VySWQgKycvJyAsIFwiZGF0YT1cIiArIEpTT04uc3RyaW5naWZ5KHN0b3J5QmxvY2spLCBvcHRpb25zKVxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlU3RvcnlCbG9jayh1c2VySWQsIHN0b3J5QmxvY2s6U3RvcnlCbG9jayk6T2JzZXJ2YWJsZTxTdG9yeUJsb2NrW10+IHtcbiAgICAgICAgaWYgKCEhc3RvcnlCbG9jay5faWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvc3RvcnlibG9ja3MvJyArIHVzZXJJZCArICcvJyArIHN0b3J5QmxvY2suX2lkKVxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGdldFN0b3J5QmxvY2tUeXBlcygpOlN0b3J5QmxvY2tUeXBlW10ge1xuICAgICAgICByZXR1cm4gU1RPUllCTE9DS19UWVBFUztcbiAgICB9XG5cbiAgICBnZXRTdG9yeUJsb2NrRGVmYXVsdFR5cGVzKCk6U3RvcnlCbG9ja1R5cGVbXSB7XG4gICAgICAgIHJldHVybiBTVE9SWUJMT0NLX1RZUEVTO1xuICAgIH1cblxuICAgIGdlbmVyYXRlVGVzdERhdGEodXNlcklkKTpPYnNlcnZhYmxlPFN0b3J5QmxvY2tbXT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgdGVtcG9yYXJ5IGRhdGEgZm9yICcgKyB1c2VySWQpO1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBibG9ja3M6U3RvcnlCbG9ja1tdID0gU1RPUllCTE9DS1M7XG5cbiAgICAgICAgZm9yKHZhciBpPTA7IGk8YmxvY2tzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGJsb2Nrc1tpXS51c2VySWQgPSB1c2VySWQ7XG4gICAgICAgICAgICBibG9ja3NbaV0uY3JlYXRlZEF0ID0gKG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgYmxvY2tzW2ldLmxhc3RNb2RpZmllZEF0ID0gKG5ldyBEYXRlKCkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5jb25maWd1cmF0aW9uLmFwaUJhc2VQYXRoICsgJy9zdG9yeWJsb2Nrcy8nICsgdXNlcklkICsgJy8nLCBcImRhdGE9XCIgKyBKU09OLnN0cmluZ2lmeShibG9ja3MpLCBvcHRpb25zKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuICAgIGRvd25sb2FkUGRmKHN0b3J5QmxvY2tzOlN0b3J5QmxvY2tbXSkge1xuICAgICAgICBmdW5jdGlvbiBjb21wYXJlKGE6U3RvcnlCbG9jaywgYjpTdG9yeUJsb2NrKSB7XG4gICAgICAgICAgICBpZiAoYS50aW1lUG9zaXRpb24gPCBiLnRpbWVQb3NpdGlvbilcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICBlbHNlIGlmIChhLnRpbWVQb3NpdGlvbiA+IGIudGltZVBvc2l0aW9uKVxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RvcnlCbG9ja3Muc29ydChjb21wYXJlKTtcblxuXG4gICAgICAgIHZhciBkb2NEZWZpbml0aW9uID0ge1xuICAgICAgICAgICAgY29udGVudDogW10sXG5cbiAgICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgICAgIGNoYXB0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIyLFxuICAgICAgICAgICAgICAgICAgICBib2xkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFswLCAxNiwgMCwgOF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFncmFwaDoge1xuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXG4gICAgICAgICAgICAgICAgICAgIGJvbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogWzAsIDAsIDAsIDEyXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0b3J5QmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkb2NEZWZpbml0aW9uLmNvbnRlbnQucHVzaChcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHN0b3J5QmxvY2tzW2ldLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogc3RvcnlCbG9ja3NbaV0udHlwZSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZG9jRGVmaW5pdGlvbi5jb250ZW50LnB1c2goXG4gICAgICAgICAgICAgICAgc3RvcnlCbG9ja3NbaV0uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBwZGZNYWtlLmNyZWF0ZVBkZihkb2NEZWZpbml0aW9uKS5kb3dubG9hZCgpO1xuICAgIH1cblxufSIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXRpbHNTZXJ2aWNlIHtcbiAgICBwdWJsaWMgRU1BSUxfUkVHRVggPSAnXlstYS16MC05fiEkJV4mKl89K317XFwnP10rKFxcLlstYS16MC05fiEkJV4mKl89K317XFwnP10rKSpAKFthLXowLTlfXVstYS16MC05X10qKFxcLlstYS16MC05X10rKSpcXC4oYWVyb3xhcnBhfGJpenxjb218Y29vcHxlZHV8Z292fGluZm98aW50fG1pbHxtdXNldW18bmFtZXxuZXR8b3JnfHByb3x0cmF2ZWx8bW9iaXxbYS16XVthLXpdKXwoWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfSkpKDpbMC05XXsxLDV9KT8kJztcblxuXG4gICAgZ2V0Um9tYW5OdW1lcmFsKG51bSk6c3RyaW5nIHtcbiAgICAgICAgaWYgKCErbnVtKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB2YXIgZGlnaXRzID0gU3RyaW5nKCtudW0pLnNwbGl0KFwiXCIpLFxuICAgICAgICAgICAga2V5ID0gW1wiXCIsIFwiQ1wiLCBcIkNDXCIsIFwiQ0NDXCIsIFwiQ0RcIiwgXCJEXCIsIFwiRENcIiwgXCJEQ0NcIiwgXCJEQ0NDXCIsIFwiQ01cIixcbiAgICAgICAgICAgICAgICBcIlwiLCBcIlhcIiwgXCJYWFwiLCBcIlhYWFwiLCBcIlhMXCIsIFwiTFwiLCBcIkxYXCIsIFwiTFhYXCIsIFwiTFhYWFwiLCBcIlhDXCIsXG4gICAgICAgICAgICAgICAgXCJcIiwgXCJJXCIsIFwiSUlcIiwgXCJJSUlcIiwgXCJJVlwiLCBcIlZcIiwgXCJWSVwiLCBcIlZJSVwiLCBcIlZJSUlcIiwgXCJJWFwiXSxcbiAgICAgICAgICAgIHJvbWFuID0gXCJcIixcbiAgICAgICAgICAgIGkgPSAzO1xuICAgICAgICB3aGlsZSAoaS0tKVxuICAgICAgICAgICAgcm9tYW4gPSAoa2V5WytkaWdpdHMucG9wKCkgKyAoaSAqIDEwKV0gfHwgXCJcIikgKyByb21hbjtcbiAgICAgICAgcmV0dXJuIEFycmF5KCtkaWdpdHMuam9pbihcIlwiKSArIDEpLmpvaW4oXCJNXCIpICsgcm9tYW47XG4gICAgfVxuXG4gICAgZ2V0SHVtYW5EYXRlKGQpOnN0cmluZ3tcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShkKTtcbiAgICAgICAgcmV0dXJuIChkYXRlLmdldE1vbnRoKCkgKyAnLycgKyBkYXRlLmdldERhdGUoKSArICcvJyArICBkYXRlLmdldEZ1bGxZZWFyKCkgKyAnIGF0ICcgKyBkYXRlLmdldEhvdXJzKCkgKyAnOicgKyBkYXRlLmdldE1pbnV0ZXMoKSk7XG4gICAgfVxufSIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7VXRpbHNTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvdXRpbHMuc2VydmljZVwiO1xuaW1wb3J0IHtBbmltYXRpb25CdWlsZGVyfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2FuaW1hdGUvYW5pbWF0aW9uX2J1aWxkZXJcIjtcbmltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XG5pbXBvcnQge1N0b3J5QmxvY2tTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvc3RvcnlibG9ja3Muc2VydmljZVwiO1xuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzdG9yeWJsb2NrJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5kZXhcIj48c3BhbiAqbmdJZj1cInN0b3J5QmxvY2tJbmZvLnR5cGUgPT0gJ2NoYXB0ZXInXCI+e3t1dGlsc1NlcnZpY2UuZ2V0Um9tYW5OdW1lcmFsKHN0b3J5QmxvY2tJbmZvLmJsb2NrTnVtYmVyICsgMSl9fTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0aXRsZVwiIFthdHRyLnJlYWRvbmx5XT1cIl9leHBvc2VkID8gbnVsbCA6IHRydWVcIiBbKG5nTW9kZWwpXT1cInN0b3J5QmxvY2tJbmZvLnRpdGxlXCIgcGxhY2Vob2xkZXI9XCJJbnNlcnQgYSB0aXRsZVwiIC8+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJkZXNjcmlwdGlvblwiIFthdHRyLnJlYWRvbmx5XT1cIl9leHBvc2VkID8gbnVsbCA6IHRydWVcIiBbKG5nTW9kZWwpXT1cInN0b3J5QmxvY2tJbmZvLmRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJTdGFydCB3cml0aW5nIHlvdXIgc3RvcnkgaGVyZS4uLlwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVmYXVsdC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cImVkaXQoaW5kZXgsICRldmVudClcIiBjbGFzcz1cImJ1dHRvbiBpbmxpbmUtYnV0dG9uIHByaW1hcnlcIj5FZGl0PC9hPlxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJyZW1vdmUoaW5kZXgsICRldmVudClcIiBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6IWhhc0lkKCl9XCIgY2xhc3M9XCJidXR0b24gaW5saW5lLWJ1dHRvbiBhbGVydFwiPlJlbW92ZTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4cG9zZWQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJzYXZlKGluZGV4LCAkZXZlbnQpXCIgY2xhc3M9XCJidXR0b24gaW5saW5lLWJ1dHRvbiBwcmltYXJ5XCI+U2F2ZTwvYT5cbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwiY2xvc2UoKVwiIGNsYXNzPVwiYnV0dG9uIGlubGluZS1idXR0b24gc2Vjb25kYXJ5XCI+Q2xvc2U8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtVdGlsc1NlcnZpY2UsIFN0b3J5QmxvY2tTZXJ2aWNlXSxcbiAgICBpbnB1dHM6IFsnc3RvcnlCbG9ja0luZm8nLCAnaW5kZXgnICwgJ3VzZXJJZCddXG59KVxuXG5leHBvcnQgY2xhc3MgU3RvcnlCbG9ja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHN0b3J5QmxvY2tJbmZvOlN0b3J5QmxvY2s7XG4gICAgcHJpdmF0ZSB1c2VySWQ7XG4gICAgcHVibGljIGluZGV4O1xuICAgIHB1YmxpYyBfZXhwb3NlZCA9IGZhbHNlO1xuICAgIHB1YmxpYyBfYWN0aXZlID0gdHJ1ZTtcbiAgICBwcml2YXRlIF9hY3Rpb25UaW1lb3V0O1xuICAgIHB1YmxpYyBfc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF96b29tTGV2ZWwgPSAxMDtcbiAgICBwcml2YXRlIF9wcmV2aW91c1pvb21MZXZlbCA9IDEwO1xuICAgIHByaXZhdGUgc3RvcnlCbG9ja0xvY2FsU2F2ZTpTdG9yeUJsb2NrO1xuXG4gICAgQE91dHB1dCgpIHpvb21FdmVudDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgZXhwb3NlRXZlbnQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHJlbW92ZVN0b3J5QmxvY2tFdmVudDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgbm90aWZ5OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWI6QW5pbWF0aW9uQnVpbGRlciwgcHJpdmF0ZSBfZTpFbGVtZW50UmVmLCBwcml2YXRlIHV0aWxzU2VydmljZTpVdGlsc1NlcnZpY2UsIHB1YmxpYyBzdG9yeUJsb2NrU2VydmljZTpTdG9yeUJsb2NrU2VydmljZSwgcHJpdmF0ZSBjb25maWd1cmF0aW9uOkNvbmZpZ3VyYXRpb24pIHtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCB6b29tTGV2ZWwodmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsID0gKHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsID09IHVuZGVmaW5lZCkgPyAxMCA6IHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsO1xuICAgICAgICB0aGlzLl96b29tTGV2ZWwgPSAodGhpcy5fem9vbUxldmVsID09IHVuZGVmaW5lZCkgPyAxMCA6IHRoaXMuX3pvb21MZXZlbDtcbiAgICAgICAgaWYgKHRoaXMuX3pvb21MZXZlbCAhPSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNab29tTGV2ZWwgPSB0aGlzLl96b29tTGV2ZWw7XG4gICAgICAgICAgICB0aGlzLl96b29tTGV2ZWwgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuem9vbUNoYW5nZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGV4cG9zZWRJbmRleCh2YWx1ZTpudW1iZXIpe1xuICAgICAgICB0aGlzLl9leHBvc2VkID0gKHZhbHVlID09IHRoaXMuaW5kZXgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6YW55IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VQb3NpdGlvbk9uWm9vbSgxMDAwKTtcbiAgICB9XG5cbiAgICB6b29tKGUpIHtcbiAgICAgICAgdmFyIGUgPSB3aW5kb3cuZXZlbnQgfHwgZTsgLy8gb2xkIElFIHN1cHBvcnRcbiAgICAgICAgdGhpcy56b29tRXZlbnQuZW1pdChlKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHpvb21DaGFuZ2VkKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnW1N0b3J5QmxvY2sgIycgKyB0aGlzLmluZGV4ICsgJ10gWm9vbSBjaGFuZ2VkIGZyb20gJyArIHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsICsgJyB0byAnICsgdGhpcy5fem9vbUxldmVsKTtcbiAgICAgICAgaWYgKHRoaXMuX3pvb21MZXZlbCA8IHRoaXMuc3RvcnlCbG9ja0luZm8uaW1wb3J0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5mYWRlT3V0KDEwMDApO1xuICAgICAgICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVBvc2l0aW9uT25ab29tKDEwMDApO1xuICAgICAgICAgICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZhZGVJbihzcGVlZDpudW1iZXIpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIEZhZGluZyBpbi4uLicpO1xuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYWIuY3NzKCk7XG4gICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBmcm9tU3R5bGUgPSB7fTtcbiAgICAgICAgdmFyIHRvU3R5bGUgPSB7fTtcblxuICAgICAgICBmcm9tU3R5bGVbJ2Rpc3BsYXknXSA9ICdmbGV4JztcbiAgICAgICAgZnJvbVN0eWxlWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJ2N1YmljLWJlemllcigwLjU3NSwgMC4yNTUsIDAuNDQwLCAwLjk4NSk7JztcbiAgICAgICAgdG9TdHlsZVsnb3BhY2l0eSddID0gMTtcblxuICAgICAgICBhbmltYXRpb25cbiAgICAgICAgICAgIC5zZXREdXJhdGlvbihzcGVlZClcbiAgICAgICAgICAgIC5zZXRGcm9tU3R5bGVzKGZyb21TdHlsZSlcbiAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh0b1N0eWxlKTtcblxuICAgICAgICBpZiAoISFfc2VsZi5fYWN0aW9uVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF9zZWxmLl9hY3Rpb25UaW1lb3V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9zZWxmLl9hY3Rpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhbmltYXRpb24uc3RhcnQoX3NlbGYuX2UubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gICAgaGFzSWQoKSB7XG4gICAgICAgIHJldHVybiAhISgodGhpcy5zdG9yeUJsb2NrSW5mbyB8fCB7X2lkOnVuZGVmaW5lZH0pLl9pZCk7XG4gICAgfVxuXG4gICAgZmFkZU91dChzcGVlZDpudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIEZhZGluZyBvdXQuLi5bJyArIHRoaXMuX3pvb21MZXZlbCArICc8JyArIHRoaXMuc3RvcnlCbG9ja0luZm8uaW1wb3J0YW5jZSArICddJyk7XG4gICAgICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYWIuY3NzKCk7XG4gICAgICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGZyb21TdHlsZSA9IHt9O1xuICAgICAgICAgICAgdmFyIHRvU3R5bGUgPSB7fTtcblxuICAgICAgICAgICAgdG9TdHlsZVsndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSA9ICdjdWJpYy1iZXppZXIoMC41NzUsIDAuMjU1LCAwLjQ0MCwgMC45ODUpOyc7XG4gICAgICAgICAgICB0b1N0eWxlWydvcGFjaXR5J10gPSAwO1xuXG4gICAgICAgICAgICBhbmltYXRpb25cbiAgICAgICAgICAgICAgICAuc2V0RHVyYXRpb24oc3BlZWQpXG4gICAgICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoZnJvbVN0eWxlKVxuICAgICAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh0b1N0eWxlKTtcblxuICAgICAgICAgICAgaWYgKCEhX3NlbGYuX2FjdGlvblRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1N0b3J5QmxvY2sgIycgKyBfc2VsZi5pbmRleCArICddIEFuaW1hdGlvbiByZW1vdmVkJyk7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF9zZWxmLl9hY3Rpb25UaW1lb3V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3NlbGYuX2FjdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24uc3RhcnQoX3NlbGYuX2UubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlUG9zaXRpb25Pblpvb20oc3BlZWQpIHtcbiAgICAgICAgbGV0IGFuaW1hdGlvbiA9IHRoaXMuX2FiLmNzcygpO1xuICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgZnJvbVN0eWxlID0ge1xuICAgICAgICAgICAgdG9wOiB0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5vZmZzZXQgKyAoKHRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0ZXAgKyBNYXRoLmV4cCh0aGlzLl9wcmV2aW91c1pvb21MZXZlbCAqIHRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0cmVuZ3RoKSkgKiB0aGlzLnN0b3J5QmxvY2tJbmZvLnRpbWVQb3NpdGlvbikgKyAncHgnXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHRvU3R5bGUgPSB7XG4gICAgICAgICAgICB0b3A6IHRoaXMuY29uZmlndXJhdGlvbi56b29tLm9mZnNldCArICgodGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RlcCArIE1hdGguZXhwKHRoaXMuX3pvb21MZXZlbCAqIHRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0cmVuZ3RoKSkgKiB0aGlzLnN0b3J5QmxvY2tJbmZvLnRpbWVQb3NpdGlvbikgKyAncHgnXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIENoYW5naW5nIHBvc2l0aW9uIGZyb20gJyArIChmcm9tU3R5bGUudG9wKSArICcgdG8gJyArICh0b1N0eWxlLnRvcCkgKyAnIC4uLicpO1xuXG4gICAgICAgIGlmIChfc2VsZi5fem9vbUxldmVsID4gX3NlbGYuc3RvcnlCbG9ja0luZm8uaW1wb3J0YW5jZSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIC4uLmFuZCBmYWRpbmcgaW4gWycgKyB0aGlzLl96b29tTGV2ZWwgKyAnPicgKyB0aGlzLnN0b3J5QmxvY2tJbmZvLmltcG9ydGFuY2UgKyAnXScpO1xuICAgICAgICAgICAgdG9TdHlsZVsnb3BhY2l0eSddID0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdbU3RvcnlCbG9jayAjJyArIHRoaXMuaW5kZXggKyAnXSAuLi5hbmQgZmFkaW5nIG91dCcpO1xuICAgICAgICAgICAgdG9TdHlsZVsnb3BhY2l0eSddID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvU3R5bGVbJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gPSAnY3ViaWMtYmV6aWVyKDAuNTc1LCAwLjI1NSwgMC40NDAsIDAuOTg1KTsnO1xuXG4gICAgICAgIGFuaW1hdGlvblxuICAgICAgICAgICAgLnNldER1cmF0aW9uKHNwZWVkKVxuICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoZnJvbVN0eWxlKVxuICAgICAgICAgICAgLnNldFRvU3R5bGVzKHRvU3R5bGUpO1xuXG4gICAgICAgIGlmICghIV9zZWxmLl9hY3Rpb25UaW1lb3V0KSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnW1N0b3J5QmxvY2sgIycgKyB0aGlzLmluZGV4ICsgJ10gQW5pbWF0aW9uIHJlbW92ZWQnKTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfc2VsZi5fYWN0aW9uVGltZW91dCk7XG4gICAgICAgIH1cblxuICAgICAgICBfc2VsZi5fYWN0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYW5pbWF0aW9uLnN0YXJ0KF9zZWxmLl9lLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9LCAxMDApO1xuICAgIH1cblxuICAgIGZvY3VzKCkge1xuICAgICAgICB2YXIgbmF0aXZlID0gdGhpcy5fZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICB2YXIgY29udGFpbmVyID0gbnVsbDtcbiAgICAgICAgdmFyIHRleHRhcmVhID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYXRpdmUuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKChuYXRpdmUuY2hpbGROb2Rlc1tpXS5jbGFzc05hbWUgfHwgJycpLmluZGV4T2YoXCJ0ZXh0LWNvbnRhaW5lclwiKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gbmF0aXZlLmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEhY29udGFpbmVyKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKChjb250YWluZXIuY2hpbGROb2Rlc1tpXS5jbGFzc05hbWUgfHwgJycpLmluZGV4T2YoXCJkZXNjcmlwdGlvblwiKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhID0gY29udGFpbmVyLmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghIXRleHRhcmVhKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWRpdChpbmRleCwgZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NhdmluZyB0ZW1wb3JhcnkgZGF0YSAnLCB0aGlzLnN0b3J5QmxvY2tJbmZvKTtcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrTG9jYWxTYXZlID0gPFN0b3J5QmxvY2s+SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0b3J5QmxvY2tJbmZvKSk7XG4gICAgICAgIHRoaXMuZXhwb3NlRXZlbnQuZW1pdChpbmRleCk7XG4gICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG5cbiAgICByZW1vdmUoaW5kZXgsIGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja1NlcnZpY2UuZGVsZXRlU3RvcnlCbG9jayh0aGlzLnVzZXJJZCx0aGlzLnN0b3J5QmxvY2tJbmZvKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHdoaWxlIHJlbW92aW5nJywgdGhpcy5zdG9yeUJsb2NrSW5mbywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4uJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3ZpbmcgYmxvY2sgaW5kZXggJyArdGhpcy5pbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1JlbW92ZWQgc3VjY2Vzc2Z1bGx5LidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVN0b3J5QmxvY2tFdmVudC5lbWl0KHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHNhdmUoaW5kZXgsIGV2ZW50KSB7XG5cbiAgICAgICAgaWYgKCEodGhpcy5zdG9yeUJsb2NrSW5mby50aXRsZSA9PSAnJyAmJiB0aGlzLnN0b3J5QmxvY2tJbmZvLmRlc2NyaXB0aW9uID09ICcnKSkge1xuICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5zYXZlU3RvcnlCbG9jayh0aGlzLnVzZXJJZCx0aGlzLnN0b3J5QmxvY2tJbmZvKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcnlCbG9ja0luZm8gPSA8U3RvcnlCbG9jaz5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2F2aW5nIHRlbXBvcmFyeSBkYXRhICcsIGRhdGEsIHRoaXMuc3RvcnlCbG9ja0luZm8pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tMb2NhbFNhdmUgPSA8U3RvcnlCbG9jaz5KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RvcnlCbG9ja0luZm8pKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHdoaWxlIHNhdmluZycsIHRoaXMuc3RvcnlCbG9ja0luZm8sIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yLiBQbGVhc2UgdHJ5IGFnYWluLidcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTYXZlZCAnLCB0aGlzLnN0b3J5QmxvY2tJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2F2ZWQgc3VjY2Vzc2Z1bGx5LidcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoJ1BsZWFzZSBpbnNlcnQgYSB0aXRsZSBvciBzb21lIGNvbnRlbnQuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5leHBvc2VFdmVudC5lbWl0KC0xKTtcblxuICAgICAgICBpZiAoIXRoaXMuc3RvcnlCbG9ja0xvY2FsU2F2ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlbW92aW5nIGJsb2NrIGluZGV4ICcgK3RoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVTdG9yeUJsb2NrRXZlbnQuZW1pdCh0aGlzLmluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J3RpbWVsaW5lJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgVGltZWxpbmVDb21wb25lbnQge1xufSIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J2FkZC1idXR0b24nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxhPjxzcGFuPis8L3NwYW4+PC9hPlxuICAgIGAsXG4gICAgaW5wdXRzOiBbJ29mZnNldFknXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRCdXR0b25Db21wb25lbnQge1xuICAgIHByaXZhdGUgX29mZnNldFk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lOkVsZW1lbnRSZWYpe1xuXG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgb2Zmc2V0WSh2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fb2Zmc2V0WSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9mZnNldENoYW5nZWQodmFsdWUpO1xuICAgIH1cblxuICAgIG9mZnNldENoYW5nZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZS5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IHZhbHVlICsgJ3B4JztcbiAgICB9XG59IiwiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWZ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidub3RpZmljYXRpb24nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXY+e3sgX2NvbnRlbnTCoH19PC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25Db21wb25lbnQge1xuICAgIHByaXZhdGUgX3RpbWVyO1xuICAgIHByaXZhdGUgX2NvbnRlbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lOkVsZW1lbnRSZWYpe1xuXG4gICAgfVxuXG4gICAgc2hvdyhjb250ZW50KXtcbiAgICAgICAgaWYoISF0aGlzLl90aW1lcil7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB0aGlzLl9lLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZS5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtTdG9yeUJsb2NrU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0b3J5YmxvY2tzLnNlcnZpY2VcIjtcbmltcG9ydCB7VXRpbHNTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvdXRpbHMuc2VydmljZVwiO1xuaW1wb3J0IHtTdG9yeUJsb2NrfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2tcIjtcbmltcG9ydCB7U3RvcnlCbG9ja1R5cGV9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9jay10eXBlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidzaWRlYmFyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICpuZ0lmPVwiX2luZGV4ID09IC0xXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImNyZWF0ZS1zdG9yeWJsb2NrXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIChkcmFnc3RhcnQpPVwiZHJhZ1N0YXJ0KCRldmVudClcIiAoZHJhZ2VuZCk9XCJkcmFnRW5kKCRldmVudClcIj5DcmVhdGUgc3RvcnlibG9jazwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItY291bnRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+VG90YWwgY2hhcHRlcnM8L3NwYW4+PHNwYW4gY2xhc3M9XCJjb3VudFwiPnt7X3N0b3J5QmxvY2tzTGVuZ3RofX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJfaW5kZXggPj0gMCAmJiAhIV9zdG9yeUJsb2NrXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8aDM+PHNwYW4gY2xhc3M9XCJjYXBpdGFsLWxldHRlclwiPkNoYXB0ZXI8L3NwYW4+IHt7X3N0b3J5QmxvY2suYmxvY2tOdW1iZXIrMX19PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItc2VwYXJhdG9yXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3RvcnlibG9jayB0eXBlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFsobmdNb2RlbCldPVwiX3N0b3J5QmxvY2sudHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwiI3N0b3J5QmxvY2tUeXBlIG9mIHN0b3J5QmxvY2tUeXBlc1wiIHZhbHVlPXt7c3RvcnlCbG9ja1R5cGUuaWR9fT57e3N0b3J5QmxvY2tUeXBlLm5hbWV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1zZXBhcmF0b3JcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWNvdW50XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlRvdGFsIGNoYXJhY3RlcnM8L3NwYW4+PHNwYW4gY2xhc3M9XCJjb3VudFwiPnt7X3N0b3J5QmxvY2suZGVzY3JpcHRpb24ubGVuZ3RofX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWluZm9cIiAqbmdJZj1cIiEhX3N0b3J5QmxvY2suY3JlYXRlZEF0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkNyZWF0ZWQ8L3NwYW4+PHNwYW4gY2xhc3M9XCJpbmZvXCI+e3t1dGlsc1NlcnZpY2UuZ2V0SHVtYW5EYXRlKF9zdG9yeUJsb2NrLmNyZWF0ZWRBdCl9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItaW5mb1wiICpuZ0lmPVwiISFfc3RvcnlCbG9jay5sYXN0TW9kaWZpZWRBdFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5MYXN0IG1vZGlmaWVkPC9zcGFuPjxzcGFuIGNsYXNzPVwiaW5mb1wiPnt7dXRpbHNTZXJ2aWNlLmdldEh1bWFuRGF0ZShfc3RvcnlCbG9jay5sYXN0TW9kaWZpZWRBdCl9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW1V0aWxzU2VydmljZV0sXG4gICAgaW5wdXRzOiBbJ3N0b3J5QmxvY2snLCAnc3RvcnlCbG9ja3NMZW5ndGgnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgc3RvcnlCbG9ja1R5cGVzOlN0b3J5QmxvY2tUeXBlW107XG4gICAgXG4gICAgcHVibGljIF9pbmRleDogbnVtYmVyO1xuICAgIHB1YmxpYyBfc3RvcnlCbG9jaztcbiAgICBwdWJsaWMgX3N0b3J5QmxvY2tzTGVuZ3RoO1xuICAgIHB1YmxpYyBfc3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgICBAT3V0cHV0KCkgc3RhcnREcmFnZ2luZzpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgZW5kRHJhZ2dpbmc6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdG9yeUJsb2NrU2VydmljZTpTdG9yeUJsb2NrU2VydmljZSwgcHJpdmF0ZSB1dGlsc1NlcnZpY2U6VXRpbHNTZXJ2aWNlKSB7fVxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHN0b3J5QmxvY2soc3RvcnlCbG9jaykge1xuICAgICAgICB0aGlzLl9zdG9yeUJsb2NrID0gc3RvcnlCbG9jaztcbiAgICB9XG4gICAgQElucHV0KClcbiAgICBzZXQgc3RvcnlCbG9ja3NMZW5ndGgoc3RvcnlCbG9ja3NMZW5ndGgpe1xuICAgICAgICB0aGlzLl9zdG9yeUJsb2Nrc0xlbmd0aCA9IHN0b3J5QmxvY2tzTGVuZ3RoO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrVHlwZXMgPSB0aGlzLl9zdG9yeUJsb2NrU2VydmljZS5nZXRTdG9yeUJsb2NrVHlwZXMoKTtcbiAgICAgICAgdGhpcy5faW5kZXggPSB0aGlzLl9zdG9yeUJsb2NrU2VydmljZS5nZXRFeHBvc2VkSW5kZXgoKTtcbiAgICAgICAgdGhpcy5fc3RvcnlCbG9jayA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX3N0b3J5QmxvY2tTZXJ2aWNlLmluZGV4Q2hhbmdlJC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBpbmRleCA9PiB0aGlzLnNlbGVjdEluZGV4KGluZGV4KSk7XG4gICAgfVxuICAgIHNlbGVjdEluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5faW5kZXggPSBpbmRleDtcbiAgICB9XG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBkcmFnU3RhcnQoZSl7XG4gICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpbWcuc3JjID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNRQUFBQWtDQVlBQUFEaEFKaVlBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFCTzFKUkVGVVdBbk5tRUZzRkZVWXg3ODNPN1BhQXJwZ3FGS3RHS01oR09KSkVtMUZROElhcFVRa3BqMlllUE5takFlajhlRFJnOUY0SU1hYk54TVBiUlF4Z01aaWlHS3JDUnlNVVFscVRFQXBDQXFyaGhaM1p1ZjUvZDdzMjkzU2xwM0ZsdXlYN096YjJmZisvLzk4NzczdmZkOFk2ZEJ1M0dkWEJ4ZXJ3MVpNV1l6Y2JxM3ROOGIwQTZQdGFXMVBpNVdUUnV4RXVxSzQvNjhkNWtJbkZDWnY1OUpZc2t0cytwdzFza1dadzF6ampFbU1sY05pZ3JjcW8rR2VQR1BhQ2xyOWZqeGthL1oxZmZwQkFLT0NzUSt0TldiN3JZRnN1TUhJdWg0anQxeWZVWjI1SkhKNjFzcnh2NjBjT0pYS0YrZXNqV3Y2Q0dycXVTbFRNQzlkZURLYXpIb3ZmRjFVME1pWUxVeEkvS1lLZVo2aGZUM0d2bnhQd1l5c0QyUlZQdi9JUDRuSStJbFVYdnVoWnMvT05vVHRMa3Ywd3Zpb3FTMGthVUZCcFQyMlpPTjRUS2VtWEZTUHZMaXhZSjdkRUVodklZUDR0bUpsdjNyZ3EzTldwdFVqZUFiRFUvM3FzUWZXR2hsV0Q5NWJ5dUJubFBydDQ2bThjYXhtcTNqTW1Ba1RSYU9WWGFhU2pXeGU1d2x5WXFyVktlMnlFYSs4TnhTYSs5WmszZmIrWnVYVjd4TDVTYWNrajkydFUvcktwbEIyM3BhTlAzcmV5bE9UaWZmV01WTXNEbDR1YW80Z3B1bFRpVC9HTTV0S2dZeHRDZldKUlU1Y0ZIbm02MFNPL0pubTBUR3Z6K2FiQW5ubi9sRFdyeEQxcU1qSTRVUytyeWlXZXVvUmlSNXJuYjZnZFRSckJqRjR4b3VaMUduWmVqQythakhnOHlCZ2dNVURqdXVEd2dHWDQyd1IwZkFRdXlsTjBpOVpNd2UyWnRNRXdCT2ZKeEtuK2Fhb0JYZkJaaFFZK2ZEaFVJWjBqVEY5Mnc4bGJrMEZZZkNnMzMwTkQ3RzFRV0VCczJhWXBxZW5sazRNMkR3WW1HRERBUmYzUFRkdEo0aWdSNXpCamV3bWpEVnovdCtsOFl3RHJGL0FCQnVEQzA2NFhlRFZleG03Um1BNkVHZlkydXltcTEzQTRMUXpzT0dBQzA3WHY2N0JjRGJKVEh3MkNxVHd5ODdJRVBRMmZ4TG4zdHJ0eUJmN241Qnc1TkhJQmM4Nzk4WTJUcVVtdlZGZllHYmlIYnJhUTQ0RHhCRDA4c2FaeGNqeTNJY0RMampoUmdOYW1MSXlBSnhOR0JHNEUrdlQ2RndaTGJwUFk4dm1CUEJjbmx1SGxWRXh3SGdPU296ajRGcVo1L0xjeWpzUTZncDN1UXluTnNiWmxNZnUwS2lMcmJtdTZSY2lNVlpUaUY5bnN2YVZycDdMYzZNbEpMblN4cHdVNGtvZy9yOXZob3UrMmZqMjkvNjRaT1d1aitMRy9jVWFyWWN5ZmRCQ0l1RmNrczh2VGVqWnBEbWlKOHk4NU85eHV1Y3g3OXNta2xpbTdMUU9Ydlc3cGhBclYyWXB4TS90SDA3V2ZaQjFZbEgvK0hqbXJYNjkxd0xlVnRQTjljUU9iZ3d0Z2N1QjlRZVpIa1krYzYzTWMzbHV0QVFrNUFnZzdjUklyanF4cWthSm94cDUrWFRpblZZdXo0MldRQ3VIZy94SkRveVI2WFZpbGFySXRzOFM5K2xrSEgwOWwrZW1VZ2xzYjdSUGwzZENRazRPVE5wSldGOXVnd011T09GR0EyVlRRTjFFcVVKMVFFS09rWFl1dDNrT09PRkdBMXF5K2RHNkNRRlVCMnhaY21EU3p1VXlzT0dBQzA3SFU5ZmdXQ25pZElWUFVhcFFIV0Rrd0sxUjJOMWNnZ3VZWUdOd3dRbTNMeVFiYnFDSW94T2xDdWtseDhDN2c2R1FkaTZWZ1FVbTJIREFCYmJucHQwUVJFNnJTbmRUTjFHcVVCMlErNUlETDRXbndQRDVOTmh3d0FXbno2Zm5DT0lIRlNXbENXNmtWUEdpRG0yTC90ZWFZczJBd1FQNk1zaFZzc3JsT0NHdjI3ejU2S3BDMGF2c3FsTGFpK3FxbHcxZUZOOWQ4enFtVlJUdHJubGhkYmt3eWlaWHFXVEZ3UUJwcDI3ZHVhLzBOSVBWY1JPY2s1MiswdnNQT09QbExuVlkwbFlBQUFBQVNVVk9SSzVDWUlJPVwiO1xuICAgICAgICBpbWcuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoaW1nLCAxOCwgMTgpO1xuICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcuZW1pdChlKTtcbiAgICB9XG4gICAgZHJhZ0VuZChlKXtcbiAgICAgICAgdmFyIGljb25XaWR0aCA9IDM2O1xuICAgICAgICB2YXIgYXNpZGVXaWR0aCA9IDI0MDtcbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPj0gNzY4ICYmIGUueCA+IHdpbmRvdy5pbm5lcldpZHRoIC0gYXNpZGVXaWR0aCAtIGljb25XaWR0aCl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmREcmFnZ2luZy5lbWl0KGUpO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgVXNlciB7XG4gICAgbmFtZSA6IHN0cmluZztcbiAgICBlbWFpbCA6IHN0cmluZztcbiAgICBwYXNzd29yZCA6IHN0cmluZztcbn0iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWJTdG9yYWdlU2VydmljZSB7XG4gICAgcHJpdmF0ZSBzdG9yYWdlU3VwcG9ydGVkID0gKHR5cGVvZihTdG9yYWdlKSAhPT0gXCJ1bmRlZmluZWRcIik7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBwdXQoa2V5LCB2YWx1ZSk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2VTdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgIGlmICghIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wdXRJbkxvY2FsU3RvcmFnZShrZXksIHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tTG9jYWxTdG9yYWdlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoISF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHV0SW5Db29raWVzKGtleSwgdmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21Db29raWVzKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQoa2V5KTphbnkge1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlU3VwcG9ydGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGcm9tTG9jYWxTdG9yYWdlKGtleSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEZyb21Db29raWUoa2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZShrZXkpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlU3VwcG9ydGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tQ29va2llcyhrZXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwdXRJbkxvY2FsU3RvcmFnZShrZXksIHZhbHVlKTp2b2lkIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShlbmNvZGVVUkkodmFsdWUpIHx8IFwiXCIpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEZyb21Mb2NhbFN0b3JhZ2Uoa2V5KTphbnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUkkobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgfHwgXCJ7fVwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KTp2b2lkIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHB1dEluQ29va2llcyhrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcbiAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgKDMwICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xuICAgICAgICB2YXIgZXhwaXJlcyA9IGQudG9VVENTdHJpbmcoKTtcbiAgICAgICAgZG9jdW1lbnQuY29va2llICs9IGtleSArICc9JyArIEpTT04uc3RyaW5naWZ5KGVuY29kZVVSSSh2YWx1ZSkgfHwgXCJcIikgKyBcIjtwYXRoPS87ZXhwaXJlcz1cIiArIGV4cGlyZXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRGcm9tQ29va2llKGtleSk6YW55IHtcbiAgICAgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnKD86Xnw7KVxcXFxzPycgKyBrZXkgKyAnPSguKj8pKD86O3wkKScsICdpJyk7XG4gICAgICAgIHZhciBtdGMgPSBkb2N1bWVudC5jb29raWUubWF0Y2gocmVnZXgpIHx8IFtdO1xuICAgICAgICBpZiAobXRjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZVVSSShtdGNbMV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfTtcblxuICAgIHByaXZhdGUgcmVtb3ZlRnJvbUNvb2tpZXMoa2V5KTp2b2lkIHtcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0ga2V5ICsgXCI9O3BhdGg9LztleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UXCI7XG4gICAgfVxufSIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7SHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtKd3RUb2tlbn0gZnJvbSBcIi4uL21vZGVscy9qd3RUb2tlblwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9tb2RlbHMvdXNlclwiO1xuaW1wb3J0IHtXZWJTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4vd2Vic3RvcmFnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDpIdHRwLCBwcml2YXRlIHdlYlN0b3JhZ2VTZXJ2aWNlOldlYlN0b3JhZ2VTZXJ2aWNlLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbikge1xuICAgIH1cblxuICAgIGxvZ291dCgpOmJvb2xlYW4ge1xuICAgICAgICB0aGlzLndlYlN0b3JhZ2VTZXJ2aWNlLnJlbW92ZSh0aGlzLmNvbmZpZ3VyYXRpb24udG9rZW4ubmFtZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGxvZ2luKHVzZXI6VXNlcik6T2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIHRlbXBvcmFyeSBkYXRhJyk7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvYXV0aC9sb2dpbicsXG4gICAgICAgICAgICAgICAgXCJuYW1lPVwiICsgdXNlci5uYW1lICsgXCImXCIgK1xuICAgICAgICAgICAgICAgIFwiZW1haWw9XCIgKyB1c2VyLmVtYWlsICsgXCImXCIgK1xuICAgICAgICAgICAgICAgIFwicGFzc3dvcmQ9XCIgKyB1c2VyLnBhc3N3b3JkLFxuICAgICAgICAgICAgb3B0aW9ucylcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy50ZXh0KCkpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKHVzZXI6VXNlcik6T2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIHRlbXBvcmFyeSBkYXRhJyk7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpQmFzZVBhdGggKyAnL2F1dGgvcmVnaXN0ZXInLFxuICAgICAgICAgICAgICAgIFwiZW1haWw9XCIgKyB1c2VyLmVtYWlsICsgXCImXCIgK1xuICAgICAgICAgICAgICAgIFwicGFzc3dvcmQ9XCIgKyB1c2VyLnBhc3N3b3JkLFxuICAgICAgICAgICAgb3B0aW9ucylcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy50ZXh0KCkpO1xuXG4gICAgfVxuXG4gICAgaXNMb2dnZWRJbigpOmJvb2xlYW4ge1xuICAgICAgICB2YXIgdG9rZW5EYXRhU3BsaXQgPSAodGhpcy53ZWJTdG9yYWdlU2VydmljZS5nZXQodGhpcy5jb25maWd1cmF0aW9uLnRva2VuLm5hbWUpIHx8ICcnKS5zcGxpdCgnLicpWzFdO1xuICAgICAgICBpZiAoIXRva2VuRGF0YVNwbGl0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRva2VuRGF0YVJhdyA9IGF0b2IodG9rZW5EYXRhU3BsaXQpO1xuXG4gICAgICAgIHZhciB0b2tlbkRhdGEgPSBKU09OLnBhcnNlKHRva2VuRGF0YVJhdykgYXMgSnd0VG9rZW47XG4gICAgICAgIHJldHVybiAodG9rZW5EYXRhLmV4cCB8fCAwKSA+IERhdGUubm93KCkgLyAxMDAwO1xuICAgIH07XG5cblxuICAgIGdldElkRnJvbVRva2VuKCkge1xuICAgICAgICB2YXIgdG9rZW5EYXRhU3BsaXQgPSAodGhpcy53ZWJTdG9yYWdlU2VydmljZS5nZXQodGhpcy5jb25maWd1cmF0aW9uLnRva2VuLm5hbWUpIHx8ICcnKS5zcGxpdCgnLicpWzFdO1xuICAgICAgICBpZiAoIXRva2VuRGF0YVNwbGl0KSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRva2VuRGF0YVJhdyA9IGF0b2IodG9rZW5EYXRhU3BsaXQpO1xuXG4gICAgICAgIHZhciB0b2tlbkRhdGEgPSBKU09OLnBhcnNlKHRva2VuRGF0YVJhdykgYXMgSnd0VG9rZW47XG5cbiAgICAgICAgcmV0dXJuIHRva2VuRGF0YS5faWRcbiAgICB9XG5cbiAgICBnZXRJZEZyb21Bbm9ueW1vdXNUb2tlbih0b2tlbkRhdGFTdHJpbmcpIHtcbiAgICAgICAgdmFyIHRva2VuRGF0YVJhdyA9IGF0b2IodG9rZW5EYXRhU3RyaW5nKTtcblxuICAgICAgICB2YXIgdG9rZW5EYXRhID0gSlNPTi5wYXJzZSh0b2tlbkRhdGFSYXcpIGFzIEp3dFRva2VuO1xuICAgICAgICByZXR1cm4gdG9rZW5EYXRhLl9pZFxuICAgIH1cblxuICAgIGdlbmVyYXRlQW5vbnltb3VzVG9rZW4oKTphbnkge1xuICAgICAgICB2YXIgYW5vbnltb3VzVG9rZW4gPSB7XG4gICAgICAgICAgICBfaWQ6IHRoaXMuZ2VuZXJhdGVVbmlxdWVJZCgpXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGJ0b2EoSlNPTi5zdHJpbmdpZnkoYW5vbnltb3VzVG9rZW4pKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdlbmVyYXRlVW5pcXVlSWQoKSB7XG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xuICAgICAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgICAgICB9KTtcbiAgICB9O1xufSIsImltcG9ydCB7Q29udHJvbCwgQ29udHJvbEdyb3VwfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5cbi8qXG4gQ3VzdG9tIHZhbGlkYXRvcnMgdG8gdXNlIGV2ZXJ5d2hlcmUuXG4gKi9cblxuLy8gU0lOR0xFIEZJRUxEIFZBTElEQVRPUlNcbmV4cG9ydCBmdW5jdGlvbiBlbWFpbFZhbGlkYXRvcihjb250cm9sOiBDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHZhciBlbWFpbFJlZ2V4cCA9IC9eW2EtejAtOSEjJCUmJyorXFwvPT9eX2B7fH1+Li1dK0BbYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXC5bYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPykqJC9pO1xuICAgIGlmIChjb250cm9sLnZhbHVlICYmIGNvbnRyb2wudmFsdWUubGVuZ3RoIDwgNiAmJiAhZW1haWxSZWdleHAudGVzdChjb250cm9sLnZhbHVlKSkge1xuICAgICAgICByZXR1cm4ge2ludmFsaWRFbWFpbDogdHJ1ZX07XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZW1haWxSZWdleHAgPSAnXlthLXowLTkhIyQlJlxcJyorXFxcXC89P15fYHt8fX4uLV0rQFthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KFxcXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKiQnO1xuXG4vL0NPTlRST0wgR1JPVVAgVkFMSURBVE9SU1xuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoaW5nUGFzc3dvcmRzKHBhc3N3b3JkS2V5OiBzdHJpbmcsIGNvbmZpcm1QYXNzd29yZEtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChncm91cDogQ29udHJvbEdyb3VwKToge1trZXk6IHN0cmluZ106IGFueX0gPT4ge1xuICAgICAgICBsZXQgcGFzc3dvcmQgPSBncm91cC5jb250cm9sc1twYXNzd29yZEtleV07XG4gICAgICAgIGxldCBjb25maXJtUGFzc3dvcmQgPSBncm91cC5jb250cm9sc1tjb25maXJtUGFzc3dvcmRLZXldO1xuICAgICAgICBpZiAocGFzc3dvcmQudmFsdWUgIT09IGNvbmZpcm1QYXNzd29yZC52YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtaXNtYXRjaGVkUGFzc3dvcmRzOiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICB9XG59IiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXJcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cCwgRk9STV9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge2VtYWlsVmFsaWRhdG9yLCBtYXRjaGluZ1Bhc3N3b3JkcywgZW1haWxSZWdleHB9IGZyb20gJy4uL3NlcnZpY2VzL3ZhbGlkYXRvcnMuc2VydmljZSc7XG5pbXBvcnQge1dlYlN0b3JhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvd2Vic3RvcmFnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NpZ24taW4tZm9ybScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0td3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhib3ggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8aDE+Q29tZSBpbiwgc3Rvcnl0ZWxsZXI8L2gxPlxuICAgICAgICAgICAgICAgIDxkaXY+PGEgY2xhc3M9XCJjbG9zZVwiIChjbGljayk9XCJjbG9zZSgkZXZlbnQpXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2E+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJmb3JtXCIgKG5nU3VibWl0KT1cIm9uU2lnbkluKCRldmVudClcIiBub3ZhbGlkYXRlPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLmVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cImZvcm0uY29udHJvbHNbJ2VtYWlsJ11cIlxuICAgICAgICAgICAgICAgICAgICAjZW1haWw9XCJuZ0Zvcm1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgICpuZ0lmPVwiKGVtYWlsLmRpcnR5IHx8IHN1Ym1pdHRlZCkgJiYgIWVtYWlsLnZhbGlkXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1lcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICBFbWFpbCBpcyBpbnZhbGlkXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlci5wYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXCJcbiAgICAgICAgICAgICAgICAgICAgI3Bhc3N3b3JkPVwibmdGb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2ICAqbmdJZj1cIihwYXNzd29yZC5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmICFwYXNzd29yZC52YWxpZFwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgVGhlIHBhc3N3b3JkIHNob3VsZCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZ1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24gcHJpbWFyeSBibG9jay1idXR0b25cIj5TaWduIGluPC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2FwLWZvcm1cIj48YSAoY2xpY2spPVwic3dhcFRvU2lnblVwKClcIj5JIHdhbnQgdG8gY3JlYXRlIGEgbmV3IGFjY291bnQ8L2E+PC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2UsIFdlYlN0b3JhZ2VTZXJ2aWNlXSxcbiAgICBkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTXVxufSlcblxuZXhwb3J0IGNsYXNzIFNpZ25JbkNvbXBvbmVudCB7XG4gICAgdXNlcjpVc2VyID0gbmV3IFVzZXIoKTtcbiAgICBmb3JtOkNvbnRyb2xHcm91cDtcbiAgICBzdWJtaXR0ZWQgPSBmYWxzZTtcblxuICAgIEBPdXRwdXQoKSBjbG9zZU1vZGFsOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBzd2FwV2luZG93OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBub3RpZnk6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGF1dGhTdGF0dXM6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlLCBwcml2YXRlIGJ1aWxkZXI6Rm9ybUJ1aWxkZXIsIHByaXZhdGUgd2ViU3RvcmFnZVNlcnZpY2U6V2ViU3RvcmFnZVNlcnZpY2UsIHByaXZhdGUgY29uZmlndXJhdGlvbjpDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZm9ybSA9IGJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oZW1haWxSZWdleHApXSldLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY2xvc2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsLmVtaXQoZXZlbnQpO1xuICAgIH1cblxuICAgIHN3YXBUb1NpZ25VcCgpIHtcbiAgICAgICAgdGhpcy5zd2FwV2luZG93LmVtaXQoZXZlbnQpO1xuICAgIH1cblxuICAgIG9uU2lnbkluKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dpbih0aGlzLnVzZXIpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJTdG9yYWdlU2VydmljZS5wdXQodGhpcy5jb25maWd1cmF0aW9uLnRva2VuLm5hbWUsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dnZWQgaW4nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU3RhdHVzLmVtaXQoJ0xvZ2luJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoJycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXJcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cCwgRk9STV9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge2VtYWlsVmFsaWRhdG9yLCBtYXRjaGluZ1Bhc3N3b3JkcywgZW1haWxSZWdleHB9IGZyb20gJy4uL3NlcnZpY2VzL3ZhbGlkYXRvcnMuc2VydmljZSc7XG5pbXBvcnQge1dlYlN0b3JhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvd2Vic3RvcmFnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NpZ24tdXAtZm9ybScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0td3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhib3ggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8aDE+QmVjb21lIGEgc3Rvcnl0ZWxsZXI8L2gxPlxuICAgICAgICAgICAgICAgIDxkaXY+PGEgY2xhc3M9XCJjbG9zZVwiIChjbGljayk9XCJjbG9zZSgkZXZlbnQpXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2E+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJmb3JtXCIgKG5nU3VibWl0KT1cIm9uU2lnblVwKCRldmVudClcIiBub3ZhbGlkYXRlPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cImZvcm0uY29udHJvbHNbJ25hbWUnXVwiXG4gICAgICAgICAgICAgICAgICAgICNuYW1lPVwibmdGb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiAgKm5nSWY9XCIobmFtZS5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmICFuYW1lLnZhbGlkXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1lcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICBZb3VyIG5hbWUgaXMgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIuZW1haWxcIiBcbiAgICAgICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdPVwiZm9ybS5jb250cm9sc1snZW1haWwnXVwiXG4gICAgICAgICAgICAgICAgICAgICNlbWFpbD1cIm5nRm9ybVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiAgKm5nSWY9XCIoZW1haWwuZGlydHkgfHwgc3VibWl0dGVkKSAmJiAhZW1haWwudmFsaWRcIiBjbGFzcz1cInBhbmVsIHBhbmVsLWVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgIEVtYWlsIGlzIGludmFsaWRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLnBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cImZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ11cIlxuICAgICAgICAgICAgICAgICAgICAjcGFzc3dvcmQ9XCJuZ0Zvcm1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgICpuZ0lmPVwiKHBhc3N3b3JkLmRpcnR5IHx8IHN1Ym1pdHRlZCkgJiYgIXBhc3N3b3JkLnZhbGlkXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1lcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICBUaGUgcGFzc3dvcmQgc2hvdWxkIGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlci5jb25maXJtUGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdPVwiZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ11cIlxuICAgICAgICAgICAgICAgICAgICAjY29uZmlybVBhc3N3b3JkPVwibmdGb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb25maXJtLXBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIoY29uZmlybVBhc3N3b3JkLmRpcnR5IHx8IHN1Ym1pdHRlZCkgJiYgZm9ybS5oYXNFcnJvcignbWlzbWF0Y2hlZFBhc3N3b3JkcycpXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1lcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICBUaGUgcGFzc3dvcmRzIGRvbid0IG1hdGNoXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ1dHRvbiBwcmltYXJ5IGJsb2NrLWJ1dHRvblwiPlNpZ24gdXA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN3YXAtZm9ybVwiPjxhIChjbGljayk9XCJzd2FwVG9TaWduSW4oKVwiPkkgYWxyZWFkeSBoYXZlIGFuIGFjY291bnQ8L2E+PC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2UsIFdlYlN0b3JhZ2VTZXJ2aWNlXSxcbiAgICBkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTXVxufSlcblxuZXhwb3J0IGNsYXNzIFNpZ25VcENvbXBvbmVudCB7XG4gICAgdXNlcjpVc2VyID0gbmV3IFVzZXIoKTtcbiAgICBmb3JtOkNvbnRyb2xHcm91cDtcbiAgICBzdWJtaXR0ZWQgPSBmYWxzZTtcblxuICAgIEBPdXRwdXQoKSBjbG9zZU1vZGFsOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBzd2FwV2luZG93OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBub3RpZnk6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGF1dGhTdGF0dXM6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlLCBwcml2YXRlIGJ1aWxkZXI6Rm9ybUJ1aWxkZXIsIHByaXZhdGUgd2ViU3RvcmFnZVNlcnZpY2U6V2ViU3RvcmFnZVNlcnZpY2UsIHByaXZhdGUgY29uZmlndXJhdGlvbjpDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZm9ybSA9IGJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgbmFtZTpbJyddLFxuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oZW1haWxSZWdleHApXSldLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0pXSxcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgfSwge3ZhbGlkYXRvcjogbWF0Y2hpbmdQYXNzd29yZHMoJ3Bhc3N3b3JkJywgJ2NvbmZpcm1QYXNzd29yZCcpfSlcbiAgICB9XG5cbiAgICBjbG9zZShldmVudCkge1xuICAgICAgICB0aGlzLmNsb3NlTW9kYWwuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgc3dhcFRvU2lnbkluKCkge1xuICAgICAgICB0aGlzLnN3YXBXaW5kb3cuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgb25TaWduVXAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmZvcm0udmFsdWUpKTtcbiAgICAgICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJTdG9yYWdlU2VydmljZS5wdXQodGhpcy5jb25maWd1cmF0aW9uLnRva2VuLm5hbWUsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlIGVtYWlsIGlzIGFscmVhZHkgdGFrZW4nXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVnaXN0ZXJlZCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTdGF0dXMuZW1pdCgnTG9naW4nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgnJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5pbXBvcnQge1NpZ25JbkNvbXBvbmVudH0gZnJvbSBcIi4vc2lnbmluLWZvcm0uY29tcG9uZW50XCI7XG5pbXBvcnQge1NpZ25VcENvbXBvbmVudH0gZnJvbSBcIi4vc2lnbnVwLWZvcm0uY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXV0aC1mb3JtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2lnbi1pbi1mb3JtIFxuICAgICAgICAgICAgKm5nSWY9XCJsb2dpblwiIFxuICAgICAgICAgICAgKGNsb3NlTW9kYWwpPVwiaGlkZUFjY2Vzc0Zvcm0oKVwiXG4gICAgICAgICAgICAoc3dhcFdpbmRvdyk9XCJsb2dpbj0hbG9naW5cIlxuICAgICAgICAgICAgKGF1dGhTdGF0dXMpPVwiYXV0aFN0YXR1c0NoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAobm90aWZ5KT1cIm5vdGlmeU1lc3NhZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgICA+PC9zaWduLWluLWZvcm0+XG4gICAgICAgIDxzaWduLXVwLWZvcm0gXG4gICAgICAgICAgICAqbmdJZj1cIiFsb2dpblwiIFxuICAgICAgICAgICAgKGNsb3NlTW9kYWwpPVwiaGlkZUFjY2Vzc0Zvcm0oKVwiXG4gICAgICAgICAgICAoc3dhcFdpbmRvdyk9XCJsb2dpbj0hbG9naW5cIlxuICAgICAgICAgICAgKGF1dGhTdGF0dXMpPVwiYXV0aFN0YXR1c0NoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAobm90aWZ5KT1cIm5vdGlmeU1lc3NhZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgICA+PC9zaWduLXVwLWZvcm0+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtdLFxuICAgIGRpcmVjdGl2ZXM6IFtTaWduSW5Db21wb25lbnQsIFNpZ25VcENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRoRm9ybUNvbXBvbmVudCB7XG4gICAgQE91dHB1dCgpIGNsb3NlTW9kYWw6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG5vdGlmeTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgYXV0aFN0YXR1czpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBcbiAgICBwdWJsaWMgbG9naW49ZmFsc2U7XG5cbiAgICBoaWRlQWNjZXNzRm9ybShldmVudCkge1xuICAgICAgICB0aGlzLmNsb3NlTW9kYWwuZW1pdChldmVudCk7XG4gICAgfVxuICAgIFxuICAgIG5vdGlmeU1lc3NhZ2UoZXZlbnQpe1xuICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBhdXRoU3RhdHVzQ2hhbmdlZChldmVudCl7XG4gICAgICAgIHRoaXMuYXV0aFN0YXR1cy5lbWl0KGV2ZW50KTtcbiAgICB9XG59IiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TmdDbGFzc30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7U3RvcnlCbG9ja1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdG9yeWJsb2Nrcy5zZXJ2aWNlXCI7XG5pbXBvcnQge1N0b3J5QmxvY2t9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9ja1wiO1xuaW1wb3J0IHtTdG9yeUJsb2NrQ29tcG9uZW50fSBmcm9tIFwiLi9zdG9yeWJsb2NrLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUaW1lbGluZUNvbXBvbmVudH0gZnJvbSBcIi4vdGltZWxpbmUuY29tcG9uZW50XCI7XG5pbXBvcnQge0FkZEJ1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vYWRkLWJ1dHRvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7Tm90aWZpY2F0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9ub3RpZmljYXRpb24uY29tcG9uZW50XCI7XG5pbXBvcnQge1NpZGViYXJDb21wb25lbnR9IGZyb20gXCIuL3NpZGViYXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHtTdG9yeUJsb2NrVHlwZX0gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrLXR5cGVcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7V2ViU3RvcmFnZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy93ZWJzdG9yYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7QXV0aEZvcm1Db21wb25lbnR9IGZyb20gXCIuL2F1dGgtZm9ybS5jb21wb25lbnRcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1jb250ZW50JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDx0aW1lbGluZSBjbGFzcz1cInRpbWVsaW5lLWJsb2NrXCI+PC90aW1lbGluZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdG9yeS1ibG9ja3NcIj5cbiAgICAgICAgICAgICAgICA8c3RvcnlibG9jayAqbmdGb3I9XCIjc3RvcnlCbG9jayBvZiBzdG9yeUJsb2NrczsgI2kgPSBpbmRleFwiIFxuICAgICAgICAgICAgICAgICAgICBbaW5kZXhdPVwiaVwiIFxuICAgICAgICAgICAgICAgICAgICBbc3RvcnlCbG9ja0luZm9dPVwic3RvcnlCbG9ja1wiIFxuICAgICAgICAgICAgICAgICAgICBbem9vbUxldmVsXT1cInpvb21MZXZlbFwiXG4gICAgICAgICAgICAgICAgICAgIFt1c2VySWRdPVwidXNlcklkXCJcbiAgICAgICAgICAgICAgICAgICAgW2V4cG9zZWRJbmRleF09XCJleHBvc2VkSW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ZXhwb3NlZDogZXhwb3NlZEluZGV4ID09IGl9XCJcbiAgICAgICAgICAgICAgICAgICAgKHJlbW92ZVN0b3J5QmxvY2tFdmVudCk9XCJyZW1vdmVTdG9yeUJsb2NrKCRldmVudClcIiBcbiAgICAgICAgICAgICAgICAgICAgKGV4cG9zZUV2ZW50KT1cInNldEV4cG9zZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgIChub3RpZnkpPVwibm90aWZ5KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0b3J5LWJsb2NrIHt7IHN0b3J5QmxvY2sudHlwZcKgfX1cIj48L3N0b3J5YmxvY2s+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZFN0b3J5QmxvY2soJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwib25Nb3VzZUVudGVyKCRldmVudClcIlxuICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cIm9uTW91c2VMZWF2ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAobW91c2Vtb3ZlKT1cIm9uTW91c2VNb3ZlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8YWRkLWJ1dHRvbiAqbmdJZj1cImFkZEJ1dHRvbi52aXNpYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgW29mZnNldFldPVwiYWRkQnV0dG9uLnRvcFwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhZGRTdG9yeUJsb2NrKCRldmVudClcIj48L2FkZC1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ6b29tLWNvbnRyb2xzXCI+ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9XCJab29tIGluXCIgKGNsaWNrKT1cInpvb21JbigpXCI+KzwvYT4gIFxuICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT1cIlpvb20gb3V0XCIgKGNsaWNrKT1cInpvb21PdXQoKVwiPiZuZGFzaDs8L2E+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPGFzaWRlIFtuZ0NsYXNzXT1cInt2aXNpYmxlOiBtZW51VmlzaWJsZX1cIj5cbiAgICAgICAgICAgIDxzaWRlYmFyXG4gICAgICAgICAgICAoc3RhcnREcmFnZ2luZyk9XCJ0b2dnbGVNZW51KGZhbHNlKVwiXG4gICAgICAgICAgICAoZW5kRHJhZ2dpbmcpPVwiYWRkU3RvcnlCbG9jaygkZXZlbnQpXCJcbiAgICAgICAgICAgIFtzdG9yeUJsb2NrXT1cImV4cG9zZWRTdG9yeUJsb2NrXCIgW3N0b3J5QmxvY2tzTGVuZ3RoXT1cInN0b3J5QmxvY2tzLmxlbmd0aFwiPjwvc2lkZWJhcj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwidXNlci1hc2lkZVwiIChjbGljayk9XCJkb3dubG9hZFBkZigpXCI+RG93bmxvYWQgUERGPC9hPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJ1c2VyLWFzaWRlXCIgKm5nSWY9XCIhaXNMb2dnZWRJbigpXCIgKGNsaWNrKT1cInNob3dBY2Nlc3NGb3JtKClcIj5Mb2dpbi9TaWdudXA8L2E+XG4gICAgICAgICAgICA8YSBjbGFzcz1cInVzZXItYXNpZGVcIiAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiIChjbGljayk9XCJsb2dPdXQoKVwiPkxvZ291dDwvYT5cbiAgICAgICAgICAgIDxhIGlkPVwiY2xvc2UtbWVudVwiIChjbGljayk9XCJ0b2dnbGVNZW51KGZhbHNlKVwiPjwvYT5cbiAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgPGhlYWRlcj48YSBpZD1cImJ1cmdlclwiIChjbGljayk9XCJ0b2dnbGVNZW51KHRydWUpXCI+PGkgY2xhc3M9XCJmYSBmYS1iYXJzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYT48L2hlYWRlcj5cbiAgICAgICAgPGF1dGgtZm9ybSBcbiAgICAgICAgICAgICpuZ0lmPVwiYWNjZXNzRm9ybVZpc2libGVcIiBcbiAgICAgICAgICAgIChjbG9zZU1vZGFsKT1cImhpZGVBY2Nlc3NGb3JtKClcIlxuICAgICAgICAgICAgKG5vdGlmeSk9XCJub3RpZnkoJGV2ZW50KVwiXG4gICAgICAgICAgICAoYXV0aFN0YXR1cyk9XCJhdXRoU3RhdHVzQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgID48L2F1dGgtZm9ybT5cbiAgICAgICAgPG5vdGlmaWNhdGlvbiBbbmdDbGFzc109XCJ7ZXJyb3I6IG5vdGlmaWNhdGlvbi50eXBlID09ICdlcnJvcicsIHN1Y2Nlc3M6IG5vdGlmaWNhdGlvbi50eXBlID09ICdzdWNjZXNzJ31cIj48L25vdGlmaWNhdGlvbj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW1N0b3J5QmxvY2tTZXJ2aWNlLCBDb25maWd1cmF0aW9uLCBBdXRoU2VydmljZSwgV2ViU3RvcmFnZVNlcnZpY2VdLFxuICAgIGRpcmVjdGl2ZXM6IFtTdG9yeUJsb2NrQ29tcG9uZW50LCBUaW1lbGluZUNvbXBvbmVudCwgQWRkQnV0dG9uQ29tcG9uZW50LCBOb3RpZmljYXRpb25Db21wb25lbnQsIFNpZGViYXJDb21wb25lbnQsIEF1dGhGb3JtQ29tcG9uZW50LCBOZ0NsYXNzXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQFZpZXdDaGlsZChOb3RpZmljYXRpb25Db21wb25lbnQpIG5vdGlmaWNhdGlvbkNvbXBvbmVudDpOb3RpZmljYXRpb25Db21wb25lbnQ7XG4gICAgcHVibGljIHN0b3J5QmxvY2tzOlN0b3J5QmxvY2tbXTtcbiAgICBwdWJsaWMgc3RvcnlCbG9ja1R5cGVzOlN0b3J5QmxvY2tUeXBlW107XG4gICAgcHVibGljIHN0b3J5QmxvY2tEZWZhdWx0VHlwZXM6U3RvcnlCbG9ja1R5cGVbXTtcbiAgICBwcml2YXRlIHVzZXJJZDtcbiAgICBwdWJsaWMgem9vbUxldmVsO1xuICAgIHB1YmxpYyBleHBvc2VkSW5kZXg7XG4gICAgcHVibGljIGV4cG9zZWRTdG9yeUJsb2NrO1xuICAgIHB1YmxpYyBhZGRCdXR0b247XG4gICAgcHVibGljIHRva2VuOnN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBtZW51VmlzaWJsZTtcbiAgICBwdWJsaWMgYWNjZXNzRm9ybVZpc2libGU7XG4gICAgcHJpdmF0ZSBtYXhJbmRleCA9IDA7XG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3J5QmxvY2tTZXJ2aWNlOlN0b3J5QmxvY2tTZXJ2aWNlLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbiwgcHJpdmF0ZSB3ZWJTdG9yYWdlU2VydmljZTpXZWJTdG9yYWdlU2VydmljZSwgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6YW55IHtcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrcyA9IFtdO1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHRoaXMuYXV0aFVzZXIoKTtcbiAgICAgICAgdGhpcy5nZXRTdG9yeUJsb2NrVHlwZXMoKTtcbiAgICAgICAgdGhpcy5nZXRTdG9yeUJsb2Nrcyh0aGlzLnVzZXJJZCk7XG4gICAgICAgIHRoaXMuem9vbUxldmVsID0gNDtcbiAgICAgICAgdGhpcy5leHBvc2VkSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5leHBvc2VkU3RvcnlCbG9jayA9IG51bGw7XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uID0ge1xuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tZW51VmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjY2Vzc0Zvcm1WaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uID0ge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGF1dGhVc2VyKCl7XG4gICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0SWRGcm9tVG9rZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBhbm9ueW1vdXNUb2tlbiA9IHRoaXMud2ViU3RvcmFnZVNlcnZpY2UuZ2V0KCdhbm9ueW1vdXNfdG9rZW4nKTtcbiAgICAgICAgICAgIGlmICghYW5vbnltb3VzVG9rZW4pIHtcbiAgICAgICAgICAgICAgICB2YXIgYW5vbnltb3VzVG9rZW4gPSB0aGlzLmF1dGhTZXJ2aWNlLmdlbmVyYXRlQW5vbnltb3VzVG9rZW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLndlYlN0b3JhZ2VTZXJ2aWNlLnB1dCgnYW5vbnltb3VzX3Rva2VuJywgYW5vbnltb3VzVG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0SWRGcm9tQW5vbnltb3VzVG9rZW4oYW5vbnltb3VzVG9rZW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0VG9rZW4odmFsdWU6c3RyaW5nKXtcbiAgICAgICAgdGhpcy53ZWJTdG9yYWdlU2VydmljZS5wdXQoJ3Rva2VuJyx2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0VG9rZW4oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMud2ViU3RvcmFnZVNlcnZpY2UuZ2V0KCd0b2tlbicpO1xuICAgIH1cblxuICAgIGF1dGhTdGF0dXNDaGFuZ2VkKCl7XG4gICAgICAgIHRoaXMucmVmcmVzaEJsb2NrTGlzdCgpO1xuICAgIH1cblxuICAgIHJlZnJlc2hCbG9ja0xpc3QoKXtcbiAgICAgICAgdGhpcy51c2VySWQgPSB0aGlzLmF1dGhVc2VyKCk7XG4gICAgICAgIHRoaXMuZ2V0U3RvcnlCbG9ja3ModGhpcy51c2VySWQpO1xuICAgIH1cblxuICAgIGdldFN0b3J5QmxvY2tUeXBlcygpIHtcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrVHlwZXMgPSB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdldFN0b3J5QmxvY2tUeXBlcygpO1xuICAgICAgICB0aGlzLnN0b3J5QmxvY2tEZWZhdWx0VHlwZXMgPSB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdldFN0b3J5QmxvY2tEZWZhdWx0VHlwZXMoKTtcbiAgICB9XG5cbiAgICBnZXRTdG9yeUJsb2NrcyhpZCkge1xuICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdldFN0b3J5QmxvY2tzKGlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tzID0gZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLm1heEluZGV4ID0gMDtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdG9yeUJsb2Nrc1tpXS50eXBlID09PSAnY2hhcHRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF4SW5kZXggPSBNYXRoLm1heCh0aGlzLm1heEluZGV4LCB0aGlzLnN0b3J5QmxvY2tzW2ldLmJsb2NrSWQgfHwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuc3RvcnlCbG9ja3MgfHwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGg9PTApe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gYmxvY2tzIHJlY2VpdmVkIScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdlbmVyYXRlVGVzdERhdGEodGhpcy51c2VySWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVEZWZhdWx0QmxvY2tzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tzID0gc2F2ZURlZmF1bHRCbG9ja3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZVN0b3J5QmxvY2tOdW1iZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdkb25lLCBsb2FkZWQgJyArIHRoaXMuc3RvcnlCbG9ja3MubGVuZ3RoICsgJyBibG9ja3MnLCB0aGlzLnN0b3J5QmxvY2tzKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2FsY3VsYXRlU3RvcnlCbG9ja051bWJlcnMoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2RvbmUsIGxvYWRlZCAnICsgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGggKyAnIGJsb2NrcycsIHRoaXMuc3RvcnlCbG9ja3MpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVtb3ZlU3RvcnlCbG9jayhpbmRleCkge1xuICAgICAgICB0aGlzLnN0b3J5QmxvY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMucmVjYWxjdWxhdGVTdG9yeUJsb2NrTnVtYmVycygpO1xuICAgIH1cblxuICAgIHNob3dBY2Nlc3NGb3JtKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZU1lbnUoZmFsc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKSk7XG4gICAgICAgIHRoaXMuYWNjZXNzRm9ybVZpc2libGUgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJyk7XG4gICAgfVxuXG4gICAgaGlkZUFjY2Vzc0Zvcm0oKSB7XG4gICAgICAgIHRoaXMuYWNjZXNzRm9ybVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xuICAgIH1cblxuICAgIHJlY2FsY3VsYXRlU3RvcnlCbG9ja051bWJlcnMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdOdW1iZXJpbmcgYmVmb3JlJyx0aGlzLnN0b3J5QmxvY2tzKTtcbiAgICAgICAgdmFyIGN1cnJlbnRUeXBlcyA9IHt9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RvcnlCbG9ja1R5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjdXJyZW50VHlwZXNbdGhpcy5zdG9yeUJsb2NrVHlwZXNbaV0uaWRdID0gdGhpcy5zdG9yeUJsb2NrVHlwZXNbaV07XG4gICAgICAgICAgICBjdXJyZW50VHlwZXNbdGhpcy5zdG9yeUJsb2NrVHlwZXNbaV0uaWRdLmluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUeXBlID0gdGhpcy5zdG9yeUJsb2Nrc1tpXS50eXBlIHx8IHRoaXMuc3RvcnlCbG9ja0RlZmF1bHRUeXBlc1swXS5pZDtcbiAgICAgICAgICAgIGN1cnJlbnRUeXBlc1tjdXJyZW50VHlwZV0gPSBjdXJyZW50VHlwZXNbY3VycmVudFR5cGVdIHx8IHRoaXMuc3RvcnlCbG9ja0RlZmF1bHRUeXBlc1swXTtcbiAgICAgICAgICAgIHRoaXMuc3RvcnlCbG9ja3NbaV0uYmxvY2tOdW1iZXIgPSBjdXJyZW50VHlwZXNbY3VycmVudFR5cGVdLmluZGV4IHx8IDA7XG5cbiAgICAgICAgICAgIGN1cnJlbnRUeXBlc1tjdXJyZW50VHlwZV0uaW5kZXgrKztcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5zdG9yeUJsb2NrVHlwZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdG9yeUJsb2NrVHlwZXNbal0ubGV2ZWwgPiBjdXJyZW50VHlwZXNbY3VycmVudFR5cGVdLmxldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUeXBlc1t0aGlzLnN0b3J5QmxvY2tUeXBlc1tqXS5pZF0uaW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnTnVtYmVyaW5nIGFmdGVyJyx0aGlzLnN0b3J5QmxvY2tzKTtcbiAgICB9XG5cbiAgICBsb2dPdXQoKXtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoQmxvY2tMaXN0KCk7XG4gICAgfVxuXG4gICAgaXNMb2dnZWRJbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gICAgfVxuXG4gICAgem9vbUluKCkge1xuICAgICAgICBpZiAodGhpcy56b29tTGV2ZWwgPCAxMCkge1xuICAgICAgICAgICAgdGhpcy56b29tTGV2ZWwrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkoe1xuICAgICAgICAgICAgICAgIHR5cGU6J21lc3NhZ2UnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6J01heCB6b29tIHJlYWNoZWQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHpvb21PdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnpvb21MZXZlbCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuem9vbUxldmVsLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHtcbiAgICAgICAgICAgICAgICB0eXBlOidtZXNzYWdlJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOidNaW5pbXVtIHpvb20gcmVhY2hlZCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb3VzZUVudGVyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uID0ge1xuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHRvcDogZXZlbnQueVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uTW91c2VMZWF2ZShldmVudCkge1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbiA9IHtcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgdG9wOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuYWRkQnV0dG9uLnZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQnV0dG9uLnRvcCA9IGV2ZW50Lnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRTdG9yeUJsb2NrKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uID0ge1xuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgem9vbUNvbnZlcnNpb25GYWN0b3IgPSB0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5zdGVwICsgKHRoaXMuem9vbUxldmVsICogdGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RyZW5ndGgpO1xuICAgICAgICB2YXIgcG9zaXRpb25BdFpvb20gPSAoKGV2ZW50LnBhZ2VZIC0gdGhpcy5jb25maWd1cmF0aW9uLnpvb20ub2Zmc2V0KSAvIHpvb21Db252ZXJzaW9uRmFjdG9yKTtcbiAgICAgICAgdmFyIG5ld1N0b3J5QmxvY2s6U3RvcnlCbG9jayA9IDxTdG9yeUJsb2NrPiB7XG4gICAgICAgICAgICBibG9ja0lkOiB0aGlzLm1heEluZGV4ICsgMSxcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWVQb3NpdGlvbjogcG9zaXRpb25BdFpvb20sXG4gICAgICAgICAgICBpbXBvcnRhbmNlOiAzLFxuICAgICAgICAgICAgdHlwZTogJ2NoYXB0ZXInXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubWF4SW5kZXgrKztcblxuICAgICAgICB2YXIgdG1wQXJyYXlQb3MgPSAwO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcnlCbG9ja3NbaV0udGltZVBvc2l0aW9uID4gcG9zaXRpb25BdFpvb20pIHtcbiAgICAgICAgICAgICAgICB0bXBBcnJheVBvcyA9IGk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tzLnNwbGljZSh0bXBBcnJheVBvcywgMCwgbmV3U3RvcnlCbG9jayk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ0FkZGluZyBibG9jayBpbmRleCAnICsgdG1wQXJyYXlQb3MpO1xuICAgICAgICB0aGlzLnNldEV4cG9zZWQodG1wQXJyYXlQb3MpO1xuXG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgc2V0RXhwb3NlZChpbmRleCkge1xuICAgICAgICBjb25zb2xlLmxvZygnU2V0dGluZyBibG9jayAnK2luZGV4KycgZXhwb3NlZCcpO1xuICAgICAgICB0aGlzLnJlY2FsY3VsYXRlU3RvcnlCbG9ja051bWJlcnMoKTtcbiAgICAgICAgdGhpcy5leHBvc2VkSW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5leHBvc2VkU3RvcnlCbG9jayA9IGluZGV4ID49IDAgPyB0aGlzLnN0b3J5QmxvY2tzW2luZGV4XSA6IG51bGw7XG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja1NlcnZpY2UuY2hhbmdlRXhwb3NlZEluZGV4KGluZGV4KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ25vLXNjcm9sbCcpO1xuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5zYXZlU3RvcnlCbG9jayh0aGlzLnVzZXJJZCwgdGhpcy5zdG9yeUJsb2Nrc1tpXSkuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnkobm90aWZpY2F0aW9uKXtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24gPSB7XG4gICAgICAgICAgICB0eXBlOiBub3RpZmljYXRpb24udHlwZSB8fCBudWxsLFxuICAgICAgICAgICAgbWVzc2FnZTogbm90aWZpY2F0aW9uLm1lc3NhZ2UgfHwgJycsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uQ29tcG9uZW50LnNob3cobm90aWZpY2F0aW9uLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGRvd25sb2FkUGRmKCl7XG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja1NlcnZpY2UuZG93bmxvYWRQZGYodGhpcy5zdG9yeUJsb2Nrcyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudSh2aXNpYmlsaXR5KXtcbiAgICAgICAgdGhpcy5tZW51VmlzaWJsZSA9IHZpc2liaWxpdHk7XG4gICAgICAgIGlmKHZpc2liaWxpdHkpe1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYXBwLWNvbnRlbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9ICAgIGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbSFRUUF9QUk9WSURFUlMsIENvbmZpZ3VyYXRpb25dKTtcbiIsImltcG9ydCB7RGlyZWN0aXZlLCBPbkNoYW5nZXMsIEVsZW1lbnRSZWYsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QW5pbWF0aW9uQnVpbGRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2FuaW1hdGUvYW5pbWF0aW9uX2J1aWxkZXInO1xuaW1wb3J0IHtDc3NBbmltYXRpb25CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvYW5pbWF0ZS9jc3NfYW5pbWF0aW9uX2J1aWxkZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tjb2xsYXBzZV0nXG59KVxuXG5leHBvcnQgY2xhc3MgQ29sbGFwc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIGNvbGxhcHNlOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2FuaW1hdGlvbjogQ3NzQW5pbWF0aW9uQnVpbGRlcjtcblxuICAgIGNvbnN0cnVjdG9yKGFuaW1hdGlvbkJ1aWxkZXI6QW5pbWF0aW9uQnVpbGRlciwgcHJpdmF0ZSBfZWw6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLl9hbmltYXRpb24gPSBhbmltYXRpb25CdWlsZGVyLmNzcygpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICAgICAgLy8gaWYgdGhlIGNoYW5nZSBoYXBwZW5lZCBpbiB0aGUgY29sbGFwc2UgcHJvcGVydHlcbiAgICAgICAgaWYgKGNoYW5nZXMuY29sbGFwc2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgX2Jhc2VTZXF1ZW5jZSgpOiBDc3NBbmltYXRpb25CdWlsZGVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuaW1hdGlvblxuICAgICAgICAgICAgLnNldER1cmF0aW9uKDI1MCkgLy8gdGhlIHRyYW5zaXRpb24gZHVyYXRpb25cbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnY29sbGFwc2UnKSAvLyByZW1vdmUgYSBjbGFzcyBiZWZvcmUgdGhlIHRyYW5zaXRpb24gc3RhcnRcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaW4nKVxuICAgICAgICAgICAgLmFkZEFuaW1hdGlvbkNsYXNzKCdjb2xsYXBzaW5nJyk7IC8vIGFkZCBhIHRlbXAgY2xhc3MgZm9yIHRoZSB0cmFuc2l0aW9uIHBlcmlvZFxuICAgIH1cblxuICAgIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2Jhc2VTZXF1ZW5jZVxuICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5fZWwubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgKyAncHgnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNldFRvU3R5bGVzKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYSBpcyB0aGUgQW5pbWF0aW9uIGluc3RhbmNlIHJ1bm5pbmcgdGhpcyBhbmltYXRpb24uXG4gICAgICAgIGxldCBhID0gdGhpcy5fYW5pbWF0aW9uLnN0YXJ0KHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICBhLm9uQ29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgYS5yZW1vdmVDbGFzc2VzKFsnaW4nXSk7IC8vIHJhcGlkIGNoYW5nZSB3aWxsIGxlYXZlICdpbidcbiAgICAgICAgICAgIGEuYWRkQ2xhc3NlcyhbJ2NvbGxhcHNlJ10pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3coKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbiAvLyAxc3QgYW5pbWF0aW9uIGJ1aWxkXG4gICAgICAgICAgICAuc2V0RHVyYXRpb24oMClcbiAgICAgICAgICAgIC5hZGRDbGFzcygnY29sbGFwc2UnKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdpbicpXG4gICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyh7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpIC8vIDFzdCBhbmltYXRpb24gc3RhcnRcbiAgICAgICAgICAgIC5vbkNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYSA9IHRoaXMuX2Jhc2VTZXF1ZW5jZSAvLyAgMm5kIGFuaW1hdGlvbiBidWlsZFxuICAgICAgICAgICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuc2V0VG9TdHlsZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCArICdweCdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpOyAvLyAybmQgYW5pbWF0aW9uIHN0YXJ0XG5cbiAgICAgICAgICAgICAgICBhLm9uQ29tcGxldGUoKCkgPT4gIGEuYWRkQ2xhc3NlcyhbJ2NvbGxhcHNlJywgJ2luJ10pICk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
