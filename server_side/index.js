const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions = {
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

const { mongoose } = require('./db.js');
var drs = require('./drs.js');

var app = express();
app.use(bodyParser.json());
// app.use(cors({ origin: 'https://localhost:4200' }));
app.use(cors(corsOptions));


app.listen(3000, () => console.log('server is running at port 3000'));

app.use('/user', drs);