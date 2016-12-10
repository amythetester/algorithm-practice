'use strict';

const Node = require('./node.js');
const LinkedList = require('./linked-list.js');

LinkedList.prototype.prependNewNode = function(value) {

  let newNode = new Node(value);

  if (!this.head) {
    this.head = newNode;
    return this;
  }

  let prev = this.head;

  this.head = newNode;

  this.head.next = prev;
  return this;
};

let testList = new LinkedList;

console.log(testList);
testList.prependNewNode(1);
console.log(testList);
testList.prependNewNode(2);
console.log(testList);
testList.prependNewNode(3);
console.log(testList);
testList.prependNewNode(4);
console.log(testList);
