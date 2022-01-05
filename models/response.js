//this going aid in fetchig for the data
//Requiring mongoose package
var mongoose=require("mongoose");

// Schema
var responseSchema = new mongoose.Schema({
	name : 'String',
	comment:String,
	rating: Number
});

module.exports=mongoose.model("Feedbacks", responseSchema);