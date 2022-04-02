function order(words){
    return words.split(' ').sort((item1, item2) => {
        return item1.split('').filter(i => !isNaN(-i)).join('') - item2.split('').filter(i => !isNaN(-i)).join('')
    })
.join(' ')
}
  
  
  console.log(order("is2 Thi1s T4est 3a"))
