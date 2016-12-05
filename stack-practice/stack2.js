'use strict';

function Stack() {
  Array.call(this);
}

Stack.prototype.stackPush = function() {
  Array.prototype.push.apply(this, arguments);
};

Stack.prototype.stackPop = function() {
  Array.prototype.pop.apply(this, arguments);
};

Stack.prototype.stackSort = function() {
  Array.prototype.sort.apply(this, arguments);
};

Stack.prototype.length = function() {
  Array.prototype.length.apply(this, arguments);
};

let testStack = new Stack();

testStack.stackPush('A');
console.log(testStack);
testStack.stackPush('B');
console.log(testStack);
testStack.stackPush('C');
console.log(testStack);
testStack.stackPush(0);
console.log(testStack);
testStack.stackSort();
console.log(testStack);
testStack.stackPop();
console.log(testStack);
testStack.stackPop();
console.log(testStack);
testStack.stackPop();
console.log(testStack);
