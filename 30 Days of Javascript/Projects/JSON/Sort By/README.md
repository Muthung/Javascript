## Sort By

### Question

Given an array *arr* and a function *fn*, return a sorted array *sortedArr*. You can assume *fn* only returns numbers and those numbers determine the sort order of *sortedArr*. *sortedArr* must be sorted in **ascending order** by *fn* output.

You may assume that *fn* will erver duplicate numbers for a given array.

#### Implementation

Defined a function *sortBy* that takes an array *arr* and a sprting fuction *fn* as parameters. Inside *sortBy*, it uses the *Array.prototype.sort()* method to sort the *arr* array. The *sort* method accepts a custom comparator function that compares elements based on the values returned by *fn*.

In the custom comparator function, it calculates the values returned by *fn* for elemets *a* and *b* using *fn(a)* and *fn(b)*. Then compates these values and return -1 if *a* should come before *b*, 1 if *b* should come before *a*, and 0 if they are equal in terms of sorting.

