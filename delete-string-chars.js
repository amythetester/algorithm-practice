'use strict';

function deleteStrChars(charArr, str) {

  let charObj = {};

  for (let i = 0; i < charArr.length; i++) {
    charObj[charArr[i]] = true;
  }

  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (charObj.hasOwnProperty(str[i])) continue;

    newStr = newStr + str[i];
  }
  return newStr;
}

let testDeletes = ['a', 'b', 'c'];

let testStr = 'abbreviate the cat';

console.log(deleteStrChars(testDeletes, testStr));
