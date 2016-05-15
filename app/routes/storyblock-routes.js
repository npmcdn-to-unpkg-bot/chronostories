var express = require('express');
var router = express.Router();
var StoryBlockModel = require('../models/storyblock');

router.get('/:userid', function (req, res) {
    console.log('router.get');
    var userId = req.params.userid;
    StoryBlockModel.find(
        { userId: userId },
        null,
        {
            sort : 'timePosition'
        },
        function (err, storyBlock) {
            res.json(storyBlock);
        })
});

router.get('/:userid/:blockid', function (req, res, next) {
    console.log('router.get userid');
    var userId = req.params.userid;
    var blockId = req.params.blockid;

    StoryBlockModel.find({_id : blockId, userId : userId}, function (err, storyBlock) {
        if (err) {
            console.log(err);
        }
        return res.json(storyBlock);
    });
});

router.post('/:userid', function (req, res, next) {
    var data = JSON.parse(req.body.data);
    var userId = req.params.userid;

    //TODO:add check of the existence of the user

    StoryBlockModel.create(data, function (err, storyBlock) {
        if (err) {
            console.log(err);
        }
        res.json(storyBlock);
    });
});

router.put('/:userid/:blockid', function (req, res, next) {
    console.log('router.put id');
    var userId = req.params.userid;
    var blockId = req.params.blockid;

    var data = JSON.parse(req.body.data);

    StoryBlockModel.findOneAndUpdate({_id : blockId, userId : userId}, data, function (err, storyBlock) {
        if (err) {
            console.log(err);
        }
        console.log('Saving');
        return res.json(storyBlock);
    });
});

router.delete('/:userid/:blockid', function (req, res, next) {
    console.log('router.delete id');
    var userId = req.params.userid;
    var blockId = req.params.blockid;

    StoryBlockModel.findOneAndRemove({_id : blockId, userId : userId}, function (err, storyBlock) {
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
