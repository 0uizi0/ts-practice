function solution(a: string, b: string): string {
  return (BigInt(a) + BigInt(b)).toString();
}
console.log(solution("582", "734"));
console.log(solution("18446744073709551615", "287346502836570928366"));
console.log(solution("0", "0"));
