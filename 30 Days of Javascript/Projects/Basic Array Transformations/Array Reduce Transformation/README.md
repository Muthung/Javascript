## Array Reduce Transformation

### Question 

Given an integer array *nums*, a reducer function *fn*, and an initial value *init*, return a **reduced** array.

A **reduced** array is created by aplying the following operation:
 - *val = fn(init, nums[0])*,*val = fn(val, nums[i])*,*val = fn(val, nums[2])*, ...until every element in the array has been processed.
 The final value of *val* is returned.

If the length of the array is 0, it should return *init*.

Please solve it without using the built-in *Array.reduce* method.

#### Implementation

The *reduceArray* function is defined, which takes three parameters: *nums, fn*, and *init.*
        
- *nums* is the input array of numbers that you want to process.
        
- *fn* is the reducer function that will be applied to each element in the array.
        
- *init* is the initial value that the reduction starts with.

The *result* variable is initialized with the value of *init*. This will be used to accumulate the final result as we iterate through the array.

A *for* loop is used to iterate through each element in the *nums* array.
        
Inside the loop, the *fn* reducer function is called with two arguments: the current accumulated value *result* and the current element in the *nums* array *nums[i]*.
        
The result of this call is assigned back to the *result* variable. This accumulates the effect of the reducer function over the elements of the array.

Once the loop is done, the *result* variable holds the final value after applying the reducer function to all elements in the array.

The function returns the final value of *result*.