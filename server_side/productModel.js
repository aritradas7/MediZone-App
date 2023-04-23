const mongoose = require("./db");

// create an schema
var productSchema = new mongoose.Schema({

    name: String,
    price: String,
    discount: String,
    priceWithDiscount: String,
    doseInMG: String,
    mgfdate: String,
    expiredate: String,
    description: String,
    image: String,
    categoryid: String,
});

var productModel = mongoose.model('products', productSchema);

module.exports = mongoose.model("Products", productSchema);