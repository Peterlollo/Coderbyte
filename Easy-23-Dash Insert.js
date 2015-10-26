function DashInsert(str) { 
var arr = str.split("");
result = "";
  
  for(i=0;i<arr.length-1;i++) {
    if(Number(arr[i+1])%2 !==0 && Number(arr[i])%2!==0) {
     result += arr[i] + "-";
    } else {
      result +=arr[i];
    }
  }
  
  return result;
      
}
