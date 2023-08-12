function solution(rank: number[], attendance: boolean[]): number {
  const [a, b, c] = rank
    .filter((v, i) => attendance[i])
    .sort((prev, next) => prev - next);
  const [firstRank, secondRank, thirdRank] = [
    rank.indexOf(a),
    rank.indexOf(b),
    rank.indexOf(c),
  ];
  return 10000 * firstRank + 100 * secondRank + thirdRank;
}

console.log(
  solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false])
);
console.log(solution([1, 2, 3], [true, true, true]));
console.log(
  solution([6, 1, 5, 2, 3, 4], [true, false, true, false, false, true])
);
