const CartModel = require('./CartModel')
const OrderModel = require('./OrderModel')
const OrderDetailModel = require('./OrderDetailModel')
const db = require('./db')
const utils = require('./utils')
const express = require('express')
const multer = require('multer')

const router = express.Router()

const upload = multer({ 
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            let path = "images";
            callback(null,path);
        },
        filename: (req,file,callback) => {
            callback(null,file.originalname);
        }
    })
});

// to insert details of adding to cart product
router.post('/cart', (request, response) => {
    const { Quantity, totalAmount, totalDiscount, MRid, productID, file } = request.body

    CartModel.find({ MRid: MRid, productID: productID }, function(err, item) {
        console.log('Matched Count')
        console.log(item.length)
        if(item.length == 0){
            console.log("addcart")
            var cartDetails = new CartModel({
                Quantity: Quantity,
                totalAmount: totalAmount,
                totalDiscount: totalDiscount,
                MRid: MRid,
                productID: productID,
                flag: 0,
                file: file
            });
        
            cartDetails.save((err, doc) => {
                if (!err) {
                    console.log('Cart added successfully!');
                    response.send(utils.createResult(err, doc))
                } else {
                    console.log('Error during record insertion : ' + err);
                }
            });
            
        }
        else{
            
            response.send(utils.createResult("Item already in cart. Please go to cart and increase quantity (if needed)", ""))
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
    const { Quantity, totalAmount, totalDiscount, MRid, productID } = request.body
    console.log('editing cart')
    
    CartModel.updateMany(
        { productID:productID, MRid:MRid }, 
        { $set: {Quantity: Quantity, totalAmount: totalAmount, totalDiscount: totalDiscount} }, 
        function(err, res) {
            console.log("Cart updated")
            console.log(res.matchedCount);
            response.send(utils.createResult(err, res))
        }
    );
})


// to delete an item of cart
router.post('/cartDelete', (request, response) => {
    const { mrid, productId } = request.body
    CartModel.deleteMany(
        { productID:productId, MRid:mrid }, 
        function(err, res) {
            response.send(utils.createResult(err, res))
        }
    );
})

// to clear cart
router.post('/clearCart', (request, response) => {
    const { mrid } = request.body
    CartModel.deleteMany(
        { MRid:mrid }, 
        function(err, res) {
            response.send(utils.createResult(err, res))
        }
    );
})

// to update orderlist (called when user is confired to order)
router.post('/cart/confirmorder', upload.single('image'), (request, response) => {
    const { OrderDate, deliveryDate, PaymentMode, userid, drname, address, drphoneno, totalAmount, totalDiscount, image ,paymentid} = request.body
    
    var file = request.file.originalname
    
    
    file = "http://localhost:4000/images/"+file

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
        prescription: file,
        status: 'Order Placed',
        paymentid: paymentid
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
})

//to get list of orders of a MR
router.post('/orders', (request, response) => {
    const { mrid } = request.body
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

//update orderstatus
router.post('/dashboard/orders/update', (request, response) => {
    const {id,status} = request.body;

    OrderModel.updateOne(
        {_id:id},
        {$set: {status: status}}, 
        function(err, item) {
        const result = {}
        console.log(item)
        response.send(utils.createResult(err, item))
    });
})

module.exports = router