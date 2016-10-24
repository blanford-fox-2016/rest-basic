var express = require('express');
var router = express.Router();
var models = require('../models')
var users = models.users

router.get('/', function(req, res, next){
  res.send('test')
})


/* GET users listing. */
router.get('/users', function(req, res, next) {
  users.findAll().then(function (user) {
    res.json(user)
    // res.send(user)
  }).catch(function (err) {
    res.send(err.message)
  })
});

router.get('/users/:id', function (req, res, next) {
  users.findAll({
    where: {
      id: req.params.id
    }
  }).catch(function (err) {
    res.send(err.message)
  }).then(function (user) {
    res.send(user)
    // res.send(user)
  })
})

router.post('/users', function (req, res, next) {
  users.create({
    email: req.body.email,
    first_name: req.body.first_name,
    last_name:req.body.last_name,
    birthday: new Date(req.body.birthday).toISOString()
  }).catch(function (err) {
    res.send(err.message)
  })
  .then(function (user) {
    res.send(user)
  })
})

router.delete('/users/:id', function (req, res, next){
  users.destroy({
    where: {
      id: req.params.id
    }
  }).catch(function(err){
    res.send(err.message)
  }).then(function(){
    res.send('Deleted')
  })
})

router.put('/users/:id', function(req,res,next){
  users.update({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    birthday: req.body.birthday,
    email: req.body.email,
  },{
    where:{
      id: req.params.id
    }
  }).catch(function(err){
    res.send(err.message)
  }).then(function(user){
    res.send('User id ' + user + ' updated')
  })
})



module.exports = router;
