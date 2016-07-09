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
	console.log('req.user in signin', req.user);
	console.log('req.cookies before User.signin', req.cookies);

// todo: make user signin only sign in one user
// learn how to add emojis

	User.signin(req.body, (err, token) => {
		if(err) return res.status(400).send(err);
		res.cookie('epicAccessToken', token).send('Log in successful');
	})
})

router.delete('/logout', (req, res) => {
	console.log('req.cookies', req.cookies);
	res.clearCookie('epicAccessToken').send();
})

router.get('/currentUser', User.isLoggedIn, (req, res) => {
	console.log('req.user in currentUser', req.user);
})

export default router;
