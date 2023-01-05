# Backend-nodepop
Applicación para el curso de Backend con Node.js y MongoDB, que contiene anuncios de venta y compra de usuarios. 

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
