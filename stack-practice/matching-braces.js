'use strict';

function validBraces(braceStr) {

  let map = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  let stack = [];

  for (let i = 0; i < braceStr.length; i++) {
    if (map[braceStr[i]] && stack[stack.length - 1] === map[braceStr[i]]) {
      stack.pop();
      continue;
    }
    stack.push(braceStr[i]);
  }

  return (stack.length > 0) ? false : true;
  // Every time we come across an open brace, we'll want to push it into stack1.
  // If it's a closing brace, we compare it to the top of the stack and pop it off if it is the same as the prior item in the stack.
}

console.log(validBraces('({[]})')); //true
console.log(validBraces('(){}')); //true
console.log(validBraces('({)')); //false
console.log(validBraces('()[}')); //false
console.log(validBraces('}(){')); //false
