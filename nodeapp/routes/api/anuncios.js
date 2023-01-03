const Anuncio = require('../../models/Anuncio');

Anuncio.find((err, anuncios) => {
    
    console.log(anuncios);
})
