function BracketMatcher(str) { 

 var arr = str.match(/["("]/g);
  var revArr = str.match(/[")"]/g);
  if(arr.length === 0 && revArr.length === 0) {
    return 0
  }
  else if(revArr.length === arr.length) {
    return 1;
  }
  else {
    return 0;
  }
         
}
