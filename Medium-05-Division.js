function Division(num1,num2) { 
var max;
  
  if (num1 === num2) {
  return num1;
} else if(num1 > num2) {
  max = num1;
} else {
  max = num2
}
  cur = max;
 
  while(num1%cur !== 0 || num2%cur !==0) {
    cur--;
  }
  return cur;
}
