# Objects:

var object1 = {length: 5, unit: "meter"};

# Dot Notation
  *Modify Properties*
    object1.length += 2
      #=> length: 7

  *Add Properties*
    object1.color = "red"
      #=> color: red

  *Delete Properties*
    delete object1.unit;

# Bracket Notation
  object1["num of vertices"] = 5;

# Object Functionality
  var sports = {
    baseball: {balls: 1, players: 7, fun: "meh"},
    basketball: {balls: 1, players: 7, fun: "yay"},
    soccer: {balls: 1, players: 9, fun: "weee"},
    addSport: function(name, balls, players, fun){
      this[name] = {balls: balls, players: players, fun: fun};
    }
  };

  sports.addSport("Football", 1, 11, "woo");
