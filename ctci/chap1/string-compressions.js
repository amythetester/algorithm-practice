'use strict';

//incomplete

let input = 'aabcccccaaa';

function stringCompress(string) {

  let answer = [];

  for (let i = 0; i < string.length; i++) {
    console.log('HIT');

    let array = string.split('');

    let counter = 0;

    for (let j = i; j < array.length; j++) {
      if (array[i] === array[j]) {
        console.log('BANG');
        counter++;
        array.pop(j+1);
      }
      if (array[i] !== array[j]) break;
    }
    if (counter > 1) {
      answer.push(array[i] += counter);
    }
    else {
      answer.push(array[i]);
    }
  }
  let finalAnswer = answer.toString();
  return finalAnswer;
}

let result = stringCompress(input);

console.log(result);
