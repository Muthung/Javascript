## Counter

### Question

Given an integer *n*, return a *counter* funtion.

This *counter* function initally return *n* and then return 1 more than the previous value every subsequent time it is called *(n, n + 1, n + 2,* etc).

#### Implementation

**createCounter** is a function that takes an inital state value *n* and returns a new function.

Inside **createCoounter**, a variable *count* is initialized with the value of *n*.

The returned function is an anonymous function defined inside **createCounter**. When this returned function is called, it returns the current value of *count* and then increment it.

The closure ensures that the *count* variable retains its state between calls to the counter function, allowing the counter to increase with each subsequent call.
