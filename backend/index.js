'use strict';

// Import packages and dependencies
const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors')
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const app = express();

// Parse middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static( path.join( __dirname )));

// Set up app routes
app.use('/api/fickr/feeds', require('./routes/feedRoute'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/errors', () => {
	throw new Error('Test exception');
});

app.get('/logs', (req, res) => {
	console.log('Hey, you triggered a custom log entry. Good job!');
	res.sendStatus(200);
});

// Set up port and start the server
// app.listen(process.env.PORT, process.env.IP);
app.listen( process.env.PORT, () => {
	console.log(`Server listening on port: ${process.env.PORT} | Press Ctrl+C to quit.`);
});

module.exports = app;