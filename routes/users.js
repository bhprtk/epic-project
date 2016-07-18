import express from 'express';
import User from '../models/User';

let router = express.Router();

router.get('/getAll', (req, res) => {
	User.find({}, (err, users) => {
		if(err) res.status(400).send(err);

		res.send(users);
	}).select('-password');
})

router.get('/getAllUsers', User.isLoggedIn, (req, res) => {
	User.find({}, (err, users) => {
		if(err) res.status(400).send(err);
		users = users.filter(user => {
			return (!user._id.equals(req.user._id));
		})
		res.send(users);
	})
})

router.post('/register', (req, res) => {
	User.register(req.body, (err, newUser) => {
		if(err) res.status(400).send(err);
		res.send();
	});
})

router.post('/signin', (req, res) => {
	User.signin(req.body, (err, token) => {
		if(err) return res.status(400).send(err);
		res.cookie('epicAccessToken', token).send('Log in successful');
	})
})

router.delete('/logout', (req, res) => {
	res.clearCookie('epicAccessToken').send('Logout Successful');
})

router.get('/currentUser', User.isLoggedIn, (req, res) => {
	res.send(req.user);
})

router.get('/getOneUser/:userId', (req, res) => {
	User.findById(req.params.userId, (err, user) => {
		if(err) res.status(400).send(err);
		res.send(user);
	}).select('-password');
})

router.put('/updateUser', User.isLoggedIn, (req, res) => {
	User.updateUser(req.user._id, req.body, (err, updatedUser) => {
		if(err) return res.status(400).send(err);
		res.send(updatedUser);
	})
})

export default router;
