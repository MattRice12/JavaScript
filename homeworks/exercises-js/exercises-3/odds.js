var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];

function odds(numArr) {
  var oddArr = [];
  numArr.forEach(function(num) {
    if (num % 2 !== 0) {
      oddArr.push(num);
    }
  })
  console.log(oddArr);
}

odds(numbers);
