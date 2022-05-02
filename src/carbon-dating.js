const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const koef = 0.693;
/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample( sampleActivity) {
      numb = Number(sampleActivity);
      if( (typeof(sampleActivity) !== 'string')
      || (Number.isNaN(numb)) ) {
        return false;
      }
      if( (numb <= 0) || (numb > 15 ) ) {
        return false;
      }
      let result;
      result = (Math.log(MODERN_ACTIVITY / numb));
      result = result / (koef / HALF_LIFE_PERIOD);
      return Math.ceil(result);
  } 


module.exports = {
  dateSample
};
