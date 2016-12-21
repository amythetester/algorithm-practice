'use strict';

function balanceBrace(strBraces) {

  let key = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  let stack = [];
  for (let i = 0; i < strBraces.length; i++) {
    let current = strBraces[i];
    if (key[current] && stack[stack.length - 1] !== key[current]) return false;
    if (!key[current]) stack.push(strBraces[i]);
    if (key[current] && key[current] === stack[stack.length - 1]) stack.pop();
  }
  if (stack.length === 0) return true;
  return false;
}

console.log(balanceBrace('({[]})')); //true
console.log(balanceBrace('(){}')); //true
console.log(balanceBrace('({)')); //false
console.log(balanceBrace('()[}')); //false
console.log(balanceBrace('}(){')); //false
