function LongestWord(sen) { 
  var longest = "";
  var wordArr = sen.match(/[a-z]+/gi);

for(i=0;i<wordArr.length;i++) {
  if(wordArr[i].length > longest.length) {
    longest = wordArr[i];
  }
}
  return longest;
}
