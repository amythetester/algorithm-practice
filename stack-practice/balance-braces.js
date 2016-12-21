'use strict';

function balanceBrace(strBraces) {

  let key = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  let stack = [];
  for (let i = 0; i < strBraces.length; i++) {
    let strBr = strBraces[i];

    if (!key[strBr]) stack.push(strBraces[i]);
    if (key[strBr] && key[strBr] === stack[stack.length - 1]) stack.pop();
  }
  if (stack.length === 0) return true;
  return false;
}

console.log(balanceBrace('({[]})')); //true
console.log(balanceBrace('(){}')); //true
console.log(balanceBrace('({)')); //false
console.log(balanceBrace('()[}')); //false
console.log(balanceBrace('}(){')); //false
