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
  if(str === '') {
    return '';
  }
  let charArr = [];
  let equalCh = [];
  let ch = str[0];
  let result = '';
  equalCh.push(ch);
  for (let i = 1; i < str.length; i++) {
      if(str[i] !== ch) {
          charArr.push(equalCh);
          ch = str[i];
          equalCh = [];
      }
      equalCh.push(ch);
  }
  charArr.push(equalCh);
  charArr.forEach( (el) => {
      if(el.length === 1) {
          result += el[0];
      } else {
          result += el.length;
          result += el[0]
      }
  });
  return result;
}

module.exports = {
  encodeLine
};
