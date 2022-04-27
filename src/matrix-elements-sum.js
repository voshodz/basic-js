const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum( matrix ) {
  let sum = 0;
  let res = [];
  let flag = true;
  const M = matrix.length;
  const N  = matrix[0].length;
  for (let i = 0; i < N; i++) {
      res.push([]);    
  }
  for(let i = 0; i < N;i++) {
      for(let j = 0; j < M;j++) {
          res[i].push(matrix[j][i]);
      } 
  }
  for(let i = 0; i < res.length;i++) {
      flag = true;
      for(let j = 0; j < res[i].length;j++) {
          if(res[i][j] === 0) {
              flag = false;
          }
          if(flag) {sum += res[i][j]}
      }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
