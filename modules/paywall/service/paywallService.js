class PaywallService {

    constructor() {
    this.paywallRepository = require('../repository/PaywallRepository');
    }

        findUol(code) {
        console.log(">>>>>>>>>>>>>>>>>> PaywallService " + req.body.code)
        return paywallRepository.findUol(code)
        }
    }

module.exports = new PaywallService();