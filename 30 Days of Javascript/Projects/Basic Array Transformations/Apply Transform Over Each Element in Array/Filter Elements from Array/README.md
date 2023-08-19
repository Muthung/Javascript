## Filter Elements from Array

### Question

Given an integer array *arr* and a filtering function *fn*, return a filtered array *filteredArr*.

The *fn* functon takes one or two arguments:

*arr[i]* - number from the *arr*.
*i* - index of *arr[i]*

*filteredArr* should only contain the elements from *arr* for which the expansion *fn(arr[i], i)* evaluates to a truthy value. A truthy value is a value where *Boolean(value)* returns *true*.

Please solve it without the built-in Array.filter method.

#### Implementation

