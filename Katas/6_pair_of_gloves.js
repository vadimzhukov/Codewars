// https://www.codewars.com/kata/58235a167a8cb37e1a0000db/javascript

function numberOfPairs(gloves)
{
  let singleGloves = [];
  let sum = 0;

  for (let i = 0; i < gloves.length; i++) {
    if (singleGloves.includes(gloves[i])) {
      sum++;
      let index = singleGloves.indexOf(gloves[i]);
      singleGloves.splice(index,1);
    } else {
      singleGloves.push(gloves[i]);
    }
  }

  return sum;
}

console.log(numberOfPairs(['red','red']));
console.log(numberOfPairs(['red','green','blue']));
console.log(numberOfPairs(['gray','black','purple','purple','purple','gray','black','gray','purple','gray']));

console.log(numberOfPairs(["Lime","Purple","Olive","Red"]));