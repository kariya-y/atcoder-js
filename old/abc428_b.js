"use strict";

function main() {
  const fs = require("fs");
  const lines = fs.readFileSync(0, "utf8").trim().split(/\n+/);
  const [N, K] = lines[0].split(/\s+/).map(Number);
  const S = lines[1];

  const wordMap = new Map();
  let max = 0;
  for (let i = 0; i + K <= N; i++) {
    const word = S.slice(i, i + K);
    if (wordMap.has(word)) {
      wordMap.set(word, wordMap.get(word) + 1);
      max = Math.max(max, wordMap.get(word));
    } else {
      wordMap.set(word, 1);
      max = Math.max(max, 1);
    }
  }
  const maxWords = new Set();
  for (const [word, count] of wordMap) {
    if (count === max) {
      maxWords.add(word);
    }
  }
  console.log(max);
  console.log(Array.from(maxWords).sort().join(" "));
}

main();
