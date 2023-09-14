## Chunk Array

### Question

Given an array *arr* and a chunk size *size*, return a **chunked** array. A **chunked** array contains the original elements in *arr*, but consists of subarrays each of length *size*. The length of the last subarray may be less than *size* if *arr.length* is not evenly divisible by *size*.

You may assume the array is the output of *JASON.parse*. In other words, it is valid JSON.

Please solve it without using lodash's *_.chunk* function.

#### Implementation

It :

checks if the *size* is greater than 0 to ensure it's a valid chunk size.

Iniatizes an empty array *chunkedArray* to store the subarrays.

Uses a *while* loop to iterate through the input array (*arr*) until we've processed all elements.

Inside the loop, uses the *slice* method to create a subarray of the specified size starting from the current *index*, and pushes this subarray into *chunkedArray*.

Then increments the *index* by the specified *size* to move to the next chunk.

Returns the *chunkedArray* containing all the subarrays.