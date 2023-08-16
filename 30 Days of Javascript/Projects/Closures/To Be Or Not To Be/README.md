## To Be Or Not To Be

### Question

Write a function *except* that helps developers test their code. It should take in any value *val* and return an object with the following two functions.

1. *toBe(val)* accepts another value and return *true* if the two values    *===* each other. If they are not equal, it should throw an error *"Not To Be"*.

2. *notToBe(val)* accepts another alue and returns *true* if the two values *!==* each other. If they are equal, it should throw an error *"Equal"*.

#### Implementation

