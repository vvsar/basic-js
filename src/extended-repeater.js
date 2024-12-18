const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str != "string") str = String(str);
  const { repeatTimes, separator = '+', addition = '', additionRepeatTimes, additionSeparator = '|' } = options;
  let repeat = "";
  let addon = addition;
  for (i = 1; i < additionRepeatTimes; i++) {
    addon += `${additionSeparator}${addition}`;
  }
  for (j = 1; j < repeatTimes; j++) {
    repeat += `${separator}${str}${addon}`;
  }
  return `${str}${addon}${repeat}`
}

module.exports = {
  repeater
};
