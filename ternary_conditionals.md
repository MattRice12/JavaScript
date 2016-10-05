var isArthur = true;
var isKing = false;
var isArcher = true;
var weapon;
var helmet;

# Traditional Conditional
  if(isArthur){
    weapon = "Excalibur";
  } else {
    weapon = "Longsword";
  }

# Ternary Conditional
  var weapon = isArthur ? "Excalibur" : "Longsword";

# Concatonating
  console.log("Current weapon: " + (isArthur ? "Excalibur" : "Longsword"));

  isArthur && isKing ? alert("Hail Arthur, King!") :
                       alert("Charge on!");

# Ternary with Functions
  isArthur && isKing ? function (){
                           alert("Hail Arthur, King!");
                           console.log("Current weapon:  Excalibur");
                       }()
                       :
                       function () {
                           alert("Charge on!, ye Knight");
                           console.log("Current weapon: Longsword");
                       }();

# Ternary with Variables
isArthur && isKing ? (weapon = "Excalibur", helmet = "Goosewhite")
                     :
                     (weapon = "Longsword", helmet = "Iron Helm");

# Ternary within Ternary
isArthur && isKing ? (weapon = "Excalibur", helmet = "Goosewhite")
                     :
                     isArcher ? (weapon = "Longbow", helmet = "Mail Helm")
                              : (weapon = "Longsword", helmet = "Iron Helm");

.
