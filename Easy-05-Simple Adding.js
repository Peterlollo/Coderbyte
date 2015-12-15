//With Recursion
function SimpleAdding(num) { 
  if(num === 0) {
    return 0;
  }
  var result = 0;
  result += num;
  return (result += SimpleAdding(num - 1));         
}

//Without Recursion
function SimpleAdding(num) { 
var total = 0;

  for (n=1; n<= num; n++){
  total +=n;
  }
  
return total;     
}
