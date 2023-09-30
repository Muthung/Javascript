## Array Wrapper

### Question

Create a class *ArrayWrapper* that accepts an array of integers in list constructor. This class should have two features:

1.

When two instances of this class are added together with *+* operator, the resulting value is the sum of all the elements in both arrays.

2. 

When the *String()* function is called on the instance, it will return a comma separated string surrounded by brackets. 

For example: *[1,2,3]*.

#### Implementation

This involves creating a constructor that accepts an array of integers as its input.

The *valueOf* method is responsible for adding two instances of *ArrayWrapper*. It uses the *reduce* function to iterate through the array of integers, summing them up, and returning the result.

The *toString* method converts the array of integers into a string representation where thr integers are comma-separated and suroounded by square brackets. It achieves this by using *joi* to concatenate the integers with commas and adding brackets manually.

