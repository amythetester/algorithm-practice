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
