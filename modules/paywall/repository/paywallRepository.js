


//var bluebird = require('bluebird'); 

class PaywallRepository {
    constructor() {
        this.model = require('../model/paywall');
    };

    findUol(code) {
        console.log(">>>>>>>>>>>>>>>>>> PaywallRepository " + code)
        return this.model.findOne({code:code});
      //  console.log(">>>>>>>>>>>>>>" + JSON.stringify(test));
      //  return test;
    };
}
//module.exports = bluebird.promisifyAll(new PaywallRepository());
module.exports = new PaywallRepository();
