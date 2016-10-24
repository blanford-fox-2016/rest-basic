'use strict'
let express = require('express');
let router = express.Router();
let models = require('../models');
let user = models.user;
let Sequelize = require('sequelize');
let userController = require('../controllers/userController.js')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
