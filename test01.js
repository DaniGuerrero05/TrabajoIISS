var request = require('request');
var assert = require('assert');

describe('Conectarse con el servidor', function() { // Test suite

    it('nos conectamos con la página principal', function(done) { // Test case
        request.get('http://localhost:3000', function (error, response, body) {
            if (error) {
                done(error);
            };
            console.log("cuerpo=", body);
            console.log("cabecera=", response.headers);
            console.log('status=', response.statusCode);
            assert.equal(response.statusCode, 200, 'El estatus debe ser OK');
            done();
        });
    });

    it('nos conectamos con la página de crear notas', function(done) { // Test case
        request.get('http://localhost:3000/creacion.html', function (error, response, body) {
            if (error) {
                done(error);
            };
            console.log("cuerpo=", body);
            console.log("cabecera=", response.headers);
            console.log('status=', response.statusCode);
            assert.equal(response.statusCode, 200, 'El estatus debe ser OK');
            assert.ok(/html/.test(response.headers['content-type']), 'Debe ser una página html');
            done();
        });
    });

    it('Creamos una nota', function(done) { // Test case
        request.post('http://localhost:3000/procesaformulario',
                     {form: {Autor: 'Alejandro',
                             Contenido: 'ADA',
                             Fecha: 'Today'
                            }
                     },
                     function (error, response, body) {
                         if (error) {
                             done(error);
                         };
                         console.log("cuerpo=", body);
                         console.log("cabecera=", response.headers);
                         console.log('status=', response.statusCode);
                         assert.equal(response.statusCode, 200, 'El estatus debe ser OK');
                         assert.ok(/html/.test(response.headers['content-type']), 'Debe ser una página html');
                         assert.ok(/SE HA CREADO UNA NOTA/.test(body), 'Debe responder que se ha creado una nota');
                         done();
                    });
    });

      it('nos conectamos con la página de modificar notas', function(done) { // Test case
        request.get('http://localhost:3000/modificacion.html', function (error, response, body) {
            if (error) {
                done(error);
            };
            console.log("cuerpo=", body);
            console.log("cabecera=", response.headers);
            console.log('status=', response.statusCode);
            assert.equal(response.statusCode, 200, 'El estatus debe ser OK');
            assert.ok(/html/.test(response.headers['content-type']), 'Debe ser una página html');
            done();
        });
    });

     it('Modificamos una nota', function(done) { // Test case
        request.post('http://localhost:3000/modificaformulario',
                     {form: {   numnota: '1',
                                Autor: 'Alberto',
                                Contenido: 'ADA',
                                Fecha: 'Today'
                            }
                     },
                     function (error, response, body) {
                         if (error) {
                             done(error);
                         };
                         console.log("cuerpo=", body);
                         console.log("cabecera=", response.headers);
                         console.log('status=', response.statusCode);
                         assert.equal(response.statusCode, 200, 'El estatus debe ser OK');
                         assert.ok(/html/.test(response.headers['content-type']), 'Debe ser una página html');
                         assert.ok(/SE HA MODIFICADO LA NOTA/.test(body), 'Debe responder que se ha modificado una nota');
                         done();
                    });
    });

      it('Modificamos una nota', function(done) { // Test case
        request.post('http://localhost:3000/modificaformulario',
                     {form: {   numnota: '3',
                                Autor: 'Daniel',
                                Contenido: 'ADA',
                                Fecha: 'Today'
                            }
                     },
                     function (error, response, body) {
                         if (error) {
                             done(error);
                         };
                         console.log("cuerpo=", body);
                         console.log("cabecera=", response.headers);
                         console.log('status=', response.statusCode);
                         assert.equal(response.statusCode, 200, 'El estatus debe ser OK');
                         assert.ok(/html/.test(response.headers['content-type']), 'Debe ser una página html');
                         assert.ok(/LA NOTA SELECCIONADA NO EXISTE/.test(body), 'Debe responder que la nota seleccionada no existe');
                         done();
                    });
    });

      it('nos conectamos con la página de eliminar notas', function(done) { // Test case
        request.get('http://localhost:3000/eliminacion.html', function (error, response, body) {
            if (error) {
                done(error);
            };
            console.log("cuerpo=", body);
            console.log("cabecera=", response.headers);
            console.log('status=', response.statusCode);
            assert.equal(response.statusCode, 200, 'El estatus debe ser OK');
            assert.ok(/html/.test(response.headers['content-type']), 'Debe ser una página html');
            done();
        });
    });

         it('Eliminamos una nota', function(done) { // Test case
        request.post('http://localhost:3000/eliminaformulario',
                     {form: {   numnota: '1',
                                
                            }
                     },
                     function (error, response, body) {
                         if (error) {
                             done(error);
                         };
                         console.log("cuerpo=", body);
                         console.log("cabecera=", response.headers);
                         console.log('status=', response.statusCode);
                         assert.equal(response.statusCode, 200, 'El estatus debe ser OK');
                         assert.ok(/html/.test(response.headers['content-type']), 'Debe ser una página html');
                         assert.ok(/LA NOTA HA SIDO ELIMINADA/.test(body), 'Debe responder que la nota se ha eliminado');
                         done();
                    });
    });

    

});

   

