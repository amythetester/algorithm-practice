'use strict';

//Node and LinkedList constructor functions
const LinkedList = require('./linked-list.js');
const Node = require('./node.js');

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

// Adding a node to the end of the list that will point to the head and be an infinite loop.
testList.head.next.next.next.next.next.next = testList.head;

function findMiddle(list) {

  if (!list.head) return 'No head';

  if (!list.head.next) return list.head;

  let current = list.head;

  let half = list.head;

  while (current.next) {
    current = current.next.next;
    half = half.next;
    // Validation to end the loop if one of the nodes points to the head.
    if (current === half) {
      console.log('List is an infinite loop.');
      return;
    }
  }
  console.log(half.value);
  return half;
}

findMiddle(testList);
