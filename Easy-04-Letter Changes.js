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
