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

const controller = require('./controller/controller');

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

router.get('/users', controller.showAll);
router.get('/users/:id', controller.findById);
router.post('/users', controller.addUser);
router.delete('/users/:id', controller.destroyUser);
router.put('/users/:id', controller.updateUser);

// ==================================
// SET THE APP ROUTES
// ==================================

app.use('/api', router)
app.listen(port, () => {
    console.log('listen on the port ', port);
});
