'use strict';

const LinkedList = require('./linked-list.js');

module.exports = LinkedList.prototype.deleteNode = function(nodeValue) {
  if (!this.head) throw new Error('List has no head node.');

  let current = this.head;
  let prev = this.head;

  while(current.next) {
    current = current.next;
    if (current.value === nodeValue) {
      prev.next = current.next;
    }
    prev = prev.next;
  }
};

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

console.log(testList);
