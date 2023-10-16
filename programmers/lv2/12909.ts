const solution = (s: string): boolean => {
  let myStack: number[] = [];
  let isEmpty = false;

  if (myStack.length == 0 && s[0] == `)`) return false;

  for (let i = 0; i < s.length; i++) {
    s[i] == `(` ? myStack.push(0) : myStack.pop();
  }
  if (myStack.length == 0) isEmpty = true;
  return isEmpty;
};
