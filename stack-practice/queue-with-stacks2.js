'use strict';

// Implement a queue using two stacks

let stack1 = [];
let stack2 = [];

Array.prototype.isEmpty = function() {
  if (this.length === 0) return true;
  else return false;
};

Array.prototype.peek = function() {
  return this[0];
};

function enqueue(num) {
  stack1.push(num);
}

function dequeue() {

  if (stack2.isEmpty()) {
    while (!stack1.isEmpty()) {
      stack2.push(stack1.pop());
    }
  }
  return stack2.shift();
}


enqueue(1);
enqueue(2);
enqueue(3);
enqueue(4);
enqueue(5);

console.log(dequeue());
console.log(dequeue());
console.log(dequeue());
console.log(dequeue());
console.log(dequeue());
