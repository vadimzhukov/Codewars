function launchAll(launchMissile) {
  
  for(let i = 0; i < 5; i++) {
    setTimeout(function() {
      launchMissile(i);
    }, i * 1000);
  }
}

function launchRocket(num) {
  console.log(`Launching rocket #${num}`);
}


launchAll(launchRocket);