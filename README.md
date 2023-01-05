# Backend-nodepop
<div align="center">
  <a href="https://github.com/NicoleMantilla/Backend-nodepop">
    <img src="https://i.pinimg.com/564x/bf/fd/5d/bffd5d635ba2bdb7dd97cd2a9981c816.jpg" alt="Logo">
  </a>
</div>
App for Backend module with Node.js and MongoDB, Buy and sell ads application for users.


## Como arrancamos la base de datos en Linux y en Mac
./bin/mongod --dbpath ./datapop


# NODEPOP

deploy:

```sh
npm install 
```

start the app in production with: 

```sh
npm start 
```
start the app in development with: 

```sh
npm run developer 
```
## AUTENTICATE

Name: admin 
Password: 1234


## DATE BASE 

```sh
use nodepop
```



## API Documentation 

Advertisement list:

GET / api/ anuncios

{
    "results":[
        {
            "_id":"63b30072fc80ccd3b79d8e1e",
            "nombre":"apple macbook pro 16",
            "venta":true,
            "foto":"apple.jpg",
            "tags":["lifestyle","work"
            ]
            }
            
 ## Examples routers page
 
* http://localhost:3000/anuncios

Home, show all advertiesment, for this URL. We can aplly filters and pagination.

filter examples:
* http://localhost:3000/api/anuncios?nombre
* http://localhost:3000/api/anuncios?sort=-precio&limit=2&skip=1
* http://localhost:3000/api/anuncios?fields=nombre
* http://localhost:3000/api/anuncios?tags=lifestyle&venta=false

