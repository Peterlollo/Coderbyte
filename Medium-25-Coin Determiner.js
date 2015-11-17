function CoinDeterminer(num) { 

  var coins = [11, 9, 7, 5, 1];
  var count = 0; 
  var sum = 0;

  
  function agg (sum, num, start) {
    for(i=start; i<coins.length; i++)
      if(num-sum === 0) {
        return count;
      }
      else if(num - sum >= coins[i]) {
      sum = sum + coins[i];
      count++;
      return agg(sum, num, start);
      }
    
  }
  
  
  var test0 = agg(sum, num, 0);
 
  var test1 = agg(sum, num, 1);
  var test2 = agg(sum, num, 2);
  var test3 = agg(sum, num, 3);
  var test4 = agg(sum, num, 4);
  
   var results = [test0, test1, test2, test3, test4];
  
  return results.reduce(function (a,b){
    return Math.min(a,b);
  })
  
     
}
