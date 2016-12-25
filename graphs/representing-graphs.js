'use strict';

// Learning graphs. Representing it in several different ways

// Represented as an edgeList
let edgeList = [ [0, 2], [1, 3], [2, 3], [2, 4], [3, 5], [4, 5] ];

// Represented as an Adjacency Matrix
let adjMatrix = [
       [0, 0, 1, 0, 0, 0],
       [0, 0, 0, 1, 0, 0],
       [0, 0, 0, 1, 1, 0],
       [0, 0, 0, 0, 0, 1],
       [0, 0, 0, 0, 0, 1],
       [0, 0, 0, 0, 0, 0],
];

// Represented as an Adjacency List

let adjList = [
        [2],
        [3],
        [3, 4],
        [5],
        [5],
        [ ],
];
