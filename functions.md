## Declared Functions
  Functions that are built at program load time:
  You can use the function before you declare it

  E.g., diffOfSquares(1, 2);

        function diffOfSquares(a, b) {
          return (a*a - b*b);
        }


## Function expression
  These functions are built within code execution rather than at program load time.
  These functions are assigned to a variable.
  Anonymous -- These functions don't need a function name.
  You cannot use the function before you create it (they are not hoisted).

  E.g., var diff = function(a, b) {
          return (a*a - b*b);
        };

        diff(1, 2);

#Anonymous Functions
don't need function names when you assign function to a variable
