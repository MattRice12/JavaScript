function max(first, second) {
  if (first > second) {
    console.log("The largest number is " + first);
  } else {
    console.log("The largest number is " + second);
  }
};

function maxOfThree(first, second, third) {
  var numArr = [first, second, third];
  var largest = first;
  numArr.forEach(function(num) {
    if (num > largest) {
      largest = num;
    }
  })
  console.log(largest);
}

function isVowel(char) {
  var vowelArr = ["a", "e", "i", "o", "u"]
  console.log(vowelArr.includes(char));
}

function translate(string) {
  var newStr;
  nonCons = ["a", "e", "i", "o", "u", " ", ",", "'"]
  stringArr = string.split("")
  newStr = stringArr.map(function(letter) {
    if (nonCons.includes(letter) === false) {
      return letter += "o";
    } else {
      return letter;
    }
  })
  console.log(newStr.join(""))
}

function reverse(string) {
  var strArr = string.split("");
  var revStr = strArr.reverse();
  console.log(revStr.join(""));
}

max(4, 6);

maxOfThree(1, 2, 3)
maxOfThree(3, 2, 1)
maxOfThree(2, 3, 1)
maxOfThree(1, 3, 2)

isVowel("a")
isVowel("b")

translate("hi there I'm Matt")

reverse("hi there I'm Matt")
