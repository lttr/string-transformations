'use strict';
const compose = (...functions) => (initial) =>
  functions.reduce((val, func) => func(val), initial)
exports.compose = compose
