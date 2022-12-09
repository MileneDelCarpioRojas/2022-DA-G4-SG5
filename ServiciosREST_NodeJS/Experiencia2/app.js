const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.listen('3000',()=>{
    console.log("Servidor en Ejecucion llamada desde app.js");
})

const integrantesRouter = require('./routes/integrantes');
app.use('/api',integrantesRouter);
