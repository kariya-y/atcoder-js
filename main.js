"use strict";

function main() {
  const fs = require("fs");
  const lines = fs.readFileSync(0, "utf8").trim().split(/\n+/);
  const [H, W] = lines[0].split(/\s+/).map(Number);
  const grid = [];
  for (let i = 1; i <= H; i++) {
    grid.push(lines[i].split(""));
  }
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  for (let i = 0; i < H; i++) {
    for (let ii = 0; ii < W; ii++) {
      const start = grid[i][ii];
      if (start === ".") {
        continue;
      }
      let thisResult = 0;
      for (const [dh, dw] of directions) {
        const nh = i + dh;
        const nw = ii + dw;
        if (nh < 0 || nh >= H || nw < 0 || nw >= W) {
          continue;
        }
        const next = grid[nh][nw];
        if (next === "#") {
          thisResult++;
        }
      }
      if (thisResult != 2 && thisResult != 4) {
        console.log("No");
        return;
      }
    }
  }
  console.log("Yes");
}

main();
