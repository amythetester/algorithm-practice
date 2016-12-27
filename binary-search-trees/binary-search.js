'use strict';

// Implemented binary search on an array. Runtime is O(logN) because we halve our dataset continually.

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
