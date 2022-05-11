//https://www.codewars.com/kata/59fa8e2646d8433ee200003f/train/javascript

function sortByBit(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toString(2);
  }

  arr.sort((a, b) => {
    let x = a.split('').reduce((sum, el) => sum + Number(el),0);
    let y = b.split('').reduce((sum, el) => sum + Number(el),0);
    if (x === y) { return parseInt(a, 2) - parseInt(b, 2)}
    else { return x - y; }
  });

  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i], 2);
  }
  return arr;
}

let a = [3, 8, 3, 6, 5, 7, 9, 1];
console.log(sortByBit(a));

//Test.assertDeepEquals(a, [1, 8, 3, 3, 5, 6, 9, 7]);

let b = [9,4,5,3,5,7,2,56,8,2,6,8,0];
console.log(sortByBit(b));

//Test.assertDeepEquals(b, [0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]);