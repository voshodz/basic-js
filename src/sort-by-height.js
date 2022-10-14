const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr ) {
  let res = [];
  arr.forEach((el, index) => {
    if (el === -1) {
      res[index] = -1;
    } else {
      res[index] = 0;
    }
  });
  arr.sort((a, b) => a - b);
  tmpArr = [];
  arr.forEach((el) => {
    if (el !== -1) {
      tmpArr.push(el);
    }
  });
  let j = 0;
  for (let i = 0; i < res.length; i++) {
    if (res[i] !== -1) {
      res[i] = tmpArr[j]
      j += 1;
    }
  }
  return res;
}

module.exports = {
  sortByHeight
};
