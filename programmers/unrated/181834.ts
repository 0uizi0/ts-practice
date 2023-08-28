function solution(myString: string): string {
  const prev = "abcdefghijk".split("");
  return [...myString].map((str) => (prev.includes(str) ? "l" : str)).join("");
}

console.log(solution("abcdevwxyz"));
console.log(solution("jjnnllkkmm"));
