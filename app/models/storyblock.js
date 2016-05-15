var mongoose = require('mongoose');

var StoryBlockSchema = new mongoose.Schema({
    blockId: Number,
    title: String,
    description: String,
    timePosition: Number,
    importance: Number,
    type: String
});

module.exports = mongoose.model('StoryBlocks', StoryBlockSchema);