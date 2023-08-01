const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const paper:number[][] = input.slice(1).map((line:string) => line.split("").map(Number));

/** 재귀적으로 영상을 분할하면서 영상을 압축하는 함수 */
function compressVideo(x:number, y:number, size:number):[string,number] {
  if (size == 1) {
    // [color, 1] 형태로 값을 반환
    return [String(paper[x][y]), 1];
  }
  const halfSize = size / 2;
  const topLeft:[string,number] = compressVideo(x, y, halfSize);
  const topRight:[string,number] = compressVideo(x, y + halfSize, halfSize);
  const bottomLeft:[string,number] = compressVideo(x + halfSize, y, halfSize);
  const bottomRight:[string,number] = compressVideo(x + halfSize, y + halfSize, halfSize);

  // 영역 4개의 결과를 combineResults 함수를 이용해 합치고, 그 결과를 반환
  const combinedResult = combineResults(
    topLeft, 
    topRight,
    bottomLeft,
    bottomRight
  );
  return combinedResult;
}

/** 주어진 4개의 영역을 합쳐서 압축 가능한지 확인하고, 압축 가능한 경우 합친 결과를 반환하는 함수 */
function combineResults(...results: [string, number][]):[string,number] {
  const colors:string[] = results.map((res) => res[0]);
  const sumCount:number = results.reduce((acc, res) => acc + res[1], 0);

  if (colors.every((color) => color === "1")) return ["1", sumCount];
  else if (colors.every((color) => color === "0")) return ["0", sumCount];
  else return ["(" + colors.join("") + ")", sumCount];
}

const [compressed, _] = compressVideo(0, 0, N);
console.log(compressed);
