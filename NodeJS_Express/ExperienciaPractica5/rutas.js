/// ARCHIVO ESPECIALIZADO DE MANEJO DE RUTAS
// creando gestionador de rutas
var express = require('express');
var router = express.Router();
// Creando manejadores de rutas
router.get('/',function(req,res){
 res.send('Pagina principal de Alianza Lima');
})
router.get('/login',function(req,res){
 res.send('Iniciar sesion en la pagina de Alianza Lima');
})
router.get('/historia',function(req,res){
    res.send('Aqui puedes ver la historia de Alianza Lima');
   })
   router.get('/productos/compra',function(req,res){
    res.send('Aqui puedes comprar los productos oficiales de Alianza Lima');
   })
   module.exports = router;
