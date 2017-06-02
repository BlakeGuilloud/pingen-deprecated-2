require('dotenv').config()

import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import express from 'express';

import v1Router from './routers/v1.router';

const app = express();
const db = process.env.MONGODB_URI;
const port = Number(process.env.PORT);

mongoose.Promise = global.Promise;

mongoose.connect(db);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/api/v1', v1Router);

app.listen(port, () => console.log('app listening on port: ', port));
