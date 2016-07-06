import express from 'express';

let router = express.Router();

router.post('/register', (req, res) => {

	console.log('req.body', req.body);
	
	res.send();
})

export default router;
