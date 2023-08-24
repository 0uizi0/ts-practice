function solution(str1: string, str2: string): number {
  return str2.includes(str1) ? 1 : 0;
}

console.log(solution("abc", "aabcc"));
console.log(solution("tbt", "tbbttb"));
