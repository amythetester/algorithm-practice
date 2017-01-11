'use strict';

let input = [
  [1, 33, 3, 14],
  [15, 16, 7, 38],
  [92, 10, 11, 12],
  [13, 14, 15, 16],
];

function arraySpiral(array) {

  let row = 0;
  let col = 0;
  let right = array[0].length;
  let down = array.length - 1;
  let left = right - 1;
  let up = down - 1;

  while (right > 0 || down > 0 || left > 0 || up > 0) {
    moveRight();
    moveDown();
    moveLeft();
    moveUp();
  }

  function moveRight() {
    for(let i = 0; i < right; col++, i++) {
      console.log(array[row][col]);
    }
    right -= 2;
    row++;
    col--;
  }

  function moveDown() {
    for(let i = 0; i < down; row++, i++) {
      console.log(array[row][col]);
    }
    down -= 2;
    col--;
    row--;
  }

  function moveLeft() {
    for(let i = 0; i < left; col--, i++) {
      console.log(array[row][col]);
    }
    left -= 2;
    row--;
    col++;
  }

  function moveUp() {
    for(let i = 0; i < up; row--, i++) {
      console.log(array[row][col]);
    }
    up -= 2;
    col++;
    row++;
  }
  return array;
}

console.log(arraySpiral(input));
