var express = require('express');

var app = express();

var route = require('./routes');  // importamos o arquivo



app.use('/', route); // chamamos a rota



app.listen(3000, function () {

  console.log('Example app listening on port 3000!');

});

