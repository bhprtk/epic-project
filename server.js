import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.load();

import users from './routes/users';

let PORT = process.env.PORT || 3000;

let app = express();

const MONGOURL = process.env.MONGODB_URI || 'mongodb://localhost/epic-project';

mongoose.connect(MONGOURL, err => {
  console.log(err || `MongoDB connected to ${MONGOURL}`);
});


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/users', users);

app.listen(PORT, err => {
	console.log(err || `Server listening on port ${PORT}`);
});
