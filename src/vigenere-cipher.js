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
  constructor(isDirect = true) {
      if( (isDirect === true) || (isDirect === false) ) {
        this.directMachine = isDirect;
      } else {
        throw new Error("Incorrect arguments!");
      }
  }
  charCode = (ch) => {
    return ch.charCodeAt(0)-65
  }
  encrypt = (message, key) => {
      if( typeof(message) !== 'string' || typeof(key) !== 'string'  ) { throw new Error("Incorrect arguments!");}
      let result = "";
      let upMsg = message.toUpperCase();
      let upKey = key.toUpperCase();
      let indexOfKey = 0;
      for (let i = 0; i < upMsg.length; i++) {
        if( (this.charCode(upMsg[i]) >=0) && (this.charCode(upMsg[i]) <= 25)) {
            if(indexOfKey>upKey.length-1) {indexOfKey = 0;}
            result += String.fromCharCode
                    ( (this.charCode(upMsg[i]) + this.charCode(upKey[indexOfKey]))
                      % 26 + 65
                    );     
            indexOfKey++;
        } else {
          result += upMsg[i];
        }         
      }
      if(this.directMachine === true) {
        return result;
      } else {
        return result.split('').reverse().join('');
      }
    }
  decrypt = (message, key) => {
      if( typeof(message) !== 'string' || typeof(key) !== 'string' ) {throw new Error("Incorrect arguments!");}
      let result = "";
      let upMsg = message.toUpperCase();
      let upKey = key.toUpperCase();
      let indexOfKey = 0;
      for (let i = 0; i < upMsg.length; i++) {
        if( (this.charCode(upMsg[i]) >=0) && (this.charCode(upMsg[i]) <= 25)) {
            if(indexOfKey>upKey.length-1) {indexOfKey = 0;}
            result += String.fromCharCode
                    (( this.charCode(upMsg[i]) - this.charCode(upKey[indexOfKey]) + 26)
                      % 26 + 65
                    );     
            indexOfKey++;
        } else {
          result += upMsg[i];
        }         
      }
      if(this.directMachine === true) {
        return result;
      } else {
        return result.split('').reverse().join('');
      }
  }
}

module.exports = {
  VigenereCipheringMachine
};
