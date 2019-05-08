const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    Nome: {
        type: String,
        require: true
    }, 
    Senha: {
        type: String,
        require: true,
        select: false,
    },
    Email:{
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    CPF: {
        type: String,
        require: true,
        unique: true,
    },
    Endereco: {
        type: String,
        require: true,
    },     
    createDate: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model('User' , UserSchema);

module.exports = User;