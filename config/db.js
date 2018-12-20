class Database {
    constructor() {
        this.mongoose = require('mongoose');
    };

     connect(config) {

    //     // var options = {
    //     //     user: config.username,
    //     //     pass: config.password,
    //     //     server: {
    //     //         socketOptions: {}
    //     //     }
    //     // };

            var connection = null;
            this.mongoose.connect(config.uri);
            var connection = this.mongoose.connection;
            
            connection.on('connected', function () {
                console.log('Mongoose conectado ');
             });
     }
}

module.exports = new Database();