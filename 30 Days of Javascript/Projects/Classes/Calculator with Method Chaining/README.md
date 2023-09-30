## Calculator with Method Chaining

### Question

Design a *Calculator* class. The class should provide the mahematical operations of addition, substraction, multiplication, divisin, and exponentiation. It should also allow consecutive operations to be performed using method chaining.

The *Calculator* class constructor should accept a number which serves as the initial value of *result*.

Your *Calculator* class should have the following methods:

 1.

**add** -  This method adds the given number *value* to rhe *result* and returns the updated *Calculator*.

 2.

**substract** - This method subtracts the given number *value* from the *result* and returns the updated *Calculator*.

 3.

**multiply** - This method multiplies the *result* by the given number *value* and returns the updated *Calculator*.

 4.

**divide** - Thi method divides the *result* by the given number *value* and returns the updated *Calculator*. If the passed value is *0*, an error *"Division by zero is not allowed"* should be thrown.

 5. 

**power** - This method raises the *result* to the power of the given number *value* and returns the updated *Calculator*.

 6.

**pgetResult** - This method returns the *result*.

Solutions within *10^-5* of the actual result are considered correct.


#### Implementation

The class *constructor* acccepts an initial value and sets it as the starting result. Then, it defines six methods: *'add', 'substact', 'multiply', 'divide', 'power', and 'get result'*.

The *'add', 'subtract', 'multiply' and 'divide'* methods take a numeric value as an argument, perform the corresponding operation on the result, and return the updated Calculator object, allowing for method chaining.

In the case of division, it checks if the divisor is zero and throws an error if so.

The *'power'* method raises the result to the power of the given value and also returns the updated Calculator object for method chaining.

The *'getResult"* method simply returns the current result.

To use the Calculator class, you create an instance with an initial value and then chain the desired operations together using the provided methods.

