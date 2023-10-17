function checkRight(stack: string): 0 | 1 {
  let checkStack: string[] = [];

  let hashMap = new Map();
  hashMap.set("{", "}");
  hashMap.set("[", "]");
  hashMap.set("(", ")");

  if (!hashMap.has(stack[0]) || hashMap.has(stack[stack.length - 1])) return 0;

  for (let i = 0; i < stack.length; i++) {
    let el = stack[i];
    let lastEl = checkStack[checkStack.length - 1];

    if (hashMap.has(el)) checkStack.push(el);
    if (el == hashMap.get(lastEl)) checkStack.pop();
  }
  return checkStack.length == 0 ? 1 : 0;
}

const solution = (s: string): number => {
  let cnt = 0;

  let newstring = s.repeat(2);
  let index = 0,
    n = s.length;

  while (index < n) {
    let myStack = newstring.slice(index, n + index);
    cnt += checkRight(myStack);
    index++;
  }
  return cnt;
};
