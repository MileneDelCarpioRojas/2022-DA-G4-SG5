// Creando objetos de librerías importadas
var express = require('express');
var app = express();
var mysql = require('mysql2');
var bodyParser = require('body-parser');

// Cargando parámetros de Conexion con la BD
var connection = mysql.createConnection({
    host:'localhost',
    database:'sistemas',
    port:'3306',
    user:'root',
    password:'clavenueva',
});

// Conectarse a la BD y manejar errores
connection.connect(function(err){
    if(err) throw err;
    console.log("Se conecto a la BD llamada desde index.js");
});

// Configurando el Parser(conversor) de formato HTTP a formato JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

// Creando Servidor
var server = app.listen(3000,"127.0.0.1",function(){
    var host = server.address().address;
    var port = server.address().port;
});

// Creando y configurando API para recupera datos de sistemas/integrantes
app.get('/integrantes',function(req, res){
    connection.query('select * from integrantes', function(error,results){
        if(error) throw error;
        res.end(JSON.stringify(results));
    })
});

// Creando y configurando API para recupera datos de sistemas/integrantes en base a numero
app.get('/integrantes/:numero',function(req, res){
    connection.query('select * from integrantes where numero=?', [req.params.numero],function(error,results){
        if(error) throw error;
        res.end(JSON.stringify(results));
    })
});
