function isPowOfTw(num:number):boolean {
  if (num === 1) return true;
  if (num % 2) return false;

  let powered = 2;
  while (powered < num) {
    powered *= 2;
  }
  return powered === num;
}

function solution(arr:number[]):number[] {
  let result = [...arr];
  while (!isPowOfTw(result.length)) {
    result.push(0);
  }
  return result;
}

console.log(solution([1, 2, 3, 4, 5, 6]));
console.log(solution([58, 172, 746, 89]));
