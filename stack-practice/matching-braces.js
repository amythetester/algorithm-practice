'use strict';

// Implement a queue using two stacks

let stack1 = [];

Array.prototype.isEmpty = function() {
  if (this.length === 0) return true;
  else return false;
};

Array.prototype.peek = function() {
  return this[0];
};

function matchingBraces(string) {
  let parentheses = '[]{}()', bracePosition;

  for(let i = 0; string[i]; i++) {

    bracePosition = parentheses.indexOf(string[i]);

    if(bracePosition === -1) {
      continue;
    }

    if(bracePosition % 2 === 0) {
      stack1.push(bracePosition + 1); // push next expected brace position
    }
    else {
      if(stack1.isEmpty() === true || stack1.pop() !== bracePosition) {
        return false;
      }
    }
  }

  return stack1.length === 0;
}

console.log(matchingBraces('(){}[]'));
