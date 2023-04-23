const db = require('./db')
const utils = require('./utils')
var mongoose = require('mongoose')
const express = require('express')
const multer = require('multer')
var prodModel = require('./productModel')

const router = express.Router()

const upload = multer({ dest: 'images' })


router.get('/allopathic', (request, response) => {
    // const connection = db.connect1()
    // const statement = `select * from products where categoryId = 1`
    // connection.query(statement, (error, data) => {
    //     connection.end()
    //     response.send(utils.createResult(error, data))
    // })
    console.log("Alopathy -HIT")
    prodModel.find({}, function(err, item) {
        const result = {}
        console.log(item)
        response.send(utils.createResult(err, item))
    });
})


router.get('/homoeopathy', (request, response) => {
    // const connection = db.connect1()
    // const statement = `select * from products where categoryId = 2`
    // connection.query(statement, (error, data) => {
    //     connection.end()
    //     response.send(utils.createResult(error, data))
    // })

    prodModel.find({}, function(err, item) {
        const result = {}
        console.log(item)
        response.send(utils.createResult(err, item))
    });
})


router.get('/ayurvedic', (request, response) => {
    // const connection = db.connect1()
    // const statement = `select * from products where categoryId = 3`
    // connection.query(statement, (error, data) => {
    //     connection.end()
    //     response.send(utils.createResult(error, data))
    // })

    prodModel.find({}, function(err, item) {
        const result = {}
        console.log(item)
        response.send(utils.createResult(err, item))
    });
})


router.post('/search', (request, response) => {
    const { ProductName } = request.body

    const connection = db.connect1()

    const statement = `select * from products where name like '%${ProductName}%'  `

    connection.query(statement, (error, data) => {
        console.log(statement)
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

module.exports = router