/*global someFunction*/
/*var require = someFunction();*/
var express = require('express');
/*var console = require('console');*/
var port = process.env.PORT || 3000;
var util = require('util');
var ruta1 = require('./routes/Crearnota.js');
var ruta2 = require('./routes/Listarnotas.js');
var ruta3 = require('./routes/Modificarnotas.js');
var ruta4 = require('./routes/Eliminarnotas.js');

var app = express();


// add middleware explicitly
// ver http://expressjs.com/api.html

app.use(express.logger());
app.use(express.favicon(__dirname + '/favicon1.ico'));
app.use(express.static(__dirname + '/'));
app.use(express.bodyParser());

var db = [];


// Crear Notas
ruta1.crearnota(app, db);
// Listar Notas
ruta2.listarnotas(app, db);
// Modificar Notas
ruta3.modificarnotas(app, db);
// Eliminar formulario
ruta4.eliminarnotas(app, db);

app.listen(port, function () {
    console.log("Servidor escuchando en el puerto 3000");
});
