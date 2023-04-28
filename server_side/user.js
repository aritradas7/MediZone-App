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
    const { username, firstname, lastname, joindate, phoneno, email, password } = request.body

    var userDetails = new userModel({
        username: username,
        firstname: firstname,
        lastname: lastname,
        joindate: joindate,
        phoneno: phoneno,
        email: email,
        password: password,
        exist: 1
    });

    userDetails.save((err, doc) => {
        if (!err) {
            console.log('User added successfully!');
            response.send(utils.createResult(err, doc))
        } else {
            console.log('Error during record insertion : ' + err);
        }

    });

});

module.exports = router;