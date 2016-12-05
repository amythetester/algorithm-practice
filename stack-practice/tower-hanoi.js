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

// Code below of order of ops to try and help understanding
/*
hanoi(3,"src","aux","dst");
    if (disc > 0) {
    hanoi(2,'src','dst','aux');
        if (disc > 0) {
        hanoi(1,'src','aux','dst');
            if (disc > 0) {
            hanoi(0,'src','dst','aux');
                END
            write("Move disc " + 1 + " from " + src + " to " + dst + "<br />");
            hanoi(0,'aux','src','dst');
                END
            }
        write("Move disc " + 2 + " from " + src + " to " + dst + "<br />");
        hanoi(1,'dst','src','aux');
            if (disc > 0) {
            hanoi(0,'src','dst','aux');
                END
            write("Move disc " + 1 + " from " + src + " to " + dst + "<br />");
            hanoi(0,'aux','src','dst');
                END
            }
        }
    write("Move disc " + 3 + " from " + src + " to " + dst + "<br />");
    hanoi(2,'aux','src','dst');
        if (disc > 0) {
        hanoi(1,'aux','dst','src');
            if (disc > 0) {
            hanoi(0,'src','dst','aux');
                END
            write("Move disc " + 1 + " from " + src + " to " + dst + "<br />");
            hanoi(0,'aux','src','dst');
                END
            }
        write("Move disc " + 2 + " from " + src + " to " + dst + "<br />");
        hanoi(1,'src','aux','dst');
            if (disc > 0) {
            hanoi(0,'src','dst','aux');
                END
            write("Move disc " + 1 + " from " + src + " to " + dst + "<br />");
            hanoi(0,'aux','src','dst');
                END
            }
        }
    }
*/
