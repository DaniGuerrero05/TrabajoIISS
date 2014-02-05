/*global someFunction*/
/*var require = someFunction();*/
/*var module = require('module');*/
/*var console = require('console');*/
var util = require('util');
var jade = require('jade');

var html;

module.exports = {'modificarnotas': function (app, db) {

    "use strict";
    app.post('/modificaformulario', function (req, res) {
        console.log("quieren modificar el formulario");
        console.log(util.inspect(req.body));
        if (req.body.numnota > db.length) {

            res.writeHead(200, {'Content-type': 'text/html; charset=utf8'});
            html = jade.renderFile('./noexiste.jade', {});
            res.write(html);
            res.end();
        } else {
            db[req.body.numnota - 1].Autor = req.body.Autor;
            db[req.body.numnota - 1].Fecha = req.body.Fecha;
            db[req.body.numnota - 1].Contenido = req.body.Contenido;
            res.writeHead(200, {'Content-type': 'text/html; charset=utf8'});
            html = jade.renderFile('./modificarnotas.jade', {});
            res.write(html);
            res.end();
        }
    });
}
    };






