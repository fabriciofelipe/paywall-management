class PaywallService {

    constructor() {
    this.paywallRepository = require('../repository/paywallRepository');
    }

        findUol(code) {
        console.log(">>>>>>>>>>>>>>>>>> PaywallService " + code)
        return this.paywallRepository.findUol(code)
        }
    }

module.exports = new PaywallService();