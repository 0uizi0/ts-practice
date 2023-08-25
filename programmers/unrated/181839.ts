function solution(a: number, b: number): number {
  if (a % 2 !== 0 && b % 2 !== 0) return a ** 2 + b ** 2;
  else if (a % 2 == 0 && b % 2 == 0) return Math.abs(a - b);
  else return 2 * (a + b);
}
console.log(solution(3, 5));
console.log(solution(6, 1));
console.log(solution(2, 4));
