const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  arrChain: [],
  getLength() {
    return this.arrChain.length;
  },
  addLink(value) {
    if (value ===''){
      this.arrChain.push('( )');
    } else {
      this.arrChain.push('( '+ value + ' )')
    }
    return chainMaker;
  },
  removeLink(position) {
    position--;
    if ((typeof position !=="number")||((position % 1)!== 0)||(position > this.arrChain.length-1)||(position < 0)){
      this.arrChain = [];
      throw new Error(`You can't remove incorrect link!`);      
    }
    this.arrChain.splice(position, 1);
    return chainMaker;
  },
  reverseChain() {
    this.arrChain.reverse();
    return chainMaker;
  },
  finishChain() {
    let result = this.arrChain.join('~~');
    this.arrChain = [];
    return result
  }
};

module.exports = {
  chainMaker
};
