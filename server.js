const path = require('path');
const dotenv = require('dotenv');
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(express.static(path.resolve(__dirname, './build')));
app.use(cors())
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is online on port: ${PORT}`)
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

// Middleware pour autoriser les requêtes CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.post("/sendemail", bodyParser.urlencoded({ extended: false }), (req, res) => {
const name = req.body.name;
const email = req.body.email;
const message = req.body.message;

const mail = {
    from: email,
    to: "denmax96@gmail.com",
    subject: "Message from Portfolio Contact Form",
    html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>`,
};

    contactEmail.sendMail(mail, (error) => {
    if (error) {
        res.json(error);
    } else {
        res.json({ code: 200, status: "Message envoyé!" });
    }
    });
});
