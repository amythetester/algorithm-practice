'use strict';

let hanoi = function(disc, source, helper, dest) {
  if (disc > 0) {
    console.log(disc);
    hanoi(disc - 1, source, dest, helper);
    console.log('Move disc ' + disc + ' from ' + source + ' to ' + dest);
    hanoi(disc - 1, helper, source, dest);
  }
};

hanoi(3, 'source', 'helper', 'dest');


// hanoi(3, 'source', 'helper', 'dest');
// hanoi(2, 'source', 'dest', 'helper');
// hanoi(2, 'source', 'dest', 'helper');
