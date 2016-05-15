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
                    this.token = {
                        name: 'token',
                        expiration: (30 * 24 * 60 * 60 * 1000)
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
                    this.storyBlockService.deleteStoryBlock(this.storyBlockInfo).subscribe(function (data) {
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
                        this.storyBlockService.saveStoryBlock(this.storyBlockInfo).subscribe(function (data) {
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
    var core_10, http_2, webstorage_service_1, configuration_2;
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
            function (configuration_2_1) {
                configuration_2 = configuration_2_1;
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
                    return this.http.post('/auth/login', "name=" + user.name + "&" +
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
                    return this.http.post('/auth/register', "email=" + user.email + "&" +
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
                AuthService = __decorate([
                    core_10.Injectable(), 
                    __metadata('design:paramtypes', [http_2.Http, webstorage_service_1.WebStorageService, configuration_2.Configuration])
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
    var core_11, user_1, auth_service_1, common_1, validators_service_1, webstorage_service_2, configuration_3;
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
            function (configuration_3_1) {
                configuration_3 = configuration_3_1;
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
                SignInComponent = __decorate([
                    core_11.Component({
                        selector: 'sign-in-form',
                        template: "\n        <div class=\"form-wrapper\">\n            <div class=\"flexbox flex-row\">\n                <h1>Come in, storyteller</h1>\n                <div><a class=\"close\" (click)=\"close($event)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></a></div>\n            </div>\n            <form [ngFormModel]=\"form\" (ngSubmit)=\"onSignIn($event)\" novalidate>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your email\"\n                    [(ngModel)]=\"user.email\" \n                    [ngFormControl]=\"form.controls['email']\"\n                    #email=\"ngForm\"\n                    >\n                <label for=\"email\">Email</label>\n                <div  *ngIf=\"(email.dirty || submitted) && !email.valid\" class=\"panel panel-error\">\n                    Email is invalid\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Your password\"\n                    [(ngModel)]=\"user.password\" \n                    [ngFormControl]=\"form.controls['password']\"\n                    #password=\"ngForm\"\n                    >\n                <label for=\"password\">Password</label>\n                <div  *ngIf=\"(password.dirty || submitted) && !password.valid\" class=\"panel panel-error\">\n                    The password should be at least 6 characters long\n                </div>\n              </div>\n              <button type=\"submit\" class=\"button primary block-button\">Sign in</button>\n              <div class=\"swap-form\"><a (click)=\"swapToSignUp()\">I want to create a new account</a></div>\n            </form>\n        </div>\n    ",
                        providers: [auth_service_1.AuthService, webstorage_service_2.WebStorageService],
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, common_1.FormBuilder, webstorage_service_2.WebStorageService, configuration_3.Configuration])
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
    var core_12, user_2, auth_service_2, common_2, validators_service_2, webstorage_service_3, configuration_4;
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
            function (configuration_4_1) {
                configuration_4 = configuration_4_1;
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
                SignUpComponent = __decorate([
                    core_12.Component({
                        selector: 'sign-up-form',
                        template: "\n        <div class=\"form-wrapper\">\n            <div class=\"flexbox flex-row\">\n                <h1>Become a storyteller</h1>\n                <div><a class=\"close\" (click)=\"close($event)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></a></div>\n            </div>\n            <form [ngFormModel]=\"form\" (ngSubmit)=\"onSignUp($event)\" novalidate>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your name\"\n                    [(ngModel)]=\"user.name\"\n                    [ngFormControl]=\"form.controls['name']\"\n                    #name=\"ngForm\"\n                    >\n                <label for=\"name\">Name</label>\n                <div  *ngIf=\"(name.dirty || submitted) && !name.valid\" class=\"panel panel-error\">\n                    Your name is required\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your email\"\n                    [(ngModel)]=\"user.email\" \n                    [ngFormControl]=\"form.controls['email']\"\n                    #email=\"ngForm\"\n                    >\n                <label for=\"email\">Email</label>\n                <div  *ngIf=\"(email.dirty || submitted) && !email.valid\" class=\"panel panel-error\">\n                    Email is invalid\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Your password\"\n                    [(ngModel)]=\"user.password\" \n                    [ngFormControl]=\"form.controls['password']\"\n                    #password=\"ngForm\"\n                    >\n                <label for=\"password\">Password</label>\n                <div  *ngIf=\"(password.dirty || submitted) && !password.valid\" class=\"panel panel-error\">\n                    The password should be at least 6 characters long\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm password\"\n                    [(ngModel)]=\"user.confirmPassword\" \n                    [ngFormControl]=\"form.controls['confirmPassword']\"\n                    #confirmPassword=\"ngForm\"\n                    >\n                <label for=\"confirm-password\">Password</label>\n                <div *ngIf=\"(confirmPassword.dirty || submitted) && form.hasError('mismatchedPasswords')\" class=\"panel panel-error\">\n                    The passwords don't match\n                </div>\n              </div>\n              <button type=\"submit\" class=\"button primary block-button\">Sign up</button>\n              <div class=\"swap-form\"><a (click)=\"swapToSignIn()\">I already have an account</a></div>\n            </form>\n        </div>\n    ",
                        providers: [auth_service_2.AuthService, webstorage_service_3.WebStorageService],
                        directives: [common_2.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [auth_service_2.AuthService, common_2.FormBuilder, webstorage_service_3.WebStorageService, configuration_4.Configuration])
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
                    this.login = false;
                }
                AuthFormComponent.prototype.hideAccessForm = function (event) {
                    this.closeModal.emit(event);
                };
                AuthFormComponent.prototype.notifyMessage = function (event) {
                    this.notify.emit(event);
                };
                __decorate([
                    core_13.Output(), 
                    __metadata('design:type', core_13.EventEmitter)
                ], AuthFormComponent.prototype, "closeModal", void 0);
                __decorate([
                    core_13.Output(), 
                    __metadata('design:type', core_13.EventEmitter)
                ], AuthFormComponent.prototype, "notify", void 0);
                AuthFormComponent = __decorate([
                    core_13.Component({
                        selector: 'auth-form',
                        template: "\n        <sign-in-form \n            *ngIf=\"login\" \n            (closeModal)=\"hideAccessForm()\"\n            (swapWindow)=\"login=!login\"\n            (notify)=\"notifyMessage($event)\"\n            ></sign-in-form>\n        <sign-up-form \n            *ngIf=\"!login\" \n            (closeModal)=\"hideAccessForm()\"\n            (swapWindow)=\"login=!login\"\n            (notify)=\"notifyMessage()\"\n            ></sign-up-form>\n    ",
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
    var core_14, common_3, storyblocks_service_3, storyblock_component_1, timeline_component_1, add_button_component_1, notification_component_1, sidebar_component_1, configuration_5, auth_service_3, webstorage_service_4, auth_form_component_1;
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
            function (configuration_5_1) {
                configuration_5 = configuration_5_1;
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
                    this.getStoryBlockTypes();
                    this.getStoryBlocks();
                    this.zoomLevel = 10;
                    this.exposedIndex = -1;
                    this.exposedStoryBlock = null;
                    this.addButton = {
                        visible: false,
                        top: 0
                    };
                    this.menuVisible = false;
                    this.accessFormVisible = false;
                    // this.storyBlockService.generateTestData().subscribe(
                    //     err => console.error(err),
                    //     () => console.log('done, loaded ' + this.storyBlocks.length + ' blocks')
                    // );
                };
                AppComponent.prototype.setToken = function (value) {
                    this.webStorageService.put('token', value);
                };
                AppComponent.prototype.getToken = function () {
                    return this.webStorageService.get('token');
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
                        this.storyBlockService.saveStoryBlock(this.storyBlocks[i]).subscribe();
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
                        template: "\n        <main>\n            <timeline class=\"timeline-block\"></timeline>\n            <div class=\"story-blocks\">\n                <storyblock *ngFor=\"#storyBlock of storyBlocks; #i = index\" \n                    [index]=\"i\" \n                    [storyBlockInfo]=\"storyBlock\" \n                    [zoomLevel]=\"zoomLevel\"\n                    [exposedIndex]=\"exposedIndex\"\n                    [ngClass]=\"{exposed: exposedIndex == i}\"\n                    (removeStoryBlockEvent)=\"removeStoryBlock($event)\" \n                    (exposeEvent)=\"setExposed($event)\"\n                    (notify)=\"notify($event)\"\n                    class=\"story-block {{ storyBlock.type\u00A0}}\"></storyblock>\n            </div>\n            <div class=\"timeline\"\n                (click)=\"addStoryBlock($event)\"\n                (mouseenter)=\"onMouseEnter($event)\"\n                (mouseleave)=\"onMouseLeave($event)\"\n                (mousemove)=\"onMouseMove($event)\">\n                <add-button *ngIf=\"addButton.visible\"\n                    [offsetY]=\"addButton.top\"\n                    (click)=\"addStoryBlock($event)\"></add-button>\n            </div>\n            <div id=\"controls\">\n                <div id=\"zoom-controls\">              \n                    <a title=\"Zoom in\" (click)=\"zoomIn()\">+</a>  \n                    <a title=\"Zoom out\" (click)=\"zoomOut()\">&ndash;</a>                \n                </div>            \n            </div>\n        </main>\n        <aside [ngClass]=\"{visible: menuVisible}\">\n            <sidebar\n            (startDragging)=\"toggleMenu(false)\"\n            (endDragging)=\"addStoryBlock($event)\"\n            [storyBlock]=\"exposedStoryBlock\"></sidebar>\n            <a class=\"user-aside\" (click)=\"downloadPdf()\">Download PDF</a>\n            <a class=\"user-aside\" *ngIf=\"!isLoggedIn()\" (click)=\"showAccessForm()\">Login/Signup</a>\n            <a class=\"user-aside\" *ngIf=\"isLoggedIn()\" (click)=\"logOut()\">Logout</a>\n            <a id=\"close-menu\" (click)=\"toggleMenu(false)\"></a>\n        </aside>\n        <header><a id=\"burger\" (click)=\"toggleMenu(true)\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a></header>\n        <auth-form \n            *ngIf=\"accessFormVisible\" \n            (closeModal)=\"hideAccessForm()\"\n            (notify)=\"notify($event)\"\n            ></auth-form>\n        <notification></notification>\n    ",
                        providers: [storyblocks_service_3.StoryBlockService, configuration_5.Configuration, auth_service_3.AuthService, webstorage_service_4.WebStorageService],
                        directives: [storyblock_component_1.StoryBlockComponent, timeline_component_1.TimelineComponent, add_button_component_1.AddButtonComponent, notification_component_1.NotificationComponent, sidebar_component_1.SidebarComponent, auth_form_component_1.AuthFormComponent, common_3.NgClass]
                    }), 
                    __metadata('design:paramtypes', [storyblocks_service_3.StoryBlockService, configuration_5.Configuration, webstorage_service_4.WebStorageService, auth_service_3.AuthService])
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
    var browser_1, app_content_component_1, http_3, configuration_6;
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
            function (configuration_6_1) {
                configuration_6 = configuration_6_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_content_component_1.AppComponent, [http_3.HTTP_PROVIDERS, configuration_6.Configuration]);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2svbW9jay1zdG9yeWJsb2Nrcy50cyIsIm1vY2svbW9jay1zdG9yeWJsb2NrLXR5cGVzLnRzIiwic2VydmljZXMvc3RvcnlibG9ja3Muc2VydmljZS50cyIsInNlcnZpY2VzL3V0aWxzLnNlcnZpY2UudHMiLCJjb25maWcvY29uZmlndXJhdGlvbi50cyIsImNvbXBvbmVudHMvc3RvcnlibG9jay5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3RpbWVsaW5lLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvYWRkLWJ1dHRvbi5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL25vdGlmaWNhdGlvbi5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3NpZGViYXIuY29tcG9uZW50LnRzIiwibW9kZWxzL3VzZXIudHMiLCJzZXJ2aWNlcy93ZWJzdG9yYWdlLnNlcnZpY2UudHMiLCJzZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiLCJzZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UudHMiLCJjb21wb25lbnRzL3NpZ25pbi1mb3JtLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvc2lnbnVwLWZvcm0uY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9hdXRoLWZvcm0uY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy9hcHAtY29udGVudC5jb21wb25lbnQudHMiLCJib290LnRzIiwiZGlyZWN0aXZlcy9jb2xsYXBzZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRWEsV0FBVzs7OztZQUFYLHlCQUFBLFdBQVcsR0FBOEI7Z0JBQ2xEO29CQUNJLE9BQU8sRUFBRSxDQUFDO29CQUNWLEtBQUssRUFBRSxhQUFhO29CQUNwQixXQUFXLEVBQUUsa25CQUFrbkI7b0JBQy9uQixZQUFZLEVBQUUsQ0FBQztvQkFDZixVQUFVLEVBQUUsQ0FBQyxDQUFDO29CQUNkLFdBQVcsRUFBQyxDQUFDO29CQUNiLElBQUksRUFBQyxT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QUM7NkJBQ0QsV0FBVyxDQUFDOzRCQUNULE1BQU0sRUFBRSxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsSUFBSTt5QkFDckQsQ0FBQzs2QkFDRCxLQUFLLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjt3QkFFMUQsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxjQUFPLE9BQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFoQyxDQUFnQyxDQUFFLENBQUM7b0JBQzNELENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUM7Z0JBaEVEO29CQUFDLGFBQUssRUFBRTs7MERBQUE7Z0JBTFo7b0JBQUMsaUJBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsWUFBWTtxQkFDekIsQ0FBQzs7NEJBQUE7Z0JBb0VGLGVBQUM7WUFBRCxDQWxFQSxBQWtFQyxJQUFBO1lBbEVELGdDQWtFQyxDQUFBIiwiZmlsZSI6Ii4uLy4uLy4uL2FuZ3VsYXJhdHRhY2syMDE2LWNocm9ub3N0b3JpZXMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdG9yeUJsb2NrfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2tcIjtcblxuZXhwb3J0IGNvbnN0IFNUT1JZQkxPQ0tTOlN0b3J5QmxvY2tbXSA9IDxTdG9yeUJsb2NrW10+W1xuICAgIHtcbiAgICAgICAgYmxvY2tJZDogMixcbiAgICAgICAgdGl0bGU6ICdGaXJzdCBibG9jaycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcbiAgICAgICAgdGltZVBvc2l0aW9uOiAyLFxuICAgICAgICBpbXBvcnRhbmNlOiAtMSxcbiAgICAgICAgYmxvY2tOdW1iZXI6MCxcbiAgICAgICAgdHlwZTonY2hhcHRlcidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmxvY2tJZDogMyxcbiAgICAgICAgdGl0bGU6ICdTZWNvbmQgYmxvY2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMyxcbiAgICAgICAgaW1wb3J0YW5jZTogMSxcbiAgICAgICAgYmxvY2tOdW1iZXI6MSxcbiAgICAgICAgdHlwZTonY2hhcHRlcidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmxvY2tJZDogNSxcbiAgICAgICAgdGl0bGU6ICdUaGlyZCBibG9jaycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcbiAgICAgICAgdGltZVBvc2l0aW9uOiA1LFxuICAgICAgICBpbXBvcnRhbmNlOiAtMSxcbiAgICAgICAgYmxvY2tOdW1iZXI6MixcbiAgICAgICAgdHlwZTonY2hhcHRlcidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmxvY2tJZDo2LFxuICAgICAgICB0aXRsZTogJ0ZvdXJ0aCBibG9jaycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcbiAgICAgICAgdGltZVBvc2l0aW9uOiA2LFxuICAgICAgICBpbXBvcnRhbmNlOiA1LFxuICAgICAgICBibG9ja051bWJlcjozLFxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBibG9ja0lkOiA3LFxuICAgICAgICB0aXRsZTogJ0ZpZnRoIGJsb2NrJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxuICAgICAgICB0aW1lUG9zaXRpb246IDcsXG4gICAgICAgIGltcG9ydGFuY2U6IDMsXG4gICAgICAgIGJsb2NrTnVtYmVyOjQsXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJsb2NrSWQ6IDEwLFxuICAgICAgICB0aXRsZTogJ1NpeHRoIGJsb2NrJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxuICAgICAgICB0aW1lUG9zaXRpb246IDEwLFxuICAgICAgICBpbXBvcnRhbmNlOiAxMSxcbiAgICAgICAgYmxvY2tOdW1iZXI6NSxcbiAgICAgICAgdHlwZTonY2hhcHRlcidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmxvY2tJZDogMTIsXG4gICAgICAgIHRpdGxlOiAnU2V2ZW50aCBibG9jaycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcbiAgICAgICAgdGltZVBvc2l0aW9uOiAxMixcbiAgICAgICAgaW1wb3J0YW5jZTogOSxcbiAgICAgICAgYmxvY2tOdW1iZXI6NixcbiAgICAgICAgdHlwZTonY2hhcHRlcidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmxvY2tJZDogMTUsXG4gICAgICAgIHRpdGxlOiAnRWlnaHRoIGJsb2NrJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxuICAgICAgICB0aW1lUG9zaXRpb246IDE1LFxuICAgICAgICBpbXBvcnRhbmNlOiA4LFxuICAgICAgICBibG9ja051bWJlcjo3LFxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBibG9ja0lkOiAxNixcbiAgICAgICAgdGl0bGU6ICdOaW50aCBibG9jaycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcbiAgICAgICAgdGltZVBvc2l0aW9uOiAxNixcbiAgICAgICAgaW1wb3J0YW5jZTogMyxcbiAgICAgICAgYmxvY2tOdW1iZXI6OCxcbiAgICAgICAgdHlwZTonY2hhcHRlcidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmxvY2tJZDogMTcsXG4gICAgICAgIHRpdGxlOiAnVGVudGggYmxvY2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMTcsXG4gICAgICAgIGltcG9ydGFuY2U6IDIsXG4gICAgICAgIGJsb2NrTnVtYmVyOjksXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJsb2NrSWQ6IDE5LFxuICAgICAgICB0aXRsZTogJ0VsZXZlbnRoIGJsb2NrJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxuICAgICAgICB0aW1lUG9zaXRpb246IDE5LFxuICAgICAgICBpbXBvcnRhbmNlOiAxMSxcbiAgICAgICAgYmxvY2tOdW1iZXI6MTAsXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJsb2NrSWQ6IDIxLFxuICAgICAgICB0aXRsZTogJ1R3ZWxmdGggYmxvY2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBhIHJpc3VzIHZpdGFlIHNlbSBwdWx2aW5hciBhbGlxdWFtLiBFdGlhbSBjb21tb2RvIHJ1dHJ1bSBwZWxsZW50ZXNxdWUuIFF1aXNxdWUgcmhvbmN1cyBsZWN0dXMgZXQgcG9zdWVyZSBsb2JvcnRpcy4gU2VkIHNvZGFsZXMgb3JuYXJlIHZlc3RpYnVsdW0uIEFlbmVhbiBlZ2VzdGFzIHZlbGl0IHJpc3VzLCBsYWNpbmlhIGFjY3Vtc2FuIGRvbG9yIGx1Y3R1cyBldS4gTWFlY2VuYXMgbm9uIHRvcnRvciB1bHRyaWNlcywgZmV1Z2lhdCBhcmN1IGlkLCBzZW1wZXIgb2Rpby4gRG9uZWMgc2l0IGFtZXQgZHVpIHNpdCBhbWV0IHR1cnBpcyBsYWNpbmlhIHBvcnRhIHZlbCBuZWMgaXBzdW0uIE51bGxhbSB0ZW1wb3IgbWV0dXMgZXUgZXggbWF0dGlzLCB2ZWwgcHVsdmluYXIgb2RpbyBlZmZpY2l0dXIuIERvbmVjIGVmZmljaXR1ciBmZWxpcyBzaXQgYW1ldCBsb3JlbSBsYW9yZWV0IGV1aXNtb2QuIENyYXMgZWxlbWVudHVtIGVuaW0gZW5pbSwgdmVsIGNvbnZhbGxpcyBzZW0gZWdlc3RhcyBhdC4gSW50ZWdlciBhdCB0b3J0b3IgZXUgZW5pbSB0ZW1wdXMgdGluY2lkdW50IGFjIGluIHZlbGl0LicsXG4gICAgICAgIHRpbWVQb3NpdGlvbjogMjEsXG4gICAgICAgIGltcG9ydGFuY2U6IDcsXG4gICAgICAgIGJsb2NrTnVtYmVyOjExLFxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBibG9ja0lkOiAyMixcbiAgICAgICAgdGl0bGU6ICdUaGlydGVlbnRoIGJsb2NrJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxuICAgICAgICB0aW1lUG9zaXRpb246IDIyLFxuICAgICAgICBpbXBvcnRhbmNlOiAyLFxuICAgICAgICBibG9ja051bWJlcjoxMixcbiAgICAgICAgdHlwZTonY2hhcHRlcidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmxvY2tJZDogMjUsXG4gICAgICAgIHRpdGxlOiAnRm91cnRlZW50aCBibG9jaycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcbiAgICAgICAgdGltZVBvc2l0aW9uOiAyNSxcbiAgICAgICAgaW1wb3J0YW5jZTogNyxcbiAgICAgICAgYmxvY2tOdW1iZXI6MTMsXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJsb2NrSWQ6IDI3LFxuICAgICAgICB0aXRsZTogJ0ZpZnRlZW50aCBibG9jaycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcbiAgICAgICAgdGltZVBvc2l0aW9uOiAyNyxcbiAgICAgICAgaW1wb3J0YW5jZTogNSxcbiAgICAgICAgYmxvY2tOdW1iZXI6MTQsXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJsb2NrSWQ6IDI4LFxuICAgICAgICB0aXRsZTogJ1NpeHRlZW50aCBibG9jaycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcbiAgICAgICAgdGltZVBvc2l0aW9uOiAyOCxcbiAgICAgICAgaW1wb3J0YW5jZTogNSxcbiAgICAgICAgYmxvY2tOdW1iZXI6MTUsXG4gICAgICAgIHR5cGU6J2NoYXB0ZXInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJsb2NrSWQ6IDI5LFxuICAgICAgICB0aXRsZTogJ1NldmVudGVlbnRoIGJsb2NrJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYSByaXN1cyB2aXRhZSBzZW0gcHVsdmluYXIgYWxpcXVhbS4gRXRpYW0gY29tbW9kbyBydXRydW0gcGVsbGVudGVzcXVlLiBRdWlzcXVlIHJob25jdXMgbGVjdHVzIGV0IHBvc3VlcmUgbG9ib3J0aXMuIFNlZCBzb2RhbGVzIG9ybmFyZSB2ZXN0aWJ1bHVtLiBBZW5lYW4gZWdlc3RhcyB2ZWxpdCByaXN1cywgbGFjaW5pYSBhY2N1bXNhbiBkb2xvciBsdWN0dXMgZXUuIE1hZWNlbmFzIG5vbiB0b3J0b3IgdWx0cmljZXMsIGZldWdpYXQgYXJjdSBpZCwgc2VtcGVyIG9kaW8uIERvbmVjIHNpdCBhbWV0IGR1aSBzaXQgYW1ldCB0dXJwaXMgbGFjaW5pYSBwb3J0YSB2ZWwgbmVjIGlwc3VtLiBOdWxsYW0gdGVtcG9yIG1ldHVzIGV1IGV4IG1hdHRpcywgdmVsIHB1bHZpbmFyIG9kaW8gZWZmaWNpdHVyLiBEb25lYyBlZmZpY2l0dXIgZmVsaXMgc2l0IGFtZXQgbG9yZW0gbGFvcmVldCBldWlzbW9kLiBDcmFzIGVsZW1lbnR1bSBlbmltIGVuaW0sIHZlbCBjb252YWxsaXMgc2VtIGVnZXN0YXMgYXQuIEludGVnZXIgYXQgdG9ydG9yIGV1IGVuaW0gdGVtcHVzIHRpbmNpZHVudCBhYyBpbiB2ZWxpdC4nLFxuICAgICAgICB0aW1lUG9zaXRpb246IDI5LFxuICAgICAgICBpbXBvcnRhbmNlOiAzLFxuICAgICAgICBibG9ja051bWJlcjoxNixcbiAgICAgICAgdHlwZTonY2hhcHRlcidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmxvY2tJZDogMzAsXG4gICAgICAgIHRpdGxlOiAnRWlnaHRlZW50aCBibG9jaycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGEgcmlzdXMgdml0YWUgc2VtIHB1bHZpbmFyIGFsaXF1YW0uIEV0aWFtIGNvbW1vZG8gcnV0cnVtIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSByaG9uY3VzIGxlY3R1cyBldCBwb3N1ZXJlIGxvYm9ydGlzLiBTZWQgc29kYWxlcyBvcm5hcmUgdmVzdGlidWx1bS4gQWVuZWFuIGVnZXN0YXMgdmVsaXQgcmlzdXMsIGxhY2luaWEgYWNjdW1zYW4gZG9sb3IgbHVjdHVzIGV1LiBNYWVjZW5hcyBub24gdG9ydG9yIHVsdHJpY2VzLCBmZXVnaWF0IGFyY3UgaWQsIHNlbXBlciBvZGlvLiBEb25lYyBzaXQgYW1ldCBkdWkgc2l0IGFtZXQgdHVycGlzIGxhY2luaWEgcG9ydGEgdmVsIG5lYyBpcHN1bS4gTnVsbGFtIHRlbXBvciBtZXR1cyBldSBleCBtYXR0aXMsIHZlbCBwdWx2aW5hciBvZGlvIGVmZmljaXR1ci4gRG9uZWMgZWZmaWNpdHVyIGZlbGlzIHNpdCBhbWV0IGxvcmVtIGxhb3JlZXQgZXVpc21vZC4gQ3JhcyBlbGVtZW50dW0gZW5pbSBlbmltLCB2ZWwgY29udmFsbGlzIHNlbSBlZ2VzdGFzIGF0LiBJbnRlZ2VyIGF0IHRvcnRvciBldSBlbmltIHRlbXB1cyB0aW5jaWR1bnQgYWMgaW4gdmVsaXQuJyxcbiAgICAgICAgdGltZVBvc2l0aW9uOiAzMCxcbiAgICAgICAgaW1wb3J0YW5jZTogLTEsXG4gICAgICAgIGJsb2NrTnVtYmVyOjE3LFxuICAgICAgICB0eXBlOidjaGFwdGVyJ1xuICAgIH0sXG5dOyIsImltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XG5pbXBvcnQge1N0b3J5QmxvY2tUeXBlfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2stdHlwZVwiO1xuXG5leHBvcnQgY29uc3QgU1RPUllCTE9DS19UWVBFUzpTdG9yeUJsb2NrVHlwZVtdID0gPFN0b3J5QmxvY2tUeXBlW10+W1xuICAgIHtcbiAgICAgICAgaWQ6ICdjaGFwdGVyJyxcbiAgICAgICAgbmFtZTogJ0NoYXB0ZXInLFxuICAgICAgICBsZXZlbDogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ3BhcmFncmFwaCcsXG4gICAgICAgIG5hbWU6ICdQYXJhZ3JhcGgnLFxuICAgICAgICBsZXZlbDogMVxuICAgIH0sXG5dOyIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7SHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtTdG9yeUJsb2NrfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2tcIjtcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmUnO1xuaW1wb3J0IHtPYnNlcnZlcn0gZnJvbSAncnhqcy9PYnNlcnZlcic7XG5pbXBvcnQge1NUT1JZQkxPQ0tTfSBmcm9tIFwiLi4vbW9jay9tb2NrLXN0b3J5YmxvY2tzXCI7XG5pbXBvcnQge1N0b3J5QmxvY2tUeXBlfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2stdHlwZVwiO1xuaW1wb3J0IHtTVE9SWUJMT0NLX1RZUEVTfSBmcm9tIFwiLi4vbW9jay9tb2NrLXN0b3J5YmxvY2stdHlwZXNcIjtcbmRlY2xhcmUgdmFyIHBkZk1ha2U6IGFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0b3J5QmxvY2tTZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9leHBvc2VkSW5kZXggPSAtMTtcbiAgICBpbmRleENoYW5nZSQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICBwcml2YXRlIF9vYnNlcnZlcjogT2JzZXJ2ZXI8bnVtYmVyPjtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDpIdHRwKSB7XG4gICAgICAgIHRoaXMuaW5kZXhDaGFuZ2UkID0gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT5cbiAgICAgICAgICAgIHRoaXMuX29ic2VydmVyID0gb2JzZXJ2ZXIpLnNoYXJlKCk7XG4gICAgICAgIC8vIHNoYXJlKCkgYWxsb3dzIG11bHRpcGxlIHN1YnNjcmliZXJzXG4gICAgfVxuICAgIGNoYW5nZUV4cG9zZWRJbmRleChpbmRleCkge1xuICAgICAgICB0aGlzLl9leHBvc2VkSW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChpbmRleCk7XG4gICAgfVxuICAgIGdldEV4cG9zZWRJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4cG9zZWRJbmRleDtcbiAgICB9XG5cbiAgICBnZXRTdG9yeUJsb2NrcygpOk9ic2VydmFibGU8U3RvcnlCbG9ja1tdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvc3RvcnlibG9ja3MvJylcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuICAgIHNhdmVTdG9yeUJsb2NrKHN0b3J5QmxvY2s6U3RvcnlCbG9jayk6T2JzZXJ2YWJsZTxTdG9yeUJsb2NrPiB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCEhc3RvcnlCbG9jay5faWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KCcvc3RvcnlibG9ja3MvJyArIHN0b3J5QmxvY2suX2lkLCBcImRhdGE9XCIgKyBKU09OLnN0cmluZ2lmeShzdG9yeUJsb2NrKSwgb3B0aW9ucylcbiAgICAgICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL3N0b3J5YmxvY2tzLycsIFwiZGF0YT1cIiArIEpTT04uc3RyaW5naWZ5KHN0b3J5QmxvY2spLCBvcHRpb25zKVxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlU3RvcnlCbG9jayhzdG9yeUJsb2NrOlN0b3J5QmxvY2spOk9ic2VydmFibGU8U3RvcnlCbG9ja1tdPiB7XG4gICAgICAgIGlmICghIXN0b3J5QmxvY2suX2lkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSgnL3N0b3J5YmxvY2tzLycgKyBzdG9yeUJsb2NrLl9pZClcbiAgICAgICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRTdG9yeUJsb2NrVHlwZXMoKTpTdG9yeUJsb2NrVHlwZVtdIHtcbiAgICAgICAgcmV0dXJuIFNUT1JZQkxPQ0tfVFlQRVM7XG4gICAgfVxuXG4gICAgZ2V0U3RvcnlCbG9ja0RlZmF1bHRUeXBlcygpOlN0b3J5QmxvY2tUeXBlW10ge1xuICAgICAgICByZXR1cm4gU1RPUllCTE9DS19UWVBFUztcbiAgICB9XG5cbiAgICBnZW5lcmF0ZVRlc3REYXRhKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgdGVtcG9yYXJ5IGRhdGEnKTtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5odHRwLnBvc3QoJy9zdG9yeWJsb2Nrcy8nLCBcImRhdGE9XCIgKyBKU09OLnN0cmluZ2lmeShTVE9SWUJMT0NLUyksIG9wdGlvbnMpLm1hcChyZXMgPT4gcmVzLnRleHQoKSkuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgZG93bmxvYWRQZGYoc3RvcnlCbG9ja3M6U3RvcnlCbG9ja1tdKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNvbXBhcmUoYTpTdG9yeUJsb2NrLCBiOlN0b3J5QmxvY2spIHtcbiAgICAgICAgICAgIGlmIChhLnRpbWVQb3NpdGlvbiA8IGIudGltZVBvc2l0aW9uKVxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGEudGltZVBvc2l0aW9uID4gYi50aW1lUG9zaXRpb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBzdG9yeUJsb2Nrcy5zb3J0KGNvbXBhcmUpO1xuXG5cbiAgICAgICAgdmFyIGRvY0RlZmluaXRpb24gPSB7XG4gICAgICAgICAgICBjb250ZW50OiBbXSxcblxuICAgICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICAgICAgY2hhcHRlcjoge1xuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjIsXG4gICAgICAgICAgICAgICAgICAgIGJvbGQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFncmFwaDoge1xuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXG4gICAgICAgICAgICAgICAgICAgIGJvbGQ6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdG9yeUJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZG9jRGVmaW5pdGlvbi5jb250ZW50LnB1c2goXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBzdG9yeUJsb2Nrc1tpXS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHN0b3J5QmxvY2tzW2ldLnR5cGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZG9jRGVmaW5pdGlvbi5jb250ZW50LnB1c2goXG4gICAgICAgICAgICAgICAgc3RvcnlCbG9ja3NbaV0uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBwZGZNYWtlLmNyZWF0ZVBkZihkb2NEZWZpbml0aW9uKS5kb3dubG9hZCgpO1xuICAgIH1cblxufSIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXRpbHNTZXJ2aWNlIHtcbiAgICBwdWJsaWMgRU1BSUxfUkVHRVggPSAnXlstYS16MC05fiEkJV4mKl89K317XFwnP10rKFxcLlstYS16MC05fiEkJV4mKl89K317XFwnP10rKSpAKFthLXowLTlfXVstYS16MC05X10qKFxcLlstYS16MC05X10rKSpcXC4oYWVyb3xhcnBhfGJpenxjb218Y29vcHxlZHV8Z292fGluZm98aW50fG1pbHxtdXNldW18bmFtZXxuZXR8b3JnfHByb3x0cmF2ZWx8bW9iaXxbYS16XVthLXpdKXwoWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfSkpKDpbMC05XXsxLDV9KT8kJztcblxuXG4gICAgZ2V0Um9tYW5OdW1lcmFsKG51bSk6c3RyaW5nIHtcbiAgICAgICAgaWYgKCErbnVtKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB2YXIgZGlnaXRzID0gU3RyaW5nKCtudW0pLnNwbGl0KFwiXCIpLFxuICAgICAgICAgICAga2V5ID0gW1wiXCIsIFwiQ1wiLCBcIkNDXCIsIFwiQ0NDXCIsIFwiQ0RcIiwgXCJEXCIsIFwiRENcIiwgXCJEQ0NcIiwgXCJEQ0NDXCIsIFwiQ01cIixcbiAgICAgICAgICAgICAgICBcIlwiLCBcIlhcIiwgXCJYWFwiLCBcIlhYWFwiLCBcIlhMXCIsIFwiTFwiLCBcIkxYXCIsIFwiTFhYXCIsIFwiTFhYWFwiLCBcIlhDXCIsXG4gICAgICAgICAgICAgICAgXCJcIiwgXCJJXCIsIFwiSUlcIiwgXCJJSUlcIiwgXCJJVlwiLCBcIlZcIiwgXCJWSVwiLCBcIlZJSVwiLCBcIlZJSUlcIiwgXCJJWFwiXSxcbiAgICAgICAgICAgIHJvbWFuID0gXCJcIixcbiAgICAgICAgICAgIGkgPSAzO1xuICAgICAgICB3aGlsZSAoaS0tKVxuICAgICAgICAgICAgcm9tYW4gPSAoa2V5WytkaWdpdHMucG9wKCkgKyAoaSAqIDEwKV0gfHwgXCJcIikgKyByb21hbjtcbiAgICAgICAgcmV0dXJuIEFycmF5KCtkaWdpdHMuam9pbihcIlwiKSArIDEpLmpvaW4oXCJNXCIpICsgcm9tYW47XG4gICAgfVxufSIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xuICAgIHB1YmxpYyB6b29tID0ge1xuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHN0ZXA6IDE1MCxcbiAgICAgICAgc3RyZW5ndGg6IDEwXG4gICAgfTtcblxuICAgIHB1YmxpYyB0b2tlbiA9IHtcbiAgICAgICAgbmFtZTogJ3Rva2VuJyxcbiAgICAgICAgZXhwaXJhdGlvbjogKDMwICogMjQgKiA2MCAqIDYwICogMTAwMClcbiAgICB9O1xufSIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7VXRpbHNTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvdXRpbHMuc2VydmljZVwiO1xuaW1wb3J0IHtBbmltYXRpb25CdWlsZGVyfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2FuaW1hdGUvYW5pbWF0aW9uX2J1aWxkZXJcIjtcbmltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XG5pbXBvcnQge1N0b3J5QmxvY2tTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvc3RvcnlibG9ja3Muc2VydmljZVwiO1xuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzdG9yeWJsb2NrJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5kZXhcIj48c3BhbiAqbmdJZj1cInN0b3J5QmxvY2tJbmZvLnR5cGUgPT0gJ2NoYXB0ZXInXCI+e3t1dGlsc1NlcnZpY2UuZ2V0Um9tYW5OdW1lcmFsKHN0b3J5QmxvY2tJbmZvLmJsb2NrTnVtYmVyICsgMSl9fTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0aXRsZVwiIFthdHRyLnJlYWRvbmx5XT1cIl9leHBvc2VkID8gbnVsbCA6IHRydWVcIiBbKG5nTW9kZWwpXT1cInN0b3J5QmxvY2tJbmZvLnRpdGxlXCIgcGxhY2Vob2xkZXI9XCJJbnNlcnQgYSB0aXRsZVwiIC8+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJkZXNjcmlwdGlvblwiIFthdHRyLnJlYWRvbmx5XT1cIl9leHBvc2VkID8gbnVsbCA6IHRydWVcIiBbKG5nTW9kZWwpXT1cInN0b3J5QmxvY2tJbmZvLmRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJTdGFydCB3cml0aW5nIHlvdXIgc3RvcnkgaGVyZS4uLlwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVmYXVsdC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cImVkaXQoaW5kZXgsICRldmVudClcIiBjbGFzcz1cImJ1dHRvbiBpbmxpbmUtYnV0dG9uIHByaW1hcnlcIj5FZGl0PC9hPlxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJyZW1vdmUoaW5kZXgsICRldmVudClcIiBjbGFzcz1cImJ1dHRvbiBpbmxpbmUtYnV0dG9uIGFsZXJ0XCI+UmVtb3ZlPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwb3NlZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cInNhdmUoaW5kZXgsICRldmVudClcIiBjbGFzcz1cImJ1dHRvbiBpbmxpbmUtYnV0dG9uIHByaW1hcnlcIj5TYXZlPC9hPlxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJjbG9zZSgpXCIgY2xhc3M9XCJidXR0b24gaW5saW5lLWJ1dHRvbiBzZWNvbmRhcnlcIj5DbG9zZTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW1V0aWxzU2VydmljZSwgU3RvcnlCbG9ja1NlcnZpY2VdLFxuICAgIGlucHV0czogWydzdG9yeUJsb2NrSW5mbycsICdpbmRleCddXG59KVxuXG5leHBvcnQgY2xhc3MgU3RvcnlCbG9ja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHN0b3J5QmxvY2tJbmZvOlN0b3J5QmxvY2s7XG5cbiAgICBwdWJsaWMgaW5kZXg7XG4gICAgcHVibGljIF9leHBvc2VkID0gZmFsc2U7XG4gICAgcHVibGljIF9hY3RpdmUgPSB0cnVlO1xuICAgIHByaXZhdGUgX2FjdGlvblRpbWVvdXQ7XG4gICAgcHVibGljIF9zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3pvb21MZXZlbCA9IDEwO1xuICAgIHByaXZhdGUgX3ByZXZpb3VzWm9vbUxldmVsID0gMTA7XG4gICAgcHJpdmF0ZSBzdG9yeUJsb2NrTG9jYWxTYXZlOlN0b3J5QmxvY2s7XG5cbiAgICBAT3V0cHV0KCkgem9vbUV2ZW50OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBleHBvc2VFdmVudDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgcmVtb3ZlU3RvcnlCbG9ja0V2ZW50OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBub3RpZnk6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hYjpBbmltYXRpb25CdWlsZGVyLCBwcml2YXRlIF9lOkVsZW1lbnRSZWYsIHByaXZhdGUgdXRpbHNTZXJ2aWNlOlV0aWxzU2VydmljZSwgcHVibGljIHN0b3J5QmxvY2tTZXJ2aWNlOlN0b3J5QmxvY2tTZXJ2aWNlLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbikge1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHpvb21MZXZlbCh2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fcHJldmlvdXNab29tTGV2ZWwgPSAodGhpcy5fcHJldmlvdXNab29tTGV2ZWwgPT0gdW5kZWZpbmVkKSA/IDEwIDogdGhpcy5fcHJldmlvdXNab29tTGV2ZWw7XG4gICAgICAgIHRoaXMuX3pvb21MZXZlbCA9ICh0aGlzLl96b29tTGV2ZWwgPT0gdW5kZWZpbmVkKSA/IDEwIDogdGhpcy5fem9vbUxldmVsO1xuICAgICAgICBpZiAodGhpcy5fem9vbUxldmVsICE9IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1pvb21MZXZlbCA9IHRoaXMuX3pvb21MZXZlbDtcbiAgICAgICAgICAgIHRoaXMuX3pvb21MZXZlbCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy56b29tQ2hhbmdlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgZXhwb3NlZEluZGV4KHZhbHVlOm51bWJlcil7XG4gICAgICAgIHRoaXMuX2V4cG9zZWQgPSAodmFsdWUgPT0gdGhpcy5pbmRleCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgICB0aGlzLmNoYW5nZVBvc2l0aW9uT25ab29tKDEwMDApO1xuICAgIH1cblxuICAgIHpvb20oZSkge1xuICAgICAgICB2YXIgZSA9IHdpbmRvdy5ldmVudCB8fCBlOyAvLyBvbGQgSUUgc3VwcG9ydFxuICAgICAgICB0aGlzLnpvb21FdmVudC5lbWl0KGUpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgem9vbUNoYW5nZWQoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdbU3RvcnlCbG9jayAjJyArIHRoaXMuaW5kZXggKyAnXSBab29tIGNoYW5nZWQgZnJvbSAnICsgdGhpcy5fcHJldmlvdXNab29tTGV2ZWwgKyAnIHRvICcgKyB0aGlzLl96b29tTGV2ZWwpO1xuICAgICAgICBpZiAodGhpcy5fem9vbUxldmVsIDwgdGhpcy5zdG9yeUJsb2NrSW5mby5pbXBvcnRhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmZhZGVPdXQoMTAwMCk7XG4gICAgICAgICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUG9zaXRpb25Pblpvb20oMTAwMCk7XG4gICAgICAgICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmFkZUluKHNwZWVkOm51bWJlcikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnW1N0b3J5QmxvY2sgIycgKyB0aGlzLmluZGV4ICsgJ10gRmFkaW5nIGluLi4uJyk7XG4gICAgICAgIGxldCBhbmltYXRpb24gPSB0aGlzLl9hYi5jc3MoKTtcbiAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGZyb21TdHlsZSA9IHt9O1xuICAgICAgICB2YXIgdG9TdHlsZSA9IHt9O1xuXG4gICAgICAgIGZyb21TdHlsZVsnZGlzcGxheSddID0gJ2ZsZXgnO1xuICAgICAgICBmcm9tU3R5bGVbJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gPSAnY3ViaWMtYmV6aWVyKDAuNTc1LCAwLjI1NSwgMC40NDAsIDAuOTg1KTsnO1xuICAgICAgICB0b1N0eWxlWydvcGFjaXR5J10gPSAxO1xuXG4gICAgICAgIGFuaW1hdGlvblxuICAgICAgICAgICAgLnNldER1cmF0aW9uKHNwZWVkKVxuICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoZnJvbVN0eWxlKVxuICAgICAgICAgICAgLnNldFRvU3R5bGVzKHRvU3R5bGUpO1xuXG4gICAgICAgIGlmICghIV9zZWxmLl9hY3Rpb25UaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3NlbGYuX2FjdGlvblRpbWVvdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3NlbGYuX2FjdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbi5zdGFydChfc2VsZi5fZS5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG5cbiAgICBmYWRlT3V0KHNwZWVkOm51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fYWN0aXZlKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnW1N0b3J5QmxvY2sgIycgKyB0aGlzLmluZGV4ICsgJ10gRmFkaW5nIG91dC4uLlsnICsgdGhpcy5fem9vbUxldmVsICsgJzwnICsgdGhpcy5zdG9yeUJsb2NrSW5mby5pbXBvcnRhbmNlICsgJ10nKTtcbiAgICAgICAgICAgIGxldCBhbmltYXRpb24gPSB0aGlzLl9hYi5jc3MoKTtcbiAgICAgICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZnJvbVN0eWxlID0ge307XG4gICAgICAgICAgICB2YXIgdG9TdHlsZSA9IHt9O1xuXG4gICAgICAgICAgICB0b1N0eWxlWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJ2N1YmljLWJlemllcigwLjU3NSwgMC4yNTUsIDAuNDQwLCAwLjk4NSk7JztcbiAgICAgICAgICAgIHRvU3R5bGVbJ29wYWNpdHknXSA9IDA7XG5cbiAgICAgICAgICAgIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgIC5zZXREdXJhdGlvbihzcGVlZClcbiAgICAgICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyhmcm9tU3R5bGUpXG4gICAgICAgICAgICAgICAgLnNldFRvU3R5bGVzKHRvU3R5bGUpO1xuXG4gICAgICAgICAgICBpZiAoISFfc2VsZi5fYWN0aW9uVGltZW91dCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbU3RvcnlCbG9jayAjJyArIF9zZWxmLmluZGV4ICsgJ10gQW5pbWF0aW9uIHJlbW92ZWQnKTtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoX3NlbGYuX2FjdGlvblRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfc2VsZi5fYWN0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5zdGFydChfc2VsZi5fZS5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VQb3NpdGlvbk9uWm9vbShzcGVlZCkge1xuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5fYWIuY3NzKCk7XG4gICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBmcm9tU3R5bGUgPSB7XG4gICAgICAgICAgICB0b3A6IHRoaXMuY29uZmlndXJhdGlvbi56b29tLm9mZnNldCArICgodGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RlcCArICh0aGlzLl9wcmV2aW91c1pvb21MZXZlbCAqIHRoaXMuY29uZmlndXJhdGlvbi56b29tLnN0cmVuZ3RoKSkgKiB0aGlzLnN0b3J5QmxvY2tJbmZvLnRpbWVQb3NpdGlvbikgKyAncHgnXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHRvU3R5bGUgPSB7XG4gICAgICAgICAgICB0b3A6IHRoaXMuY29uZmlndXJhdGlvbi56b29tLm9mZnNldCArICgodGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RlcCArICh0aGlzLl96b29tTGV2ZWwgKiB0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5zdHJlbmd0aCkpICogdGhpcy5zdG9yeUJsb2NrSW5mby50aW1lUG9zaXRpb24pICsgJ3B4J1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdbU3RvcnlCbG9jayAjJyArIHRoaXMuaW5kZXggKyAnXSBDaGFuZ2luZyBwb3NpdGlvbiBmcm9tICcgKyAoZnJvbVN0eWxlLnRvcCkgKyAnIHRvICcgKyAodG9TdHlsZS50b3ApICsgJyAuLi4nKTtcblxuICAgICAgICBpZiAoX3NlbGYuX3pvb21MZXZlbCA+IF9zZWxmLnN0b3J5QmxvY2tJbmZvLmltcG9ydGFuY2UpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdbU3RvcnlCbG9jayAjJyArIHRoaXMuaW5kZXggKyAnXSAuLi5hbmQgZmFkaW5nIGluIFsnICsgdGhpcy5fem9vbUxldmVsICsgJz4nICsgdGhpcy5zdG9yeUJsb2NrSW5mby5pbXBvcnRhbmNlICsgJ10nKTtcbiAgICAgICAgICAgIHRvU3R5bGVbJ29wYWNpdHknXSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnW1N0b3J5QmxvY2sgIycgKyB0aGlzLmluZGV4ICsgJ10gLi4uYW5kIGZhZGluZyBvdXQnKTtcbiAgICAgICAgICAgIHRvU3R5bGVbJ29wYWNpdHknXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0b1N0eWxlWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJ2N1YmljLWJlemllcigwLjU3NSwgMC4yNTUsIDAuNDQwLCAwLjk4NSk7JztcblxuICAgICAgICBhbmltYXRpb25cbiAgICAgICAgICAgIC5zZXREdXJhdGlvbihzcGVlZClcbiAgICAgICAgICAgIC5zZXRGcm9tU3R5bGVzKGZyb21TdHlsZSlcbiAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh0b1N0eWxlKTtcblxuICAgICAgICBpZiAoISFfc2VsZi5fYWN0aW9uVGltZW91dCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1tTdG9yeUJsb2NrICMnICsgdGhpcy5pbmRleCArICddIEFuaW1hdGlvbiByZW1vdmVkJyk7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3NlbGYuX2FjdGlvblRpbWVvdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3NlbGYuX2FjdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbi5zdGFydChfc2VsZi5fZS5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG5cbiAgICBmb2N1cygpIHtcbiAgICAgICAgdmFyIG5hdGl2ZSA9IHRoaXMuX2UubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IG51bGw7XG4gICAgICAgIHZhciB0ZXh0YXJlYSA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmF0aXZlLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgobmF0aXZlLmNoaWxkTm9kZXNbaV0uY2xhc3NOYW1lIHx8ICcnKS5pbmRleE9mKFwidGV4dC1jb250YWluZXJcIikgPiAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IG5hdGl2ZS5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICgoY29udGFpbmVyLmNoaWxkTm9kZXNbaV0uY2xhc3NOYW1lIHx8ICcnKS5pbmRleE9mKFwiZGVzY3JpcHRpb25cIikgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSA9IGNvbnRhaW5lci5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoISF0ZXh0YXJlYSkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVkaXQoaW5kZXgsIGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTYXZpbmcgdGVtcG9yYXJ5IGRhdGEgJywgdGhpcy5zdG9yeUJsb2NrSW5mbyk7XG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja0xvY2FsU2F2ZSA9IDxTdG9yeUJsb2NrPkpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdG9yeUJsb2NrSW5mbykpO1xuICAgICAgICB0aGlzLmV4cG9zZUV2ZW50LmVtaXQoaW5kZXgpO1xuICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKGluZGV4LCBldmVudCkge1xuICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmRlbGV0ZVN0b3J5QmxvY2sodGhpcy5zdG9yeUJsb2NrSW5mbykuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciB3aGlsZSByZW1vdmluZycsIHRoaXMuc3RvcnlCbG9ja0luZm8sIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yLiBQbGVhc2UgdHJ5IGFnYWluLidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlbW92aW5nIGJsb2NrIGluZGV4ICcgK3RoaXMuaW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdSZW1vdmVkIHN1Y2Nlc3NmdWxseS4nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTdG9yeUJsb2NrRXZlbnQuZW1pdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzYXZlKGluZGV4LCBldmVudCkge1xuXG4gICAgICAgIGlmICghKHRoaXMuc3RvcnlCbG9ja0luZm8udGl0bGUgPT0gJycgJiYgdGhpcy5zdG9yeUJsb2NrSW5mby5kZXNjcmlwdGlvbiA9PSAnJykpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcnlCbG9ja1NlcnZpY2Uuc2F2ZVN0b3J5QmxvY2sodGhpcy5zdG9yeUJsb2NrSW5mbykuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5QmxvY2tJbmZvID0gPFN0b3J5QmxvY2s+ZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NhdmluZyB0ZW1wb3JhcnkgZGF0YSAnLCBkYXRhLCB0aGlzLnN0b3J5QmxvY2tJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2NrTG9jYWxTYXZlID0gPFN0b3J5QmxvY2s+SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0b3J5QmxvY2tJbmZvKSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciB3aGlsZSBzYXZpbmcnLCB0aGlzLnN0b3J5QmxvY2tJbmZvLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvci4gUGxlYXNlIHRyeSBhZ2Fpbi4nXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2F2ZWQgJywgdGhpcy5zdG9yeUJsb2NrSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NhdmVkIHN1Y2Nlc3NmdWxseS4nXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KCdQbGVhc2UgaW5zZXJ0IGEgdGl0bGUgb3Igc29tZSBjb250ZW50LicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuZXhwb3NlRXZlbnQuZW1pdCgtMSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0b3J5QmxvY2tMb2NhbFNhdmUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdmluZyBibG9jayBpbmRleCAnICt0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU3RvcnlCbG9ja0V2ZW50LmVtaXQodGhpcy5pbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOid0aW1lbGluZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lQ29tcG9uZW50IHtcbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWZ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidhZGQtYnV0dG9uJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8YT48c3Bhbj4rPC9zcGFuPjwvYT5cbiAgICBgLFxuICAgIGlucHV0czogWydvZmZzZXRZJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRkQnV0dG9uQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIF9vZmZzZXRZO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZTpFbGVtZW50UmVmKXtcblxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IG9mZnNldFkodmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX29mZnNldFkgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vZmZzZXRDaGFuZ2VkKHZhbHVlKTtcbiAgICB9XG5cbiAgICBvZmZzZXRDaGFuZ2VkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2UubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSB2YWx1ZSArICdweCc7XG4gICAgfVxufSIsImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3Rvcjonbm90aWZpY2F0aW9uJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cIntlcnJvcjogX2Vycm9yLCBzdWNjZXNzOiBfc3VjY2Vzc31cIj57eyBfY29udGVudMKgfX08L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfdGltZXI7XG4gICAgcHJpdmF0ZSBfY29udGVudDtcbiAgICBwcml2YXRlIF9lcnJvciA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3N1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2U6RWxlbWVudFJlZil7XG5cbiAgICB9XG5cbiAgICBzaG93KGNvbnRlbnQpe1xuICAgICAgICBpZighIXRoaXMuX3RpbWVyKXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMuX2UubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9lLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG5cbiAgICBzdWNjZXNzKGNvbnRlbnQpe1xuICAgICAgICB0aGlzLl9lcnJvciA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93KGNvbnRlbnQpXG4gICAgfVxuXG4gICAgZXJyb3IoY29udGVudCl7XG4gICAgICAgIHRoaXMuX2Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3coY29udGVudClcbiAgICB9XG5cbiAgICBtZXNzYWdlKGNvbnRlbnQpe1xuICAgICAgICB0aGlzLl9lcnJvciA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvdyhjb250ZW50KVxuICAgIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7U3RvcnlCbG9ja1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdG9yeWJsb2Nrcy5zZXJ2aWNlXCI7XG5pbXBvcnQge1N0b3J5QmxvY2t9IGZyb20gXCIuLi9tb2RlbHMvc3RvcnlibG9ja1wiO1xuaW1wb3J0IHtTdG9yeUJsb2NrVHlwZX0gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrLXR5cGVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J3NpZGViYXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWFjdGlvblwiICpuZ0lmPVwiX2luZGV4ID09IC0xXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImNyZWF0ZS1zdG9yeWJsb2NrXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIChkcmFnc3RhcnQpPVwiZHJhZ1N0YXJ0KCRldmVudClcIiAoZHJhZ2VuZCk9XCJkcmFnRW5kKCRldmVudClcIj5DcmVhdGUgc3RvcnlibG9jazwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWFjdGlvblwiICpuZ0lmPVwiX2luZGV4ID49IDAgJiYgISFfc3RvcnlCbG9ja1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+U3RvcnlibG9jayB0eXBlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBbKG5nTW9kZWwpXT1cIl9zdG9yeUJsb2NrLnR5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwiI3N0b3J5QmxvY2tUeXBlIG9mIHN0b3J5QmxvY2tUeXBlc1wiIHZhbHVlPXt7c3RvcnlCbG9ja1R5cGUuaWR9fT57e3N0b3J5QmxvY2tUeXBlLm5hbWV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGlucHV0czogWydzdG9yeUJsb2NrJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHN0b3J5QmxvY2tUeXBlczpTdG9yeUJsb2NrVHlwZVtdO1xuICAgIFxuICAgIHB1YmxpYyBfaW5kZXg6IG51bWJlcjtcbiAgICBwdWJsaWMgX3N0b3J5QmxvY2s7XG4gICAgcHVibGljIF9zdWJzY3JpcHRpb246IGFueTtcblxuICAgIEBPdXRwdXQoKSBzdGFydERyYWdnaW5nOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBlbmREcmFnZ2luZzpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0b3J5QmxvY2tTZXJ2aWNlOlN0b3J5QmxvY2tTZXJ2aWNlKSB7fVxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHN0b3J5QmxvY2soc3RvcnlCbG9jayl7XG4gICAgICAgIHRoaXMuX3N0b3J5QmxvY2sgPSBzdG9yeUJsb2NrO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrVHlwZXMgPSB0aGlzLl9zdG9yeUJsb2NrU2VydmljZS5nZXRTdG9yeUJsb2NrVHlwZXMoKTtcbiAgICAgICAgdGhpcy5faW5kZXggPSB0aGlzLl9zdG9yeUJsb2NrU2VydmljZS5nZXRFeHBvc2VkSW5kZXgoKTtcbiAgICAgICAgdGhpcy5fc3RvcnlCbG9jayA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX3N0b3J5QmxvY2tTZXJ2aWNlLmluZGV4Q2hhbmdlJC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBpbmRleCA9PiB0aGlzLnNlbGVjdEluZGV4KGluZGV4KSk7XG4gICAgfVxuICAgIHNlbGVjdEluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5faW5kZXggPSBpbmRleDtcbiAgICB9XG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBkcmFnU3RhcnQoZSl7XG4gICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpbWcuc3JjID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNRQUFBQWtDQVlBQUFEaEFKaVlBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFCTzFKUkVGVVdBbk5tRUZzRkZVWXg3ODNPN1BhQXJwZ3FGS3RHS01oR09KSkVtMUZROElhcFVRa3BqMlllUE5takFlajhlRFJnOUY0SU1hYk54TVBiUlF4Z01aaWlHS3JDUnlNVVFscVRFQXBDQXFyaGhaM1p1ZjUvZDdzMjkzU2xwM0ZsdXlYN096YjJmZisvLzk4NzczdmZkOFk2ZEJ1M0dkWEJ4ZXJ3MVpNV1l6Y2JxM3ROOGIwQTZQdGFXMVBpNVdUUnV4RXVxSzQvNjhkNWtJbkZDWnY1OUpZc2t0cytwdzFza1dadzF6ampFbU1sY05pZ3JjcW8rR2VQR1BhQ2xyOWZqeGthL1oxZmZwQkFLT0NzUSt0TldiN3JZRnN1TUhJdWg0anQxeWZVWjI1SkhKNjFzcnh2NjBjT0pYS0YrZXNqV3Y2Q0dycXVTbFRNQzlkZURLYXpIb3ZmRjFVME1pWUxVeEkvS1lLZVo2aGZUM0d2bnhQd1l5c0QyUlZQdi9JUDRuSStJbFVYdnVoWnMvT05vVHRMa3Ywd3Zpb3FTMGthVUZCcFQyMlpPTjRUS2VtWEZTUHZMaXhZSjdkRUVodklZUDR0bUpsdjNyZ3EzTldwdFVqZUFiRFUvM3FzUWZXR2hsV0Q5NWJ5dUJubFBydDQ2bThjYXhtcTNqTW1Ba1RSYU9WWGFhU2pXeGU1d2x5WXFyVktlMnlFYSs4TnhTYSs5WmszZmIrWnVYVjd4TDVTYWNrajkydFUvcktwbEIyM3BhTlAzcmV5bE9UaWZmV01WTXNEbDR1YW80Z3B1bFRpVC9HTTV0S2dZeHRDZldKUlU1Y0ZIbm02MFNPL0pubTBUR3Z6K2FiQW5ubi9sRFdyeEQxcU1qSTRVUytyeWlXZXVvUmlSNXJuYjZnZFRSckJqRjR4b3VaMUduWmVqQythakhnOHlCZ2dNVURqdXVEd2dHWDQyd1IwZkFRdXlsTjBpOVpNd2UyWnRNRXdCT2ZKeEtuK2Fhb0JYZkJaaFFZK2ZEaFVJWjBqVEY5Mnc4bGJrMEZZZkNnMzMwTkQ3RzFRV0VCczJhWXBxZW5sazRNMkR3WW1HRERBUmYzUFRkdEo0aWdSNXpCamV3bWpEVnovdCtsOFl3RHJGL0FCQnVEQzA2NFhlRFZleG03Um1BNkVHZlkydXltcTEzQTRMUXpzT0dBQzA3WHY2N0JjRGJKVEh3MkNxVHd5ODdJRVBRMmZ4TG4zdHJ0eUJmN241Qnc1TkhJQmM4Nzk4WTJUcVVtdlZGZllHYmlIYnJhUTQ0RHhCRDA4c2FaeGNqeTNJY0RMampoUmdOYW1MSXlBSnhOR0JHNEUrdlQ2RndaTGJwUFk4dm1CUEJjbmx1SGxWRXh3SGdPU296ajRGcVo1L0xjeWpzUTZncDN1UXluTnNiWmxNZnUwS2lMcmJtdTZSY2lNVlpUaUY5bnN2YVZycDdMYzZNbEpMblN4cHdVNGtvZy9yOXZob3UrMmZqMjkvNjRaT1d1aitMRy9jVWFyWWN5ZmRCQ0l1RmNrczh2VGVqWnBEbWlKOHk4NU85eHV1Y3g3OXNta2xpbTdMUU9Ydlc3cGhBclYyWXB4TS90SDA3V2ZaQjFZbEgvK0hqbXJYNjkxd0xlVnRQTjljUU9iZ3d0Z2N1QjlRZVpIa1krYzYzTWMzbHV0QVFrNUFnZzdjUklyanF4cWthSm94cDUrWFRpblZZdXo0MldRQ3VIZy94SkRveVI2WFZpbGFySXRzOFM5K2xrSEgwOWwrZW1VZ2xzYjdSUGwzZENRazRPVE5wSldGOXVnd011T09GR0EyVlRRTjFFcVVKMVFFS09rWFl1dDNrT09PRkdBMXF5K2RHNkNRRlVCMnhaY21EU3p1VXlzT0dBQzA3SFU5ZmdXQ25pZElWUFVhcFFIV0Rrd0sxUjJOMWNnZ3VZWUdOd3dRbTNMeVFiYnFDSW94T2xDdWtseDhDN2c2R1FkaTZWZ1FVbTJIREFCYmJucHQwUVJFNnJTbmRUTjFHcVVCMlErNUlETDRXbndQRDVOTmh3d0FXbno2Zm5DT0lIRlNXbENXNmtWUEdpRG0yTC90ZWFZczJBd1FQNk1zaFZzc3JsT0NHdjI3ejU2S3BDMGF2c3FsTGFpK3FxbHcxZUZOOWQ4enFtVlJUdHJubGhkYmt3eWlaWHFXVEZ3UUJwcDI3ZHVhLzBOSVBWY1JPY2s1MiswdnNQT09QbExuVlkwbFlBQUFBQVNVVk9SSzVDWUlJPVwiO1xuICAgICAgICBpbWcuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoaW1nLCAxOCwgMTgpO1xuICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcuZW1pdChlKTtcbiAgICB9XG4gICAgZHJhZ0VuZChlKXtcbiAgICAgICAgdmFyIGljb25XaWR0aCA9IDM2O1xuICAgICAgICB2YXIgYXNpZGVXaWR0aCA9IDI0MDtcbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPj0gNzY4ICYmIGUueCA+IHdpbmRvdy5pbm5lcldpZHRoIC0gYXNpZGVXaWR0aCAtIGljb25XaWR0aCl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmREcmFnZ2luZy5lbWl0KGUpO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgVXNlciB7XG4gICAgbmFtZSA6IHN0cmluZztcbiAgICBlbWFpbCA6IHN0cmluZztcbiAgICBwYXNzd29yZCA6IHN0cmluZztcbn0iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWJTdG9yYWdlU2VydmljZSB7XG4gICAgcHJpdmF0ZSBzdG9yYWdlU3VwcG9ydGVkID0gKHR5cGVvZihTdG9yYWdlKSAhPT0gXCJ1bmRlZmluZWRcIik7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBwdXQoa2V5LCB2YWx1ZSk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2VTdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgIGlmICghIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wdXRJbkxvY2FsU3RvcmFnZShrZXksIHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tTG9jYWxTdG9yYWdlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoISF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHV0SW5Db29raWVzKGtleSwgdmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21Db29raWVzKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQoa2V5KTphbnkge1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlU3VwcG9ydGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGcm9tTG9jYWxTdG9yYWdlKGtleSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEZyb21Db29raWUoa2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZShrZXkpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlU3VwcG9ydGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tQ29va2llcyhrZXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwdXRJbkxvY2FsU3RvcmFnZShrZXksIHZhbHVlKTp2b2lkIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShlbmNvZGVVUkkodmFsdWUpIHx8IFwiXCIpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEZyb21Mb2NhbFN0b3JhZ2Uoa2V5KTphbnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUkkobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgfHwgXCJ7fVwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KTp2b2lkIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHB1dEluQ29va2llcyhrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcbiAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgKDMwICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xuICAgICAgICB2YXIgZXhwaXJlcyA9IGQudG9VVENTdHJpbmcoKTtcbiAgICAgICAgZG9jdW1lbnQuY29va2llICs9IGtleSArICc9JyArIEpTT04uc3RyaW5naWZ5KGVuY29kZVVSSSh2YWx1ZSkgfHwgXCJcIikgKyBcIjtwYXRoPS87ZXhwaXJlcz1cIiArIGV4cGlyZXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRGcm9tQ29va2llKGtleSk6YW55IHtcbiAgICAgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnKD86Xnw7KVxcXFxzPycgKyBrZXkgKyAnPSguKj8pKD86O3wkKScsICdpJyk7XG4gICAgICAgIHZhciBtdGMgPSBkb2N1bWVudC5jb29raWUubWF0Y2gocmVnZXgpIHx8IFtdO1xuICAgICAgICBpZiAobXRjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZVVSSShtdGNbMV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfTtcblxuICAgIHByaXZhdGUgcmVtb3ZlRnJvbUNvb2tpZXMoa2V5KTp2b2lkIHtcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0ga2V5ICsgXCI9O3BhdGg9LztleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UXCI7XG4gICAgfVxufSIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7SHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtKd3RUb2tlbn0gZnJvbSBcIi4uL21vZGVscy9qd3RUb2tlblwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9tb2RlbHMvdXNlclwiO1xuaW1wb3J0IHtXZWJTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4vd2Vic3RvcmFnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDpIdHRwLCBwcml2YXRlIHdlYlN0b3JhZ2VTZXJ2aWNlOldlYlN0b3JhZ2VTZXJ2aWNlLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbikge1xuICAgIH1cblxuICAgIGxvZ291dCgpOmJvb2xlYW4ge1xuICAgICAgICB0aGlzLndlYlN0b3JhZ2VTZXJ2aWNlLnJlbW92ZSh0aGlzLmNvbmZpZ3VyYXRpb24udG9rZW4ubmFtZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGxvZ2luKHVzZXI6VXNlcik6T2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIHRlbXBvcmFyeSBkYXRhJyk7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2F1dGgvbG9naW4nLFxuICAgICAgICAgICAgICAgIFwibmFtZT1cIiArIHVzZXIubmFtZStcIiZcIiArXG4gICAgICAgICAgICAgICAgXCJlbWFpbD1cIiArIHVzZXIuZW1haWwrXCImXCIgK1xuICAgICAgICAgICAgICAgIFwicGFzc3dvcmQ9XCIrdXNlci5wYXNzd29yZCxcbiAgICAgICAgICAgIG9wdGlvbnMpXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMudGV4dCgpKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlcih1c2VyOlVzZXIpOk9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyB0ZW1wb3JhcnkgZGF0YScpO1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hdXRoL3JlZ2lzdGVyJyxcbiAgICAgICAgICAgICAgICBcImVtYWlsPVwiICsgdXNlci5lbWFpbCtcIiZcIiArXG4gICAgICAgICAgICAgICAgXCJwYXNzd29yZD1cIit1c2VyLnBhc3N3b3JkLFxuICAgICAgICAgICAgb3B0aW9ucylcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy50ZXh0KCkpO1xuXG4gICAgfVxuXG4gICAgaXNMb2dnZWRJbigpOmJvb2xlYW4ge1xuICAgICAgICB2YXIgdG9rZW5EYXRhU3BsaXQgPSAodGhpcy53ZWJTdG9yYWdlU2VydmljZS5nZXQodGhpcy5jb25maWd1cmF0aW9uLnRva2VuLm5hbWUpIHx8ICcnKS5zcGxpdCgnLicpWzFdO1xuICAgICAgICBpZighdG9rZW5EYXRhU3BsaXQpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0b2tlbkRhdGFSYXcgPSBhdG9iKHRva2VuRGF0YVNwbGl0KTtcbiAgICAgICAgdmFyIHRva2VuRGF0YSA9IEpTT04ucGFyc2UodG9rZW5EYXRhUmF3KSBhcyBKd3RUb2tlbjtcbiAgICAgICAgcmV0dXJuICh0b2tlbkRhdGEuZXhwIHx8IDApID4gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgfTtcbn0iLCJpbXBvcnQge0NvbnRyb2wsIENvbnRyb2xHcm91cH0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuXG4vKlxuIEN1c3RvbSB2YWxpZGF0b3JzIHRvIHVzZSBldmVyeXdoZXJlLlxuICovXG5cbi8vIFNJTkdMRSBGSUVMRCBWQUxJREFUT1JTXG5leHBvcnQgZnVuY3Rpb24gZW1haWxWYWxpZGF0b3IoY29udHJvbDogQ29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICB2YXIgZW1haWxSZWdleHAgPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKiQvaTtcbiAgICBpZiAoY29udHJvbC52YWx1ZSAmJiBjb250cm9sLnZhbHVlLmxlbmd0aCA8IDYgJiYgIWVtYWlsUmVnZXhwLnRlc3QoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHtpbnZhbGlkRW1haWw6IHRydWV9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVtYWlsUmVnZXhwID0gJ15bYS16MC05ISMkJSZcXCcqK1xcXFwvPT9eX2B7fH1+Li1dK0BbYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSokJztcblxuLy9DT05UUk9MIEdST1VQIFZBTElEQVRPUlNcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGluZ1Bhc3N3b3JkcyhwYXNzd29yZEtleTogc3RyaW5nLCBjb25maXJtUGFzc3dvcmRLZXk6IHN0cmluZykge1xuICAgIHJldHVybiAoZ3JvdXA6IENvbnRyb2xHcm91cCk6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcbiAgICAgICAgbGV0IHBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbcGFzc3dvcmRLZXldO1xuICAgICAgICBsZXQgY29uZmlybVBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbY29uZmlybVBhc3N3b3JkS2V5XTtcbiAgICAgICAgaWYgKHBhc3N3b3JkLnZhbHVlICE9PSBjb25maXJtUGFzc3dvcmQudmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWlzbWF0Y2hlZFBhc3N3b3JkczogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgfVxufSIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uL21vZGVscy91c2VyXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBDb250cm9sR3JvdXAsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtlbWFpbFZhbGlkYXRvciwgbWF0Y2hpbmdQYXNzd29yZHMsIGVtYWlsUmVnZXhwfSBmcm9tICcuLi9zZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UnO1xuaW1wb3J0IHtXZWJTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3dlYnN0b3JhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaWduLWluLWZvcm0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4Ym94IGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgPGgxPkNvbWUgaW4sIHN0b3J5dGVsbGVyPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2PjxhIGNsYXNzPVwiY2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoJGV2ZW50KVwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9hPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwiZm9ybVwiIChuZ1N1Ym1pdCk9XCJvblNpZ25JbigkZXZlbnQpXCIgbm92YWxpZGF0ZT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlci5lbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWydlbWFpbCddXCJcbiAgICAgICAgICAgICAgICAgICAgI2VtYWlsPVwibmdGb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2ICAqbmdJZj1cIihlbWFpbC5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmICFlbWFpbC52YWxpZFwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgRW1haWwgaXMgaW52YWxpZFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIllvdXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIucGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdPVwiZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXVwiXG4gICAgICAgICAgICAgICAgICAgICNwYXNzd29yZD1cIm5nRm9ybVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiAgKm5nSWY9XCIocGFzc3dvcmQuZGlydHkgfHwgc3VibWl0dGVkKSAmJiAhcGFzc3dvcmQudmFsaWRcIiBjbGFzcz1cInBhbmVsIHBhbmVsLWVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgIFRoZSBwYXNzd29yZCBzaG91bGQgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmdcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIHByaW1hcnkgYmxvY2stYnV0dG9uXCI+U2lnbiBpbjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dhcC1mb3JtXCI+PGEgKGNsaWNrKT1cInN3YXBUb1NpZ25VcCgpXCI+SSB3YW50IHRvIGNyZWF0ZSBhIG5ldyBhY2NvdW50PC9hPjwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlLCBXZWJTdG9yYWdlU2VydmljZV0sXG4gICAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFU11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWduSW5Db21wb25lbnQge1xuICAgIHVzZXI6VXNlciA9IG5ldyBVc2VyKCk7XG4gICAgZm9ybTpDb250cm9sR3JvdXA7XG4gICAgc3VibWl0dGVkID0gZmFsc2U7XG5cbiAgICBAT3V0cHV0KCkgY2xvc2VNb2RhbDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgc3dhcFdpbmRvdzpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgbm90aWZ5OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSwgcHJpdmF0ZSBidWlsZGVyOkZvcm1CdWlsZGVyLCBwcml2YXRlIHdlYlN0b3JhZ2VTZXJ2aWNlOldlYlN0b3JhZ2VTZXJ2aWNlLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbikge1xuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZvcm0gPSBidWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKGVtYWlsUmVnZXhwKV0pXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNsb3NlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbC5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBzd2FwVG9TaWduVXAoKSB7XG4gICAgICAgIHRoaXMuc3dhcFdpbmRvdy5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBvblNpZ25JbihldmVudCkge1xuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuZm9ybS52YWx1ZSkpO1xuICAgICAgICBpZiAodGhpcy5mb3JtLnZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYlN0b3JhZ2VTZXJ2aWNlLnB1dCh0aGlzLmNvbmZpZ3VyYXRpb24udG9rZW4ubmFtZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2dlZCBpbicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCcnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uL21vZGVscy91c2VyXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBDb250cm9sR3JvdXAsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtlbWFpbFZhbGlkYXRvciwgbWF0Y2hpbmdQYXNzd29yZHMsIGVtYWlsUmVnZXhwfSBmcm9tICcuLi9zZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UnO1xuaW1wb3J0IHtXZWJTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3dlYnN0b3JhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaWduLXVwLWZvcm0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4Ym94IGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgPGgxPkJlY29tZSBhIHN0b3J5dGVsbGVyPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2PjxhIGNsYXNzPVwiY2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoJGV2ZW50KVwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9hPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwiZm9ybVwiIChuZ1N1Ym1pdCk9XCJvblNpZ25VcCgkZXZlbnQpXCIgbm92YWxpZGF0ZT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWyduYW1lJ11cIlxuICAgICAgICAgICAgICAgICAgICAjbmFtZT1cIm5nRm9ybVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgICpuZ0lmPVwiKG5hbWUuZGlydHkgfHwgc3VibWl0dGVkKSAmJiAhbmFtZS52YWxpZFwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgWW91ciBuYW1lIGlzIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLmVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cImZvcm0uY29udHJvbHNbJ2VtYWlsJ11cIlxuICAgICAgICAgICAgICAgICAgICAjZW1haWw9XCJuZ0Zvcm1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgICpuZ0lmPVwiKGVtYWlsLmRpcnR5IHx8IHN1Ym1pdHRlZCkgJiYgIWVtYWlsLnZhbGlkXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1lcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICBFbWFpbCBpcyBpbnZhbGlkXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlci5wYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJmb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXCJcbiAgICAgICAgICAgICAgICAgICAgI3Bhc3N3b3JkPVwibmdGb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2ICAqbmdJZj1cIihwYXNzd29yZC5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmICFwYXNzd29yZC52YWxpZFwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgVGhlIHBhc3N3b3JkIHNob3VsZCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZ1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIuY29uZmlybVBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cImZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddXCJcbiAgICAgICAgICAgICAgICAgICAgI2NvbmZpcm1QYXNzd29yZD1cIm5nRm9ybVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29uZmlybS1wYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiKGNvbmZpcm1QYXNzd29yZC5kaXJ0eSB8fCBzdWJtaXR0ZWQpICYmIGZvcm0uaGFzRXJyb3IoJ21pc21hdGNoZWRQYXNzd29yZHMnKVwiIGNsYXNzPVwicGFuZWwgcGFuZWwtZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgVGhlIHBhc3N3b3JkcyBkb24ndCBtYXRjaFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24gcHJpbWFyeSBibG9jay1idXR0b25cIj5TaWduIHVwPC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2FwLWZvcm1cIj48YSAoY2xpY2spPVwic3dhcFRvU2lnbkluKClcIj5JIGFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PC9hPjwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlLCBXZWJTdG9yYWdlU2VydmljZV0sXG4gICAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFU11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWduVXBDb21wb25lbnQge1xuICAgIHVzZXI6VXNlciA9IG5ldyBVc2VyKCk7XG4gICAgZm9ybTpDb250cm9sR3JvdXA7XG4gICAgc3VibWl0dGVkID0gZmFsc2U7XG5cbiAgICBAT3V0cHV0KCkgY2xvc2VNb2RhbDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgc3dhcFdpbmRvdzpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgbm90aWZ5OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSwgcHJpdmF0ZSBidWlsZGVyOkZvcm1CdWlsZGVyLCBwcml2YXRlIHdlYlN0b3JhZ2VTZXJ2aWNlOldlYlN0b3JhZ2VTZXJ2aWNlLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246Q29uZmlndXJhdGlvbikge1xuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZvcm0gPSBidWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgIG5hbWU6WycnXSxcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKGVtYWlsUmVnZXhwKV0pXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKV0sXG4gICAgICAgICAgICBjb25maXJtUGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIH0sIHt2YWxpZGF0b3I6IG1hdGNoaW5nUGFzc3dvcmRzKCdwYXNzd29yZCcsICdjb25maXJtUGFzc3dvcmQnKX0pXG4gICAgfVxuXG4gICAgY2xvc2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsLmVtaXQoZXZlbnQpO1xuICAgIH1cblxuICAgIHN3YXBUb1NpZ25JbigpIHtcbiAgICAgICAgdGhpcy5zd2FwV2luZG93LmVtaXQoZXZlbnQpO1xuICAgIH1cblxuICAgIG9uU2lnblVwKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5mb3JtLnZhbHVlKSk7XG4gICAgICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2ViU3RvcmFnZVNlcnZpY2UucHV0KHRoaXMuY29uZmlndXJhdGlvbi50b2tlbi5uYW1lLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBlbWFpbCBpcyBhbHJlYWR5IHRha2VuJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZ2lzdGVyZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgnJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5pbXBvcnQge1NpZ25JbkNvbXBvbmVudH0gZnJvbSBcIi4vc2lnbmluLWZvcm0uY29tcG9uZW50XCI7XG5pbXBvcnQge1NpZ25VcENvbXBvbmVudH0gZnJvbSBcIi4vc2lnbnVwLWZvcm0uY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXV0aC1mb3JtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2lnbi1pbi1mb3JtIFxuICAgICAgICAgICAgKm5nSWY9XCJsb2dpblwiIFxuICAgICAgICAgICAgKGNsb3NlTW9kYWwpPVwiaGlkZUFjY2Vzc0Zvcm0oKVwiXG4gICAgICAgICAgICAoc3dhcFdpbmRvdyk9XCJsb2dpbj0hbG9naW5cIlxuICAgICAgICAgICAgKG5vdGlmeSk9XCJub3RpZnlNZXNzYWdlKCRldmVudClcIlxuICAgICAgICAgICAgPjwvc2lnbi1pbi1mb3JtPlxuICAgICAgICA8c2lnbi11cC1mb3JtIFxuICAgICAgICAgICAgKm5nSWY9XCIhbG9naW5cIiBcbiAgICAgICAgICAgIChjbG9zZU1vZGFsKT1cImhpZGVBY2Nlc3NGb3JtKClcIlxuICAgICAgICAgICAgKHN3YXBXaW5kb3cpPVwibG9naW49IWxvZ2luXCJcbiAgICAgICAgICAgIChub3RpZnkpPVwibm90aWZ5TWVzc2FnZSgpXCJcbiAgICAgICAgICAgID48L3NpZ24tdXAtZm9ybT5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW10sXG4gICAgZGlyZWN0aXZlczogW1NpZ25JbkNvbXBvbmVudCwgU2lnblVwQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIEF1dGhGb3JtQ29tcG9uZW50IHtcbiAgICBAT3V0cHV0KCkgY2xvc2VNb2RhbDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgbm90aWZ5OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIHB1YmxpYyBsb2dpbj1mYWxzZTtcblxuICAgIGhpZGVBY2Nlc3NGb3JtKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbC5lbWl0KGV2ZW50KTtcbiAgICB9XG4gICAgXG4gICAgbm90aWZ5TWVzc2FnZShldmVudCl7XG4gICAgICAgIHRoaXMubm90aWZ5LmVtaXQoZXZlbnQpO1xuICAgIH1cbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtOZ0NsYXNzfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtTdG9yeUJsb2NrU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0b3J5YmxvY2tzLnNlcnZpY2VcIjtcbmltcG9ydCB7U3RvcnlCbG9ja30gZnJvbSBcIi4uL21vZGVscy9zdG9yeWJsb2NrXCI7XG5pbXBvcnQge1N0b3J5QmxvY2tDb21wb25lbnR9IGZyb20gXCIuL3N0b3J5YmxvY2suY29tcG9uZW50XCI7XG5pbXBvcnQge1RpbWVsaW5lQ29tcG9uZW50fSBmcm9tIFwiLi90aW1lbGluZS5jb21wb25lbnRcIjtcbmltcG9ydCB7QWRkQnV0dG9uQ29tcG9uZW50fSBmcm9tIFwiLi9hZGQtYnV0dG9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtOb3RpZmljYXRpb25Db21wb25lbnR9IGZyb20gXCIuL25vdGlmaWNhdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7U2lkZWJhckNvbXBvbmVudH0gZnJvbSBcIi4vc2lkZWJhci5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQge1N0b3J5QmxvY2tUeXBlfSBmcm9tIFwiLi4vbW9kZWxzL3N0b3J5YmxvY2stdHlwZVwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtXZWJTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3dlYnN0b3JhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtBdXRoRm9ybUNvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC1mb3JtLmNvbXBvbmVudFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWNvbnRlbnQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPHRpbWVsaW5lIGNsYXNzPVwidGltZWxpbmUtYmxvY2tcIj48L3RpbWVsaW5lPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0b3J5LWJsb2Nrc1wiPlxuICAgICAgICAgICAgICAgIDxzdG9yeWJsb2NrICpuZ0Zvcj1cIiNzdG9yeUJsb2NrIG9mIHN0b3J5QmxvY2tzOyAjaSA9IGluZGV4XCIgXG4gICAgICAgICAgICAgICAgICAgIFtpbmRleF09XCJpXCIgXG4gICAgICAgICAgICAgICAgICAgIFtzdG9yeUJsb2NrSW5mb109XCJzdG9yeUJsb2NrXCIgXG4gICAgICAgICAgICAgICAgICAgIFt6b29tTGV2ZWxdPVwiem9vbUxldmVsXCJcbiAgICAgICAgICAgICAgICAgICAgW2V4cG9zZWRJbmRleF09XCJleHBvc2VkSW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ZXhwb3NlZDogZXhwb3NlZEluZGV4ID09IGl9XCJcbiAgICAgICAgICAgICAgICAgICAgKHJlbW92ZVN0b3J5QmxvY2tFdmVudCk9XCJyZW1vdmVTdG9yeUJsb2NrKCRldmVudClcIiBcbiAgICAgICAgICAgICAgICAgICAgKGV4cG9zZUV2ZW50KT1cInNldEV4cG9zZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgIChub3RpZnkpPVwibm90aWZ5KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0b3J5LWJsb2NrIHt7IHN0b3J5QmxvY2sudHlwZcKgfX1cIj48L3N0b3J5YmxvY2s+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZFN0b3J5QmxvY2soJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwib25Nb3VzZUVudGVyKCRldmVudClcIlxuICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cIm9uTW91c2VMZWF2ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAobW91c2Vtb3ZlKT1cIm9uTW91c2VNb3ZlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8YWRkLWJ1dHRvbiAqbmdJZj1cImFkZEJ1dHRvbi52aXNpYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgW29mZnNldFldPVwiYWRkQnV0dG9uLnRvcFwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhZGRTdG9yeUJsb2NrKCRldmVudClcIj48L2FkZC1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ6b29tLWNvbnRyb2xzXCI+ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9XCJab29tIGluXCIgKGNsaWNrKT1cInpvb21JbigpXCI+KzwvYT4gIFxuICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT1cIlpvb20gb3V0XCIgKGNsaWNrKT1cInpvb21PdXQoKVwiPiZuZGFzaDs8L2E+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPGFzaWRlIFtuZ0NsYXNzXT1cInt2aXNpYmxlOiBtZW51VmlzaWJsZX1cIj5cbiAgICAgICAgICAgIDxzaWRlYmFyXG4gICAgICAgICAgICAoc3RhcnREcmFnZ2luZyk9XCJ0b2dnbGVNZW51KGZhbHNlKVwiXG4gICAgICAgICAgICAoZW5kRHJhZ2dpbmcpPVwiYWRkU3RvcnlCbG9jaygkZXZlbnQpXCJcbiAgICAgICAgICAgIFtzdG9yeUJsb2NrXT1cImV4cG9zZWRTdG9yeUJsb2NrXCI+PC9zaWRlYmFyPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJ1c2VyLWFzaWRlXCIgKGNsaWNrKT1cImRvd25sb2FkUGRmKClcIj5Eb3dubG9hZCBQREY8L2E+XG4gICAgICAgICAgICA8YSBjbGFzcz1cInVzZXItYXNpZGVcIiAqbmdJZj1cIiFpc0xvZ2dlZEluKClcIiAoY2xpY2spPVwic2hvd0FjY2Vzc0Zvcm0oKVwiPkxvZ2luL1NpZ251cDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwidXNlci1hc2lkZVwiICpuZ0lmPVwiaXNMb2dnZWRJbigpXCIgKGNsaWNrKT1cImxvZ091dCgpXCI+TG9nb3V0PC9hPlxuICAgICAgICAgICAgPGEgaWQ9XCJjbG9zZS1tZW51XCIgKGNsaWNrKT1cInRvZ2dsZU1lbnUoZmFsc2UpXCI+PC9hPlxuICAgICAgICA8L2FzaWRlPlxuICAgICAgICA8aGVhZGVyPjxhIGlkPVwiYnVyZ2VyXCIgKGNsaWNrKT1cInRvZ2dsZU1lbnUodHJ1ZSlcIj48aSBjbGFzcz1cImZhIGZhLWJhcnNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9hPjwvaGVhZGVyPlxuICAgICAgICA8YXV0aC1mb3JtIFxuICAgICAgICAgICAgKm5nSWY9XCJhY2Nlc3NGb3JtVmlzaWJsZVwiIFxuICAgICAgICAgICAgKGNsb3NlTW9kYWwpPVwiaGlkZUFjY2Vzc0Zvcm0oKVwiXG4gICAgICAgICAgICAobm90aWZ5KT1cIm5vdGlmeSgkZXZlbnQpXCJcbiAgICAgICAgICAgID48L2F1dGgtZm9ybT5cbiAgICAgICAgPG5vdGlmaWNhdGlvbj48L25vdGlmaWNhdGlvbj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW1N0b3J5QmxvY2tTZXJ2aWNlLCBDb25maWd1cmF0aW9uLCBBdXRoU2VydmljZSwgV2ViU3RvcmFnZVNlcnZpY2VdLFxuICAgIGRpcmVjdGl2ZXM6IFtTdG9yeUJsb2NrQ29tcG9uZW50LCBUaW1lbGluZUNvbXBvbmVudCwgQWRkQnV0dG9uQ29tcG9uZW50LCBOb3RpZmljYXRpb25Db21wb25lbnQsIFNpZGViYXJDb21wb25lbnQsIEF1dGhGb3JtQ29tcG9uZW50LCBOZ0NsYXNzXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQFZpZXdDaGlsZChOb3RpZmljYXRpb25Db21wb25lbnQpIG5vdGlmaWNhdGlvbkNvbXBvbmVudDpOb3RpZmljYXRpb25Db21wb25lbnQ7XG4gICAgcHVibGljIHN0b3J5QmxvY2tzOlN0b3J5QmxvY2tbXTtcbiAgICBwdWJsaWMgc3RvcnlCbG9ja1R5cGVzOlN0b3J5QmxvY2tUeXBlW107XG4gICAgcHVibGljIHN0b3J5QmxvY2tEZWZhdWx0VHlwZXM6U3RvcnlCbG9ja1R5cGVbXTtcblxuICAgIHB1YmxpYyB6b29tTGV2ZWw7XG4gICAgcHVibGljIGV4cG9zZWRJbmRleDtcbiAgICBwdWJsaWMgZXhwb3NlZFN0b3J5QmxvY2s7XG4gICAgcHVibGljIGFkZEJ1dHRvbjtcbiAgICBwdWJsaWMgdG9rZW46c3RyaW5nID0gJyc7XG4gICAgcHVibGljIG1lbnVWaXNpYmxlO1xuICAgIHB1YmxpYyBhY2Nlc3NGb3JtVmlzaWJsZTtcbiAgICBwcml2YXRlIG1heEluZGV4ID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcnlCbG9ja1NlcnZpY2U6U3RvcnlCbG9ja1NlcnZpY2UsIHByaXZhdGUgY29uZmlndXJhdGlvbjpDb25maWd1cmF0aW9uLCBwcml2YXRlIHdlYlN0b3JhZ2VTZXJ2aWNlOldlYlN0b3JhZ2VTZXJ2aWNlLCBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgICB0aGlzLmdldFN0b3J5QmxvY2tUeXBlcygpO1xuICAgICAgICB0aGlzLmdldFN0b3J5QmxvY2tzKCk7XG4gICAgICAgIHRoaXMuem9vbUxldmVsID0gMTA7XG4gICAgICAgIHRoaXMuZXhwb3NlZEluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuZXhwb3NlZFN0b3J5QmxvY2sgPSBudWxsO1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbiA9IHtcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgdG9wOiAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubWVudVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY2Nlc3NGb3JtVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdlbmVyYXRlVGVzdERhdGEoKS5zdWJzY3JpYmUoXG4gICAgICAgIC8vICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxuICAgICAgICAvLyAgICAgKCkgPT4gY29uc29sZS5sb2coJ2RvbmUsIGxvYWRlZCAnICsgdGhpcy5zdG9yeUJsb2Nrcy5sZW5ndGggKyAnIGJsb2NrcycpXG4gICAgICAgIC8vICk7XG4gICAgfVxuICAgIFxuICAgIHNldFRva2VuKHZhbHVlOnN0cmluZyl7XG4gICAgICAgIHRoaXMud2ViU3RvcmFnZVNlcnZpY2UucHV0KCd0b2tlbicsdmFsdWUpO1xuICAgIH0gICAgXG4gICAgXG4gICAgZ2V0VG9rZW4oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMud2ViU3RvcmFnZVNlcnZpY2UuZ2V0KCd0b2tlbicpO1xuICAgIH1cblxuICAgIGdldFN0b3J5QmxvY2tUeXBlcygpIHtcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrVHlwZXMgPSB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdldFN0b3J5QmxvY2tUeXBlcygpO1xuICAgICAgICB0aGlzLnN0b3J5QmxvY2tEZWZhdWx0VHlwZXMgPSB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmdldFN0b3J5QmxvY2tEZWZhdWx0VHlwZXMoKTtcbiAgICB9XG5cbiAgICBnZXRTdG9yeUJsb2NrcygpIHtcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5nZXRTdG9yeUJsb2NrcygpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcnlCbG9ja3MgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMubWF4SW5kZXggPSAwO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0b3J5QmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0b3J5QmxvY2tzW2ldLnR5cGUgPT09ICdjaGFwdGVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXhJbmRleCA9IE1hdGgubWF4KHRoaXMubWF4SW5kZXgsIHRoaXMuc3RvcnlCbG9ja3NbaV0uYmxvY2tJZCB8fCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnJlY2FsY3VsYXRlU3RvcnlCbG9ja051bWJlcnMoKTtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnZG9uZSwgbG9hZGVkICcgKyB0aGlzLnN0b3J5QmxvY2tzLmxlbmd0aCArICcgYmxvY2tzJywgdGhpcy5zdG9yeUJsb2NrcylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW1vdmVTdG9yeUJsb2NrKGluZGV4KSB7XG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZVN0b3J5QmxvY2tOdW1iZXJzKCk7XG4gICAgfVxuXG4gICAgc2hvd0FjY2Vzc0Zvcm0oKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlTWVudShmYWxzZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpKTtcbiAgICAgICAgdGhpcy5hY2Nlc3NGb3JtVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCduby1zY3JvbGwnKTtcbiAgICB9XG5cbiAgICBoaWRlQWNjZXNzRm9ybSgpIHtcbiAgICAgICAgdGhpcy5hY2Nlc3NGb3JtVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XG4gICAgfVxuXG4gICAgcmVjYWxjdWxhdGVTdG9yeUJsb2NrTnVtYmVycygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ051bWJlcmluZyBiZWZvcmUnLHRoaXMuc3RvcnlCbG9ja3MpO1xuICAgICAgICB2YXIgY3VycmVudFR5cGVzID0ge307XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdG9yeUJsb2NrVHlwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGN1cnJlbnRUeXBlc1t0aGlzLnN0b3J5QmxvY2tUeXBlc1tpXS5pZF0gPSB0aGlzLnN0b3J5QmxvY2tUeXBlc1tpXTtcbiAgICAgICAgICAgIGN1cnJlbnRUeXBlc1t0aGlzLnN0b3J5QmxvY2tUeXBlc1tpXS5pZF0uaW5kZXggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0b3J5QmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFR5cGUgPSB0aGlzLnN0b3J5QmxvY2tzW2ldLnR5cGUgfHwgdGhpcy5zdG9yeUJsb2NrRGVmYXVsdFR5cGVzWzBdLmlkO1xuICAgICAgICAgICAgY3VycmVudFR5cGVzW2N1cnJlbnRUeXBlXSA9IGN1cnJlbnRUeXBlc1tjdXJyZW50VHlwZV0gfHwgdGhpcy5zdG9yeUJsb2NrRGVmYXVsdFR5cGVzWzBdO1xuICAgICAgICAgICAgdGhpcy5zdG9yeUJsb2Nrc1tpXS5ibG9ja051bWJlciA9IGN1cnJlbnRUeXBlc1tjdXJyZW50VHlwZV0uaW5kZXggfHwgMDtcblxuICAgICAgICAgICAgY3VycmVudFR5cGVzW2N1cnJlbnRUeXBlXS5pbmRleCsrO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnN0b3J5QmxvY2tUeXBlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0b3J5QmxvY2tUeXBlc1tqXS5sZXZlbCA+IGN1cnJlbnRUeXBlc1tjdXJyZW50VHlwZV0ubGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFR5cGVzW3RoaXMuc3RvcnlCbG9ja1R5cGVzW2pdLmlkXS5pbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdOdW1iZXJpbmcgYWZ0ZXInLHRoaXMuc3RvcnlCbG9ja3MpO1xuICAgIH1cblxuICAgIGxvZ091dCgpe1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgIH1cblxuICAgIGlzTG9nZ2VkSW4oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIH1cblxuICAgIHpvb21JbigpIHtcbiAgICAgICAgaWYgKHRoaXMuem9vbUxldmVsIDwgMTApIHtcbiAgICAgICAgICAgIHRoaXMuem9vbUxldmVsKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB6b29tT3V0KCkge1xuICAgICAgICBpZiAodGhpcy56b29tTGV2ZWwgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnpvb21MZXZlbC0tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb3VzZUVudGVyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uID0ge1xuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHRvcDogZXZlbnQueVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uTW91c2VMZWF2ZShldmVudCkge1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbiA9IHtcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgdG9wOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuYWRkQnV0dG9uLnZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQnV0dG9uLnRvcCA9IGV2ZW50Lnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRTdG9yeUJsb2NrKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uID0ge1xuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgem9vbUNvbnZlcnNpb25GYWN0b3IgPSB0aGlzLmNvbmZpZ3VyYXRpb24uem9vbS5zdGVwICsgKHRoaXMuem9vbUxldmVsICogdGhpcy5jb25maWd1cmF0aW9uLnpvb20uc3RyZW5ndGgpO1xuICAgICAgICB2YXIgcG9zaXRpb25BdFpvb20gPSAoKGV2ZW50LnBhZ2VZIC0gdGhpcy5jb25maWd1cmF0aW9uLnpvb20ub2Zmc2V0KSAvIHpvb21Db252ZXJzaW9uRmFjdG9yKTtcbiAgICAgICAgdmFyIG5ld1N0b3J5QmxvY2s6U3RvcnlCbG9jayA9IDxTdG9yeUJsb2NrPiB7XG4gICAgICAgICAgICBibG9ja0lkOiB0aGlzLm1heEluZGV4ICsgMSxcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWVQb3NpdGlvbjogcG9zaXRpb25BdFpvb20sXG4gICAgICAgICAgICBpbXBvcnRhbmNlOiAzLFxuICAgICAgICAgICAgdHlwZTogJ2NoYXB0ZXInXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubWF4SW5kZXgrKztcblxuICAgICAgICB2YXIgdG1wQXJyYXlQb3MgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0b3J5QmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdG9yeUJsb2Nrc1tpXS50aW1lUG9zaXRpb24gPiBwb3NpdGlvbkF0Wm9vbSkge1xuICAgICAgICAgICAgICAgIHRtcEFycmF5UG9zID0gaTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RvcnlCbG9ja3Muc3BsaWNlKHRtcEFycmF5UG9zLCAwLCBuZXdTdG9yeUJsb2NrKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnQWRkaW5nIGJsb2NrIGluZGV4ICcgKyB0bXBBcnJheVBvcyk7XG4gICAgICAgIHRoaXMuc2V0RXhwb3NlZCh0bXBBcnJheVBvcyk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHNldEV4cG9zZWQoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZVN0b3J5QmxvY2tOdW1iZXJzKCk7XG4gICAgICAgIHRoaXMuZXhwb3NlZEluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuZXhwb3NlZFN0b3J5QmxvY2sgPSBpbmRleCA+PSAwID8gdGhpcy5zdG9yeUJsb2Nrc1tpbmRleF0gOiBudWxsO1xuICAgICAgICB0aGlzLnN0b3J5QmxvY2tTZXJ2aWNlLmNoYW5nZUV4cG9zZWRJbmRleChpbmRleCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCduby1zY3JvbGwnKTtcbiAgICB9XG5cbiAgICBzYXZlKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RvcnlCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcnlCbG9ja1NlcnZpY2Uuc2F2ZVN0b3J5QmxvY2sodGhpcy5zdG9yeUJsb2Nrc1tpXSkuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnkobm90aWZpY2F0aW9uKXtcbiAgICAgICAgaWYoKG5vdGlmaWNhdGlvbiB8fCB7fSkudHlwZSA9PSAnZXJyb3InKXtcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uQ29tcG9uZW50LmVycm9yKG5vdGlmaWNhdGlvbi5tZXNzYWdlIHx8ICcnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKChub3RpZmljYXRpb24gfHwge30pLnR5cGUgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uQ29tcG9uZW50LnN1Y2Nlc3Mobm90aWZpY2F0aW9uLm1lc3NhZ2UgfHwgJycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbkNvbXBvbmVudC5tZXNzYWdlKG5vdGlmaWNhdGlvbi5tZXNzYWdlIHx8ICcnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZG93bmxvYWRQZGYoKXtcbiAgICAgICAgdGhpcy5zdG9yeUJsb2NrU2VydmljZS5kb3dubG9hZFBkZih0aGlzLnN0b3J5QmxvY2tzKTtcbiAgICB9XG5cbiAgICB0b2dnbGVNZW51KHZpc2liaWxpdHkpe1xuICAgICAgICB0aGlzLm1lbnVWaXNpYmxlID0gdmlzaWJpbGl0eTtcbiAgICAgICAgaWYodmlzaWJpbGl0eSl7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9hcHAtY29udGVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTIH0gICAgZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtIVFRQX1BST1ZJREVSUywgQ29uZmlndXJhdGlvbl0pO1xuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBbmltYXRpb25CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvYW5pbWF0ZS9hbmltYXRpb25fYnVpbGRlcic7XG5pbXBvcnQge0Nzc0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9hbmltYXRlL2Nzc19hbmltYXRpb25fYnVpbGRlcic7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2NvbGxhcHNlXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb2xsYXBzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgY29sbGFwc2U6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uOiBDc3NBbmltYXRpb25CdWlsZGVyO1xuXG4gICAgY29uc3RydWN0b3IoYW5pbWF0aW9uQnVpbGRlcjpBbmltYXRpb25CdWlsZGVyLCBwcml2YXRlIF9lbDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbiA9IGFuaW1hdGlvbkJ1aWxkZXIuY3NzKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICAvLyBpZiB0aGUgY2hhbmdlIGhhcHBlbmVkIGluIHRoZSBjb2xsYXBzZSBwcm9wZXJ0eVxuICAgICAgICBpZiAoY2hhbmdlcy5jb2xsYXBzZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfYmFzZVNlcXVlbmNlKCk6IENzc0FuaW1hdGlvbkJ1aWxkZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0aW9uXG4gICAgICAgICAgICAuc2V0RHVyYXRpb24oMjUwKSAvLyB0aGUgdHJhbnNpdGlvbiBkdXJhdGlvblxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdjb2xsYXBzZScpIC8vIHJlbW92ZSBhIGNsYXNzIGJlZm9yZSB0aGUgdHJhbnNpdGlvbiBzdGFydFxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpbicpXG4gICAgICAgICAgICAuYWRkQW5pbWF0aW9uQ2xhc3MoJ2NvbGxhcHNpbmcnKTsgLy8gYWRkIGEgdGVtcCBjbGFzcyBmb3IgdGhlIHRyYW5zaXRpb24gcGVyaW9kXG4gICAgfVxuXG4gICAgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYmFzZVNlcXVlbmNlXG4gICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyh7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCArICdweCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2V0VG9TdHlsZXMoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogJzAnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBhIGlzIHRoZSBBbmltYXRpb24gaW5zdGFuY2UgcnVubmluZyB0aGlzIGFuaW1hdGlvbi5cbiAgICAgICAgbGV0IGEgPSB0aGlzLl9hbmltYXRpb24uc3RhcnQodGhpcy5fZWwubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIGEub25Db21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICBhLnJlbW92ZUNsYXNzZXMoWydpbiddKTsgLy8gcmFwaWQgY2hhbmdlIHdpbGwgbGVhdmUgJ2luJ1xuICAgICAgICAgICAgYS5hZGRDbGFzc2VzKFsnY29sbGFwc2UnXSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uIC8vIDFzdCBhbmltYXRpb24gYnVpbGRcbiAgICAgICAgICAgIC5zZXREdXJhdGlvbigwKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdjb2xsYXBzZScpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2luJylcbiAgICAgICAgICAgIC5zZXRGcm9tU3R5bGVzKHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQodGhpcy5fZWwubmF0aXZlRWxlbWVudCkgLy8gMXN0IGFuaW1hdGlvbiBzdGFydFxuICAgICAgICAgICAgLm9uQ29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBhID0gdGhpcy5fYmFzZVNlcXVlbmNlIC8vICAybmQgYW5pbWF0aW9uIGJ1aWxkXG4gICAgICAgICAgICAgICAgICAgIC5zZXRGcm9tU3R5bGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzAnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zZXRUb1N0eWxlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4J1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQodGhpcy5fZWwubmF0aXZlRWxlbWVudCk7IC8vIDJuZCBhbmltYXRpb24gc3RhcnRcblxuICAgICAgICAgICAgICAgIGEub25Db21wbGV0ZSgoKSA9PiAgYS5hZGRDbGFzc2VzKFsnY29sbGFwc2UnLCAnaW4nXSkgKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
