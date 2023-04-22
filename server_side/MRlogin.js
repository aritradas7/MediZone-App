const db = require('./db')
const utils = require('./utils')
const express = require('express')
const cryptoJs = require('crypto-js')

const router = express.Router()

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

router.post('/', (req, res) => {
    var mrs = new MRS({
        username: req.body.name,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phoneno: req.body.phoneno,
        email: req.body.email,
        password: req.body.password,
    });
    mrs.save((err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in user Save :', +JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!objectId.isValid(req.params.id))
        return res.status(404).send(`No record with given id : ${req.params.id}`);

    var mrs = {
        username: req.body.name,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phoneno: req.body.phoneno,
        email: req.body.email,
        password: req.body.password,
    };
    users.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in user Update :' + JSON.stringify(err, undefined, 2)); }
    });
});



// router.post('/', (request, response) => {
//     const { email, password } = request.body
//     const connection = db.mongoose()
//     const statement = `
//     select * from mrs where email='${email}' and password = '${password}'`
//     connection.query(statement, (error, data) => {
//         const result = {}
//         if (data.length != 0) {
//             result['status'] = 'success'
//             result['data'] = data
//             response.send(result)
//         } else {
//             result['status'] = 'error'
//             result['error'] = error
//             response.send(result)
//         }

//     })
// })

module.exports = router