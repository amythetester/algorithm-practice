'use strict';

const BST = require('./tree.js');
const Node = require('./node.js');

module.exports = BST.prototype.addNewNode = function(value) {

  let tempNode = new Node(value);

  if (!this.head) {
    this.head = tempNode;
    return;
  }

  let current = this.head;

  while(current) {
    if (tempNode.value < current.value) {
      if (!current.left) {
        current.left = tempNode;
        return;
      }
      current = current.left;
    }
    if (tempNode.value > current.value) {
      if (!current.right) {
        current.right = tempNode;
        return;
      }
      current = current.right;
    }
  }
};
