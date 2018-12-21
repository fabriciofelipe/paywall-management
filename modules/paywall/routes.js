var express = require('express');

var router = express.Router();

// ROUTES PAYWALL =>
var paywallController = require('./controller');


router.get('/', function(req, res) {

  res.send('Está OK!!!!!');

});

router.post('/uol', paywallController.findUol.bind(paywallController));


module.exports = router;

