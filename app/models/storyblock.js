var mongoose = require('mongoose');

var StoryBlockSchema = new mongoose.Schema({
    _id: String,
    blockId: Number,
    title: String,
    description: String,
    timePosition: Number,
    importance: Number
});

module.exports = mongoose.model('StoryBlocks', StoryBlockSchema);