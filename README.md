# rest-basic
------------


## API Documentation

### User Routes:

Route | HTTP | Description
------|------|-----------
/api/users|GET|Get all the users
/api/users/:id|GET|Get a single users
/api/users|POST|Create a user
/api/users/:id|DELETE|Delete a user
/api/users/:id|PUT|Update a user with new info



## Directories
```
.
├── README.md
├── app.js
├── bin
│   └── www
├── config
│   └── config.json
├── migrations
│   └── 20161024044229-create-users.js
├── models
│   ├── index.js
│   └── users.js
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── routes
│   ├── api.js
│   ├── index.js
│   └── users.js
├── seeders
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade
```
