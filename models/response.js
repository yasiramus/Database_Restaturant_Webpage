//this going aid in fetchig for the data
//Requiring mongoose package
var mongoose=require("mongoose");

// Schema
var responseSchema = new mongoose.Schema({
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

module.exports=mongoose.model("Feedbacks", responseSchema);