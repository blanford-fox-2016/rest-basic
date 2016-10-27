//grab all dependencies
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	router = express.Router(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose')

//configure app
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
mongoose.connect('mongodb://tevinstein:tevinstein@ds041506.mlab.com:41506/datas')

//set routes
app.use(require('./app/routes'))

//start server
app.listen(port)
console.log('Ya udah jalan di port: ' + port)