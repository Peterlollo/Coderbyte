function StringScramble(str1,str2) {
  var used = [];
for(i=0;i<str2.length;i++) {
  if(str1.indexOf(str2[i]) === -1) {
    return false;
  } else {
    str1 = str1.replace(str1.charAt(str1.indexOf(str2[i])), "");
  } 
}
   return true;       
}
