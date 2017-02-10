'use strict';

function strReverse(str) {
  let strArray = str.split(' ');
  let answer = [];

  for (let i = strArray.length - 1; i >= 0; i--) answer.push(strArray[i]);

  str = answer.join(' ');

  return str;
}

let testString = 'Do or do not. There is no try.';

console.log(strReverse(testString));
