var express = require('express');
var util = require('util');

var app = express();

//Hacer una variable var db = [] y al final del manejo del formulario incluirlo con db.push(req.body);

// add middleware explicitly
// ver http://expressjs.com/api.html

app.use(express.logger());
app.use(express.favicon(__dirname + '/favicon.ico'))
app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

var db = [];

// manejo del formulario
app.post('/procesaformulario', function (req, res) {
	console.log("quieren procesar el formulario");
	console.log(util.inspect(req.body));
	db.push(req.body);
	res.writeHead(200, {'Content-type': 'text/html; charset=utf8'});
	res.write('<p>Procesado el formulario </p>'); //si ponemos res.send("Procesado el formulario") podriamos quitar la linea de arriba
	res.end();
});

// listado de los datos
app.get('/listado', function(req, res) {

    body(background-color: black;)    
	console.log('quieren el listado');
	res.writeHead(200, {'Content-type': 'text/html; charset=utf8'});
	res.write('<p>Listado de los datos</p>');
	for(var i=0; i<db.length; i=i+1){
	
		res.write('<p>'+ JSON.stringify(db[i]) + '</p>');		
	
	}	

	res.end();
});

// Modificar las notas

app.post('/modificaformulario', function (req, res) {
    console.log("quieren modificar el formulario");
    console.log(util.inspect(req.body));
    db[req.body.numnota - 1].Autor = req.body.Autor;
    db[req.body.numnota - 1].Contenido = req.body.Contenido;
    res.send("Nota modificada");
       
       
});


app.listen(3000, function () {
	console.log("Servidor escuchando en el puerto 3000");
});


