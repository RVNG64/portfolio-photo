"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var dotenv = require("dotenv");
var mongoose = require("mongoose");
var path = require('path'); // Ajout pour servir les fichiers statiques
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

// Ajout pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'build')));

app.post('/send', function (req, res) {
    // Votre code existant...
});

// Ajout pour toutes les autres routes, renvoyez le fichier index.html de l'application React
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

// Utilisation de la variable d'environnement PORT si elle est disponible (comme dans Heroku), sinon port 5000
var PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});
