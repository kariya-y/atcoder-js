"use strict";

function main() {
  const fs = require("fs");
  const lines = fs.readFileSync(0, "utf8").trim().split(/\n+/);
  const aArray = lines[1].split(" ").map(Number);
  const bArray = lines[2].split(" ").map(Number);

  bArray.forEach((b) => {
    const index = aArray.indexOf(b);
    if (index !== -1) {
      aArray.splice(index, 1);
    }
  });
  console.log(aArray.join(" "));

}

main();
