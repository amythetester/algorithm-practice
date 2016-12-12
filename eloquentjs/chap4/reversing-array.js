'use strict';

let testArray = [1,2,3,4,5];

function reverseArray(array) {
  let reversed = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

function reverseArrayInPlace(array) {

  let firstNum = null;
  let lastNum = null;
  let save = null;
  let length = array.length;

  for (firstNum = 0, lastNum = length - 1; firstNum < Math.floor(length / 2); firstNum++, lastNum--) {
    save = array[firstNum];
    array[firstNum] = array[lastNum];
    array[lastNum] = save;
  }
  return array;
}
