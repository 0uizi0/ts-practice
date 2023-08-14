const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

// input
let n = Number(input);

// recursive
function solution(num:number):number {
  if (num == 0) return 0;
  if (num == 1) return 1;
  return solution(num - 1) + solution(num - 2);
}

// output
console.log(solution(n));
