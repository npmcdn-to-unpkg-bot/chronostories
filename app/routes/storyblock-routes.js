var express = require('express');
var router = express.Router();
var storyBlockModel = require('../models/storyblock');
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/', function (req, res) {
    storyBlockModel.find(function (err, storyBlock) {
        res.send(storyBlock);
    })
});


router.post('/', function (req, res, next) {
    storyBlockModel.create(req.body, function (err, storyBlock) {
        if (err) return next(err);
        res.json(storyBlock);
    });
});

router.get('/:id', function (req, res, next) {
    storyBlockModel.findById(req.params.id, function (err, storyBlock) {
        if (err) return next(err);
        res.json(storyBlock);
    });
});

router.put('/:id', function (req, res, next) {
    storyBlockModel.findByIdAndUpdate(req.params.id, req.body, function (err, storyBlock) {
        if (err) return next(err);
        res.json(storyBlock);
    });

    return storyBlockModel.findById(req.params.id, function (err, block) {
        block.title = req.body.title;
        block.description = req.body.description;
        block.timePositon = req.body.timePositon;
        block.importance = req.body.importance;
        return block.save(function (err) {
            if (!err) {
                console.log("updated");
            } else {
                console.log(err);
            }
            return res.send(block);
        });
    });
});

router.delete('/:id', function (req, res, next) {

    console.log(req.params.id);
    return storyBlockModel.findById({_id : new ObjectId(req.params.id)}, function (err, block) {
        if(!block){
            console.log(req.params.id + ' not found')
            return res.send('');
        }
        return block.remove(function (err) {
            if (!err) {
                console.log("removed");
                return res.send('');
            } else {
                console.log(err);
            }
        }).exec();
    });
});

module.exports = router;
