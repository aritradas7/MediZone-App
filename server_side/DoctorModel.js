const mongoose = require("./db");

// create an schema
var doctorSchema = new mongoose.Schema({

    name: String,
    email: String,
    phoneno: String,
    degree: String
});

var DoctorModel = mongoose.model('doctor', doctorSchema);

module.exports = mongoose.model("Doctor", doctorSchema);