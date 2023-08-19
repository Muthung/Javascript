## Apply Transform Over Each Element in Array

### Question

Given an iteger array *arr* and a mapping function *fn*, return a new array with a transformation applied to each element.

The returned array should be created such that *returnedArray[i] = fn(arr[i], i)*.

Please solve it without the built-in *Array.map* method.

#### Implementation

The *map* function is designed to transform an input array *arr* based on a provided transformation function *fn*. The goal is to create a new array where each element is the result of applying the transformation function to the corresponding element of the original array, possibly along with its index.

Inside the *map* function:

A new empty array called *newArray* is initialized. This array will eventually store the transformed elements.

A *for* loop is used to iterate through each element of the input array *arr*. The loop runs from index *0* to *arr.length - 1*, effectively processing each element.

Within the loop, the transformation function *fn* is invoked for the current element of *arr*. The result of this function call is the transformed value. If the transformation function takes two arguments (the element itself and its index), both values are provided as arguments when invoking the function.

The transformed value obtained from the transformation function is then added to the *newArray* using the *push* method. This accumulates the transformed values as the loop iterates.

Once the loop completes, the *newArray* contains all the transformed elements in the same order as the original array.

Finally, the *map* function returns the *newArray*, which now holds the results of applying the transformation function to each element of the input array.
