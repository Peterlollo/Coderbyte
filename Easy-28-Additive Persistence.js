function AdditivePersistence(num) { 

  var total = 0;
  
  function add(number) {
   if(number<10) {
     return total;
   } 
    number = number.toString().split("").reduce
    (function(a,b) {return Number(a) + Number(b)});
    total++;
    return add(number);
  }
  
   return add(num);

}
