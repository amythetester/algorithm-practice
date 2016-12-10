'use strict';

const LinkedList = require('./linked-list.js');
const Node = require('./node.js');

let testList = new LinkedList;

LinkedList.prototype.addNewNode = function(value) {
  let newNode = new Node(value);

  if (!this.head) {
    this.head = newNode;
    return this;
  }
  let current = this.head;

  while (current.next) {
    current = current.next;
  }

  current.next = newNode;
};

console.log(testList);
testList.addNewNode(1);
console.log(testList);
testList.addNewNode(2);
console.log(testList);
testList.addNewNode(3);
console.log(testList);
testList.addNewNode(4);
console.log(testList);
testList.addNewNode(5);
console.log(testList);
