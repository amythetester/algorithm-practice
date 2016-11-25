'use strict';

let testArray = [5, 7, 1, 2, 8, 4, 3];

// iterative method. O(n2). Not ideal

let valueSumCheck1 = function(n) {

  for (let i = 0; i < testArray.length; i++) {

    for (let j = 0; j < testArray.length; j++) {

      if ((testArray[i] + testArray[j] === n) && testArray[i] !== testArray[j]) {
        console.log(testArray[i] + ' + ' + testArray[j] + ' = ' + (testArray[i] + testArray[j]));
        return true;
      }
    }
  }

  return false;

};
// test number
valueSumCheck1(3);
