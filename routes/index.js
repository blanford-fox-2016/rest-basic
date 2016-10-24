var express = require('express');
var router = express.Router();
var models = require('../models')
var Users = models.Users
var controller = require('../controller/controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/users', (req, res, next) => {
  controller.readAllData(req, res)
})

router.get('/api/users/:id', (req, res, nex) => {
  controller.readOneData(req, res, req.params.id)
})

router.post('/api/users', (req, res, next) => {
  controller.addData(req, res)
})

router.put('/api/users/:id', (req, res, next) => {
  controller.updateData(req, res, req.params.id)
})

router.delete('/api/users/:id', (req, res, nex) => {
  controller.deleteData(req, res, req.params.id)
})

module.exports = router;
