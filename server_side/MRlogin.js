var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userModel = require('./userModel');
const utils = require('./utils');

router.get('/', (req, res) => {
    mrs.find((err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Error in Retriving user :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!isObjectIdOrHexString.isValid(req.params.id))
        return res.status(404).send(`No record with given id : ${req.params.id}`);
    mrs.findById(req.params.id, (err, docs) => {
        if (!err) { res.send(doc); } else { console.log('Error in Retriving user :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (request, response) => {
    const { email, password } = request.body
    console.log("search start..");
    userModel.find({email:email, password:password}, function(err, item) {
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