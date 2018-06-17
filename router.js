var express = require('express');
var router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'));

router.get('/dateStatuses', (req, res) => {
	res.send('hello from GET dateStatuses');
});

router.get('/dateStatus', (req, res) => {
	res.send('hello from GET dateStatus');
});

router.post('/dateStatus', (req, res) => {
	res.send('hello from POST dateStatus');
});
module.exports = router;
