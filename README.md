# rest-basic by tamatamvan
A simple example for REST API implementation using **Node.JS 6, Express, Sequelize, PostgreSQL. **


## Technology
Here are some technologies that used and required to run this program. Make sure you've installed all of them on your machine.
* [Node.JS 6](https://nodejs.org/)
* [Express (NodeJS Framework)](http://expressjs.com/)
* [Sequelize (NodeJS ORM)](http://docs.sequelizejs.com/en/v3/)
* [PostgreSQL (SQL Database)](https://www.postgresql.org/)

## Running rest-basic on your machine
Here are some steps you've to follow for running this rest-basic API on your machine :
* `cd your_program_directory`
* `npm install` (Install all dependencies of this program)
* `npm start` (Run the node.js server on port 3000)

## API References

List off all routes :

|  Route | HTTP | Description |
|--------|------|-------------|
|http://localhost:3000/api/users/ | GET | Get all users list|
|http://localhost:3000/api/users/:id | GET | Get a single user's data|
|http://localhost:3000/api/users/ | POST | Create a new user|
|http://localhost:3000/api/users/:id | DELETE | Delete a user's data by a spesific id|
|http://localhost:3000/api/users/:id | PUT | Update a user's data by a spesific id|

## HTTP Request Examples

You can test the routes and see if the routes are giving a right reponses using curl or postman. However, we recommend you to use cURL as it's already installed on MacOSX and Linux system (If you're using Windows, it's been built-in git bash) and easy to use.

If you need to know more about cURL, you can access the manual by executing the `man curl` command on your command line console, or visit this [link](https://curl.haxx.se/docs/)

Here are users route curl's command examples to test this rest_basic api :

| Action | cURL's Command |
|--------|----------------|
| Get all users list | curl -X GET 'http://localhost:3000/api/users/' |
| Get a single user's data by spesific id | curl -X GET 'http://localhost:3000/api/users/:id' |
| Create a new user | curl -X POST 'http://localhost:3000/api/users/:id' -d 'name=your_name&username=your_username&password=your_password&email=your_email' |
| Delete a user's data by a spesific id | curl -X DELETE 'http://localhost:3000/api/users/:id' |
| Update a user's data by spesific id | curl -X POST 'http://localhost:3000/api/users/:id' -d 'name=your_new_name&username=your_new_username&password=your_new_password&email=your_new_email' |


## Contact
#### Developer/Projects
* Homepage: [TamaTamvan's Note](https://tamatamvan.web.id)
* e-mail: tama@tamatamvan.web.id
* Twitter: [@tamaadhi1](https://twitter.com/tamaadhi1 "tamaadhi1 on twitter")
* Facebook: [Septian Adhi Tama](https://facebook.com/light.akira21 "Septian Adhi Tama on Facebook")

## Contributor

[![TamaTamvan](https://tamatamvan.web.id/wp-content/uploads/2016/04/bner-e1463908127607.png)](https://tamatamvan.web.id)

Septian Adhi Tama &copy; 2016
