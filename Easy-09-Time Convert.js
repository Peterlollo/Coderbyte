function TimeConvert(num) { 

var minutes = num % 60;
var hour = Math.floor(num/60);

 return hour+ ":" + minutes;
 
};
