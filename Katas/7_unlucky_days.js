//https://www.codewars.com/kata/56eb0be52caf798c630013c0/train/javascript

function unluckyDays(year){
  let current13;
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    current13 = new Date(year, i, 13);
    sum += +(current13.getDay() === 5);
  }
  return sum;
}

console.log(unluckyDays(1586));
console.log(unluckyDays(2819));
console.log(unluckyDays(1001));