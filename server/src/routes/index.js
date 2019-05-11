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
  const user = await UserModel.findOne({ Nome: 'anddre' });

  res.send({ user });
});

module.exports = router;