const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Working');
});

app.get('/api/sendmail', (req, res) => {
	const { userEmail, mailBody } = req.body;
	// Create a transporter using Outlook's SMTP settings
	const transporter = nodemailer.createTransport({
		host: 'smtp-mail.outlook.com',
		port: 587,
		secure: false, // Use TLS
		auth: {
			user: process.env.USER,
			pass: process.env.PASS,
		},
		tls: {
			ciphers: 'SSLv3',
		},
	});

	// Define the email options
	const mailOptions = {
		from: 'prathamkhandelwal1320@outlook.com',
		to: userEmail,
		subject: 'Walmart Cart Summary',
		text: mailBody,
	};

	// Send the email
	transporter
		.sendMail(mailOptions)
		.then((info) => {
			res.send('Email sent successfully');
		})
		.catch((error) => {
			console.error('Error sending email:', error);
			if (error.response) {
				console.error('SMTP error:', error.response);
			}
		});
});

app.listen(8080, (req, res) => {
	console.log('server is listening on 8080');
});
