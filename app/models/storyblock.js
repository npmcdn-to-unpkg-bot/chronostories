var mongoose = require('mongoose');

var StoryBlockSchema = new mongoose.Schema({
    blockId: Number,
    title: String,
    description: String,
    timePosition: Number,
    importance: Number,
    blockNumber: Number,
    type: String,
    userId: String,
    createdAt:{ type: Date, default: Date.now },
    lastModifiedAt:{ type: Date, default: Date.now }

});

module.exports = mongoose.model('StoryBlocks', StoryBlockSchema);