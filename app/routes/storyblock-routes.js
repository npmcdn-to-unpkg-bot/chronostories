var express = require('express');
var router = express.Router();
var StoryBlockModel = require('../models/storyblock');
var StoryModel = require('../models/story');

router.get('/:userid', function (req, res) {
    var userId = req.params.userid;
    console.log('router.get stories for user '+ userId);

    StoryModel.find(
        { userId: userId },
        null,
        function (err, story) {
            res.json(story);
        })
});


router.post('/:userid', function (req, res, next) {
    var data = JSON.parse(req.body.data);
    var userId = req.params.userid;

    console.log('router.post story for user '+ userId);
    //TODO:add check of the existence of the user

    StoryModel.create(data, function (err, story) {
        if (err) {
            console.log(err);
        }
        res.json(story);
    });
});

router.put('/:userid/:storyid', function (req, res, next) {
    console.log('router.put id');
    var userId = req.params.userid;
    var storyId = req.params.storyid;

    var data = JSON.parse(req.body.data);

    StoryModel.findOneAndUpdate(
        {
            _id: storyId,
            userId: userId
        },
        data,
        function (err, story) {
            if (err) {
                console.log(err);
            }
            console.log('Saving');
            return res.json(data);
        });
});

router.delete('/:userid/:storyid', function (req, res, next) {
    console.log('router.delete id');
    var userId = req.params.userid;
    var storyId = req.params.storyid;

    StoryModel.findOneAndRemove(
        {
            _id: storyId,
            userId: userId
        }, function (err, story) {
            if (err) {
                console.log(err);
            }
            console.log('Found');
            return res.json(story);
        }).exec(function (err) {
        console.log('Deleting...');
    });
});

router.get('/:userid/:storyid', function (req, res) {
    console.log('router.get');
    var userId = req.params.userid;
    var storyId = req.params.storyid;
    StoryBlockModel.find(
        {
            userId: userId,
            storyId: storyId
        },
        null,
        {
            sort: 'timePosition'
        },
        function (err, storyBlock) {
            res.json(storyBlock || []);
        })
});

router.get('/:userid/:storyid/:blockid', function (req, res, next) {
    console.log('router.get userid');
    var userId = req.params.userid;
    var storyId = req.params.storyid;
    var blockId = req.params.blockid;

    StoryBlockModel.find(
        {
            _id: blockId,
            userId: userId,
            storyId: storyId
        }, function (err, storyBlock) {
            if (err) {
                console.log(err);
            }
            return res.json(storyBlock);
        });
});

router.post('/:userid/:storyid', function (req, res, next) {
    var data = JSON.parse(req.body.data);
    var userId = req.params.userid;
    var storyId = req.params.storyid;

    //TODO:add check of the existence of the user

    StoryBlockModel.create(data, function (err, storyBlock) {
        if (err) {
            console.log(err);
        }
        res.json(storyBlock);
    });
});

router.put('/:userid/:storyid/:blockid', function (req, res, next) {
    console.log('router.put id');
    var userId = req.params.userid;
    var blockId = req.params.blockid;
    var storyId = req.params.storyid;

    var data = JSON.parse(req.body.data);

    StoryBlockModel.findOneAndUpdate(
        {
            _id: blockId,
            userId: userId,
            storyId: storyId
        },
        data, function (err, storyBlock) {
            if (err) {
                console.log(err);
            }
            console.log('Saving');
            return res.json(data);
        });
});

router.delete('/:userid/:storyid/:blockid', function (req, res, next) {
    console.log('router.delete id');
    var userId = req.params.userid;
    var blockId = req.params.blockid;
    var storyId = req.params.storyid;

    StoryBlockModel.findOneAndRemove(
        {
            _id: blockId,
            userId: userId,
            storyId: storyId
        }, function (err, storyBlock) {
            if (err) {
                console.log(err);
            }
            console.log('Found');
            return res.json(storyBlock);
        }).exec(function (err) {
        console.log('Deleting...');
    });
});

module.exports = router;
