const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(dirMach = true) {
    this.dirMach = dirMach;
    this.abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  };
  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }
    str = str.toUpperCase();
    key = key.toUpperCase();
    const arr = [];
    let j = 0;
    for (i = 0; i < str.length; i++) {
      if (this.abc.indexOf(str[i]) === -1) {
        arr.push(str[i]);
        continue;
      }
      let k = this.abc[((this.abc.indexOf(str[i]) + this.abc.indexOf(key[j])) % 26)];
      j++;
      if (j === key.length) {
        j = 0;
      }
      arr.push(k);
    }
    if (!this.dirMach) arr.reverse();
    return arr.join('');
  }
  decrypt(encryptedStr, key) {
    if (!encryptedStr || !key) {
      throw new Error('Incorrect arguments!');
    };
    encryptedStr = encryptedStr.toUpperCase();
    key = key.toUpperCase();
    const arr = [];
    let j = 0;
    for (i = 0; i < encryptedStr.length; i++) {
      if (this.abc.indexOf(encryptedStr[i]) === -1) {
        arr.push(encryptedStr[i]);
        continue;
      }
      let k = this.abc[(this.abc.indexOf(encryptedStr[i]) - this.abc.indexOf(key[j]) + 26) % 26]; 
      j++;
      if (j === key.length) {
        j = 0;
      }
      arr.push(k);
    }
    if (!this.dirMach) arr.reverse();
    return arr.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
