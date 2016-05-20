var mongoose = require('mongoose');

var NewsSchema = new mongoose.Schema({
    createdAt:{ type: Date, default: Date.now },
    title:String,
    content:String
});


module.exports = mongoose.model('News', NewsSchema);