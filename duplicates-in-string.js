'use strict';

function duplicatesInString(str) {

  let key = {};

  for (let i = 0; i < str.length; i++) {
    let curr = str[i];

    if (!key[curr]) key[curr] = true;
    else return false;
  }
  return true;
}

console.log(duplicatesInString('c'));
