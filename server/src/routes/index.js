var express = require('express');
var router  = express.Router();
var Climamodel   = require('../models/clima'); 
var UserModel = require('../models/user');      

router.get('/getAllUsers', async function(req, res, next) {
  UserModel.find({}, function(err, data){
    if(!err){
      res.send({ data });
      process.exit();
    } else { res.send({ err });}
  })
});

router.get('/getAllClima', async function(req, res, next) {
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

router.post('/cadastro', async function(req, res, next){
  try{ 
    const user = await UserModel.create(req.body.cadastro);
    res.send({ user, msg: 'Cadastro efetuado com sucessoos'});
  }catch(err){
    console.log(err);
    res.send({ err });
  }
});

module.exports = router;