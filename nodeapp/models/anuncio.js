'use strict';

const mongoose = require('mongoose');

// definimos el esquema
const anuncioSchema = mongoose.Schema({
  nombre: { type: String, index: true },
  venta: { type: Boolean, index: true },
  precio: { type: Number, index: true },
  foto: String,
  tags: { type: [String], index: true }
});


// creamos un método estático
anuncioSchema.statics.listar = function(objfiltro, skip, limit, sort, fields) {
  const query = Anuncio.find(objfiltro);
  query.skip(skip);
  query.limit(limit);
  query.sort(sort);
  query.select(fields);
  return query.exec()
};


// creamos el modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;