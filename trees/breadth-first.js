'use strict';

const BST = require('../binary-search-trees/tree.js');
const addNewNode = require('../binary-search-trees/add-new-node.js');

let testTree = new BST();

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

// implementing my own isEmpty function
Array.prototype.isEmpty = function() {
  if (this.length === 0) return true;
  // else {
  return false;
  // }
};

function breadthSearch(head) {

  let queue = [];

  queue.push(head);

  while (!queue.isEmpty()) {
    let tempNode = queue.shift();
    console.log(tempNode.value);
    if (tempNode.left) queue.push(tempNode.left);
    if (tempNode.right) queue.push(tempNode.right);
  }
}

breadthSearch(testTree.head);
