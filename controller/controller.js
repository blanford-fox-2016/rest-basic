var express = require('express');
var router = express.Router();
var models = require('../models')
var users = models.users
module.exports = {

  userGetAll : function(req, res, next) {
    users.findAll().then(function (user) {
      res.json(user)
      // res.send(user)
    }).catch(function (err) {
      res.send(err.message)
    })
  },
  userGetOne : function (req, res, next) {
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
  },
  userCreate : function (req, res, next) {
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
  },
  userDelete : function (req, res, next){
    users.destroy({
      where: {
        id: req.params.id
      }
    }).catch(function(err){
      res.send(err.message)
    }).then(function(){
      res.send('Deleted')
    })
  },
  userUpdate :  function(req,res,next){
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
  }

}
