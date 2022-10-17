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
  constructor(direction=true) {
    this.derect = direction;
  }
  

  encrypt(originalStr, keyStr) {
    if (originalStr === undefined || keyStr === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let originalArr = [];
    let keyArr = [];
    let resultArr = [];    
    originalStr = originalStr.toUpperCase();
    keyStr = keyStr.toUpperCase(); 
    while (keyStr.length < originalStr.length) {
      keyStr+=keyStr;
    }
    originalArr = originalStr.split('');
    keyArr = keyStr.split('');
    originalArr.forEach((elem, index) => {
      if ((elem.charCodeAt()>64)&&(elem.charCodeAt()<91)){
        originalArr[index] = elem.charCodeAt()-65;
      }      
    });
  
    keyArr.forEach((elem, index) => {
      if ((elem.charCodeAt()>64)&&(elem.charCodeAt()<91)){
        keyArr[index] = elem.charCodeAt()-65;
      }      
    });

    for (let i=0, j=0; i< originalArr.length; i++ ){
      if (typeof originalArr[i] === 'number') {
        let result = ((originalArr[i]+keyArr[j])<26)?(originalArr[i]+keyArr[j]):((originalArr[i]+keyArr[j])-26);
        resultArr.push(String.fromCharCode(result+65));
        j++
      } else {
        resultArr.push(originalArr[i]);
      }
    }
      
    if (this.derect) {
      return resultArr.join('');
    } else {
      return resultArr.reverse().join('');
    }
   
    
  }
  
  decrypt(encryptedStr, keyStr) {
    if (encryptedStr === undefined || keyStr === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let encryptedArr = [];
    let keyArr = [];
    let resultArr = [];
    let resultStr = '';
    encryptedStr = encryptedStr.toUpperCase();
    keyStr = keyStr.toUpperCase(); 
    while (keyStr.length < encryptedStr.length) {
      keyStr+=keyStr;
    }
    encryptedArr = encryptedStr.split('');
    keyArr = keyStr.split('');
    encryptedArr.forEach((elem, index) => {
      if ((elem.charCodeAt()>64)&&(elem.charCodeAt()<91)){
        encryptedArr[index] = elem.charCodeAt()-65;
      }      
    });
   
    keyArr.forEach((elem, index) => {
      if ((elem.charCodeAt()>64)&&(elem.charCodeAt()<91)){
        keyArr[index] = elem.charCodeAt()-65;
      }      
    });
    
    for (let i=0, j=0; i< encryptedArr.length; i++ ){
      if (typeof encryptedArr[i] === 'number') {
        let result = ((encryptedArr[i]-keyArr[j])<0)?(((encryptedArr[i]-keyArr[j]))+26):((encryptedArr[i]-keyArr[j]));
        resultArr.push(String.fromCharCode(result+65));
        j++
      } else {
        resultArr.push(encryptedArr[i]);
      }
    }
     
    
   
    if (this.derect) {
      return resultArr.join('');
    } else {
      return resultArr.reverse().join('');
    }



  }
}

module.exports = {
  VigenereCipheringMachine
};
