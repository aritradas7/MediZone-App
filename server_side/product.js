const db = require('./db')
const utils = require('./utils')
var mongoose = require('mongoose');
const express = require('express')
const multer = require('multer')
var prodModel = require('./productModel');

const router = express.Router()

const upload = multer({ dest: 'images' })

router.get('/', (request, response) => {
    // const connection = db.mongoose()
    // const statement = `select * from products`
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


router.post('/', upload.single('image'), (request, response) => {
    const file = request.file.filename
    const { name, price, discount, priceWithDiscount, doseInMG, mgfdate, expiredate, description, categoryid } = request.body

    console.log(categoryid);

    var prodDetails = new prodModel({
        name: name,
        price: price,
        discount: discount,
        priceWithDiscount: priceWithDiscount,
        doseInMG: doseInMG,
        mgfdate: mgfdate,
        expiredate: expiredate,
        description: description,
        categoryid: categoryid
    });

    prodDetails.save((err, doc) => {
        if (!err) {
            console.log('Product added successfully!');
            response.send(utils.createResult(err, doc))
        } else {
            console.log('Error during record insertion : ' + err);
        }

    });
})


router.delete('/:id', (request, response) => {
    const { id } = request.params
    const connection = db.connect1()
    const statement = `delete from products where id = ${id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

// this api is for get details of product     
router.get('/edit_product/:id', (request, response) => {
    const { id } = request.params
    const connection = db.connect1()
    const statement = `select * from products where id='${id}'`
    connection.query(statement, (error, data) => {


        response.send(utils.createResult(error, data))

    })
})


//this api is for uodate product list

router.put('/edit_product/:id', (request, response) => {
    const { id } = request.params
    const { name, price, discount, priceWithDiscount, doseInMG, mgfdate, expiredate, description, categoryid } = request.body
    const connection = db.connect1()

    const statement = `update products set name='${name}',price='${price}',discount='${discount}',priceWithDiscount='${priceWithDiscount}',doseInMG='${doseInMG}',mgfdate='${mgfdate}',expiredate='${expiredate}',description='${description}',categoryid='${categoryid}' where id =${id}`

    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

// to get single result of product by id for product details
router.get('/:id', (request, response) => {
    const { id } = request.params
    const connection = db.connect1()
    const statement = `select * from products where id='${id}'`
    connection.query(statement, (error, data) => {


        response.send(utils.createResult(error, data))

    })
})

module.exports = router