import express from 'express';

import Company from '../models/Company';
import User from '../models/User';

let router = express.Router();

router.post('/addNewCompany', User.isLoggedIn, (req, res) => {
	console.log('req.user', req.user);
	Company.addNewCompany(req.body, req.user._id, (err, savedCompany) => {
		if(err) res.status(400).send(err);

		console.log('savedCompany', savedCompany);
	})
})

export default router;
