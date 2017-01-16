'use strict';

// Write an algorithm to determine if a string has a duplicate character in it.

let testInput = 'golden';
let testInput2 = 'There';

function stringDuplicates(str) {
  if (str.length > 256) return false; // Only 256 ASCII characters

  str.sort();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i - 1]) return false;
  }
  return true;
}

stringDuplicates(testInput); // Should return true
stringDuplicates(testInput2); // Should return false
