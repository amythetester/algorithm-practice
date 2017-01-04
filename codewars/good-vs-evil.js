'use strict';

function goodVsEvil(good, evil) {
  good = good.split(' ');
  evil = evil.split(' ');
  let goodCount = 0;
  let evilCount = 0;

  goodCount += good[0] * 1 + good[1] * 2 + good[2] * 3 + good[3] * 3 + good[4] * 4 + good[5] * 10;

  evilCount += evil[0] * 1 + evil[1] * 2 + evil[2] * 2 + evil[3] * 2 + evil[4] * 3 + evil[5] * 5 + evil[6] * 10;

  return (goodCount > evilCount) ? 'Battle Result: Good triumphs over Evil' :
  (evilCount > goodCount) ? 'Battle Result: Evil eradicates all trace of Good' :
  'Battle Result: No victor on this battle field';
}

console.log(goodVsEvil('0 0 0 0 0 1', '0 0 0 0 0 0 1'));
