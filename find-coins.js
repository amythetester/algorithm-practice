'use strict';

function findCoins(sum) {
  let output = [];

  _findCoins('', sum);
  function _findCoins(soFar, rem) {

    if (rem === 0) output.push(soFar);

    if (rem >= 25) _findCoins(soFar + '25 ', rem - 25);
    if (rem >= 10) _findCoins(soFar + '10 ', rem - 10);
    if (rem >= 5) _findCoins(soFar + '5 ', rem - 5);
    if (rem >= 1) _findCoins(soFar + '1 ', rem - 1);
  }
  return output;
}

console.log(findCoins(7));
