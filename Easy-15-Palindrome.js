
function Palindrome(str) { 
  
  string1 = str.split(" ").join("");
  string2 = str.match(/[a-z]/gi).reverse().join("");

  if(string1 === string2) {
    return true;
  }
  return false;

}
   
