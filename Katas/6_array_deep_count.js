function deepCount(a){
    let length = 0;
    for(let i = 0; i < a.length; i++) {
      if(!(a[i] instanceof Array)) {
        length++;
      } else {
        length += deepCount(a[i]) + 1;
      }
    }
    return length;
}

console.log(deepCount([]));
console.log(deepCount([1, 2, 3]));
console.log(deepCount(["x", "y", ["z"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([[[[[[[[[]]]]]]]]]));