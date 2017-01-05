var strings = ['this', 'is', 'a', 'collection', 'of', 'words'];

function findIs(strArr) {
  isArr = [];
  strArr.forEach(function(str) {
    if (str.includes("is")) {
      isArr.push(str);
    }
  })
  console.log(isArr);
}

findIs(strings);
