Program Load Order

Declared stuff that needs space in memory is first hoisted to the top scope before any operational code is run.

# Order
1) Variable declarations (e.g., var beach;)
2) Function declarations (e.g., function beachBall() ...)
3) Everything else

var _thing_ = undefined
  variables are hoisted to the top and set as undefined

function thing()
  functions get hoisted up next

calls

# To avoid errors
Declare variables first
  They start off undefined, but because you define them at the top, they immediately get defined

Executions last

____ OR ____

Don't declare variables
Just use functions
.... :/
