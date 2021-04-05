const express = require('express');
const cors = require('cors');

const app = express();
const cron = require('node-cron');
const createRandomData = require('./cron');

// Settings
app.set('port', process.env.PORT);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api/scores', require('./routes/scores'));
app.use('/api/players', require('./routes/players'));

// Feed initial data for avoiding empty scorelist
createRandomData();
// Cron
cron.schedule('*/5 * * * *', createRandomData);

module.exports = app;
