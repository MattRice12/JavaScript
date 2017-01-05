var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];

function largestNum(numArr) {
  var largest = numArr[0];
  var i = 0;
  while (i < numArr.length) {
    numArr.forEach(function(num) {
      if (num >= largest) {
        largest = num;
      }
    })
    i += 1;
  }
  console.log(largest);
}

largestNum(numbers);
