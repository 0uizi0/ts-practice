function solution(my_string: string, target: string): number {
  return my_string.includes(target) ? 1 : 0;
}

console.log(solution("banana", "ana"));
console.log(solution("banana", "wxyz"));
