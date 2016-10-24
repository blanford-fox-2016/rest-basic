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

### HTTP Request examples

* ##### POST
  curl -X POST http://localhost:3000/api/users -d "first_name=John&last_name=Doe&email=johndoe@example.com&birthday=yyyy-mm-dd"
* ##### GET (ALL)
  curl -X GET http://localhost:3000/api/users
* ##### GET (ID)
  curl -X GET http://localhost:3000/api/users/:id
* ##### DELETE
  curl -X DELETE http://localhost:3000/api/users/:id
* ##### UPDATE
  curl -X PUT http://localhost:3000/api/users/:id "first_name=Abc&last_name=Def&email=abcdef@abcdef.com&birthday=yyyy-mm-dd"


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
│   ├──3. index.js
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
