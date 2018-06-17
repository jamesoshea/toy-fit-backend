const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const DateSchema = new mongoose.Schema({
	dateString: {
		type: String,
	},
	cycle: {
		type: Boolean,
	},
	lowCarbs: {
		type: Boolean,
	},
	hiit: {
		type: Boolean,
	},
	strength: {
		type: Boolean,
	},
});

api.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('dateStatuses', (req, res) => {
	res.send('hello from GET dateStatuses');
});

app.get('dateStatus', (req, res) => {
	res.send('hello from GET dateStatus');
});

app.post('dateStatus', (req, res) => {
	res.send('hello from POST dateStatus');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
