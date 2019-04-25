const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    Nome: {

        type: String,
        require: true,

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
    Endereço: {

        type: String,
        require: true,

    },     
    createDat: {

        type: Date,
        default: Date.now,

    },
});

const User = mongoose.model('User' , userSchema);

module.exports = User;