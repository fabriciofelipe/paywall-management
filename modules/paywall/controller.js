class PaywallController {
    constructor() {
        this.paywallService = require('./service/paywallService');
    }

    findUol(req, res) {
        console.log(">>>>>>>>>>>>>>>>>> Controller " + req.body.code)
        var code = req.body.code;
        this.paywallService.findUol(code)
        .then(retorno =>{
            return res.status(200).json({paywall: retorno})
        })
        .catch(error=>{
            return res.status(500).json("erro")
        })
    }
}

module.exports = new PaywallController();