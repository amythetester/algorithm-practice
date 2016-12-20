'use strict';

// Implement a queue using two stacks

let stack = [];

Array.prototype.isEmpty = function() {
  if (this.length === 0) return true;
  else return false;
};

Array.prototype.peek = function() {
  return this[0];
};

// let parenObj = {
//   '[': ']',
//   ']': '[',
//   '(': ')',
//   ')': '(',
//   '{': '}',
//   '}': '{',
//   'cat': 'stuff',
// };

function matchingBraces(string) {
  let parentheses = '[]{}()';
  let bracePosition;

  for (let i = 0; string[i]; i++) {

    bracePosition = parentheses.indexOf(string[i]);
    console.log(bracePosition);
    console.log(stack);

    if (bracePosition % 2 === 0) {
      stack.push(bracePosition + 1); // push next expected brace position
    }
    else {
      if (stack.isEmpty() || stack.pop() !== bracePosition) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}

console.log(matchingBraces('(){}[]'));
