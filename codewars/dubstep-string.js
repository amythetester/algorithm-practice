'use strict';

// Write a function that takes a 'dubstep string'. The strings will have 'WUB' in them between characters in the song. It can have many WUBs, but we only one to have single spaces between each word or character, and no spaces at start and end.

//Example input: ("AWUBBWUBC"), "A B C","WUB should be replaced by 1 space");

// Example input: ("AWUBWUBWUBBWUBWUBWUBC"), "A B C","multiples WUB should be replaced by only 1 space");

//Example input: ("WUBAWUBBWUBCWUB"), "A B C","heading or trailing spaces should be removed");

function songDecoder(song){
  let answer = [];
  let re = /WUB/gi;

  song = song.replace(re, ' ').trim();

  for (let i = 0; i < song.length; i++) {
    if(song[i] === ' ' && song[i - 1] === ' ') continue;
    answer.push(song[i]);
  }
  answer = answer.join('');
  return answer;
}
