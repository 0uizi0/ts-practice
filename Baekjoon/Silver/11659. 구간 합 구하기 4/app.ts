// input
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M]: number[] = input[0].split(" ").map(Number);
const calculatedValue: number[] = input[1].split(" ").map(Number);
const additionalSection = input
  .slice(2)
  .map((line: string) => line.split(" ").map(Number));

// solution
// 1. 합 미리 계산
const prefixSums = [0];
let currentSum = 0;
for (let i = 0; i < N; i++) {
  currentSum += calculatedValue[i];
  prefixSums.push(currentSum);
}

// 2. 각 추가 구간에 대한 합 계산
const output: number[] = [];
for (let s = 0; s < M; s++) {
  let [startIdx, endIdx]: number[] = additionalSection[s];
  const sum = prefixSums[endIdx] - prefixSums[startIdx - 1];
  output.push(sum);
}

// output
console.log(output.join("\n"));
