# rest-basic

## install global
npm install -g sequelize-cli
npm install -g express-generator

## generate express
express -e (ejs format)
npm install

## make models
sequelize init

## install sequelize
npm install --save sequelize

## install postgre sql
npm install --save pg

## routing
| Routes          | HTTP           | Description  |
| --------------- |:-------------:| -----:|
| /api/users      | GET    | Get all the users
| /api/users/:id  | GET    | Get single users
| /api/users      | POST   | Create a user
| /api/users      | DELETE | Delete a user
| /api/users      | PUT    | Update a user with new info

## curl command
| Method          | curl command                                                                                                                                     |
| --------------- | --------------- |
| View User         | curl -X GET http://localhost:3000/api/users |
| View Single User  | curl -X GET http://localhost:3000/api/users/IDUSER |
| Add               | curl -X POST http://localhost:3000/api/users -d "username='USERNAME'&firstname='FIRSTNAME&lastname='lastname'&email=email@gmail.com'&phone='phone"|
| Update            | curl -X POST http://localhost:3000/api/users/IDUSER -d "username='USERNAME'&firstname='FIRSTNAME&lastname='lastname'&email=email@gmail.com'&phone='phone"|
| Delete            | curl -X DELETE http://localhost:3000/api/users/IDUSER |