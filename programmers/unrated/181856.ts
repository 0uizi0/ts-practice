function solution(arr1: number[], arr2: number[]): number {
  let arr1Sum = arr1.reduce((acc, cur) => (acc += cur), 0),
    arr2Sum = arr2.reduce((acc, cur) => (acc += cur), 0);
  if (arr1.length > arr2.length) return 1;
  if (arr2.length > arr1.length) return -1;
  return arr1Sum === arr2Sum ? 0 : arr1Sum > arr2Sum ? 1 : -1;
}

console.log(solution([49, 13], [70, 11, 2]));
console.log(solution([100, 17, 84, 1], [55, 12, 65, 36]));
console.log(solution([1, 2, 3, 4, 5], [3, 3, 3, 3, 3]));
