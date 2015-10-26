function PowersofTwo(num) { 
answer = false;
  
  var check = function (number) {
   var current = number/2;
    if(current === 1) {
      answer = true;
      return;
    } else if(current<1) {
      return;
    } else {
      check(current);
    }
  }
  
check(num);
     return answer;    
}

//Alternate Solution

function PowersofTwo(num) {
  for(i=0; i<17; i++) {
  if(Math.pow(2, i)=== num) {
    return true;
  }
  }
        return false; 
}
