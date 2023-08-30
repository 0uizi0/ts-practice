function solution(picture: string[], k: number): string[] {
  const result: string[] = [];
  for (let line of picture) {
    const newLine = [...line].map((pixel) => pixel.repeat(k)).join("");
    for (let i = 0; i < k; i++) {
      result.push(newLine);
    }
  }
  return result;
}

console.log(
  solution(
    [
      ".xx...xx.",
      "x..x.x..x",
      "x...x...x",
      ".x.....x.",
      "..x...x..",
      "...x.x...",
      "....x....",
    ],
    2
  )
);
console.log(solution(["x.x", ".x.", "x.x"], 3));
