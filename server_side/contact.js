const ContactusModel = require('./ContactusModel')
const ConsultadoctorModel = require('./ConsultadoctorModel')
const db = require('./db')
const utils = require('./utils')
const express = require('express')
    //const multer = require('multer')

const router = express.Router()

router.post('/consult', (request, response) => {
    
    console.log("consult");
    const { patientname, healthproblem, phoneno, email, city, doctor } = request.body
    console.log(request.body)

    var consultadoc = new ConsultadoctorModel({
        patientname: patientname,
        healthproblem: healthproblem,
        phoneno: phoneno,
        email: email,
        city: city,
        doctor: doctor
    });

    consultadoc.save((err, doc) => {
        if (!err) {
            console.log('Consltation Request added successfully!');
            response.send(utils.createResult(err, doc))
        } else {
            console.log('Error during record insertion : ' + err);
        }

    });
})

router.post('/query', (request, response) => {
    
    console.log("query");
    const { name, email, message } = request.body
    console.log(request.body)

    var contactreq = new ContactusModel({
        name: name,
        email: email,
        message: message
    });

    contactreq.save((err, doc) => {
        if (!err) {
            console.log('Query sent successfully!');
            response.send(utils.createResult(err, doc))
        } else {
            console.log('Error during record insertion : ' + err);
        }

    });
})

module.exports = router