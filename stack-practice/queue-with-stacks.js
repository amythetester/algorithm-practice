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


function dequeue() {

  if (stack2.isEmpty() && stack1.isEmpty()) throw new Error('Nothing to dequeue');

  if (!stack2.isEmpty()) {
    return stack2.shift();
  }
  else {
    while (!stack1.isEmpty()) {
      stack2.push(stack1.pop());
    }

    return stack2.shift();
  }
}

console.log(stack1);
console.log(dequeue());
console.log(dequeue());
console.log(dequeue());
console.log(dequeue());
console.log(dequeue());
console.log(dequeue());
