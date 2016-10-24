var models = require('../models')
var user = models.User

module.exports = {
  displayAll: function (req, res, next) {
    user.findAll({}).then(function (user) {
      res.json(user)
    });
  },
  displayOne: function (req, res, next) {
    user.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (user) {
      res.json(user)
    })
  },
  delete: function (req, res, next) {
    user.destroy({
      where: {
        id: req.params.id
      }
    }).then(res.send('data berhasil dihapus'))
  },
  create: function (req, res, next) {
    user.create({
      username: req.body.username,
      email: req.body.email
    }).catch(function (err) {
      console.log(err.message);
    }).then(res.send('berhasil'))
  },
  updateUser: function (req, res, next) {
    user.update({
      username: req.body.username,
      email: req.body.email
    }, {
      where: {
        id: req.params.id
      }
    }).then(res.send('data berhasil di update'))
  }
}
