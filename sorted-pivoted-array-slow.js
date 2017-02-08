'use strict';

function findingN(arr, n) {

  let mid = Math.floor((arr.length - 1) / 2);

  if (arr[mid] === n) return mid;

  if (arr[mid] >= arr[arr.length - 1]) {
    if (n >= arr[0] && n <= arr[mid]) {
      for (let i = 0; i < mid; i++) {
        console.log('hit');
        if (arr[i] === n) return i;
      }
      return false;
    }
    else {
      for (let i = mid; i <= arr.length - 1; i++) {
        if (arr[i] === n) return i;
      }
      return false;
    }
  }
  else {
    for (let i = mid; i <= arr.length - 1; i++) {
      if (arr[i] === n) return i;
    }
    return false;
  }

}

let testArray = [3, 4, 5, 6, 7, 1, 2];

console.log(findingN(testArray, 3));
