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

function findMiddle(list) {

  if (!list.head) return 'No head';

  if (!list.head.next) return list.head;

  let current = list.head;

  let half = list.head;

  while (current.next) {
    current = current.next;
    current = current.next;
    half = half.next;
  }
  console.log(half.value);
  return half;
}

findMiddle(testList);
