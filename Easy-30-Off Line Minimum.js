function OffLineMinimum(strArr) { 

  var numArr = [];
  var eArr = [];
  var answerStr = "";
  var result = "";
  
  for(i=0;i<strArr.length;i++) {
  
    if(strArr[i].match(/[0-9]/)) {
    numArr.push(strArr[i]); 
   } 
    
    else {
  eArr.push(strArr[i]);
     numArr.sort(function(a,b){return Number(a) - Number(b)});
     answerStr += numArr.shift() + ",";
   }
  }


  return answerStr.substr(0,answerStr.length-1);
}

//Alternate Solution

function OffLineMinimum(strArr) { 
var answerArr = []
var numArr = []
var lowest = 10;
var lowestInd = 0;
 for(i=0;i<strArr.length;i++) {
   if(strArr[i].match(/[0-9]/)) {
     numArr.push(strArr[i]);
} else {
  for(j=0;j<numArr.length;j++) {
    if(numArr[j] < lowest) {
      lowest = numArr[j];
      lowestInd = numArr.indexOf(lowest);
    }
  }
    answerArr.push(lowest);
    numArr.splice(lowestInd,1);
    lowest = 10;
  }

 }
  return answerArr.join(",");
 }  
