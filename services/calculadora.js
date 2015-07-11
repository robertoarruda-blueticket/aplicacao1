calculadora = function() {
	this.soma = function(a, b){
		return a + b;
	};
};

module.exports = new calculadora();