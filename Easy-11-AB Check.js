function ABCheck(str) { 

  string = str.toLowerCase();
  return string.match(/a...b/g) || string.match(/b...a/g) ? true: false;

}
