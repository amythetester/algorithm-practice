'use strict';

//Node and LinkedList constructor functions
const Node = require('./node.js');
const LinkedList = require('./linked-list.js');

// LinkedList functions
const addNewNode = require('./add-new-node.js');

let testList = new LinkedList;

//preparing the list to be reversed
testList.addNewNode(1);
testList.addNewNode(2);
testList.addNewNode(3);
testList.addNewNode(4);
testList.addNewNode(5);

//iterative version
function reverseLinkedList(list) {
  if (!list.head) return 'No head.';

  let current = list.head;
  let prev = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  list.head = prev;
  return (prev, 'NEW HEAD');
}

function reverseLinkedListRecursive(list) {

  if (!list.head) return 'No head';
  if (!list.head.next) return node;

  let current = list.head;
  let next = current.next;
  let prev = null;

  reverseLinkedList(current.next, next.next, null)

}

console.log(testList);// 1 > 2 > 3 > 4 > 5
reverseLinkedList(testList);
console.log(testList);// 5 > 4 > 3 > 2 > 1
console.log(testList);// 1 > 2 > 3 > 4 > 5
reverseLinkedListRecursive(testList);
console.log(testList);// 5 > 4 > 3 > 2 > 1
