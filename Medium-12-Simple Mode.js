function SimpleMode(arr) { 

  var repeats = [];
  var cur = [];
  var original = [];

  for(i=0;i<arr.length;i++) {
    original.push(arr[i]);
  }
  
 arr.sort(function(a,b){return a-b});
  

  
  for(i=0;i<arr.length-1;i++) {
  
    if (i=== arr.length - 2) {
       if(arr[i] === arr[i+1]) {
        cur.push(arr[i]);
    }
      
      if(cur.length > repeats.length) {
        repeats = cur;
        cur = [];
  }
    if(cur.length === repeats.length) {
      if(original.indexOf(cur[0]) < original.indexOf(repeats[0])) {
        repeats = cur;
        cur = [];
      }
    }
  }
      
         
    
 if(arr[i] === arr[i+1]) {
        cur.push(arr[i]);
    }
      else if(cur.length > repeats.length) {
        repeats = cur;
        cur = [];
  }
    else if(cur.length === repeats.length) {
      if(original.indexOf(cur[0]) < original.indexOf(repeats[0])) {
        repeats = cur;
        cur = [];
      }
    }
  }
  
  
  
  
  if(repeats.length === 0) {
    return -1;
  }
      return repeats [0];   
}
