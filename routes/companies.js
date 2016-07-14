import express from 'express';

let router = express.Router();

router.post('/addNewCompany', (req, res) => {
	console.log('req.body', req.body);
})

export default router;
