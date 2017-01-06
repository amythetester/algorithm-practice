'use strict';

var islandPerimeter = function(grid) {
  let perimeter = 0;
  let row;
  let cell;
  let directionMap = {
    'left': 0,
    'right': 0,
    'up': 0,
    'down': 0,
  };
  for (let i = 0; i < grid.length; i++) {
    row = grid[i];
    for (let j = 0; j < row.length; j++) {
      cell = row[j];
      if (cell) {
        directionMap['left'] = row[j - 1] || null;
        directionMap['right'] = row[j + 1] || null;
        directionMap['up'] = grid[i - 1] ? grid[i - 1][j] || null : null;
        directionMap['down'] = grid[i + 1] ? grid[i + 1][j] || null : null;

        for (let direction in directionMap) {
          if (!directionMap[direction]) perimeter++;
        }
      }

    }
  }

  return perimeter;
};
