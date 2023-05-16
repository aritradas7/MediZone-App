const mongoose = require("./db");

// create an schema
var orderDtlsSchema = new mongoose.Schema({

    OrderId: String,
    productID: String,
    productname: String,
    Quantity: Number,
    totalAmount: String,
    totalDiscount: String
});

var cartModel = mongoose.model('orderDetail', orderDtlsSchema);

module.exports = mongoose.model("OrderDetail", orderDtlsSchema);