const express = require('express');
const router = express.Router();

const DateStatus = require('./models/DateStatus');

router.use(express.json());

router.get('/', (req, res) => res.send('Hello World!'));

router.get('/dateStatuses', (req, res) => {
	res.send('hello from GET dateStatuses');
});

router.get('/dateStatus', (req, res) => {
	// const cleanDate = `${req.body.date.getDate()}-${req.body.date.getMonth() +
	// 	1}-${req.body.date.getFullYear()}`;
	DateStatus.findOne({ dateString: cleanDate });
});

router.post('/dateStatus', async (req, res) => {
	const existsAlready = await DateStatus.where({
		dateString: req.body.date,
	}).findOne((err, result) => {
		if (err) {
			res.sendStatus(500);
		}
		return result;
	});
	if (existsAlready) {
		res.sendStatus(400);
		return;
	}
	DateStatus.create(
		{
			dateString: req.body.date,
			cycle: req.body.cycle,
			strength: req.body.strength,
			hiit: req.body.hiit,
			lowCarbs: req.body.lowCarbs,
			noAlcohol: req.body.noAlcohol,
			noSmoking: req.body.noSmoking,
		},
		(err, newDateStatus) => {
			if (err) {
				console.log('no');
				res.sendStatus(500);
			}
			res.sendStatus(200);
		},
	);
});
module.exports = router;
