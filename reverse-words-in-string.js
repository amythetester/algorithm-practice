// 'use strict';
//
// let testInput = 'The rain in Spain falls mainly on the plain';
//
// function reverseSentence(str) {
//   let answer = '';
//
//   let point1 = 0;
//   let point2;
//
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ' ') {
//       console.log(point2);
//       point2 = i - 1;
//       console.log(point2);
//       console.log(i);
//       i = i + 1;
//       console.log(i);
//       while (point1 <= point2) {
//         let word = '';
//         console.log('hit');
//         let temp = str[point2];
//         str[point2] = str[point1];
//         str[point1] = temp;
//         point1++;
//         point2--;
//
//       }
//       point1 = i;
//     }
//   }
//   return str;
// }
//
// console.log(reverseSentence(testInput));
//
//
// function switchStr(str) {
//   console.log(str[0]);
//   console.log(str[1]);
//   let temp = str[1];
//   str[1] = str[0];
//   str[0] = temp;
//   return str;
// }
//
// console.log(switchStr('Oh'));
