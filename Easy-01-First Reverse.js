//With Recursion
function FirstReverse(str) { 
  if(str.length === 0) {
    return '';
  }
  var result = '';
  var arr = str.split('');
  result += arr.pop();
  var arr = arr.join("");
  return (result += FirstReverse(arr));
}

//Without Recursion
function FirstReverse(str) { 
var reversed = [];

for (i = str.length-1; i>=0; i--) {
  reversed.push(str[i]);
}

  return reversed.join(""); 
}
