function MultiplicativePersistence(num) { 

  var total = 0;
  
  var mult = function (n) {
    if(n<10) {
      return total;
    }
    total ++;
    n = n.toString().split("").reduce(function(a,b){return Number(a) * Number(b)});
    return mult(n)
  }
  
 return mult(num);
  
    
}
