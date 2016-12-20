'use strict';

const BST = require('./tree.js');

require('./add-new-node.js');

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

// recursively
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

// iteratively

function breadthTraversalIter(root) {
  if (!root) return console.log('Not a valid input node.');

  let queue = [];

  queue.push(root);

  while (queue.length > 0) {
    let node = queue.shift();
    queueChildrenAndPrint(node, queue);
  }
}

function queueChildrenAndPrint(node, queue) {
  if (node.left) queue.push(node.left);
  if (node.right) queue.push(node.right);
  console.log(node.value);
}

breadthTraversalIter(testTree.head);
