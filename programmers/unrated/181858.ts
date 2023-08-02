function solution(arr:number[], k:number) {
  const result:number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i]) && result.length < k) result.push(arr[i]);
  }
  while (result.length < k) result.push(-1);
  return result;
}

console.log(solution([0, 1, 1, 2, 2, 3], 3));
console.log(solution([0, 1, 1, 1, 1], 4));
