function findOdd(A) {
 //сначала сортируем массив
 A.sort((a, b) => a - b)
 
 while (A.length > 0) {
    const val = A[0]
    const B = A.filter((i) => i === val)
    if (B.length % 2) {
        return val
        break;
    } else {
        A = A.slice(B.length)
    }
}
}

const arr = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]

console.log(findOdd(arr));