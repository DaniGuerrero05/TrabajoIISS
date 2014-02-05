/*global someFunction*/
/*var require = someFunction();*/
/*var module = require('module');*/
var util = require('util');
var jade = require('jade');
/*var console = require('console');*/


module.exports = { 'crearnota': function (app, db) {
    "use strict";
    app.post('/procesaformulario', function (req, res) {
        console.log("quieren procesar el formulario");
        console.log(util.inspect(req.body));
        db.push(req.body);
        res.writeHead(200, {'Content-type': 'text/html; charset=utf8'});
        var html = jade.renderFile('./crearnota.jade', {});
        res.write(html);
        res.end();
    });
}
    };

