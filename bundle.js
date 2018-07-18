(function (cache, modules) {
  function require(i) { return cache[i] || get(i); }
  function get(i) {
    var exports = {}, module = {exports: exports};
    modules[i].call(exports, window, require, module, exports);
    return (cache[i] = module.exports);
  }
  var main = require(0);
  return main.__esModule ? main.default : main;
}([],[function (global, require, module, exports) {
// index.js
'use strict';
const { upperCase } = require(1)

},function (global, require, module, exports) {
// upperCase.js
'use strict';
/**
 * Returns uppercased string
 */
const upperCase = (input) => {
  const a = 8**2;
  return input.toUpperCase()
}
exports.upperCase = upperCase
}]));