var admin = require("firebase-admin")
var serviceAccount = require ("./da-p14-key.json") //archivo con la clave generada
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://da-p14-default-rtdb.firebaseio.com/"
    //databaseURL generada con Realtime Database
});

var db = admin.database();
var ref = db.ref("server/data");
var usersREF = ref.child("nodejs");

usersREF.set({
    integrante1: 
    {
        codigo: "2020800992",
        nombre: "MILENE NICOLE DEL CARPIO ROJAS", 
        escuela:"Ingeniería de Sistemas",
        semestre: 06
    },

    integrante2: 
    {
        codigo: "22020801751",
        nombre: "BRAULIO JOSUE LOPEZ SEBASTIANI", 
        escuela:"Ingeniería de Sistemas",
        semestre: 06
    },

    integrante3: 
    {
        codigo: "2019205372",
        nombre: "ROSARIO MILAGROS SOTO SANCHEZ", 
        escuela:"Ingeniería de Sistemas",
        semestre: 06
    },

    integrante4: 
    {
        codigo: "2020803541",
        nombre: "GIULIANNO FERNANDO ZUÑIGA BALLON", 
        escuela:"Ingeniería de Sistemas",
        semestre: 06
    }
})



