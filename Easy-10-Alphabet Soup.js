function AlphabetSoup(str) { 

  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var strArr = str.toLowerCase().split("");
  var strArrSort = strArr.sort(function(a,b){return alpha.indexOf(a) - alpha.indexOf(b)});
  return strArrSort.join("");

}
