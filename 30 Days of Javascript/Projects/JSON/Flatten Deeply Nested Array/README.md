## Flatten Deeply Nested Array

### Question

Given a **multi-dimensional** array *arr* and a depth *n*, return a flattened version of that array.

A **multi-dimensional** array is a recursive data structure that contains integers or other **multi-dimensional** arrays.

A **flattened** array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in the sub-array. This flattening operation should only be done if the current depth of nesting is less than *n*. The depth of the elements in the first array are considered to be *0*.

Please solve it wihout the built-in *Array.flat* method.

#### Implementation

The *flat* function takes an input multi-dimensional array *arr* and a depth *n*. It recursively flattens the array up to the specified depth while preserving the original structure for deeper levels.

If the depth is zero, it returns the original array. Otherwise, it iterates through the elements of the array and recursively flattens subarrays if the depth allows.

The spread operator ('...') is used to merge arrays while flattening, and the flattened result is returned.