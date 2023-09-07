## Debounce

### Question

Given a function *fn* and a time in milliseconds *t*, return a debounced version of that function.

A debounced function is a function whose execution is delayed by *t* milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

For example, let's say *t = 50ms*, and the function was called at *30ms*, *60ms*, and *100ms*. The first 2 function calls would be cancelled, and the 3rd function call would be executed at *150ms*. If instead *t = 35ms*, The 1st call would be cancelled, the 2nd would be executed at *95ms*, and the 3rd would be executed at *135ms*.

The above diagram shows how debounce will transform events. Each reactangle represents 100ms and the debounce time is 400ms. Each color represents a different set of inputs.

Please solve it without using lodash's  *_.debounce()* function.

#### Implementation

*debounce* is a higher-order function that takes two parameters: *fn* (the function to debounce) and *t* (the debounce time in milliseconds).

Inside the *debounce* function, there's a *timer* variable that keeps track of the timer asssociated with the debounced function.

The *return* statement defines an anonymous function that takes any number of arguments using the *...args* syntax. The function will be the debounced version of the original function *fn*.

Within this anonymous function:

- We clear the existing timer using *clearTimeout(timer)* to cancel any previous pending executions of the debounced function.

- We set a new timer using *setTimeout*. This timer will execute the original function *fn* with the provided arguments (*args*) after the specified debounce time *t*.

The *apply* method is used to call the original function *fn* with the correct context (*this*) and the passed arguments *args*.

In the exapmle usage, *dlog* is created as the debounced version of the *log* function. When you call *dlog(1)* and *dlog(2)* with specific delays, the debounced function ensures that the first call is canceled, and only the second call is executed after the specified debounce time. The output includes the time elapsed since the start, along with the provided inputs.

