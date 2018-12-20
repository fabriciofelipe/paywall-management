var db = require('../../../config/db');

var payWallSchema = new db.mongoose.Schema({
    cpf: { type: String, required: true },
    visualizado: { type: Boolean, required: true },
    data_visualizacao: { type: Date },
    statusCadastro: Number,
    historicoStatus: { type: Array },
    user            : {
        name        : String        
    }
}, { collection: 'payWall' });

module.exports = db.mongoose.model('payWall', payWallSchema);