## Array Prototype Last

### Question

Write code that enhances all arrays that you can call the *array.last()* method on any array and it will return the last element. If there are no elements in the array, it should return *-1*.

You may assume the array is the output of *JSON.parse*.

#### Implementation

A custom method called *last* on the *Array.protorype*. This allows us to use *last()* on any array instance in Javascript.

Inside the *last* method, it check if the array's length is zero. If it is, it returns -1 to indicata that the array is empty.

If the array is not empty, it returns the last element of the array using *this.length - 1* to access the last index.
