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
System.register("services/storyblocks.service", ["angular2/core", 'angular2/http', 'rxjs/Rx', "rxjs/Observable", 'rxjs/add/operator/share', "mock/mock-storyblocks", "mock/mock-storyblock-types"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_1, http_1, Observable_1, mock_storyblocks_1, mock_storyblock_types_1;
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
            function (_2) {},
            function (mock_storyblocks_1_1) {
                mock_storyblocks_1 = mock_storyblocks_1_1;
            },
            function (mock_storyblock_types_1_1) {
                mock_storyblock_types_1 = mock_storyblock_types_1_1;
            }],
        execute: function() {
            StoryBlockService = (function () {
                function StoryBlockService(http) {
                    var _this = this;
                    this.http = http;
                    this._exposedIndex = -1;
                    this.indexChange$ = new Observable_1.Observable(function (observer) {
                        return _this._observer = observer;
                    }).share();
                    // share() allows multiple subscribers
                }
                StoryBlockService.prototype.changeExposedIndex = function (index) {
                    this._exposedIndex = index;
                    this._observer.next(index);
                };
                StoryBlockService.prototype.getExposedIndex = function () {
                    return this._exposedIndex;
                };
                StoryBlockService.prototype.getStoryBlocks = function () {
                    return this.http.get('/storyblocks/')
                        .map(function (res) { return res.json(); });
                };
                StoryBlockService.prototype.saveStoryBlock = function (storyBlock) {
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/x-www-form-urlencoded'
                    });
                    var options = new http_1.RequestOptions({
                        headers: headers
                    });
                    if (!!storyBlock._id) {
                        return this.http.put('/storyblocks/' + storyBlock._id, "data=" + JSON.stringify(storyBlock), options)
                            .map(function (res) { return res.json(); });
                    }
                    else {
                        return this.http.post('/storyblocks/', "data=" + JSON.stringify(storyBlock), options)
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
                    this.http.post('/storyblocks/', "data=" + JSON.stringify(mock_storyblocks_1.STORYBLOCKS), options).map(function (res) { return res.text(); }).subscribe();
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
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], StoryBlockService);
                return StoryBlockService;
            }());
            exports_5("StoryBlockService", StoryBlockService);
        }
    }
});
System.register("services/utils.service", ["angular2/core"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
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
            exports_6("UtilsService", UtilsService);
        }
    }
});
System.register("config/configuration", ["angular2/core"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_3;
    var Configuration;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            }],
        execute: function() {
            Configuration = (function () {
                function Configuration() {
                    this.zoom = {
                        offset: 0,
                        step: 150,
                        strength: 10
                    };
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
System.register("components/storyblock.component", ["angular2/core", "services/utils.service", "angular2/src/animate/animation_builder", "services/storyblocks.service", "config/configuration"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_4, utils_service_1, animation_builder_1, storyblocks_service_1, configuration_1;
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
            function (configuration_1_1) {
                configuration_1 = configuration_1_1;
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
                        // console.log('[StoryBlock #' + this.index + '] Fading out...[' + this._zoomLevel + '<' + this.storyBlockInfo.importance + ']');
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
                        top: this.configuration.zoom.offset + ((this.configuration.zoom.step + (this._previousZoomLevel * this.configuration.zoom.strength)) * this.storyBlockInfo.timePosition) + 'px'
                    };
                    var toStyle = {
                        top: this.configuration.zoom.offset + ((this.configuration.zoom.step + (this._zoomLevel * this.configuration.zoom.strength)) * this.storyBlockInfo.timePosition) + 'px'
                    };
                    // console.log('[StoryBlock #' + this.index + '] Changing position from ' + (fromStyle.top) + ' to ' + (toStyle.top) + ' ...');
                    if (this._zoomLevel > this.storyBlockInfo.importance) {
                        // console.log('[StoryBlock #' + this.index + '] ...and fading in [' + this._zoomLevel + '>' + this.storyBlockInfo.importance + ']');
                        toStyle['opacity'] = 1;
                    }
                    else {
                        // console.log('[StoryBlock #' + this.index + '] ...and fading out');
                        toStyle['opacity'] = 0;
                    }
                    toStyle['transition-timing-function'] = 'cubic-bezier(0.575, 0.255, 0.440, 0.985);';
                    animation
                        .setDuration(speed);
                    animation
                        .setFromStyles(fromStyle)
                        .setToStyles(toStyle);
                    if (!!this._actionTimeout) {
                        // console.log('[StoryBlock #' + this.index + '] Animation removed');
                        clearTimeout(this._actionTimeout);
                    }
                    var _self = this;
                    this._actionTimeout = setTimeout(function () {
                        animation
                            .start(_self._e.nativeElement);
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
                    console.log('Should remove', index, event);
                    this.storyBlockService.deleteStoryBlock(this.storyBlockInfo).subscribe(function (data) {
                        console.log(data);
                    }, function () {
                        console.log('Removing block index ' + _this.index);
                        _this.removeStoryBlockEvent.emit(_this.index);
                    });
                };
                StoryBlockComponent.prototype.save = function (index, event) {
                    var _this = this;
                    this.storyBlockService.saveStoryBlock(this.storyBlockInfo).subscribe(function (data) {
                        _this.storyBlockInfo = data;
                        console.log('Saving temporary data ', _this.storyBlockInfo);
                        _this.storyBlockLocalSave = JSON.parse(JSON.stringify(_this.storyBlockInfo));
                    }, function () {
                        console.log('Saved ', _this.storyBlockInfo);
                    });
                };
                StoryBlockComponent.prototype.cancel = function () {
                    this.exposeEvent.emit(-1);
                    if (!!this.storyBlockLocalSave) {
                        this.storyBlockInfo = JSON.parse(JSON.stringify(this.storyBlockLocalSave));
                    }
                    else {
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
                        template: "\n        <div class=\"index\"><span *ngIf=\"storyBlockInfo.type == 'chapter'\">{{utilsService.getRomanNumeral(storyBlockInfo.blockNumber + 1)}}</span></div>\n        <div class=\"text-container\">\n            <input class=\"title\" [attr.readonly]=\"_exposed ? null : true\" [(ngModel)]=\"storyBlockInfo.title\" placeholder=\"Insert a title\" />\n            <textarea class=\"description\" [attr.readonly]=\"_exposed ? null : true\" [(ngModel)]=\"storyBlockInfo.description\" placeholder=\"Start writing your story here...\"></textarea>\n            <div class=\"default-actions\">\n                <a (click)=\"edit(index, $event)\" class=\"button inline-button primary\">Edit</a>\n                <a (click)=\"remove(index, $event)\" class=\"button inline-button alert\">Remove</a>\n            </div>\n            <div class=\"exposed-actions\">\n                <a (click)=\"save(index, $event)\" class=\"button inline-button primary\">Save</a>\n                <a (click)=\"cancel()\" class=\"button inline-button secondary\">Cancel</a>\n            </div>\n        </div>\n    ",
                        providers: [utils_service_1.UtilsService, storyblocks_service_1.StoryBlockService, configuration_1.Configuration],
                        inputs: ['storyBlockInfo', 'index']
                    }), 
                    __metadata('design:paramtypes', [animation_builder_1.AnimationBuilder, core_4.ElementRef, utils_service_1.UtilsService, storyblocks_service_1.StoryBlockService, configuration_1.Configuration])
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
System.register("components/sidebar.component", ["angular2/core", "services/storyblocks.service"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_7, storyblocks_service_2;
    var SidebarComponent;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (storyblocks_service_2_1) {
                storyblocks_service_2 = storyblocks_service_2_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
                function SidebarComponent(_storyBlockService) {
                    this._storyBlockService = _storyBlockService;
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
                    console.log(this._index);
                };
                SidebarComponent.prototype.ngOnDestroy = function () {
                    this._subscription.unsubscribe();
                };
                __decorate([
                    core_7.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], SidebarComponent.prototype, "storyBlock", null);
                SidebarComponent = __decorate([
                    core_7.Component({
                        selector: 'sidebar',
                        template: "\n        <div class=\"sidebar-action\" *ngIf=\"_index == -1\">\n            <a class=\"create-storyblock\">Create storyblock</a>\n        </div>\n        <div class=\"sidebar-action\" *ngIf=\"_index >= 0 && !!_storyBlock\">\n            <div class=\"form-group\">\n                <label>Storyblock type</label>\n                <div class=\"select-wrapper\">\n                    <select [(ngModel)]=\"_storyBlock.type\">\n                        <option *ngFor=\"#storyBlockType of storyBlockTypes\" value={{storyBlockType.id}}>{{storyBlockType.name}}</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n    ",
                        inputs: ['storyBlock']
                    }), 
                    __metadata('design:paramtypes', [storyblocks_service_2.StoryBlockService])
                ], SidebarComponent);
                return SidebarComponent;
            }());
            exports_11("SidebarComponent", SidebarComponent);
        }
    }
});
System.register("models/user", [], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User() {
                }
                return User;
            }());
            exports_12("User", User);
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
System.register("services/auth.service", ["angular2/core", 'angular2/http'], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var core_8, http_2;
    var AuthService;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(http) {
                    this.http = http;
                    this.token = '';
                }
                AuthService.prototype.logout = function () {
                    this.token = undefined;
                    return true;
                };
                AuthService.prototype.login = function (user) {
                    return this.http.put('/auth/login', JSON.stringify(user))
                        .map(function (res) { return res.text(); });
                };
                AuthService.prototype.register = function (user) {
                    return this.http.put('/auth/login', JSON.stringify(user))
                        .map(function (res) { return res.text(); });
                };
                AuthService.prototype.isLoggedIn = function () {
                    var tokenDataSplit = (this.token || '').split('.')[1];
                    var tokenDataRaw = atob(tokenDataSplit);
                    var tokenData = JSON.parse(tokenDataRaw);
                    return (tokenData.exp || 0) > Date.now() / 1000;
                };
                ;
                AuthService = __decorate([
                    core_8.Injectable(), 
                    __metadata('design:paramtypes', [http_2.Http])
                ], AuthService);
                return AuthService;
            }());
            exports_14("AuthService", AuthService);
        }
    }
});
System.register("services/validators.service", [], function(exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
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
    exports_15("emailValidator", emailValidator);
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
    exports_15("matchingPasswords", matchingPasswords);
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("components/auth-form.component", ["angular2/core", "models/user", "services/auth.service", "angular2/common", "services/validators.service"], function(exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var core_9, user_1, auth_service_1, common_1, validators_service_1;
    var AuthFormComponent;
    return {
        setters:[
            function (core_9_1) {
                core_9 = core_9_1;
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
            }],
        execute: function() {
            AuthFormComponent = (function () {
                function AuthFormComponent(authService, builder) {
                    this.authService = authService;
                    this.builder = builder;
                    this.user = new user_1.User();
                    this.submitted = false;
                    this.closeModal = new core_9.EventEmitter();
                    this.user = new user_1.User();
                    this.submitted = false;
                    this.form = builder.group({
                        name: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.compose([common_1.Validators.required, validators_service_1.emailValidator])],
                        password: ['', common_1.Validators.required],
                        confirmPassword: ['', common_1.Validators.required],
                    }, { validator: validators_service_1.matchingPasswords('password', 'confirmPassword') });
                }
                AuthFormComponent.prototype.close = function (event) {
                    this.closeModal.emit(event);
                };
                AuthFormComponent.prototype.onSignUp = function (event) {
                    this.submitted = true;
                    console.log(JSON.stringify(this.form.value));
                    if (this.form.valid) {
                    }
                };
                __decorate([
                    core_9.Output(), 
                    __metadata('design:type', core_9.EventEmitter)
                ], AuthFormComponent.prototype, "closeModal", void 0);
                AuthFormComponent = __decorate([
                    core_9.Component({
                        selector: 'auth-form',
                        template: "\n        <div class=\"form-wrapper\">\n            <div class=\"flexbox flex-row\">\n                <h1>Become a storyteller</h1>\n                <div><a class=\"close\" (click)=\"close($event)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></a></div>\n            </div>\n            <form [ngFormModel]=\"form\" (ngSubmit)=\"onSignUp($event)\" novalidate>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your name\"\n                    [(ngModel)]=\"user.name\"\n                    [ngFormControl]=\"form.controls['name']\"\n                    #name=\"ngForm\"\n                    >\n                <label for=\"name\">Name</label>\n                <div  *ngIf=\"(name.dirty || submitted) && !name.valid\" class=\"panel panel-error\">\n                    Your name is required\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your email\"\n                    [(ngModel)]=\"user.email\" \n                    [ngFormControl]=\"form.controls['email']\"\n                    #email=\"ngForm\"\n                    >\n                <label for=\"email\">Email</label>\n                <div  *ngIf=\"(email.dirty || submitted) && !email.valid\" class=\"panel panel-error\">\n                    Email is invalid\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Your password\"\n                    [(ngModel)]=\"user.password\" \n                    [ngFormControl]=\"form.controls['password']\"\n                    #password=\"ngForm\"\n                    >\n                <label for=\"password\">Password</label>\n                <div  *ngIf=\"(password.dirty || submitted) && !password.valid\" class=\"panel panel-error\">\n                    The password should be at least 6 characters long\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm password\"\n                    [(ngModel)]=\"user.confirmPassword\" \n                    [ngFormControl]=\"form.controls['confirmPassword']\"\n                    #confirmPassword=\"ngForm\"\n                    >\n                <label for=\"confirm-password\">Password</label>\n                <div *ngIf=\"(confirmPassword.dirty || submitted) && !confirmPassword.valid\" class=\"panel panel-error\">\n                    The passwords don't match\n                </div>\n              </div>\n              <button type=\"submit\" class=\"button primary block-button\">Sign up</button>\n            </form>\n        </div>\n    ",
                        providers: [auth_service_1.AuthService],
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, common_1.FormBuilder])
                ], AuthFormComponent);
                return AuthFormComponent;
            }());
            exports_16("AuthFormComponent", AuthFormComponent);
        }
    }
});
System.register("components/app-content.component", ['angular2/core', 'angular2/common', "services/storyblocks.service", "components/storyblock.component", "components/timeline.component", "components/add-button.component", "components/sidebar.component", "components/auth-form.component", "config/configuration"], function(exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var core_10, common_2, storyblocks_service_3, storyblock_component_1, timeline_component_1, add_button_component_1, sidebar_component_1, auth_form_component_1, configuration_2;
    var AppComponent;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
            },
            function (common_2_1) {
                common_2 = common_2_1;
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
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            },
            function (auth_form_component_1_1) {
                auth_form_component_1 = auth_form_component_1_1;
            },
            function (configuration_2_1) {
                configuration_2 = configuration_2_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(storyBlockService, configuration) {
                    this.storyBlockService = storyBlockService;
                    this.configuration = configuration;
                    this.token = '';
                    this.maxIndex = 0;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getStoryBlockTypes();
                    this.getStoryBlocks();
                    this.zoomLevel = 10;
                    this.exposedIndex = -1;
                    this.exposedStoryBlock = null;
                    this.addButton = {
                        visible: false,
                        top: 0
                    };
                    this.accessFormVisible = false;
                    // this.storyBlockService.generateTestData().subscribe(
                    //     err => console.error(err),
                    //     () => console.log('done, loaded ' + this.storyBlocks.length + ' blocks')
                    // );
                };
                AppComponent.prototype.getStoryBlockTypes = function () {
                    this.storyBlockTypes = this.storyBlockService.getStoryBlockTypes();
                    this.storyBlockDefaultTypes = this.storyBlockService.getStoryBlockDefaultTypes();
                };
                AppComponent.prototype.getStoryBlocks = function () {
                    var _this = this;
                    this.storyBlockService.getStoryBlocks().subscribe(function (data) {
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
                        this.storyBlockService.saveStoryBlock(this.storyBlocks[i]).subscribe();
                    }
                };
                AppComponent.prototype.downloadPdf = function () {
                    this.storyBlockService.downloadPdf(this.storyBlocks);
                };
                AppComponent = __decorate([
                    core_10.Component({
                        selector: 'app-content',
                        template: "\n        <main>\n            <timeline class=\"timeline-block\"></timeline>\n            <div class=\"story-blocks\">\n                <storyblock *ngFor=\"#storyBlock of storyBlocks; #i = index\" \n                    [index]=\"i\" \n                    [storyBlockInfo]=\"storyBlock\" \n                    [zoomLevel]=\"zoomLevel\"\n                    [exposedIndex]=\"exposedIndex\"\n                    [ngClass]=\"{exposed: exposedIndex == i}\"\n                    (removeStoryBlockEvent)=\"removeStoryBlock($event)\" \n                    (exposeEvent)=\"setExposed($event)\"\n                    class=\"story-block {{ storyBlock.type\u00A0}}\"></storyblock>\n            </div>\n            <div class=\"timeline\"\n                (click)=\"addStoryBlock($event)\"\n                (mouseenter)=\"onMouseEnter($event)\"\n                (mouseleave)=\"onMouseLeave($event)\"\n                (mousemove)=\"onMouseMove($event)\">\n                <add-button *ngIf=\"addButton.visible\"\n                    [offsetY]=\"addButton.top\"\n                    (click)=\"addStoryBlock($event)\"></add-button>\n            </div>\n            <div id=\"controls\">\n                <div id=\"zoom-controls\">              \n                    <a title=\"Zoom in\" (click)=\"zoomIn()\">+</a>  \n                    <a title=\"Zoom out\" (click)=\"zoomOut()\">&ndash;</a>                \n                </div>            \n            </div>\n        </main>\n        <aside>\n            <sidebar [storyBlock]=\"exposedStoryBlock\"></sidebar>\n            <a class=\"user-aside\" (click)=\"downloadPdf()\">Download PDF</a>\n            <a class=\"user-aside\" (click)=\"showAccessForm()\">Login/Signup</a>\n        </aside>\n        <auth-form *ngIf=\"accessFormVisible\" (closeModal)=\"hideAccessForm()\"></auth-form>\n    ",
                        providers: [storyblocks_service_3.StoryBlockService, configuration_2.Configuration],
                        directives: [storyblock_component_1.StoryBlockComponent, timeline_component_1.TimelineComponent, add_button_component_1.AddButtonComponent, sidebar_component_1.SidebarComponent, auth_form_component_1.AuthFormComponent, common_2.NgClass]
                    }), 
                    __metadata('design:paramtypes', [storyblocks_service_3.StoryBlockService, configuration_2.Configuration])
                ], AppComponent);
                return AppComponent;
            }());
            exports_17("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "components/app-content.component", 'angular2/http'], function(exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var browser_1, app_content_component_1, http_3;
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
            }],
        execute: function() {
            browser_1.bootstrap(app_content_component_1.AppComponent, [http_3.HTTP_PROVIDERS]);
        }
    }
});
System.register("directives/collapse.directive", ['angular2/core', 'angular2/src/animate/animation_builder'], function(exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    var core_11, animation_builder_2;
    var Collapse;
    return {
        setters:[
            function (core_11_1) {
                core_11 = core_11_1;
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
                    core_11.Input(), 
                    __metadata('design:type', Boolean)
                ], Collapse.prototype, "collapse", void 0);
                Collapse = __decorate([
                    core_11.Directive({
                        selector: '[collapse]'
                    }), 
                    __metadata('design:paramtypes', [animation_builder_2.AnimationBuilder, core_11.ElementRef])
                ], Collapse);
                return Collapse;
            }());
            exports_19("Collapse", Collapse);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2svbW9jay1zdG9yeWJsb2Nrcy50cyIsIm1vY2svbW9jay1zdG9yeWJsb2NrLXR5cGVzLnRzIiwic2VydmljZXMvc3RvcnlibG9ja3Muc2VydmljZS50cyIsInNlcnZpY2VzL3V0aWxzLnNlcnZpY2UudHMiLCJjb25maWcvY29uZmlndXJhdGlvbi50cyIsImNvbXBvbmVudHMvc3RvcnlibG9jay5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3RpbWVsaW5lLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvYWRkLWJ1dHRvbi5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3NpZGViYXIuY29tcG9uZW50LnRzIiwibW9kZWxzL3VzZXIudHMiLCJzZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiLCJzZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UudHMiLCJjb21wb25lbnRzL2F1dGgtZm9ybS5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL2FwcC1jb250ZW50LmNvbXBvbmVudC50cyIsImJvb3QudHMiLCJkaXJlY3RpdmVzL2NvbGxhcHNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFFYSxXQUFXOzs7O1lBQVgseUJBQUEsV0FBVyxHQUE4QjtnQkFDbEQ7b0JBQ0ksT0FBTyxFQUFFLENBQUM7b0JBQ1YsS0FBSyxFQUFFLGFBQWE7b0JBQ3BCLFdBQVcsRUFBRSxrbkJBQWtuQjtvQkFDL25CLFlBQVksRUFBRSxDQUFDO29CQUNmLFVBQVUsRUFBRSxDQUFDLENBQUM7b0JBQ2QsV0FBVyxFQUFDLENBQUM7b0JBQ2IsSUFBSSxFQUFDLFNBQVM7aUJBQ2pCO2dCQUNEO29CQUNJLE9BQU8sRUFBRSxDQUFDO29CQUNWLEtBQUssRUFBRSxjQUFjO29CQUNyQixXQUFXLEVBQUUsa25CQUFrbkI7b0JBQy9uQixZQUFZLEVBQUUsQ0FBQztvQkFDZixVQUFVLEVBQUUsQ0FBQztvQkFDYixXQUFXLEVBQUMsQ0FB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QUFHLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxJQUFJO3lCQUNyRCxDQUFDOzZCQUNELEtBQUssQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsc0JBQXNCO3dCQUUxRCxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQU8sT0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQWhDLENBQWdDLENBQUUsQ0FBQztvQkFDM0QsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkFoRUQ7b0JBQUMsYUFBSyxFQUFFOzswREFBQTtnQkFMWjtvQkFBQyxpQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3FCQUN6QixDQUFDOzs0QkFBQTtnQkFvRUYsZUFBQztZQUFELENBbEVBLEFBa0VDLElBQUE7WUFsRUQsZ0NBa0VDLENBQUEiLCJmaWxlIjoiLi4vLi4vLi4vYW5ndWxhcmF0dGFjazIwMTYtY2hyb25vc3Rvcmllcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0b3J5QmxvY2t9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9ja1wiO1xuXG5leHBvcnQgY29uc3QgU1RPUllCTE9DS1M6U3RvcnlCbG9ja1tdID0gPFN0b3J5QmxvY2tbXT5bXG4gICAge1xuICAgICAgICBibG9ja0lkOiAyLFxuICAgICAgICB0aXRsZTogJ0ZpcnN0IGJsb2NrJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxuICAgICAgICB0aW1lUG9zaXRpb246IDIsXG4gICAgICAgIGltcG9ydGFuY2U6IC0xLFxuICAgICAgICBibG9ja051bWJlcjowLFxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBibG9ja0lkOiAzLFxuICAgICAgICB0aXRsZTogJ1NlY29uZCBibG9jaycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcbiAgICAgICAgdGltZVBvc2l0aW9uOiAzLFxuICAgICAgICBpbXBvcnRhbmNlOiAxLFxuICAgICAgICBibG9ja051bWJlcjoxLFxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBibG9ja0lkOiA1LFxuICAgICAgICB0aXRsZTogJ1RoaXJkIGJsb2NrJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxuICAgICAgICB0aW1lUG9zaXRpb246IDUsXG4gICAgICAgIGltcG9ydGFuY2U6IC0xLFxuICAgICAgICBibG9ja051bWJlcjoyLFxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBibG9ja0lkOjYsXG4gICAgICAgIHRpdGxlOiAnRm91cnRoIGJsb2NrJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxuICAgICAgICB0aW1lUG9zaXRpb246IDYsXG4gICAgICAgIGltcG9ydGFuY2U6IDUsXG4gICAgICAgIGJsb2NrTnVtYmVyOjMsXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJsb2NrSWQ6IDcsXG4gICAgICAgIHRpdGxlOiAnRmlmdGggYmxvY2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXG4gICAgICAgIHRpbWVQb3NpdGlvbjogNyxcbiAgICAgICAgaW1wb3J0YW5jZTogMyxcbiAgICAgICAgYmxvY2tOdW1iZXI6NCxcbiAgICAgICAgdHlwZTonY2hhcHRlcidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmxvY2tJZDogMTAsXG4gICAgICAgIHRpdGxlOiAnU2l4dGggYmxvY2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMTAsXG4gICAgICAgIGltcG9ydGFuY2U6IDExLFxuICAgICAgICBibG9ja051bWJlcjo1LFxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBibG9ja0lkOiAxMixcbiAgICAgICAgdGl0bGU6ICdTZXZlbnRoIGJsb2NrJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxuICAgICAgICB0aW1lUG9zaXRpb246IDEyLFxuICAgICAgICBpbXBvcnRhbmNlOiA5LFxuICAgICAgICBibG9ja051bWJlcjo2LFxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBibG9ja0lkOiAxNSxcbiAgICAgICAgdGl0bGU6ICdFaWdodGggYmxvY2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMTUsXG4gICAgICAgIGltcG9ydGFuY2U6IDgsXG4gICAgICAgIGJsb2NrTnVtYmVyOjcsXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJsb2NrSWQ6IDE2LFxuICAgICAgICB0aXRsZTogJ05pbnRoIGJsb2NrJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxuICAgICAgICB0aW1lUG9zaXRpb246IDE2LFxuICAgICAgICBpbXBvcnRhbmNlOiAzLFxuICAgICAgICBibG9ja051bWJlcjo4LFxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBibG9ja0lkOiAxNyxcbiAgICAgICAgdGl0bGU6ICdUZW50aCBibG9jaycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcbiAgICAgICAgdGltZVBvc2l0aW9uOiAxNyxcbiAgICAgICAgaW1wb3J0YW5jZTogMixcbiAgICAgICAgYmxvY2tOdW1iZXI6OSxcbiAgICAgICAgdHlwZTonY2hhcHRlcidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmxvY2tJZDogMTksXG4gICAgICAgIHRpdGxlOiAnRWxldmVudGggYmxvY2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMTksXG4gICAgICAgIGltcG9ydGFuY2U6IDExLFxuICAgICAgICBibG9ja051bWJlcjoxMCxcbiAgICAgICAgdHlwZTonY2hhcHRlcidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmxvY2tJZDogMjEsXG4gICAgICAgIHRpdGxlOiAnVHdlbGZ0aCBibG9jaycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcbiAgICAgICAgdGltZVBvc2l0aW9uOiAyMSxcbiAgICAgICAgaW1wb3J0YW5jZTogNyxcbiAgICAgICAgYmxvY2tOdW1iZXI6MTEsXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJsb2NrSWQ6IDIyLFxuICAgICAgICB0aXRsZTogJ1RoaXJ0ZWVudGggYmxvY2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMjIsXG4gICAgICAgIGltcG9ydGFuY2U6IDIsXG4gICAgICAgIGJsb2NrTnVtYmVyOjEyLFxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBibG9ja0lkOiAyNSxcbiAgICAgICAgdGl0bGU6ICdGb3VydGVlbnRoIGJsb2NrJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxuICAgICAgICB0aW1lUG9zaXRpb246IDI1LFxuICAgICAgICBpbXBvcnRhbmNlOiA3LFxuICAgICAgICBibG9ja051bWJlcjoxMyxcbiAgICAgICAgdHlwZTonY2hhcHRlcidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmxvY2tJZDogMjcsXG4gICAgICAgIHRpdGxlOiAnRmlmdGVlbnRoIGJsb2NrJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxuICAgICAgICB0aW1lUG9zaXRpb246IDI3LFxuICAgICAgICBpbXBvcnRhbmNlOiA1LFxuICAgICAgICBibG9ja051bWJlcjoxNCxcbiAgICAgICAgdHlwZTonY2hhcHRlcidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmxvY2tJZDogMjgsXG4gICAgICAgIHRpdGxlOiAnU2l4dGVlbnRoIGJsb2NrJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxuICAgICAgICB0aW1lUG9zaXRpb246IDI4LFxuICAgICAgICBpbXBvcnRhbmNlOiA1LFxuICAgICAgICBibG9ja051bWJlcjoxNSxcbiAgICAgICAgdHlwZTonY2hhcHRlcidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmxvY2tJZDogMjksXG4gICAgICAgIHRpdGxlOiAnU2V2ZW50ZWVudGggYmxvY2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMjksXG4gICAgICAgIGltcG9ydGFuY2U6IDMsXG4gICAgICAgIGJsb2NrTnVtYmVyOjE2LFxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBibG9ja0lkOiAzMCxcbiAgICAgICAgdGl0bGU6ICdFaWdodGVlbnRoIGJsb2NrJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxuICAgICAgICB0aW1lUG9zaXRpb246IDMwLFxuICAgICAgICBpbXBvcnRhbmNlOiAtMSxcbiAgICAgICAgYmxvY2tOdW1iZXI6MTcsXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXG4gICAgfSxcbl07IiwiaW1wb3J0IHtTdG9yeUJsb2NrfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2tcIjtcbmltcG9ydCB7U3RvcnlCbG9ja1R5cGV9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9jay10eXBlXCI7XG5cbmV4cG9ydCBjb25zdCBTVE9SWUJMT0NLX1RZUEVTOlN0b3J5QmxvY2tUeXBlW10gPSA8U3RvcnlCbG9ja1R5cGVbXT5bXG4gICAge1xuICAgICAgICBpZDogJ2NoYXB0ZXInLFxuICAgICAgICBuYW1lOiAnQ2hhcHRlcicsXG4gICAgICAgIGxldmVsOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAncGFyYWdyYXBoJyxcbiAgICAgICAgbmFtZTogJ1BhcmFncmFwaCcsXG4gICAgICAgIGxldmVsOiAxXG4gICAgfSxcbl07IiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge1N0b3J5QmxvY2t9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9ja1wiO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zaGFyZSc7XG5pbXBvcnQge09ic2VydmVyfSBmcm9tICdyeGpzL09ic2VydmVyJztcbmltcG9ydCB7U1RPUllCTE9DS1N9IGZyb20gXCIuLi9tb2NrL21vY2stc3RvcnlibG9ja3NcIjtcbmltcG9ydCB7U3RvcnlCbG9ja1R5cGV9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9jay10eXBlXCI7XG5pbXBvcnQge1NUT1JZQkxPQ0tfVFlQRVN9IGZyb20gXCIuLi9tb2NrL21vY2stc3RvcnlibG9jay10eXBlc1wiO1xuZGVjbGFyZSB2YXIgcGRmTWFrZTogYW55O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RvcnlCbG9ja1NlcnZpY2Uge1xuICAgIHByaXZhdGUgX2V4cG9zZWRJbmRleCA9IC0xO1xuICAgIGluZGV4Q2hhbmdlJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICAgIHByaXZhdGUgX29ic2VydmVyOiBPYnNlcnZlcjxudW1iZXI+O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOkh0dHApIHtcbiAgICAgICAgdGhpcy5pbmRleENoYW5nZSQgPSBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PlxuICAgICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBvYnNlcnZlcikuc2hhcmUoKTtcbiAgICAgICAgLy8gc2hhcmUoKSBhbGxvd3MgbXVsdGlwbGUgc3Vic2NyaWJlcnNcbiAgICB9XG4gICAgY2hhbmdlRXhwb3NlZEluZGV4KGluZGV4KSB7XG4gICAgICAgIHRoaXMuX2V4cG9zZWRJbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLl9vYnNlcnZlci5uZXh0KGluZGV4KTtcbiAgICB9XG4gICAgZ2V0RXhwb3NlZEluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhwb3NlZEluZGV4O1xuICAgIH1cblxuICAgIGdldFN0b3J5QmxvY2tzKCk6T2JzZXJ2YWJsZTxTdG9yeUJsb2NrW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9zdG9yeWJsb2Nrcy8nKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgc2F2ZVN0b3J5QmxvY2soc3RvcnlCbG9jazpTdG9yeUJsb2NrKTpPYnNlcnZhYmxlPFN0b3J5QmxvY2s+IHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoISFzdG9yeUJsb2NrLl9pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoJy9zdG9yeWJsb2Nrcy8nICsgc3RvcnlCbG9jay5faWQsIFwiZGF0YT1cIiArIEpTT04uc3RyaW5naWZ5KHN0b3J5QmxvY2spLCBvcHRpb25zKVxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvc3RvcnlibG9ja3MvJywgXCJkYXRhPVwiICsgSlNPTi5zdHJpbmdpZnkoc3RvcnlCbG9jayksIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGVTdG9yeUJsb2NrKHN0b3J5QmxvY2s6U3RvcnlCbG9jayk6T2JzZXJ2YWJsZTxTdG9yeUJsb2NrW10+IHtcbiAgICAgICAgaWYgKCEhc3RvcnlCbG9jay5faWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKCcvc3RvcnlibG9ja3MvJyArIHN0b3J5QmxvY2suX2lkKVxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGdldFN0b3J5QmxvY2tUeXBlcygpOlN0b3J5QmxvY2tUeXBlW10ge1xuICAgICAgICByZXR1cm4gU1RPUllCTE9DS19UWVBFUztcbiAgICB9XG5cbiAgICBnZXRTdG9yeUJsb2NrRGVmYXVsdFR5cGVzKCk6U3RvcnlCbG9ja1R5cGVbXSB7XG4gICAgICAgIHJldHVybiBTVE9SWUJMT0NLX1RZUEVTO1xuICAgIH1cblxuICAgIGdlbmVyYXRlVGVzdERhdGEoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyB0ZW1wb3JhcnkgZGF0YScpO1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmh0dHAucG9zdCgnL3N0b3J5YmxvY2tzLycsIFwiZGF0YT1cIiArIEpTT04uc3RyaW5naWZ5KFNUT1JZQkxPQ0tTKSwgb3B0aW9ucykubWFwKHJlcyA9PiByZXMudGV4dCgpKS5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBkb3dubG9hZFBkZihzdG9yeUJsb2NrczpTdG9yeUJsb2NrW10pIHtcbiAgICAgICAgZnVuY3Rpb24gY29tcGFyZShhOlN0b3J5QmxvY2ssIGI6U3RvcnlCbG9jaykge1xuICAgICAgICAgICAgaWYgKGEudGltZVBvc2l0aW9uIDwgYi50aW1lUG9zaXRpb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgZWxzZSBpZiAoYS50aW1lUG9zaXRpb24gPiBiLnRpbWVQb3NpdGlvbilcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0b3J5QmxvY2tzLnNvcnQoY29tcGFyZSk7XG5cblxuICAgICAgICB2YXIgZG9jRGVmaW5pdGlvbiA9IHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFtdLFxuXG4gICAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgICAgICBjaGFwdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMixcbiAgICAgICAgICAgICAgICAgICAgYm9sZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFyYWdyYXBoOiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcbiAgICAgICAgICAgICAgICAgICAgYm9sZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0b3J5QmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkb2NEZWZpbml0aW9uLmNvbnRlbnQucHVzaChcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHN0b3J5QmxvY2tzW2ldLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogc3RvcnlCbG9ja3NbaV0udHlwZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkb2NEZWZpbml0aW9uLmNvbnRlbnQucHVzaChcbiAgICAgICAgICAgICAgICBzdG9yeUJsb2Nrc1tpXS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBkZk1ha2UuY3JlYXRlUGRmKGRvY0RlZmluaXRpb24pLmRvd25sb2FkKCk7XG4gICAgfVxuXG59IiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVdGlsc1NlcnZpY2Uge1xuICAgIHB1YmxpYyBFTUFJTF9SRUdFWCA9ICdeWy1hLXowLTl+ISQlXiYqXz0rfXtcXCc/XSsoXFwuWy1hLXowLTl+ISQlXiYqXz0rfXtcXCc/XSspKkAoW2EtejAtOV9dWy1hLXowLTlfXSooXFwuWy1hLXowLTlfXSspKlxcLihhZXJvfGFycGF8Yml6fGNvbXxjb29wfGVkdXxnb3Z8aW5mb3xpbnR8bWlsfG11c2V1bXxuYW1lfG5ldHxvcmd8cHJvfHRyYXZlbHxtb2JpfFthLXpdW2Etel0pfChbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9KSkoOlswLTldezEsNX0pPyQnO1xuXG5cbiAgICBnZXRSb21hbk51bWVyYWwobnVtKTpzdHJpbmcge1xuICAgICAgICBpZiAoIStudW0pXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIHZhciBkaWdpdHMgPSBTdHJpbmcoK251bSkuc3BsaXQoXCJcIiksXG4gICAgICAgICAgICBrZXkgPSBbXCJcIiwgXCJDXCIsIFwiQ0NcIiwgXCJDQ0NcIiwgXCJDRFwiLCBcIkRcIiwgXCJEQ1wiLCBcIkRDQ1wiLCBcIkRDQ0NcIiwgXCJDTVwiLFxuICAgICAgICAgICAgICAgIFwiXCIsIFwiWFwiLCBcIlhYXCIsIFwiWFhYXCIsIFwiWExcIiwgXCJMXCIsIFwiTFhcIiwgXCJMWFhcIiwgXCJMWFhYXCIsIFwiWENcIixcbiAgICAgICAgICAgICAgICBcIlwiLCBcIklcIiwgXCJJSVwiLCBcIklJSVwiLCBcIklWXCIsIFwiVlwiLCBcIlZJXCIsIFwiVklJXCIsIFwiVklJSVwiLCBcIklYXCJdLFxuICAgICAgICAgICAgcm9tYW4gPSBcIlwiLFxuICAgICAgICAgICAgaSA9IDM7XG4gICAgICAgIHdoaWxlIChpLS0pXG4gICAgICAgICAgICByb21hbiA9IChrZXlbK2RpZ2l0cy5wb3AoKSArIChpICogMTApXSB8fCBcIlwiKSArIHJvbWFuO1xuICAgICAgICByZXR1cm4gQXJyYXkoK2RpZ2l0cy5qb2luKFwiXCIpICsgMSkuam9pbihcIk1cIikgKyByb21hbjtcbiAgICB9XG59IiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XG4gICAgcHVibGljIHpvb20gPSB7XG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RlcDogMTUwLFxuICAgICAgICBzdHJlbmd0aDogMTBcbiAgICB9XG59IiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtVdGlsc1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlXCI7XG5pbXBvcnQge0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gXCJhbmd1bGFyMi9zcmMvYW5pbWF0ZS9hbmltYXRpb25fYnVpbGRlclwiO1xuaW1wb3J0IHtTdG9yeUJsb2NrfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2tcIjtcbmltcG9ydCB7U3RvcnlCbG9ja1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdG9yeWJsb2Nrcy5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3N0b3J5YmxvY2snLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmRleFwiPjxzcGFuICpuZ0lmPVwic3RvcnlCbG9ja0luZm8udHlwZSA9PSAnY2hhcHRlcidcIj57e3V0aWxzU2VydmljZS5nZXRSb21hbk51bWVyYWwoc3RvcnlCbG9ja0luZm8uYmxvY2tOdW1iZXIgKyAxKX19PC9zcGFuPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInRpdGxlXCIgW2F0dHIucmVhZG9ubHldPVwiX2V4cG9zZWQgPyBudWxsIDogdHJ1ZVwiIFsobmdNb2RlbCldPVwic3RvcnlCbG9ja0luZm8udGl0bGVcIiBwbGFjZWhvbGRlcj1cIkluc2VydCBhIHRpdGxlXCIgLz5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImRlc2NyaXB0aW9uXCIgW2F0dHIucmVhZG9ubHldPVwiX2V4cG9zZWQgPyBudWxsIDogdHJ1ZVwiIFsobmdNb2RlbCldPVwic3RvcnlCbG9ja0luZm8uZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIlN0YXJ0IHdyaXRpbmcgeW91ciBzdG9yeSBoZXJlLi4uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWZhdWx0LWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwiZWRpdChpbmRleCwgJGV2ZW50KVwiIGNsYXNzPVwiYnV0dG9uIGlubGluZS1idXR0b24gcHJpbWFyeVwiPkVkaXQ8L2E+XG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cInJlbW92ZShpbmRleCwgJGV2ZW50KVwiIGNsYXNzPVwiYnV0dG9uIGlubGluZS1idXR0b24gYWxlcnRcIj5SZW1vdmU8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBvc2VkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwic2F2ZShpbmRleCwgJGV2ZW50KVwiIGNsYXNzPVwiYnV0dG9uIGlubGluZS1idXR0b24gcHJpbWFyeVwiPlNhdmU8L2E+XG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cImNhbmNlbCgpXCIgY2xhc3M9XCJidXR0b24gaW5saW5lLWJ1dHRvbiBzZWNvbmRhcnlcIj5DYW5jZWw8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtVdGlsc1NlcnZpY2UsIFN0b3J5QmxvY2tTZXJ2aWNlLCBDb25maWd1cmF0aW9uXSxcbiAgICBpbnB1dHM6IFsnc3RvcnlCbG9ja0luZm8nLCAnaW5kZXgnXVxufSlcblxuZXhwb3J0IGNsYXNzIFN0b3J5QmxvY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBzdG9yeUJsb2NrSW5mbzpTdG9yeUJsb2NrO1xuXG4gICAgcHVibGljIGluZGV4O1xuICAgIHB1YmxpYyBfZXhwb3NlZCA9IGZhbHNlO1xuICAgIHB1YmxpYyBfYWN0aXZlID0gdHJ1ZTtcbiAgICBwcml2YXRlIF9hY3Rpb25UaW1lb3V0O1xuICAgIHB1YmxpYyBfc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF96b29tTGV2ZWwgPSAxMDtcbiAgICBwcml2YXRlIF9wcmV2aW91c1pvb21MZXZlbCA9IDEwO1xuICAgIHByaXZhdGUgc3RvcnlCbG9ja0xvY2FsU2F2ZTpTdG9yeUJsb2NrO1xuXG4gICAgQE91dHB1dCgpIHpvb21FdmVudDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgZXhwb3NlRXZlbnQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHJlbW92ZVN0b3J5QmxvY2tFdmVudDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FiOkFuaW1hdGlvbkJ1aWxkZXIsIHByaXZhdGUgX2U6RWxlbWVudFJlZiwgcHJpdmF0ZSB1dGlsc1NlcnZpY2U6VXRpbHNTZXJ2aWNlLCBwdWJsaWMgc3RvcnlCbG9ja1NlcnZpY2U6U3RvcnlCbG9ja1NlcnZpY2UsIHByaXZhdGUgY29uZmlndXJhdGlvbjpDb25maWd1cmF0aW9uKSB7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgem9vbUxldmVsKHZhbHVlOm51bWJlcikge1xuICAgICAgICB0aGlzLl9wcmV2aW91c1pvb21MZXZlbCA9ICh0aGlzLl9wcmV2aW91c1pvb21MZXZlbCA9PSB1bmRlZmluZWQpID8gMTAgOiB0aGlzLl9wcmV2aW91c1pvb21MZXZlbDtcbiAgICAgICAgdGhpcy5fem9vbUxldmVsID0gKHRoaXMuX3pvb21MZXZlbCA9PSB1bmRlZmluZWQpID8gMTAgOiB0aGlzLl96b29tTGV2ZWw7XG4gICAgICAgIGlmICh0aGlzLl96b29tTGV2ZWwgIT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzWm9vbUxldmVsID0gdGhpcy5fem9vbUxldmVsO1xuICAgICAgICAgICAgdGhpcy5fem9vbUxldmVsID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnpvb21DaGFuZ2VkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBleHBvc2VkSW5kZXgodmFsdWU6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5fZXhwb3NlZCA9ICh2YWx1ZSA9PSB0aGlzLmluZGV4KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOmFueSB7XG4gICAgICAgIHRoaXMuY2hhbmdlUG9zaXRpb25Pblpvb20oMTAwMCk7XG4gICAgfVxuXG4gICAgem9vbShlKSB7XG4gICAgICAgIHZhciBlID0gd2luZG93LmV2ZW50IHx8IGU7IC8vIG9sZCBJRSBzdXBwb3J0XG4gICAgICAgIHRoaXMuem9vbUV2ZW50LmVtaXQoZSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICB6b29tQ2hhbmdlZCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIFpvb20gY2hhbmdlZCBmcm9tICcgKyB0aGlzLl9wcmV2aW91c1pvb21MZXZlbCArICcgdG8gJyArIHRoaXMuX3pvb21MZXZlbCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3pvb21MZXZlbCA8IHRoaXMuc3RvcnlCbG9ja0luZm8uaW1wb3J0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5mYWRlT3V0KDEwMDApO1xuICAgICAgICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVBvc2l0aW9uT25ab29tKDEwMDApO1xuICAgICAgICAgICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZhZGVJbihzcGVlZDpudW1iZXIpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIEZhZGluZyBpbi4uLicpO1xuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYWIuY3NzKCk7XG5cbiAgICAgICAgdmFyIGZyb21TdHlsZSA9IHt9O1xuICAgICAgICB2YXIgdG9TdHlsZSA9IHt9O1xuXG4gICAgICAgIGZyb21TdHlsZVsnZGlzcGxheSddID0gJ2ZsZXgnO1xuICAgICAgICBmcm9tU3R5bGVbJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gPSAnY3ViaWMtYmV6aWVyKDAuNTc1LCAwLjI1NSwgMC40NDAsIDAuOTg1KTsnO1xuICAgICAgICB0b1N0eWxlWydvcGFjaXR5J10gPSAxO1xuXG5cbiAgICAgICAgYW5pbWF0aW9uXG4gICAgICAgICAgICAuc2V0RHVyYXRpb24oc3BlZWQpO1xuICAgICAgICBhbmltYXRpb25cbiAgICAgICAgICAgIC5zZXRGcm9tU3R5bGVzKGZyb21TdHlsZSlcbiAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh0b1N0eWxlKTtcblxuXG4gICAgICAgIGlmICghIXRoaXMuX2FjdGlvblRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9hY3Rpb25UaW1lb3V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5fYWN0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgLnN0YXJ0KF9zZWxmLl9lLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9LCAxMDApO1xuICAgIH1cblxuICAgIGZhZGVPdXQoc3BlZWQ6bnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdbU3RvcnlCbG9jayAjJyArIHRoaXMuaW5kZXggKyAnXSBGYWRpbmcgb3V0Li4uWycgKyB0aGlzLl96b29tTGV2ZWwgKyAnPCcgKyB0aGlzLnN0b3J5QmxvY2tJbmZvLmltcG9ydGFuY2UgKyAnXScpO1xuICAgICAgICAgICAgbGV0IGFuaW1hdGlvbiA9IHRoaXMuX2FiLmNzcygpO1xuXG4gICAgICAgICAgICB2YXIgZnJvbVN0eWxlID0ge307XG4gICAgICAgICAgICB2YXIgdG9TdHlsZSA9IHt9O1xuXG5cbiAgICAgICAgICAgIHRvU3R5bGVbJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gPSAnY3ViaWMtYmV6aWVyKDAuNTc1LCAwLjI1NSwgMC40NDAsIDAuOTg1KTsnO1xuICAgICAgICAgICAgdG9TdHlsZVsnb3BhY2l0eSddID0gMDtcblxuXG4gICAgICAgICAgICBhbmltYXRpb25cbiAgICAgICAgICAgICAgICAuc2V0RHVyYXRpb24oc3BlZWQpO1xuICAgICAgICAgICAgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoZnJvbVN0eWxlKVxuICAgICAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh0b1N0eWxlKTtcblxuXG4gICAgICAgICAgICBpZiAoISF0aGlzLl9hY3Rpb25UaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIEFuaW1hdGlvbiByZW1vdmVkJyk7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2FjdGlvblRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLl9hY3Rpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydChfc2VsZi5fZS5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VQb3NpdGlvbk9uWm9vbShzcGVlZCkge1xuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYWIuY3NzKCk7XG4gICAgICAgIHZhciBmcm9tU3R5bGUgPSB7XG4gICAgICAgICAgICB0b3A6IHRoaXMuY29uZmlndXJhdGlvbi56b29tLm9mZnNldCArICgodGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RlcCArICh0aGlzLl9wcmV2aW91c1pvb21MZXZlbCAqIHRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0cmVuZ3RoKSkgKiB0aGlzLnN0b3J5QmxvY2tJbmZvLnRpbWVQb3NpdGlvbikgKyAncHgnXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHRvU3R5bGUgPSB7XG4gICAgICAgICAgICB0b3A6IHRoaXMuY29uZmlndXJhdGlvbi56b29tLm9mZnNldCArICgodGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RlcCArICh0aGlzLl96b29tTGV2ZWwgKiB0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5zdHJlbmd0aCkpICogdGhpcy5zdG9yeUJsb2NrSW5mby50aW1lUG9zaXRpb24pICsgJ3B4J1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdbU3RvcnlCbG9jayAjJyArIHRoaXMuaW5kZXggKyAnXSBDaGFuZ2luZyBwb3NpdGlvbiBmcm9tICcgKyAoZnJvbVN0eWxlLnRvcCkgKyAnIHRvICcgKyAodG9TdHlsZS50b3ApICsgJyAuLi4nKTtcblxuICAgICAgICBpZiAodGhpcy5fem9vbUxldmVsID4gdGhpcy5zdG9yeUJsb2NrSW5mby5pbXBvcnRhbmNlKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnW1N0b3J5QmxvY2sgIycgKyB0aGlzLmluZGV4ICsgJ10gLi4uYW5kIGZhZGluZyBpbiBbJyArIHRoaXMuX3pvb21MZXZlbCArICc+JyArIHRoaXMuc3RvcnlCbG9ja0luZm8uaW1wb3J0YW5jZSArICddJyk7XG4gICAgICAgICAgICB0b1N0eWxlWydvcGFjaXR5J10gPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIC4uLmFuZCBmYWRpbmcgb3V0Jyk7XG4gICAgICAgICAgICB0b1N0eWxlWydvcGFjaXR5J10gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9TdHlsZVsndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSA9ICdjdWJpYy1iZXppZXIoMC41NzUsIDAuMjU1LCAwLjQ0MCwgMC45ODUpOyc7XG5cblxuICAgICAgICBhbmltYXRpb25cbiAgICAgICAgICAgIC5zZXREdXJhdGlvbihzcGVlZCk7XG4gICAgICAgIGFuaW1hdGlvblxuICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoZnJvbVN0eWxlKVxuICAgICAgICAgICAgLnNldFRvU3R5bGVzKHRvU3R5bGUpO1xuXG5cbiAgICAgICAgaWYgKCEhdGhpcy5fYWN0aW9uVGltZW91dCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIEFuaW1hdGlvbiByZW1vdmVkJyk7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fYWN0aW9uVGltZW91dCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuX2FjdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgIC5zdGFydChfc2VsZi5fZS5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG5cbiAgICBmb2N1cygpIHtcbiAgICAgICAgdmFyIG5hdGl2ZSA9IHRoaXMuX2UubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IG51bGw7XG4gICAgICAgIHZhciB0ZXh0YXJlYSA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmF0aXZlLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgobmF0aXZlLmNoaWxkTm9kZXNbaV0uY2xhc3NOYW1lIHx8ICcnKS5pbmRleE9mKFwidGV4dC1jb250YWluZXJcIikgPiAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IG5hdGl2ZS5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICgoY29udGFpbmVyLmNoaWxkTm9kZXNbaV0uY2xhc3NOYW1lIHx8ICcnKS5pbmRleE9mKFwiZGVzY3JpcHRpb25cIikgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSA9IGNvbnRhaW5lci5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoISF0ZXh0YXJlYSkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVkaXQoaW5kZXgsIGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTYXZpbmcgdGVtcG9yYXJ5IGRhdGEgJywgdGhpcy5zdG9yeUJsb2NrSW5mbyk7XG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja0xvY2FsU2F2ZSA9IDxTdG9yeUJsb2NrPkpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdG9yeUJsb2NrSW5mbykpO1xuICAgICAgICB0aGlzLmV4cG9zZUV2ZW50LmVtaXQoaW5kZXgpO1xuICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKGluZGV4LCBldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygnU2hvdWxkIHJlbW92ZScsIGluZGV4LCBldmVudCk7XG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja1NlcnZpY2UuZGVsZXRlU3RvcnlCbG9jayh0aGlzLnN0b3J5QmxvY2tJbmZvKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3ZpbmcgYmxvY2sgaW5kZXggJyArdGhpcy5pbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTdG9yeUJsb2NrRXZlbnQuZW1pdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzYXZlKGluZGV4LCBldmVudCkge1xuICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLnNhdmVTdG9yeUJsb2NrKHRoaXMuc3RvcnlCbG9ja0luZm8pLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcnlCbG9ja0luZm8gPSA8U3RvcnlCbG9jaz5kYXRhO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTYXZpbmcgdGVtcG9yYXJ5IGRhdGEgJywgdGhpcy5zdG9yeUJsb2NrSW5mbyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2NrTG9jYWxTYXZlID0gPFN0b3J5QmxvY2s+SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0b3J5QmxvY2tJbmZvKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTYXZlZCAnLCB0aGlzLnN0b3J5QmxvY2tJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuZXhwb3NlRXZlbnQuZW1pdCgtMSk7XG4gICAgICAgIGlmICghIXRoaXMuc3RvcnlCbG9ja0xvY2FsU2F2ZSkge1xuICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2NrSW5mbyA9IDxTdG9yeUJsb2NrPkpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdG9yeUJsb2NrTG9jYWxTYXZlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdmluZyBibG9jayBpbmRleCAnICt0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU3RvcnlCbG9ja0V2ZW50LmVtaXQodGhpcy5pbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOid0aW1lbGluZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lQ29tcG9uZW50IHtcbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWZ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidhZGQtYnV0dG9uJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8YT48c3Bhbj4rPC9zcGFuPjwvYT5cbiAgICBgLFxuICAgIGlucHV0czogWydvZmZzZXRZJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRkQnV0dG9uQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIF9vZmZzZXRZO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZTpFbGVtZW50UmVmKXtcblxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IG9mZnNldFkodmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX29mZnNldFkgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vZmZzZXRDaGFuZ2VkKHZhbHVlKTtcbiAgICB9XG5cbiAgICBvZmZzZXRDaGFuZ2VkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2UubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSB2YWx1ZSArICdweCc7XG4gICAgfVxufSIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtTdG9yeUJsb2NrU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0b3J5YmxvY2tzLnNlcnZpY2VcIjtcbmltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XG5pbXBvcnQge1N0b3J5QmxvY2tUeXBlfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2stdHlwZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3Rvcjonc2lkZWJhcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItYWN0aW9uXCIgKm5nSWY9XCJfaW5kZXggPT0gLTFcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiY3JlYXRlLXN0b3J5YmxvY2tcIj5DcmVhdGUgc3RvcnlibG9jazwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWFjdGlvblwiICpuZ0lmPVwiX2luZGV4ID49IDAgJiYgISFfc3RvcnlCbG9ja1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+U3RvcnlibG9jayB0eXBlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBbKG5nTW9kZWwpXT1cIl9zdG9yeUJsb2NrLnR5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwiI3N0b3J5QmxvY2tUeXBlIG9mIHN0b3J5QmxvY2tUeXBlc1wiIHZhbHVlPXt7c3RvcnlCbG9ja1R5cGUuaWR9fT57e3N0b3J5QmxvY2tUeXBlLm5hbWV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGlucHV0czogWydzdG9yeUJsb2NrJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHN0b3J5QmxvY2tUeXBlczpTdG9yeUJsb2NrVHlwZVtdO1xuICAgIFxuICAgIHB1YmxpYyBfaW5kZXg6IG51bWJlcjtcbiAgICBwdWJsaWMgX3N0b3J5QmxvY2s7XG4gICAgcHVibGljIF9zdWJzY3JpcHRpb246IGFueTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdG9yeUJsb2NrU2VydmljZTpTdG9yeUJsb2NrU2VydmljZSkge31cbiAgICBASW5wdXQoKVxuICAgIHNldCBzdG9yeUJsb2NrKHN0b3J5QmxvY2spe1xuICAgICAgICB0aGlzLl9zdG9yeUJsb2NrID0gc3RvcnlCbG9jaztcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja1R5cGVzID0gdGhpcy5fc3RvcnlCbG9ja1NlcnZpY2UuZ2V0U3RvcnlCbG9ja1R5cGVzKCk7XG4gICAgICAgIHRoaXMuX2luZGV4ID0gdGhpcy5fc3RvcnlCbG9ja1NlcnZpY2UuZ2V0RXhwb3NlZEluZGV4KCk7XG4gICAgICAgIHRoaXMuX3N0b3J5QmxvY2sgPSBudWxsO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLl9zdG9yeUJsb2NrU2VydmljZS5pbmRleENoYW5nZSQuc3Vic2NyaWJlKFxuICAgICAgICAgICAgaW5kZXggPT4gdGhpcy5zZWxlY3RJbmRleChpbmRleCkpO1xuICAgIH1cbiAgICBzZWxlY3RJbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2luZGV4ID0gaW5kZXg7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2luZGV4KTtcbiAgICB9XG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgVXNlciB7XG4gICAgbmFtZSA6IHN0cmluZztcbiAgICBlbWFpbCA6IHN0cmluZztcbiAgICBwYXNzd29yZCA6IHN0cmluZztcbn0iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG4vLyBpbXBvcnQge0xvY2FsU3RvcmFnZX0gZnJvbSBcImFuZ3VsYXIyLWxvY2Fsc3RvcmFnZS9Mb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0p3dFRva2VufSBmcm9tIFwiLi4vbW9kZWxzL2p3dFRva2VuXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uL21vZGVscy91c2VyXCI7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgICBwdWJsaWMgdG9rZW46c3RyaW5nID0gJyc7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDpIdHRwKSB7XG4gICAgfVxuXG4gICAgbG9nb3V0KCk6Ym9vbGVhbiB7XG4gICAgICAgIHRoaXMudG9rZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGxvZ2luKHVzZXI6VXNlcik6T2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoJy9hdXRoL2xvZ2luJywgSlNPTi5zdHJpbmdpZnkodXNlcikpXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMudGV4dCgpKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlcih1c2VyOlVzZXIpOk9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KCcvYXV0aC9sb2dpbicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLnRleHQoKSk7XG4gICAgfVxuXG4gICAgaXNMb2dnZWRJbigpOmJvb2xlYW4ge1xuICAgICAgICB2YXIgdG9rZW5EYXRhU3BsaXQgPSAodGhpcy50b2tlbiB8fCAnJykuc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgdmFyIHRva2VuRGF0YVJhdyA9IGF0b2IodG9rZW5EYXRhU3BsaXQpO1xuICAgICAgICB2YXIgdG9rZW5EYXRhID0gSlNPTi5wYXJzZSh0b2tlbkRhdGFSYXcpIGFzIEp3dFRva2VuO1xuICAgICAgICByZXR1cm4gKHRva2VuRGF0YS5leHAgfHwgMCkgPiBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICB9O1xufSIsImltcG9ydCB7Q29udHJvbCwgQ29udHJvbEdyb3VwfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5cbi8qXG4gQ3VzdG9tIHZhbGlkYXRvcnMgdG8gdXNlIGV2ZXJ5d2hlcmUuXG4gKi9cblxuLy8gU0lOR0xFIEZJRUxEIFZBTElEQVRPUlNcbmV4cG9ydCBmdW5jdGlvbiBlbWFpbFZhbGlkYXRvcihjb250cm9sOiBDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHZhciBlbWFpbFJlZ2V4cCA9IC9eW2EtejAtOSEjJCUmJyorXFwvPT9eX2B7fH1+Li1dK0BbYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXC5bYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPykqJC9pO1xuICAgIGlmIChjb250cm9sLnZhbHVlICYmIGNvbnRyb2wudmFsdWUubGVuZ3RoIDwgNiAmJiAhZW1haWxSZWdleHAudGVzdChjb250cm9sLnZhbHVlKSkge1xuICAgICAgICByZXR1cm4ge2ludmFsaWRFbWFpbDogdHJ1ZX07XG4gICAgfVxufVxuXG4vL0NPTlRST0wgR1JPVVAgVkFMSURBVE9SU1xuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoaW5nUGFzc3dvcmRzKHBhc3N3b3JkS2V5OiBzdHJpbmcsIGNvbmZpcm1QYXNzd29yZEtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChncm91cDogQ29udHJvbEdyb3VwKToge1trZXk6IHN0cmluZ106IGFueX0gPT4ge1xuICAgICAgICBsZXQgcGFzc3dvcmQgPSBncm91cC5jb250cm9sc1twYXNzd29yZEtleV07XG4gICAgICAgIGxldCBjb25maXJtUGFzc3dvcmQgPSBncm91cC5jb250cm9sc1tjb25maXJtUGFzc3dvcmRLZXldO1xuXG4gICAgICAgIGlmIChwYXNzd29yZC52YWx1ZSAhPT0gY29uZmlybVBhc3N3b3JkLnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1pc21hdGNoZWRQYXNzd29yZHM6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXJcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cCwgRk9STV9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge2VtYWlsVmFsaWRhdG9yLCBtYXRjaGluZ1Bhc3N3b3Jkc30gZnJvbSAnLi4vc2VydmljZXMvdmFsaWRhdG9ycy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhdXRoLWZvcm0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4Ym94IGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgPGgxPkJlY29tZSBhIHN0b3J5dGVsbGVyPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2PjxhIGNsYXNzPVwiY2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoJGV2ZW50KVwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9hPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwiZm9ybVwiIChuZ1N1Ym1pdCk9XCJvblNpZ25VcCgkZXZlbnQpXCIgbm92YWxpZGF0ZT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWyduYW1lJ11cIlxuICAgICAgICAgICAgICAgICAgICAjbmFtZT1cIm5nRm9ybVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgICpuZ0lmPVwiKG5hbWUuZGlydHkgfHwgc3VibWl0dGVkKSAmJiAhbmFtZS52YWxpZFwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgWW91ciBuYW1lIGlzIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLmVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cImZvcm0uY29udHJvbHNbJ2VtYWlsJ11cIlxuICAgICAgICAgICAgICAgICAgICAjZW1haWw9XCJuZ0Zvcm1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgICpuZ0lmPVwiKGVtYWlsLmRpcnR5IHx8IHN1Ym1pdHRlZCkgJiYgIWVtYWlsLnZhbGlkXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1lcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICBFbWFpbCBpcyBpbnZhbGlkXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlci5wYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXCJcbiAgICAgICAgICAgICAgICAgICAgI3Bhc3N3b3JkPVwibmdGb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2ICAqbmdJZj1cIihwYXNzd29yZC5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmICFwYXNzd29yZC52YWxpZFwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgVGhlIHBhc3N3b3JkIHNob3VsZCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZ1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIuY29uZmlybVBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cImZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddXCJcbiAgICAgICAgICAgICAgICAgICAgI2NvbmZpcm1QYXNzd29yZD1cIm5nRm9ybVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29uZmlybS1wYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiKGNvbmZpcm1QYXNzd29yZC5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmICFjb25maXJtUGFzc3dvcmQudmFsaWRcIiBjbGFzcz1cInBhbmVsIHBhbmVsLWVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgIFRoZSBwYXNzd29yZHMgZG9uJ3QgbWF0Y2hcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIHByaW1hcnkgYmxvY2stYnV0dG9uXCI+U2lnbiB1cDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlXSxcbiAgICBkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTXVxufSlcblxuZXhwb3J0IGNsYXNzIEF1dGhGb3JtQ29tcG9uZW50IHtcbiAgICB1c2VyOlVzZXIgPSBuZXcgVXNlcigpO1xuICAgIGZvcm06Q29udHJvbEdyb3VwO1xuICAgIHN1Ym1pdHRlZCA9IGZhbHNlO1xuXG4gICAgQE91dHB1dCgpIGNsb3NlTW9kYWw6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlLCBwcml2YXRlIGJ1aWxkZXI6Rm9ybUJ1aWxkZXIpIHtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mb3JtID0gYnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCAgZW1haWxWYWxpZGF0b3JdKV0sXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgfSwge3ZhbGlkYXRvcjogbWF0Y2hpbmdQYXNzd29yZHMoJ3Bhc3N3b3JkJywgJ2NvbmZpcm1QYXNzd29yZCcpfSlcbiAgICB9XG5cbiAgICBjbG9zZShldmVudCl7XG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbC5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBvblNpZ25VcChldmVudCkge1xuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuZm9ybS52YWx1ZSkpO1xuICAgICAgICBpZih0aGlzLmZvcm0udmFsaWQpIHtcbiAgICAgICAgICAgIC8vdGhpcy5hdXRoU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TmdDbGFzc30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7U3RvcnlCbG9ja1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdG9yeWJsb2Nrcy5zZXJ2aWNlXCI7XG5pbXBvcnQge1N0b3J5QmxvY2t9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9ja1wiO1xuaW1wb3J0IHtTdG9yeUJsb2NrQ29tcG9uZW50fSBmcm9tIFwiLi9zdG9yeWJsb2NrLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUaW1lbGluZUNvbXBvbmVudH0gZnJvbSBcIi4vdGltZWxpbmUuY29tcG9uZW50XCI7XG5pbXBvcnQge0FkZEJ1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vYWRkLWJ1dHRvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7U2lkZWJhckNvbXBvbmVudH0gZnJvbSBcIi4vc2lkZWJhci5jb21wb25lbnRcIjtcbmltcG9ydCB7QXV0aEZvcm1Db21wb25lbnR9IGZyb20gXCIuL2F1dGgtZm9ybS5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQge1N0b3J5QmxvY2tUeXBlfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2stdHlwZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWNvbnRlbnQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPHRpbWVsaW5lIGNsYXNzPVwidGltZWxpbmUtYmxvY2tcIj48L3RpbWVsaW5lPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0b3J5LWJsb2Nrc1wiPlxuICAgICAgICAgICAgICAgIDxzdG9yeWJsb2NrICpuZ0Zvcj1cIiNzdG9yeUJsb2NrIG9mIHN0b3J5QmxvY2tzOyAjaSA9IGluZGV4XCIgXG4gICAgICAgICAgICAgICAgICAgIFtpbmRleF09XCJpXCIgXG4gICAgICAgICAgICAgICAgICAgIFtzdG9yeUJsb2NrSW5mb109XCJzdG9yeUJsb2NrXCIgXG4gICAgICAgICAgICAgICAgICAgIFt6b29tTGV2ZWxdPVwiem9vbUxldmVsXCJcbiAgICAgICAgICAgICAgICAgICAgW2V4cG9zZWRJbmRleF09XCJleHBvc2VkSW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ZXhwb3NlZDogZXhwb3NlZEluZGV4ID09IGl9XCJcbiAgICAgICAgICAgICAgICAgICAgKHJlbW92ZVN0b3J5QmxvY2tFdmVudCk9XCJyZW1vdmVTdG9yeUJsb2NrKCRldmVudClcIiBcbiAgICAgICAgICAgICAgICAgICAgKGV4cG9zZUV2ZW50KT1cInNldEV4cG9zZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RvcnktYmxvY2sge3sgc3RvcnlCbG9jay50eXBlwqB9fVwiPjwvc3RvcnlibG9jaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWRkU3RvcnlCbG9jaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJvbk1vdXNlRW50ZXIoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwib25Nb3VzZUxlYXZlKCRldmVudClcIlxuICAgICAgICAgICAgICAgIChtb3VzZW1vdmUpPVwib25Nb3VzZU1vdmUoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgIDxhZGQtYnV0dG9uICpuZ0lmPVwiYWRkQnV0dG9uLnZpc2libGVcIlxuICAgICAgICAgICAgICAgICAgICBbb2Zmc2V0WV09XCJhZGRCdXR0b24udG9wXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZFN0b3J5QmxvY2soJGV2ZW50KVwiPjwvYWRkLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInpvb20tY29udHJvbHNcIj4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT1cIlpvb20gaW5cIiAoY2xpY2spPVwiem9vbUluKClcIj4rPC9hPiAgXG4gICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPVwiWm9vbSBvdXRcIiAoY2xpY2spPVwiem9vbU91dCgpXCI+Jm5kYXNoOzwvYT4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgICA8c2lkZWJhciBbc3RvcnlCbG9ja109XCJleHBvc2VkU3RvcnlCbG9ja1wiPjwvc2lkZWJhcj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwidXNlci1hc2lkZVwiIChjbGljayk9XCJkb3dubG9hZFBkZigpXCI+RG93bmxvYWQgUERGPC9hPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJ1c2VyLWFzaWRlXCIgKGNsaWNrKT1cInNob3dBY2Nlc3NGb3JtKClcIj5Mb2dpbi9TaWdudXA8L2E+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgICAgIDxhdXRoLWZvcm0gKm5nSWY9XCJhY2Nlc3NGb3JtVmlzaWJsZVwiIChjbG9zZU1vZGFsKT1cImhpZGVBY2Nlc3NGb3JtKClcIj48L2F1dGgtZm9ybT5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW1N0b3J5QmxvY2tTZXJ2aWNlLCBDb25maWd1cmF0aW9uXSxcbiAgICBkaXJlY3RpdmVzOiBbU3RvcnlCbG9ja0NvbXBvbmVudCwgVGltZWxpbmVDb21wb25lbnQsIEFkZEJ1dHRvbkNvbXBvbmVudCwgU2lkZWJhckNvbXBvbmVudCwgQXV0aEZvcm1Db21wb25lbnQsIE5nQ2xhc3NdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgc3RvcnlCbG9ja3M6U3RvcnlCbG9ja1tdO1xuICAgIHB1YmxpYyBzdG9yeUJsb2NrVHlwZXM6U3RvcnlCbG9ja1R5cGVbXTtcbiAgICBwdWJsaWMgc3RvcnlCbG9ja0RlZmF1bHRUeXBlczpTdG9yeUJsb2NrVHlwZVtdO1xuXG4gICAgcHVibGljIHpvb21MZXZlbDtcbiAgICBwdWJsaWMgZXhwb3NlZEluZGV4O1xuICAgIHB1YmxpYyBleHBvc2VkU3RvcnlCbG9jaztcbiAgICBwdWJsaWMgYWRkQnV0dG9uO1xuICAgIHB1YmxpYyBzZWxlY3RlZEJsb2NrOlN0b3J5QmxvY2s7XG4gICAgcHVibGljIHRva2VuOnN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBhY2Nlc3NGb3JtVmlzaWJsZTtcbiAgICBwcml2YXRlIG1heEluZGV4ID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcnlCbG9ja1NlcnZpY2U6U3RvcnlCbG9ja1NlcnZpY2UsIHByaXZhdGUgY29uZmlndXJhdGlvbjpDb25maWd1cmF0aW9uKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgICB0aGlzLmdldFN0b3J5QmxvY2tUeXBlcygpO1xuICAgICAgICB0aGlzLmdldFN0b3J5QmxvY2tzKCk7XG4gICAgICAgIHRoaXMuem9vbUxldmVsID0gMTA7XG4gICAgICAgIHRoaXMuZXhwb3NlZEluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuZXhwb3NlZFN0b3J5QmxvY2sgPSBudWxsO1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbiA9IHtcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgdG9wOiAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYWNjZXNzRm9ybVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5zdG9yeUJsb2NrU2VydmljZS5nZW5lcmF0ZVRlc3REYXRhKCkuc3Vic2NyaWJlKFxuICAgICAgICAvLyAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcbiAgICAgICAgLy8gICAgICgpID0+IGNvbnNvbGUubG9nKCdkb25lLCBsb2FkZWQgJyArIHRoaXMuc3RvcnlCbG9ja3MubGVuZ3RoICsgJyBibG9ja3MnKVxuICAgICAgICAvLyApO1xuICAgIH1cblxuICAgIGdldFN0b3J5QmxvY2tUeXBlcygpIHtcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrVHlwZXMgPSB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdldFN0b3J5QmxvY2tUeXBlcygpO1xuICAgICAgICB0aGlzLnN0b3J5QmxvY2tEZWZhdWx0VHlwZXMgPSB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdldFN0b3J5QmxvY2tEZWZhdWx0VHlwZXMoKTtcbiAgICB9XG5cbiAgICBnZXRTdG9yeUJsb2NrcygpIHtcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5nZXRTdG9yeUJsb2NrcygpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcnlCbG9ja3MgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMubWF4SW5kZXggPSAwO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0b3J5QmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0b3J5QmxvY2tzW2ldLnR5cGUgPT09ICdjaGFwdGVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXhJbmRleCA9IE1hdGgubWF4KHRoaXMubWF4SW5kZXgsIHRoaXMuc3RvcnlCbG9ja3NbaV0uYmxvY2tJZCB8fCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnJlY2FsY3VsYXRlU3RvcnlCbG9ja051bWJlcnMoKTtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnZG9uZSwgbG9hZGVkICcgKyB0aGlzLnN0b3J5QmxvY2tzLmxlbmd0aCArICcgYmxvY2tzJywgdGhpcy5zdG9yeUJsb2NrcylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW1vdmVTdG9yeUJsb2NrKGluZGV4KSB7XG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZVN0b3J5QmxvY2tOdW1iZXJzKCk7XG4gICAgfVxuXG4gICAgc2hvd0FjY2Vzc0Zvcm0oKSB7XG4gICAgICAgIHRoaXMuYWNjZXNzRm9ybVZpc2libGUgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJyk7XG4gICAgfVxuXG4gICAgaGlkZUFjY2Vzc0Zvcm0oKSB7XG4gICAgICAgIHRoaXMuYWNjZXNzRm9ybVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xuICAgIH1cblxuICAgIHJlY2FsY3VsYXRlU3RvcnlCbG9ja051bWJlcnMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdOdW1iZXJpbmcgYmVmb3JlJyx0aGlzLnN0b3J5QmxvY2tzKTtcbiAgICAgICAgdmFyIGN1cnJlbnRUeXBlcyA9IHt9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RvcnlCbG9ja1R5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjdXJyZW50VHlwZXNbdGhpcy5zdG9yeUJsb2NrVHlwZXNbaV0uaWRdID0gdGhpcy5zdG9yeUJsb2NrVHlwZXNbaV07XG4gICAgICAgICAgICBjdXJyZW50VHlwZXNbdGhpcy5zdG9yeUJsb2NrVHlwZXNbaV0uaWRdLmluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUeXBlID0gdGhpcy5zdG9yeUJsb2Nrc1tpXS50eXBlIHx8IHRoaXMuc3RvcnlCbG9ja0RlZmF1bHRUeXBlc1swXS5pZDtcbiAgICAgICAgICAgIGN1cnJlbnRUeXBlc1tjdXJyZW50VHlwZV0gPSBjdXJyZW50VHlwZXNbY3VycmVudFR5cGVdIHx8IHRoaXMuc3RvcnlCbG9ja0RlZmF1bHRUeXBlc1swXTtcbiAgICAgICAgICAgIHRoaXMuc3RvcnlCbG9ja3NbaV0uYmxvY2tOdW1iZXIgPSBjdXJyZW50VHlwZXNbY3VycmVudFR5cGVdLmluZGV4IHx8IDA7XG5cbiAgICAgICAgICAgIGN1cnJlbnRUeXBlc1tjdXJyZW50VHlwZV0uaW5kZXgrKztcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5zdG9yeUJsb2NrVHlwZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdG9yeUJsb2NrVHlwZXNbal0ubGV2ZWwgPiBjdXJyZW50VHlwZXNbY3VycmVudFR5cGVdLmxldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUeXBlc1t0aGlzLnN0b3J5QmxvY2tUeXBlc1tqXS5pZF0uaW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnTnVtYmVyaW5nIGFmdGVyJyx0aGlzLnN0b3J5QmxvY2tzKTtcbiAgICB9XG5cbiAgICB6b29tSW4oKSB7XG4gICAgICAgIGlmICh0aGlzLnpvb21MZXZlbCA8IDEwKSB7XG4gICAgICAgICAgICB0aGlzLnpvb21MZXZlbCsrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgem9vbU91dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuem9vbUxldmVsID4gMCkge1xuICAgICAgICAgICAgdGhpcy56b29tTGV2ZWwtLTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTW91c2VFbnRlcihldmVudCkge1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbiA9IHtcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICB0b3A6IGV2ZW50LnlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvbk1vdXNlTGVhdmUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5hZGRCdXR0b24gPSB7XG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHRvcDogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmFkZEJ1dHRvbi52aXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEJ1dHRvbi50b3AgPSBldmVudC55O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkU3RvcnlCbG9jayhldmVudCkge1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbiA9IHtcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgdG9wOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHpvb21Db252ZXJzaW9uRmFjdG9yID0gdGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RlcCArICh0aGlzLnpvb21MZXZlbCAqIHRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0cmVuZ3RoKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uQXRab29tID0gKChldmVudC5wYWdlWSAtIHRoaXMuY29uZmlndXJhdGlvbi56b29tLm9mZnNldCkgLyB6b29tQ29udmVyc2lvbkZhY3Rvcik7XG4gICAgICAgIHZhciBuZXdTdG9yeUJsb2NrOlN0b3J5QmxvY2sgPSA8U3RvcnlCbG9jaz4ge1xuICAgICAgICAgICAgYmxvY2tJZDogdGhpcy5tYXhJbmRleCArIDEsXG4gICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lUG9zaXRpb246IHBvc2l0aW9uQXRab29tLFxuICAgICAgICAgICAgaW1wb3J0YW5jZTogMyxcbiAgICAgICAgICAgIHR5cGU6ICdjaGFwdGVyJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1heEluZGV4Kys7XG5cbiAgICAgICAgdmFyIHRtcEFycmF5UG9zID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcnlCbG9ja3NbaV0udGltZVBvc2l0aW9uID4gcG9zaXRpb25BdFpvb20pIHtcbiAgICAgICAgICAgICAgICB0bXBBcnJheVBvcyA9IGk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0b3J5QmxvY2tzLnNwbGljZSh0bXBBcnJheVBvcywgMCwgbmV3U3RvcnlCbG9jayk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ0FkZGluZyBibG9jayBpbmRleCAnICsgdG1wQXJyYXlQb3MpO1xuICAgICAgICB0aGlzLnNldEV4cG9zZWQodG1wQXJyYXlQb3MpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBzZXRFeHBvc2VkKGluZGV4KSB7XG4gICAgICAgIHRoaXMucmVjYWxjdWxhdGVTdG9yeUJsb2NrTnVtYmVycygpO1xuICAgICAgICB0aGlzLmV4cG9zZWRJbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmV4cG9zZWRTdG9yeUJsb2NrID0gaW5kZXggPj0gMCA/IHRoaXMuc3RvcnlCbG9ja3NbaW5kZXhdIDogbnVsbDtcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5jaGFuZ2VFeHBvc2VkSW5kZXgoaW5kZXgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnbm8tc2Nyb2xsJyk7XG4gICAgfVxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0b3J5QmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLnNhdmVTdG9yeUJsb2NrKHRoaXMuc3RvcnlCbG9ja3NbaV0pLnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG93bmxvYWRQZGYoKXtcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5kb3dubG9hZFBkZih0aGlzLnN0b3J5QmxvY2tzKTtcbiAgICB9XG59XG4iLCIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9hcHAtY29udGVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTIH0gICAgZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtIVFRQX1BST1ZJREVSU10pO1xuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBbmltYXRpb25CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvYW5pbWF0ZS9hbmltYXRpb25fYnVpbGRlcic7XG5pbXBvcnQge0Nzc0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9hbmltYXRlL2Nzc19hbmltYXRpb25fYnVpbGRlcic7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2NvbGxhcHNlXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb2xsYXBzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgY29sbGFwc2U6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uOiBDc3NBbmltYXRpb25CdWlsZGVyO1xuXG4gICAgY29uc3RydWN0b3IoYW5pbWF0aW9uQnVpbGRlcjpBbmltYXRpb25CdWlsZGVyLCBwcml2YXRlIF9lbDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbiA9IGFuaW1hdGlvbkJ1aWxkZXIuY3NzKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICAvLyBpZiB0aGUgY2hhbmdlIGhhcHBlbmVkIGluIHRoZSBjb2xsYXBzZSBwcm9wZXJ0eVxuICAgICAgICBpZiAoY2hhbmdlcy5jb2xsYXBzZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfYmFzZVNlcXVlbmNlKCk6IENzc0FuaW1hdGlvbkJ1aWxkZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0aW9uXG4gICAgICAgICAgICAuc2V0RHVyYXRpb24oMjUwKSAvLyB0aGUgdHJhbnNpdGlvbiBkdXJhdGlvblxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdjb2xsYXBzZScpIC8vIHJlbW92ZSBhIGNsYXNzIGJlZm9yZSB0aGUgdHJhbnNpdGlvbiBzdGFydFxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpbicpXG4gICAgICAgICAgICAuYWRkQW5pbWF0aW9uQ2xhc3MoJ2NvbGxhcHNpbmcnKTsgLy8gYWRkIGEgdGVtcCBjbGFzcyBmb3IgdGhlIHRyYW5zaXRpb24gcGVyaW9kXG4gICAgfVxuXG4gICAgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYmFzZVNlcXVlbmNlXG4gICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyh7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCArICdweCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2V0VG9TdHlsZXMoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogJzAnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBhIGlzIHRoZSBBbmltYXRpb24gaW5zdGFuY2UgcnVubmluZyB0aGlzIGFuaW1hdGlvbi5cbiAgICAgICAgbGV0IGEgPSB0aGlzLl9hbmltYXRpb24uc3RhcnQodGhpcy5fZWwubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIGEub25Db21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICBhLnJlbW92ZUNsYXNzZXMoWydpbiddKTsgLy8gcmFwaWQgY2hhbmdlIHdpbGwgbGVhdmUgJ2luJ1xuICAgICAgICAgICAgYS5hZGRDbGFzc2VzKFsnY29sbGFwc2UnXSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uIC8vIDFzdCBhbmltYXRpb24gYnVpbGRcbiAgICAgICAgICAgIC5zZXREdXJhdGlvbigwKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdjb2xsYXBzZScpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2luJylcbiAgICAgICAgICAgIC5zZXRGcm9tU3R5bGVzKHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQodGhpcy5fZWwubmF0aXZlRWxlbWVudCkgLy8gMXN0IGFuaW1hdGlvbiBzdGFydFxuICAgICAgICAgICAgLm9uQ29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBhID0gdGhpcy5fYmFzZVNlcXVlbmNlIC8vICAybmQgYW5pbWF0aW9uIGJ1aWxkXG4gICAgICAgICAgICAgICAgICAgIC5zZXRGcm9tU3R5bGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzAnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4J1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQodGhpcy5fZWwubmF0aXZlRWxlbWVudCk7IC8vIDJuZCBhbmltYXRpb24gc3RhcnRcblxuICAgICAgICAgICAgICAgIGEub25Db21wbGV0ZSgoKSA9PiAgYS5hZGRDbGFzc2VzKFsnY29sbGFwc2UnLCAnaW4nXSkgKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
