module.exports = function(server) {

	server.get('/hello/:name', function(req, res){
		res.send(200, 'Olá ' +  req.params.name);
	});

	server.get('/bye/:name', function(req, res){
		res.send(200, 'Tchau ' +  req.params.name);
	});

};