'use strict';

const LinkedList = require('./linked-list.js');
const Node = require('./node.js');

let testList = new LinkedList;

module.exports = LinkedList.prototype.addNewNode = function(value) {
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
