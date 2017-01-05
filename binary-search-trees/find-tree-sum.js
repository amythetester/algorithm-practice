'use strict';

const BST = require('./tree.js');
const Node = require('./node.js');

let testTree = new BST();
testTree.addNewNode(10);
testTree.addNewNode(8);
testTree.addNewNode(11);
testTree.addNewNode(7);
testTree.addNewNode(9);
testTree.addNewNode(4);
testTree.addNewNode(10);
testTree.addNewNode(19);

function findSum(tree, target) {

  let path = [];

  function getSum(node, currentSum) {
    node.aggregatedSum = currentSum + node.value;
    if (node.aggregatedSum === target) {
      node.validPath = true;
      return true;
    }
    if (!node.validPath && node.left) node.validPath = getSum(node.left, node.aggregatedSum);
    if (!node.validPath && node.right) node.validPath = getSum(node.right, node.aggregatedSum);
    return node.validPath;
  }

  function findPath(node) {
    while (node && node.validPath) {
      path.push(node.value);
      if (node.left && node.left.validPath) node = node.left;
      else if (node.right && node.right.validPath) node = node.right;
      else node = null;
    }
    return path;
  }

  if (getSum(tree.root, 0)) {
    console.log('hit');
    return findPath(tree.root);
  }
  return false;
}

console.log(findSum(testTree, 18));
