//With Recursion
function exOh (str) {
  if(!(str.match(/[a-z]/))) {
    str = str.split('').map(function(item) {
      if(item === '-') {
        return -1;
      }
      return item;
    })
   str = str.reduce(function(a,b) {
      return parseInt(a) + parseInt(b);
    })
    return str === 0;
  }
  var arr = str.split('');
  var rmv = arr.shift();
  if(rmv === 'x') {
    arr.push(1);
  }
  else if(rmv === 'o') {
    arr.push('-');
  }
  arr = arr.join('');
  return exOh(arr);
}

//Without Recursion
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
