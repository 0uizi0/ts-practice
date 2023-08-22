function solution(arr: number[], delete_list: number[]): number[] {
  return arr.filter((el) => !delete_list.includes(el));
}

console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]));
console.log(solution([110, 66, 439, 785, 1], [377, 823, 119, 43]));
