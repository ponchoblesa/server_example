var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var exampleSchema = new Schema({
	title: 				String,
	description: 		String
});

module.exports = mongoose.model('example', exampleSchema);