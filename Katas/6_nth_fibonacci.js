function nthFibo(n) {
  // Return the n-th number in the Fibonacci Sequence
  let arr = [0, 1];
  for(let i=2; i < n; i++) {
    arr.push((arr[i-1] + arr[i-2]));
  }
  return arr[n-1] ? arr[n-1] : 0;

  // let [prev, curr] = [0, 1];
  // for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
  // return prev;
}

console.log(nthFibo(1));
console.log(nthFibo(2));
console.log(nthFibo(3));
console.log(nthFibo(4));
console.log(nthFibo(5));
console.log(nthFibo(6));
console.log(nthFibo(7));
console.log(nthFibo(8));
