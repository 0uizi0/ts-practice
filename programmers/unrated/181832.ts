function solution(n:number):number[][] {
  const dp = [[0,1],[1,0],[0,-1],[-1,0]];
  const result:number[][] = Array.from(Array(n), () => Array(n).fill(0));
  
  let x = 0, y = 0, dir = 0, num = 1;
  while (num <= n**2) {
      result[x][y] = num;
      let newX = x + dp[dir][0];
      let newY = y + dp[dir][1];
      
      if (newX >= n || newX < 0 || newY >= n || newY < 0 || result[newX][newY] !== 0) {
          dir = (dir + 1) % 4;
          newX = x + dp[dir][0];
          newY = y + dp[dir][1];
      }
      x = newX;
      y = newY;
      num++;
  }
  return result
}

console.log(solution(4))
console.log(solution(5))