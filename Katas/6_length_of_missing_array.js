// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/javascript

function getLengthOfMissingArray(arrayOfArrays) {
  if(arrayOfArrays === null) return 0;
  if (arrayOfArrays.length === 0) return 0;
  let lengthArr = arrayOfArrays.map(el => {
    if (el !== null) 
    {return el.length} 
    else {return 0}
  })
    .sort((a, b) => (a - b));

  for(let i = 0; i < lengthArr.length-1; i++) {
    
    if (lengthArr[i] === 0) return 0;

    if(lengthArr[i+1] - lengthArr[i] > 1) {
      return lengthArr[i]+1;
    }
  }
}

console.log(getLengthOfMissingArray(null ));
console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ));
console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ));
console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ));
console.log(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] ));
console.log(getLengthOfMissingArray([ ]));
console.log(getLengthOfMissingArray([[2, 3, 0, 4], [3, 1, 3, 4, 2, 4], [1, 4, 2, 3, 3, 3, 0, 0], [2, 4, 4, 4, 1, 2, 3]]));
console.log(getLengthOfMissingArray(
  [[1, 2, 4, 4],
  [3, 2, 4],
  [0, 3, 4, 1, 0, 1],
  [2, 4, 3, 4, 3, 4, 4]]));

  console.log(getLengthOfMissingArray([[2, 2],
[2, 4, 3],
null,
[1, 3, 2, 3, 1],
[1, 0, 0, 4]]));