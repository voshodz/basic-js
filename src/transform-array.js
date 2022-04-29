const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform( arr ) {
  //console.log(arr);
  if (!Array.isArray(arr))
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  let tmpArr = [];
  let splittedArr = [];
  let result = [];
  let flattedArr = [];
  flag = true;
    for (let i = 0; i < arr.length; i++) {
      if( (arr[i] === '--discard-next') || 
          (arr[i] === '--discard-prev') || 
          (arr[i] === '--double-next') ||
          (arr[i] === '--double-prev') ) {
            flag = false;
          }
      if(Number.isInteger(arr[i])) {
        tmpArr.push(arr[i]);
      } else {
        splittedArr.push(tmpArr);
        splittedArr.push(arr[i]);
        tmpArr = [];
      }
    }
    splittedArr.push(tmpArr);
    if(flag) {
      console.log(arr);
      return arr;
    }
  for (let i = 0; i < splittedArr.length; i++) {
    if(splittedArr[i] === '--discard-next' ) {
      splittedArr[i+1] = []; 
    }
    if(splittedArr[i] === '--discard-prev' ) {
      splittedArr[i-1].pop(); 
    }
    if(splittedArr[i] === '--double-next' ) {
      if(splittedArr[i+1].length === 1) {
        let tmpNumber = splittedArr[i+1][0];
        splittedArr[i+1].push(tmpNumber);

      }
    }
    if(splittedArr[i] === '--double-prev' ) {
      if(splittedArr[i-1].length !== 0) {
        let tmpNumber = splittedArr[i-1][0];
        splittedArr[i-1].push(tmpNumber);
      }
    } 
  }
  flattedArr = splittedArr.flat(1);
  for (let i = 0; i < flattedArr.length; i++) {
      if( (flattedArr[i] !== '--discard-next') && 
          (flattedArr[i] !== '--discard-prev') && 
          (flattedArr[i] !== '--double-next') &&
          (flattedArr[i] !== '--double-prev') ) {
        result.push(flattedArr[i])
      }
    }

  //console.log(flattedArr);
  console.log(result);
  //console.log(splittedArr);
  return result
}

module.exports = {
  transform
};
