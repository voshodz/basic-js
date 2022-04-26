const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  //console.log(str);
  addString = "";
  resultString = "";
  console.log(options.additionSeparator);
  for (let i = 0; i < options.additionRepeatTimes-1; i++) {
      addString += options.addition;
      addString += options.additionSeparator;  
  }
  addString += options.addition;
  //console.log(addString);
  
  for(let i = 0; i < options.repeatTimes-1;i++) {
      resultString += str;
      resultString += addString;
      resultString += options.separator;
  }   
  resultString += str;
  resultString += addString;
  //console.log(resultString);
  return resultString
}

module.exports = {
  repeater
};
