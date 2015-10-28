function LetterCount(str) { 

  var arr = str.toLowerCase().split(" ");
  var first = arr[0].split("").sort();
  var repeats = [];
  var cur = [];
  var answer = arr[0];


   
  for(i=0;i<first.length-1;i++) {
    if(first[i+1] === first[i]) {
      repeats.push(first[i]);
    }
  }
  
  for(j=1;j<arr.length;j++) {
    word = arr[j];
    testWord = arr[j].split("").sort();
    for (k=0;k<word.length-1;k++) {
      if(testWord[k+1] === testWord[k]){
        cur.push(testWord[k]);
      }
    }
    if(cur.length>repeats.length) {
      repeats = cur;
      answer = word;
    }
  }

       if(repeats.length === 0) {
        return -1 
       }
  return answer;
}
       if(repeats.length === 0) {
        return -1 
       }
  return answer;
}
