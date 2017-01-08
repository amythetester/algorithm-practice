'use strict';

// Given an array of integers and an input n, return true if two integers in the array add up to N.

// Naive O(N^2) solution.
// function findSumFromTwo(n, arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === n) return true;
//     }
//   }
//   return false;
// }
//

// Better solution. O(n)

function findSumFromTwo(n, arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = true;
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(map);
    let temp = n - arr[i];
    if (map.hasOwnProperty(temp) && temp !== arr[i]) return true;
  }
  return false;
}

console.log(findSumFromTwo(4, [1, 2, 3, 4]));
