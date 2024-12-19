const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(String(value));
    return this;
  },
  removeLink(pos) {
    if (typeof pos === 'number' && Number.isInteger(pos) && (pos > 0 && pos <= this.array.length)) {
      this.array.splice(pos - 1, 1);
      return this;
    }
    this.array = [];
    throw new Error('You can\'t remove incorrect link!');
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let str = `( ${this.array.join(' )~~( ')} )`;
    this.array = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
