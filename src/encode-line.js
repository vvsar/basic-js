const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length < 2) return str;
  let newStr = '';
  let letters = Array.from(new Set(str)).sort();
  for (let i = 0; i < letters.length; i++) {
    let c = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[j] === letters[i]) c++;
    }
    newStr = `${newStr}${c}${letters[i]}`;
  }
  return newStr;
}

module.exports = {
  encodeLine
};
