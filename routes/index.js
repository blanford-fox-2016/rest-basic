var express = require('express');
var router = express.Router();

var controller = require('../controller/controller')

// router.get('/', controller.getResource);
router.get('/api/users', controller.displayAll);
router.get('/api/users/:id', controller.displayOne);
router.post('/api/users', controller.create);
router.delete('/api/users/:id', controller.delete);
router.put('/api/users/:id', controller.updateUser);

// router.get('/:id', function(req, res, next) {
//   diary.destroy({where:{
//     id : req.params.id
//   }}).then(res.redirect('/diary'))
// });

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
