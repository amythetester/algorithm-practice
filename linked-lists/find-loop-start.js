'use strict';

//Node and LinkedList constructor functions
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
testList.addNewNode(6);
testList.addNewNode(7);

// Below code sets the node with the value of 7 to have a next point at the node w/ value 4
testList.head.next.next.next.next.next.next.next = testList.head.next.next.next;

function findStartOfLoopedList(list) {
  if (!list.head) throw new Error('No head to the list.');

  let pointer = list.head;

  while (!pointer.alreadyVisited) {
    pointer.alreadyVisited = true;
    pointer = pointer.next;
  }
  return pointer;
}

console.log(findStartOfLoopedList(testList));
