var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userModel = require('./userModel');
const utils = require('./utils');
var mrs = require('./mrs')
var prodModel = require('./productModel')

router.get('/', (req, res) => {
    userModel.find({}, function(err, item) {
        const result = {}

        result['status'] = 'success'
        result['data'] = item
        res.send(result)

    });
    console.log("test");
})

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    var categ = 0

    if (req.params.id == "allopathic") {
        categ = 1
    } else if (req.params.id == "homoeopathy") {
        categ = 2
    } else if (req.params.id == "ayurvedic") {
        categ = 3
    }

    prodModel.find({ categoryid: categ }, function(err, item) {
        const result = {}
        console.log(item)
        res.send(utils.createResult(err, item))
    });
});

router.post('/', (request, response) => {
    const { email, password } = request.body
    console.log("search start..");
    userModel.find({ email: email, password: password }, function(err, item) {
        const result = {}
        if (item.length != 0) {
            result['status'] = 'success'
            result['data'] = item
            response.send(result)
        } else {
            result['status'] = 'error'
            result['error'] = err
            response.send(result)
        }
    });
    console.log("test");
})

module.exports = router