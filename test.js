/*var assert = require('assert');
var express = require('express');
var app = express();
var browser = require('zombie');

describe('contact page', function() {

    before(function() {
        this.server = app.listen(3000);
        this.browser = new browser({site: 'http://localhost:3000' });

});

before(function(done) {
    this.browser.visit('/index',done);
});

it('deberia salir el valor',function(done) {

    var browser = this.browser;
    browser.fill('Autor','Ale');
    browser.pressButton('Crear').then(function() {

        assert.equal(browser.field('Autor').value, 'Ale');

    }).then(done,done);


});
});*/

    var express = require('express');
    var app = express();
    var should = require('should'); 
    var assert = require('assert');
    var request = require('supertest');  
    var winston = require('winston');
    var CC;

    request = request('http://localhost:3000');

    describe('Carga del Servidor', function () {
        it('should load the module', function () {
            CC = require('./servidor.js');
        });
    });

        describe('Questions', function() { // Test suite
            before(function(done) {
                done();
            });

        it('Should create a freeResponse question', function(req,res) { // Test case
        var db = [];
        db[0].Autor = req.body.db[0].Autor;
        db[0].Contenido = req.body.db[0].Contenido;
        db[0].Fecha = req.body.db[0].Fecha;

        request(app)
        .post('/procesaformulario')
        .send(db)
        .expect(200)
        .end(function(err, res) { // .end handles the response
            if (err) {
                return done(err);
            }

            done();
        });
    });
});
