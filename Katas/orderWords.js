function order(words){
    return words.split(' ').sort((item1, item2) => {
        console.log(`Сравниваем 2 слова: ${item1} и ${item2} `)
        return item1.split('').filter(i => !isNaN(-i)).join('') - item2.split('').filter(i => !isNaN(-i)).join('')
    })
.join(' ')
}
console.log(order("Eror3 pa5pa 1mama sher4lock"))
