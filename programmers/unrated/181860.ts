function solution(arr:number[], flag:boolean[]) {
  const result:number[] = [];
  flag.map((value:boolean, idx:number) => {
    if (value) {
      for (let i = 0; i < arr[idx] * 2; i++) {
        result.push(arr[idx]);
      }
    } else {
      for (let i = 0; i < arr[idx]; i++) {
        result.pop();
      }
    }
  });
  return result;
}

const arr = [3,2,4,1,3];
const flag = [true, false, true, false, false];
console.log(solution(arr,flag))