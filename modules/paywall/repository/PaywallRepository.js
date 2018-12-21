var bluebird = require('bluebird');
var moment = require('moment');

class PaywallRepository {
    constructor() {
        this.model = require('../model/paywall');
    };

    findUol(code) {
        this.model.findOne({ code: code }, {}, {}, {});
    };
}
module.exports = bluebird.promisifyAll(new AntigoCasDAO());
