function stickyCalc (operation, val1, val2){
    const roundVal1 = Math.round(val1)
    const roundVal2 = Math.round(val2)
    const stickedVal = parseInt(roundVal1.toString() + roundVal2.toString())
    if (operation === '+') {
        return (stickedVal + roundVal2)
    }
    if (operation === '-') {
        return (stickedVal - roundVal2)
    }
    if (operation === '*') {
        return (stickedVal * roundVal2)
    }
    if (operation === '/') {
        return Math.round(stickedVal / roundVal2)
    }
}

console.log(stickyCalc('+', 4.2, 7), 
stickyCalc('-', 15, 10),
stickyCalc('/', 433, 930),
stickyCalc('*', 5, 5))
