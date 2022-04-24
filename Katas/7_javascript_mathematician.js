function calculate(...args) {
    
    const sum = 0;
    function firstSum(...a) {
        a.forEach(item in arr) {
            sum+=item
        }
        return sum
    }
    
    const s = firstSum(args)

    return function finalSum(...args) {
      return s + firstSum(args)
    }
  }
  
console.log(calculate(1,2,2)(2))