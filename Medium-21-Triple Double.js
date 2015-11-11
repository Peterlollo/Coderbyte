function TripleDouble(num1,num2) { 

  var triples = [];
  var doubles = [];
  var answer = 0;
  
  function isTriple (n) {
    n = n.toString().split("");
    for(i=0; i<n.length; i++) {
     if(n[i] === n[i+1] && n[i] === n[i+2]) {
       triples.push(n[i]);
     }
    }
  }
  
  function isDouble (n) {
    n = n.toString().split("");
    for(j=0; j<n.length; j++) {
     if(n[j] === n[j+1]) {
       doubles.push(n[j]);
     }
    }
  }

  isTriple(num1)
  isDouble(num2)
  

  
  
  if(triples.length === 0 || doubles.length === 0) {
    return answer;
  }
  else {
    for(k=0; k<triples.length; k++) {
    	if(doubles.indexOf(triples[k]) !== -1) {
          return 1;
         }
           
    }
    
  }
  
   return answer;      
}
