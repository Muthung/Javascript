## Promise Time Limit

### Question

GIven an asynchronous function *fn* and a time *t* in milliseconds, return a new time limited version of the input function.

*fn* takes arguments provided to the time limited function.

The time limited function should follow these rules:

- If the *fn* completes within the time limit of *t* milliseconds, the time limited function should resolve with the result.

- If the execution of the *fn* exceeds the time limit, the time limited function should reject with the string *"Time Limit Exceeded"*.

#### Implementation

The *timeLimit* function takes the original asynchronous function *fn* and a time limit *t* as parameters.

It returns a new asynchronous function that uses *Promise.race* to race between the original function execution and a timer.

If *fn* completes within the time limit, it resolves with the result of *fn*.

If *fn* execution exceeds the time limit, it rejects with the string *"Time Limt Exceeded"*.