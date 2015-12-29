//With Recursion
var arrayAddition = function(arr) {
  arr = arr.sort();
  var target = arr.pop();
  var check = function(target, array) {
    if(array.length === 0) {
      return target === 0;
    }
    var n = array[0];
    array = array.slice(1);
    return check(target, array) || check(target - n, array);
  }
  return check(target, arr);
}

//Without Recursion
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
