const mongoose = require("./db");


// create an schema
var orderSchema = new mongoose.Schema({

    OrderDate: Date,
    deliveryDate: Date,
    PaymentMode: Number,
    userid: String,
    drname: String,
    address: String,
    drphoneno: String,
    totalAmount: String,
    totalDiscount: String,
    prescription: Buffer
});

var cartModel = mongoose.model('order', orderSchema);

module.exports = mongoose.model("Order", orderSchema);