## Function Composition

### Question

Given an array of functions *[f1, f2, f3, ..., fn]*,
return a new function *fn* that is the **function composition** of the array of functions.

The *function composition of *[f(x), g(x), h(x)] is fn(x) = f(g(h(x)))*.

The **function composition** of an empty list of functions is the **identify function** *f(x) = x*.

You may assume each function in the array accepts one integer as input and returns one integeras output.

#### Implemenatation

The *compose* function is declared using the *var* keyword and takes an array of functions named *functions* as its parameter.

Inside the *compose* function, another function is returned. This returned function represents the composed function that takes an argument *x*.

The inner function uses a *for* loop to iterate through the array of functions in reverse order. Starting from the last function and moving towards the first one, each function in the array is applied to the current value of *x*.

The value of *x* is updated with the result of applying the current function to it.

After looping through all the functions in reverse order, the inner function returns the final value of *x*, which is the result of applying all the functions in the array in right-to-left order.