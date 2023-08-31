## Interval Cancellation

### Question

Given a function *fn*, an array of arguments *args*, and an interval time *t*, return a cancel function *cancelFn*.

The function *fn* should be called with *args* immediately and then called again every *t* milliseconds until *cacleFn* is called at *cancelT* ms.

#### Implementation

The function takes the target function *fn*, its arguments *args*, and the interval time *t* as inputs. It sets up an interval to execute the function repeatedly at the specified interval.

The *cancelFn* function can be used to cancel the interval by clearing it using *clearInterval*.s