class PaywallService {

    constructor() {
        this.paywallRepository = require('../repository/paywallRepository');
    }

    findUol (code) {
          return new Promise((resolve, reject) =>  {
            this.paywallRepository.findUol(code)
                .then(result => {
                    console.log("passei aqui >>>> " + result);
                    resolve(result.name);
                })
                .catch(error => {
                    reject(error)
                })
          })
    }

}

module.exports = new PaywallService();