"use strict";

function main() {
  const fs = require("fs");
  const lines = fs.readFileSync(0, "utf8").trim().split(/\n+/);
  const S = lines[0];
  let result = "";
  let isAdd = true;
  for (const c of S) {
    if (c === "#") {
      result += c;
      isAdd = true;
    } else {
      if (isAdd) {
        result += "o";
        isAdd = !isAdd;
      } else {
        result += c;
      }
    }
  }
  console.log(result);
}

main();
