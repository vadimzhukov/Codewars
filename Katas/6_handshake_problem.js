function getParticipants(handshakes){
 let farmers = 1;

      for(let i = 1; i <= handshakes+1; i++) {
        if (i*(i-1)/2 >= handshakes) {
          farmers = i; 
          break;
        } 
    }
    return farmers;
}

console.log(getParticipants(0));
console.log(getParticipants(1));
console.log(getParticipants(2));
console.log(getParticipants(3));
console.log(getParticipants(6));
console.log(getParticipants(7));
console.log(getParticipants(11));


// function getParticipants(handshakes){
//   var sum=0, i=1;
//   while (sum<handshakes)
//     sum+=i++;
//   return i;
// }