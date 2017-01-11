'use strict';

import BST from './tree';
import addNewNode from './add-new-node'

// Build a BST from an array
// Size large, but doesn't matter
// Keep any binary search tree operation optimal
//

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function buildBST(array)  {
  // Sort it first
  array = array.sort();

  let node = array[Math.floor(array.length/2)]


}
