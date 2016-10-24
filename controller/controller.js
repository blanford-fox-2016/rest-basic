var models = require('../models')
var Users = models.Users

module.exports = {
  readAllData: function (req, res){
    console.log(`test`);
    Users.findAll({
      order: 'id DESC'
    }).then((users) => {
      res.json(users)
    }).catch((err) => {
      if(err){
        console.log(err);
      }
    })
  },
  readOneData: function(req, res, id){
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
  },
  addData: function(req, res){
    Users.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      website:req.body.website
    }).then((user) => {
      console.log(`Insert new user success`);
      res.json(user)
    }).catch((err) => {
      if(err){
        console.log(err);
      }
    })
  },
  updateData: function(req, res, id) {
    Users.update({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      website:req.body.website
    }, {
      where: {
        id : id
      }
    }).then((user) => {
      console.log(`Updated success`);
      res.json(user)
    }).catch((err) => {
      if(err){
        console.log(err);
      }
    })
  },
  deleteData: function(req, res, id) {
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
  }
}
