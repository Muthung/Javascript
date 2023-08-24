## Allow One Function Call

### Question

Given a function *fn*, return a new function that is identical to the original function except that it ensures *fn* i called at most once.

- The first time the returned function is called, it should return the same result as *fn*.

- Every subsequent time it is called, it should return *undefined*.

#### Implementation

The function takes another function *fn* as an argument and returns a new fuction. Thi new function, when called, first checks if *fn* has been called before (*called* flag).

If it hasn't been called, it invokes *fn* with the provided arguments and stores the result. On subsequent calls, since *fn* ha already been called, it returns *undefined*.

The provided *calls* array conatins sets of argumentss that you want to pass to *onceFn*. The loop iterates though these arguments, calls *onceFn* with each set, and if the returned value is not *undefined*, it constructs the desired output format and adds it to the *results* array.
