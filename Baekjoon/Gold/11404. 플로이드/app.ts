const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = [Number(input[0]), Number(input[1])];
const busInfo: number[][] = input
  .slice(2)
  .map((line: string) => line.split(" ").map(Number));

function FindShortestPath(n: number, m: number, busInfo: number[][]) {
  const INF = 1e9; // INF 상수를 정의하여 무한대 값 표현

  // 초기 그래프 설정
  const graph: number[][] = new Array(n + 1)
    .fill(null)
    .map(() => new Array(n + 1).fill(INF));

  for (let i = 1; i <= n; i++) {
    graph[i][i] = 0;
  }

  for (let [start, end, cost] of busInfo) {
    graph[start][end] = Math.min(graph[start][end], cost);
  }

  // 플로이드-와샬 알고리즘 수행
  // 모든 정점 쌍에 대해 중간 정점 k를 거쳐가는 경로와 직접 가는 경로 중 더 짧은 경로를 선택하여 최단 경로를 갱신
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  // 최단 경로 계산
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    result.push(
      graph[i]
        .slice(1)
        .map((cost) => (cost === INF ? 0 : cost))
        .join(" ")
    ); // 정점 i에서 시작하여 자기 자신으로 돌아오는 경우를 제외
  }
  return result.join("\n");
}

// output
console.log(FindShortestPath(n, m, busInfo));
