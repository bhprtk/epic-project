import express from 'express';
import User from '../models/User';

let router = express.Router();

router.get('/getAll', (req, res) => {
	User.find({}, (err, users) => {
		if(err) res.status(400).send(err);

		res.send(users);
	}).select('-password');
})

router.post('/register', (req, res) => {
	User.register(req.body, (err, newUser) => {
		if(err) res.status(400).send(err);
		console.log('newUser in route', newUser);
		res.send();
	});
})

router.post('/signin', (req, res) => {
	User.signin(req.body, (err, token) => {
		if(err) res.status(400).send(err);
		res.cookie('accessTokenCookie', token).send(token);
	})
})

export default router;
