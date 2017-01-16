'use strict';

function findNumPossibilities(n, possibles) {
  let answer = [];

  getNums('', n);

  function getNums(soFar, rem) {
    if (rem === 0) return answer.push(soFar);
    for (let i = 0; i< possibles.length; i++) {
      if (rem - possibles[i] >= 0) {
        getNums((soFar + ' ' + possibles[i]), rem - possibles[i]);
      }
    }
  }
  return answer;
}

console.log(findNumPossibilities(7, [1, 5, 10, 25]));
