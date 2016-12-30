const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const pinRoutes = require('./lib/routes/pin.routes');
const apiRoutes = require('./lib/routes/api.routes');

const db = process.env.MONGODB_URI || 'mongodb://localhost/testing';
const port = process.env.PORT || 8100;

mongoose.connect(db);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static(__dirname));

app.use('/pin', pinRoutes);
app.use('/api', apiRoutes);

app.listen(port, () => console.log('app listening on port: ', port));
