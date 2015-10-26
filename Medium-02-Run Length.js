function RunLength(str) { 
var count = 1;
  var result = "";
  for(i = 0; i<str.length; i++) {
    if( str[i] === str[i+1]) {
      count ++;
    } else {
      result += count + str[i];
      count = 1;     
}
  }
  return result;
}




//Alternate Solution

function RunLength(str) { 

  var repeats = [];
  var answer = "";
  str = str.toLowerCase().split(" ").join("");

    for(i=0; i < str.length; i++) {
      
      if(i === str.length-1) {
        if(str[i] === str[i-1]) {
          answer += repeats.length + 1 +str[i];
        }
        else {
          answer += 1 + str[i];
        }
      }
    else if(str[i+1] === str[i]) {
      repeats.push(str[i]); 
     } 
      else {
       if(repeats.length === 0) {
         answer += 1 + str[i];
       } 
       else {answer += repeats.length + 1 + str[i];
        repeats = [];
            }
       }
    }
return answer;
  
         
}
