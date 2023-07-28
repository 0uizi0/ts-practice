function solution(arr:number[]) {
  return arr.reduce((list:number[],num)=>[...list, ...new Array(num).fill(num)],[])
}

console.log(solution([5,1,4]))
console.log(solution([6,6]))
console.log(solution([1]))