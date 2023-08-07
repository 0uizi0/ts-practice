function solution(arr:number[], n:number):number[] {
  if (arr.length % 2 == 0) {
      return arr.map((value, idx) => idx % 2 == 0 ? value : value + n )
  } else {
      return arr.map((value,idx) => idx % 2 == 0 ? value + n : value )
  }
}

console.log(solution([49, 12, 100, 276, 33]	,27))
console.log(solution([444, 555, 666, 777],	100))