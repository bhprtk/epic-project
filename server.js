import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

let PORT = process.env.PORT || 3000;

let app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.listen(PORT, err => {
	console.log(err || `Server listening on port ${PORT}`);
});
