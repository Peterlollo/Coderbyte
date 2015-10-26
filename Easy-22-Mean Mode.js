
function MeanMode(arr) { 
var mode;
var meanTotal = 0;
var mean;
var result = 0;
var sorted = arr.sort(function(a,b){return a-b});
var lowest = sorted[0];
var lowestArr = [];
  var repeats = {}
  
  for(i=0;i<arr.length;i++) {
 meanTotal += arr[i];
}
  mean = meanTotal/arr.length;


    if(sorted[(sorted.length)-1] === sorted[0]) {
   lowestArr = [sorted[0]];
   mode = lowestArr[0];
    } else {
  
 
      for(k=1;k<sorted.length;k++) {
    if(sorted[k] !== sorted[k-1]) {
     var compare = sorted.splice(0,k);
       if(compare.length > lowestArr.length) {
        lowestArr = compare;
      }
    }
  }
      mode = lowestArr[1];
 }


  if(mode === mean) {
    result = 1;
  }
  return result;
}



//Alternate Solution

function MeanMode(arr) { 

  var sum = 0;
  var answer = 1
  
   for(i=0;i<arr.length;i++) {
    sum+=arr[i];
  }

    var mean = Math.round(sum/(arr.length));


  arr.sort(function(a,b) {return a -b});
  
  var mode = function (final, j) {
    var cur = 0;
    var modeNum;
    final = final || 0;
    j = j || 0;
  for(;j<arr.length-1;j++) {
   if(arr[j+1] === arr[j]) {
     cur ++;
  } else {
    if(cur > final) {
      final = cur;
      modeNum = arr[j];
    }
    mode(final, j+1);
  }
     }
    return modeNum;
  }
    
  
  
    if(mode()!== mean) {
      answer = 0;
    }
    return answer;
}
