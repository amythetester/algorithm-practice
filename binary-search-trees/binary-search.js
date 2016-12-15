'use strict';

// Run a binary search on an array that has been 'flipped'
// no max/matchingBraces
// INPUT: A single number to search for
// OUTPUT: index of the number being searched for
// negative numbers
// Originally sorted in ascending order
// Can not manipulate the array in any way
// Integers Only
// Can use array methods
// The moves segment came from the beginning
// Optimize for both time and space


// Need to perform a search first that looks to the left, right and on the index to determine if the number is smaller or larger to the left, etc to figure out if it is incorrectly smaller/larger or whatever and
// then run another search within the bounds of that chunk

let testArray = [6, 7, 8, 9, 1, 2, 3, 4, 5];

function binarySearch(n, array) {

  let chunkStart;

  for (var i = 0; i < array.length; i++) {
    if (array[i] < array[i - 1]) chunkStart = array[i - 1];
  }


}
