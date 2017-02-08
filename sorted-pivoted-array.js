'use strict';

function findingN(arr, n) {

  return findN(arr, 0, arr.length - 1, n);

  function findN(arr, start, end, n) {

    let mid = Math.floor((start + end) / 2);
    console.log(mid);

    if (arr[mid] === n) {
      console.log('hit');
      console.log('mid', mid);
      return mid;
    }

    if (start === end)  return new Error(n + ' not found in input dataset');

    if (arr[start] <= arr[mid]) {

      if (n <= arr[mid] && n >= arr[start]) {
        return findN(arr, start, mid, n);
      }
      else {
        return findN(arr, mid, end, n);
      }
    }

    else {
      if (n >= arr[mid] && n <= arr[end]) {
        return findN(arr, mid + 1, end, n);
      }
      else return findN(arr, start, mid, n);
    }
  }
}

let testArray = [3, 4, 5, 6, 7, 1, 2];

console.log(findingN(testArray, 7));
