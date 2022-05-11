function myLanguages(results) {
  let arr = [];
  for(let key in results) {
    if(results[key] >= 60) {
      arr[results[key]] = key;
    }
  }
  return arr.sort((a,b) => b - a)
  .filter(n => n);
}

myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65});
myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93});
myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20});