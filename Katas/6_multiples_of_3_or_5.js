function solution(number){
  let sum = 0;
  for(let i = 3; i < number; i += 3) {
    if((i%5)) {
      sum += i;
    }
  }
  for(let i = 5; i < number; i += 5) {
    sum += i;
  }
  return sum;

  // var sum = 0;
  
  // for(var i = 1;i< number; i++){
  //   if(i % 3 == 0 || i % 5 == 0){
  //     sum += i
  //   }
  // }
  // return sum;
}

console.log(solution(10));
console.log(solution(20));
console.log(solution(30));