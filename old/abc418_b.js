"use strict";

function main() {
  const fs = require("fs");
  const lines = fs.readFileSync(0, "utf8").trim().split(/\n+/);
  const N = lines[0];
  let result = 0;
  for (let i = 0; i < N.length; i++) {
    if (N[i] !== "t") continue;
    for (let ii = i + 2; ii < N.length; ii++) {
      const word = N.slice(i, ii + 1);
      if (word[0] === word[word.length - 1]) {
        let count = 0;
        word.split("").forEach((c) => {
          if (c === word[0]) {
            count++;
          }
        });
        if (count <= 2) continue;
        const thisResult = (count - 2) / (word.length - 2);
        result = Math.max(result, thisResult);
      }
    }
  }
  console.log(result);
}

main();
