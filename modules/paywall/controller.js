class PaywallController {
    constructor() {
        this.paywallService = require('./service/paywallService');
    }

    findUol(req, res) {
        console.log(">>>>>>>>>>>>>>>>>> Controller " + req.headers['code'])
        var code = req.headers['code'];
        this.paywallService.findUol(code)
        .then(retorno =>{
            return res.status(200).json({retorno})
        })
        .catch(error=>{
            return res.status(500).json("erro")
        })
    }

    saveUol(req, res) {
       
        var paywall = req.body;
        console.log(">>>>>>>>>>>>>>>>>> Controller " + paywall)
        this.paywallService.saveUol(paywall)
        .then(retorno =>{
            return res.status(200).json({retorno})
        })
        .catch(error=>{
            return res.status(500).json("erro")
        })
    }

    deleteUol(req, res) {
        console.log(">>>>>>>>>>>>>>>>>> Controller " + req.headers['id'])
        var id = req.headers['id'];
        this.paywallService.deleteUol(id)
        .then(retorno =>{
            return res.status(200).json({retorno})
        })
        .catch(error=>{
            return res.status(500).json("erro")
        })
    }
    
}

module.exports = new PaywallController();