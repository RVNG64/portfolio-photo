"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var dotenv = require("dotenv");
var mongoose = require("mongoose");
dotenv.config();
// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING || '', {
    useUnifiedTopology: true,
});
// Define Mongoose schema for contact messages
var contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});
var Contact = mongoose.model('Contact', contactSchema);
var app = express();
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.post('/send', function (req, res) {
    var data = req.body;
    // Save contact message in the database
    var contact = new Contact({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
    });
    contact.save()
        .then(function () {
        // Send email
        var smtpTransport = nodemailer.createTransport({
            service: 'Gmail',
            port: 465,
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD
            }
        });
        var mailOptions = {
            from: data.email,
            to: 'herve.nguetsop@gmail.com',
            subject: "Message de ".concat(data.name),
            html: "\n          <p>".concat(data.name, "</p>\n          <p>").concat(data.email, "</p>\n          <p>").concat(data.subject, "</p>\n          <p>").concat(data.message, "</p>\n        ")
        };
        smtpTransport.sendMail(mailOptions, function (error, response) {
            if (error) {
                res.send(error);
            }
            else {
                res.send('Success');
            }
            smtpTransport.close();
        });
    })
        .catch(function (error) {
        res.send(error);
    });
});
app.listen(5000, function () {
    console.log('Server is running on port 5000');
});
