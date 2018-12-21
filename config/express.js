var express = require('express');
var body_parser = require('body-parser');
var compression = require('compression');
var helmet = require('helmet');
var cors = require('cors');
var app = express();

app.use(helmet());
app.use(cors());
app.use(body_parser.urlencoded({ limit: '2mb', extended: false }));
app.use(body_parser.json({ limit: '2mb' }));
app.use(compression());

//require('./middlewares')(app);

app.use('/', require('../modules/paywall/routes'));

module.exports = app;
