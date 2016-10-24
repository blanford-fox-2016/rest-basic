# REST-BASIC
rest-basic exercise with Node.js, Express, PostgreSQL & Sequelize

## Preparation
Initialize express on root directory
> express .

call packages from `package.json`

> npm install

call additional packages (PostgreSQL & Sequelize)

> npm install --save pg pg-hstore sequelize sequelize-cli

you can also use `nodemon` to easily your route editing

> npm install --save nodemon

for convenience showing `json` data, you might like to install `prettyjson`

> npm install -g prettyjson

for linux :
> sudo npm install -g prettyjson

## Database Initialization

Initialize sequelize on folder
>sequelize init

this operation will add many files including `config.json`
edit `config.json` database and dialect to

```
{
    "development": {
        "username": "postgres",
        "password": "password",
        "database": "restbasic",
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "test": {
        "username": "postgres",
        "password": "password",
        "database": "restbasic",
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "production": {
        "username": "postgres",
        "password": "password",
        "database": "restbasic",
        "host": "127.0.0.1",
        "dialect": "postgres"
    }
}
```
create a model on sequelize then migrate it to test our database configuration
> sequelize model:create --name User --attributes username:string,email:string,website:string
> sequelize db:migrate

## API Routes
Route | HTTP | Description |
------|------|------------|
`localhost:3000/api/users` | GET | Get all user data
`localhost:3000/api/users/:id` | GET | Get spesific user by id
`localhost:3000/api/users` | POST | Create new user
`localhost:3000/api/users/:id` | DELETE | Delete one user by id
`localhost:3000/api/users/:id` | PUT | Edit user by id

## Contributors
Copyright 2016 ahyanarizky
