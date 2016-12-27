'use strict';

// Function to find all of the instances of the same number in a sorted array.

let testArray = [-5, -1, 0, 0, 0, 0, 0, 0, 3, 5, 8, 12, 15];

function binarySearch(arr, n) {
  let mid;

  return _binarySearch(0, arr.length - 1);

  function _binarySearch(arrStart, arrEnd) {
    let counter = 1;

    mid = Math.floor((arrStart + arrEnd) / 2);

    if (arr[mid] === n) {
      let midL = mid;
      let midR = mid;

      while (arr[midL - 1] === n) {
        counter++;
        midL = midL - 1;
      }
      while (arr[midR + 1] === n) {
        counter++;
        midR = midR + 1;
      }
      return counter;
    }

    if (arrStart === arrEnd && arr[mid] !== n) return false;

    if (n > arr[mid]) return _binarySearch(mid + 1, arrEnd);
    if (n < arr[mid]) return _binarySearch(arrStart, mid - 1);
    return;
  }
}

console.log(binarySearch(testArray, 2));
