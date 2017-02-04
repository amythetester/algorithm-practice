'use strict';

function maxUniques(str) {
  let map = {};
  let maxCount = 1;
  let newStr = str.split(' ');
  let letter;
  let highest = newStr[0];

  for(let i = 0; i < newStr.length; i++) {
    map = {};
    if (newStr[i].length <= maxCount) continue;
    for(let j = 0; j < newStr[i].length; j++) {
      letter = newStr[i][j];
      if (map[letter]) continue;
      else map[letter] = true;
    }
    if (Object.keys(map).length > maxCount) {
      highest = newStr[i];
      maxCount = Object.keys(map).length;
    }
  }
  return highest;
}

let testString = 'aaa bbb the falling abcdefghij1';

console.log(maxUniques(testString));
