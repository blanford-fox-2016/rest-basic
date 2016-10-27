const express = require('express'),
    router = express.Router(),
    mainController = require('./app/controllers/main.controller')

module.exports = router

//routes
router.get('/api', mainController.showMain)

router.route('/api/datas')

	.post(mainController.postData)

	.get(mainController.showDatas)

router.route('/api/datas/:id')

	.get(mainController.showData)

	.put(mainController.editData)

	.delete(mainController.deleteData)