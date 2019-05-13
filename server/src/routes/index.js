var express = require('express');
var router = express.Router();
var Climamodel = require('../models/clima');
var UserModel = require('../models/user');

router.get('/getAllUsers', async function (req, res, next) {
  UserModel.find({}, function (err, data) {
    if (!err) {
      res.send({ data });
      process.exit();
    } else { res.send({ err }); }
  })
});

router.get('/getAllClima', async function (req, res, next) {
  Climamodel.find({}, function (err, data) {
    if (!err) {
      res.send({ data });
      process.exit();
    } else { res.send({ err }); }
  })
});

router.get('/findByIdClima', async function (req, res, next) {
  const value = Climamodel.findById(req.query.id)
  if (!value) throw 'nenhum clima encontrado';
  res.send({ value });
});

router.get('/findByIdUsuario', async function (req, res, next) {
  const value = UserModel.findById(req.query.id)
  if (!value) throw 'nenhum usuario encontrado';
  res.send({ value });
});

router.get('/login', async function (req, res, next) {
  let on = false;
  let message = 'Usuário não encontrado';
  const user = await UserModel.findOne({ Nome: req.query.user });
  console.log(`[ user - ${user}]`)
  if (user != null) {
    if (user.Senha == req.query.password) {
      on = true;
      message = 'Usuário autenticado com sucesso';
    } else {
      message = 'Senha incorreta';
    }
  }
  res.send({ on, message });
});

router.post('/cadastro', async function (req, res, next) {
  try {
    const user = await UserModel.create(req.body.cadastro);
    res.send({ user, msg: 'Cadastro efetuado com sucessoos' });
  } catch (err) {
    console.log(err);
    res.send({ err });
  }
});

router.delete('/deleteClima', async function (req, res, next) {
  await Climamodel.findByIdAndRemove(id);
  res.send('Deletado com sucesso');
});


router.delete('/deleteUser', async function (req, res, next) {
  await UserModel.findByIdAndRemove(id);
  res.send('Deletado com sucesso');
});

module.exports = router;