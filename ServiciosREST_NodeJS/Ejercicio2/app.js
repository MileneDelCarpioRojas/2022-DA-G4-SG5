const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.listen('3000',()=>{
    console.log("Servidor en Ejecucion");
})

const estudianteRouter = require('./routes/estudiante');
app.use('/api',estudianteRouter);