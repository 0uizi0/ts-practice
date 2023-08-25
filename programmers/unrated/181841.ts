function solution(str_list: string[], ex: string): string {
  return str_list.filter((str) => !str.includes(ex)).join("");
}

console.log(solution(["abc", "def", "ghi"], "ef"));
console.log(solution(["abc", "bbc", "cbc"], "c"));
