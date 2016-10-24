var express = require('express');
var router = express.Router();
var models = require('../models')
var users = models.users
var controller = require('../controller/controller')

router.get('/', function(req, res, next){
  res.send('test')
})


/* GET users listing. */
router.get('/users', controller.userGetAll);

router.get('/users/:id', controller.userGetOne)

router.post('/users', controller.userCreate)

router.delete('/users/:id', controller.userDelete)

router.put('/users/:id', controller.userUpdate)



module.exports = router;
