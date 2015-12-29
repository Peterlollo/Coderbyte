//With Recursion
function SimpleSymbols(str) { 
  if(str.length <= 0) {
    return true;
  }
  else if(!(str.match(/[a-z]/i))) {
    return true;
  }
  str = str.split('');
  for(var i = 0; i<str.length; i++) {
    if(str[i].match(/[a-z]/i)) {
      if(str[i-1] !== '+' || str[i+1] !== '+') {
        return false;
      }
      str = str.join('');
      str = str.slice(i+1);
      return SimpleSymbols(str);
    }
  }
}


//Without Recursion
function SimpleSymbols(str) { 

  for(i=0;i<str.length;i++) {
   if(str[i].match(/[a-z]/gi)) {
     if(str[i-1] !== "+" || str[i+1] !== "+") {
      return false; 
     }
   }
}

  return true;
}
