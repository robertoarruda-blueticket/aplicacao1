var mongodb = require('mongodb');

organizador = function() {

    this.gravar = function(organizadorObject,callback) {
        mongodb.MongoClient.connect(
            'mongodb://192.168.1.226:27017/aplicacao1',
            function(err, db){
                db.collection('organizador').insert(organizadorObject, callback);
            }
        );
    };
    
    this.buscarPorCpf = function(varCpf,callback) {
        mongodb.MongoClient.connect(
            'mongodb://192.168.1.226:27017/aplicacao1',
            function(err, db){
                db.collection('organizador').findOne({cpf: varCpf}, callback);
            }
        );
    };

};

module.exports = new organizador();