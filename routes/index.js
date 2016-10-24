var express = require('express');
var router = express.Router();
var models = require('../models')
var Users = models.Users

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/users', (req, res, next) => {
  Users.findAll({
    order: 'id DESC'
  }).then((users) => {
    res.json(users)
  }).catch((err) => {
    if(err){
      console.log(err);
    }
  })
})

router.get('/api/users/:id', (req, res, nex) => {
  Users.findOne({
    where: {
      id : req.params.id
    }
  }).then((user) => {
    res.json(user)
  }).catch((err) => {
    if(err){
      console.log(err);
    }
  })
})

router.post('/api/users', (req, res, next) => {
  Users.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    website:req.body.email
  }).then((user) => {
    console.log(`Insert new user success`);
    res.json(user)
  }).catch((err) => {
    if(err){
      console.log(err);
    }
  })
})

router.put('/api/users/:id', (req, res, next) => {
  Users.update({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    website:req.body.email
  }, {
    where: {
      id : req.params.id
    }
  }).then((user) => {
    console.log(`Updated success`);
    res.json(user)
  }).catch((err) => {
    if(err){
      console.log(err);
    }
  })
})

router.delete('/api/users/:id', (req, res, nex) => {
  Users.destroy({
    where: {
      id: req.params.id
    }
  }).then((user) => {
    console.log(`User deleted`);
    res.json(user)
  }).catch((err) => {
    console.log(err);
  })
})

module.exports = router;
