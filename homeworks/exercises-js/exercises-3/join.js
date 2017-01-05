var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ['this', 'is', 'a', 'collection', 'of', 'words'];

function joinArr(arr1, arr2) {
  var newArr = arr1.concat(arr2)
  console.log(newArr);
}

joinArr(numbers, strings);
