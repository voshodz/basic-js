const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr : [],
  getLength() {
    return this.arr.length;
  },
  addLink( value ) {
    value === undefined ? (this.arr.push( '(  )')) : this.arr.push( '( ' + value + ' )')
    return this
  },
  removeLink(pos) {
    if ( (pos <= 0) || (pos >= this.arr.length) || !(Number.isInteger(pos)) ) {
      this.arr=[];
      throw new Error('You can\'t remove incorrect link!');
    } else {
      this.arr.splice(pos-1, 1);
      return this;
    }  
  },
  reverseChain() {
    this.arr = this.arr.reverse()
    return this
  },
  finishChain() {
    let res = this.arr.join('~~');
    this.arr = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
