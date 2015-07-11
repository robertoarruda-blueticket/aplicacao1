var should = require('should');
var calculadora = require('../services/calculadora');
var organizador = require('../services/organizador');

describe('Somando 2 valores', function() {
    it('Somando 1+1 e retornado 2', function(){
        var res = calculadora.soma(1, 1);
        res.should.equal(2, 'Deu ruim');
    })
});

describe('Serviço de organizadores', function() {
    it('Deve armazenar um novo organizador', function(done){

        var organizadorObject = { name: 'Zezinho', cpf: '99999999999' };

        var callbackBuscar = function(err, res){
            res.should.have.property('cpf').equal(organizadorObject.cpf);
            done();
        };

        var callbackGravar = function(err, res){
            res.result.should.have.property('n');
        };

        organizador.gravar(organizadorObject, callbackGravar);

        organizador.buscarPorCpf(organizadorObject.cpf, callbackBuscar);
    });
});