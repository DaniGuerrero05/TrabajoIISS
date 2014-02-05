/*global someFunction*/
/*var require = someFunction();*/
/*var module = require('module');*/
var util = require('util');
var jade = require('jade');
/*var console = require('console');*/

var html;

module.exports = {'eliminarnotas': function (app, db) {

    "use strict";
    app.post('/eliminaformulario', function (req, res) {
        console.log("quieren eliminar un formulario");
        console.log(util.inspect(req.body));
        if (req.body.numnota > db.length) {

            res.writeHead(200, {'Content-type': 'text/html;                  charset=utf8'});
            html = jade.renderFile('./noexiste.jade', {});
            res.write(html);
            res.end();

        } else {
            db.splice(req.body.numnota - 1, 1);
            res.writeHead(200, {'Content-type': 'text/html; charset=utf8'});
            html = jade.renderFile('./eliminarnotas.jade', {});
            res.write(html);
            res.end();
        }
    });

}
     };






