const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(arr instanceof Array) {
        let max = 0;
        for(let i = 0 ; i<arr.length ; i++) {
            let now = this.calculateDepth.call(this,arr[i]);
            if(max < now) {
                max = now;
            }
        }
            return 1 + max;
        } else {
            return 0;
        }
    }
};
