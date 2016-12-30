'use strict';

let str1 = 'ABBA';
let str2 = 'BAAB';

// Method below turns them from regular strings and turns them into JS arrays, allowing us to sort them and then compare their indices.

function compareTwoStrings(str1, str2) {
  if (str1.length !== str2.length) return false;

  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  return (str1 === str2);
}

console.log(compareTwoStrings(str1, str2));
