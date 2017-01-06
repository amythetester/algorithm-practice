'use strict';

function MinStack() {
  this.stack = [];
  this.min = [];
}

MinStack.prototype.peek = function() {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.peekMin = function() {
  return this.min[this.min.length - 1];
};

MinStack.prototype.push = function(n) {
  this.stack.push(n);
  if (!n > this.peekMin()) this.min.push(n);
};

MinStack.prototype.pop = function() {
  if (this.stack.peek() === this.min.peekMin()) {
    this.min.pop();
  }
  return this.stack.pop();
};

let minnieStack = new MinStack();
