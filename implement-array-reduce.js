'use strict';

Array.prototype.reduce = function(cb, acc) {
  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

let testArray = [1, 2, 3, 4, 5];

console.log(testArray.reduce(function(acc, cur) {
  return acc + cur;
}, 0));
