//With Recursion
var wordCount = function (sen) {
  if(sen.length === 0) {
    return 0;
  }
  sen = sen.split(' ');
  var count = 0;
  sen.pop();
  count++;
  sen = sen.join(' ');
  return count += wordCount(sen);
}

//Without Recursion
function WordCount(str) { 
return str.split(" ").length;
        
}
