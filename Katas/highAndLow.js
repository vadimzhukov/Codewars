function highAndLow(numbers){
  const arr = numbers.split(' ').sort((a, b) => a - b)
  return `${arr[arr.length-1]} ${arr[0]}`
  }
console.log(highAndLow("1 2 3 -4 8 9"))