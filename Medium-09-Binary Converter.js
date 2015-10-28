function BinaryConverter(str) { 

  var add = [];
  var count = 0;
  
for(i=str.length-1;i>=0;i--) {
  add.push((Number(str[i]))*(Math.pow(2, count)));
  count++;
}
   
    return add.reduce(function(a,b){return a + b});
 
}
