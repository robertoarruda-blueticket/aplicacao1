var should = require('should');
var calculadora = require('../services/calculadora');

describe('Somando 2 valores', function() {
	it('Somando 1+1 e retornado 2', function(){
		var res = calculadora.soma(1, 1);
		res.should.equal(2, 'Deu ruim');
	})
});