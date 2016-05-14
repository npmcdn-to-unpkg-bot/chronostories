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
System.register("services/storyblocks.service", ["angular2/core", 'angular2/http', 'rxjs/Rx', "mock/mock-storyblocks"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_1, http_1, mock_storyblocks_1;
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
            function (mock_storyblocks_1_1) {
                mock_storyblocks_1 = mock_storyblocks_1_1;
            }],
        execute: function() {
            StoryBlockService = (function () {
                function StoryBlockService(http) {
                    this.http = http;
                }
                StoryBlockService.prototype.getStoryBlocks = function () {
                    return this.http.get('/storyblocks/')
                        .map(function (res) { return res.json(); });
                };
                StoryBlockService.prototype.saveStoryBlock = function (storyBlock) {
                    if (!!storyBlock._id) {
                        return this.http.put('/storyblocks/' + storyBlock._id, JSON.stringify(storyBlock))
                            .map(function (res) { return res.json(); });
                    }
                    else {
                        return this.http.post('/storyblocks/', JSON.stringify(storyBlock))
                            .map(function (res) { return res.json(); });
                    }
                };
                StoryBlockService.prototype.deleteStoryBlock = function (storyBlock) {
                    if (!!storyBlock._id) {
                        return this.http.delete('/storyblocks/' + storyBlock._id)
                            .map(function (res) { return res.json(); });
                    }
                    return null;
                };
                StoryBlockService.prototype.generateTestData = function () {
                    var mockData = mock_storyblocks_1.STORYBLOCKS;
                    for (var i = 0; i < mockData.length; i++) {
                        this.http.post('/storyblocks/', JSON.stringify(mockData[i]));
                    }
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
                    storyBlockService.generateTestData();
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
                    }, function (err) { return console.error(err); }, function () { return console.log('done, loaded ' + _this.storyBlocks.length + ' blocks'); });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2svbW9jay1zdG9yeWJsb2Nrcy50cyIsInNlcnZpY2VzL3N0b3J5YmxvY2tzLnNlcnZpY2UudHMiLCJzZXJ2aWNlcy91dGlscy5zZXJ2aWNlLnRzIiwiY29tcG9uZW50cy9zdG9yeWJsb2NrLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvdGltZWxpbmUuY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9hcHAtY29udGVudC5jb21wb25lbnQudHMiLCJib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUFhLFdBQVc7Ozs7WUFBWCx5QkFBQSxXQUFXLEdBQUc7Z0JBQ3ZCO29CQUNJLEdBQUcsRUFBQyxFQUFFO29CQUNOLEVBQUUsRUFBRSxDQUFDO29CQUNMLEtBQUssRUFBRSxhQUFhO29CQUNwQixXQUFXLEVBQUUsa25CQUFrbkI7b0JBQy9uQixZQUFZLEVBQUUsQ0FBQztvQkFDZixVQUFVLEVBQUUsQ0FBQyxDQUFDO2lCQUNqQjtnQkFDRDtvQkFDSSxHQUFHLEVBQUMsRUFBRTtvQkFDTixFQUFFLEVBQUUsQ0FBQztvQkFDTCxLQUFLLEVBQUUsY0FBYztvQkFDckIsV0FBVyxFQUFFLGtuQkFBa25CO29CQUMvbkIsWUFBWSxFQUFFLENBQUM7b0JBQ2YsVUFBVSxFQUFFLENBQUM7aUJBQ2hCO2dCQUNEO29CQUNJLEVBQUUsRUFBRSxDQUFDO29CQUNMLEtBQUssRUFBRSxhQUFhO29CQUNwQixXQUFXLEVBQUUsazFEQUFrMUQ7b0JBQy8xRCxZQUFZLEVBQUUsQ0FBQztvQkFDZixVQUFVLEVBQUUsQ0FBQyxDQUFDO2lCQUNqQjtnQkFDRDtvQkFDSSxHQUFHLEVBQUMsRUFBRTtvQkFDTixFQUFFLEVBQUMsQ0FBQztvQkFDSixLQUFLLEVBQUUsY0FBYztvQkFDckIsV0FBVyxFQUFFLGtuQkFBa25CO29CQUMvbkIsWUFBWSxFQUFFLENBQUM7b0JBQ2YsVUFBVSxFQUFFLENBQUM7aUJBQ2hCO2dCQUNEO29CQUNJLEdBQUcsRUFBQyxFQUFFO29CQUNOLEVBQUUsRUFBRSxDQUFDO29CQUNMLEtBQUssRUFBRSxhQUFhO29CQUNwQixXQUFXLEVBQUUsa25CQUFrbkI7b0JBQy9uQixZQUFZLEVBQUUsQ0FBQztvQkFDZixVQUFVLEVBQUUsQ0FBQztpQkFDaEI7Z0JBQ0Q7b0JBQ0ksR0FBRyxFQUFDLEVBQUU7b0JBQ04sRUFBRSxFQUFFLEVBQUU7b0JBQ04sS0FBSyxFQUFFLGFBQWE7b0JBQ3BCLFdBQVcsRUFBRSxrbkJBQWtuQjtvQkFDL25CLFlBQVksRUFBRSxFQUFFO29CQUNoQixVQUFVLEVBQUUsRUFBRTtpQkFDakI7Z0JBQ0Q7b0JBQ0ksR0FBRyxFQUFDLEVBQUU7b0JBQ04sRUFBRSxFQUFFLEVBQUU7b0JBQ04sS0FBSyxFQUFFLGVBQWU7b0JBQ3RCLFdBQVcsRUFBRSxrbkJBQWtuQjtvQkFDL25CLFlBQVksRUFBRSxFQUFFO29CQUNoQixVQUFVLEVBQUUsQ0FBQztpQkFDaEI7Z0JBQ0Q7b0JBQ0ksR0FBRyxFQUFDLEVBQUU7b0JBQ04sRUFBRSxFQUFFLEVBQUU7b0JBQ04sS0FBSyxFQUFFLGNBQWM7b0JBQ3JCLFdBQVcsRUFBRSxrbkJBQWtuQjtvQkFDL25CLFlBQVksRUFBRSxFQUFFO29CQUNoQixVQUFVLEVBQUUsQ0FBQztpQkFDaEI7Z0JBQ0Q7b0JBQ0ksR0FBRyxFQUFDLEVBQUU7b0JBQ04sRUFBRSxFQUFFLEVBQUU7b0JBQ04sS0FBSyxFQUFFLGFBQWE7b0JBQ3BCLFdBQVcsRUFBRSxrbkJBQWtuQjtvQkFDL25CLFlBQVksRUFBRSxFQUFFO29CQUNoQixVQUFVLEVBQUUsQ0FBQztpQkFDaEI7Z0JBQ0Q7b0JBQ0ksR0FBRyxFQUFDLEVBQUU7b0JBQ04sRUFBRSxFQUFFLEVBQUU7b0JBQ04sS0FBSyxFQUFFLGFBQWE7b0JBQ3BCLFdBQVcsRUFBRSxrbkJBQWtuQjtvQkFDL25CLFlBQVksRUFBRSxFQUFFO29CQUNoQixVQUFVLEVBQUUsQ0FBQztpQkFDaEI7Z0JBQ0Q7b0JBQ0ksR0FBRyxFQUFDLEVBQUU7b0JBQ04sRUFBRSxFQUFFLEVBQUU7b0JBQ04sS0FBSyxFQUFFLGdCQUFnQjtvQkFDdkIsV0FBVyxFQUFFLGtuQkFBa25CO29CQUMvbkIsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLFVBQVUsRUFBRSxFQUFFO2lCQUNqQjtnQkFDRDtvQkFDSSxHQUFHLEVBQUMsRUFBRTtvQkFDTixFQUFFLEVBQUUsRUFBRTtvQkFDTixLQUFLLEVBQUUsZUFBZTtvQkFDdEIsV0FBVyxFQUFFLGtuQkFBa25CO29CQUMvbkIsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLFVBQVUsRUFBRSxDQUFDO2lCQUNoQjtnQkFDRDtvQkFDSSxHQUFHLEVBQUMsRUFBRTtvQkFDTixFQUFFLEVBQUUsRUFBRTtvQkFDTixLQUFLLEVBQUUsa0JBQWtCO29CQUN6QixXQUFXLEVBQUUsa25CQUFrbkI7b0JBQy9uQixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsVUFBVSxFQUFFLENBQUM7aUJBQ2hCO2dCQUNEO29CQUNJLEdBQUcsRUFBQyxFQUFFO29CQUNOLEVBQUUsRUFBRSxFQUFFO29CQUNOLEtBQUssRUFBRSxrQkFBa0I7b0JBQ3pCLFdBQVcsRUFBRSxrbkJBQWtuQjtvQkFDL25CLFlBQVksRUFBRSxFQUFFO29CQUNoQixVQUFVLEVBQUUsQ0FBQztpQkFDaEI7Z0JBQ0Q7b0JBQ0ksR0FBRyxFQUFDLEVBQUU7b0JBQ04sRUFBRSxFQUFFLEVBQUU7b0JBQ04sS0FBSyxFQUFFLGlCQUFpQjtvQkFDeEIsV0FBVyxFQUFFLGtuQkFBa25CO29CQUMvbkIsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLFVBQVUsRUFBRSxDQUFDO2lCQUNoQjtnQkFDRDtvQkFDSSxHQUFHLEVBQUMsRUFBRTtvQkFDTixFQUFFLEVBQUUsRUFBRTtvQkFDTixLQUFLLEVBQUUsaUJBQWlCO29CQUN4QixXQUFXLEVBQUUsa25CQUFrbkI7b0JBQy9uQixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsVUFBVSxFQUFFLENBQUM7aUJBQ2hCO2dCQUNEO29CQUNJLEdBQUcsRUFBQyxFQUFFO29CQUNOLEVBQUUsRUFBRSxFQUFFO29CQUNOLEtBQUssRUFBRSxtQkFBbUI7b0JBQzFCLFdBQVcsRUFBRSxrbkJBQWtuQjtvQkFDL25CLFlBQVksRUFBRSxFQUFFO29CQUNoQixVQUFVLEVBQUUsQ0FBQztpQkFDaEI7Z0JBQ0Q7b0JBQ0ksR0FBRyxFQUFDLEVBQUU7b0JBQ04sRUFBRSxFQUFFLEVBQUU7b0JBQ04sS0FBSyxFQUFFLGtCQUFrQjtvQkFDekIsV0FBVyxFQUFFLGtuQkFBa25CO29CQUMvbkIsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLFVBQVUsRUFBRSxDQUFDLENBQUM7aUJBQ2pCO2FBQ0osQ0FBQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDeElGO2dCQUVJLDJCQUFtQixJQUFTO29CQUFULFNBQUksR0FBSixJQUFJLENBQUs7Z0JBRTVCLENBQUM7Z0JBRUQsMENBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO3lCQUNoQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBRUQsMENBQWMsR0FBZCxVQUFlLFVBQXFCO29CQUNoQyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7d0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzZCQUMzRSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7b0JBQ2hDLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzZCQUM3RCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7b0JBQ2hDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCw0Q0FBZ0IsR0FBaEIsVUFBaUIsVUFBcUI7b0JBQ2xDLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQzt3QkFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsR0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDOzZCQUNsRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7b0JBQ2hDLENBQUM7b0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQztnQkFFRCw0Q0FBZ0IsR0FBaEI7b0JBQ0ksSUFBSSxRQUFRLEdBQUcsOEJBQVcsQ0FBQztvQkFFM0IsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pFLENBQUM7Z0JBQ0wsQ0FBQztnQkFyQ0w7b0JBQUMsaUJBQVUsRUFBRTs7cUNBQUE7Z0JBc0NiLHdCQUFDO1lBQUQsQ0FyQ0EsQUFxQ0MsSUFBQTtZQXJDRCxpREFxQ0MsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7O1lDekNEO2dCQUFBO29CQUNXLGdCQUFXLEdBQUcsK1BBQStQLENBQUM7Z0JBZ0J6UixDQUFDO2dCQWJHLHNDQUFlLEdBQWYsVUFBZ0IsR0FBRztvQkFDZixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO3dCQUNOLE1BQU0sQ0FBQyxFQUFFLENBQUM7b0JBQ2QsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUMvQixHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJO3dCQUM3RCxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJO3dCQUMxRCxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFDL0QsS0FBSyxHQUFHLEVBQUUsRUFDVixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNWLE9BQU8sQ0FBQyxFQUFFO3dCQUNOLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQztvQkFDMUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDekQsQ0FBQztnQkFqQkw7b0JBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7Z0JBa0JiLG1CQUFDO1lBQUQsQ0FqQkEsQUFpQkMsSUFBQTtZQWpCRCx1Q0FpQkMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDRUQ7Z0JBa0JJLDZCQUFvQixHQUFvQixFQUFVLEVBQWEsRUFBVSxZQUF5QixFQUFTLGlCQUFvQztvQkFBM0gsUUFBRyxHQUFILEdBQUcsQ0FBaUI7b0JBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBVztvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFBUyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO29CQWZ4SSxZQUFPLEdBQUcsSUFBSSxDQUFDO29CQUVmLGNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ2pCLGVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ2hCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztvQkFDeEIsa0JBQWEsR0FBRyxDQUFDLENBQUM7b0JBQ2xCLGdCQUFXLEdBQUcsR0FBRyxDQUFDO29CQUNsQixjQUFTLEdBQUcsRUFBRSxDQUFDO29CQUdiLGNBQVMsR0FBcUIsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBRWpELHFCQUFnQixHQUFxQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFDeEQsb0JBQWUsR0FBcUIsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBRzdELGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3pDLENBQUM7Z0JBR0Qsc0JBQUksMENBQVM7eUJBQWIsVUFBYyxLQUFZO3dCQUN0QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLElBQUksU0FBUyxDQUFDLEdBQUUsRUFBRSxHQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDN0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDLEdBQUUsRUFBRSxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7d0JBQ3JFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7NEJBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDOzRCQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQ3ZCLENBQUM7b0JBQ0wsQ0FBQzs7O21CQUFBO2dCQUVELHNDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUVELGtDQUFJLEdBQUosVUFBSyxDQUFDO29CQUNGLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsaUJBQWlCO29CQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7Z0JBRUQseUNBQVcsR0FBWDtvQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLHNCQUFzQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUV4SCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3pCLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDeEIsQ0FBQztnQkFDTCxDQUFDO2dCQUVELG9DQUFNLEdBQU4sVUFBTyxLQUFZO29CQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztvQkFDN0QsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFFL0IsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO29CQUNuQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBRWpCLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7b0JBQzlCLFNBQVMsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDJDQUEyQyxDQUFDO29CQUN0RixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUd2QixTQUFTO3lCQUNKLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEIsU0FBUzt5QkFDSixhQUFhLENBQUMsU0FBUyxDQUFDO3lCQUN4QixXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRzFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDdEMsQ0FBQztvQkFFRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBRWpCLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDO3dCQUM3QixTQUFTOzZCQUNKLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUN2QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ1osQ0FBQztnQkFFRCxxQ0FBTyxHQUFQLFVBQVEsS0FBWTtvQkFDaEIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxrQkFBa0IsR0FBQyxJQUFJLENBQUMsVUFBVSxHQUFFLEdBQUcsR0FBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsR0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDeEgsSUFBSSxXQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFFL0IsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO3dCQUNuQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7d0JBR2pCLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDJDQUEyQyxDQUFDO3dCQUNwRixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUd2QixXQUFTOzZCQUNKLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDeEIsV0FBUzs2QkFDSixhQUFhLENBQUMsU0FBUyxDQUFDOzZCQUN4QixXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBRzFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzs0QkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQyxDQUFDOzRCQUNsRSxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUN0QyxDQUFDO3dCQUVELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQzt3QkFFakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUM7NEJBQzdCLFdBQVM7aUNBQ0osS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBQ3ZDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDWixDQUFDO2dCQUNMLENBQUM7Z0JBRUQsa0RBQW9CLEdBQXBCLFVBQXFCLEtBQUs7b0JBQ3RCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQy9CLElBQUksU0FBUyxHQUFHO3dCQUNaLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSTtxQkFDeEksQ0FBQztvQkFFRixJQUFJLE9BQU8sR0FBRzt3QkFDVixHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJO3FCQUNoSSxDQUFDO29CQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsMkJBQTJCLEdBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUMsTUFBTSxHQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUVwSCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxzQkFBc0IsR0FBQyxJQUFJLENBQUMsVUFBVSxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsR0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDMUgsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDM0IsQ0FBQztvQkFDRCxJQUFJLENBQUEsQ0FBQzt3QkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFDLENBQUM7d0JBQ2xFLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzNCLENBQUM7b0JBRUQsT0FBTyxDQUFDLDRCQUE0QixDQUFDLEdBQUcsMkNBQTJDLENBQUM7b0JBR3BGLFNBQVM7eUJBQ0osV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4QixTQUFTO3lCQUNKLGFBQWEsQ0FBQyxTQUFTLENBQUM7eUJBQ3hCLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFHMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFDLENBQUM7d0JBQ2xFLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ3RDLENBQUM7b0JBRUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUVqQixJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQzt3QkFDN0IsU0FBUzs2QkFDSixLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDdkMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNaLENBQUM7Z0JBRUQsa0NBQUksR0FBSixVQUFLLEtBQUssRUFBRSxLQUFLO29CQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDekMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFFL0IsSUFBSSxPQUFPLEdBQUc7d0JBQ1YsUUFBUSxFQUFFLE9BQU87d0JBQ2pCLEdBQUcsRUFBRSxLQUFLO3dCQUNWLElBQUksRUFBRSxLQUFLO3dCQUNYLEtBQUssRUFBRSxPQUFPO3dCQUNkLE1BQU0sRUFBRSxLQUFLO3dCQUNiLEtBQUssRUFBRSxNQUFNO3FCQUNoQixDQUFDO29CQUVGLFNBQVM7eUJBQ0osV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN0QixTQUFTO3lCQUNKLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFDLENBQUM7d0JBQ2xFLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ3RDLENBQUM7b0JBRUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUVqQixJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQzt3QkFDN0IsU0FBUzs2QkFDSixLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDdkMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNaLENBQUM7Z0JBRUQsb0NBQU0sR0FBTixVQUFPLEtBQUssRUFBRSxLQUFLO29CQUNmLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUNsRSxVQUFBLElBQUk7d0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDckIsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsRUFDekIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQW5CLENBQW1CLENBQzVCLENBQUM7b0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQWpNRDtvQkFBQyxhQUFNLEVBQUU7O3NFQUFBO2dCQUVUO29CQUFDLGFBQU0sRUFBRTs7NkVBQUE7Z0JBQ1Q7b0JBQUMsYUFBTSxFQUFFOzs0RUFBQTtnQkFNVDtvQkFBQyxZQUFLLEVBQUU7OztvRUFBQTtnQkF2Q1o7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLDhxQkFVVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLHVDQUFpQixDQUFDO3dCQUM1QyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUM7cUJBQ3RDLENBQUM7O3VDQUFBO2dCQWlORiwwQkFBQztZQUFELENBL01BLEFBK01DLElBQUE7WUEvTUQscURBK01DLENBQUE7Ozs7Ozs7Ozs7Ozs7OztZQy9ORDtnQkFBQTtnQkFFQSxDQUFDO2dCQVBEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLFVBQVU7d0JBQ25CLFFBQVEsRUFBRSxRQUNUO3FCQUNKLENBQUM7O3FDQUFBO2dCQUdGLHdCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCxpREFFQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNKRCxtRUFBbUU7WUEyQm5FO2dCQVVJLHNCQUFvQixpQkFBbUM7b0JBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7b0JBUjdDLGdCQUFXLEdBQXFCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUM3RCxjQUFTLEdBQUcsRUFBRSxDQUFDO29CQUNSLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO29CQUN6QixnQkFBVyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUUvQixVQUFLLEdBQVUsRUFBRSxDQUFDO2dCQUl6QixDQUFDO2dCQUVELCtCQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQy9DLENBQUM7Z0JBRUQscUNBQWMsR0FBZDtvQkFBQSxpQkFVQztvQkFURyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUM3QyxVQUFBLElBQUk7d0JBQ0EsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7d0JBQ3hCLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7b0JBQzdELENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLEVBQ3pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRSxTQUFTLENBQUMsRUFBL0QsQ0FBK0QsQ0FDeEUsQ0FBQztnQkFFTixDQUFDO2dCQUVELG1DQUFZLEdBQVosVUFBYSxDQUFDO29CQUNWLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsaUJBQWlCO29CQUM1QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsQ0FBQztvQkFDckYsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMxRSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxDQUFDO29CQUNELENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN4QixDQUFDO2dCQUVELCtCQUFRLEdBQVIsVUFBUyxDQUFDO29CQUNOLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQy9DLENBQUM7Z0JBRUQsdUNBQWdCLEdBQWhCLFVBQWlCLEtBQUs7b0JBQ2xCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQzt3QkFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDOUQsQ0FBQztnQkFDTCxDQUFDO2dCQUVELHlDQUFrQixHQUFsQixVQUFtQixLQUFLO29CQUNwQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzlELENBQUM7Z0JBQ0wsQ0FBQztnQkF6REQ7b0JBQUMsYUFBTSxFQUFFOztpRUFBQTtnQkEzQmI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLDYwQkFrQlQ7d0JBQ0QsU0FBUyxFQUFFLENBQUMsdUNBQWlCLENBQUM7d0JBQzlCLFVBQVUsRUFBRSxDQUFDLDBDQUFtQixFQUFFLHNDQUFpQixDQUFDO3FCQUN2RCxDQUFDOztnQ0FBQTtnQkE4REYsbUJBQUM7WUFBRCxDQTVEQSxBQTREQyxJQUFBO1lBNURELHVDQTREQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ3ZGRCxtQkFBUyxDQUFDLG9DQUFZLEVBQUUsQ0FBQyxxQkFBYyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiIuLi8uLi8uLi9hbmd1bGFyYXR0YWNrMjAxNi1jaHJvbm9zdG9yaWVzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTVE9SWUJMT0NLUyA9IFtcclxuICAgIHtcclxuICAgICAgICBfaWQ6JycsXHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgdGl0bGU6ICdGaXJzdCBibG9jaycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxyXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMixcclxuICAgICAgICBpbXBvcnRhbmNlOiAtMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBfaWQ6JycsXHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgdGl0bGU6ICdTZWNvbmQgYmxvY2snLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDMsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNSxcclxuICAgICAgICB0aXRsZTogJ1RoaXJkIGJsb2NrJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiA1LFxyXG4gICAgICAgIGltcG9ydGFuY2U6IC0xXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIF9pZDonJyxcclxuICAgICAgICBpZDo2LFxyXG4gICAgICAgIHRpdGxlOiAnRm91cnRoIGJsb2NrJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiA2LFxyXG4gICAgICAgIGltcG9ydGFuY2U6IDVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgX2lkOicnLFxyXG4gICAgICAgIGlkOiA3LFxyXG4gICAgICAgIHRpdGxlOiAnRmlmdGggYmxvY2snLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDcsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogM1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBfaWQ6JycsXHJcbiAgICAgICAgaWQ6IDEwLFxyXG4gICAgICAgIHRpdGxlOiAnU2l4dGggYmxvY2snLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDEwLFxyXG4gICAgICAgIGltcG9ydGFuY2U6IDExXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIF9pZDonJyxcclxuICAgICAgICBpZDogMTIsXHJcbiAgICAgICAgdGl0bGU6ICdTZXZlbnRoIGJsb2NrJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiAxMixcclxuICAgICAgICBpbXBvcnRhbmNlOiA5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIF9pZDonJyxcclxuICAgICAgICBpZDogMTUsXHJcbiAgICAgICAgdGl0bGU6ICdFaWdodGggYmxvY2snLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDE1LFxyXG4gICAgICAgIGltcG9ydGFuY2U6IDhcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgX2lkOicnLFxyXG4gICAgICAgIGlkOiAxNixcclxuICAgICAgICB0aXRsZTogJ05pbnRoIGJsb2NrJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiAxNixcclxuICAgICAgICBpbXBvcnRhbmNlOiAzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIF9pZDonJyxcclxuICAgICAgICBpZDogMTcsXHJcbiAgICAgICAgdGl0bGU6ICdUZW50aCBibG9jaycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxyXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMTcsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBfaWQ6JycsXHJcbiAgICAgICAgaWQ6IDE5LFxyXG4gICAgICAgIHRpdGxlOiAnRWxldmVudGggYmxvY2snLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDE5LFxyXG4gICAgICAgIGltcG9ydGFuY2U6IDExXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIF9pZDonJyxcclxuICAgICAgICBpZDogMjEsXHJcbiAgICAgICAgdGl0bGU6ICdUd2VsZnRoIGJsb2NrJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiAyMSxcclxuICAgICAgICBpbXBvcnRhbmNlOiA3XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIF9pZDonJyxcclxuICAgICAgICBpZDogMjIsXHJcbiAgICAgICAgdGl0bGU6ICdUaGlydGVlbnRoIGJsb2NrJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiAyMixcclxuICAgICAgICBpbXBvcnRhbmNlOiAyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIF9pZDonJyxcclxuICAgICAgICBpZDogMjUsXHJcbiAgICAgICAgdGl0bGU6ICdGb3VydGVlbnRoIGJsb2NrJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiAyNSxcclxuICAgICAgICBpbXBvcnRhbmNlOiA3XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIF9pZDonJyxcclxuICAgICAgICBpZDogMjcsXHJcbiAgICAgICAgdGl0bGU6ICdGaWZ0ZWVudGggYmxvY2snLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDI3LFxyXG4gICAgICAgIGltcG9ydGFuY2U6IDVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgX2lkOicnLFxyXG4gICAgICAgIGlkOiAyOCxcclxuICAgICAgICB0aXRsZTogJ1NpeHRlZW50aCBibG9jaycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxyXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMjgsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogNVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBfaWQ6JycsXHJcbiAgICAgICAgaWQ6IDI5LFxyXG4gICAgICAgIHRpdGxlOiAnU2V2ZW50ZWVudGggYmxvY2snLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDI5LFxyXG4gICAgICAgIGltcG9ydGFuY2U6IDNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgX2lkOicnLFxyXG4gICAgICAgIGlkOiAzMCxcclxuICAgICAgICB0aXRsZTogJ0VpZ2h0ZWVudGggYmxvY2snLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDMwLFxyXG4gICAgICAgIGltcG9ydGFuY2U6IC0xXHJcbiAgICB9LFxyXG5dOyIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHtTdG9yeUJsb2NrfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2tcIjtcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7U1RPUllCTE9DS1N9IGZyb20gXCIuLi9tb2NrL21vY2stc3RvcnlibG9ja3NcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0b3J5QmxvY2tTZXJ2aWNle1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOkh0dHApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RvcnlCbG9ja3MoKSA6IE9ic2VydmFibGU8U3RvcnlCbG9ja1tdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9zdG9yeWJsb2Nrcy8nKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlU3RvcnlCbG9jayhzdG9yeUJsb2NrOlN0b3J5QmxvY2spIDogT2JzZXJ2YWJsZTxTdG9yeUJsb2NrW10+IHtcclxuICAgICAgICBpZighIXN0b3J5QmxvY2suX2lkKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoJy9zdG9yeWJsb2Nrcy8nK3N0b3J5QmxvY2suX2lkLCBKU09OLnN0cmluZ2lmeShzdG9yeUJsb2NrKSlcclxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvc3RvcnlibG9ja3MvJywgSlNPTi5zdHJpbmdpZnkoc3RvcnlCbG9jaykpXHJcbiAgICAgICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlU3RvcnlCbG9jayhzdG9yeUJsb2NrOlN0b3J5QmxvY2spIDogT2JzZXJ2YWJsZTxTdG9yeUJsb2NrW10+IHtcclxuICAgICAgICBpZighIXN0b3J5QmxvY2suX2lkKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoJy9zdG9yeWJsb2Nrcy8nK3N0b3J5QmxvY2suX2lkKVxyXG4gICAgICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlVGVzdERhdGEoKSB7XHJcbiAgICAgICAgdmFyIG1vY2tEYXRhID0gU1RPUllCTE9DS1M7XHJcblxyXG4gICAgICAgIGZvcih2YXIgaT0wOyAgaTwgbW9ja0RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5odHRwLnBvc3QoJy9zdG9yeWJsb2Nrcy8nLCBKU09OLnN0cmluZ2lmeShtb2NrRGF0YVtpXSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVdGlsc1NlcnZpY2Uge1xyXG4gICAgcHVibGljIEVNQUlMX1JFR0VYID0gJ15bLWEtejAtOX4hJCVeJipfPSt9e1xcJz9dKyhcXC5bLWEtejAtOX4hJCVeJipfPSt9e1xcJz9dKykqQChbYS16MC05X11bLWEtejAtOV9dKihcXC5bLWEtejAtOV9dKykqXFwuKGFlcm98YXJwYXxiaXp8Y29tfGNvb3B8ZWR1fGdvdnxpbmZvfGludHxtaWx8bXVzZXVtfG5hbWV8bmV0fG9yZ3xwcm98dHJhdmVsfG1vYml8W2Etel1bYS16XSl8KFswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM30pKSg6WzAtOV17MSw1fSk/JCc7XHJcblxyXG5cclxuICAgIGdldFJvbWFuTnVtZXJhbChudW0pOnN0cmluZyB7XHJcbiAgICAgICAgaWYgKCErbnVtKVxyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgdmFyIGRpZ2l0cyA9IFN0cmluZygrbnVtKS5zcGxpdChcIlwiKSxcclxuICAgICAgICAgICAga2V5ID0gW1wiXCIsIFwiQ1wiLCBcIkNDXCIsIFwiQ0NDXCIsIFwiQ0RcIiwgXCJEXCIsIFwiRENcIiwgXCJEQ0NcIiwgXCJEQ0NDXCIsIFwiQ01cIixcclxuICAgICAgICAgICAgICAgIFwiXCIsIFwiWFwiLCBcIlhYXCIsIFwiWFhYXCIsIFwiWExcIiwgXCJMXCIsIFwiTFhcIiwgXCJMWFhcIiwgXCJMWFhYXCIsIFwiWENcIixcclxuICAgICAgICAgICAgICAgIFwiXCIsIFwiSVwiLCBcIklJXCIsIFwiSUlJXCIsIFwiSVZcIiwgXCJWXCIsIFwiVklcIiwgXCJWSUlcIiwgXCJWSUlJXCIsIFwiSVhcIl0sXHJcbiAgICAgICAgICAgIHJvbWFuID0gXCJcIixcclxuICAgICAgICAgICAgaSA9IDM7XHJcbiAgICAgICAgd2hpbGUgKGktLSlcclxuICAgICAgICAgICAgcm9tYW4gPSAoa2V5WytkaWdpdHMucG9wKCkgKyAoaSAqIDEwKV0gfHwgXCJcIikgKyByb21hbjtcclxuICAgICAgICByZXR1cm4gQXJyYXkoK2RpZ2l0cy5qb2luKFwiXCIpICsgMSkuam9pbihcIk1cIikgKyByb21hbjtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtVdGlsc1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QW5pbWF0aW9uQnVpbGRlcn0gZnJvbSBcImFuZ3VsYXIyL3NyYy9hbmltYXRlL2FuaW1hdGlvbl9idWlsZGVyXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdG9yeWJsb2Nrcy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3RvcnlibG9jaycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmRleFwiIChtb3VzZXdoZWVsKT1cInpvb20oKVwiIChET01Nb3VzZVNjcm9sbCk9XCJ6b29tKClcIj48c3Bhbj57e3V0aWxzU2VydmljZS5nZXRSb21hbk51bWVyYWwoaW5kZXggKyAxKX19PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj48c3BhbiBbaGlkZGVuXT1cIiFfYWN0aXZlXCIgPkE8L3NwYW4+PHNwYW4gW2hpZGRlbl09XCIhX3NlbGVjdGVkXCIgPlM8L3NwYW4+e3tzdG9yeUJsb2NrSW5mby50aXRsZX19PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7c3RvcnlCbG9ja0luZm8uZGVzY3JpcHRpb259fTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cImVkaXQoaW5kZXgsICRldmVudClcIiBjbGFzcz1cImJ1dHRvbiBpbmxpbmUtYnV0dG9uIHByaW1hcnlcIj5FZGl0PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cInJlbW92ZShpbmRleCwgJGV2ZW50KVwiIGNsYXNzPVwiYnV0dG9uIGlubGluZS1idXR0b24gYWxlcnRcIj5SZW1vdmU8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczogW1V0aWxzU2VydmljZSwgU3RvcnlCbG9ja1NlcnZpY2VdLFxyXG4gICAgaW5wdXRzOiBbJ3N0b3J5QmxvY2tJbmZvJywgJ2luZGV4J11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9yeUJsb2NrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBzdG9yeUJsb2NrSW5mbzpTdG9yeUJsb2NrO1xyXG4gICAgcHVibGljIGluZGV4O1xyXG4gICAgcHVibGljIF9hY3RpdmUgPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfYWN0aW9uVGltZW91dDtcclxuICAgIHB1YmxpYyBfc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3pvb21MZXZlbCA9IDEwO1xyXG4gICAgcHJpdmF0ZSBfcHJldmlvdXNab29tTGV2ZWwgPSAxMDtcclxuICAgIHByaXZhdGUgX3pvb21TdHJlbmd0aCA9IDU7XHJcbiAgICBwcml2YXRlIF96b29tT2Zmc2V0ID0gMjUwO1xyXG4gICAgcHJpdmF0ZSBfem9vbVN0ZXAgPSA4NTtcclxuICAgIHByaXZhdGUgX3NlbGY7XHJcblxyXG4gICAgQE91dHB1dCgpIHpvb21FdmVudDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBAT3V0cHV0KCkgZW50ZXJIZWFkZXJFdmVudDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBleGl0SGVhZGVyRXZlbnQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWI6QW5pbWF0aW9uQnVpbGRlciwgcHJpdmF0ZSBfZTpFbGVtZW50UmVmLCBwcml2YXRlIHV0aWxzU2VydmljZTpVdGlsc1NlcnZpY2UsIHB1YmxpYyBzdG9yeUJsb2NrU2VydmljZTogU3RvcnlCbG9ja1NlcnZpY2UpIHtcclxuICAgICAgICBzdG9yeUJsb2NrU2VydmljZS5nZW5lcmF0ZVRlc3REYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCB6b29tTGV2ZWwodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcHJldmlvdXNab29tTGV2ZWwgPSAodGhpcy5fcHJldmlvdXNab29tTGV2ZWwgPT0gdW5kZWZpbmVkKT8gMTA6dGhpcy5fcHJldmlvdXNab29tTGV2ZWw7XHJcbiAgICAgICAgdGhpcy5fem9vbUxldmVsID0gKHRoaXMuX3pvb21MZXZlbCA9PSB1bmRlZmluZWQpPyAxMDp0aGlzLl96b29tTGV2ZWw7XHJcbiAgICAgICAgaWYgKHRoaXMuX3pvb21MZXZlbCAhPSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1pvb21MZXZlbCA9IHRoaXMuX3pvb21MZXZlbDtcclxuICAgICAgICAgICAgdGhpcy5fem9vbUxldmVsID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbUNoYW5nZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTphbnkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUG9zaXRpb25Pblpvb20oMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgem9vbShlKSB7XHJcbiAgICAgICAgdmFyIGUgPSB3aW5kb3cuZXZlbnQgfHwgZTsgLy8gb2xkIElFIHN1cHBvcnRcclxuICAgICAgICB0aGlzLnpvb21FdmVudC5lbWl0KGUpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHpvb21DaGFuZ2VkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbU3RvcnlCbG9jayAjJyArIHRoaXMuaW5kZXggKyAnXSBab29tIGNoYW5nZWQgZnJvbSAnICsgdGhpcy5fcHJldmlvdXNab29tTGV2ZWwgKyAnIHRvICcgKyB0aGlzLl96b29tTGV2ZWwpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fem9vbUxldmVsIDwgdGhpcy5zdG9yeUJsb2NrSW5mby5pbXBvcnRhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFkZU91dCgxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVBvc2l0aW9uT25ab29tKDEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYWRlSW4oc3BlZWQ6bnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIEZhZGluZyBpbi4uLicpO1xyXG4gICAgICAgIGxldCBhbmltYXRpb24gPSB0aGlzLl9hYi5jc3MoKTtcclxuXHJcbiAgICAgICAgdmFyIGZyb21TdHlsZSA9IHt9O1xyXG4gICAgICAgIHZhciB0b1N0eWxlID0ge307XHJcblxyXG4gICAgICAgIGZyb21TdHlsZVsnZGlzcGxheSddID0gJ2ZsZXgnO1xyXG4gICAgICAgIGZyb21TdHlsZVsndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSA9ICdjdWJpYy1iZXppZXIoMC41NzUsIDAuMjU1LCAwLjQ0MCwgMC45ODUpOyc7XHJcbiAgICAgICAgdG9TdHlsZVsnb3BhY2l0eSddID0gMTtcclxuXHJcblxyXG4gICAgICAgIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAuc2V0RHVyYXRpb24oc3BlZWQpO1xyXG4gICAgICAgIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyhmcm9tU3R5bGUpXHJcbiAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh0b1N0eWxlKTtcclxuXHJcblxyXG4gICAgICAgIGlmICghIXRoaXMuX2FjdGlvblRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2FjdGlvblRpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5fYWN0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgIC5zdGFydChfc2VsZi5fZS5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZhZGVPdXQoc3BlZWQ6bnVtYmVyKSB7XHJcbiAgICAgICAgaWYodGhpcy5fYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbU3RvcnlCbG9jayAjJyArIHRoaXMuaW5kZXggKyAnXSBGYWRpbmcgb3V0Li4uWycrdGhpcy5fem9vbUxldmVsICsnPCcrIHRoaXMuc3RvcnlCbG9ja0luZm8uaW1wb3J0YW5jZSsnXScpO1xyXG4gICAgICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYWIuY3NzKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJvbVN0eWxlID0ge307XHJcbiAgICAgICAgICAgIHZhciB0b1N0eWxlID0ge307XHJcblxyXG5cclxuICAgICAgICAgICAgdG9TdHlsZVsndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSA9ICdjdWJpYy1iZXppZXIoMC41NzUsIDAuMjU1LCAwLjQ0MCwgMC45ODUpOyc7XHJcbiAgICAgICAgICAgIHRvU3R5bGVbJ29wYWNpdHknXSA9IDA7XHJcblxyXG5cclxuICAgICAgICAgICAgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICAuc2V0RHVyYXRpb24oc3BlZWQpO1xyXG4gICAgICAgICAgICBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgIC5zZXRGcm9tU3R5bGVzKGZyb21TdHlsZSlcclxuICAgICAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh0b1N0eWxlKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoISF0aGlzLl9hY3Rpb25UaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1N0b3J5QmxvY2sgIycgKyB0aGlzLmluZGV4ICsgJ10gQW5pbWF0aW9uIHJlbW92ZWQnKTtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9hY3Rpb25UaW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydChfc2VsZi5fZS5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUG9zaXRpb25Pblpvb20oc3BlZWQpIHtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYWIuY3NzKCk7XHJcbiAgICAgICAgdmFyIGZyb21TdHlsZSA9IHtcclxuICAgICAgICAgICAgdG9wOiB0aGlzLl96b29tT2Zmc2V0ICsgKCh0aGlzLl96b29tU3RlcCArICh0aGlzLl9wcmV2aW91c1pvb21MZXZlbCAqIHRoaXMuX3pvb21TdHJlbmd0aCkpICogdGhpcy5zdG9yeUJsb2NrSW5mby50aW1lUG9zaXRpb24pICsgJ3B4J1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciB0b1N0eWxlID0ge1xyXG4gICAgICAgICAgICB0b3A6IHRoaXMuX3pvb21PZmZzZXQgKyAoKHRoaXMuX3pvb21TdGVwICsgKHRoaXMuX3pvb21MZXZlbCAqIHRoaXMuX3pvb21TdHJlbmd0aCkpICogdGhpcy5zdG9yeUJsb2NrSW5mby50aW1lUG9zaXRpb24pICsgJ3B4J1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbU3RvcnlCbG9jayAjJyArIHRoaXMuaW5kZXggKyAnXSBDaGFuZ2luZyBwb3NpdGlvbiBmcm9tICcrKGZyb21TdHlsZS50b3ApKycgdG8gJysodG9TdHlsZS50b3ApKycgLi4uJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl96b29tTGV2ZWwgPiB0aGlzLnN0b3J5QmxvY2tJbmZvLmltcG9ydGFuY2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIC4uLmFuZCBmYWRpbmcgaW4gWycrdGhpcy5fem9vbUxldmVsKyc+Jyt0aGlzLnN0b3J5QmxvY2tJbmZvLmltcG9ydGFuY2UrJ10nKTtcclxuICAgICAgICAgICAgdG9TdHlsZVsnb3BhY2l0eSddID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIC4uLmFuZCBmYWRpbmcgb3V0Jyk7XHJcbiAgICAgICAgICAgIHRvU3R5bGVbJ29wYWNpdHknXSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0b1N0eWxlWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJ2N1YmljLWJlemllcigwLjU3NSwgMC4yNTUsIDAuNDQwLCAwLjk4NSk7JztcclxuXHJcblxyXG4gICAgICAgIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAuc2V0RHVyYXRpb24oc3BlZWQpO1xyXG4gICAgICAgIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyhmcm9tU3R5bGUpXHJcbiAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh0b1N0eWxlKTtcclxuXHJcblxyXG4gICAgICAgIGlmICghIXRoaXMuX2FjdGlvblRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIEFuaW1hdGlvbiByZW1vdmVkJyk7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9hY3Rpb25UaW1lb3V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuX2FjdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoX3NlbGYuX2UubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBlZGl0KGluZGV4LCBldmVudCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Nob3VsZCBlZGl0JywgaW5kZXgsIGV2ZW50KTtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYWIuY3NzKCk7XHJcblxyXG4gICAgICAgIHZhciB0b1N0eWxlID0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgdG9wOiAnMHB4JyxcclxuICAgICAgICAgICAgbGVmdDogJzBweCcsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAnMjQwcHgnLFxyXG4gICAgICAgICAgICBib3R0b206ICcwcHgnLFxyXG4gICAgICAgICAgICB3aWR0aDogJ2F1dG8nXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIC5zZXREdXJhdGlvbigxMDApO1xyXG4gICAgICAgIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAuc2V0VG9TdHlsZXModG9TdHlsZSk7XHJcblxyXG4gICAgICAgIGlmICghIXRoaXMuX2FjdGlvblRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIEFuaW1hdGlvbiByZW1vdmVkJyk7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9hY3Rpb25UaW1lb3V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuX2FjdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoX3NlbGYuX2UubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoaW5kZXgsIGV2ZW50KXtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmRlbGV0ZVN0b3J5QmxvY2sodGhpcy5zdG9yeUJsb2NrSW5mbykuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVyciksXHJcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdkb25lJylcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTaG91bGQgcmVtb3ZlJywgaW5kZXgsIGV2ZW50KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjondGltZWxpbmUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lQ29tcG9uZW50IHtcclxuICAgIFxyXG59IiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvc3RvcnlibG9ja3Muc2VydmljZVwiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2t9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9ja1wiO1xyXG5pbXBvcnQge1N0b3J5QmxvY2tDb21wb25lbnR9IGZyb20gXCIuL3N0b3J5YmxvY2suY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VGltZWxpbmVDb21wb25lbnR9IGZyb20gXCIuL3RpbWVsaW5lLmNvbXBvbmVudFwiO1xyXG4vLyBpbXBvcnQge0xvY2FsU3RvcmFnZX0gZnJvbSBcImFuZ3VsYXIyLWxvY2Fsc3RvcmFnZS9Mb2NhbFN0b3JhZ2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtY29udGVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICA8dGltZWxpbmUgY2xhc3M9XCJ0aW1lbGluZS1ibG9ja1wiPjwvdGltZWxpbmU+XHJcbiAgICAgICAgICAgIDxkaXYgKGRvY3VtZW50OnNjcm9sbCk9XCJvblNjcm9sbCgkZXZlbnQpXCIgY2xhc3M9XCJzdG9yeS1ibG9ja3NcIj5cclxuICAgICAgICAgICAgICAgIDxzdG9yeWJsb2NrICpuZ0Zvcj1cIiNzdG9yeUJsb2NrIG9mIHN0b3J5QmxvY2tzOyAjaSA9IGluZGV4XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW2luZGV4XT1cImlcIiBcclxuICAgICAgICAgICAgICAgICAgICBbc3RvcnlCbG9ja0luZm9dPVwic3RvcnlCbG9ja1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIFt6b29tTGV2ZWxdPVwiem9vbUxldmVsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgKHpvb21FdmVudCk9XCJvbk1vdXNlV2hlZWwoJGV2ZW50KVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIChlbnRlckhlYWRlckV2ZW50KT1cInJlcXVlc3RTZWxlY3Rpb24oJGV2ZW50KVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIChleGl0SGVhZGVyRXZlbnQpPVwicmVxdWVzdERlc2VsZWN0aW9uKCRldmVudClcIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0b3J5LWJsb2NrXCI+PC9zdG9yeWJsb2NrPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAobW91c2V3aGVlbCk9XCJvbk1vdXNlV2hlZWwoKVwiIChET01Nb3VzZVNjcm9sbCk9XCJvbk1vdXNlV2hlZWwoKVwiIGNsYXNzPVwidGltZWxpbmVcIj48L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPGFzaWRlPlxyXG4gICAgICAgICAgICBTaWRlYmFyXHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtTdG9yeUJsb2NrU2VydmljZV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbU3RvcnlCbG9ja0NvbXBvbmVudCwgVGltZWxpbmVDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBzdG9yeUJsb2NrczpTdG9yeUJsb2NrW107XHJcbiAgICBAT3V0cHV0KCkgc2Nyb2xsV2hlZWw6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICB6b29tTGV2ZWwgPSAxMDtcclxuICAgIHB1YmxpYyBzZWxlY3RlZEluZGV4ID0gMDtcclxuICAgIHNjcm9sbFZhbHVlID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRCbG9jazpTdG9yeUJsb2NrO1xyXG4gICAgcHVibGljIHRva2VuOnN0cmluZyA9ICcnO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3J5QmxvY2tTZXJ2aWNlOlN0b3J5QmxvY2tTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTphbnkge1xyXG4gICAgICAgIHRoaXMuZ2V0U3RvcnlCbG9ja3MoKTtcclxuICAgICAgICB0aGlzLnpvb21MZXZlbCA9IDEwO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxWYWx1ZSA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0b3J5QmxvY2tzKCkge1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja1NlcnZpY2UuZ2V0U3RvcnlCbG9ja3MoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2NrcyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQmxvY2sgPSB0aGlzLnN0b3J5QmxvY2tzW3RoaXMuc2VsZWN0ZWRJbmRleF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2RvbmUsIGxvYWRlZCAnK3RoaXMuc3RvcnlCbG9ja3MubGVuZ3RoICsnIGJsb2NrcycpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZVdoZWVsKGUpIHtcclxuICAgICAgICB2YXIgZSA9IHdpbmRvdy5ldmVudCB8fCBlOyAvLyBvbGQgSUUgc3VwcG9ydFxyXG4gICAgICAgIHZhciBkZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCAoZS53aGVlbERlbHRhIHx8IC1lLmRldGFpbCkpKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnWm9vbWVkLCBvbGQgem9vbUxldmVsIGlzICcgKyB0aGlzLnpvb21MZXZlbCArICcgYW5kIGRlbHRhIGlzICcgKyBkZWx0YSk7XHJcbiAgICAgICAgaWYgKCh0aGlzLnpvb21MZXZlbCA+IDAgJiYgZGVsdGEgPCAwKSB8fCAodGhpcy56b29tTGV2ZWwgPCAxMCAmJiBkZWx0YSA+IDApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbUxldmVsICs9IChkZWx0YSAqIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNjcm9sbChlKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxWYWx1ZSA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RTZWxlY3Rpb24oYmxvY2spIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ICE9IGJsb2NrLmluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGJsb2NrLmluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQmxvY2sgPSB0aGlzLnN0b3J5QmxvY2tzW3RoaXMuc2VsZWN0ZWRJbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3REZXNlbGVjdGlvbihibG9jaykge1xyXG4gICAgICAgIGlmIChibG9jay5pbmRleCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gYmxvY2suaW5kZXggLSAxO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQmxvY2sgPSB0aGlzLnN0b3J5QmxvY2tzW3RoaXMuc2VsZWN0ZWRJbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cclxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xyXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9hcHAtY29udGVudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMgfSAgICBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtIVFRQX1BST1ZJREVSU10pO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
