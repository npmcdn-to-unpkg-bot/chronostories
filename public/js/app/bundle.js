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
                    blockId: 2,
                    title: 'First block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 2,
                    importance: -1,
                    blockNumber: 0,
                    type: 'chapter'
                },
                {
                    blockId: 3,
                    title: 'Second block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 3,
                    importance: 1,
                    blockNumber: 1,
                    type: 'chapter'
                },
                {
                    blockId: 5,
                    title: 'Third block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 5,
                    importance: -1,
                    blockNumber: 2,
                    type: 'chapter'
                },
                {
                    blockId: 6,
                    title: 'Fourth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 6,
                    importance: 5,
                    blockNumber: 3,
                    type: 'chapter'
                },
                {
                    blockId: 7,
                    title: 'Fifth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 7,
                    importance: 3,
                    blockNumber: 4,
                    type: 'chapter'
                },
                {
                    blockId: 10,
                    title: 'Sixth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 10,
                    importance: 11,
                    blockNumber: 5,
                    type: 'chapter'
                },
                {
                    blockId: 12,
                    title: 'Seventh block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 12,
                    importance: 9,
                    blockNumber: 6,
                    type: 'chapter'
                },
                {
                    blockId: 15,
                    title: 'Eighth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 15,
                    importance: 8,
                    blockNumber: 7,
                    type: 'chapter'
                },
                {
                    blockId: 16,
                    title: 'Ninth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 16,
                    importance: 3,
                    blockNumber: 8,
                    type: 'chapter'
                },
                {
                    blockId: 17,
                    title: 'Tenth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 17,
                    importance: 2,
                    blockNumber: 9,
                    type: 'chapter'
                },
                {
                    blockId: 19,
                    title: 'Eleventh block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 19,
                    importance: 11,
                    blockNumber: 10,
                    type: 'chapter'
                },
                {
                    blockId: 21,
                    title: 'Twelfth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 21,
                    importance: 7,
                    blockNumber: 11,
                    type: 'chapter'
                },
                {
                    blockId: 22,
                    title: 'Thirteenth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 22,
                    importance: 2,
                    blockNumber: 12,
                    type: 'chapter'
                },
                {
                    blockId: 25,
                    title: 'Fourteenth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 25,
                    importance: 7,
                    blockNumber: 13,
                    type: 'chapter'
                },
                {
                    blockId: 27,
                    title: 'Fifteenth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 27,
                    importance: 5,
                    blockNumber: 14,
                    type: 'chapter'
                },
                {
                    blockId: 28,
                    title: 'Sixteenth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 28,
                    importance: 5,
                    blockNumber: 15,
                    type: 'chapter'
                },
                {
                    blockId: 29,
                    title: 'Seventeenth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 29,
                    importance: 3,
                    blockNumber: 16,
                    type: 'chapter'
                },
                {
                    blockId: 30,
                    title: 'Eighteenth block',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a risus vitae sem pulvinar aliquam. Etiam commodo rutrum pellentesque. Quisque rhoncus lectus et posuere lobortis. Sed sodales ornare vestibulum. Aenean egestas velit risus, lacinia accumsan dolor luctus eu. Maecenas non tortor ultrices, feugiat arcu id, semper odio. Donec sit amet dui sit amet turpis lacinia porta vel nec ipsum. Nullam tempor metus eu ex mattis, vel pulvinar odio efficitur. Donec efficitur felis sit amet lorem laoreet euismod. Cras elementum enim enim, vel convallis sem egestas at. Integer at tortor eu enim tempus tincidunt ac in velit.',
                    timePosition: 30,
                    importance: -1,
                    blockNumber: 17,
                    type: 'chapter'
                },
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
                StoryBlockService.prototype.generateTestData = function () {
                    console.log('Creating temporary data');
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/x-www-form-urlencoded'
                    });
                    var options = new http_1.RequestOptions({
                        headers: headers
                    });
                    this.http.post(this.configuration.apiBasePath + '/storyblocks/', "data=" + JSON.stringify(mock_storyblocks_1.STORYBLOCKS), options).map(function (res) { return res.text(); }).subscribe();
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
                        template: "\n        <div class=\"index\"><span *ngIf=\"storyBlockInfo.type == 'chapter'\">{{utilsService.getRomanNumeral(storyBlockInfo.blockNumber + 1)}}</span></div>\n        <div class=\"text-container\">\n            <input class=\"title\" [attr.readonly]=\"_exposed ? null : true\" [(ngModel)]=\"storyBlockInfo.title\" placeholder=\"Insert a title\" />\n            <textarea class=\"description\" [attr.readonly]=\"_exposed ? null : true\" [(ngModel)]=\"storyBlockInfo.description\" placeholder=\"Start writing your story here...\"></textarea>\n            <div class=\"default-actions\">\n                <a (click)=\"edit(index, $event)\" class=\"button inline-button primary\">Edit</a>\n                <a (click)=\"remove(index, $event)\" class=\"button inline-button alert\">Remove</a>\n            </div>\n            <div class=\"exposed-actions\">\n                <a (click)=\"save(index, $event)\" class=\"button inline-button primary\">Save</a>\n                <a (click)=\"close()\" class=\"button inline-button secondary\">Close</a>\n            </div>\n        </div>\n    ",
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
                    this._error = false;
                    this._success = false;
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
                NotificationComponent.prototype.success = function (content) {
                    this._error = false;
                    this._success = true;
                    this.show(content);
                };
                NotificationComponent.prototype.error = function (content) {
                    this._error = true;
                    this._success = false;
                    this.show(content);
                };
                NotificationComponent.prototype.message = function (content) {
                    this._error = false;
                    this._success = false;
                    this.show(content);
                };
                NotificationComponent = __decorate([
                    core_7.Component({
                        selector: 'notification',
                        template: "\n        <div [ngClass]=\"{error: _error, success: _success}\">{{ _content\u00A0}}</div>\n    "
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
                SidebarComponent = __decorate([
                    core_8.Component({
                        selector: 'sidebar',
                        template: "\n        <div class=\"sidebar-action\" *ngIf=\"_index == -1\">\n            <a class=\"create-storyblock\" draggable=\"true\" (dragstart)=\"dragStart($event)\" (dragend)=\"dragEnd($event)\">Create storyblock</a>\n        </div>\n        <div class=\"sidebar-action\" *ngIf=\"_index >= 0 && !!_storyBlock\">\n            <div class=\"form-group\">\n                <label>Storyblock type</label>\n                <div class=\"select-wrapper\">\n                    <select [(ngModel)]=\"_storyBlock.type\">\n                        <option *ngFor=\"#storyBlockType of storyBlockTypes\" value={{storyBlockType.id}}>{{storyBlockType.name}}</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n    ",
                        inputs: ['storyBlock']
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
                    console.log(JSON.stringify(this.form.value));
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
                        _this.recalculateStoryBlockNumbers();
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
                    var tmpArrayPos = undefined;
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
                    if ((notification || {}).type == 'error') {
                        this.notificationComponent.error(notification.message || '');
                    }
                    else if ((notification || {}).type == 'success') {
                        this.notificationComponent.success(notification.message || '');
                    }
                    else {
                        this.notificationComponent.message(notification.message || '');
                    }
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
                        template: "\n        <main>\n            <timeline class=\"timeline-block\"></timeline>\n            <div class=\"story-blocks\">\n                <storyblock *ngFor=\"#storyBlock of storyBlocks; #i = index\" \n                    [index]=\"i\" \n                    [storyBlockInfo]=\"storyBlock\" \n                    [zoomLevel]=\"zoomLevel\"\n                    [userId]=\"userId\"\n                    [exposedIndex]=\"exposedIndex\"\n                    [ngClass]=\"{exposed: exposedIndex == i}\"\n                    (removeStoryBlockEvent)=\"removeStoryBlock($event)\" \n                    (exposeEvent)=\"setExposed($event)\"\n                    (notify)=\"notify($event)\"\n                    class=\"story-block {{ storyBlock.type\u00A0}}\"></storyblock>\n            </div>\n            <div class=\"timeline\"\n                (click)=\"addStoryBlock($event)\"\n                (mouseenter)=\"onMouseEnter($event)\"\n                (mouseleave)=\"onMouseLeave($event)\"\n                (mousemove)=\"onMouseMove($event)\">\n                <add-button *ngIf=\"addButton.visible\"\n                    [offsetY]=\"addButton.top\"\n                    (click)=\"addStoryBlock($event)\"></add-button>\n            </div>\n            <div id=\"controls\">\n                <div id=\"zoom-controls\">              \n                    <a title=\"Zoom in\" (click)=\"zoomIn()\">+</a>  \n                    <a title=\"Zoom out\" (click)=\"zoomOut()\">&ndash;</a>                \n                </div>            \n            </div>\n        </main>\n        <aside [ngClass]=\"{visible: menuVisible}\">\n            <sidebar\n            (startDragging)=\"toggleMenu(false)\"\n            (endDragging)=\"addStoryBlock($event)\"\n            [storyBlock]=\"exposedStoryBlock\"></sidebar>\n            <a class=\"user-aside\" (click)=\"downloadPdf()\">Download PDF</a>\n            <a class=\"user-aside\" *ngIf=\"!isLoggedIn()\" (click)=\"showAccessForm()\">Login/Signup</a>\n            <a class=\"user-aside\" *ngIf=\"isLoggedIn()\" (click)=\"logOut()\">Logout</a>\n            <a id=\"close-menu\" (click)=\"toggleMenu(false)\"></a>\n        </aside>\n        <header><a id=\"burger\" (click)=\"toggleMenu(true)\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a></header>\n        <auth-form \n            *ngIf=\"accessFormVisible\" \n            (closeModal)=\"hideAccessForm()\"\n            (notify)=\"notify($event)\"\n            (authStatus)=\"authStatusChanged($event)\"\n            ></auth-form>\n        <notification></notification>\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2svbW9jay1zdG9yeWJsb2Nrcy50cyIsIm1vY2svbW9jay1zdG9yeWJsb2NrLXR5cGVzLnRzIiwiY29uZmlnL2NvbmZpZ3VyYXRpb24udHMiLCJzZXJ2aWNlcy9zdG9yeWJsb2Nrcy5zZXJ2aWNlLnRzIiwic2VydmljZXMvdXRpbHMuc2VydmljZS50cyIsImNvbXBvbmVudHMvc3RvcnlibG9jay5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3RpbWVsaW5lLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvYWRkLWJ1dHRvbi5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL25vdGlmaWNhdGlvbi5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3NpZGViYXIuY29tcG9uZW50LnRzIiwibW9kZWxzL3VzZXIudHMiLCJzZXJ2aWNlcy93ZWJzdG9yYWdlLnNlcnZpY2UudHMiLCJzZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiLCJzZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UudHMiLCJjb21wb25lbnRzL3NpZ25pbi1mb3JtLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvc2lnbnVwLWZvcm0uY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9hdXRoLWZvcm0uY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9hcHAtY29udGVudC5jb21wb25lbnQudHMiLCJib290LnRzIiwiZGlyZWN0aXZlcy9jb2xsYXBzZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRWEsV0FBVzs7OztZQUFYLHlCQUFBLFdBQVcsR0FBOEI7Z0JBQ2xEO29CQUNJLE9BQU8sRUFBRSxDQUFDO29CQUNWLEtBQUssRUFBRSxhQUFhO29CQUNwQixXQUFXLEVBQUUsa25CQUFrbkI7b0JBQy9uQixZQUFZLEVBQUUsQ0FBQztvQkFDZixVQUFVLEVBQUUsQ0FBQyxDQUFDO29CQUNkLFdBQVcsRUFBQyxDQUFDO29CQUNiLElBQUksRUFBQyxT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N0MsYUFBYSxDQUFDOzRCQUNYLE1BQU0sRUFBRSxHQUFHO3lCQUNkLENBQUM7NkJBQ0QsV0FBVyxDQUFDOzRCQUNULE1BQU0sRUFBRSxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsSUFBSTt5QkFDckQsQ0FBQzs2QkFDRCxLQUFLLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjt3QkFFMUQsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxjQUFPLE9BQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFoQyxDQUFnQyxDQUFFLENBQUM7b0JBQzNELENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUM7Z0JBaEVEO29CQUFDLGFBQUssRUFBRTs7MERBQUE7Z0JBTFo7b0JBQUMsaUJBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsWUFBWTtxQkFDekIsQ0FBQzs7NEJBQUE7Z0JBb0VGLGVBQUM7WUFBRCxDQWxFQSxBQWtFQyxJQUFBO1lBbEVELGdDQWtFQyxDQUFBIiwiZmlsZSI6Ii4uLy4uLy4uL2FuZ3VsYXJhdHRhY2syMDE2LWNocm9ub3N0b3JpZXMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdG9yeUJsb2NrfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2tcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTVE9SWUJMT0NLUzpTdG9yeUJsb2NrW10gPSA8U3RvcnlCbG9ja1tdPltcclxuICAgIHtcclxuICAgICAgICBibG9ja0lkOiAyLFxyXG4gICAgICAgIHRpdGxlOiAnRmlyc3QgYmxvY2snLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDIsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogLTEsXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6MCxcclxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBibG9ja0lkOiAzLFxyXG4gICAgICAgIHRpdGxlOiAnU2Vjb25kIGJsb2NrJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiAzLFxyXG4gICAgICAgIGltcG9ydGFuY2U6IDEsXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6MSxcclxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBibG9ja0lkOiA1LFxyXG4gICAgICAgIHRpdGxlOiAnVGhpcmQgYmxvY2snLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDUsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogLTEsXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6MixcclxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBibG9ja0lkOjYsXHJcbiAgICAgICAgdGl0bGU6ICdGb3VydGggYmxvY2snLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDYsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogNSxcclxuICAgICAgICBibG9ja051bWJlcjozLFxyXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGJsb2NrSWQ6IDcsXHJcbiAgICAgICAgdGl0bGU6ICdGaWZ0aCBibG9jaycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxyXG4gICAgICAgIHRpbWVQb3NpdGlvbjogNyxcclxuICAgICAgICBpbXBvcnRhbmNlOiAzLFxyXG4gICAgICAgIGJsb2NrTnVtYmVyOjQsXHJcbiAgICAgICAgdHlwZTonY2hhcHRlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgYmxvY2tJZDogMTAsXHJcbiAgICAgICAgdGl0bGU6ICdTaXh0aCBibG9jaycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxyXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMTAsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogMTEsXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6NSxcclxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBibG9ja0lkOiAxMixcclxuICAgICAgICB0aXRsZTogJ1NldmVudGggYmxvY2snLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDEyLFxyXG4gICAgICAgIGltcG9ydGFuY2U6IDksXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6NixcclxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBibG9ja0lkOiAxNSxcclxuICAgICAgICB0aXRsZTogJ0VpZ2h0aCBibG9jaycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxyXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMTUsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogOCxcclxuICAgICAgICBibG9ja051bWJlcjo3LFxyXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGJsb2NrSWQ6IDE2LFxyXG4gICAgICAgIHRpdGxlOiAnTmludGggYmxvY2snLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDE2LFxyXG4gICAgICAgIGltcG9ydGFuY2U6IDMsXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6OCxcclxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBibG9ja0lkOiAxNyxcclxuICAgICAgICB0aXRsZTogJ1RlbnRoIGJsb2NrJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiAxNyxcclxuICAgICAgICBpbXBvcnRhbmNlOiAyLFxyXG4gICAgICAgIGJsb2NrTnVtYmVyOjksXHJcbiAgICAgICAgdHlwZTonY2hhcHRlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgYmxvY2tJZDogMTksXHJcbiAgICAgICAgdGl0bGU6ICdFbGV2ZW50aCBibG9jaycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxyXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMTksXHJcbiAgICAgICAgaW1wb3J0YW5jZTogMTEsXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6MTAsXHJcbiAgICAgICAgdHlwZTonY2hhcHRlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgYmxvY2tJZDogMjEsXHJcbiAgICAgICAgdGl0bGU6ICdUd2VsZnRoIGJsb2NrJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXHJcbiAgICAgICAgdGltZVBvc2l0aW9uOiAyMSxcclxuICAgICAgICBpbXBvcnRhbmNlOiA3LFxyXG4gICAgICAgIGJsb2NrTnVtYmVyOjExLFxyXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGJsb2NrSWQ6IDIyLFxyXG4gICAgICAgIHRpdGxlOiAnVGhpcnRlZW50aCBibG9jaycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxyXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMjIsXHJcbiAgICAgICAgaW1wb3J0YW5jZTogMixcclxuICAgICAgICBibG9ja051bWJlcjoxMixcclxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBibG9ja0lkOiAyNSxcclxuICAgICAgICB0aXRsZTogJ0ZvdXJ0ZWVudGggYmxvY2snLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDI1LFxyXG4gICAgICAgIGltcG9ydGFuY2U6IDcsXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6MTMsXHJcbiAgICAgICAgdHlwZTonY2hhcHRlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgYmxvY2tJZDogMjcsXHJcbiAgICAgICAgdGl0bGU6ICdGaWZ0ZWVudGggYmxvY2snLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDI3LFxyXG4gICAgICAgIGltcG9ydGFuY2U6IDUsXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6MTQsXHJcbiAgICAgICAgdHlwZTonY2hhcHRlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgYmxvY2tJZDogMjgsXHJcbiAgICAgICAgdGl0bGU6ICdTaXh0ZWVudGggYmxvY2snLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDI4LFxyXG4gICAgICAgIGltcG9ydGFuY2U6IDUsXHJcbiAgICAgICAgYmxvY2tOdW1iZXI6MTUsXHJcbiAgICAgICAgdHlwZTonY2hhcHRlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgYmxvY2tJZDogMjksXHJcbiAgICAgICAgdGl0bGU6ICdTZXZlbnRlZW50aCBibG9jaycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxyXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMjksXHJcbiAgICAgICAgaW1wb3J0YW5jZTogMyxcclxuICAgICAgICBibG9ja051bWJlcjoxNixcclxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBibG9ja0lkOiAzMCxcclxuICAgICAgICB0aXRsZTogJ0VpZ2h0ZWVudGggYmxvY2snLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcclxuICAgICAgICB0aW1lUG9zaXRpb246IDMwLFxyXG4gICAgICAgIGltcG9ydGFuY2U6IC0xLFxyXG4gICAgICAgIGJsb2NrTnVtYmVyOjE3LFxyXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXHJcbiAgICB9LFxyXG5dOyIsImltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1R5cGV9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9jay10eXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU1RPUllCTE9DS19UWVBFUzpTdG9yeUJsb2NrVHlwZVtdID0gPFN0b3J5QmxvY2tUeXBlW10+W1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAnY2hhcHRlcicsXHJcbiAgICAgICAgbmFtZTogJ0NoYXB0ZXInLFxyXG4gICAgICAgIGxldmVsOiAwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAncGFyYWdyYXBoJyxcclxuICAgICAgICBuYW1lOiAnUGFyYWdyYXBoJyxcclxuICAgICAgICBsZXZlbDogMVxyXG4gICAgfSxcclxuXTsiLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIHtcclxuICAgIHB1YmxpYyB6b29tID0ge1xyXG4gICAgICAgIG9mZnNldDogMCxcclxuICAgICAgICBzdGVwOiAxNTAsXHJcbiAgICAgICAgc3RyZW5ndGg6IDEwXHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyB0b2tlbiA9IHtcclxuICAgICAgICBuYW1lOiAndG9rZW4nLFxyXG4gICAgICAgIGV4cGlyYXRpb246ICgzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDApXHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBhcGlCYXNlUGF0aCA9ICdodHRwczovL2FhMjAxNi1jaHJvbm9zdG9yaWVzLmhlcm9rdWFwcC5jb20nXHJcbn0iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQge1N0b3J5QmxvY2t9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9ja1wiO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zaGFyZSc7XHJcbmltcG9ydCB7T2JzZXJ2ZXJ9IGZyb20gJ3J4anMvT2JzZXJ2ZXInO1xyXG5pbXBvcnQge1NUT1JZQkxPQ0tTfSBmcm9tIFwiLi4vbW9jay9tb2NrLXN0b3J5YmxvY2tzXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1R5cGV9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9jay10eXBlXCI7XHJcbmltcG9ydCB7U1RPUllCTE9DS19UWVBFU30gZnJvbSBcIi4uL21vY2svbW9jay1zdG9yeWJsb2NrLXR5cGVzXCI7XHJcbmltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcbmRlY2xhcmUgdmFyIHBkZk1ha2U6IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0b3J5QmxvY2tTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX2V4cG9zZWRJbmRleCA9IC0xO1xyXG4gICAgaW5kZXhDaGFuZ2UkOiBPYnNlcnZhYmxlPG51bWJlcj47XHJcbiAgICBwcml2YXRlIF9vYnNlcnZlcjogT2JzZXJ2ZXI8bnVtYmVyPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDpIdHRwLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMuaW5kZXhDaGFuZ2UkID0gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT5cclxuICAgICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBvYnNlcnZlcikuc2hhcmUoKTtcclxuICAgIH1cclxuICAgIGNoYW5nZUV4cG9zZWRJbmRleChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuX2V4cG9zZWRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuX29ic2VydmVyLm5leHQoaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgZ2V0RXhwb3NlZEluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHBvc2VkSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RvcnlCbG9ja3ModXNlcklkKTpPYnNlcnZhYmxlPFN0b3J5QmxvY2tbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvc3RvcnlibG9ja3MvJyt1c2VySWQpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVTdG9yeUJsb2NrKHVzZXJJZCwgc3RvcnlCbG9jazpTdG9yeUJsb2NrKTpPYnNlcnZhYmxlPFN0b3J5QmxvY2s+IHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoISFzdG9yeUJsb2NrLl9pZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpQmFzZVBhdGggKyAnL3N0b3J5YmxvY2tzLycgKyB1c2VySWQgKyAnLycgKyBzdG9yeUJsb2NrLl9pZCwgXCJkYXRhPVwiICsgSlNPTi5zdHJpbmdpZnkoc3RvcnlCbG9jayksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpQmFzZVBhdGggKyAnL3N0b3J5YmxvY2tzLycrdXNlcklkICsnLycgLCBcImRhdGE9XCIgKyBKU09OLnN0cmluZ2lmeShzdG9yeUJsb2NrKSwgb3B0aW9ucylcclxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVTdG9yeUJsb2NrKHVzZXJJZCwgc3RvcnlCbG9jazpTdG9yeUJsb2NrKTpPYnNlcnZhYmxlPFN0b3J5QmxvY2tbXT4ge1xyXG4gICAgICAgIGlmICghIXN0b3J5QmxvY2suX2lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvc3RvcnlibG9ja3MvJyArIHVzZXJJZCArICcvJyArIHN0b3J5QmxvY2suX2lkKVxyXG4gICAgICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0b3J5QmxvY2tUeXBlcygpOlN0b3J5QmxvY2tUeXBlW10ge1xyXG4gICAgICAgIHJldHVybiBTVE9SWUJMT0NLX1RZUEVTO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0b3J5QmxvY2tEZWZhdWx0VHlwZXMoKTpTdG9yeUJsb2NrVHlwZVtdIHtcclxuICAgICAgICByZXR1cm4gU1RPUllCTE9DS19UWVBFUztcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVRlc3REYXRhKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyB0ZW1wb3JhcnkgZGF0YScpO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5odHRwLnBvc3QodGhpcy5jb25maWd1cmF0aW9uLmFwaUJhc2VQYXRoICsgJy9zdG9yeWJsb2Nrcy8nLCBcImRhdGE9XCIgKyBKU09OLnN0cmluZ2lmeShTVE9SWUJMT0NLUyksIG9wdGlvbnMpLm1hcChyZXMgPT4gcmVzLnRleHQoKSkuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRQZGYoc3RvcnlCbG9ja3M6U3RvcnlCbG9ja1tdKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gY29tcGFyZShhOlN0b3J5QmxvY2ssIGI6U3RvcnlCbG9jaykge1xyXG4gICAgICAgICAgICBpZiAoYS50aW1lUG9zaXRpb24gPCBiLnRpbWVQb3NpdGlvbilcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoYS50aW1lUG9zaXRpb24gPiBiLnRpbWVQb3NpdGlvbilcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0b3J5QmxvY2tzLnNvcnQoY29tcGFyZSk7XHJcblxyXG5cclxuICAgICAgICB2YXIgZG9jRGVmaW5pdGlvbiA9IHtcclxuICAgICAgICAgICAgY29udGVudDogW10sXHJcblxyXG4gICAgICAgICAgICBzdHlsZXM6IHtcclxuICAgICAgICAgICAgICAgIGNoYXB0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9sZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhcmFncmFwaDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICAgICAgICBib2xkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0b3J5QmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRvY0RlZmluaXRpb24uY29udGVudC5wdXNoKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHN0b3J5QmxvY2tzW2ldLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBzdG9yeUJsb2Nrc1tpXS50eXBlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRvY0RlZmluaXRpb24uY29udGVudC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgc3RvcnlCbG9ja3NbaV0uZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBkZk1ha2UuY3JlYXRlUGRmKGRvY0RlZmluaXRpb24pLmRvd25sb2FkKCk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFV0aWxzU2VydmljZSB7XHJcbiAgICBwdWJsaWMgRU1BSUxfUkVHRVggPSAnXlstYS16MC05fiEkJV4mKl89K317XFwnP10rKFxcLlstYS16MC05fiEkJV4mKl89K317XFwnP10rKSpAKFthLXowLTlfXVstYS16MC05X10qKFxcLlstYS16MC05X10rKSpcXC4oYWVyb3xhcnBhfGJpenxjb218Y29vcHxlZHV8Z292fGluZm98aW50fG1pbHxtdXNldW18bmFtZXxuZXR8b3JnfHByb3x0cmF2ZWx8bW9iaXxbYS16XVthLXpdKXwoWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfSkpKDpbMC05XXsxLDV9KT8kJztcclxuXHJcblxyXG4gICAgZ2V0Um9tYW5OdW1lcmFsKG51bSk6c3RyaW5nIHtcclxuICAgICAgICBpZiAoIStudW0pXHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB2YXIgZGlnaXRzID0gU3RyaW5nKCtudW0pLnNwbGl0KFwiXCIpLFxyXG4gICAgICAgICAgICBrZXkgPSBbXCJcIiwgXCJDXCIsIFwiQ0NcIiwgXCJDQ0NcIiwgXCJDRFwiLCBcIkRcIiwgXCJEQ1wiLCBcIkRDQ1wiLCBcIkRDQ0NcIiwgXCJDTVwiLFxyXG4gICAgICAgICAgICAgICAgXCJcIiwgXCJYXCIsIFwiWFhcIiwgXCJYWFhcIiwgXCJYTFwiLCBcIkxcIiwgXCJMWFwiLCBcIkxYWFwiLCBcIkxYWFhcIiwgXCJYQ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJcIiwgXCJJXCIsIFwiSUlcIiwgXCJJSUlcIiwgXCJJVlwiLCBcIlZcIiwgXCJWSVwiLCBcIlZJSVwiLCBcIlZJSUlcIiwgXCJJWFwiXSxcclxuICAgICAgICAgICAgcm9tYW4gPSBcIlwiLFxyXG4gICAgICAgICAgICBpID0gMztcclxuICAgICAgICB3aGlsZSAoaS0tKVxyXG4gICAgICAgICAgICByb21hbiA9IChrZXlbK2RpZ2l0cy5wb3AoKSArIChpICogMTApXSB8fCBcIlwiKSArIHJvbWFuO1xyXG4gICAgICAgIHJldHVybiBBcnJheSgrZGlnaXRzLmpvaW4oXCJcIikgKyAxKS5qb2luKFwiTVwiKSArIHJvbWFuO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge1V0aWxzU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBbmltYXRpb25CdWlsZGVyfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2FuaW1hdGUvYW5pbWF0aW9uX2J1aWxkZXJcIjtcclxuaW1wb3J0IHtTdG9yeUJsb2NrfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2tcIjtcclxuaW1wb3J0IHtTdG9yeUJsb2NrU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0b3J5YmxvY2tzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzdG9yeWJsb2NrJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImluZGV4XCI+PHNwYW4gKm5nSWY9XCJzdG9yeUJsb2NrSW5mby50eXBlID09ICdjaGFwdGVyJ1wiPnt7dXRpbHNTZXJ2aWNlLmdldFJvbWFuTnVtZXJhbChzdG9yeUJsb2NrSW5mby5ibG9ja051bWJlciArIDEpfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInRpdGxlXCIgW2F0dHIucmVhZG9ubHldPVwiX2V4cG9zZWQgPyBudWxsIDogdHJ1ZVwiIFsobmdNb2RlbCldPVwic3RvcnlCbG9ja0luZm8udGl0bGVcIiBwbGFjZWhvbGRlcj1cIkluc2VydCBhIHRpdGxlXCIgLz5cclxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZGVzY3JpcHRpb25cIiBbYXR0ci5yZWFkb25seV09XCJfZXhwb3NlZCA/IG51bGwgOiB0cnVlXCIgWyhuZ01vZGVsKV09XCJzdG9yeUJsb2NrSW5mby5kZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiU3RhcnQgd3JpdGluZyB5b3VyIHN0b3J5IGhlcmUuLi5cIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVmYXVsdC1hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwiZWRpdChpbmRleCwgJGV2ZW50KVwiIGNsYXNzPVwiYnV0dG9uIGlubGluZS1idXR0b24gcHJpbWFyeVwiPkVkaXQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwicmVtb3ZlKGluZGV4LCAkZXZlbnQpXCIgY2xhc3M9XCJidXR0b24gaW5saW5lLWJ1dHRvbiBhbGVydFwiPlJlbW92ZTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBvc2VkLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJzYXZlKGluZGV4LCAkZXZlbnQpXCIgY2xhc3M9XCJidXR0b24gaW5saW5lLWJ1dHRvbiBwcmltYXJ5XCI+U2F2ZTwvYT5cclxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJjbG9zZSgpXCIgY2xhc3M9XCJidXR0b24gaW5saW5lLWJ1dHRvbiBzZWNvbmRhcnlcIj5DbG9zZTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOiBbVXRpbHNTZXJ2aWNlLCBTdG9yeUJsb2NrU2VydmljZV0sXHJcbiAgICBpbnB1dHM6IFsnc3RvcnlCbG9ja0luZm8nLCAnaW5kZXgnICwgJ3VzZXJJZCddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcnlCbG9ja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgc3RvcnlCbG9ja0luZm86U3RvcnlCbG9jaztcclxuICAgIHByaXZhdGUgdXNlcklkO1xyXG4gICAgcHVibGljIGluZGV4O1xyXG4gICAgcHVibGljIF9leHBvc2VkID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgX2FjdGl2ZSA9IHRydWU7XHJcbiAgICBwcml2YXRlIF9hY3Rpb25UaW1lb3V0O1xyXG4gICAgcHVibGljIF9zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfem9vbUxldmVsID0gMTA7XHJcbiAgICBwcml2YXRlIF9wcmV2aW91c1pvb21MZXZlbCA9IDEwO1xyXG4gICAgcHJpdmF0ZSBzdG9yeUJsb2NrTG9jYWxTYXZlOlN0b3J5QmxvY2s7XHJcblxyXG4gICAgQE91dHB1dCgpIHpvb21FdmVudDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBleHBvc2VFdmVudDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSByZW1vdmVTdG9yeUJsb2NrRXZlbnQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgbm90aWZ5OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FiOkFuaW1hdGlvbkJ1aWxkZXIsIHByaXZhdGUgX2U6RWxlbWVudFJlZiwgcHJpdmF0ZSB1dGlsc1NlcnZpY2U6VXRpbHNTZXJ2aWNlLCBwdWJsaWMgc3RvcnlCbG9ja1NlcnZpY2U6U3RvcnlCbG9ja1NlcnZpY2UsIHByaXZhdGUgY29uZmlndXJhdGlvbjpDb25maWd1cmF0aW9uKSB7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCB6b29tTGV2ZWwodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcHJldmlvdXNab29tTGV2ZWwgPSAodGhpcy5fcHJldmlvdXNab29tTGV2ZWwgPT0gdW5kZWZpbmVkKSA/IDEwIDogdGhpcy5fcHJldmlvdXNab29tTGV2ZWw7XHJcbiAgICAgICAgdGhpcy5fem9vbUxldmVsID0gKHRoaXMuX3pvb21MZXZlbCA9PSB1bmRlZmluZWQpID8gMTAgOiB0aGlzLl96b29tTGV2ZWw7XHJcbiAgICAgICAgaWYgKHRoaXMuX3pvb21MZXZlbCAhPSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1pvb21MZXZlbCA9IHRoaXMuX3pvb21MZXZlbDtcclxuICAgICAgICAgICAgdGhpcy5fem9vbUxldmVsID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbUNoYW5nZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCBleHBvc2VkSW5kZXgodmFsdWU6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLl9leHBvc2VkID0gKHZhbHVlID09IHRoaXMuaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHtcclxuICAgICAgICB0aGlzLmNoYW5nZVBvc2l0aW9uT25ab29tKDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHpvb20oZSkge1xyXG4gICAgICAgIHZhciBlID0gd2luZG93LmV2ZW50IHx8IGU7IC8vIG9sZCBJRSBzdXBwb3J0XHJcbiAgICAgICAgdGhpcy56b29tRXZlbnQuZW1pdChlKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICB6b29tQ2hhbmdlZCgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnW1N0b3J5QmxvY2sgIycgKyB0aGlzLmluZGV4ICsgJ10gWm9vbSBjaGFuZ2VkIGZyb20gJyArIHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsICsgJyB0byAnICsgdGhpcy5fem9vbUxldmVsKTtcclxuICAgICAgICBpZiAodGhpcy5fem9vbUxldmVsIDwgdGhpcy5zdG9yeUJsb2NrSW5mby5pbXBvcnRhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFkZU91dCgxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVBvc2l0aW9uT25ab29tKDEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYWRlSW4oc3BlZWQ6bnVtYmVyKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIEZhZGluZyBpbi4uLicpO1xyXG4gICAgICAgIGxldCBhbmltYXRpb24gPSB0aGlzLl9hYi5jc3MoKTtcclxuICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBmcm9tU3R5bGUgPSB7fTtcclxuICAgICAgICB2YXIgdG9TdHlsZSA9IHt9O1xyXG5cclxuICAgICAgICBmcm9tU3R5bGVbJ2Rpc3BsYXknXSA9ICdmbGV4JztcclxuICAgICAgICBmcm9tU3R5bGVbJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gPSAnY3ViaWMtYmV6aWVyKDAuNTc1LCAwLjI1NSwgMC40NDAsIDAuOTg1KTsnO1xyXG4gICAgICAgIHRvU3R5bGVbJ29wYWNpdHknXSA9IDE7XHJcblxyXG4gICAgICAgIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAuc2V0RHVyYXRpb24oc3BlZWQpXHJcbiAgICAgICAgICAgIC5zZXRGcm9tU3R5bGVzKGZyb21TdHlsZSlcclxuICAgICAgICAgICAgLnNldFRvU3R5bGVzKHRvU3R5bGUpO1xyXG5cclxuICAgICAgICBpZiAoISFfc2VsZi5fYWN0aW9uVGltZW91dCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3NlbGYuX2FjdGlvblRpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX3NlbGYuX2FjdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLnN0YXJ0KF9zZWxmLl9lLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmFkZU91dChzcGVlZDpudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5fYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdbU3RvcnlCbG9jayAjJyArIHRoaXMuaW5kZXggKyAnXSBGYWRpbmcgb3V0Li4uWycgKyB0aGlzLl96b29tTGV2ZWwgKyAnPCcgKyB0aGlzLnN0b3J5QmxvY2tJbmZvLmltcG9ydGFuY2UgKyAnXScpO1xyXG4gICAgICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYWIuY3NzKCk7XHJcbiAgICAgICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBmcm9tU3R5bGUgPSB7fTtcclxuICAgICAgICAgICAgdmFyIHRvU3R5bGUgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIHRvU3R5bGVbJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gPSAnY3ViaWMtYmV6aWVyKDAuNTc1LCAwLjI1NSwgMC40NDAsIDAuOTg1KTsnO1xyXG4gICAgICAgICAgICB0b1N0eWxlWydvcGFjaXR5J10gPSAwO1xyXG5cclxuICAgICAgICAgICAgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICAuc2V0RHVyYXRpb24oc3BlZWQpXHJcbiAgICAgICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyhmcm9tU3R5bGUpXHJcbiAgICAgICAgICAgICAgICAuc2V0VG9TdHlsZXModG9TdHlsZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoISFfc2VsZi5fYWN0aW9uVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgX3NlbGYuaW5kZXggKyAnXSBBbmltYXRpb24gcmVtb3ZlZCcpO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF9zZWxmLl9hY3Rpb25UaW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgX3NlbGYuX2FjdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5zdGFydChfc2VsZi5fZS5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUG9zaXRpb25Pblpvb20oc3BlZWQpIHtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYWIuY3NzKCk7XHJcbiAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgZnJvbVN0eWxlID0ge1xyXG4gICAgICAgICAgICB0b3A6IHRoaXMuY29uZmlndXJhdGlvbi56b29tLm9mZnNldCArICgodGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RlcCArICh0aGlzLl9wcmV2aW91c1pvb21MZXZlbCAqIHRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0cmVuZ3RoKSkgKiB0aGlzLnN0b3J5QmxvY2tJbmZvLnRpbWVQb3NpdGlvbikgKyAncHgnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHRvU3R5bGUgPSB7XHJcbiAgICAgICAgICAgIHRvcDogdGhpcy5jb25maWd1cmF0aW9uLnpvb20ub2Zmc2V0ICsgKCh0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5zdGVwICsgKHRoaXMuX3pvb21MZXZlbCAqIHRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0cmVuZ3RoKSkgKiB0aGlzLnN0b3J5QmxvY2tJbmZvLnRpbWVQb3NpdGlvbikgKyAncHgnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIENoYW5naW5nIHBvc2l0aW9uIGZyb20gJyArIChmcm9tU3R5bGUudG9wKSArICcgdG8gJyArICh0b1N0eWxlLnRvcCkgKyAnIC4uLicpO1xyXG5cclxuICAgICAgICBpZiAoX3NlbGYuX3pvb21MZXZlbCA+IF9zZWxmLnN0b3J5QmxvY2tJbmZvLmltcG9ydGFuY2UpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIC4uLmFuZCBmYWRpbmcgaW4gWycgKyB0aGlzLl96b29tTGV2ZWwgKyAnPicgKyB0aGlzLnN0b3J5QmxvY2tJbmZvLmltcG9ydGFuY2UgKyAnXScpO1xyXG4gICAgICAgICAgICB0b1N0eWxlWydvcGFjaXR5J10gPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIC4uLmFuZCBmYWRpbmcgb3V0Jyk7XHJcbiAgICAgICAgICAgIHRvU3R5bGVbJ29wYWNpdHknXSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0b1N0eWxlWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJ2N1YmljLWJlemllcigwLjU3NSwgMC4yNTUsIDAuNDQwLCAwLjk4NSk7JztcclxuXHJcbiAgICAgICAgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIC5zZXREdXJhdGlvbihzcGVlZClcclxuICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoZnJvbVN0eWxlKVxyXG4gICAgICAgICAgICAuc2V0VG9TdHlsZXModG9TdHlsZSk7XHJcblxyXG4gICAgICAgIGlmICghIV9zZWxmLl9hY3Rpb25UaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdbU3RvcnlCbG9jayAjJyArIHRoaXMuaW5kZXggKyAnXSBBbmltYXRpb24gcmVtb3ZlZCcpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3NlbGYuX2FjdGlvblRpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX3NlbGYuX2FjdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLnN0YXJ0KF9zZWxmLl9lLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9jdXMoKSB7XHJcbiAgICAgICAgdmFyIG5hdGl2ZSA9IHRoaXMuX2UubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB2YXIgY29udGFpbmVyID0gbnVsbDtcclxuICAgICAgICB2YXIgdGV4dGFyZWEgPSBudWxsO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmF0aXZlLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKChuYXRpdmUuY2hpbGROb2Rlc1tpXS5jbGFzc05hbWUgfHwgJycpLmluZGV4T2YoXCJ0ZXh0LWNvbnRhaW5lclwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSBuYXRpdmUuY2hpbGROb2Rlc1tpXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghIWNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGNvbnRhaW5lci5jaGlsZE5vZGVzW2ldLmNsYXNzTmFtZSB8fCAnJykuaW5kZXhPZihcImRlc2NyaXB0aW9uXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSA9IGNvbnRhaW5lci5jaGlsZE5vZGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghIXRleHRhcmVhKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVkaXQoaW5kZXgsIGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NhdmluZyB0ZW1wb3JhcnkgZGF0YSAnLCB0aGlzLnN0b3J5QmxvY2tJbmZvKTtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tMb2NhbFNhdmUgPSA8U3RvcnlCbG9jaz5KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RvcnlCbG9ja0luZm8pKTtcclxuICAgICAgICB0aGlzLmV4cG9zZUV2ZW50LmVtaXQoaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoaW5kZXgsIGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5kZWxldGVTdG9yeUJsb2NrKHRoaXMudXNlcklkLHRoaXMuc3RvcnlCbG9ja0luZm8pLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHdoaWxlIHJlbW92aW5nJywgdGhpcy5zdG9yeUJsb2NrSW5mbywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4uJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdmluZyBibG9jayBpbmRleCAnICt0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUmVtb3ZlZCBzdWNjZXNzZnVsbHkuJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVN0b3J5QmxvY2tFdmVudC5lbWl0KHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKGluZGV4LCBldmVudCkge1xyXG5cclxuICAgICAgICBpZiAoISh0aGlzLnN0b3J5QmxvY2tJbmZvLnRpdGxlID09ICcnICYmIHRoaXMuc3RvcnlCbG9ja0luZm8uZGVzY3JpcHRpb24gPT0gJycpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcnlCbG9ja1NlcnZpY2Uuc2F2ZVN0b3J5QmxvY2sodGhpcy51c2VySWQsdGhpcy5zdG9yeUJsb2NrSW5mbykuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2NrSW5mbyA9IDxTdG9yeUJsb2NrPmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NhdmluZyB0ZW1wb3JhcnkgZGF0YSAnLCBkYXRhLCB0aGlzLnN0b3J5QmxvY2tJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tMb2NhbFNhdmUgPSA8U3RvcnlCbG9jaz5KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RvcnlCbG9ja0luZm8pKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHdoaWxlIHNhdmluZycsIHRoaXMuc3RvcnlCbG9ja0luZm8sIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yLiBQbGVhc2UgdHJ5IGFnYWluLidcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NhdmVkICcsIHRoaXMuc3RvcnlCbG9ja0luZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTYXZlZCBzdWNjZXNzZnVsbHkuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoJ1BsZWFzZSBpbnNlcnQgYSB0aXRsZSBvciBzb21lIGNvbnRlbnQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuZXhwb3NlRXZlbnQuZW1pdCgtMSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zdG9yeUJsb2NrTG9jYWxTYXZlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdmluZyBibG9jayBpbmRleCAnICt0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVTdG9yeUJsb2NrRXZlbnQuZW1pdCh0aGlzLmluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J3RpbWVsaW5lJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lbGluZUNvbXBvbmVudCB7XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWZ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidhZGQtYnV0dG9uJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8YT48c3Bhbj4rPC9zcGFuPjwvYT5cbiAgICBgLFxuICAgIGlucHV0czogWydvZmZzZXRZJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRkQnV0dG9uQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIF9vZmZzZXRZO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZTpFbGVtZW50UmVmKXtcblxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IG9mZnNldFkodmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX29mZnNldFkgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vZmZzZXRDaGFuZ2VkKHZhbHVlKTtcbiAgICB9XG5cbiAgICBvZmZzZXRDaGFuZ2VkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2UubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSB2YWx1ZSArICdweCc7XG4gICAgfVxufSIsImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3Rvcjonbm90aWZpY2F0aW9uJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBbbmdDbGFzc109XCJ7ZXJyb3I6IF9lcnJvciwgc3VjY2VzczogX3N1Y2Nlc3N9XCI+e3sgX2NvbnRlbnTCoH19PC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfdGltZXI7XHJcbiAgICBwcml2YXRlIF9jb250ZW50O1xyXG4gICAgcHJpdmF0ZSBfZXJyb3IgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3N1Y2Nlc3MgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lOkVsZW1lbnRSZWYpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93KGNvbnRlbnQpe1xyXG4gICAgICAgIGlmKCEhdGhpcy5fdGltZXIpe1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLl9lLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2UubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhjb250ZW50KXtcclxuICAgICAgICB0aGlzLl9lcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3N1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2hvdyhjb250ZW50KVxyXG4gICAgfVxyXG5cclxuICAgIGVycm9yKGNvbnRlbnQpe1xyXG4gICAgICAgIHRoaXMuX2Vycm9yID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9zdWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zaG93KGNvbnRlbnQpXHJcbiAgICB9XHJcblxyXG4gICAgbWVzc2FnZShjb250ZW50KXtcclxuICAgICAgICB0aGlzLl9lcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3N1Y2Nlc3MgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNob3coY29udGVudClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdG9yeWJsb2Nrcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1R5cGV9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9jay10eXBlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidzaWRlYmFyJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItYWN0aW9uXCIgKm5nSWY9XCJfaW5kZXggPT0gLTFcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJjcmVhdGUtc3RvcnlibG9ja1wiIGRyYWdnYWJsZT1cInRydWVcIiAoZHJhZ3N0YXJ0KT1cImRyYWdTdGFydCgkZXZlbnQpXCIgKGRyYWdlbmQpPVwiZHJhZ0VuZCgkZXZlbnQpXCI+Q3JlYXRlIHN0b3J5YmxvY2s8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItYWN0aW9uXCIgKm5nSWY9XCJfaW5kZXggPj0gMCAmJiAhIV9zdG9yeUJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+U3RvcnlibG9jayB0eXBlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3Qtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgWyhuZ01vZGVsKV09XCJfc3RvcnlCbG9jay50eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwiI3N0b3J5QmxvY2tUeXBlIG9mIHN0b3J5QmxvY2tUeXBlc1wiIHZhbHVlPXt7c3RvcnlCbG9ja1R5cGUuaWR9fT57e3N0b3J5QmxvY2tUeXBlLm5hbWV9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGlucHV0czogWydzdG9yeUJsb2NrJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIHN0b3J5QmxvY2tUeXBlczpTdG9yeUJsb2NrVHlwZVtdO1xyXG4gICAgXHJcbiAgICBwdWJsaWMgX2luZGV4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgX3N0b3J5QmxvY2s7XHJcbiAgICBwdWJsaWMgX3N1YnNjcmlwdGlvbjogYW55O1xyXG5cclxuICAgIEBPdXRwdXQoKSBzdGFydERyYWdnaW5nOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIGVuZERyYWdnaW5nOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0b3J5QmxvY2tTZXJ2aWNlOlN0b3J5QmxvY2tTZXJ2aWNlKSB7fVxyXG4gICAgQElucHV0KClcclxuICAgIHNldCBzdG9yeUJsb2NrKHN0b3J5QmxvY2spe1xyXG4gICAgICAgIHRoaXMuX3N0b3J5QmxvY2sgPSBzdG9yeUJsb2NrO1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrVHlwZXMgPSB0aGlzLl9zdG9yeUJsb2NrU2VydmljZS5nZXRTdG9yeUJsb2NrVHlwZXMoKTtcclxuICAgICAgICB0aGlzLl9pbmRleCA9IHRoaXMuX3N0b3J5QmxvY2tTZXJ2aWNlLmdldEV4cG9zZWRJbmRleCgpO1xyXG4gICAgICAgIHRoaXMuX3N0b3J5QmxvY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX3N0b3J5QmxvY2tTZXJ2aWNlLmluZGV4Q2hhbmdlJC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGluZGV4ID0+IHRoaXMuc2VsZWN0SW5kZXgoaW5kZXgpKTtcclxuICAgIH1cclxuICAgIHNlbGVjdEluZGV4KGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9pbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICBkcmFnU3RhcnQoZSl7XHJcbiAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1nLnNyYyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDUUFBQUFrQ0FZQUFBRGhBSmlZQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQk8xSlJFRlVXQW5ObUVGc0ZGVVl4NzgzTzdQYUFycGdxRkt0R0tNaEdPSkpFbTFGUThJYXBVUWtwajJZZVBObWpBZWo4ZURSZzlGNElNYWJOeE1QYlJReGdNWmlpR0tyQ1J5TVVRbHFURUFwQ0FxcmhoWjNadWY1L2Q3czI5M1NscDNGbHV5WDdPemIyZmYrLy85ODc3M3ZmZDhZNmRCdTNHZFhCeGVydzFaTVdZemNicTN0TjhiMEE2UHRhVzFQaTVXVFJ1eEV1cUs0LzY4ZDVrSW5GQ1p2NTlKWXNrdHMrcHcxc2tXWncxempqRW1NbGNOaWdyY3FvK0dlUEdQYUNscjlmanhrYS9aMWZmcEJBS09Dc1ErdE5XYjdyWUZzdU1ISXVoNGp0MXlmVVoyNUpISjYxc3J4djYwY09KWEtGK2Vzald2NkNHcnF1U2xUTUM5ZGVES2F6SG92ZkYxVTBNaVlMVXhJL0tZS2VaNmhmVDNHdm54UHdZeXNEMlJWUHYvSVA0bkkrSWxVWHZ1aFpzL09Ob1R0TGt2MHd2aW9xUzBrYVVGQnBUMjJaT040VEtlbVhGU1B2TGl4WUo3ZEVFaHZJWVA0dG1KbHYzcmdxM05XcHRVamVBYkRVLzNxc1FmV0dobFdEOTVieXVCbmxQcnQ0Nm04Y2F4bXEzak1tQWtUUmFPVlhhYVNqV3hlNXdseVlxclZLZTJ5RWErOE54U2ErOVprM2ZiK1p1WFY3eEw1U2Fja2o5MnRVL3JLcGxCMjNwYU5QM3JleWxPVGlmZldNVk1zRGw0dWFvNGdwdWxUaVQvR001dEtnWXh0Q2ZXSlJVNWNGSG5tNjBTTy9Kbm0wVEd2eithYkFubm4vbERXcnhEMXFNakk0VVMrcnlpV2V1b1JpUjVybmI2Z2RUUnJCakY0eG91WjFHblplakMrYWpIZzh5QmdnTVVEanV1RHdnR1g0MndSMGZBUXV5bE4waTlaTXdlMlp0TUV3Qk9mSnhLbithYW9CWGZCWmhRWStmRGhVSVowalRGOTJ3OGxiazBGWWZDZzMzME5EN0cxUVdFQnMyYVlwcWVubGs0TTJEd1ltR0REQVJmM1BUZHRKNGlnUjV6Qmpld21qRFZ6L3QrbDhZd0RyRi9BQkJ1REMwNjRYZURWZXhtN1JtQTZFR2ZZMnV5bXExM0E0TFF6c09HQUMwN1h2NjdCY0RiSlRIdzJDcVR3eTg3SUVQUTJmeExuM3RydHlCZjduNUJ3NU5ISUJjODc5OFkyVHFVbXZWRmZZR2JpSGJyYVE0NER4QkQwOHNhWnhjankzSWNETGpqaFJnTmFtTEl5QUp4TkdCRzRFK3ZUNkZ3WkxicFBZOHZtQlBCY25sdUhsVkV4d0hnT1Nvemo0RnFaNS9MY3lqc1E2Z3AzdVF5bk5zYlpsTWZ1MEtpTHJibXU2UmNpTVZaVGlGOW5zdmFWcnA3TGM2TWxKTG5TeHB3VTRrb2cvcjl2aG91KzJmajI5LzY0Wk9XdWorTEcvY1VhclljeWZkQkNJdUZja3M4dlRlalpwRG1pSjh5ODVPOXh1dWN4NzlzbWtsaW03TFFPWHZXN3BoQXJWMllweE0vdEgwN1dmWkIxWWxILytIam1yWDY5MXdMZVZ0UE45Y1FPYmd3dGdjdUI5UWVaSGtZK2M2M01jM2x1dEFRazVBZ2c3Y1JJcmpxeHFrYUpveHA1K1hUaW5WWXV6NDJXUUN1SGcveEpEb3lSNlhWaWxhckl0czhTOStsa0hIMDlsK2VtVWdsc2I3UlBsM2RDUWs0T1ROcEpXRjl1Z3dNdU9PRkdBMlZUUU4xRXFVSjFRRUtPa1hZdXQza09PT0ZHQTFxeStkRzZDUUZVQjJ4WmNtRFN6dVV5c09HQUMwN0hVOWZnV0NuaWRJVlBVYXBRSFdEa3dLMVIyTjFjZ2d1WVlHTnd3UW0zTHlRYmJxQ0lveE9sQ3VrbHg4QzdnNkdRZGk2VmdRVW0ySERBQmJibnB0MFFSRTZyU25kVE4xR3FVQjJRKzVJREw0V253UEQ1Tk5od3dBV256NmZuQ09JSEZTV2xDVzZrVlBHaURtMkwvdGVhWXMyQXdRUDZNc2hWc3NybE9DR3YyN3o1NktwQzBhdnNxbExhaStxcWx3MWVGTjlkOHpxbVZSVHRybmxoZGJrd3lpWlhxV1RGd1FCcHAyN2R1YS8wTklQVmNST2NrNTIrMHZzUE9PUGxMblZZMGxZQUFBQUFTVVZPUks1Q1lJST1cIjtcclxuICAgICAgICBpbWcuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZShpbWcsIDE4LCAxOCk7XHJcbiAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nLmVtaXQoZSk7XHJcbiAgICB9XHJcbiAgICBkcmFnRW5kKGUpe1xyXG4gICAgICAgIHZhciBpY29uV2lkdGggPSAzNjtcclxuICAgICAgICB2YXIgYXNpZGVXaWR0aCA9IDI0MDtcclxuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NjggJiYgZS54ID4gd2luZG93LmlubmVyV2lkdGggLSBhc2lkZVdpZHRoIC0gaWNvbldpZHRoKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVuZERyYWdnaW5nLmVtaXQoZSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgVXNlciB7XHJcbiAgICBuYW1lIDogc3RyaW5nO1xyXG4gICAgZW1haWwgOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZCA6IHN0cmluZztcclxufSIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdlYlN0b3JhZ2VTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgc3RvcmFnZVN1cHBvcnRlZCA9ICh0eXBlb2YoU3RvcmFnZSkgIT09IFwidW5kZWZpbmVkXCIpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1dChrZXksIHZhbHVlKTp2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zdG9yYWdlU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIGlmICghIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1dEluTG9jYWxTdG9yYWdlKGtleSwgdmFsdWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCEhdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHV0SW5Db29raWVzKGtleSwgdmFsdWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21Db29raWVzKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGtleSk6YW55IHtcclxuICAgICAgICBpZiAodGhpcy5zdG9yYWdlU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEZyb21Mb2NhbFN0b3JhZ2Uoa2V5KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RnJvbUNvb2tpZShrZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoa2V5KTp2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zdG9yYWdlU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShrZXkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21Db29raWVzKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHV0SW5Mb2NhbFN0b3JhZ2Uoa2V5LCB2YWx1ZSk6dm9pZCB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShlbmNvZGVVUkkodmFsdWUpIHx8IFwiXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEZyb21Mb2NhbFN0b3JhZ2Uoa2V5KTphbnkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZVVSSShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB8fCBcInt9XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShrZXkpOnZvaWQge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwdXRJbkNvb2tpZXMoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuICAgICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XHJcbiAgICAgICAgdmFyIGV4cGlyZXMgPSBkLnRvVVRDU3RyaW5nKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llICs9IGtleSArICc9JyArIEpTT04uc3RyaW5naWZ5KGVuY29kZVVSSSh2YWx1ZSkgfHwgXCJcIikgKyBcIjtwYXRoPS87ZXhwaXJlcz1cIiArIGV4cGlyZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRGcm9tQ29va2llKGtleSk6YW55IHtcclxuICAgICAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCcoPzpefDspXFxcXHM/JyArIGtleSArICc9KC4qPykoPzo7fCQpJywgJ2knKTtcclxuICAgICAgICB2YXIgbXRjID0gZG9jdW1lbnQuY29va2llLm1hdGNoKHJlZ2V4KSB8fCBbXTtcclxuICAgICAgICBpZiAobXRjLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlVVJJKG10Y1sxXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlRnJvbUNvb2tpZXMoa2V5KTp2b2lkIHtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBrZXkgKyBcIj07cGF0aD0vO2V4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVRcIjtcclxuICAgIH1cclxufSIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCB7Snd0VG9rZW59IGZyb20gXCIuLi9tb2RlbHMvand0VG9rZW5cIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uL21vZGVscy91c2VyXCI7XHJcbmltcG9ydCB7V2ViU3RvcmFnZVNlcnZpY2V9IGZyb20gXCIuL3dlYnN0b3JhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDpIdHRwLCBwcml2YXRlIHdlYlN0b3JhZ2VTZXJ2aWNlOldlYlN0b3JhZ2VTZXJ2aWNlLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbikge1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpOmJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMud2ViU3RvcmFnZVNlcnZpY2UucmVtb3ZlKHRoaXMuY29uZmlndXJhdGlvbi50b2tlbi5uYW1lKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbih1c2VyOlVzZXIpOk9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIHRlbXBvcmFyeSBkYXRhJyk7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuY29uZmlndXJhdGlvbi5hcGlCYXNlUGF0aCArICcvYXV0aC9sb2dpbicsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWU9XCIgKyB1c2VyLm5hbWUgKyBcIiZcIiArXHJcbiAgICAgICAgICAgICAgICBcImVtYWlsPVwiICsgdXNlci5lbWFpbCArIFwiJlwiICtcclxuICAgICAgICAgICAgICAgIFwicGFzc3dvcmQ9XCIgKyB1c2VyLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMudGV4dCgpKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlcih1c2VyOlVzZXIpOk9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIHRlbXBvcmFyeSBkYXRhJyk7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5jb25maWd1cmF0aW9uLmFwaUJhc2VQYXRoICsgJy9hdXRoL3JlZ2lzdGVyJyxcclxuICAgICAgICAgICAgICAgIFwiZW1haWw9XCIgKyB1c2VyLmVtYWlsICsgXCImXCIgK1xyXG4gICAgICAgICAgICAgICAgXCJwYXNzd29yZD1cIiArIHVzZXIucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy50ZXh0KCkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpc0xvZ2dlZEluKCk6Ym9vbGVhbiB7XHJcbiAgICAgICAgdmFyIHRva2VuRGF0YVNwbGl0ID0gKHRoaXMud2ViU3RvcmFnZVNlcnZpY2UuZ2V0KHRoaXMuY29uZmlndXJhdGlvbi50b2tlbi5uYW1lKSB8fCAnJykuc3BsaXQoJy4nKVsxXTtcclxuICAgICAgICBpZiAoIXRva2VuRGF0YVNwbGl0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRva2VuRGF0YVJhdyA9IGF0b2IodG9rZW5EYXRhU3BsaXQpO1xyXG5cclxuICAgICAgICB2YXIgdG9rZW5EYXRhID0gSlNPTi5wYXJzZSh0b2tlbkRhdGFSYXcpIGFzIEp3dFRva2VuO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRva2VuRGF0YSk7XHJcbiAgICAgICAgcmV0dXJuICh0b2tlbkRhdGEuZXhwIHx8IDApID4gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBnZXRJZEZyb21Ub2tlbigpIHtcclxuICAgICAgICB2YXIgdG9rZW5EYXRhU3BsaXQgPSAodGhpcy53ZWJTdG9yYWdlU2VydmljZS5nZXQodGhpcy5jb25maWd1cmF0aW9uLnRva2VuLm5hbWUpIHx8ICcnKS5zcGxpdCgnLicpWzFdO1xyXG4gICAgICAgIGlmICghdG9rZW5EYXRhU3BsaXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdG9rZW5EYXRhUmF3ID0gYXRvYih0b2tlbkRhdGFTcGxpdCk7XHJcblxyXG4gICAgICAgIHZhciB0b2tlbkRhdGEgPSBKU09OLnBhcnNlKHRva2VuRGF0YVJhdykgYXMgSnd0VG9rZW47XHJcblxyXG4gICAgICAgIHJldHVybiB0b2tlbkRhdGEuX2lkXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWRGcm9tQW5vbnltb3VzVG9rZW4odG9rZW5EYXRhU3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHRva2VuRGF0YVJhdyA9IGF0b2IodG9rZW5EYXRhU3RyaW5nKTtcclxuXHJcbiAgICAgICAgdmFyIHRva2VuRGF0YSA9IEpTT04ucGFyc2UodG9rZW5EYXRhUmF3KSBhcyBKd3RUb2tlbjtcclxuICAgICAgICByZXR1cm4gdG9rZW5EYXRhLl9pZFxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlQW5vbnltb3VzVG9rZW4oKTphbnkge1xyXG4gICAgICAgIHZhciBhbm9ueW1vdXNUb2tlbiA9IHtcclxuICAgICAgICAgICAgX2lkOiB0aGlzLmdlbmVyYXRlVW5pcXVlSWQoKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBidG9hKEpTT04uc3RyaW5naWZ5KGFub255bW91c1Rva2VuKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZVVuaXF1ZUlkKCkge1xyXG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMCwgdiA9IGMgPT09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn0iLCJpbXBvcnQge0NvbnRyb2wsIENvbnRyb2xHcm91cH0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuXG4vKlxuIEN1c3RvbSB2YWxpZGF0b3JzIHRvIHVzZSBldmVyeXdoZXJlLlxuICovXG5cbi8vIFNJTkdMRSBGSUVMRCBWQUxJREFUT1JTXG5leHBvcnQgZnVuY3Rpb24gZW1haWxWYWxpZGF0b3IoY29udHJvbDogQ29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICB2YXIgZW1haWxSZWdleHAgPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKiQvaTtcbiAgICBpZiAoY29udHJvbC52YWx1ZSAmJiBjb250cm9sLnZhbHVlLmxlbmd0aCA8IDYgJiYgIWVtYWlsUmVnZXhwLnRlc3QoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHtpbnZhbGlkRW1haWw6IHRydWV9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVtYWlsUmVnZXhwID0gJ15bYS16MC05ISMkJSZcXCcqK1xcXFwvPT9eX2B7fH1+Li1dK0BbYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSokJztcblxuLy9DT05UUk9MIEdST1VQIFZBTElEQVRPUlNcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGluZ1Bhc3N3b3JkcyhwYXNzd29yZEtleTogc3RyaW5nLCBjb25maXJtUGFzc3dvcmRLZXk6IHN0cmluZykge1xuICAgIHJldHVybiAoZ3JvdXA6IENvbnRyb2xHcm91cCk6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcbiAgICAgICAgbGV0IHBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbcGFzc3dvcmRLZXldO1xuICAgICAgICBsZXQgY29uZmlybVBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbY29uZmlybVBhc3N3b3JkS2V5XTtcbiAgICAgICAgaWYgKHBhc3N3b3JkLnZhbHVlICE9PSBjb25maXJtUGFzc3dvcmQudmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWlzbWF0Y2hlZFBhc3N3b3JkczogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgfVxufSIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXJcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBDb250cm9sR3JvdXAsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xyXG5pbXBvcnQge2VtYWlsVmFsaWRhdG9yLCBtYXRjaGluZ1Bhc3N3b3JkcywgZW1haWxSZWdleHB9IGZyb20gJy4uL3NlcnZpY2VzL3ZhbGlkYXRvcnMuc2VydmljZSc7XHJcbmltcG9ydCB7V2ViU3RvcmFnZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy93ZWJzdG9yYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzaWduLWluLWZvcm0nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4Ym94IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+Q29tZSBpbiwgc3Rvcnl0ZWxsZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdj48YSBjbGFzcz1cImNsb3NlXCIgKGNsaWNrKT1cImNsb3NlKCRldmVudClcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJmb3JtXCIgKG5nU3VibWl0KT1cIm9uU2lnbkluKCRldmVudClcIiBub3ZhbGlkYXRlPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLmVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdPVwiZm9ybS5jb250cm9sc1snZW1haWwnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgI2VtYWlsPVwibmdGb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICAqbmdJZj1cIihlbWFpbC5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmICFlbWFpbC52YWxpZFwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICBFbWFpbCBpcyBpbnZhbGlkXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIucGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXCJcclxuICAgICAgICAgICAgICAgICAgICAjcGFzc3dvcmQ9XCJuZ0Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgICpuZ0lmPVwiKHBhc3N3b3JkLmRpcnR5IHx8IHN1Ym1pdHRlZCkgJiYgIXBhc3N3b3JkLnZhbGlkXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZSBwYXNzd29yZCBzaG91bGQgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmdcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIHByaW1hcnkgYmxvY2stYnV0dG9uXCI+U2lnbiBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2FwLWZvcm1cIj48YSAoY2xpY2spPVwic3dhcFRvU2lnblVwKClcIj5JIHdhbnQgdG8gY3JlYXRlIGEgbmV3IGFjY291bnQ8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZSwgV2ViU3RvcmFnZVNlcnZpY2VdLFxyXG4gICAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduSW5Db21wb25lbnQge1xyXG4gICAgdXNlcjpVc2VyID0gbmV3IFVzZXIoKTtcclxuICAgIGZvcm06Q29udHJvbEdyb3VwO1xyXG4gICAgc3VibWl0dGVkID0gZmFsc2U7XHJcblxyXG4gICAgQE91dHB1dCgpIGNsb3NlTW9kYWw6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgc3dhcFdpbmRvdzpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBub3RpZnk6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgYXV0aFN0YXR1czpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlLCBwcml2YXRlIGJ1aWxkZXI6Rm9ybUJ1aWxkZXIsIHByaXZhdGUgd2ViU3RvcmFnZVNlcnZpY2U6V2ViU3RvcmFnZVNlcnZpY2UsIHByaXZhdGUgY29uZmlndXJhdGlvbjpDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZm9ybSA9IGJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybihlbWFpbFJlZ2V4cCldKV0sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmNsb3NlTW9kYWwuZW1pdChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dhcFRvU2lnblVwKCkge1xyXG4gICAgICAgIHRoaXMuc3dhcFdpbmRvdy5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNpZ25JbihldmVudCkge1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmZvcm0udmFsdWUpKTtcclxuICAgICAgICBpZiAodGhpcy5mb3JtLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9naW4odGhpcy51c2VyKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYlN0b3JhZ2VTZXJ2aWNlLnB1dCh0aGlzLmNvbmZpZ3VyYXRpb24udG9rZW4ubmFtZSwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nZ2VkIGluJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU3RhdHVzLmVtaXQoJ0xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgnJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9tb2RlbHMvdXNlclwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cCwgRk9STV9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XHJcbmltcG9ydCB7ZW1haWxWYWxpZGF0b3IsIG1hdGNoaW5nUGFzc3dvcmRzLCBlbWFpbFJlZ2V4cH0gZnJvbSAnLi4vc2VydmljZXMvdmFsaWRhdG9ycy5zZXJ2aWNlJztcclxuaW1wb3J0IHtXZWJTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3dlYnN0b3JhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NpZ24tdXAtZm9ybScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhib3ggZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5CZWNvbWUgYSBzdG9yeXRlbGxlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PjxhIGNsYXNzPVwiY2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoJGV2ZW50KVwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9hPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cImZvcm1cIiAobmdTdWJtaXQpPVwib25TaWduVXAoJGV2ZW50KVwiIG5vdmFsaWRhdGU+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlci5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWyduYW1lJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgICNuYW1lPVwibmdGb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAgKm5nSWY9XCIobmFtZS5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmICFuYW1lLnZhbGlkXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFlvdXIgbmFtZSBpcyByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIuZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWydlbWFpbCddXCJcclxuICAgICAgICAgICAgICAgICAgICAjZW1haWw9XCJuZ0Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgICpuZ0lmPVwiKGVtYWlsLmRpcnR5IHx8IHN1Ym1pdHRlZCkgJiYgIWVtYWlsLnZhbGlkXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVtYWlsIGlzIGludmFsaWRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIllvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlci5wYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cImZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgICNwYXNzd29yZD1cIm5nRm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAgKm5nSWY9XCIocGFzc3dvcmQuZGlydHkgfHwgc3VibWl0dGVkKSAmJiAhcGFzc3dvcmQudmFsaWRcIiBjbGFzcz1cInBhbmVsIHBhbmVsLWVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhlIHBhc3N3b3JkIHNob3VsZCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZ1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLmNvbmZpcm1QYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cImZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddXCJcclxuICAgICAgICAgICAgICAgICAgICAjY29uZmlybVBhc3N3b3JkPVwibmdGb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29uZmlybS1wYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIoY29uZmlybVBhc3N3b3JkLmRpcnR5IHx8IHN1Ym1pdHRlZCkgJiYgZm9ybS5oYXNFcnJvcignbWlzbWF0Y2hlZFBhc3N3b3JkcycpXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZSBwYXNzd29yZHMgZG9uJ3QgbWF0Y2hcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIHByaW1hcnkgYmxvY2stYnV0dG9uXCI+U2lnbiB1cDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2FwLWZvcm1cIj48YSAoY2xpY2spPVwic3dhcFRvU2lnbkluKClcIj5JIGFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PC9hPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2UsIFdlYlN0b3JhZ2VTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2lnblVwQ29tcG9uZW50IHtcclxuICAgIHVzZXI6VXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICBmb3JtOkNvbnRyb2xHcm91cDtcclxuICAgIHN1Ym1pdHRlZCA9IGZhbHNlO1xyXG5cclxuICAgIEBPdXRwdXQoKSBjbG9zZU1vZGFsOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIHN3YXBXaW5kb3c6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgbm90aWZ5OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIGF1dGhTdGF0dXM6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSwgcHJpdmF0ZSBidWlsZGVyOkZvcm1CdWlsZGVyLCBwcml2YXRlIHdlYlN0b3JhZ2VTZXJ2aWNlOldlYlN0b3JhZ2VTZXJ2aWNlLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZvcm0gPSBidWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgbmFtZTpbJyddLFxyXG4gICAgICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybihlbWFpbFJlZ2V4cCldKV0sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKV0sXHJcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICB9LCB7dmFsaWRhdG9yOiBtYXRjaGluZ1Bhc3N3b3JkcygncGFzc3dvcmQnLCAnY29uZmlybVBhc3N3b3JkJyl9KVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3YXBUb1NpZ25JbigpIHtcclxuICAgICAgICB0aGlzLnN3YXBXaW5kb3cuZW1pdChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaWduVXAoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5mb3JtLnZhbHVlKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcikuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJTdG9yYWdlU2VydmljZS5wdXQodGhpcy5jb25maWd1cmF0aW9uLnRva2VuLm5hbWUsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlIGVtYWlsIGlzIGFscmVhZHkgdGFrZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWdpc3RlcmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU3RhdHVzLmVtaXQoJ0xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgnJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcblxyXG5pbXBvcnQge1NpZ25JbkNvbXBvbmVudH0gZnJvbSBcIi4vc2lnbmluLWZvcm0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2lnblVwQ29tcG9uZW50fSBmcm9tIFwiLi9zaWdudXAtZm9ybS5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhdXRoLWZvcm0nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8c2lnbi1pbi1mb3JtIFxyXG4gICAgICAgICAgICAqbmdJZj1cImxvZ2luXCIgXHJcbiAgICAgICAgICAgIChjbG9zZU1vZGFsKT1cImhpZGVBY2Nlc3NGb3JtKClcIlxyXG4gICAgICAgICAgICAoc3dhcFdpbmRvdyk9XCJsb2dpbj0hbG9naW5cIlxyXG4gICAgICAgICAgICAoYXV0aFN0YXR1cyk9XCJhdXRoU3RhdHVzQ2hhbmdlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgKG5vdGlmeSk9XCJub3RpZnlNZXNzYWdlKCRldmVudClcIlxyXG4gICAgICAgICAgICA+PC9zaWduLWluLWZvcm0+XHJcbiAgICAgICAgPHNpZ24tdXAtZm9ybSBcclxuICAgICAgICAgICAgKm5nSWY9XCIhbG9naW5cIiBcclxuICAgICAgICAgICAgKGNsb3NlTW9kYWwpPVwiaGlkZUFjY2Vzc0Zvcm0oKVwiXHJcbiAgICAgICAgICAgIChzd2FwV2luZG93KT1cImxvZ2luPSFsb2dpblwiXHJcbiAgICAgICAgICAgIChhdXRoU3RhdHVzKT1cImF1dGhTdGF0dXNDaGFuZ2VkKCRldmVudClcIlxyXG4gICAgICAgICAgICAobm90aWZ5KT1cIm5vdGlmeU1lc3NhZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgID48L3NpZ24tdXAtZm9ybT5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgZGlyZWN0aXZlczogW1NpZ25JbkNvbXBvbmVudCwgU2lnblVwQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhGb3JtQ29tcG9uZW50IHtcclxuICAgIEBPdXRwdXQoKSBjbG9zZU1vZGFsOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIG5vdGlmeTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBhdXRoU3RhdHVzOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBwdWJsaWMgbG9naW49ZmFsc2U7XHJcblxyXG4gICAgaGlkZUFjY2Vzc0Zvcm0oZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmNsb3NlTW9kYWwuZW1pdChldmVudCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG5vdGlmeU1lc3NhZ2UoZXZlbnQpe1xyXG4gICAgICAgIHRoaXMubm90aWZ5LmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGF1dGhTdGF0dXNDaGFuZ2VkKGV2ZW50KXtcclxuICAgICAgICB0aGlzLmF1dGhTdGF0dXMuZW1pdChldmVudCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge05nQ2xhc3N9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdG9yeWJsb2Nrcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja0NvbXBvbmVudH0gZnJvbSBcIi4vc3RvcnlibG9jay5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtUaW1lbGluZUNvbXBvbmVudH0gZnJvbSBcIi4vdGltZWxpbmUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QWRkQnV0dG9uQ29tcG9uZW50fSBmcm9tIFwiLi9hZGQtYnV0dG9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge05vdGlmaWNhdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1NpZGViYXJDb21wb25lbnR9IGZyb20gXCIuL3NpZGViYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7U3RvcnlCbG9ja1R5cGV9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9jay10eXBlXCI7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtXZWJTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3dlYnN0b3JhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge0F1dGhGb3JtQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoLWZvcm0uY29tcG9uZW50XCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jb250ZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDx0aW1lbGluZSBjbGFzcz1cInRpbWVsaW5lLWJsb2NrXCI+PC90aW1lbGluZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0b3J5LWJsb2Nrc1wiPlxyXG4gICAgICAgICAgICAgICAgPHN0b3J5YmxvY2sgKm5nRm9yPVwiI3N0b3J5QmxvY2sgb2Ygc3RvcnlCbG9ja3M7ICNpID0gaW5kZXhcIiBcclxuICAgICAgICAgICAgICAgICAgICBbaW5kZXhdPVwiaVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIFtzdG9yeUJsb2NrSW5mb109XCJzdG9yeUJsb2NrXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW3pvb21MZXZlbF09XCJ6b29tTGV2ZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIFt1c2VySWRdPVwidXNlcklkXCJcclxuICAgICAgICAgICAgICAgICAgICBbZXhwb3NlZEluZGV4XT1cImV4cG9zZWRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie2V4cG9zZWQ6IGV4cG9zZWRJbmRleCA9PSBpfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKHJlbW92ZVN0b3J5QmxvY2tFdmVudCk9XCJyZW1vdmVTdG9yeUJsb2NrKCRldmVudClcIiBcclxuICAgICAgICAgICAgICAgICAgICAoZXhwb3NlRXZlbnQpPVwic2V0RXhwb3NlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAobm90aWZ5KT1cIm5vdGlmeSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0b3J5LWJsb2NrIHt7IHN0b3J5QmxvY2sudHlwZcKgfX1cIj48L3N0b3J5YmxvY2s+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZFN0b3J5QmxvY2soJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJvbk1vdXNlRW50ZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJvbk1vdXNlTGVhdmUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAobW91c2Vtb3ZlKT1cIm9uTW91c2VNb3ZlKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgIDxhZGQtYnV0dG9uICpuZ0lmPVwiYWRkQnV0dG9uLnZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtvZmZzZXRZXT1cImFkZEJ1dHRvbi50b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhZGRTdG9yeUJsb2NrKCRldmVudClcIj48L2FkZC1idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29udHJvbHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ6b29tLWNvbnRyb2xzXCI+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT1cIlpvb20gaW5cIiAoY2xpY2spPVwiem9vbUluKClcIj4rPC9hPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9XCJab29tIG91dFwiIChjbGljayk9XCJ6b29tT3V0KClcIj4mbmRhc2g7PC9hPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPGFzaWRlIFtuZ0NsYXNzXT1cInt2aXNpYmxlOiBtZW51VmlzaWJsZX1cIj5cclxuICAgICAgICAgICAgPHNpZGViYXJcclxuICAgICAgICAgICAgKHN0YXJ0RHJhZ2dpbmcpPVwidG9nZ2xlTWVudShmYWxzZSlcIlxyXG4gICAgICAgICAgICAoZW5kRHJhZ2dpbmcpPVwiYWRkU3RvcnlCbG9jaygkZXZlbnQpXCJcclxuICAgICAgICAgICAgW3N0b3J5QmxvY2tdPVwiZXhwb3NlZFN0b3J5QmxvY2tcIj48L3NpZGViYXI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwidXNlci1hc2lkZVwiIChjbGljayk9XCJkb3dubG9hZFBkZigpXCI+RG93bmxvYWQgUERGPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cInVzZXItYXNpZGVcIiAqbmdJZj1cIiFpc0xvZ2dlZEluKClcIiAoY2xpY2spPVwic2hvd0FjY2Vzc0Zvcm0oKVwiPkxvZ2luL1NpZ251cDwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJ1c2VyLWFzaWRlXCIgKm5nSWY9XCJpc0xvZ2dlZEluKClcIiAoY2xpY2spPVwibG9nT3V0KClcIj5Mb2dvdXQ8L2E+XHJcbiAgICAgICAgICAgIDxhIGlkPVwiY2xvc2UtbWVudVwiIChjbGljayk9XCJ0b2dnbGVNZW51KGZhbHNlKVwiPjwvYT5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgIDxoZWFkZXI+PGEgaWQ9XCJidXJnZXJcIiAoY2xpY2spPVwidG9nZ2xlTWVudSh0cnVlKVwiPjxpIGNsYXNzPVwiZmEgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2E+PC9oZWFkZXI+XHJcbiAgICAgICAgPGF1dGgtZm9ybSBcclxuICAgICAgICAgICAgKm5nSWY9XCJhY2Nlc3NGb3JtVmlzaWJsZVwiIFxyXG4gICAgICAgICAgICAoY2xvc2VNb2RhbCk9XCJoaWRlQWNjZXNzRm9ybSgpXCJcclxuICAgICAgICAgICAgKG5vdGlmeSk9XCJub3RpZnkoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChhdXRoU3RhdHVzKT1cImF1dGhTdGF0dXNDaGFuZ2VkKCRldmVudClcIlxyXG4gICAgICAgICAgICA+PC9hdXRoLWZvcm0+XHJcbiAgICAgICAgPG5vdGlmaWNhdGlvbj48L25vdGlmaWNhdGlvbj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtTdG9yeUJsb2NrU2VydmljZSwgQ29uZmlndXJhdGlvbiwgQXV0aFNlcnZpY2UsIFdlYlN0b3JhZ2VTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtTdG9yeUJsb2NrQ29tcG9uZW50LCBUaW1lbGluZUNvbXBvbmVudCwgQWRkQnV0dG9uQ29tcG9uZW50LCBOb3RpZmljYXRpb25Db21wb25lbnQsIFNpZGViYXJDb21wb25lbnQsIEF1dGhGb3JtQ29tcG9uZW50LCBOZ0NsYXNzXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBAVmlld0NoaWxkKE5vdGlmaWNhdGlvbkNvbXBvbmVudCkgbm90aWZpY2F0aW9uQ29tcG9uZW50Ok5vdGlmaWNhdGlvbkNvbXBvbmVudDtcclxuICAgIHB1YmxpYyBzdG9yeUJsb2NrczpTdG9yeUJsb2NrW107XHJcbiAgICBwdWJsaWMgc3RvcnlCbG9ja1R5cGVzOlN0b3J5QmxvY2tUeXBlW107XHJcbiAgICBwdWJsaWMgc3RvcnlCbG9ja0RlZmF1bHRUeXBlczpTdG9yeUJsb2NrVHlwZVtdO1xyXG4gICAgcHJpdmF0ZSB1c2VySWQ7XHJcbiAgICBwdWJsaWMgem9vbUxldmVsO1xyXG4gICAgcHVibGljIGV4cG9zZWRJbmRleDtcclxuICAgIHB1YmxpYyBleHBvc2VkU3RvcnlCbG9jaztcclxuICAgIHB1YmxpYyBhZGRCdXR0b247XHJcbiAgICBwdWJsaWMgdG9rZW46c3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgbWVudVZpc2libGU7XHJcbiAgICBwdWJsaWMgYWNjZXNzRm9ybVZpc2libGU7XHJcbiAgICBwcml2YXRlIG1heEluZGV4ID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3J5QmxvY2tTZXJ2aWNlOlN0b3J5QmxvY2tTZXJ2aWNlLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbiwgcHJpdmF0ZSB3ZWJTdG9yYWdlU2VydmljZTpXZWJTdG9yYWdlU2VydmljZSwgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHtcclxuICAgICAgICB0aGlzLnVzZXJJZCA9IHRoaXMuYXV0aFVzZXIoKTtcclxuICAgICAgICB0aGlzLmdldFN0b3J5QmxvY2tUeXBlcygpO1xyXG4gICAgICAgIHRoaXMuZ2V0U3RvcnlCbG9ja3ModGhpcy51c2VySWQpO1xyXG4gICAgICAgIHRoaXMuem9vbUxldmVsID0gMTA7XHJcbiAgICAgICAgdGhpcy5leHBvc2VkSW5kZXggPSAtMTtcclxuICAgICAgICB0aGlzLmV4cG9zZWRTdG9yeUJsb2NrID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFkZEJ1dHRvbiA9IHtcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvcDogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tZW51VmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWNjZXNzRm9ybVZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgYXV0aFVzZXIoKXtcclxuICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0SWRGcm9tVG9rZW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgYW5vbnltb3VzVG9rZW4gPSB0aGlzLndlYlN0b3JhZ2VTZXJ2aWNlLmdldCgnYW5vbnltb3VzX3Rva2VuJyk7XHJcbiAgICAgICAgICAgIGlmICghYW5vbnltb3VzVG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIHZhciBhbm9ueW1vdXNUb2tlbiA9IHRoaXMuYXV0aFNlcnZpY2UuZ2VuZXJhdGVBbm9ueW1vdXNUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJTdG9yYWdlU2VydmljZS5wdXQoJ2Fub255bW91c190b2tlbicsIGFub255bW91c1Rva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRJZEZyb21Bbm9ueW1vdXNUb2tlbihhbm9ueW1vdXNUb2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRUb2tlbih2YWx1ZTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMud2ViU3RvcmFnZVNlcnZpY2UucHV0KCd0b2tlbicsdmFsdWUpO1xyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgZ2V0VG9rZW4oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy53ZWJTdG9yYWdlU2VydmljZS5nZXQoJ3Rva2VuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXV0aFN0YXR1c0NoYW5nZWQoKXtcclxuICAgICAgICB0aGlzLnJlZnJlc2hCbG9ja0xpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoQmxvY2tMaXN0KCl7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSB0aGlzLmF1dGhVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5nZXRTdG9yeUJsb2Nrcyh0aGlzLnVzZXJJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RvcnlCbG9ja1R5cGVzKCkge1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja1R5cGVzID0gdGhpcy5zdG9yeUJsb2NrU2VydmljZS5nZXRTdG9yeUJsb2NrVHlwZXMoKTtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tEZWZhdWx0VHlwZXMgPSB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdldFN0b3J5QmxvY2tEZWZhdWx0VHlwZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdG9yeUJsb2NrcyhpZCkge1xyXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja1NlcnZpY2UuZ2V0U3RvcnlCbG9ja3MoaWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF4SW5kZXggPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0b3J5QmxvY2tzW2ldLnR5cGUgPT09ICdjaGFwdGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1heEluZGV4ID0gTWF0aC5tYXgodGhpcy5tYXhJbmRleCwgdGhpcy5zdG9yeUJsb2Nrc1tpXS5ibG9ja0lkIHx8IDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucmVjYWxjdWxhdGVTdG9yeUJsb2NrTnVtYmVycygpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2RvbmUsIGxvYWRlZCAnICsgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGggKyAnIGJsb2NrcycsIHRoaXMuc3RvcnlCbG9ja3MpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTdG9yeUJsb2NrKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2Nrcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMucmVjYWxjdWxhdGVTdG9yeUJsb2NrTnVtYmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dBY2Nlc3NGb3JtKCkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlTWVudShmYWxzZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCkpO1xyXG4gICAgICAgIHRoaXMuYWNjZXNzRm9ybVZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCduby1zY3JvbGwnKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlQWNjZXNzRm9ybSgpIHtcclxuICAgICAgICB0aGlzLmFjY2Vzc0Zvcm1WaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY2FsY3VsYXRlU3RvcnlCbG9ja051bWJlcnMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ051bWJlcmluZyBiZWZvcmUnLHRoaXMuc3RvcnlCbG9ja3MpO1xyXG4gICAgICAgIHZhciBjdXJyZW50VHlwZXMgPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RvcnlCbG9ja1R5cGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUeXBlc1t0aGlzLnN0b3J5QmxvY2tUeXBlc1tpXS5pZF0gPSB0aGlzLnN0b3J5QmxvY2tUeXBlc1tpXTtcclxuICAgICAgICAgICAgY3VycmVudFR5cGVzW3RoaXMuc3RvcnlCbG9ja1R5cGVzW2ldLmlkXS5pbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RvcnlCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRUeXBlID0gdGhpcy5zdG9yeUJsb2Nrc1tpXS50eXBlIHx8IHRoaXMuc3RvcnlCbG9ja0RlZmF1bHRUeXBlc1swXS5pZDtcclxuICAgICAgICAgICAgY3VycmVudFR5cGVzW2N1cnJlbnRUeXBlXSA9IGN1cnJlbnRUeXBlc1tjdXJyZW50VHlwZV0gfHwgdGhpcy5zdG9yeUJsb2NrRGVmYXVsdFR5cGVzWzBdO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tzW2ldLmJsb2NrTnVtYmVyID0gY3VycmVudFR5cGVzW2N1cnJlbnRUeXBlXS5pbmRleCB8fCAwO1xyXG5cclxuICAgICAgICAgICAgY3VycmVudFR5cGVzW2N1cnJlbnRUeXBlXS5pbmRleCsrO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuc3RvcnlCbG9ja1R5cGVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdG9yeUJsb2NrVHlwZXNbal0ubGV2ZWwgPiBjdXJyZW50VHlwZXNbY3VycmVudFR5cGVdLmxldmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFR5cGVzW3RoaXMuc3RvcnlCbG9ja1R5cGVzW2pdLmlkXS5pbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ051bWJlcmluZyBhZnRlcicsdGhpcy5zdG9yeUJsb2Nrcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nT3V0KCl7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hCbG9ja0xpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0xvZ2dlZEluKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHpvb21JbigpIHtcclxuICAgICAgICBpZiAodGhpcy56b29tTGV2ZWwgPCAxMCkge1xyXG4gICAgICAgICAgICB0aGlzLnpvb21MZXZlbCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB6b29tT3V0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnpvb21MZXZlbCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy56b29tTGV2ZWwtLTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZUVudGVyKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5hZGRCdXR0b24gPSB7XHJcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgIHRvcDogZXZlbnQueVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZUxlYXZlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5hZGRCdXR0b24gPSB7XHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3A6IDBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VNb3ZlKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkQnV0dG9uLnZpc2libGUpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRCdXR0b24udG9wID0gZXZlbnQueTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3RvcnlCbG9jayhldmVudCkge1xyXG4gICAgICAgIHRoaXMuYWRkQnV0dG9uID0ge1xyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgdG9wOiAwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHpvb21Db252ZXJzaW9uRmFjdG9yID0gdGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RlcCArICh0aGlzLnpvb21MZXZlbCAqIHRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0cmVuZ3RoKTtcclxuICAgICAgICB2YXIgcG9zaXRpb25BdFpvb20gPSAoKGV2ZW50LnBhZ2VZIC0gdGhpcy5jb25maWd1cmF0aW9uLnpvb20ub2Zmc2V0KSAvIHpvb21Db252ZXJzaW9uRmFjdG9yKTtcclxuICAgICAgICB2YXIgbmV3U3RvcnlCbG9jazpTdG9yeUJsb2NrID0gPFN0b3J5QmxvY2s+IHtcclxuICAgICAgICAgICAgYmxvY2tJZDogdGhpcy5tYXhJbmRleCArIDEsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgICB0aW1lUG9zaXRpb246IHBvc2l0aW9uQXRab29tLFxyXG4gICAgICAgICAgICBpbXBvcnRhbmNlOiAzLFxyXG4gICAgICAgICAgICB0eXBlOiAnY2hhcHRlcidcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubWF4SW5kZXgrKztcclxuXHJcbiAgICAgICAgdmFyIHRtcEFycmF5UG9zID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RvcnlCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcnlCbG9ja3NbaV0udGltZVBvc2l0aW9uID4gcG9zaXRpb25BdFpvb20pIHtcclxuICAgICAgICAgICAgICAgIHRtcEFycmF5UG9zID0gaTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tzLnNwbGljZSh0bXBBcnJheVBvcywgMCwgbmV3U3RvcnlCbG9jayk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgYmxvY2sgaW5kZXggJyArIHRtcEFycmF5UG9zKTtcclxuICAgICAgICB0aGlzLnNldEV4cG9zZWQodG1wQXJyYXlQb3MpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXhwb3NlZChpbmRleCkge1xyXG4gICAgICAgIHRoaXMucmVjYWxjdWxhdGVTdG9yeUJsb2NrTnVtYmVycygpO1xyXG4gICAgICAgIHRoaXMuZXhwb3NlZEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5leHBvc2VkU3RvcnlCbG9jayA9IGluZGV4ID49IDAgPyB0aGlzLnN0b3J5QmxvY2tzW2luZGV4XSA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5jaGFuZ2VFeHBvc2VkSW5kZXgoaW5kZXgpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCduby1zY3JvbGwnKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLnNhdmVTdG9yeUJsb2NrKHRoaXMudXNlcklkLCB0aGlzLnN0b3J5QmxvY2tzW2ldKS5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5KG5vdGlmaWNhdGlvbil7XHJcbiAgICAgICAgaWYoKG5vdGlmaWNhdGlvbiB8fCB7fSkudHlwZSA9PSAnZXJyb3InKXtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25Db21wb25lbnQuZXJyb3Iobm90aWZpY2F0aW9uLm1lc3NhZ2UgfHwgJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKChub3RpZmljYXRpb24gfHwge30pLnR5cGUgPT0gJ3N1Y2Nlc3MnKXtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25Db21wb25lbnQuc3VjY2Vzcyhub3RpZmljYXRpb24ubWVzc2FnZSB8fCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uQ29tcG9uZW50Lm1lc3NhZ2Uobm90aWZpY2F0aW9uLm1lc3NhZ2UgfHwgJycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRQZGYoKXtcclxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmRvd25sb2FkUGRmKHRoaXMuc3RvcnlCbG9ja3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZU1lbnUodmlzaWJpbGl0eSl7XHJcbiAgICAgICAgdGhpcy5tZW51VmlzaWJsZSA9IHZpc2liaWxpdHk7XHJcbiAgICAgICAgaWYodmlzaWJpbGl0eSl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCduby1zY3JvbGwnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XHJcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2FwcC1jb250ZW50LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9ICAgIGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcblxyXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbSFRUUF9QUk9WSURFUlMsIENvbmZpZ3VyYXRpb25dKTtcclxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9hbmltYXRlL2FuaW1hdGlvbl9idWlsZGVyJztcclxuaW1wb3J0IHtDc3NBbmltYXRpb25CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvYW5pbWF0ZS9jc3NfYW5pbWF0aW9uX2J1aWxkZXInO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tjb2xsYXBzZV0nXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGFwc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgQElucHV0KCkgY29sbGFwc2U6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9hbmltYXRpb246IENzc0FuaW1hdGlvbkJ1aWxkZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYW5pbWF0aW9uQnVpbGRlcjpBbmltYXRpb25CdWlsZGVyLCBwcml2YXRlIF9lbDpFbGVtZW50UmVmKSB7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gYW5pbWF0aW9uQnVpbGRlci5jc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XHJcbiAgICAgICAgLy8gaWYgdGhlIGNoYW5nZSBoYXBwZW5lZCBpbiB0aGUgY29sbGFwc2UgcHJvcGVydHlcclxuICAgICAgICBpZiAoY2hhbmdlcy5jb2xsYXBzZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb2xsYXBzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBfYmFzZVNlcXVlbmNlKCk6IENzc0FuaW1hdGlvbkJ1aWxkZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbmltYXRpb25cclxuICAgICAgICAgICAgLnNldER1cmF0aW9uKDI1MCkgLy8gdGhlIHRyYW5zaXRpb24gZHVyYXRpb25cclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdjb2xsYXBzZScpIC8vIHJlbW92ZSBhIGNsYXNzIGJlZm9yZSB0aGUgdHJhbnNpdGlvbiBzdGFydFxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2luJylcclxuICAgICAgICAgICAgLmFkZEFuaW1hdGlvbkNsYXNzKCdjb2xsYXBzaW5nJyk7IC8vIGFkZCBhIHRlbXAgY2xhc3MgZm9yIHRoZSB0cmFuc2l0aW9uIHBlcmlvZFxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYmFzZVNlcXVlbmNlXHJcbiAgICAgICAgICAgIC5zZXRGcm9tU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5fZWwubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgKyAncHgnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gYSBpcyB0aGUgQW5pbWF0aW9uIGluc3RhbmNlIHJ1bm5pbmcgdGhpcyBhbmltYXRpb24uXHJcbiAgICAgICAgbGV0IGEgPSB0aGlzLl9hbmltYXRpb24uc3RhcnQodGhpcy5fZWwubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgYS5vbkNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICAgICAgYS5yZW1vdmVDbGFzc2VzKFsnaW4nXSk7IC8vIHJhcGlkIGNoYW5nZSB3aWxsIGxlYXZlICdpbidcclxuICAgICAgICAgICAgYS5hZGRDbGFzc2VzKFsnY29sbGFwc2UnXSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbiAvLyAxc3QgYW5pbWF0aW9uIGJ1aWxkXHJcbiAgICAgICAgICAgIC5zZXREdXJhdGlvbigwKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2NvbGxhcHNlJylcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdpbicpXHJcbiAgICAgICAgICAgIC5zZXRGcm9tU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQodGhpcy5fZWwubmF0aXZlRWxlbWVudCkgLy8gMXN0IGFuaW1hdGlvbiBzdGFydFxyXG4gICAgICAgICAgICAub25Db21wbGV0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYSA9IHRoaXMuX2Jhc2VTZXF1ZW5jZSAvLyAgMm5kIGFuaW1hdGlvbiBidWlsZFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRGcm9tU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5fZWwubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgKyAncHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQodGhpcy5fZWwubmF0aXZlRWxlbWVudCk7IC8vIDJuZCBhbmltYXRpb24gc3RhcnRcclxuXHJcbiAgICAgICAgICAgICAgICBhLm9uQ29tcGxldGUoKCkgPT4gIGEuYWRkQ2xhc3NlcyhbJ2NvbGxhcHNlJywgJ2luJ10pICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
