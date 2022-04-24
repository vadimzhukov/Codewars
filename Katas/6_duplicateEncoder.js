function duplicateEncode(word) {
  let wordArr = word.split('');
  let resultArr = [];
  for(let i = 0; i < wordArr.length; i++) {
    if(countChar(word, wordArr[i]) > 1) {
      resultArr.push(')');
    } else {
      resultArr.push('(');
    }
  }

  function countChar(str, char) {
    
    const strArr = str.toLowerCase().split('');
    let counter = 0;
    for(let i = 0; i < strArr.length; i++) {
      if(strArr[i] === char.toLowerCase()) {
        counter++;
      }
    }
    return counter;
  }
  return resultArr.join('');

//   return word
// .toLowerCase()
// .split('')
// .map( function (a, i, w) {
//   return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
// })
// .join('');
}



// Testing:
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));