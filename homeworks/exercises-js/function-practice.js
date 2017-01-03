// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

window.onload = function() {
  var result = document.querySelector("#output")
  var output;
  var opperator = "lab1";

  var sum1;
  var sum2;

  var avg1;
  var avg2;
  var avg3;

  document.body.addEventListener('click', function(e) {
    sum1 = document.querySelector("#sum1").value
    sum2 = document.querySelector("#sum2").value

    avg1 = document.querySelector("#avg1").value
    avg2 = document.querySelector("#avg2").value
    avg3 = document.querySelector("#avg3").value

    if (e.target.tagName === "LABEL") {
      opperator = e.target.id
    }

    if (e.target.id === "calc") {
      calc(opperator);
    }
  })

  function sum(first, second) {
    output = parseInt(first) + parseInt(second);
  }

  function avg(first, second, third) {
    output = (parseInt(first) + parseInt(second) + parseInt(third)) / 2;
  }

  function calc(opperator) {
    if (opperator === "lab1") {
      sum(sum1, sum2)
    } else if (opperator === "lab2") {
      avg(avg1, avg2, avg3)
    }
    result.innerHTML = output
  }
}




// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.




// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length




// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.




// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.




// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
