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

        const anuncios = await Anuncio.find();

        res.json({results: anuncios})

    } catch (err) {
        next(err)
    }
})

//cuando reciba una peticion Get/api/anuncios/(id)
// Devuelve un anuncio en particular con su id 
router.get('/:id', async(req, res, next) => {
    try {
    const id = req.params.id;

    // buscar un anuncio en la base de datos 
    const anuncio = await Anuncio.findById(id);

    res.json({results: anuncio})
// POST /api/anuncios)

    } catch (error) {
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