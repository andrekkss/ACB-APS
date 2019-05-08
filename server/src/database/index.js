const mongoose = require('mongoose');

//Conexão com o banco de dados
mongoose.connect('mongodb://mongo:27017/api', { useNewUrlParser: true });

mongoose.Promise = global.Promise;

module.exports = mongoose;