## Execute  Asynchronous Functions in Parallel.

### Question

Given an array of asynchronous functions *functions*, return a new promise *promise*. Each function in the array accepts no arguments and returns a promise.

*promise* resolves:

When all the promises returned from *functions* were resolved successfully. The resolved value of *promise* should be an array of all the resolved values of promises in the same order as they were in the *functions*.

*promise* rejects:

When any of the promises returned from *functions* were rejected. *promise* should also reject with the reason of the first rejection.

Please solve it without using the built-in *Promise.all* function.

#### Implementation

Create a new Promise that will be resolved or rejected based on the results of the asynchronous functions.

Initialize an array *results* to store the resolved values of promises and variables to keep track of the number of resolved promies (*resolvedCount*) and whether any promise has been rejected (*rejected*).

Inside the loop, executes each function and attach *.then()* and *.catch()* handlers to handle resolution and rejection of promises. If any promise is rejected, set the *rejected* flag to *true* and reject the main promise with the same error.

Use the *checkAllResolved* function to check if all promises have been resolved. When *resolvedCount* equals the length of the *functions* array, resolve the main promise with the *results* array.