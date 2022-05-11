// https://www.codewars.com/kata/head-tail-init-and-last
function head(arr) {
  return arr[0]
}

function tail(arr) {
  if (arr.length < 2) return [];
  let result = [];
  for (let i = 1; i < arr.length; i++){
    result.push(arr[i]);
  } 
  
  return result;
}

function init(arr) {
  
  let result = [];
   for (let i = 0; i < arr.length - 1; i++){
    result.push(arr[i]);
  } 
  return result;
}

function last(arr) {
  let result = arr[arr.length-1];
  return result;
}

console.log(head([5,1]));
console.log(tail([1]));
console.log(init([1,5,7,9]));
console.log(last([7,2]));