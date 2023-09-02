function solution(arr:number[][]):number[][] {
  let row = arr.length;
  let col = arr[0].length;

  if (row > col) {
      for (let i = col; i < row; i++) {
          for (let j = 0; j < row; j++) {
              arr[j].push(0)
          }
      }
  } else if (row < col) {
      for (let i = row; i < col; i++) {
          const newArr:number[] = new Array(col).fill(0)
          arr.push(newArr)
      }
  }
  
  return arr
}

console.log(solution([[572, 22, 37], [287, 726, 384], [85, 137, 292], [487, 13, 876]]))
console.log(solution([[57, 192, 534, 2], [9, 345, 192, 999]]))
console.log(solution([[1, 2], [3, 4]]))