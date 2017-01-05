var strings = ['this', 'is', 'a', 'collection', 'of', 'words'];

function largestString(strArr) {
  var longest = strArr[0];
  var i = 0;
  while (i < strArr.length) {
    strArr.forEach(function(str) {
      if (str.length >= longest.length) {
        longest = str;
      }
    })
    i += 1;
  }
  console.log(longest);
}

largestString(strings);
