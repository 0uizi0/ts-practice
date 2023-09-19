const solution = (arr: number[]) => {
  const stack: number[] = [];
  arr.forEach((el, index) => {
    stack.push(el);
    if (arr[index - 1] == el) stack.pop();
  });
  return stack;
};
console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
