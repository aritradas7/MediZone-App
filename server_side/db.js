// const mysql = require('mysql')
// function connect1()
// {
//     const connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'manager',
//         database: 'MrTracker',
//         port: 3306
//     })

//     connection.connect()
//     return connection
// }

// module.exports = {
//     connect1: connect1
// }


const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost:27017/MediZoneDB', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log("DB connection established......");
    } else {
        console.log("Error connecting to MongoDB ::::: " + JSON.stringify(err, undefined, 2));
    }
})
module.exports = mongoose;