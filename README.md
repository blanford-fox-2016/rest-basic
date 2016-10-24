# rest-basic

The simple REST Application
The app that runs through your cli and delivers the result to your monitor. It can fundamentally do what any application does; create, read, update and destroy.

1. Main Features

Through this program, you can run the following command on CLI and see the changed on your db.


**UPDATE**
```
curl -X PUT http://localhost:5000/api/users/2 -d "username=whatever&password=whatever&email=whatever@yeah.com"
```
