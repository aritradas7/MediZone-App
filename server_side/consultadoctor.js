var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var consultadoc = require('./ConsultadoctorModel');
const utils = require('./utils');
const ConsultadoctorModel = require('./ConsultadoctorModel');

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'add user' });
// });

router.post('/', (request, response) => {
    const { patientname, healthproblem, phoneno, email, city, doctor } = request.body

    var consultadoc = new ConsultadoctorModel({
        patientname: patientname,
        healthproblem: healthproblem,
        phoneno: phoneno,
        email: email,
        city: city,
        doctor: doctor
    });

    // userDetails.save((err, doc) => {
    //     if (!err) {
    //         console.log('User added successfully!');
    //         response.send(utils.createResult(err, doc))
    //     } else {
    //         console.log('Error during record insertion : ' + err);
    //     }

    // });

});

module.exports = router;