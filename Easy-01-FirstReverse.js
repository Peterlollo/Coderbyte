function FirstReverse(str) { 
var reversed = [];

for (i = str.length-1; i>=0; i--) {
  reversed.push(str[i]);
}

  return reversed.join(""); 
}
