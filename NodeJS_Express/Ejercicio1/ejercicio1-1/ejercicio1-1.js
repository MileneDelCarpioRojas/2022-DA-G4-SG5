// importar librería http
var http = require('http');

// crear servidor
var server = http.createServer();

// Creación de mensaje de respuesta cuando se reciba un solicitud
function mensaje(petic, resp){
    resp.writeHead(200,{'content-type':'text/plain'});
    resp.write('Uso de aplicacion basica con texto plano en NodeJS.');
    resp.end();
}
// asignando mensaje de respuesta al servidor
server.on('request',mensaje);

// levantando servidor en puerto 3000 y configurando mensaje de confirmación en la terminal

server.listen(3000,function(){
    console.log('Mensaje: La aplicaión funciona correctamente.');
});