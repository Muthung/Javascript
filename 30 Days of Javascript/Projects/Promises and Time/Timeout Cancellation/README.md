## Timeout Cancellation

### Question

Given a function *fn*, an array of arguments args, and a timeout t in milliseconds, return a cancel function *cancelFn*.

After a delay of *t*, *fn* should be called with *args* passed as parameters unless *cancelFn* was invoked before the delay of *t* milliseconds elapses, specifically at *cancelT* ms. In that case, *fn* should never be called.

#### Implementation

The *cancellable* function takes three arguments: *fn* (the function to be called), *args* (an array of arguments to pass to the function), and *t* (the delay in milliseconds before calling the function). It returns a cancel function *cancelFn*.

Inside the *cancellable* function, a setTimeout is used to schedule the execution of *fn(...args)* after a delay of *t* milliseconds. The returned timeout ID is stored in the *timeoutId* variable.

The *cancelFn* function, when invoked, cancels the execution of the scheduled function by using *clearTimeout* with the stored *timeoutId*.