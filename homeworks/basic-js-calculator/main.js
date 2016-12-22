window.onload = function () {
  var result = document.querySelector('#output');
  var input = "";
  var output = 0;
  var num = [];

  document.body.addEventListener('click', function(e) {
    input += e.target.id;
    num = input.split(/[+-/*]/)
    checkClear(input, num, e)
    console.log(input);
    mathMatics(num);
    calc();
  });

  function checkClear(input, num, e) {
    if (e.target.id === "ac") {
      allClear()
    } else if (e.target.id === "clear") {
      numLength(num)
    }
  }

  function numLength(num) {
    if (num.length < 2) {
      input = "";
    } else {
      input = input.substring(0, input.length - 6)
    }
  }

  function allClear() {
    input = input.substring(0, input.length - 6)
  }

  function mathMatics(num){
    var opp = ["+", "-", "*", '/']
    opp.forEach(function (o) {
      if (input.includes(o) && num.length === 2) {
        switch(o) {
          case "+":
            output = parseInt(num[0]) + parseInt(num[1])
            break
          case "-":
            output = parseInt(num[0]) - parseInt(num[1])
              break
          case "*":
            output = parseInt(num[0]) * parseInt(num[1])
              break
          case "/":
            output = parseInt(num[0]) / parseInt(num[1])
        }
      }
    });
  }

  function calc() {
    if (input === "") {
      result.innerHTML = 0;
    } else {
      if (input.includes("=") === false) {
        result.innerHTML = input;
      } else {
        result.innerHTML = output;
        input = output;
      }
    }
  }
}
