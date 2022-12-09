const express = require('express');
const jwt= require('jsonwebtoken');
const app= express();

app.get('/api',(req,res)=>{
    res.json({
        mensaje:"Principal"
    });
});
app.post('/api/entrada1/post', (req,res)=>{
    res.json({
        mensaje:"Entrada 1"
    });
});

app.post ('/api/entrada2/login', (req,res)=>{
    const usuario={
        codigo:111,
	nombre: Milene
    }

    jwt.sign({usuario},'secretkey',{expiresIn:'30s'},(err,token)=>{
        res.json({
            token
        });
    });
 	jwt.verify(token,'secretKey',(err,res)=>{
        res.json({
            mensaje:"verificacion de token"
        });

});

app.post('/api/entrada2/post', (req,res)=>{
    res.json({
        mensaje:"Entrada 2"
    });
});

app.post('/api/entrada1/login', (req,res)=>{
    const usuario={
        codigo:222,
	usuario: Braulio
    }

    jwt.sign({usuario},'secretkey',{expiresIn:'30s'},(err,token)=>{
        res.json({
            token
        });
    });
 	jwt.verify(token,'secretKey',(err,res)=>{
        res.json({
            mensaje:"verificacion de token"
        });

});

app.listen(5000,()=>console.log("servidor en 5000"));