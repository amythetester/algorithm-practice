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

module.exports = BST.prototype.findNextSmallest = function() {

  if (!this.head) return null;

  if (!this.head.left && !this.head.right) {
    console.log('No other nodes aside from head.');
    return;
  }

  let node = this.head.left;

  _findNextSmallest(node);

  function _findNextSmallest(node) {

    if (node.right === null) {
      console.log('THE NEXT SMALLEST IS', node);
      return node;
    }

    if (node.right) _findNextSmallest(node.right);
  }
};

testTree.findNextSmallest();
