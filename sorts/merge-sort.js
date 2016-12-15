'use strict';

//Take an array and cut it in half until every index has only a single index
// e.g. [1, 5, 4, 3] -> [1, 5], [4, 3] -> [[1] [5] [4] [3]]
// Write a function that takes in two arrays where each have a pointer to the first index and each loops through.
// If the value at one of the indices is smaller than the other, push the smaller one to the new array, and increment the pointer.
// If one of the arrays being merged is emptied, concat the array with indices still left to the end of the new array.

// call merge onto the sorted halves.

//mergeSort(arr)
// merge (mergeSort(arr, 0, mid), mergeSort(arr, mid + 1, arr.length))

// merge takes left and right arrays.
// pointers to left and right are compared, push lower to array (prefer left), advance lower pointer until one empties, concat the non-empty.

function mergeSort(arr) {
  let mid = Math.floor(arr.length / 2);
  let arrayLeft = arr.slice(0, mid);
  let arrayRight = arr.slice(mid);
  while (arr.length > 1) {
    return merge(mergeSort(arrayLeft), mergeSort(arrayRight));
  }
  return arr;
}

function merge(leftArray, rightArray) {

  let leftPointer = 0;
  let rightPointer = 0;
  let leftValue;
  let rightValue;
  let mergedArray = [];


  while (leftPointer < leftArray.length && rightPointer < rightArray.length) {
    leftValue = leftArray[leftPointer];
    rightValue = rightArray[rightPointer];
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

let testArray1 = [1, 12, 4, 33, 2];

console.log(mergeSort(testArray1));
