//With Recursion
function LetterCapitalize(str) { 
  if(str.length === 0) {
    return '';
  }
  var result = '';
  var arr = str.split(' ');
  var rmv = arr.shift().toString().split('');
  result += rmv.shift().toUpperCase();
  result += rmv.join('');
  if(arr.length>0) {
    result += ' ';
  }
  arr = arr.join(' ');
  return (result += LetterCapitalize(arr));        
}

//Without Recursion
function LetterCapitalize(str) { 
  var answer = "";
  
for(i=0;i<str.length;i++) {
 if(i === 0) {
   answer += str[i].toUpperCase();
 } 
 else if(str[i-1] === " ") {
   answer += str[i].toUpperCase();
 } 
 else {
   answer += str[i];
 }
}

  return answer;
}
