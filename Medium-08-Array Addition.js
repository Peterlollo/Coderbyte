function ArrayAddition(arr) { 

 var max = arr.sort(function(a,b) {return a - b}).pop();
 var sum = 0;
  
    for(i=0;i<arr.length;i++) {
      sum += arr[i];
      if(sum === max) {
        return true;
    }
    
      for(j=0;j<arr.length;j++) {
        if(j !== i) {
          sum += arr[j];
        }
        if(sum === max) {
         return true; 
        }
      }
   
        for(k=0;k<arr.length;k++) {
          if(k !== i) {
           sum -= arr[k]; 
          }
        if(sum === max) {
          return true;
        }
        }
  }
  

  return false;
}
