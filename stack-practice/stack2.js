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

let testStack = new Stack();

testStack.stackPush('A');
console.log(testStack);
testStack.stackPush('B');
console.log(testStack);
testStack.stackPush('C');
console.log(testStack);
testStack.stackPop();
console.log(testStack);
testStack.stackPop();
console.log(testStack);
testStack.stackPop();
console.log(testStack);
