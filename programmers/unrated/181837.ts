type Price = 4500 | 5000;

function selectDrink(drink:string):Price{
  const ame_list = ["iceamericano", "americanoice", "hotamericano", "americanohot", "americano", "anything"]
  const latte_list = ["icecafelatte", "cafelatteice","hotcafelatte", "cafelattehot","cafelatte" ]
  
  if (ame_list.includes(drink)) return 4500;
  if (latte_list.includes(drink)) return 5000;

  throw new Error("Invalid drink"); // 잘못된 음료일 경우 예외 처리
}

function solution(order:string[]):number {
  return order.reduce((sum, drink) => sum += selectDrink(drink), 0)
}

console.log(solution(["cafelatte", "americanoice", "hotcafelatte", "anything"]))
console.log(solution(["americanoice", "americano", "iceamericano"]))