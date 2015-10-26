function ArithGeo(arr) { 
 
 var arithDiff = arr[1] - arr[0];
  var arithCheck = 0;
  var geoDiff = arr[1]/arr[0];
  var geoCheck = 0;
  var answer = -1;
 
 for(i=0;i<arr.length-1;i++) {
 if(arr[i+1] - arr[i] === arithDiff) {
   arithCheck ++;
  }
 }
 
  for(j=0;j<arr.length - 1; j++) {
   if(arr[j+1]/arr[j] === geoDiff) {
     geoCheck ++;
   }
  }
   
   if(arithCheck === arr.length-1) {
     answer = "Arithmetic";
   }
    if(geoCheck === arr.length-1) {
      answer = "Geometric";
    }
      if(arr.length<3) {
    answer = -1;
  }
    
    return answer;
    
}


// Alternate Solution

function arith(arr) {
   var diff = arr[1] - arr[0];
  for(i=0; i<arr.length-1; i++) {
  if(arr[i+1] - diff !== arr[i]) {
    return false;
}
  }
    return true;
  }
    
    function geo(arr) {
        var divisor = arr[1]/arr[0];
  for(i=0; i<arr.length-1; i++) {
    if (arr[i+1]/divisor !== arr[i]) {
    return false;
  }
  }
    return true;
    }
    
    
    
function ArithGeo(arr) { 
  if(arr.length<3) {
    return -1;
  }
  else if(arith(arr)) {
    return "Arithmetic";
} else if (geo(arr)) {
  return "Geometric";
}
  else {
    return -1;
  }
}
  return answer;
         
}
