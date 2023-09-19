## Group By

### Question

Write code that enhances all arrays such that you can call the *array.groupBy(fn)* method on any array andit will return a **groouped** version of the array.

A **grouped** array is an object where each key is the output of *fn(arr[i])* and each value is an array containing all items in the original array with that key.

The provided callback *fn* will accept an item in the array and return a string key.

The order of each valuea list should be thr order the item appear in the array. Any order of kes is acceptable.

Please solve it without lodash's *_.groupBy* function

#### Implementation

s