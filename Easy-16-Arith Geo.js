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

  return answer;
         
}
