'use strict';

const LinkedList = require('./linked-list.js');
const addNewNode = require('./add-new-node.js');

// LinkedList functions
let testList = new LinkedList;
//preparing the list to be reversed
testList.addNewNode(1);
testList.addNewNode(2);
testList.addNewNode(3);
testList.addNewNode(4);
testList.addNewNode(5);
testList.addNewNode(6);
testList.addNewNode(7);

// write an algorithm that groups all odd nodes, followed by all even nodes.
// input: 1 > 2 > 3 > 4 > 5 > 6
// output: 1 > 3 > 5 > 2 > 4 > 6


function groupOddEven(list) {

  let evenHead = list.head.next;
  let oddPointer = list.head;
  let evenPointer = list.head.next;

  while (oddPointer !== null && evenPointer !== null ) {

    oddPointer.next = evenPointer.next;
    oddPointer = evenPointer.next;

    evenPointer.next = oddPointer.next;
    evenPointer = oddPointer.next;
  }

  oddPointer.next = evenHead;
  return list;
}

console.log(groupOddEven(testList));
