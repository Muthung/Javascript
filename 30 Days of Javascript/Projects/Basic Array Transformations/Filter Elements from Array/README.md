## Filter Elements from Array

### Question

Given an integer array *arr* and a filtering function *fn*, return a filtered array *filteredArr*.

The *fn* functon takes one or two arguments:

*arr[i]* - number from the *arr*.
*i* - index of *arr[i]*

*filteredArr* should only contain the elements from *arr* for which the expansion *fn(arr[i], i)* evaluates to a truthy value. A truthy value is a value where *Boolean(value)* returns *true*.

Please solve it without the built-in Array.filter method.

#### Implementation

The *filter* function iterates through the input array *arr* and applies the given filtering function *fn* to each element. 

If the result of the filtering function is truthy (i.e., *Boolean(value)* returns *true*), the element is added to the *filteredArr*. Otherwise, it is skipped.