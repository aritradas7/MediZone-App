const mongoose = require("./db");

// create an schema
var userSchema = new mongoose.Schema({

    username: String,
    firstname: String,
    lastname: String,
    joindate: String,
    phoneno: String,
    email: String,
    password: String,
    exist: String
});

var userModel = mongoose.model('user', userSchema);

module.exports = mongoose.model("User", userSchema);