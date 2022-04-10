function duplicateEncode(word) {
 
word.split('').reduce(({prev, arr}, v) => {
    if(v === 
}
  return arr.join('');
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
