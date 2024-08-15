const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	console.log('pinged');
	res.send('Working');
});

app.post('/api/sendmail', (req, res) => {
	const { userEmail, mailBody } = req.body;
	const cart = req.body.cart;

	let cartHtml = `
	<h2 style="font-family: Arial, sans-serif; color: #333;">Your Walmart Cart</h2>
	<table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">
	  <thead>
		<tr style="background-color: #f2f2f2; text-align: left;">
		  <th style="padding: 12px; border-bottom: 1px solid #ddd;">Item</th>
		  <th style="padding: 12px; border-bottom: 1px solid #ddd;">Quantity</th>
		  <th style="padding: 12px; border-bottom: 1px solid #ddd;">Amount</th>
		  <th style="padding: 12px; border-bottom: 1px solid #ddd;">Aisle</th>
		</tr>
	  </thead>
	  <tbody>`;

	cart.forEach((item) => {
		cartHtml += `
		<tr>
		  <td style="padding: 12px; border-bottom: 1px solid #ddd;">${item.name}</td>
		  <td style="padding: 12px; border-bottom: 1px solid #ddd;">${
				item.quantity
			}</td>
		  <td style="padding: 12px; border-bottom: 1px solid #ddd;">${
				item.price * item.quantity
			}</td>
		  <td style="padding: 12px; border-bottom: 1px solid #ddd;">${
				item.aisle === undefined ? 'A1' : item.aisle
			}</td>
		</tr>`;
	});

	let sum = 0;
	cart.map((item) => (sum += item.price * item.quantity));

	cartHtml += `
	  </tbody>
	</table>
	<p style="font-family: Arial, sans-serif; color: #777; margin-top: 20px;">Thank you for shopping with us. Your Total cart price is <strong>$${sum}</strong>.</p>`;

	const transporter = nodemailer.createTransport({
		host: 'smtp-mail.outlook.com',
		port: 587,
		secure: false,
		auth: {
			user: process.env.USER,
			pass: process.env.PASS,
		},
		tls: {
			ciphers: 'SSLv3',
		},
	});

	const mailOptions = {
		from: 'prathamkhandelwal1320@outlook.com',
		to: userEmail,
		subject: 'Walmart Cart Summary',
		text: mailBody,
		html: cartHtml,
	};

	transporter
		.sendMail(mailOptions)
		.then((info) => {
			res.status(200).send('Email sent successfully');
			console.log('Email Sent Successfully');
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
