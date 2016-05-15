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
                    timePosition: 3,
                    importance: 1,
                    blockNumber: 1,
                    type: 'chapter'
                },
                {
                    blockId: 3,
                    title: 'Evolution',
                    description: 'Things gets trickier',
                    timePosition: 5,
                    importance: 2,
                    blockNumber: 2,
                    type: 'chapter'
                },
                {
                    blockId: 4,
                    title: 'Topic moment',
                    description: 'Woah!',
                    timePosition: 7,
                    importance: 1,
                    blockNumber: 3,
                    type: 'chapter'
                },
                {
                    blockId: 5,
                    title: 'Epilogue',
                    description: 'Because even the best things end',
                    timePosition: 10,
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
                        strength: 10
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
                        return this.http.put(this.configuration.apiBasePath + '/storyblocks/' + userId + '/' + storyBlock._id, "data=" + JSON.stringify(storyBlock), options)
                            .map(function (res) { return res.json(); });
                    }
                    else {
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
                    console.log('Creating temporary data');
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/x-www-form-urlencoded'
                    });
                    var options = new http_1.RequestOptions({
                        headers: headers
                    });
                    var blocks = mock_storyblocks_1.STORYBLOCKS;
                    for (var i = 0; i < blocks.length; i++) {
                        blocks[i].userId = userId;
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
                                bold: true
                            },
                            paragraph: {
                                fontSize: 18,
                                bold: true
                            }
                        }
                    };
                    for (var i = 0; i < storyBlocks.length; i++) {
                        docDefinition.content.push({
                            text: storyBlocks[i].title,
                            style: storyBlocks[i].type
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
                        top: this.configuration.zoom.offset + ((this.configuration.zoom.step + (this._previousZoomLevel * this.configuration.zoom.strength)) * this.storyBlockInfo.timePosition) + 'px'
                    };
                    var toStyle = {
                        top: this.configuration.zoom.offset + ((this.configuration.zoom.step + (this._zoomLevel * this.configuration.zoom.strength)) * this.storyBlockInfo.timePosition) + 'px'
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
System.register("components/sidebar.component", ["angular2/core", "services/storyblocks.service"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_8, storyblocks_service_2;
    var SidebarComponent;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            },
            function (storyblocks_service_2_1) {
                storyblocks_service_2 = storyblocks_service_2_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
                function SidebarComponent(_storyBlockService) {
                    this._storyBlockService = _storyBlockService;
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
                        template: "\n        <div *ngIf=\"_index == -1\">\n            <div class=\"sidebar-action\">\n                <a class=\"create-storyblock\" draggable=\"true\" (dragstart)=\"dragStart($event)\" (dragend)=\"dragEnd($event)\">Create storyblock</a>\n            </div>\n            <div class=\"sidebar-action\">\n                <small><strong>Total chapters:</strong> {{_storyBlocksLength}}</small>\n            </div>\n        </div>\n        <div *ngIf=\"_index >= 0 && !!_storyBlock\">\n            <div class=\"sidebar-action\">\n                <h3><span class=\"capital-letter\">{{_storyBlock.type}}</span> {{_index}}</h3>\n            </div>\n            <div class=\"sidebar-action\">\n                <div class=\"form-group\">\n                    <label>Storyblock type</label>\n                    <div class=\"select-wrapper\">\n                        <select [(ngModel)]=\"_storyBlock.type\">\n                            <option *ngFor=\"#storyBlockType of storyBlockTypes\" value={{storyBlockType.id}}>{{storyBlockType.name}}</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"sidebar-action\">\n                <small><strong>Total characters:</strong> {{_storyBlock.description.length}}</small>\n            </div>\n        </div>\n    ",
                        inputs: ['storyBlock', 'storyBlocksLength']
                    }), 
                    __metadata('design:paramtypes', [storyblocks_service_2.StoryBlockService])
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
                    console.log(tokenData);
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
                    this.zoomLevel = 10;
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
                        if (!!_this.storyBlocks) {
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
                };
                AppComponent.prototype.zoomOut = function () {
                    if (this.zoomLevel > 0) {
                        this.zoomLevel--;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2svbW9jay1zdG9yeWJsb2Nrcy50cyIsIm1vY2svbW9jay1zdG9yeWJsb2NrLXR5cGVzLnRzIiwiY29uZmlnL2NvbmZpZ3VyYXRpb24udHMiLCJzZXJ2aWNlcy9zdG9yeWJsb2Nrcy5zZXJ2aWNlLnRzIiwic2VydmljZXMvdXRpbHMuc2VydmljZS50cyIsImNvbXBvbmVudHMvc3RvcnlibG9jay5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3RpbWVsaW5lLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvYWRkLWJ1dHRvbi5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL25vdGlmaWNhdGlvbi5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3NpZGViYXIuY29tcG9uZW50LnRzIiwibW9kZWxzL3VzZXIudHMiLCJzZXJ2aWNlcy93ZWJzdG9yYWdlLnNlcnZpY2UudHMiLCJzZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiLCJzZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UudHMiLCJjb21wb25lbnRzL3NpZ25pbi1mb3JtLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvc2lnbnVwLWZvcm0uY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9hdXRoLWZvcm0uY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9hcHAtY29udGVudC5jb21wb25lbnQudHMiLCJib290LnRzIiwiZGlyZWN0aXZlcy9jb2xsYXBzZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRWEsV0FBVzs7OztZQUFYLHlCQUFBLFdBQVcsR0FBOEI7Z0JBQ2xEO29CQUNJLE9BQU8sRUFBRSxDQUFDO29CQUNWLEtBQUssRUFBRSxTQUFTO29CQUNoQixXQUFXLEVBQUUsNkJBQTZCO29CQUMxQyxZQUFZLEVBQUUsQ0FBQztvQkFDZixVQUFVLEVBQUUsQ0FBQyxDQUFDO29CQUNkLFdBQVcsRUFBQyxDQUFDO29CQUNiLElBQUksRUFBQyxTQUFT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OzZCQUNELEtBQUssQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsc0JBQXNCO3dCQUUxRCxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQU8sT0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQWhDLENBQWdDLENBQUUsQ0FBQztvQkFDM0QsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkFoRUQ7b0JBQUMsYUFBSyxFQUFFOzswREFBQTtnQkFMWjtvQkFBQyxpQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3FCQUN6QixDQUFDOzs0QkFBQTtnQkFvRUYsZUFBQztZQUFELENBbEVBLEFBa0VDLElBQUE7WUFsRUQsZ0NBa0VDLENBQUEiLCJmaWxlIjoiLi4vLi4vLi4vYW5ndWxhcmF0dGFjazIwMTYtY2hyb25vc3Rvcmllcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0b3J5QmxvY2t9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9ja1wiO1xuXG5leHBvcnQgY29uc3QgU1RPUllCTE9DS1M6U3RvcnlCbG9ja1tdID0gPFN0b3J5QmxvY2tbXT5bXG4gICAge1xuICAgICAgICBibG9ja0lkOiAxLFxuICAgICAgICB0aXRsZTogJ1ByZWZhY2UnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1lvdSBuZWVkIHRvIHN0YXJ0IHNvbWV3aGVyZScsXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMSxcbiAgICAgICAgaW1wb3J0YW5jZTogLTEsXG4gICAgICAgIGJsb2NrTnVtYmVyOjAsXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJsb2NrSWQ6IDIsXG4gICAgICAgIHRpdGxlOiAnSW50cm9kdWN0aW9uJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdXaGVyZSB5b3VyIGNoYXJhY3RlcnMgYmVjYW1lIHJlYWwnLFxuICAgICAgICB0aW1lUG9zaXRpb246IDMsXG4gICAgICAgIGltcG9ydGFuY2U6IDEsXG4gICAgICAgIGJsb2NrTnVtYmVyOjEsXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJsb2NrSWQ6IDMsXG4gICAgICAgIHRpdGxlOiAnRXZvbHV0aW9uJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGluZ3MgZ2V0cyB0cmlja2llcicsXG4gICAgICAgIHRpbWVQb3NpdGlvbjogNSxcbiAgICAgICAgaW1wb3J0YW5jZTogMixcbiAgICAgICAgYmxvY2tOdW1iZXI6MixcbiAgICAgICAgdHlwZTonY2hhcHRlcidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmxvY2tJZDogNCxcbiAgICAgICAgdGl0bGU6ICdUb3BpYyBtb21lbnQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1dvYWghJyxcbiAgICAgICAgdGltZVBvc2l0aW9uOiA3LFxuICAgICAgICBpbXBvcnRhbmNlOiAxLFxuICAgICAgICBibG9ja051bWJlcjozLFxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBibG9ja0lkOiA1LFxuICAgICAgICB0aXRsZTogJ0VwaWxvZ3VlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdCZWNhdXNlIGV2ZW4gdGhlIGJlc3QgdGhpbmdzIGVuZCcsXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMTAsXG4gICAgICAgIGltcG9ydGFuY2U6IC0xLFxuICAgICAgICBibG9ja051bWJlcjo0LFxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xuICAgIH1cbl07IiwiaW1wb3J0IHtTdG9yeUJsb2NrfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2tcIjtcbmltcG9ydCB7U3RvcnlCbG9ja1R5cGV9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9jay10eXBlXCI7XG5cbmV4cG9ydCBjb25zdCBTVE9SWUJMT0NLX1RZUEVTOlN0b3J5QmxvY2tUeXBlW10gPSA8U3RvcnlCbG9ja1R5cGVbXT5bXG4gICAge1xuICAgICAgICBpZDogJ2NoYXB0ZXInLFxuICAgICAgICBuYW1lOiAnQ2hhcHRlcicsXG4gICAgICAgIGxldmVsOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAncGFyYWdyYXBoJyxcbiAgICAgICAgbmFtZTogJ1BhcmFncmFwaCcsXG4gICAgICAgIGxldmVsOiAxXG4gICAgfSxcbl07IiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XG4gICAgcHVibGljIHpvb20gPSB7XG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RlcDogMTUwLFxuICAgICAgICBzdHJlbmd0aDogMTBcbiAgICB9O1xuXG4gICAgcHVibGljIHRva2VuID0ge1xuICAgICAgICBuYW1lOiAndG9rZW4nLFxuICAgICAgICBleHBpcmF0aW9uOiAoMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwKVxuICAgIH07XG5cbiAgICBwdWJsaWMgYXBpQmFzZVBhdGggPSAnaHR0cHM6Ly9hYTIwMTYtY2hyb25vc3Rvcmllcy5oZXJva3VhcHAuY29tJztcbiAgICAvLyBwdWJsaWMgYXBpQmFzZVBhdGggPSAnJ1xufSIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7SHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtTdG9yeUJsb2NrfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2tcIjtcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmUnO1xuaW1wb3J0IHtPYnNlcnZlcn0gZnJvbSAncnhqcy9PYnNlcnZlcic7XG5pbXBvcnQge1NUT1JZQkxPQ0tTfSBmcm9tIFwiLi4vbW9jay9tb2NrLXN0b3J5YmxvY2tzXCI7XG5pbXBvcnQge1N0b3J5QmxvY2tUeXBlfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2stdHlwZVwiO1xuaW1wb3J0IHtTVE9SWUJMT0NLX1RZUEVTfSBmcm9tIFwiLi4vbW9jay9tb2NrLXN0b3J5YmxvY2stdHlwZXNcIjtcbmltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XG5kZWNsYXJlIHZhciBwZGZNYWtlOiBhbnk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdG9yeUJsb2NrU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfZXhwb3NlZEluZGV4ID0gLTE7XG4gICAgaW5kZXhDaGFuZ2UkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gICAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IE9ic2VydmVyPG51bWJlcj47XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDpIdHRwLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbikge1xuICAgICAgICB0aGlzLmluZGV4Q2hhbmdlJCA9IG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+XG4gICAgICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG9ic2VydmVyKS5zaGFyZSgpO1xuICAgIH1cbiAgICBjaGFuZ2VFeHBvc2VkSW5kZXgoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5fZXhwb3NlZEluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuX29ic2VydmVyLm5leHQoaW5kZXgpO1xuICAgIH1cbiAgICBnZXRFeHBvc2VkSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leHBvc2VkSW5kZXg7XG4gICAgfVxuXG4gICAgZ2V0U3RvcnlCbG9ja3ModXNlcklkKTpPYnNlcnZhYmxlPFN0b3J5QmxvY2tbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpQmFzZVBhdGggKyAnL3N0b3J5YmxvY2tzLycrdXNlcklkKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgc2F2ZVN0b3J5QmxvY2sodXNlcklkLCBzdG9yeUJsb2NrOlN0b3J5QmxvY2spOk9ic2VydmFibGU8U3RvcnlCbG9jaz4ge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghIXN0b3J5QmxvY2suX2lkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpQmFzZVBhdGggKyAnL3N0b3J5YmxvY2tzLycgKyB1c2VySWQgKyAnLycgKyBzdG9yeUJsb2NrLl9pZCwgXCJkYXRhPVwiICsgSlNPTi5zdHJpbmdpZnkoc3RvcnlCbG9jayksIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5jb25maWd1cmF0aW9uLmFwaUJhc2VQYXRoICsgJy9zdG9yeWJsb2Nrcy8nK3VzZXJJZCArJy8nICwgXCJkYXRhPVwiICsgSlNPTi5zdHJpbmdpZnkoc3RvcnlCbG9jayksIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGVTdG9yeUJsb2NrKHVzZXJJZCwgc3RvcnlCbG9jazpTdG9yeUJsb2NrKTpPYnNlcnZhYmxlPFN0b3J5QmxvY2tbXT4ge1xuICAgICAgICBpZiAoISFzdG9yeUJsb2NrLl9pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5jb25maWd1cmF0aW9uLmFwaUJhc2VQYXRoICsgJy9zdG9yeWJsb2Nrcy8nICsgdXNlcklkICsgJy8nICsgc3RvcnlCbG9jay5faWQpXG4gICAgICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZ2V0U3RvcnlCbG9ja1R5cGVzKCk6U3RvcnlCbG9ja1R5cGVbXSB7XG4gICAgICAgIHJldHVybiBTVE9SWUJMT0NLX1RZUEVTO1xuICAgIH1cblxuICAgIGdldFN0b3J5QmxvY2tEZWZhdWx0VHlwZXMoKTpTdG9yeUJsb2NrVHlwZVtdIHtcbiAgICAgICAgcmV0dXJuIFNUT1JZQkxPQ0tfVFlQRVM7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVUZXN0RGF0YSh1c2VySWQpOk9ic2VydmFibGU8U3RvcnlCbG9ja1tdPiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyB0ZW1wb3JhcnkgZGF0YScpO1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBibG9ja3M6U3RvcnlCbG9ja1tdID0gU1RPUllCTE9DS1M7XG5cbiAgICAgICAgZm9yKHZhciBpPTA7IGk8YmxvY2tzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGJsb2Nrc1tpXS51c2VySWQgPSB1c2VySWQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpQmFzZVBhdGggKyAnL3N0b3J5YmxvY2tzLycgKyB1c2VySWQgKyAnLycsIFwiZGF0YT1cIiArIEpTT04uc3RyaW5naWZ5KGJsb2NrcyksIG9wdGlvbnMpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgZG93bmxvYWRQZGYoc3RvcnlCbG9ja3M6U3RvcnlCbG9ja1tdKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNvbXBhcmUoYTpTdG9yeUJsb2NrLCBiOlN0b3J5QmxvY2spIHtcbiAgICAgICAgICAgIGlmIChhLnRpbWVQb3NpdGlvbiA8IGIudGltZVBvc2l0aW9uKVxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGEudGltZVBvc2l0aW9uID4gYi50aW1lUG9zaXRpb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBzdG9yeUJsb2Nrcy5zb3J0KGNvbXBhcmUpO1xuXG5cbiAgICAgICAgdmFyIGRvY0RlZmluaXRpb24gPSB7XG4gICAgICAgICAgICBjb250ZW50OiBbXSxcblxuICAgICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICAgICAgY2hhcHRlcjoge1xuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjIsXG4gICAgICAgICAgICAgICAgICAgIGJvbGQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFncmFwaDoge1xuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXG4gICAgICAgICAgICAgICAgICAgIGJvbGQ6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZG9jRGVmaW5pdGlvbi5jb250ZW50LnB1c2goXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBzdG9yeUJsb2Nrc1tpXS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHN0b3J5QmxvY2tzW2ldLnR5cGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZG9jRGVmaW5pdGlvbi5jb250ZW50LnB1c2goXG4gICAgICAgICAgICAgICAgc3RvcnlCbG9ja3NbaV0uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBwZGZNYWtlLmNyZWF0ZVBkZihkb2NEZWZpbml0aW9uKS5kb3dubG9hZCgpO1xuICAgIH1cblxufSIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXRpbHNTZXJ2aWNlIHtcbiAgICBwdWJsaWMgRU1BSUxfUkVHRVggPSAnXlstYS16MC05fiEkJV4mKl89K317XFwnP10rKFxcLlstYS16MC05fiEkJV4mKl89K317XFwnP10rKSpAKFthLXowLTlfXVstYS16MC05X10qKFxcLlstYS16MC05X10rKSpcXC4oYWVyb3xhcnBhfGJpenxjb218Y29vcHxlZHV8Z292fGluZm98aW50fG1pbHxtdXNldW18bmFtZXxuZXR8b3JnfHByb3x0cmF2ZWx8bW9iaXxbYS16XVthLXpdKXwoWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfSkpKDpbMC05XXsxLDV9KT8kJztcblxuXG4gICAgZ2V0Um9tYW5OdW1lcmFsKG51bSk6c3RyaW5nIHtcbiAgICAgICAgaWYgKCErbnVtKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB2YXIgZGlnaXRzID0gU3RyaW5nKCtudW0pLnNwbGl0KFwiXCIpLFxuICAgICAgICAgICAga2V5ID0gW1wiXCIsIFwiQ1wiLCBcIkNDXCIsIFwiQ0NDXCIsIFwiQ0RcIiwgXCJEXCIsIFwiRENcIiwgXCJEQ0NcIiwgXCJEQ0NDXCIsIFwiQ01cIixcbiAgICAgICAgICAgICAgICBcIlwiLCBcIlhcIiwgXCJYWFwiLCBcIlhYWFwiLCBcIlhMXCIsIFwiTFwiLCBcIkxYXCIsIFwiTFhYXCIsIFwiTFhYWFwiLCBcIlhDXCIsXG4gICAgICAgICAgICAgICAgXCJcIiwgXCJJXCIsIFwiSUlcIiwgXCJJSUlcIiwgXCJJVlwiLCBcIlZcIiwgXCJWSVwiLCBcIlZJSVwiLCBcIlZJSUlcIiwgXCJJWFwiXSxcbiAgICAgICAgICAgIHJvbWFuID0gXCJcIixcbiAgICAgICAgICAgIGkgPSAzO1xuICAgICAgICB3aGlsZSAoaS0tKVxuICAgICAgICAgICAgcm9tYW4gPSAoa2V5WytkaWdpdHMucG9wKCkgKyAoaSAqIDEwKV0gfHwgXCJcIikgKyByb21hbjtcbiAgICAgICAgcmV0dXJuIEFycmF5KCtkaWdpdHMuam9pbihcIlwiKSArIDEpLmpvaW4oXCJNXCIpICsgcm9tYW47XG4gICAgfVxufSIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7VXRpbHNTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvdXRpbHMuc2VydmljZVwiO1xuaW1wb3J0IHtBbmltYXRpb25CdWlsZGVyfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2FuaW1hdGUvYW5pbWF0aW9uX2J1aWxkZXJcIjtcbmltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XG5pbXBvcnQge1N0b3J5QmxvY2tTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvc3RvcnlibG9ja3Muc2VydmljZVwiO1xuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzdG9yeWJsb2NrJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5kZXhcIj48c3BhbiAqbmdJZj1cInN0b3J5QmxvY2tJbmZvLnR5cGUgPT0gJ2NoYXB0ZXInXCI+e3t1dGlsc1NlcnZpY2UuZ2V0Um9tYW5OdW1lcmFsKHN0b3J5QmxvY2tJbmZvLmJsb2NrTnVtYmVyICsgMSl9fTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0aXRsZVwiIFthdHRyLnJlYWRvbmx5XT1cIl9leHBvc2VkID8gbnVsbCA6IHRydWVcIiBbKG5nTW9kZWwpXT1cInN0b3J5QmxvY2tJbmZvLnRpdGxlXCIgcGxhY2Vob2xkZXI9XCJJbnNlcnQgYSB0aXRsZVwiIC8+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJkZXNjcmlwdGlvblwiIFthdHRyLnJlYWRvbmx5XT1cIl9leHBvc2VkID8gbnVsbCA6IHRydWVcIiBbKG5nTW9kZWwpXT1cInN0b3J5QmxvY2tJbmZvLmRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJTdGFydCB3cml0aW5nIHlvdXIgc3RvcnkgaGVyZS4uLlwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVmYXVsdC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cImVkaXQoaW5kZXgsICRldmVudClcIiBjbGFzcz1cImJ1dHRvbiBpbmxpbmUtYnV0dG9uIHByaW1hcnlcIj5FZGl0PC9hPlxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJyZW1vdmUoaW5kZXgsICRldmVudClcIiBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6IWhhc0lkKCl9XCIgY2xhc3M9XCJidXR0b24gaW5saW5lLWJ1dHRvbiBhbGVydFwiPlJlbW92ZTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4cG9zZWQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJzYXZlKGluZGV4LCAkZXZlbnQpXCIgY2xhc3M9XCJidXR0b24gaW5saW5lLWJ1dHRvbiBwcmltYXJ5XCI+U2F2ZTwvYT5cbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwiY2xvc2UoKVwiIGNsYXNzPVwiYnV0dG9uIGlubGluZS1idXR0b24gc2Vjb25kYXJ5XCI+Q2xvc2U8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtVdGlsc1NlcnZpY2UsIFN0b3J5QmxvY2tTZXJ2aWNlXSxcbiAgICBpbnB1dHM6IFsnc3RvcnlCbG9ja0luZm8nLCAnaW5kZXgnICwgJ3VzZXJJZCddXG59KVxuXG5leHBvcnQgY2xhc3MgU3RvcnlCbG9ja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHN0b3J5QmxvY2tJbmZvOlN0b3J5QmxvY2s7XG4gICAgcHJpdmF0ZSB1c2VySWQ7XG4gICAgcHVibGljIGluZGV4O1xuICAgIHB1YmxpYyBfZXhwb3NlZCA9IGZhbHNlO1xuICAgIHB1YmxpYyBfYWN0aXZlID0gdHJ1ZTtcbiAgICBwcml2YXRlIF9hY3Rpb25UaW1lb3V0O1xuICAgIHB1YmxpYyBfc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF96b29tTGV2ZWwgPSAxMDtcbiAgICBwcml2YXRlIF9wcmV2aW91c1pvb21MZXZlbCA9IDEwO1xuICAgIHByaXZhdGUgc3RvcnlCbG9ja0xvY2FsU2F2ZTpTdG9yeUJsb2NrO1xuXG4gICAgQE91dHB1dCgpIHpvb21FdmVudDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgZXhwb3NlRXZlbnQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHJlbW92ZVN0b3J5QmxvY2tFdmVudDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgbm90aWZ5OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWI6QW5pbWF0aW9uQnVpbGRlciwgcHJpdmF0ZSBfZTpFbGVtZW50UmVmLCBwcml2YXRlIHV0aWxzU2VydmljZTpVdGlsc1NlcnZpY2UsIHB1YmxpYyBzdG9yeUJsb2NrU2VydmljZTpTdG9yeUJsb2NrU2VydmljZSwgcHJpdmF0ZSBjb25maWd1cmF0aW9uOkNvbmZpZ3VyYXRpb24pIHtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCB6b29tTGV2ZWwodmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsID0gKHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsID09IHVuZGVmaW5lZCkgPyAxMCA6IHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsO1xuICAgICAgICB0aGlzLl96b29tTGV2ZWwgPSAodGhpcy5fem9vbUxldmVsID09IHVuZGVmaW5lZCkgPyAxMCA6IHRoaXMuX3pvb21MZXZlbDtcbiAgICAgICAgaWYgKHRoaXMuX3pvb21MZXZlbCAhPSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNab29tTGV2ZWwgPSB0aGlzLl96b29tTGV2ZWw7XG4gICAgICAgICAgICB0aGlzLl96b29tTGV2ZWwgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuem9vbUNoYW5nZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGV4cG9zZWRJbmRleCh2YWx1ZTpudW1iZXIpe1xuICAgICAgICB0aGlzLl9leHBvc2VkID0gKHZhbHVlID09IHRoaXMuaW5kZXgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6YW55IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VQb3NpdGlvbk9uWm9vbSgxMDAwKTtcbiAgICB9XG5cbiAgICB6b29tKGUpIHtcbiAgICAgICAgdmFyIGUgPSB3aW5kb3cuZXZlbnQgfHwgZTsgLy8gb2xkIElFIHN1cHBvcnRcbiAgICAgICAgdGhpcy56b29tRXZlbnQuZW1pdChlKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHpvb21DaGFuZ2VkKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnW1N0b3J5QmxvY2sgIycgKyB0aGlzLmluZGV4ICsgJ10gWm9vbSBjaGFuZ2VkIGZyb20gJyArIHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsICsgJyB0byAnICsgdGhpcy5fem9vbUxldmVsKTtcbiAgICAgICAgaWYgKHRoaXMuX3pvb21MZXZlbCA8IHRoaXMuc3RvcnlCbG9ja0luZm8uaW1wb3J0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5mYWRlT3V0KDEwMDApO1xuICAgICAgICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVBvc2l0aW9uT25ab29tKDEwMDApO1xuICAgICAgICAgICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZhZGVJbihzcGVlZDpudW1iZXIpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIEZhZGluZyBpbi4uLicpO1xuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYWIuY3NzKCk7XG4gICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBmcm9tU3R5bGUgPSB7fTtcbiAgICAgICAgdmFyIHRvU3R5bGUgPSB7fTtcblxuICAgICAgICBmcm9tU3R5bGVbJ2Rpc3BsYXknXSA9ICdmbGV4JztcbiAgICAgICAgZnJvbVN0eWxlWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJ2N1YmljLWJlemllcigwLjU3NSwgMC4yNTUsIDAuNDQwLCAwLjk4NSk7JztcbiAgICAgICAgdG9TdHlsZVsnb3BhY2l0eSddID0gMTtcblxuICAgICAgICBhbmltYXRpb25cbiAgICAgICAgICAgIC5zZXREdXJhdGlvbihzcGVlZClcbiAgICAgICAgICAgIC5zZXRGcm9tU3R5bGVzKGZyb21TdHlsZSlcbiAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh0b1N0eWxlKTtcblxuICAgICAgICBpZiAoISFfc2VsZi5fYWN0aW9uVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF9zZWxmLl9hY3Rpb25UaW1lb3V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9zZWxmLl9hY3Rpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhbmltYXRpb24uc3RhcnQoX3NlbGYuX2UubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gICAgaGFzSWQoKSB7XG4gICAgICAgIHJldHVybiAhISgodGhpcy5zdG9yeUJsb2NrSW5mbyB8fCB7X2lkOnVuZGVmaW5lZH0pLl9pZCk7XG4gICAgfVxuXG4gICAgZmFkZU91dChzcGVlZDpudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIEZhZGluZyBvdXQuLi5bJyArIHRoaXMuX3pvb21MZXZlbCArICc8JyArIHRoaXMuc3RvcnlCbG9ja0luZm8uaW1wb3J0YW5jZSArICddJyk7XG4gICAgICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYWIuY3NzKCk7XG4gICAgICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGZyb21TdHlsZSA9IHt9O1xuICAgICAgICAgICAgdmFyIHRvU3R5bGUgPSB7fTtcblxuICAgICAgICAgICAgdG9TdHlsZVsndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSA9ICdjdWJpYy1iZXppZXIoMC41NzUsIDAuMjU1LCAwLjQ0MCwgMC45ODUpOyc7XG4gICAgICAgICAgICB0b1N0eWxlWydvcGFjaXR5J10gPSAwO1xuXG4gICAgICAgICAgICBhbmltYXRpb25cbiAgICAgICAgICAgICAgICAuc2V0RHVyYXRpb24oc3BlZWQpXG4gICAgICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoZnJvbVN0eWxlKVxuICAgICAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh0b1N0eWxlKTtcblxuICAgICAgICAgICAgaWYgKCEhX3NlbGYuX2FjdGlvblRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1N0b3J5QmxvY2sgIycgKyBfc2VsZi5pbmRleCArICddIEFuaW1hdGlvbiByZW1vdmVkJyk7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF9zZWxmLl9hY3Rpb25UaW1lb3V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3NlbGYuX2FjdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24uc3RhcnQoX3NlbGYuX2UubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlUG9zaXRpb25Pblpvb20oc3BlZWQpIHtcbiAgICAgICAgbGV0IGFuaW1hdGlvbiA9IHRoaXMuX2FiLmNzcygpO1xuICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgZnJvbVN0eWxlID0ge1xuICAgICAgICAgICAgdG9wOiB0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5vZmZzZXQgKyAoKHRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0ZXAgKyAodGhpcy5fcHJldmlvdXNab29tTGV2ZWwgKiB0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5zdHJlbmd0aCkpICogdGhpcy5zdG9yeUJsb2NrSW5mby50aW1lUG9zaXRpb24pICsgJ3B4J1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB0b1N0eWxlID0ge1xuICAgICAgICAgICAgdG9wOiB0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5vZmZzZXQgKyAoKHRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0ZXAgKyAodGhpcy5fem9vbUxldmVsICogdGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RyZW5ndGgpKSAqIHRoaXMuc3RvcnlCbG9ja0luZm8udGltZVBvc2l0aW9uKSArICdweCdcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnW1N0b3J5QmxvY2sgIycgKyB0aGlzLmluZGV4ICsgJ10gQ2hhbmdpbmcgcG9zaXRpb24gZnJvbSAnICsgKGZyb21TdHlsZS50b3ApICsgJyB0byAnICsgKHRvU3R5bGUudG9wKSArICcgLi4uJyk7XG5cbiAgICAgICAgaWYgKF9zZWxmLl96b29tTGV2ZWwgPiBfc2VsZi5zdG9yeUJsb2NrSW5mby5pbXBvcnRhbmNlKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnW1N0b3J5QmxvY2sgIycgKyB0aGlzLmluZGV4ICsgJ10gLi4uYW5kIGZhZGluZyBpbiBbJyArIHRoaXMuX3pvb21MZXZlbCArICc+JyArIHRoaXMuc3RvcnlCbG9ja0luZm8uaW1wb3J0YW5jZSArICddJyk7XG4gICAgICAgICAgICB0b1N0eWxlWydvcGFjaXR5J10gPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIC4uLmFuZCBmYWRpbmcgb3V0Jyk7XG4gICAgICAgICAgICB0b1N0eWxlWydvcGFjaXR5J10gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9TdHlsZVsndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSA9ICdjdWJpYy1iZXppZXIoMC41NzUsIDAuMjU1LCAwLjQ0MCwgMC45ODUpOyc7XG5cbiAgICAgICAgYW5pbWF0aW9uXG4gICAgICAgICAgICAuc2V0RHVyYXRpb24oc3BlZWQpXG4gICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyhmcm9tU3R5bGUpXG4gICAgICAgICAgICAuc2V0VG9TdHlsZXModG9TdHlsZSk7XG5cbiAgICAgICAgaWYgKCEhX3NlbGYuX2FjdGlvblRpbWVvdXQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdbU3RvcnlCbG9jayAjJyArIHRoaXMuaW5kZXggKyAnXSBBbmltYXRpb24gcmVtb3ZlZCcpO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF9zZWxmLl9hY3Rpb25UaW1lb3V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9zZWxmLl9hY3Rpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhbmltYXRpb24uc3RhcnQoX3NlbGYuX2UubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gICAgZm9jdXMoKSB7XG4gICAgICAgIHZhciBuYXRpdmUgPSB0aGlzLl9lLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBudWxsO1xuICAgICAgICB2YXIgdGV4dGFyZWEgPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hdGl2ZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoKG5hdGl2ZS5jaGlsZE5vZGVzW2ldLmNsYXNzTmFtZSB8fCAnJykuaW5kZXhPZihcInRleHQtY29udGFpbmVyXCIpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSBuYXRpdmUuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoISFjb250YWluZXIpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoKGNvbnRhaW5lci5jaGlsZE5vZGVzW2ldLmNsYXNzTmFtZSB8fCAnJykuaW5kZXhPZihcImRlc2NyaXB0aW9uXCIpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEgPSBjb250YWluZXIuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEhdGV4dGFyZWEpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlZGl0KGluZGV4LCBldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygnU2F2aW5nIHRlbXBvcmFyeSBkYXRhICcsIHRoaXMuc3RvcnlCbG9ja0luZm8pO1xuICAgICAgICB0aGlzLnN0b3J5QmxvY2tMb2NhbFNhdmUgPSA8U3RvcnlCbG9jaz5KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RvcnlCbG9ja0luZm8pKTtcbiAgICAgICAgdGhpcy5leHBvc2VFdmVudC5lbWl0KGluZGV4KTtcbiAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cblxuICAgIHJlbW92ZShpbmRleCwgZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5kZWxldGVTdG9yeUJsb2NrKHRoaXMudXNlcklkLHRoaXMuc3RvcnlCbG9ja0luZm8pLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3Igd2hpbGUgcmVtb3ZpbmcnLCB0aGlzLnN0b3J5QmxvY2tJbmZvLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvci4gUGxlYXNlIHRyeSBhZ2Fpbi4nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdmluZyBibG9jayBpbmRleCAnICt0aGlzLmluZGV4KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUmVtb3ZlZCBzdWNjZXNzZnVsbHkuJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlU3RvcnlCbG9ja0V2ZW50LmVtaXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc2F2ZShpbmRleCwgZXZlbnQpIHtcblxuICAgICAgICBpZiAoISh0aGlzLnN0b3J5QmxvY2tJbmZvLnRpdGxlID09ICcnICYmIHRoaXMuc3RvcnlCbG9ja0luZm8uZGVzY3JpcHRpb24gPT0gJycpKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLnNhdmVTdG9yeUJsb2NrKHRoaXMudXNlcklkLHRoaXMuc3RvcnlCbG9ja0luZm8pLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2NrSW5mbyA9IDxTdG9yeUJsb2NrPmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTYXZpbmcgdGVtcG9yYXJ5IGRhdGEgJywgZGF0YSwgdGhpcy5zdG9yeUJsb2NrSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcnlCbG9ja0xvY2FsU2F2ZSA9IDxTdG9yeUJsb2NrPkpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdG9yeUJsb2NrSW5mbykpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3Igd2hpbGUgc2F2aW5nJywgdGhpcy5zdG9yeUJsb2NrSW5mbywgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4uJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NhdmVkICcsIHRoaXMuc3RvcnlCbG9ja0luZm8pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTYXZlZCBzdWNjZXNzZnVsbHkuJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCgnUGxlYXNlIGluc2VydCBhIHRpdGxlIG9yIHNvbWUgY29udGVudC4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmV4cG9zZUV2ZW50LmVtaXQoLTEpO1xuXG4gICAgICAgIGlmICghdGhpcy5zdG9yeUJsb2NrTG9jYWxTYXZlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3ZpbmcgYmxvY2sgaW5kZXggJyArdGhpcy5pbmRleCk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVN0b3J5QmxvY2tFdmVudC5lbWl0KHRoaXMuaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjondGltZWxpbmUnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lbGluZUNvbXBvbmVudCB7XG59IiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjonYWRkLWJ1dHRvbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGE+PHNwYW4+Kzwvc3Bhbj48L2E+XG4gICAgYCxcbiAgICBpbnB1dHM6IFsnb2Zmc2V0WSddXG59KVxuZXhwb3J0IGNsYXNzIEFkZEJ1dHRvbkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfb2Zmc2V0WTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2U6RWxlbWVudFJlZil7XG5cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBvZmZzZXRZKHZhbHVlOm51bWJlcikge1xuICAgICAgICB0aGlzLl9vZmZzZXRZID0gdmFsdWU7XG4gICAgICAgIHRoaXMub2Zmc2V0Q2hhbmdlZCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgb2Zmc2V0Q2hhbmdlZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9lLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gdmFsdWUgKyAncHgnO1xuICAgIH1cbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J25vdGlmaWNhdGlvbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdj57eyBfY29udGVudMKgfX08L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfdGltZXI7XG4gICAgcHJpdmF0ZSBfY29udGVudDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2U6RWxlbWVudFJlZil7XG5cbiAgICB9XG5cbiAgICBzaG93KGNvbnRlbnQpe1xuICAgICAgICBpZighIXRoaXMuX3RpbWVyKXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMuX2UubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9lLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1N0b3J5QmxvY2tTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvc3RvcnlibG9ja3Muc2VydmljZVwiO1xuaW1wb3J0IHtTdG9yeUJsb2NrfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2tcIjtcbmltcG9ydCB7U3RvcnlCbG9ja1R5cGV9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9jay10eXBlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidzaWRlYmFyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICpuZ0lmPVwiX2luZGV4ID09IC0xXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImNyZWF0ZS1zdG9yeWJsb2NrXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIChkcmFnc3RhcnQpPVwiZHJhZ1N0YXJ0KCRldmVudClcIiAoZHJhZ2VuZCk9XCJkcmFnRW5kKCRldmVudClcIj5DcmVhdGUgc3RvcnlibG9jazwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHNtYWxsPjxzdHJvbmc+VG90YWwgY2hhcHRlcnM6PC9zdHJvbmc+IHt7X3N0b3J5QmxvY2tzTGVuZ3RofX08L3NtYWxsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiX2luZGV4ID49IDAgJiYgISFfc3RvcnlCbG9ja1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGgzPjxzcGFuIGNsYXNzPVwiY2FwaXRhbC1sZXR0ZXJcIj57e19zdG9yeUJsb2NrLnR5cGV9fTwvc3Bhbj4ge3tfaW5kZXh9fTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWFjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TdG9yeWJsb2NrIHR5cGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgWyhuZ01vZGVsKV09XCJfc3RvcnlCbG9jay50eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCIjc3RvcnlCbG9ja1R5cGUgb2Ygc3RvcnlCbG9ja1R5cGVzXCIgdmFsdWU9e3tzdG9yeUJsb2NrVHlwZS5pZH19Pnt7c3RvcnlCbG9ja1R5cGUubmFtZX19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWFjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxzbWFsbD48c3Ryb25nPlRvdGFsIGNoYXJhY3RlcnM6PC9zdHJvbmc+IHt7X3N0b3J5QmxvY2suZGVzY3JpcHRpb24ubGVuZ3RofX08L3NtYWxsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgaW5wdXRzOiBbJ3N0b3J5QmxvY2snLCAnc3RvcnlCbG9ja3NMZW5ndGgnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgc3RvcnlCbG9ja1R5cGVzOlN0b3J5QmxvY2tUeXBlW107XG4gICAgXG4gICAgcHVibGljIF9pbmRleDogbnVtYmVyO1xuICAgIHB1YmxpYyBfc3RvcnlCbG9jaztcbiAgICBwdWJsaWMgX3N0b3J5QmxvY2tzTGVuZ3RoO1xuICAgIHB1YmxpYyBfc3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgICBAT3V0cHV0KCkgc3RhcnREcmFnZ2luZzpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgZW5kRHJhZ2dpbmc6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdG9yeUJsb2NrU2VydmljZTpTdG9yeUJsb2NrU2VydmljZSkge31cbiAgICBASW5wdXQoKVxuICAgIHNldCBzdG9yeUJsb2NrKHN0b3J5QmxvY2spIHtcbiAgICAgICAgdGhpcy5fc3RvcnlCbG9jayA9IHN0b3J5QmxvY2s7XG4gICAgfVxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHN0b3J5QmxvY2tzTGVuZ3RoKHN0b3J5QmxvY2tzTGVuZ3RoKXtcbiAgICAgICAgdGhpcy5fc3RvcnlCbG9ja3NMZW5ndGggPSBzdG9yeUJsb2Nrc0xlbmd0aDtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja1R5cGVzID0gdGhpcy5fc3RvcnlCbG9ja1NlcnZpY2UuZ2V0U3RvcnlCbG9ja1R5cGVzKCk7XG4gICAgICAgIHRoaXMuX2luZGV4ID0gdGhpcy5fc3RvcnlCbG9ja1NlcnZpY2UuZ2V0RXhwb3NlZEluZGV4KCk7XG4gICAgICAgIHRoaXMuX3N0b3J5QmxvY2sgPSBudWxsO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLl9zdG9yeUJsb2NrU2VydmljZS5pbmRleENoYW5nZSQuc3Vic2NyaWJlKFxuICAgICAgICAgICAgaW5kZXggPT4gdGhpcy5zZWxlY3RJbmRleChpbmRleCkpO1xuICAgIH1cbiAgICBzZWxlY3RJbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2luZGV4ID0gaW5kZXg7XG4gICAgfVxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgZHJhZ1N0YXJ0KGUpe1xuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1nLnNyYyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDUUFBQUFrQ0FZQUFBRGhBSmlZQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQk8xSlJFRlVXQW5ObUVGc0ZGVVl4NzgzTzdQYUFycGdxRkt0R0tNaEdPSkpFbTFGUThJYXBVUWtwajJZZVBObWpBZWo4ZURSZzlGNElNYWJOeE1QYlJReGdNWmlpR0tyQ1J5TVVRbHFURUFwQ0FxcmhoWjNadWY1L2Q3czI5M1NscDNGbHV5WDdPemIyZmYrLy85ODc3M3ZmZDhZNmRCdTNHZFhCeGVydzFaTVdZemNicTN0TjhiMEE2UHRhVzFQaTVXVFJ1eEV1cUs0LzY4ZDVrSW5GQ1p2NTlKWXNrdHMrcHcxc2tXWncxempqRW1NbGNOaWdyY3FvK0dlUEdQYUNscjlmanhrYS9aMWZmcEJBS09Dc1ErdE5XYjdyWUZzdU1ISXVoNGp0MXlmVVoyNUpISjYxc3J4djYwY09KWEtGK2Vzald2NkNHcnF1U2xUTUM5ZGVES2F6SG92ZkYxVTBNaVlMVXhJL0tZS2VaNmhmVDNHdm54UHdZeXNEMlJWUHYvSVA0bkkrSWxVWHZ1aFpzL09Ob1R0TGt2MHd2aW9xUzBrYVVGQnBUMjJaT040VEtlbVhGU1B2TGl4WUo3ZEVFaHZJWVA0dG1KbHYzcmdxM05XcHRVamVBYkRVLzNxc1FmV0dobFdEOTVieXVCbmxQcnQ0Nm04Y2F4bXEzak1tQWtUUmFPVlhhYVNqV3hlNXdseVlxclZLZTJ5RWErOE54U2ErOVprM2ZiK1p1WFY3eEw1U2Fja2o5MnRVL3JLcGxCMjNwYU5QM3JleWxPVGlmZldNVk1zRGw0dWFvNGdwdWxUaVQvR001dEtnWXh0Q2ZXSlJVNWNGSG5tNjBTTy9Kbm0wVEd2eithYkFubm4vbERXcnhEMXFNakk0VVMrcnlpV2V1b1JpUjVybmI2Z2RUUnJCakY0eG91WjFHblplakMrYWpIZzh5QmdnTVVEanV1RHdnR1g0MndSMGZBUXV5bE4waTlaTXdlMlp0TUV3Qk9mSnhLbithYW9CWGZCWmhRWStmRGhVSVowalRGOTJ3OGxiazBGWWZDZzMzME5EN0cxUVdFQnMyYVlwcWVubGs0TTJEd1ltR0REQVJmM1BUZHRKNGlnUjV6Qmpld21qRFZ6L3QrbDhZd0RyRi9BQkJ1REMwNjRYZURWZXhtN1JtQTZFR2ZZMnV5bXExM0E0TFF6c09HQUMwN1h2NjdCY0RiSlRIdzJDcVR3eTg3SUVQUTJmeExuM3RydHlCZjduNUJ3NU5ISUJjODc5OFkyVHFVbXZWRmZZR2JpSGJyYVE0NER4QkQwOHNhWnhjankzSWNETGpqaFJnTmFtTEl5QUp4TkdCRzRFK3ZUNkZ3WkxicFBZOHZtQlBCY25sdUhsVkV4d0hnT1Nvemo0RnFaNS9MY3lqc1E2Z3AzdVF5bk5zYlpsTWZ1MEtpTHJibXU2UmNpTVZaVGlGOW5zdmFWcnA3TGM2TWxKTG5TeHB3VTRrb2cvcjl2aG91KzJmajI5LzY0Wk9XdWorTEcvY1VhclljeWZkQkNJdUZja3M4dlRlalpwRG1pSjh5ODVPOXh1dWN4NzlzbWtsaW03TFFPWHZXN3BoQXJWMllweE0vdEgwN1dmWkIxWWxILytIam1yWDY5MXdMZVZ0UE45Y1FPYmd3dGdjdUI5UWVaSGtZK2M2M01jM2x1dEFRazVBZ2c3Y1JJcmpxeHFrYUpveHA1K1hUaW5WWXV6NDJXUUN1SGcveEpEb3lSNlhWaWxhckl0czhTOStsa0hIMDlsK2VtVWdsc2I3UlBsM2RDUWs0T1ROcEpXRjl1Z3dNdU9PRkdBMlZUUU4xRXFVSjFRRUtPa1hZdXQza09PT0ZHQTFxeStkRzZDUUZVQjJ4WmNtRFN6dVV5c09HQUMwN0hVOWZnV0NuaWRJVlBVYXBRSFdEa3dLMVIyTjFjZ2d1WVlHTnd3UW0zTHlRYmJxQ0lveE9sQ3VrbHg4QzdnNkdRZGk2VmdRVW0ySERBQmJibnB0MFFSRTZyU25kVE4xR3FVQjJRKzVJREw0V253UEQ1Tk5od3dBV256NmZuQ09JSEZTV2xDVzZrVlBHaURtMkwvdGVhWXMyQXdRUDZNc2hWc3NybE9DR3YyN3o1NktwQzBhdnNxbExhaStxcWx3MWVGTjlkOHpxbVZSVHRybmxoZGJrd3lpWlhxV1RGd1FCcHAyN2R1YS8wTklQVmNST2NrNTIrMHZzUE9PUGxMblZZMGxZQUFBQUFTVVZPUks1Q1lJST1cIjtcbiAgICAgICAgaW1nLnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKGltZywgMTgsIDE4KTtcbiAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nLmVtaXQoZSk7XG4gICAgfVxuICAgIGRyYWdFbmQoZSl7XG4gICAgICAgIHZhciBpY29uV2lkdGggPSAzNjtcbiAgICAgICAgdmFyIGFzaWRlV2lkdGggPSAyNDA7XG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID49IDc2OCAmJiBlLnggPiB3aW5kb3cuaW5uZXJXaWR0aCAtIGFzaWRlV2lkdGggLSBpY29uV2lkdGgpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5kRHJhZ2dpbmcuZW1pdChlKTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFVzZXIge1xuICAgIG5hbWUgOiBzdHJpbmc7XG4gICAgZW1haWwgOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQgOiBzdHJpbmc7XG59IiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViU3RvcmFnZVNlcnZpY2Uge1xuICAgIHByaXZhdGUgc3RvcmFnZVN1cHBvcnRlZCA9ICh0eXBlb2YoU3RvcmFnZSkgIT09IFwidW5kZWZpbmVkXCIpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgcHV0KGtleSwgdmFsdWUpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlU3VwcG9ydGVkKSB7XG4gICAgICAgICAgICBpZiAoISF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHV0SW5Mb2NhbFN0b3JhZ2Uoa2V5LCB2YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCEhdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnB1dEluQ29va2llcyhrZXksIHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tQ29va2llcyhrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0KGtleSk6YW55IHtcbiAgICAgICAgaWYgKHRoaXMuc3RvcmFnZVN1cHBvcnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RnJvbUxvY2FsU3RvcmFnZShrZXkpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGcm9tQ29va2llKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmUoa2V5KTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc3RvcmFnZVN1cHBvcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tTG9jYWxTdG9yYWdlKGtleSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUNvb2tpZXMoa2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcHV0SW5Mb2NhbFN0b3JhZ2Uoa2V5LCB2YWx1ZSk6dm9pZCB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZW5jb2RlVVJJKHZhbHVlKSB8fCBcIlwiKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRGcm9tTG9jYWxTdG9yYWdlKGtleSk6YW55IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlVVJJKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpIHx8IFwie31cIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVGcm9tTG9jYWxTdG9yYWdlKGtleSk6dm9pZCB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwdXRJbkNvb2tpZXMoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGQuc2V0VGltZShkLmdldFRpbWUoKSArICgzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcbiAgICAgICAgdmFyIGV4cGlyZXMgPSBkLnRvVVRDU3RyaW5nKCk7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSArPSBrZXkgKyAnPScgKyBKU09OLnN0cmluZ2lmeShlbmNvZGVVUkkodmFsdWUpIHx8IFwiXCIpICsgXCI7cGF0aD0vO2V4cGlyZXM9XCIgKyBleHBpcmVzO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RnJvbUNvb2tpZShrZXkpOmFueSB7XG4gICAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJyg/Ol58OylcXFxccz8nICsga2V5ICsgJz0oLio/KSg/Ojt8JCknLCAnaScpO1xuICAgICAgICB2YXIgbXRjID0gZG9jdW1lbnQuY29va2llLm1hdGNoKHJlZ2V4KSB8fCBbXTtcbiAgICAgICAgaWYgKG10Yy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUkkobXRjWzFdKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH07XG5cbiAgICBwcml2YXRlIHJlbW92ZUZyb21Db29raWVzKGtleSk6dm9pZCB7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGtleSArIFwiPTtwYXRoPS87ZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVFwiO1xuICAgIH1cbn0iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7Snd0VG9rZW59IGZyb20gXCIuLi9tb2RlbHMvand0VG9rZW5cIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXJcIjtcbmltcG9ydCB7V2ViU3RvcmFnZVNlcnZpY2V9IGZyb20gXCIuL3dlYnN0b3JhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6SHR0cCwgcHJpdmF0ZSB3ZWJTdG9yYWdlU2VydmljZTpXZWJTdG9yYWdlU2VydmljZSwgcHJpdmF0ZSBjb25maWd1cmF0aW9uOkNvbmZpZ3VyYXRpb24pIHtcbiAgICB9XG5cbiAgICBsb2dvdXQoKTpib29sZWFuIHtcbiAgICAgICAgdGhpcy53ZWJTdG9yYWdlU2VydmljZS5yZW1vdmUodGhpcy5jb25maWd1cmF0aW9uLnRva2VuLm5hbWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBsb2dpbih1c2VyOlVzZXIpOk9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyB0ZW1wb3JhcnkgZGF0YScpO1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpQmFzZVBhdGggKyAnL2F1dGgvbG9naW4nLFxuICAgICAgICAgICAgICAgIFwibmFtZT1cIiArIHVzZXIubmFtZSArIFwiJlwiICtcbiAgICAgICAgICAgICAgICBcImVtYWlsPVwiICsgdXNlci5lbWFpbCArIFwiJlwiICtcbiAgICAgICAgICAgICAgICBcInBhc3N3b3JkPVwiICsgdXNlci5wYXNzd29yZCxcbiAgICAgICAgICAgIG9wdGlvbnMpXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMudGV4dCgpKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlcih1c2VyOlVzZXIpOk9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyB0ZW1wb3JhcnkgZGF0YScpO1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5jb25maWd1cmF0aW9uLmFwaUJhc2VQYXRoICsgJy9hdXRoL3JlZ2lzdGVyJyxcbiAgICAgICAgICAgICAgICBcImVtYWlsPVwiICsgdXNlci5lbWFpbCArIFwiJlwiICtcbiAgICAgICAgICAgICAgICBcInBhc3N3b3JkPVwiICsgdXNlci5wYXNzd29yZCxcbiAgICAgICAgICAgIG9wdGlvbnMpXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMudGV4dCgpKTtcblxuICAgIH1cblxuICAgIGlzTG9nZ2VkSW4oKTpib29sZWFuIHtcbiAgICAgICAgdmFyIHRva2VuRGF0YVNwbGl0ID0gKHRoaXMud2ViU3RvcmFnZVNlcnZpY2UuZ2V0KHRoaXMuY29uZmlndXJhdGlvbi50b2tlbi5uYW1lKSB8fCAnJykuc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgaWYgKCF0b2tlbkRhdGFTcGxpdCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0b2tlbkRhdGFSYXcgPSBhdG9iKHRva2VuRGF0YVNwbGl0KTtcblxuICAgICAgICB2YXIgdG9rZW5EYXRhID0gSlNPTi5wYXJzZSh0b2tlbkRhdGFSYXcpIGFzIEp3dFRva2VuO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2tlbkRhdGEpO1xuICAgICAgICByZXR1cm4gKHRva2VuRGF0YS5leHAgfHwgMCkgPiBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICB9O1xuXG5cbiAgICBnZXRJZEZyb21Ub2tlbigpIHtcbiAgICAgICAgdmFyIHRva2VuRGF0YVNwbGl0ID0gKHRoaXMud2ViU3RvcmFnZVNlcnZpY2UuZ2V0KHRoaXMuY29uZmlndXJhdGlvbi50b2tlbi5uYW1lKSB8fCAnJykuc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgaWYgKCF0b2tlbkRhdGFTcGxpdCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0b2tlbkRhdGFSYXcgPSBhdG9iKHRva2VuRGF0YVNwbGl0KTtcblxuICAgICAgICB2YXIgdG9rZW5EYXRhID0gSlNPTi5wYXJzZSh0b2tlbkRhdGFSYXcpIGFzIEp3dFRva2VuO1xuXG4gICAgICAgIHJldHVybiB0b2tlbkRhdGEuX2lkXG4gICAgfVxuXG4gICAgZ2V0SWRGcm9tQW5vbnltb3VzVG9rZW4odG9rZW5EYXRhU3RyaW5nKSB7XG4gICAgICAgIHZhciB0b2tlbkRhdGFSYXcgPSBhdG9iKHRva2VuRGF0YVN0cmluZyk7XG5cbiAgICAgICAgdmFyIHRva2VuRGF0YSA9IEpTT04ucGFyc2UodG9rZW5EYXRhUmF3KSBhcyBKd3RUb2tlbjtcbiAgICAgICAgcmV0dXJuIHRva2VuRGF0YS5faWRcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUFub255bW91c1Rva2VuKCk6YW55IHtcbiAgICAgICAgdmFyIGFub255bW91c1Rva2VuID0ge1xuICAgICAgICAgICAgX2lkOiB0aGlzLmdlbmVyYXRlVW5pcXVlSWQoKVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBidG9hKEpTT04uc3RyaW5naWZ5KGFub255bW91c1Rva2VuKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZVVuaXF1ZUlkKCkge1xuICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn0iLCJpbXBvcnQge0NvbnRyb2wsIENvbnRyb2xHcm91cH0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuXG4vKlxuIEN1c3RvbSB2YWxpZGF0b3JzIHRvIHVzZSBldmVyeXdoZXJlLlxuICovXG5cbi8vIFNJTkdMRSBGSUVMRCBWQUxJREFUT1JTXG5leHBvcnQgZnVuY3Rpb24gZW1haWxWYWxpZGF0b3IoY29udHJvbDogQ29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICB2YXIgZW1haWxSZWdleHAgPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKiQvaTtcbiAgICBpZiAoY29udHJvbC52YWx1ZSAmJiBjb250cm9sLnZhbHVlLmxlbmd0aCA8IDYgJiYgIWVtYWlsUmVnZXhwLnRlc3QoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHtpbnZhbGlkRW1haWw6IHRydWV9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVtYWlsUmVnZXhwID0gJ15bYS16MC05ISMkJSZcXCcqK1xcXFwvPT9eX2B7fH1+Li1dK0BbYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSokJztcblxuLy9DT05UUk9MIEdST1VQIFZBTElEQVRPUlNcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGluZ1Bhc3N3b3JkcyhwYXNzd29yZEtleTogc3RyaW5nLCBjb25maXJtUGFzc3dvcmRLZXk6IHN0cmluZykge1xuICAgIHJldHVybiAoZ3JvdXA6IENvbnRyb2xHcm91cCk6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcbiAgICAgICAgbGV0IHBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbcGFzc3dvcmRLZXldO1xuICAgICAgICBsZXQgY29uZmlybVBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbY29uZmlybVBhc3N3b3JkS2V5XTtcbiAgICAgICAgaWYgKHBhc3N3b3JkLnZhbHVlICE9PSBjb25maXJtUGFzc3dvcmQudmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWlzbWF0Y2hlZFBhc3N3b3JkczogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgfVxufSIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uL21vZGVscy91c2VyXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBDb250cm9sR3JvdXAsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtlbWFpbFZhbGlkYXRvciwgbWF0Y2hpbmdQYXNzd29yZHMsIGVtYWlsUmVnZXhwfSBmcm9tICcuLi9zZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UnO1xuaW1wb3J0IHtXZWJTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3dlYnN0b3JhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaWduLWluLWZvcm0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4Ym94IGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgPGgxPkNvbWUgaW4sIHN0b3J5dGVsbGVyPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2PjxhIGNsYXNzPVwiY2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoJGV2ZW50KVwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9hPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwiZm9ybVwiIChuZ1N1Ym1pdCk9XCJvblNpZ25JbigkZXZlbnQpXCIgbm92YWxpZGF0ZT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlci5lbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWydlbWFpbCddXCJcbiAgICAgICAgICAgICAgICAgICAgI2VtYWlsPVwibmdGb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2ICAqbmdJZj1cIihlbWFpbC5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmICFlbWFpbC52YWxpZFwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgRW1haWwgaXMgaW52YWxpZFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIllvdXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIucGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdPVwiZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXVwiXG4gICAgICAgICAgICAgICAgICAgICNwYXNzd29yZD1cIm5nRm9ybVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiAgKm5nSWY9XCIocGFzc3dvcmQuZGlydHkgfHwgc3VibWl0dGVkKSAmJiAhcGFzc3dvcmQudmFsaWRcIiBjbGFzcz1cInBhbmVsIHBhbmVsLWVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgIFRoZSBwYXNzd29yZCBzaG91bGQgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmdcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIHByaW1hcnkgYmxvY2stYnV0dG9uXCI+U2lnbiBpbjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dhcC1mb3JtXCI+PGEgKGNsaWNrKT1cInN3YXBUb1NpZ25VcCgpXCI+SSB3YW50IHRvIGNyZWF0ZSBhIG5ldyBhY2NvdW50PC9hPjwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlLCBXZWJTdG9yYWdlU2VydmljZV0sXG4gICAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFU11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWduSW5Db21wb25lbnQge1xuICAgIHVzZXI6VXNlciA9IG5ldyBVc2VyKCk7XG4gICAgZm9ybTpDb250cm9sR3JvdXA7XG4gICAgc3VibWl0dGVkID0gZmFsc2U7XG5cbiAgICBAT3V0cHV0KCkgY2xvc2VNb2RhbDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgc3dhcFdpbmRvdzpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgbm90aWZ5OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBhdXRoU3RhdHVzOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSwgcHJpdmF0ZSBidWlsZGVyOkZvcm1CdWlsZGVyLCBwcml2YXRlIHdlYlN0b3JhZ2VTZXJ2aWNlOldlYlN0b3JhZ2VTZXJ2aWNlLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbikge1xuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZvcm0gPSBidWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKGVtYWlsUmVnZXhwKV0pXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNsb3NlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbC5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBzd2FwVG9TaWduVXAoKSB7XG4gICAgICAgIHRoaXMuc3dhcFdpbmRvdy5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBvblNpZ25JbihldmVudCkge1xuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9naW4odGhpcy51c2VyKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2ViU3RvcmFnZVNlcnZpY2UucHV0KHRoaXMuY29uZmlndXJhdGlvbi50b2tlbi5uYW1lLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nZ2VkIGluJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFN0YXR1cy5lbWl0KCdMb2dpbicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCcnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uL21vZGVscy91c2VyXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBDb250cm9sR3JvdXAsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtlbWFpbFZhbGlkYXRvciwgbWF0Y2hpbmdQYXNzd29yZHMsIGVtYWlsUmVnZXhwfSBmcm9tICcuLi9zZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UnO1xuaW1wb3J0IHtXZWJTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3dlYnN0b3JhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaWduLXVwLWZvcm0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4Ym94IGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgPGgxPkJlY29tZSBhIHN0b3J5dGVsbGVyPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2PjxhIGNsYXNzPVwiY2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoJGV2ZW50KVwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9hPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwiZm9ybVwiIChuZ1N1Ym1pdCk9XCJvblNpZ25VcCgkZXZlbnQpXCIgbm92YWxpZGF0ZT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWyduYW1lJ11cIlxuICAgICAgICAgICAgICAgICAgICAjbmFtZT1cIm5nRm9ybVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgICpuZ0lmPVwiKG5hbWUuZGlydHkgfHwgc3VibWl0dGVkKSAmJiAhbmFtZS52YWxpZFwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgWW91ciBuYW1lIGlzIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLmVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cImZvcm0uY29udHJvbHNbJ2VtYWlsJ11cIlxuICAgICAgICAgICAgICAgICAgICAjZW1haWw9XCJuZ0Zvcm1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgICpuZ0lmPVwiKGVtYWlsLmRpcnR5IHx8IHN1Ym1pdHRlZCkgJiYgIWVtYWlsLnZhbGlkXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1lcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICBFbWFpbCBpcyBpbnZhbGlkXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlci5wYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXCJcbiAgICAgICAgICAgICAgICAgICAgI3Bhc3N3b3JkPVwibmdGb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2ICAqbmdJZj1cIihwYXNzd29yZC5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmICFwYXNzd29yZC52YWxpZFwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgVGhlIHBhc3N3b3JkIHNob3VsZCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZ1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIuY29uZmlybVBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cImZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddXCJcbiAgICAgICAgICAgICAgICAgICAgI2NvbmZpcm1QYXNzd29yZD1cIm5nRm9ybVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29uZmlybS1wYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiKGNvbmZpcm1QYXNzd29yZC5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmIGZvcm0uaGFzRXJyb3IoJ21pc21hdGNoZWRQYXNzd29yZHMnKVwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgVGhlIHBhc3N3b3JkcyBkb24ndCBtYXRjaFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24gcHJpbWFyeSBibG9jay1idXR0b25cIj5TaWduIHVwPC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2FwLWZvcm1cIj48YSAoY2xpY2spPVwic3dhcFRvU2lnbkluKClcIj5JIGFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PC9hPjwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlLCBXZWJTdG9yYWdlU2VydmljZV0sXG4gICAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFU11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWduVXBDb21wb25lbnQge1xuICAgIHVzZXI6VXNlciA9IG5ldyBVc2VyKCk7XG4gICAgZm9ybTpDb250cm9sR3JvdXA7XG4gICAgc3VibWl0dGVkID0gZmFsc2U7XG5cbiAgICBAT3V0cHV0KCkgY2xvc2VNb2RhbDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgc3dhcFdpbmRvdzpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgbm90aWZ5OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBhdXRoU3RhdHVzOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSwgcHJpdmF0ZSBidWlsZGVyOkZvcm1CdWlsZGVyLCBwcml2YXRlIHdlYlN0b3JhZ2VTZXJ2aWNlOldlYlN0b3JhZ2VTZXJ2aWNlLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbikge1xuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZvcm0gPSBidWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgIG5hbWU6WycnXSxcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKGVtYWlsUmVnZXhwKV0pXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKV0sXG4gICAgICAgICAgICBjb25maXJtUGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIH0sIHt2YWxpZGF0b3I6IG1hdGNoaW5nUGFzc3dvcmRzKCdwYXNzd29yZCcsICdjb25maXJtUGFzc3dvcmQnKX0pXG4gICAgfVxuXG4gICAgY2xvc2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsLmVtaXQoZXZlbnQpO1xuICAgIH1cblxuICAgIHN3YXBUb1NpZ25JbigpIHtcbiAgICAgICAgdGhpcy5zd2FwV2luZG93LmVtaXQoZXZlbnQpO1xuICAgIH1cblxuICAgIG9uU2lnblVwKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5mb3JtLnZhbHVlKSk7XG4gICAgICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2ViU3RvcmFnZVNlcnZpY2UucHV0KHRoaXMuY29uZmlndXJhdGlvbi50b2tlbi5uYW1lLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBlbWFpbCBpcyBhbHJlYWR5IHRha2VuJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZ2lzdGVyZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU3RhdHVzLmVtaXQoJ0xvZ2luJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoJycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuaW1wb3J0IHtTaWduSW5Db21wb25lbnR9IGZyb20gXCIuL3NpZ25pbi1mb3JtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaWduVXBDb21wb25lbnR9IGZyb20gXCIuL3NpZ251cC1mb3JtLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2F1dGgtZm9ybScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNpZ24taW4tZm9ybSBcbiAgICAgICAgICAgICpuZ0lmPVwibG9naW5cIiBcbiAgICAgICAgICAgIChjbG9zZU1vZGFsKT1cImhpZGVBY2Nlc3NGb3JtKClcIlxuICAgICAgICAgICAgKHN3YXBXaW5kb3cpPVwibG9naW49IWxvZ2luXCJcbiAgICAgICAgICAgIChhdXRoU3RhdHVzKT1cImF1dGhTdGF0dXNDaGFuZ2VkKCRldmVudClcIlxuICAgICAgICAgICAgKG5vdGlmeSk9XCJub3RpZnlNZXNzYWdlKCRldmVudClcIlxuICAgICAgICAgICAgPjwvc2lnbi1pbi1mb3JtPlxuICAgICAgICA8c2lnbi11cC1mb3JtIFxuICAgICAgICAgICAgKm5nSWY9XCIhbG9naW5cIiBcbiAgICAgICAgICAgIChjbG9zZU1vZGFsKT1cImhpZGVBY2Nlc3NGb3JtKClcIlxuICAgICAgICAgICAgKHN3YXBXaW5kb3cpPVwibG9naW49IWxvZ2luXCJcbiAgICAgICAgICAgIChhdXRoU3RhdHVzKT1cImF1dGhTdGF0dXNDaGFuZ2VkKCRldmVudClcIlxuICAgICAgICAgICAgKG5vdGlmeSk9XCJub3RpZnlNZXNzYWdlKCRldmVudClcIlxuICAgICAgICAgICAgPjwvc2lnbi11cC1mb3JtPlxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbXSxcbiAgICBkaXJlY3RpdmVzOiBbU2lnbkluQ29tcG9uZW50LCBTaWduVXBDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgQXV0aEZvcm1Db21wb25lbnQge1xuICAgIEBPdXRwdXQoKSBjbG9zZU1vZGFsOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBub3RpZnk6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGF1dGhTdGF0dXM6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgXG4gICAgcHVibGljIGxvZ2luPWZhbHNlO1xuXG4gICAgaGlkZUFjY2Vzc0Zvcm0oZXZlbnQpIHtcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgICBcbiAgICBub3RpZnlNZXNzYWdlKGV2ZW50KXtcbiAgICAgICAgdGhpcy5ub3RpZnkuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgYXV0aFN0YXR1c0NoYW5nZWQoZXZlbnQpe1xuICAgICAgICB0aGlzLmF1dGhTdGF0dXMuZW1pdChldmVudCk7XG4gICAgfVxufSIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge05nQ2xhc3N9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge1N0b3J5QmxvY2tTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvc3RvcnlibG9ja3Muc2VydmljZVwiO1xuaW1wb3J0IHtTdG9yeUJsb2NrfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2tcIjtcbmltcG9ydCB7U3RvcnlCbG9ja0NvbXBvbmVudH0gZnJvbSBcIi4vc3RvcnlibG9jay5jb21wb25lbnRcIjtcbmltcG9ydCB7VGltZWxpbmVDb21wb25lbnR9IGZyb20gXCIuL3RpbWVsaW5lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBZGRCdXR0b25Db21wb25lbnR9IGZyb20gXCIuL2FkZC1idXR0b24uY29tcG9uZW50XCI7XG5pbXBvcnQge05vdGlmaWNhdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaWRlYmFyQ29tcG9uZW50fSBmcm9tIFwiLi9zaWRlYmFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7U3RvcnlCbG9ja1R5cGV9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9jay10eXBlXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge1dlYlN0b3JhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvd2Vic3RvcmFnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0F1dGhGb3JtQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoLWZvcm0uY29tcG9uZW50XCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtY29udGVudCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8dGltZWxpbmUgY2xhc3M9XCJ0aW1lbGluZS1ibG9ja1wiPjwvdGltZWxpbmU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RvcnktYmxvY2tzXCI+XG4gICAgICAgICAgICAgICAgPHN0b3J5YmxvY2sgKm5nRm9yPVwiI3N0b3J5QmxvY2sgb2Ygc3RvcnlCbG9ja3M7ICNpID0gaW5kZXhcIiBcbiAgICAgICAgICAgICAgICAgICAgW2luZGV4XT1cImlcIiBcbiAgICAgICAgICAgICAgICAgICAgW3N0b3J5QmxvY2tJbmZvXT1cInN0b3J5QmxvY2tcIiBcbiAgICAgICAgICAgICAgICAgICAgW3pvb21MZXZlbF09XCJ6b29tTGV2ZWxcIlxuICAgICAgICAgICAgICAgICAgICBbdXNlcklkXT1cInVzZXJJZFwiXG4gICAgICAgICAgICAgICAgICAgIFtleHBvc2VkSW5kZXhdPVwiZXhwb3NlZEluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie2V4cG9zZWQ6IGV4cG9zZWRJbmRleCA9PSBpfVwiXG4gICAgICAgICAgICAgICAgICAgIChyZW1vdmVTdG9yeUJsb2NrRXZlbnQpPVwicmVtb3ZlU3RvcnlCbG9jaygkZXZlbnQpXCIgXG4gICAgICAgICAgICAgICAgICAgIChleHBvc2VFdmVudCk9XCJzZXRFeHBvc2VkKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAobm90aWZ5KT1cIm5vdGlmeSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzdG9yeS1ibG9jayB7eyBzdG9yeUJsb2NrLnR5cGXCoH19XCI+PC9zdG9yeWJsb2NrPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmVcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJhZGRTdG9yeUJsb2NrKCRldmVudClcIlxuICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cIm9uTW91c2VFbnRlcigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJvbk1vdXNlTGVhdmUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKG1vdXNlbW92ZSk9XCJvbk1vdXNlTW92ZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgPGFkZC1idXR0b24gKm5nSWY9XCJhZGRCdXR0b24udmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgICAgIFtvZmZzZXRZXT1cImFkZEJ1dHRvbi50b3BcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWRkU3RvcnlCbG9jaygkZXZlbnQpXCI+PC9hZGQtYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiem9vbS1jb250cm9sc1wiPiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPVwiWm9vbSBpblwiIChjbGljayk9XCJ6b29tSW4oKVwiPis8L2E+ICBcbiAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9XCJab29tIG91dFwiIChjbGljayk9XCJ6b29tT3V0KClcIj4mbmRhc2g7PC9hPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxhc2lkZSBbbmdDbGFzc109XCJ7dmlzaWJsZTogbWVudVZpc2libGV9XCI+XG4gICAgICAgICAgICA8c2lkZWJhclxuICAgICAgICAgICAgKHN0YXJ0RHJhZ2dpbmcpPVwidG9nZ2xlTWVudShmYWxzZSlcIlxuICAgICAgICAgICAgKGVuZERyYWdnaW5nKT1cImFkZFN0b3J5QmxvY2soJGV2ZW50KVwiXG4gICAgICAgICAgICBbc3RvcnlCbG9ja109XCJleHBvc2VkU3RvcnlCbG9ja1wiIFtzdG9yeUJsb2Nrc0xlbmd0aF09XCJzdG9yeUJsb2Nrcy5sZW5ndGhcIj48L3NpZGViYXI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cInVzZXItYXNpZGVcIiAoY2xpY2spPVwiZG93bmxvYWRQZGYoKVwiPkRvd25sb2FkIFBERjwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwidXNlci1hc2lkZVwiICpuZ0lmPVwiIWlzTG9nZ2VkSW4oKVwiIChjbGljayk9XCJzaG93QWNjZXNzRm9ybSgpXCI+TG9naW4vU2lnbnVwPC9hPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJ1c2VyLWFzaWRlXCIgKm5nSWY9XCJpc0xvZ2dlZEluKClcIiAoY2xpY2spPVwibG9nT3V0KClcIj5Mb2dvdXQ8L2E+XG4gICAgICAgICAgICA8YSBpZD1cImNsb3NlLW1lbnVcIiAoY2xpY2spPVwidG9nZ2xlTWVudShmYWxzZSlcIj48L2E+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgICAgIDxoZWFkZXI+PGEgaWQ9XCJidXJnZXJcIiAoY2xpY2spPVwidG9nZ2xlTWVudSh0cnVlKVwiPjxpIGNsYXNzPVwiZmEgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2E+PC9oZWFkZXI+XG4gICAgICAgIDxhdXRoLWZvcm0gXG4gICAgICAgICAgICAqbmdJZj1cImFjY2Vzc0Zvcm1WaXNpYmxlXCIgXG4gICAgICAgICAgICAoY2xvc2VNb2RhbCk9XCJoaWRlQWNjZXNzRm9ybSgpXCJcbiAgICAgICAgICAgIChub3RpZnkpPVwibm90aWZ5KCRldmVudClcIlxuICAgICAgICAgICAgKGF1dGhTdGF0dXMpPVwiYXV0aFN0YXR1c0NoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICA+PC9hdXRoLWZvcm0+XG4gICAgICAgIDxub3RpZmljYXRpb24gW25nQ2xhc3NdPVwie2Vycm9yOiBub3RpZmljYXRpb24udHlwZSA9PSAnZXJyb3InLCBzdWNjZXNzOiBub3RpZmljYXRpb24udHlwZSA9PSAnc3VjY2Vzcyd9XCI+PC9ub3RpZmljYXRpb24+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtTdG9yeUJsb2NrU2VydmljZSwgQ29uZmlndXJhdGlvbiwgQXV0aFNlcnZpY2UsIFdlYlN0b3JhZ2VTZXJ2aWNlXSxcbiAgICBkaXJlY3RpdmVzOiBbU3RvcnlCbG9ja0NvbXBvbmVudCwgVGltZWxpbmVDb21wb25lbnQsIEFkZEJ1dHRvbkNvbXBvbmVudCwgTm90aWZpY2F0aW9uQ29tcG9uZW50LCBTaWRlYmFyQ29tcG9uZW50LCBBdXRoRm9ybUNvbXBvbmVudCwgTmdDbGFzc11cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBWaWV3Q2hpbGQoTm90aWZpY2F0aW9uQ29tcG9uZW50KSBub3RpZmljYXRpb25Db21wb25lbnQ6Tm90aWZpY2F0aW9uQ29tcG9uZW50O1xuICAgIHB1YmxpYyBzdG9yeUJsb2NrczpTdG9yeUJsb2NrW107XG4gICAgcHVibGljIHN0b3J5QmxvY2tUeXBlczpTdG9yeUJsb2NrVHlwZVtdO1xuICAgIHB1YmxpYyBzdG9yeUJsb2NrRGVmYXVsdFR5cGVzOlN0b3J5QmxvY2tUeXBlW107XG4gICAgcHJpdmF0ZSB1c2VySWQ7XG4gICAgcHVibGljIHpvb21MZXZlbDtcbiAgICBwdWJsaWMgZXhwb3NlZEluZGV4O1xuICAgIHB1YmxpYyBleHBvc2VkU3RvcnlCbG9jaztcbiAgICBwdWJsaWMgYWRkQnV0dG9uO1xuICAgIHB1YmxpYyB0b2tlbjpzdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgbWVudVZpc2libGU7XG4gICAgcHVibGljIGFjY2Vzc0Zvcm1WaXNpYmxlO1xuICAgIHByaXZhdGUgbWF4SW5kZXggPSAwO1xuICAgIHByaXZhdGUgbm90aWZpY2F0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yeUJsb2NrU2VydmljZTpTdG9yeUJsb2NrU2VydmljZSwgcHJpdmF0ZSBjb25maWd1cmF0aW9uOkNvbmZpZ3VyYXRpb24sIHByaXZhdGUgd2ViU3RvcmFnZVNlcnZpY2U6V2ViU3RvcmFnZVNlcnZpY2UsIHByaXZhdGUgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOmFueSB7XG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja3MgPSBbXTtcbiAgICAgICAgdGhpcy51c2VySWQgPSB0aGlzLmF1dGhVc2VyKCk7XG4gICAgICAgIHRoaXMuZ2V0U3RvcnlCbG9ja1R5cGVzKCk7XG4gICAgICAgIHRoaXMuZ2V0U3RvcnlCbG9ja3ModGhpcy51c2VySWQpO1xuICAgICAgICB0aGlzLnpvb21MZXZlbCA9IDEwO1xuICAgICAgICB0aGlzLmV4cG9zZWRJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLmV4cG9zZWRTdG9yeUJsb2NrID0gbnVsbDtcbiAgICAgICAgdGhpcy5hZGRCdXR0b24gPSB7XG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHRvcDogMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1lbnVWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWNjZXNzRm9ybVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24gPSB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIGF1dGhVc2VyKCl7XG4gICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0SWRGcm9tVG9rZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBhbm9ueW1vdXNUb2tlbiA9IHRoaXMud2ViU3RvcmFnZVNlcnZpY2UuZ2V0KCdhbm9ueW1vdXNfdG9rZW4nKTtcbiAgICAgICAgICAgIGlmICghYW5vbnltb3VzVG9rZW4pIHtcbiAgICAgICAgICAgICAgICB2YXIgYW5vbnltb3VzVG9rZW4gPSB0aGlzLmF1dGhTZXJ2aWNlLmdlbmVyYXRlQW5vbnltb3VzVG9rZW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLndlYlN0b3JhZ2VTZXJ2aWNlLnB1dCgnYW5vbnltb3VzX3Rva2VuJywgYW5vbnltb3VzVG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0SWRGcm9tQW5vbnltb3VzVG9rZW4oYW5vbnltb3VzVG9rZW4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNldFRva2VuKHZhbHVlOnN0cmluZyl7XG4gICAgICAgIHRoaXMud2ViU3RvcmFnZVNlcnZpY2UucHV0KCd0b2tlbicsdmFsdWUpO1xuICAgIH0gICAgXG4gICAgXG4gICAgZ2V0VG9rZW4oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMud2ViU3RvcmFnZVNlcnZpY2UuZ2V0KCd0b2tlbicpO1xuICAgIH1cblxuICAgIGF1dGhTdGF0dXNDaGFuZ2VkKCl7XG4gICAgICAgIHRoaXMucmVmcmVzaEJsb2NrTGlzdCgpO1xuICAgIH1cblxuICAgIHJlZnJlc2hCbG9ja0xpc3QoKXtcbiAgICAgICAgdGhpcy51c2VySWQgPSB0aGlzLmF1dGhVc2VyKCk7XG4gICAgICAgIHRoaXMuZ2V0U3RvcnlCbG9ja3ModGhpcy51c2VySWQpO1xuICAgIH1cblxuICAgIGdldFN0b3J5QmxvY2tUeXBlcygpIHtcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrVHlwZXMgPSB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdldFN0b3J5QmxvY2tUeXBlcygpO1xuICAgICAgICB0aGlzLnN0b3J5QmxvY2tEZWZhdWx0VHlwZXMgPSB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdldFN0b3J5QmxvY2tEZWZhdWx0VHlwZXMoKTtcbiAgICB9XG5cbiAgICBnZXRTdG9yeUJsb2NrcyhpZCkge1xuICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdldFN0b3J5QmxvY2tzKGlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tzID0gZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLm1heEluZGV4ID0gMDtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdG9yeUJsb2Nrc1tpXS50eXBlID09PSAnY2hhcHRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF4SW5kZXggPSBNYXRoLm1heCh0aGlzLm1heEluZGV4LCB0aGlzLnN0b3J5QmxvY2tzW2ldLmJsb2NrSWQgfHwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoISF0aGlzLnN0b3J5QmxvY2tzKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5nZW5lcmF0ZVRlc3REYXRhKHRoaXMudXNlcklkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlRGVmYXVsdEJsb2NrcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2NrcyA9IHNhdmVEZWZhdWx0QmxvY2tzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjYWxjdWxhdGVTdG9yeUJsb2NrTnVtYmVycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVyciksXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnZG9uZSwgbG9hZGVkICcgKyB0aGlzLnN0b3J5QmxvY2tzLmxlbmd0aCArICcgYmxvY2tzJywgdGhpcy5zdG9yeUJsb2NrcylcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZVN0b3J5QmxvY2tOdW1iZXJzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdkb25lLCBsb2FkZWQgJyArIHRoaXMuc3RvcnlCbG9ja3MubGVuZ3RoICsgJyBibG9ja3MnLCB0aGlzLnN0b3J5QmxvY2tzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbW92ZVN0b3J5QmxvY2soaW5kZXgpIHtcbiAgICAgICAgdGhpcy5zdG9yeUJsb2Nrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnJlY2FsY3VsYXRlU3RvcnlCbG9ja051bWJlcnMoKTtcbiAgICB9XG5cbiAgICBzaG93QWNjZXNzRm9ybSgpIHtcbiAgICAgICAgdGhpcy50b2dnbGVNZW51KGZhbHNlKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCkpO1xuICAgICAgICB0aGlzLmFjY2Vzc0Zvcm1WaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpO1xuICAgIH1cblxuICAgIGhpZGVBY2Nlc3NGb3JtKCkge1xuICAgICAgICB0aGlzLmFjY2Vzc0Zvcm1WaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKTtcbiAgICB9XG5cbiAgICByZWNhbGN1bGF0ZVN0b3J5QmxvY2tOdW1iZXJzKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTnVtYmVyaW5nIGJlZm9yZScsdGhpcy5zdG9yeUJsb2Nrcyk7XG4gICAgICAgIHZhciBjdXJyZW50VHlwZXMgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0b3J5QmxvY2tUeXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY3VycmVudFR5cGVzW3RoaXMuc3RvcnlCbG9ja1R5cGVzW2ldLmlkXSA9IHRoaXMuc3RvcnlCbG9ja1R5cGVzW2ldO1xuICAgICAgICAgICAgY3VycmVudFR5cGVzW3RoaXMuc3RvcnlCbG9ja1R5cGVzW2ldLmlkXS5pbmRleCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RvcnlCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50VHlwZSA9IHRoaXMuc3RvcnlCbG9ja3NbaV0udHlwZSB8fCB0aGlzLnN0b3J5QmxvY2tEZWZhdWx0VHlwZXNbMF0uaWQ7XG4gICAgICAgICAgICBjdXJyZW50VHlwZXNbY3VycmVudFR5cGVdID0gY3VycmVudFR5cGVzW2N1cnJlbnRUeXBlXSB8fCB0aGlzLnN0b3J5QmxvY2tEZWZhdWx0VHlwZXNbMF07XG4gICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tzW2ldLmJsb2NrTnVtYmVyID0gY3VycmVudFR5cGVzW2N1cnJlbnRUeXBlXS5pbmRleCB8fCAwO1xuXG4gICAgICAgICAgICBjdXJyZW50VHlwZXNbY3VycmVudFR5cGVdLmluZGV4Kys7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuc3RvcnlCbG9ja1R5cGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RvcnlCbG9ja1R5cGVzW2pdLmxldmVsID4gY3VycmVudFR5cGVzW2N1cnJlbnRUeXBlXS5sZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHlwZXNbdGhpcy5zdG9yeUJsb2NrVHlwZXNbal0uaWRdLmluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ051bWJlcmluZyBhZnRlcicsdGhpcy5zdG9yeUJsb2Nrcyk7XG4gICAgfVxuXG4gICAgbG9nT3V0KCl7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgIHRoaXMucmVmcmVzaEJsb2NrTGlzdCgpO1xuICAgIH1cblxuICAgIGlzTG9nZ2VkSW4oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIH1cblxuICAgIHpvb21JbigpIHtcbiAgICAgICAgaWYgKHRoaXMuem9vbUxldmVsIDwgMTApIHtcbiAgICAgICAgICAgIHRoaXMuem9vbUxldmVsKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB6b29tT3V0KCkge1xuICAgICAgICBpZiAodGhpcy56b29tTGV2ZWwgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnpvb21MZXZlbC0tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb3VzZUVudGVyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uID0ge1xuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHRvcDogZXZlbnQueVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uTW91c2VMZWF2ZShldmVudCkge1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbiA9IHtcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgdG9wOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuYWRkQnV0dG9uLnZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQnV0dG9uLnRvcCA9IGV2ZW50Lnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRTdG9yeUJsb2NrKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uID0ge1xuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgem9vbUNvbnZlcnNpb25GYWN0b3IgPSB0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5zdGVwICsgKHRoaXMuem9vbUxldmVsICogdGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RyZW5ndGgpO1xuICAgICAgICB2YXIgcG9zaXRpb25BdFpvb20gPSAoKGV2ZW50LnBhZ2VZIC0gdGhpcy5jb25maWd1cmF0aW9uLnpvb20ub2Zmc2V0KSAvIHpvb21Db252ZXJzaW9uRmFjdG9yKTtcbiAgICAgICAgdmFyIG5ld1N0b3J5QmxvY2s6U3RvcnlCbG9jayA9IDxTdG9yeUJsb2NrPiB7XG4gICAgICAgICAgICBibG9ja0lkOiB0aGlzLm1heEluZGV4ICsgMSxcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWVQb3NpdGlvbjogcG9zaXRpb25BdFpvb20sXG4gICAgICAgICAgICBpbXBvcnRhbmNlOiAzLFxuICAgICAgICAgICAgdHlwZTogJ2NoYXB0ZXInXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubWF4SW5kZXgrKztcblxuICAgICAgICB2YXIgdG1wQXJyYXlQb3MgPSAwO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcnlCbG9ja3NbaV0udGltZVBvc2l0aW9uID4gcG9zaXRpb25BdFpvb20pIHtcbiAgICAgICAgICAgICAgICB0bXBBcnJheVBvcyA9IGk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tzLnNwbGljZSh0bXBBcnJheVBvcywgMCwgbmV3U3RvcnlCbG9jayk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ0FkZGluZyBibG9jayBpbmRleCAnICsgdG1wQXJyYXlQb3MpO1xuICAgICAgICB0aGlzLnNldEV4cG9zZWQodG1wQXJyYXlQb3MpO1xuXG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgc2V0RXhwb3NlZChpbmRleCkge1xuICAgICAgICBjb25zb2xlLmxvZygnU2V0dGluZyBibG9jayAnK2luZGV4KycgZXhwb3NlZCcpO1xuICAgICAgICB0aGlzLnJlY2FsY3VsYXRlU3RvcnlCbG9ja051bWJlcnMoKTtcbiAgICAgICAgdGhpcy5leHBvc2VkSW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5leHBvc2VkU3RvcnlCbG9jayA9IGluZGV4ID49IDAgPyB0aGlzLnN0b3J5QmxvY2tzW2luZGV4XSA6IG51bGw7XG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja1NlcnZpY2UuY2hhbmdlRXhwb3NlZEluZGV4KGluZGV4KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ25vLXNjcm9sbCcpO1xuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5zYXZlU3RvcnlCbG9jayh0aGlzLnVzZXJJZCwgdGhpcy5zdG9yeUJsb2Nrc1tpXSkuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnkobm90aWZpY2F0aW9uKXtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24gPSB7XG4gICAgICAgICAgICB0eXBlOiBub3RpZmljYXRpb24udHlwZSB8fCBudWxsLFxuICAgICAgICAgICAgbWVzc2FnZTogbm90aWZpY2F0aW9uLm1lc3NhZ2UgfHwgJycsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uQ29tcG9uZW50LnNob3cobm90aWZpY2F0aW9uLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGRvd25sb2FkUGRmKCl7XG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja1NlcnZpY2UuZG93bmxvYWRQZGYodGhpcy5zdG9yeUJsb2Nrcyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudSh2aXNpYmlsaXR5KXtcbiAgICAgICAgdGhpcy5tZW51VmlzaWJsZSA9IHZpc2liaWxpdHk7XG4gICAgICAgIGlmKHZpc2liaWxpdHkpe1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYXBwLWNvbnRlbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9ICAgIGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbSFRUUF9QUk9WSURFUlMsIENvbmZpZ3VyYXRpb25dKTtcbiIsImltcG9ydCB7RGlyZWN0aXZlLCBPbkNoYW5nZXMsIEVsZW1lbnRSZWYsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QW5pbWF0aW9uQnVpbGRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2FuaW1hdGUvYW5pbWF0aW9uX2J1aWxkZXInO1xuaW1wb3J0IHtDc3NBbmltYXRpb25CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvYW5pbWF0ZS9jc3NfYW5pbWF0aW9uX2J1aWxkZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tjb2xsYXBzZV0nXG59KVxuXG5leHBvcnQgY2xhc3MgQ29sbGFwc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIGNvbGxhcHNlOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2FuaW1hdGlvbjogQ3NzQW5pbWF0aW9uQnVpbGRlcjtcblxuICAgIGNvbnN0cnVjdG9yKGFuaW1hdGlvbkJ1aWxkZXI6QW5pbWF0aW9uQnVpbGRlciwgcHJpdmF0ZSBfZWw6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLl9hbmltYXRpb24gPSBhbmltYXRpb25CdWlsZGVyLmNzcygpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICAgICAgLy8gaWYgdGhlIGNoYW5nZSBoYXBwZW5lZCBpbiB0aGUgY29sbGFwc2UgcHJvcGVydHlcbiAgICAgICAgaWYgKGNoYW5nZXMuY29sbGFwc2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgX2Jhc2VTZXF1ZW5jZSgpOiBDc3NBbmltYXRpb25CdWlsZGVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuaW1hdGlvblxuICAgICAgICAgICAgLnNldER1cmF0aW9uKDI1MCkgLy8gdGhlIHRyYW5zaXRpb24gZHVyYXRpb25cbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnY29sbGFwc2UnKSAvLyByZW1vdmUgYSBjbGFzcyBiZWZvcmUgdGhlIHRyYW5zaXRpb24gc3RhcnRcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaW4nKVxuICAgICAgICAgICAgLmFkZEFuaW1hdGlvbkNsYXNzKCdjb2xsYXBzaW5nJyk7IC8vIGFkZCBhIHRlbXAgY2xhc3MgZm9yIHRoZSB0cmFuc2l0aW9uIHBlcmlvZFxuICAgIH1cblxuICAgIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2Jhc2VTZXF1ZW5jZVxuICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5fZWwubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgKyAncHgnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNldFRvU3R5bGVzKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYSBpcyB0aGUgQW5pbWF0aW9uIGluc3RhbmNlIHJ1bm5pbmcgdGhpcyBhbmltYXRpb24uXG4gICAgICAgIGxldCBhID0gdGhpcy5fYW5pbWF0aW9uLnN0YXJ0KHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICBhLm9uQ29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgYS5yZW1vdmVDbGFzc2VzKFsnaW4nXSk7IC8vIHJhcGlkIGNoYW5nZSB3aWxsIGxlYXZlICdpbidcbiAgICAgICAgICAgIGEuYWRkQ2xhc3NlcyhbJ2NvbGxhcHNlJ10pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3coKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbiAvLyAxc3QgYW5pbWF0aW9uIGJ1aWxkXG4gICAgICAgICAgICAuc2V0RHVyYXRpb24oMClcbiAgICAgICAgICAgIC5hZGRDbGFzcygnY29sbGFwc2UnKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdpbicpXG4gICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyh7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpIC8vIDFzdCBhbmltYXRpb24gc3RhcnRcbiAgICAgICAgICAgIC5vbkNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYSA9IHRoaXMuX2Jhc2VTZXF1ZW5jZSAvLyAgMm5kIGFuaW1hdGlvbiBidWlsZFxuICAgICAgICAgICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuc2V0VG9TdHlsZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCArICdweCdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpOyAvLyAybmQgYW5pbWF0aW9uIHN0YXJ0XG5cbiAgICAgICAgICAgICAgICBhLm9uQ29tcGxldGUoKCkgPT4gIGEuYWRkQ2xhc3NlcyhbJ2NvbGxhcHNlJywgJ2luJ10pICk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
