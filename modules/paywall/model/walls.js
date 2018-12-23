
var db = require('../../../config/db');

var wallsSchema = new  db.mongoose.Schema({
    id: {type:String, required: true},
    //offers :  [{ type: Schema.Types.ObjectId, ref: 'Offers' }],
    //banners :  [{ type: Schema.Types.ObjectId, ref: 'Banners' }],
    defaultForUsage: {type:Boolean, required: true},
    name: {type:String, required: true},
    title: {type:String, required: true},
    subTitle: {type:String, required: true},
    legalText: {type:String, required: true},
    brand: {type:String, required: true}

}, { collection: 'paywall' });


module.exports = db.mongoose.model('walls', wallsSchema);