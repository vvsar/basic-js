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
  while (str.length > 0) {
    let i = 0;
    while (str[i + 1] === str[i]) {
      i++;
    }
    if (i === 0) {
      newStr = `${newStr}${str[0]}`;
    } else {
      newStr = `${newStr}${i + 1}${str[0]}`;
    }
    str = str.slice(i + 1);
  }
  return newStr;
}

module.exports = {
  encodeLine
};
