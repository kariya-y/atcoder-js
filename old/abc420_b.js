"use strict";

function main() {
  const fs = require("fs");
  const lines = fs.readFileSync(0, "utf8").trim().split(/\n+/);
  const [N, M] = lines[0].split(/\s+/).map(Number);

  const score = Array(N).fill(0);
  for (let j = 0; j < M; j++) {
    let count1 = 0;
    for (let i = 0; i < N; i++) {
      if (lines[1 + i][j] === "1") count1++;
    }

    if (count1 < N - count1) {
      for (let i = 0; i < N; i++) {
        if (lines[1 + i][j] === "1") score[i]++;
      }
    } else {
      for (let i = 0; i < N; i++) {
        if (lines[1 + i][j] === "0") score[i]++;
      }
    }
  }
  const max = Math.max(...score);
  let result = [];
  for (let i = 0; i < N; i++) {
    if (score[i] == max) {
      result.push(i + 1);
    }
  }
  console.log(result.join(" "));
}

main();
