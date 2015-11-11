function NumberSearch(str) { 

	var numArr = str.match(/[0-9]+/g);
	var letterArr = str.match(/[a-z]/gi);
 	var sum = numArr.reduce(function(a,b) {
      return Number(a) + Number(b);
    });

  	var divisor = letterArr.length;
  
  	return Math.round(sum/divisor);
         
}
