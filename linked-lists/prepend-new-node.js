'use strict';

const Node = require('./node.js');
const LinkedList = require('./linked-list.js');

module.exports = LinkedList.prototype.prependNewNode = function(value) {

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
