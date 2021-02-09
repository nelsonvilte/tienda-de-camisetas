var express = require('express');
    router = express.Router(),
    mongoose = require('mongoose');

module.exports = function(app){
   app.use('/', router);
};

router.get('/agregar', function(peticion, respuesta){
    respuesta.render('agregar');
});

router.post('/agregar', function(peticion, respuesta){

    var nuevoRegistro = new Camisetas({
        color: peticion.body.color,
        precio: peticion.body.precio,
        descripcion: peticion.body.descripcion,
        imagen: peticion.body.imagen,
    });

    nuevoRegistro.save();

    respuesta.redirect('/tienda');
});


