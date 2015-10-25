function Palindrome(str) { 
var reversed = str.match(/[a-z]/gi).reverse().join("");

  for(i=0; i<reversed.length; i++) {
   if(reversed[i] === str[i]) {
     return true;
  }
  }
     return false;    
}
