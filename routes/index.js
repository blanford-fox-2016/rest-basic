var express = require('express');
var router = express.Router();
var model = require('../models');
var user = model.User;
var users_controller = require('../controller/users_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// Get all the users
// /api/users
router.get('/api/users', users_controller.getAllUsers );

// Get a user
// /api/users/:id
router.get('/api/users/:id', users_controller.getUserById);

// create a user
// /api/users
router.post('/api/users', users_controller.addNewUser);

// Update a user with new info
// /api/users/:id
router.put('/api/users/:id', users_controller.updateUserById);

// Delete a user
// /api/users/:id
router.delete('/api/users/:id', users_controller.deleteUserById);






module.exports = router;
