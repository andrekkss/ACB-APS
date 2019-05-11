var express = require('express');
var router  = express.Router();
var Climamodel   = require('../models/clima'); 
var UserModel = require('../models/user');      

router.get('/getData', async function(req, res, next) {
  Climamodel.find({}, function(err, data){
    if(!err){
      res.send({ data });
      process.exit();
    } else { res.send({ err });}
  })
});

router.get('/login', async function(req, res, next){
  let on = false;
  let message = 'Usuário não encontrado';
  const user = await UserModel.findOne({ Nome: req.query.user });
  console.log(`[ user - ${user}]`)
  if(user != null){
    if(user.Nome == req.query.user && user.Senha == req.query.password ){
        on = true;
        message = 'Usuário autenticado com sucesso';
      }else{
        message = 'Usuário ou senha incorreta';
    }
  }
  res.send({ on, message });  
});

module.exports = router;