import express from 'express';
import User from '../models/User';

let router = express.Router();

router.get('/getAll', (req, res) => {
	User.find({}, (err, users) => {
		console.log('users', users);
		if(err) res.status(400).send(err);

		res.send(users);
	}).select('-password');
})

router.post('/register', (req, res) => {
	console.log('req.body', req.body);
	User.register(req.body, (err, newUser) => {
		if(err) res.status(400).send(err);
		res.send(newUser);
	})
})

export default router;
