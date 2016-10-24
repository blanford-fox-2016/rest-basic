var express = require('express');
var router = express.Router();
var models = require('../models')
var user = models.User


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Rest-Basic'});
});

module.exports = router;
