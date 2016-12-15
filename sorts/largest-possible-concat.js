'use strict';

let testInput = [95, 6, 42, 9, 99];
// expected output 9/99/95642

// if length is smaller but same #, move to left
// need a sort that sorts based on
// Sort based on

// Check two numbers against each other. For each number:
// The greater the value of the last index in the digit, the further left it pulls.
// the fewer digits and the higher the number in the lower place, the further left pushed
// if '9', ALWAYS go all the way left

let mergeSort = module.exports = function(arr) {
  let mid = Math.floor(arr.length / 2);
  let arrayLeft = arr.slice(0, mid);
  let arrayRight = arr.slice(mid);
  while (arr.length > 1) {
    return merge(mergeSort(arrayLeft), mergeSort(arrayRight));
  }
  return arr;
};

function merge(leftArray, rightArray) {

  let leftPointer = 0;
  let rightPointer = 0;
  let leftValue;
  let rightValue;
  let mergedArray = [];


  while (leftPointer < leftArray.length && rightPointer < rightArray.length) {
    leftValue = leftArray[leftPointer].toString().split('');
    rightValue = rightArray[rightPointer].toString().split('');

    // compare as we go.
    // if one is a smaller value than the other AND the other hits null next, the one hitting null is larger and gets sorted left
    // e.g. 99 vs 998 <-- 99 gets pushed into the new array
    // if they are the same number, they stay sorted the same.
    // if one is a
    // e.g. 9999999 vs 88
    // if X is smaller than the other and the next is NOT null, push Y left.
    // 99998 vs 9993
    if (leftValue <= rightValue) {
      mergedArray.push(leftValue);
      leftPointer++;
    } else {
      mergedArray.push(rightValue);
      rightPointer++;
    }
  }

  if (!leftArray[leftPointer]) mergedArray = mergedArray.concat(rightArray.slice(rightPointer));
  if (!rightArray[rightPointer]) mergedArray = mergedArray.concat(leftArray.slice(leftPointer));

  return mergedArray;
}

console.log(testInput[0].toString().split(''));

let var1 = testInput[0].toString().split('');
let var2 = testInput[4].toString().split('');
console.log(var1);
console.log(var2);

function test(){
  for (let i = 0; i < var1.length; i++) {
    console.log('hit');
    if (parseInt(var1[i]) > (parseInt(var2[i]))) {
      return console.log('Stuff');
    }
    if (parseInt(var1[i]) > parseInt(var2[i])) {
      return console.log('THINGS');
    }
  }
}

console.log(test());
