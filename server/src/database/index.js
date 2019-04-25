const mongoose = require('mongoose');

//Conexão com o banco de dados
mongoose.connect('mongodb:\\mongo:2707', {useMongoClient: true});

mongoose.Promise = global.Promise;

module.exports = mongoose;