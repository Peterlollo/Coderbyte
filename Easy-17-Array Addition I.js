function ArrayAdditionI(arr) { 
var arrSort = arr.sort(function(a,b){return a-b});
  var max = arrSort.pop();
  var result = false;
 
  var check = function(sum,i) {
    sum = sum || 0;
    i = i || 0;
    
    if(sum === max) {
      result = true;
      return;
  }
  
    for(;i<arrSort.length;i++) {
      sum += arrSort[i];
      check(sum,i+1);
      sum -= arrSort[i];
    }
  }

  check();
  return result; 
         
}
