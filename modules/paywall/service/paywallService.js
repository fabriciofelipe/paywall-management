class PaywallService {

    constructor() {
        this.paywallRepository = require('../repository/paywallRepository');
    }

    findUol (code) {
          return new Promise((resolve, reject) =>  {
            this.paywallRepository.findUol(code)
                .then(result => {
                    console.log("passei aqui >>>> " + result);
                    resolve(result);
                })
                .catch(error => {
                    reject(error)
                })
          })
    }


    saveUol (paywall) {
        console.log(">>>>>>>>>>>>>>>>>> Service " + paywall)
        return new Promise((resolve, reject) =>  {
          this.paywallRepository.saveUol(paywall)
              .then(result => {
                  console.log("passei aqui >>>> " + result);
                  resolve(result);
              })
              .catch(error => {
                  reject(error)
              })
        })
  }

}

module.exports = new PaywallService();