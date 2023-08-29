// input
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const board: string[][] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line: string) => line.split(" "));
const dp = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
]; // 좌표 계산

const result = new Set(); // 중복된 값 제거를 위해 Set 사용 (서로 다른 여섯 자리의 수)

/** DFS */
function dfs(x: number, y: number, str: string) {
  if (str.length === 6) return result.add(str);

  // 안접한 네 곳 탐색
  for (let i = 0; i < 4; i++) {
    const nx = x + dp[i][0];
    const ny = y + dp[i][1];

    if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5)
      dfs(nx, ny, str + board[nx][ny]);
  }
}

// 5X5 숫자판 실행
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    dfs(i, j, "");
  }
}

// 결과 출력
console.log(result.size);
