function NumberAddition(str) { 

  var arr = str.match(/[0-9]+/g);
  var sum = 0;

  for(i=0;i<arr.length;i++) {
   sum += Number(arr[i]); 
  }
  
  return sum;       
}
