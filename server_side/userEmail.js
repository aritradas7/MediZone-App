var nodemailer = require('nodemailer');
const db = require('./db')
const utils = require('./utils')
const express = require('express')
const UserModel = require('./userModel')

const router = express.Router()

router.get('/:email', (request, response) => {
    const { email } = request.params

    var pass = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    var counter = 0;
    while (counter < 10) {
      pass += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }

    UserModel.updateMany(
        {email: email},
        {$set: {password:pass}},
        function(err, item) {
        const result = {}
        console.log(item)
    });
    

    // console.log(email)
    // console.log(password)
    
    console.log('got it!')
    var text = `<!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
    * {
      box-sizing: border-box;
    }
    
    .menu {
      float: left;
      width: 20%;
      text-align: center;
    }
    
    .menu a {
      background-color: #e5e5e5;
      padding: 8px;
      margin-top: 7px;
      display: block;
      width: 100%;
      color: black;
    }
    
    .main {
      float: left;
      width: 60%;
      padding: 0 20px;
    }
    
    .right {
      background-color: #e5e5e5;
      float: left;
      width: 20%;
      padding: 15px;
      margin-top: 7px;
      text-align: center;
    }
    
    @media only screen and (max-width: 620px) {
      /* For mobile phones: */
      .menu, .main, .right {
        width: 100%;
      }
    }
    </style>
    </head>
    <body style="font-family:Verdana;color:#aaaaaa;">
    
    <div style="background-color:#e5e5e5;padding:15px;text-align:center;">
      <h2>Medizone Support</h2>
    </div>
    
    <div style="overflow:auto">
      
    
      <div class="main">
        <h3>Password Reset Notification</h3>
        <p>Your new password is :</p>
        <p style="color:red"><b>`+pass+`</b></p>
        <p>Please ignore this email if you did not request for a new password</p>
      </div>
    
      
    </div>
    
    <div style="background-color:#e5e5e5;text-align:center;padding:10px;margin-top:7px;">© copyright medizone.com</div>
    
    </body>
    </html>
    
    `
    
    var transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        service: 'outlook',
        secureConnection: false,
        auth: {
            user: 'medizonein@outlook.com',
            pass: 'medizone@2023'
        },
        tls: {
            ciphers:'SSLv3'
        } 
    });

    var mailOptions = {
        from: 'medizonein@outlook.com',
        to: email,
        subject: 'Medizone Password Reset!',
        html: text
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            response.send(utils.createResult(error, 'Password Reset Complete. Please check your email.'))
        }
    });
})



module.exports = router