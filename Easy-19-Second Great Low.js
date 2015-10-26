function SecondGreatLow(arr) { 

var sorted = arr.sort(function(a,b){return a -b});
var max = sorted.pop();
var min = sorted.shift();

  if(sorted.length === 0) {
return max + " " + min;
  }
  

  if(arr.length === 1) {
 return sorted[0] + " " + sorted[0];
  }
 
  return sorted[0] + " " + sorted[sorted.length-1];
 
}
