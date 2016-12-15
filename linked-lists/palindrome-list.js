'use strict';

//Node and LinkedList constructor functions
const Node = require('./node.js');
const LinkedList = require('./linked-list.js');

// LinkedList functions
const addNewNode = require('./add-new-node.js');

let testList = new LinkedList;

//preparing the list to be reversed
testList.addNewNode('R');
testList.addNewNode('A');
testList.addNewNode('C');
testList.addNewNode('E');
testList.addNewNode('C');
testList.addNewNode('A');
testList.addNewNode('R');

// function isPalindrome(node) {
//
//   for (let i = 0; i < array.length; i++) {
//     array[i]
//   }
// }

LinkedList.prototype.isPalindrome() {
  if (!list.head) return 'No head';
  if (!list.head.next) return list.head;

  let current = list.head;
  let half = list.head;
  let half2 = list.head;

  while (current) {

  }

}

isPalindrome(testList.head);
