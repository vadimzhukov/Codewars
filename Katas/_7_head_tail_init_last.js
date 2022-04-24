// https://www.codewars.com/kata/head-tail-init-and-last

function head(arr) {
  return arr[0]
}

function tail(arr) {
  return arr.splice(1)
}

function init(arr) {
  arr.pop()
  return arr
}

function last(arr) {
  return arr.pop()
}

console.log(head([5,1]));
console.log(tail([1]));
console.log(init([1,5,7,9]));
console.log(last([7,2]));