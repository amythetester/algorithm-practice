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

function enqueue(input) {
  stack1.push(input);
}

enqueue(1);
enqueue(2);
enqueue(3);
enqueue(4);
enqueue(5);
console.log(stack1);


function dequeue() {

  while (!stack1.isEmpty()) {
    stack2.push(stack1.pop());
  }
  let temp = stack2.pop();

  while (!stack2.isEmpty()) {
    stack1.push(stack2.pop());
  }
  return temp;
}

console.log(dequeue());
console.log(stack1);
