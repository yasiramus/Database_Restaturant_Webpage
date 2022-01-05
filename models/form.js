//Requiring mongoose package
var mongoose = require("mongoose");

// Schema
var formSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	comment: {
		type: String,
		required: true
	},
	rating: Number
});

module.exports = mongoose.model("Feedback", formSchema);
