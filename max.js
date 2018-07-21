'use strict';

(function (cache, modules) {
  function require(i) {
    return cache[i] || get(i);
  }
  function get(i) {
    var exports = {},
        module = { exports: exports };
    modules[i].call(exports, window, require, module, exports);
    return cache[i] = module.exports;
  }
  var main = require(0);
  return main.__esModule ? main.default : main;
})([], [function (global, require, module, exports) {
  // index.js
  'use strict';

  var _require = require(1),
      lowerCase = _require.lowerCase;

  var _require2 = require(2),
      removeWhitespace = _require2.removeWhitespace;

  var _require3 = require(3),
      reverse = _require3.reverse;

  var _require4 = require(4),
      upperCase = _require4.upperCase;

  // export const lowerCase
  // export const removeWhitespace
  // export const reverse
  // export const upperCase

}, function (global, require, module, exports) {
  // lowerCase.js
  'use strict';
  /**
   * Returns lowercased string
   */

  var lowerCase = function lowerCase(input) {
    return input.toLowerCase();
  };
  exports.lowerCase = lowerCase;
}, function (global, require, module, exports) {
  // removeWhitespace.js
  'use strict';
  /**
   * Removes whitespace (space, tab and newline)
   */

  var removeWhitespace = function removeWhitespace(input) {
    return input.replace(/\s/g, '');
  };
  exports.removeWhitespace = removeWhitespace;
}, function (global, require, module, exports) {
  // reverse.js
  'use strict';
  /**
  * Reverses string
  */

  var reverse = function reverse(input) {
    return input.split('').reverse().join('');
  };
  exports.reverse = reverse;
}, function (global, require, module, exports) {
  // upperCase.js
  'use strict';
  /**
   * Returns uppercased string
   */

  var upperCase = function upperCase(input) {
    return input.toUpperCase();
  };
  exports.upperCase = upperCase;
}]);

