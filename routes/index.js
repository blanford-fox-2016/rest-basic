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

router.get('/api/users', userController.read);

router.get('/api/users/:id', userController.readOne);

router.post('/api/users', userController.create);

router.put('/api/users/:id', userController.update);

router.delete('/api/users/:id', userController.destroy);

module.exports = router;
