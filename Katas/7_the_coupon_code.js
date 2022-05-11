// https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return (enteredCode === correctCode && (Date.parse(currentDate) <= Date.parse(expirationDate)));
}

console .log(checkCoupon('123','123','September 5, 2014','October 1, 2013'));
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'));