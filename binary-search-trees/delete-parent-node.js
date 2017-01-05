'use strict';

const BST = require('./tree.js');

const addNewNode = require('./add-new-node.js');

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
testTree.addNewNode(30);
// console.log(testTree);

BST.prototype.deleteNode = function(value) {
  let tP, node;
  node = this.head;
  while (node.value !== value) {
    tP = node;
    (value < node.value) ? node = node.left : node.right;
  }
  // tL = node.left;
  (tP.value > value) ? tP.left = node.right : tP.right = node.right;
  // tP.right = node.right;
  let newLeft = node.left;
  node = node.right;
  while (node.left) {
    node = node.left;
  }
  node.left = newLeft;
  return this;
};

testTree.deleteNode(25);
