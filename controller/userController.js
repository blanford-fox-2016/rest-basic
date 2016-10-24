var models = require('../models');
var user = models.User;

module.exports = {
  read : function(req, res, next) {
    user.findAll().then((data, err) => {
      res.json(data);
    })
  },
  readOne : function(req, res, next) {
    user.findOne({
      where : {
        id : req.params.id
      }
    }).then((data, err) => {
      res.json(data);
    })
  },
  create : function(req, res) {
    var data = {
      username : req.body.fullname,
      email : req.body.email,
      birthday : req.body.birthday
    };
    user.create(data).then(()=> {
      console.log("Data Created");
      res.send(data)
    })
  },
  destroy : function(req, res) {
    user.destroy({
      where : {
        id : req.params.id
      }
    }).then(()=>{
      console.log("Data Deleted");
      res.send("DATA DELETED")
    })
  },
  update : function(req, res) {
    user.update({
      username : req.body.username,
      email : req.body.email,
      birthday : req.body.birthday,
      updatedAt : new Date()
    }, {
      where : {
        id : req.params.id
      }
    }).then(()=>{
      console.log("Data Updated");
      res.send("DATA UPDATED")
    })
  }
}
