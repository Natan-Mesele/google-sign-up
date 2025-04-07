const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const authRoutes = require('./route/authRoutes');
app.use('/api/auth', authRoutes);

module.exports = app;