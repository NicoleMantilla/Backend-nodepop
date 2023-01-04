'use strict'

const express = require('express')
const createError = require('http-errors')
const router = express.Router()
const Anuncio = require('../../models/Anuncio');

//CRUD
// GET /api/anuncios
//devuelve la lista de anuncios
router.get ('/', async (req, res, next) => {
    try {
        const nombre = req.query.nombre;
        const tags = req.query.tags;
        const venta = req.query.venta;
        const precio = req.query.precio;
        //paginacion 
        const skip = req.query.skip;
        const limit = req.query.limit;
        const sort = req.query.sort;


        const objfiltro = {};


        if (nombre) {
            objfiltro.nombre = nombre; //api/anuncios?nombre=lampara LED
        }
        if (tags) {
            objfiltro.tags = tags;//api/anuncios?tags=lifestyle
        }
        if (venta) {
            objfiltro.venta = venta;//api/anuncios?venta=false
        }
        if (precio) {
            if (precio.includes('-')){
              let precioArr = precio.split('-');
              filter.precio = {};
              if (precioArr[0]){
                filter.precio['$gte'] = precioArr[0];
              }
              if (precioArr[1]){
                filter.precio['$lte'] = precioArr[1];
              }
            }else{
              filter.precio = precio;
            }
          }

        const anuncios = await Anuncio.listar(objfiltro, skip, limit, sort);
        res.json({ results: anuncios })
    } catch (errr) {
        next(errr)
    }
})

// GET /api/anunci

//cuando reciba una peticion Get/api/anuncios/(id)
// Devuelve un anuncio en particular con su id 
router.get('/:id', async(req, res, next) => {
    try {
    const id = req.params.id;

    // buscar un anuncio en la base de datos 
    const anuncio = await Anuncio.findById(id);

    res.json({results: anuncio})
// POST /api/anuncios)

    } catch (err) {
        next(err)
        
    }
});


// Actualizar un anuncio
router.put('/:id', async (req, res, next) => {
    try {
  
      const id = req.params.id;
      const anuncioDato = req.body;
  
      const anuncioActualizado = await Anuncio.findOneAndUpdate({ _id: id}, anuncioDato, {
        new: true // esto hace que nos devuelva el documento actualizado
      });
  
      res.json({ result: anuncioActualizado });
  
    } catch (err) {
      next(err);
    }
  });
  
  // Crear un anuncio POST /api/anuncios (body=anuncioData)
  router.post('/', async (req, res, next) => {
    try {
  
      const anuncioDato = req.body;
  
      const anuncio = new Anuncio(anuncioDato);
  
      const anuncioGuardado = await anuncio.save();
  
      res.json({ result: anuncioGuardado });
  
    } catch (err) {
      next(err);
    }
  });

  // Eliminar un anuncio DELETE /api/anuncio/:id

router.delete('/:id', async (req, res, next) => {
    try {
  
      const id = req.params.id;
  
      const anuncio = await Anuncio.findById(id);
  
      if (!anuncio) {
        return next(createError(404));
      }
  
      await Anuncio.deleteOne({ _id: id });
  
      res.json();
  
    } catch (err) {
      next(err);
    }
  });
module.exports = router;
