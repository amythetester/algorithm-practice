'use strict';

// Run a binary search on an array that has been 'flipped'
// no max/matchingBraces
// INPUT: A single number to search for
// OUTPUT: index of the number being searched for
// negative numbers
// Originally sorted in ascending order
// Can not manipulate the array in any way
// Integers Only
// Can use array methods
// The moves segment came from the beginning
// Optimize for both time and space


// Need to perform a search first that looks to the left, right and on the index to determine if the number is smaller or larger to the left, etc to figure out if it is incorrectly smaller/larger or whatever and
// then run another search within the bounds of that chunk

let testArray = [-5, -1, 0, 3, 5, 8, 12, 15];

function binarySearch(arr, n) {
  let mid;

  return _binarySearch(0, arr.length - 1);

  function _binarySearch(arrStart, arrEnd) {
    mid = Math.floor((arrStart + arrEnd) / 2);

    if (arr[mid] === n) {
      return mid;
    }

    if (arrStart === arrEnd && arr[mid] !== n) return false;

    if (n > arr[mid]) return _binarySearch(mid + 1, arrEnd);
    if (n < arr[mid]) return _binarySearch(arrStart, mid - 1);
    return;
  }
}

console.log(binarySearch(testArray, 0));
