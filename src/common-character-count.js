const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let result=0;
  let arr1 = Array.from(s1);
  let arr2 = Array.from(s2);
  let amount1;
  let amount2;
  let char = '';
 
  arr1.sort();
  arr2.sort();
  for (let i=0; i<arr1.length; i++){
    if (arr1[i] !== arr1[i-1]){
      char = arr1[i];
     
    amount1=arr1.filter((elem)=>{
      if (elem === char) {
        return true
      };
    })
    
    amount2=arr2.filter((elem)=>{
      if (elem === char) {
        return true
      };
    });
    result += Math.min(amount1.length, amount2.length);
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
