function DivisionStringified(num1,num2) { 
var divided = Math.round(num1/num2).toString();
  
  var arr = divided.split("");
  if(divided>=1000) {
   for(i=arr.length -3;i>0;i-=3) {
    arr.splice(i,0,","); 
   }
  }
  
  return arr.join("");

}
