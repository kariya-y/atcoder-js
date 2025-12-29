"use strict";

function main() {
  const fs = require("fs");
  const lines = fs.readFileSync(0, "utf8").trim().split(/\n+/);
  const [N, M] = lines[0].split(/\s+/).map(Number);

  const graph = [];
  for (let i = 0; i < N; i++) {
    graph.push(lines[i + 1]);
  }

  const set = new Set();
  for (let i = 0; i <= N - M; i++) {
    for (let ii = 0; ii <= N - M; ii++) {
      let thisResult = "";
      for (let iii = i; iii < i + M; iii++) {
        thisResult += graph[iii].slice(ii, ii + M);
      }
      set.add(thisResult);
    }
  }
  console.log(set.size);
}

main();
