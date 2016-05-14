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
                    _id: '',
                    id: 2,
                    title: 'First block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 2,
                    importance: -1
                },
                {
                    _id: '',
                    id: 3,
                    title: 'Second block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 3,
                    importance: 1
                },
                {
                    id: 5,
                    title: 'Third block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 5,
                    importance: -1
                },
                {
                    _id: '',
                    id: 6,
                    title: 'Fourth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 6,
                    importance: 5
                },
                {
                    _id: '',
                    id: 7,
                    title: 'Fifth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 7,
                    importance: 3
                },
                {
                    _id: '',
                    id: 10,
                    title: 'Sixth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 10,
                    importance: 11
                },
                {
                    _id: '',
                    id: 12,
                    title: 'Seventh block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 12,
                    importance: 9
                },
                {
                    _id: '',
                    id: 15,
                    title: 'Eighth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 15,
                    importance: 8
                },
                {
                    _id: '',
                    id: 16,
                    title: 'Ninth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 16,
                    importance: 3
                },
                {
                    _id: '',
                    id: 17,
                    title: 'Tenth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 17,
                    importance: 2
                },
                {
                    _id: '',
                    id: 19,
                    title: 'Eleventh block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 19,
                    importance: 11
                },
                {
                    _id: '',
                    id: 21,
                    title: 'Twelfth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 21,
                    importance: 7
                },
                {
                    _id: '',
                    id: 22,
                    title: 'Thirteenth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 22,
                    importance: 2
                },
                {
                    _id: '',
                    id: 25,
                    title: 'Fourteenth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 25,
                    importance: 7
                },
                {
                    _id: '',
                    id: 27,
                    title: 'Fifteenth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 27,
                    importance: 5
                },
                {
                    _id: '',
                    id: 28,
                    title: 'Sixteenth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 28,
                    importance: 5
                },
                {
                    _id: '',
                    id: 29,
                    title: 'Seventeenth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 29,
                    importance: 3
                },
                {
                    _id: '',
                    id: 30,
                    title: 'Eighteenth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 30,
                    importance: -1
                },
            ]);
        }
    }
});
System.register("services/storyblocks.service", ["angular2/core", 'angular2/http', 'rxjs/Rx', "rxjs/Observable", "mock/mock-storyblocks"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_1, http_1, Observable_1, mock_storyblocks_1;
    var StoryBlockService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (mock_storyblocks_1_1) {
                mock_storyblocks_1 = mock_storyblocks_1_1;
            }],
        execute: function() {
            StoryBlockService = (function () {
                function StoryBlockService(http) {
                    this.http = http;
                }
                StoryBlockService.prototype.getStoryBlocks = function () {
                    return Observable_1.Observable.of(mock_storyblocks_1.STORYBLOCKS);
                };
                StoryBlockService.prototype.saveStoryBlock = function (storyBlock) {
                    //TODO
                    return null;
                };
                StoryBlockService.prototype.deleteStoryBlock = function (storyBlock) {
                    //TODO
                    return null;
                };
                StoryBlockService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], StoryBlockService);
                return StoryBlockService;
            }());
            exports_3("StoryBlockService", StoryBlockService);
        }
    }
});
System.register("services/utils.service", ["angular2/core"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_2;
    var UtilsService;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
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
                    core_2.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UtilsService);
                return UtilsService;
            }());
            exports_4("UtilsService", UtilsService);
        }
    }
});
System.register("components/storyblock.component", ["angular2/core", "services/utils.service", "angular2/src/animate/animation_builder", "services/storyblocks.service"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_3, utils_service_1, animation_builder_1, storyblocks_service_1;
    var StoryBlockComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (utils_service_1_1) {
                utils_service_1 = utils_service_1_1;
            },
            function (animation_builder_1_1) {
                animation_builder_1 = animation_builder_1_1;
            },
            function (storyblocks_service_1_1) {
                storyblocks_service_1 = storyblocks_service_1_1;
            }],
        execute: function() {
            StoryBlockComponent = (function () {
                function StoryBlockComponent(_ab, _e, utilsService, storyBlockService) {
                    this._ab = _ab;
                    this._e = _e;
                    this.utilsService = utilsService;
                    this.storyBlockService = storyBlockService;
                    this._active = true;
                    this._selected = false;
                    this._zoomLevel = 10;
                    this._previousZoomLevel = 10;
                    this._zoomStrength = 5;
                    this._zoomOffset = 250;
                    this._zoomStep = 85;
                    this.zoomEvent = new core_3.EventEmitter();
                    this.enterHeaderEvent = new core_3.EventEmitter();
                    this.exitHeaderEvent = new core_3.EventEmitter();
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
                    console.log('[StoryBlock #' + this.index + '] Zoom changed from ' + this._previousZoomLevel + ' to ' + this._zoomLevel);
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
                    console.log('[StoryBlock #' + this.index + '] Fading in...');
                    var animation = this._ab.css();
                    var fromStyle = {};
                    var toStyle = {};
                    fromStyle['display'] = 'flex';
                    fromStyle['transition-timing-function'] = 'cubic-bezier(0.575, 0.255, 0.440, 0.985);';
                    toStyle['opacity'] = 1;
                    animation
                        .setDuration(speed);
                    animation
                        .setFromStyles(fromStyle)
                        .setToStyles(toStyle);
                    if (!!this._actionTimeout) {
                        clearTimeout(this._actionTimeout);
                    }
                    var _self = this;
                    this._actionTimeout = setTimeout(function () {
                        animation
                            .start(_self._e.nativeElement);
                    }, 100);
                };
                StoryBlockComponent.prototype.fadeOut = function (speed) {
                    if (this._active) {
                        console.log('[StoryBlock #' + this.index + '] Fading out...[' + this._zoomLevel + '<' + this.storyBlockInfo.importance + ']');
                        var animation_1 = this._ab.css();
                        var fromStyle = {};
                        var toStyle = {};
                        toStyle['transition-timing-function'] = 'cubic-bezier(0.575, 0.255, 0.440, 0.985);';
                        toStyle['opacity'] = 0;
                        animation_1
                            .setDuration(speed);
                        animation_1
                            .setFromStyles(fromStyle)
                            .setToStyles(toStyle);
                        if (!!this._actionTimeout) {
                            console.log('[StoryBlock #' + this.index + '] Animation removed');
                            clearTimeout(this._actionTimeout);
                        }
                        var _self = this;
                        this._actionTimeout = setTimeout(function () {
                            animation_1
                                .start(_self._e.nativeElement);
                        }, 100);
                    }
                };
                StoryBlockComponent.prototype.changePositionOnZoom = function (speed) {
                    var animation = this._ab.css();
                    var fromStyle = {
                        top: this._zoomOffset + ((this._zoomStep + (this._previousZoomLevel * this._zoomStrength)) * this.storyBlockInfo.timePosition) + 'px'
                    };
                    var toStyle = {
                        top: this._zoomOffset + ((this._zoomStep + (this._zoomLevel * this._zoomStrength)) * this.storyBlockInfo.timePosition) + 'px'
                    };
                    console.log('[StoryBlock #' + this.index + '] Changing position from ' + (fromStyle.top) + ' to ' + (toStyle.top) + ' ...');
                    if (this._zoomLevel > this.storyBlockInfo.importance) {
                        console.log('[StoryBlock #' + this.index + '] ...and fading in [' + this._zoomLevel + '>' + this.storyBlockInfo.importance + ']');
                        toStyle['opacity'] = 1;
                    }
                    else {
                        console.log('[StoryBlock #' + this.index + '] ...and fading out');
                        toStyle['opacity'] = 0;
                    }
                    toStyle['transition-timing-function'] = 'cubic-bezier(0.575, 0.255, 0.440, 0.985);';
                    animation
                        .setDuration(speed);
                    animation
                        .setFromStyles(fromStyle)
                        .setToStyles(toStyle);
                    if (!!this._actionTimeout) {
                        console.log('[StoryBlock #' + this.index + '] Animation removed');
                        clearTimeout(this._actionTimeout);
                    }
                    var _self = this;
                    this._actionTimeout = setTimeout(function () {
                        animation
                            .start(_self._e.nativeElement);
                    }, 100);
                };
                StoryBlockComponent.prototype.edit = function (index, event) {
                    console.log('Should edit', index, event);
                    var animation = this._ab.css();
                    var toStyle = {
                        position: 'fixed',
                        top: '0px',
                        left: '0px',
                        right: '240px',
                        bottom: '0px',
                        width: 'auto'
                    };
                    animation
                        .setDuration(100);
                    animation
                        .setToStyles(toStyle);
                    if (!!this._actionTimeout) {
                        console.log('[StoryBlock #' + this.index + '] Animation removed');
                        clearTimeout(this._actionTimeout);
                    }
                    var _self = this;
                    this._actionTimeout = setTimeout(function () {
                        animation
                            .start(_self._e.nativeElement);
                    }, 100);
                };
                StoryBlockComponent.prototype.remove = function (index, event) {
                    this.storyBlockService.deleteStoryBlock(this.storyBlockInfo).subscribe(function (data) {
                        console.log(data);
                    }, function (err) { return console.error(err); }, function () { return console.log('done'); });
                    console.log('Should remove', index, event);
                };
                __decorate([
                    core_3.Output(), 
                    __metadata('design:type', core_3.EventEmitter)
                ], StoryBlockComponent.prototype, "zoomEvent", void 0);
                __decorate([
                    core_3.Output(), 
                    __metadata('design:type', core_3.EventEmitter)
                ], StoryBlockComponent.prototype, "enterHeaderEvent", void 0);
                __decorate([
                    core_3.Output(), 
                    __metadata('design:type', core_3.EventEmitter)
                ], StoryBlockComponent.prototype, "exitHeaderEvent", void 0);
                __decorate([
                    core_3.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], StoryBlockComponent.prototype, "zoomLevel", null);
                StoryBlockComponent = __decorate([
                    core_3.Component({
                        selector: 'storyblock',
                        template: "\n        <div class=\"index\" (mousewheel)=\"zoom()\" (DOMMouseScroll)=\"zoom()\"><span>{{utilsService.getRomanNumeral(index + 1)}}</span></div>\n        <div class=\"text-container\">\n            <div class=\"title\"><span [hidden]=\"!_active\" >A</span><span [hidden]=\"!_selected\" >S</span>{{storyBlockInfo.title}}</div>\n            <div class=\"description\">{{storyBlockInfo.description}}</div>\n            <div class=\"actions\">\n                <a (click)=\"edit(index, $event)\" class=\"button inline-button primary\">Edit</a>\n                <a (click)=\"remove(index, $event)\" class=\"button inline-button alert\">Remove</a>\n            </div>\n        </div>\n    ",
                        providers: [utils_service_1.UtilsService, storyblocks_service_1.StoryBlockService],
                        inputs: ['storyBlockInfo', 'index']
                    }), 
                    __metadata('design:paramtypes', [animation_builder_1.AnimationBuilder, core_3.ElementRef, utils_service_1.UtilsService, storyblocks_service_1.StoryBlockService])
                ], StoryBlockComponent);
                return StoryBlockComponent;
            }());
            exports_5("StoryBlockComponent", StoryBlockComponent);
        }
    }
});
System.register("components/timeline.component", ["angular2/core"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_4;
    var TimelineComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            }],
        execute: function() {
            TimelineComponent = (function () {
                function TimelineComponent() {
                }
                TimelineComponent = __decorate([
                    core_4.Component({
                        selector: 'timeline',
                        template: "\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TimelineComponent);
                return TimelineComponent;
            }());
            exports_6("TimelineComponent", TimelineComponent);
        }
    }
});
System.register("components/app-content.component", ['angular2/core', "services/storyblocks.service", "components/storyblock.component", "components/timeline.component"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_5, storyblocks_service_2, storyblock_component_1, timeline_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (storyblocks_service_2_1) {
                storyblocks_service_2 = storyblocks_service_2_1;
            },
            function (storyblock_component_1_1) {
                storyblock_component_1 = storyblock_component_1_1;
            },
            function (timeline_component_1_1) {
                timeline_component_1 = timeline_component_1_1;
            }],
        execute: function() {
            // import {LocalStorage} from "angular2-localstorage/LocalStorage";
            AppComponent = (function () {
                function AppComponent(storyBlockService) {
                    this.storyBlockService = storyBlockService;
                    this.scrollWheel = new core_5.EventEmitter();
                    this.zoomLevel = 10;
                    this.selectedIndex = 0;
                    this.scrollValue = document.body.scrollTop;
                    this.token = '';
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getStoryBlocks();
                    this.zoomLevel = 10;
                    this.selectedIndex = 0;
                    this.scrollValue = document.body.scrollTop;
                };
                AppComponent.prototype.getStoryBlocks = function () {
                    var _this = this;
                    this.storyBlockService.getStoryBlocks().subscribe(function (data) {
                        _this.storyBlocks = data;
                        _this.selectedBlock = _this.storyBlocks[_this.selectedIndex];
                    }, function (err) { return console.error(err); }, function () { return console.log('done'); });
                };
                AppComponent.prototype.onMouseWheel = function (e) {
                    var e = window.event || e; // old IE support
                    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
                    console.log('Zoomed, old zoomLevel is ' + this.zoomLevel + ' and delta is ' + delta);
                    if ((this.zoomLevel > 0 && delta < 0) || (this.zoomLevel < 10 && delta > 0)) {
                        this.zoomLevel += (delta * 2);
                    }
                    e.preventDefault();
                    e.stopPropagation();
                };
                AppComponent.prototype.onScroll = function (e) {
                    this.scrollValue = document.body.scrollTop;
                };
                AppComponent.prototype.requestSelection = function (block) {
                    if (this.selectedIndex != block.index) {
                        this.selectedIndex = block.index;
                        this.selectedBlock = this.storyBlocks[this.selectedIndex];
                    }
                };
                AppComponent.prototype.requestDeselection = function (block) {
                    if (block.index > 0) {
                        this.selectedIndex = block.index - 1;
                        this.selectedBlock = this.storyBlocks[this.selectedIndex];
                    }
                };
                __decorate([
                    core_5.Output(), 
                    __metadata('design:type', core_5.EventEmitter)
                ], AppComponent.prototype, "scrollWheel", void 0);
                AppComponent = __decorate([
                    core_5.Component({
                        selector: 'app-content',
                        template: "\n        <main>\n            <timeline class=\"timeline-block\"></timeline>\n            <div (document:scroll)=\"onScroll($event)\" class=\"story-blocks\">\n                <storyblock *ngFor=\"#storyBlock of storyBlocks; #i = index\" \n                    [index]=\"i\" \n                    [storyBlockInfo]=\"storyBlock\" \n                    [zoomLevel]=\"zoomLevel\" \n                    (zoomEvent)=\"onMouseWheel($event)\" \n                    (enterHeaderEvent)=\"requestSelection($event)\" \n                    (exitHeaderEvent)=\"requestDeselection($event)\" \n                    class=\"story-block\"></storyblock>\n            </div>\n            <div (mousewheel)=\"onMouseWheel()\" (DOMMouseScroll)=\"onMouseWheel()\" class=\"timeline\"></div>\n        </main>\n        <aside>\n            Sidebar\n        </aside>\n    ",
                        providers: [storyblocks_service_2.StoryBlockService],
                        directives: [storyblock_component_1.StoryBlockComponent, timeline_component_1.TimelineComponent]
                    }), 
                    __metadata('design:paramtypes', [storyblocks_service_2.StoryBlockService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_7("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "components/app-content.component", 'angular2/http'], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var browser_1, app_content_component_1, http_2;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_content_component_1_1) {
                app_content_component_1 = app_content_component_1_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_content_component_1.AppComponent, [http_2.HTTP_PROVIDERS]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2svbW9jay1zdG9yeWJsb2Nrcy50cyIsInNlcnZpY2VzL3N0b3J5YmxvY2tzLnNlcnZpY2UudHMiLCJzZXJ2aWNlcy91dGlscy5zZXJ2aWNlLnRzIiwiY29tcG9uZW50cy9zdG9yeWJsb2NrLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvdGltZWxpbmUuY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9hcHAtY29udGVudC5jb21wb25lbnQudHMiLCJib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUFhLFdBQVc7Ozs7WUFBWCx5QkFBQSxXQUFXLEdBQUc7Z0JBQ3ZCO29CQUNJLEdBQUcsRUFBQyxFQUFFO29CQUNOLEVBQUUsRUFBRSxDQUFDO29CQUNMLEtBQUssRUFBRSxhQUFhO29CQUNwQixXQUFXLEVBQUUsa25CQUFrbkI7b0JBQy9uQixZQUFZLEVBQUUsQ0FBQztvQkFDZixVQUFVLEVBQUUsQ0FBQyxDQUFDO2lCQUNqQjtnQkFDRDtvQkFDSSxHQUFHLEVBQUMsRUFBRTtvQkFDTixFQUFFLEVBQUUsQ0FBQztvQkFDTCxLQUFLLEVBQUUsY0FBYztvQkFDckIsV0FBVyxFQUFFLGtuQkFBa25CO29CQUMvbkIsWUFBWSxFQUFFLENBQUM7b0JBQ2YsVUFBVSxFQUFFLENBQUM7aUJBQ2hCO2dCQUNEO29CQUNJLEVBQUUsRUFBRSxDQUFDO29CQUNMLEtBQUssRUFBRSxhQUFhO29CQUNwQixXQUFXLEVBQUUsazFEQUFrMUQ7b0JBQy8xRCxZQUFZLEVBQUUsQ0FBQztvQkFDZixVQUFVLEVBQUUsQ0FBQyxDQUFDO2lCQUNqQjtnQkFDRDtvQkFDSSxHQUFHLEVBQUMsRUFBRTtvQkFDTixFQUFFLEVBQUMsQ0FBQztvQkFDSixLQUFLLEVBQUUsY0FBYztvQkFDckIsV0FBVyxFQUFFLGtuQkFBa25CO29CQUMvbkIsWUFBWSxFQUFFLENBQUM7b0JBQ2YsVUFBVSxFQUFFLENBQUM7aUJBQ2hCO2dCQUNEO29CQUNJLEdBQUcsRUFBQyxFQUFFO29CQUNOLEVBQUUsRUFBRSxDQUFDO29CQUNMLEtBQUssRUFBRSxhQUFhO29CQUNwQixXQUFXLEVBQUUsa25CQUFrbkI7b0JBQy9uQixZQUFZLEVBQUUsQ0FBQztvQkFDZixVQUFVLEVBQUUsQ0FBQztpQkFDaEI7Z0JBQ0Q7b0JBQ0ksR0FBRyxFQUFDLEVBQUU7b0JBQ04sRUFBRSxFQUFFLEVBQUU7b0JBQ04sS0FBSyxFQUFFLGFBQWE7b0JBQ3BCLFdBQVcsRUFBRSxrbkJBQWtuQjtvQkFDL25CLFlBQVksRUFBRSxFQUFFO29CQUNoQixVQUFVLEVBQUUsRUFBRTtpQkFDakI7Z0JBQ0Q7b0JBQ0ksR0FBRyxFQUFDLEVBQUU7b0JBQ04sRUFBRSxFQUFFLEVBQUU7b0JBQ04sS0FBSyxFQUFFLGVBQWU7b0JBQ3RCLFdBQVcsRUFBRSxrbkJBQWtuQjtvQkFDL25CLFlBQVksRUFBRSxFQUFFO29CQUNoQixVQUFVLEVBQUUsQ0FBQztpQkFDaEI7Z0JBQ0Q7b0JBQ0ksR0FBRyxFQUFDLEVBQUU7b0JBQ04sRUFBRSxFQUFFLEVBQUU7b0JBQ04sS0FBSyxFQUFFLGNBQWM7b0JBQ3JCLFdBQVcsRUFBRSxrbkJBQWtuQjtvQkFDL25CLFlBQVksRUFBRSxFQUFFO29CQUNoQixVQUFVLEVBQUUsQ0FBQztpQkFDaEI7Z0JBQ0Q7b0JBQ0ksR0FBRyxFQUFDLEVBQUU7b0JBQ04sRUFBRSxFQUFFLEVBQUU7b0JBQ04sS0FBSyxFQUFFLGFBQWE7b0JBQ3BCLFdBQVcsRUFBRSxrbkJBQWtuQjtvQkFDL25CLFlBQVksRUFBRSxFQUFFO29CQUNoQixVQUFVLEVBQUUsQ0FBQztpQkFDaEI7Z0JBQ0Q7b0JBQ0ksR0FBRyxFQUFDLEVBQUU7b0JBQ04sRUFBRSxFQUFFLEVBQUU7b0JBQ04sS0FBSyxFQUFFLGFBQWE7b0JBQ3BCLFdBQVcsRUFBRSxrbkJBQWtuQjtvQkFDL25CLFlBQVksRUFBRSxFQUFFO29CQUNoQixVQUFVLEVBQUUsQ0FBQztpQkFDaEI7Z0JBQ0Q7b0JBQ0ksR0FBRyxFQUFDLEVBQUU7b0JBQ04sRUFBRSxFQUFFLEVBQUU7b0JBQ04sS0FBSyxFQUFFLGdCQUFnQjtvQkFDdkIsV0FBVyxFQUFFLGtuQkFBa25CO29CQUMvbkIsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLFVBQVUsRUFBRSxFQUFFO2lCQUNqQjtnQkFDRDtvQkFDSSxHQUFHLEVBQUMsRUFBRTtvQkFDTixFQUFFLEVBQUUsRUFBRTtvQkFDTixLQUFLLEVBQUUsZUFBZTtvQkFDdEIsV0FBVyxFQUFFLGtuQkFBa25CO29CQUMvbkIsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLFVBQVUsRUFBRSxDQUFDO2lCQUNoQjtnQkFDRDtvQkFDSSxHQUFHLEVBQUMsRUFBRTtvQkFDTixFQUFFLEVBQUUsRUFBRTtvQkFDTixLQUFLLEVBQUUsa0JBQWtCO29CQUN6QixXQUFXLEVBQUUsa25CQUFrbkI7b0JBQy9uQixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsVUFBVSxFQUFFLENBQUM7aUJBQ2hCO2dCQUNEO29CQUNJLEdBQUcsRUFBQyxFQUFFO29CQUNOLEVBQUUsRUFBRSxFQUFFO29CQUNOLEtBQUssRUFBRSxrQkFBa0I7b0JBQ3pCLFdBQVcsRUFBRSxrbkJBQWtuQjtvQkFDL25CLFlBQVksRUFBRSxFQUFFO29CQUNoQixVQUFVLEVBQUUsQ0FBQztpQkFDaEI7Z0JBQ0Q7b0JBQ0ksR0FBRyxFQUFDLEVBQUU7b0JBQ04sRUFBRSxFQUFFLEVBQUU7b0JBQ04sS0FBSyxFQUFFLGlCQUFpQjtvQkFDeEIsV0FBVyxFQUFFLGtuQkFBa25CO29CQUMvbkIsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLFVBQVUsRUFBRSxDQUFDO2lCQUNoQjtnQkFDRDtvQkFDSSxHQUFHLEVBQUMsRUFBRTtvQkFDTixFQUFFLEVBQUUsRUFBRTtvQkFDTixLQUFLLEVBQUUsaUJBQWlCO29CQUN4QixXQUFXLEVBQUUsa25CQUFrbkI7b0JBQy9uQixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsVUFBVSxFQUFFLENBQUM7aUJBQ2hCO2dCQUNEO29CQUNJLEdBQUcsRUFBQyxFQUFFO29CQUNOLEVBQUUsRUFBRSxFQUFFO29CQUNOLEtBQUssRUFBRSxtQkFBbUI7b0JBQzFCLFdBQVcsRUFBRSxrbkJBQWtuQjtvQkFDL25CLFlBQVksRUFBRSxFQUFFO29CQUNoQixVQUFVLEVBQUUsQ0FBQztpQkFDaEI7Z0JBQ0Q7b0JBQ0ksR0FBRyxFQUFDLEVBQUU7b0JBQ04sRUFBRSxFQUFFLEVBQUU7b0JBQ04sS0FBSyxFQUFFLGtCQUFrQjtvQkFDekIsV0FBVyxFQUFFLGtuQkFBa25CO29CQUMvbkIsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLFVBQVUsRUFBRSxDQUFDLENBQUM7aUJBQ2pCO2FBQ0osQ0FBQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDeElGO2dCQUVJLDJCQUFtQixJQUFTO29CQUFULFNBQUksR0FBSixJQUFJLENBQUs7Z0JBRTVCLENBQUM7Z0JBRUQsMENBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsdUJBQVUsQ0FBQyxFQUFFLENBQUMsOEJBQVcsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUVELDBDQUFjLEdBQWQsVUFBZSxVQUFxQjtvQkFDaEMsTUFBTTtvQkFDTixNQUFNLENBQUUsSUFBSSxDQUFDO2dCQUNqQixDQUFDO2dCQUVELDRDQUFnQixHQUFoQixVQUFpQixVQUFxQjtvQkFFbEMsTUFBTTtvQkFDTixNQUFNLENBQUUsSUFBSSxDQUFDO2dCQUNqQixDQUFDO2dCQXBCTDtvQkFBQyxpQkFBVSxFQUFFOztxQ0FBQTtnQkF1QmIsd0JBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELGlEQXNCQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7WUMxQkQ7Z0JBQUE7b0JBQ1csZ0JBQVcsR0FBRywrUEFBK1AsQ0FBQztnQkFnQnpSLENBQUM7Z0JBYkcsc0NBQWUsR0FBZixVQUFnQixHQUFHO29CQUNmLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7d0JBQ04sTUFBTSxDQUFDLEVBQUUsQ0FBQztvQkFDZCxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQy9CLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUk7d0JBQzdELEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUk7d0JBQzFELEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUMvRCxLQUFLLEdBQUcsRUFBRSxFQUNWLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1YsT0FBTyxDQUFDLEVBQUU7d0JBQ04sS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO29CQUMxRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUN6RCxDQUFDO2dCQWpCTDtvQkFBQyxpQkFBVSxFQUFFOztnQ0FBQTtnQkFrQmIsbUJBQUM7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELHVDQWlCQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNFRDtnQkFrQkksNkJBQW9CLEdBQW9CLEVBQVUsRUFBYSxFQUFVLFlBQXlCLEVBQVMsaUJBQW9DO29CQUEzSCxRQUFHLEdBQUgsR0FBRyxDQUFpQjtvQkFBVSxPQUFFLEdBQUYsRUFBRSxDQUFXO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUFTLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7b0JBZnhJLFlBQU8sR0FBRyxJQUFJLENBQUM7b0JBRWYsY0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDakIsZUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDaEIsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO29CQUN4QixrQkFBYSxHQUFHLENBQUMsQ0FBQztvQkFDbEIsZ0JBQVcsR0FBRyxHQUFHLENBQUM7b0JBQ2xCLGNBQVMsR0FBRyxFQUFFLENBQUM7b0JBR2IsY0FBUyxHQUFxQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFFakQscUJBQWdCLEdBQXFCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUN4RCxvQkFBZSxHQUFxQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFJakUsQ0FBQztnQkFHRCxzQkFBSSwwQ0FBUzt5QkFBYixVQUFjLEtBQVk7d0JBQ3RCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxTQUFTLENBQUMsR0FBRSxFQUFFLEdBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO3dCQUM3RixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsR0FBRSxFQUFFLEdBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzt3QkFDckUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs0QkFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7NEJBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDdkIsQ0FBQztvQkFDTCxDQUFDOzs7bUJBQUE7Z0JBRUQsc0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBRUQsa0NBQUksR0FBSixVQUFLLENBQUM7b0JBQ0YsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7b0JBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztnQkFFRCx5Q0FBVyxHQUFYO29CQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBRXhILEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDekIsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUN4QixDQUFDO2dCQUNMLENBQUM7Z0JBRUQsb0NBQU0sR0FBTixVQUFPLEtBQVk7b0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUM3RCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUUvQixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7b0JBQ25CLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztvQkFFakIsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztvQkFDOUIsU0FBUyxDQUFDLDRCQUE0QixDQUFDLEdBQUcsMkNBQTJDLENBQUM7b0JBQ3RGLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBR3ZCLFNBQVM7eUJBQ0osV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4QixTQUFTO3lCQUNKLGFBQWEsQ0FBQyxTQUFTLENBQUM7eUJBQ3hCLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFHMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUN0QyxDQUFDO29CQUVELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztvQkFFakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUM7d0JBQzdCLFNBQVM7NkJBQ0osS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3ZDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDWixDQUFDO2dCQUVELHFDQUFPLEdBQVAsVUFBUSxLQUFZO29CQUNoQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLGtCQUFrQixHQUFDLElBQUksQ0FBQyxVQUFVLEdBQUUsR0FBRyxHQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxHQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN4SCxJQUFJLFdBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUUvQixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7d0JBQ25CLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQzt3QkFHakIsT0FBTyxDQUFDLDRCQUE0QixDQUFDLEdBQUcsMkNBQTJDLENBQUM7d0JBQ3BGLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBR3ZCLFdBQVM7NkJBQ0osV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUN4QixXQUFTOzZCQUNKLGFBQWEsQ0FBQyxTQUFTLENBQUM7NkJBQ3hCLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFHMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDOzRCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFDLENBQUM7NEJBQ2xFLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7d0JBQ3RDLENBQUM7d0JBRUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO3dCQUVqQixJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQzs0QkFDN0IsV0FBUztpQ0FDSixLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQzt3QkFDdkMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNaLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxrREFBb0IsR0FBcEIsVUFBcUIsS0FBSztvQkFDdEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDL0IsSUFBSSxTQUFTLEdBQUc7d0JBQ1osR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJO3FCQUN4SSxDQUFDO29CQUVGLElBQUksT0FBTyxHQUFHO3dCQUNWLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUk7cUJBQ2hJLENBQUM7b0JBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRywyQkFBMkIsR0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBQyxNQUFNLEdBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUMsTUFBTSxDQUFDLENBQUM7b0JBRXBILEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLHNCQUFzQixHQUFDLElBQUksQ0FBQyxVQUFVLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxHQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUMxSCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMzQixDQUFDO29CQUNELElBQUksQ0FBQSxDQUFDO3dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcscUJBQXFCLENBQUMsQ0FBQzt3QkFDbEUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDM0IsQ0FBQztvQkFFRCxPQUFPLENBQUMsNEJBQTRCLENBQUMsR0FBRywyQ0FBMkMsQ0FBQztvQkFHcEYsU0FBUzt5QkFDSixXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hCLFNBQVM7eUJBQ0osYUFBYSxDQUFDLFNBQVMsQ0FBQzt5QkFDeEIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUcxQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcscUJBQXFCLENBQUMsQ0FBQzt3QkFDbEUsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDdEMsQ0FBQztvQkFFRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBRWpCLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDO3dCQUM3QixTQUFTOzZCQUNKLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUN2QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ1osQ0FBQztnQkFFRCxrQ0FBSSxHQUFKLFVBQUssS0FBSyxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUN6QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUUvQixJQUFJLE9BQU8sR0FBRzt3QkFDVixRQUFRLEVBQUUsT0FBTzt3QkFDakIsR0FBRyxFQUFFLEtBQUs7d0JBQ1YsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLE9BQU87d0JBQ2QsTUFBTSxFQUFFLEtBQUs7d0JBQ2IsS0FBSyxFQUFFLE1BQU07cUJBQ2hCLENBQUM7b0JBRUYsU0FBUzt5QkFDSixXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3RCLFNBQVM7eUJBQ0osV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUUxQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcscUJBQXFCLENBQUMsQ0FBQzt3QkFDbEUsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDdEMsQ0FBQztvQkFFRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBRWpCLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDO3dCQUM3QixTQUFTOzZCQUNKLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUN2QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ1osQ0FBQztnQkFFRCxvQ0FBTSxHQUFOLFVBQU8sS0FBSyxFQUFFLEtBQUs7b0JBQ2YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQ2xFLFVBQUEsSUFBSTt3QkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUNyQixDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixFQUN6QixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBbkIsQ0FBbUIsQ0FDNUIsQ0FBQztvQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQy9DLENBQUM7Z0JBak1EO29CQUFDLGFBQU0sRUFBRTs7c0VBQUE7Z0JBRVQ7b0JBQUMsYUFBTSxFQUFFOzs2RUFBQTtnQkFDVDtvQkFBQyxhQUFNLEVBQUU7OzRFQUFBO2dCQU1UO29CQUFDLFlBQUssRUFBRTs7O29FQUFBO2dCQXZDWjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsOHFCQVVUO3dCQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLEVBQUUsdUNBQWlCLENBQUM7d0JBQzVDLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQztxQkFDdEMsQ0FBQzs7dUNBQUE7Z0JBaU5GLDBCQUFDO1lBQUQsQ0EvTUEsQUErTUMsSUFBQTtZQS9NRCxxREErTUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7O1lDL05EO2dCQUFBO2dCQUVBLENBQUM7Z0JBUEQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsVUFBVTt3QkFDbkIsUUFBUSxFQUFFLFFBQ1Q7cUJBQ0osQ0FBQzs7cUNBQUE7Z0JBR0Ysd0JBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELGlEQUVDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ0pELG1FQUFtRTtZQTJCbkU7Z0JBU0ksc0JBQW9CLGlCQUFtQztvQkFBbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtvQkFQN0MsZ0JBQVcsR0FBcUIsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBQzdELGNBQVMsR0FBRyxFQUFFLENBQUM7b0JBQ1Isa0JBQWEsR0FBRyxDQUFDLENBQUM7b0JBQ3pCLGdCQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBRS9CLFVBQUssR0FBVSxFQUFFLENBQUM7Z0JBSXpCLENBQUM7Z0JBRUQsK0JBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO29CQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDL0MsQ0FBQztnQkFFRCxxQ0FBYyxHQUFkO29CQUFBLGlCQVVDO29CQVRHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQzdDLFVBQUEsSUFBSTt3QkFDQSxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzt3QkFDeEIsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtvQkFDN0QsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsRUFDekIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQW5CLENBQW1CLENBQzVCLENBQUM7Z0JBRU4sQ0FBQztnQkFFRCxtQ0FBWSxHQUFaLFVBQWEsQ0FBQztvQkFDVixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLGlCQUFpQjtvQkFDNUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUM7b0JBQ3JGLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDMUUsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDbEMsQ0FBQztvQkFDRCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztnQkFFRCwrQkFBUSxHQUFSLFVBQVMsQ0FBQztvQkFDTixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUMvQyxDQUFDO2dCQUVELHVDQUFnQixHQUFoQixVQUFpQixLQUFLO29CQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzlELENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCx5Q0FBa0IsR0FBbEIsVUFBbUIsS0FBSztvQkFDcEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUM5RCxDQUFDO2dCQUNMLENBQUM7Z0JBekREO29CQUFDLGFBQU0sRUFBRTs7aUVBQUE7Z0JBM0JiO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSw2MEJBa0JUO3dCQUNELFNBQVMsRUFBRSxDQUFDLHVDQUFpQixDQUFDO3dCQUM5QixVQUFVLEVBQUUsQ0FBQywwQ0FBbUIsRUFBRSxzQ0FBaUIsQ0FBQztxQkFDdkQsQ0FBQzs7Z0NBQUE7Z0JBOERGLG1CQUFDO1lBQUQsQ0E1REEsQUE0REMsSUFBQTtZQTVERCx1Q0E0REMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUN2RkQsbUJBQVMsQ0FBQyxvQ0FBWSxFQUFFLENBQUMscUJBQWMsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiLi4vLi4vLi4vYW5ndWxhcmF0dGFjazIwMTYtY2hyb25vc3Rvcmllcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU1RPUllCTE9DS1MgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgX2lkOicnLFxyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIHRpdGxlOiAnRmlyc3QgYmxvY2snLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDIsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogLTFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgX2lkOicnLFxyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIHRpdGxlOiAnU2Vjb25kIGJsb2NrJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiAzLFxyXG4gICAgICAgIGltcG9ydGFuY2U6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgdGl0bGU6ICdUaGlyZCBibG9jaycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxyXG4gICAgICAgIHRpbWVQb3NpdGlvbjogNSxcclxuICAgICAgICBpbXBvcnRhbmNlOiAtMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBfaWQ6JycsXHJcbiAgICAgICAgaWQ6NixcclxuICAgICAgICB0aXRsZTogJ0ZvdXJ0aCBibG9jaycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxyXG4gICAgICAgIHRpbWVQb3NpdGlvbjogNixcclxuICAgICAgICBpbXBvcnRhbmNlOiA1XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIF9pZDonJyxcclxuICAgICAgICBpZDogNyxcclxuICAgICAgICB0aXRsZTogJ0ZpZnRoIGJsb2NrJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiA3LFxyXG4gICAgICAgIGltcG9ydGFuY2U6IDNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgX2lkOicnLFxyXG4gICAgICAgIGlkOiAxMCxcclxuICAgICAgICB0aXRsZTogJ1NpeHRoIGJsb2NrJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiAxMCxcclxuICAgICAgICBpbXBvcnRhbmNlOiAxMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBfaWQ6JycsXHJcbiAgICAgICAgaWQ6IDEyLFxyXG4gICAgICAgIHRpdGxlOiAnU2V2ZW50aCBibG9jaycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxyXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMTIsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogOVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBfaWQ6JycsXHJcbiAgICAgICAgaWQ6IDE1LFxyXG4gICAgICAgIHRpdGxlOiAnRWlnaHRoIGJsb2NrJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiAxNSxcclxuICAgICAgICBpbXBvcnRhbmNlOiA4XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIF9pZDonJyxcclxuICAgICAgICBpZDogMTYsXHJcbiAgICAgICAgdGl0bGU6ICdOaW50aCBibG9jaycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxyXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMTYsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogM1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBfaWQ6JycsXHJcbiAgICAgICAgaWQ6IDE3LFxyXG4gICAgICAgIHRpdGxlOiAnVGVudGggYmxvY2snLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDE3LFxyXG4gICAgICAgIGltcG9ydGFuY2U6IDJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgX2lkOicnLFxyXG4gICAgICAgIGlkOiAxOSxcclxuICAgICAgICB0aXRsZTogJ0VsZXZlbnRoIGJsb2NrJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiAxOSxcclxuICAgICAgICBpbXBvcnRhbmNlOiAxMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBfaWQ6JycsXHJcbiAgICAgICAgaWQ6IDIxLFxyXG4gICAgICAgIHRpdGxlOiAnVHdlbGZ0aCBibG9jaycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxyXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMjEsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogN1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBfaWQ6JycsXHJcbiAgICAgICAgaWQ6IDIyLFxyXG4gICAgICAgIHRpdGxlOiAnVGhpcnRlZW50aCBibG9jaycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxyXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMjIsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBfaWQ6JycsXHJcbiAgICAgICAgaWQ6IDI1LFxyXG4gICAgICAgIHRpdGxlOiAnRm91cnRlZW50aCBibG9jaycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxyXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMjUsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogN1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBfaWQ6JycsXHJcbiAgICAgICAgaWQ6IDI3LFxyXG4gICAgICAgIHRpdGxlOiAnRmlmdGVlbnRoIGJsb2NrJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiAyNyxcclxuICAgICAgICBpbXBvcnRhbmNlOiA1XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIF9pZDonJyxcclxuICAgICAgICBpZDogMjgsXHJcbiAgICAgICAgdGl0bGU6ICdTaXh0ZWVudGggYmxvY2snLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDI4LFxyXG4gICAgICAgIGltcG9ydGFuY2U6IDVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgX2lkOicnLFxyXG4gICAgICAgIGlkOiAyOSxcclxuICAgICAgICB0aXRsZTogJ1NldmVudGVlbnRoIGJsb2NrJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiAyOSxcclxuICAgICAgICBpbXBvcnRhbmNlOiAzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIF9pZDonJyxcclxuICAgICAgICBpZDogMzAsXHJcbiAgICAgICAgdGl0bGU6ICdFaWdodGVlbnRoIGJsb2NrJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiAzMCxcclxuICAgICAgICBpbXBvcnRhbmNlOiAtMVxyXG4gICAgfSxcclxuXTsiLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge1NUT1JZQkxPQ0tTfSBmcm9tIFwiLi4vbW9jay9tb2NrLXN0b3J5YmxvY2tzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdG9yeUJsb2NrU2VydmljZXtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDpIdHRwKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFN0b3J5QmxvY2tzKCkgOiBPYnNlcnZhYmxlPE9iamVjdFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YoU1RPUllCTE9DS1MpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzYXZlU3RvcnlCbG9jayhzdG9yeUJsb2NrOlN0b3J5QmxvY2spIDogT2JzZXJ2YWJsZTxTdG9yeUJsb2NrW10+IHtcclxuICAgICAgICAvL1RPRE9cclxuICAgICAgICByZXR1cm4gIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlU3RvcnlCbG9jayhzdG9yeUJsb2NrOlN0b3J5QmxvY2spIDogT2JzZXJ2YWJsZTxTdG9yeUJsb2NrW10+IHtcclxuXHJcbiAgICAgICAgLy9UT0RPXHJcbiAgICAgICAgcmV0dXJuICBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXRpbHNTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBFTUFJTF9SRUdFWCA9ICdeWy1hLXowLTl+ISQlXiYqXz0rfXtcXCc/XSsoXFwuWy1hLXowLTl+ISQlXiYqXz0rfXtcXCc/XSspKkAoW2EtejAtOV9dWy1hLXowLTlfXSooXFwuWy1hLXowLTlfXSspKlxcLihhZXJvfGFycGF8Yml6fGNvbXxjb29wfGVkdXxnb3Z8aW5mb3xpbnR8bWlsfG11c2V1bXxuYW1lfG5ldHxvcmd8cHJvfHRyYXZlbHxtb2JpfFthLXpdW2Etel0pfChbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9KSkoOlswLTldezEsNX0pPyQnO1xyXG5cclxuXHJcbiAgICBnZXRSb21hbk51bWVyYWwobnVtKTpzdHJpbmcge1xyXG4gICAgICAgIGlmICghK251bSlcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIHZhciBkaWdpdHMgPSBTdHJpbmcoK251bSkuc3BsaXQoXCJcIiksXHJcbiAgICAgICAgICAgIGtleSA9IFtcIlwiLCBcIkNcIiwgXCJDQ1wiLCBcIkNDQ1wiLCBcIkNEXCIsIFwiRFwiLCBcIkRDXCIsIFwiRENDXCIsIFwiRENDQ1wiLCBcIkNNXCIsXHJcbiAgICAgICAgICAgICAgICBcIlwiLCBcIlhcIiwgXCJYWFwiLCBcIlhYWFwiLCBcIlhMXCIsIFwiTFwiLCBcIkxYXCIsIFwiTFhYXCIsIFwiTFhYWFwiLCBcIlhDXCIsXHJcbiAgICAgICAgICAgICAgICBcIlwiLCBcIklcIiwgXCJJSVwiLCBcIklJSVwiLCBcIklWXCIsIFwiVlwiLCBcIlZJXCIsIFwiVklJXCIsIFwiVklJSVwiLCBcIklYXCJdLFxyXG4gICAgICAgICAgICByb21hbiA9IFwiXCIsXHJcbiAgICAgICAgICAgIGkgPSAzO1xyXG4gICAgICAgIHdoaWxlIChpLS0pXHJcbiAgICAgICAgICAgIHJvbWFuID0gKGtleVsrZGlnaXRzLnBvcCgpICsgKGkgKiAxMCldIHx8IFwiXCIpICsgcm9tYW47XHJcbiAgICAgICAgcmV0dXJuIEFycmF5KCtkaWdpdHMuam9pbihcIlwiKSArIDEpLmpvaW4oXCJNXCIpICsgcm9tYW47XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7VXRpbHNTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvdXRpbHMuc2VydmljZVwiO1xyXG5pbXBvcnQge0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gXCJhbmd1bGFyMi9zcmMvYW5pbWF0ZS9hbmltYXRpb25fYnVpbGRlclwiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2t9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9ja1wiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvc3RvcnlibG9ja3Muc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3N0b3J5YmxvY2snLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5kZXhcIiAobW91c2V3aGVlbCk9XCJ6b29tKClcIiAoRE9NTW91c2VTY3JvbGwpPVwiem9vbSgpXCI+PHNwYW4+e3t1dGlsc1NlcnZpY2UuZ2V0Um9tYW5OdW1lcmFsKGluZGV4ICsgMSl9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+PHNwYW4gW2hpZGRlbl09XCIhX2FjdGl2ZVwiID5BPC9zcGFuPjxzcGFuIFtoaWRkZW5dPVwiIV9zZWxlY3RlZFwiID5TPC9zcGFuPnt7c3RvcnlCbG9ja0luZm8udGl0bGV9fTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj57e3N0b3J5QmxvY2tJbmZvLmRlc2NyaXB0aW9ufX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJlZGl0KGluZGV4LCAkZXZlbnQpXCIgY2xhc3M9XCJidXR0b24gaW5saW5lLWJ1dHRvbiBwcmltYXJ5XCI+RWRpdDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJyZW1vdmUoaW5kZXgsICRldmVudClcIiBjbGFzcz1cImJ1dHRvbiBpbmxpbmUtYnV0dG9uIGFsZXJ0XCI+UmVtb3ZlPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtVdGlsc1NlcnZpY2UsIFN0b3J5QmxvY2tTZXJ2aWNlXSxcclxuICAgIGlucHV0czogWydzdG9yeUJsb2NrSW5mbycsICdpbmRleCddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcnlCbG9ja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgc3RvcnlCbG9ja0luZm86U3RvcnlCbG9jaztcclxuICAgIHB1YmxpYyBpbmRleDtcclxuICAgIHB1YmxpYyBfYWN0aXZlID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX2FjdGlvblRpbWVvdXQ7XHJcbiAgICBwdWJsaWMgX3NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF96b29tTGV2ZWwgPSAxMDtcclxuICAgIHByaXZhdGUgX3ByZXZpb3VzWm9vbUxldmVsID0gMTA7XHJcbiAgICBwcml2YXRlIF96b29tU3RyZW5ndGggPSA1O1xyXG4gICAgcHJpdmF0ZSBfem9vbU9mZnNldCA9IDI1MDtcclxuICAgIHByaXZhdGUgX3pvb21TdGVwID0gODU7XHJcbiAgICBwcml2YXRlIF9zZWxmO1xyXG5cclxuICAgIEBPdXRwdXQoKSB6b29tRXZlbnQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgQE91dHB1dCgpIGVudGVySGVhZGVyRXZlbnQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgZXhpdEhlYWRlckV2ZW50OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FiOkFuaW1hdGlvbkJ1aWxkZXIsIHByaXZhdGUgX2U6RWxlbWVudFJlZiwgcHJpdmF0ZSB1dGlsc1NlcnZpY2U6VXRpbHNTZXJ2aWNlLCBwdWJsaWMgc3RvcnlCbG9ja1NlcnZpY2U6IFN0b3J5QmxvY2tTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgem9vbUxldmVsKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsID0gKHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsID09IHVuZGVmaW5lZCk/IDEwOnRoaXMuX3ByZXZpb3VzWm9vbUxldmVsO1xyXG4gICAgICAgIHRoaXMuX3pvb21MZXZlbCA9ICh0aGlzLl96b29tTGV2ZWwgPT0gdW5kZWZpbmVkKT8gMTA6dGhpcy5fem9vbUxldmVsO1xyXG4gICAgICAgIGlmICh0aGlzLl96b29tTGV2ZWwgIT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNab29tTGV2ZWwgPSB0aGlzLl96b29tTGV2ZWw7XHJcbiAgICAgICAgICAgIHRoaXMuX3pvb21MZXZlbCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnpvb21DaGFuZ2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHtcclxuICAgICAgICB0aGlzLmNoYW5nZVBvc2l0aW9uT25ab29tKDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHpvb20oZSkge1xyXG4gICAgICAgIHZhciBlID0gd2luZG93LmV2ZW50IHx8IGU7IC8vIG9sZCBJRSBzdXBwb3J0XHJcbiAgICAgICAgdGhpcy56b29tRXZlbnQuZW1pdChlKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICB6b29tQ2hhbmdlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnW1N0b3J5QmxvY2sgIycgKyB0aGlzLmluZGV4ICsgJ10gWm9vbSBjaGFuZ2VkIGZyb20gJyArIHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsICsgJyB0byAnICsgdGhpcy5fem9vbUxldmVsKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3pvb21MZXZlbCA8IHRoaXMuc3RvcnlCbG9ja0luZm8uaW1wb3J0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZhZGVPdXQoMTAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQb3NpdGlvbk9uWm9vbSgxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmFkZUluKHNwZWVkOm51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbU3RvcnlCbG9jayAjJyArIHRoaXMuaW5kZXggKyAnXSBGYWRpbmcgaW4uLi4nKTtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYWIuY3NzKCk7XHJcblxyXG4gICAgICAgIHZhciBmcm9tU3R5bGUgPSB7fTtcclxuICAgICAgICB2YXIgdG9TdHlsZSA9IHt9O1xyXG5cclxuICAgICAgICBmcm9tU3R5bGVbJ2Rpc3BsYXknXSA9ICdmbGV4JztcclxuICAgICAgICBmcm9tU3R5bGVbJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gPSAnY3ViaWMtYmV6aWVyKDAuNTc1LCAwLjI1NSwgMC40NDAsIDAuOTg1KTsnO1xyXG4gICAgICAgIHRvU3R5bGVbJ29wYWNpdHknXSA9IDE7XHJcblxyXG5cclxuICAgICAgICBhbmltYXRpb25cclxuICAgICAgICAgICAgLnNldER1cmF0aW9uKHNwZWVkKTtcclxuICAgICAgICBhbmltYXRpb25cclxuICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoZnJvbVN0eWxlKVxyXG4gICAgICAgICAgICAuc2V0VG9TdHlsZXModG9TdHlsZSk7XHJcblxyXG5cclxuICAgICAgICBpZiAoISF0aGlzLl9hY3Rpb25UaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9hY3Rpb25UaW1lb3V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuX2FjdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoX3NlbGYuX2UubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBmYWRlT3V0KHNwZWVkOm51bWJlcikge1xyXG4gICAgICAgIGlmKHRoaXMuX2FjdGl2ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1N0b3J5QmxvY2sgIycgKyB0aGlzLmluZGV4ICsgJ10gRmFkaW5nIG91dC4uLlsnK3RoaXMuX3pvb21MZXZlbCArJzwnKyB0aGlzLnN0b3J5QmxvY2tJbmZvLmltcG9ydGFuY2UrJ10nKTtcclxuICAgICAgICAgICAgbGV0IGFuaW1hdGlvbiA9IHRoaXMuX2FiLmNzcygpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyb21TdHlsZSA9IHt9O1xyXG4gICAgICAgICAgICB2YXIgdG9TdHlsZSA9IHt9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRvU3R5bGVbJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gPSAnY3ViaWMtYmV6aWVyKDAuNTc1LCAwLjI1NSwgMC40NDAsIDAuOTg1KTsnO1xyXG4gICAgICAgICAgICB0b1N0eWxlWydvcGFjaXR5J10gPSAwO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgLnNldER1cmF0aW9uKHNwZWVkKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyhmcm9tU3R5bGUpXHJcbiAgICAgICAgICAgICAgICAuc2V0VG9TdHlsZXModG9TdHlsZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKCEhdGhpcy5fYWN0aW9uVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIEFuaW1hdGlvbiByZW1vdmVkJyk7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fYWN0aW9uVGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9hY3Rpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoX3NlbGYuX2UubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVBvc2l0aW9uT25ab29tKHNwZWVkKSB7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbiA9IHRoaXMuX2FiLmNzcygpO1xyXG4gICAgICAgIHZhciBmcm9tU3R5bGUgPSB7XHJcbiAgICAgICAgICAgIHRvcDogdGhpcy5fem9vbU9mZnNldCArICgodGhpcy5fem9vbVN0ZXAgKyAodGhpcy5fcHJldmlvdXNab29tTGV2ZWwgKiB0aGlzLl96b29tU3RyZW5ndGgpKSAqIHRoaXMuc3RvcnlCbG9ja0luZm8udGltZVBvc2l0aW9uKSArICdweCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgdG9TdHlsZSA9IHtcclxuICAgICAgICAgICAgdG9wOiB0aGlzLl96b29tT2Zmc2V0ICsgKCh0aGlzLl96b29tU3RlcCArICh0aGlzLl96b29tTGV2ZWwgKiB0aGlzLl96b29tU3RyZW5ndGgpKSAqIHRoaXMuc3RvcnlCbG9ja0luZm8udGltZVBvc2l0aW9uKSArICdweCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnW1N0b3J5QmxvY2sgIycgKyB0aGlzLmluZGV4ICsgJ10gQ2hhbmdpbmcgcG9zaXRpb24gZnJvbSAnKyhmcm9tU3R5bGUudG9wKSsnIHRvICcrKHRvU3R5bGUudG9wKSsnIC4uLicpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fem9vbUxldmVsID4gdGhpcy5zdG9yeUJsb2NrSW5mby5pbXBvcnRhbmNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbU3RvcnlCbG9jayAjJyArIHRoaXMuaW5kZXggKyAnXSAuLi5hbmQgZmFkaW5nIGluIFsnK3RoaXMuX3pvb21MZXZlbCsnPicrdGhpcy5zdG9yeUJsb2NrSW5mby5pbXBvcnRhbmNlKyddJyk7XHJcbiAgICAgICAgICAgIHRvU3R5bGVbJ29wYWNpdHknXSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbU3RvcnlCbG9jayAjJyArIHRoaXMuaW5kZXggKyAnXSAuLi5hbmQgZmFkaW5nIG91dCcpO1xyXG4gICAgICAgICAgICB0b1N0eWxlWydvcGFjaXR5J10gPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdG9TdHlsZVsndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSA9ICdjdWJpYy1iZXppZXIoMC41NzUsIDAuMjU1LCAwLjQ0MCwgMC45ODUpOyc7XHJcblxyXG5cclxuICAgICAgICBhbmltYXRpb25cclxuICAgICAgICAgICAgLnNldER1cmF0aW9uKHNwZWVkKTtcclxuICAgICAgICBhbmltYXRpb25cclxuICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoZnJvbVN0eWxlKVxyXG4gICAgICAgICAgICAuc2V0VG9TdHlsZXModG9TdHlsZSk7XHJcblxyXG5cclxuICAgICAgICBpZiAoISF0aGlzLl9hY3Rpb25UaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbU3RvcnlCbG9jayAjJyArIHRoaXMuaW5kZXggKyAnXSBBbmltYXRpb24gcmVtb3ZlZCcpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fYWN0aW9uVGltZW91dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLl9hY3Rpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KF9zZWxmLl9lLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdChpbmRleCwgZXZlbnQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTaG91bGQgZWRpdCcsIGluZGV4LCBldmVudCk7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbiA9IHRoaXMuX2FiLmNzcygpO1xyXG5cclxuICAgICAgICB2YXIgdG9TdHlsZSA9IHtcclxuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgICAgIHRvcDogJzBweCcsXHJcbiAgICAgICAgICAgIGxlZnQ6ICcwcHgnLFxyXG4gICAgICAgICAgICByaWdodDogJzI0MHB4JyxcclxuICAgICAgICAgICAgYm90dG9tOiAnMHB4JyxcclxuICAgICAgICAgICAgd2lkdGg6ICdhdXRvJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAuc2V0RHVyYXRpb24oMTAwKTtcclxuICAgICAgICBhbmltYXRpb25cclxuICAgICAgICAgICAgLnNldFRvU3R5bGVzKHRvU3R5bGUpO1xyXG5cclxuICAgICAgICBpZiAoISF0aGlzLl9hY3Rpb25UaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbU3RvcnlCbG9jayAjJyArIHRoaXMuaW5kZXggKyAnXSBBbmltYXRpb24gcmVtb3ZlZCcpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fYWN0aW9uVGltZW91dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLl9hY3Rpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KF9zZWxmLl9lLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGluZGV4LCBldmVudCl7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5kZWxldGVTdG9yeUJsb2NrKHRoaXMuc3RvcnlCbG9ja0luZm8pLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnZG9uZScpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2hvdWxkIHJlbW92ZScsIGluZGV4LCBldmVudCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J3RpbWVsaW5lJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lbGluZUNvbXBvbmVudCB7XHJcbiAgICBcclxufSIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtTdG9yeUJsb2NrU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0b3J5YmxvY2tzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTdG9yeUJsb2NrfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2tcIjtcclxuaW1wb3J0IHtTdG9yeUJsb2NrQ29tcG9uZW50fSBmcm9tIFwiLi9zdG9yeWJsb2NrLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1RpbWVsaW5lQ29tcG9uZW50fSBmcm9tIFwiLi90aW1lbGluZS5jb21wb25lbnRcIjtcclxuLy8gaW1wb3J0IHtMb2NhbFN0b3JhZ2V9IGZyb20gXCJhbmd1bGFyMi1sb2NhbHN0b3JhZ2UvTG9jYWxTdG9yYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWNvbnRlbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPHRpbWVsaW5lIGNsYXNzPVwidGltZWxpbmUtYmxvY2tcIj48L3RpbWVsaW5lPlxyXG4gICAgICAgICAgICA8ZGl2IChkb2N1bWVudDpzY3JvbGwpPVwib25TY3JvbGwoJGV2ZW50KVwiIGNsYXNzPVwic3RvcnktYmxvY2tzXCI+XHJcbiAgICAgICAgICAgICAgICA8c3RvcnlibG9jayAqbmdGb3I9XCIjc3RvcnlCbG9jayBvZiBzdG9yeUJsb2NrczsgI2kgPSBpbmRleFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIFtpbmRleF09XCJpXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0b3J5QmxvY2tJbmZvXT1cInN0b3J5QmxvY2tcIiBcclxuICAgICAgICAgICAgICAgICAgICBbem9vbUxldmVsXT1cInpvb21MZXZlbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICh6b29tRXZlbnQpPVwib25Nb3VzZVdoZWVsKCRldmVudClcIiBcclxuICAgICAgICAgICAgICAgICAgICAoZW50ZXJIZWFkZXJFdmVudCk9XCJyZXF1ZXN0U2VsZWN0aW9uKCRldmVudClcIiBcclxuICAgICAgICAgICAgICAgICAgICAoZXhpdEhlYWRlckV2ZW50KT1cInJlcXVlc3REZXNlbGVjdGlvbigkZXZlbnQpXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzdG9yeS1ibG9ja1wiPjwvc3RvcnlibG9jaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgKG1vdXNld2hlZWwpPVwib25Nb3VzZVdoZWVsKClcIiAoRE9NTW91c2VTY3JvbGwpPVwib25Nb3VzZVdoZWVsKClcIiBjbGFzcz1cInRpbWVsaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgICAgU2lkZWJhclxyXG4gICAgICAgIDwvYXNpZGU+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOiBbU3RvcnlCbG9ja1NlcnZpY2VdLFxyXG4gICAgZGlyZWN0aXZlczogW1N0b3J5QmxvY2tDb21wb25lbnQsIFRpbWVsaW5lQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgc3RvcnlCbG9ja3M6T2JqZWN0W107XHJcbiAgICBAT3V0cHV0KCkgc2Nyb2xsV2hlZWw6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICB6b29tTGV2ZWwgPSAxMDtcclxuICAgIHB1YmxpYyBzZWxlY3RlZEluZGV4ID0gMDtcclxuICAgIHNjcm9sbFZhbHVlID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRCbG9jaztcclxuICAgIHB1YmxpYyB0b2tlbjpzdHJpbmcgPSAnJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3J5QmxvY2tTZXJ2aWNlOlN0b3J5QmxvY2tTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHtcclxuICAgICAgICB0aGlzLmdldFN0b3J5QmxvY2tzKCk7XHJcbiAgICAgICAgdGhpcy56b29tTGV2ZWwgPSAxMDtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVmFsdWUgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdG9yeUJsb2NrcygpIHtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdldFN0b3J5QmxvY2tzKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcnlCbG9ja3MgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEJsb2NrID0gdGhpcy5zdG9yeUJsb2Nrc1t0aGlzLnNlbGVjdGVkSW5kZXhdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVyciksXHJcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdkb25lJylcclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlV2hlZWwoZSkge1xyXG4gICAgICAgIHZhciBlID0gd2luZG93LmV2ZW50IHx8IGU7IC8vIG9sZCBJRSBzdXBwb3J0XHJcbiAgICAgICAgdmFyIGRlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIChlLndoZWVsRGVsdGEgfHwgLWUuZGV0YWlsKSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdab29tZWQsIG9sZCB6b29tTGV2ZWwgaXMgJyArIHRoaXMuem9vbUxldmVsICsgJyBhbmQgZGVsdGEgaXMgJyArIGRlbHRhKTtcclxuICAgICAgICBpZiAoKHRoaXMuem9vbUxldmVsID4gMCAmJiBkZWx0YSA8IDApIHx8ICh0aGlzLnpvb21MZXZlbCA8IDEwICYmIGRlbHRhID4gMCkpIHtcclxuICAgICAgICAgICAgdGhpcy56b29tTGV2ZWwgKz0gKGRlbHRhICogMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2Nyb2xsKGUpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbFZhbHVlID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdFNlbGVjdGlvbihibG9jaykge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggIT0gYmxvY2suaW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gYmxvY2suaW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCbG9jayA9IHRoaXMuc3RvcnlCbG9ja3NbdGhpcy5zZWxlY3RlZEluZGV4XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdERlc2VsZWN0aW9uKGJsb2NrKSB7XHJcbiAgICAgICAgaWYgKGJsb2NrLmluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBibG9jay5pbmRleCAtIDE7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCbG9jayA9IHRoaXMuc3RvcnlCbG9ja3NbdGhpcy5zZWxlY3RlZEluZGV4XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XHJcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2FwcC1jb250ZW50LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9ICAgIGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5cclxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW0hUVFBfUFJPVklERVJTXSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
