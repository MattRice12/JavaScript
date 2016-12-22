window.onload = function () {
  document.body.addEventListener('click', function(e) {
    input += (e.target.id);
    console.log(input);
    console.log(eval(input));
    calc();
  });

  var result = document.querySelector('#output');
  var input = "";
  var clear = document.querySelector('#clear');

  function calc() {
    if (input.value === '') {
      result.innerHTML = 0;
    } else {
      result.innerHTML = eval(input);
    }
  }
}
