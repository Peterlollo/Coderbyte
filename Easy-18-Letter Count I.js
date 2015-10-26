function LetterCountI(str) { 
  str.toLowerCase();
var arr = str.split(" ");
  var firstWord = arr[0].split("").sort();
  var firstWordRepeats = [];
  var checkRepeats = [];
  var answer = -1
 
  for(i=0;i<firstWord.length-1;i++) {
    if(firstWord[i+1] === firstWord[i]) {
      firstWordRepeats.push(firstWord[i]);
    }
  }
  
  if(firstWordRepeats.length > 0) {
   answer = arr[0]; 
  }
 
  for(j=1;j<arr.length;j++) {
    var word = arr[j].split("").sort();
    for(k=0;k<word.length-1;k++) {
      if(word[k+1] === word[k]) {
       checkRepeats.push(word[k]); 
      }
    }
    
    if(checkRepeats.length > firstWordRepeats.length) {
     firstWordRepeats = checkRepeats;
    answer = arr[j];
    }
  }
  
  
    return answer;     
}

// Alternate Solution

function LetterCountI(str) { 
var arr = str.toLowerCase().split(" ");
  count = 0;
  var repeats = [];
  var firstWord = arr[0];
  var firstRepeats = [];
  var result = firstWord;
  for(j=0;j<firstWord.length;j++) {
      for(k=0;k<firstWord.length;k++){
        if(k !== j && firstWord[k] === firstWord[j]) {
          firstRepeats.push(firstWord[k]);
        }
      }
  }
  
  

  for(i=1; i<arr.length; i++) {
  var word = arr[i];
    for(l=0;l<word.length;l++) {
      for(k=0;k<word.length;k++){
        if(k !== l && word[k] === word[l]) {
          repeats.push(word[k]);
        }
     if(repeats.length>firstRepeats.length) {
          firstRepeats = repeats;
          result = word;
        }
      
        
      }
      
    }
  }
  if(firstRepeats.length === 0) {
    return -1;
  }
    return result;

}
