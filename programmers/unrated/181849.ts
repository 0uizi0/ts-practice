function solution(num_str:string):number {
  return num_str.split('').map(Number).reduce((acc,cur) => acc += cur)
}

console.log(solution("123456789"))
console.log(solution("1000000"))