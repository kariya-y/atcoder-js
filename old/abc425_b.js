"use strict";

function main() {
  const fs = require("fs");
  const lines = fs.readFileSync(0, "utf8").trim().split(/\n+/);
  const N = Number(lines[0]);
  const numbers = lines[1].split(/\s+/).map(Number);

  const numberSet = new Set();
  for (const number of numbers) {
    if (number != -1 && numberSet.has(number)) {
      console.log("No");
      return;
    }
    numberSet.add(number);
  }

  let result = [];
  for (let i = 0; i < N; i++) {
    if (numbers[i] === -1) {
      for (let ii = 1; ii <= N; ii++) {
        if (!numberSet.has(ii)) {
          result.push(ii);
          numberSet.add(ii);
          break;
        }
      }
    } else {
      result.push(numbers[i]);
    }
  }
  console.log("Yes");
  console.log(result.join(" "));

}

main();
