var express = require('express');
var router = express.Router();
var controller = require('../controler/controler')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//get all user/
router.get('/api/users', controller.getAll);
//get user
router.get('/api/users/:id',controller.getOne);
//delete user
router.delete('/api/users/:id',controller.deleteOne);
//create user
router.post('/api/users', controller.createOne);
//update user
router.put('/api/users/:id',controller.updateData);

module.exports = router;
