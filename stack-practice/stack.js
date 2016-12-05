'use strict';

function Stack() {
  this.length = 0;
}

Stack.prototype.stackPush = function(value) {
  this[this.length] = value;
  this.length++;
};

Stack.prototype.stackPop = function() {
  if (this.length === 0) return;
  let result = this[this.length - 1];
  delete this[this.length - 1];
  this.length--;
  console.log(result);
  return result;
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
