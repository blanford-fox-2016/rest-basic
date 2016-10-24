var express = require('express');
var router = express.Router();
var models = require('../models')
var user = models.User
var controller = require('../controller/controller')


/* GET users listing. */
router.get('/', controller.getUser)
router.get('/:id', controller.getSingleUser)

/* POST new user*/
router.post('/', controller.createUser)

/* DELETE an user*/
router.delete('/:id', controller.deleteUser)

/* UPDATE an user*/
router.put('/:id', controller.updateUser)



module.exports = router;
