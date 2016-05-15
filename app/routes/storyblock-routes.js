var express = require('express');
var router = express.Router();
var StoryBlockModel = require('../models/storyblock');

router.get('/', function (req, res) {
    console.log('router.get');
    StoryBlockModel.find(
        {},
        null,
        {
            sort : 'timePosition'
        },
        function (err, storyBlock) {
            res.send(storyBlock);
        })
});

router.post('/', function (req, res, next) {
    console.log('router.post');
    var data = JSON.parse(req.body.data);
    console.log(data);
    StoryBlockModel.create(data, function (err, storyBlock) {
        if (err) {
            console.log(err);
        }
        res.json(storyBlock);
    });
});

router.get('/:id', function (req, res, next) {
    console.log('router.get id');
    var id = req.params.id;
    StoryBlockModel.findById(id, function (err, storyBlock) {
        if (err) {
            console.log(err);
        }
        return res.json(storyBlock);
    });
});

router.put('/:id', function (req, res, next) {
    console.log('router.put id');
    var id = req.params.id;
    var data = JSON.parse(req.body.data);
    StoryBlockModel.findOneAndUpdate({_id: id}, data, function (err, storyBlock) {
        if (err) {
            console.log(err);
        }
        console.log('Saving');
        return res.send('');
    });
});

router.delete('/:id', function (req, res, next) {
    console.log('router.delete id');
    var id = req.params.id;
    console.log(id);
    StoryBlockModel.findOneAndRemove({_id: id}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('Found');
        return res.send('');
    }).exec(function (err) {
        console.log('Deleting...');
    });
});

module.exports = router;
