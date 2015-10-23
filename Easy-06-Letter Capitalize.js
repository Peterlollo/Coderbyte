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
