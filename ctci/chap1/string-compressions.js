'use strict';

function compressStr(inputStr) {
  let outputArr = [];
  let temp;
  let counter = 0;

  for (let i = 0; i <= inputStr.length; i++) {

    if(!temp) temp = inputStr[i];

    if (temp === inputStr[i]) counter++;

    else {
      counter === 1 ? outputArr.push(temp) : outputArr.push(temp + counter);
      counter = 1;
      temp = inputStr[i];
    }
  }
  return outputArr.join('');
}

console.log(compressStr('aaabbccccca'));
