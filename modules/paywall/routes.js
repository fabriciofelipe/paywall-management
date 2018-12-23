var express = require('express');

var router = express.Router();

// ROUTES PAYWALL =>
var paywallController = require('./controller');

router.get('/uol', paywallController.findUol.bind(paywallController));

router.post('/uol', paywallController.saveUol.bind(paywallController));


module.exports = router;

