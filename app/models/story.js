var mongoose = require('mongoose');

var StorySchema = new mongoose.Schema({
    title: String,
    description: String,
    createdAt:{ type: Date, default: Date.now },
    lastModifiedAt:{ type: Date, default: Date.now },
    userId: String
});

module.exports = mongoose.model('Story', StorySchema);