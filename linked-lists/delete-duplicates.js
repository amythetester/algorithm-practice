'use strict';

//Node and LinkedList constructor functions
const LinkedList = require('./linked-list.js');

// LinkedList functions
const addNewNode = require('./add-new-node.js');

let testList = new LinkedList;

//preparing the list to be reversed
testList.addNewNode(1);
testList.addNewNode(2);
testList.addNewNode(1);
testList.addNewNode(4);
testList.addNewNode(5);
testList.addNewNode(1);
testList.addNewNode(1);

function removeDuplicates(list) {
  if (!list.head) throw new Error('No list head.');

  let current = list.head;
  let prev = list.head;
  let temp;
  let map = {};

  while (current.next) {
    current = current.next;
    temp = prev.next;
    if (map.hasOwnProperty(current.value)) {
      prev.next = current.next;
    }
    map[prev.value] = true;
    prev = temp;
  }
  return list.head;
}

console.log(removeDuplicates(testList));
