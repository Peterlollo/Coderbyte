function PalindromeTwo(str) { 
str = str.toLowerCase();
  strArr = str.match(/[a-z]/g).reverse().join("");

if(strArr === str.match(/[a-z]/g).join("")) {
  return true;
}
  return false;
}
