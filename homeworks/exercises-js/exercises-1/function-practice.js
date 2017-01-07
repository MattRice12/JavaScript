window.onload = function() {
  var result = document.querySelector("#output")
  var output;
  var opperator;
  var input1;
  var input2;
  var input3;
  var input4;

  document.body.addEventListener('click', function(e) {
    input1 = document.querySelector("[type=radio]:checked ~ .calculator #num1");
    input2 = document.querySelector("[type=radio]:checked ~ .calculator #num2");
    input3 = document.querySelector("[type=radio]:checked ~ .calculator #num3");
    input4 = document.querySelector("[type=radio]:checked ~ .calculator #num4");
    opperator = document.querySelector("[type=radio]:checked ~ label").id

    if (e.target.id === "calc") {
      calc(opperator);
    }
  })


  function sum(first, second) {
    output = parseInt(first) + parseInt(second);
  }

  function avg(first, second, third) {
    output = (parseInt(first) + parseInt(second) + parseInt(third)) / 3;
  }

  function getLength(first) {
    output = first.length  + " characters long.";
  }

  function greaterThan(first, second) {
    output = (parseInt(first) > parseInt(second))
  }

  function greet(first) {
    output = "Hello " + first + "!"
  }

  function madLib(first, second, third, fourth) {
    output = "The " + first + " " + second + " ran to the store to get a large " + third + " and " + fourth + " Jimbo over the head with it."
  }

  function calc(opperator) {
    if (opperator === "lab1") {
      sum(input1.value, input2.value)
    } else if (opperator === "lab2") {
      avg(input1.value, input2.value, input3.value)
    } else if (opperator === "lab3") {
      getLength(input1.value)
    } else if (opperator === "lab4") {
      greaterThan(input1.value, input2.value)
    } else if (opperator === "lab5") {
      greet(input1.value)
    } else if (opperator === "lab6") {
      madLib(input1.value, input2.value, input3.value, input4.value)
    }
    result.innerHTML = output
  }
}


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.


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
