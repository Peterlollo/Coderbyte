function PrimeMover(num) { 
var primeArr = [];
  
  function isPrime(num) {
    for(i=2; i < num; i++) {
      if(num%i === 0) {
        return false;
      }
    }
    return true;
  }
  
  var cur = 2;
  
  while(primeArr.length < num) {
    if(isPrime(cur)) {
     primeArr.push(cur); 
    }
    cur++
  }
  
  return primeArr.pop();
  
  
  
  
}
