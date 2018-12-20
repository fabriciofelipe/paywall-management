const config = require('./config/env/development');
const db = require('./config/db');
const app = require('./config/express');

module.exports = app.listen(3000, () => {
	db.connect(config.db);
  console.log('Example app listening on port 3000!');
});

module.exports.db = db;
