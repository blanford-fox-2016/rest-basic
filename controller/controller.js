'use strict'

var models = require('../models')
var user = models.User

module.exports = {
  getUser: function(req, res, next) {
    user.findAll({}).then(function(person) {
      res.json(person)
    })
  },
  getSingleUser:function (req, res, next) {
    user.findOne({
      where: {id:req.params.id}
    }).then(function(person){
      res.json(person)
    })
  },
  createUser: function(req, res, next) {
    user.create({
      username:req.body.username,
      email:req.body.email,
      website:req.body.website
    }).then(function(person){
      res.json(person)
    })
  },
  deleteUser: function(req, res, next) {
    user.destroy({
      where:{id:req.params.id}
    }).then(function(person){
      if (person) {
        res.json('delete successfull')
      } else {
        res.json('data not found')
      }
    })
  },
  updateUser: function(req, res, next) {
    user.findOne({
      where:{id:req.params.id}
    }).then(function(person){
      person.update({
        username:req.body.username,
        email:req.body.email,
        website:req.body.website
      }).then(function(data){
        if (data) {
          res.send('data updated')
        } else {
          res.send('not found')
        }
      })
    })
  }
}
