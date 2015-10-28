function CaesarCipher(str,num) { 


var alpha = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
var beta = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"
var result = ""
var number = num;


  if (num>26) {
    number = num%26;
  }

for(i=0;i<str.length;i++) {
  if(str[i].match(/[a-z]/)) {
     result += alpha.charAt(number + Number(alpha.indexOf(str[i])));
     }
  else if(str[i].match(/[A-Z]/)) {
     result += beta.charAt(number + Number(beta.indexOf(str[i])));
     }
else {
  result += str[i];
}
}
   
return result;
}
