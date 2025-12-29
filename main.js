"use strict";

function main() {
  const fs = require("fs");
  const lines = fs.readFileSync(0, "utf8").trim().split(/\n+/);
  const line = lines[0];
  const charSet = new Set(line.split(""));
  const [first, second] = Array.from(charSet);
  let count = 0;
  for (const char of line) {
    if (char === first) {
      count++;
    }
  }
  if (count === 1) {
    console.log(first);
  } else {
    console.log(second);
  }
}

main();
