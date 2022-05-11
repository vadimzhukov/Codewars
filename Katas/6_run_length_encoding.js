// https://www.codewars.com/kata/546dba39fa8da224e8000467/train/javascript

var runLengthEncoding = function(str){
  let sum = 1;
  let result = [];
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i-1]) {
      sum++;
    } else {
      result.push([sum, str[i-1]]);
      sum = 1;
    }
  }
  return result; 
}

console.log(runLengthEncoding("Hello, world!"));
console.log(runLengthEncoding("AAA!!! Save me from the mooonster!"));
