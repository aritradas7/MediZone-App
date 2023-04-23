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
 
var userModel=mongoose.model('mrs',userSchema);
 
module.exports = mongoose.model("Mrs", userSchema);