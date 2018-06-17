const mongoose = require('mongoose');

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
	noAlcohol: {
		type: Boolean,
	},
	noSmoking: {
		type: Boolean,
	},
});

module.exports = mongoose.model('DateStatus', DateSchema);
