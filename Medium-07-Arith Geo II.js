function ArithGeoII(arr) { 
if(arr.length<3) {
  return -1
}
  var arith = arr[1] - arr[0];
  var geo = arr[1]/arr[0];

  
  function arithTest(arr) {
    for(i=0;i<arr.length-1;i++) {
  if(arr[i+1] - arr[i] !== arith){
    return false;
}     
}
     return true;  
  }

    function geoTest(arr) {
    for(i=0;i<arr.length-1;i++) {
  if(arr[i+1]/arr[i] !== geo){
    return false;
}     
}
     return true;  
  }
  
  if(arithTest(arr)) {
    return "Arithmetic";
  }
  if(geoTest(arr)) {
    return "Geometric";
  }
  return -1;
}
