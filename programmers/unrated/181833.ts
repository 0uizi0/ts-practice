function solution(n:number):number[][] {
  let answer:number[][] = Array.from(Array(n), () => Array(n).fill(0))
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          if (i === j) answer[i][j] = 1
      }
  }
  return answer
}
console.log(solution(3))
console.log(solution(6))
console.log(solution(1))