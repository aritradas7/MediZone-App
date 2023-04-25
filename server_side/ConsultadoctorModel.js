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

var ConsultadoctorModel = mongoose.model('consultrequest', consultadoctorSchema);

module.exports = mongoose.model("ConsultRequest", consultadoctorSchema);