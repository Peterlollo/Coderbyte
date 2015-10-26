function CountingMinutesI(str) { 
  
var arr = str.split("-");
  var start = arr[0];
  var end = arr[1];

  
  var startArr = start.split(":");
  var startHour = parseInt(startArr[0]);
  var startMinute = parseInt(startArr[1]);

  var endArr = end.split(":");
  var endHour = parseInt(endArr[0]);
  var endMinute = parseInt(endArr[1]);
  

  
  if(start.match("a") && startHour === 12) {
    startHour = 0;
  }
  if(end.match("a") && start.match("p")) {
    endHour += 24;
  }
  if(end.match("a") && startHour ===12) {
    endHour = 24;
  }
  
    if(start.match("p") && startHour !== 12) {
      startHour +=12;
    }
  if(end.match("p") && endHour !== 12) {
   endHour += 12; 
  }
  
  if(start.match("a") && end.match("a") && endMinute < startMinute) {
   endHour += 24; 
  }
   if(start.match("p") && end.match("p") && endMinute < startMinute) {
   endHour += 24; 
  }
  
  var finalHour = endHour - startHour;
  var finalMinute = endMinute - startMinute;
  var answer = Math.abs(finalHour*60 + finalMinute);

  return answer;
         
}
