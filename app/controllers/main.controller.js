var Data = require('../models/datas')

module.exports = {
	showMain: showMain,
	postData: postData,
	getDatas: getDatas,
	getData: getData,
	editData: editData,
	deleteData: deleteData
}

function showMain(req, res) {
    res.send('Ini API nya!')
}

function postData(req, res) {
    var data = new Data()
    data.name = req.body.name
    data.species = req.body.species

    data.save(function(err) {
        if (err)
            res.send(err)

        res.send('data berhasil dibuat!')
    })
}

function getDatas(req, res) {
    Data.find(function(err, datas) {
        if (err)
            res.send(err)

        res.send(datas)
    })
}

function getData(req, res) {
    Data.findById(req.params.id, function(err, data) {
        if (err)
            res.send(err)

        res.send(data)
    })
}

function editData(req, res) {
    Data.findById(req.params.id, function(err, data) {
        if (err)
            res.send(err)

        data.name = req.body.name
        data.species = req.body.species

        data.save(function(err) {
            if (err)
                res.send(err)

            res.send('data berhasil diupdate!')
        })
    })
}

function deleteData(req, res) {
    Data.remove({
        _id: req.params.id
    }, function(err, data) {
        if (err)
            res.send(err)

        res.send('data berhasil didelete!')
    })
}
