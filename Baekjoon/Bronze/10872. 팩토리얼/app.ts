const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

// input
let N = Number(input);

// recursive
function factorial(num:number):number {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

// output
console.log(factorial(N));
