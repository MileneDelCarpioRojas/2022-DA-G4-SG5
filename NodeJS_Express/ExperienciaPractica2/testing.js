// Solicitando paquete de Mysql
var mysql = require('mysql2');
// Configurando parámetros de conexión (puede variar según instalación)
var conexion = mysql.createConnection({
host:'localhost',
port:'3306',
database: 'publications',
user: 'root',
password: 'clavenueva',
});
// Realizando conexión o verificando si sucedió un error
conexion.connect(function(err){
if(err){
console.log("Error de conexion"+ err.stack);
return;
}
console.log("Conectado al ID "+conexion.threadId);
});
conexion.query('select * from classics', function(error,results){
if(error)
throw error;
results.forEach(element => {
console.log(element);
});
});
conexion.end();
