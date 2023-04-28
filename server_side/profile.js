var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userModel = require('./userModel');
const utils = require('./utils');


/* GET home page. */
router.get('/', function(req, res, next) {
    
    userModel.find({}, function(err, item) {
        console.log('usermodel')
        const result = {}
        console.log(item)
        res.send(utils.createResult(err, item))
    });
});

router.get('/:email', function(req, res, next) {
    const { email } = req.params

    userModel.find({email:email}, function(err, item) {
        console.log('emailmodel')
        const result = {}
        console.log(item)
        res.send(utils.createResult(err, item))
    });
});

router.put('/', (req, res) => {
    const { userid } = req.body
    userModel.find({_id:userid}, function(err, item) {
        
        console.log('usermodelsingle')
        const result = {}
        console.log(item)
        res.send(utils.createResult(err, item))
    });
});

router.post('/', (request, response) => {
    const { userid, dateofbirth, phoneno, email, password } = request.body

    userModel.updateOne(
        { _id:userid }, 
        { $set: {joindate: dateofbirth, phoneno: phoneno, email: email, password:password} }, 
        function(err, res) {
            console.log("User updated")
            console.log(res.matchedCount);
            response.send(utils.createResult(err, res))
        }
    );

});

module.exports = router;