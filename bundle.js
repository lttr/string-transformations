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
const { lowerCase } = require(1)
const { removeWhitespace } = require(2)
const { reverse } = require(3)
const { upperCase } = require(4)

// export const lowerCase
// export const removeWhitespace
// export const reverse
// export const upperCase
},function (global, require, module, exports) {
// lowerCase.js
'use strict';
/**
 * Returns lowercased string
 */
const lowerCase = (input) => {
  return input.toLowerCase()
}
exports.lowerCase = lowerCase
},function (global, require, module, exports) {
// removeWhitespace.js
'use strict';
/**
 * Removes whitespace (space, tab and newline)
 */
const removeWhitespace = (input) => {
  return input.replace(/\s/g, '')
}
exports.removeWhitespace = removeWhitespace

},function (global, require, module, exports) {
// reverse.js
'use strict';
/**
* Reverses string
*/
const reverse = (input) => {
  return input.split('').reverse().join('')
}
exports.reverse = reverse
},function (global, require, module, exports) {
// upperCase.js
'use strict';
/**
 * Returns uppercased string
 */
const upperCase = (input) => {
  return input.toUpperCase()
}
exports.upperCase = upperCase
}]));