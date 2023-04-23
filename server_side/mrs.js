var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userModel = require('./userModel');
const utils = require('./utils');

router.get('/:id', (req, res) => {
    userModel.find({}, function(err, item) {
        const result = {}

        result['status'] = 'success'
        result['data'] = item
        response.send(result)

    });
    console.log("test");
})