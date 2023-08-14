const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

// input
const [A, B, C]: bigint[] = input;

// recursive
function calc(num: bigint) {
  // B가 1일 때
  if (num == 1n) return A % C;

  const half: bigint = calc(num / 2n) % C; // => (A^(B / 2) % C
  // B가 홀수일 때 : ((A^(B / 2) % C) * (A^(B / 2) % C) * (A % C)) % C
  if (num % 2n) return (half * half * (A % C)) % C;

  // B가 짝수일 때 : ((A^(B / 2) % C) * (A^(B / 2) % C)) % C
  return (half * half) % C;
}

// output
console.log(calc(B).toString());
