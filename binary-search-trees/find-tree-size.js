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

module.exports = BST.prototype.findTreeSize = function() {
  if (!this.head) return console.log('No head. Size 0.');

  let counter = 0;

  _findTreeSize(this.head, 'head');

  function _findTreeSize(node, direction) {
    console.log(`${direction}: ${node}`);
    counter++;
    if (node.left) _findTreeSize(node.left, 'left');
    if (node.right) _findTreeSize(node.right, 'right');
  }
  return counter;
};

let result = testTree.findTreeSize();
console.log(result);
