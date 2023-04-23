const mongoose = require("./db");

// create an schema
var categorySchema = new mongoose.Schema({

    title: String,
    description: String,
    categoryid: Number
});

var categoryModel = mongoose.model('category', categorySchema);

module.exports = mongoose.model("Category", categorySchema);