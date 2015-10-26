function PrimeTime(num) { 
if(num<10) {
  if(num !==2 && num !==3 && num !=5 && num !==7) {
  return false;
} else {
  return true;
}
}
  
  for(i=2;i<10;i++) {
    if(num%i === 0) {
      return false
    }
  }
    return true;
         
}

