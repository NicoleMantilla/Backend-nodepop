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


module.exports = router;