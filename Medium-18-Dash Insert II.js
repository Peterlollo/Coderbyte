function DashInsertII(num) { 

  num = num.toString().split("");
  var answer = "";
  for(i=0; i<num.length; i++) {
    if((Number(num[i])%2 !==0) &&
       (Number(num[i+1])%2 !==0) &&
       (num[i+1]!== undefined)) {
      answer += num[i] + "-";
	}
    else if((Number(num[i])%2 ===0) &&
            (Number(num[i+1])%2 ===0) &&
            (Number(num[i]) !== 0) &&
            (Number(num[i+1]) !==0)&&
            (num[i+1]!== undefined)) {
      answer += num[i] + "*";
    }
    else {
      answer += num[i];
    }
  }
  return answer;
}
