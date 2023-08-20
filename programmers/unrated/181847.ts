function solution(n_str:string):string {
  const str = n_str.split('')
  while (str[0] == '0') {
      str.shift()
  }
  return str.join('')
}

console.log(solution('0010'))
console.log(solution('854020'))