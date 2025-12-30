"use strict";

function main() {
  const fs = require("fs");
  const lines = fs.readFileSync(0, "utf8").trim().split(/\n+/);
  const [N] = lines[0].split(" ").map(Number);
  const rooms = lines[1].split(" ").map(Number);

  let first = N;
  let last = 0;
  for (const [index, room] of rooms.entries()) {
    if (room === 1) {
      first = Math.min(first, index);
      last = Math.max(last, index);
    }
  }
  if (first > last) {
    first = last;
  }
  console.log(last - first);
}

main();
