const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// input
const [N, M]: number[] = input.shift().split(" ").map(Number);
const A: number[][] = input
  .splice(0, N)
  .map((line: string) => line.split(" ").map(Number));
const [[_, K], ...B]: number[][] = input.map((line: string) =>
  line.split(" ").map(Number)
);

const result: number[][] = Array.from({ length: N }, () => Array(K).fill(0));

// divide and conquer
for (let i = 0; i < N; i++) {
  for (let j = 0; j < K; j++) {
    result[i][j] += A[i].reduce((sum, val, idx) => sum + val * B[idx][j], 0);
  }
}

// output
result.forEach((line) => console.log(line.join(" ")));
