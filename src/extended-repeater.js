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
  
  let arrAddition = [];
  let arrStr = [];
  str = ''+ str;
  
  if (options === undefined) {
    return str
  }
  if (!("separator" in options)){
    options.separator = '+';
  }
  if (!("additionSeparator" in options)){
    options.additionSeparator = '|';
  }
  if ("addition" in options){
    options.addition = ''+ options.addition;
  }
  
  if ("additionRepeatTimes" in options){
    for (let i = 0; i<options.additionRepeatTimes; i++){
      if ("addition" in options) {arrAddition.push(options.addition)};
    }
  } else {
    if ("addition" in options) {arrAddition.push(options.addition)};
  }

  str= str + arrAddition.join(options.additionSeparator);
  if ("repeatTimes" in options){
    for (let i = 0; i<options.repeatTimes; i++){
      arrStr.push(str);
    }
  } else {
    arrStr.push(str);
  }
  
  return arrStr.join(options.separator);
}

module.exports = {
  repeater
};
