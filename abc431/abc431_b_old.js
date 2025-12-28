function main() {
  const lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split("\n");

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
    if (isUsed[index]) {
      result -= parts[index];
      isUsed[index] = false;
    } else {
      result += parts[index];
      isUsed[index] = true;
    }
    console.log(result);
  }
}

// 標準入力から受け取って main() を呼び出す
main();
