var db = require('../../../config/db');

var payWallSchema = new db.mongoose.Schema({
    code: { type: String },
    walls: [{
        offers: [{
            offerAdvantage: [{
                description: { type: String, required: true },
                offer: { type: Number, required: true }
            }],
            bestChoice: { type: Boolean, required: true },
            name: { type: String, required: true },
            title: { type: String, required: true },
            subtitle: { type: String, required: true },
            imageLink: { type: String, required: true },
            imageAlt: { type: String, required: true },
            priceMoney: { type: String, required: true },
            priceTime: { type: String, required: true },
            buttonText: { type: String, required: true },
            buttonColor: { type: String, required: true },
            buttonTextColor: { type: String, required: true },
            buttonLink: { type: String, required: true },
            wall: { type: Number, required: true }
        }],
        banners: [{
            activated: { type: Boolean, required: true },
            name: { type: String, required: true },
            text: { type: String, required: true },
            buttonText: { type: String, required: true },
            buttonColor: { type: String, required: true },
            buttonTextColor: { type: String, required: true },
            buttonLink: { type: String, required: true },
            backgroundImage: { type: String, required: true },
            bidImage: { type: String, required: true },
            bidImageLink: { type: String, required: true },
            bidImageAlt: { type: String, required: true },
            wall: { type: Number, required: true }
        }],
        defaultForUsage: { type: Boolean },
        name: { type: String },
        title: { type: String },
        subTitle: { type: String },
        legalText: { type: String },
        brand: { type: String }
    }],
    seos: [{
        name: { type: String, required: true },
        title: { type: String, required: true },
        type: { type: String, required: true },
        description: { type: String, required: true },
        url: { type: String, required: true },
        image: { type: String, required: true },
        brand: { type: String, required: true }
    }],
    brandBenefits: [{
        brandAdvantages: [{
            imageLink: { type: String, required: true },
            imageAlt: { type: String, required: true },
            header: { type: String, required: true },
            text: { type: String, required: true },
            brandBenefit: { type: Number, required: true }
        }],
        title: { type: String, required: true },
        brand: { type: String, required: true }
    }],
    name: { type: String },
    logoImageLink: { type: String },
    logoLink: { type: String },
    logoImageAlt: { type: String },
    brandImageLink: { type: String },
    brandLink: { type: String },
    brandImageAlt: { type: String },
    attendanceTelephone: { type: String },
    attendanceText: { type: String }
}, { collection: 'paywall' });

module.exports = db.mongoose.model('payWall', payWallSchema);




