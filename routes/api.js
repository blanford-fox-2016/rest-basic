var express = require('express');
var router = express.Router();
var models = require('../models');
var user = models.User;
var userController = require('../controller/userController.js')

/* GET home page. */
router.get('/', userController.read);

router.get('/:id', userController.readOne);

router.post('/', userController.create);

router.delete('/:id', userController.destroy);

router.put('/:id', userController.update);

router.get('/auth', userController.auth)

module.exports = router;
