## Couter II

### Question

Write a function *createCounter*. It should accept an initial integer *init*. It should return an object with three functions.

The three functions are :
    
- *increment()* increases the current value by 1 and then return it.

- *decrement()* reduces the current value by 1 and then returns it.

- *reset()* sets the current value yo *init* and then return it.

#### Implementation

The *createCounter* function takes an initial integer init as its parameter.

Inside the *createCounter* function, it define a local variable *currentValue* and initialize it with the init value passed as an argument.

Next, it defines three inner functions within the *createCounter* function scope: i*ncrement, decrement, and reset*.

The *increment* function increments the *currentValue* by 1 and then returns the updated value.

The *decrement* function decrements the *currentValue* by 1 and then returns the updated value.

The *reset* function sets the *currentValue* back to the initial value (*init*) and then returns the updated value.

Finally, the *createCounter* function returns an object containing these three functions: *increment, decrement, and reset*.