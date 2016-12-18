'use strict';

const BST = require('./tree.js');

const addNewNode = require('./add-new-node.js');

let testTree = new BST();

// Can create a property on the node constructor to store the aggregated value of the parents above it so far.

// Setting up the tree to be used by the depth finder.
testTree.addNewNode(50);
testTree.addNewNode(25);
testTree.addNewNode(75);
testTree.addNewNode(100);
testTree.addNewNode(10);
testTree.addNewNode(45);
testTree.addNewNode(11);
testTree.addNewNode(70);
testTree.addNewNode(19);
testTree.addNewNode(4);

// Test input sum will be 120
// Will traverse through 50, 75, 45 to find the answer.

BST.prototype.findTreeSum = function(num) {
  if (!this.head) return null;
  if ( num < this.head.value) return false;

  console.log(num - this.head.value);
  return findSum(this.head, num - this.head.value);

  function findSum(node, remainder) {
    console.log(remainder);
    // console.log('NODE LEFT VALUE', node.left.value);
    // if (node) remainder = remainder - node.value;
    if (remainder === 0) return true;

    if (node.right && node.left) {
      remainder -= (node.left.value + node.right.value);
      // console.log(remainder);
      if (remainder === 0) return true;
      remainder += (node.left.value + node.right.value);
    }

    if (node.left) {
      remainder -= node.left.value;
      // console.log(remainder);
      if (remainder === 0) return true;
      remainder += node.left.value;
    }

    if (node.right) {
      remainder -= node.right.value;
      if (remainder === 0) return true;
      remainder += node.right.value;
    }

    if (node.left !== null && node.right !== null) findSum(node.left, remainder += node.right.value);
    if (node.left) findSum(node.left, remainder);
    if (node.right !== null && node.left !== null) findSum(node.right, remainder += node.left.value);
    if (node.right) findSum(node.right, remainder);

    return false;
  }
};

console.log(testTree.findTreeSum(125));
