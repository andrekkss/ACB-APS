const mongoose = require('../database');

const climaSchema = new mongoose.Schema({
    Cidade: {
        type: String,
        require: true
    },
    Cordenadas: {
        lon: { type: String },
        lat: { type: String }
    },
    Clima: {
        type: String,
        require: true,
    },
    Descricao: {
        type: String,
        require: true,
    },
    temperatura: {
        type: String,
        require: true
    },
    pressao: {
        type: String,
        require: true
    },
    tempMin: {
        type: String,
        require: true
    },
    tempMax: {
        type: String,
        require: true
    },
    cidade: {
        type: String,
        require: true
    },
    pais: {
        type: String,
        require: true
    } 
});

const Clima = mongoose.model('Clima', climaSchema);

module.exports = Clima;