// Creando objetos de librerías importadas
const express = require('express');
const appRouter = express.Router();
var bodyParser = require('body-parser');

const con = require("../config/connection");

// Configurando el Parser(conversor) de formato HTTP a formato JSON
appRouter.use(bodyParser.urlencoded({
    extended:true
}));
appRouter.use(bodyParser.json());

// Creando y configurando API para recuperar datos con Procedimiento Almacenado
let sql_all = `call listar_integrantes()`;

appRouter.get('/integrantes', (req,res)=>{
    console.log("Esto solo para demostrarme que se ejecuto este get");
    con.query(sql_all,(error, results)=>{
        if(error) throw error;

        res.send(results[0]);
    });
});


// Creando y configurando API para insertar datos con Procedimiento Almacenado

let sql_insert = `call insertar_integrantes(?,?,?)`;


appRouter.post('/insertintegrantes', (req,res)=>{
    const integrantes = {
        pNumero : req.body.numero,
        pNombre : req.body.nombre,
        pApellido : req.body.apellido,
    };
    con.query(sql_insert,[integrantes.pNumero,  integrantes.pNombre, integrantes.pApellido]
        ,(error, results)=>{
            if(error) throw error;

            res.send(results[0]);
        });
});

module.exports = appRouter;
