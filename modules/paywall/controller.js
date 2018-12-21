class PaywallController {
    constructor() {
         this.paywallService = require('./service/paywallService');
        }

    findUol(req, res) {
        console.log(">>>>>>>>>>>>>>>>>> Controller " + req.body.code)
       var code = req.body.code;
        return paywallService.findUol(code)
        }
}

module.exports = new PaywallController();