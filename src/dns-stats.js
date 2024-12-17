const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  function formArrayMembers(array) {
    for (let j = 1; j < array.length; j++) {
      array[j] = array[j - 1] + '.' + array[j];
    }
    return array;
  }
  const result = {};
  let dmns = domains.slice();
  dmns = dmns.map((el) => el.split('.').reverse());
  dmns = dmns.map((el) => formArrayMembers(el));
  dmns = dmns.flat().sort();
  for (let k = 0; k < dmns.length; k++) {
    result[`.${dmns[k]}`] = 1;
    if (dmns[k + 1] === dmns[k]) {
      result[`.${dmns[k]}`]++;
      k++;
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
