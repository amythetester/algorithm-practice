'use strict';

let testArray = [45, 1, 0, 8, 24, 100, 89, 6, 4, 12];

function selectionSort(array) {

  let min;
  let temp;

  for (let i = 0; i < array.length; i++) {

    min = array[i];

    for (let j = 0; j < array.length; j++) {
      if (array[j] > min) {
        temp = array[i];
        min = array[j];
        array[j] = temp;
        array[i] = min;
      }
    }
  }
  return array;
}

// function findMin() {
// }

console.log(selectionSort(testArray));
