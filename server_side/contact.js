const ContactusModel = require('./ContactusModel')
const ConsultadoctorModel = require('./ConsultadoctorModel')
const db = require('./db')
const utils = require('./utils')
const express = require('express')
    //const multer = require('multer')

const router = express.Router()

router.post('/consult', (request, response) => {
    
    console.log("consult");
    const { patientname, healthproblem, phoneno, email, city, doctorname, appointmentdate } = request.body
    console.log(request.body)
    var stat = 'Pending'

    var consultadoc = new ConsultadoctorModel({
        patientname: patientname,
        healthproblem: healthproblem,
        phoneno: phoneno,
        email: email,
        city: city,
        doctor: doctorname,
        appointmentdate: appointmentdate,
        isapproved: stat
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

router.get('/allconsultrequests', (request, response) => {
    
    ConsultadoctorModel.find({}, function(err, item) {
        const result = {}
        console.log(item)
        response.send(utils.createResult(err, item))
    });
})

router.post('/userconsultrequests', (request, response) => {
    const { mrid } = request.body
    ConsultadoctorModel.find({ userid: mrid }, function(err, item) {
        const result = {}
        console.log(item)
        response.send(utils.createResult(err, item))
    });
})

router.get('/allqueries', (request, response) => {
    
    ContactusModel.find({}, function(err, item) {
        const result = {}
        console.log(item)
        response.send(utils.createResult(err, item))
    });
})

router.post('/approve', (request, response) => {
    const { id } = request.body
    ConsultadoctorModel.updateOne(
        { _id: id }, 
        {$set: {isapproved: 'Approved'}},
        function(err, item) {
        const result = {}
        console.log(item)
        response.send(utils.createResult(err, item))
    });
})

router.post('/reject', (request, response) => {
    const { id } = request.body
    ConsultadoctorModel.updateOne(
        { _id: id }, 
        {$set: {isapproved: 'Rejected'}},
        function(err, item) {
        const result = {}
        console.log(item)
        response.send(utils.createResult(err, item))
    });
})

module.exports = router