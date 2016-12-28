'use strict';

// Given a url, extract the domain name from the string.

/* Example inputs/outputs:
"http://google.com"/"google"
"http://google.co.jp"/"google"
"www.xakep.ru"/"xakep"
"https://youtube.com"/"youtube"
*/

function domainName(url) {
  let start = 0;
  let end = url.length - 1;
  let count = 0;

  for (let i = 0; i < url.length; i++) {
    if (count > 1) break;
    if (url[i] === '.' && count === 0) {
      start = i;
      count++;
      continue;
    }
    if (url[i] === '.' && count === 1) {
      end = i;
      count++;
      continue;
    }
  }
  let domain = url.substring(start + 1, end);
  return domain;
}

console.log(domainName('http://google.com'));
