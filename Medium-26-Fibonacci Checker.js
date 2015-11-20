function FibonacciChecker(num) { 
  
  var fib = [0,1];
  var cur = 1;
  
  function isFib (n) {
    if(fib[fib.length-1] + fib[fib.length-2] === n) {
      return true;
    }
    return false;
  }
  
  while(fib.length <= num + 1) {
    if(isFib(cur)) {
      fib.push(cur);
    }
    cur++;
  }
 
  var answer = fib.filter(function(a) {
    return a === num;
  });
  
  if(answer.length === 0) {
    return "no"
  }
  return "yes";
                          
}
