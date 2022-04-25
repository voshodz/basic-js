const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */arr) {
    if(!Array.isArray(arr)) {
      return false
    }
    let arrOfNames = [];
    let res = ''
    for (let i = 0; i < arr.length; i++) {
      if(typeof(arr[i]) === 'string') {
        arrOfNames.push(arr[i].trim()) ;
      } 
    }
    arrOfNames = arrOfNames.sort( (a,b) => a.localeCompare(b))
    arrOfNames.forEach(element => {
       res += element[0].toUpperCase(); 
    });
    return res;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
