const mongoose = require("./db");


// create an schema
var orderSchema = new mongoose.Schema({

    OrderDate: Date,
    deliveryDate: Date,
    PaymentMode: String,
    userid: String,
    drname: String,
    address: String,
    drphoneno: String,
    totalAmount: String,
    totalDiscount: String,
    prescription: String,
    status: String,
    paymentid: String,
    deliveryCharge: String
});

var cartModel = mongoose.model('order', orderSchema);

module.exports = mongoose.model("Order", orderSchema);