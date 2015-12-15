//With Recursion
function FirstFactorial(num) { 
if(num < 0) {
  return -1;
}
  else if(num === 0) {
    return 1;
  }
  return (num * FirstFactorial(num - 1));    
}


//Without Recursion
function FirstFactorial(num) { 
var answer = 1;
for(i=num;i>0;i--) {
 answer *=i
}
return answer;
}
