## Sleep

### Question

Given a positive integer *millis*, write an asychronous function that sleeps for *millis* milliseconds. 

It can resolve any value.

#### Implementation

The *sleep* function takes a positive integer *millis* as an argument and returns a Promise.

Inside the Promise's executor function, *setTimeout* is used to delay the resolutiom of the Promise by *millis* milliseconds.

Once the timeout completes, the Promise resolves with the value of *millis*, which allows you to measure the elapsed time accuractely.

