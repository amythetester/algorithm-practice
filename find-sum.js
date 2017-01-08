'use strict';

//Find all possibilities of a given set of input values that add up to a given sum.

function findSumCombos(n, arr) {
  let answer = [];

  combos('', n);

  function combos(soFar, rem) {
    if (rem === 0) return answer.push(soFar);

    for (let i = 0; i < arr.length; i++) {
      if (rem >= arr[i]) combos(soFar + arr[i], rem - arr[i]);
    }
  }
  return answer;
}

console.log(findSumCombos(4, [1, 2, 3, 4]));
