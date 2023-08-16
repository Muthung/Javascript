## To Be Or Not To Be

### Question

Write a function *except* that helps developers test their code. It should take in any value *val* and return an object with the following two functions.

1. *toBe(val)* accepts another value and return *true* if the two values    *===* each other. If they are not equal, it should throw an error *"Not To Be"*.

2. *notToBe(val)* accepts another alue and returns *true* if the two values *!==* each other. If they are equal, it should throw an error *"Equal"*.

#### Implementation

The *expect* function is defined, which takes a single argument *val.* This argument represents the value that you want to perform comparisons on.

Inside the *expect* function, an object is returned. This object contains two functions: *toBe* and *notToBe*.

The *toBe* function is a method of the returned object. It takes a single argument *compareVal*, which is the value you want to compare val with.

In the *toBe* function:

If *val* is equal to *compareVal*, it returns an object with a property *"value"* set to *true*. This indicates that the comparison was successful.
        
If *val* is not equal to *compareVal*, it throws an error with the 
message *"Not Equal"*.

The *notToBe* function is another method of the returned object. Like *toBe,* it takes a single argument *compareVal* to perform the comparison.

In the *notToBe* function:

If *val* is not equal to *compareVal*, it returns an object with a property *"value"* set to *true*. This indicates that the comparison was successful.
        
If *val* is equal to *compareVal*, it throws an error with the message *"Equal"*.