var db = require('../../../config/db');

var payWallSchema = new db.mongoose.Schema({
    code: { type: String},
    walls: [{
        id: { type: String },
        //offers :  [{ type: Schema.Types.ObjectId, ref: 'Offers' }],
        //banners :  [{ type: Schema.Types.ObjectId, ref: 'Banners' }],
        defaultForUsage: { type: Boolean },
        name: { type: String },
        title: { type: String },
        subTitle: { type: String},
        legalText: { type: String},
        brand: { type: String }
    }],
    //seos: [{ type: Schema.Types.ObjectId, ref: 'Seos' }],
    // brandBenefits: [{ type: Schema.Types.ObjectId, ref: 'BrandBenefits' }],
    name: { type: String},
    logoImageLink: { type: String },
    logoLink: { type: String },
    logoImageAlt: { type: String },
    brandImageLink: { type: String },
    brandLink: { type: String},
    brandImageAlt: { type: String },
    attendanceTelephone: { type: String },
    attendanceText: { type: String }
}, { collection: 'paywall' });


// var wallsSchema = new db.mongoose.Schema({
//     id: { type: String, required: true },
//     //offers :  [{ type: Schema.Types.ObjectId, ref: 'Offers' }],
//     //banners :  [{ type: Schema.Types.ObjectId, ref: 'Banners' }],
//     defaultForUsage: { type: Boolean, required: true },
//     name: { type: String, required: true },
//     title: { type: String, required: true },
//     subTitle: { type: String, required: true },
//     legalText: { type: String, required: true },
//     brand: { type: String, required: true }

// });
// db.mongoose.model('Walls', wallsSchema);
// var offersSchema = new  db.mongoose.Schema({
//     id: {type:String, required: true},
//     offerAdvantage :  [{ type: Schema.Types.ObjectId, ref: 'OfferAdvantage' }],
//     bestChoice: {type:Boolean, required: true},
//     name: {type:String, required: true},
//     title: {type:String, required: true},
//     subtitle: {type:String, required: true},
//     imageLink: {type:String, required: true},
//     imageAlt: {type:String, required: true},
//     priceMoney: {type:Float, required: true},
//     priceTime: {type:String, required: true},
//     buttonText: {type:String, required: true},
//     buttonColor: {type:String, required: true},
//     buttonTextColor: {type:String, required: true},
//     buttonLink: {type:String, required: true},
//     wall: {type:Number, required: true}
// });

// var offerAdvantageSchema = new  db.mongoose.Schema({
//     id: {type:String, required: true},,
//     description: {type:String, required: true},
//     offer: {type:Number, required: true}
// });

// var bannersSchema = new  db.mongoose.Schema({
//     id: {type:String, required: true},
//     activated: {type:Boolean, required: true},
//     name: {type:String, required: true},
//     text: {type:String, required: true},
//     buttonText: {type:String, required: true},
//     buttonColor: {type:String, required: true},
//     buttonTextColor: {type:String, required: true},
//     buttonLink: {type:Float, required: true},
//     backgroundImage: {type:String, required: true},
//     bidImage: {type:String, required: true},
//     bidImageLink: {type:String, required: true},
//     bidImageAlt: {type:String, required: true},
//     wall: {type:Number, required: true}
// });


// var seosSchema = new  db.mongoose.Schema({
//     id: {type:String, required: true},
//     name: {type:String, required: true},
//     title: {type:String, required: true},
//     type: {type:String, required: true},
//     description: {type:String, required: true},
//     url: {type:String, required: true},
//     image: {type:String, required: true},
//     brand: {type:String, required: true}
// });

// var brandBenefitsSchema = new  db.mongoose.Schema({
//     id: {type:String, required: true},
//     brandAdvantages : [{ type: Schema.Types.ObjectId, ref: 'BrandAdvantages' }],
//     title: {type:String, required: true},
//     brand: {type:String, required: true}
// });


// var brandAdvantagesSchema = new  db.mongoose.Schema({
//     id: {type:String, required: true},
//     imageLink: {type:String, required: true},
//     imageAlt: {type:String, required: true},
//     header: {type:String, required: true},
//     text: {type:String, required: true},
//     brandBenefit: {type:Number, required: true}
// });

module.exports = db.mongoose.model('payWall', payWallSchema);




