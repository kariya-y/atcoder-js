function main() {
  const fs = require("fs");
  const lines = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

  const parts = [];
  lines[2]
    .trim()
    .split(" ")
    .forEach((value) => {
      parts.push(Number(value));
    });

  let result = Number(lines[0].trim());
  const isUsed = Array(parts.length).fill(false);
  for (let i = 0; i < Number(lines[3]); i++) {
    const index = Number(lines[4 + i].trim()) - 1;
    result += isUsed[index] ? -parts[index] : parts[index];
    isUsed[index] = !isUsed[index];
    console.log(result);
  }
}

main();
