"use strict";

function main() {
  const fs = require("fs");
  const lines = fs.readFileSync(0, "utf8").trim().split(/\n+/);
  const [N, M, K] = lines[0].split(" ").map(Number);

  const resultMap = new Map();
  let result = "";
  for (let i = 0; i < K; i++) {
    const [key, value] = lines[i + 1].split(" ").map(Number);
    if (!resultMap.has(key)) {
      resultMap.set(key, [value]);
    } else {
      resultMap.get(key).push(value);
    }
    if (resultMap.get(key).length === M) {
      result += key + " ";
    }
  }
  console.log(result.trim());
}

main();
