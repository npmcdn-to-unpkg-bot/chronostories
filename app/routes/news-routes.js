var express = require('express');
var router = express.Router();
var NewsModel = require('../models/news');

router.get('/', function (req, res, next) {
    console.log('news.get');

    res.json({test:process.env.user});

    NewsModel.find({}, function (err, storyBlock) {
        if (err) {
            console.log(err);
        }
        // return res.json(storyBlock);
    });
});


module.exports = router;
