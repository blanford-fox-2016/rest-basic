'use strict';
// ==================================
// Requiring Dependencies
// =================================
const express = require('express');
const bodyParser = require('body-parser'); // take the data from body
const morgan = require('morgan'); // logging data
const cors = require('cors');

// ==================================
// Connecting to Database
// =================================

const models = require('./models');
const User = models.User;

// ==================================
// Initial Setup
// =================================

let router = express.Router();
let app = express();
let port = process.env.PORT || 5000;


// ==================================
// Configure the Apps
// ==================================

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// ==================================
// SET THE END POINT
// ==================================

router.get('/users', (req, res) => {
    User.findAll().then(data => {
        res.json(data);
    });
});

router.get('/users/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    }).then((data) => {
        res.json(data);
    });
});

router.post('/users', (req, res) => {
  User.create({
    username : req.body.username,
    password : req.body.password,
    email : req.body.email
  }).then((data) => {
    res.json(data)
  })
});

router.delete('/users/:id', (req, res) => {
  User.destroy({
    where: {
      id : req.params.id
    }
  }).then(() => {
    res.send("It's been deleted")
  })
});

router.put('/users/:id', (req, res) => {
  User.update({
    username: req.body.username,
    password: req.body.password,
    email : req.body.email
  }, {
    where : {
      id : req.params.id
    }
  });
});

// ==================================
// SET THE APP ROUTES
// ==================================

app.use('/api', router)
app.listen(port, () => {
    console.log('listen on the port ', port);
});
