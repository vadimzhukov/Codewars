// https://www.codewars.com/kata/5b6db1acb118141f6b000060/train/javascript

function recycle(array) {

  let sortingOrder = ['paper', 'glass', 'organic', 'plastic'];
  let result = [];
  for (let i = 0; i < sortingOrder.length; i++){
    result.push([]);
  }

  function matchGarbageToMaterial(garbageObj, sorting) {
    let matchArr = [];
    for (let i = 0; i < sorting.length; i++) {
      if( garbageObj['material'] === sorting[i] || garbageObj['secondMaterial'] === sorting[i]) {
        matchArr.push(1);
      } else {
        matchArr.push(0);
      }
    }
    return matchArr;
  }

  for (let i = 0; i < array.length; i++) {
    let sortingMask = matchGarbageToMaterial(array[i], sortingOrder);
    for (let j = 0; j < sortingOrder.length; j++) {
      if (sortingMask[j] === 1) { result[j].push(array[i].type);}
    }
  } 
  return result;
}

let a = [
  {type: 'rotten apples', material: 'organic'},
  {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
  {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
  {type: 'amazon box', material: 'paper'},
  {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
];

console.log(recycle(a));