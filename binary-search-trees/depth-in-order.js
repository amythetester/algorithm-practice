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

module.exports = BST.prototype.depthTraversal = function() {
  if (!this.head) return null;

  if (!this.head.left && !this.head.right) {
    console.log('1');
    return 1;
  }
  _depthFirstTraversal(this.head, 'head');

  function _depthFirstTraversal(node, direction) {

    if (node.left) _depthFirstTraversal(node.left, 'left: ');

    console.log(`${direction} ${node.value}`);

    if (node.right) _depthFirstTraversal(node.right, 'right: ');
  }
};
//running in on the created tree above
testTree.depthTraversal();
