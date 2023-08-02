const nodemailer = require("nodemailer");
require('dotenv').config();

const smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    requireTLS: true,
    auth: {
        user: 'ankit@alobhatechnologies.com',
        pass: 'Alobha@#45'
    }
});


module.exports = smtpTransport;