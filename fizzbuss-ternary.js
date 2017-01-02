'use strict';

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    (i % 15 === 0) ? console.log('FizzBuzz') :
    (i % 5 === 0) ? console.log('Buzz') :
    (i % 3 === 0) ? console.log('Fizz') :
    console.log(i);
  }
}

fizzBuzz();
