const mongoose = require("./db");

// create an schema
var consultadoctorSchema = new mongoose.Schema({

    patientname: String,
    healthproblem: String,
    phoneno: String,
    email: String,
    city: String,
    doctor: String
});

var ConsultadoctorModel = mongoose.model('consultadoc', userSchema);

module.exports = mongoose.model("Consultadoc", userSchema);