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

module.exports = BST.prototype.breadthTraversal = function() {

  if(!this.head) return console.log('No head');

  let queue = [];

  _breadthFirstTraversal(this.head);

  function _breadthFirstTraversal(node) {
    console.log(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right) ;

    if (queue.length) {
      _breadthFirstTraversal(queue.shift());
    }
  }
};

testTree.breadthTraversal();
