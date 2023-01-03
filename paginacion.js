db.anuncios.find({})
   .sort({_id:-1})
   .skip(0).limit(10)