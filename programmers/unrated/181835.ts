function solution(arr: number[], k: number): number[] {
  return k % 2 == 0 ? arr.map((num) => num + k) : arr.map((num) => num * k);
}
console.log(solution([1, 2, 3, 100, 99, 98], 3));
console.log(solution([1, 2, 3, 100, 99, 98], 2));
