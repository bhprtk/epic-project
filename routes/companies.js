import express from 'express';

import Company from '../models/Company';
import User from '../models/User';

let router = express.Router();

router.post('/addNewCompany', User.isLoggedIn, (req, res) => {
	Company.addNewCompany(req.body, req.user._id, (err, savedCompany) => {
		if(err) res.status(400).send(err);

		res.send(savedCompany);
	})
})

router.get('/getAll', (req, res) => {
	Company.find({}, (err, companies) => {
		if(err) res.status(400).send(err);

		res.send(companies);
	})
})

// router.put('/editCompany')

export default router;
