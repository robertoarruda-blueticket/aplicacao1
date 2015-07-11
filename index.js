var restify = require('restify');
var server = restify.createServer({
	name: 'Aplicacao1'
});

var port = 1010;

server.listen(port, function () {
	console.log('Escutando a porta ' + port);
});

var routes = require('./routes');
routes(server);