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

}]));