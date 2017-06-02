require('dotenv').config()

import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import express from 'express';

const app = express();

import accountRoutes from './routers/Account.router';

const db = process.env.MONGODB_URI || 'mongodb://localhost/testing';
const port = process.env.PORT || 8100;

mongoose.Promise = global.Promise;

mongoose.connect(db);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/accounts', accountRoutes);

app.listen(port, () => console.log('app listening on port: ', port));
