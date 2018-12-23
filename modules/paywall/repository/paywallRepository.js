class PaywallRepository {
    constructor() {
        this.model = require('../model/paywall');
    };

    findUol(code) {
        console.log(">>>>>>>>>>>>>>>>>> PaywallRepository " + code)
        return this.model.findOne({ code: code });

    };

    saveUol(paywall) {
        console.log(">>>>>>>>>>>>>>>>>> PaywallRepository " + paywall)
        return this.model.create(paywall);
    };
}

module.exports = new PaywallRepository();
