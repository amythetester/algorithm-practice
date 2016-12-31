'use strict';

//Node and LinkedList constructor functions
const LinkedList = require('./linked-list.js');

// LinkedList functions
const addNewNode = require('./add-new-node.js');

let testList = new LinkedList;

//preparing the list to be reversed
testList.addNewNode(6);
testList.addNewNode(5);
testList.addNewNode(4);
testList.addNewNode(3);
testList.addNewNode(1);
testList.addNewNode(0);

function leftAndRightOfN(list, n) {
  if (!list.head) throw new Error('List has no head.');

  let smallHead, largeHead, smallTail, largeTail;

  let node = list.head;

  while (node) {
    let next = node.next;
    node.next = null;
    if (node.value >= n) {
      if (!largeTail) {
        largeTail = largeHead = node;
      }
      else {
        largeTail = largeTail.next = node;
      }
    }
    if (node.value < n) {
      if (!smallTail) {
        smallTail = smallHead = node;
      }
      else {
        smallTail = smallTail.next = node;
      }
    }
    node = next;
  }
  if (smallTail) smallTail.next = largeHead;
  return smallHead || largeHead;
}

console.log(leftAndRightOfN(testList, 4));
