'use strict';

// Use .call on the Array object on the context of a newly-created Queue
function Queue() {
  Array.call(this);
}

// Create the enqueue function to inherit the push method from the Array object and apply it to the context of the instance that will be created of the Queue object.
Queue.prototype.enqueue = function() {
  Array.prototype.push.apply(this, arguments);
};

// Create the dequeue function to inherit the shift method from the Array object and apply it to the context of the instance that will be created of the Queue object.
Queue.prototype.dequeue = function() {
  Array.prototype.shift.apply(this, arguments);
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
