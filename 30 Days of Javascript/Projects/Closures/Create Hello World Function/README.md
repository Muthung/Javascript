## Create Hello World Function

### Question

Write a function *createHelloWorld*.
It should return a new function that always return *"Hello Wolrd"*.

#### Implementation

The **createHelloWorld** function is a higher-order function that return another function. It takes no arguments and returns another function.

The returned funcion, which has no name, is defined using an anonymous function expression, inside the returned function, there is a single line of code that simply returns the string **"Hello World"**.