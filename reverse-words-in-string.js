'use strict';

let testInput = 'The rain in Spain falls mainly on the plain';

function reverseSentence(str) {
  let answer = '';

  let point1 = 0;
  let point2;

  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === ' ' || i + 1 === str.length) {
      point2 = i;
      i = i + 1;
      let word = ' ';
      while (point2 >= point1) {
        word += str[point2];
        point2--;
      }
      point1 = i;
      answer += word;
      answer += '';
    }
  }
  return answer;
}

console.log(reverseSentence(testInput));
