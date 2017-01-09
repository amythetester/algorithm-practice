'use strict';

// Determine if a binary tree is a BST (smaller vals always to left; larger always to right)

const BST = require('./tree.js');
const Node = require('./node.js');

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

// Adding in a larger node all the way to the left to ensure the method is working.
testTree.head.left.left.left.left = new Node(500);

module.exports = BST.prototype.isTreeBalanced = function() {
  if (!this.head) throw new Error('Tree has no root node.');

  let queue = [];
  queue.push(this.head);

  while (queue.length > 0) {
    let node = queue.shift();

    if (node.left) {
      if (node.value < node.left.value) return false;
      queue.push(node.left);
    }

    if (node.right) {
      if (node.value > node.right.value) return false;
      queue.push(node.right);
    }
  }
  return true;
};

console.log(testTree.isTreeBalanced());
