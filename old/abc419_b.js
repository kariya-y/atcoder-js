"use strict";

function main() {
  const fs = require("fs");
  const lines = fs.readFileSync(0, "utf8").trim().split(/\n+/);
  const N = Number(lines[0]);
  const array = [];
  for (let i = 0; i < N; i++) {
    const values = lines[i + 1].split(" ");
    if (values[0] === "1") {
      array.push(values[1]);
      array.sort((a, b) => a - b);
    } else {
      console.log(array.shift());
    }
  }
}

main();
