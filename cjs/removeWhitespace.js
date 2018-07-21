'use strict';
/**
 * Removes whitespace (space, tab and newline)
 */
const removeWhitespace = (input) => {
  return input.replace(/\s/g, '')
}
exports.removeWhitespace = removeWhitespace
