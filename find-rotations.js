'use strict';

function findRotations(arr) {

  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((arr.length - 1) / 2);

  while (start !== end) {
    if (arr[mid] < arr[mid - 1]) {
      return mid;
    }
    else if (arr[mid] > arr[mid + 1]) {
      return mid + 1;
    }

    else if (arr[end] < arr[mid]) {
      start = mid;
      mid = Math.floor((start + end) / 2);
    }

    else if (arr[start] > arr[mid]) {
      end = mid;
      mid = Math.floor((start + end) / 2);
    }
    else return 0;
  }
  return 0;
}

let testArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(findRotations(testArray));
