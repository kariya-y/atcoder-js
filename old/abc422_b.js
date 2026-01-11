"use strict";

function main() {
  const fs = require("fs");
  const lines = fs.readFileSync(0, "utf8").trim().split(/\n+/);
  const [X, Y] = lines[0].split(/\s+/).map(Number);
  const array = Array(10).fill(0);
  array[0] = X;
  array[1] = Y;

  for (let i = 2; i < 10; i++) {
    const result = (array[i - 1] + array[i - 2]).toString();
    array[i] = Number(result.split("").reverse().join(""));
  }
  console.log(array[9]);
}

main();
