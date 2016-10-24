'use strict';

const models = require('../models');
const User = models.User;


module.exports = {
  showAll : (req, res) => {
    User.findAll().then(data => {
      res.json(data);
    });
  },
  findById : (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    }).then((data) => {
        res.json(data);
    });
  },
  addUser : (req, res) => {
    User.create({
      username : req.body.username,
      password : req.body.password,
      email : req.body.email
    }).then((data) => {
      res.json(data)
    });
  },
  destroyUser : (req, res) => {
    User.destroy({
      where: {
        id : req.params.id
      }
    }).then(() => {
      res.send("It's been deleted")
    });
  },
  updateUser : (req, res) => {
    User.update({
      username: req.body.username,
      password: req.body.password,
      email : req.body.email
    }, {
      where : {
        id : req.params.id
      }
    }).then(() => {
      console.log("it's been inserted");
    });
  }
}
