var express = require('express');

var router = express.Router();


router.get('/', function(req, res) {

  res.send('Está OK!!!!!');

});

router.get('/teste', function(req, res) {

  res.send('Teste Rota');

});



module.exports = router;

