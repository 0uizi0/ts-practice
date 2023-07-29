const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const paper: number[][] = input
  .slice(1)
  .map((line: string) => line.split(" ").map(Number));
let result: number[] = [];

/** divideAndCountPaper
 * - 재귀적으로 종이를 분할하면서 하얀색 종이와 파란색 종이의 개수를 세는 함수
 * - [whiteCount, blueCount, 1] 형태로 값을 반환 */
function divideAndCountPaper(x: number, y: number, size: number): number[] {
  if (size == 1) {
    // [whiteCount, blueCount, 1] 형태로 값을 반환
    return [paper[x][y] === 0 ? 1 : 0, paper[x][y] === 1 ? 1 : 0, 1];
  }
  const halfSize = size / 2;
  const topLeft = divideAndCountPaper(x, y, halfSize);
  const topRight = divideAndCountPaper(x + halfSize, y, halfSize);
  const bottomLeft = divideAndCountPaper(x, y + halfSize, halfSize);
  const bottomRight = divideAndCountPaper(x + halfSize, y + halfSize, halfSize);

  const totalWhite = topLeft[0] + topRight[0] + bottomLeft[0] + bottomRight[0];
  const totalBlue = topLeft[1] + topRight[1] + bottomLeft[1] + bottomRight[1];
  const totalSize = totalWhite + totalBlue;

  if (totalSize === 4 && totalWhite === 4) {
    return [1, 0, 1];
  } else if (totalSize === 4 && totalBlue === 4) {
    return [0, 1, 1];
  } else {
    return [totalWhite, totalBlue, 0];
  }
}
const [whiteCnt, blueCnt, _] = divideAndCountPaper(0, 0, N);
result = [whiteCnt, blueCnt];
console.log(result.join("\n"));
