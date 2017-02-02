'use strict';

function maxRepeat(str) {
  let map = {};
  let maxCount = 1;
  let newStr = str.split(' ');
  let letter;
  let highest = newStr[0];

  for(let i = 0; i < newStr.length; i++) {
    map = {};
    if(newStr[i].length <= maxCount) continue;
    for(let j =0; j < newStr[i].length; j++) {
      letter = newStr[i][j];
      if (map[letter]) {
        map[letter]++;
        if (map[letter] > maxCount) {
          maxCount = map[letter];
          highest = newStr[i];
        }
      }
      else map[letter] = 1;
    }
  }
  return highest;
}

let testString = 'ooooolong stuff indeeddddddddddd';

console.log(maxRepeat(testString));
