function solution(arr: number[]) {
  const stk: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (stk.length == 0) {
      stk.push(arr[i]);
    } else {
      stk[stk.length - 1] === arr[i] ? stk.pop() : stk.push(arr[i]);
    }
  }
  return stk.length == 0 ? [-1] : stk;
}

console.log(solution([0, 1, 1, 1, 0]));
console.log(solution([0, 1, 0, 1, 0]));
console.log(solution([0, 1, 1, 0]));
