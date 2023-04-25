const mongoose = require("./db");

// create an schema
var contactusSchema = new mongoose.Schema({

    name: String,
    email: String,
    message: String
});

var ContactusModel = mongoose.model('contactus', userSchema);

module.exports = mongoose.model("Contactus", userSchema);