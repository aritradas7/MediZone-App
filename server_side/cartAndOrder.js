const CartModel = require('./CartModel')
const OrderModel = require('./OrderModel')
const OrderDetailModel = require('./OrderDetailModel')
const db = require('./db')
const utils = require('./utils')
const express = require('express')
    //const multer = require('multer')

const router = express.Router()

//const upload = multer({dest: 'images'})

// to insert details of adding to cart product
router.post('/cart', (request, response) => {
    const { Quantity, totalAmount, totalDiscount, MRid, productID } = request.body
    console.log("addcart")
        // const connection = db.connect1()
        // const statement = `
        // insert into orderdetails (Quantity,totalAmount,totalDiscount,MRid,productID,flag) values(${Quantity}, ${totalAmount}, ${totalDiscount}, ${MRid}, ${productID},0)`
        // connection.query(statement, (error, data) => {
        //     connection.end()
        //     response.send(utils.createResult(error, data))
        // })
    var cartDetails = new CartModel({
        Quantity: Quantity,
        totalAmount: totalAmount,
        totalDiscount: totalDiscount,
        MRid: MRid,
        productID: productID,
        flag: 0
    });

    cartDetails.save((err, doc) => {
        if (!err) {
            console.log('Cart added successfully!');
            response.send(utils.createResult(err, doc))
        } else {
            console.log('Error during record insertion : ' + err);
        }

    });
})

// to show product in cart list
router.post('/addcart', (request, response) => {
    console.log("show cart")
    const { mrid } = request.body
    

    CartModel.find({ MRid: mrid }, function(err, item) {
        const result = {}
        console.log(item)
        response.send(utils.createResult(err, item))
    });
})


// when user is editing his cart product
router.put('/cartEdit', (request, response) => {
    const { Quantity, totalAmount, totalDiscount, MRid, productID, orderDetailsTableID } = request.body

    const connection = db.connect1()
    const statement = `
    update orderdetails set Quantity=${Quantity},totalAmount=${totalAmount}, totalDiscount=${totalDiscount}, MRid=${MRid}, productID=${productID} where id = ${orderDetailsTableID} `
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


// to delete an item of cart
router.post('/cartDelete', (request, response) => {

    const { id } = request.body
    const connection = db.connect1()
    const statement = `delete from orderdetails where id = ${id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

// to update orderlist (called when user is confired to order)
router.put('/cart/confirmorder', (request, response) => {
    console.log("this called")
    const { OrderDate, deliveryDate, PaymentMode, userid, drname, address, drphoneno, totalAmount, totalDiscount, prescription } = request.body
    console.log(prescription)
    console.log('#################################################')
    //var plist = CartModel.find({ MRid: userid });
 
    var order = new OrderModel({
        OrderDate: OrderDate,
        deliveryDate: deliveryDate,
        PaymentMode: PaymentMode,
        userid: userid,
        drname: drname,
        address: address,
        drphoneno: drphoneno,
        totalAmount: totalAmount,
        totalDiscount: totalDiscount,
        prescription: prescription
    });
    console.log(order)
    var oid = ''
    order.save((err, doc) => {
        if (!err) {
            console.log('Cart added successfully!');
            oid = doc._id;
            
            CartModel.find({ MRid: userid }, function(err, item) {
                
                item.forEach (function f(x){
                    var orderDtls = new OrderDetailModel({
                        OrderId: oid,
                        productID: x.productID,
                        Quantity: x.quantity,
                        totalAmount: x.totalAmount,
                        totalDiscount: x.totalDiscount
                    });
                    orderDtls.save();
                });
            });
            response.send(utils.createResult(err, doc))
        } else {
            console.log('Error during record insertion : ' + err);
        }
    });

    console.log(oid)

})

//to get list of orders of a MR
router.post('/orders', (request, response) => {
    const { mrid } = request.body
    // const connection = db.connect1()
    // const statement = `
    // select p.image,p.name, o.id,o.Quantity,o.totalDiscount,o.totalAmount,o.drname,o.drphoneno,o.PaymentMode,
    // o.OrderDate,o.deliveryDate,addressOFdr from orderdetails o inner join products p where o.ProductID = p.id and o.MRid = ${mrid} and flag = 1 order by o.deliveryDate desc`

    // connection.query(statement, (error, data) => {
    //     connection.end()
    //     response.send(utils.createResult(error, data))
    // })
    console.log("show past orders")
    OrderModel.find({ userid: mrid }, function(err, item) {
        const result = {}
        console.log(item)
        response.send(utils.createResult(err, item))
    });
})

router.delete('/orders/:id', (request, response) => {
    const { id } = request.params
    const connection = db.connect1()
    const statement = ` delete from orderdetails where id = ${id} `

    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


//to get list of orders of All mrs
router.get('/dashboard/orders', (request, response) => {
    OrderModel.find({}, function(err, item) {
        const result = {}
        console.log(item)
        response.send(utils.createResult(err, item))
    });
})


// to get list of orders of a mr in admin side
router.get('/dashboard/MRorders/:id', (request, response) => {
    const { id } = request.params
    const connection = db.connect1()
    const statement = `
    select p.image,p.name, o.id,o.Quantity,o.totalDiscount,o.totalAmount,o.drname,o.drphoneno,o.PaymentMode,
    o.OrderDate,o.deliveryDate,addressOFdr,o.MRid from orderdetails o inner join products p where o.ProductID = p.id and o.MRid=${id} and flag = 1 order by o.deliveryDate desc`

    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})




module.exports = router