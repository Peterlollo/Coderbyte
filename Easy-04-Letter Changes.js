//With Recursion
function LetterChanges(str) {
  if(str.length === 0){
    return '';
  }
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var beta = "AbcdEfghIjklmnOpqrstUvwxyzAbcdEfghIjklmnOpqrstUvwxyz";
  var result = '';
  str = str.toLowerCase();
  var arr = str.split('');
  var rmv = arr.shift();
  if(!(rmv.match(/[a-z]/))) {
    result += rmv;
  }
  else {
  result += beta.charAt(1+ alpha.indexOf(rmv));
  }
  arr = arr.join('');
  return (result += LetterChanges(arr));     
}

//Without Recursion
function LetterChanges(str) {

var oldAlpha = "abcdefghijklmnopqrstuvwxyza";
var newAlpha = "abcdEfghIjklmnOpqrstUvwxyzA";
var answer = "";
str.toLowerCase();


for(i=0;i<str.length;i++) {
if(str[i].match(/[a-z]/gi)) {
answer += newAlpha.charAt(oldAlpha.indexOf(str[i])+1);
} else {
answer += str[i];
}
}
return answer;
}
