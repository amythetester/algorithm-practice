'use strict';

function isRotatedSubstr(str1, str2) {

  if (str1.length !== str2.length) return false;

  return isSubstring(str1 + str1, str2);
}

function isSubstring(str, substr) {
  return str.includes(substr);
}

console.log(isRotatedSubstr('waterbottle', 'terbottlewa'));
