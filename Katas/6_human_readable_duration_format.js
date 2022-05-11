//https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript


function formatDuration (seconds) {
  if (seconds === 0) return 'now';
  const secondsInYear = 60 * 60 * 24 * 365;
  const secondsInDay = 60 * 60 * 24;
  const secondsInHour = 60 * 60;

  //calculate integer years, days, hours and minutes from seconds 

  const years = Math.floor(seconds / (secondsInYear));
  const days =  Math.floor((seconds - years * (secondsInYear)) / (secondsInDay));
  const hours = Math.floor((seconds - years * (secondsInYear) - days * (secondsInDay)) / (secondsInHour));
  const minutes = Math.floor((seconds - years * (secondsInYear) - days * (secondsInDay) - hours * (secondsInHour))/ 60);
  const realSeconds = seconds % 60; 
  
  
  function timeUnitPhraseGenerator(units, name) {
    if (units === 1) {      
        return `${units} ${name}`;
    } else if (units > 1){
      return `${units} ${name}s`;
    } 
  }
  
  let timeString = [];

  // year(s) phrase
  if (years === 1) {
    timeString[0] = `${years} year`;
  } else if (years > 1) {
    timeString[0] = `${years} years`;
  }

  // day(s), hour(s), minute(s) phrases
  timeString[1] = timeUnitPhraseGenerator(days, 'day');
  timeString[2] = timeUnitPhraseGenerator(hours, 'hour');
  timeString[3] = timeUnitPhraseGenerator(minutes, 'minute');
  
  // second(s) phrases
  if (realSeconds === 1) {
  timeString[4] = secondsPart = `${realSeconds} second`;
  } else if( realSeconds > 1) {
    timeString[4] = secondsPart = `${realSeconds} seconds`;
  }
  

  timeString = timeString.filter(a => a); 
  let result = '';
  if (timeString.length > 1) {
    let lastUnit = timeString.pop();
    result = timeString.join(', ') + ' and ' + lastUnit;
  } else {
    result = timeString[0];
  }
  
  return result;
}

formatDuration(1);
formatDuration(62);
formatDuration(120);
formatDuration(3600);
formatDuration(333600);