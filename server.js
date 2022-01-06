const express = require('express');
const cors = require('cors');

const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 9050;

//calling the form.js from the models
const Form = require('./models/form');
const Response = require('./models/response');

//middlewares
app.use(express.urlencoded({ extended: true }));
//serving static files
app.use(express.static('Public'));
//this allow us to have access to the request.body
app.use(express.json());
//third party middleware
app.use(cors());
//setting the ejs engine
app.set('view engine', 'ejs');

// Connecting to database using mongoose
mongoose.connect('mongodb://localhost:27017/Contact_Us', {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then((result) => {
	if(result){
		console.log("mongodb connected ");
	}
}).catch((err) => {
		console.log(err);
	});


app.get('/', (req, res) => {
	res.render('home', { title: 'Restaturant Landing Page' })
});

app.get('/contact', (req, res) => {
	res.render('contact', { title: 'contact us' })
});
// app.get('/result', (req, res) => {
// 	res.render('result',{title:'Form Submission',data:req.body})
// })

//creating form and submission
app.post("/", function (req, res,) {
	const formData = {
		name: req.body.name,
		comment: req.body.comment,
		rating: req.body.rating
	}
	Form.create(formData, function (err) {
		if (err) {
			throw err;
		}
		// else {
		// 	res.redirect('/result')
		// }
	});
	console.log(req.body)
	res.render("result", {title:'Form Submission', data:req.body});
});

//fetching data
app.get("/output", (req, res) => {
	Response.find({}, function (err, form) {
		if (err) {
			console.log(err)
		};
		if (form) {
			res.render('output', { title: 'About session', formList: form })
		};
	})
});

//error page
app.use((req, res) => {
	res.render('404', { title: "404" })
})

app.listen(PORT, () => {
	console.log(`server listening on ${PORT}`)
})