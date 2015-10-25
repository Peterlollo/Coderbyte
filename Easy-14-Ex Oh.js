function ExOh(str) { 

  var string = str.toLowerCase();
  var xCount = 0;
  var oCount = 0;
  
  
  for(i=0;i<string.length;i++) {
   if(string[i] === "x") {
     xCount ++;
  } else if(string[i] === "o") {
   oCount++;
  }
}

return (xCount === oCount);
         
}
