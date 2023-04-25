const mongoose = require("./db");

// create an schema
var contactusSchema = new mongoose.Schema({

    name: String,
    email: String,
    message: String
});

var ContactusModel = mongoose.model('userqueries', contactusSchema);

module.exports = mongoose.model("Userqueries", contactusSchema);