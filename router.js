const express = require('express');
const cors = require('cors');

const router = express.Router();

const DateStatus = require('./models/DateStatus');

router.use(express.json());
router.use(cors());

router.get('/api/dateStatuses', (req, res) => {
	DateStatus.find((err, result) => {
		if (err) {
			res.sendStatus(500);
			return;
		}
		if (result) {
			res.status(200).json(result);
			return;
		}
		res.status(404).send({ message: 'no entries found' });
		return;
	});
});

router.get('/api/dateStatus/:dateString', (req, res) => {
	DateStatus.where({
		dateString: req.params.dateString,
	}).findOne((err, result) => {
		if (err) {
			res.sendStatus(500);
			return;
		}
		if (result) {
			res.status(200).json(result);
			return;
		}
		res.status(404).send({ message: 'you have already submitted today :)' });
		return;
	});
});

router.post('/api/dateStatus', (req, res) => {
	DateStatus.where({
		dateString: req.body.dateString,
	}).findOne((err, result) => {
		if (err) {
			res.sendStatus(500);
			return;
		}
		if (result) {
			res.sendStatus(400);
			return;
		}
		DateStatus.create(
			{
				dateString: req.body.dateString,
				cycle: req.body.cycle,
				strength: req.body.strength,
				hiit: req.body.hiit,
				lowCarbs: req.body.lowCarbs,
				noAlcohol: req.body.noAlcohol,
				noSmoking: req.body.noSmoking,
			},
			(err, newDateStatus) => {
				if (err) {
					res.sendStatus(500);
					return;
				}
				res.sendStatus(200);
				return;
			},
		);
	});
});
module.exports = router;
