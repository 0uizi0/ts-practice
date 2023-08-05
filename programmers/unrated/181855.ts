function solution(strArr:string[]):number {
  const dict:{[key:number]:string[]} = {};
  strArr.forEach((item) => {
    const len = item.length;
    dict[len] = dict[len] ?? [];
    dict[len].push(item);
  });
  const lengths = Object.values(dict).map((item) => item.length);
  return Math.max(...lengths);
}

console.log(solution(["a", "bc", "d", "efg", "hi"]));
