function ThreeFiveMultiples(num) { 

  var multiples = [];
  for(i=1; i<num; i++) {
    if(i* 3 < num) {
      multiples.push(i*3);
    }
    if(i*5 < num) {
      multiples.push(i*5);
    }
  }
  if(multiples.length<1) {
    return 0;
  }
  else {
    return multiples.reduce(function(a,b) {
      return a + b;
    });
  }
         
}
