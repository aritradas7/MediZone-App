const db = require('./db')
const utils = require('./utils')
const express = require('express')
const DoctorModel = require('./DoctorModel')


const router = express.Router()

router.get('/', (request, response) => {
    DoctorModel.find({}, function(err, item) {
        const result = {}
        console.log(item)
        response.send(utils.createResult(err, item))
    });
})


router.post('/', (request, response) => {
    const { name, email, phoneno, degree } = request.body

    var doc = new DoctorModel({
        name: name,
        email: email,
        phoneno: phoneno,
        degree: degree
    });

    doc.save((err, doc) => {
        if (!err) {
            console.log('Doctor details successfully!');
            response.send(utils.createResult(err, doc))
        } else {
            console.log('Error during record insertion : ' + err);
        }

    });
})


router.delete('/:id', (request, response) => {
    const { id } = request.params
    DoctorModel.deleteOne(
        { _id : id }, 
        function(err, res) {
            console.log("deleted")
            response.send(utils.createResult(err, res))
        }
    );
})

module.exports = router