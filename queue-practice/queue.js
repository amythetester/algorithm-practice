'use strict';

let Queue = function() {
  this.length = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function() {
  if (this.length === 0) return;
  let result = this[0];
  for (let i = 0; i < this.length; i++) {
    this[i - 1] = this[i];
  }
  delete this[this.length - 1];
  this.length--;
  return result;
};

let testQueue = new Queue();

testQueue.enqueue('A');
console.log(testQueue);
testQueue.enqueue('B');
console.log(testQueue);
testQueue.enqueue('C');
console.log(testQueue);
testQueue.dequeue();
console.log(testQueue);
testQueue.dequeue();
console.log(testQueue);
testQueue.dequeue();
console.log(testQueue);
