'use strict';

function range(start, end, step) {

  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  }

  if (step < 0) {
    for (let i = end; i <= start; i += -(step)) {
      array.push(i);
    }
  }
  console.log(array);
  return array;
}


function sum(array) {

  let result = array.reduce( (acc, curr) => {
    return acc + curr;
  });
  return result;
}

console.log(sum(range(5, 2, -1)));
console.log(1+3+5+7+9);
