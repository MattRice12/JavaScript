var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];

function evens(numArr) {
  var evenArr = [];
  numArr.forEach(function(num) {
    if (num % 2 === 0) {
      evenArr.push(num);
    }
  })
  console.log(evenArr);
}

evens(numbers);
