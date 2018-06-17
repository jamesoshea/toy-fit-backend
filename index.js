const express = require('express');
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

app.listen(3001, () => console.log('Example app listening on port 3001!'));
