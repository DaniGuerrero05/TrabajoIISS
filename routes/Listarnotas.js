/*global someFunction*/
/*var require = someFunction();*/
var jade = require('jade');
/*var module = require('module');*/
/*var console = require('console');*/


module.exports = {'listarnotas': function (app, db) {

    "use strict";
    app.get('/listado', function (req, res) {
        console.log('quieren el listado');
        res.writeHead(200, {'Content-type': 'text/html; charset=utf8'});
        var html = jade.renderFile('./listarnotas.jade', {}), cont = 0, i;
        res.write(html);
        for (i = 0; i < db.length; i = i + 1) {
            cont = cont + 1;
            res.write('<h2>' + cont + ".   -   " + "Autor:      " + JSON.stringify(db[i].Autor) + "    " + "Contenido:     " + JSON.stringify(db[i].Contenido) + "     " +               JSON.stringify(db[i].Fecha) + '</h2>');
        }
        res.end();
    });

}
     };

