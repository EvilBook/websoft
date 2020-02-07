var utils = require("./stringRange.js")
var res

res=utils.stringRange(1, 8);
console.log(res);
res = utils.stringRange(1, 8, "$");
console.log(res);
console.log(utils);