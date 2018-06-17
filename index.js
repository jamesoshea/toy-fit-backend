const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const secrets = require('./config');

mongoose.connect(
	`mongodb://${secrets.user}:${
		secrets.password
	}@ds261540.mlab.com:61540/toy-fit`,
);

const app = express();
const router = require('./router');
app.use('/', router);

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

app.use(express.json());

app.listen(3001, () => console.log('Example app listening on port 3000!'));
