//grab all dependencies
var express = require('express')
var app = express()
var	bodyParser = require('body-parser')
var	router = express.Router()
var	port = process.env.PORT || 3000
var	mongoose = require('mongoose')

//configure app
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//routes
router.get('/', function(req,res) {
	res.send('this is the API!')
})

//register routes to /api
app.use('/API',router)

//start server
app.listen(port)
console.log('The magics happen on port: ' + port)

//setup database
mongoose.connect('mongodb://ryan:1234@ds023105.mlab.com:23105/datas')
var Data = require('./server/models/data')

router.route('/users')

	.post(function(req,res){
		var data = new Data()
		data.name = req.body.name
		data.species = req.body.species

		data.save(function(err){
			if(err)
				res.send(err)

			res.send('data is succesfully made!')
		})
	})

	.get(function(req,res){
		Data.find(function(err,datas){
			if(err)
				res.send(err)

			res.send(datas)
		})
	})

router.route('/users/:id')

	.get(function(req,res){
		Data.findById(req.params.id, function(err, data){
			if(err)
				res.send(err)

			res.send(data)
		})
	})

	.put(function(req,res){
		Data.findById(req.params.id, function(err,data){
			if(err)
				res.send(err)

			data.name = req.body.name
			data.species = req.body.species

			data.save(function(err){
				if(err)
					res.send(err)

				res.send('data succesfully updated!')
			})
		})
	})

	.delete(function(req,res){
		Data.remove({
			_id: req.params.id
		}, function(err, data){
			if(err)
				res.send(err)

			res.send('data succesfully deleted!')
		})
	})
