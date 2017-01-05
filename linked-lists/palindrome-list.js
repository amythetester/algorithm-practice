'use strict';

//Node and LinkedList constructor functions
const Node = require('./node.js');
const LinkedList = require('./linked-list.js');

// LinkedList functions
const addNewNode = require('./add-new-node.js');

let testList = new LinkedList;

//Odd length list
testList.addNewNode('R');
testList.addNewNode('A');
testList.addNewNode('C');
testList.addNewNode('E');
testList.addNewNode('C');
testList.addNewNode('A');
testList.addNewNode('R');

function isPalindrome(list) {
  let length = 0;
  let point1 = list.head;
  while (point1) {
    point1 = point1.next;
    length++;
  }
  let mid = Math.ceil(length/2);
  let prev = null;
  point1 = list.head;
  let counter = 1;
  let temp = null;
  while (counter < mid) {
    counter++;
    temp = point1.next;
    point1.next = prev;
    prev = point1;
    point1 = temp;
  }
  temp = temp.next;
  console.log(mid);
  if (length % 2 === 0) {
    temp = point1.next;
    point1.next = prev;
    prev = point1;
  }
  while (temp && prev) {
    console.log(temp.next);
    console.log(prev);
    if (temp.value !== prev.value) return false;
    temp = temp.next;
    prev = prev.next;
  }
  return true;
}


console.log(isPalindrome(testList));
