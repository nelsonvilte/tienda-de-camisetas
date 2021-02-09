var express = require('express');
    router = express.Router();
    mongoose = require('mongoose');
    Camisetas = mongoose.model('camisetas');

module.exports = function(app) {
    app.use('/', router);
}

router.get('/tienda', function(req, res, next){
    Camisetas.find(function(err, camisetas){
        if (err) return next(err);
            res.render('tienda', {
                titulo: 'La Tiendita',
                camisetas: camisetas
            });
    });

});

router.get('/tienda/comprar/:color' ,( req, res, next) =>{
    const color = req.params.color;
    
    Camisetas.find({ color: color}, (err, Camiseta) => {
        if (err) return next(err);
        unaCamiseta = Camiseta[0];
        res.render('comprar', {
            color: req.params.color,
            unaCamiseta: unaCamiseta
        });
    });
});

