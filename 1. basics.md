# Variables
Initialize variables with *var* --- when changing the variable later, you don't have to say *var* again.

Increaasing a variable by 1: * thisVariable++
n++   ====   n += 1   ====   n = n + 1

_______________________________________
## Methods:
* .length --> returns length of string
* .charAt(n) --> returns character at that index
* console.log() --> prints to console

_______________________________________
## Scripts
<script src = "File.js"></script>

_______________________________________
## Loops

* while loop
var n = 1;
while( n <= 8){
  console.log("Number:" + n + " does stuff");
  n++;
}


* for loop
for(var thing = 1; thing < 10; thing++) {
  console.log("Number: " + thing)
}

_______________________________________
## Alerts

alert() --> true/false
prompt() --> gets user input
  var userName = prompt("Input your name: ");
confirm() --> true/false

_______________________________________
## Functions

function thisThing(){
  code
};


_______________________________________
## Arrays

var lets = ["a", "b", "c", "d", "e", "f", "g"]
lets[0] #=> "a"
lets[5] #=> "f"

lets[2] = "yay"
lets #=> ["a", "b", "yay", ...]

lets.push("f") #=> appends "f"

.push() --> adds to the end
.pop() --> takes from the end
.shift() --> takes from the start

_______________________________________
## Loops in Arrays

var evenCount = 0;
for (var i = 0; i < numberList.length; i++) {
  if (numberList[i] % 2 == 0) {
    evenCount++;
  } else {
    numberList[i] = undefined;
  }
}

_______________________________________
















/
