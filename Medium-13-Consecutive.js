function Consecutive(arr) { 

  var diff = 0;
  arr.sort(function(a,b){return a -b});
  for(i=1;i<arr.length;i++) {
    if(arr[i] - arr[i-1] > 1) {
      diff += arr[i] - arr[i-1] - 1;
    }
  }
     return diff;    
}
