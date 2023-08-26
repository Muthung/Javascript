## Add Two Promises

### Question

Given two promises *promise1* and *promise2*, return a new promise.

*promise1* and *promise2* will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

#### Implementaion

The function takes two promises, *promise1* and *promise2*, as input.

Inside the function, it uses *Promise.all* to wait for both promises to resolve. This ensures that we gather the resolved values from both promises simultaneously.

The resolved values from the promises are stored in the *result1* and *result2* variables.

The sum of the two resolved values is calculated and stored in the *sum* variable.

Finally, a new promise is returned using *Promise.resolve*, which resolves with the calculated sum.