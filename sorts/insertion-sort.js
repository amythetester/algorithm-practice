'use strict';

function insertionSort(arr) {
  let current;
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    current = arr[i];
    for (; j >= 0 && arr[j] > current; j--) arr[j + 1] = arr[j];
    arr[j + 1] = current;
  }
  return arr;
}

let testArray = [8, 1, 45, 4, 12, 30, 5];

console.log(insertionSort(testArray));
