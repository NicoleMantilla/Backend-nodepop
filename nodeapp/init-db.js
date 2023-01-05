'use strict';

//Hacer un script de inicialización de la base de datos de la aplicación.

const readline = require('readline');

//cargo los modelos
const Anuncio = require('./models/Anuncio');

async function main() {
    //preguntar al usuario si quiere borrar la base de datos
    const continuar = await preguntaSiNo('Estas seguro, seguro, seguro, que quieres borrar la base de datos? [n]')
    if (!continuar) {
      process.exit();
    }
  // conectar a la base de datos
  const connection = require('./lib/connectMongoose')

  await initAnuncios();
  //desconectamos de la base de datos 
  connection.close();

}

main().catch(err => console.log(`Ha ocurrido un error`, err));

async function initAnuncios() {
    //borrar toda la coleccion de anuncios
 const result = await  Anuncio.deleteMany();
 console.log(`Borrado ${result.deletedCount} anuncios.`);
 //crear anuncios iniciales 
 const inserted = await Anuncio.insertMany([
    {nombre: 'auriculares',
    venta: false,
    precio: "30.00",
    foto : "auriculares.jpg",
	tags : [ "lifestyle", "work" ]
 }

 ]);
 console.log(`Agregados ${inserted.lenght} anuncios.`)

}

function preguntaSiNo(texto) {
    return new Promise((resolve, reject) => {
      const inter = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      inter.question(texto, respuesta => {
        inter.close();
        if (respuesta.toLowerCase() === 'si') {
          resolve(true);
          return;
        }
        resolve(false);
      })
    })
  }