function solution(date1: number[], date2: number[]): number {
  const [year1, month1, day1] = date1,
    [year2, month2, day2] = date2;

  if (year1 !== year2) return year1 < year2 ? 1 : 0;
  if (month1 !== month2) return month1 < month2 ? 1 : 0;
  if (day1 !== day2) return day1 < day2 ? 1 : 0;
  return 0;
}
console.log(solution([2021, 12, 28], [2021, 12, 29]));
console.log(solution([1024, 10, 24], [1024, 10, 24]));
