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

    deleteUol(id) {
        console.log(">>>>>>>>>>>>>>>>>> PaywallRepository " + id)
        return this.model.deleteOne({ _id: id });

    };
}

module.exports = new PaywallRepository();
