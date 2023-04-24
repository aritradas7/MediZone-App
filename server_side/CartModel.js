const mongoose = require("./db");

// create an schema
var cartSchema = new mongoose.Schema({

    Quantity: Number,
    totalAmount: String,
    totalDiscount: String,
    MRid: String,
    productID: String,
    flag: Number
});

var cartModel = mongoose.model('cart', cartSchema);

module.exports = mongoose.model("Cart", cartSchema);