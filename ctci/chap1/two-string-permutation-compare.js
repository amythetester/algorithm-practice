'use strict';

let str1 = 'ABBA';
let str2 = 'BAAB';

function compareTwoStrings(str1, str2) {
  let array1 = str1.split('').sort();
  let array2 = str2.split('').sort();

  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (!(array1[i] === array2[i])) return false;
  }
  return true;
}

console.log(compareTwoStrings(str1, str2));
