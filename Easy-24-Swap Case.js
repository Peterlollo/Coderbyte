function SwapCase(str) { 

var result = "";

  for(i=0;i<str.length;i++) {
   if(str[i].match(/[a-z]/)) {
      result += str[i].toUpperCase();
      }
      
 else if(str[i].match(/[A-Z]/)) {
     result += str[i].toLowerCase();
     } 
     
     else {
       result += str[i];
     }
  }
  
  
  return result;
}
