'use strict';

//Node and LinkedList constructor functions
const Node = require('./node.js');
const LinkedList = require('./linked-list.js');

// LinkedList functions
const addNewNode = require('./add-new-node.js');

let testList = new LinkedList;

//Odd length list
// testList.addNewNode('R');
// testList.addNewNode('A');
// testList.addNewNode('C');
// testList.addNewNode('E');
// testList.addNewNode('C');
// testList.addNewNode('A');
// testList.addNewNode('R');

// Even length list
testList.addNewNode('A');
testList.addNewNode('B');
testList.addNewNode('B');
testList.addNewNode('A');

function isPalindrome(head) {
  if (!head) throw new Error('No head');
  if (!head.next) return true; //single node LL is a palindrome.

  let mid = findMid(head);

  let count = 1;

  let pointF = head;
  let pointR = head;

  let prev = null;

  while (count < mid) {
    pointF = pointF.next;
    pointR.next = prev;
    prev = pointR;
    pointR = pointF;
    count++;
  }
  if (count % 2 !== 0) {
    pointF = pointF.next;
    if (pointF.value !== pointR.value) return false;
    pointR = prev;
  }

  if (count % 2 === 0) {
    pointF = pointF.next;
    pointR.next = prev;
  }

  while (pointF !== null && pointR !== null) {
    if (pointF.value !== pointR.value) return false;
    pointF = pointF.next;
    pointR = pointR.next;
  }
  return true;
}

function findMid (head) {

  let mid = 0;
  let next = head;

  while (next) {
    next = next.next;
    mid++;
  }
  return Math.ceil(mid / 2);
}

console.log(isPalindrome(testList.head));
