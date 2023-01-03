'use strict'

const express = require('express')
const router = express.Router()
const Anuncio = require('../../models/Anuncio');

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

//cuando reciba una peticion Get/api/agentes/(id)
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
    

})



module.exports = router;