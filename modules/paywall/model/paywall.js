var db = require('../../../config/db');
const Object = db.mongoose.Schema.Types.ObjectId;


var payWallSchema = new db.mongoose.Schema({
    code: { type: String, required: true },
    name: { type: String, required: true },
    logoImageLink: { type: String, required: true },
    logoLink: { type: String, required: true },
    logoImageAlt: { type: String, required: true },
    brandImageLink: { type: String, required: true },
    brandLink: { type: String, required: true },
    brandImageAlt: { type: String, required: true },
    attendanceTelephone: { type: String, required: true },
    attendanceText: { type: String, required: true },
}, { collection: 'paywall' });


var wallsSchema = new db.mongoose.Schema({
    id: { type: String, required: true },
    defaultForUsage: { type: Boolean, required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    legalText: { type: String, required: true },
    brand: { type: String, required: true }

});

db.mongoose.model('Walls', wallsSchema);

var offersSchema = new db.mongoose.Schema({
    id: { type: String, required: true },
    bestChoice: { type: Boolean, required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    imageLink: { type: String, required: true },
    imageAlt: { type: String, required: true },
    priceMoney: { type: Number, required: true },
    priceTime: { type: String, required: true },
    buttonText: { type: String, required: true },
    buttonColor: { type: String, required: true },
    buttonTextColor: { type: String, required: true },
    buttonLink: { type: String, required: true },
    wall: { type: Number, required: true }
});

var offerAdvantageSchema = new db.mongoose.Schema({
    id: { type: String, required: true },
    description: { type: String, required: true },
    offer: { type: Number, required: true }
});

var bannersSchema = new db.mongoose.Schema({
    id: { type: String, required: true },
    activated: { type: Boolean, required: true },
    name: { type: String, required: true },
    text: { type: String, required: true },
    buttonText: { type: String, required: true },
    buttonColor: { type: String, required: true },
    buttonTextColor: { type: String, required: true },
    buttonLink: { type: Number, required: true },
    backgroundImage: { type: String, required: true },
    bidImage: { type: String, required: true },
    bidImageLink: { type: String, required: true },
    bidImageAlt: { type: String, required: true },
    wall: { type: Number, required: true }
});


var seosSchema = new db.mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true }
});

var brandBenefitsSchema = new db.mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    brand: { type: String, required: true }
});


var brandAdvantagesSchema = new db.mongoose.Schema({
    id: { type: String, required: true },
    imageLink: { type: String, required: true },
    imageAlt: { type: String, required: true },
    header: { type: String, required: true },
    text: { type: String, required: true },
    brandBenefit: { type: Number, required: true }
});

module.exports = db.mongoose.model('paywall', payWallSchema);




